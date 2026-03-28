import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const convertedId = parseInt(id);
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (convertedId === 0) {
      setCategoryNews(data);
      return;
    } else if (convertedId === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true,
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === convertedId,
      );
      setCategoryNews(filteredNews);
    }
  }, [data, convertedId]);
  return (
    <div>
      <h2 className="font-bold mb-4">Total <span className="text-secondary">{categoryNews.length}</span> news found</h2>
      <div className="grid grid-cols-1 gap-4">
        {categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)}
      </div>
    </div>
  );
};

export default CategoryNews;
