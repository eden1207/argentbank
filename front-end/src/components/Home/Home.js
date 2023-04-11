import React from 'react'

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

import '../../styles/Home/Home.css'
import iconchat from '../../assets/icon-chat.png'
import iconmoney from '../../assets/icon-money.png'
import iconsecurity from '../../assets/icon-security.png'

const featuresData = [
    {
        'id': 'featuresData1',
        'image': iconchat,
        'description': 'Chat Icon',
        'title': 'You are our #1 priority',
        'text': 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    {
        'id': 'featuresData2',
        'image': iconmoney,
        'description': 'Money Icon',
        'title': 'More savings means higher rates',
        'text': 'The more you save with us, the higher your interest rate will be!'
    },
    {
        'id': 'featuresData3',
        'image': iconsecurity,
        'description': 'Security Icon',
        'title': 'Security you can trust',
        'text': 'We use top of the line encryption to make sure your data and money is always safe.'
    }
];


function Feature({ data }) {
    return (
        <div className="feature-item">
            <img src={data.image} alt={data.description} className="feature-icon" />
            <h3 className="feature-item-title">{data.title}</h3>
            <p>{data.text}</p>
        </div>
    )
}


export default function Home() {
    return(
        <div className='html'>
          <div className='body'>
            <Header />
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    {
                        featuresData.map((data) => (
                            <Feature key={data.id} data={data} />
                        ))
                    }
                </section>
            </main>
            <Footer />
          </div>
        </div>
    )
}