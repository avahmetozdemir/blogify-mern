import { createContext,useContext,useState,useEffect } from "react";
import axios from 'axios'
const AppContext = createContext()

const AppProvider = ({children})=> {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

    useEffect(()=> {
        localStorage.setItem('user', JSON.stringify(user))

    }, [user])


    return <AppContext.Provider value={{open,setOpen,handleOpen,handleClose ,user,setUser}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppProvider}