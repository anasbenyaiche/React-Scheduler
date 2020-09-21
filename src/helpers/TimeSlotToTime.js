export const timeSlotToTime = (start,end) => {
  let fromHours = Math.floor(start / 3600);

  let toHours = Math.floor(end / 3600);

  let fromMinutes = Math.floor((start - fromHours * 3600) / 60);

  let toMinutes = Math.floor((end - toHours * 3600) / 60);

let fromSeconds =Math.floor((end- toMinutes*60)/60)

 let toSeconds = Math.floor((start- fromMinutes*60)/60)

  let fromAmpm = "am";

  let toAmpm = "am";

  const from24Hours = fromHours;

  const to24Hours = toHours;

  if (fromHours === 12) fromAmpm = "pm";
  if (toHours === 12) toAmpm = "pm";
  if (fromHours === 24) fromAmpm = "am";
  if (toHours === 24) toAmpm = "am";
  if (fromHours > 12) {
    fromHours -= 12;
    fromAmpm = "pm";
  }
  if (toHours > 12) {
    toHours -= 12;
    toAmpm = "pm";
  }

  if (fromMinutes < 10) fromMinutes = `0${fromMinutes}`;
  if (toMinutes < 10) toMinutes = `0${toMinutes}`;



  const decomposeTime = {
    fromAmpm,
    fromMinutes,
    fromHours,
    toAmpm,
    toMinutes,
    toHours,
    to24Hours,
    from24Hours,
    toSeconds,
    fromSeconds,
  };


//   `${fromHours}:${fromMinutes}:${}- ${}:${}:${} `
  return decomposeTime


};
