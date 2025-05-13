import "./index.css";
import { Box } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import PasswordField from "./forms/PasswordField";
import MyButton from "./forms/MyButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router-dom";
import Message from "./Message.jsx";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const [ShowMessage, setShowMessage] = useState(false);

  const submission = (data) => {
    AxiosInstance.post(`login/`, {
      email: data.email,
      password: data.password,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("Token", response.data.token);
        navigate(`/home`);
      })
      .catch((error) => {
        setShowMessage(true);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
        console.error("Error during login", error);
      });
  };

  return (
    <>
      {ShowMessage ? (
        <Message
          text={"Invalid Credentials"}
          text2={"You will be redirected to the login page in a second..."}
        />
      ) : (
        <div className="bg-gradient-to-b from-night via-night2 to-night3 w-screen h-screen flex justify-center items-center px-4">
          <form
            onSubmit={handleSubmit(submission)}
            className="w-50 max-w-md sm:max-w-lg"
          >
            <Box className="bg-white p-6 sm:p-8 rounded-[5vw] sm:rounded-[2.5vw] flex flex-col gap-5 sm:gap-10">
              <Box className="flex justify-center items-center w-full">
                <h1 className="font-dancing text-4xl sm:text-[46px] text-yellow-600">
                  Login
                </h1>
              </Box>

              <Box className="flex justify-center items-center w-full">
                <MyTextField label="Email" name="email" control={control} />
              </Box>

              <Box className="flex justify-center items-center w-full">
                <PasswordField
                  label="Password"
                  name="password"
                  control={control}
                />
              </Box>

              <Box className="flex justify-center items-center w-full">
                <MyButton label="Login" type="submit" />
              </Box>

              <Box className="flex justify-center items-center text-sm sm:text-base w-full text-center flex-wrap gap-1">
                <span>No account yet?</span>
                <Link
                  to="/register"
                  className="hover:text-blue-800 text-blue-600"
                >
                  Sign up
                </Link>
              </Box>

              <Box className="flex justify-center items-center text-sm sm:text-base w-full text-center flex-wrap gap-1">
                <span>Forgot Password?</span>
                <Link
                  to="/request/password_reset"
                  className="hover:text-blue-800 text-blue-600"
                >
                  Reset Here
                </Link>
              </Box>
            </Box>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
