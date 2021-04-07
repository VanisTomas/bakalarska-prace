(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/Product */ "./resources/js/apis/Product.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  props: ['id'],
  data: function data() {
    return {
      product: {},
      loading: false,
      quantity: 1,
      showModal: false
    };
  },
  created: function created() {
    this.initProduct();
  },
  computed: {
    admin: function admin() {
      return this.$store.getters['auth/admin'];
    },
    categoryName: function categoryName() {
      return this.product.category && this.product.category.name ? this.product.category.name : 'Unknown category';
    }
  },
  methods: {
    initProduct: function initProduct() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return _apis_Product__WEBPACK_IMPORTED_MODULE_1__["default"].get(_this.id);

              case 4:
                response = _context.sent;
                _this.product = response.data;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                _this.product = null;

              case 11:
                _this.loading = false;

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }))();
    },
    addToCart: function addToCart() {
      if (parseInt(this.quantity) > 0) {
        this.$store.dispatch('cart/addToCart', {
          product: this.product,
          quantity: parseInt(this.quantity)
        });
        this.$toasted.success('Product was added to cart');
      } else {
        this.$toasted.error('Invalid quantity');
      }
    },
    deleteProduct: function deleteProduct() {
      _apis_Product__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](this.id);
      this.$toasted.success('Product was successfully deleted');
      this.$router.push('/shop');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _vm.loading
          ? _c("loader")
          : [
              !_vm.isObjectEmpty(_vm.product)
                ? [
                    _vm.admin
                      ? _c(
                          "div",
                          { staticClass: "mb-3" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-primary",
                                attrs: {
                                  to: {
                                    name: "admin-product",
                                    params: { id: _vm.id }
                                  }
                                }
                              },
                              [_vm._v("Edit")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger",
                                on: {
                                  click: function($event) {
                                    _vm.showModal = true
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("img", {
                          staticClass: "w-100",
                          attrs: {
                            src: _vm.product.image,
                            alt: "Product Image"
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("h1", [_vm._v(_vm._s(_vm.product.title))]),
                        _vm._v(" "),
                        _c("h3", [_vm._v(_vm._s(_vm.product.price) + " CZK")]),
                        _vm._v(" "),
                        _c(
                          "h5",
                          {
                            class: {
                              "text-success": _vm.product.in_stock > 0,
                              "text-danger": _vm.product.in_stock === 0
                            }
                          },
                          [_vm._v("In stock: " + _vm._s(_vm.product.in_stock))]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.quantity,
                              expression: "quantity"
                            }
                          ],
                          staticClass: "text-center col-sm-1 mr-2 p-1",
                          attrs: { type: "number", min: "1" },
                          domProps: { value: _vm.quantity },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.quantity = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            on: { click: _vm.addToCart }
                          },
                          [_vm._v("Add to Cart")]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mt-2" }, [
                          _vm._v(_vm._s(_vm.categoryName))
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mt-2" }, [
                      _vm._v(_vm._s(_vm.product.description))
                    ])
                  ]
                : _c("h2", [_vm._v("No matching product")])
            ],
        _vm._v(" "),
        _vm.showModal && _vm.admin
          ? _c(
              "modal",
              {
                attrs: { title: "Delete product", confirmation: "Delete" },
                on: {
                  close: function($event) {
                    _vm.showModal = false
                  },
                  confirm: _vm.deleteProduct
                }
              },
              [_vm._v("Are you sure, that you want to delete this product ?")]
            )
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/Product.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Product.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getProducts: function getProducts(page, filter, order_by) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/products?page=' + page, {
      params: {
        filter: filter,
        order_by: order_by
      }
    });
  },
  get: function get(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/products/' + id);
  },
  add: function add(product) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/products', product);
  },
  update: function update(id, product) {
    product.append('_method', 'put');
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/products/' + id, product);
  },
  "delete": function _delete(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/products/' + id);
  },
  getMaxPrice: function getMaxPrice() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/max-price');
  }
});

/***/ }),

/***/ "./resources/js/views/Product.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Product.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=7b8d5cc0& */ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/views/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=7b8d5cc0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Product.vue?vue&type=template&id=7b8d5cc0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_7b8d5cc0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);