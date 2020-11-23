/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: 'Down Time',
        author: 'Tim Moss'
    },

    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plug-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.CONTENTFUL_SPACE_ID,
                accessToken: process.CONTENTFUL_ACCESS_TOKEN
            }
        }
    ],
}
