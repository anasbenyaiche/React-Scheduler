export const convertTimeSlotFormat = (timeValue) => {
  
  let amOrPm = "A.M";
  let toHours = Math.floor(timeValue / 3600);

  let toMinutes = Math.floor((timeValue % 3600) / 60);

  let toSeconds = Math.floor((timeValue % 3600) % 60);

  if (toHours > 12) {
    amOrPm = "P.M";
    toHours -= 12;
  }
  if (toHours === 24) {
    amOrPm = "A.M";
    toHours = 0;
  }
  toHours = toHours < 10 ? `0${toHours}` : toHours;
  toMinutes = toMinutes < 10 ? `0${toMinutes}` : toMinutes;
  toSeconds = toSeconds < 10 ? `0${toSeconds}` : toSeconds;

  const hoursMinutesSecondsFormat = `${toHours}:${toMinutes}:${toSeconds} ${amOrPm}`;

  return hoursMinutesSecondsFormat;
};
