export default {
  title: 'Area Contents List',
  name: 'areaContents',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {title: 'Area Contents List'}
    },
  },
}
