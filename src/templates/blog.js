import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';

/**
 * File: blog.js
 * Description: the blog template displays how each blog should look on the 
 *              site. Editing this file will modify how each blog post is displayed
 *              when rendered to the page
 * 
 * Date: 11/22/20
 * 
 */

 export const query = graphql`
    query($slug: String!) {
        contentfulPost(slug: {eq: $slug}) {
            title
            publishDate(formatString: "MMMM Do, YYYY")
        }
    }
 `

const Blog = (props) => {
    return (
       <Layout>
            <h1>{props.data.contentfulPost.title}</h1>
            <p>{props.data.contentfulPost.publishDate}</p>
       </Layout>
    )
}

export default Blog;