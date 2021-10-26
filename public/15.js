(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");


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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user: {
        name: '',
        surname: '',
        birthdate: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      error: {},
      loading: false
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.validateInputs()) {
                  _context.next = 12;
                  break;
                }

                _this.loading = true;
                _context.prev = 2;
                _context.next = 5;
                return _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].register(_this.user);

              case 5:
                _this.$toasted.success('Registration was successful');

                _this.$router.push('/login');

                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](2);

                if (_context.t0.response.status === 422) {
                  _this.error = _this.parseServerErrors(_context.t0.response.data.errors);
                }

              case 12:
                _this.loading = false;

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 9]]);
      }))();
    },
    validateInputs: function validateInputs() {
      this.error = {};

      if (!this.user.name.trim()) {
        this.error.name = 'Name is required';
      }

      if (!this.user.surname.trim()) {
        this.error.surname = 'Surname is required';
      }

      if (!this.user.birthdate.trim()) {
        this.error.birthdate = 'Birthdate is required';
      }

      if (!this.user.email.trim()) {
        this.error.email = 'Email is required';
      } else if (!this.validateEmail(this.user.email)) {
        this.error.email = 'Email is invalid';
      }

      if (!this.user.password.trim()) {
        this.error.password = 'Password is required';
      } else if (this.user.password.length < 8) {
        this.error.password = 'Password must be at least 8 characters long';
      }

      if (!this.user.password_confirmation.trim()) {
        this.error.password_confirmation = 'Password confirmation is required';
      } else if (this.user.password !== this.user.password_confirmation) {
        this.error.password_confirmation = 'Passwords do not match';
      }

      if (this.isObjectEmpty(this.error)) {
        return true;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
  \******************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card-header" }, [_vm._v("Registration")]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "col-md-6 offset-md-3" }, [
        _c(
          "div",
          { staticClass: "ajax-form" },
          [
            _vm.loading
              ? _c("loader", { attrs: { absolute: true } })
              : _vm._e(),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.register($event)
                  }
                }
              },
              [
                _c(
                  "fieldset",
                  { attrs: { disabled: _vm.loading } },
                  [
                    _c("app-input", {
                      attrs: {
                        type: "text",
                        label: "Name",
                        placeholder: "Name",
                        error: _vm.error.name
                      },
                      model: {
                        value: _vm.user.name,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "name", $$v)
                        },
                        expression: "user.name"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-input", {
                      attrs: {
                        type: "text",
                        label: "Surname",
                        placeholder: "Surname",
                        error: _vm.error.surname
                      },
                      model: {
                        value: _vm.user.surname,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "surname", $$v)
                        },
                        expression: "user.surname"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-input", {
                      attrs: {
                        type: "date",
                        label: "Birthdate",
                        error: _vm.error.birthdate
                      },
                      model: {
                        value: _vm.user.birthdate,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "birthdate", $$v)
                        },
                        expression: "user.birthdate"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-input", {
                      attrs: {
                        type: "email",
                        label: "Email",
                        placeholder: "email@email.com",
                        error: _vm.error.email
                      },
                      model: {
                        value: _vm.user.email,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "email", $$v)
                        },
                        expression: "user.email"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-input", {
                      attrs: {
                        type: "password",
                        label: "Password",
                        placeholder: "**********",
                        error: _vm.error.password
                      },
                      model: {
                        value: _vm.user.password,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "password", $$v)
                        },
                        expression: "user.password"
                      }
                    }),
                    _vm._v(" "),
                    _c("app-input", {
                      attrs: {
                        type: "password",
                        label: "Password confirmation",
                        placeholder: "**********",
                        error: _vm.error.password_confirmation
                      },
                      model: {
                        value: _vm.user.password_confirmation,
                        callback: function($$v) {
                          _vm.$set(_vm.user, "password_confirmation", $$v)
                        },
                        expression: "user.password_confirmation"
                      }
                    }),
                    _vm._v(" "),
                    _c("input", {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit", value: "Register" }
                    })
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Register.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Register.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=3563ad7c& */ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Register.vue?vue&type=template&id=3563ad7c& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=3563ad7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Register.vue?vue&type=template&id=3563ad7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_3563ad7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);