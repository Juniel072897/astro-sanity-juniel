import imageUrlBuilder from '@sanity/image-url';
import { sanity } from './sanityClient'; // adjust path if needed

const builder = imageUrlBuilder(sanity);

export const urlFor = (source: any) => builder.image(source);
