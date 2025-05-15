import Hero from "./components/Hero";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoutes";
import PasswordResetRequest from "./components/PasswordResetRequest";
import PasswordReset from "./components/PasswordReset";
import Profile from "./components/Profile";
import Homepage from "./components/Homepage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/request/password_reset"
          element={<PasswordResetRequest />}
        />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        <Route path="/test-route" element={<div>It works!</div>} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/homepage" element={<Homepage />} />
          <Route path="/home/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
