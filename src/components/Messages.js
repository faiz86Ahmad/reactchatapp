import React,{useState,useContext} from 'react';
import Input from "./Input";
import {ContextProvider} from "../context/ContextProvider";

const Messages = () => {
    const {AllMsg,user} = useContext(ContextProvider);
    
    
      return(
         <div className="container">
            <div className="messages">
            <>
            {AllMsg.map(message=>message.email===user.email ?  <div className="messages__my right" key={message.id}>
                <div className="messages__my-p">
               <p>{message.msg}</p>
               {/*
              <div className="time">
               <small>{new Date(message.currentTime?.toDate()).toLocaleString()}</small>
               </div>
               */}
               
                </div>
                </div>
            :
            <div className="messages__other left" key={message.id}>
                <div className="messages__other-img">
                    <img src={message.photo} alt={message.photo}/>
                </div>
                <div className="messages__other-msg">
                    <span>{message.username}</span>
                    <p>{message.msg}</p>
                </div>
            </div>)}
            </>
            
            <Input />
             
        </div>
    
      </div>
      )
    
}

export default Messages;
