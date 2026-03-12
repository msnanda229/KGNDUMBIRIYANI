import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>

      <div className="logo-section">
        <img
          src="./LOGO.png"
          alt="KGN Logo"
          className="logo"
        />
        <h1 className="brand">KGN</h1>
      </div>

      {/* mobile menu toggle */}

      <button
        className={`menu-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${open ? "open" : ""}`}>
        <a href="#menu" onClick={() => setOpen(false)}>MENU</a>
        <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
        <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
      </nav>

    </header>
  );
}

export default Header;