import React from "react";
import "./SchedulerUnit.scss";

const SchedulerUnit = ({ children, onClickUnit, isSelectable, isAnEvent,unitKey }) => {
  return (
    <div key={unitKey}
      className="scheduler-single-unit-container"
      style={{  padding: "5px" }}
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
