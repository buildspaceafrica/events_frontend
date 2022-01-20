import React, { useState } from "react";
import { CheckboxIcon } from "../../assets/images/svgs";
import styles from "./radio-box.module.css";

function RadioBox({ formik, options, name }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleInput = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      {options.map((item) => (
        <div key={item} className={`${styles["container"]} flex items-center`}>
          <button
            className={` mr-2 ${selectedItem === item && styles["true"]}`}
            onClick={() => toggleInput(item)}
          >
            <CheckboxIcon className={`${styles["checkbox"]}`} />
          </button>
          <label htmlFor={item}>
            <input
              type="radio"
              id={item}
              name={name}
              value={item}
              onClick={() => toggleInput(item)}
            />
            <span>{item}</span>
          </label>
        </div>
      ))}
    </>
  );
}

export { RadioBox };
