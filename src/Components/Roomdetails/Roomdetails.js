import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Roomdetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    return (
        <div>
            <h1>room details</h1>
        </div>
    );
};

export default Roomdetails;