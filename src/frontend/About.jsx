import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-header">
        <p>Our Story</p>
        <h1>Why KGN?</h1>
      </div>

      <div className="about-text">

        <p>
          Welcome to <strong>KGN Dum Biryani</strong>, where every dish is prepared
          with passion, tradition, and authentic flavors. Our restaurant is known
          for serving delicious biryanis made with premium basmati rice, fresh
          spices, and high-quality meat.
        </p>

        <p>
          At KGN Dum Biryani, we follow the traditional <strong>Dum cooking
          method</strong>, where the biryani is slow cooked to lock in rich
          flavors and aromas. This process creates the perfect balance of
          spices, tenderness, and taste in every bite.
        </p>

        <p>
          From Chicken Dum Biryani and Mutton Biryani to flavorful curries
          and seafood specials, our menu offers a wide variety of dishes
          that bring the true taste of Indian cuisine.
        </p>

        <p>
          Our mission is simple — to provide customers with delicious food,
          quality ingredients, and a memorable dining experience.
        </p>

      </div>

      <div className="about-cards">

        <div className="about-card">
          <div className="icon">♨</div>
          <h3>Authentic Dum Cooking</h3>
          <p>
            Sealed handi slow-cooked over charcoal for 45 minutes —
            the way biryani was meant to be made.
          </p>
        </div>

        <div className="about-card">
          <div className="icon">⏱</div>
          <h3>Fresh Every Day</h3>
          <p>
            No shortcuts. We prepare fresh batches daily using
            premium basmati rice and hand-ground spices.
          </p>
        </div>

        <div className="about-card">
          <div className="icon">👑</div>
          <h3>Legendary Taste</h3>
          <p>
            A recipe passed down through generations,
            perfected over decades of passion and love.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;