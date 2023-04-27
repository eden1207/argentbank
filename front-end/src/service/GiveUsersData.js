import React, { useState, useEffect } from 'react'
//import { useDispatch } from "react-redux";
import Profile from '../components/Profile/Profile.js';
//import ErrorPage from '../components/UserPage/ErrorPage';
import { useSelector } from "react-redux";
//import { changeUserNames } from '../components/Store/Store';



class User {
  constructor(data) {
    this._data = data
  }

  get id() {
    return this._data.id
  }

  get firstName() {
    return this._data.firstName
  }

  get lastName() {
    return this._data.lastName
  }

  get email() {
    return this._data.email
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

function putUpDateData(firstname, surname, token) {
  return fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token},
    body: `{"firstName": "${firstname}", "lastName": "${surname}"}`
  })
}

function applyToken(token) {
  return fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token}
  })
}

export default function GiveUsersData() {
    
    
    const upDate = useSelector((state) => state.upDate);
    //const upDate = false;
    //console.log(upDate)

    //const username = 'Steve';
    //const password = 'password456'

    const username = useSelector((state) => state.username);
    const password = useSelector((state) => state.password);


    //const newFistname = 'Tony';
    //const newSurname = 'Stark';

    const newFistname = useSelector((state) => state.userFirstName);
    const newSurname = useSelector((state) => state.userSurName);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        userIdentify(username, password)
          .then(res => res.json())
          .then(
            (result) => {
              const token = result.body.token
              if(!upDate) {
                applyToken(token)
                .then(res => res.json())
                .then(
                  (result) => {
                    setIsLoaded(true);
                    setItems(result);
                  },
      
                  (error) => {
                    setIsLoaded(true);
                    setError(error);
                  }
                )
              } else{
                putUpDateData(newFistname, newSurname, token)
                .then(res => res.json())
                .then(
                  (result) => {
                    setIsLoaded(true);
                    setItems(result);
                  },
      
                  (error) => {
                    setIsLoaded(true);
                    setError(error);
                  }
                )
              }
            })
    }, [upDate, username, password, newFistname, newSurname])

    if (error) {
        return <div>Error:</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        const userData = new User(items.body);
        //console.log(userData)
        
        return(
          <React.Fragment>
              <Profile userData={userData} />
          </React.Fragment>
        )
    }
}