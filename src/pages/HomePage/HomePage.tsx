import ArticleCard from "../../components/ArticleCard/ArticleCard";
import "./HomePage.css";
import searchIcon from "../../assets/frontend/icons8-search.svg";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="top-section">
        <div className="title-header">
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
              placeholder="Explore..."
            />
            <img src={searchIcon} alt="Search Icon" className="search-icon" />
          </div>
        </form>
      </div>
      <hr className="divided-line" />
      <div className="bottom-section">
        <h2>Explore</h2>
        <div className="explore-articles-card">
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Article's Title"
            content="Article's Content"
          />
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Article's Title"
            content="Article's Content"
          />
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Article's Title"
            content="Article's Content"
          />
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Article's Title"
            content="Article's Content"
          />
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Article's Title"
            content="Article's Content"
          />
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Article's Title"
            content="Article's Content"
          />
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Article's Title"
            content="Article's Content"
          />
          <ArticleCard
            imageUrl="https://images.unsplash.com/photo-1738748986807-bf1e6d00d58d?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Article's Title"
            content="Article's Content"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
