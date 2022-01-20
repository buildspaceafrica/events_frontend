import Head from "next/head";
import React, { useState } from "react";
import { Header, MintingModal, RadioBox } from "../../components";

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
      <main>
        <section className="container">
          <div className="py-4">Hi Components Page</div>
          <button
            className="border-2 rounded p-3 hover:bg-orange-200"
            onClick={() => setIsDisplayingModal(true)}
          >
            Click to open modal
          </button>
          <MintingModal
            isActive={isDisplayingModal}
            setIsActive={setIsDisplayingModal}
          />
          <p className="my-4">Radio Box</p>
          <RadioBox name="attending" options={["Yes", "No"]} />
        </section>
      </main>
    </>
  );
}

export default Components;
