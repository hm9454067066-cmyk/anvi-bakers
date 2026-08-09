function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <span className="logo-main">Anvi</span>
          <span className="logo-sub">BAKERS</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#cakes">Our Cakes</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#order" className="order-btn">
          Order Cake
        </a>

      </div>
    </nav>
  )
}

export default Navbar