import React from "react";
import Sidebar from "./Sidebar.jsx";
import Editor from "./Editor.jsx";
import { useState } from "react";
export default function Main(){
    const [stateOfSidebar,setStateOfSidebar]=useState(null)

    return(
    <>
    <Sidebar setStateOfSidebar = {setStateOfSidebar}/>
    <Editor stateOfSidebar = {stateOfSidebar}/>
    </>
    )
    
}