import Image from "next/image";
import React from "react";
import styles from "./button.module.scss";
import { TicketIcon } from "../../assets/images/svgs";

function Button({ text, onClick, icon, type }) {
  if (type === "primary") {
    return (
      <button
        className={styles.button__con}
        onClick={() => {
          onClick();
        }}
      >
        <span>{text}</span>
        {icon && <TicketIcon />}
      </button>
    );
  } else {
    return (
      <button
        className={styles.sec__button__con}
        onClick={() => {
          onClick();
        }}
      >
        <span>{text}</span>
      </button>
    );
  }
}

export { Button };
