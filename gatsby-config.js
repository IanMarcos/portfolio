module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat\:200,400`, 'open sans\:300,400'],
        display: 'swap'
      }
    }
  ]
}
