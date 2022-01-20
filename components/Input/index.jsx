import React from "react";
import styles from "./input.module.scss";

function Input({ label, placeholder, msg, value, onchange }) {
  return (
    <div className={styles.input__con}>
      <label htmlFor="email">{label}</label>
      {msg && <span>{msg}</span>}
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default Input;
