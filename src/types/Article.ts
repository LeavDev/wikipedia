export interface Article {
  id: string;
  title: string;
  content: string;
}

export interface WikipediaPage {
  pageid: string;
  title: string;
  extract: string;
  touched: string;
}

export interface WikipediaQueryResponse {
  query: {
    pages: {
      [key: string]: WikipediaPage;
    };
  };
}

export interface WikipediaSearchResult {
  pageid: string;
  title: string;
  snippet: string;
}

export interface WikipediaSearchResponse {
  query: {
    search: WikipediaSearchResult[];
  };
}
