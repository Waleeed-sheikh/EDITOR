import React, { Component } from "react";
import { useState, useRef } from "react";
import Rectangle from "./Rectangle";
import Circle from "./Circle";
import TextBox from "./TextBox";
export default function Editor({ stateOfSidebar }) {
  const editorModes = {
    create: "create",
    select: "select",
    resize: "resize",
    drag: "drag",
  };

  const [editorSelctedMode, setEditorSelectedModes] = useState(
    editorModes.select
  );
  const [allShapes, setAllShapes] = useState([]);
  const [startingPoints, setStartingPoints] = useState(null);

  const divRef = useRef(null);
  const [currentSelectedShapeId, setCurrentSelectedShapeId] = useState(null);
  const [difference, setDifference] = useState(null);
  const counter = useRef(0);
  
  const selectedShapeRef = useRef(null); // Ref to store the selected shape
  const [resize, setResize] = useState(null);
  const [drag, setDrag] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  // function handleRectangleClick(rectangleData) {
  //   selectedShapeRef.current = rectangleData; // Update the ref with the selected rectangle
  //   console.log("Selected shape:", selectedShapeRef.current); // Access the shape data immediately
  // }




  React.useEffect(() => {
    if (stateOfSidebar !== "arrow") {
      setAllShapes((prevShapes) =>
        prevShapes.map((shape) => ({ ...shape, selected: false }))
      );
    }
  }, [stateOfSidebar]);

  function whenMouseDown(e) {
    e.stopPropagation();

    let pos = getParentXY();

   // console.log(selectedShapeRef.current.resize)

    if (stateOfSidebar == "arrow" && selectedShapeRef.current.resize==undefined) {
      console.log("Mouse Down of Editor triggered");
      console.log("Editor k  pass kiya aya", selectedShapeRef.current);

      // console.log("Mouse down Triggered of Editor")
      setEditorSelectedModes(editorModes.drag);
      // setDrag(true);
      const differenceX = e.clientX - selectedShapeRef.current.x;
      const differenceY = e.clientY - selectedShapeRef.current.y;
      setDifference([differenceX, differenceY]);
      // console.log("Box",selectedObject)
    }

    

    

    if (stateOfSidebar == "arrow" && selectedShapeRef.current.resizer !=undefined) {
      setResize(true);
      setEditorSelectedModes(editorModes.resize);
    }


    if (stateOfSidebar === "rectangle" && e.currentTarget === divRef.current) {
      setEditorSelectedModes(editorModes.create);
      setIsDrawing(true);

      const newShape = {
        id: counter.current++,
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
        width: 0,
        height: 0,
        type: "rectangle",
        selected: false,
      };
      setStartingPoints({ x: newShape.x, y: newShape.y });
      setAllShapes((prev) => [...prev, newShape]);
      setCurrentSelectedShapeId(newShape.id); //konsa wala daba banay ga mouse move pe
      
    }

    if (stateOfSidebar === "textBox" && e.currentTarget === divRef.current) {
      setEditorSelectedModes(editorModes.create);
      setIsDrawing(true);

      const newShape = {
        id: counter.current++,
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
        width: 0,
        height: 0,
        type: "textBox",
        selected: false,
      };
      setStartingPoints({ x: newShape.x, y: newShape.y });
      setAllShapes((prev) => [...prev, newShape]);
      setCurrentSelectedShapeId(newShape.id);
    }

    if (stateOfSidebar === "circle" && e.currentTarget === divRef.current) {
      setEditorSelectedModes(editorModes.create);
      setIsDrawing(true);

      const newShape = {
        id: counter.current++,
        x: e.clientX - pos.x,
        y: e.clientY - pos.y,
        width: 0,
        height: 0,
        type: "circle",
        selected: false,
      };
      setStartingPoints({ x: newShape.x, y: newShape.y });
      setAllShapes((prev) => [...prev, newShape]);
      setCurrentSelectedShapeId(newShape.id);
    }

    //console.log("Mouse down of editor triggered",selectedBox)
  }

  function whenMouseMove(e) {
    if (editorSelctedMode=="select") return;
    //console.log("resizer is " ,selectedShapeRef.current.resizer)
    console.log("DRAG IS ", drag);
    console.log("Drawing is ", isDrawing);
    console.log("Resize is ", resize);
    e.stopPropagation();
    if (editorSelctedMode === "create") {
      let pos = getParentXY();

      const updatedPointsRectangle = {
        x: Math.min(startingPoints.x, e.clientX - pos.x),
        y: Math.min(startingPoints.y, e.clientY - pos.y),
        width: Math.abs(startingPoints.x - (e.clientX - pos.x)),
        height: Math.abs(startingPoints.y - (e.clientY - pos.y)),
      };

      const updatedPointsCircle = {
        x: Math.min(startingPoints.x, e.clientX - pos.x),
        y: Math.min(startingPoints.y, e.clientY - pos.y),
        width: Math.abs(startingPoints.x - (e.clientX - pos.x)),
        height: Math.abs(startingPoints.y - (e.clientY - pos.y)),
      };
      setAllShapes((prev) =>
        prev.map((shape) => {
          if (shape.id === currentSelectedShapeId) {
            if (shape.type === "circle") {
              return {
                ...shape,
                ...updatedPointsCircle,
                radius: Math.min(
                  updatedPointsCircle.width / 2,
                  updatedPointsCircle.height / 2
                ),
              };
            } else if (shape.type === "rectangle") {
              return {
                ...shape,
                ...updatedPointsRectangle,
              };
            } else if (shape.type === "textBox") {
              return {
                ...shape,
                ...updatedPointsRectangle,
              };
            }
          }
          return shape;
        })
      );
    }
    if (drag) {
      const latestX = e.clientX - difference[0];
      const latestY = e.clientY - difference[1];

      setAllShapes((prevObject) =>
        prevObject.map((shape) =>
          shape.selected === true ? { ...shape, x: latestX, y: latestY } : shape
        )
      );
    }

    if (resize) {
      let newWidth;
      let newHeight;
      let pos = getParentXY();
      const pointX = e.clientX - pos.x;
      const pointY = e.clientY - pos.y;

      switch (selectedShapeRef.current.resizer) {
        case `bottomRight${selectedShapeRef.current.id}`: {
          const deltaWidth =
            pointX -
            (selectedShapeRef.current.x + selectedShapeRef.current.width);
          const deltaHeight =
            pointY -
            (selectedShapeRef.current.y + selectedShapeRef.current.height);

          newWidth = Math.max(selectedShapeRef.current.width + deltaWidth, 10);
          newHeight = Math.max(
            selectedShapeRef.current.height + deltaHeight,
            10
          );

          setAllShapes((prevObject) => {
            return prevObject.map((shape) => {
              if (shape.selected === true) {
                return {
                  ...shape,
                  width: newWidth,
                  height: newHeight,
                };
              }
              return shape;
            });
          });
          break;
        }

        case `topRight${selectedShapeRef.current.id}`: {
          const deltaWidth =
            pointX -
            (selectedShapeRef.current.x + selectedShapeRef.current.width);
          newWidth = Math.max(selectedShapeRef.current.width + deltaWidth, 10);
          const deltaHeight = selectedShapeRef.current.y - pointY;
          newHeight = Math.max(
            selectedShapeRef.current.height + deltaHeight,
            10
          );

          const newY =
            newHeight > 10
              ? selectedShapeRef.current.y - deltaHeight
              : selectedShapeRef.current.y +
                (selectedShapeRef.current.height - 10);

          setAllShapes((prevObject) =>
            prevObject.map((shape) => {
              if (shape.selected === true) {
                return {
                  ...shape,
                  y: newY,
                  width: newWidth,
                  height: newHeight,
                };
              }
              return shape;
            })
          );
          break;
        }

        case `bottomLeft${selectedShapeRef.current.id}`: {
          newWidth = Math.max(
            selectedShapeRef.current.x +
              selectedShapeRef.current.width -
              pointX,
            10
          );
          const newX =
            selectedShapeRef.current.x +
            (selectedShapeRef.current.width - newWidth);

          const deltaHeight =
            pointY -
            (selectedShapeRef.current.y + selectedShapeRef.current.height);
          newHeight = Math.max(
            selectedShapeRef.current.height + deltaHeight,
            10
          );

          setAllShapes((prevObject) =>
            prevObject.map((shape) => {
              if (shape.selected === true) {
                return {
                  ...shape,
                  x: newX,
                  width: newWidth,
                  height: newHeight,
                };
              }
              return shape;
            })
          );
          break;
        }

        case `topLeft${selectedShapeRef.current.id}`: {
          const deltaX = selectedShapeRef.current.x - pointX;
          const deltaY = selectedShapeRef.current.y - pointY;

          newWidth = Math.max(selectedShapeRef.current.width + deltaX, 10);
          newHeight = Math.max(selectedShapeRef.current.height + deltaY, 10);

          const newX =
            newWidth > 10
              ? selectedShapeRef.current.x - deltaX
              : selectedShapeRef.current.x +
                (selectedShapeRef.current.width - 10);
          const newY =
            newHeight > 10
              ? selectedShapeRef.current.y - deltaY
              : selectedShapeRef.current.y +
                (selectedShapeRef.current.height - 10);

          setAllShapes((prevObject) =>
            prevObject.map((shape) => {
              if (shape.selected === true) {
                return {
                  ...shape,
                  x: newX,
                  y: newY,
                  width: newWidth,
                  height: newHeight,
                };
              }
              return shape;
            })
          );
          break;
        }

        default:
          console.warn("not valid");
          return;
      }
    }
  }

  
  function whenMouseUp(e) {
    e.stopPropagation();
    setIsDrawing(false);
    setStartingPoints(null);
    setDrag(false);
    setResize(false);
    selectedShapeRef.current.resizer=undefined
    setEditorSelectedModes(editorModes.select);
    console.log("Mouse Up  of editor working ");
    console.log("Drag at mouse up is", drag);
    console.log("drawing at mouse up is", isDrawing);
    console.log("Resize at mouse up is", resize);

    console.log("resizer is", selectedShapeRef.current);
  }

  React.useEffect(() => {
    function handleCustomEvent(e) {
      setAllShapes((prevShapes) =>
        prevShapes.map((shape) => ({
          ...shape,
          selected: shape.id === e.detail.info.id ? true : false,
        }))
      );
      if(e.detail.info.resizer == undefined){
        setDrag(true);
      } else if(e.detail.info.resizer != undefined) {
        setResize(true);
      }
      selectedShapeRef.current = e.detail.info;
    }

    const editor = document.getElementById("editor");
    editor.addEventListener("customEventFromChild", handleCustomEvent);

    return () => {
      editor.removeEventListener("customEventFromChild", handleCustomEvent);
    };
  }, []);

  //  function selectedBoxCallback(id) {
  //   setAllShapes((prevShapes) =>
  //     prevShapes.map((shape) => ({ ...shape, selected: (shape.id === id) ? true : false }))
  //   );
  //  }

  function handleClick(){

   

  }

  function whenMouseLeave(e) {
    e.stopPropagation();
    setIsDrawing(false);
    setStartingPoints(null);
    setDrag(false);
    setResize(false);
    setEditorSelectedModes(editorModes.select);
    
  }

  function getParentXY() {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      return { x: rect.left, y: rect.top };
    }
    return { x: 0, y: 0 };
  }

  return (
    <div
      ref={divRef}
      id="editor"
      style={{
        backgroundColor: "white",
        cursor:drag?"grab":"default",
        border: "solid black 1px",
        position: "relative",
        
      }}
      onMouseDown={whenMouseDown}
      onMouseMove={whenMouseMove}
      onMouseUp={whenMouseUp}
      onMouseLeave={whenMouseLeave}
      onClick={handleClick}
    >
      {allShapes.map((shape) => {
        if (shape.type === "rectangle")
          return (
            <Rectangle
              key={shape.id}
              id={shape.id}
              x={shape.x}
              y={shape.y}
              width={shape.width}
              height={shape.height}
              stateOfSidebar={stateOfSidebar}
              changeObject={setAllShapes}
              selected={shape.selected}
              //getParentXY={getParentXY}
              //setSelectedBox={selectedBoxCallback}
              //whenMouseDown={whenMouseDown}
              //onClick={handleRectangleClick}
            />
          );
        else if (shape.type === "circle")
          return (
            <Circle
              key={shape.id}
              id={shape.id}
              x={shape.x}
              y={shape.y}
              width={shape.width}
              height={shape.height}
              stateOfSidebar={stateOfSidebar}
              changeObject={setAllShapes}
              selected={shape.selected}
              getParentXY={getParentXY}
            />
          );
        if (shape.type === "textBox")
          return (
            <TextBox
              key={shape.id}
              id={shape.id}
              x={shape.x}
              y={shape.y}
              width={shape.width}
              height={shape.height}
              stateOfSidebar={stateOfSidebar}
              changeObject={setAllShapes}
              selected={shape.selected}
              getParentXY={getParentXY}
            />
          );
        else return null;
      })}
    </div>
  );
}





