export default {
  title: 'Boulder Hero',
  name: 'boulderHero',
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
      return {title: 'Boulder Hero'}
    },
  },
}
