import React, { Component } from 'react';
import {
    BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import Home from './home';
import User from './user';

class web extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route path = "/user/:userId" element={<User/>} />
                    </Routes>
                </Router>
            </div>

        );
    }
}

export default web;