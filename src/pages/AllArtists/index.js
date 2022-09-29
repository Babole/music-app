import React from "react";

import { ArtistButton } from "../../components";

function AllArtists() {

    return (
        <>
            <div className="p-3 d-flex flex-row justify-content-center">
                <div>
                    <ArtistButton artistImage="https://www.theaudiodb.com/images/media/artist/thumb/vifn4f1617650128.jpg" artistName="Eminem" artistId='111304' />
                </div>
                <div className="ms-5">
                    <ArtistButton artistImage="https://www.theaudiodb.com/images/media/artist/thumb/ya6y871615076491.jpg" artistName="50 Cent" artistId='111985' />
                </div>
                <div className="ms-5">
                    <ArtistButton artistImage="https://www.theaudiodb.com/images/media/artist/thumb/yy8zqo1636559141.jpg" artistName="Ariana Grande" artistId='122405' />
                </div>
                <div className="ms-5">
                    <ArtistButton artistImage="https://www.theaudiodb.com/images/media/artist/thumb/vpxqtu1484769349.jpg" artistName="Drake" artistId='111718' />
                </div>
            </div>
            <div className="p-3 d-flex flex-row justify-content-center">
                <div>
                    <ArtistButton artistImage="https://www.theaudiodb.com/images/media/artist/thumb/vpuxqp1550161410.jpg" artistName="Rihanna" artistId='111305' />
                </div>
                <div className="ms-5">
                    <ArtistButton artistImage="https://www.theaudiodb.com/images/media/artist/thumb/wttxqu1435514924.jpg" artistName="Kanye West" artistId='111822' />
                </div>
                <div className="ms-5">
                    <ArtistButton artistImage="https://www.theaudiodb.com/images/media/artist/thumb/vuyuxx1531134064.jpg" artistName="Bad Bunny" artistId='148109' />
                </div>
                <div className="ms-5">
                    <ArtistButton artistImage="https://www.theaudiodb.com/images/media/artist/thumb/vxruup1560338665.jpg" artistName="Shakira" artistId='111329' />
                </div>
            </div>
        </>
    );
}

export default AllArtists
