const TrustedLogos = {
  name: 'trustedLogos',
  title: 'Trusted Logos',
  type: 'document',
  fields: [
   
    {
      name: 'logos',
      title: 'Logo List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'logo',
            },
          
          },
        },
      ],
    },
  ],

  // 👇 Add this preview object at the root level
  preview: {
    select: {
      title: 'title',
    },
  prepare(selection: { title?: string }) {
  return {
    title: selection.title || 'Trusted Logos',
      };
    },
  },
};

export default TrustedLogos;
