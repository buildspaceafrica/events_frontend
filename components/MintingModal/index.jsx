import React, { useEffect, useRef, useState } from "react";
import { RadioBox, Button, Input } from "../../components";
import Congrats from "./Congrats";

import styles from "./minting-modal.module.css";
import UserInfo from "./UserInfo";
import OTP from "./OTP";
import { MintCountdown } from "./MintCountdown";
import { Wizard } from "../Wizard";
import { useMintingContext } from "../../contexts/mintingContext";

function MintingModal({ isActive, setIsActive }) {
  const { screen } = useMintingContext();
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
        className={`${styles["modal-body"]} px-8 md:px-10 pb-8 pt-2`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <Congrats /> */}
        <MintCountdown />
        {/* <UserInfo onClose={closeModal} /> */}
        {/* <OTP /> */}
        {/* <p>You sef know say Chidi Sabi the work sha! 🔥😉</p> */}
      </div>
    </div>
  );
}

export { MintingModal };
