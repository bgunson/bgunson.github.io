import * as React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-scroll';
import * as styles from "../../styles/Home.module.css"
import { FaAngleDown } from 'react-icons/fa';

const Header = ({ user }) => {

    return (
        <header id="header" className={styles.header}>
            {/* <Fade left duration={1000} delay={500} distance="30px"> */}
                <h1 className={styles.title}>
                    Hi, I'm <span style={{ color: 'orange' }}>{user.name.split(' ')[0]}</span>
                </h1>
            {/* </Fade> */}
            {/* <Fade left duration={1000} delay={1000} distance="30px"> */}
                <div style={{ marginTop: '10px', textAlign: 'left' }}>
                    <span className={styles.description}>
                        { user.bio.toUpperCase() }
                    </span>
                </div>
            {/* </Fade> */}
            <Fade bottom duration={1000} delay={2000}>
                <Link to="about" offset={75} smooth duration={1000}><FaAngleDown size={50} style={{marginTop: '10%', cursor: 'pointer', }}/></Link>
            </Fade>
            {/* <svg className={styles.mountains} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'><rect fill='#FFFFFF00' width='1600' height='900'/><polygon fill='#003366' points='957 450 539 900 1396 900'/><polygon fill='#0070f3' points='957 450 872.9 900 1396 900'/><polygon fill='#00376e' points='-60 900 398 662 816 900'/><polygon fill='#0071f5' points='337 900 398 662 816 900'/><polygon fill='#003b76' points='1203 546 1552 900 876 900'/><polygon fill='#0072f8' points='1203 546 1552 900 1162 900'/><polygon fill='#003f7e' points='641 695 886 900 367 900'/><polygon fill='#0074fa' points='587 900 641 695 886 900'/><polygon fill='#004386' points='1710 900 1401 632 1096 900'/><polygon fill='#0075fd' points='1710 900 1401 632 1365 900'/><polygon fill='#00478e' points='1210 900 971 687 725 900'/><polygon fill='#0076ff' points='943 900 1210 900 971 687'/></svg> */}
        </header>
    )

}

export default Header;