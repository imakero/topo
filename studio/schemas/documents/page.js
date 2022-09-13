export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Url',
      description:
        "This will be the URL of the page, i.e. if your site is hosted at http://www.example.com, entering '/about' will result in the page having url http://www.example.com/about",
      type: 'string',
    },
    {
      title: 'Page Contents',
      name: 'content',
      type: 'array',
      of: [{type: 'hero'}],
    },
  ],
}
