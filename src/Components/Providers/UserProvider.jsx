import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase.config';

export const authContext = createContext(null);
const auth = getAuth(app);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const createLoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const appInfo = {
        user,
        createUser,
        createLoginUser
    }
    return (
        <authContext.Provider value={appInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserProvider;