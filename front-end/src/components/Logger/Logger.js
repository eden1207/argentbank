import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import '../../styles/Logger/Logger.css'
import { TbUserCircle } from "react-icons/tb";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { userLogOut, switchUpDate } from '../Store/Store';

export default function Logger() {
    const dispatch = useDispatch();
    const isLogged = useSelector((state) => state.isLogged);
    const userFirstName = useSelector((state) => state.userFirstName);
    return isLogged ? (
        <div className='signout-design'>
            <Link className="main-nav-item" to={'/profile'}>
                <TbUserCircle />
                {userFirstName}
            </Link>
            <Link 
                className="main-nav-item" 
                onClick={() => {
                    dispatch(userLogOut());
                    dispatch(switchUpDate(false));
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