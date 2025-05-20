import { useContext } from "react";
import Intensity from "../IntensityIndicators/Intensity";
import { DrawerContext } from "../../contexts/DrawerContext";

const DrawerItem = ({ medicine }) => {
    const { setSelectedMedicine } = useContext(DrawerContext);

    const openInDetailView = () => {
        setSelectedMedicine(medicine);
    };

    return (
        <div className="drawer-item" onClick={openInDetailView}>
            <div
                className="drawer-item-color-identifier"
                style={{ background: medicine.color }}
            ></div>
            <div className="drawer-item-details">
                <div className="drawer-item-icons">
                    <img src={medicine.icon} alt="" />
                    <Intensity
                        intensity={medicine.intensity}
                        color={medicine.color}
                    />
                </div>
                <span style={{ color: medicine.color }}>{medicine.mood}</span>
                <span>{medicine.name}</span>
            </div>
            <img className="drawer-item-options-button" src={null} alt="" />
        </div>
    );
};

export default DrawerItem;
