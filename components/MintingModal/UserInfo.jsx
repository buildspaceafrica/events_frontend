import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import { Input, RadioBox, Button } from "../../components";
import { useMintingContext } from "../../contexts/mintingContext";
import { RegisterUser } from "../../services/mintService";

function UserInfo({ onClose, onContinue }) {
  const { setScreen, setUserDetails } = useMintingContext();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Please enter a correct email")
      .required("Email is required"),
    isAvailable: Yup.string().required(),
  });

  const initialValues = {
    name: "",
    email: "",
    isAvailable: "",
    Yes: "",
    No: "",
  };

  const handleSubmit = async (values) => {
    const isAvailable = values.isAvailable === "Yes" ? true : false;
    values = { name: values.name, email: values.email, isAvailable };
    setIsLoading(true);
    setUserDetails(values);
    await RegisterUser(values);
    setIsLoading(false);
    toast.success("User was registered successfully");
    setScreen("2");
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p className="mb-3 green-gradient-text text-xl font-extrabold">
        Mint your NFT Ticket
      </p>
      <br className="my-5" />

      <Input
        name="email"
        formik={formik}
        label="Enter emaill address"
        placeholder="name@domain.com"
        msg="You will recieve your NFT through this email"
      />
      <br className="my-5" />

      <Input
        name="name"
        formik={formik}
        label="Enter your Full Name"
        placeholder="name"
      />
      <br className="my-5" />

      <p>Will you attend the event physically?</p>
      <div className="my-2">
        <RadioBox formik={formik} name="isAvailable" options={["Yes", "No"]} />
      </div>
      <br className="my-5" />
      <div className="flex justify-end">
        <Button
          text="Cancel"
          icon={true}
          onClick={(e) => {
            onClose();
            e.preventDefault();
          }}
        />

        <Button
          loading={isLoading}
          disabled={!formik.isValid || !formik.dirty || isLoading}
          type="primary"
          text="Continue"
          onClick={onContinue && onContinue}
        />
      </div>
    </form>
  );
}

export default UserInfo;
