import React from "react";
import kanban from "../Icons/kanban.png";
import uml from "../Icons/uml.png";
import Mindmap from "../Icons/mind-map.png";
import paper from "../Icons/paper.png";
import dfd from "../Icons/data-flow.png";
import brainstorm from "../Icons/brainstorming.png";
import "../style.css";

export default function DataTray() {
  return (
    <>
      <div id="DataTray">
        <div className="Databox">
          <img src={paper} alt="Blank Board" />
          <p>Blank Board</p>
        </div>
        <div className="Databox">
          <img src={kanban} alt="Kanban Framework" />
          <p>Kanban Framework</p>
        </div>
        <div className="Databox">
          <img src={uml} alt="Flowchart" />
          <p>Flowchart</p>
        </div>
        <div className="Databox">
          <img src={Mindmap} alt="Mind Map" />
          <p>Mind Map</p>
        </div>
        <div className="Databox">
          <img src={brainstorm} alt="Brainwriting" />
          <p>Brainwriting</p>
        </div>
        <div className="Databox">
          <img src={dfd} alt="Data Flow Diagram" />
          <p>Data Flow Diagram</p>
        </div>
      </div>
    </>
  );
}
