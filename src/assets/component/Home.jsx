import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';



const Home = () => {
    const user=useContext(AuthContext);
    return (
        <div>
           <h1>Name:- {user && <spen>{user.displayName}</spen>}</h1>
        </div>
    );
};

export default Home;