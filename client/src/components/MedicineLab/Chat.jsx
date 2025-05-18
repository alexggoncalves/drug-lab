import "./chat.css";

import { useContext, useRef, useEffect } from "react";

import ChatSection from "./ChatSection";
import { ChatContext } from "../../contexts/ChatContext";

const Chat = () => {
    const { chatHistory } = useContext(ChatContext);
    const chatRef = useRef(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div className="chat-container" ref={chatRef}>
            {chatHistory.map((section, sectionIndex) => (
                <ChatSection section={section} sectionIndex={sectionIndex} />
            ))}
        </div>
    );
};

export default Chat;
