import { useState } from "react";

import ChatSection from "./ChatSection";

const initialBotMessage = [
    {
        sender: "bot",
        text: "Welcome to the Medicine Lab!\nHere, you can craft emotional medicines to amplify any feeling you choose.",
    },
    {
        sender: "bot",
        text: "Are you ready to start?",
    },
    {
        sender: "user",
        type: "choice",
        choices: ["yes", "no"],
    },
];

const emotionChoice = [
    {
        sender: "bot",
        text: "Take a look at the emotion wheel below.Which emotion would you like your new medicine to amplify?",
    },
    {
        sender: "bot",
        text: "Please select an emotion from the wheel to continue.",
    },
    {
        sender: "user",
        type: "emotion-wheel",
    },
];

const Chat = () => {
    const [step, setStep] = useState("q1");
    const [chatHistory, setChatHistory] = useState([initialBotMessage]);

    

    return (
        <div className="chat-container">
            {chatHistory.map((section, sectionIndex) => (
                <ChatSection section={section} sectionIndex={sectionIndex} />
            ))}
        </div>
    );
};

export default Chat;
