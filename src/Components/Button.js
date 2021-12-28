import React from "react";
import { useHistory } from "react-router";
import './Button.css';

function UserButton(id) {
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/User/${id}`)
    };
    console.log(id);
    return(
        <button type="button" className="btn" onClick={handleClick}>
            <span>More Details</span>
        </button>

    );
}

export default UserButton;