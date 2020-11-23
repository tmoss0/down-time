import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import layoutStyles from './layout.module.scss';

const Layout = () => {
    return (
        <div className={layoutStyles.container}>
            <Header />

            <Footer />
        </div>
    )
}

export default Layout;