import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import Body from "./components/Body";
import Drawer from "./components/Drawer/Drawer";

import MoodProvider from "./contexts/moodContext";
import MedicineProvider from "./contexts/MedicineContext";
import ChatProvider from "./contexts/ChatContext";

function App() {
    return (
        <MoodProvider>
            <MedicineProvider>
                <ChatProvider>
                    <SideBar />
                    <Body />
                    <Drawer />
                </ChatProvider>
            </MedicineProvider>
        </MoodProvider>
    );
}

export default App;
