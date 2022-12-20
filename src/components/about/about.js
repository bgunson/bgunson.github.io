import * as React from 'react';
import Interests from './interests';
import LangChart from './lang-chart';

const About = ({ config, user }) => {
    return (
        <section id="about">
            <Interests interests={config.interests} />
            <LangChart repos={user.repositories} blurbs={config.languages} />
        </section>
    )

}

export default About;