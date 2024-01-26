import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    { resolve: 'gatsby-plugin-sass' },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['anton', 'montserrat:200,300,400', 'open sans:300,400,600'],
        display: 'swap',
      },
    },
    { resolve: `gatsby-plugin-root-import` },
  ],
};

export default config;