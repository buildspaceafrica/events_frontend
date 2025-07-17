import React, { useEffect, useRef, useState } from "react";
import { CloseButton } from "../CloseButton";
import styles from "./error-modal.module.scss";

function ErrorModal({ isActive, setIsActive, title, message, type = "error" }) {
  const containerRef = useRef();
  const [containerClass, setContainerClass] = useState(
    `${styles["container"]}`
  );

  const closeModal = () => {
    setIsActive(false);
  };

  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
    if (isActive) {
      containerRef.current.style.display = "flex";
      setTimeout(() => {
        setContainerClass((value) => (value += ` ${styles["active"]}`));
      }, 50);
    }
    if (!isActive) {
      document.body.style.overflow = "auto";
      setContainerClass(`${styles["container"]}`);
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
      }, 400);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive, setIsActive]);

  return (
    <div ref={containerRef} className={containerClass} onClick={closeModal}>
      <div
        className={`${styles["modal-body"]} ${styles[type]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`flex justify-between items-start ${styles["modal-top"]}`}>
          <div className={styles["icon-container"]}>
            {type === "error" && (
              <svg className={styles["error-icon"]} width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            )}
            {type === "warning" && (
              <svg className={styles["warning-icon"]} width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="17" r="1" fill="currentColor"/>
              </svg>
            )}
          </div>
          <CloseButton onClick={closeModal} />
        </div>
        
        <div className={styles["modal-content"]}>
          <h2 className={styles["modal-title"]}>{title}</h2>
          <p className={styles["modal-message"]}>{message}</p>
          
          <div className={styles["modal-actions"]}>
            <button
              className={styles["primary-button"]}
              onClick={closeModal}
            >
              Got it
            </button>
            <button
              className={styles["secondary-button"]}
              onClick={() => window.open('https://discord.gg/buildspace', '_blank')}
            >
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ErrorModal };