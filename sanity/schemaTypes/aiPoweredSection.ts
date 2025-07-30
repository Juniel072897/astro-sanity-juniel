import { Rule } from 'sanity';

const AiPoweredSection = {
  name: 'aiPoweredSection',
  title: 'AI Powered Section',
  type: 'document',
  fields: [
    // 🔹 Call Recording Block
    {
      name: 'callRecording',
      type: 'object',
      title: 'Call Recording Block',
      fields: [
        { name: 'heading', type: 'string', title: 'Heading' },
        {
          name: 'bullets',
          type: 'array',
          title: 'Bullet Points',
          of: [{ type: 'string' }],
        },
        {
          name: 'successNote',
          type: 'string',
          title: 'Success Note',
        },
        {
          name: 'ctaText',
          type: 'string',
          title: 'CTA Button Text',
          validation: (Rule: Rule) =>
            Rule.required().error('CTA button text is required'),
        },
        {
          name: 'ctaLink',
          type: 'string',
          title: 'CTA Button Link',
          description: 'Can be an internal route (e.g., /demo) or full URL (https://...)',
          validation: (Rule: Rule) =>
            Rule.required()
              .uri({ allowRelative: true, scheme: ['http', 'https'] })
              .error('Enter a valid URL or path'),
        },
        {
          name: 'imageStack',
          type: 'array',
          title: 'Stacked Images',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
      ],
    },

    // 🔹 AI Feature Section Title & Body
    {
      name: 'featuresSectionTitle',
      title: 'AI Features Section Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'featuresSectionBody',
      title: 'AI Features Section Body',
      type: 'text',
    },

    // 🔹 Features List
    {
      name: 'features',
      title: 'AI Features',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Feature',
          fields: [
            {
              name: 'icon',
              type: 'image',
              title: 'Feature Icon',
              options: { hotspot: true },
            },
            {
              name: 'title',
              type: 'string',
              title: 'Feature Title',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'description',
              type: 'string',
              title: 'Feature Description',
              validation: (Rule: Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule: Rule) =>
        Rule.min(1).warning('Add at least one AI feature.'),
    },

    // 🔸 Built for Trades Section
    {
      name: 'builtForTrades',
      type: 'object',
      title: 'Built For Trades',
      fields: [
        { name: 'heading', type: 'string', title: 'Heading' },
        { name: 'subtext', type: 'text', title: 'Subtext' },
        {
          name: 'tags',
          title: 'Industry Tags',
          type: 'array',
          of: [
            {
              type: 'object',
              title: 'Tag',
              fields: [
                {
                  name: 'label',
                  type: 'string',
                  title: 'Label',
                  validation: (Rule: Rule) =>
                    Rule.required().error('Label is required'),
                },
                {
                  name: 'icon',
                  type: 'image',
                  title: 'Icon',
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
        {
          name: 'image',
          type: 'image',
          title: 'Chat Image',
          options: { hotspot: true },
        },
      ],
    },
  ],
};

export default AiPoweredSection;
