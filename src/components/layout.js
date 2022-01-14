import React from "react"
import './layout.css';

import { SiteIcons } from './site-icons'

export default function Layout({ children }) {
    return (
        <div>
            <head>
                <title>Bennett Gunson | Computer Science student, Software Developer, Outdoorsman</title>
                <meta name="description" content="Get to know me and my recent projects related to software and more."></meta>
            </head>
            <main>
                {children}
            </main>
            <footer 
                style={{
                    backgroundColor: 'var(--bg)',
                    color: 'var(--textNormal)',
                    transition: 'color 0.2s ease-out, background 0.2s ease-out',
                }}>
                Bennett Gunson
                <span>
                    <SiteIcons.FaTree/>&nbsp;<SiteIcons.FaBeer/>&nbsp;<SiteIcons.FaFish/>&nbsp;<SiteIcons.FaBiking/>&nbsp;<SiteIcons.FaMountain/>&nbsp;<SiteIcons.FaCar/>&nbsp;<SiteIcons.FaLaptopCode/>
                </span>
            </footer>
        </div>
    )
}