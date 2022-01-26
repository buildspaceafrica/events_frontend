import React, { useEffect, useRef, useState } from "react";
import { RadioBox, Button, Input } from "../../components";

import styles from "./minting-modal.module.css";
import OTP from "./OTP";

function MintingModal({ isActive, setIsActive }) {
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
        containerRef.current.style.display = "none";
      }, 400);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive, setIsActive]);

  return (
    <div ref={containerRef} className={containerClass} onClick={closeModal}>
      <div
        className={`${styles["modal-body"]} p-10`}
        onClick={(e) => e.stopPropagation()}
      >
        <OTP />
        {/* <p>You sef know say Chidi Sabi the work sha! 🔥😉</p> */}
      </div>
    </div>
  );
}

export { MintingModal };
