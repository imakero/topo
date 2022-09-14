export default {
  title: 'Card',
  name: 'card',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      title: 'Feature Contents',
      name: 'content',
      type: 'reference',
      to: [{type: 'area'}, {type: 'boulder'}],
    },
  ],
}
