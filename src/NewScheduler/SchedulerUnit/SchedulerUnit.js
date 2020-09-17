import React from "react";
import "./SchedulerUnit.scss";

const SchedulerUnit = ({ children, onClickUnit, isSelectable, isAnEvent }) => {
  return (
    <div
      className="scheduler-single-unit-container"
      style={{ border: "1px solid black", padding: "5px" }}
    >
      <div 
        className={`  ${
          isAnEvent ? "scheduler-unit-event" : "scheduler-unit"
        } ${isSelectable ? "scheduler-unit-selectable" : null}`}
        onClick={onClickUnit}
      >
        {children}
      </div>
    </div>
  );
};

export default SchedulerUnit;
