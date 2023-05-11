import React from 'react'
import { Link } from 'react-router-dom'
import Logger from '../Logger/Logger.js';
import '../../styles/Header/Header.css'
import argentBankLogo from '../../assets/argentBankLogo.png'


export default function Header() {
    return(
        <nav className="main-nav">
            <Link className="main-nav-logo" to={'/'}>
                <img
                    className="main-nav-logo-image"
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <Logger />
        </nav>
    )
}