import { OutboundLink } from 'gatsby-plugin-google-gtag';
import * as React from 'react';
import {
    FaGithub,
    FaDocker,
    FaEnvelope,
    FaBlog,
    FaLinkedin,
    FaAngleUp,
    FaTree,
    FaCampground,
    FaBeer,
    FaFish,
    FaBiking,
    FaMountain,
    FaCar,
    FaLaptopCode
} from 'react-icons/fa';
import {SiThingiverse} from 'react-icons/si';

const iconSize = 36;

const getLinkIcon = (name) => {

    if (name.toLowerCase() === 'github') {
        return <FaGithub size={iconSize} />
    } else if (name.toLowerCase() === 'docker') {
        return <FaDocker size={iconSize} />
    } else if (name.toLowerCase() === 'email') {
        return <FaEnvelope size={iconSize} />
    } else if (name.toLowerCase() === 'blog') {
        return <FaBlog size={iconSize} />
    } else if (name.toLowerCase() === 'thingiverse') {
        return <SiThingiverse size={iconSize} />
    } else if (name.toLowerCase() === 'linkedin') {
        return <FaLinkedin size={iconSize} />
    }

}

const Footer = ({ lastBuild, links }) => {

    return (
        <footer
            style={{
                backgroundColor: 'rgb(25, 25, 25)',
                color: 'white',
                border: 'none'
            }}>

            <div style={{ display: 'flex', flex: '1', alignItems: 'center', flexDirection: 'column', textAlign: 'center' }}>

                <FaAngleUp size={40} style={{margin: '20px', cursor: 'pointer' }} onClick={() => document.querySelector('#header').scrollIntoView({ behavior: 'smooth' })}/>

                <div style={{ display: 'flex', marginBottom: '20px' }}>

                    {
                        links.map(link => <OutboundLink key={link.name} href={link.url} aria-label={link.name} style={{ margin: '6px' }}>{getLinkIcon(link.name)}</OutboundLink>)
                    }

                </div>

                <div style={{color: 'grey'}}>
                    <FaTree />&nbsp;<FaCampground />&nbsp;<FaBeer />&nbsp;<FaFish />&nbsp;Bennett Gunson&nbsp;<FaBiking />&nbsp;<FaMountain />&nbsp;<FaCar />&nbsp;<FaLaptopCode />
                    <br />
                    <small>Last Build: {`${new Date(lastBuild).toDateString()}, ${new Date(lastBuild).toLocaleTimeString()}`}</small>
                </div>

            </div>

        </footer>
    )

}

export default Footer;