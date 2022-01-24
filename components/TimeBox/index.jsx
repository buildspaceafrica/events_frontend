import React from "react";
import styles from "./time-box.module.scss";

function TimeBox({ number, type }) {
  return (
    <div className={`md:py-4 ${styles.time__con}`}>
      <h1>{number}</h1>
      <h5>
        {type === "day"
          ? "Days"
          : type === "hour"
          ? "Hours"
          : type === "minute"
          ? "Minutes"
          : "Seconds"}
      </h5>
      <span
        className={`${
          type === "day"
            ? styles.day
            : type === "hour"
            ? styles.hour
            : type === "minute"
            ? styles.minute
            : styles.second
        } mr-3`}
      ></span>
    </div>
  );
}

export { TimeBox };
