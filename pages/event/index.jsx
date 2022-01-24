import react, { useState, useEffect } from "react";
import { Add, Calendar, Clock } from "../../assets/images/svgs";
import { Header, MintingModal } from "../../components";
import Button from "../../components/Button";
import Time from "../../components/Time";
import Video from "../../components/video";
import styles from "./event.module.scss";

function Event() {
  const eventTime = new Date(2022, 0, 29);
  const getTimeLeft = () => {
    const now = new Date().getTime();
    let difference = Math.abs(eventTime - now) / 1000;

    const days = Math.floor(difference / 86400);
    difference -= days * 86400;

    const hours = Math.floor(difference / 3600) % 24;
    difference -= hours * 3600;

    const minutes = Math.floor(difference / 60) % 60;
    difference -= minutes * 60;

    const seconds = Math.round(difference % 60);
    return { days, hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  useEffect(() => {
    setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
  });
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
            <h6 className="py-5">
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
          <div className={`${styles.right__con} flex flex-col py-10`}>
            <div className="order-3 md:order-1">
              <Video />
            </div>
            <div className={`order-2 flex gap-x-8 pt-10 pb-4 lg:pb-10`}>
              <Time type="day" number={timeLeft.days} />
              <Time type="hour" number={timeLeft.hours} />
              <Time type="minute" number={timeLeft.minutes} />
              <Time number={timeLeft.seconds} />
            </div>
            <div className={`order-1 md:order-3 ${styles.clock__bottom}`}>
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
