import React from "react";
import styles from "./input.module.scss";

function Input({ type, onClick, label, className, id, name, formik, ...rest }) {
  const error = formik?.touched[name] && formik?.errors?.[name];
  let classes = `${styles.input__con} ${className} `;
  if (error) classes += styles["error"];
  let placeholder = rest?.placeholder;
  let msg = rest?.msg
  delete rest.msg
  if (formik) {
    Object.assign(rest, {
      onChange: formik?.handleChange,
      onBlur: formik?.handleBlur,
      value: formik?.values[name],
    });
  }

  return (
    <div className={classes}>
      {label && (
        <label className="" htmlFor={name}>
          {label}
        </label>
      )}
      {msg && <span className={styles["msg"]}>{msg}</span>}
      <input
        id={id ?? name}
        name={name ?? id}
        type={type}
        onClick={onClick}
        {...rest}
        placeholder={placeholder}
      />
      {error && <span className={`${styles["error-message"]}`}>{error}</span>}
    </div>
  );
}

export { Input };
