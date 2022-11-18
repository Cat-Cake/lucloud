import { useContext } from 'react';
import { redirect, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Private = ({ children }) => {

    const authContext = useContext(AuthContext);

    return authContext.isLogged ? (
        <Navigate to={"personnal-space"} />
    ) : (
        <Navigate to="/connexion" replace={true} />
    );
};

export default Private;
