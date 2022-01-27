import Image from "next/image";
import { video } from "../../assets/images/pngs";
import { PlayButton } from "../../assets/images/svgs";
import styles from "./video.module.scss";

function Video() {
  return (
    <div className={styles.video__con}>
      <iframe
        src="https://www.youtube.com/embed/my-DR6xY_TA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export { Video };
