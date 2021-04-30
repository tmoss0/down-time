import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import footerStyles from './footer.module.scss';

/**
 * File: footer.js
 * Description: the footer component controls the footer, nav and everything
 *              that is rendered to the footer of the page
 * 
 * Date: 11/22/20
 * 
 */

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className={footerStyles.footer}>
            {/* <p>{data.site.siteMetadata.author}</p> */}
        </footer>
    )
}

export default Footer;