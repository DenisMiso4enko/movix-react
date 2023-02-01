import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import DetailsBanner from "./DetailsBanner/DetailsBanner";
import Cast from "./Cast/Cast";
import VideoSection from "./VideoSection/VideoSection";
import Similar from "./Similar/Similar";
import Recommendations from "./Recommendations/Recommendations";

const DetailsPage = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideoSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id} />
    </div>
  );
};

export default DetailsPage;
