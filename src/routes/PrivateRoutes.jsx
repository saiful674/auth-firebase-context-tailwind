import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthProdiver';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContex)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;