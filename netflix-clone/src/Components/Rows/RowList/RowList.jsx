import React from 'react'
import Row from '../Row/Row'
import requests from "../../Utils/requests"

const RowList = () => {
  return (
    <>
      <Row
        title="Netflix Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Now Playing" fetchUrl={requests.fetchNowPlaying} />
    </>
  );
}

export default RowList