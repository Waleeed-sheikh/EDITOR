import React from "react";
import bell from '../Icons/bell.png'
import invite from '../Icons/add.png'
import gift from '../Icons/gift.png'
import account from '../Icons/boy.png'

import '../style.css'

export default function Navbar(){
 return(
  <>
  <div id="Navbar">
      <div id="NavContent">
          <h4 id="navHeading">wiro <span>FREE</span></h4>
          <div className="button-container">
            <button className="Navbuttons"><img src={invite} />Invite members</button>
            <button className="Navbuttons">Upgrade</button>
            <button className="Navbuttons"><img src={gift} /></button>
            <button className="Navbuttons"><img src={bell}/></button>
            <button className="Navbuttons"><img src={account} /></button>
          </div>
      </div>
      <div id="NavBorder"></div>
  </div>
  
</>
 )}