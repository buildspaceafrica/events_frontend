import React from "react";
import styles from "./time.module.scss";

function Time({ number, type }) {
  return (
    <div className={styles.time__con}>
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

export default Time;
