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
      name: 'isTemplate',
      title: 'Template Page',
      description:
        'Will this page be a template for several different pages, e.g. a template for the detail view of all boulders.',
      type: 'boolean',
    },
    {
      name: 'documentType',
      title: 'Reference document type',
      description: 'Select the document type that this page is a template for',
      type: 'string',
      options: {
        list: [
          {title: 'Problem', value: 'problem'},
          {title: 'Boulder', value: 'boulder'},
          {title: 'Area', value: 'area'},
        ],
      },
      hidden: ({document}) => !document.isTemplate,
    },
    {
      title: 'Page Contents',
      name: 'content',
      type: 'array',
      of: [
        {type: 'hero'},
        {type: 'featureList'},
        {type: 'areaBanner'},
        {type: 'cragDescription'},
        {type: 'boulderHero'},
        {type: 'areaContents'},
      ],
    },
  ],
}
