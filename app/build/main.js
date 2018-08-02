/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/src/js/company-profile.js":
/*!***************************************!*\
  !*** ./app/src/js/company-profile.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  if (window.location.href.includes(\"company-profile\")) {\n    var showProfileButtons = document.querySelectorAll(\".show-profile\");\n\n    showProfileButtons.forEach(function (val) {\n      val.addEventListener('click', function (event) {\n        if (event.target.innerText === 'See Profile') {\n          event.target.innerText = 'Hide Profile';\n          event.target.nextSibling.classList.remove('hidden');\n        } else {\n          event.target.innerText = 'See Profile';\n          event.target.nextSibling.classList.add('hidden');\n        }\n      });\n    });\n  }\n})();\n\n//# sourceURL=webpack:///./app/src/js/company-profile.js?");

/***/ }),

/***/ "./app/src/js/header.js":
/*!******************************!*\
  !*** ./app/src/js/header.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar mobileDropdowns = document.querySelectorAll(\".mobile-container .dropdown > a\");\n\nfor (var i = 0; i < mobileDropdowns.length; i++) {\n  mobileDropdowns[i].addEventListener(\"click\", toggleMobileDropdown);\n}\n\nfunction toggleMobileDropdown(e) {\n  e.preventDefault();\n\n  var dropdownContainer = e.target.parentNode;\n\n  if (dropdownContainer.className.includes(\"expanded\")) {\n    dropdownContainer.classList.remove(\"expanded\");\n  } else {\n    dropdownContainer.classList.add(\"expanded\");\n  }\n}\n\n//# sourceURL=webpack:///./app/src/js/header.js?");

/***/ }),

/***/ "./app/src/js/hero-slider.js":
/*!***********************************!*\
  !*** ./app/src/js/hero-slider.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n    // INSERT/MODIFY NEW IMAGES HERE\n    var imageArray = [{\n        src: \"images/hero2.jpg\",\n        actionText: \"See what Reflect can do for you!\",\n        actionButtonText: \"PRODUCT LINES\",\n        anchorHref: \"product-lines.html\",\n        imageObject: null\n    }, {\n        src: \"images/hero3.jpg\",\n        actionText: \"Ever get tired of reading?\",\n        actionButtonText: \"Buy now\",\n        anchorHref: \"product-lines.html\",\n        imageObject: null\n    }, {\n        src: \"images/guy-smiling.jpg\",\n        actionText: \"Yeah buddy?\",\n        actionButtonText: \"Yeah Buddy!\",\n        anchorHref: \"product-lines.html\",\n        imageObject: null\n    }];\n    //Load all images on pageload\n    for (var i = 0; i < imageArray.length; i++) {\n        imageArray[i].imageObject = new Image();\n        imageArray[i].imageObject.src = imageArray[i].src;\n    }\n\n    var heroSliders = document.querySelectorAll('.hero-slider');\n\n    var _loop = function _loop(x) {\n        var heroSlider = heroSliders[x];\n        var dotsContainer = heroSlider.querySelector('.dot-container');\n        var controlsContainer = heroSlider.querySelector('.controls-container');\n\n        var textAction = document.getElementById('actionText');\n        var buttonText = document.getElementById('actionButton');\n\n        var arrows = controlsContainer.getElementsByClassName('arrow');\n        var image = heroSlider.getElementsByTagName('img');\n\n        var numOfSlides = imageArray.length;\n        var currentSlide = 0;\n\n        // hide the slider controls if there's only a single image to display\n        if (numOfSlides <= 1) {\n            dotsContainer.style.display = 'none';\n            arrows[0].style.display = 'none';\n            arrows[1].style.display = 'none';\n        }\n\n        for (var _i = 0; _i < numOfSlides; _i++) {\n\n            var dot = document.createElement('i');\n            dot.className = 'fas fa-circle dot' + (_i === 0 ? ' active' : '');\n            dot.data = _i;\n            dot.addEventListener('click', dotClick);\n            dotsContainer.appendChild(dot);\n        }\n\n        function dotClick(e) {\n            dots[currentSlide].classList.remove('active');\n            currentSlide = e.target.data;\n            fillSlide(currentSlide);\n            dots[currentSlide].classList.add('active');\n        }\n\n        function fillSlide(cur) {\n            textAction.textContent = imageArray[cur].actionText;\n            buttonText.textContent = imageArray[cur].actionButtonText;\n            buttonText.href = imageArray[cur].anchorHref;\n            image[0].src = imageArray[cur].imageObject.src;\n        }\n\n        fillSlide(currentSlide);\n\n        arrows[0].addEventListener('click', changeSlide);\n        arrows[1].addEventListener('click', changeSlide);\n\n        var dots = dotsContainer.childNodes;\n\n        function changeSlide(e) {\n            var arrowClass = e.target.className;\n\n            dots[currentSlide].classList.remove('active');\n\n            if (arrowClass.includes('left') && currentSlide > 0) {\n                currentSlide--;\n            } else if (arrowClass.includes('left') && currentSlide === 0) {\n                currentSlide = numOfSlides - 1;\n            } else if (arrowClass.includes('right') && currentSlide < numOfSlides - 1) {\n                currentSlide++;\n            } else {\n                currentSlide = 0;\n            }\n\n            fillSlide(currentSlide);\n\n            dots[currentSlide].classList.add('active');\n        }\n    };\n\n    for (var x = 0; x < heroSliders.length; x++) {\n        _loop(x);\n    }\n})();\n\n//# sourceURL=webpack:///./app/src/js/hero-slider.js?");

/***/ }),

/***/ "./app/src/js/index.js":
/*!*****************************!*\
  !*** ./app/src/js/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\n__webpack_require__(/*! ./product-slider */ \"./app/src/js/product-slider.js\");\n\n__webpack_require__(/*! ../sass/styles.scss */ \"./app/src/sass/styles.scss\");\n\n__webpack_require__(/*! ./header */ \"./app/src/js/header.js\");\n\n__webpack_require__(/*! ./company-profile */ \"./app/src/js/company-profile.js\");\n\n__webpack_require__(/*! ./hero-slider */ \"./app/src/js/hero-slider.js\");\n\n__webpack_require__(/*! ./releases */ \"./app/src/js/releases.js\");\n\n// No actual JavaScript should be written in this file,\n// this should only be used to import the other JavaScript\n// files and import the main SCSS file for webpack to bundle it\n\n// import './contact-popup'\nif (process.env[\"CRYOMETRIX_BUILD\"] !== \"prod\") {\n  // console.log('-----------------');\n  // console.log('-----------------');\n  // console.log('-----------------');\n  // console.log('ITS NOT PROD, SO IM IMPORTIGN');\n  // console.log('-----------------');\n  // console.log('-----------------');\n  // console.log('-----------------');\n  __webpack_require__(/*! ./watch */ \"./app/src/js/watch.js\");\n}\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./app/src/js/index.js?");

/***/ }),

/***/ "./app/src/js/product-slider.js":
/*!**************************************!*\
  !*** ./app/src/js/product-slider.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function () {\n  var imageSliders = document.querySelectorAll('.image-slider');\n\n  var _loop = function _loop(x) {\n    var imageSlider = imageSliders[x];\n    var dotsContainer = imageSlider.querySelector('.dots');\n    var controlsContainer = imageSlider.querySelector('.control-container');\n\n    var arrows = imageSlider.getElementsByTagName('i');\n    var images = imageSlider.getElementsByTagName('img');\n\n    var slides = [];\n    var numOfSlides = images.length;\n    var currentSlide = 0;\n\n    var minimumHeight = 0;\n\n    // hide the slider controls if there's only a single image to display\n    if (numOfSlides <= 1) {\n      dotsContainer.style.display = 'none';\n      controlsContainer.style.display = 'none';\n    }\n\n    for (var i = 0; i < images.length; i++) {\n      slides.push(images[i].src);\n\n      if (minimumHeight < images[i].naturalHeight) {\n        minimumHeight = images[i].naturalHeight;\n      }\n\n      var dot = document.createElement('i');\n      dot.className = 'fas fa-circle' + (i === 0 ? ' active' : '');\n      dotsContainer.appendChild(dot);\n    }\n\n    // imageSlider.style.minHeight = minimumHeight + 'px';\n\n    var dots = dotsContainer.childNodes;\n\n    arrows[0].addEventListener('click', changeSlide);\n    arrows[1].addEventListener('click', changeSlide);\n\n    function changeSlide(e) {\n      var arrowClass = e.target.className;\n\n      dots[currentSlide].classList.remove('active');\n\n      if (arrowClass.includes('left') && currentSlide > 0) {\n        currentSlide--;\n      } else if (arrowClass.includes('left') && currentSlide === 0) {\n        currentSlide = numOfSlides - 1;\n      } else if (arrowClass.includes('right') && currentSlide < numOfSlides - 1) {\n        currentSlide++;\n      } else {\n        currentSlide = 0;\n      }\n\n      images[0].src = slides[currentSlide];\n\n      dots[currentSlide].classList.add('active');\n    }\n  };\n\n  for (var x = 0; x < imageSliders.length; x++) {\n    _loop(x);\n  }\n})();\n\n//# sourceURL=webpack:///./app/src/js/product-slider.js?");

/***/ }),

/***/ "./app/src/js/releases.js":
/*!********************************!*\
  !*** ./app/src/js/releases.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nif (/releases.html$/.test(window.location.href)) {\n\n    var apiURL = \"http://localhost/reflect-annoucements/wp-json/wp/v2/posts\";\n\n    var postContainer = document.getElementsByClassName('post-container')[0];\n\n    var ajax = new XMLHttpRequest();\n\n    ajax.open('GET', apiURL);\n    ajax.responseType = \"json\";\n\n    ajax.onload = function () {\n        var postArr = [];\n        for (var i = 0; i < ajax.response.length; i++) {\n\n            var aResponse = ajax.response[i];\n\n            var title = aResponse.title.rendered;\n            var dateField = new Date(aResponse.date);\n            var content = aResponse.excerpt.rendered;\n            var post = document.createElement('div');\n            post.classList.add('hidden-post', 'post');\n            post.innerHTML = '\\n            <div> \\n                <h2>' + title + '</h2>\\n                <h3>' + new Intl.DateTimeFormat('en-US').format(dateField) + '</h3>\\n                <div>' + content + '</div>\\n            </div>\\n            ';\n            postContainer.append(post);\n            postArr.push(post);\n        }\n        var fadeEach = function fadeEach(arr) {\n            if (arr.length > 0) {\n                setTimeout(function () {\n                    arr.shift().classList.remove('hidden-post');\n                    fadeEach(arr);\n                }, 700);\n            }\n        };\n        fadeEach(postArr);\n    };\n\n    ajax.send();\n}\n\n//# sourceURL=webpack:///./app/src/js/releases.js?");

/***/ }),

/***/ "./app/src/js/watch.js":
/*!*****************************!*\
  !*** ./app/src/js/watch.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../pug/components/footer.pug */ \"./app/src/pug/components/footer.pug\");\n\n__webpack_require__(/*! ../pug/components/header.pug */ \"./app/src/pug/components/header.pug\");\n\n__webpack_require__(/*! ../pug/index.pug */ \"./app/src/pug/index.pug\");\n\n__webpack_require__(/*! ../pug/contact.pug */ \"./app/src/pug/contact.pug\");\n\n__webpack_require__(/*! ../pug/components/contact-component.pug */ \"./app/src/pug/components/contact-component.pug\");\n\n__webpack_require__(/*! ../pug/thanks.pug */ \"./app/src/pug/thanks.pug\");\n\n__webpack_require__(/*! ../pug/company-profile.pug */ \"./app/src/pug/company-profile.pug\");\n\n__webpack_require__(/*! ../pug/product-lines.pug */ \"./app/src/pug/product-lines.pug\");\n\n__webpack_require__(/*! ../pug/about.pug */ \"./app/src/pug/about.pug\");\n\n__webpack_require__(/*! ../pug/releases.pug */ \"./app/src/pug/releases.pug\");\n\n//# sourceURL=webpack:///./app/src/js/watch.js?");

/***/ }),

/***/ "./app/src/pug/about.pug":
/*!*******************************!*\
  !*** ./app/src/pug/about.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\n  head\\n    title About Reflect Scientific\\n    include components/head\\n  body\\n    include components/header\\n\\n    #wrapper(style=\\\"padding: 20px\\\")\\n        main\\n            p Reflect Scientific, Inc. (OTCBB: RSCF), based in Orem, Utah, develops and markets innovative, proprietary technologies in cryogenic cooling for the healthcare, biotechnology, pharmaceutical, medical, industrial, and transportation markets. Among Reflect Scientific's products are low-temperature freezers and refrigerated containers for laboratory and transportation uses. \\n\\n    #contact-form-popup.contact-popup.hide-contact-form\\n      include components/contact-component\\n    \\n\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/about.pug?");

/***/ }),

/***/ "./app/src/pug/company-profile.pug":
/*!*****************************************!*\
  !*** ./app/src/pug/company-profile.pug ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\n  head\\n    title Company Profile Reflect Scientific\\n    include components/head\\n  body\\n    include components/header\\n\\n    #wrapper\\n        main(style=\\\"padding: 20px 0\\\")\\n            .profiles\\n                .profile\\n                    div\\n                        img(src=\\\"images/profile.png\\\")\\n                        p Kim Boyce\\n                        p CEO, Director\\n                    div\\n                        p Mr. Boyce founded Reflect Scientific in 1993. He has over thirty years of experience in manufacturing, sales, distribution and management of scientific products related to companies in the chemical analysis, semiconductor fabrication and optics industries. \\n                        p His responsibilities have included serving as a Western Regional Sales Manager, OEM Special Accounts Manager, Plant Operations Manager and various other senior management positions within these industries.\\n                .profile\\n                    div\\n                        img(src=\\\"images/profile.png\\\")\\n                        p Thomas Tait\\n                        p Vice President, Director\\n                    div\\n                        p Mr. Tait brings experience with accelerated product development, \\\"lean\\\" process management tools, strategic market analysis and acquisition integration. He joined us from Danaher Company where he was a business manager over a $120 million in sales product line. Mr. Tait was with Danaher from 2002 to 2004, prior to joining Reflect Scientific in 2005. From 1998 to 2002, Mr. Tait was the General Manager of HyperQuan, Inc., in Colorado Springs, Colorado.\\n                        p Prior assignments have included Product Manager J&amp;W Scientific and Project Manager Varian Inc. He also co-founded ChiraTech Inc, a high technology Company that was sold to Thermo Electron Corporation. Mr. Tait holds an MBA in Technology Management from the University of Phoenix and a BS in Chemistry from Clarkson University. He also holds patents in Optics and MEMS technologies.\\n                .profile\\n                    div\\n                        img(src=\\\"images/profile.png\\\")\\n                        p William Moon\\n                        p Vice President of Engineering, Director\\n                    div\\n                        p Mr. Moon's background includes positions of Principle Engineer and VP of Engineering at Quantum Corporation, the world's largest disk drive company, where he was instrumental in growing the company to over 10,000 employees. He also co-founded Plus Development, a wholly owned Quantum subsidiary and played a pivotal role in the invention of the \\\"Hardcard\\\", the very first plug-in hard drive card. Mr. Moon also helped craft a partnership with Panasonic for the world's first totally automated disk drive assembly plant in Japan, which produced over 100 million disk drives over 5 years. \\n                        p Mr. Moon has served on the board of directors of several technical ventures and is presently an active angel investor. He holds 15 patents and has several publications in computer trade magazines. Mr. Moon has a masters and bachelors degree in Mechanical Engineering from BYU, received the BYU Honored Alumni award, and served as an adjunct professor at BYU.\\n                .profile\\n                    div\\n                        img(src=\\\"images/profile.png\\\")\\n                        p Keith Merrell\\n                        p CFO, Secretary/Treasurer\\n                    div \\n                        p Mr. Merrell joined our company in October of 2009. He draws on over 30 years of accounting experience to manage all of our accounting functions and to interface with our independent public accountants. He spent two years in the field of public accounting, and served as Chief Financial Officer or Controller of five companies prior to his joining us. His business career also includes extensive experience in management, sales and marketing, and merger and acquisition. He served as both Chief Financial Officer and Controller of Specialized Health Products International, Inc., a manufacturer of safety medical devices, from 2000 to 2007, and as Vice President-Western Operations for Michelex, an injection molding company with corporate headquarters in New York, from 1998 to 2000. \\n                        p From 1991 to 1998, Mr. Merrell served as Director of Finance for The Duplication Group, planning, implementing, and bringing online the first compact disc manufacturing facility in the intermountain area. He graduated from Arizona State University with a B.S. degree in Accounting.\\n                .profile\\n                    div\\n                        img(src=\\\"images/profile.png\\\")\\n                        p V B Balrai Singh\\n                        p Senior Advisor\\n                    div\\n                        p Mr. Singh, originally from Brunei, has a family heritage in Asia for over 130 years. He started at the age of 18 in the diamond trade and over 25 years built his businesses and gained experience, knowledge and relationships in the Asia Pacific Region and other International markets. He is Chairman of a number of companies and sits as an Advisor on several others. \\n                        p Over the years he has facilitated billion dollar transactions for Sovereign Wealth Funds and family offices in regional and International markets covering various industries such as Telecommunication, Aviation, Medical and Real Estate to name a few. Today Mr. V B Balrai Singh is based in Singapore and oversees a number of companies.\\n\\n    #contact-form-popup.contact-popup.hide-contact-form\\n      include components/contact-component\\n    \\n\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/company-profile.pug?");

/***/ }),

/***/ "./app/src/pug/components/contact-component.pug":
/*!******************************************************!*\
  !*** ./app/src/pug/components/contact-component.pug ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \".contact-form\\n    a(href=\\\"index.html\\\" id=\\\"cancel-btn\\\")\\n        i.fas.fa-times\\n    h1 CONTACT US\\n    p We'd love to answer your questions about our freezers!\\n    form(action=\\\"https://z28up1rg8h.execute-api.us-east-1.amazonaws.com/prod/CryometrixContactHandler\\\", method=\\\"POST\\\")\\n        label.required #[span Name]\\n            input(name=\\\"name\\\" type=\\\"text\\\", required)\\n        label.required #[span Email Address]\\n            input(name=\\\"email\\\" type=\\\"text\\\", required)\\n        label.required #[span Phone Number]\\n            input(name=\\\"phone\\\" type=\\\"text\\\", required)\\n        label Company\\n            input(name=\\\"company\\\" type=\\\"text\\\")\\n        label Message / Question\\n            textarea(name=\\\"message\\\", cols=\\\"30\\\", rows=\\\"5\\\")\\n        div.g-recaptcha(data-sitekey=\\\"6LdZ8VkUAAAAAAOu3yTln3VRZwMeLVf4Vcbpq9UZ\\\")\\n\\n        button(type=\\\"submit\\\") Submit\"\n\n//# sourceURL=webpack:///./app/src/pug/components/contact-component.pug?");

/***/ }),

/***/ "./app/src/pug/components/footer.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/components/footer.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"footer\\r\\n  \\r\\n  .foot-info\\r\\n    .foot-contact\\r\\n      div\\r\\n        p Not seeing what you're looking for? Need something custom? Please reach out, we'd love to work with you!\\r\\n        a(href=\\\"contact.html\\\" id=\\\"send-btn\\\") Contact Us\\r\\n    //- .container-2\\r\\n      a(href=\\\"http://www.reflectscientific.com/\\\" target=\\\"_blank\\\") Reflect Scientific Inc.\\r\\n      p Phone | 801-226-4100 \\r\\n      p Fax &nbsp&nbsp&nbsp&nbsp&nbsp   | 801-226-2885\\r\\n      a(href=\\\"contact.html\\\" id=\\\"email-btn\\\") info@reflectscientific.com\\r\\n  .copyright\\r\\n    h5 &copy; 2018 Reflect Scientific, Inc. All Rights Reserved\\r\\nscript(src=\\\"main.js\\\")\"\n\n//# sourceURL=webpack:///./app/src/pug/components/footer.pug?");

/***/ }),

/***/ "./app/src/pug/components/header.pug":
/*!*******************************************!*\
  !*** ./app/src/pug/components/header.pug ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"header  \\r\\n  nav\\r\\n    div\\r\\n      a(href=\\\"index.html\\\")\\r\\n        img(src=\\\"images/ReflectLogo.png\\\")\\r\\n    div.links\\r\\n      ul\\r\\n        li\\r\\n          a(href=\\\"index.html\\\") Home\\r\\n        li\\r\\n          a(href=\\\"product-lines.html\\\") Product Lines\\r\\n        li\\r\\n          .dropdown\\r\\n            span Corporate Profile #[i.fas.fa-angle-down]\\r\\n            div\\r\\n              a(href=\\\"company-profile.html\\\") Officers &amp; Directors\\r\\n              a(href=\\\"https://finance.yahoo.com/quote/RSCF?ltr=1\\\" target=\\\"_blank\\\") Stock Chart\\r\\n              a(href=\\\"releases.html\\\") Press Releases\\r\\n              a(href=\\\"https://www.sec.gov/cgi-bin/browse-edgar?company=Reflect+Scientific&owner=exclude&action=getcompany\\\" target=\\\"_blank\\\") SEC Documents\\r\\n        li\\r\\n          a(href=\\\"contact.html\\\" id=\\\"contact-btn\\\") Contact Us\\r\\n    .mobile-nav#mobile-nav\\r\\n      a(href=\\\"#mobile-nav\\\") #[i.fas.fa-bars]\\r\\n      .mobile-container\\r\\n        i.fas.fa-times\\r\\n        ul\\r\\n          li.logo #[img(src=\\\"images/ReflectColorRough.jpg\\\")]\\r\\n          li #[a(href=\\\"index.html\\\").nav-item Home]\\r\\n          li #[a(href=\\\"product-lines.html\\\").nav-item Product Lines]\\r\\n          li.dropdown #[a(href=\\\"#\\\").nav-item Corporate Profile#[i.fas.fa-angle-down]]\\r\\n            ul              \\r\\n              li #[a(href=\\\"company-profile.html\\\").nav-item Officers &amp; Directors]\\r\\n              li #[a(href=\\\"https://finance.yahoo.com/quote/RSCF?ltr=1\\\").nav-item Stock Chart]\\r\\n              li #[a(href=\\\"releases.html\\\").nav-item Press Releases]\\r\\n              li #[a(href=\\\"https://www.sec.gov/cgi-bin/browse-edgar?company=Reflect+Scientific&owner=exclude&action=getcompany\\\").nav-item SEC Documents]\\r\\n          li.contact #[a(href=\\\"contact.html\\\" id= \\\"mobile-contact-btn\\\").nav-item Contact Us]\\r\\n        a(href=\\\"#\\\").overlay\\r\\n      \\r\\n      \\r\\n      \\r\\n\"\n\n//# sourceURL=webpack:///./app/src/pug/components/header.pug?");

/***/ }),

/***/ "./app/src/pug/contact.pug":
/*!*********************************!*\
  !*** ./app/src/pug/contact.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    title Contact Us\\r\\n    include components/head\\r\\n    script(src=\\\"https://www.google.com/recaptcha/api.js\\\")\\r\\n  body\\r\\n    include components/header\\r\\n\\r\\n    #wrapper.contact\\r\\n      div\\r\\n        h1 Contact Us\\r\\n        br\\r\\n        p We're always looking to get feedback from our clients, whether they've purchased from us in the past, or are thinking about doing business with us in the future. Please feel free to reach out to us with any questions about our products.\\r\\n        br\\r\\n        br\\r\\n        p You can contact us directly via one of the methods listed below, or you can send us an email by using the form conveniently located on this page. We'll get back to you as soon as possible.\\r\\n        br\\r\\n        br\\r\\n        h3 Address\\r\\n        .info\\r\\n          p Reflect Scientific Inc.\\r\\n          p 1266 South 1380 West   \\r\\n          p Orem, Utah   84058     \\r\\n        br\\r\\n        h3 Email\\r\\n        .info\\r\\n          p #[a(href=\\\"mailto:info@reflectscientific.com\\\") info@reflectscientific.com]\\r\\n        br\\r\\n        h3 Telephone\\r\\n        .info\\r\\n          p (801) 226-4100\\r\\n      include components/contact-component\\r\\n\\r\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/contact.pug?");

/***/ }),

/***/ "./app/src/pug/index.pug":
/*!*******************************!*\
  !*** ./app/src/pug/index.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    title Reflect Scientific\\r\\n    include components/head\\r\\n  body\\r\\n    include components/header\\r\\n\\r\\n    #wrapper\\r\\n        .hero-slider\\r\\n            img(src=\\\"https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/01/df-28509_r2_r-h_2017.jpg\\\", alt=\\\"Banner Image\\\")\\r\\n            .overlay\\r\\n                h1(id=\\\"actionText\\\") PLACEHOLDER\\r\\n                a(href=\\\"#\\\", id=\\\"actionButton\\\") PLACEHOLDER\\r\\n            .controls-container \\r\\n                i(class=\\\"fas fa-angle-left arrow\\\")\\r\\n                .dot-container\\r\\n                i(class=\\\"fas fa-angle-right arrow\\\")\\r\\n        main.home-main-content\\r\\n            .left-column.column\\r\\n                p Reflect Scientific has a vision of technologies for the future. We think technology should make our world cleaner and more energy efficient. We have assembled a product portfolio that does just that - testing for harmful chemicals and saving energy in a range of cooling applications.\\r\\n            .right-column.column\\r\\n                p Reflect Scientific's Cryometrix brand develops and markets innovative/proprietary technologies in cryogenic cooling for the healthcare, biotechnology, pharmaceutical, medical, industrial, and transportation markets. Reflect Scientific's Visacon brand provides the highest quality chromatography products for the life sciences market, ranging from laboratory consumables to UV/VIS instrumentation.\\r\\n\\r\\n    #contact-form-popup.contact-popup.hide-contact-form\\r\\n      include components/contact-component\\r\\n    \\r\\n\\r\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/index.pug?");

/***/ }),

/***/ "./app/src/pug/product-lines.pug":
/*!***************************************!*\
  !*** ./app/src/pug/product-lines.pug ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\n  head\\n    title Product Lines Reflect Scientific\\n    include components/head\\n  body\\n    include components/header\\n\\n    #wrapper\\n        main.product-line-main-content\\n            .product-line.cryometrix\\n                .watermark-logo\\n                    img(src=\\\"images/watermarks/cryometrix.png\\\", alt=\\\"Logo\\\")\\n                .product-image\\n                    img(src=\\\"images/Cryometrix-Logo_white.png\\\", alt=\\\"Logo\\\")\\n                .product-description\\n                    p Cryometrix cooling and refrigeration products use a revolutionary liquid nitrogen technology. Why liquid nitrogen? No compressors, no CFCï¿½s, low energy usage and greatly reduced maintenance. \\n                    br  \\n                    p Want to reduce your cooling costs while improving performance? Take a look at Cryometrix products for your cooling application.\\n                    a(href=\\\"https://cryometrix.com\\\") Visit Site\\n            .product-line.visacon\\n                .watermark-logo\\n                    img(src=\\\"images/watermarks/visacon.png\\\", alt=\\\"Logo\\\")\\n                .product-image\\n                    img(src=\\\"images/visaconlogo_white.png\\\", alt=\\\"Logo\\\")\\n                .product-description\\n                    p The Visacon brand is about providing the highest quality OEM products for chromatography. From laboratory consumables to UV/VIS instrumentation Visacon has quality products at pricing that will allow you to hit your cost targets. \\n                    br  \\n                    p We have 17 years of providing chromatography products to the life sciences markets. Custom manufacturing and packaging are our specialty.\\n                    a(href=\\\"https://visacon.com\\\") Visit Site\\n            .product-line.lcgc\\n                .watermark-logo\\n                    img(class=\\\"lcgc\\\", src=\\\"images/watermarks/lcgc.png\\\", alt=\\\"Logo\\\")\\n                .product-image\\n                    img(src=\\\"images/LCGC_vials_white.png\\\", alt=\\\"Logo\\\")\\n                .product-description\\n                    p Save money buying your supplies directly from the source. All products are made in the USA. They're the same great products you already use, at a fraction of the price.\\n                    a(href=\\\"https://lcgcvials.com/\\\") Visit Site\\n            .product-line.gcferrules\\n                .watermark-logo\\n                    img(src=\\\"images/watermarks/gcferrules.png\\\", alt=\\\"Logo\\\")\\n                .product-image\\n                    img(src=\\\"images/gcferruleslogo_white.png\\\", alt=\\\"Logo\\\")\\n                .product-description\\n                    p GCFerrules.com is located in the United States. We have supplied OEM GC consumables for over 20 years. We strive to provide the best products at the best prices. \\n                    br \\n                    p We have noticed over the years that many large chromatography companies have kept raising their prices higher and higher and don’t really care about the end user or their distributors.\\n                    a(href=\\\"http://gcferrules.com\\\") Visit Site\\n            .product-line.hplcdetectors\\n                .watermark-logo\\n                    img(class=\\\"hplc\\\", src=\\\"images/watermarks/hplc.jpg\\\", alt=\\\"Logo\\\")\\n                .product-image\\n                    img(src=\\\"images/hplcdetectorslogo_white.png\\\", alt=\\\"Logo\\\")\\n                .product-description\\n                    p HPLCDetectors.com offers a range of UV Detectors from variable wavelength analytical units to fixed wavelength compact detectors. All detectors are manufactured and built in the USA to ensure the best quality. \\n                    br \\n                    p Whether you are looking for a detector to integrate into your instrument or a stand-alone unit for the lab, we can help you!\\n                    a(href=\\\"http://hplcdetectors.com/\\\") Visit Site\\n                \\n\\n    #contact-form-popup.contact-popup.hide-contact-form\\n      include components/contact-component\\n    \\n\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/product-lines.pug?");

/***/ }),

/***/ "./app/src/pug/releases.pug":
/*!**********************************!*\
  !*** ./app/src/pug/releases.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    title Press Releases\\r\\n    include components/head\\r\\n  body\\r\\n    include components/header\\r\\n\\r\\n    #wrapper.releases\\r\\n      h1 Press Releases\\r\\n      \\r\\n\\r\\n      .post-container\\r\\n      \\r\\n\\r\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/releases.pug?");

/***/ }),

/***/ "./app/src/pug/thanks.pug":
/*!********************************!*\
  !*** ./app/src/pug/thanks.pug ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"html\\r\\n  head\\r\\n    title Contact Us\\r\\n    include components/head\\r\\n  body\\r\\n    include components/header\\r\\n\\r\\n    #wrapper.thanks\\r\\n        h1 Thanks for reaching out! We'll be in touch soon!\\r\\n\\r\\n    include components/footer\"\n\n//# sourceURL=webpack:///./app/src/pug/thanks.pug?");

/***/ }),

/***/ "./app/src/sass/styles.scss":
/*!**********************************!*\
  !*** ./app/src/sass/styles.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./app/src/sass/styles.scss?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ })

/******/ });