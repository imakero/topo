export default {
  name: 'boulder',
  title: 'Boulder',
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
      name: 'cover-image',
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
      name: 'location',
      title: 'GPS Location',
      type: 'geopoint',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
