import React, { useContext } from 'react';
import { AuthContex } from '../providers/AuthProdiver';

const Home = () => {
    const {user} = useContext(AuthContex)
    return (
        <div>
            home
        </div>
    );
};

export default Home;