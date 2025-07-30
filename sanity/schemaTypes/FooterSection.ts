import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'linkSections',
      title: 'Link Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'linkSection',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Section Title', // e.g., Affiliations, Legal
            },
            {
              name: 'links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'footerLink',
                  fields: [
                    { name: 'label', type: 'string', title: 'Label' },
                    { name: 'href', type: 'url', title: 'URL' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform' },
            { name: 'url', type: 'url', title: 'Profile URL' },
            { name: 'icon', type: 'image', title: 'Icon' },
          ],
        },
      ],
    }),
  ],
})
