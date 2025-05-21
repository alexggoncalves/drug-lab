import "../chat.css"

import { useContext, useRef, useEffect } from "react";

import ForecastChatSection from "./ForecastChatSection";
import { ForecastChatContext } from "../../contexts/ForecastChatContext";



const ForecastChat = () => {
    const { chatHistory } = useContext(ForecastChatContext);
    const chatRef = useRef(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div className="chat-container" ref={chatRef}>
            {chatHistory.map((section, sectionIndex) => (
                <ForecastChatSection key={`forecast-section-${sectionIndex}`}  section={section} sectionIndex={sectionIndex} />
            ))}
        </div>
    );
};
 
export default ForecastChat;
