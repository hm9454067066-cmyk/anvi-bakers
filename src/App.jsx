import { useEffect, useMemo, useState } from "react";
import "./index.css";
import heroImage from "./assets/hero.png";

function App() {
  const whatsappNumber = "919198299898";

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ================= PRODUCTS =================

  const cakes = [
    {
      name: "Chocolate Truffle Cake",
      category: "Chocolate Cakes",
      pricePerKg: 108,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Red Velvet Cake",
      category: "Premium Cakes",
      pricePerKg: 799,
      image:
        "https://images.unsplash.com/photo-1614707267537-2b1e4c6c6e9e?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Black Forest Cake",
      category: "Classic Cakes",
      pricePerKg: 649,
      image:
        "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Butterscotch Cake",
      category: "Cream Cakes",
      pricePerKg: 699,
      image:
        "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Strawberry Cake",
      category: "Fresh Cream Cakes",
      pricePerKg: 749,
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Pineapple Cake",
      category: "Fresh Cream Cakes",
      pricePerKg: 649,
      image:
        "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Vanilla Cake",
      category: "Classic Cakes",
      pricePerKg: 599,
      image:
        "https://images.unsplash.com/photo-1588195538326-c5b1e5b80a4a?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Fresh Fruit Cake",
      category: "Premium Cakes",
      pricePerKg: 899,
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=90",
    },
  ];

  const pastries = [
    {
      name: "Chocolate Pastry",
      category: "Chocolate",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Red Velvet Pastry",
      category: "Premium",
      price: 110,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Black Forest Pastry",
      category: "Classic",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Pineapple Pastry",
      category: "Fresh Cream",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Strawberry Pastry",
      category: "Fresh Cream",
      price: 85,
      image:
        "https://images.unsplash.com/photo-1576618148400-cf7c0d1b8f0a?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Butterscotch Pastry",
      category: "Cream",
      price: 90,
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=90",
    },
  ];

  const cookies = [
    {
      name: "Chocolate Chip Cookies",
      category: "Chocolate",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Butter Cookies",
      category: "Classic",
      price: 160,
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Coconut Cookies",
      category: "Classic",
      price: 170,
      image:
        "https://images.unsplash.com/photo-1598373182133-52452f7691ef?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Nankhatai",
      category: "Indian Special",
      price: 190,
      image:
        "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Dry Fruit Cookies",
      category: "Premium",
      price: 240,
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=90",
    },
    {
      name: "Double Chocolate Cookies",
      category: "Chocolate",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=90",
    },
  ];

  const allProducts = useMemo(
    () => [...cakes, ...pastries, ...cookies],
    []
  );

  // ================= DATE =================

  const today = new Date();
  const minDeliveryDate = today.toISOString().split("T")[0];

  // ================= HELPERS =================

  const formatPrice = (amount) => {
    const number = Number(amount);

    if (!Number.isFinite(number)) {
      return "₹0";
    }

    return `₹${number.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
    })}`;
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ================= PRICE =================

  const calculatePrice = (
    item = selectedItem,
    weight = selectedWeight,
    qty = quantity
  ) => {
    if (!item) return 0;

    const numericQuantity = Number(qty);

    if (!Number.isFinite(numericQuantity) || numericQuantity <= 0) {
      return 0;
    }

    if (item.pricePerKg) {
      const numericWeight = Number(weight);

      if (!Number.isFinite(numericWeight) || numericWeight <= 0) {
        return 0;
      }

      return Number(item.pricePerKg) * numericWeight * numericQuantity;
    }

    if (item.price) {
      return Number(item.price) * numericQuantity;
    }

    return 0;
  };

  // ================= PRODUCT SELECT =================

  const selectProduct = (item) => {
    setSelectedItem(item);
    setSelectedWeight("");
    setQuantity("");
    setSelectedPrice(0);
    setOrderSuccess(false);

    setTimeout(() => {
      scrollToSection("contact");
    }, 100);
  };

  const handleProductChange = (e) => {
    const productName = e.target.value;

    const item = allProducts.find(
      (product) => product.name === productName
    );

    if (!item) {
      setSelectedItem(null);
      setSelectedWeight("");
      setQuantity("");
      setSelectedPrice(0);
      return;
    }

    setSelectedItem(item);
    setSelectedWeight("");
    setQuantity("");
    setSelectedPrice(0);
  };

  // ================= WEIGHT =================

  const handleWeightChange = (e) => {
    const weight = e.target.value;

    setSelectedWeight(weight);

    const newPrice = calculatePrice(
      selectedItem,
      weight,
      quantity
    );

    setSelectedPrice(newPrice);
  };

  // ================= QUANTITY =================

  const handleQuantityChange = (e) => {
    const qty = e.target.value;

    setQuantity(qty);

    const newPrice = calculatePrice(
      selectedItem,
      selectedWeight,
      qty
    );

    setSelectedPrice(newPrice);
  };

  // ================= PHONE VALIDATION =================

  const validatePhone = (phone) => {
    const cleaned = phone.replace(/\D/g, "");

    if (cleaned.length !== 10) {
      return false;
    }

    return /^[6-9]\d{9}$/.test(cleaned);
  };

  // ================= ORDER =================

  const handleOrder = (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const phone = formData.get("phone")?.trim();
    const product = formData.get("product");
    const date = formData.get("date");

    const house = formData.get("house")?.trim();
    const street = formData.get("street")?.trim();
    const area = formData.get("area")?.trim();
    const city = formData.get("city")?.trim();
    const state = formData.get("state")?.trim();
    const pincode = formData.get("pincode")?.trim();

    const landmark =
      formData.get("landmark")?.trim() || "Not provided";

    const requirements =
      formData.get("requirements")?.trim() || "None";

    // NAME

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    // PHONE

    if (!validatePhone(phone)) {
      alert(
        "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9."
      );
      return;
    }

    // PRODUCT

    if (!product || !selectedItem) {
      alert("Please select a product.");
      return;
    }

    // CAKE WEIGHT

    if (selectedItem.pricePerKg && !selectedWeight) {
      alert("Please select cake weight.");
      return;
    }

    // QUANTITY

    if (!quantity || Number(quantity) <= 0) {
      alert("Please select quantity.");
      return;
    }

    // DATE

    if (!date) {
      alert("Please select delivery date.");
      return;
    }

    if (date < minDeliveryDate) {
      alert("Past delivery dates are not allowed.");
      return;
    }

    // ADDRESS

    if (
      !house ||
      !street ||
      !area ||
      !city ||
      !state ||
      !pincode
    ) {
      alert("Please complete your delivery address.");
      return;
    }

    if (!/^\d{6}$/.test(pincode)) {
      alert("Please enter a valid 6-digit PIN code.");
      return;
    }

    const totalAmount = calculatePrice(
      selectedItem,
      selectedWeight,
      quantity
    );

    if (!Number.isFinite(totalAmount) || totalAmount <= 0) {
      alert(
        "Please select product, weight and quantity correctly."
      );
      return;
    }

    setIsSubmitting(true);

    const weightText = selectedItem.pricePerKg
      ? `${selectedWeight} Kg`
      : "Not applicable";

    const fullAddress = [
      house,
      street,
      area,
      city,
      state,
      `PIN: ${pincode}`,
    ].join(", ");

    const message = `Hello Anvi Bakers,

I want to place an order.

ORDER DETAILS

Customer Name:
${name}

Phone Number:
+91 ${phone}

Product:
${product}

Weight:
${weightText}

Quantity:
${quantity}

Total Price:
${formatPrice(totalAmount)}

Delivery Date:
${date}

DELIVERY ADDRESS

House / Flat:
${house}

Street / Road:
${street}

Area / Locality:
${area}

City:
${city}

State:
${state}

PIN Code:
${pincode}

Landmark:
${landmark}

Full Address:
${fullAddress}

Special Requirements:
${requirements}

Please confirm my order and delivery details.

Thank you.
Anvi Bakers`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    setOrderSuccess(true);

    setTimeout(() => {
      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

      setIsSubmitting(false);
    }, 500);
  };

  // ================= ESCAPE MOBILE MENU =================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ================= UI =================

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div
          className="logo"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          <h1>Anvi</h1>
          <span>BAKERS</span>
        </div>

        <nav
          className={
            mobileMenuOpen
              ? "nav-menu mobile-open"
              : "nav-menu"
          }
        >
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#cakes"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cakes
          </a>

          <a
            href="#pastries"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pastries
          </a>

          <a
            href="#cookies"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cookies
          </a>

          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
        </nav>

        <button
          className="order-btn"
          onClick={() => scrollToSection("contact")}
        >
          Order Now
        </button>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() =>
            setMobileMenuOpen((prev) => !prev)
          }
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>

      </header>

      {/* ================= HERO ================= */}

      <main id="home">

        <section className="hero">

          <div className="hero-content">

            <p className="tagline">
              Freshly Baked With Love
            </p>

            <h2>
              Sweet Moments,
              <br />
              <span>Beautifully Baked.</span>
            </h2>

            <p className="description">
              Delicious cakes, fresh pastries
              and crunchy cookies made
              specially for your birthdays,
              anniversaries and every special
              moment.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-btn"
                onClick={() =>
                  scrollToSection("cakes")
                }
              >
                Explore Cakes
              </button>

              <button
                className="secondary-btn"
                onClick={() =>
                  scrollToSection("contact")
                }
              >
                Order Now
              </button>

            </div>

            <div className="features">

              <div>
                <strong>100% Fresh</strong>
                <span>Made fresh daily</span>
              </div>

              <div>
                <strong>Eggless Options</strong>
                <span>Perfect for everyone</span>
              </div>

              <div>
                <strong>Made With Love</strong>
                <span>For your special day</span>
              </div>

            </div>

          </div>

          <div className="hero-image">

            <div className="hero-image-frame">

              <img
                src={heroImage}
                alt="Fresh cake from Anvi Bakers"
              />

            </div>

            <div className="hero-badge">
              <strong>Fresh</strong>
              <span>Every Day</span>
            </div>

          </div>

        </section>

      </main>

      {/* ================= CATEGORY BAR ================= */}

      <section className="category-bar">

        <button
          onClick={() =>
            scrollToSection("cakes")
          }
        >
          Cakes
        </button>

        <button
          onClick={() =>
            scrollToSection("pastries")
          }
        >
          Pastries
        </button>

        <button
          onClick={() =>
            scrollToSection("cookies")
          }
        >
          Cookies
        </button>

        <button
          onClick={() =>
            scrollToSection("contact")
          }
        >
          Order
        </button>

      </section>

      {/* ================= CAKES ================= */}

      <section
        id="cakes"
        className="products-section"
      >

        <div className="section-heading">

          <p className="section-tag">
            OUR CAKES
          </p>

          <h2>
            Cakes For Every
            <span> Celebration</span>
          </h2>

          <p className="section-description">
            Choose your favourite cake and
            order it by weight.
          </p>

        </div>

        <div className="product-grid">

          {cakes.map((cake) => (

            <div
              className="product-card"
              key={cake.name}
            >

              <div className="product-image">

                <img
                  src={cake.image}
                  alt={cake.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display =
                      "none";
                  }}
                />

                <span>Fresh</span>

              </div>

              <div className="product-info">

                <small>{cake.category}</small>

                <h3>{cake.name}</h3>

                <p className="price-info">
                  Starting from{" "}
                  <strong>
                    {formatPrice(cake.pricePerKg)}
                    /kg
                  </strong>
                </p>

                <button
                  className="product-order"
                  onClick={() =>
                    selectProduct(cake)
                  }
                >
                  Order Cake
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= PASTRIES ================= */}

      <section
        id="pastries"
        className="products-section alternate-section"
      >

        <div className="section-heading">

          <p className="section-tag">
            FRESH PASTRIES
          </p>

          <h2>
            Delicious
            <span> Pastries</span>
          </h2>

          <p className="section-description">
            Perfect for a quick sweet treat.
          </p>

        </div>

        <div className="product-grid">

          {pastries.map((item) => (

            <div
              className="product-card"
              key={item.name}
            >

              <div className="product-image">

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display =
                      "none";
                  }}
                />

                <span>Fresh</span>

              </div>

              <div className="product-info">

                <small>{item.category}</small>

                <h3>{item.name}</h3>

                <p className="price-info">
                  <strong>
                    {formatPrice(item.price)}
                  </strong>{" "}
                  / piece
                </p>

                <button
                  className="product-order"
                  onClick={() =>
                    selectProduct(item)
                  }
                >
                  Order Pastry
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= COOKIES ================= */}

      <section
        id="cookies"
        className="products-section"
      >

        <div className="section-heading">

          <p className="section-tag">
            FRESHLY BAKED
          </p>

          <h2>
            Crunchy &
            <span> Delicious Cookies</span>
          </h2>

          <p className="section-description">
            Perfectly baked cookies made
            with premium ingredients.
          </p>

        </div>

        <div className="product-grid">

          {cookies.map((item) => (

            <div
              className="product-card"
              key={item.name}
            >

              <div className="product-image">

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display =
                      "none";
                  }}
                />

                <span>Fresh</span>

              </div>

              <div className="product-info">

                <small>{item.category}</small>

                <h3>{item.name}</h3>

                <p className="price-info">
                  <strong>
                    {formatPrice(item.price)}
                  </strong>{" "}
                  / 250g
                </p>

                <button
                  className="product-order"
                  onClick={() =>
                    selectProduct(item)
                  }
                >
                  Order Cookies
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="about-section"
      >

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1000&q=90"
            alt="Anvi Bakers"
            loading="lazy"
          />

        </div>

        <div className="about-content">

          <p className="section-tag">
            ABOUT ANVI BAKERS
          </p>

          <h2>
            Baking Happiness,
            <br />
            <span>One Treat At A Time.</span>
          </h2>

          <p>
            From celebration cakes to
            delicious pastries and freshly
            baked cookies, Anvi Bakers
            brings something sweet for
            every occasion.
          </p>

          <p>
            Every product is prepared with
            quality ingredients, attention
            to detail and lots of love.
          </p>

          <button
            className="primary-btn"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Order Now
          </button>

        </div>

      </section>

      {/* ================= ORDER SECTION ================= */}

      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-heading">

          <p className="section-tag">
            PLACE YOUR ORDER
          </p>

          <h2>
            Let's Make Something
            <span> Sweet.</span>
          </h2>

          <p>
            Select your product, weight,
            quantity, delivery date and
            complete delivery address.
          </p>

        </div>

        <div className="contact-container">

          {/* CONTACT INFORMATION */}

          <div className="contact-info">

            <h3>Anvi Bakers</h3>

            <p>
              Fresh cakes, pastries and
              cookies prepared specially
              for you.
            </p>

            <div className="contact-item">

              <strong>WhatsApp</strong>

              <span>
                +91 9198299898
              </span>

            </div>

            <div className="contact-item">

              <strong>Location</strong>

              <span>
                Ayodhya, Uttar Pradesh
              </span>

            </div>

            <div className="contact-item">

              <strong>Opening Hours</strong>

              <span>
                10:00 AM - 9:00 PM
              </span>

            </div>

          </div>

          {/* ORDER FORM */}

          <form
            className="order-form"
            onSubmit={handleOrder}
          >

            {/* NAME + PHONE */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Your Name *
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  maxLength="60"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Phone Number *
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="10-digit mobile number"
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength="10"
                  pattern="[6-9][0-9]{9}"
                  required
                />

              </div>

            </div>

            {/* PRODUCT */}

            <div className="form-group">

              <label>
                Product *
              </label>

              <select
                name="product"
                value={
                  selectedItem?.name || ""
                }
                onChange={
                  handleProductChange
                }
                required
              >

                <option value="">
                  Select Product
                </option>

                <optgroup label="Cakes">

                  {cakes.map((cake) => (

                    <option
                      key={cake.name}
                      value={cake.name}
                    >
                      {cake.name}
                    </option>

                  ))}

                </optgroup>

                <optgroup label="Pastries">

                  {pastries.map((item) => (

                    <option
                      key={item.name}
                      value={item.name}
                    >
                      {item.name}
                    </option>

                  ))}

                </optgroup>

                <optgroup label="Cookies">

                  {cookies.map((item) => (

                    <option
                      key={item.name}
                      value={item.name}
                    >
                      {item.name}
                    </option>

                  ))}

                </optgroup>

              </select>

            </div>

            {/* CAKE WEIGHT */}

            {selectedItem?.pricePerKg && (

              <div className="form-group">

                <label>
                  Select Cake Weight *
                </label>

                <select
                  name="weight"
                  value={selectedWeight}
                  onChange={
                    handleWeightChange
                  }
                  required
                >

                  <option value="">
                    Select Weight
                  </option>

                  <option value="0.5">
                    0.5 Kg
                  </option>

                  <option value="1">
                    1 Kg
                  </option>

                  <option value="2">
                    2 Kg
                  </option>

                  <option value="3">
                    3 Kg
                  </option>

                  <option value="4">
                    4 Kg
                  </option>

                  <option value="5">
                    5 Kg
                  </option>

                </select>

              </div>

            )}

            {/* QUANTITY + DATE */}

            <div className="form-row">

              <div className="form-group">

                <label>
                  Quantity *
                </label>

                <select
                  name="quantity"
                  value={quantity}
                  onChange={
                    handleQuantityChange
                  }
                  required
                >

                  <option value="">
                    Select Quantity
                  </option>

                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="10">10</option>
                  <option value="20">20</option>

                </select>

              </div>

              <div className="form-group">

                <label>
                  Delivery Date *
                </label>

                <input
                  type="date"
                  name="date"
                  min={minDeliveryDate}
                  required
                />

              </div>

            </div>

            {/* DELIVERY ADDRESS */}

            <div className="address-title">
              Delivery Address
            </div>

            <div className="form-row">

              <div className="form-group">

                <label>
                  House / Flat *
                </label>

                <input
                  type="text"
                  name="house"
                  placeholder="House / Flat No."
                  autoComplete="address-line1"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Street / Road *
                </label>

                <input
                  type="text"
                  name="street"
                  placeholder="Street / Road"
                  autoComplete="address-line2"
                  required
                />

              </div>

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>
                  Area / Locality *
                </label>

                <input
                  type="text"
                  name="area"
                  placeholder="Area / Locality"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  City *
                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  autoComplete="address-level2"
                  defaultValue="Ayodhya"
                  required
                />

              </div>

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>
                  State *
                </label>

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  autoComplete="address-level1"
                  defaultValue="Uttar Pradesh"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  PIN Code *
                </label>

                <input
                  type="text"
                  name="pincode"
                  placeholder="6-digit PIN"
                  inputMode="numeric"
                  maxLength="6"
                  pattern="[0-9]{6}"
                  autoComplete="postal-code"
                  required
                />

              </div>

            </div>

            {/* LANDMARK */}

            <div className="form-group">

              <label>
                Landmark / Area
              </label>

              <input
                type="text"
                name="landmark"
                placeholder="Nearby landmark"
                maxLength="100"
              />

            </div>

            {/* PRICE */}

            <div className="selected-price">

              <span>
                Total Price
              </span>

              <strong>

                {selectedPrice > 0
                  ? formatPrice(
                      selectedPrice
                    )
                  : "Select product, options & quantity"}

              </strong>

            </div>

            {/* SPECIAL REQUIREMENTS */}

            <div className="form-group">

              <label>
                Special Requirements
              </label>

              <textarea
                name="requirements"
                rows="5"
                placeholder="Cake message, design, flavour, custom requirements..."
                maxLength="500"
              />

            </div>

            {/* SUCCESS */}

            {orderSuccess && (

              <div className="order-success">
                Order details prepared successfully.
                WhatsApp is opening now.
              </div>

            )}

            {/* SUBMIT */}

            <button
              type="submit"
              className="form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Preparing Order..."
                : "Send Order on WhatsApp"}
            </button>

          </form>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">

            <div className="logo footer-logo">

              <h1>Anvi</h1>

              <span>BAKERS</span>

            </div>

            <p>
              Freshly baked cakes, pastries
              and cookies made with love.
            </p>

            <a
              className="footer-whatsapp"
              href="https://wa.me/919198299898"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>

          </div>

          <div className="footer-column">

            <h4>Explore</h4>

            <a href="#home">Home</a>
            <a href="#cakes">Cakes</a>
            <a href="#pastries">Pastries</a>
            <a href="#cookies">Cookies</a>
            <a href="#about">About Us</a>

          </div>

          <div className="footer-column">

            <h4>Categories</h4>

            <a href="#cakes">
              Birthday Cakes
            </a>

            <a href="#cakes">
              Chocolate Cakes
            </a>

            <a href="#cakes">
              Premium Cakes
            </a>

            <a href="#pastries">
              Fresh Pastries
            </a>

            <a href="#cookies">
              Fresh Cookies
            </a>

          </div>

          <div className="footer-column">

            <h4>Contact</h4>

            <p>+91 9198299898</p>

            <p>
              Ayodhya, Uttar Pradesh
            </p>

            <p>
              10:00 AM - 9:00 PM
            </p>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 Anvi Bakers.
            All Rights Reserved.
          </p>

          <p>
            Freshly Baked With Love
          </p>

        </div>

      </footer>

    </div>
  );
}

export default App;