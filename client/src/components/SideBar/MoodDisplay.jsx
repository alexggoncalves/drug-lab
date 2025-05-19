import { useContext } from "react";
import { MoodContext } from "../../contexts/moodContext";

const MoodDisplay = () => {
    const {getMoodByName, currentMood, moodIntensity} = useContext(MoodContext);

    const mood = getMoodByName(currentMood);

    return (
        <div className="mood-display">
            <span>CURRENT MOOD:</span>
            <img src={mood.icon} alt="" />
            <div className="current-mood" style={{ background: mood.color }}>
                <span>{moodIntensity != "" ? moodIntensity + " " + mood.name : mood.name}</span>
            </div>
        </div>
    );
};

export default MoodDisplay;
