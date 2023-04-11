import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userEditName } from '../Store/Store';
import { userSaveEditName } from '../Store/Store';
import { userCancelEditName } from '../Store/Store';

function giveUserName(id) {
    if(id === 'tonystark') {
        return 'Tony Stark'
    } else if(id === 'steverogers') {
        return 'Steve Rogers'
    } else{
        return ''
    }
}

function giveSavedName(newFirstname, newSurname) {
    return newFirstname + ' ' + newSurname
}

function saveFirstname(word) {
    let tab = 'Tony';
    tab = word;
    //tab.push(word)
    return tab
}

function saveSurname(word) {
    let tab = 'Stark';
    tab = word;
    //tab.push(word)
    return tab
}






export default function ProfileBanner() {
    const { id } = useParams();
    const editName = useSelector((state) => state.editName);
    const dispatch = useDispatch();

    const [newFirstname, setNewFirstname] = useState(null);
    const [newSurname, setNewSurname] = useState(null);

    function getNewFirstname(e) {
        setNewFirstname(e.target.value)
    }
    
    function getNewSurname(e) {
        setNewSurname(e.target.value)
    }

    function PageTitle() {
        const isEdited = useSelector((state) => state.isEdited);
        const neFirstname = saveFirstname(newFirstname);
        const neSurname = saveSurname(newSurname);
    
        return isEdited ? (
            <React.Fragment>
                <h1>Welcome back<br />{giveSavedName(neFirstname, neSurname)} !</h1>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <h1>Welcome back<br />{giveUserName(id)} !</h1>
            </React.Fragment>
        )
    }

    return editName ? (
        <div>
            <h1>Welcome back</h1>
            <div>
                <div>
                    <input type="text" id="newfirstname" onChange={getNewFirstname} />
                    <input type="text" id="newsurname" onChange={getNewSurname} />
                </div>
                <div>
                    <button 
                        className="save-button"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(userSaveEditName());
                        }}
                    >
                        Save
                    </button>
                    <button 
                        className="cancel-button"
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(userCancelEditName());
                        }}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <div className="header">
            <PageTitle />
            <button 
                className="edit-button"
                onClick={(e) => {
                    e.preventDefault();
                    dispatch(userEditName());
                }}
            >
                Edit Name
            </button>
        </div>
    )
}