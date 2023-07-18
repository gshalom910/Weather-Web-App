import React from "react";

function FormattedDate(props) {
  const [weekDays, month, day, year] = props.date.toDateString().split(" ");
  let hours = props.date.getHours().toString().padStart(2, "0");
  let min = props.date.getMinutes().toString().padStart(2, "0");
  return (
    <>
      <p id="today">
        {weekDays} {hours} : {min} <br />
        {month} {day.toString().padStart(2, "0")}, {year}
      </p>
    </>
  );
}

export default FormattedDate;
