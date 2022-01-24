import { useState } from "react";
import { Add, Calendar, Clock } from "../assets/images/svgs";
import { Header, MintingModal, Button, Video, Countdown } from "../components";
import styles from "./index-page.module.scss";

function IndexPage() {
  const [isDisplayingModal, setIsDisplayingModal] = useState(false);

  return (
    <div className={styles.event__con}>
      <MintingModal
        isActive={isDisplayingModal}
        setIsActive={setIsDisplayingModal}
      />
      <div className={styles.event__inner__con}>
        <Header />
        <div
          className={`${styles.container} container md:flex flex py-8 lg:pt-5`}
        >
          <div className={`lg:mt-10 ${styles.left__con}`}>
            <h5 className="hidden md:block">Welcome to a new era!</h5>
            <h1>
              Buildspace <span>Africa</span> Conference 2022 is coming!
            </h1>
            <h6 className="pt-5">
              Secure your position for a spot at the physical event by minting
              an NFT ticket that would be required to attend the event.
            </h6>
            <div className="py-12 flex justify-center lg:justify-start">
              <Button
                type="primary"
                text="Mint NFT"
                icon={true}
                onClick={() => setIsDisplayingModal(true)}
              />
            </div>
          </div>
          <div className={`${styles.right__con} flex flex-col`}>
            <div className="my-10 lg:my-0 order-3 md:order-1">
              <Video />
            </div>
            <div className={`order-1 `}>
              <Countdown />
            </div>
            <div className={`order-2 md:order-3 ${styles.clock__bottom}`}>
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

export default IndexPage;
