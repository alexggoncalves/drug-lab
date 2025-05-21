import { useContext, useState, useEffect } from "react";
import Intensity from "../IntensityIndicators/Intensity";
import { ForecastChatContext } from "../../contexts/ForecastChatContext";

const CurrentMedicine = ({ medicine }) => {
    const [disabled, setDisabled] = useState(false);
    const [dayPlansInput, setDayPlansInput] = useState("");
    const { handleForecastGeneration, setDayPlans } = useContext(ForecastChatContext);
    const [ medicineSnapshot, setMedicineSnapshot ] = useState(null);

    const predictDay = () => {
        setDisabled(true);
        setMedicineSnapshot(medicine)
        handleForecastGeneration();
    };

    useEffect(() => {
        setDayPlans(dayPlansInput)
    }, [dayPlansInput]);

    const displayedMedicine = medicineSnapshot || medicine;

    return (
        <div>
            <div className="detail-header chat-medicine-band">
                <div
                    className="detail-header-color-identifier"
                    style={{ background: displayedMedicine.color }}
                />
                <span>{displayedMedicine.name}</span>
                <div className="detail-header-icons">
                    <img src={displayedMedicine.icon} alt="" />
                    <Intensity
                        intensity={displayedMedicine.intensity}
                        color={displayedMedicine.color}
                    ></Intensity>
                </div>
            </div>
            <div className="symptom-input-container">
                <span>What are your plans for the day?</span>
                <div className="symptom-input-box">
                    <span>{">"}</span>
                    <input
                        disabled={disabled}
                        type="text"
                        onChange={(e) => {
                            setDayPlansInput(e.target.value);
                        }}
                        placeholder="..."
                    ></input>
                </div>
            </div>

            <button onClick={predictDay} disabled={disabled}>
                PREDICT MY DAY
            </button>
        </div>
    );
};

export default CurrentMedicine;
