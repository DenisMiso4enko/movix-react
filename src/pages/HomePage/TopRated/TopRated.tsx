import React, { useState } from "react";
import "./index.scss";
import { useFetch } from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import Carousel from "../../../components/Carousel/Carousel";

const TopRated = ({ rowId }: any) => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab: string, index: number) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel
        data={data}
        loading={loading}
        rowId={rowId}
        endpoint={endpoint}
      />
    </div>
  );
};

export default TopRated;
