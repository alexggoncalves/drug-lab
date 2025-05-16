import { createContext, useState } from "react";

export const ChatContext = createContext(null)

const ChatProvider = ({children}) =>{

    return(
        <ChatContext.Provider
            value={{

            }}
        >
            {children}
        </ChatContext.Provider>
    )
}

export default ChatProvider