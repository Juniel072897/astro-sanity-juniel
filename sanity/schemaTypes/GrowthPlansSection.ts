// /schemas/sections/growthPlansSection.ts
import { defineType, defineField } from 'sanity'

export const growthPlansSection = defineType({
  name: 'growthPlansSection',
  title: 'Growth Plans Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'plans',
      title: 'Growth Plans',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'plan',
          title: 'Plan',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'icon', title: 'Icon', type: 'image' },
          ],
        },
      ],
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
    }),
    defineField({
      name: 'centerCharacter',
      title: 'Center Character Image',
      type: 'image',
    }),
  ],
})
export default growthPlansSection