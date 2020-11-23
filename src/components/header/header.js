import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import headerStyles from './header.module.scss';

/**
 * File: header.js
 * Description: the header component controls the header, nav and everything
 *              that is rendered to the header of the page
 * 
 * Date: 11/22/20
 * 
 */

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return(
        <header className={headerStyles.header}>
            <h1 className=""><Link to="/">{data.site.siteMetadata.title}</Link></h1>
        </header>
    )
}

export default Header;