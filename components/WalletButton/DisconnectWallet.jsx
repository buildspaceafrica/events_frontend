import { useState } from "react";
import styles from "./wallet-button.module.css";
import { useAppContext } from "../../contexts/appContext";
// import { DownArrow } from "../../assets/images";
import { shortText } from "../../utils/toolKit";

function DisconnectWalletButton() {
  const { address, handleWalletDisconnect } = useAppContext();

  const shortAddress = shortText(address);

  const [arrowIsDown, setArrowIsDown] = useState(true);
  let containerClasses = `${styles["container"]} `;
  if (!arrowIsDown) containerClasses += `${styles["active"]}`;

  const handleDisconnect = () => {
    handleWalletDisconnect();
  };

  return (
    <div
      onClick={() => setArrowIsDown(!arrowIsDown)}
      className={`${containerClasses}`}
    >
      <div className={`${styles["wallet-address-box"]} `}>
        <span className={`${styles["address"]} mr-3`}>{shortAddress}</span>
        {/* <DownArrow className={`${styles["arrow-down-icon"]}`} /> */}
      </div>
      <button
        onClick={handleDisconnect}
        className={`${styles["disconnect-btn"]}`}
      >
        <span>Disconnect</span>
      </button>
    </div>
  );
}

export { DisconnectWalletButton };
