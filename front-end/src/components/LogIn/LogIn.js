import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { userLogIn, setUserToken, checkBox } from "../Store/Store.js";
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import '../../styles/Home/Home.css'
import { TbUserCircle } from "react-icons/tb";


async function userIdentify(email, password) {
  return await fetch(process.env.REACT_APP_PORT + '/user/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: `{"email": "${email}", "password": "${password}"}`
  })
}

export default function LogIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const userToken = useSelector((state) => state.userToken);
    const isChecked = useSelector((state) => state.isChecked);
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
                            <input 
                              type="checkbox" 
                              id="remember-me" 
                              checked={isChecked} 
                              onChange={() => {
                                dispatch(checkBox(!isChecked))
                                dispatch(setUserToken(''));
                              }} 
                            />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button 
                          type="button"
                          className="sign-in-button"
                          onClick={(e) => {
                            e.preventDefault();
                            const condition1 = isChecked === false;
                            const condition2 = isChecked === true && userToken.length ===0;
                            if(condition1 || condition2) {
                              userIdentify(email, password)
                                .then(res => res.json())
                                .then(
                                  (result) => {
                                    if(result.status !== 400){
                                      const token = result.body.token;
                                      dispatch(setUserToken(token));
                                      navigate("/profile")
                                      dispatch(userLogIn());
                                    }
                                  }
                                )
                            } else{
                              navigate("/profile")
                              dispatch(userLogIn());
                            }
                          }}
                        >Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}