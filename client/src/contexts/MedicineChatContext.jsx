import { createContext, useState, useEffect, useContext } from "react";
import { MoodContext } from "./MoodContext";

export const MedicineChatContext = createContext(null);

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
        choices: ["YES"],
    },
];

const emotionChoice = [
    {
        sender: "bot",
        type: "default",
        text: "Please select an emotion from the wheel to produce your medicine.",
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
        choices: ["YES"],
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
        choices: ["YES"],
    },
];

class ResultMessage {
    constructor(name, emotion, effect, form, sideEffects, description, intensity) {
        this.sender = "bot";
        this.type = "medicine-result";
        this.name = name;
        this.emotion = emotion;
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
    text: "Please wait while we produce your medicine...",
};

const MedicineChatProvider = ({ children }) => {
    const {getMoodByName} = useContext(MoodContext)

    const neutralMood = getMoodByName("Neutral")

    const [chatHistory, setChatHistory] = useState([initialBotMessage]);
    const [selectedEmotion, setSelectedEmotion] = useState(neutralMood);
    const [selectedEmotionIntensity, setSelectedEmotionIntensity] = useState(2);
    const [typedExtraSymptoms,setTypedExtraSymptoms] = useState("");

    const handleReadyChoice = (event) => {
        const choice = event.target.innerHTML;

        if (choice === "YES") {
            setChatHistory((prev) => [...prev, emotionChoice]);
        } else if (choice === "NO"){
            setChatHistory((prev) => [...prev, newReadyChoice])
        }
    };

    const generateMedicine = async () => {
        const response = await fetch("https://feels-lab.onrender.com/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emotion: selectedEmotion.name,
                emotionIntensity: selectedEmotionIntensity,
                extraSymptoms: typedExtraSymptoms
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
            result.emotion,
            result.effects,
            result.form,
            result.sideEffects,
            result.description,
            selectedEmotionIntensity
        );

        setChatHistory((prev) => [...prev, [newResultMessage]]);
        setChatHistory((prev) => [...prev, newGeneration]);
    };

    return (
        <MedicineChatContext.Provider
            value={{
                chatHistory,
                setChatHistory,
                handleReadyChoice,
                handleEmotionChoice,
                setSelectedEmotion,
                setSelectedEmotionIntensity,
                setTypedExtraSymptoms
            }}
        >
            {children}
        </MedicineChatContext.Provider>
    );
};

export default MedicineChatProvider;
