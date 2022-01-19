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

  return (
    <div className={styles["container"]}>
      {!hasMetaMask && (
        <div className="">
          <a
            rel="noreferrer"
            referrerPolicy="no-referrer"
            target="_blank"
            href="https://metamask.io/download"
          >
            <Button buttonText="Get Meta mask" />
          </a>
        </div>
      )}
      {hasMetaMask && (
        <button
          onClick={connect}
          disabled={loading}
          className={`${styles["connect-btn"]} `}
        >
          <span className="d-none d-md-block pr-3 text-xl">Connect Wallet</span>
          <LockIcon />
        </button>
      )}
    </div>
  );
}

export { ConnectButton };
