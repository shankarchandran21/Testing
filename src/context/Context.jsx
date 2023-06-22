import React, { useEffect } from 'react'
import { createContext,useContext,useReducer } from "react";
import { reducer } from '../reducer/reducer';
import { json } from 'react-router-dom';
const GlobalContext =createContext();
export const useGlobalContext = ()=>useContext(GlobalContext);

const getData= localStorage.getItem("Name")
    ? JSON.parse(localStorage.getItem("Name"))
    : [];

const initialState = {
    data:getData,
    editId:'',
    isEdit:false,
}


function Context({children}) {

    const [state,dispatch] =useReducer(reducer,initialState)
    useEffect(()=>{
        localStorage.setItem('Name',JSON.stringify(state.data));
    },[state.data])

  return (
    <GlobalContext.Provider value={{...state,dispatch}}>{children}</GlobalContext.Provider>
  )
}

export default Context