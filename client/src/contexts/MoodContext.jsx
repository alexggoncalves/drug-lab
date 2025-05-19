import { createContext, useState } from "react";

import moods from "./moods"

export const MoodContext = createContext(null)

const MoodProvider = ({children}) =>{
    const [ currentMood,setCurrentMood ] = useState("Neutral");
    const [ moodIntensity,setMoodIntensity ] = useState("");

    const getMoodByName = (name) => {
        return moods.find((mood) => mood.name == name)
    }

    const getMoodByAngleAndRadius = (angle,radius) => {
        return moods.find((mood) => 
            angle >= mood.angleRange.min &&
            angle < mood.angleRange.max &&
            radius >= mood.radiusRange.min &&
            radius < mood.radiusRange.max
        )
    }

    const getCurrentMood = ()=>{
        const mood = moodIntensity + currentMood;
    }

    return(
        <MoodContext.Provider
            value={{
                currentMood,
                setCurrentMood,
                moodIntensity,
                setMoodIntensity,
                moods,
                getMoodByName,
                getMoodByAngleAndRadius,
                getCurrentMood
            }}
        >
            {children}
        </MoodContext.Provider>
    )
}

export default MoodProvider