import Head from "next/head";
import React, { useState } from "react";
import Button from "../../components/Button";
import { Header, MintingModal, RadioBox } from "../../components";
import Input from "../../components/Input";
import Time from "../../components/Time";

function Components(props) {
  const [isDisplayingModal, setIsDisplayingModal] = useState(false);
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
          content="Buildspace Africa, Buildspace, Web3, Blockchain, Chidiebere Ekennia, Joshua Nwankwo"
        ></meta>
        <title>BuildSpace Africa | Components</title>
      </Head>
      <Header />
      <main className="bg-primaryBg py-5">
        <section className="container">
          <div className="py-4 text-white ">Hi Components Page</div>
          <button
            className="border-2 rounded p-3 hover:bg-orange-200 bg-white"
            onClick={() => setIsDisplayingModal(true)}
          >
            Click to open modal
          </button>
          <MintingModal
            isActive={isDisplayingModal}
            setIsActive={setIsDisplayingModal}
          />
          <p className="my-4 text-white">Button</p>
          <Button
            type="primary"
            text="Mint NFT"
            icon={true}
            onClick={() => setIsDisplayingModal(true)}
          />
          <br className="my-5" />
          <Button
            type="primary"
            text="Continue"
            onClick={() => setIsDisplayingModal(true)}
          />
          <br className="my-5" />

          <Button
            text="Cancle"
            icon={true}
            onClick={() => setIsDisplayingModal(true)}
          />
          <p className="my-4 text-white">Radio Box</p>
          <RadioBox name="attending" options={["Yes", "No"]} />
          <p className="my-4 text-white">Input</p>
          <Input
            label="Enter your Full Name"
            placeholder="name"
            msg="You will recieve your NFT through this email"
          />
          <br className="my-5" />
          <Input label="Enter emaill address" placeholder="name@domain.com" />
          <br className="my-5" />
          <p className="my-4 text-white ">Time</p>
          <div
            className="flex"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Time type="day" number="05" />
            <Time type="hour" number="04" />
            <Time type="minute" number="23" />
            <Time number="52" />
          </div>
        </section>
      </main>
    </>
  );
}

export default Components;
