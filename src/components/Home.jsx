import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
// eslint-disable-next-line
import "../App.css";
import {Jumbotron,Container}from 'react-bootstrap';

export default class Home extends Component{
    render()
    {
        return(
            <div className="container-fluid">
                <Jumbotron>
                    <h2>Welcome to GoBus</h2>
                    <p>Travel to live.Live to Travel!!</p>
                </Jumbotron>
            </div>
        )
    }
}