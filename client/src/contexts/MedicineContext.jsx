import { createContext, useState } from "react";

export const MedicineContext = createContext(null)

const MedicineProvider = ({children}) =>{
    const [medicines,setMedicines] = useState([]);

    return(
        <MedicineContext.Provider
            value={{
                medicines,
                setMedicines
            }}
        >
            {children}
        </MedicineContext.Provider>
    )
}

export default MedicineProvider