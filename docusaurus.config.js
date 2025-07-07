// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Broadstripes Help Center',
  tagline: 'Learn how to use Broadstripes',
  favicon: 'img/favicon.ico',
  // The URL will be different for local vs GitHub Pages
  url: process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : 'https://broadstripes.github.io',
  // The baseUrl will be different for local vs GitHub Pages
  baseUrl: process.env.NODE_ENV === 'development' 
    ? '/' 
    : '/broadstripes-docs/',
  organizationName: 'broadstripes',
  projectName: 'broadstripes-docs',
  trailingSlash: true,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    function webpackPolyfillPlugin() {
      return {
        name: 'webpack-polyfill-plugin',
        configureWebpack() {
          return {
            resolve: {
              fallback: {
                path: require.resolve('path-browserify'),
                os: require.resolve('os-browserify/browser'),
                url: require.resolve('url/'),
                fs: false,
              },
            },
          };
        },
      };
    },
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  // Local 
  //  plugin for all environments
  [
    require.resolve("@easyops-cn/docusaurus-search-local"),
    {
      hashed: true,
      language: ["en"],
      indexDocs: true,
      indexBlog: false,
      indexPages: false,
      docsRouteBasePath: "/",
      highlightSearchTermsOnTargetPage: true,
      searchResultLimits: 8,
      searchResultContextMaxLength: 50,
      explicitSearchResultPath: false,
      removeDefaultStopWordFilter: false,
      removeDefaultStemmer: false,
    },
  ],
],

  clientModules: [
    require.resolve('./src/clientModules.js'),
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/broadstripes/help-center/tree/main/',
          exclude: ['**/drafts/**'],
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        // Remove the docs plugin shorthand if you use a custom docs plugin ID
        theme: {
          customCss: [
            './src/css/custom.css',
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Help Center',
        logo: {
          alt: 'Broadstripes Logo',
          src: 'img/broadstripeslogo.svg',
          srcDark: 'img/broadstripeslogo_dark_system_blue500.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/getting-started/register-your-account',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Broadstripes. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      // Algolia search configuration (disabled - using local search for now)
      // To enable Algolia in the future, uncomment the following:
      /*
      algolia: {
        appId: 'VS5HA1BXO2', 
        apiKey: 'cf58897d0b849997ccacb5ffcbbdc625',
        indexName: 'broadstripes-docs', 
        contextualSearch: true, 
        searchPagePath: false, // Set to false to disable a full-size search page or 'directory_name' to enable it
        externalUrlRegex: 'external\\.com|domain\\.com', 
        insights: false, 
      },
      */
    }),
};

export default config;