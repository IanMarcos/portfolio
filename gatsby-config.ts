import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Portfolio',
    siteUrl: 'https://ianmarcos.github.io/portfolio',
  },
  pathPrefix: '/portfolio',
  graphqlTypegen: true,
  plugins: [
    { resolve: 'gatsby-plugin-sass' },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['anton', 'montserrat:200,300,400', 'open sans:300,400,600'],
        display: 'swap',
      },
    },
    { resolve: 'gatsby-plugin-root-import' }, // TODO check why this doesn't work with components and types
  ],
};

export default config;
