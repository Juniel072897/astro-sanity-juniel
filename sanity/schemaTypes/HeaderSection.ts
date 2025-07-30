export default {
  name: 'headerSection',
  title: 'Header Section',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'image' },
            { name: 'url', title: 'URL', type: 'url' },
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    },
  ],
};
