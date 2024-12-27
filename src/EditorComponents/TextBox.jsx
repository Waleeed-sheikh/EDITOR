
import '../style.css'


 export default function TextBox({x,y,width,height,id,stateOfSidebar,selected}){



  function customEvent(resizer=null){
    const customEvent=new CustomEvent("customEventFromChild",{detail:{
      info:
      {
      id:id,
      x:x,
      y:y,
      width:width,
      height:height,
      selected:selected,
      resizer:resizer
      }
    }})

    const editor=document.getElementById("editor")
    editor.dispatchEvent(customEvent)
  }


 function whenMouseDown(e){
   
 if(stateOfSidebar!="arrow")return
 

    if(e.currentTarget.className=="object"){

      console.log("mouse down of Rectangle Triggered!")
      //setSelectedBox(id)//
      customEvent();
      
    }


    if(stateOfSidebar=="arrow" && (e.currentTarget.id==`topLeft${id}`||e.currentTarget.id==`topRight${id}`||e.currentTarget.id==`bottomLeft${id}`||e.currentTarget.id==`bottomRight${id}`)){



      console.log("MouseDown on "+ e.currentTarget.id + " resizer of Rectangle" ,)
      customEvent(e.currentTarget.id)
   

    }
    
 }

  
  
  
     
      
  
  
    
  
  
  return (
  <div style={{zIndex:selected?10:1}}>
    <div  className="object"   style={{
      top:y,
      left:x,  
      width:width,
      height:height,
      backgroundColor:"transparent",
      position:'absolute',
      border:selected?"solid blue 2px":"solid black 1px",
      

    }}onMouseDown={whenMouseDown} > <textarea style={{width:width,height:height,resize: "none", border: "none",  outline: "none",padding: 0, margin: 0,background: "transparent", font: "inherit",fontSize:(width+height)/15}}></textarea></div>
    
    {selected && <div id={`topLeft${id}`}      style={{height:"20px",width:"20px", borderRadius:"286px", backgroundColor:"darkGrey",position:'absolute',top:y-7,left:x-5,cursor:'nwse-resize'}}onMouseDown={whenMouseDown}      ></div>}
    {selected && <div id={`topRight${id}`}     style={{height:"20px",width:"20px", borderRadius:"286px", backgroundColor:"darkGrey",position:'absolute',top:y-7,left:x+width-5,cursor:'nesw-resize'}} onMouseDown={whenMouseDown}    ></div>}
    {selected && <div id={`bottomLeft${id}`}   style={{height:"20px",width:"20px", borderRadius:"286px",backgroundColor:"darkGrey",position:'absolute',top:y+height-7,left:x-5,cursor:'nesw-resize'}}onMouseDown={whenMouseDown}    ></div>}
    {selected && <div id={`bottomRight${id}`}  style={{height:"20px",width:"20px",borderRadius:"286px", backgroundColor:"darkGrey",position:'absolute',top:y+height-7,left:x+width-5,cursor:"nwse-resize"}  } onMouseDown={whenMouseDown}       ></div>}
  </div>
  )
  
  }
  
  
  




















  









  
  
    

 
  
  
  
  
  
  
  