import * as React from 'react';
import * as styles from '../../styles/Home.module.css'
import { Flip } from 'react-reveal';


const About = ({ config }) => {

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
        <div>
            <div className={styles.abouttop}></div>

            <section id="about" className={styles.about}>
                <div className={styles.grid} style={{ gap: '50px', justifyContent: 'flex-start' }}>
                    <div className={styles.aboutpics}>
                        <div style={{ transform: `rotate(${(Math.random() * (-6) + 3) * 1.8}deg)` }}>
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
                                    const activeStyle = index === aboutIndex ? { transform: `scale(1.2) rotate(${(Math.random() * (-12) + 6) * 1.5}deg)` } : { opacity: '0.5', transform: `rotate(${(Math.random() * (-12) + 6) * 1.5}deg)` };
                                    return <div key={item.name} className={styles.aboutpicsm} style={activeStyle} onClick={() => aboutChange(index)}>
                                        <div className={styles.aboutbg} style={{ backgroundImage: `url(${item.image})` }}></div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ transform: `rotate(${(Math.random() * (-6) + 3) * 1.8}deg)` }}>
                            <Flip left opposite when={show}>
                                <div className={styles.aboutblurb}>
                                    <p>{about[aboutIndex].blurb}</p>
                                </div>
                            </Flip>
                        </div>
                    </div>

                </div>
                <div style={{ margin: '4rem 0', height: 'auto' }}>
                    <a href={config.info.resumeURL} role="button" className={styles.linkbtn}>View my CV</a>
                </div>
            </section>

            <div className={styles.aboutbottom}></div>
        </div>

    )

}

export default About;