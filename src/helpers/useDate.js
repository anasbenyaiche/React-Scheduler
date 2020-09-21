// use-Date.js
import { useState, useEffect } from "react";

export default () => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  useEffect(() => {
    const handleChangeDate = (date) => setSelectedDate(date);
    document.addEventListener("click", handleChangeDate);
  }, []);
  return selectedDate;
};
