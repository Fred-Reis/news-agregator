"use client";

import { useEffect, useMemo } from "react";

import { Card, NoArticles } from "@/components";
import HomeLoading from "./loading";

import useMultipleApis from "@/infra/http/hook/useMultipleApis";
import { filterArticles } from "@/hooks/useFilterArticles";

import { useArticlesStore } from "@/store/articlesStore";
import usePreferencesStore from "@/store/preferencesStore";
import useFilterStore from "@/store/filterStore";

export default function Home() {
  const { articles, loading } = useArticlesStore();
  const { fetchAllData } = useMultipleApis();

  const { dates, categories, sources } = useFilterStore();

  const {
    authors,
    sources: preferedSources,
    categories: preferedCategories,
  } = usePreferencesStore();

  const preferedArticles = useMemo(
    () =>
      filterArticles({
        articles,
        authors: authors
          .filter((item) => item.checked)
          .map((item) => item.value),
        sources: preferedSources
          .filter((item) => item.checked)
          .map((item) => item.value),
        categories: preferedCategories
          .filter((item) => item.checked)
          .map((item) => item.value),
      }),
    [articles, authors, preferedCategories, preferedSources]
  );

  const filteredArticles = useMemo(
    () =>
      filterArticles({
        articles: preferedArticles,
        dates: dates.filter((item) => item.checked).map((item) => item.value),
        categories: categories
          .filter((item) => item.checked)
          .map((item) => item.value),
        sources: sources
          .filter((item) => item.checked)
          .map((item) => item.value),
      }),
    [preferedArticles, dates, categories, sources]
  );

  useEffect(() => {
    fetchAllData();
  }, []);

  if (loading) {
    return <HomeLoading />;
  }

  if (filteredArticles.length === 0) {
    return <NoArticles />;
  }

  return (
    <section className="grid gap-y-10 p-8 lg:pt-16 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-w-[1400px] gap-6 mx-auto  place-content-between">
      {filteredArticles.map((news) => (
        <div className="mx-auto" key={news.id}>
          <Card news={news} />
        </div>
      ))}
    </section>
  );
}
