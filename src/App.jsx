import { useMemo, useState } from "react";
import "./index.css";

import heroImage from "./assets/images.png";

import chocolateTruffle from "./assets/products/chocolate-truffle.jpg";
import redVelvet from "./assets/products/red-velvet.jpg";
import blackForest from "./assets/products/black-forest.jpg";
import butterscotch from "./assets/products/butterscotch.jpg";
import strawberry from "./assets/products/strawberry.jpg";
import pineapple from "./assets/products/pineapple.jpg";
import vanilla from "./assets/products/vanilla.jpg";
import freshFruit from "./assets/products/fresh-fruit.jpg";
import fondantCake from "./assets/products/fondant-cake.jpg";
import blueberryCake from "./assets/products/blueberry-cake.jpg";
import chocolateCake from "./assets/products/chocolate-cake.jpg";
import whiteForestCake from "./assets/products/white-forest-cake.jpg";

import nankhatai from "./assets/products/nankhatai.jpg";
import chocoChips from "./assets/products/choco-chips.jpg";
import coconutCookies from "./assets/products/coconut.jpg";

import truffleJar from "./assets/products/truffle-jar.jpg";
import redVelvetJar from "./assets/products/red-velvet-jar.jpg";
import vanillaJar from "./assets/products/vanilla-jar.jpg";
import chocolateJar from "./assets/products/chocolate-jar.jpg";

import chocolatePastry from "./assets/products/chocolate-pastry.jpg";
import blackForestPastry from "./assets/products/black-forest-pastry.jpg";
import pineapplePastry from "./assets/products/pineapple-pastry.jpg";
import strawberryPastry from "./assets/products/strawberry-pastry.jpg";
import butterscotchPastry from "./assets/products/butterscotch-pastry.jpg";
import chocolateTrufflePastry from "./assets/products/chocolate-truffle-pastry.jpg";
import brownie from "./assets/products/brownie.jpg";

import chocolateCreamRoll from "./assets/products/chocolate-cream-roll.jpg";
import strawberryCreamRoll from "./assets/products/strawberry-cream-roll.jpg";
import vanillaCreamRoll from "./assets/products/vanilla-cream-roll.jpg";
import pineappleCreamRoll from "./assets/products/pineapple-cream-roll.jpg";

import potatoPatties from "./assets/products/potato-patties.jpg";
import paneerPatties from "./assets/products/paneer-patties.jpg";

import vanillaMuffin from "./assets/products/vanilla-muffin.jpg";
import chocolateMuffin from "./assets/products/chocolate-muffin.jpg";

import sprite from "./assets/products/sprite.jpg";
import thumbsUp from "./assets/products/thumbs-up.jpg";
import maaza from "./assets/products/maaza.jpg";

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

  const cakes = [
    {
      name: "Chocolate Truffle Cake",
      category: "Chocolate Cakes",
      pricePerKg: 900,
      image: chocolateTruffle,
    },
    {
      name: "Red Velvet Cake",
      category: "Premium Cakes",
      pricePerKg: 900,
      image: redVelvet,
    },
    {
      name: "Black Forest Cake",
      category: "Classic Cakes",
      pricePerKg: 600,
      image: blackForest,
    },
    {
      name: "Butterscotch Cake",
      category: "Cream Cakes",
      pricePerKg: 560,
      image: butterscotch,
    },
    {
      name: "Strawberry Cake",
      category: "Fresh Cream Cakes",
      pricePerKg: 560,
      image: strawberry,
    },
    {
      name: "Pineapple Cake",
      category: "Fresh Cream Cakes",
      pricePerKg: 560,
      image: pineapple,
    },
    {
      name: "Vanilla Cake",
      category: "Classic Cakes",
      pricePerKg: 540,
      image: vanilla,
    },
    {
      name: "Fresh Fruit Cake",
      category: "Premium Cakes",
      pricePerKg: 760,
      image: freshFruit,
    },
    {
      name: "Fondant Cake",
      category: "Premium Cakes",
      pricePerKg: 1000,
      image: fondantCake,
    },
    {
      name: "Blueberry Cake",
      category: "Premium Cakes",
      pricePerKg: 600,
      image: blueberryCake,
    },
    {
      name: "Chocolate Cake",
      category: "Chocolate Cakes",
      pricePerKg: 400,
      image: chocolateCake,
    },
    {
      name: "White Forest Cake",
      category: "Classic Cakes",
      pricePerKg: 560,
      image: whiteForestCake,
    },
  ];

  const pastries = [
    {
      name: "Truffle Jar",
      category: "Jar Desserts",
      price: 80,
      image: truffleJar,
    },
    {
      name: "Red Velvet Jar",
      category: "Jar Desserts",
      price: 60,
      image: redVelvetJar,
    },
    {
      name: "Vanilla Jar",
      category: "Jar Desserts",
      price: 50,
      image: vanillaJar,
    },
    {
      name: "Chocolate Jar",
      category: "Jar Desserts",
      price: 60,
      image: chocolateJar,
    },
    {
      name: "Chocolate Pastry",
      category: "Pastries",
      price: 35,
      image: chocolatePastry,
    },
    {
      name: "Black Forest Pastry",
      category: "Pastries",
      price: 35,
      image: blackForestPastry,
    },
    {
      name: "Pineapple Pastry",
      category: "Pastries",
      price: 35,
      image: pineapplePastry,
    },
    {
      name: "Strawberry Pastry",
      category: "Pastries",
      price: 35,
      image: strawberryPastry,
    },
    {
      name: "Butterscotch Pastry",
      category: "Pastries",
      price: 35,
      image: butterscotchPastry,
    },
    {
      name: "Chocolate Truffle Pastry",
      category: "Premium Pastries",
      price: 70,
      image: chocolateTrufflePastry,
    },
    {
      name: "Brownie",
      category: "Brownies",
      price: 30,
      image: brownie,
    },
  ];

  const cookies = [
    {
      name: "Nankhatai",
      category: "Indian Special",
      price: 70,
      image: nankhatai,
    },
    {
      name: "Choco Chips",
      category: "Chocolate",
      price: 80,
      image: chocoChips,
    },
    {
      name: "Coconut Cookies",
      category: "Classic",
      price: 70,
      image: coconutCookies,
    },
  ];

  const creamRolls = [
    {
      name: "Chocolate Cream Roll",
      category: "Cream Rolls",
      price: 30,
      image: chocolateCreamRoll,
    },
    {
      name: "Strawberry Cream Roll",
      category: "Cream Rolls",
      price: 30,
      image: strawberryCreamRoll,
    },
    {
      name: "Vanilla Cream Roll",
      category: "Cream Rolls",
      price: 30,
      image: vanillaCreamRoll,
    },
    {
      name: "Pineapple Cream Roll",
      category: "Cream Rolls",
      price: 30,
      image: pineappleCreamRoll,
    },
  ];

  const patties = [
    {
      name: "Potato Patties",
      category: "Patties",
      price: 25,
      image: potatoPatties,
    },
    {
      name: "Paneer Patties",
      category: "Patties",
      price: 30,
      image: paneerPatties,
    },
  ];

  const muffins = [
    {
      name: "Vanilla Muffin",
      category: "Muffins",
      price: 15,
      image: vanillaMuffin,
    },
    {
      name: "Chocolate Muffin",
      category: "Muffins",
      price: 15,
      image: chocolateMuffin,
    },
  ];

  const coldDrinks = [
    {
      name: "Sprite",
      category: "Cold Drinks",
      price: 110,
      image: sprite,
    },
    {
      name: "Thumbs Up",
      category: "Cold Drinks",
      price: 110,
      image: thumbsUp,
    },
    {
      name: "Maaza",
      category: "Cold Drinks",
      price: 110,
      image: maaza,
    },
  ];

  const allProducts = useMemo(
    () => [
      ...cakes,
      ...pastries,
      ...creamRolls,
      ...patties,
      ...muffins,
      ...cookies,
      ...coldDrinks,
    ],
    []
  );

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

        <span className="fresh-badge">Fresh</span>
      </div>
    );
  };

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

  const handleProductChange = (event) => {
    const productName = event.target.value;

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

  const handleWeightChange = (event) => {
    const weight = event.target.value;

    setSelectedWeight(weight);

    setSelectedPrice(
      calculatePrice(
        selectedItem,
        weight,
        quantity
      )
    );
  };

  const handleQuantityChange = (event) => {
    const qty = event.target.value;

    setQuantity(qty);

    setSelectedPrice(
      calculatePrice(
        selectedItem,
        selectedWeight,
        qty
      )
    );
  };

  const handlePhoneInput = (event) => {
    event.target.value = event.target.value
      .replace(/\D/g, "")
      .slice(0, 10);
  };

  const handlePincodeInput = (event) => {
    event.target.value = event.target.value
      .replace(/\D/g, "")
      .slice(0, 6);
  };

  // ============================================
  // FINAL ORDER HANDLER
  // NO GOOGLE MAPS
  // NO API
  // NO GEOCODING
  // OWNER CONFIRMS DELIVERY CHARGE
  // ============================================

  const handleOrder = (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name")?.trim();
    const phone = formData.get("phone")?.trim();
    const product = formData.get("product");
    const weight = formData.get("weight");
    const qty = formData.get("quantity");
    const date = formData.get("date");
    const deliveryTime =
      formData.get("deliveryTime");

    const house = formData.get("house")?.trim();
    const street = formData.get("street")?.trim();
    const city = formData.get("city")?.trim();
    const pincode =
      formData.get("pincode")?.trim();
    const landmark =
      formData.get("landmark")?.trim();

    const requirements =
      formData
        .get("requirements")
        ?.trim() || "None";

    // -----------------------------
    // VALIDATION
    // -----------------------------

    if (!name || name.length < 2) {
      alert("Please enter a valid name.");
      return;
    }

    if (
      !phone ||
      !/^[6-9]\d{9}$/.test(phone)
    ) {
      alert(
        "Please enter a valid 10-digit Indian mobile number."
      );
      return;
    }

    if (!product || !selectedItem) {
      alert("Please select a product.");
      return;
    }

    if (
      selectedItem.pricePerKg &&
      !weight
    ) {
      alert("Please select cake weight.");
      return;
    }

    const numericQuantity = Number(qty);

    if (
      !Number.isInteger(numericQuantity) ||
      numericQuantity <= 0
    ) {
      alert(
        "Please select a valid quantity."
      );
      return;
    }

    if (!date) {
      alert(
        "Please select a delivery date."
      );
      return;
    }

    if (date < today) {
      alert(
        "Past delivery dates are not allowed."
      );
      return;
    }

    if (!deliveryTime) {
      alert(
        "Please select your preferred delivery time."
      );
      return;
    }

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
      alert(
        "Please enter a valid 6-digit PIN code."
      );
      return;
    }

    const totalAmount =
      calculatePrice(
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

    // -----------------------------
    // START SUBMISSION
    // -----------------------------

    setIsSubmitting(true);

    const weightText =
      selectedItem.pricePerKg
        ? `${selectedWeight} Kg`
        : "Not applicable";

    const completeAddress = [
      house,
      street,
      city,
      `PIN Code: ${pincode}`,
      landmark
        ? `Landmark: ${landmark}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");

    // Delivery charge is intentionally
    // controlled by the bakery owner.
    const deliveryChargeText =
      "To be confirmed by Anvi Bakers";

    const finalTotalText =
      `${formatPrice(totalAmount)} + Delivery Charge`;

    // -----------------------------
    // WHATSAPP MESSAGE
    // -----------------------------

    const message = `Hello Anvi Bakers,

I want to place an order.

━━━━━━━━━━━━━━━━━━
ORDER DETAILS
━━━━━━━━━━━━━━━━━━

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

SUBTOTAL:
${formatPrice(totalAmount)}

DELIVERY CHARGE:
${deliveryChargeText}

FINAL TOTAL:
${finalTotalText}

━━━━━━━━━━━━━━━━━━
DELIVERY DETAILS
━━━━━━━━━━━━━━━━━━

Delivery Date:
${date}

Preferred Delivery Time:
${deliveryTime}

DELIVERY ADDRESS:

${completeAddress}

━━━━━━━━━━━━━━━━━━
SPECIAL REQUIREMENTS
━━━━━━━━━━━━━━━━━━

${requirements}

━━━━━━━━━━━━━━━━━━

Please verify my delivery address and confirm the delivery charge and final order amount.

Thank you.
Anvi Bakers`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    setOrderSuccess(true);

    // Open WhatsApp
    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    setIsSubmitting(false);
  };

  return (
    <div className="app">

    {/* ================= HEADER ================= */}

<header className="navbar">

  <div className="navbar-inner">

    {/* LOGO */}
    <button
      type="button"
      className="logo"
      onClick={() => scrollToSection("home")}
      aria-label="Go to homepage"
    >
      <span className="logo-main">Anvi</span>
      <span className="logo-sub">BAKERS</span>
    </button>


    {/* DESKTOP NAV LINKS */}
    <nav className="nav-links">

      <a href="#home">Home</a>
      <a href="#cakes">Cakes</a>
      <a href="#pastries">Pastries</a>
      <a href="#cream-rolls">Cream Rolls</a>
      <a href="#patties">Patties</a>
      <a href="#muffins">Muffins</a>
      <a href="#cookies">Cookies</a>
      <a href="#cold-drinks">Cold Drinks</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>

    </nav>


    


    {/* MOBILE MENU BUTTON */}
    <button
      type="button"
      className={`mobile-menu-btn ${
        mobileMenuOpen ? "active" : ""
      }`}
      aria-label={
        mobileMenuOpen
          ? "Close menu"
          : "Open menu"
      }
      aria-expanded={mobileMenuOpen}
      onClick={() =>
        setMobileMenuOpen(
          (previous) => !previous
        )
      }
    >
      <span />
      <span />
      <span />
    </button>

  </div>


  {/* MOBILE MENU */}
  <nav
    className={`mobile-menu ${
      mobileMenuOpen ? "open" : ""
    }`}
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
      href="#cream-rolls"
      onClick={() => setMobileMenuOpen(false)}
    >
      Cream Rolls
    </a>

    <a
      href="#patties"
      onClick={() => setMobileMenuOpen(false)}
    >
      Patties
    </a>

    <a
      href="#muffins"
      onClick={() => setMobileMenuOpen(false)}
    >
      Muffins
    </a>

    <a
      href="#cookies"
      onClick={() => setMobileMenuOpen(false)}
    >
      Cookies
    </a>

    <a
      href="#cold-drinks"
      onClick={() => setMobileMenuOpen(false)}
    >
      Cold Drinks
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

    <button
      type="button"
      className="mobile-order-btn"
      onClick={() => {
        setMobileMenuOpen(false);
        scrollToSection("contact");
      }}
    >
      Order Now
    </button>

  </nav>

</header>

{/* ================= MAIN ================= */}
      <main>

        {/* ================= HERO ================= */}

        <section
          id="home"
          className="hero"
        >
          <div className="hero-content">

            <p className="tagline">
              FRESHLY BAKED WITH LOVE
            </p>

            <h1>
              Sweet Moments,
              <br />
              <span>
                Beautifully Baked.
              </span>
            </h1>

            <p className="description">
              Delicious cakes, fresh
              pastries, cream rolls and
              crunchy cookies made
              specially for birthdays,
              anniversaries and every
              special moment.
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
              <strong>
                Fresh
              </strong>

              <span>
                Every Day
              </span>
            </div>
          </div>
        </section>

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
              scrollToSection(
                "cream-rolls"
              )
            }
          >
            Cream Rolls
          </button>

          <button
            type="button"
            onClick={() =>
              scrollToSection("patties")
            }
          >
            Patties
          </button>

          <button
            type="button"
            onClick={() =>
              scrollToSection("muffins")
            }
          >
            Muffins
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
              scrollToSection(
                "cold-drinks"
              )
            }
          >
            Cold Drinks
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
              Cakes For Every{" "}
              <span>
                Celebration
              </span>
            </h2>

            <p className="section-description">
              Choose your favourite cake
              and order it by weight.
            </p>

          </div>

          <div className="product-grid">

            {cakes.map(
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
                          cake.pricePerKg /
                            2
                        )}
                      </strong>{" "}
                      / 500g
                    </p>

                    <button
                      type="button"
                      className="product-order"
                      onClick={() =>
                        selectProduct(
                          cake
                        )
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
              Delicious{" "}
              <span>
                Pastries
              </span>
            </h2>

            <p className="section-description">
              Perfect for a quick sweet
              treat.
            </p>

          </div>

          <div className="product-grid">

            {pastries.map(
              (item, index) => (
                <div
                  className="product-card"
                  key={item.name}
                >
                  <ProductImage
                    item={item}
                    index={
                      index + 100
                    }
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
                        {formatPrice(
                          item.price
                        )}
                      </strong>{" "}
                      / piece
                    </p>

                    <button
                      type="button"
                      className="product-order"
                      onClick={() =>
                        selectProduct(
                          item
                        )
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

        {/* ================= CREAM ROLLS ================= */}

        <section
          id="cream-rolls"
          className="products-section"
        >
          <div className="section-heading">

            <p className="section-tag">
              FRESH CREAM ROLLS
            </p>

            <h2>
              Creamy{" "}
              <span>
                Cream Rolls
              </span>
            </h2>

            <p className="section-description">
              Soft, creamy and freshly
              prepared cream rolls in
              delicious flavours.
            </p>

          </div>

          <div className="product-grid">

            {creamRolls.map(
              (item, index) => (
                <div
                  className="product-card"
                  key={item.name}
                >
                  <ProductImage
                    item={item}
                    index={
                      index + 300
                    }
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
                        {formatPrice(
                          item.price
                        )}
                      </strong>{" "}
                      / piece
                    </p>

                    <button
                      type="button"
                      className="product-order"
                      onClick={() =>
                        selectProduct(
                          item
                        )
                      }
                    >
                      Order Cream Roll
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
              Crunchy &{" "}
              <span>
                Delicious Cookies
              </span>
            </h2>

            <p className="section-description">
              Perfectly baked cookies
              made with premium
              ingredients.
            </p>

          </div>

          <div className="product-grid">

            {cookies.map(
              (item, index) => (
                <div
                  className="product-card"
                  key={item.name}
                >
                  <ProductImage
                    item={item}
                    index={
                      index + 200
                    }
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
                        {formatPrice(
                          item.price
                        )}
                      </strong>{" "}
                      / 250g
                    </p>

                    <button
                      type="button"
                      className="product-order"
                      onClick={() =>
                        selectProduct(
                          item
                        )
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

        {/* ================= PATTIES ================= */}

        <section
          id="patties"
          className="products-section"
        >
          <div className="section-heading">

            <p className="section-tag">
              FRESHLY BAKED
            </p>

            <h2>
              Tasty{" "}
              <span>
                Patties
              </span>
            </h2>

            <p className="section-description">
              Freshly baked savoury
              patties for every
              craving.
            </p>

          </div>

          <div className="product-grid">

            {patties.map(
              (item, index) => (
                <div
                  className="product-card"
                  key={item.name}
                >
                  <ProductImage
                    item={item}
                    index={
                      index + 400
                    }
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
                        {formatPrice(
                          item.price
                        )}
                      </strong>{" "}
                      / piece
                    </p>

                    <button
                      type="button"
                      className="product-order"
                      onClick={() =>
                        selectProduct(
                          item
                        )
                      }
                    >
                      Order Patties
                    </button>

                  </div>
                </div>
              )
            )}

          </div>
        </section>

        {/* ================= MUFFINS ================= */}

        <section
          id="muffins"
          className="products-section alternate-section"
        >
          <div className="section-heading">

            <p className="section-tag">
              FRESH MUFFINS
            </p>

            <h2>
              Soft &{" "}
              <span>
                Delicious Muffins
              </span>
            </h2>

            <p className="section-description">
              Freshly baked muffins
              made for a perfect
              sweet bite.
            </p>

          </div>

          <div className="product-grid">

            {muffins.map(
              (item, index) => (
                <div
                  className="product-card"
                  key={item.name}
                >
                  <ProductImage
                    item={item}
                    index={
                      index + 500
                    }
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
                        {formatPrice(
                          item.price
                        )}
                      </strong>{" "}
                      / piece
                    </p>

                    <button
                      type="button"
                      className="product-order"
                      onClick={() =>
                        selectProduct(
                          item
                        )
                      }
                    >
                      Order Muffin
                    </button>

                  </div>
                </div>
              )
            )}

          </div>
        </section>

        {/* ================= COLD DRINKS ================= */}

        <section
          id="cold-drinks"
          className="products-section"
        >
          <div className="section-heading">

            <p className="section-tag">
              CHILLED DRINKS
            </p>

            <h2>
              Refreshing{" "}
              <span>
                Cold Drinks
              </span>
            </h2>

            <p className="section-description">
              Perfectly chilled drinks
              to enjoy with your
              favourite treats.
            </p>

          </div>

          <div className="product-grid">

            {coldDrinks.map(
              (item, index) => (
                <div
                  className="product-card"
                  key={item.name}
                >
                  <ProductImage
                    item={item}
                    index={
                      index + 600
                    }
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
                        {formatPrice(
                          item.price
                        )}
                      </strong>{" "}
                      / 2 Litre
                    </p>

                    <button
                      type="button"
                      className="product-order"
                      onClick={() =>
                        selectProduct(
                          item
                        )
                      }
                    >
                      Order Drink
                    </button>

                  </div>
                </div>
              )
            )}

          </div>
        </section>

        {/* ================= NOTE ================= */}

        <section className="confectionery-note">
          <div className="section-heading">

            <p className="section-tag">
              ANVI BAKERS
            </p>

            <h2>
              Your One-Stop{" "}
              <span>
                Confectionery Destination
              </span>
            </h2>

            <p className="section-description">
              We offer a wide range of
              confectionery items,
              freshly baked treats and
              refreshing beverages,
              all prepared and selected
              to make every occasion a
              little sweeter.
            </p>

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
              From celebration cakes
              to delicious pastries,
              cream rolls and freshly
              baked cookies, Anvi
              Bakers brings something
              sweet for every occasion.
            </p>

            <p>
              Every product is prepared
              with quality ingredients,
              attention to detail and
              lots of love.
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

        {/* ================= CONTACT / ORDER ================= */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="contact-heading">

            <p className="section-tag">
              PLACE YOUR ORDER
            </p>

            <h2>
              Let's Make Something{" "}
              <span>
                Sweet.
              </span>
            </h2>

            <p>
              Select your product,
              options, quantity,
              delivery date and
              preferred delivery time.
            </p>

          </div>

          <div className="contact-container">

            <div className="contact-info">

              <h3>
                Anvi Bakers
              </h3>

              <p>
                Fresh cakes, pastries,
                cream rolls and cookies
                prepared specially for
                you.
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
  Khanpur Masodha, Ayodhya, Uttar Pradesh
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

            <form
              className="order-form"
              onSubmit={handleOrder}
            >

              {/* NAME + PHONE */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    minLength={2}
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="10-digit mobile number"
                    inputMode="numeric"
                    pattern="[6-9][0-9]{9}"
                    maxLength={10}
                    minLength={10}
                    autoComplete="tel-national"
                    onInput={
                      handlePhoneInput
                    }
                    required
                  />

                </div>

              </div>

              {/* PRODUCT */}

              <div className="form-group">

                <label htmlFor="product">
                  Product
                </label>

                <select
                  id="product"
                  name="product"
                  value={
                    selectedItem?.name ||
                    ""
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
                    {cakes.map(
                      (cake) => (
                        <option
                          key={cake.name}
                          value={
                            cake.name
                          }
                        >
                          {cake.name}
                        </option>
                      )
                    )}
                  </optgroup>

                  <optgroup label="Pastries">
                    {pastries.map(
                      (item) => (
                        <option
                          key={item.name}
                          value={
                            item.name
                          }
                        >
                          {item.name}
                        </option>
                      )
                    )}
                  </optgroup>

                  <optgroup label="Cream Rolls">
                    {creamRolls.map(
                      (item) => (
                        <option
                          key={item.name}
                          value={
                            item.name
                          }
                        >
                          {item.name}
                        </option>
                      )
                    )}
                  </optgroup>

                  <optgroup label="Patties">
                    {patties.map(
                      (item) => (
                        <option
                          key={item.name}
                          value={
                            item.name
                          }
                        >
                          {item.name}
                        </option>
                      )
                    )}
                  </optgroup>

                  <optgroup label="Muffins">
                    {muffins.map(
                      (item) => (
                        <option
                          key={item.name}
                          value={
                            item.name
                          }
                        >
                          {item.name}
                        </option>
                      )
                    )}
                  </optgroup>

                  <optgroup label="Cookies">
                    {cookies.map(
                      (item) => (
                        <option
                          key={item.name}
                          value={
                            item.name
                          }
                        >
                          {item.name}
                        </option>
                      )
                    )}
                  </optgroup>

                  <optgroup label="Cold Drinks">
                    {coldDrinks.map(
                      (item) => (
                        <option
                          key={item.name}
                          value={
                            item.name
                          }
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

                  <label htmlFor="weight">
                    Select Cake Weight
                  </label>

                  <select
                    id="weight"
                    name="weight"
                    value={
                      selectedWeight
                    }
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

                  <label htmlFor="quantity">
                    Quantity
                  </label>

                  <select
                    id="quantity"
                    name="quantity"
                    value={
                      quantity
                    }
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

                  <label htmlFor="date">
                    Delivery Date
                  </label>

                  <input
                    id="date"
                    type="date"
                    name="date"
                    min={today}
                    required
                  />

                </div>

              </div>

              {/* DELIVERY TIME */}

              <div className="form-group">

                <label htmlFor="deliveryTime">
                  Preferred Delivery Time
                </label>

                <select
                  id="deliveryTime"
                  name="deliveryTime"
                  required
                >

                  <option value="">
                    Select Delivery Time
                  </option>

                  <option value="10:00 AM - 11:00 AM">
                    10:00 AM - 11:00 AM
                  </option>

                  <option value="11:00 AM - 12:00 PM">
                    11:00 AM - 12:00 PM
                  </option>

                  <option value="12:00 PM - 1:00 PM">
                    12:00 PM - 1:00 PM
                  </option>

                  <option value="1:00 PM - 2:00 PM">
                    1:00 PM - 2:00 PM
                  </option>

                  <option value="2:00 PM - 3:00 PM">
                    2:00 PM - 3:00 PM
                  </option>

                  <option value="3:00 PM - 4:00 PM">
                    3:00 PM - 4:00 PM
                  </option>

                  <option value="4:00 PM - 5:00 PM">
                    4:00 PM - 5:00 PM
                  </option>

                  <option value="5:00 PM - 6:00 PM">
                    5:00 PM - 6:00 PM
                  </option>

                  <option value="6:00 PM - 7:00 PM">
                    6:00 PM - 7:00 PM
                  </option>

                  <option value="7:00 PM - 8:00 PM">
                    7:00 PM - 8:00 PM
                  </option>

                  <option value="8:00 PM - 9:00 PM">
                    8:00 PM - 9:00 PM
                  </option>

                </select>

              </div>

              {/* ADDRESS */}

              <div className="address-title">
                Delivery Address
              </div>

              <div className="form-group">

                <label htmlFor="house">
                  House / Building / Flat
                </label>

                <input
                  id="house"
                  type="text"
                  name="house"
                  placeholder="House number, flat or building name"
                  autoComplete="street-address"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="street">
                  Street / Road / Area
                </label>

                <textarea
                  id="street"
                  name="street"
                  rows={2}
                  placeholder="Street, road, colony or locality"
                  required
                />

              </div>

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="city">
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    name="city"
                    placeholder="City"
                    autoComplete="address-level2"
                    required
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="pincode">
                    PIN Code
                  </label>

                  <input
                    id="pincode"
                    type="tel"
                    name="pincode"
                    placeholder="6-digit PIN"
                    inputMode="numeric"
                    pattern="[0-9]{6}"
                    maxLength={6}
                    minLength={6}
                    onInput={
                      handlePincodeInput
                    }
                    autoComplete="postal-code"
                    required
                  />

                </div>

              </div>

              <div className="form-group">

                <label htmlFor="landmark">
                  Landmark
                </label>

                <input
                  id="landmark"
                  type="text"
                  name="landmark"
                  placeholder="Nearby landmark"
                />

              </div>

              {/* SUBTOTAL */}

              <div className="selected-price">

                <span>
                  Subtotal
                </span>

                <strong>
                  {selectedPrice > 0
                    ? formatPrice(
                        selectedPrice
                      )
                    : "Select product, options & quantity"}
                </strong>

              </div>

              {/* DELIVERY CHARGE */}

              {selectedPrice > 0 && (
                <div className="delivery-charge-box">

                  <div className="delivery-charge-row">

                    <span>
                      Delivery Charge
                    </span>

                    <strong>
                      To be confirmed
                    </strong>

                  </div>

                  <small>
                    Anvi Bakers will
                    confirm the delivery
                    charge after checking
                    your delivery address.
                  </small>

                </div>
              )}

              {/* FINAL TOTAL */}

              {selectedPrice > 0 && (
                <div className="final-total-box">

                  <span>
                    Final Total
                  </span>

                  <strong>
                    {formatPrice(
                      selectedPrice
                    )}{" "}
                    + Delivery Charge
                  </strong>

                </div>
              )}

              {/* REQUIREMENTS */}

              <div className="form-group">

                <label htmlFor="requirements">
                  Special Requirements
                </label>

                <textarea
                  id="requirements"
                  name="requirements"
                  rows={5}
                  placeholder="Cake message, design, flavour, custom requirements..."
                />

              </div>

              {/* SUCCESS */}

              {orderSuccess && (
                <div className="order-success">

                  Order details prepared
                  successfully.

                  <br />

                  WhatsApp should now be
                  open with your order
                  information.

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

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-brand">

            <button
              type="button"
              className="logo footer-logo"
              onClick={() =>
                scrollToSection("home")
              }
            >

              <span className="logo-main">
                Anvi
              </span>

              <span className="logo-sub">
                BAKERS
              </span>

            </button>

            <p>
              Freshly baked cakes,
              pastries, cream rolls and
              cookies made with love.
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

            <a href="#cream-rolls">
              Cream Rolls
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

            <a href="#cream-rolls">
              Cream Rolls
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
              Khanpur Masodha, Ayodhya, Uttar Pradesh
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