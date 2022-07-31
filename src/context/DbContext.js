import { createContext, useContext, useState } from "react";
import useFetchDB from "../hooks/useFetchDB"; 


const DbContext = createContext({})

export function useGetDb(){
    return useContext(DbContext)
}

export function DbContextProvider({children}) {
    const {products,categories} = useFetchDB()



    return <DbContext.Provider value={{products,categories}}>
        {children}
    </DbContext.Provider>
}