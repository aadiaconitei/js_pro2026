/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/scss/styles.scss */ \"./src/assets/scss/styles.scss\");\n/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/main */ \"./src/js/main.ts\");\n/* harmony import */ var _js_nav_sticky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/nav_sticky */ \"./src/js/nav_sticky.ts\");\n/* harmony import */ var _js_nav_sticky__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_nav_sticky__WEBPACK_IMPORTED_MODULE_2__);\n// Import our custom CSS\n\n\n\n\n//# sourceURL=webpack://shopoop/./src/index.ts?\n}");

/***/ },

/***/ "./src/js/components/About.ts"
/*!************************************!*\
  !*** ./src/js/components/About.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   About: () => (/* binding */ About)\n/* harmony export */ });\nclass About {\n  render() {\n    const aboutContainer = document.createElement(\"div\");\n    aboutContainer.innerHTML = `\n        <h1 class=\"text-center py-3\">About Us</h1>\n        <p class=\"text-center\">Welcome to the About page! Here you can learn more about us.</p>\n        <div class=\"about-content\">\n          <p class=\"text-center\">We are passionate about programming and teaching others how to turn ideas into reality.</p>\n          <p class=\"text-center\">Our mission is to provide high-quality education and resources for developers of all levels.</p>\n        </div>\n\n  <div class=\"container\">\n  <div class=\"row gy-3 gy-md-4 gy-lg-4 mb-3\">\n    <div class=\"col-12 col-lg-6\">\n      <div class=\"card bg-light p-3 m-0\">\n        <div class=\"row gy-3 gy-md-0 align-items-md-center\">\n          <div class=\"col-md-5\">\n            <img src=\"./assets/images/about-img-2.jpg\" class=\"img-fluid rounded-start\" alt=\"Why Choose Us?\">\n          </div>\n          <div class=\"col-md-7\">\n            <div class=\"card-body p-0\">\n              <h2 class=\"card-title h4 mb-3\">Why Choose Us?</h2>\n              <p class=\"card-text lead\">With years of experience and deep industry knowledge, we have a proven track record of success and are pushing ourselves to stay ahead of the curve.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n      <div class=\"card bg-light p-3 m-0\">\n        <div class=\"row gy-3 gy-md-0 align-items-md-center\">\n          <div class=\"col-md-5\">\n            <img src=\"./assets/images/about-img-1.jpg\" class=\"img-fluid rounded-start\" alt=\"Visionary Team\">\n          </div>\n          <div class=\"col-md-7\">\n            <div class=\"card-body p-0\">\n              <h2 class=\"card-title h4 mb-3\">Visionary Team</h2>\n              <p class=\"card-text lead\">With a team of visionary engineers, developers, and creative minds, we embark on a journey to transform complex challenges into ingenious technological solutions.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n     <div class=\"col-12 col-lg-6\">\n      <div class=\"card bg-light p-3 m-0\">\n        <div class=\"row gy-3 gy-md-0 align-items-md-center\">\n          <div class=\"col-md-5\">\n            <img src=\"./assets/images/about-img-2.jpg\" class=\"img-fluid rounded-start\" alt=\"Why Choose Us?\">\n          </div>\n          <div class=\"col-md-7\">\n            <div class=\"card-body p-0\">\n              <h2 class=\"card-title h4 mb-3\">Why Choose Us?</h2>\n              <p class=\"card-text lead\">With years of experience and deep industry knowledge, we have a proven track record of success and are pushing ourselves to stay ahead of the curve.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 col-lg-6\">\n      <div class=\"card bg-light p-3 m-0\">\n        <div class=\"row gy-3 gy-md-0 align-items-md-center\">\n          <div class=\"col-md-5\">\n            <img src=\"./assets/images/about-img-1.jpg\" class=\"img-fluid rounded-start\" alt=\"Visionary Team\">\n          </div>\n          <div class=\"col-md-7\">\n            <div class=\"card-body p-0\">\n              <h2 class=\"card-title h4 mb-3\">Visionary Team</h2>\n              <p class=\"card-text lead\">With a team of visionary engineers, developers, and creative minds, we embark on a journey to transform complex challenges into ingenious technological solutions.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n      `;\n    return aboutContainer;\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/About.ts?\n}");

/***/ },

/***/ "./src/js/components/App.ts"
/*!**********************************!*\
  !*** ./src/js/components/App.ts ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/js/components/Component.ts\");\n/* harmony import */ var _ProductList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductList */ \"./src/js/components/ProductList.ts\");\n/* harmony import */ var _CartList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartList */ \"./src/js/components/CartList.ts\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./src/js/components/Header.ts\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"./src/js/components/Footer.ts\");\n/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./About */ \"./src/js/components/About.ts\");\n/* harmony import */ var _ProductDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductDetails */ \"./src/js/components/ProductDetails.ts\");\n\n\n\n\n\n\n\nclass App extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    console.log(\"props.page\", props.page);\n    this.page = props.page || \"home\"; // Determină pagina curentă (default: \"home\")\n  }\n  render() {\n    const appContainer = document.createElement(\"div\");\n    appContainer.innerHTML = `\n      <header></header>\n      <div class=\"cart-div\"></div>\n      <section class=\"bg-dark py-3\">\n          <div class=\"container px-4 px-lg-5 my-3\">\n              <div class=\"text-center text-white\">\n                  <h1 class=\"display-4 fw-bolder\">Shop JavaScript OOP</h1>\n                  <p class=\"lead fw-normal text-white-50 mb-0\">Programarea este ca magia: transformi idei în realitate.</p>\n              </div>\n          </div>\n      </section>\n      <section class=\"py-2\">\n          <div class=\"container px-lg-5 mt-3 wrapper\">\n          </div>\n      </section>\n      <footer class=\"py-5 bg-dark\"></footer>\n    `;\n    // Creează componentele reutilizabile\n    const header = new _Header__WEBPACK_IMPORTED_MODULE_3__.Header({\n      cartContext: this.props.cartContext,\n      siteFname: \"Shop\",\n      siteLname: \"JS OOP\"\n    });\n    const footer = new _Footer__WEBPACK_IMPORTED_MODULE_4__.Footer({\n      siteOwner: \"Adrian Adiaconitei - LinkAcademy\",\n      siteYear: new Date().getFullYear(),\n      siteLink: \"https://link-academy.com\"\n    });\n    // Adaugă header-ul și footer-ul\n    appContainer.querySelector(\"header\")?.appendChild(header.render());\n    appContainer.querySelector(\"footer\")?.appendChild(footer.render());\n    // Adaugă conținut specific paginii\n    const wrapper = appContainer.querySelector(\".wrapper\");\n    if (this.page === \"home\") {\n      if (!this.props.cartContext || !wrapper) {\n        return appContainer;\n      }\n      const productList = new _ProductList__WEBPACK_IMPORTED_MODULE_1__.ProductList({\n        cartContext: this.props.cartContext\n      });\n      const cartList = new _CartList__WEBPACK_IMPORTED_MODULE_2__.CartList({\n        cartContext: this.props.cartContext\n      });\n      productList.mount(wrapper); // Afișează lista de produse\n      appContainer.querySelector(\".cart-div\")?.appendChild(cartList.render()); // Afișează coșul\n    } else if (this.page === \"about\") {\n      if (!wrapper) {\n        return appContainer;\n      }\n      const about = new _About__WEBPACK_IMPORTED_MODULE_5__.About(); // Creează instanța componentei About\n      wrapper.appendChild(about.render()); // Montează componenta About\n    } else if (this.page === \"product\") {\n      if (!wrapper) {\n        return appContainer;\n      }\n      const productDetails = new _ProductDetails__WEBPACK_IMPORTED_MODULE_6__.ProductDetails({\n        cartContext: this.props.cartContext\n      });\n      if (this.props.cartContext) {\n        const cartList = new _CartList__WEBPACK_IMPORTED_MODULE_2__.CartList({\n          cartContext: this.props.cartContext\n        });\n        appContainer.querySelector(\".cart-div\")?.appendChild(cartList.render());\n      }\n      productDetails.mount(wrapper);\n    }\n    return appContainer;\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/App.ts?\n}");

/***/ },

/***/ "./src/js/components/CartItem.ts"
/*!***************************************!*\
  !*** ./src/js/components/CartItem.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartItem: () => (/* binding */ CartItem)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/js/components/Component.ts\");\n\nclass CartItem extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.handleAddToCart = this.handleAddToCart.bind(this);\n    this.handleRemoveToCart = this.handleRemoveToCart.bind(this);\n    this.handleDelete = this.handleDelete.bind(this);\n  }\n  handleDelete() {\n    this.props.cartContext.deleteItem(this.props.item);\n  }\n  handleAddToCart() {\n    this.props.cartContext.addProduct(this.props.item);\n  }\n  handleRemoveToCart() {\n    if (this.props.item.quantity > 1) {\n      this.props.cartContext.rmvProduct(this.props.item);\n    } else {\n      this.props.cartContext.deleteItem(this.props.item);\n    }\n  }\n  render() {\n    const shopCart = document.createElement(\"div\");\n    shopCart.className = \"cart-item\";\n    const priceTimesItem = this.props.item.price * this.props.item.quantity;\n    shopCart.innerHTML = `\n    <div class=\"img-text-cart\">\n      <img src=\"${this.props.item.image}\" width=70px>\n      <h3>${this.props.item.title}</h3>\n    </div>\n    <div class=\"add-qnt-num\">\n      <button class=\"btn-remove-item\"><i class=\"bi bi-dash-square-fill\"></i></button>\n      <span>${this.props.item.quantity}x</span>\n      <button class=\"btn-add-item\"><i class=\"bi bi-plus-square-fill\"></i></button>\n      <button class=\"remove-product\">Remove</button>\n    </div>\n    <span>CA$${priceTimesItem}</span>\n    `;\n    //adicionando eventos para os botoes\n    shopCart.querySelector(\".btn-remove-item\")?.addEventListener(\"click\", this.handleRemoveToCart);\n    shopCart.querySelector(\".btn-add-item\")?.addEventListener(\"click\", this.handleAddToCart);\n    shopCart.querySelector(\".remove-product\")?.addEventListener(\"click\", this.handleDelete);\n    return shopCart;\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/CartItem.ts?\n}");

/***/ },

/***/ "./src/js/components/CartList.ts"
/*!***************************************!*\
  !*** ./src/js/components/CartList.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartList: () => (/* binding */ CartList)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/js/components/Component.ts\");\n/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem */ \"./src/js/components/CartItem.ts\");\n\n\nclass CartList extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      cart: []\n    };\n    this.updateCart = this.updateCart.bind(this);\n    this.props.cartContext.subscribe(this.updateCart);\n    this.cartListUl = null;\n    this.priceSumming = null;\n    this.itemCounting = null;\n  }\n  updateCart(cart) {\n    this.state.cart = cart;\n    if (!this.cartListUl || !this.priceSumming || !this.itemCounting) {\n      return;\n    }\n    this.cartListUl.innerHTML = ``;\n    this.state.cart.forEach(item => {\n      const cartItem = new _CartItem__WEBPACK_IMPORTED_MODULE_1__.CartItem({\n        item,\n        cartContext: this.props.cartContext\n      });\n      this.cartListUl.appendChild(cartItem.render());\n    });\n    this.priceSumming.textContent = `Total Price: $ ${this.props.cartContext.priceSum().toFixed(2)}`;\n    this.itemCounting.textContent = `Total Items: ${this.props.cartContext.countItem()}`;\n  }\n  render() {\n    const cartListElement = document.createElement(\"div\");\n    cartListElement.className = \"cart-list container\";\n    cartListElement.innerHTML = `\n\n    <div class=\"align-cart\">\n      <h2 class=\"text-center mb-4\">My Cart</h2>\n\n      <!-- Header row for cart items -->\n      <div class=\"row text-center fw-bold border-bottom pb-2 mb-3\">\n        <div class=\"col-6 col-md-4\">Product</div>\n        <div class=\"col-3 col-md-4\">Quantity</div>\n        <div class=\"col-3 col-md-4\">Price</div>\n      </div>\n\n      <!-- Cart items -->\n      <ul id=\"cart-item-ul\" class=\"list-unstyled\"></ul>\n    </div>\n    \n    <!-- Total section -->\n    <div class=\"total-div mt-4 p-3 border-top\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <h3 id=\"total-price-text\" class=\"text-start\">Total Price: <span class=\"text-success\"><i class=\"bi bi-currency-euro\"></i> ${this.props.cartContext.priceSum().toFixed(2)}</span></h3>\n        </div>\n        <div class=\"col-6\">\n          <h3 id=\"total-items-text\" class=\"text-end\">Total Items: <span class=\"text-primary\">${this.props.cartContext.countItem()}</span></h3>\n        </div>\n      </div>\n    </div>\n  \n  `;\n    this.cartListUl = cartListElement.querySelector(\"#cart-item-ul\");\n    this.priceSumming = cartListElement.querySelector(\"#total-price-text\");\n    this.itemCounting = cartListElement.querySelector(\"#total-items-text\");\n    return cartListElement;\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/CartList.ts?\n}");

/***/ },

/***/ "./src/js/components/Component.ts"
/*!****************************************!*\
  !*** ./src/js/components/Component.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Component: () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\n  constructor(props = {}) {\n    this.props = props;\n    this.element = null;\n  }\n  render() {\n    throw new Error(\"Component should have a render() method!\");\n  }\n  mount(container) {\n    this.element = this.render();\n    container.appendChild(this.element);\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/Component.ts?\n}");

/***/ },

/***/ "./src/js/components/Footer.ts"
/*!*************************************!*\
  !*** ./src/js/components/Footer.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/js/components/Component.ts\");\n\nclass Footer extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    const footer = document.createElement(\"div\");\n    footer.classList = \"container\";\n    footer.innerHTML = `\n    <p class=\"m-0 text-center text-white\">\n    <img src='./assets/images/logo.png' style=\"max-width: 200px; \">\n    <span>2020 - ${this.props.siteYear} Copyright - ${this.props.siteOwner}. All rights reserved.</span>\n    </p>\n    `;\n    return footer;\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/Footer.ts?\n}");

/***/ },

/***/ "./src/js/components/Header.ts"
/*!*************************************!*\
  !*** ./src/js/components/Header.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/js/components/Component.ts\");\n\nclass Header extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    // Înregistrăm metoda `updateCartCount` ca subscriber la `cartContext`\n    if (this.props.cartContext) {\n      this.props.cartContext.subscribe(() => this.updateCartCount());\n    }\n  }\n  // Metoda care actualizează numărul de produse din badge-ul coșului\n  updateCartCount() {\n    console.log(\"header nr. produse\", this.props.cartContext.countItem());\n    const cartNoElement = document.getElementById(\"cartNo\");\n    if (cartNoElement && this.props.cartContext) {\n      cartNoElement.textContent = String(this.props.cartContext.countItem());\n    }\n  }\n  render() {\n    // Obținem numărul curent de produse din coș\n    const cartItemCount = this.props.cartContext ? this.props.cartContext.countItem() : 0;\n    // Creăm elementul HTML pentru header\n    const header = document.createElement(\"div\");\n    header.innerHTML = `\n      <nav id=\"sticky-top\" class=\"navbar navbar-expand-lg bg-white navbar-light  p-0\">\n        <a href=\"index.html\" class=\"navbar-brand d-flex align-items-center px-4 px-lg-5\">\n           <img src='./assets/images/logo.png' style=\"max-width: 200px;\" alt=\"${this.props.siteFname} ${this.props.siteLname}\">\n        </a>\n        <button type=\"button\" class=\"navbar-toggler me-4\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarCollapse\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n          <div class=\"navbar-nav p-4 p-lg-0\">\n              <a id=\"home-link\" href=\"index.html\" class=\"nav-item nav-link active\">Home</a>\n              <a id=\"about-link\" href=\"about.html\" class=\"nav-item nav-link\">About</a>\n          </div>\n          <button class=\"opening-btn btn btn-outline-dark ms-auto\">\n              <i class=\"bi-cart-fill me-1\"></i>Cart\n              <span id=\"cartNo\" class=\"badge bg-dark text-white ms-1 rounded-pill\">${cartItemCount}</span>\n          </button>\n        </div>\n      </nav>\n    `;\n    // Setăm clasa `active` pe baza paginii curente\n    const currentPath = window.location.pathname;\n    const homeLink = header.querySelector(\"#home-link\");\n    const aboutLink = header.querySelector(\"#about-link\");\n    if (currentPath.includes(\"index.html\") || currentPath === \"/\") {\n      homeLink?.classList.add(\"active\");\n      aboutLink?.classList.remove(\"active\");\n    } else if (currentPath.includes(\"about.html\")) {\n      aboutLink?.classList.add(\"active\");\n      homeLink?.classList.remove(\"active\");\n    }\n    // Adăugăm eveniment pentru deschiderea/închiderea coșului\n    const openingBtn = header.querySelector(\".opening-btn\");\n    openingBtn?.addEventListener(\"click\", e => {\n      e.preventDefault();\n      document.querySelector(\".cart-div\")?.classList.toggle(\"cart-open\");\n    });\n    return header;\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/Header.ts?\n}");

/***/ },

/***/ "./src/js/components/ProductDetails.ts"
/*!*********************************************!*\
  !*** ./src/js/components/ProductDetails.ts ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductDetails: () => (/* binding */ ProductDetails)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/js/components/Component.ts\");\n\nclass ProductDetails extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      product: null,\n      error: null\n    };\n    this.handleAddToCart = this.handleAddToCart.bind(this);\n  }\n  getProductIdFromUrl() {\n    const params = new URLSearchParams(window.location.search);\n    const rawId = params.get(\"id\");\n    if (!rawId) {\n      return null;\n    }\n    const parsedId = Number(rawId);\n    return Number.isNaN(parsedId) ? null : parsedId;\n  }\n  handleAddToCart(event) {\n    event.preventDefault();\n    if (this.props.cartContext && this.state.product) {\n      this.props.cartContext.addProduct(this.state.product);\n    }\n  }\n  mount(container) {\n    const requestedId = this.getProductIdFromUrl();\n    if (requestedId === null) {\n      this.state.error = \"Lipseste id-ul produsului in URL.\";\n      container.appendChild(this.render());\n      return;\n    }\n    fetch(\"/products.json\").then(response => response.json()).then(products => {\n      const foundProduct = products.find(item => item.id === requestedId) || null;\n      this.state.product = foundProduct;\n      if (!foundProduct) {\n        this.state.error = \"Produsul nu a fost gasit.\";\n      }\n      container.appendChild(this.render());\n    }).catch(() => {\n      this.state.error = \"A aparut o eroare la incarcarea produsului.\";\n      container.appendChild(this.render());\n    });\n  }\n  render() {\n    const wrapper = document.createElement(\"div\");\n    if (this.state.error) {\n      wrapper.innerHTML = `\n        <div class=\"alert alert-warning\" role=\"alert\">\n          ${this.state.error}\n        </div>\n        <a href=\"index.html\" class=\"btn btn-outline-dark\">Inapoi la produse</a>\n      `;\n      return wrapper;\n    }\n    if (!this.state.product) {\n      wrapper.innerHTML = `<p>Se incarca detaliile produsului...</p>`;\n      return wrapper;\n    }\n    const product = this.state.product;\n    wrapper.innerHTML = `\n      <div class=\"card border-0 shadow-sm\">\n        <div class=\"row g-0 align-items-center\">\n          <div class=\"col-md-5 text-center p-4\">\n            <img src=\"${product.image}\" alt=\"${product.title}\" class=\"img-fluid\" style=\"max-height: 420px; object-fit: contain;\" />\n          </div>\n          <div class=\"col-md-7 p-4\">\n            <h2 class=\"fw-bold mb-3\">${product.title}</h2>\n            <p class=\"text-muted mb-4\">${product.description}</p>\n            <p class=\"h4 mb-4\"><i class=\"bi bi-currency-euro\"></i> ${product.price.toFixed(2)}</p>\n            <div class=\"d-flex gap-2\">\n              <a href=\"index.html\" class=\"btn btn-outline-dark\">Inapoi la produse</a>\n              <button class=\"add-cart-btn btn btn-success\">Add to Cart <i class=\"bi bi-cart\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    `;\n    wrapper.querySelector(\".add-cart-btn\")?.addEventListener(\"click\", this.handleAddToCart);\n    return wrapper;\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/ProductDetails.ts?\n}");

/***/ },

/***/ "./src/js/components/ProductItem.ts"
/*!******************************************!*\
  !*** ./src/js/components/ProductItem.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductItem: () => (/* binding */ ProductItem)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/js/components/Component.ts\");\n\nclass ProductItem extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.handleAddToCart = this.handleAddToCart.bind(this);\n    this.handleViewDetails = this.handleViewDetails.bind(this);\n  }\n  handleAddToCart(event) {\n    event.preventDefault();\n    this.props.cartContext.addProduct(this.props.product);\n    console.log(\"adauga in cos\", this.props.cartContext.cart);\n  }\n  handleViewDetails(event) {\n    event.preventDefault();\n  }\n  render() {\n    const product = document.createElement(\"div\");\n    product.className = \"col mb-3\";\n    // console.log(this.props.product.id);\n    product.innerHTML = `\n        <div class=\"card h-100\">\n            <!-- Sale badge-->\n            <div class=\"badge bg-dark text-white position-absolute\" style=\"top: 0.5rem; right: 0.5rem\">Sale</div>\n            <!-- Product image-->\n            <img class=\"card-img-top\" src=\"${this.props.product.image}\" alt=\"...\">\n            <!-- Product details-->\n            <div class=\"card-body p-4\">\n                <div class=\"text-center\">\n                    <!-- Product name-->\n                    <h5 class=\"fw-bolder\">${this.props.product.id} ${this.props.product.title}</h5>\n                    <!-- Product price-->\n                    <i class=\"bi bi-currency-euro\"></i> ${this.props.product.price.toFixed(2)}\n                </div>\n            </div>\n            <!-- Product actions-->\n            <div class=\"card-footer p-4 pt-0 border-top-0 bg-transparent d-flex justify-content-between \">\n                <a class=\"btn btn-outline-dark\" href=\"product.html?id=${this.props.product.id}\">View <i class=\"bi bi-three-dots\"></i></a>\n                <a class=\"btn btn-outline-dark text-white add-cart-btn btn btn-success \" href=\"#\">Add to Cart <i class=\"bi bi-cart\"></i></a>\n                 \n            </div>\n        </div>\n\n  `;\n    // Adaugă eveniment pentru butonul \"Add to Cart\"\n    product.querySelector(\".add-cart-btn\")?.addEventListener(\"click\", this.handleAddToCart);\n    // Adaugă eveniment pentru butonul \"Add to Cart\" din modal\n    product.querySelector(\".add-cart-btn-modal\")?.addEventListener(\"click\", this.handleAddToCart);\n    return product;\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/ProductItem.ts?\n}");

/***/ },

/***/ "./src/js/components/ProductList.ts"
/*!******************************************!*\
  !*** ./src/js/components/ProductList.ts ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProductList: () => (/* binding */ ProductList)\n/* harmony export */ });\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/js/components/Component.ts\");\n/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem */ \"./src/js/components/ProductItem.ts\");\n\n\nclass ProductList extends _Component__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      products: []\n    };\n  }\n  mount(container) {\n    fetch(`https://fakestoreapi.com/products`)\n    // fetch(`/products.json`)\n    .then(response => response.json()).then(data => {\n      this.state.products = data;\n      container.appendChild(this.render());\n      // console.log(data)\n    }).catch(err => console.error(err));\n  }\n  render() {\n    const productList = document.createElement(\"div\");\n    productList.className = \"row gx-3 gx-lg-3 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center  product-list\";\n    this.state.products.forEach(product => {\n      const productItem = new _ProductItem__WEBPACK_IMPORTED_MODULE_1__.ProductItem({\n        product,\n        cartContext: this.props.cartContext\n      });\n      // console.log(productItem.render());\n      productList.appendChild(productItem.render());\n    });\n    return productList;\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/components/ProductList.ts?\n}");

/***/ },

/***/ "./src/js/contexts/CartContext.ts"
/*!****************************************!*\
  !*** ./src/js/contexts/CartContext.ts ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext)\n/* harmony export */ });\nclass CartContext {\n  constructor() {\n    this.cart = [];\n    this.listeners = [];\n  }\n  getCart() {\n    return this.cart;\n  }\n  //for product list\n  addProduct(item) {\n    const found = this.cart.find(product => product.id === item.id);\n    if (found) {\n      this.cart = this.cart.map(product => {\n        if (product.id === item.id) {\n          return {\n            ...product,\n            quantity: product.quantity + 1\n          };\n        } else {\n          return product;\n        }\n      });\n    } else {\n      this.cart.push({\n        ...item,\n        quantity: 1\n      });\n    }\n    console.log(\"cart\", this.cart);\n    console.log(\"nr. produse\", this.countItem());\n    this.notifyListeners();\n  }\n  rmvProduct(item) {\n    const found = this.cart.find(product => product.id === item.id);\n    if (found) {\n      this.cart = this.cart.map(product => {\n        if (product.id === item.id) {\n          return {\n            ...product,\n            quantity: Math.max(0, product.quantity - 1)\n          };\n        } else {\n          return product;\n        }\n      });\n    } else {\n      this.cart.push({\n        ...item,\n        quantity: 1\n      });\n    }\n    this.notifyListeners();\n  }\n  deleteItem(item) {\n    this.cart = this.cart.filter(product => product.id !== item.id);\n    this.notifyListeners();\n  }\n  priceSum() {\n    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);\n  }\n  countItem() {\n    return this.cart.reduce((total, item) => total + item.quantity, 0);\n  }\n  // Subscribe (abonare) se referă la procesul prin care un\n  // obiect se înregistrează pentru a primi notificări despre anumite evenimente.\n  subscribe(listener) {\n    console.log(\"Component subscribed\");\n    this.listeners.push(listener);\n    console.log(this.listeners);\n  }\n  // Un listener (ascultător) este o funcție care așteaptă și reacționează la un anumit eveniment.\n  notifyListeners() {\n    console.log(\"notify\");\n    this.listeners.forEach(listener => listener(this.cart));\n  }\n}\n\n//# sourceURL=webpack://shopoop/./src/js/contexts/CartContext.ts?\n}");

/***/ },

/***/ "./src/js/main.ts"
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./src/js/components/App.ts\");\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contexts/CartContext */ \"./src/js/contexts/CartContext.ts\");\n\n\nconst root = document.getElementById(\"app\");\nif (!root) {\n  throw new Error(\"Missing #app root element\");\n}\nconst cartContext = new _contexts_CartContext__WEBPACK_IMPORTED_MODULE_1__.CartContext();\nconst app = new _components_App__WEBPACK_IMPORTED_MODULE_0__.App({\n  cartContext\n});\napp.mount(root);\n\n//# sourceURL=webpack://shopoop/./src/js/main.ts?\n}");

/***/ },

/***/ "./src/js/nav_sticky.ts"
/*!******************************!*\
  !*** ./src/js/nav_sticky.ts ***!
  \******************************/
() {

eval("{\n\n// Sticky Navigation\nwindow.addEventListener(\"scroll\", function () {\n  const stickyTop = document.getElementById(\"sticky-top\");\n  if (!stickyTop) {\n    return;\n  }\n  if (window.scrollY > 250) {\n    stickyTop.classList.add(\"fixed-top\");\n  } else {\n    stickyTop.classList.remove(\"fixed-top\");\n  }\n});\n\n//# sourceURL=webpack://shopoop/./src/js/nav_sticky.ts?\n}");

/***/ },

/***/ "./src/assets/scss/styles.scss"
/*!*************************************!*\
  !*** ./src/assets/scss/styles.scss ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shopoop/./src/assets/scss/styles.scss?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;