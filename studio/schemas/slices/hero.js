export default {
  title: 'Hero',
  name: 'hero',
  type: 'object',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Subheading',
      name: 'subheading',
      type: 'string',
    },
    {
      title: 'Cover Image',
      name: 'coverImage',
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
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'coverImage',
    },
    prepare({title, media}) {
      const preparedTitle =
        title.length > 20 ? `HERO - ${title.slice(0, 20)}...` : `HERO - ${title}`
      return {title: preparedTitle, media}
    },
  },
}
