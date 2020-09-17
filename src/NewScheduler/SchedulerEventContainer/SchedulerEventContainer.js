import React from "react";
import SchedulerEventUnit from "../SchedulerEventUnit/SchedulerEventUnit";

const SchedulerEventContainer = ({ bookingEvents }) => {
  return (
    <React.Fragment>
      {bookingEvents.map((bookingEvent) => (
        <SchedulerEventUnit>{bookingEvent}</SchedulerEventUnit>
      ))}
    </React.Fragment>
  );
};

export default SchedulerEventContainer;
