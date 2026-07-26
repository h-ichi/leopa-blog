export function countWords(content: string): number {
  const text = content
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, "");

  return text.length;
}


export function countH1(content: string): number {
  return (
    content.match(/<h1\b[^>]*>/gi) ?? []
  ).length;
}


export function countH2(content: string): number {
  return (
    content.match(/<h2\b[^>]*>/gi) ?? []
  ).length;
}


export function countImages(content: string): number {
  return (
    content.match(/<img\b[^>]*>/gi) ?? []
  ).length;
}


export function countAltMissing(
  content: string
): number {
  const imgs =
    content.match(/<img\b[^>]*>/gi) ?? [];

  return imgs.filter(
    (img) =>
      !/alt\s*=\s*["'][^"']*["']/i.test(img)
  ).length;
}


export function countInternalLinks(
  content: string
): number {
  const links =
    content.match(
      /<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi
    ) ?? [];

  return links.filter((link) =>
    /href=["']\/(?!\/)/i.test(link)
  ).length;
}