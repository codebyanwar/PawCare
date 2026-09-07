import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivetRoute = ({children}) => {

    const {user} = use(AuthContext);

    if(user && user?.email){
        return children;
    }
    else{
        return <Navigate to="/login"></Navigate>
    }

};

export default PrivetRoute;