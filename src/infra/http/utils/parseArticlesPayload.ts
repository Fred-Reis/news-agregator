import { Article } from "@/@types/articles";

export const parseNYTArticles = (data: any): Article[] => {
  return data.response.docs.map((article: any) => ({
    id: article._id,
    source: article.source || "Unknown Source",
    category: article.news_desk || "Unknown Category",
    author: article.byline?.original || "Unknown",
    title: article.headline.main,
    description: article.snippet,
    url: article.web_url,
    urlToImage: article.multimedia?.[0]?.url
      ? `https://www.nytimes.com/${article.multimedia[0].url}`
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA8eRoFDTR6FnHVjEk_0AjDdw7QgvohOnxQ&s",
    publishedAt: article.pub_date,
    content: article.lead_paragraph || "",
  }));
};

export const parseNewsAPIAiArticles = (data: any): Article[] => {
  return data.articles.results.map((article: any) => ({
    id: article.uri,
    source: article.source?.title || "Unknown Source",
    category: article.category || "Unknown Category",
    author: article.authors?.[0]?.name || "Unknown",
    title: article.title,
    description: article.body,
    url: article.url,
    urlToImage:
      article.image && article.image.substring(0, 5).includes("http")
        ? article.image
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA8eRoFDTR6FnHVjEk_0AjDdw7QgvohOnxQ&s",
    publishedAt: article.dateTimePub || article.date,
    content: article.body || "",
  }));
};

export const parseNewsAPIOrgArticles = (data: any): Article[] => {
  return data.articles.map((article: any) => ({
    id: article.url,
    source: article.source.name || "Unknown Source",
    category: article.source.category || "Unknown Category",
    author: article.author || "Unknown",
    title: article.title,
    description: article.description,
    url: article.url,
    urlToImage:
      article.urlToImage && article.urlToImage.substring(0, 5).includes("http")
        ? article.urlToImage
        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWA8eRoFDTR6FnHVjEk_0AjDdw7QgvohOnxQ&s",
    publishedAt: article.publishedAt,
    content: article.content || "",
  }));
};
