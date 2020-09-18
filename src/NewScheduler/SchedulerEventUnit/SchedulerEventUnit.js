import React from "react";
import styled from "styled-components";

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
`;

const convertHoursToPixels = (time, startingMargin = 0) => {
  let portion = Math.round((parseInt(time) * 96) / 86400 + startingMargin);

  let result = portion.toString();

  let valueInPixel = `${result}%`;

  return valueInPixel;
};

const SchedulerEventUnit = ({ start, end, children }) => {
  const pixelStarts = convertHoursToPixels(start, 4);
  const pixelInterval = convertHoursToPixels(end - start);

  return (
    <div>
      <SchedulerElementStyled
        pixelStarts={pixelStarts}
        pixelInterval={pixelInterval}
      >
        {children}
      </SchedulerElementStyled>
    </div>
  );
};

export default SchedulerEventUnit;
