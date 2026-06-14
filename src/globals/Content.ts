import type { GlobalConfig } from 'payload'

export const Content: GlobalConfig = {
  slug: 'content',
  label: 'Szövegek',
  admin: {
    group: 'Tartalom',
    description: 'A weboldal szekcióinak szövegei (cím, szlogen, leírások, gombfeliratok).',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      type: 'group',
      label: 'Hero szekció',
      fields: [
        {
          name: 'badge',
          type: 'text',
          label: 'Kiemelt címke',
          defaultValue: 'Kaposvár • Ady Endre utca 10.',
        },
        {
          name: 'titleLine1',
          type: 'text',
          label: 'Cím - 1. sor',
          defaultValue: 'N BARBER',
        },
        {
          name: 'titleHighlight',
          type: 'text',
          label: 'Cím - kiemelt sor',
          defaultValue: 'DYNASTY.',
        },
        {
          name: 'subtitle',
          type: 'textarea',
          label: 'Szlogen',
          defaultValue: 'Klasszikus borbélymunka, modern stílusban. Hozd ki magadból a maximumot.',
        },
        {
          name: 'ctaPrimary',
          type: 'text',
          label: 'Elsődleges gomb felirata',
          defaultValue: 'Időpontfoglalás',
        },
        {
          name: 'ctaSecondary',
          type: 'text',
          label: 'Másodlagos gomb felirata',
          defaultValue: 'Szolgáltatások',
        },
      ],
    },
    {
      name: 'services',
      type: 'group',
      label: 'Szolgáltatások szekció',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Felirat a cím felett',
          defaultValue: 'Mit nyújtunk?',
        },
        {
          name: 'titleLine1',
          type: 'text',
          label: 'Cím - 1. sor',
          defaultValue: 'Prémium',
        },
        {
          name: 'titleLine2',
          type: 'text',
          label: 'Cím - 2. sor',
          defaultValue: 'Kezelések.',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Leírás',
          defaultValue:
            'Nem csak levágjuk a hajad. Egy élményt adunk. Precizitás, forró törülköző, minőségi anyagok.',
        },
      ],
    },
    {
      name: 'team',
      type: 'group',
      label: 'Csapat szekció',
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Felirat a cím felett',
          defaultValue: 'A Mesterek',
        },
        {
          name: 'titleLine1',
          type: 'text',
          label: 'Cím - 1. sor',
          defaultValue: 'Ismerd meg',
        },
        {
          name: 'titleHighlight',
          type: 'text',
          label: 'Cím - kiemelt rész',
          defaultValue: 'a Csapatot.',
        },
      ],
    },
    {
      name: 'gallery',
      type: 'group',
      label: 'Galéria szekció',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Cím',
          defaultValue: 'Munkáink.',
        },
        {
          name: 'facebookCtaLabel',
          type: 'text',
          label: 'Facebook link felirata (asztali)',
          defaultValue: 'Még több Facebookon',
        },
        {
          name: 'mobileCtaLabel',
          type: 'text',
          label: 'Facebook link felirata (mobil)',
          defaultValue: 'További munkák',
        },
      ],
    },
    {
      name: 'booking',
      type: 'group',
      label: 'Időpontfoglalás szekció',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Cím',
          defaultValue: 'Foglalj Időpontot.',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Leírás',
          defaultValue:
            'Egységes foglalási rendszerünkön keresztül kiválaszthatod a borbélyodat és a kívánt szolgáltatást. Mi visszaigazoljuk.',
        },
        {
          name: 'note',
          type: 'text',
          label: 'Megerősítő szöveg az űrlap alatt',
          defaultValue:
            'A foglalás véglegesítéséhez munkatársunk SMS-ben vagy telefonon megerősíti az időpontot.',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Kapcsolat szekció',
      fields: [
        {
          name: 'titleLine1',
          type: 'text',
          label: 'Cím - 1. sor',
          defaultValue: 'Itt Találsz',
        },
        {
          name: 'titleHighlight',
          type: 'text',
          label: 'Cím - kiemelt rész',
          defaultValue: 'Minket.',
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Lábléc',
      fields: [
        {
          name: 'copyrightText',
          type: 'text',
          label: 'Copyright szöveg',
          defaultValue: 'Minden jog fenntartva © 2026.',
        },
      ],
    },
  ],
}
