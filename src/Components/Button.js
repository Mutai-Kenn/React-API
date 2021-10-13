import React from "react";
import './Button.css';

function UserDetails(ev){
    ev.preventDefault();
    console.log('Clicked');
    

}

function UserButton() {
    return(
        
        <button type="button" className="btn" onClick={UserDetails}>
            <span>More Details</span>
        </button>
    );
}

export default UserButton;