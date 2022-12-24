"use strict";
exports.id = 519;
exports.ids = [519];
exports.modules = {

/***/ 3519:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ containers_Feedbacks)
});

// EXTERNAL MODULE: ./portfolio.js + 1 modules
var portfolio = __webpack_require__(4644);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "react-reveal"
var external_react_reveal_ = __webpack_require__(9356);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/FeedbackCard.jsx






const FeedbackCard = ({
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_reveal_.Fade, {
    bottom: true,
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
              children: data.name
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "description mt-3",
              children: data.feedback
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const components_FeedbackCard = (FeedbackCard);
;// CONCATENATED MODULE: ./containers/Feedbacks.jsx








const Feedbacks = () => {
  return portfolio/* feedbacks */.KK && /*#__PURE__*/jsx_runtime_.jsx("section", {
    className: "section section-lg",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Container, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "d-flex p-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "fa fa-star text-info"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "pl-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "display-3 text-info",
            children: "Our Clients Feedback"
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
        className: "row-grid align-items-center",
        children: portfolio/* feedbacks.map */.KK.map((data, i) => {
          return /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            lg: 6,
            children: /*#__PURE__*/jsx_runtime_.jsx(components_FeedbackCard, {
              data: data
            })
          }, i);
        })
      })]
    })
  });
};

/* harmony default export */ const containers_Feedbacks = (Feedbacks);

/***/ })

};
;