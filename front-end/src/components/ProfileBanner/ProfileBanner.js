import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userEditMode, userNoEditMode, changeUserNames, switchUpDate, setUserData } from '../Store/Store';


function putUpDateData(firstname, surname, token) {
    return fetch(process.env.REACT_APP_PORT + '/user/profile', {
      method: 'PUT',
      headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
      body: `{"firstName": "${firstname}", "lastName": "${surname}"}`
    })
}

export default function ProfileBanner() {
    const dispatch = useDispatch();
    const userFirstNameEdited = useSelector((state) => state.userFirstNameEdited);
    const userLastNameEdited = useSelector((state) => state.userLastNameEdited);
    const userData = useSelector((state) => state.userData);
    const userToken = useSelector((state) => state.userToken);
    const isUpDating = useSelector((state) => state.isUpDating);
    const isEditName = useSelector((state) => state.isEditName);
    const [inputfirstname, setInputFirstname] = useState('');
    const [inputsurname, setInputSurname] = useState('');

    useEffect(() => {

        if(isUpDating) {
            putUpDateData(userFirstNameEdited, userLastNameEdited, userToken)
            .then(res => res.json())
            .then(
              (result) => {
                  dispatch(setUserData(result.body))
              }
          )
        }
  
    }, [dispatch, userFirstNameEdited, userLastNameEdited, userToken, isUpDating])

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
                            if(inputfirstname.length > 0 && inputsurname.length > 0) {
                                dispatch(changeUserNames(inputfirstname, inputsurname))
                                dispatch(switchUpDate(true));
                            } else{
                                dispatch(switchUpDate(false));
                            }
                            dispatch(userNoEditMode());
                        }}
                    >
                        Save
                    </button>
                    <button 
                        className="cancel-button"
                        onClick={(e) => {
                            e.preventDefault();
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
                    dispatch(userEditMode());
                }}
            >
                Edit Name
            </button>
        </div>
    )
}