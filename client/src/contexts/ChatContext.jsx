import { createContext, useState } from "react";

export const ChatContext = createContext(null);

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
        type: "ready-choice",
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

const ChatProvider = ({ children }) => {
    const [chatHistory, setChatHistory] = useState([initialBotMessage]);
    const [selectedEmotion, setSelectedEmotion] = useState();

    const handleReadyChoice = (event) => {
        const choice = event.target.innerHTML;

        if (choice === "yes") {
            setChatHistory((prev) => [
                ...prev,
                emotionChoice
            ]);
        }
    };

    const handleEmotionChoice = () =>{
        console.log("aaa");
    }

    return (
        <ChatContext.Provider
            value={{
                chatHistory,
                setChatHistory,
                handleReadyChoice,
                handleEmotionChoice,
                setSelectedEmotion   
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export default ChatProvider;
