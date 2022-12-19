import React from "react"
import { Helmet } from "react-helmet";
import './layout.css';


import { SiteIcons } from './site-icons'

export default function Layout(props) {
    const { children, buildTime, title, description } = props;
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.min.js" integrity="sha512-WJXVjqeINVpi5XXJ2jn0BSCfp0y80IKrYh731gLRnkAS9TKc5KNt/OfLtu+fCueqdWniouJ1ubM+VI/hbo7POQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
                <script src="sketch.js"></script>
            </Helmet>
            <main>
                {children}
            </main>
            <footer
                style={{
                    backgroundColor: 'var(--bg)',
                    color: 'var(--textNormal)',
                    transition: 'color 0.2s ease-out, background 0.2s ease-out',
                }}>
                <div style={{ textAlign: 'center' }}>
                    <SiteIcons.FaTree />&nbsp;<SiteIcons.FaCampground />&nbsp;<SiteIcons.FaBeer />&nbsp;<SiteIcons.FaFish />&nbsp;Bennett Gunson&nbsp;<SiteIcons.FaBiking />&nbsp;<SiteIcons.FaMountain />&nbsp;<SiteIcons.FaCar />&nbsp;<SiteIcons.FaLaptopCode />
                    <br />
                    <small>Last Build: {`${new Date(buildTime).toDateString()}, ${new Date(buildTime).toLocaleTimeString()}`}</small>
                </div>
            </footer>
        </div>
    )
}