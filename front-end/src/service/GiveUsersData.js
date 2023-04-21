import React, { useState, useEffect } from 'react'
//import { useParams } from 'react-router-dom';
//import UserActivity from '../components/UserPage/UserActivity';
//import ErrorPage from '../components/UserPage/ErrorPage';
//import { USER_ACTIVITY } from '../mocked-data/USER_ACTIVITY'


/*function giveBody(username, password) {
  if(username === "Tony" && password === "password123") {
    return '{"email": "tony@stark.com", "password": "password123"}'
  } else if(username === "Steve" && password === "password456"){
    return '{"email": "steve@rogers.com", "password": "password456"}'
  } else{
    console.log('Unknown user')
  }
}*/

function getToken(username, password) {
  let email = '';
  if(username === "Tony" && password === "password123") {
    email = 'tony@stark.com';
  } else if(username === "Steve" && password === "password456"){
    email = 'steve@rogers.com';
  } else{
    console.log('Unknown user')
  }
  fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: `{"email": "${email}", "password": "${password}"}`
  })
    .then(res => res.json())
    .then(
      (result) => {
        const token = result.body.token
        getData(token);
      })
}

function getData(token) {
  fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token}
  })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result.body);
      }
    )
}


function putUpDateData(firstname, surname) {
  fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    headers: {"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZlOTFmNTcyMGM1M2MyNDQzMWIzZSIsImlhdCI6MTY4MTk5NjcwNSwiZXhwIjoxNjgyMDgzMTA1fQ.xIruGvZjRZ7M7PbhsiMUQvq4wEagMyAKQ0lk2Wm-B34"},
    body: `{"firstName": "${firstname}", "lastName": "${surname}"}`
  })
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result.body);
      }
    )
}

/*const res = testFetch()*/
getToken("Tony", "password123");
putUpDateData('Tony', 'Stark');

/*console.log(res)*/



export default function GiveUsersData() {

    //const isMocked = process.env.REACT_APP_MOCKED_DATA==='true';

    //const { id } = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        /*fetch('http://localhost:3001/api/v1/user/login', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: '{"email": "tony@stark.com", "password": "password123"}'
        })*/
        fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'PUT',
          headers: {"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2ZlOTFmNTcyMGM1M2MyNDQzMWIzZSIsImlhdCI6MTY4MTk5NjcwNSwiZXhwIjoxNjgyMDgzMTA1fQ.xIruGvZjRZ7M7PbhsiMUQvq4wEagMyAKQ0lk2Wm-B34"},
          body: '{"firstName": "Thomas", "lastName": "Chabot"}'
        })
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






    }, [])

    if (error) {
        return <div>Error:</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        /*console.log(items)*/


        /*const token = items.body.token;
        console.log(token)*/











        //let data = [];
        /*if(isMocked) {
          const idValue = Number(id);
          const mockedData = giveMockedUserActivity(USER_ACTIVITY, idValue);
          data = new Activity(mockedData).sessions;
        } else{
          data = new Activity(items.data).sessions;
        }*/
        /*return(
          <React.Fragment>
              <UserActivity data={data} />
          </React.Fragment>
        )*/
    }
}