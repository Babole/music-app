import React from "react";
import { useParams } from 'react-router-dom'

import { Main } from "../../layout";

function Artist() {
    const params = useParams()

    return(
        <Main artistId={params.artistId}/>
    )
}

export default Artist
