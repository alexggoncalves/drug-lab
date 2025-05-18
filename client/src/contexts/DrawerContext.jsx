import { createContext, useState } from "react";

export const DrawerContext = createContext(null)

const DrawerProvider = ({children}) =>{
    const [drawer,setDrawer] = useState([]);

    const addMedicineToDrawer = (medicine) =>{
        setDrawer((prev) => [...prev, medicine]);
    }

    return(
        <DrawerContext.Provider
            value={{
                drawer,
                setDrawer,
                addMedicineToDrawer
            }}
        >
            {children}
        </DrawerContext.Provider>
    )
}

export default DrawerProvider