import React from "react";
import { CloseIcon } from "../../assets/images/svgs";
import styles from "./close-button.module.css";

function CloseButton({ onClick }) {
  return (
    <button className={`${styles["close-btn"]} pt-8 pb-3`} onClick={onClick}>
      <CloseIcon />
    </button>
  );
}

export { CloseButton }