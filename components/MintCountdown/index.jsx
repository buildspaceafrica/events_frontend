import { useState, useEffect, useRef } from "react";
import styles from "./mint-countdown.module.css";

function MintCountdown(props) {
  const dayRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const [hasExpired, setHasExpired] = useState(false);
  const eventTime = new Date(2022, 0, 26, 20);
  const now = new Date().getTime();

  useEffect(() => {
    let interval;
    if (eventTime.getTime() < now) setHasExpired(true);
    if (eventTime.getTime() >= now) {
      const setTimeLeft = () => {
        const eventTime = new Date(2022, 0, 26, 20);
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
        if (seconds == "60") minutes = minuteRef.current.innerText;
        if (timeDetails["seconds"] == "60") timeDetails["seconds"] = "00";

        if (dayRef) {
          dayRef.current.innerText = timeDetails.days;
          hourRef.current.innerText = timeDetails.hours;
          minuteRef.current.innerText = timeDetails.minutes;
          secondRef.current.innerText = timeDetails.seconds;
        }
        return timeDetails;
      };
      interval = setInterval(() => {
        setTimeLeft();
      }, 1000);
    }
    if (hasExpired) {
      clearInterval(interval);
    }
  }, [hasExpired]);

  return (
    <div className={styles["container"]}>
      <p className="mb-3 green-gradient-text text-xl font-extrabold">
        Mint your NFT Ticket
      </p>
      <p className="">Minting will be available in:</p>
      <div className="grid grid-cols-4 gap-x-5 mt-6">
        <div ref={dayRef} className={`text-2xl ${styles["time-item"]}`}>
          00
        </div>
        <div ref={hourRef} className={`text-2xl ${styles["time-item"]}`}>
          00
        </div>
        <div ref={minuteRef} className={`text-2xl ${styles["time-item"]}`}>
          00
        </div>
        <div ref={secondRef} className={`text-2xl ${styles["time-item"]}`}>
          00
        </div>
      </div>
    </div>
  );
}

export { MintCountdown };
