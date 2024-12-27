import circle from '../Icons/Circle.png'
import TextIcon from '../Icons/Text.png'
import RectangleImg from '../Icons/Rectangle.png'
import Arrow from '../Icons/Arrow.png'
import '../style.css'
import { useState } from 'react'
export default function Sidebar({ setStateOfSidebar}){

  const sidebarButtonStates={
  arrow:"arrow",
  rectangle:"rectangle",
  circle:"circle",
  textBox:"textBox"
  }
  const [sideBarSelectedButton,setSideBarSelectedButton]=useState(sidebarButtonStates.arrow)
   
    return(
        
        <div className="Sidebar" >
           <img src={Arrow} 
           style={{backgroundColor:sideBarSelectedButton=="arrow"?"yellow":null,border:sideBarSelectedButton=="arrow"?"solid black 1px":null}} onClick={()=>{setSideBarSelectedButton(sidebarButtonStates.arrow);setStateOfSidebar(sidebarButtonStates.arrow)}}/>
           <img src={circle} style={{backgroundColor:sideBarSelectedButton=="circle"?"yellow":null,border:sideBarSelectedButton=="circle"?"solid black 1px":null}} onClick={()=>{setSideBarSelectedButton(sidebarButtonStates.circle);setStateOfSidebar(sidebarButtonStates.circle)}}/>
           <img src={TextIcon} onClick={()=>{setSideBarSelectedButton(sidebarButtonStates.textBox);setStateOfSidebar(sidebarButtonStates.textBox)}}
           style={{backgroundColor:sideBarSelectedButton=="textBox"?"yellow":null,border:sideBarSelectedButton=="textBox"?"solid black 1px":null}} />
           <img src={RectangleImg} onClick={()=>{setSideBarSelectedButton(sidebarButtonStates.rectangle);setStateOfSidebar(sidebarButtonStates.rectangle)}}
           style={{backgroundColor:sideBarSelectedButton=="rectangle"?"yellow":null,border:sideBarSelectedButton=="rectangle"?"solid black 1px":null}} />
        </div>
    )
}















































































































































































