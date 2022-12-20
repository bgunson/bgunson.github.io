import React from "react"
import { Helmet } from "react-helmet";
import './layout.css';


export default function Layout(props) {
    const { children, title, description } = props;
    return (
        <div>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <main>
                {children}
            </main>
        </div>
    )
}