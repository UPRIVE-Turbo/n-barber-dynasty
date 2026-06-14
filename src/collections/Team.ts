import type { CollectionConfig } from 'payload'

export const Team: CollectionConfig = {
  slug: 'team',
  labels: {
    singular: 'Csapattag',
    plural: 'Csapat',
  },
  admin: {
    group: 'Tartalom',
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'phone'],
    description: 'A weboldalon megjelenő borbélyok, sorrendben.',
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
      label: 'Név',
    },
    {
      name: 'role',
      type: 'text',
      label: 'Pozíció/Kiemelés',
      admin: {
        description: 'Pl. "Alapító". Hagyd üresen, ha nincs kiemelés.',
      },
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Bemutatkozás',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Telefonszám',
      admin: {
        description: 'Megjelenített formátum, pl. "+36 30 246 5594"',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Profilkép',
    },
  ],
}
