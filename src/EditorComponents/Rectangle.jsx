
import '../style.css'


 export default function Rectangle({x,y,width,height,id,stateOfSidebar,selected}){



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
      

    }}onMouseDown={whenMouseDown}  ></div>
    
    {selected && <div id={`topLeft${id}`}      style={{height:"20px",width:"20px", borderRadius:"286px", backgroundColor:"darkGrey",position:'absolute',top:y-7,left:x-5,cursor:'nwse-resize'}}onMouseDown={whenMouseDown}      ></div>}
    {selected && <div id={`topRight${id}`}     style={{height:"20px",width:"20px", borderRadius:"286px", backgroundColor:"darkGrey",position:'absolute',top:y-7,left:x+width-5,cursor:'nesw-resize'}} onMouseDown={whenMouseDown}    ></div>}
    {selected && <div id={`bottomLeft${id}`}   style={{height:"20px",width:"20px", borderRadius:"286px",backgroundColor:"darkGrey",position:'absolute',top:y+height-7,left:x-5,cursor:'nesw-resize'}}onMouseDown={whenMouseDown}    ></div>}
    {selected && <div id={`bottomRight${id}`}  style={{height:"20px",width:"20px",borderRadius:"286px", backgroundColor:"darkGrey",position:'absolute',top:y+height-7,left:x+width-5,cursor:"nwse-resize"}  } onMouseDown={whenMouseDown}       ></div>}
  </div>
  )
  
  }
    
  
  
  
  
  

  // function whenMouseUp(e){
  //   if(stateOfSidebar!="arrow" || !selected) return
  //    e.stopPropagation();
    
  //    setEditorSelectedModes(editorModes.select)
    

  //   }



  //function whenMouseLeave(e){
    //   if(stateOfSidebar!="arrow" || !selected) return
    //   e.stopPropagation();
      
    //   setEditorSelectedModes(editorModes.select)
    // }



  //     if( selected){
    
//     if ( e.currentTarget.className === "object") {
      

//       setEditorSelectedModes(editorModes.drag)
//       const differenceX = (e.clientX)- x;
//       const differenceY = (e.clientY) - y;
//       setDifference([differenceX, differenceY]);
      
//     }
    
//     else if (e.currentTarget.id===`topLeft${id}`||e.currentTarget.id===`topRight${id}`||e.currentTarget.id===`bottomLeft${id}`||e.currentTarget.id===`bottomRight${id}`)
   
//       {
      
//         setEditorSelectedModes(editorModes.resize)
//         setSelectedResizer(e.currentTarget.id)
        
        
//       }
      

//   }

// }
  
//     function whenMouseMove(e){
  
//       if(stateOfSidebar!="arrow"  || !selected )return
      
//       e.stopPropagation();
      
//       if(editorSelctedMode=="drag"){
//       const latestX = e.clientX - difference[0];
//       const latestY = e.clientY - difference[1];
  

//         changeObject(prevObject => 
//           prevObject.map(shape => 
//             shape.id === id ? { ...shape,x:latestX,y:latestY } :shape
//           )
//         );

       
      
//       }
      
//        else if(editorSelctedMode==="resize"){

          
//           let newWidth;
//           let newHeight;
//           let pos=getParentXY()
//           const pointX = e.clientX - pos.x
//           const pointY = e.clientY - pos.y
         
  
//       switch(selectResizer){
//         case `bottomRight${id}`:{
      
      
//       const deltaWidth = pointX - (x + width); 
//       const deltaHeight = pointY - (y + height); 
    
//        newWidth = Math.max(width + deltaWidth, 10); 
//        newHeight = Math.max(height + deltaHeight, 10); 

//        changeObject((prevObject) => {
//                 return prevObject.map((shape) => {
//                   if (shape.id === id) {
//                     return {
//                       ...shape,
//                       width: newWidth,
//                       height: newHeight,
//                     };
//                   }
//                   return shape;
//                 });
//               });
//          break;
//         }

//         case `topLeft${id}`: {

//           const deltaX = x - pointX; 
//           const deltaY = y - pointY; 
                
//           newWidth = Math.max(width + deltaX, 10);
//           newHeight = Math.max(height + deltaY, 10); 
                
                  
//           const newX = newWidth > 10 ? x - deltaX : x + (width - 10);
//           const newY = newHeight > 10 ? y - deltaY : y + (height - 10);
                
            
//           changeObject((prevObject) =>
//              prevObject.map(( shape) => {
//                      if (shape.id === id) {
//                       return {
//                          ...shape,
//                           x: newX, 
//                           y: newY, 
//                           width: newWidth, 
//                           height: newHeight, 
//                         };
//                       }
//                       return shape;
//                     })
//                   );
//                   break;
//                 }

//                 case `bottomLeft${id}`: {
                  
//                   newWidth = Math.max(x + width - pointX, 10); 
//                   const newX = x + (width - newWidth); 
                                        
//                   const deltaHeight = pointY - (y + height);
//                   newHeight = Math.max(height + deltaHeight, 10); 
                                        
                                    
//                   changeObject((prevObject) =>
//                      prevObject.map(( shape) => {
//                       if (shape.id === id) {
//                         return {
//                         ...shape,
//                          x: newX,
//                          width: newWidth,
//                          height: newHeight,
//                           };
//                                 }
//                           return shape;
//                           })
//                           );
//                           break;
//                          }
    

//                 case `topRight${id}`: {
                         
                          
//                   const deltaWidth = pointX - (x + width);
//                   newWidth = Math.max(width + deltaWidth, 10); 
//                   const deltaHeight = y - pointY;
//                   newHeight = Math.max(height + deltaHeight, 10); 
                                    
                                      
//                   const newY=newHeight > 10 ? y - deltaHeight : y + (height - 10);
                                    
//                    changeObject((prevObject) =>
//                     prevObject.map((shape) => {
//                       if (shape.id === id) {
//                           return {
//                               ...shape,
//                               y: newY, 
//                               width: newWidth, 
//                               height: newHeight, 
//                               };
//                                 }
//                                 return shape;
//                                         })
//                                       );
//                                       break;
//                                     }
    
      
        

//               default:
//               console.warn("not valid");
//              return;
        
              
//         }
        
//     }






