import { createContext, useState, useEffect, useContext } from "react";
import { MoodContext } from "./moodContext";

export const ForecastChatContext = createContext(null);

const initialBotMessage = [
    {
        sender: "bot",
        type: "default",
        text: "Welcome to your Emotional Forecast! \n Tell me your plans for today, and I’ll analyze your current emotional medicine to predict how your day might unfold.",
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

const dayPlansMessage = [
    {
        sender: "bot",
        type: "current-medicine",
        text: "You are currently under the effect of:",
    },
    {
        sender: "user",
        type: "emotion-wheel",
    },
];

const waiting = [
    {
        sender: "bot",
        type: "no-current-medicine",
    },
];

const newGeneration = [
    {
        sender: "bot",
        type: "default",
        text: "Do you wish to get a new forecast?",
    },
    {
        sender: "user",
        type: "ready-choice",
        choices: ["YES"],
    },
];

const loadingMessage = {
    sender: "bot",
    type: "default",
    text: "Please wait while we forecast your day...",
};

class ResultMessage {
    constructor(medicineName, forecast) {
        this.sender = "bot";
        this.type = "forecast";
        this.medicineName = medicineName;
        this.forecast = forecast
    }
}

const ForecastChatProvider = ({ children }) => {
    const [currentMedicine, setCurrentMedicine] = useState(null);
    const [chatHistory, setChatHistory] = useState([initialBotMessage]);
    const [waitingForMedicine, setWaitingForMedicine] = useState(false);
    const [dayPlans, setDayPlans] = useState("");

    const handleReadyChoice = (event) => {
        const choice = event.target.innerHTML;

        if (choice === "YES") {
            if (currentMedicine) {
                setChatHistory((prev) => [...prev, dayPlansMessage]);
            } else if (!currentMedicine) {
                setChatHistory((prev) => [...prev, waiting]);
                setWaitingForMedicine(true);
            }
        }
    };

    const setMedicine = (medicine) => {
        setCurrentMedicine(medicine);

        if (waitingForMedicine) {
            setChatHistory((prev) => [...prev, dayPlansMessage]);
            setWaitingForMedicine(false);
        }
    };

    const generateForecast = async () => {
        const response = await fetch("http://localhost:3005/forecast", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                currentMedicine: currentMedicine.name,
                effect: currentMedicine.effect,
                form: currentMedicine.form,
                sideEffects: currentMedicine.sideEffects,
                description: currentMedicine.description,
                intensity: currentMedicine.intensity,
                dayPlans: dayPlans,
            }),
        });

        const data = await response.json();

        return data.response;
    };

    const handleForecastGeneration = async () => {
        setChatHistory((prev) => [...prev, [loadingMessage]]);

        const result = await generateForecast();

        const forecast = new ResultMessage(currentMedicine.name,result.forecast)

        setChatHistory((prev) => [...prev, [forecast]]);
        setChatHistory((prev) => [...prev, newGeneration]);
    };

    return (
        <ForecastChatContext.Provider
            value={{
                chatHistory,
                setChatHistory,
                currentMedicine,
                setMedicine,
                handleReadyChoice,
                setWaitingForMedicine,
                handleForecastGeneration,
                setDayPlans
            }}
        >
            {children}
        </ForecastChatContext.Provider>
    );
};

export default ForecastChatProvider;
