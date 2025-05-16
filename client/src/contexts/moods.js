import neutralIcon from "../assets/moods/neutral.png"
import happyIcon from "../assets/moods/happy.png"
import excitedIcon from "../assets/moods/excited.png"
import alertIcon from "../assets/moods/alert.png"
import tenseIcon from "../assets/moods/tense.png"
import angryIcon from "../assets/moods/angry.png"
import distressedIcon from "../assets/moods/distressed.png"
import sadIcon from "../assets/moods/sad.png"
import depressedIcon from "../assets/moods/depressed.png"
import boredIcon from "../assets/moods/bored.png"
import calmIcon from "../assets/moods/calm.png"
import relaxedIcon from "../assets/moods/relaxed.png"
import contentIcon from "../assets/moods/content.png"

const moods = [
    {
        emotion: "Neutral",
        angleRange: {min:0, max: 360},
        radiusRange: {min:0.0, max: 0.2},
        icon: neutralIcon,
        color: "#A9A9B3"
    },
    {
        emotion: "Happy",
        angleRange: {min:0, max: 30},
        radiusRange: {min:0.2, max: 1.0},
        icon: happyIcon,
        color: "#FFD93B"
    },
    {
        emotion: "Excited",
        angleRange: {min:30, max: 60},
        radiusRange: {min:0.2, max: 1.0},
        icon: excitedIcon,
        color: "#FF8800"
    },
    {
        emotion: "Alert",
        angleRange: {min:60, max: 90},
        radiusRange: {min:0.2, max: 1.0},
        icon: alertIcon,
        color: "#FF2E2E"
    },
    {
        emotion: "Tense",
        angleRange: {min:90, max: 120},
        radiusRange: {min:0.2, max: 1.0},
        icon: tenseIcon,
        color: "#B83280"
    },
    {
        emotion: "Angry",
        angleRange: {min:120, max: 150},
        radiusRange: {min:0.2, max: 1.0},
        icon: angryIcon,
        color: "#D7263D"
    },
    {
        emotion: "Distressed",
        angleRange: {min:150, max: 180},
        radiusRange: {min:0.2, max: 1.0},
        icon: distressedIcon,
        color: "#8F3985"
    },
    {
        emotion: "Sad",
        angleRange: {min:180, max: 210},
        radiusRange: {min:0.2, max: 1.0},
        icon: sadIcon,
        color: "#3B5BA5"
    },
    {
        emotion: "Depressed",
        angleRange: {min:210, max: 240},
        radiusRange: {min:0.2, max: 1.0},
        icon: depressedIcon,
        color: "#5C5470"
    },
    {
        emotion: "Bored",
        angleRange: {min:240, max: 270},
        radiusRange: {min:0.2, max: 1.0},
        icon: boredIcon,
        color: "#E2C290"
    },
    {
        emotion: "Calm",
        angleRange: {min:270, max: 300},
        radiusRange: {min:0.2, max: 1.0},
        icon: calmIcon,
        color: "#4FC3F7"
    },
    {
        emotion: "Relaxed",
        angleRange: {min:300, max: 330},
        radiusRange: {min:0.2, max: 1.0},
        icon: relaxedIcon,
        color: "#4DE1B3"
    },
    {
        emotion: "Content",
        angleRange: {min:330, max: 360},
        radiusRange: {min:0.2, max: 1.0},
        icon: contentIcon,
        color: "#7ED957"
    }
]

export default moods