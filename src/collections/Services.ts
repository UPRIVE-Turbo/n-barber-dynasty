import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Megnevezés',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Leírás',
    },
    {
      name: 'price',
      type: 'text',
      required: true,
      label: 'Ár',
    },
    {
      name: 'duration',
      type: 'text',
      label: 'Időtartam',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Ikon (Phosphor icon név, pl. scissors)',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Sorrend',
      defaultValue: 0,
    },
  ],
  defaultSort: 'order',
}
