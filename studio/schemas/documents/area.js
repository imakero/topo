export default {
  name: 'area',
  title: 'Area',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'isDestination',
      title: 'Display as destination',
      type: 'boolean',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'contents',
      title: 'Contents',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'boulder'}, {type: 'area'}]}],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockText',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'coverImage',
    },
  },
}
