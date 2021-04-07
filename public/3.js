(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductEdit.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['product', 'loading', 'error', 'categories'],
  methods: {
    fileSelected: function fileSelected(value) {
      this.product.image = value;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Product.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Product.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Product */ "./resources/js/apis/Product.js");
/* harmony import */ var _apis_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/Category */ "./resources/js/apis/Category.js");
/* harmony import */ var _components_ProductEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ProductEdit */ "./resources/js/components/ProductEdit.vue");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'product-edit': _components_ProductEdit__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      product: {
        title: '',
        category_id: 0,
        description: '',
        image: null,
        price: 0,
        in_stock: 0
      },
      loading: false,
      error: {},
      saveLoading: false,
      categories: []
    };
  },
  computed: {
    productId: function productId() {
      return this.$route.params.id;
    },
    title: function title() {
      return this.productId ? 'Edit product' : 'Add product';
    },
    showEdit: function showEdit() {
      return !this.loading && !(this.productId && !this.product);
    }
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.loading = true;
              _context.next = 3;
              return _this.initCategories();

            case 3:
              if (!_this.productId) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return _this.initProduct();

            case 6:
              _this.loading = false;

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    initProduct: function initProduct() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _apis_Product__WEBPACK_IMPORTED_MODULE_1__["default"].get(_this2.productId);

              case 3:
                response = _context2.sent;
                _this2.product = response.data;
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                _this2.product = null;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }))();
    },
    initCategories: function initCategories() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _apis_Category__WEBPACK_IMPORTED_MODULE_2__["default"].getAll();

              case 2:
                response = _context3.sent;
                response.data.forEach(function (category) {
                  _this3.categories.push({
                    value: category.id,
                    label: category.name
                  });
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    saveProduct: function saveProduct() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!_this4.validateInputs()) {
                  _context4.next = 18;
                  break;
                }

                _this4.saveLoading = true;
                _context4.prev = 2;

                if (!_this4.productId) {
                  _context4.next = 9;
                  break;
                }

                _context4.next = 6;
                return _apis_Product__WEBPACK_IMPORTED_MODULE_1__["default"].update(_this4.productId, _this4.getFormData(_this4.product));

              case 6:
                _this4.$router.push('/product/' + _this4.productId);

                _context4.next = 12;
                break;

              case 9:
                _context4.next = 11;
                return _apis_Product__WEBPACK_IMPORTED_MODULE_1__["default"].add(_this4.getFormData(_this4.product));

              case 11:
                _this4.$router.push('/admin');

              case 12:
                _this4.$toasted.success('Product was successfully saved');

                _context4.next = 18;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](2);

                if (_context4.t0.response.status === 422) {
                  _this4.error = _this4.parseServerErrors(_context4.t0.response.data.errors);
                }

              case 18:
                _this4.saveLoading = false;

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[2, 15]]);
      }))();
    },
    validateInputs: function validateInputs() {
      this.error = {};

      if (!this.product.title.trim()) {
        this.error.title = 'Title is required';
      }

      if (!this.product.category_id) {
        this.error.category = 'Category is required';
      }

      if (!this.product.description.trim()) {
        this.error.description = 'Description is required';
      }

      if (parseInt(this.product.in_stock) < 0) {
        this.error.in_stock = 'In stock cannot be negative number';
      }

      if (this.isObjectEmpty(this.error)) {
        return true;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductEdit.vue?vue&type=template&id=52d825fe&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductEdit.vue?vue&type=template&id=52d825fe& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "ajax-form" },
    [
      _vm.loading ? _c("loader", { attrs: { absolute: true } }) : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.$emit("saveProduct")
            }
          }
        },
        [
          _c(
            "fieldset",
            { attrs: { disabled: _vm.loading } },
            [
              _c("app-input", {
                attrs: { type: "text", label: "Title", error: _vm.error.title },
                model: {
                  value: _vm.product.title,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "title", $$v)
                  },
                  expression: "product.title"
                }
              }),
              _vm._v(" "),
              _c("app-input", {
                attrs: {
                  type: "select",
                  label: "Category",
                  options: _vm.categories,
                  error: _vm.error.category
                },
                model: {
                  value: _vm.product.category_id,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "category_id", $$v)
                  },
                  expression: "product.category_id"
                }
              }),
              _vm._v(" "),
              _c("app-input", {
                attrs: {
                  type: "textarea",
                  label: "Description",
                  error: _vm.error.description
                },
                model: {
                  value: _vm.product.description,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "description", $$v)
                  },
                  expression: "product.description"
                }
              }),
              _vm._v(" "),
              _c("app-input", {
                attrs: { type: "file", label: "Image", error: _vm.error.image },
                on: { fileSelected: _vm.fileSelected }
              }),
              _vm._v(" "),
              _c("app-input", {
                attrs: { type: "text", label: "Price", error: _vm.error.price },
                model: {
                  value: _vm.product.price,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "price", $$v)
                  },
                  expression: "product.price"
                }
              }),
              _vm._v(" "),
              _c("app-input", {
                attrs: {
                  type: "number",
                  label: "In stock",
                  error: _vm.error.in_stock,
                  min: "0"
                },
                model: {
                  value: _vm.product.in_stock,
                  callback: function($$v) {
                    _vm.$set(_vm.product, "in_stock", $$v)
                  },
                  expression: "product.in_stock"
                }
              }),
              _vm._v(" "),
              _c("input", {
                staticClass: "btn btn-primary",
                attrs: { type: "submit", value: "Save" }
              })
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Product.vue?vue&type=template&id=029d77c0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Product.vue?vue&type=template&id=029d77c0& ***!
  \***********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card-header" }, [_vm._v(_vm._s(_vm.title))]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _vm.loading ? _c("loader") : _vm._e(),
        _vm._v(" "),
        _vm.showEdit
          ? [
              _c("product-edit", {
                attrs: {
                  product: _vm.product,
                  loading: _vm.saveLoading,
                  error: _vm.error,
                  categories: _vm.categories
                },
                on: { saveProduct: _vm.saveProduct }
              })
            ]
          : _vm._e(),
        _vm._v(" "),
        !_vm.product ? _c("h2", [_vm._v("No matching product")]) : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/Category.js":
/*!***************************************!*\
  !*** ./resources/js/apis/Category.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getAll: function getAll() {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/categories');
  },
  add: function add(category) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].post('/categories', category);
  },
  update: function update(id, category) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"].put('/categories/' + id, category);
  },
  "delete": function _delete(id) {
    return _Api__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]('/categories/' + id);
  }
});

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

/***/ "./resources/js/components/ProductEdit.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ProductEdit.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductEdit_vue_vue_type_template_id_52d825fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductEdit.vue?vue&type=template&id=52d825fe& */ "./resources/js/components/ProductEdit.vue?vue&type=template&id=52d825fe&");
/* harmony import */ var _ProductEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductEdit_vue_vue_type_template_id_52d825fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductEdit_vue_vue_type_template_id_52d825fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ProductEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductEdit.vue?vue&type=template&id=52d825fe&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ProductEdit.vue?vue&type=template&id=52d825fe& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_template_id_52d825fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductEdit.vue?vue&type=template&id=52d825fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductEdit.vue?vue&type=template&id=52d825fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_template_id_52d825fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductEdit_vue_vue_type_template_id_52d825fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/admin/Product.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/admin/Product.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_029d77c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product.vue?vue&type=template&id=029d77c0& */ "./resources/js/views/admin/Product.vue?vue&type=template&id=029d77c0&");
/* harmony import */ var _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_029d77c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_vue_vue_type_template_id_029d77c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Product.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Product.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/admin/Product.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Product.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Product.vue?vue&type=template&id=029d77c0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/admin/Product.vue?vue&type=template&id=029d77c0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_029d77c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Product.vue?vue&type=template&id=029d77c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Product.vue?vue&type=template&id=029d77c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_029d77c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_template_id_029d77c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);