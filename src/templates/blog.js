import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';

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
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            content {
                content
            }
        }
    }
 `

const Blog = (props) => {
    return (
       <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <p>{props.data.contentfulBlogPost.content.content}</p>
       </Layout>
    )
}

export default Blog;