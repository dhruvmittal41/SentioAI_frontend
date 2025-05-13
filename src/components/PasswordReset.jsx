import "./index.css";
import { Box } from "@mui/material";
import MyButton from "./forms/MyButton";
import { useForm } from "react-hook-form";
import AxiosInstance from "./AxiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import Message from "./Message";
import { useState } from "react";
import PasswordField from "./forms/PasswordField";

const PasswordReset = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const { token } = useParams();
  console.log(token);

  const [ShowMessage, setShowMessage] = useState(false);

  const submission = (data) => {
    AxiosInstance.post(`api/password_reset/confirm/`, {
      password: data.password,
      token: token,
    }).then((response) => {
      setShowMessage(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    });
  };

  return (
    <>
      {ShowMessage ? (
        <Message
          text={"Your password reset was succesfull"}
          text2={"You will be redirected to the login page in a second..."}
        />
      ) : (
        <div className="bg-gradient-to-b from-night via-night2 to-night3 w-screen h-screen flex justify-center items-center px-4">
          <form
            onSubmit={handleSubmit(submission)}
            className="w-full max-w-md sm:max-w-lg"
          >
            <Box className="bg-white p-6 sm:p-8 rounded-[5vw] sm:rounded-[2.5vw] flex flex-col gap-6 sm:gap-10">
              <Box className="flex justify-center items-center w-full">
                <h1 className="font-dancing text-center text-3xl sm:text-[40px] text-yellow-600">
                  Reset Your Password
                </h1>
              </Box>

              <Box className="flex justify-center items-center w-full">
                <PasswordField
                  label="Password"
                  name="password"
                  control={control}
                />
              </Box>

              <Box className="flex justify-center items-center w-full">
                <PasswordField
                  label="Confirm Password"
                  name="password2"
                  control={control}
                />
              </Box>

              <Box className="flex justify-center items-center w-full">
                <MyButton label="Reset Password" type="submit" />
              </Box>
            </Box>
          </form>
        </div>
      )}
    </>
  );
};

export default PasswordReset;
