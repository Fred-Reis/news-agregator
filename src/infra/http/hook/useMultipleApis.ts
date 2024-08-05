import { useEffect } from "react";

import useApi from "./useApi";

import { Article } from "@/@types/articles";
import {
  parseNYTArticles,
  parseNewsAPIAiArticles,
  parseNewsAPIOrgArticles,
} from "@/infra/http/utils/parseArticlesPayload";
import { useArticlesStore } from "@/store/articlesStore";

const NEWSAPI_AI_KEY = "7d87ad0a-27bd-47dd-a7df-a1df02dc9770";
const NEWSAPI_ORG_KEY = "2b396334695f4fbeafe96f69833e69ec";
const NYT_API_KEY = "oJHWU3cSvV7pRpG2VaSAXxV76VeVzvsH";

const useMultipleApis = (query?: string) => {
  const { setArticles, setError, setLoading } = useArticlesStore();

  const {
    data: nytData,
    error: nytError,
    loading: nytLoading,
    request: fetchNyt,
  } = useApi<{ response: { docs: any[] } }>({
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?${
      query ? `q=${query}&` : ""
    }api-key=${NYT_API_KEY}`,
  });

  const {
    data: newsApiData,
    error: newsApiError,
    loading: newsApiLoading,
    request: fetchNewsApi,
  } = useApi<{ articles: { results: any[] } }>({
    url: `https://newsapi.ai/api/v1/article/getArticles?query={"$query":{${
      query ? `"keyword": "${query}",` : ""
    } "lang": "eng"},"$filter":{"forceMaxDataTimeWindow":"31"}}&resultType=articles&articlesSortBy=date&apiKey=${NEWSAPI_AI_KEY}`,
  });

  const {
    data: newsApiOrgData,
    error: newsApiOrgError,
    loading: newsApiOrgLoading,
    request: fetchNewsApiOrg,
  } = useApi<{ articles: any[] }>({
    url: `https://newsapi.org/v2/everything?q=${
      query ? query : "any"
    }&apiKey=${NEWSAPI_ORG_KEY}`,
  });

  const fetchAllData = async () => {
    try {
      await Promise.all([fetchNyt(), fetchNewsApi(), fetchNewsApiOrg()]);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("An error occurred while fetching data");
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    const articles: Article[] = [
      ...(nytData ? parseNYTArticles(nytData) : []),
      ...(newsApiData ? parseNewsAPIAiArticles(newsApiData) : []),
      ...(newsApiOrgData ? parseNewsAPIOrgArticles(newsApiOrgData) : []),
    ];

    const isError = nytError || newsApiError || newsApiOrgError;
    const isLoading = nytLoading || newsApiLoading || newsApiOrgLoading;

    setArticles(articles);
    setError(isError ? "An error occurred while fetching data" : null);
    setLoading(isLoading);
  }, [nytData, newsApiData, newsApiOrgData]);

  return { fetchAllData };
};

export default useMultipleApis;
