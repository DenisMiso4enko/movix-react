import React from "react";
import "./index.scss";
import HeroBanner from "./HeroBanner/HeroBanner";
import Trending from "./Trending/Trending";
import Popular from "./Popular/Popular";
import TopRated from "./TopRated/TopRated";

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <Trending rowId={"1"} />
      <Popular rowId={"2"} />
      <TopRated rowId={"3"} />
      {/*<div style={{ height: 1000 }}></div>*/}
    </div>
  );
};

export default HomePage;
