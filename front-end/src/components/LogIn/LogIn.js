import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { userLogIn, setUserToken, checkBox } from "../Store/Store.js";
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import '../../styles/Home/Home.css'
import { TbUserCircle } from "react-icons/tb";


/**
 * Function to make a API call to obtain a token from the back-end
 * @param {string} email 
 * @param {string} password 
 */
async function userIdentify(email, password) {
  return await fetch(process.env.REACT_APP_PORT + '/user/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: `{"email": "${email}", "password": "${password}"}`
  })
}

/**
 * Component to display the login page
 */
export default function LogIn() {
    /**
     * Function dispatch to send actions to the reducer
     * Function navigate to switch to another page
     */
    const dispatch = useDispatch();
    const navigate = useNavigate();
    /**
     * States giving the email and the password from the inputs of the login page
     */
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    /**
     * States obtained from the store where are registred the user token after authentication
     * and the state of the box Remember me to keep the user authentation
     */
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
                            /**
                             * On sign in button click, if the user entered the good email and password, 
                             * this one is redirected to his profile page
                             * If the user clicked on Remember me and has already been authentified, this
                             * one is redirected on his own page
                             */
                            const remenberMeNotChecked = isChecked === false;
                            const remenberMeCheckedButNoAuthentication = isChecked === true && userToken.length ===0;
                            if(remenberMeNotChecked || remenberMeCheckedButNoAuthentication) {
                              userIdentify(email, password)
                                .then(res => res.json())
                                .then(
                                  (result) => {
                                    if(result.status === 200){
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