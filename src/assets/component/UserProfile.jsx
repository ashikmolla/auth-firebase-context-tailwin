import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const UserProfile = () => {
    const{user}=useContext(AuthContext)
    return (
        <div>
            <h1> Name:- {user.email}</h1>
            <h1> password:- {user.password}</h1>
            
        </div>
    );
};

export default UserProfile;