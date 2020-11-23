import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

const NotFound = () => {
    return (
        <Layout>
            <h1>Page Not Found</h1>
            <p><Link to="/">Return Home</Link></p>
        </Layout>
    )
}

export default NotFound;