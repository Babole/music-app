import React, {useState} from "react";
import './style.css'

function FaveButton() {
    const [faved, setFaved] = useState(false)

    const changeStarColour = () => {
        setFaved(previous => !previous)
    }

    return(
        <span
            role="switch"
            aria-checked={faved}
            style={{ color: faved ? 'gold' : 'grey'}}
            onClick={changeStarColour}
        >
            ★
        </span>
    )
}

export default FaveButton
