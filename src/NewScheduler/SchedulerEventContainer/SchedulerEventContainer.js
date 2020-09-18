import React from "react";
import SchedulerEventUnit from "../SchedulerEventUnit/SchedulerEventUnit";
import PropTypes from "prop-types";
import { convertTimeSlotFormat } from "../../helpers/convertTimeSlot";

const SchedulerEventContainer = ({ bookingEvents }) => {
  return (
    <React.Fragment>
      {bookingEvents.map((bookingEvent) => (
        <SchedulerEventUnit start={bookingEvent.start} end={bookingEvent.end}>
          {`${convertTimeSlotFormat(
            bookingEvent.start
          )} - ${convertTimeSlotFormat(bookingEvent.end)}`}
        </SchedulerEventUnit>
      ))}
    </React.Fragment>
  );
};

SchedulerEventContainer.protoTypes = {
  bookingEvents: PropTypes.array,
};

export default SchedulerEventContainer;
