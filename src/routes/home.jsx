import React from "react";
import Header from "../components/header";
import Banner from "../components/filmBanner";
import FilmsSlider from "../components/filmsSlider";
import requests from "../api/requests";


const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <FilmsSlider
          fetchApi={
            requests.fetchNetflixOriginals
          }
          title={"Netflix originals"}
          isLargeRow
        />
      </div>

<FilmsSlider fetchApi={requests.fetchTrending} title={'Tranding Films'} />
<FilmsSlider fetchApi={requests.fetchTopRated} title={'Top Rated'} />
<FilmsSlider fetchApi={requests.fetchRomanceMovies} title={'Top Romance'} />
<FilmsSlider fetchApi={requests.fetchHorrorMovies} title={'Horror films'} />
<FilmsSlider fetchApi={requests.fetchDocumentaries} title={'Documentary films'} />
<FilmsSlider fetchApi={requests.fetchComedyMovies} title={'Comedy'} />
<FilmsSlider fetchApi={requests.fetchActionMovies} title={'Action movies'} />
    </>
  );
};

export default Home;
