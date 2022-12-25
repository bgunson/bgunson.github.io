import * as React from 'react';
import { SiteIcons } from '../shared/site-icons';
import * as styles from '../../styles/Home.module.css'
import { Flip, Fade } from 'react-reveal';

const About = ({ config, user }) => {

    const about = config.about;
    const [aboutIndex, setAboutIndex] = React.useState(0);
    const [show, setShow] = React.useState(true);

    const aboutChange = (index) => {
        if (index === aboutIndex) return;
        setShow(false);
        setAboutIndex(index);
        setTimeout(() => setShow(true), 750);
    }

    return (
        <section id="about" className={styles.about}>
            {/* <h2>About</h2> */}
            <div className={styles.grid} style={{ gap: '50px' }}>
                <div className={styles.aboutpics}>
                    <div style={{ transform: `rotate(${(Math.random() * (-6) + 3) * 1.5}deg)` }}>
                        <Flip right opposite when={show}>
                            <div className={styles.aboutpic} >
                                <div className={styles.aboutbg} style={{ backgroundImage: `url(${about[aboutIndex].image})` }}></div>
                                <p style={{ fontSize: '30px' }} className={styles.aboutpicname}>{about[aboutIndex].name}</p>
                            </div>
                        </Flip>
                    </div>

                    <div className={styles.aboutpicselect}>
                        {
                            about.map((item, index) => {
                                const activeStyle = index === aboutIndex ? { transform: `scale(1.2) rotate(${(Math.random() * (-12) + 6) * 1.5}deg)` } : { opacity: '0.5' };
                                return <div className={styles.aboutpicsm} style={activeStyle} onClick={() => aboutChange(index)}>
                                    <div className={styles.aboutbg} style={{ backgroundImage: `url(${item.image})` }}></div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ transform: `rotate(${(Math.random() * (-6) + 3) * 1.5}deg)` }}>
                        <Flip left opposite when={show}>
                            <div className={styles.aboutblurb}>
                                <p>{about[aboutIndex].blurb}</p>
                            </div>
                        </Flip>
                    </div>

                    <a href={config.info.resumeURL} className={styles.linkbtn} style={{ width: '100%', textAlign: 'center' }}><SiteIcons.FaFile style={{ verticalAlign: 'middle' }} />&nbsp;&nbsp;Resume</a>
                </div>
            </div>
        </section>
    )

}

export default About;