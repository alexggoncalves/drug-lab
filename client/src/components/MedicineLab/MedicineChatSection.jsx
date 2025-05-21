import { useContext, useState } from "react";

import { MedicineChatContext } from "../../contexts/MedicineChatContext";
import EmotionWheel from "./EmotionWheel";
import MedicineResult from "./MedicineResult";

const MedicineChatSection = ({ section, sectionIndex }) => {
    const { handleReadyChoice } = useContext(MedicineChatContext);
    const [disabled, setDisabled] = useState(false);

    const handleChoice = (e) => {
        setDisabled(true);
        handleReadyChoice(e);
    };

    return (
        <div className="chat-section" key={`section-${sectionIndex}`}>
            {section.map((message, messageIndex) => {
                const baseKey = `section-${sectionIndex}-message-${messageIndex}`;

                if (message.sender === "bot") {
                    if (message.type === "default") {
                        return (
                            <div key={`${baseKey}-bot`} className="message">
                                {message.text.split("\n").map((line, i) => (
                                    <p key={`${baseKey}-line-${i}`}>{line}</p>
                                ))}
                            </div>
                        );
                    } else if (message.type === "medicine-result") {
                        return (
                            <div key={`${baseKey}-medicine-result`}>
                                <MedicineResult
                                    name={message.name}
                                    emotion={message.emotion}
                                    effect={message.effect}
                                    form={message.form}
                                    sideEffects={message.sideEffects}
                                    description={message.description}
                                    intensity={message.intensity}
                                />
                            </div>
                        );
                    }
                }

                if (message.sender === "user") {
                    if (message.type === "ready-choice") {
                        return (
                            <div key={`${baseKey}-choices`} className="user-choices">
                                {message.choices.map((choice, choiceIndex) => (
                                    <button
                                        key={`${baseKey}-choice-${choiceIndex}`}
                                        onClick={handleChoice}
                                        disabled={disabled}
                                    >
                                        {choice}
                                    </button>
                                ))}
                            </div>
                        );
                    } else if (message.type === "emotion-wheel") {
                        return (
                            <div key={`${baseKey}-emotion-wheel`}>
                                <EmotionWheel />
                            </div>
                        );
                    }
                }

                return null;
            })}
        </div>
    );
};

export default MedicineChatSection;
