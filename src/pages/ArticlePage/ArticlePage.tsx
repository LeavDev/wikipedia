import React, { useEffect, useState } from "react";

import "./ArticlePage.css";
import { useNavigate, useParams } from "react-router-dom";
import { Article } from "../../types/Article";
import { fetchArticleByTitle } from "../../services/api";
import SideBar from "../../components/SideBar/SideBar";

const ArticlePage: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const [article, setArticles] = useState<Article | null>(null);
  const navigate = useNavigate();

  const handleExplorerClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const getArticle = async () => {
      if (title) {
        const fetchedArticle = await fetchArticleByTitle(
          decodeURIComponent(title)
        );
        setArticles(fetchedArticle);
      }
    };

    getArticle();
  }, [article]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article-wrapper">
      <div className="article-sidebar">
        <SideBar />
      </div>
      <div className="article-page">
        <h1 className="article-title">{article.title}</h1>
        <p className="article-subtitle">
          This article is about "{article.title}". For others uses. see{" "}
          <span className="handle-explorer-link" onClick={handleExplorerClick}>
            explorer
          </span>
          .
        </p>
        <p className="article-content">{article.content}</p>
      </div>
    </div>
  );
};

export default ArticlePage;
