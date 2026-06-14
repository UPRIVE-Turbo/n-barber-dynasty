import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  labels: {
    singular: 'Galéria kép',
    plural: 'Galéria',
  },
  admin: {
    group: 'Tartalom',
    useAsTitle: 'alt',
    defaultColumns: ['image', 'alt'],
    description: 'A "Munkáink" galériában megjelenő képek, sorrendben.',
  },
  access: {
    read: () => true,
  },
  orderable: true,
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Kép',
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alternatív szöveg',
    },
  ],
}
