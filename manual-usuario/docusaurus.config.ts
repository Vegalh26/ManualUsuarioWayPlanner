import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'WayPlanner',
  tagline: 'Organiza tus viajes desde una sola app',
  favicon: 'img/Logo_WayPlanner.png',

  future: {
    v4: true,
  },

  url: 'https://your-site.com',
  baseUrl: '/',

  organizationName: 'wayplanner-org', // Cambia por tu usuario u organización GitHub
  projectName: 'wayplanner-docs', // Cambia por el nombre del repo

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          routeBasePath: '/', // Para que el manual esté en la raíz
          editUrl: undefined, // Puedes añadir un link de GitHub si quieres editar desde ahí
        },
        blog: false, // El blog no es necesario
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'WayPlanner',
      logo: {
        alt: 'WayPlanner Logo',
        src: 'img/Logo_WayPlanner.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'manualSidebar', // debe coincidir con tu sidebars.ts
          position: 'left',
          label: 'Manual de Usuario',
        },
        {
          href: 'https://github.com/wayplanner-org/wayplanner-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Inicio',
              to: '/',
            },
            {
              label: 'Funcionalidades',
              to: '/funcionalidades',
            },
          ],
        },
        {
          title: 'Proyecto',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/wayplanner-org/wayplanner-docs',
            },
            {
              label: 'Figma',
              href: '#', // Reemplaza con tu enlace de diseño
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WayPlanner.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
