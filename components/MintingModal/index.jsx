import React, { useEffect, useRef, useState } from "react";
import { RadioBox, Button, Input } from "../../components";

import styles from "./minting-modal.module.css";

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
        <p className="mb-3 green-gradient-text text-xl font-extrabold">
          Mint your NFT Ticket
        </p>
        <br className="my-5" />

        <Input label="Enter emaill address" placeholder="name@domain.com" />
        <br className="my-5" />

        <Input
          label="Enter your Full Name"
          placeholder="name"
          msg="You will recieve your NFT through this email"
        />
        <br className="my-5" />

        <p>Will you attend the event physically?</p>
        <div className="my-2">
          <RadioBox name="attending" options={["Yes", "No"]} />
        </div>
        <br className="my-5" />
        <div className="flex justify-end">
          <Button text="Cancel" icon={true} onClick={() => closeModal()} />

          <Button
            type="primary"
            text="Continue"
            onClick={() => setIsDisplayingModal(true)}
          />
        </div>
        {/* <p>You sef know say Chidi Sabi the work sha! 🔥😉</p> */}
      </div>
    </div>
  );
}

export { MintingModal };
