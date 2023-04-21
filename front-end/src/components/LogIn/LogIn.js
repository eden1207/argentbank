import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { userLogIn, displayUsername1, displayUsername2 } from "../Store/Store.js";

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import '../../styles/Home/Home.css'

import { TbUserCircle } from "react-icons/tb";

import { Link } from 'react-router-dom'
import GiveUsersData from '../../service/GiveUsersData.js';

/*function switchLoginState(username, password, userFirstName, userSurName) {
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

    const condition1 = username === users[0].firstName && password === users[0].password;
    const condition2 = username === users[1].firstName && password === users[1].password;

    if(condition1) {
        return userLogIn(userFirstName, userSurName);
    } else if(condition2) {
        return userLogIn(userFirstName, userSurName);
    }else{
        return userLogOut();
    }
}*/

/*function switchUserName(username, password, isUserUpDate, userFirstName, userSurName, user) {
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

    const condition1 = username === users[0].firstName && password === users[0].password;
    const condition2 = username === users[1].firstName && password === users[1].password;*/


    
    /*function giveUser(condition) {
        if(condition === condition1) {
            dispatch(changeUser('user1'))
        }
        if(condition === condition2) {
            dispatch(changeUser('user2'))
        }
    }*/






    /*if(!isUserUpDate) {
        if(user === 'user1') {
            return userLogIn('Tony', 'Stark', user);
        }
        if(user === 'user2') {
            return userLogIn('Steve', 'Rogers', user);
        }
    } else {
        if(user === 'user1') {
            return userLogIn(userFirstName, userSurName, user);
        }
        if(user === 'user2') {
            return userLogIn(userFirstName, userSurName, user);
        }
    }
}*/

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

    const condition1 = username === users[0].firstName && password === users[0].password;
    const condition2 = username === users[1].firstName && password === users[1].password;

    if(condition1) {
        return '/profile'
    } else if(condition2) {
        return '/profile'
    }else{
        return '/login'
    }
}


export default function LogIn() {
    const dispatch = useDispatch();

    let user = '';

    const userFirstName1 = useSelector((state) => state.userFirstName1);
    const userSurName1 = useSelector((state) => state.userSurName1);
    const isUserUpDate1 = useSelector((state) => state.isUserUpDate1);

    const userFirstName2 = useSelector((state) => state.userFirstName2);
    const userSurName2 = useSelector((state) => state.userSurName2);
    const isUserUpDate2 = useSelector((state) => state.isUserUpDate2);

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    return(
        <div className='html'>
          <div className='body'>
                <GiveUsersData />
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
                                
                                    const condition1 = username === users[0].firstName && password === users[0].password;
                                    const condition2 = username === users[1].firstName && password === users[1].password;


                                    if(condition1) {
                                        /*dispatch(changeUser('user1'))*/
                                        user = 'user1';
                                    } else if(condition2) {
                                        /*dispatch(changeUser('user2'))*/
                                        user = 'user2';
                                    } else{
                                        console.log('Unknown user')
                                    }


                                    if(user === 'user1') {
                                        dispatch(userLogIn())
                                        if(!isUserUpDate1) {
                                            dispatch(displayUsername1('Tony', 'Stark', user));
                                        } else{
                                            dispatch(displayUsername1(userFirstName1, userSurName1, user));
                                        }
                                    } else if(user === 'user2') {
                                        dispatch(userLogIn())
                                        if(!isUserUpDate2) {
                                            dispatch(displayUsername2('Steve', 'Rogers', user));
                                        } else {
                                            dispatch(displayUsername2(userFirstName2, userSurName2, user));
                                        }
                                    } else{
                                        console.log('Unknown user')
                                    }

                                }}
                                to={changePath(username, password)}
                            >
                                Sign In
                            </Link>

                            <button 
                                className="sign-in-button"       
                                onClick={(e) => {
                                    e.preventDefault();
                                    /*dispatch(userLogIn());*/
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