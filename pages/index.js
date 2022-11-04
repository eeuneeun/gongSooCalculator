import { useState, useEffect, useRef } from "react";
import React from "react";
import dynamic from "next/dynamic";

const BasicCalendar = dynamic(() => import("../components/Modules/Calendar"), {
  ssr: false,
});
const CalendarComponent = React.forwardRef((props, ref) => (
  <BasicCalendar {...props} forwardedRef={ref} />
));

export default function Home() {
  const cal = useRef(null);
  // const calendars = [{ id: "cal1", name: "Personal" }];

  const template = {
    milestone(event) {
      return `<span style="color: red; background-color: ${event.backgroundColor};">${event.title}</span>`;
    },
    allday(event) {
      return `[All day] ${event.title}`;
    },
  };
  const calendars = [
    {
      id: "0",
      name: "Private",
      backgroundColor: "red",
      borderColor: "#9e5fff",
    },
    {
      id: "1",
      name: "Company",
      backgroundColor: "#00a9ff",
      borderColor: "#00a9ff",
    },
  ];

  const onAfterRenderEvent = (event) => {
    console.log("ㅁㄴㅇㅁㄴㅇ");
    console.log(event);
  };
  return (
    <div className="container">
      <CalendarComponent
        id="cal"
        ref={cal}
        height="600px"
        view="month"
        month={{
          dayNames: ["일", "월", "화", "수", "목", "금", "토"],
          visibleWeeksCount: 5,
          today: {
            color: "yellow",
          },
        }}
        useFormPopup={true}
        useDetailPopu={true}
        template={template}
        calendars={calendars}
        onAfterRenderEvent={onAfterRenderEvent}
      />
    </div>
  );
}
