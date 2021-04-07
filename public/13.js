(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProfileEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      user: _objectSpread({}, this.$store.getters['auth/user']),
      error: {},
      loading: false
    };
  },
  methods: {
    saveChanges: function saveChanges() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.validateInputs()) {
                  _context.next = 14;
                  break;
                }

                _this.loading = true;
                _context.prev = 2;
                _context.next = 5;
                return _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].update(_this.user);

              case 5:
                response = _context.sent;

                _this.$store.dispatch('auth/updateUser', response.data);

                _this.$toasted.success('Profile was successfully saved');

                _this.$router.push('/profile');

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);

                if (_context.t0.response.status === 422) {
                  _this.error = _this.parseServerErrors(_context.t0.response.data.errors);
                }

              case 14:
                _this.loading = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
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

      if (this.isObjectEmpty(this.error)) {
        return true;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProfileEdit.vue?vue&type=template&id=00afad84&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ProfileEdit.vue?vue&type=template&id=00afad84& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card-body" }, [
      _c(
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
                  return _vm.saveChanges($event)
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
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ProfileEdit.vue":
/*!********************************************!*\
  !*** ./resources/js/views/ProfileEdit.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileEdit_vue_vue_type_template_id_00afad84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=template&id=00afad84& */ "./resources/js/views/ProfileEdit.vue?vue&type=template&id=00afad84&");
/* harmony import */ var _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/ProfileEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileEdit_vue_vue_type_template_id_00afad84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileEdit_vue_vue_type_template_id_00afad84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ProfileEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ProfileEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/ProfileEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProfileEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ProfileEdit.vue?vue&type=template&id=00afad84&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/ProfileEdit.vue?vue&type=template&id=00afad84& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_00afad84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileEdit.vue?vue&type=template&id=00afad84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ProfileEdit.vue?vue&type=template&id=00afad84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_00afad84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileEdit_vue_vue_type_template_id_00afad84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);