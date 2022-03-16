import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route, Routes  
} from "react-router-dom";
import Home from './home';
import User from './user';
import DelUser from './DelUser'
import AddUser from './AddUser'
import EditUser from './EditUser';
import Update from './Update';

class web extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path = "/user/:userId" element={<User/>} />
                        <Route path = "/Delite/:userId" element={<DelUser/>} />
                        <Route path = "/Add" element={<AddUser/>} />
                        <Route path = "/Edit/:userId" element={<EditUser/>} />
                        <Route path = "/Update" element={<Update/>} />
                    </Routes>
                </Router>
            </div>

        );
    }
}

export default web;