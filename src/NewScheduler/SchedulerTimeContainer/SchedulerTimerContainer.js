import React, { useState } from "react";
import SchedulerUnit from "../SchedulerUnit/SchedulerUnit";

const resourceMap = [
  { resourceId: 1, resourceTitle: "Test Space" },
  { resourceId: 2, resourceTitle: "Tool" },
  { resourceId: 3, resourceTitle: "Printer 3D" },
  { resourceId: 4, resourceTitle: "Hummer" },
  { resourceId: 5, resourceTitle: "Laser Saw" },
  { resourceId: 6, resourceTitle: "Crucher" },
  { resourceId: 7, resourceTitle: "Cutter" },
  { resourceId: 8, resourceTitle: "Vortex" },
  { resourceId: 4, resourceTitle: "Hummer" },
  { resourceId: 5, resourceTitle: "Laser Saw" },
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
  const [event, setEvent] = useState([]);
  return (
    <div
      style={{ border: "3px solid green", display: "flex", overflowY: "auto" }}
    >
      <div className="calendar-time-container">
        <SchedulerUnit />
        {time.map((timeInHour) => (
          <SchedulerUnit>{timeInHour}</SchedulerUnit>
        ))}
      </div>
      {resourceMap.map((resource) => (
        <div>
          <SchedulerUnit isSelectable>{resource.resourceTitle}</SchedulerUnit>
          {time.map((timeToSet) => (
            <SchedulerUnit isAnEvent>
              <span
                style={{
                  backgroundColor: "green",
                  borderRadius: "50%",
                  padding: "2px",
                  fill: "white",
                }}
                aria-label="plus-icon"
                role="img"
              >
                ➕
              </span>
            </SchedulerUnit>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SchedulerTimeContainer;
