import Image from "next/image";
import React from "react";
import { logoImage } from "../../assets/images/pngs";

function Logo(props) {
  return (
    <div className="">
      <div className="flex items-center">
        <div className="pr-3">
          <Image width={34} height={34} src={logoImage} alt="" />
        </div>
        <div>
          <span className="secondary-text text-white text-xl">buildspace</span>
        </div>
      </div>
    </div>
  );
}

export { Logo };