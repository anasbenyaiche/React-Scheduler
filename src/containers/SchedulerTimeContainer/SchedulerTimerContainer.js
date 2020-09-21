import React from "react";
import SchedulerEventContainer from "../SchedulerEventContainer/SchedulerEventContainer";
import SchedulerUnit from "../../components/SchedulerUnit/SchedulerUnit";
import "./SchedulerTimeContainer.scss";
import { hoursPerDay } from "../../constant/hoursPerDay";

const SchedulerTimeContainer = ({ resource, date }) => {
  const timeColumn = hoursPerDay.map((timeInHour) => (
    <SchedulerUnit>{timeInHour}</SchedulerUnit>
  ));

  const resourceBlocks = resource.map((resource) => (
    <div className="calendar-tool-event-container">
      <SchedulerUnit isSelectable>{resource.resourceTitle}</SchedulerUnit>
      {resource.resourceEvent && (
        <SchedulerEventContainer bookingEvents={resource.bookings} />
      )}
    </div>
  ));

  return (
    <div style={{ border: "", display: "flex", overflowY: "auto" }}>
      <div className="calendar-time-container">
        <SchedulerUnit />
        {timeColumn}
      </div>
      {resourceBlocks}
    </div>
  );
};

export default SchedulerTimeContainer;
