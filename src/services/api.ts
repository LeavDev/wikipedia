import axios from "axios";
import {
  Article,
  WikipediaPage,
  WikipediaQueryResponse,
  WikipediaSearchResponse,
  WikipediaSearchResult,
} from "../types/Article";

const PROXY_URL = "http://localhost:8080/";
const API_URL = "https://en.wikipedia.org/w/api.php";

export const fetchRandomArticles = async (
  limit: number
): Promise<Article[]> => {
  const response = await axios.get<WikipediaQueryResponse>(
    PROXY_URL + API_URL,
    {
      params: {
        action: "query",
        generator: "random",
        grnnamespace: 0,
        prop: "extracts",
        exintro: true,
        explaintext: true,
        format: "json",
        grnlimit: limit,
      },
    }
  );

  const pages = response.data.query.pages;

  return Object.keys(pages).map((key) => ({
    id: pages[key].pageid,
    title: pages[key].title,
    content: pages[key].extract,
  }));
};

export const fetchArticleByTitle = async (title: string): Promise<Article> => {
  const response = await axios.get<WikipediaQueryResponse>(
    PROXY_URL + API_URL,
    {
      params: {
        action: "query",
        prop: "extracts",
        exintro: true,
        explaintext: true,
        format: "json",
        titles: title,
      },
    }
  );

  const page: WikipediaPage = Object.values(response.data.query.pages)[0];

  return {
    id: page.pageid,
    title: page.title,
    content: page.extract,
  };
};

export const searchArticles = async (query: string): Promise<Article[]> => {
  const response = await axios.get<WikipediaSearchResponse>(
    PROXY_URL + API_URL,
    {
      params: {
        action: "query",
        list: "search",
        srsearch: query,
        format: "json",
      },
    }
  );

  const searchResults = response.data.query.search;

  return searchResults.map((result: WikipediaSearchResult) => ({
    id: result.pageid,
    title: result.title,
    content: result.snippet,
  }));
};
