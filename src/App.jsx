import { useMemo, useState } from "react";
import "./index.css";
import heroImage from "./assets/hero.png";

function App() {
  const whatsappNumber = "919198299898";

  const today = new Date().toISOString().split("T")[0];

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  // ================= PRODUCTS =================

  const cakes = [
    {
      name: "Chocolate Truffle Cake",
      category: "Chocolate Cakes",
      pricePerKg: 1080,
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

  const allProducts = [...cakes, ...pastries, ...cookies];

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

  const calculatePrice = (
    item = selectedItem,
    weight = selectedWeight,
    qty = quantity
  ) => {
    if (!item) {
      return 0;
    }

    const numericQuantity = Number(qty);

    if (
      !Number.isFinite(numericQuantity) ||
      numericQuantity <= 0
    ) {
      return 0;
    }

    if (item.pricePerKg) {
      const numericWeight = Number(weight);

      if (
        !Number.isFinite(numericWeight) ||
        numericWeight <= 0
      ) {
        return 0;
      }

      return (
        Number(item.pricePerKg) *
        numericWeight *
        numericQuantity
      );
    }

    if (item.price) {
      return Number(item.price) * numericQuantity;
    }

    return 0;
  };

  // ================= IMAGE FALLBACK =================

  const handleImageError = (key) => {
    setImageErrors((previous) => ({
      ...previous,
      [key]: true,
    }));
  };

  const ProductImage = ({ item, index }) => {
    const key = `${item.name}-${index}`;

    return (
      <div className="product-image">
        {!imageErrors[key] ? (
          <img
            src={item.image}
            alt={`${item.name} - Anvi Bakers`}
            loading="lazy"
            onError={() => handleImageError(key)}
          />
        ) : (
          <div className="image-fallback">
            <strong>{item.name}</strong>
            <span>Anvi Bakers</span>
          </div>
        )}

        <span>Fresh</span>
      </div>
    );
  };

  // ================= PRODUCT SELECTION =================

  const selectProduct = (item) => {
    setSelectedItem(item);
    setSelectedWeight("");
    setQuantity("");
    setSelectedPrice(0);
    setOrderSuccess(false);

    setTimeout(() => {
      scrollToSection("contact");
    }, 50);
  };

  // ================= PRODUCT CHANGE =================

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
    setOrderSuccess(false);
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

  const handlePhoneInput = (e) => {
    const onlyNumbers = e.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    e.target.value = onlyNumbers;
  };

  // ================= ORDER =================

  const handleOrder = (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.trim();
    const phone = formData.get("phone")?.trim();
    const product = formData.get("product");
    const weight = formData.get("weight");
    const qty = formData.get("quantity");
    const date = formData.get("date");

    const house = formData.get("house")?.trim();
    const street = formData.get("street")?.trim();
    const city = formData.get("city")?.trim();
    const pincode = formData.get("pincode")?.trim();
    const landmark = formData.get("landmark")?.trim();

    const requirements =
      formData.get("requirements")?.trim() || "None";

    // NAME VALIDATION

    if (!name || name.length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    // PHONE VALIDATION

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert(
        "Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8 or 9."
      );
      return;
    }

    // PRODUCT VALIDATION

    if (!product || !selectedItem) {
      alert("Please select a product.");
      return;
    }

    // CAKE WEIGHT VALIDATION

    if (
      selectedItem.pricePerKg &&
      !weight
    ) {
      alert("Please select cake weight.");
      return;
    }

    // QUANTITY VALIDATION

    const numericQuantity = Number(qty);

    if (
      !Number.isInteger(numericQuantity) ||
      numericQuantity <= 0
    ) {
      alert("Please select a valid quantity.");
      return;
    }

    // DATE VALIDATION

    if (!date) {
      alert("Please select a delivery date.");
      return;
    }

    if (date < today) {
      alert(
        "Past delivery dates are not allowed. Please select today or a future date."
      );
      return;
    }

    // ADDRESS VALIDATION

    if (
      !house ||
      !street ||
      !city ||
      !pincode
    ) {
      alert(
        "Please complete all required delivery address fields."
      );
      return;
    }

    if (!/^\d{6}$/.test(pincode)) {
      alert("Please enter a valid 6-digit PIN code.");
      return;
    }

    // PRICE

    const totalAmount = calculatePrice(
      selectedItem,
      selectedWeight,
      qty
    );

    if (
      !Number.isFinite(totalAmount) ||
      totalAmount <= 0
    ) {
      alert(
        "Please select product, options and quantity correctly."
      );
      return;
    }

    setIsSubmitting(true);

    const finalPrice = formatPrice(totalAmount);

    const weightText = selectedItem.pricePerKg
      ? `${selectedWeight} Kg`
      : "Not applicable";

    const completeAddress = [
      house,
      street,
      city,
      `PIN Code: ${pincode}`,
      landmark ? `Landmark: ${landmark}` : "",
    ]
      .filter(Boolean)
      .join("\n");

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
${qty}

Total Price:
${finalPrice}

Delivery Date:
${date}

DELIVERY ADDRESS

${completeAddress}

Special Requirements:
${requirements}

Please confirm my order and delivery details.

Thank you.
Anvi Bakers`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;

    setOrderSuccess(true);

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    setIsSubmitting(false);
  };

  // ================= PRODUCT OPTIONS =================

  const productOptions = useMemo(
    () => ({
      cakes,
      pastries,
      cookies,
    }),
    []
  );

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          <h1>Anvi</h1>
          <span>BAKERS</span>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          aria-label="Toggle navigation menu"
          onClick={() =>
            setMobileMenuOpen(
              (previous) => !previous
            )
          }
        >
          {mobileMenuOpen ? "Close" : "Menu"}
        </button>

        <nav
          className={
            mobileMenuOpen
              ? "nav-open"
              : ""
          }
        >
          <a
            href="#home"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          >
            Home
          </a>

          <a
            href="#cakes"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          >
            Cakes
          </a>

          <a
            href="#pastries"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          >
            Pastries
          </a>

          <a
            href="#cookies"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          >
            Cookies
          </a>

          <a
            href="#about"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          >
            About
          </a>

          <a
            href="#contact"
            onClick={() =>
              setMobileMenuOpen(false)
            }
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="order-btn"
          onClick={() =>
            scrollToSection("contact")
          }
        >
          Order Now
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
              <span>
                Beautifully Baked.
              </span>
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
                type="button"
                className="primary-btn"
                onClick={() =>
                  scrollToSection("cakes")
                }
              >
                Explore Cakes
              </button>

              <button
                type="button"
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
                <strong>
                  100% Fresh
                </strong>

                <span>
                  Made fresh daily
                </span>
              </div>

              <div>
                <strong>
                  Eggless Options
                </strong>

                <span>
                  Perfect for everyone
                </span>
              </div>

              <div>
                <strong>
                  Made With Love
                </strong>

                <span>
                  For your special day
                </span>
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
          type="button"
          onClick={() =>
            scrollToSection("cakes")
          }
        >
          Cakes
        </button>

        <button
          type="button"
          onClick={() =>
            scrollToSection("pastries")
          }
        >
          Pastries
        </button>

        <button
          type="button"
          onClick={() =>
            scrollToSection("cookies")
          }
        >
          Cookies
        </button>

        <button
          type="button"
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
            <span>
              {" "}Celebration
            </span>
          </h2>

          <p className="section-description">
            Choose your favourite cake and
            order it by weight.
          </p>

        </div>

        <div className="product-grid">

          {productOptions.cakes.map(
            (cake, index) => (

              <div
                className="product-card"
                key={cake.name}
              >

                <ProductImage
                  item={cake}
                  index={index}
                />

                <div className="product-info">

                  <small>
                    {cake.category}
                  </small>

                  <h3>
                    {cake.name}
                  </h3>

                  <p className="price-info">
                    Starting from{" "}
                    <strong>
                      {formatPrice(
                        cake.pricePerKg
                      )}
                      /kg
                    </strong>
                  </p>

                  <button
                    type="button"
                    className="product-order"
                    onClick={() =>
                      selectProduct(cake)
                    }
                  >
                    Order Cake
                  </button>

                </div>

              </div>

            )
          )}

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
            <span>
              {" "}Pastries
            </span>
          </h2>

          <p className="section-description">
            Perfect for a quick sweet treat.
          </p>

        </div>

        <div className="product-grid">

          {productOptions.pastries.map(
            (item, index) => (

              <div
                className="product-card"
                key={item.name}
              >

                <ProductImage
                  item={item}
                  index={index + 100}
                />

                <div className="product-info">

                  <small>
                    {item.category}
                  </small>

                  <h3>
                    {item.name}
                  </h3>

                  <p className="price-info">
                    <strong>
                      {formatPrice(item.price)}
                    </strong>
                    {" "} / piece
                  </p>

                  <button
                    type="button"
                    className="product-order"
                    onClick={() =>
                      selectProduct(item)
                    }
                  >
                    Order Pastry
                  </button>

                </div>

              </div>

            )
          )}

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
            <span>
              {" "}Delicious Cookies
            </span>
          </h2>

          <p className="section-description">
            Perfectly baked cookies made
            with premium ingredients.
          </p>

        </div>

        <div className="product-grid">

          {productOptions.cookies.map(
            (item, index) => (

              <div
                className="product-card"
                key={item.name}
              >

                <ProductImage
                  item={item}
                  index={index + 200}
                />

                <div className="product-info">

                  <small>
                    {item.category}
                  </small>

                  <h3>
                    {item.name}
                  </h3>

                  <p className="price-info">

                    <strong>
                      {formatPrice(item.price)}
                    </strong>

                    {" "} / 250g

                  </p>

                  <button
                    type="button"
                    className="product-order"
                    onClick={() =>
                      selectProduct(item)
                    }
                  >
                    Order Cookies
                  </button>

                </div>

              </div>

            )
          )}

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
            alt="Freshly baked products at Anvi Bakers"
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
            <span>
              One Treat At A Time.
            </span>
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
            type="button"
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
            <span>
              {" "}Sweet.
            </span>
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

            <h3>
              Anvi Bakers
            </h3>

            <p>
              Fresh cakes, pastries and
              cookies prepared specially
              for you.
            </p>

            <div className="contact-item">

              <strong>
                WhatsApp
              </strong>

              <span>
                +91 9198299898
              </span>

            </div>

            <div className="contact-item">

              <strong>
                Location
              </strong>

              <span>
                Ayodhya, Uttar Pradesh
              </span>

            </div>

            <div className="contact-item">

              <strong>
                Opening Hours
              </strong>

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
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  autoComplete="name"
                  minLength="2"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <div className="phone-input-wrapper">

                  <span className="phone-prefix">
                    +91
                  </span>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="10-digit mobile number"
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    maxLength="10"
                    minLength="10"
                    autoComplete="tel-national"
                    onInput={handlePhoneInput}
                    required
                  />

                </div>

              </div>

            </div>

            {/* PRODUCT */}

            <div className="form-group">

              <label>
                Product
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

                  {productOptions.cakes.map(
                    (cake) => (

                      <option
                        key={cake.name}
                        value={cake.name}
                      >
                        {cake.name}
                      </option>

                    )
                  )}

                </optgroup>

                <optgroup label="Pastries">

                  {productOptions.pastries.map(
                    (item) => (

                      <option
                        key={item.name}
                        value={item.name}
                      >
                        {item.name}
                      </option>

                    )
                  )}

                </optgroup>

                <optgroup label="Cookies">

                  {productOptions.cookies.map(
                    (item) => (

                      <option
                        key={item.name}
                        value={item.name}
                      >
                        {item.name}
                      </option>

                    )
                  )}

                </optgroup>

              </select>

            </div>

            {/* CAKE WEIGHT */}

            {selectedItem?.pricePerKg && (

              <div className="form-group">

                <label>
                  Select Cake Weight
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
                  Quantity
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

                  <option value="1">
                    1
                  </option>

                  <option value="2">
                    2
                  </option>

                  <option value="3">
                    3
                  </option>

                  <option value="4">
                    4
                  </option>

                  <option value="5">
                    5
                  </option>

                  <option value="6">
                    6
                  </option>

                  <option value="10">
                    10
                  </option>

                  <option value="20">
                    20
                  </option>

                </select>

              </div>

              <div className="form-group">

                <label>
                  Delivery Date
                </label>

                <input
                  type="date"
                  name="date"
                  min={today}
                  required
                />

              </div>

            </div>

            {/* DELIVERY ADDRESS */}

            <div className="address-title">
              Delivery Address
            </div>

            <div className="form-group">

              <label>
                House / Building / Flat
              </label>

              <input
                type="text"
                name="house"
                placeholder="House number, flat or building name"
                autoComplete="street-address"
                required
              />

            </div>

            <div className="form-group">

              <label>
                Street / Road / Area
              </label>

              <textarea
                name="street"
                rows="2"
                placeholder="Street, road, colony or locality"
                required
              />

            </div>

            <div className="form-row">

              <div className="form-group">

                <label>
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  autoComplete="address-level2"
                  required
                />

              </div>

              <div className="form-group">

                <label>
                  PIN Code
                </label>

                <input
                  type="tel"
                  name="pincode"
                  placeholder="6-digit PIN"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  maxLength="6"
                  minLength="6"
                  onInput={(e) => {
                    e.target.value =
                      e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 6);
                  }}
                  autoComplete="postal-code"
                  required
                />

              </div>

            </div>

            {/* LANDMARK */}

            <div className="form-group">

              <label>
                Landmark
              </label>

              <input
                type="text"
                name="landmark"
                placeholder="Nearby landmark"
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
              />

            </div>

            {/* SUCCESS MESSAGE */}

            {orderSuccess && (

              <div className="order-success">
                Order details prepared successfully.
                WhatsApp should now be open with your
                order information.
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

              <h1>
                Anvi
              </h1>

              <span>
                BAKERS
              </span>

            </div>

            <p>
              Freshly baked cakes, pastries
              and cookies made with love.
            </p>

            <a
              className="footer-whatsapp"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>

          </div>

          <div className="footer-column">

            <h4>
              Explore
            </h4>

            <a href="#home">
              Home
            </a>

            <a href="#cakes">
              Cakes
            </a>

            <a href="#pastries">
              Pastries
            </a>

            <a href="#cookies">
              Cookies
            </a>

            <a href="#about">
              About Us
            </a>

          </div>

          <div className="footer-column">

            <h4>
              Categories
            </h4>

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

            <h4>
              Contact
            </h4>

            <p>
              +91 9198299898
            </p>

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