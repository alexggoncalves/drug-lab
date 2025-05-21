import { useEffect, useRef, useState, useContext } from "react";

import { MoodContext } from "../../contexts/moodContext";
import { MedicineChatContext } from "../../contexts/MedicineChatContext";

const emotions = [
    "Happy",
    "Excited",
    "Alert",
    "Tense",
    "Angry",
    "Distressed",
    "Sad",
    "Depressed",
    "Bored",
    "Calm",
    "Relaxed",
    "Content",
];

const EmotionWheel = () => {
    const { getMoodByAngleAndRadius, getMoodByName } = useContext(MoodContext);
    const {
        handleEmotionChoice,
        setSelectedEmotion,
        setSelectedEmotionIntensity,
        setTypedExtraSymptoms
    } = useContext(MedicineChatContext);

    const canvasRef = useRef(null);

    const [selection, setSelection] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [emotion, setEmotion] = useState(getMoodByName("Neutral"));
    const [emotionIntensity, setEmotionIntensity] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [extraSymptons, setExtraSymptoms] = useState("");

    const padding = 10;
    const separationLinesLength = 10;

    const drawWheel = (ctx, width, height) => {
        const center = { x: width / 2, y: height / 2 };
        const radius = width / 2 - padding * 2;

        // Draw Background
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);

        ctx.setLineDash([]);
        ctx.strokeStyle = "black";

        // Draw outer circle
        ctx.beginPath();
        ctx.arc(center.x, center.y, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 0.2;
        ctx.stroke();

        // Draw neutral label
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "13px Space Grotesk";
        ctx.fillStyle = "grey";
        ctx.fillText("Neutral", center.x, center.y);

        // Draw inner circles
        for (let i = 0; i < 3; i++) {
            ctx.beginPath();

            ctx.arc(
                center.x,
                center.y,
                radius * 0.2 + ((radius * 0.8) / 3) * i,
                0,
                2 * Math.PI
            );
            ctx.strokeStyle = "grey";
            ctx.setLineDash([4, 4]);
            ctx.stroke();
        }

        //Draw emotion labels
        emotions.forEach((emotion, i) => {
            const angle =
                -(((2 * Math.PI) / emotions.length) * i) -
                Math.PI / emotions.length;

            const x = center.x + Math.cos(angle) * (radius + padding);
            const y = center.y + Math.sin(angle) * (radius + padding);

            ctx.save();

            ctx.translate(x, y);
            if (Math.abs(angle) <= Math.PI) {
                ctx.rotate(angle + Math.PI / 2);
            } else {
                ctx.rotate(angle - Math.PI / 2);
            }
            ctx.fillStyle = "black";
            ctx.fillText(emotion, 0, 0);

            ctx.restore();
        });

        // Draw separation lines
        emotions.forEach((emotion, i) => {
            const angle = -(((2 * Math.PI) / emotions.length) * i);

            const x = center.x + Math.cos(angle) * radius;
            const y = center.y + Math.sin(angle) * radius;

            ctx.save();

            ctx.setLineDash([]);
            ctx.translate(x, y);
            ctx.rotate(angle + Math.PI / 2);
            ctx.beginPath();
            ctx.strokeStyle = "black";
            ctx.moveTo(0, 0);
            ctx.lineTo(0, separationLinesLength);

            ctx.stroke();

            ctx.restore();
        });

        // Draw current selection
        ctx.beginPath();
        ctx.arc(
            selection.x + width / 2,
            selection.y + height / 2,
            5,
            0,
            2 * Math.PI
        );
        ctx.fillStyle = emotion.color;
        ctx.fill();
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        handleDrag(e);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (isDragging) handleDrag(e);
    };

    const handleDrag = (e) => {
        if (!disabled) {
            const canvas = canvasRef.current;
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const center = { x: canvas.width / 2, y: canvas.height / 2 };

            const dx = x - center.x;
            const dy = y - center.y;
            const radius = Math.sqrt(dx * dx + dy * dy);

            const wheelRadius = canvas.width / 2 - padding * 2;

            const angleRad =
                (Math.atan2(-dy, dx) + 2 * Math.PI) % (2 * Math.PI);
            const angleDeg = (angleRad * 180) / Math.PI;

            // Prevent dragging outside of the wheel
            if (radius > wheelRadius) return;

            const normalizedRadius = radius / wheelRadius;

            setSelection({ x: dx, y: dy });

            const emotion = getMoodByAngleAndRadius(angleDeg, normalizedRadius);
            setEmotion(emotion);
            setSelectedEmotion(emotion);

            if (emotion.name != "Neutral") {
                if (normalizedRadius <= 0.2 + 0.8 / 3) {
                    setEmotionIntensity("Mildly");
                } else if (normalizedRadius <= 0.2 + 1.6 / 3) {
                    setEmotionIntensity("");
                } else setEmotionIntensity("Very");
            } else setEmotionIntensity("");

            setSelectedEmotionIntensity(emotionIntensity);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        drawWheel(ctx, canvas.width, canvas.height);
        setSelectedEmotion(emotion);
        setEmotionIntensity(emotionIntensity);
        setTypedExtraSymptoms(extraSymptons);
    }, [selection,extraSymptons]);

    const chooseEmotion = () => {
        handleEmotionChoice();
        setDisabled(true);
    };

    return (
        <>
            <div className="emotion-wheel-container">
                <canvas
                    width="400"
                    height="400"
                    ref={canvasRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                />
                <div className="emotion-wheel-selected">
                    <span>SELECTED EMOTION: </span>
                    <img src={emotion.icon}></img>
                    <span
                        className="current-mood"
                        style={{ background: emotion.color }}
                    >
                        {emotionIntensity} {emotion.name}
                    </span>
                </div>
            </div>
            <div className="symptom-input-container">
                <span>
                    Any other troubles you’d like this medicine to cure? Type
                    them in below (or leave it blank).{" "}
                </span>
                <div className="symptom-input-box">
                    <span>{">"}</span>
                    <input
                        disabled={disabled}
                        type="text"
                        onChange={(e) => {setExtraSymptoms(e.target.value)}}
                        placeholder="..."
                    ></input>
                </div>
            </div>

            <button onClick={chooseEmotion} disabled={disabled}>
                PRODUCE MEDICINE
            </button>
        </>
    );
};

export default EmotionWheel;
