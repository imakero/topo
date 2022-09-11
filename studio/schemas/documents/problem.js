export default {
  name: 'problem',
  title: 'Problem',
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
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          {title: 'Easy', value: 'easy'},
          {title: 'Medium', value: 'medium'},
          {title: 'Hard', value: 'hard'},
        ],
      },
    },
    {
      name: 'boulder',
      title: 'Boulder',
      type: 'reference',
      to: [{type: 'boulder'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'tag'}]}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'difficulty',
    },
  },
}
