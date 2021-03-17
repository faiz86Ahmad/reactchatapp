import React,{createContext,useEffect,useState} from "react";
import {auth, db} from "../config";
import firebase from "firebase";

export const ContextProvider =  createContext();
 
const ContextFun = (props)=>{
    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    const [AllMsg,setAllMsg] = useState([])
    const register = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then((result)=>{
         firebase.auth().signInWithRedirect(provider);
        })  
    
    };
   
    const logout = ()=>{
        auth.signOut().then(()=>{
            setUser(null);
        })
    }
    const sendMessage = (msg)=>{
        db.collection("message").add({
            msg,
            username:user.displayName,
            photo:user.photoURL,
            email:user.email,
            currentTime:firebase.firestore.FieldValue.serverTimestamp()
        })

    }
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
     setUser(user);
     setLoader(false);
        });
  
        //fetch msg from the firestore
        db.collection("message").orderBy("currentTime","desc").onSnapshot((snp)=>{
            console.log("all messages", snp.docs);

            setAllMsg(snp.docs.map((doc)=>({
                id:doc.id,
                ...doc.data(),
            }))
        )
        })
  
      },[]);
      
    
    return(
        <ContextProvider.Provider value={{register,user,loader,logout,sendMessage,AllMsg}}>
            {props.children}
        </ContextProvider.Provider>
    )
}
export default ContextFun;