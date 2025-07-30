import { Rule } from 'sanity';

const HowItWorksSection = {
  name: 'howItWorksSection',
  title: 'How It Works Section',
  type: 'document',
  fields: [
    {
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Step',
          fields: [
            {
              name: 'stepNumber',
              title: 'Step Number',
              type: 'number',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Step Description',
              type: 'text',
            },
            {
              name: 'mainImage',
              title: 'Main Image or Mascot',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'sideImages',
              title: 'Side Images (optional)',
              type: 'array',
              of: [{ type: 'image', options: { hotspot: true } }],
            },
            {
              name: 'ctaText',
              title: 'CTA Button Text',
              type: 'string',
            },
            {
              name: 'ctaLink',
              title: 'CTA Button Link',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};

export default HowItWorksSection;
