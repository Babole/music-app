import React from "react";
import { Link } from "react-router-dom";

import "./style.css"
import { FaveButton } from '../'

function ArtistButton(props) {

    return (
        <>
            <Link to={props.artistId}><img className="artistImg" src={props.artistImage} alt="artist" /></Link>
            <div className="d-flex flex-row justify-content-between">
                <h2>{props.artistName}</h2>
                <FaveButton />
            </div>
        </>
    )
}

export default ArtistButton
