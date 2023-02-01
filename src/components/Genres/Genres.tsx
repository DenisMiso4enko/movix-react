import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import "./index.scss";

interface IGenres {
  data: any;
}

const Genres: FC<IGenres> = ({ data }) => {
  // @ts-ignore
  const { genres } = useSelector<RootState>((state) => state.home);
  return (
    <div className="genres">
      <div className="genres">
        {data?.map((g: any) => {
          if (!genres[g]?.name) return;
          return (
            <div key={g} className="genre">
              {genres[g]?.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Genres;
