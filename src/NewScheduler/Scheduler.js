import moment from "moment";
import React, { useState } from "react";
import SchedulerTimeContainer from "../containers/SchedulerTimeContainer/SchedulerTimerContainer";
import { convertDate } from "../helpers/covertDate";
import CalendarToolBar from "./ScheluderToolBar/SchedulerToolBar";

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


const localizer = convertDate(new Date(moment().valueOf()))

const Scheduler = () => {
  const [date, setDate] = useState(localizer)

  const changeDate = (type,date) => {
    switch(type){
      case 'SUBSTRACT_DAY':
        return date = moment().subtract(1, 'days');
      case 'ADD_DAY':
        return date = moment().add(1,'days');
      default:
        return date;  


    }
  }



  console.log(date)
  return (
    <div style={{ width: "98vw", overflowX:"auto"}}>
      <h1> This is the Scheduler page</h1>
      <CalendarToolBar  />
      <SchedulerTimeContainer resource={resourceMap} />
    </div>
  );
};

export default Scheduler;
