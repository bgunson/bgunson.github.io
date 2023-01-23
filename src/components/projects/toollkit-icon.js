import { OutboundLink } from 'gatsby-plugin-google-gtag';
import * as React from 'react';
import * as styles from '../../styles/Home.module.css';

const devicons = require('./devicon.json');

const ToolkitIcon = ({ tool }) => {

    const icon = devicons.find(i => i.name === tool);
    const defaultVer = icon.versions.font[0];
    const wordmark = icon.versions.font[icon.versions.font.length - 1];


    const [classList, setClassList] = React.useState(defaultVer);


    const onHover = (enter) => {
        if (enter) {
            setClassList(wordmark);
            
        } else {
            setClassList(defaultVer);
        }
    }

    return <OutboundLink aria-label={tool} href={`https://github.com/topics/${tool}`} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} className={styles.tool}><span className={styles.toolicon} dangerouslySetInnerHTML={{ __html: `<i class="devicon-${tool}-${classList} colored"></i>` }}></span></OutboundLink>

}

export default ToolkitIcon;