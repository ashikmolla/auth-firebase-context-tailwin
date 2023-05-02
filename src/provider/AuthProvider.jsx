import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../friebase/friebase.config';



export const AuthContext = createContext(null);
const auth = getAuth(app)
const googleAurhProvider=new GoogleAuthProvider(); 

const AuthProvider = ({ children }) => {

    const[user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);


    //----------------- register ar jonno -----------------
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    /// -------------signIN / login ar jonno-------

    const signIN = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signINWithGoogle=()=>{
        return signInWithPopup(auth, googleAurhProvider)
    }

    // signOut ar jonno function
    const logOut=()=>{
        return signOut(auth);
    }
    
    // observe auth change
    // User is signed in
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('Auth stat chang=', currentUser);
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unsubscribe();
        }

    }, [])




    const authInfo = {
        user,
        loading,
        createUser,
        signIN,
        signINWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;