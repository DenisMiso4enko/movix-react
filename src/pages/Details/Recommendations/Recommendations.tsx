import React from "react";
import "./index.scss";
import { useFetch } from "../../../hooks/useFetch";
import Carousel from "../../../components/Carousel/Carousel";

const Recommendations = ({ mediaType, id }: any) => {
  const { data, loading, error } = useFetch(
    `/${mediaType}/${id}/recommendations`
  );

  return (
    <Carousel
      title={"Recommendations"}
      data={data}
      loading={loading}
      endpoint={mediaType}
      rowId={"4"}
    />
  );
};

export default Recommendations;
