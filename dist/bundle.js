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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.css":
/*!****************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_home_homeFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/home/homeFunctions */ "./src/js/home/homeFunctions.js");
/* harmony import */ var _js_post_postFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/post/postFunctions */ "./src/js/post/postFunctions.js");
/* harmony import */ var _js_search_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/search/search */ "./src/js/search/search.js");








var navElements = Array.from(document.getElementsByClassName('nav-link'))
var sections = Array.from(document.getElementsByTagName('section'))

// navigation
navElements.forEach((span) => {
  span.addEventListener('click', (event) => {
    navElements.map((x) => x.parentElement.classList.remove('active'))
    event.target.parentElement.classList.add('active')
    sections.forEach((section) => {
      if (section.id == span.attributes.name.value) {
        section.style.display = 'block'
      } else {
        section.style.display = 'none'
      }
    })
  })
})
// --
Object(_js_home_homeFunctions__WEBPACK_IMPORTED_MODULE_3__["showCards"])()
Object(_js_search_search__WEBPACK_IMPORTED_MODULE_5__["searchHandling"])()
Object(_js_post_postFunctions__WEBPACK_IMPORTED_MODULE_4__["formEventListener"])()


/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/datamodel/country.js":
/*!*************************************!*\
  !*** ./src/js/datamodel/country.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Country; });
class Country {
    constructor(id, name, fullname, dateOfIndependence, populationInMillions, image) {
        this.id = id
        this.name = name
        this.fullname = fullname
        this.dateOfIndependence = dateOfIndependence
        this.populationInMillions = populationInMillions
        this.image = image
    }
    get _id() {
        return this.id;
    }
    get _name() {
        return this.name;
    }
    get _fullname() {
        return this.fullname;
    }
    get _dateOfIndependence() {
        return this.dateOfIndependence;
    }
    get _populationInMillions() {
        return this.populationInMillions;
    }
    get _image() {
        return this.image;
    }
    set _id(id) {
        this.id = id;
    }
    set _name(name) {
        this.name = name;
    }
    set _fullname(fullname) {
        this.fullname = fullname;
    }
    set _dateOfIndependence(dateOfIndependence) {
        this.dateOfIndependence = dateOfIndependence;
    }
    set _populationInMillions(populationInMillions) {
        this.populationInMillions = populationInMillions;
    }
    set _image(image) {
        this.image = image;
    }
}


/***/ }),

/***/ "./src/js/home/homeFunctions.js":
/*!**************************************!*\
  !*** ./src/js/home/homeFunctions.js ***!
  \**************************************/
/*! exports provided: showCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showCards", function() { return showCards; });
/* harmony import */ var _rest_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rest/rest */ "./src/js/rest/rest.js");


const BASE_URL = 'http://localhost:3000'
const cardList = document.getElementById('card_list')

async function showCards() {
    let data = await Object(_rest_rest__WEBPACK_IMPORTED_MODULE_0__["fetchCountries"])()
        if (data.error) return
    data.forEach((item) => {
        addCard(item.name,item.image, item.fullname, item.populationInMillions, item.dateOfIndependence)
    })
}
function addCard(name, url, fullname, popInM, date) {
    cardList.innerHTML += `<div class="card mb-5" style="width: 80%;">
        <div class="card-body">
            <h5 class="card-title display-4" ">${name}</h5>
            <div class="pb-4 p-2">
                <img src="${BASE_URL}/${url}" class="img-fluid" alt="flag" style="width: 15em; height: 10em;"></img>
            </div>
                <h6 class="text-muted font-italic">${fullname}</h6>
            <hr class="my-3">
            <div class="container">
                    <div class="row">
                        <label class="mb-2 text-muted col-md-6"><b>Population in million</b></label>
                        <label class="mb-2 text-muted col-md-6">${popInM}</label>
                    </div>
                    <div class="row">
                        <label class="mb-2 text-muted col-md-6"><b>Date of independence</b></label>
                        <label class="mb-2 text-muted col-md-6">${date}</label>
                    </div>

                </div>
                    </div>
        </div>`
}


/***/ }),

/***/ "./src/js/post/postFunctions.js":
/*!**************************************!*\
  !*** ./src/js/post/postFunctions.js ***!
  \**************************************/
/*! exports provided: formEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formEventListener", function() { return formEventListener; });
/* harmony import */ var _rest_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rest/rest */ "./src/js/rest/rest.js");
/* harmony import */ var _datamodel_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datamodel/country */ "./src/js/datamodel/country.js");


const countryNamePost = document.getElementById("countryNamePost");
const officialNamePost = document.getElementById("officialNamePost");
const dateOfIndependencePost = document.getElementById(
    "dateOfIndependencePost"
);
const popInMilPost = document.getElementById("popInMilPost");
const flagUrlPost = document.getElementById("flagUrlPost");
const form = document.getElementById("nieuw_country");
async function formEventListener() {
    form.addEventListener("submit",(e) => handleEvent(e))
}
async function handleEvent(e) {
    e.preventDefault()
    let length = await Object(_rest_rest__WEBPACK_IMPORTED_MODULE_0__["getLength"])()
    const country = new _datamodel_country__WEBPACK_IMPORTED_MODULE_1__["default"](length + 1,
        countryNamePost.value,
        officialNamePost.value,
        dateOfIndependencePost.value,
        popInMilPost.value,
        flagUrlPost.value)

    let result = await Object(_rest_rest__WEBPACK_IMPORTED_MODULE_0__["postCountry"])(country)
    if (result.postError) {
        document.getElementById("addResult").style.display = "block";
        document.getElementById("addResult").innerHTML =
            '<div class="alert alert-danger" style="display: inline-block; width: 55%;">Het land kon niet toegevoegd worden</div>';
    }
    else {
        console.log(result)
        document.getElementById("addResult").style.display = "block";
        document.getElementById("addResult").innerHTML =
            '<div class="alert alert-success" style="display: inline-block; width: 55%;">Succes! Het land is toegevoegd</div>';
        //refreshSearchTable();
    }
}

/***/ }),

/***/ "./src/js/rest/rest.js":
/*!*****************************!*\
  !*** ./src/js/rest/rest.js ***!
  \*****************************/
/*! exports provided: fetchCountries, getLength, postCountry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCountries", function() { return fetchCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLength", function() { return getLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postCountry", function() { return postCountry; });
/* harmony import */ var _datamodel_country__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datamodel/country */ "./src/js/datamodel/country.js");


const COUNTRIESURL = "http://localhost:3000/countries";

async function fetchCountries() {
    return await (await fetch(COUNTRIESURL).catch((err)=>{
        document.getElementById("fetchError").style.display = "block";
        return new Response(JSON.stringify({error:true}))
    })).json()
}
async function getLength(){
    let data = await fetchCountries()
    if(data.error) return
    return data.length
} 
async function postCountry(country){
    if(!(country instanceof _datamodel_country__WEBPACK_IMPORTED_MODULE_0__["default"]))
        return new Response(JSON.stringify({postError:true}))

    return await (await fetch(COUNTRIESURL,{
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(country)
    }).catch((err)=>{
        return new Response(JSON.stringify({postError:true}))
    })).json()
} 

/***/ }),

/***/ "./src/js/search/search.js":
/*!*********************************!*\
  !*** ./src/js/search/search.js ***!
  \*********************************/
/*! exports provided: searchHandling, fillSearchTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchHandling", function() { return searchHandling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillSearchTable", function() { return fillSearchTable; });
/* harmony import */ var _rest_rest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rest/rest */ "./src/js/rest/rest.js");

const searchItems = document.getElementById("searchItems");
const search = document.getElementById("search");
const BASE_URL = 'http://localhost:3000'

async function searchHandling() {
    let data = await Object(_rest_rest__WEBPACK_IMPORTED_MODULE_0__["fetchCountries"])()
    if (data.error) return
    fillSearchTable(data)
    
    search.addEventListener('input', () => {
        if (search.value.trim().length > 0) {
            searchItems.innerHTML = ''
            const query = data.filter((x) => {
                return (x.name + x.fullname)
                    .toLowerCase()
                    .match(search.value.toLowerCase());
            });
            fillSearchTable(query)
        }
        else{
            searchItems.innerHTML = ''
            fillSearchTable(data)
        }
    })
}
function fillSearchTable(array) {
    for (let index = 0; index < array.length; index++) {
        const obj = array[index];
        searchItems.innerHTML += `<tr>
           <th scope='row'>${index + 1}</th>
           <td>${obj.name}</td>
           <td>${obj.fullname}</td>
           <td>${obj.dateOfIndependence}</td>
           <td>${obj.populationInMillions}</td>
           <td>
              <image src="${BASE_URL}/${
            obj.image
            }" alt="" style="width: 40px; height: 30px;"></image>
           </td>
           </tr>`;
    }
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map