import { FaStar, FaRegBookmark, FaShareAlt, FaEye, FaFire } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    tags,
    others,
    details,
  } = news;

  const publishedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300 border border-base-200 rounded-2xl overflow-hidden w-full">
      {/* Author Header */}
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm text-base-content leading-tight">{author.name}</p>
            <p className="text-xs text-base-content/50">{publishedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-base-content/40">
          <button className="hover:text-primary transition-colors">
            <FaRegBookmark size={15} />
          </button>
          <button className="hover:text-primary transition-colors">
            <FaShareAlt size={15} />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pb-2">
        <h2 className="font-bold text-base text-base-content leading-snug line-clamp-2">
          {title}
        </h2>
      </div>

      {/* Thumbnail — responsive 3:2 ratio */}
      <figure className="px-4">
        <div className="relative w-full" style={{ aspectRatio: "3 / 2" }}>
          <img
            src={thumbnail_url}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400?text=No+Image";
            }}
          />
        </div>
      </figure>

      {/* Tags */}
      <div className="px-4 pt-3 flex flex-wrap gap-1.5">
        {tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="badge badge-ghost badge-sm text-xs text-base-content/60 border-base-300"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Details with Read More at the end */}
      <div className="px-4 pt-2 text-sm text-base-content/70 leading-relaxed">
        <p>
          {details.slice(0, 180)}...{" "}
          <button className="text-error font-semibold hover:underline cursor-pointer">Read More</button>
        </p>
      </div>

      {/* Badges */}
      {(others?.is_today_pick || others?.is_trending) && (
        <div className="px-4 pt-2 flex gap-2">
          {others.is_trending && (
            <span className="badge badge-error badge-sm gap-1 text-white font-medium">
              <FaFire size={10} /> Trending
            </span>
          )}
          {others.is_today_pick && (
            <span className="badge badge-info badge-sm text-white font-medium">
              Today's Pick
            </span>
          )}
        </div>
      )}

      {/* Divider */}
      <div className="divider my-2 mx-4 before:bg-base-200 after:bg-base-200" />

      {/* Footer */}
      <div className="px-4 pb-4 flex items-center justify-between">
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              size={14}
              className={i < Math.round(rating.number) ? "text-warning" : "text-base-300"}
            />
          ))}
          <span className="text-xs font-semibold text-base-content/70 ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1.5 text-base-content/50">
          <FaEye size={14} />
          <span className="text-xs font-medium">{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;