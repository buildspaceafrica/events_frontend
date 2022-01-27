import React, { useEffect, useState } from "react";
import { Add } from "../../assets/images/svgs";
import styles from "./addtocalender.module.scss";
import AddToCalendar from "react-add-to-calendar";
import AddToCalendarHOC from "react-add-to-calendar-hoc";

function AddToCalender() {
  //   const [currentWindow, setCurrentWindow] = useState(null);
  //   useEffect(() => {
  //     if (window) {
  //       setCurrentWindow(window.gapi);
  //       console.log(window);
  //     } else {
  //       console.log("null");
  //     }
  //   }, [currentWindow?.gapi]);

  //   const CLIENT_ID =
  //     "102770639027-tvaqt3679ooq80eau0jo3moild1uffl2.apps.googleusercontent.com";
  //   const API_KEY = "AIzaSyD_y-hErmV-vpaRgFhJUC-VCZhVh0TnVTs";
  //   const DISCOVERY_DOCS = [
  //     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  //   ];
  //   const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  //   const handleClick = () => {
  //     currentWindow?.load("client:auth2", () => {
  //       console.log("loaded client");

  //       currentWindow.client.init({
  //         apiKey: API_KEY,
  //         clientId: CLIENT_ID,
  //         discoveryDocs: DISCOVERY_DOCS,
  //         scope: SCOPES,
  //       });

  //       currentWindow?.client.load("calendar", "v3", () => console.log("bam!"));

  //       currentWindow?.auth2
  //         .getAuthInstance()
  //         .signIn()
  //         .then(() => {
  //           var event = {
  //             summary: "Awesome Event!",
  //             location: "800 Howard St., San Francisco, CA 94103",
  //             description: "Really great refreshments",
  //             start: {
  //               dateTime: "2020-06-28T09:00:00-07:00",
  //               timeZone: "America/Los_Angeles",
  //             },
  //             end: {
  //               dateTime: "2020-06-28T17:00:00-07:00",
  //               timeZone: "America/Los_Angeles",
  //             },
  //             recurrence: ["RRULE:FREQ=DAILY;COUNT=2"],
  //             attendees: [
  //               { email: "lpage@example.com" },
  //               { email: "sbrin@example.com" },
  //             ],
  //             reminders: {
  //               useDefault: false,
  //               overrides: [
  //                 { method: "email", minutes: 24 * 60 },
  //                 { method: "popup", minutes: 10 },
  //               ],
  //             },
  //           };

  //           var request = currentWindow.client.calendar.events.insert({
  //             calendarId: "primary",
  //             resource: event,
  //           });

  //           request.execute((event) => {
  //             console.log(event);
  //             window.open(event.htmlLink);
  //           });

  //           /*
  //           Uncomment the following block to get events
  //       */
  //           /*
  //       // get events
  //       currentWindow.client.calendar.events.list({
  //         'calendarId': 'primary',
  //         'timeMin': (new Date()).toISOString(),
  //         'showDeleted': false,
  //         'singleEvents': true,
  //         'maxResults': 10,
  //         'orderBy': 'startTime'
  //       }).then(response => {
  //         const events = response.result.items
  //         console.log('EVENTS: ', events)
  //       })
  //       */
  //         });
  //     });
  //   };

  //   let event = {
  //     title: "Sample Event",
  //     description: "This is the sample event provided as an example only",
  //     location: "Portland, OR",
  //     startTime: "2016-09-16T20:15:00-04:00",
  //     endTime: "2016-09-16T21:45:00-04:00",
  //   };

  //   const startDatetime = moment().utc().add(2, "days");
  //   const endDatetime = startDatetime.clone().add(2, "hours");
  //   const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
  //   const event = {
  //     description:
  //       "Description of event. Going to have a lot of fun doing things that we scheduled ahead of time.",
  //     duration,
  //     endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
  //     location: "NYC",
  //     startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
  //     title: "Super Fun Event",
  //   };

  const AddToCalendarModal = AddToCalendarHOC(Button, CalendarModal);

  return (
    <div
      className={styles.clock__bottom__right}
      //   onClick={() => {
      //     handleClick();
      //   }}
    >
      {/* <Add className="mr-2" />
      <h1>Add to Calender</h1> */}
      {/* <AddToCalendar event={event} buttonLabel="Put on my calendar" /> */}
      <AddToCalendarModal
        className={componentStyles}
        linkProps={{
          className: linkStyles,
        }}
        event={event}
      />
    </div>
  );
}

export default AddToCalender;
