import Hero from "./components/Hero";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoutes";
import PasswordResetRequest from "./components/PasswordResetRequest";
import PasswordReset from "./components/PasswordReset";
import Profile from "./components/Profile";
import Homepage from "./components/Homepage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/request/password_reset"
          element={<PasswordResetRequest />}
        />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/homepage" element={<Homepage />} />
          <Route path="/home/profile" element={<Profile />} />
          <Route path="/password-reset/token" element={<PasswordReset />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
