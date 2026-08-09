import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <a
          href="#home"
          className="logo"
          onClick={closeMenu}
          aria-label="Anvi Bakers Home"
        >
          <span className="logo-main">Anvi</span>
          <span className="logo-sub">BAKERS</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#cakes">Our Cakes</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        {/* DESKTOP ORDER BUTTON */}
        <a href="#contact" className="order-btn">
          Order Cake
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobile-menu-btn ${
            menuOpen ? "active" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#cakes" onClick={closeMenu}>
          Our Cakes
        </a>

        <a href="#pastries" onClick={closeMenu}>
          Pastries
        </a>

        <a href="#cookies" onClick={closeMenu}>
          Cookies
        </a>

        <a href="#about" onClick={closeMenu}>
          About Us
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a
          href="#contact"
          className="mobile-order-btn"
          onClick={closeMenu}
        >
          Order Cake
        </a>
      </div>
    </nav>
  );
}

export default Navbar;