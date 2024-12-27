import React from "react";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import DataTray from "./DataTray";
import '../style.css'
import Footer from "./Footer";
export default function Page() {
   return (
     <div className="Pagecontainer">
       <Sidebar />
       <div className="MainContent">
         <Navbar />
         <DataTray />
         <Footer/>
       </div>
     </div>
 
   );
 }
 