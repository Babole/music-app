import React from "react";

function AboutArtist(props) {
    return (
        <div className="p-3 pb-0 d-flex flex-row">
            <div className="d-flex flex-column justify-content-center">
                <img className="artistPhoto" src={props.artistData.strArtistThumb} alt="artist" />
            </div>
            <div className="px-3 d-flex flex-column">
                <h2 className="mb-0">{props.artistData.strArtist}</h2>
                <p className="mb-2 text-secondary">Genre: {props.artistData.strGenre}</p>
                <p>{props.artistData.strBiographyEN}</p>
            </div>
        </div>
    );
}

export default AboutArtist;
