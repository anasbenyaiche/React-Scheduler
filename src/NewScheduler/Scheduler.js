import React from "react";
import SchedulerTimeContainer from "./SchedulerTimeContainer/SchedulerTimerContainer";
import CalendarToolBar from "./ScheluderToolBar/SchedulerToolBar";

const Scheduler = () => {
  return (
    <div style={{ width: "98vw", overflowX:"auto"}}>
      <h1> This is the Scheduler page</h1>
      <CalendarToolBar />
      <SchedulerTimeContainer />
    </div>
  );
};

export default Scheduler;
