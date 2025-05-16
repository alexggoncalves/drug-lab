import "./App.css";

import SideBar from "./components/SideBar/SideBar";
import Body from "./components/Body";
import Drawer from "./components/Drawer/Drawer";

import { useState } from "react";

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
                    {/* <form
                onSubmit={(e) => {
                    onSubmit(e);
                }}
            >
              <label>Desired effect </label>
                <input
                    type="text"
                    name="prompt"
                    placeholder="Type a prompt"
                    onChange={(e) => {
                        setPrompt(e.target.value);
                    }}
                />
                <input type="submit" value="Generate" />
            </form>

            {Object.keys(result).map((key, index) => {
                return (
                    <div className="results" key={index}>
                        <h3> Prompt {index + 1}</h3>
                        <p>{result[key]}</p>
                    </div>
                );
            })} */}
                </ChatProvider>
            </MedicineProvider>
        </MoodProvider>
    );
}

export default App;
