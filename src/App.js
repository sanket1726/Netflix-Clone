import React, { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import VideoRow from "./components/VideoRow";
import { requests } from "./config/requests";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <div className='App'>
      {/* NavBar */}
      <Navbar />
      {/* Banner */}
      <Banner loadBannerMovie />
      <VideoRow
        isLargeRow
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <VideoRow
        title='Trending Movies'
        fetchUrl={requests.fetchTrendingMovies}
      />
      <VideoRow
        title='Upcoming Movies'
        fetchUrl={requests.fetchUpcomingMovies}
      />
      <VideoRow title='Now Playing' fetchUrl={requests.fetchNowPlaying} />
      <VideoRow title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <VideoRow title='Action Movies' fetchUrl={requests.fetchActionMovie} />
      <VideoRow title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <VideoRow title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <VideoRow title='Documentries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
