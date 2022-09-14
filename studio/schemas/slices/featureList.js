export default {
  title: 'Feature List',
  name: 'featureList',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [{type: 'card'}],
    },
  ],
}
