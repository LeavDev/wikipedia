import React from "react";
import "./ArticleCard.css";

interface ArticleCardProps {
  imageUrl: string;
  title: string;
  content: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageUrl,
  title,
  content,
}) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} className="article-card-image" />
      <div className="article-body">
        <p className="article-card-title">{title}</p>
        <p className="article-card-content">{content}</p>
        <a className="link-to-read" href="">
          Read
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
