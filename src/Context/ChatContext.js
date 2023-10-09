import { createContext, useContext } from "react";

import { useAuthContext } from "./Auth";
import { useReducer } from "react";
const ChatContext = createContext();



export const ChatContextProvider = ({ children }) => {
    const { currentUser } = useAuthContext();
 const INITIAL_STATE = {
    chatID: null,
    users: {},
    // messages: [],
    // usersOnline: 0,
    // usersOffline: 0,
    // userOnline: null,
 };
 const ChatReducer =(state,action)=>{
    switch(action.type){
        case 'CHANGE_USER':
            return {
                 users: action.payload,
                chatID: currentUser.uid > action.payload.uid
                ? currentUser.uid + action.payload.uid
                : action.payload.uid + currentUser.uid,
            }
     
        default:
            return state;
    }
 }
const [state,dispatch] = useReducer(ChatReducer,INITIAL_STATE)
    return (
        <ChatContext.Provider value={{data:state, dispatch}}>
            {children}
        </ChatContext.Provider>
    )
}


export const useChatContext = () => {
    return useContext(ChatContext);
}