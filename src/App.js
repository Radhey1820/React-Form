//import logo from './logo.svg';
import './App.css';
//import {useState} from "react";
//import axios from 'axios';
import { Component } from 'react';
//import {Button} from 'react-bootstrap';
//import reactDom from 'react-dom';

// const $API_PATH = 'http://App.php/api';

class App extends Component {
    // componentDidMount() {
    //     const url = "http://localhost/phpmyadmin/index.php?";
    //     const response = fetch(url);
    //     const data = response.json();
    //     console.log(data);
    //     this.setState(
    //         {username: data.results[0],
    //         password: data.results[0]})
    //}
    render()
    {
        return(
            <div className="conatiner-login">
            <form className="container">
                <div>
                    <label>Enter Username: </label>
                    <input type="text" name="username" value={this.state.username} onChange={e=>this.setState({username: e.target.value})}/>
                </div>
    
                <div>
                    <label>Enter Password: </label>
                    <input type="password" name="password" value={this.state.password} onChange={e=>this.setState({password: e.target.value})}/>
                </div>
    
                <div>
                    <input type="submit" onSubmit={this.handleSubmit}/>
                </div>
            </form>
            </div>
        )  
    }

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        this.componentDidMount();
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: 'React POST Request Example'})
        };
        fetch('http://localhost/phpmyadmin/index.php', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({postId: data.id}));
            fetch('http://127.0.0.1/my-react-app/api/contact/App.php')

        //fetch('http://localhost:80/api/contact/App.php')
         .then(response => response.json())
         .then(result => console.log(result));           
        }
    }

    


export default App;
