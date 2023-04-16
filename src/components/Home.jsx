import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthProdiver';

const Home = () => {
    const user = useContext(AuthContex)
    return (
        <div>
            home
            <p>{user && user.displayName}</p>
        </div>
    );
};

export default Home;