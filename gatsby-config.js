module.exports = {
  siteMetadata: {
    title: 'Travis Lin landing page',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-46848707-3',
      },
    }
  ],
}
