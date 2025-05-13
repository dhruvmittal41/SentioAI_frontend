import "./index.css";
import { Box } from "@mui/material";
import MyTextField from "./forms/MyTextField";
import PasswordField from "./forms/PasswordField";
import MyButton from "./forms/MyButton";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import AxiosInstance from "./AxiosInstance";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const Schema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email adress")
      .required("this field is mandatory"),
    password: yup
      .string()
      .required("this field is mandatory")
      .min(8, "password must be atleast 8 characters")
      .matches(/[A-Z]/, "Password must contain atleast one uppercase letter")
      .matches(/[a-z]/, "Password must contain atleast one lowercase letter")
      .matches(/[0-9]/, "Password must contain atleast one number")
      .matches(
        /[!@#$%^&*]/,
        "Password must contain atleast one special character"
      ),
    password2: yup
      .string()
      .required("please confirm password!")
      .oneOf([yup.ref("password"), null], "Password doesn't match"),
  });
  const { handleSubmit, control } = useForm({ resolver: yupResolver(Schema) });

  const submission = (data) => {
    AxiosInstance.post(`register/`, {
      email: data.email,
      password: data.password,
      username: data.username,
    }).then(() => {
      navigate(`/login`);
    });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-night via-night2 to-night3 w-screen h-screen flex justify-center items-center px-4">
        <form
          onSubmit={handleSubmit(submission)}
          className="w-50 max-w-md sm:max-w-lg"
        >
          <Box className="bg-white p-6 sm:p-8 rounded-[5vw] sm:rounded-[2.5vw] flex flex-col gap-6 sm:gap-6">
            <Box className="flex justify-center items-center w-full">
              <h1 className="font-dancing text-4xl sm:text-[46px] text-yellow-600">
                Sign Up
              </h1>
            </Box>

            <Box className="flex justify-center items-center w-full">
              <MyTextField label="Username" name="username" control={control} />
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
              <PasswordField
                label="Confirm Password"
                name="password2"
                control={control}
              />
            </Box>

            <Box className="flex justify-center items-center w-full">
              <MyButton label="Sign Up" type="submit" />
            </Box>

            <Box className="flex justify-center items-center text-sm sm:text-base w-full text-center flex-wrap gap-1">
              <span>Already have an account?</span>
              <Link
                to="/login"
                className="hover:text-blue-800 text-blue-600 ml-1"
              >
                Login
              </Link>
            </Box>
          </Box>
        </form>
      </div>
    </>
  );
};

export default Register;
