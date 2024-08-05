import { create } from "zustand";

import { Article } from "@/@types/articles";

interface ArticlesState {
  articles: Article[];
  error: string | null;
  loading: boolean;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  setArticles: (articles: Article[]) => void;
  clearArticles: () => void;
}

export const useArticlesStore = create<ArticlesState>((set) => ({
  articles: [],
  error: null,
  loading: true,
  setError: (error: string | null) => set({ error }),
  setLoading: (loading: boolean) => set({ loading }),
  setArticles: (articles: Article[]) => set({ articles }),
  clearArticles: () => set({ articles: [] }),
}));
