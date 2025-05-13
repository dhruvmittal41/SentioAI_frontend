import "./index.css";
import { Box } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import MyButton from "./forms/MyButton";
import { useForm } from "react-hook-form";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router-dom";
import Message from "./Message";
import { useState } from "react";

const PasswordResetRequest = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();

  const [ShowMessage, setShowMessage] = useState(false);

  const submission = (data) => {
    AxiosInstance.post(`api/password_reset/`, {
      email: data.email,
    }).then((response) => {
      setShowMessage(true);
    });
  };

  return (
    <>
      {ShowMessage ? (
        <Message
          text={"Thank You!"}
          text2={"Your request has been submitted succesfully"}
          text3={"Check your email for instructions to reset your password"}
        />
      ) : (
        <div className="bg-gradient-to-b from-night via-night2 to-night3 w-screen h-screen flex justify-center items-center px-4">
          <form
            onSubmit={handleSubmit(submission)}
            className="w-50 max-w-md sm:max-w-lg"
          >
            <Box className="bg-white p-6 sm:p-8 rounded-[5vw] sm:rounded-[2.5vw] flex flex-col gap-6 sm:gap-10">
              <Box className="flex justify-center items-center w-full">
                <h1 className="font-dancing text-center text-3xl sm:text-[40px] text-yellow-600">
                  Request Password Reset
                </h1>
              </Box>

              <Box className="flex justify-center items-center w-full">
                <MyTextField label="Email" name="email" control={control} />
              </Box>

              <Box className="flex justify-center items-center w-full">
                <MyButton label="Request Reset" type="submit" />
              </Box>
            </Box>
          </form>
        </div>
      )}
    </>
  );
};

export default PasswordResetRequest;
