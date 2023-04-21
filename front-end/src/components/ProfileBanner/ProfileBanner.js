import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userEditMode, userNoEditMode, usernameUpDate } from '../Store/Store';


export default function ProfileBanner() {
    const dispatch = useDispatch();
    
    const isEditName = useSelector((state) => state.isEditName);

    const user = useSelector((state) => state.user);

    const userFirstName1 = useSelector((state) => state.userFirstName1);
    const userSurName1 = useSelector((state) => state.userSurName1);

    const userFirstName2 = useSelector((state) => state.userFirstName2);
    const userSurName2 = useSelector((state) => state.userSurName2);

    function giveUserFirstname(user) {
        if(user === 'user1') {
            return userFirstName1
        }
        if(user === 'user2') {
            return userFirstName2
        }
    }

    function giveUserSurname(user) {
        if(user === 'user1') {
            return userSurName1
        }
        if(user === 'user2') {
            return userSurName2
        }
    }

    const userSurname = giveUserSurname(user);
    const userFirstname = giveUserFirstname(user);

    const [inputfirstname, setInputFirstname] = useState(null);
    const [inputsurname, setInputSurname] = useState(null);

    return isEditName ? (
        <div>
            <h1>Welcome back</h1>
            <div>
                <div>
                    <input type="text" id="newfirstname" onChange={(e) => {setInputFirstname(e.target.value)}} />
                    <input type="text" id="newsurname" onChange={(e) => {setInputSurname(e.target.value)}} />
                </div>
                <div>
                    <button 
                        className="save-button"
                        onClick={(e) => {
                            e.preventDefault();

                            /*updateFirstname(inputfirstname);
                            updateSurname(inputsurname);*/

                            dispatch(userNoEditMode());
                            dispatch(usernameUpDate(inputfirstname, inputsurname, user));

                            /*if(user === 'user1') {
                                dispatch(userNoEditMode1());
                                dispatch(usernameUpDate(inputfirstname, inputsurname, user));
                            } else if(user === 'user2') {
                                dispatch(userNoEditMode2());
                                dispatch(usernameUpDate(inputfirstname, inputsurname, user));
                            } else{
                                console.log('Unknown user')
                            }*/

                            /*dispatch(nameLogger(inputfirstname));*/
                        }}
                    >
                        Save
                    </button>
                    <button 
                        className="cancel-button"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(userNoEditMode());
                            /*if(user === 'user1') {
                                dispatch(userNoEditMode1());
                            } else if(user === 'user2') {
                                dispatch(userNoEditMode2());
                            } else{
                                console.log('Unknown user')
                            }*/
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <div className="header">
            <h1>Welcome back<br />{userFirstname + ' ' + userSurname} !</h1>
            <button 
                className="edit-button"
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(userEditMode());
                }}
            >
                Edit Name
            </button>
        </div>
    )
}