import "./SideBar.css";

import MoodDisplay from "./MoodDisplay"

import medicineBlack from "../../assets/icons/medicine-lab-icon_black.svg"
import medicineWhite from "../../assets/icons/medicine-lab-icon_white.svg"
import textBlack from "../../assets/icons/text-mixer-icon_black.svg"
import textWhite from "../../assets/icons/text-mixer-icon_white.svg"

const SideBar = () => {

    return(
        <div className="side-bar">
            <div className="logo">FEELS.</div>
            <div className="side-bar-button-container">
                <div className="side-bar-button active">
                    
                    <img src={medicineWhite} alt="" />
                    <span>Medicine Lab</span>
                </div>
                <div className="side-bar-button">
                    <img src={textBlack} alt="" />
                    <span>Text Mixer</span>
                </div>
            </div>
            <MoodDisplay></MoodDisplay>
        </div>
    )
}

export default SideBar