import React, { useContext } from 'react';
import AuthContext from '../context/authContext';

const Logout = () => {
    const authCtx = useContext(AuthContext)
    return (
        <>
            <div>
               <button className='btn btn-logout' onClick={authCtx.logout}>Logout</button>
            </div>
        </>
    );
};

export default Logout;