// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState(() => {
        const token = localStorage.getItem('token');
        return token ? { token } : null;
    });

    useEffect(() => {
        if (authData && authData.token) {
            localStorage.setItem('token', authData.token);
        } else {
            localStorage.removeItem('token');
        }
    }, [authData]);

    const logout = () => {
        setAuthData(null);
    };

    return (
        <AuthContext.Provider value={{ authData, setAuthData, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
