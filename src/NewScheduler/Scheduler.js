import moment from "moment";
import React, { useEffect, useState } from "react";
import SchedulerTimeContainer from "../containers/SchedulerTimeContainer/SchedulerTimerContainer";
import { dateFormatter } from "../helpers/dateFomatter";
import "./ScheluderToolBar/SchedulerToolBar.scss";
import "date-fns";

import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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

const localizer = new Date(moment().valueOf());

const Scheduler = () => {
  const [date, setDate] = useState(localizer);
  const [daysCounter, setDayCounter] = useState(0);

  useEffect(() => {
    const addOrsubstractDate = (counter) => {
      counter === 0
        ? setDate(localizer)
        : counter === daysCounter + 1
        ? setDate(new Date(moment().subtract(counter, "days")))
        : setDate(new Date(moment().add(counter, "days")));
    };
    addOrsubstractDate(daysCounter);
  }, [daysCounter]);

  const handleDateChange = (newDate) => {
    newDate.setHours(0, 0, 0, 0) > date.setHours(0, 0, 0, 0)
      ? setDayCounter(daysCounter + moment(newDate).diff(moment(date), "days"))
      : setDayCounter(daysCounter - moment(date).diff(moment(newDate), "days"));
  };



  return (
    <div style={{ width: "98vw", overflowX: "auto" }}>
      <h1> This is the Scheduler page</h1>
      {/* testing Scheduler Toolbar */}
      <div className="calendar-toolbar-container">
        <span>
          <h2>Lab Manager</h2>
        </span>
        <h2> {dateFormatter(date)}</h2>
        <div className="calendar-toolbar-navigation-container">
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                format="MM-dd-yyyy"
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <button
            type="button"
            className="calender-toolbar-button "
            onClick={() => {
              setDayCounter(0);
              // setDate(localizer);
            }}
          >
            Today
          </button>
          <button
            type="button"
            className="calender-toolbar-button "
            onClick={() => {
              setDayCounter(daysCounter - 1);
              // setDate(new Date(moment().subtract(daysCounter, "days")));
            }}
          >
            Previous day
          </button>
          <button
            type="button"
            className="calender-toolbar-button "
            onClick={() => {
              setDayCounter(daysCounter + 1);
              // setDate(new Date(moment().add(daysCounter, "days")));
            }}
          >
            Next day
          </button>
        </div>
        <button
          type="button"
          style={{ borderRadius: "50%", fontSize: "25px" }}
          className="btn btn-danger"
        >
          +
        </button>
      </div>

      {/* the component */}
      <SchedulerTimeContainer resource={resourceMap} />
    </div>
  );
};

export default Scheduler;
