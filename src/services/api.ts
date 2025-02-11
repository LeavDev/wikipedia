import axios from "axios";
import { Article } from "../types/Article";

const PROXY_URL = "http://localhost:8080/";
const API_URL = "https://en.wikipedia.org/w/api.php";

export const fetchRandomArticles = async (
  limit: number
): Promise<Article[]> => {
  const response = await axios.get(PROXY_URL + API_URL, {
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
  });

  const pages = response.data.query.pages;
  return Object.keys(pages).map((key) => ({
    id: pages[key].pageid,
    title: pages[key].title,
    content: pages[key].extract,
  }));
};
