import React, { FC, useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../ContentWrapper/ContentWrapper";
import LazyLoader from "../LazyLoader/LazyLoader";
import PosterFallback from "../../assets/no-poster.png";
import { RootState } from "../../store/store";
import CircleRating from "../CircleRating/CircleRating";
import Genres from "../Genres/Genres";

import "./index.scss";

interface ICaorusel {
  data: any;
  loading: string;
  rowId: string;
  endpoint: string;
  title: string;
}

const Carousel: FC<ICaorusel> = ({ loading, data, rowId, endpoint, title }) => {
  const carouselContainer = useRef();
  // @ts-ignore
  const { url } = useSelector<RootState>((state) => state.home);
  const navigate = useNavigate();
  const slideLeft = () => {
    const slide = document.getElementById("slider" + rowId);
    // @ts-ignore
    slide.scrollLeft = slide.scrollLeft - 500;
  };

  const slideRight = () => {
    const slide = document.getElementById("slider" + rowId);
    // @ts-ignore
    slide.scrollLeft = slide.scrollLeft + 500;
  };

  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <div className="carousel">
      <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill
          className="carouselLeftNav arrow"
          onClick={slideLeft}
        />
        <BsFillArrowRightCircleFill
          className="carouselRighttNav arrow"
          onClick={slideRight}
        />

        {!loading ? (
          <div className="carouselItems" id={"slider" + rowId}>
            {data?.results.map((item: any) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="carouselItem"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="posterBlock">
                    <LazyLoader src={posterUrl} />
                    <CircleRating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="textBlock">
                    <span className="title">{item.title || item.name}</span>
                    <span className="date">
                      {dayjs(item.release_Date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="loadingSkeleton">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
