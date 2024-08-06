export const getCategories = (articles: { category: string }[]): string[] => {
  const categories = articles.map((article) => article.category);
  const uniqueCategories = Array.from(new Set(categories));

  return uniqueCategories;
};
