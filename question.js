// function whenMouseDown(e){
  
//     if (!mode) return;
//     let pos = getParentXY();
//     setIsDrawing(true)
//      console.log("(x,y) of parent div are  = ", [pos.x,pos.y])
//      console.log( "where mouse was down (x,y) points are", [e.clientX,e.clientY])
//      const points={
//        x:(e.clientX-pos.x),
//        y:(e.clientY-pos.y),
//        width:1,
//        height:1
       
//      }
//      console.log( "where mouse was down currentBox is  ", [points.x,points.y,points.width,points.height])
//      setCurrentBox(points)
//    }



//    function whenMouseUp(e){
//     if(!mode || !currentBox ||!isDrawing) return
//      console.log("currnetBox when mouse was up",currentBox)
//      console.log(" where mouse was  up as (x,y) are" ,[e.clientX,e.clientY])
//     let pos = getParentXY();
//     const ePoints={
//       x:(Math.min(currentBox.x,e.clientX)),
//       y:(Math.min(currentBox.y,e.clientY)),
//       width:(Math.abs(currentBox.x-e.clientX)-pos.x),
//       height:(Math.abs(currentBox.y-e.clientY)-pos.y)
//     }

//     console.log( "endpoints for currentbox ",ePoints)
//     setCurrentBox(ePoints)
//     console.log( "currentBox after new endpoints ",currentBox)
//     setIsDrawing(false)
//     if (currentBox) {
//       setAllBoxes((prevBoxes) => [...prevBoxes, currentBox]);
//     }