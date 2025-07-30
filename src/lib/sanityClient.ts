import { createClient } from '@sanity/client'

export const sanity = createClient({
  projectId: 'qo8lqbuo', // <- copy this exactly from sanity.config.ts
  dataset: 'production',
  apiVersion: '2025-07-01',
  useCdn:false,
})
