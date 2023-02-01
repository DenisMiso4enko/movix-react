import React from "react";
import "./index.scss";
import { useFetch } from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel/Carousel";

const Similar = ({ mediaType, id }: any) => {
  const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);

  const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

  return (
    <Carousel
      title={title}
      data={data}
      loading={loading}
      endpoint={mediaType}
      rowId={"5"}
    />
  );
};

export default Similar;
