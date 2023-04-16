import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase_config';

export const AuthContex = createContext(null)
const AuthProdiver = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo = {
        user,
        createUser,
        signIn
    }

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProdiver;