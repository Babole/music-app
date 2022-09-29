import React from "react";
import { Link } from "react-router-dom";

import './style.css'

function Home() {
    const artistId = ["111304", "111985", "122405", "111718", "111305", "111822", "148109", "111329"];
    const random = Math.floor(Math.random() * artistId.length);

    return(
        <div className="m-5 d-flex flex-column align-items-center">
            <div className="card w-75 p-3 d-flex justify-content-center align-items-center">
                <h2>Welcome to the Music Hub. Discover some of the most popular artists of today.</h2>
                <Link to={"/artists/"+artistId[random]}><button>Discover a Random Artist</button></Link>
            </div>
        </div>
    )
}

export default Home
