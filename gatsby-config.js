/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const dotenv = require("dotenv").config();
module.exports = {
    siteMetadata: {
        title: 'Down Time',
        author: 'Tim Moss'
    },

    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                // CommonMark mode (default: true)
                commonmark: true,
                // Footnotes mode (default: true)
                footnotes: true,
                // Pedantic mode (default: true)
                pedantic: true,
                // GitHub Flavored Markdown mode (default: true)
                gfm: true,               
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
                cssLoaderOptions: {
                    modules: {
                        exportLocalsConvention: 'camelCaseOnly'
                    }
                }
            }
        },
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                src: 'https://cdn.embedly.com/widgets/platform.js',
            }            
        },
    ],
}
