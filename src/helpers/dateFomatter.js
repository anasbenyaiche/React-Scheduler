export const dateFormatter = (date) => {
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  dd = dd < 10 ? `0${dd.toString()}` : dd.toString();
  mm = mm < 10 ? `0${mm.toString()}` : mm.toString();
  // eslint-disable-next-line
  Date.prototype.getDayName = function () {
    return days[this.getDay()];
  };
  return `${date.getDayName()} ${dd}-${mm}-${yyyy}`;
};
