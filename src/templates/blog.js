import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import {header} from './blog.module.scss';

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
                childMarkdownRemark {
                    html
                }
            }
        }
    }
 `

const Blog = (props) => {
    return (
       <Layout>
            <h1 className={header}>{props.data.contentfulBlogPost.title}</h1>
            <h4>{props.data.contentfulBlogPost.publishedDate}</h4>
            <div dangerouslySetInnerHTML={{ __html: props.data.contentfulBlogPost.content.childMarkdownRemark.html}}></div>
       </Layout>
    )
}

export default Blog;