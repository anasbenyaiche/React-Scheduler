import React, { useState } from "react";
import SchedulerEventContainer from "../SchedulerEventContainer/SchedulerEventContainer";
import SchedulerUnit from "../SchedulerUnit/SchedulerUnit";
import "./SchedulerTimeContainer.scss";
const resourceMap = [
  {
    resourceId: 1,
    resourceTitle: "Test Space",
  },
  {
    resourceId: 2,
    resourceTitle: "Tool",
    resourceEvent: "hello from the event",
    bookings: [{ bookingId: Math.random(), start: "44780", end: "50000" }],
  },
  {
    resourceId: 3,
    resourceTitle: "Printer 3D",
    resourceEvent: "hello from the event",
    bookings: [
      { start: "0", end: "44780" },
      { start: "50000", end: "86340" },
    ],
  },
  { resourceId: 4, resourceTitle: "Hummer" },
  { resourceId: 5, resourceTitle: "Laser Saw" },
  {
    resourceId: 6,
    resourceTitle: "Crucher",
    resourceEvent: "hello from the event",
    bookings: [{ start: "44780", end: "50000" }],
  },
  { resourceId: 7, resourceTitle: "Cutter" },
  { resourceId: 8, resourceTitle: "Vortex" },
  { resourceId: 4, resourceTitle: "Hummer" },
  {
    resourceId: 5,
    resourceTitle: "Laser Saw",
    resourceEvent: "hello from the event",
    bookings: [{ start: "44780", end: "50000" }],
  },
  { resourceId: 6, resourceTitle: "Crucher" },
  { resourceId: 7, resourceTitle: "Cutter" },
  { resourceId: 8, resourceTitle: "Vortex" },
];

const time = [
  "00:00 AM",
  "01:00 AM",
  "02:00 AM ",
  "03:00 AM",
  "04:00 AM",
  "05:00 AM",
  "06:00 AM",
  "07:00 AM",
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 AM",
  "01:00 PM",
  "02:00 PM ",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
  "08:00 PM",
  "09:00 PM",
  "10:00 PM",
  "11:00 PM",
  "12:00 PM",
];

const SchedulerTimeContainer = () => {
  // eslint-disable-next-line
  const [event, setEvent] = useState([]);
  return (
    <div style={{ border: "", display: "flex", overflowY: "auto" }}>
      <div className="calendar-time-container">
        <SchedulerUnit />
        {time.map((timeInHour) => (
          <SchedulerUnit>{timeInHour}</SchedulerUnit>
        ))}
      </div>
      {resourceMap.map((resource) => (
        <div className="calendar-tool-event-container">
          <SchedulerUnit isSelectable>{resource.resourceTitle}</SchedulerUnit>
          {resource.resourceEvent && (
            <SchedulerEventContainer bookingEvents={resource.bookings} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SchedulerTimeContainer;
