import Image from "next/image";
import { video } from "../../assets/images/pngs";
import { PlayButton } from "../../assets/images/svgs";
import styles from "./video.module.scss";

function Video() {
  return (
    <div className={styles.video__con}>
      {/* <Image
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
      /> */}
      {/* <iframe
        width="548"
        height="536"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe> */}
      <iframe
        // width="790"
        // height="444"
        src="https://www.youtube.com/embed/my-DR6xY_TA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <span className={styles.video__action}>
        <PlayButton />
        <h2>Play Promotional Video</h2>
      </span>
    </div>
  );
}

export { Video };
