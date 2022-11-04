import React from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";

export default function BasicCalendar(props) {
  console.log(props);

  return (
    <div>
      <Calendar {...props} ref={props.forwardedRef} />
    </div>
  );
}
