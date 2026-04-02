import { getCollection } from 'astro:content';

export async function getSortedAppendix() {
  const entries = await getCollection('appendix');
  return entries.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
}
