import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../friebase/friebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)
const user='ashik';

const AuthProvider = ({children}) => {
 //----------------- register ar jonno -----------------
 const createUser=(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
 }
 /// -------------signIN / login ar jonno-------

 const signIN=(email,password)=>{
    return signInWithEmailAndPassword(auth, email, password)
 }




    const authInfo={
        user,
        createUser,
        signIN
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;