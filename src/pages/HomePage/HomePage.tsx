import { useState, useEffect } from "react";

import ArticleCard from "../../components/ArticleCard/ArticleCard";
import searchIcon from "../../assets/frontend/icons8-search.svg";
import wikipediaLogo from "../../assets/frontend/Wikipedia-logo.png";
import "./HomePage.css";
import { Article } from "../../types/Article";
import { fetchRandomArticles } from "../../services/api";

const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);

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
          <img src={wikipediaLogo} alt="" className="wikipedia-logo" />
          <h1>WIKIPEDIA</h1>
          <p>
            Unlock the door to a universe of knowledge. Discover, explore, and
            delve into encyclopedic treasures from around the globe. Your
            ultimate gateway to the world's most comprehensive and diverse
            encyclopedia collection, all in one place.
          </p>
        </div>
        <form className="search-form" action="">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Explore the world..."
            />
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
