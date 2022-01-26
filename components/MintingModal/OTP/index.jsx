import React, { useState } from "react";
import styles from "./otp.module.scss";
import OtpInput from "react-otp-input";
import { Button } from "../..";
import { Verified } from "../../../assets/images/svgs";

function OTP() {
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (value) => {
    setOtp(value);
  };
  return (
    <div className={styles.opt__con}>
      <h1>Verify your Email</h1>
      <h5>A one-time-password has been sent to your email. </h5>

      <h6>Enter OTP</h6>
      <div className={styles.inner__otp__con}>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          separator={<span style={{ width: "8px" }}></span>}
          isInputNum={true}
          shouldAutoFocus={true}
          containerStyle={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
            width: "70%",
          }}
          inputStyle={{
            border: "1px solid rgba(184, 186, 191, 0.2);",
            width: "54px",
            height: "54px",
            background: "rgba(184, 186, 191, 0.04)",
            fontSize: "30px",
            color: "#fff",
            fontWeight: "500",
            caretColor: "white",
          }}
          focusStyle={{
            border: "1px solid #CFD3DB",
            outline: "none",
          }}
        />
        <span
          className={
            isVerified ? styles.verification__con : styles.notverified__con
          }
        >
          <Verified /> <h6>Verified</h6>
        </span>
      </div>
      <div className={styles.otp__button__con}>
        <Button text="Cancel" />
        <Button
          type="primary"
          text="Mint NFT"
          onClick={() => setIsDisplayingModal(true)}
        />
      </div>
    </div>
  );
}

export default OTP;
