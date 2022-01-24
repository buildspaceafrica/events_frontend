import Image from "next/image";
import { video } from "../../assets/images/pngs";
import { PlayButton } from "../../assets/images/svgs";
import styles from "./video.module.scss";

function Video() {
  return (
    <div className={styles.video__con}>
      <Image
        objectFit="cover"
        src={video}
        height={536}
        width={448}
        quality={100}
        alt=""
      />
      <span className={styles.video__action}>
        <PlayButton />
        <h2>Play Promotional Video</h2>
      </span>
    </div>
  );
}

export { Video };
