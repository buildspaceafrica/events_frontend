import React, { useState } from "react";
import { Header, MintingModal, RadioBox } from "../../components";

function Components(props) {
  const [isDisplayingModal, setIsDisplayingModal] = useState(false);
  return (
    <>
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