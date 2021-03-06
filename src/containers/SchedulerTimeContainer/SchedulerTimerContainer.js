import React from "react";
import SchedulerEventContainer from "../SchedulerEventContainer/SchedulerEventContainer";
import SchedulerUnit from "../../components/SchedulerUnit/SchedulerUnit";
import "./SchedulerTimeContainer.scss";
import { hoursPerDay } from "../../constant/hoursPerDay";

const SchedulerTimeContainer = ({ resource, date,bookings }) => {
  console.log(bookings)
  const timeColumn = hoursPerDay.map((timeInHour) => (
    <SchedulerUnit>{timeInHour}</SchedulerUnit>
  ));
  const resourceBlocks = resource.map((resource) => (
    <div className="calendar-tool-event-container">
      <SchedulerUnit isSelectable>{resource.resourceTitle}</SchedulerUnit>
      {resource.resourceEvent && (
        <SchedulerEventContainer
          resource={resource}
          bookingEvents={bookings}
          date={date}
        />
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
