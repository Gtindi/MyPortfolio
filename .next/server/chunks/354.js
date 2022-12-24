"use strict";
exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 3354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Education)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(9356);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/EducationCard.jsx






const EducationCard = ({
  education
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
    left: true,
    duration: 2000,
    children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Card, {
      className: "card-lift--hover shadow mt-4",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.CardBody, {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "d-flex px-3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "pl-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              className: "text-info",
              children: education.schoolName
            }), /*#__PURE__*/jsx_runtime_.jsx("h6", {
              children: education.subHeader
            }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Badge, {
              color: "info",
              className: "mr-1",
              children: education.duration
            }), education.grade && /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Badge, {
              color: "primary",
              className: "mr-1",
              children: education.grade
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "description mt-3",
              children: education.desc
            }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
              children: education.descBullets ? education.descBullets.map(desc => {
                return /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: desc
                }, desc);
              }) : null
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const components_EducationCard = (EducationCard);
// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(4644);
;// CONCATENATED MODULE: ./containers/Education.jsx







const Education = () => {
  return portfolio/* educationInfo */.E5 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "section pb-0 bg-gradient-info my-5",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "d-flex px-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "ni ni-books text-info"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "pl-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "display-3 text-white",
            children: "Education"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
        className: "row-grid align-items-center",
        children: portfolio/* educationInfo.map */.E5.map(info => {
          return /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            className: "order-lg-1",
            lg: "6",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_EducationCard, {
              education: info
            })
          }, info.schoolName);
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "separator separator-bottom separator-skew zindex-100",
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        version: "1.1",
        viewBox: "0 0 2560 100",
        x: "0",
        y: "0",
        children: /*#__PURE__*/jsx_runtime_.jsx("polygon", {
          className: "fill-white",
          points: "2560 0 2560 100 0 100"
        })
      })
    })]
  });
};

/* harmony default export */ const containers_Education = (Education);

/***/ })

};
;