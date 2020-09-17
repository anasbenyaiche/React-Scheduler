import React from "react";

const convertHoursToPixels = (time, startingMargin = 0) => {
  let portion = Math.round((parseInt(time) * 1397) / 86400 + startingMargin);

  let result = portion.toString();

  let valueInPixel = `${result}px`;
  console.log(valueInPixel);
  return valueInPixel;
};

const SchedulerEventUnit = ({ start, end, children }) => {
  const pixelStarts = convertHoursToPixels(start, 56);
  const pixelInterval = convertHoursToPixels(end - start);
  console.log(pixelInterval);
  console.log(start + " and ends at " + end);
  return (
    <div
      style={{
        position: "absolute",
        width: "95%",
        height: pixelInterval,
        top: pixelStarts,
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
