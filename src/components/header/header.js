import * as React from 'react';
import { Fade } from 'react-reveal';
import * as styles from "../../styles/Home.module.css"
import { FaAngleDown } from 'react-icons/fa';

const Header = ({ user }) => {

    const [bio, setBio] = React.useState();

    React.useEffect(() => {
        setBio(user.bio.toUpperCase());
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 1000) {
                setBio(user.bio.split(',').join('\n').toUpperCase())
            }
        }
    }, [user.bio]);

    return (
        <header id="header" >
            <div className={styles.header}>
                <div className={styles.hero}>
                <h1 className={styles.title}>
                    Hi, I'm <span style={{ color: 'orange' }}>{user.name.split(' ')[0]}</span>
                </h1>
                <Fade left duration={1000} delay={500} distance="30px">
                    <div style={{ marginTop: '10px', textAlign: 'left' }}>
                        <span className={styles.description}>
                            {bio}
                        </span>
                    </div>
                </Fade>
                <Fade bottom duration={1000} delay={1000}>
                    <FaAngleDown size={50} style={{ marginTop: '5%', cursor: 'pointer', }} onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}/>
                </Fade>
                </div>
            </div>
            {/* <div className={styles.abouttop}></div> */}
        </header>
    )

}

export default Header;