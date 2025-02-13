import React from "react";
import "./ArticleCard.css";

interface ArticleCardProps {
  title: string;
  content: string;
  handleArticleClick: () => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  content,
  handleArticleClick,
}) => {
  const maxCharacters = 150;

  const truncateContent = (text: string, limit: number) => {
    if (text.length <= limit) return text;

    return text.substring(0, limit) + "...";
  };

  return (
    <div className="article-card">
      <div className="article-body">
        <p className="article-card-title">{title}</p>
        <p className="article-card-content">
          {truncateContent(content, maxCharacters)}
        </p>
        <a
          className="button-to-read"
          onClick={(e) => {
            e.preventDefault();
            handleArticleClick();
          }}
        >
          Read
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
