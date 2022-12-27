import React from "react"
import { Helmet } from "react-helmet";
import './layout.css';


export default function Layout(props) {
    const { children, title, description, author, keywords } = props;
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="author" content={author} />
                <meta name="keywords" content={keywords} />
            </Helmet>
            {children}
        </>
    )
}