import { toast } from "react-toastify";
import { Button } from "../index";
import styles from "./connect-button.module.css";
import { useAppContext } from "../../contexts/appContext";
import { LockIcon } from "../../assets/images/svgs";
function ConnectButton() {
  const loading = false;
  const { handleWalletConnect, hasMetaMask } = useAppContext();

  async function connect() {
    const connectionStatus = await handleWalletConnect();
    if (!connectionStatus) return;
  }

  async function displayMessage() {
    toast.error("Please Install Meta Mask on your PC");
  }

  return (
    <div className={styles["container"]}>
      <button
        onClick={hasMetaMask ? connect : displayMessage}
        disabled={loading}
        className={`${styles["connect-btn"]} `}
      >
        <span className="hidden md:block pr-3 text-xl">Connect Wallet</span>
        <span className="pr-2 md:hidden text-xl">Connect</span>
        <LockIcon />
      </button>
    </div>
  );
}

export { ConnectButton };
