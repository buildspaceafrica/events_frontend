import react, { useState } from "react";
import { Add, Calendar, Clock } from "../../assets/images/svgs";
import { Header, MintingModal } from "../../components";
import Button from "../../components/Button";
import Time from "../../components/Time";
import Video from "../../components/video";
import styles from "./event.module.scss";

function Event() {
  const [isDisplayingModal, setIsDisplayingModal] = useState(false);

  return (
    <div className={styles.event__con}>
      <MintingModal
        isActive={isDisplayingModal}
        setIsActive={setIsDisplayingModal}
      />
      <div className={styles.event__inner__con}>
        <Header />
        <div className={`${styles.container} container md:flex flex`}>
          <div className={styles.left__con}>
            <h5>Welcome to a new era!</h5>
            <h1>
              Buildspace <span>Africa</span> Conference 2022 is coming!
            </h1>
            <h6>
              Secure your position for a spot at the physical event by minting
              an NFT ticket that would be required to attend the event.
            </h6>
            <Button
              type="primary"
              text="Mint NFT"
              icon={true}
              onClick={() => setIsDisplayingModal(true)}
            />
          </div>
          <div className={styles.right__con}>
            <Video />
            <div className={styles.clock__con}>
              <Time type="day" number="05" />
              <Time type="hour" number="04" />
              <Time type="minute" number="23" />
              <Time number="52" />
            </div>
            <div className={styles.clock__bottom}>
              <div className={styles.clock__bottom__left}>
                <span>
                  <Calendar className="mr-2" />
                  29th January, 2022
                </span>
                <span className="mt-5">
                  <Clock className="mr-2" />
                  10:00AM (WAT)
                </span>
              </div>
              <div className={styles.clock__bottom__right}>
                <Add className="mr-2" />
                <h1>Add to Calender</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
