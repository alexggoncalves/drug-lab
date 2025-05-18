import { createContext, useState, useEffect } from "react";

export const ChatContext = createContext(null);

const initialBotMessage = [
    {
        sender: "bot",
        type: "default",
        text: "Welcome to the Medicine Lab!\nHere, you can craft emotional medicines to amplify any feeling you choose.",
    },
    {
        sender: "bot",
        type: "default",
        text: "Are you ready to start?",
    },
    {
        sender: "user",
        type: "ready-choice",
        choices: ["YES", "NO"],
    },
];

const emotionChoice = [
    {
        sender: "bot",
        type: "default",
        text: "Take a look at the emotion wheel below.Which emotion would you like your new medicine to amplify?",
    },
    {
        sender: "bot",
        type: "default",
        text: "Please select an emotion from the wheel to continue.",
    },
    {
        sender: "user",
        type: "emotion-wheel",
    },
];

class ResultMessage {
    constructor(name, effect, form, sideEffects, description, intensity) {
        this.sender = "bot";
        this.type = "medicine-result";
        this.name = name;
        this.effect = effect;
        this.form = form;
        this.sideEffects = sideEffects;
        this.description = description;
        this.intensity = intensity;
    }
}

const ChatProvider = ({ children }) => {
    const [chatHistory, setChatHistory] = useState([initialBotMessage]);
    const [selectedEmotion, setSelectedEmotion] = useState();
    const [selectedEmotionIntensity, setSelectedEmotionIntensity] = useState();

    const handleReadyChoice = (event) => {
        const choice = event.target.innerHTML;

        if (choice === "YES") {
            setChatHistory((prev) => [...prev, emotionChoice]);
        }
    };

    const generateMedicine = async () => {
        console.log();
        const response = await fetch("http://localhost:3005/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emotion: selectedEmotion.name,
                emotionIntensity: selectedEmotionIntensity,
            }),
        });

        const data = await response.json();

        return data.response;
    };

    const handleEmotionChoice = async () => {
        const result = await generateMedicine();

        const newResultMessage = new ResultMessage(
            result.name,
            selectedEmotion.name,
            result.form,
            result.sideEffects,
            result.description,
            selectedEmotionIntensity
        );

        setChatHistory((prev) => [...prev, [newResultMessage]]);
    };

    return (
        <ChatContext.Provider
            value={{
                chatHistory,
                setChatHistory,
                handleReadyChoice,
                handleEmotionChoice,
                setSelectedEmotion,
                setSelectedEmotionIntensity,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export default ChatProvider;
