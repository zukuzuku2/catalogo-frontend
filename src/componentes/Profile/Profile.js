import React from "react";
import "../Profile/Profile.css";

function Profile() {
  return (
    <section class="profile">
      <hr />
      <br />
      <img
        class="profile__image"
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="Imagen del perfil"
      />
      <h1 class="profile__name">Nelson Santos</h1>
      <h2 class="profile__username">@Nelson</h2>
      <br />
      <hr />
    </section>
  );
}

export default Profile;
