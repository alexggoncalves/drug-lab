import Message from "./Message";

const ChatSection = ({section,sectionIndex}) => {

    const handleChoice = (event) => {
        const choice = event.target.innerHTML;

        if (choice === "yes") {
            setChatHistory((prev) => [
                ...prev,
                [{
                    sender: "bot",
                    text: "Select an emotion from the wheel:",
                },
                {
                    sender: "user",
                    type: "emotion-wheel",
                }],
            ]);

            
        }
        
    };
    
    return (
        <div key={`section-${sectionIndex}`}>
            {section.map((message, messageIndex) => {
                <Message
                    
                />

                if (message.sender == "bot") {
                    return (
                        <div
                            key={`bot-${messageIndex}`}
                            className="bot-message"
                        >
                            {message.text.split("\n").map((line, i) => (
                                <p key={`line-${i}`}>{line}</p>
                            ))}
                        </div>
                    );
                }

                if (message.sender == "user") {
                    return (
                        <div
                            key={`choices-${messageIndex}`}
                            className="user-choices"
                        >
                            {message.choices.map((choice, choiceIndex) => (
                                <button
                                    key={`choice-${choiceIndex}`}
                                    onClick={handleChoice}
                                >
                                    {choice}
                                </button>
                            ))}
                        </div>
                    );
                }

                return null;
            })}
        </div>
    );
};

export default ChatSection