module.exports = {
  title: 'Punchfolio',
  favicon: 'favicon.svg',
  organizationName: 'bsuth',
  projectName: 'punchfolio',
  url: 'https://punchfolio.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  plugins: [
    [
      '@docusaurus/theme-classic',
      { customCss: require.resolve('./src/custom.scss') },
    ],
    ['content-blog', { routeBasePath: '/' }],
    'content-pages',
    'docusaurus-plugin-sass',
    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-sitemap',
  ],

  themeConfig: {
    navbar: {
      title: 'Punch',
      logo: {
        alt: 'punchfolio logo',
        src: 'logo-light.svg',
        srcDark: 'logo-dark.svg',
      },
      items: [{ to: '/about', label: 'About', position: 'left' }],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
      ],
    },
  },
};
