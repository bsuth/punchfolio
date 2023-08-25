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
      },
    ],
    'docusaurus-plugin-sass',
    process.env.NODE_ENV === 'production' && '@docusaurus/plugin-sitemap',
    'plugin-image-zoom',
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Punch',
      logo: {
        alt: 'punchfolio logo',
        src: 'logo-light.svg',
        srcDark: 'logo-dark.svg',
      },
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
