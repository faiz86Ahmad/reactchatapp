import React,{useState,useContext} from 'react';
import {ContextProvider} from "../context/ContextProvider";


const Input = () => {
    const {sendMessage} = React.useContext(ContextProvider);
    const audio = new Audio("../chat.mp3");
    const [msg,setMsg] = useState("");
    const sendMsg = (e)=>{
        e.preventDefault();
        sendMessage(msg,audio.play());
    
        setMsg("");
    }
    return (
        
             <div className="input-form">
                <form onSubmit={sendMsg}>
                <input type="text" 
                       name="" 
                       className="input__control" 
                       placeholder="write a message...." 
                       onChange={(e)=>setMsg(e.target.value)}
                       value={msg}
                       required
                       
                       />
                      <button className="btn" type="submit">send</button>
                    
                    
                       
                </form>

            </div>
        
    )
}

export default Input;
