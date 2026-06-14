import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Beállítások',
  admin: {
    group: 'Beállítások',
    description: 'Cégadatok, elérhetőség, nyitvatartás és social linkek.',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      label: 'Cégnév',
      defaultValue: 'N Barber Dynasty',
    },
    {
      name: 'phones',
      type: 'array',
      label: 'Telefonszámok',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Név',
          required: true,
        },
        {
          name: 'phone',
          type: 'text',
          label: 'Telefonszám',
          required: true,
        },
      ],
    },
    {
      name: 'address',
      type: 'text',
      label: 'Cím',
      defaultValue: 'Ady Endre utca 10, Kaposvár',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
    },
    {
      name: 'openingHours',
      type: 'array',
      label: 'Nyitvatartás',
      fields: [
        {
          name: 'days',
          type: 'text',
          label: 'Napok',
          required: true,
        },
        {
          name: 'hours',
          type: 'text',
          label: 'Órák',
          required: true,
        },
      ],
    },
    {
      name: 'facebook',
      type: 'text',
      label: 'Facebook link',
    },
    {
      name: 'instagram',
      type: 'text',
      label: 'Instagram link',
    },
    {
      name: 'mapEmbedUrl',
      type: 'text',
      label: 'Google Maps embed URL',
    },
    {
      name: 'seo',
      type: 'group',
      label: 'SEO beállítások',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Oldal címe (meta title)',
          defaultValue: 'N Barber Dynasty | Klasszikus Borbélyszalon Kaposváron',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Oldal leírása (meta description)',
          defaultValue:
            'Prémium férfi fodrászat, szakálligazítás és borotválás Kaposvár szívében. Foglalj időpontot Gáborhoz, Olivérhez vagy Andreihez.',
        },
      ],
    },
  ],
}
