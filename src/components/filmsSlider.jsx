import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import requests from "../api/requests";
import StartNetflix from "./startNetflix";
const base_url = "https://image.tmdb.org/t/p/original/";

const FilmsSlider = ({ title, fetchApi, isLargeRow }) => {
  const [films, setFilms] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    async function featchData() {
      const request = await axios.get(fetchApi);
      setFilms(request.data.results);
      setLoader(false);
      return request;
    }
    featchData();
  }, [requests.fetchTrending]);

  if (loader) {
    return <StartNetflix />;
  }

  return (
    <div className="pl-10 relative">
      <Link className="text-3xl block mt-2 mb-4 text-gray-400">{title}</Link>
      <Swiper spaceBetween={5} slidesPerView={5}>
        {films.map((film) => (
          <SwiperSlide key={film.backdrop_path}>
            <Link to={`/single/${film.id}`}>
              <div style={{ width: "100%", height: "200px" }}>
                <img
                  className={`row__poster w-full rounded  ${
                    isLargeRow && "row__posterLarge"
                  }`}
                  src={`${base_url}${
                    isLargeRow ? film.poster_path : film.backdrop_path
                  }`}
                  alt={film.name}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FilmsSlider;
