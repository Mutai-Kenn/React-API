import React, { useEffect, useState } from "react";
import Card from './Components/Card';
import axios from 'axios';
import './Homepage.css';
import { Route , Switch} from "react-router-dom";
import UserDetails from "./Components/UserDetails";


function Homepage(){
    const [users, setUsers] = useState([]);

    useEffect( ()=>{
    const getUsers = async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");

    setUsers(res.data)
        return res.data;
    }
    getUsers();
}, [])

    return(
        <div className='container'>
                <Switch>
                    <Route exact path='/'>
                        <Card users ={users}/>
                    </Route>
                    <Route exact path="/userdetails/:id">
                        <UserDetails users={users}/>
                    </Route>
                </Switch>
            </div>
    );
}

export default Homepage;