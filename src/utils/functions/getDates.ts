import { parseDate } from "./parseDate";

export const getDates = (articles: { publishedAt: string }[]): string[] => {
  const dates = articles
    .map((article) => parseDate(article.publishedAt, "filter"))
    .sort()
    .reverse();
  const uniqueDates = Array.from(new Set(dates));

  return uniqueDates;
};
