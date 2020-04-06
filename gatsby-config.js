const pxtorem = require('postcss-pxtorem');

const url = 'https://www.thewomenswar.com/';

module.exports = {
  siteMetadata: {
    url,
    siteUrl: url,
    title: "The Women's War",
    copyright: `© ${new Date().getFullYear()} All rights reserved.`,
    podcast: {
      name: "The Women's War",
      author: 'Robert Evans',
      description:
        'These are...not optimistic times for most Americans. Across the world, the dangers of climate change and the terror of creeping authoritarianism present an increasing danger to all of us. After covering this degeneration for four years, Robert Evans went looking for hope. He found it in the unlikeliest of places: Northeast Syria, in a region known as Rojava that’s become host to a feminist, anti-authoritarian revolution. When you’ve heard about these folks in the mainstream media, they’re usually just described as the “Syrian Kurds”, and credited with beating ISIS. They did, in fact, beat ISIS. But their military successes were just part of the story. In The Women’s War, Robert will introduce listeners to dozens of men and women fighting a war for the future of the human soul.',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1.0725rem' },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-162865206-1' },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['tinos:400,400i,500,700'],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          pxtorem({
            rootValue: 16,
            unitPrecision: 5,
            propList: [
              'font',
              'font-size',
              'line-height',
              'letter-spacing',
              'margin',
              'margin-top',
              'margin-left',
              'margin-bottom',
              'margin-right',
              'padding',
              'padding-top',
              'padding-left',
              'padding-bottom',
              'padding-right',
              'border-radius',
              'width',
              'max-width',
            ],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
          }),
        ],
        precision: 8,
      },
    },
  ],
};
