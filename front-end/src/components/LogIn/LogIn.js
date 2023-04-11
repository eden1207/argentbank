import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { userLogIn, userLogOut } from "../Store/Store.js";

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import '../../styles/Home/Home.css'

import { TbUserCircle } from "react-icons/tb";

import { Link } from 'react-router-dom'

function switchLoginState(username, password, dispatch) {
    const users = [
        {
            'firstName': 'Tony',
            'lastName': 'Stark',
            'email': 'tony@stark.com',
            'password': 'password123'
        },
        {
            'firstName': 'Steve',
            'lastName': 'Rogers',
            'email': 'steve@rogers.com',
            'password': 'password456'
        }
    ];
    
    /*users.forEach((user) => {
        if(username === user.firstName && password === user.password) {
            return dispatch(userLogIn());
        } else{
            return dispatch(userLogOut());
        }
    });*/

    if(username === users[0].firstName && password === users[0].password) {
        return dispatch(userLogIn());
    } else if(username === users[1].firstName && password === users[1].password) {
        return dispatch(userLogIn());
    }else{
        return dispatch(userLogOut());
    }
}

function changePath(username, password) {
    const users = [
        {
            'firstName': 'Tony',
            'lastName': 'Stark',
            'email': 'tony@stark.com',
            'password': 'password123'
        },
        {
            'firstName': 'Steve',
            'lastName': 'Rogers',
            'email': 'steve@rogers.com',
            'password': 'password456'
        }
    ];

    /*users.forEach((user) => {
        if(username === user.firstName && password === user.password) {
            console.log('profile')
            return '/profile'
        } else{
            console.log('login')
            return '/login'
        }
    });*/

    if(username === users[0].firstName && password === users[0].password) {
        return '/profile/tonystark'
    } else if(username === users[1].firstName && password === users[1].password) {
        return '/profile/steverogers'
    }else{
        return '/login'
    }
}


export default function LogIn() {
    const dispatch = useDispatch();

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function getUsername(e) {
        setUsername(e.target.value)
    }

    function getPassword(e) {
        setPassword(e.target.value)
    }

    return(
        <div className='html'>
          <div className='body'>
                <Header />
                <main className="main bg-dark">
                    <section className="sign-in-content">
                        <TbUserCircle className='sign-in-icon' />
                        <h1>Sign In</h1>
                        <form>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" onChange={getUsername} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={getPassword} />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <Link 
                                className="sign-in-button"
                                onClick={() => {
                                    switchLoginState(username, password, dispatch)
                                }}
                                to={changePath(username, password)}
                            >
                                Sign In
                            </Link>

                            <button 
                                className="sign-in-button"       
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(userLogIn());
                                }}
                            >
                                Sign In
                            </button>


                        </form>
                    </section>
                </main>
                <Footer />
          </div>
        </div>
    )
}

/*
          <!-- PLACEHOLDER DUE TO STATIC SITE -->
          <a href="./user.html" class="sign-in-button">Sign In</a>
          <!-- SHOULD BE THE BUTTON BELOW -->
          <!-- <button class="sign-in-button">Sign In</button> -->
          <!--  -->
 */


          /**
           *                             <button 
                                className="sign-in-button"       
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(userLogIn());
                                }}
                            >
                                Sign In
                            </button>
           */