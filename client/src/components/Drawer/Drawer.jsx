import "./Drawer.css";

import DetailPanel from "./DetailPanel";
import DrawerItem from "./DrawerItem";

const Drawer = () => {
    return (
        <div className="drawer-container">
            <div className="drawer">
                <span>DRAWER</span>
                <div className="drawer-scroll-wrapper">
                    <div className="drawer-grid">
                        <DrawerItem></DrawerItem>
                    </div>
                </div>
            </div>
            <DetailPanel></DetailPanel>
        </div>
    );
};

export default Drawer;
