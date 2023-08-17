import { useState } from "react";
import {  createContext, useContext } from "react";

const Discardcontexts = createContext()


export const Discardcontextprovider = ({ children }) => {
    const [Imgdialog, setImgdialog] = useState(false)
    const [Opendiscard, setOpendiscard] = useState(false)
    const [fileDialog, setfileDialog] = useState(false)
    return ( 
        <Discardcontexts.Provider value={{ Imgdialog, setImgdialog, Opendiscard, setOpendiscard, fileDialog, setfileDialog }}>
            {children}

        </Discardcontexts.Provider>
     );
}
 
export function Discardcontextapi() {
    return useContext(Discardcontexts)
}