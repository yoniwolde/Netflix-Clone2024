import React, { useState, useEffect } from 'react'
import axios from "../Utils/axios"
import requests from "../Utils/requests"
import "./banner.css"

function Banner() {
    const [movie, setMovie] = useState({});
    useEffect(() => {
        (async () => {
            try {
                let request = await axios.get(requests.fetchNetflixOriginals)
                setMovie(request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]);
            } catch (error) {
                console.log("error", error)
                }
            })
        })

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url()`,
        backgroundPosition: "center",
        backgroundREpeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>
              <h1 className="banner_description">{ truncate(movie?.overview,150)}</h1>
          </div>
          <div className='bannder_fadeBottom'/>
    </div>
  );
}

export default Banner