import * as React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import * as styles from "../../styles/Home.module.css"
import { SiteIcons } from '../shared/site-icons';


const Header = ({ user }) => {

    return (
        <header id="header" className={styles.header}>
            <Fade left duration={1000} delay={500} distance="30px">
                <h1 className={styles.title}>
                    Hi, I'm <span style={{ color: 'orange' }}>{user.name.split(' ')[0]}</span>
                </h1>
            </Fade>
            <Fade left duration={1000} delay={1000} distance="30px">
                <div style={{ marginTop: '10px', textAlign: 'left' }}>
                    <span className={styles.description}>
                        {window.innerWidth > 600 ?  user.bio.toUpperCase() : user.bio.split(',').join('\n\n').toUpperCase() }
                    </span>
                </div>
            </Fade>
            <Fade bottom duration={1000} delay={2000}>
                <Link to="about" smooth duration={1000}><SiteIcons.FaAngleDown size={50} style={{marginTop: '10%', cursor: 'pointer' }}/></Link>
            </Fade>
        </header>
    )

}

export default Header;