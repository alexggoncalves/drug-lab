import "./Drawer.css";

import DetailPanel from "./DetailPanel";
import DrawerItem from "./DrawerItem";
import { useContext, useEffect } from "react";
import { DrawerContext } from "../../contexts/DrawerContext";

const Drawer = () => {
    const {drawer} = useContext(DrawerContext)

    useEffect(()=>{
        
    },[drawer])

    return (
        <div className="drawer-container">
            <div className="drawer">
                <span>DRAWER</span>
                <div className="drawer-scroll-wrapper">
                    <div className="drawer-grid">
                        {drawer.map((medicine) => {
                           return <DrawerItem medicine={medicine}></DrawerItem>
                        })}
                        
                    </div>
                </div>
            </div>
            <DetailPanel></DetailPanel>
        </div>
    );
};

export default Drawer;
