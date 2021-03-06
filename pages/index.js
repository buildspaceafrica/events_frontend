import Head from "next/head";
import { toast } from "react-toastify";
import { useState } from "react";
import { Calendar, Clock } from "../assets/images/svgs";
import { Header, MintingModal, Button, Video, Countdown } from "../components";
import { useAppContext } from "../contexts/appContext";
import styles from "./index-page.module.scss";

function IndexPage() {
  const { isConnected } = useAppContext();
  const [isDisplayingModal, setIsDisplayingModal] = useState(false);

  async function displayUnconnectedMessage() {
    toast.error("Please Connect your Wallet first");
  }

  return (
    <>
      <Head>
        <link rel="icon" href="./favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Welcome to the official launch of the first community event by Buildspace Africa. We are an extension of the buildspace community that aims to help africans to explore Web3 and the Blockchain, create amazing solutions and improve Web3 Adoption on the Continent."
        />
        <meta
          name="keywords"
          content="Buildspace Africa, Buildspace, Let's Talk Web3, Web3, Blockchain, Chidiebere Ekennia, Joshua Nwankwo"
        ></meta>
        <title>BuildSpace Africa | Home</title>
      </Head>
      <div className={styles.event__con}>
        <MintingModal
          isActive={isDisplayingModal}
          setIsActive={setIsDisplayingModal}
        />
        <div className={styles.event__inner__con}>
          <Header />
          <div
            className={`${styles.container} container py-8 lg:pt-5 grid grid-cols-2 lg:gap-x-10`}
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
                  onClick={() => {
                    if (isConnected) setIsDisplayingModal(true);
                    if (!isConnected) displayUnconnectedMessage();
                  }}
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
              <div
                className={`flex-wrap md:flex-nowrap gap-y-4 md:gap-y-0  order-2 md:order-3 ${styles.clock__bottom}`}
              >
                <div className={styles.clock__bottom__left}>
                  <span>
                    <Calendar className="mr-2" />
                    29th January, 2022
                  </span>
                  <span className="mt-5">
                    <Clock className="mr-2" />
                    10:30AM (WAT)
                  </span>
                </div>
                <div className="text-white">
                  <span className="block pr-2">
                    For enquiries or complaints, send an email to
                  </span>
                  <a href="mailto:supports@buildspace.africa">
                    <span className="orange-gradient-text">
                    supports@buildspace.africa
                    </span>
                  </a>
                </div>
                {/* <AddToCalender /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
