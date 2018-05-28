module.exports = {
  siteMetadata: {
    title: 'Chris House\'s Blog',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-react-helmet'
  ],
  pathPrefix: `/crh225.github.io`,
 
}
