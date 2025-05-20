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
        name: "Neutral",
        effect: "Emotional neutrality",
        angleRange: {min:0, max: 360},
        radiusRange: {min:0.0, max: 0.2},
        icon: neutralIcon,
        color: "#A9A9B3"
    },
    {
        name: "Happy",
        effect: "Happiness",
        angleRange: {min:0, max: 30},
        radiusRange: {min:0.2, max: 1.0},
        icon: happyIcon,
        color: "#FFD93B"
    },
    {
        name: "Excited",
        effect: "Excitement",
        angleRange: { min: 30, max: 60 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: excitedIcon,
        color: "#FF8800"
    },
    {
        name: "Alert",
        effect: "Alertness",
        angleRange: { min: 60, max: 90 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: alertIcon,
        color: "#FF2E2E"
    },
    {
        name: "Tense",
        effect: "Tension",
        angleRange: { min: 90, max: 120 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: tenseIcon,
        color: "#B83280"
    },
    {
        name: "Angry",
        effect: "Anger",
        angleRange: { min: 120, max: 150 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: angryIcon,
        color: "#D7263D"
    },
    {
        name: "Distressed",
        effect: "Distress",
        angleRange: { min: 150, max: 180 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: distressedIcon,
        color: "#8F3985"
    },
    {
        name: "Sad",
        effect: "Sadness",
        angleRange: { min: 180, max: 210 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: sadIcon,
        color: "#3B5BA5"
    },
    {
        name: "Depressed",
        effect: "Depression",
        angleRange: { min: 210, max: 240 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: depressedIcon,
        color: "#5C5470"
    },
    {
        name: "Bored",
        effect: "Boredom",
        angleRange: { min: 240, max: 270 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: boredIcon,
        color: "#E2C290"
    },
    {
        name: "Calm",
        effect: "Calmness",
        angleRange: { min: 270, max: 300 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: calmIcon,
        color: "#4FC3F7"
    },
    {
        name: "Relaxed",
        effect: "Relaxation",
        angleRange: { min: 300, max: 330 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: relaxedIcon,
        color: "#4DE1B3"
    },
    {
        name: "Content",
        effect: "Contentment",
        angleRange: { min: 330, max: 360 },
        radiusRange: { min: 0.2, max: 1.0 },
        icon: contentIcon,
        color: "#7ED957"
    }
]

export default moods