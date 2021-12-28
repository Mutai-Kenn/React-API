import React from "react";
import { Link } from "react-router-dom";
import './Card.css';
// import Button from './Button';

function Card({users}) {
    

    return(
        <div className='homepage'>
         {users.map(users => {
             const name = (users.username).charAt(0);
            return(
            <div className='card' key={users.id}>
                <div className="user">
                    <div className="avatar">{name}</div>
                    <h3 className="name">{users.name}</h3>
                    <p className="social">{users.email}</p>
                    <a className="link" href="www.bbb.com">{users.website}</a> 
                    {/* <Button id={users.id}/> */}
                    <Link to = {`/userdetails/${users.id}`}>
                        <button type="button" className="btn">
                            <span>More Details</span>
                        </button>
                    </Link>
                </div>
            </div>
            )
         })}
        </div>
);
}

export default Card;