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
            if (user) {
                const { displayName, email, uid, photoURL } = user;
                setUser({
                  displayName,
                  email,
                  uid,
                  photoURL,
                });
                setIsLoading(false);
                history.push('/');
                return;
              }
        
              // reset user info
              setUser({});
              setIsLoading(false);
              history.push('/login');
            });
        

        return () => {
            unsubscibed();
        }

    }, [history])

    return (
        <AuthContext.Provider value={ {user} }>
            { isLoading ? <Spin size="large" style={{ position: 'fixed', marginTop: '100px', inset: 0 }} /> : children }
        </AuthContext.Provider>
    )
}

