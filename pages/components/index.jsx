import React, { useState } from "react";
import Button from "../../components/Button";
import { Header, MintingModal, RadioBox } from "../../components";
import Input from "../../components/Input";

function Components(props) {
  const [isDisplayingModal, setIsDisplayingModal] = useState(false);
  return (
    <>
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
        </section>
      </main>
    </>
  );
}

export default Components;
