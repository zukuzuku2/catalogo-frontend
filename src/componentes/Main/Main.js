import React from "react";
import "./Main.css";
import Profile from "../Profile/Profile";
import Movie from "../Movie/Movie";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";

function Main() {
  return (
    <div class="page">
      <Login />
      {/* <Header />
      <main class="main">
        <Profile />
        <Movie />
      </main>
      <Footer /> */}
    </div>
  );
}

export default Main;
