import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/layout';

/**
 * File: index.js
 * Description: the index page is the main page that all the components
 *              are rendered to
 * 
 * Date: 11/22/20
 * 
 */

const Index = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
                sort: {
                    fields: publishedDate,
                    order: DESC
                    }
                ) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                        content {
                            content
                        }
                        }
                    }
                } 
            }          
    `)

     return (
        <Layout>
            <h1>Welcome to Down Time!</h1>
            <h3>View the most recent post</h3>
            <Link to={`/blog/${data.allContentfulBlogPost.edges[0].node.slug}`}>
                <h3>{data.allContentfulBlogPost.edges[0].node.title}</h3>
            </Link>
            <p>{data.allContentfulBlogPost.edges[0].node.publishedDate}</p>
        </Layout>
    )   
}

export default Index;
