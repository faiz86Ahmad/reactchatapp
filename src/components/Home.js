import React from 'react';
import Welcome from "./Welcome";
import Messages from "./Messages";
import {ContextProvider} from "../context/ContextProvider";

const Home = () => {
    const {user,loader} = React.useContext(ContextProvider);

    return (
        <div className="container-wel">
            {!loader  ? user ? <Messages/>:<Welcome/> :'...'}
            
            
        </div>
    )
}

export default Home
