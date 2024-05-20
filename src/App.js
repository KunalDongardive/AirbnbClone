import "./App.css";
import Home from "./pages/home/Home";
import Rooms from "./pages/destination/Rooms";
import SignUp from "./pages/signUp/SignUp";
import SignIn from "./pages/signIn/SignIn";
// import Swiper from "./components/swiper/Swiper";
import { UserContext } from "./components/userContext/UserContext";
import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <SignUp />} />
        <Route path="/destination" element={user ? <Rooms /> : <SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      {/* <Home /> */}
      {/* <Rooms /> */}
      {/* <SignUp /> */}
      {/* <Swiper /> */}
    </div>
  );
}

export default App;
