import { useState, useEffect } from "react";
import styles from "./mint-countdown.module.css";

function MintCountdown(props) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const getTimeLeft = () => {
      const eventTime = new Date(2022, 0, 26, 18);
      const now = new Date().getTime();
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
      if (seconds == "60") minutes = timeLeft.minutes;
      if (timeDetails["seconds"] == "60") timeDetails["seconds"] = "00";

      return timeDetails;
    };
    setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
  }, [timeLeft]);

  return (
    <div className={styles["container"]}>
      <p className="mb-3 green-gradient-text text-xl font-extrabold">
        Mint your NFT Ticket
      </p>
      <p className="">Minting will be available in:</p>
      <div className="grid grid-cols-4 mt-6">
        <div className={styles["time-item"]}>{timeLeft.days}</div>
        <div className={styles["time-item"]}>{timeLeft.hours}</div>
        <div className={styles["time-item"]}>{timeLeft.minutes}</div>
        <div className={styles["time-item"]}>{timeLeft.seconds}</div>
      </div>
    </div>
  );
}

export { MintCountdown };
