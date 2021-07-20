import React, { createContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config';
import { Spin} from 'antd';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
         const unsubscibed = auth.onAuthStateChanged((user) => {
            if (!user) {
                setIsLoading(false);
                history.push('/login');
            }          
            const {displayName, email, photoURL, uid} = user;
            setUser({
                displayName, 
                email, 
                photoURL, 
                uid
            });
            
            setIsLoading(false);
            history.push('/');

        });

        return () => {
            unsubscibed();
        }

    }, [history])

    return (
        <AuthContext.Provider value={ user }>
            { isLoading ? <Spin /> : children }
        </AuthContext.Provider>
    )
}

