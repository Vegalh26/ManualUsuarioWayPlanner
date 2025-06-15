import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  manualSidebar: [
    'intro',
    'instalacion',
    'primeros-pasos',
    {
      type: 'category',
      label: 'Funcionalidades',
      items: [
        'funcionalidades',
        'vistas',
        'tecnologias',
      ],
    },
    'preguntas-frecuentes',
    'contacto',
  ],
};

export default sidebars;
