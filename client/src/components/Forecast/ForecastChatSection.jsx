import { useContext, useState } from "react";
import { ForecastChatContext } from "../../contexts/ForecastChatContext";

import NoCurrentMedicine from "./NoCurrentMedicine";
import CurrentMedicine from "./CurrentMedicine";

const ForecastChatSection = ({ section, sectionIndex }) => {
    const { handleReadyChoice, currentMedicine } =
        useContext(ForecastChatContext);
    const [disabled, setDisabled] = useState(false);

    return (
        <div className="chat-section" key={`section-${sectionIndex}`}>
            {section.map((message, messageIndex) => {
                if (message.sender === "bot") {
                    if (message.type === "default") {
                        return (
                            <div
                                key={`bot-${messageIndex}`}
                                className="message"
                            >
                                {message.text.split("\n").map((line, i) => (
                                    <p key={`bot-line-${messageIndex}-${i}`}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                        );
                    } else if (message.type === "current-medicine") {
                        return (
                            <div
                                key={`bot-${messageIndex}`}
                                className="message"
                            >
                                {message.text.split("\n").map((line, i) => (
                                    <div key={`med-line-${messageIndex}-${i}`}>
                                        <p>{line}</p>
                                        <CurrentMedicine
                                            medicine={currentMedicine}
                                        />
                                    </div>
                                ))}
                            </div>
                        );
                    } else if (message.type === "no-current-medicine") {
                        return (
                            <div
                                key={`bot-${messageIndex}`}
                                className="message"
                            >
                                <NoCurrentMedicine />
                            </div>
                        );
                    } else if (message.type === "forecast") {
                        return (
                            <div
                                key={`forecast-${messageIndex}`}
                                className="message"
                            >
                                <div style={{ marginBottom: "12px", textDecoration: "underline" }}>
                                    This is how your day may unfold:
                                </div>
                                <div>{message.forecast}</div>
                            </div>
                        );
                    }
                }

                if (message.sender === "user") {
                    if (message.type === "ready-choice") {
                        return (
                            <div
                                key={`choices-${messageIndex}`}
                                className="user-choices"
                            >
                                {message.choices.map((choice, choiceIndex) => (
                                    <button
                                        key={`choice-${messageIndex}-${choiceIndex}`}
                                        onClick={(e) => {
                                            handleReadyChoice(e);
                                            setDisabled(true);
                                        }}
                                        disabled={disabled}
                                    >
                                        {choice}
                                    </button>
                                ))}
                            </div>
                        );
                    }
                }

                return null;
            })}
        </div>
    );
};

export default ForecastChatSection;
