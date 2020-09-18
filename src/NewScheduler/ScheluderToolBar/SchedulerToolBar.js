import React from "react";
import "./SchedulerToolBar.scss";
const CalendarToolBar = ({ view, onNavigate }) => {
  const navigate = (action) => {
    onNavigate(action);
  };

  return (
    <div

      className="calendar-toolbar-container"
    >
      <span>
        <h2>Lab Manager</h2>
      </span>
      <h2>Date DD Month YYYY</h2>
      <div className="calendar-toolbar-navigation-container">
        <button
          type="button"
          className="calender-toolbar-button "
          onClick={navigate}
        >
          Today
        </button>
        <button
          type="button"
          className="calender-toolbar-button "
          onClick={navigate}
        >
          Previous day
        </button>
        <button
          type="button"
          className="calender-toolbar-button "
          onClick={navigate}
        >
          Next day
        </button>
      </div>
      <button type="button" style={{borderRadius:"50%",fontSize:"25px"}} className="btn btn-danger">
        +
      </button>
    </div>
  );
};
export default CalendarToolBar;
