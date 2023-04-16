import React, { createContext } from 'react';

export const AuthContex = createContext(null)
const AuthProdiver = ({children}) => {
    const user = {displayName: 'Ata gacher tota pakhi'}
    return ( 
        <AuthContex.Provider value={user}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProdiver;