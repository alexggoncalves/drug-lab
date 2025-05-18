import { useContext } from "react";

import { ChatContext } from "../../contexts/ChatContext";
import EmotionWheel from "./EmotionWheel";

const ChatSection = ({ section, sectionIndex }) => {
    const { handleReadyChoice } = useContext(ChatContext);

    return (
        <div className="chat-section" key={`section-${sectionIndex}`}>
            {section.map((message, messageIndex) => {
                if (message.sender == "bot") {
                    return (
                        <div
                            key={`bot-${messageIndex}`}
                            className="message"
                        >
                            {message.text.split("\n").map((line, i) => (
                                <p key={`line-${i}`}>{line}</p>
                            ))}
                        </div>
                    );
                }

                if (message.sender == "user") {
                    if (message.type === "ready-choice") {
                        return (
                            <div
                                key={`choices-${messageIndex}`}
                                className="user-choices"
                            >
                                {message.choices.map((choice, choiceIndex) => (
                                    <button
                                        key={`choice-${choiceIndex}`}
                                        onClick={handleReadyChoice}
                                    >
                                        {choice}
                                    </button>
                                ))}
                            </div>
                        );
                    } else if (message.type === "emotion-wheel") {
                        return (
                            <div>
                                <EmotionWheel></EmotionWheel>
                            </div>
                        );
                    }
                }

                return null;
            })}
        </div>
    );
};

export default ChatSection;
