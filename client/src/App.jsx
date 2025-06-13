import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import Drawer from "./components/Drawer/Drawer";

import MoodProvider from "./contexts/MoodContext";
import DrawerProvider from "./contexts/DrawerContext";
import MedicineChatProvider from "./contexts/MedicineChatContext";
import ForecastChatProvider from "./contexts/ForecastChatContext";

import MedicineLab from "./components/MedicineLab/MedicineLab";
import Forecast from "./components/Forecast/Forecast";
import { useState } from "react";

function App() {
    const [currentPage, setCurrentPage] = useState("lab");

    return (
        <MoodProvider>
            <DrawerProvider>
                <MedicineChatProvider>
                    <ForecastChatProvider>
                        <SideBar
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                        />
                        <div
                            className="body-container"
                            style={{
                                display:
                                    currentPage === "lab" ? "flex" : "none",
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
                            <Forecast></Forecast>
                        </div>
                        <Drawer/>
                    </ForecastChatProvider>
                </MedicineChatProvider>
            </DrawerProvider>
        </MoodProvider>
    );
}

export default App;
