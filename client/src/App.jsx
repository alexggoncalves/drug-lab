import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import Drawer from "./components/Drawer/Drawer";

import MoodProvider from "./contexts/moodContext";
import DrawerProvider from "./contexts/DrawerContext";
import ChatProvider from "./contexts/ChatContext";

import MedicineLab from "./components/MedicineLab/MedicineLab";
import DayCast from "./components/Daycast/Daycast";
import { useState } from "react";

function App() {
    const [currentPage, setCurrentPage] = useState("lab");

    return (
        <MoodProvider>
            <DrawerProvider>
                <ChatProvider>
                    <SideBar
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                    <div
                        className="body-container"
                        style={{
                            display: currentPage === "lab" ? "flex" : "none",
                        }}
                    >
                        <MedicineLab></MedicineLab>
                    </div>
                    <div
                        className="body-container"
                        style={{
                            display:
                                currentPage === "daycast" ? "flex" : "none",
                        }}
                    >
                        <DayCast></DayCast>
                    </div>
                    <Drawer />
                </ChatProvider>
            </DrawerProvider>
        </MoodProvider>
    );
}

export default App;
