import React from "react";
import LazyLoader from "../LazyLoader/LazyLoader";
import dayjs from "dayjs";
import Genres from "../Genres/Genres";
import CircleRating from "../CircleRating/CircleRating";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import PosterFallback from "../../assets/no-poster.png";
import "./index.scss";

const MovieCard = ({ data, fromSearch, mediaType }: any) => {
  // @ts-ignore
  const { url } = useSelector<RootState>((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlock">
        <LazyLoader className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <>
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </>
        )}
      </div>
      <div className="textBlock">
        <span className="title">{data.title || data.name}</span>
        <span className="date">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
