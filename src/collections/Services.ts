import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Szolgáltatás',
    plural: 'Szolgáltatások',
  },
  admin: {
    group: 'Tartalom',
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'duration'],
    description: 'A weboldalon megjelenő szolgáltatások, sorrendben.',
  },
  access: {
    read: () => true,
  },
  orderable: true,
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
  ],
}
