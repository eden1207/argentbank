import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { userLogIn, displayUsername, changeUserNames } from "../Store/Store.js";
import { Link } from 'react-router-dom'

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import '../../styles/Home/Home.css'
import { TbUserCircle } from "react-icons/tb";




function changePath(username, password) {
    const condition1 = username === "Tony" && password === "password123";
    const condition2 = username === "Steve" && password === "password456";

    if(condition1 || condition2) {
        return '/profile'
    } else{
        return '/login'
    }
}


function userIdentify(username, password) {
    let email = '';
    if(username === "Tony" && password === "password123") {
      email = 'tony@stark.com';
    } else if(username === "Steve" && password === "password456"){
      email = 'steve@rogers.com';
    } else{
      console.log('Unknown user')
    }
    return fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: `{"email": "${email}", "password": "${password}"}`
    })
  }

  function applyToken(token) {
    return fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token}
    })
  }




export default function LogIn() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function giveUserFirstName(username, password) {

        userIdentify(username, password)
          .then(res => res.json())
          .then(
            (result) => {
                const token = result.body.token;
                applyToken(token)
                    .then(res => res.json())
                    .then((result) => {
                        dispatch(changeUserNames(result.body.firstName, ''))
                    })
            })
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
                                <input type="text" id="username" onChange={(e) => {setUsername(e.target.value)}} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={(e) => {setPassword(e.target.value)}} />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <Link 
                                className="sign-in-button"
                                onClick={() => {
                                    dispatch(userLogIn());
                                    dispatch(displayUsername(username, password));
                                    dispatch(changeUserNames(giveUserFirstName(username, password), ''));
                                }}
                                to={changePath(username, password)}
                            >
                                Sign In
                            </Link>
                        </form>
                    </section>
                </main>
                <Footer />
          </div>
        </div>
    )
}