export default {
  title: 'Crag Description',
  name: 'cragDescription',
  type: 'object',
  fields: [
    {
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
    },
  ],
  preview: {
    prepare() {
      return {title: 'Crag Description'}
    },
  },
}
