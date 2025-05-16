import { useContext, useEffect, useState } from "react";
import { MoodContext } from "../../contexts/moodContext";

const MoodDisplay = () => {
    const moodContext = useContext(MoodContext);

    const mood = moodContext.getMoodByEmotion(moodContext.currentMood);

    return (
        <div className="mood-display">
            <span>CURRENT MOOD:</span>
            <img src={mood.icon} alt="" />
            <div className="current-mood" style={{ background: mood.color }}>
                <span>{mood.emotion}</span>
            </div>
        </div>
    );
};

export default MoodDisplay;
