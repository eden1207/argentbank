import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userEditMode, userNoEditMode, changeUserNames, switchUpDate, setUserData } from '../Store/Store';

/**
 * Function to make a API call, to change both user lastname and firstname and to obtain 
 * user data thanks to the token from the back-end
 * @param {string} firstname 
 * @param {string} surname 
 * @param {string} token 
 */
function putUpDateData(firstname, surname, token) {
    return fetch(process.env.REACT_APP_PORT + '/user/profile', {
      method: 'PUT',
      headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
      body: `{"firstName": "${firstname}", "lastName": "${surname}"}`
    })
}

/**
 * Component displaying the welcome message of the user profile page
 */
export default function ProfileBanner() {
    /**
     * Function dispatch to send actions to the reducer and state to obtain the user token 
     * after authentication
     */
    const dispatch = useDispatch();
    /**
     * States to edit the user firstname and lastname
     * The first and second state are made to get the name written in the inputs
     * The other ones are used to obtain the names registred in the back-end 
     */
    const [inputfirstname, setInputFirstname] = useState('');
    const [inputsurname, setInputSurname] = useState('');
    const userFirstNameEdited = useSelector((state) => state.userFirstNameEdited);
    const userLastNameEdited = useSelector((state) => state.userLastNameEdited);
    /**
     * States to obtain the user token and user data after authentication
     */
    const userData = useSelector((state) => state.userData);
    const userToken = useSelector((state) => state.userToken);
    /**
     * State indicated if the program is updating the names or not
     * If it is true a fetch call is made to save the new names updated
     */
    const isUpDating = useSelector((state) => state.isUpDating);
    /**
     * State to display the welcome message of the profile banner or the edit interface
     */
    const isEditName = useSelector((state) => state.isEditName);

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