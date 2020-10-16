import React from 'react';
import "./SidebarRow.css";

function SidebarRow({selected,title,Icon}) {
    return (
        
          <div className={`sidebar_row  ${selected && "selected"}`}>
              <Icon  className="sidebarRow_icon" />
              <h1 className="sidebarRow_title">{title}</h1>
          </div>
           
            
        
    )
}

export default SidebarRow
