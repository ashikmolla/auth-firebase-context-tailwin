import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    if(loading){
        return <progress className="progress w-56 m-auto"></progress>
    }
    if (user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate> ;
};

export default PrivateRouter;