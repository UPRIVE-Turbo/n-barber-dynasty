import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Beállítások',
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
  ],
}
