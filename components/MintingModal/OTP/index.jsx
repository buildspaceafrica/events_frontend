import { toast } from "react-toastify";
import React, { useCallback, useState, useEffect } from "react";
import styles from "./otp.module.scss";
import OtpInput from "react-otp-input";
import { Button } from "../..";
import { VerifiedIcon } from "../../../assets/images/svgs";
import { MintTicket } from "../../../services/mintService";
import { useMintingContext } from "../../../contexts/mintingContext";
import { useAppContext } from "../../../contexts/appContext";

function OTP({ onClose }) {
  const { address } = useAppContext();
  const { setScreen, setUserDetails, userDetails } = useMintingContext();
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = useCallback(async () => {
    try {
      setIsLoading(true);
      const body = { address, email: userDetails.email, otp };
      await MintTicket(body);
      setIsLoading(false);
      toast.success("Congrats, Your NFT has been minted. Check your email! 🥳");
      setIsVerified(true);
      setScreen("3");
      console.log(otp);
    } catch (error) {}
  }, [address, otp, setScreen, userDetails.email]);

  useEffect(() => {
    if (otp.length === 4) verifyOTP(otp);
  }, [otp, verifyOTP]);
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
            border: "1px solid rgba(184, 186, 191, 0.2)",
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
          <VerifiedIcon /> <h6>{isVerified ? "Verified" : "Unverified"} </h6>
        </span>
      </div>
      {/* <h3 className={styles.otp__timer}>4mins 2secs remaining</h3> */}
      <div className={styles.otp__button__con}>
        <Button onClick={onClose} text="Cancel" />
        <Button
          disabled={!isVerified || isLoading}
          loading={isLoading}
          type="primary"
          text="Mint NFT"
          onClick={() => setIsDisplayingModal(true)}
        />
      </div>
    </div>
  );
}

export default OTP;
