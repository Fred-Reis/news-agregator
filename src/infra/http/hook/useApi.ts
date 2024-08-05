import { useState, useCallback } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

type UseApiParams<T> = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, any>;
  data?: Record<string, any>;
};

type UseApiReturn<T> = {
  data: T | null;
  error: string | null;
  loading: boolean;
  request: () => void;
};

const useApi = <T>({
  url,
  method = "GET",
  params,
  data,
}: UseApiParams<T>): UseApiReturn<T> => {
  const [responseData, setResponseData] = useState<T | null>(null); // Renamed from 'data' to 'responseData'
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const config: AxiosRequestConfig = {
        method,
        url,
        params,
        data,
      };
      const response: AxiosResponse<T> = await axios(config);
      setResponseData(response.data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.message || "An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, [url, method, params, data]);

  return { data: responseData, error, loading, request };
};

export default useApi;
