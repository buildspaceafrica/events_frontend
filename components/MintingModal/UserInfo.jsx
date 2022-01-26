import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { toast } from "react-toastify";
import { Input, RadioBox, Button } from "../../components";
import { useMintingContext } from "../../contexts/mintingContext";
import { RegisterUser } from "../../services/mintService";

function UserInfo({ onClose, onContinue }) {
  const { setUserDetails } = useMintingContext();
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Please enter a correct email")
      .required("Email is required"),
    attending: Yup.string().required(),
  });

  const initialValues = {
    name: "",
    email: "",
    attending: "",
    Yes: "",
    No: "",
  };

  const handleSubmit = async (values) => {
    values = { name: values.name, email: values.email };
    setUserDetails(values);
    await RegisterUser(values);
    toast.success("User was registered successfully");
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
      />
      <br className="my-5" />

      <Input
        name="name"
        formik={formik}
        label="Enter your Full Name"
        placeholder="name"
        msg="You will recieve your NFT through this email"
      />
      <br className="my-5" />

      <p>Will you attend the event physically?</p>
      <div className="my-2">
        <RadioBox formik={formik} name="attending" options={["Yes", "No"]} />
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
          disabled={!formik.isValid || !formik.dirty}
          type="primary"
          text="Continue"
          onClick={onContinue && onContinue}
        />
      </div>
    </form>
  );
}

export default UserInfo;
