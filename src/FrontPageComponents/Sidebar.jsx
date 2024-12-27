import React, { useState, useEffect } from "react";
import "../style.css";

const Sidebar = () => {
  const [width, setWidth] = useState(200); // Initial width of the sidebar
  const [isResizing, setIsResizing] = useState(false);
  const [startX, setStartX] = useState(0); // Starting X position of the cursor
  const [startWidth, setStartWidth] = useState(300); // Starting width of the sidebar

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return;

      // Get current mouse or touch position
      const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);

      // Calculate new width based on the cursor's movement
      const newWidth = startWidth + (clientX - startX);

      // Clamp the width between 200px and 600px
      if (newWidth >= 210 && newWidth <= 600) {
        setWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      if (isResizing) {
        setIsResizing(false);
        document.body.style.cursor = "default";
        document.body.classList.remove("no-select");
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove, { passive: false });
    document.addEventListener("touchend", handleMouseUp);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleMouseMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isResizing, startX, startWidth]);

  const handleMouseDown = (e) => {
    setIsResizing(true);
    setStartX(e.clientX || (e.touches && e.touches[0]?.clientX)); // Record starting X position
    setStartWidth(width); // Record current width of the sidebar
    document.body.style.cursor = "col-resize";
    document.body.classList.add("no-select");
    e.preventDefault(); // Prevent unintended selection or default behavior
  };

  return (
    <div className="Sidebarcontainer">
      <div className="sidebar" style={{ width: `${width}px` }}>
        <div className="profile">
          <div className="avatar">WA</div>
          <div className="user-info">
            <span className="name">walee</span>
            <span className="email">walee</span>
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="🔍 Search by title or topic" />
        </div>
        <nav className="menu">
          <div className="menu-item">
            <span className="icon">🏠</span> Home
          </div>
          <div className="menu-item">
            <span className="icon">⏱️</span> Recent
          </div>
          <div className="menu-item">
            <span className="icon">⭐</span> Starred
          </div>
        </nav>
        <div className="spaces">
          <span>Spaces</span>
          <button className="add-space">+</button>
        </div>
      </div>
      <div
        className="resizer"
        style={{ background:isResizing?"#156aea":"transparent" }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      ></div>
      
    </div>
  );
};

export default Sidebar;
