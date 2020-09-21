import React, { useEffect, useState } from "react";
import SchedulerEventUnit from "../../components/SchedulerEventUnit/SchedulerEventUnit";
import PropTypes from "prop-types";
import { convertTimeSlotFormat } from "../../helpers/convertTimeSlot";

const SchedulerEventContainer = ({ bookingEvents, date, resource }) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedbookingEvents, setSelectedBookingEvents] = useState(
    bookingEvents
  );
    
  useEffect(() => {
    const CheckDate = (date) => {
      // converting date function
      const convertDate = (inputFormat) => {
        const pad = (s) => (s < 10 ? "0" + s : s);
        var d = new Date(inputFormat);
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join(
          "-"
        );
      };
      // filtering booking depending on the date and the resource Id
      date !== selectedDate && setSelectedDate(date);
     
      setSelectedBookingEvents(
        bookingEvents.filter(
          (bookingEvent) =>{
            console.log(bookingEvent.resourceId )
            return resource.resourceId === bookingEvent.resourceId &&
            convertDate(bookingEvent.bookingDate) === convertDate(selectedDate)
            }
        )
      );
    };
    CheckDate(date);
  }, [date, bookingEvents, selectedDate,resource]);
  console.log(selectedbookingEvents)
  return (
    <React.Fragment>
      {selectedbookingEvents.map((bookingEvent) => (
        <SchedulerEventUnit
          key={bookingEvent.bookingId}
          start={bookingEvent.start}
          end={bookingEvent.end}
        >
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
