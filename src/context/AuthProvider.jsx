import React, { useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signInWithPopup, 
    signOut 
} from 'firebase/auth';
import auth from '../firebase/firebase.init';
import AuthContext from './AuthContext/AuthContext';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create a new user with email and password
    const createUser = async (email, password) => {
        setLoading(true);
        try {
        return await createUserWithEmailAndPassword(auth, email, password);
      } finally {
        return setLoading(false);
      }
    };

    // Sign in an existing user with email and password
    const signInUser = async (email, password) => {
        setLoading(true);
        try {
        return await signInWithEmailAndPassword(auth, email, password);
      } finally {
        return setLoading(false);
      }
    };

    // Sign in with Google
    const signInWithGoogle = async () => {
        setLoading(true);
        try {
        return await signInWithPopup(auth, googleProvider);
      } finally {
        return setLoading(false);
      }
    };

    // Sign out the current user
    const signOutUser = async () => {
        setLoading(true);
        try {
        return await signOut(auth);
      } finally {
        return setLoading(false);
      }
    };

    // Set up an observer for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log('Auth State Changed:', currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe(); // Clean up on unmount
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
