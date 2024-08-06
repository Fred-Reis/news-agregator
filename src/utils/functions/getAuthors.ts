export const getAuthors = (articles: { author: string }[]): string[] => {
  const authors = articles.map((article) => article.author.split(",")[0]);
  const uniqueAuthors = Array.from(new Set(authors));

  return uniqueAuthors;
};
