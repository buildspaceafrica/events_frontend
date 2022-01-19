import React from "react";
import { Logo, WalletButton } from "../../components";
import styles from "./header.module.css";

function Header(props) {
  return (
    <div className={`${styles["container"]} `}>
      <div className="container py-6 flex items-center justify-between">
        <Logo />
        <WalletButton />
      </div>
    </div>
  );
}

export { Header };
