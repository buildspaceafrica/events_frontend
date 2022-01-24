import { useState, useEffect } from "react";
import styles from "./countdown.module.css";
import { TimeBox } from "../../components";

function Countdown(props) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const getTimeLeft = () => {
      const eventTime = new Date(2022, 0, 29, 10);
      const now = new Date().getTime();
      let difference = Math.abs(eventTime - now) / 1000;

      const days = Math.floor(difference / 86400);
      difference -= days * 86400;

      const hours = Math.floor(difference / 3600) % 24;
      difference -= hours * 3600;

      const minutes = Math.floor(difference / 60) % 60;
      difference -= minutes * 60;

      const seconds = Math.round(difference % 60);
      const TimeBox = { days, hours, minutes, seconds };
      for (const key in TimeBox) {
        if (TimeBox[key].toString().length < 2)
          TimeBox[key] = `0${TimeBox[key]}`;
      }

      return TimeBox;
    };
    setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
  }, []);

  return (
    <div
      className={`flex gap-x-2 md:gap-x-4 lg:gap-x-8 xl:gap-x-10 mb-14 lg:my-8 ${styles["container"]}`}
    >
      <TimeBox type="day" number={timeLeft.days} />
      <TimeBox type="hour" number={timeLeft.hours} />
      <TimeBox type="minute" number={timeLeft.minutes} />
      <TimeBox number={timeLeft.seconds} />
    </div>
  );
}

export { Countdown };
