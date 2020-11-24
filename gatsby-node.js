/**
 * File: gatsby-node.js
 * Description: dynamically generates new pages based on the existing posts
 *              that are created on the Contentful CMS
 * 
 * Date: 11/23/20
 * 
 */

const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const blogTemplate = path.resolve('./src/templates/blog.js');
    const res = await graphql(`
        query {
            allContentfulPost {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    res.data.allContentfulPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    })
}