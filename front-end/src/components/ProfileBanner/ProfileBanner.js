import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userEditMode, userNoEditMode, changeUserNames, switchUpDate } from '../Store/Store';


export default function ProfileBanner({ userData }) {
    const dispatch = useDispatch();
    //dispatch(changeUserNames(userData.firstName, userData.lastName));
    
    const isEditName = useSelector((state) => state.isEditName);

    const [inputfirstname, setInputFirstname] = useState(null);
    const [inputsurname, setInputSurname] = useState(null);

    return isEditName ? (
        <div>
            <h1>Welcome back</h1>
            <div className='edit-tab'>
                <div className='edit-inputs'>
                    <input type="text" id="newfirstname" onChange={(e) => {setInputFirstname(e.target.value)}} />
                    <input type="text" id="newsurname" onChange={(e) => {setInputSurname(e.target.value)}} />
                </div>
                <div className='edit-buttons'>
                    <button 
                        className="save-button"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(changeUserNames(inputfirstname, inputsurname))
                            dispatch(switchUpDate(true));
                            dispatch(userNoEditMode());
                        }}
                    >
                        Save
                    </button>
                    <button 
                        className="cancel-button"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(changeUserNames(userData.firstName, userData.lastName))
                            dispatch(switchUpDate(false));
                            dispatch(userNoEditMode());
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <div className="header">
            <h1>Welcome back<br />{userData.firstName + ' ' + userData.lastName} !</h1>
            <button 
                className="edit-button"
                onClick={(e) => {
                    e.preventDefault();
                    //dispatch(switchUpDate(true));
                    dispatch(userEditMode());
                }}
            >
                Edit Name
            </button>
        </div>
    )
}