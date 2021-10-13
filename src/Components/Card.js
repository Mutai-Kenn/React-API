import React from "react";
import './Card.css';

function Card({_id, name, username, email, website}) {

    return(
        <div className="user">
            <div className="avatar">J</div>
            <h3 className="name">{name}</h3>
            <p className="social">{email}</p>
            <a className="link" href="www.bbb.com">{website}</a>
        </div>
    );
}

export default Card;