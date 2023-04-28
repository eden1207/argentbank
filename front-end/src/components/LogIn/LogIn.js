import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { userLogIn, setUserToken, setIsAuthorized } from "../Store/Store.js";
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import '../../styles/Home/Home.css'
import { TbUserCircle } from "react-icons/tb";


function userIdentify(email, password) {
  return fetch(process.env.REACT_APP_PORT + '/user/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: `{"email": "${email}", "password": "${password}"}`
  })
}

export default function LogIn() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const isAuthorized = useSelector((state) => state.isAuthorized);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

      userIdentify(email, password)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            if(result.status === 400){
              dispatch(setIsAuthorized(false));
            } else{
              const token = result.body.token;
              dispatch(setIsAuthorized(true));
              dispatch(setUserToken(token))
            }
          },

          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )

    }, [dispatch, email, password])

    if (error) {
      return <div>Error:</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log('Page loaded')
    }

    return(
        <div className='html body'>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <TbUserCircle className='sign-in-icon' />
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={(e) => {setEmail(e.target.value)}} />
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
                            onClick={(e) => {
                              if(!isAuthorized) {
                                e.preventDefault();
                              } else{
                                dispatch(userLogIn());
                              }
                            }}
                            to={'/profile'}
                        >
                            Sign In
                        </Link>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}