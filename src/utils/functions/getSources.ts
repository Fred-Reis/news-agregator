export const getSources = (articles: { source: string }[]): string[] => {
  const sources = articles.map((article) => article.source);
  const uniqueSources = Array.from(new Set(sources));

  return uniqueSources;
};
