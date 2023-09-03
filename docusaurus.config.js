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
    'content-pages',
    [
      'content-docs',
      {
        path: 'content/projects',
        routeBasePath: 'projects',
        sidebarPath: false,
        breadcrumbs: false,
      },
    ],
    'docusaurus-plugin-sass',
    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-sitemap',
    'plugin-image-zoom',
  ],

  themeConfig: {
    navbar: {
      title: 'Punch',
      items: [
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'left',
        },
      ],
    },
  },
};
