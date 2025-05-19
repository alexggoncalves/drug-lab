import { useContext, useEffect, useState } from "react";
import { DrawerContext } from "../../contexts/DrawerContext";

import Intensity from "../IntensityIndicators/Intensity";
import { MoodContext } from "../../contexts/moodContext";

const DetailPanel = () => {
    const { selectedMedicine } = useContext(DrawerContext);
    const { setCurrentMood, setMoodIntensity } = useContext(MoodContext);

    const takeMedicine = () => {
        setCurrentMood(selectedMedicine.effect)
        
        if(selectedMedicine.intensity == 1){
            setMoodIntensity("Mildly");
        } else if (selectedMedicine.intensity == 3){
            setMoodIntensity("Very");
        } else setMoodIntensity("");
        
    }

    if (selectedMedicine != null) {
        return (
            <div className="drawer-detail-panel">
                <div className="detail-header">
                    <div className="detail-header-color-identifier" style={{background:selectedMedicine.color}}/>
                    <span>{selectedMedicine.name}</span>
                    <div className="detail-header-icons">
                        <img src={selectedMedicine.icon} alt="" />
                        <Intensity
                            intensity={selectedMedicine.intensity}
                            color={selectedMedicine.color}
                        />
                    </div>
                </div>
                <div className="drawer-panel-details">
                    <div className="drawer-panel-details-item">
                        <span>EFFECT</span>
                        <p>{selectedMedicine.effect}</p>
                    </div>
                    <div className="drawer-panel-details-item">
                        <span>FORM</span>
                        <p>{selectedMedicine.form}</p>
                    </div>
                    <div className="drawer-panel-details-item">
                        <span>SIDE EFFECTS</span>
                        <p>{selectedMedicine.sideEffects}</p>
                    </div>
                    <div className="drawer-panel-details-item">
                        <span>DESCRIPTION</span>
                        <p>
                            {selectedMedicine.description}
                        </p>
                    </div>

                    <button onClick={takeMedicine}>TAKE</button>
                </div>
            </div>
        );
    } else return null;
};

export default DetailPanel;
