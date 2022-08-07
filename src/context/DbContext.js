import { createContext, useContext,} from "react";
import useFetchDB from "../hooks/useFetchDB"; 


const DbContext = createContext({})

export function useGetDb(){
    return useContext(DbContext)
}


export function DbContextProvider({children}) {
    const {products,categories,reload,setReload} = useFetchDB()



    return <DbContext.Provider value={{products,categories,reload,setReload}}>
        {children}
    </DbContext.Provider>
}