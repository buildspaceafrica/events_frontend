import Image from "next/image";
import { video } from "../../assets/images/pngs";
import { PlayButton } from "../../assets/images/svgs";
import styles from "./video.module.scss";

function Video() {
  return (
    <div className={styles.video__con}>
      <Image
        objectFit="cover"
        src={
          "https://res.cloudinary.com/davien21/image/upload/v1643058179/video_gzz0xp.png"
        }
        height={536}
        width={448}
        quality={100}
        alt=""
        placeholder="blur"
        blurDataURL="https://res.cloudinary.com/davien21/image/upload/c_scale,e_blur:100,q_54,w_379/v1643058179/video_gzz0xp.png"
      />
      <span className={styles.video__action}>
        <PlayButton />
        <h2>Play Promotional Video</h2>
      </span>
    </div>
  );
}

export { Video };
