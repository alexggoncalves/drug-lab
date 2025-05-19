import { createContext, useState, useEffect, useContext } from "react";
import { MoodContext } from "./moodContext";

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

const newReadyChoice = [
    {
        sender: "bot",
        type: "default",
        text: "How about now? Ready?",
    },
    {
        sender: "user",
        type: "ready-choice",
        choices: ["YES", "NO"],
    },
];

const newGeneration = [
    {
        sender: "bot",
        type: "default",
        text: "Do you wish to generate a new medicine?",
    },
    {
        sender: "user",
        type: "ready-choice",
        choices: ["YES", "NO"],
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

const loadingMessage = {
    sender: "bot",
    type: "default",
    text: "Generating your new medicine...",
};

const ChatProvider = ({ children }) => {
    const {getMoodByName} = useContext(MoodContext)

    const neutralMood = getMoodByName("Neutral")

    const [chatHistory, setChatHistory] = useState([initialBotMessage]);
    const [selectedEmotion, setSelectedEmotion] = useState(neutralMood);
    const [selectedEmotionIntensity, setSelectedEmotionIntensity] = useState(2);

    const handleReadyChoice = (event) => {
        const choice = event.target.innerHTML;

        if (choice === "YES") {
            setChatHistory((prev) => [...prev, emotionChoice]);
        } else if (choice === "NO"){
            setChatHistory((prev) => [...prev, newReadyChoice])
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
        setChatHistory((prev) => [...prev, [loadingMessage]]);

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
        setChatHistory((prev) => [...prev, newGeneration]);
        
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
