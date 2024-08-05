"use client";

import { Article } from "@/@types/articles";
import { Card } from "@/components";
import useMultipleApis from "@/infra/http/hook/useMultipleApis";

import { useArticlesStore } from "@/store/articlesStore";
import { useEffect } from "react";

interface ApiProps {
  totalResults: number;
  articles: Article[];
  status: string;
}

export default function Home() {
  const { articles, error, loading } = useArticlesStore();

  const { fetchAllData } = useMultipleApis();

  useEffect(() => {
    fetchAllData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (articles.length === 0) {
    return <div>No articles found.</div>;
  }

  return (
    <section className="grid gap-y-10 p-8 lg:pt-16 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-w-[1400px] gap-6 mx-auto  place-content-between">
      {articles.map((news) => (
        <div className="mx-auto" key={news.id}>
          <Card news={news} />
        </div>
      ))}
    </section>
  );
}
