const Message = () => {

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
        <></>
    )
}

export default Message