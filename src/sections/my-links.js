import * as React from 'react'
import { SiteIcons } from '../components/site-icons'

const iconSize = 36;

const getLinkIcon = (name) => {

    if (name.toLowerCase() === 'github') {
        return <SiteIcons.FaGithub size={iconSize}/>
    } else if (name.toLowerCase() === 'docker') {
        return <SiteIcons.FaDocker size={iconSize}/>
    } else if (name.toLowerCase() === 'email') {
        return <SiteIcons.FaEnvelope size={iconSize}/>
    } else if (name.toLowerCase() === 'blog') {
        return <SiteIcons.FaBlog size={iconSize}/>
    } else if (name.toLowerCase() === 'thingiverse') {
        return <SiteIcons.SiThingiverse size={iconSize}/>
    } else if (name.toLowerCase() === 'linkedin') {
        return <SiteIcons.FaLinkedin size={iconSize}/>
    } 

}

const MyLinks = ({props}) => {
    return (
        <section style={{ textAlign: 'center' }}>
            <h2>My Links</h2>
            <p>
                {
                    props.map(link => <a href={link.url} aria-label={link.name} style={{ margin: '6px' }}>{ getLinkIcon(link.name) }</a>)
                }
            </p>
        </section>
    )
}

export default MyLinks
