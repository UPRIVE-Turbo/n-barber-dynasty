import type { CollectionConfig } from 'payload'

export const Submissions: CollectionConfig = {
  slug: 'submissions',
  labels: {
    singular: 'Megkeresés',
    plural: 'Megkeresések',
  },
  admin: {
    group: 'Megkeresések',
    useAsTitle: 'name',
    defaultColumns: ['name', 'phone', 'barber', 'service', 'date', 'createdAt'],
    description: 'Időpontfoglalási űrlap beküldések.',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Név',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Telefonszám',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email',
    },
    {
      name: 'barber',
      type: 'select',
      label: 'Borbély',
      options: [
        { label: 'Gábor', value: 'gabor' },
        { label: 'Olivér', value: 'oliver' },
        { label: 'Andrei', value: 'andrei' },
        { label: 'Mindegy, aki előbb szabad', value: 'any' },
      ],
    },
    {
      name: 'service',
      type: 'text',
      label: 'Szolgáltatás',
    },
    {
      name: 'date',
      type: 'text',
      label: 'Kívánt dátum',
    },
    {
      name: 'time',
      type: 'text',
      label: 'Kívánt időpont',
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Üzenet',
    },
  ],
}
