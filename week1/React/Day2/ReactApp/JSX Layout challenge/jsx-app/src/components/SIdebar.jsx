import React from 'react';

const Sidebar = ({ showTips }) => (
  <aside className="sidebar">
    <h3>Sidebar Widgets</h3>
    {showTips ? <p>💡 Tip of the day: Practice React daily!</p> : <p>No tips today.</p>}
  </aside>
);

export default Sidebar;
