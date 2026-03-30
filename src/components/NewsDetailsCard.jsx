import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { title, thumbnail_url, details, category_id } = news;
  return (
    <div className="mb-10">
      <figure className="px-4">
        <div className="relative w-full" style={{ aspectRatio: "3 / 2" }}>
          <img
            src={thumbnail_url}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/600x400?text=No+Image";
            }}
          />
        </div>
        <h2 className="font-bold text-2xl text-center my-4">{title}</h2>
        <p className="text-justify">{details}</p>
        <Link className="btn btn-secondary mt-4" to={`/category/${category_id}`}>Back to category</Link>
      </figure>
    </div>
  );
};

export default NewsDetailsCard;
