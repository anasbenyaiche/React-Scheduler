import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

// using styled Component so we can configure the height and position of the Event
const SchedulerElementStyled = styled.div`
  font-size: 11px;
  border: 3px solid black;
  left: 3%;
  position: absolute;
  width: 95%;
  height: ${(props) => props.pixelInterval};
  top: ${(props) => props.pixelStarts};
  background-color: #32cd32;
  padding: 4px;
  color: white;
  border-radius: 6px;
  -webkit-box-shadow: 10px 11px 18px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 11px 18px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 11px 18px -10px rgba(0, 0, 0, 0.75);
  cursor:pointer;
`;
// converting the amount of hours in % of the container
const convertHoursToPixels = (time, startingMargin = 0) => {
  let portion = Math.round((parseInt(time) * 96) / 86400 + startingMargin);
  let result = portion.toString();
  let valueInPixel = `${result}%`;
  return valueInPixel;
};

const SchedulerEventUnit = ({ start, end, children, key }) => {
  const pixelStarts = convertHoursToPixels(start, 4);
  const pixelInterval = convertHoursToPixels(end - start);

  return (
    <div key={key}>
      <SchedulerElementStyled
        pixelStarts={pixelStarts}
        pixelInterval={pixelInterval}
      >
        {children}
      </SchedulerElementStyled>
    </div>
  );
};

SchedulerEventUnit.propTypes = {
  start: propTypes.string,
  end: propTypes.string,
};

export default SchedulerEventUnit;
