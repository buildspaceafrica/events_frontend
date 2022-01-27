import React, { useEffect, useRef, useState } from "react";
import { CloseButton, Wizard, ConfettiShower } from "../../components";
import Congrats from "./Congrats";

import styles from "./minting-modal.module.css";
import UserInfo from "./UserInfo";
import OTP from "./OTP";
import { MintCountdown } from "./MintCountdown";
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
      {screen === "3" && isActive && <ConfettiShower />}
      <div
        className={`${styles["modal-body"]} `}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex justify-between items-center px-8 md:px-10 ${styles["modal-top"]}`}
        >
          <CloseButton onClick={closeModal} />
          <div className={`${styles["wizard"]} pt-5`}>
            <Wizard allSteps={["1", "2", "3"]} currentStep={screen} />
          </div>
        </div>
        <div className={`${styles["screen-container"]} pb-8 pt-2`}>
          <div className={`${styles["screen-slide"]} ${styles[`s${screen}`]}`}>
            {/* <MintCountdown /> */}
            {screen === "1" && (
              <div className="px-8  md:px-10">
                <UserInfo onClose={closeModal} />
              </div>
            )}
            {screen === "2" && (
              <div className="px-8  md:px-10">
                <OTP />
              </div>
            )}
            {screen === "3" && (
              <div className="px-8  md:px-10">
                <Congrats onClose={closeModal} />
              </div>
            )}

            {/* <p>You sef know say Chidi Sabi the work sha! 🔥😉</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MintingModal };
