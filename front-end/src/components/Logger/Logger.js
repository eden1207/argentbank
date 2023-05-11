import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import '../../styles/Logger/Logger.css'
import { TbUserCircle } from "react-icons/tb";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { userLogOut, switchUpDate, userNoEditMode, setUserToken } from '../Store/Store';

/**
 * Component to display the sign in / sign out button of the header
 */
export default function Logger() {
    /**
     * Function dispatch to send actions to the reducer
     */
    const dispatch = useDispatch();
    /**
     * States to bring different informations about the logger button
     * of the header (sign in / sign out), the data corresponding to the user logged
     * and the Remenber Me button state in order to refresh the user data or not after log out
     */
    const isLogged = useSelector((state) => state.isLogged);
    const userData = useSelector((state) => state.userData);
    const isChecked = useSelector((state) => state.isChecked);
    return isLogged ? (
        <div className='signout-design'>
            <Link className="main-nav-item" to={'/profile'}>
                <TbUserCircle />
                {userData.firstName}
            </Link>
            <Link 
                className="main-nav-item" 
                onClick={() => {
                    dispatch(userLogOut());
                    dispatch(switchUpDate(false));
                    dispatch(userNoEditMode());
                    if(isChecked === false) {
                        dispatch(setUserToken(''));
                    }
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