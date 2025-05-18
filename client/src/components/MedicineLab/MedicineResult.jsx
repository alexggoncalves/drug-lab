import { useContext } from "react";
import { MoodContext } from "../../contexts/moodContext";
import Intensity from "../IntensityIndicators/Intensity";
import { DrawerContext } from "../../contexts/DrawerContext";

const MedicineResult = ({ name, effect, form, sideEffects, description , intensity}) => {
    const {getMoodByName, currentMood} = useContext(MoodContext);
    const {addMedicineToDrawer} = useContext(DrawerContext)

    let intensityValue = 0;

    if(intensity == "Very"){
        intensityValue = 3;
    } else if(intensity == "Mildly"){
        intensityValue = 1;
    } else intensityValue = 2

    const mood = getMoodByName(effect);

    const addToDrawer = () => {
        const  medicine = {
            name:name,
            effect: effect,
            form: form,
            sideEffects: sideEffects,
            description: description,
            intensity: intensityValue,
            icon: mood.icon,
            color: mood.color
        }

        addMedicineToDrawer(medicine);
    }
    
    return (
        <div className="medicine-result-container">
            <div className="drawer-detail-panel">
                <div className="detail-header">
                    <div className="detail-header-color-identifier" style={{background:mood.color}}/>
                    <span>{name}</span>
                    <div className="detail-header-icons">
                        <img src={mood.icon} alt="" />
                        <Intensity
                            intensity={intensityValue}
                            color={mood.color}
                        ></Intensity>
                    </div>
                </div>
                <div className="drawer-panel-details">
                    <div className="drawer-panel-details-item">
                        <span>EFFECT</span>
                        <p>{effect}</p>
                    </div>
                    <div className="drawer-panel-details-item">
                        <span>FORM</span>
                        <p>{form}</p>
                    </div>
                    <div className="drawer-panel-details-item">
                        <span>SIDE EFFECTS</span>
                        <p>{sideEffects}</p>
                    </div>
                    <div className="drawer-panel-details-item">
                        <span>DESCRIPTION</span>
                        <p>{description}</p>
                    </div>
                    <button onClick={addToDrawer}>ADD TO DRAWER</button>
                </div>
            </div>
        </div>
    );
};

export default MedicineResult;
