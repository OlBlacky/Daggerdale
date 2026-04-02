import { getCollection } from 'astro:content';

export async function getChronicleEntries() {
  const entries = await getCollection('chronicle');
  return entries.sort((a, b) => {
    // Sort by chapter first, then by order within chapter
    if (a.data.chapter !== b.data.chapter) return a.data.chapter - b.data.chapter;
    return a.data.order - b.data.order;
  });
}

export async function getChronicleByChapter() {
  const entries = await getChronicleEntries();
  const chapters = new Map<number, { title: string; entries: typeof entries }>();

  for (const entry of entries) {
    const ch = entry.data.chapter;
    if (!chapters.has(ch)) {
      chapters.set(ch, { title: entry.data.chapterTitle, entries: [] });
    }
    chapters.get(ch)!.entries.push(entry);
  }

  return chapters;
}

export const chapterDescriptions: Record<number, string> = {
  0: 'Introduction',
  3: '1371–1373 DR',
  4: '1398–1480 DR',
  5: '1480–1481 DR',
  6: '1481 DR',
  7: '1482–1483 DR',
};
