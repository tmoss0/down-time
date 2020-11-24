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
            allContentfulPost (
            sort: {
                fields: publishDate,
                order: DESC
                }
            ) {
            edges {
                node {
                    title
                    slug
                    publishDate(formatString:"MMM Do, YYYY")
                }
            }
            }
        }
    `)

    return (
       <Layout>
            <h1>Down Time Articles</h1>
            <ol className={blogStyles.posts}>
                {data.allContentfulPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                            </Link>          
                            <p>{edge.node.publishDate}</p>
                        </li>
                    )
                })}
            </ol>
       </Layout>
    )
}

export default Blog;