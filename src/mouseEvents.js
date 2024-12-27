// function whenMouseDown(e){
//     e.stopPropagation();
  
    
//   //  if (stateOfSidebar==="arrow" && (e.currentTarget.id==`topLeft${selectedObject}`||e.currentTarget.id==`bottomLeft${selectedObject}`||e.currentTarget.id==`topRight${selectedObject}`||e.currentTarget.id==`bottomRight${selectedObject}`)){
   
//   //   setEditorSelectedModes(editorModes.resize)
//   //   selectedResizerRef.current=e.currentTarget.id
//   //   setSelectedResizer(e.currentTarget.id)
//   //   resizingRef.current=true
//   //   setResizing(true)
    
//   //  };
  
  
//   //   if (stateOfSidebar === "arrow" && e.currentTarget.className === 'object' && e.currentTarget.id) {
//   //     const currentId = Number(e.currentTarget.id);
      
      
//   //     setSelectedObject(currentId);
//   //     selectedObjectRef.current = currentId;
//   //     setEditorSelectedModes(editorModes.select);
//   //     setDragOn(true);
  
//   //     let pos = getParentXY();
//   //     const pointX = e.clientX - pos.x;
//   //     const pointY = e.clientY - pos.y;
//   //     const differenceX = pointX - allBoxes[currentId].x;
//   //     const differenceY = pointY - allBoxes[currentId].y;
  
//   //     setDifference([differenceX, differenceY]);
    
//   //   }
  
  
//    if(stateOfSidebar=="rectangle" && e.currentTarget.className=="object"){
//     setEditorSelectedModes(editorModes.create)
//     setIsDrawing(true)
//     let pos = getParentXY();
//     const points={
//        x: e.clientX-pos.x,
//        y: e.clientY-pos.y
//     }
//     setStartingPoints(points)
  
//    }
  
//    if (stateOfSidebar==="rectangle" && e.currentTarget==divRef.current){ //textbox & rectangle
//     setEditorSelectedModes(editorModes.create)
//     setIsDrawing(true)
//     let pos = getParentXY();
//     const newPoints={
//        x:e.clientX-pos.x,
//        y:e.clientY-pos.y
//     }
//     setStartingPoints(newPoints)
  
//    }
   
//   }
  
  
//     function whenMouseMove(e){
//     e.stopPropagation();
//     if ( editorSelctedMode==="create" && isDrawing){
//     let pos = getParentXY();
    
//       const movingPoints={
//         x:Math.min(startingPoints.x,(e.clientX-pos.x)),
//         y:Math.min(startingPoints.y,(e.clientY-pos.y)),
//         width:(Math.abs(startingPoints.x-(e.clientX-pos.x))),
//         height:Math.abs(startingPoints.y-(e.clientY-pos.y))
//       }
//       setCurrentBox(movingPoints)
//     }
  
//     // if (editorSelctedMode === "select" && selectedObjectRef.current !== null && dragOn) {
//     //   let pos = getParentXY();
//     //   const pointX = e.clientX - pos.x;
//     //   const pointY = e.clientY - pos.y;
//     //   const latestX = pointX - difference[0];
//     //   const latestY = pointY - difference[1];
  
//     //   setAllBoxes(prevAllBoxes =>
//     //     prevAllBoxes.map((box, i) => {
//     //       if (i === selectedObjectRef.current) {
//     //         return {
//     //           ...box,
//     //           x: latestX,
//     //           y: latestY,
//     //         };
//     //       }
//     //       return box;
//     //     })
//     //   );
      
//     // }
    
  
//     // if (editorSelctedMode === "resize" && resizingRef.current === true) {
//     //   console.log("starting resizing");
//     //   console.log(editorSelctedMode, selectedObjectRef, selectedResizerRef);
    
//     //   const pos = getParentXY();
//     //   let newWidth;
//     //   let newHeight;
//     //   const pointX = e.clientX - pos.x;
//     //   const pointY = e.clientY - pos.y;
//     //   const currentBox = allBoxes[selectedObject];
  
//     //   switch(selectedResizerRef.current){
//     //     case `bottomRight${selectedObject}`:{
      
      
//     //   const deltaWidth = pointX - (currentBox.x + currentBox.width); 
//     //   const deltaHeight = pointY - (currentBox.y + currentBox.height); 
    
//     //    newWidth = Math.max(currentBox.width + deltaWidth, 10); 
//     //    newHeight = Math.max(currentBox.height + deltaHeight, 10); 
//     //      break;
//     //     }
  
//     //     case `topRight${selectedObject}`: {
          
        
//     //       const deltaWidth = pointX - (currentBox.x + currentBox.width);
//     //       newWidth = Math.max(currentBox.width + deltaWidth, 10); 
        
       
//     //       const deltaHeight = currentBox.y - pointY;
//     //        newHeight = Math.max(currentBox.height + deltaHeight, 10); 
        
          
//     //       const newY =
//     //         newHeight > 10 ? currentBox.y - deltaHeight : currentBox.y + (currentBox.height - 10);
        
    
//     //       setAllBoxes((prevAllBoxes) =>
//     //         prevAllBoxes.map((box, i) => {
//     //           if (i === selectedObject) {
//     //             return {
//     //               ...box,
//     //               y: newY, 
//     //               width: newWidth, 
//     //               height: newHeight, 
//     //             };
//     //           }
//     //           return box;
//     //         })
//     //       );
//     //       break;
//     //     }
        
        
        
  
  
//     //     case `bottomLeft${selectedObject}`: {
          
        
          
//     //        newWidth = Math.max(currentBox.x + currentBox.width - pointX, 10); 
        
          
//     //       const newX = currentBox.x + (currentBox.width - newWidth); 
        
          
//     //       const deltaHeight = pointY - (currentBox.y + currentBox.height);
//     //        newHeight = Math.max(currentBox.height + deltaHeight, 10); 
        
    
//     //       setAllBoxes((prevAllBoxes) =>
//     //         prevAllBoxes.map((box, i) => {
//     //           if (i === selectedObject) {
//     //             return {
//     //               ...box,
//     //               x: newX,
//     //               width: newWidth,
//     //               height: newHeight,
//     //             };
//     //           }
//     //           return box;
//     //         })
//     //       );
//     //       break;
//     //     }
  
  
        // case `topLeft${selectedObject}`: {
          
        
         
        //   const deltaX = currentBox.x - pointX; 
        //   const deltaY = currentBox.y - pointY; 
        
  
        //    newWidth = Math.max(currentBox.width + deltaX, 10);
        //    newHeight = Math.max(currentBox.height + deltaY, 10); 
        
          
        //   const newX =
        //     newWidth > 10 ? currentBox.x - deltaX : currentBox.x + (currentBox.width - 10);
        //   const newY =
        //     newHeight > 10 ? currentBox.y - deltaY : currentBox.y + (currentBox.height - 10);
        
    
        //   setAllBoxes((prevAllBoxes) =>
        //     prevAllBoxes.map((box, i) => {
        //       if (i === selectedObject) {
        //         return {
        //           ...box,
        //           x: newX, 
        //           y: newY, 
        //           width: newWidth, 
        //           height: newHeight, 
        //         };
        //       }
        //       return box;
        //     })
        //   );
        //   break;
        // }
        
        
  
//     //      default:
//     //       console.warn("not valid");
//     //       return;
       
//     //   }
    
//     //   setAllBoxes((prevAllBoxes) => {
//     //     return prevAllBoxes.map((box, i) => {
//     //       if (i === selectedObject) {
//     //         return {
//     //           ...box,
//     //           width: newWidth,
//     //           height: newHeight,
//     //         };
//     //       }
//     //       return box;
//     //     });
//     //   });
//     // }
      
//     }
  
  
  
  
//     function whenMouseUp(e){
//        e.stopPropagation();
//       if(editorSelctedMode==="create"){
//         if (currentBox==null) {
//           let pos = getParentXY();
//           const defaultBox={
//             x:(e.clientX-pos.x),
//             y:(e.clientY-pos.y),
//             width:100,
//             height:100,
//             borderRadius:"0px"
//           }
//           setRectangleShape((prevBoxes) => [...prevBoxes, defaultBox]);
//         }
//        if (currentBox) {
//         setRectangleShape((prevBoxes) => [...prevBoxes, currentBox]);
//       }
  
//        //ye agar null nahi hoga tou har naye box pe bhi purane waly ka last clicked ka index
//        setCurrentBox(null)
//        setIsDrawing(false)
//        setStartingPoints(null)
//       }
     
//       // if(editorSelctedMode==="select"){
//       //   setDragOn(false)
//       //   setResizing(false)
//       //   selectedResizerRef.current=null
//       //   selectedObjectRef.current=null
//       // }
  
//       // if(editorSelctedMode==="resize"){
//       //   resizingRef.current=false
//       //   setResizing(false)
//       // }
      
//     }
  
  
  
//     function whenMouseLeave(e){
//       e.stopPropagation();
//       setIsDrawing(false)
//       setStartingPoints(null)
//       setCurrentBox(null)
//       setResizing(false)
//     }
  
  
    
//     function getParentXY() {
//       if (divRef.current) {
//         const x = divRef.current.getBoundingClientRect().left;
//         const y = divRef.current.getBoundingClientRect().top;
//         return {x, y} 
//       } else {
//         return {x: null, y:null};
//       }
//     }
  
// }
    
  
    
  