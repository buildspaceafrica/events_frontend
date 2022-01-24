import Image from "next/image";
import React from "react";
import { logoImage } from "../../assets/images/pngs";
import styles from "./logo.module.scss";

function Logo(props) {
  return (
    <div className={`${styles["container"]}`}>
      <div className="flex items-center">
        <div className="pr-3">
          <img width={34} height={34} src={logoImage.src} alt="" />
        </div>
        <div>
          <span
            className={`${styles.logo__text} font-semibold secondary-text text-white text-xl`}
          >
            buildspace
          </span>
        </div>
      </div>
    </div>
  );
}

export { Logo };
