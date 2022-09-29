import React from "react";

import { FaveButton } from "../";

function AlbumTemplate(props) {
    return (
        <>
            <img src={props.albumData.strAlbumThumb} alt="album cover" />
            <div className="d-flex flex-row justify-content-between">
                <div>
                    <p className="mb-0">Album: {props.albumData.strAlbum}</p>
                    <p>Release Year: {props.albumData.intYearReleased}</p>
                </div>
                <FaveButton />
            </div>
        </>
    );
}

export default AlbumTemplate;
