import "../chat.css";

import { useContext, useRef, useEffect } from "react";

import MedicineChatSection from "./MedicineChatSection";
import { MedicineChatContext } from "../../contexts/MedicineChatContext";

const MedicineChat = () => {
    const { chatHistory } = useContext(MedicineChatContext);
    const chatRef = useRef(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div className="chat-container" ref={chatRef}>
            {chatHistory.map((section, sectionIndex) => (
                <MedicineChatSection
                    key={`medicine-section-${sectionIndex}`}
                    section={section}
                    sectionIndex={sectionIndex}
                />
            ))}
        </div>
    );
};

export default MedicineChat;
