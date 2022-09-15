export default {
  title: 'Area Banner',
  name: 'areaBanner',
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
      return {title: 'Area Banner'}
    },
  },
}
