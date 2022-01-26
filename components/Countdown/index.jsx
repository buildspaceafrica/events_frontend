import { useEffect, useRef, useState } from "react";
import styles from "./countdown.module.css";
import { TimeBox } from "../../components";

function Countdown(props) {
  const dayRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const [hasExpired, setHasExpired] = useState(false);
  const eventTime = new Date(2022, 0, 29, 10);
  const now = new Date().getTime();


  useEffect(() => {
    let interval;
    if (eventTime.getTime() < now) setHasExpired(true);
    if (eventTime.getTime() >= now) {
      const setTimeLeft = () => {
        const eventTime = new Date(2022, 0, 29, 10);
        const now = new Date().getTime();
        if (eventTime.getTime() < now) setHasExpired(true);
        let difference = Math.abs(eventTime - now) / 1000;
    
        const days = Math.floor(difference / 86400);
        difference -= days * 86400;
    
        const hours = Math.floor(difference / 3600) % 24;
        difference -= hours * 3600;
    
        const minutes = Math.floor(difference / 60) % 60;
        difference -= minutes * 60;
    
        const seconds = Math.round(difference % 60);
    
        const timeDetails = { days, hours, minutes, seconds };
        for (const key in timeDetails) {
          if (timeDetails[key].toString().length < 2)
            timeDetails[key] = `0${timeDetails[key]}`;
        }
        if (seconds == "60") minutes = minuteRef?.current?.innerText;
        if (timeDetails["seconds"] == "60") timeDetails["seconds"] = "00";
    
        dayRef?.current?.innerText = timeDetails.days;
        hourRef?.current?.innerText = timeDetails.hours;
        minuteRef?.current?.innerText = timeDetails.minutes;
        secondRef?.current?.innerText = timeDetails.seconds;
        return timeDetails;
      };
      interval = setInterval(() => {
        setTimeLeft();
      }, 1000);
    }
    if (hasExpired) {
      clearInterval(interval)
    }
  }, [hasExpired]);
  return (
    <div
      className={`flex gap-x-2 md:gap-x-4 lg:gap-x-8 xl:gap-x-10 mb-14 lg:my-8 ${styles["container"]}`}
    >
      <TimeBox type="day" ref={dayRef} />
      <TimeBox type="hour" ref={hourRef} />
      <TimeBox type="minute" ref={minuteRef} />
      <TimeBox ref={secondRef} />
    </div>
  );
}

export { Countdown };
