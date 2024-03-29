import React from "react";

import { AlbumTemplate } from "../";

function TopAlbums(props) {

    return (
        <div className="p-3 d-flex flex-row justify-content-center">
            <div>
                <AlbumTemplate albumData={props.albumsData[0]}/>
            </div>
            <div className="ms-5">
                <AlbumTemplate albumData={props.albumsData[1]}/>
            </div>
            <div className="ms-5">
                <AlbumTemplate albumData={props.albumsData[2]}/>
            </div>
            <div className="ms-5">
                <AlbumTemplate albumData={props.albumsData[3]}/>
            </div>
        </div>
    );
}

export default TopAlbums;
