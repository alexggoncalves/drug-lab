import "./SideBar.css";

import MoodDisplay from "./MoodDisplay";

import medicineBlack from "../../assets/icons/medicine-lab-icon_black.svg";
import medicineWhite from "../../assets/icons/medicine-lab-icon_white.svg";
import dayBlack from "../../assets/icons/daycast_black.svg";
import dayWhite from "../../assets/icons/daycast_white.svg";

const SideBar = ({ setCurrentPage, currentPage }) => {
    return (
        <div className="side-bar">
            <div className="logo">{"FEELS\nLAB."}</div>
            <div className="side-bar-button-container">
                <div
                    className={`side-bar-button ${
                        currentPage === "lab" ? "active" : ""
                    }`}
                    onClick={() => {
                        setCurrentPage("lab");
                    }}
                >
                    {currentPage === "lab" ? (
                        <img src={medicineWhite} alt="" />
                    ) : (
                        <img src={medicineBlack} alt="" />
                    )}

                    <span>Lab</span>
                </div>
                <div
                    className={`side-bar-button ${
                        currentPage === "daycast" ? "active" : ""
                    }`}
                    onClick={() => {
                        setCurrentPage("daycast");
                    }}
                >
                    {" "}
                    {currentPage === "daycast" ? (
                        <img src={dayWhite} alt="" />
                    ) : (
                        <img src={dayBlack} alt="" />
                    )}
                    <span>Forecast</span>
                </div>
            </div>
            <MoodDisplay></MoodDisplay>
        </div>
    );
};

export default SideBar;
