import { createContext, useState } from "react";

import moods from "./moods"

export const MoodContext = createContext(null)

const MoodProvider = ({children}) =>{
    const [currentMood,setCurrentMood] = useState("Neutral");
    const [moodIntensity,setMoodIntensity] = useState("");

    const getMoodByEmotion = (emotion) => {
        return moods.find((mood) => mood.emotion == emotion)
    }

    const getMoodByAngleAndRadius = (angle,radius) => {
        return moods.find((mood) => 
            angle >= mood.angleRange.min &&
            angle < mood.angleRange.max &&
            radius >= mood.radiusRange.min &&
            radius < mood.radiusRange.max
        )
    }

    return(
        <MoodContext.Provider
            value={{
                currentMood,
                setCurrentMood,
                moodIntensity,
                setMoodIntensity,
                moods,
                getMoodByEmotion,
                getMoodByAngleAndRadius
            }}
        >
            {children}
        </MoodContext.Provider>
    )
}

export default MoodProvider