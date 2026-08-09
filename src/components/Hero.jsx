function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-small">
            ✦ Freshly Baked With Love
          </p>

          <h1>
            Sweet Moments,
            <span>Beautifully Baked.</span>
          </h1>

          <p className="hero-description">
            Delicious cakes made fresh for your birthdays,
            anniversaries, celebrations and every special moment.
          </p>

          <div className="hero-buttons">
            <a href="#order" className="hero-primary-btn">
              Order Your Cake
            </a>

            <a href="#cakes" className="hero-secondary-btn">
              Explore Cakes
            </a>
          </div>

          <div className="hero-features">
            <div>
              <strong>100%</strong>
              <span>Fresh</span>
            </div>

            <div>
              <strong>Eggless</strong>
              <span>Options</span>
            </div>

            <div>
              <strong>Made</strong>
              <span>With Love</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-circle"></div>

          <img
            src="/images/hero-cake.jpg"
            alt="Anvi Bakers Cake"
          />

          <div className="floating-card">
            <span>🎂</span>
            <div>
              <strong>Made Fresh</strong>
              <small>For your special day</small>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero