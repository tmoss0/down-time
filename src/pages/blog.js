import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout/layout';
import blogStyles from './blog.modules.scss';

/**
 * File: blog.js
 * Description: the blog page renders each blog post using the blog
 *              template created under templates/blog.js
 * 
 * Date: 11/22/20
 * 
 */

const Blog = () => {
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
            <h1>Down Time Articles</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                            </Link>          
                            <p>{edge.node.publishedDate}</p>
                        </li>
                    )
                })}
            </ol>
       </Layout>
    )
}

export default Blog;