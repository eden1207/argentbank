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
    //const userFirstName = useSelector((state) => state.userFirstName);

    
    const user = useSelector((state) => state.user);
    const userFirstName1 = useSelector((state) => state.userFirstName1);
    const userFirstName2 = useSelector((state) => state.userFirstName2);

    function giveUserFirstname(user) {
        if(user === 'user1') {
            return userFirstName1
        }
        if(user === 'user2') {
            return userFirstName2
        }
    }

    const userFirstname = giveUserFirstname(user);

    const dispatch = useDispatch();

    return isLogged ? (
        <div>
            <Link className="main-nav-item" to={'/profile'}>
                <TbUserCircle />
                {userFirstname}
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