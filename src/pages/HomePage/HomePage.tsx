import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { assets } from "../../assets/frontend/assets";
import { Article } from "../../types/Article";
import { fetchRandomArticles, searchArticles } from "../../services/api";

import "./HomePage.css";

const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleArticleClick = (title: string) => {
    navigate(`/article/${encodeURIComponent(title)}`);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchQuery.trim() !== "") {
      const fetchedArticles = await searchArticles(searchQuery);
      setArticles(fetchedArticles);
    }
  };

  useEffect(() => {
    const getRandomArticles = async () => {
      const fetchedArticles = await fetchRandomArticles(10);
      setArticles(fetchedArticles);
    };

    getRandomArticles();
  }, []);

  return (
    <div className="homepage">
      <div className="top-section">
        <div className="title-header">
          <img src={assets.wikipediaLogo} alt="" className="wikipedia-logo" />
          <h1>WIKIPEDIA</h1>
          <p>
            Unlock the door to a universe of knowledge. Discover, explore, and
            delve into encyclopedic treasures from around the globe. Your
            ultimate gateway to the world's most comprehensive and diverse
            encyclopedia collection, all in one place.
          </p>
        </div>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Explore the world..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <img
              src={assets.searchIcon}
              alt="Search Icon"
              className="search-icon"
            />
          </div>
        </form>
      </div>
      <hr className="divided-line" />
      <div className="bottom-section">
        <h2>Explore</h2>
        <div className="explore-articles-card">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              title={article.title}
              content={article.content}
              handleArticleClick={() => handleArticleClick(article.title)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
