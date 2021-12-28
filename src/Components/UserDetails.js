import React from "react";
import { useParams } from "react-router-dom";
import './User.css';

const UserDetails = ({users}) => {
      const { id } = useParams();
    
    return(  
        <div className= "card">
                {users
                .filter((user) => id.includes(user.id) )
                .map( user => (
                    <div className = "details" key={user.id}>   
                        <h3>
                           <p>{user.username}</p>
                        </h3>
                        <p>Name : {user.name} </p>
                        <p>Phone : {user.phone}</p>
                        <h6>Website : {user.website}</h6>
                        <h6>Address : {user.address.street} , 
                                    {user.address.suite} ,
                                    {user.address.zipcode} ,
                                    {user.address.city}.
                        </h6>
                        <h6>Company : {user.company.name}</h6>
                    </div>
                )
            )
            }
        </div>
    );
};
 
export default UserDetails;