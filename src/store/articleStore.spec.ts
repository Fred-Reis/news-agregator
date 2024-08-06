import { describe, expect, it } from "vitest";

import { useArticlesStore } from "./articlesStore";
import { Article } from "@/@types/articles";

const article: Article = {
  id: "1",
  title: "test title",
  description: "test description",
  author: "test author",
  source: "test source",
  category: "test category",
  url: "https://www.test.com",
  urlToImage: "https://www.test.com",
  publishedAt: "test date",
  content: "test content",
};

describe("articleStore", () => {
  it("should be able to add a new article", () => {
    const { setArticles } = useArticlesStore.getState();

    setArticles([article]);

    const { articles } = useArticlesStore.getState();

    expect(articles).toEqual([article]);
  });

  it("should be able to get articles", () => {
    const { articles } = useArticlesStore.getState();

    expect(articles).toEqual([article]);
  });
});
