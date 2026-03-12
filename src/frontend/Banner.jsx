import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">

      <div className="overlay"></div>

      <div className="banner-content">

        <img 
          src="/LOGO.png"
          alt="KGN Logo"
          className="banner-logo"
        />

        <h1>KGN Dum Biriyani</h1>

        <h3>The Royal Taste of Narasaraopet</h3>

        <p>
          Slow-cooked to perfection with aromatic spices, saffron & love —
          served fresh from our legendary dum handi.
        </p>

        <div className="banner-buttons">
          <button
  className="menu-btn"
  onClick={() => document.getElementById("menu").scrollIntoView({ behavior: "smooth" })}
>
  EXPLORE MENU
</button>

        </div>

      </div>

    </section>
  );
}

export default Banner;