import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../Store/Store.js";
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import ProfileBanner from '../ProfileBanner/ProfileBanner.js';
import '../../styles/Home/Home.css'

const accountData = [
    {
        'id': 'accountData1',
        'title': 'Argent Bank Checking (x8349)',
        'amount': '$2,082.79',
        'description': 'Available Balance'
    },
    {
        'id': 'accountData2',
        'title': 'Argent Bank Savings (x6712)',
        'amount': '$10,928.42',
        'description': 'Available Balance'
    },
    {
        'id': 'accountData3',
        'title': 'Argent Bank Credit Card (x8349)',
        'amount': '$184.30',
        'description': 'Current Balance'
    }
];

function Account({ data }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{data.title}</h3>
                <p className="account-amount">{data.amount}</p>
                <p className="account-amount-description">{data.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

function applyToken(token) {
    return fetch(process.env.REACT_APP_PORT + '/user/profile', {
      method: 'POST',
      headers: {"Content-Type": "application/json", "Authorization": "Bearer " + token}
    })
}

export default function Profile() {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.userToken);

    useEffect(() => {

        applyToken(userToken)
          .then(res => res.json())
          .then(
            (result) => {
                dispatch(setUserData(result.body.email, result.body.id, result.body.firstName, result.body.lastName))
            }
        )
  
    }, [dispatch, userToken])

    return(
        <div className='html body'>
            <Header />
            <main className="main bg-dark">
                <ProfileBanner />
                <h2 className="sr-only">Accounts</h2>
                {
                    accountData.map((data) => (
                        <Account key={data.id} data={data} />
                    ))
                }
            </main>
            <Footer />
        </div>
    )
}