"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 9506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9102);
/* harmony import */ var react_lottie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lottie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const GreetingLottie = ({
  animationPath
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    onClick: () => null,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((react_lottie__WEBPACK_IMPORTED_MODULE_1___default()), {
      options: defaultOptions
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GreetingLottie);

/***/ }),

/***/ 5688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7068);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_iconify_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9356);
/* harmony import */ var react_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6099);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DisplayLottie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9506);
/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4644);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const Skills = () => {
  return _portfolio__WEBPACK_IMPORTED_MODULE_5__/* .skillsSection */ .LO && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Container, {
    className: "text-center my-5 section section-lg",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
      className: "h1",
      children: _portfolio__WEBPACK_IMPORTED_MODULE_5__/* .skillsSection.title */ .LO.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      className: "lead",
      children: _portfolio__WEBPACK_IMPORTED_MODULE_5__/* .skillsSection.subTitle */ .LO.subTitle
    }), _portfolio__WEBPACK_IMPORTED_MODULE_5__/* .skillsSection.data.map */ .LO.data.map((section, index) => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {
        className: "my-5",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
          lg: "6",
          className: "order-2 order-lg-1",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(react_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
            left: true,
            duration: 2000,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_DisplayLottie__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
              animationPath: section.lottieAnimationFile
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {
          lg: "6",
          className: "order-1 order-lg-2",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_reveal__WEBPACK_IMPORTED_MODULE_2__.Fade, {
            right: true,
            duration: 2000,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
              className: "h3 mb-2",
              children: section.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              className: "d-flex justify-content-center flex-wrap mb-2",
              children: section.softwareSkills.map((skill, i) => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                    className: "icon icon-lg icon-shape shadow-sm rounded-circle m-1",
                    id: skill.skillName.replace(/\s/g, ''),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
                      icon: skill.fontAwesomeClassname,
                      "data-inline": "false"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__.UncontrolledTooltip, {
                    delay: 0,
                    placement: "bottom",
                    target: skill.skillName.replace(/\s/g, ''),
                    children: skill.skillName
                  })]
                }, i);
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              children: section.skills.map((skill, i) => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
                  children: skill
                }, i);
              })
            })]
          })
        })]
      }, index);
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

/***/ })

};
;