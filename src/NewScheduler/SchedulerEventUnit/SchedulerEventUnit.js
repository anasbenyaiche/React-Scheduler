import React from "react";
import styled from "styled-components";

const convertHoursToPixel = (time) => {
   let portion =  Math.round(((parseInt(time) * 1460) / 86400) +56);
   console.log(portion)
   let result = portion.toString()
   console.log(result)
   let valueInPixel = `${result}px`
   console.log(valueInPixel)
   return valueInPixel
};

const SchedulerEventUnit = ({ start, end, children }) => {

    const pixelStarts =  convertHoursToPixel(start)
    const pixelInterval = convertHoursToPixel(end - start)
    console.log(start + " and ends at "+ end)
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: pixelInterval ,
        top: pixelStarts ,
        backgroundColor: " #32cd32",
        padding: "4px",
        color: "white",
        borderRadius: "6px",
      }}
    >
      {children}
    </div>
  );
};

export default SchedulerEventUnit;
