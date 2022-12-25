import * as React from 'react';
import { Link } from 'react-scroll';
import { SiteIcons } from '../shared/site-icons';

const iconSize = 36;

const getLinkIcon = (name) => {

    if (name.toLowerCase() === 'github') {
        return <SiteIcons.FaGithub size={iconSize} />
    } else if (name.toLowerCase() === 'docker') {
        return <SiteIcons.FaDocker size={iconSize} />
    } else if (name.toLowerCase() === 'email') {
        return <SiteIcons.FaEnvelope size={iconSize} />
    } else if (name.toLowerCase() === 'blog') {
        return <SiteIcons.FaBlog size={iconSize} />
    } else if (name.toLowerCase() === 'thingiverse') {
        return <SiteIcons.SiThingiverse size={iconSize} />
    } else if (name.toLowerCase() === 'linkedin') {
        return <SiteIcons.FaLinkedin size={iconSize} />
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

                <Link to="header" smooth duration={1000}><SiteIcons.FaAngleUp size={40} style={{margin: '20px', cursor: 'pointer' }}/></Link>

                <div style={{ display: 'flex', marginBottom: '20px' }}>

                    {
                        links.map(link => <a key={link.name} href={link.url} aria-label={link.name} style={{ margin: '6px' }}>{getLinkIcon(link.name)}</a>)
                    }

                </div>

                <div style={{color: 'grey'}}>
                    <SiteIcons.FaTree />&nbsp;<SiteIcons.FaCampground />&nbsp;<SiteIcons.FaBeer />&nbsp;<SiteIcons.FaFish />&nbsp;Bennett Gunson&nbsp;<SiteIcons.FaBiking />&nbsp;<SiteIcons.FaMountain />&nbsp;<SiteIcons.FaCar />&nbsp;<SiteIcons.FaLaptopCode />
                    <br />
                    <small>Last Build: {`${new Date(lastBuild).toDateString()}, ${new Date(lastBuild).toLocaleTimeString()}`}</small>
                </div>

            </div>

        </footer>
    )

}

export default Footer;