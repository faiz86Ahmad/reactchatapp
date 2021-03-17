import React from 'react';
import Image from "../chatpic.png";

const Welcome = () => {
    return (
        <>
        <div className="welcome"> 
            <h1>Welcome to messenger</h1>
            <p>Chat messages are generally short in order to enable other participants to respond quickly. 
                Thereby, a feeling similar to a spoken conversation is created.
                Messaging Apps Are Changing the World of Private Communication 
                Messaging apps such as WhatsApp, WeChat, Facebook Messenger.<span className="auther"><h3>developed by Faizan Ahmad</h3></span>

            </p>

        </div>
        <div className="image-box">
            
                <img src={Image} alt="image" className="image-pic" />
    
        </div>
        </>
    )
}

export default Welcome;
