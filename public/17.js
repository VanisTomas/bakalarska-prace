(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrdersTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrdersTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    orders: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      detailsDisplayed: []
    };
  },
  methods: {
    toggleInfo: function toggleInfo(index) {
      if (this.detailsDisplayed[index]) {
        this.$set(this.detailsDisplayed, index, false);
      } else {
        this.$set(this.detailsDisplayed, index, true);
      }
    },
    getUsername: function getUsername(user) {
      return user ? "".concat(user.name, " ").concat(user.surname) : 'Unsigned buyer';
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orders-table[data-v-94f06364] {\n  border-collapse: collapse;\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n.orders-table .orders-head[data-v-94f06364] {\n  display: flex;\n  vertical-align: bottom;\n  border-top: 1px solid #dee2e6;\n  border-bottom: 2px solid #dee2e6;\n  padding: 0.75rem;\n  font-weight: bold;\n}\n.orders-table .orders-head > div[data-v-94f06364] {\n  flex: 1;\n}\n.orders-table .orders-row[data-v-94f06364] {\n  border-top: 1px solid #dee2e6;\n}\n.orders-table .orders-row[data-v-94f06364]:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.orders-table .orders-row .orders-row-header[data-v-94f06364] {\n  display: flex;\n  vertical-align: top;\n  padding: 0.75rem;\n  cursor: pointer;\n}\n.orders-table .orders-row .orders-row-header > div[data-v-94f06364] {\n  flex: 1;\n}\n.orders-table .orders-row .orders-row-header[data-v-94f06364]:hover {\n  background-color: #d6dada;\n}\n.orders-table .orders-row .orders-row-detail[data-v-94f06364] {\n  padding: 1rem;\n}\n.slide-enter-active[data-v-94f06364],\n.slide-leave-active[data-v-94f06364] {\n  transform-origin: top;\n  transition: transform 0.3s ease-in-out;\n}\n.slide-enter-to[data-v-94f06364],\n.slide-leave[data-v-94f06364] {\n  transform: scaleY(1);\n}\n.slide-enter[data-v-94f06364],\n.slide-leave-to[data-v-94f06364] {\n  transform: scaleY(0);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrdersTable.vue?vue&type=template&id=94f06364&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OrdersTable.vue?vue&type=template&id=94f06364&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "orders-table" },
    [
      _c("div", { staticClass: "orders-head" }, [
        _c("div", [_vm._v("Order No.")]),
        _vm._v(" "),
        _vm.admin ? _c("div", [_vm._v("User")]) : _vm._e(),
        _vm._v(" "),
        _c("div", [_vm._v("Date")]),
        _vm._v(" "),
        _c("div", [_vm._v("Amount")]),
        _vm._v(" "),
        _c("div", [_vm._v("Status")])
      ]),
      _vm._v(" "),
      _vm._l(_vm.orders, function(order, index) {
        return _c(
          "div",
          { key: order.id, staticClass: "orders-row" },
          [
            _c(
              "div",
              {
                staticClass: "orders-row-header",
                on: {
                  click: function($event) {
                    return _vm.toggleInfo(index)
                  }
                }
              },
              [
                _c("div", [_vm._v(_vm._s(order.id))]),
                _vm._v(" "),
                _vm.admin
                  ? _c("div", [_vm._v(_vm._s(_vm.getUsername(order.user)))])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", [_vm._v(_vm._s(_vm.dateFormat(order.created_at)))]),
                _vm._v(" "),
                _c("div", [_vm._v(_vm._s(order.amount) + " CZK")]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    class: {
                      "text-success": order.status === "paid",
                      "text-danger": order.status === "cancelled"
                    }
                  },
                  [_vm._v(_vm._s(order.status))]
                )
              ]
            ),
            _vm._v(" "),
            _c("transition", { attrs: { name: "slide" } }, [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.detailsDisplayed[index],
                      expression: "detailsDisplayed[index]"
                    }
                  ],
                  staticClass: "orders-row-detail"
                },
                [
                  _c(
                    "ul",
                    { staticClass: "list-group" },
                    _vm._l(order.product, function(product) {
                      return _c(
                        "li",
                        { key: product.id, staticClass: "list-group-item" },
                        [
                          _c(
                            "div",
                            { staticClass: "d-flex justify-content-between" },
                            [
                              _c("span", [
                                _vm._v(
                                  _vm._s(product.pivot.quantity) +
                                    " x " +
                                    _vm._s(product.title)
                                )
                              ]),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  "Total: " +
                                    _vm._s(
                                      product.pivot.quantity * product.price
                                    ) +
                                    " CZK"
                                )
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-primary mt-1",
                      attrs: { to: "/order/" + order.order_hash }
                    },
                    [_vm._v("Show order detail")]
                  )
                ],
                1
              )
            ])
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/Order.js":
/*!************************************!*\
  !*** ./resources/js/apis/Order.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  createOrder: function createOrder(data) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/orders', data);
  },
  get: function get(hash) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/orders/' + hash);
  },
  getOrders: function getOrders(page) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/orders?page=' + page);
  },
  getAll: function getAll(page) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/orders-admin?page=' + page);
  },
  cancelOrder: function cancelOrder(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/orders/' + id);
  }
});

/***/ }),

/***/ "./resources/js/components/OrdersTable.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/OrdersTable.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OrdersTable_vue_vue_type_template_id_94f06364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrdersTable.vue?vue&type=template&id=94f06364&scoped=true& */ "./resources/js/components/OrdersTable.vue?vue&type=template&id=94f06364&scoped=true&");
/* harmony import */ var _OrdersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrdersTable.vue?vue&type=script&lang=js& */ "./resources/js/components/OrdersTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OrdersTable_vue_vue_type_style_index_0_id_94f06364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true& */ "./resources/js/components/OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OrdersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OrdersTable_vue_vue_type_template_id_94f06364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OrdersTable_vue_vue_type_template_id_94f06364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "94f06364",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OrdersTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OrdersTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/OrdersTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrdersTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_style_index_0_id_94f06364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrdersTable.vue?vue&type=style&index=0&id=94f06364&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_style_index_0_id_94f06364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_style_index_0_id_94f06364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_style_index_0_id_94f06364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_style_index_0_id_94f06364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_style_index_0_id_94f06364_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/OrdersTable.vue?vue&type=template&id=94f06364&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/OrdersTable.vue?vue&type=template&id=94f06364&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_template_id_94f06364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./OrdersTable.vue?vue&type=template&id=94f06364&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OrdersTable.vue?vue&type=template&id=94f06364&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_template_id_94f06364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrdersTable_vue_vue_type_template_id_94f06364_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);