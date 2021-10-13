import React, { useEffect, useState } from "react";
import Card from './Components/Card';
import Button from './Components/Button';
import axios from 'axios';
import './Homepage.css';

function Homepage(){
    const [users, setUsers] = useState([]);

    useEffect( ()=>{
    const getUsers = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    setUsers(res.data)
        console.log(res); 
    }
    getUsers();
}, [])

    return(
        <div className='container'>
            <div className='homepage'>
                 {users.map(users => {
                     return(
                    <div className="card" key={users.id}>
                    <Card 
                    name={users.username } 
                    email={users.email} 
                    website={users.website} />   
                    <Button />
                    </div>
                 )})}
            </div>
        </div>
    );
}

export default Homepage;