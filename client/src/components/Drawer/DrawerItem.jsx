import Intensity from "../IntensityIndicators/Intensity";

const DrawerItem = ({medicine}) => {
    return (
        <div className="drawer-item">
            <div className="drawer-item-color-identifier" style={{background: medicine.color}}></div>
            <div className="drawer-item-details">
                <div className="drawer-item-icons">
                    <img src={medicine.icon} alt="" />
                    <Intensity
                        intensity={medicine.intensity}
                        color={medicine.color}
                    />
                </div>
                <span>{medicine.effect}</span>
                <span>{medicine.name}</span>
            </div>
            <img className="drawer-item-options-button" src={null} alt="" />
        </div>
    );
};

export default DrawerItem;
