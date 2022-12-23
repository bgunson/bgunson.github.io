import * as React from 'react';
import * as styles from '../../styles/Home.module.css';

const devicons = require('./devicon.json');

const ToolkitIcon = ({ tool }) => {

    const icon = devicons.find(i => i.name === tool);
    const defaultVer = icon.versions.font[0];
    const wordmark = icon.versions.font[icon.versions.font.length - 1];


    const [classList, setClassList] = React.useState(defaultVer);
    const [size, setSize] = React.useState(120);
    const [dimensions, setDimensions] = React.useState({ height: `${size * 1.1547}px`, width: `${size}px` });


    const onHover = (enter) => {
        if (enter) {
            setClassList(wordmark);
            setSize(150);
            
        } else {
            setClassList(defaultVer);
            setSize(120);
        }
        setDimensions({ height: `${size * 1.1547}px`, width: `${size}px` });
    }

    return <a href={`https://github.com/topics/${tool}`} onMouseEnter={() => onHover(true)} onMouseLeave={() => onHover(false)} className={styles.tool}><span className={styles.toolicon} dangerouslySetInnerHTML={{ __html: `<i class="devicon-${tool}-${classList} colored"></i>` }}></span></a>

}

export default ToolkitIcon;