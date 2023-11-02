import React from "react";
import ArticlesCard from "../layouts/ArticlesCard";

const Articles = (props) => {
  return (
    <div className="flex flex-col md:flex-row aspect-square grow ">
      <div>
        <ArticlesCard />
      </div>
      <div>
        <ArticlesCard />
      </div>
      <div>
        <ArticlesCard />
      </div>
    </div>
  );
};

export default Articles;
