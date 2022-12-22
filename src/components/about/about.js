import * as React from 'react';
import Interests from './interests';
import LangChart from './lang-chart';
import { SiteIcons } from '../shared/site-icons';
import * as styles from '../../styles/Home.module.css'
import { Fade } from 'react-reveal';

const About = ({ config, user }) => {
    return (
        <section id="about" className={styles.about}>
            <Interests interests={config.interests} />
            {/* <LangChart repos={user.repositories} blurbs={config.languages} /> */}
            <Fade slide bottom>
                <a href="bennettgunson_resume.pdf" className={styles.linkbtn} style={{ width: '180px', alignSelf: 'center', textAlign: 'center'}}><SiteIcons.FaFile style={{ verticalAlign: 'middle'}}/>&nbsp;&nbsp;Resume</a>
            </Fade>
        </section>
    )

}

export default About;