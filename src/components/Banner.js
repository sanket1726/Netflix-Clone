import React, { useState, useEffect } from "react";
import "../styles/Banner.css";
import axios from "../config/network";
import { requests } from "../config/requests";

const Banner = ({ loadBannerMovie }) => {
  const imgUrl = `https://image.tmdb.org/t/p/original`;
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(requests.fetchNetflixOriginals)
        .then((res) => {
          const { status, data } = res;
          if (status === 200) {
            console.log(
              data.results[Math.floor(Math.random() * data.results.length - 1)]
            );
            setMovie(
              data.results[Math.floor(Math.random() * data.results.length - 1)]
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //   const randomMovie = Math.random() * request.data.results.length -1
      // This is fetching at higher speed
      // setMovie(request?.data?.results);
      // return request;
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  function truncate(str, n) {
    return str?.length > n ? str?.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "top",
      }}
    >
      <div className='banner_contents'>
        {/* title */}
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* Banner buttons */}
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>

        {/* Description */}
        <div>
          <h1 className='banner_description'>
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>

      {/* <div className='banner_fadeBottom'></div> */}
    </header>
  );
};

export default Banner;
