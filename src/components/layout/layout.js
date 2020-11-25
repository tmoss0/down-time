import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import layoutStyles from './layout.module.scss';

/**
 * File: layout.js
 * Description: the layout component is the basic structure of a page 
 * 
 * Date: 11/22/20
 * 
 */

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;