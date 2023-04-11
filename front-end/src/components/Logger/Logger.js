import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import '../../styles/Logger/Logger.css'

import { TbUserCircle } from "react-icons/tb";
import { FaSignOutAlt } from "react-icons/fa";

import { Link } from 'react-router-dom'
import { userLogOut } from '../Store/Store';


export default function Logger() {
    const isLogged = useSelector((state) => state.isLogged);
    const dispatch = useDispatch();

    return isLogged ? (
        <div>
            <Link className="main-nav-item" to={'/profile'}>
                <TbUserCircle />
                Tony
            </Link>
            <Link 
                className="main-nav-item" 
                onClick={() => {
                    dispatch(userLogOut());
                }}
                to={'/'}
            >
                <FaSignOutAlt />
                Sign Out
            </Link>
        </div>
    ) : (
        <div>
            <Link className="main-nav-item" to={'/login'}>
                <TbUserCircle />
                Sign In
            </Link>
        </div>
    )
}