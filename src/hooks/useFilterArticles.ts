import { Article } from "@/@types/articles";
import { parseDate } from "@/utils/functions/parseDate";

interface UseFilterArticlesProps {
  articles: Article[];
  authors?: string[];
  sources?: string[];
  categories?: string[];
  dates?: string[];
}

export const filterArticles = ({
  articles,
  authors = [],
  sources = [],
  categories = [],
  dates = [],
}: UseFilterArticlesProps) => {
  return articles.filter((article) => {
    const authorMatch =
      authors.length === 0 || authors.includes(article.author.split(",")[0]);

    const dateMatch =
      dates.length === 0 ||
      dates.includes(parseDate(article.publishedAt, "filter"));

    const sourceMatch =
      sources.length === 0 || sources.includes(article.source);

    const categoryMatch =
      categories.length === 0 || categories.includes(article.category);

    return authorMatch && dateMatch && sourceMatch && categoryMatch;
  });
};
