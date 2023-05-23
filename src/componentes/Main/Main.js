import React from "react";
import "./Main.css";
import Profile from "../Profile/Profile";
import Movie from "../Movie/Movie";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Main() {
  return (
    <div class="page">
      <Header />
      <main class="main">
        <Profile />
        <Movie />
      </main>
      {/* <!-- Agrega más películas aquí --> */}
      <Footer />
    </div>
  );
}

export default Main;
