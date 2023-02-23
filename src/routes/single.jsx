import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import StartNetflix from "../components/startNetflix";
const base_url = "https://image.tmdb.org/t/p/original/";

const Single = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=0ae86cb7a61dc87719ab93b5cb31e283&language=en-US`
      )
      .then((json) => {
        setSingleProduct(json.data);
        setLoader(false);
      });
  }, [id]);

  const back = () => {
    navigate(-1);
  };

  if (loader) {
    return <StartNetflix />;
  }

  return (
    <>
      <div>
        <img
          className="absolute w-full h-full -z-10 blur-sm"
          src={`${base_url}${singleProduct?.backdrop_path}`}
          alt="img"
        />
      </div>

      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div onClick={back} className="mx-auto text-2xl cursor-pointer  hover:text-red-400">
          Back
        </div>
        <div className="py-3  sm:mx-auto bg-slate-800 w-full px-5">
          <div className="bg-white shadow-2xl border-gray-100 max-h-80 	 border sm:rounded-3xl p-8 flex space-x-8">
            <div className=" overflow-visible w-1/2">
              <Link target="blank" to={singleProduct?.homepage}>
                <img
                  className="rounded-3xl shadow-lg hover:blur-sm hover:cursor-pointer"
                  src={`${base_url}${singleProduct?.backdrop_path}`}
                  alt=""
                />
              </Link>
            </div>
            <div className="flex flex-col w-1/2 space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-3xl font-bold text-black">
                  {singleProduct?.title}
                </h2>
                <div className="bg-yellow-400 font-bold rounded-xl p-2">
                  {singleProduct?.data?.imdbRating}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Series</div>
                <div className="text-lg text-gray-800">
                  {singleProduct?.release_date}
                </div>
              </div>
              <p className=" text-gray-400 max-h-40 overflow-y-hidden">
                {singleProduct?.overview}
              </p>
              <div className="flex text-2xl font-bold text-black">
                {singleProduct?.data?.BoxOffice}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
