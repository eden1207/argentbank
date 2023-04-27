import React from 'react'

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

export default function Profile({ userData }) {
    return(
        <div className='html'>
          <div className='body'>
                <Header />
                <main className="main bg-dark">
                    <ProfileBanner userData={userData} />
                    <h2 className="sr-only">Accounts</h2>
                    {
                        accountData.map((data) => (
                            <Account key={data.id} data={data} />
                        ))
                    }
                </main>
                <Footer />
          </div>
        </div>
    )
}


/**
 * <h1>Welcome back<br />Tony Jarvis!</h1>
 */