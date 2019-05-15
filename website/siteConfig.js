/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Wood PLC',
    infoLink: 'https://woodplc.com',
    pinned: true,
  },
  {
    caption: 'University of Arts',
    infoLink: 'https://www.arts.ac.uk/',
    pinned: true,
  },
  {
    caption: 'Office of Rail and Road',
    infoLink: 'http://orr.gov.uk',
    pinned: true,
  },
  {
    caption: 'Toolbox',
    infoLink: 'http://toolbox.energyinst.org',
    pinned: true,
  },
];

const siteConfig = {
  title: 'FBJS', // Title for your website.
  tagline: 'Documentation and tutorials for Funnelback Search JS Library',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  repositoryUrl: '',
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'fbjs',
  organizationName: 'Squiz',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'installation', label: 'Docs'},
    // {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Changelog'},
    { search: true },
    { languages: true }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/fbjs-logo.png',
  footerIcon: 'img/fbjs-logo.png',
  favicon: 'img/fbjs-logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#28262f',
    secondaryColor: '#5e5a6b',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Squiz`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.

    theme: 'nord',
    version: '9.15.6',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js','https://buttons.github.io/buttons.js',
  'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
  '/js/code-block-buttons.js',],

  stylesheets: ['/css/code-block-buttons.css'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  docsSideNavCollapsible: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/fbjs-logo.png',
  twitterImage: 'img/fbjs-logo.png',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
