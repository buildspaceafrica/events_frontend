import { useState } from "react";
import { video } from "../../assets/images/pngs";
import { PlayButton } from "../../assets/images/svgs";
import styles from "./video.module.scss";

function Video() {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <div className={styles.video__con}>
      {!hasLoaded && (
        <div className={styles["loader-body"]}>
          <div className={styles["loader"]}></div>
        </div>
      )}

      <iframe
        src="https://www.youtube.com/embed/my-DR6xY_TA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => setHasLoaded(true)}
      ></iframe>
    </div>
  );
}

export { Video };
