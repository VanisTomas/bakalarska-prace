(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Category.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Category.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Category */ "./resources/js/apis/Category.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      categories: [],
      loading: false,
      saveLoading: false
    };
  },
  created: function created() {
    this.initCategories();
  },
  methods: {
    initCategories: function initCategories() {
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
                return _apis_Category__WEBPACK_IMPORTED_MODULE_1__["default"].getAll();

              case 4:
                response = _context.sent;
                _this.categories = response.data;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                _this.categories = [];

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
    addCategory: function addCategory() {
      this.categories.push({
        name: ''
      });
    },
    removeCategory: function removeCategory(index) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.saveLoading = true;
                _context2.prev = 1;

                if (!_this2.categories[index].id) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return _apis_Category__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_this2.categories[index].id);

              case 5:
                _this2.categories.splice(index, 1);

                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);

                _this2.$toasted.error('Deleting category failed');

              case 11:
                _this2.saveLoading = false;

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8]]);
      }))();
    },
    saveChanges: function saveChanges(index) {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.saveLoading = true;
                _context3.prev = 1;

                if (!_this3.categories[index].id) {
                  _context3.next = 7;
                  break;
                }

                _context3.next = 5;
                return _apis_Category__WEBPACK_IMPORTED_MODULE_1__["default"].update(_this3.categories[index].id, _this3.categories[index]);

              case 5:
                _context3.next = 11;
                break;

              case 7:
                _context3.next = 9;
                return _apis_Category__WEBPACK_IMPORTED_MODULE_1__["default"].add(_this3.categories[index]);

              case 9:
                response = _context3.sent;
                _this3.categories[index] = response.data;

              case 11:
                _this3.$toasted.success('Changes saved');

                _context3.next = 17;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](1);

                _this3.$toasted.error('Category name cannot be empty');

              case 17:
                _this3.saveLoading = false;

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 14]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Category.vue?vue&type=template&id=91f320c6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Category.vue?vue&type=template&id=91f320c6& ***!
  \************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card-header" }, [_vm._v("Category edit")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _vm.loading
          ? _c("loader")
          : [
              _vm.categories.length
                ? _c(
                    "div",
                    { staticClass: "ajax-form" },
                    [
                      _vm.saveLoading
                        ? _c("loader", { attrs: { absolute: true } })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(category, index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "form-group d-flex" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: category.name,
                                  expression: "category.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                disabled: _vm.saveLoading
                              },
                              domProps: { value: category.name },
                              on: {
                                change: function($event) {
                                  return _vm.saveChanges(index)
                                },
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    category,
                                    "name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger ml-4",
                                attrs: { disabled: _vm.saveLoading },
                                on: {
                                  click: function($event) {
                                    return _vm.removeCategory(index)
                                  }
                                }
                              },
                              [_vm._v("Delete")]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _c("h2", [_vm._v("No categories")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  on: { click: _vm.addCategory }
                },
                [_vm._v("Add category")]
              )
            ]
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

/***/ "./resources/js/views/admin/Category.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/Category.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_vue_vue_type_template_id_91f320c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.vue?vue&type=template&id=91f320c6& */ "./resources/js/views/admin/Category.vue?vue&type=template&id=91f320c6&");
/* harmony import */ var _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Category.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Category_vue_vue_type_template_id_91f320c6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Category_vue_vue_type_template_id_91f320c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Category.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/Category.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Category.vue?vue&type=template&id=91f320c6&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/Category.vue?vue&type=template&id=91f320c6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_91f320c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Category.vue?vue&type=template&id=91f320c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Category.vue?vue&type=template&id=91f320c6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_91f320c6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Category_vue_vue_type_template_id_91f320c6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);