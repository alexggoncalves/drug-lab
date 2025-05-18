import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import Body from "./components/Body";
import Drawer from "./components/Drawer/Drawer";

import MoodProvider from "./contexts/moodContext";
import DrawerProvider from "./contexts/DrawerContext";
import ChatProvider from "./contexts/ChatContext";

import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
    return (
        
        <MoodProvider>
            <DrawerProvider>
                <ChatProvider>
                    
                    <SideBar />
                    <Body />
                    <Drawer />
                </ChatProvider>
            </DrawerProvider>
        </MoodProvider>
    );
}

export default App;
