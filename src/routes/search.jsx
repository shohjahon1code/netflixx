import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Search = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d00b8a4bbae38aaa7e18689efcd9ee4b&language=en-US&query=${id}&page=1&include_adult=false`
      );
      const reswData = await res.json();
      console.log(reswData.results);
      setData(reswData.results);
    };
    fetchSearch();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((movie) => (
        <div class="grid h-72 cursor-pointer shadow-2xl rounded-md overflow-hidden	border-2 border-indigo-300 border-opacity-0	hover:border-indigo-300 bg-indigo-600 grid-rows-2 relative">
          <Link to={`/single/${movie.id}`} class="row-span-2 col-span-1	bg-cover bg-no-repeat bg-center" style={{background: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}>
            
          </Link>
          <div class="absolute text-white p-2 bottom-0 bg-gradient-to-t	from-gray-800 w-full">
            <a href="#" class="text-sm font-bold">
              ${movie.title}
            </a>
            <div class="text-xs">${movie.release_date}</div>
            <div class="flex justify-between text-xs relative w-full">
              <div class="bg-yellow-400 p-1 rounded-md">movies</div>
              <div class="absolute bg-red-500 rounded-full h-9 w-9 flex items-center justify-center bottom-0 right-0 px-5">
                ${movie.popularity}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
