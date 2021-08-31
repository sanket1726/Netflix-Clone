import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";

import axios from "../config/network";
import "../styles/Row.css";
import VideoModal from "./VideoModal";

const VideoRow = (props) => {
  const { title, fetchUrl, isLargeRow } = props;
  const imgUrl = `https://image.tmdb.org/t/p/original/`;
  // useStates
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [modalState, setModalState] = useState(false);

  // useEffects
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log("-------------->" + title);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const playerConfig = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    const baseUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=425d6d8ee728b9b4c3f38b70c1a77923&language=en-US
`;
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie);
      console.log(baseUrl);
      const youtubeUrl = await axios
        .get(`${baseUrl}`)
        .then((res) => {
          console.log(res);
          const { data, status } = res;
          if (status === 200 && data.results.length > 0) {
            setModalState(true);
            setTrailerUrl(data?.results[0]?.key);
          } else {
            alert("Oops No Videos Available for this!!");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Oops No Videos Available for this!!");
        });
    }
  };

  const closeVideo = () => {
    setTrailerUrl("");
    setModalState(false);
  };

  return (
    <div className='row'>
      {/*  */}
      {modalState && (
        <VideoModal
          modalState={modalState}
          closeModal={() => closeVideo()}
          videoId={trailerUrl && trailerUrl}
        />
      )}

      <h2>{title}</h2>
      <div className='row_posters'>
        {/* row_posters */}
        {movies.map((movie) => {
          const { id, title, poster_path, backdrop_path, name } = movie;
          return (
            <img
              onClick={() => {
                handleClick(movie);
              }}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              key={id}
              src={`${imgUrl}${isLargeRow ? poster_path : backdrop_path}`}
              alt={name}
            />
          );
        })}
      </div>
      {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={playerConfig} />} */}
    </div>
  );
};

export default VideoRow;
