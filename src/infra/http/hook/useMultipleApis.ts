import { useEffect } from "react";

import useApi from "./useApi";

import { Article } from "@/@types/articles";
import {
  parseNYTArticles,
  parseNewsAPIAiArticles,
  parseNewsAPIOrgArticles,
} from "@/infra/http/utils/parseArticlesPayload";
import { useArticlesStore } from "@/store/articlesStore";
import { getDates } from "@/utils/functions/getDates";
import useFilterStore from "@/store/filterStore";
import { getAuthors } from "@/utils/functions/getAuthors";
import { getSources } from "@/utils/functions/getSources";
import { getCategories } from "@/utils/functions/getCategories";
import { transformArray } from "@/utils/functions/transformArray";
import usePreferencesStore from "@/store/preferencesStore";

const NEWSAPI_ORG_KEY = process.env.NEXT_PUBLIC_NEWSAPI_ORG_KEY;
const NEWSAPI_AI_KEY = process.env.NEXT_PUBLIC_NEWSAPI_AI_KEY;
const NYT_API_KEY = process.env.NEXT_PUBLIC_NYT_API_KEY;

const useMultipleApis = (query?: string) => {
  const { setArticles, setError, setLoading } = useArticlesStore();
  const { handleSetDatesList, handleSetCategoriesList, handleSetSourcesList } =
    useFilterStore();

  const {
    handleSetAuthorsList,
    handleSetCategoriesList: handleSetCategoriesListPreferences,
    handleSetSourcesList: handleSetSourcesListPreferences,
  } = usePreferencesStore();

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

    handleSetCategoriesListPreferences(transformArray(getCategories(articles)));
    handleSetSourcesListPreferences(transformArray(getSources(articles)));
    handleSetAuthorsList(transformArray(getAuthors(articles)));
    handleSetCategoriesList(transformArray(getCategories(articles)));
    handleSetSourcesList(transformArray(getSources(articles)));
    handleSetDatesList(transformArray(getDates(articles)));
  }, [nytData, newsApiData, newsApiOrgData]);

  return { fetchAllData };
};

export default useMultipleApis;
