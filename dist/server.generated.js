module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Users = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Signup = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n\nvar _Signup2 = _interopRequireDefault(_Signup);\n\nvar _Signin = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n\nvar _Signin2 = _interopRequireDefault(_Signin);\n\nvar _EditProfile = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n\nvar _EditProfile2 = _interopRequireDefault(_EditProfile);\n\nvar _Profile = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nvar _PrivateRoute = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n\nvar _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);\n\nvar _Menu = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _NewMedia = __webpack_require__(/*! ./media/NewMedia */ \"./client/media/NewMedia.js\");\n\nvar _NewMedia2 = _interopRequireDefault(_NewMedia);\n\nvar _PlayMedia = __webpack_require__(/*! ./media/PlayMedia */ \"./client/media/PlayMedia.js\");\n\nvar _PlayMedia2 = _interopRequireDefault(_PlayMedia);\n\nvar _EditMedia = __webpack_require__(/*! ./media/EditMedia */ \"./client/media/EditMedia.js\");\n\nvar _EditMedia2 = _interopRequireDefault(_EditMedia);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainRouter = function (_Component) {\n  _inherits(MainRouter, _Component);\n\n  function MainRouter(_ref) {\n    var data = _ref.data;\n\n    _classCallCheck(this, MainRouter);\n\n    var _this = _possibleConstructorReturn(this, (MainRouter.__proto__ || Object.getPrototypeOf(MainRouter)).call(this));\n\n    _this.data = data;\n    return _this;\n  }\n  // Removes the server-side injected CSS when React component mounts\n\n\n  _createClass(MainRouter, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var jssStyles = document.getElementById('jss-server-side');\n      if (jssStyles && jssStyles.parentNode) {\n        jssStyles.parentNode.removeChild(jssStyles);\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(_Menu2.default, null),\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/users', component: _Users2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/signup', component: _Signup2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/signin', component: _Signin2.default }),\n          _react2.default.createElement(_PrivateRoute2.default, { path: '/user/edit/:userId', component: _EditProfile2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/user/:userId', component: _Profile2.default }),\n          _react2.default.createElement(_PrivateRoute2.default, { path: '/media/new', component: _NewMedia2.default }),\n          _react2.default.createElement(_PrivateRoute2.default, { path: '/media/edit/:mediaId', component: _EditMedia2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/media/:mediaId', render: function render(props) {\n              return _react2.default.createElement(_PlayMedia2.default, _extends({}, props, { data: _this2.data }));\n            } })\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return MainRouter;\n}(_react.Component);\n\nvar _default = MainRouter;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, 'MainRouter', 'G:/Projects/mern-mediastream/client/MainRouter.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/MainRouter.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n  var Component = _ref.component,\n      rest = _objectWithoutProperties(_ref, ['component']);\n\n  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {\n      return _authHelper2.default.isAuthenticated() ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {\n          pathname: '/signin',\n          state: { from: props.location }\n        } });\n    } }));\n};\n\nvar _default = PrivateRoute;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, 'PrivateRoute', 'G:/Projects/mern-mediastream/client/auth/PrivateRoute.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/auth/PrivateRoute.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    title: {\n      marginTop: theme.spacing.unit * 2,\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar Signin = function (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Signin);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signin.__proto__ || Object.getPrototypeOf(Signin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      email: '',\n      password: '',\n      error: '',\n      redirectToReferrer: false\n    }, _this.clickSubmit = function () {\n      var user = {\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n\n      (0, _apiAuth.signin)(user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _authHelper2.default.authenticate(data, function () {\n            _this.setState({ redirectToReferrer: true });\n          });\n        }\n      });\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Signin, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      var _ref2 = this.props.location.state || {\n        from: {\n          pathname: '/'\n        }\n      },\n          from = _ref2.from;\n\n      var redirectToReferrer = this.state.redirectToReferrer;\n\n      if (redirectToReferrer) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });\n      }\n\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Sign In'\n          ),\n          _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Signin;\n}(_react.Component);\n\nSignin.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signin);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/auth/Signin.js');\n  reactHotLoader.register(Signin, 'Signin', 'G:/Projects/mern-mediastream/client/auth/Signin.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/auth/Signin.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar signin = function signin(user) {\n  return fetch('/auth/signin/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include',\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar signout = function signout() {\n  return fetch('/auth/signout/', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.signin = signin;\nexports.signout = signout;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, 'signin', 'G:/Projects/mern-mediastream/client/auth/api-auth.js');\n  reactHotLoader.register(signout, 'signout', 'G:/Projects/mern-mediastream/client/auth/api-auth.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar auth = {\n  isAuthenticated: function isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n  authenticate: function authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n  signout: function signout(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb();\n    //optional\n    (0, _apiAuth.signout)().then(function (data) {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n};\n\nvar _default = auth;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, 'auth', 'G:/Projects/mern-mediastream/client/auth/auth-helper.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/auth/auth-helper.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _MediaList = __webpack_require__(/*! ../media/MediaList */ \"./client/media/MediaList.js\");\n\nvar _MediaList2 = _interopRequireDefault(_MediaList);\n\nvar _apiMedia = __webpack_require__(/*! ../media/api-media.js */ \"./client/media/api-media.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      margin: theme.spacing.unit * 5 + 'px 30px'\n    },\n    title: {\n      padding: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 2.5 + 'px 0px',\n      color: theme.palette.text.secondary,\n      fontSize: '1em'\n    },\n    media: {\n      minHeight: 330\n    }\n  };\n};\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Home);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      media: []\n    }, _this.componentDidMount = function () {\n      (0, _apiMedia.listPopular)().then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.setState({ media: data });\n        }\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'headline', component: 'h2', className: classes.title },\n          'Popular Videos'\n        ),\n        _react2.default.createElement(_MediaList2.default, { media: this.state.media })\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nHome.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Home);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/core/Home.js');\n  reactHotLoader.register(Home, 'Home', 'G:/Projects/mern-mediastream/client/core/Home.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/core/Home.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AppBar = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! material-ui/Toolbar */ \"material-ui/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Home = __webpack_require__(/*! material-ui-icons/Home */ \"material-ui-icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _AddBox = __webpack_require__(/*! material-ui-icons/AddBox */ \"material-ui-icons/AddBox\");\n\nvar _AddBox2 = _interopRequireDefault(_AddBox);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar isActive = function isActive(history, path) {\n  if (history.location.pathname == path) return { color: '#f99085' };else return { color: '#efdcd5' };\n};\nvar Menu = (0, _reactRouterDom.withRouter)(function (_ref) {\n  var history = _ref.history;\n  return _react2.default.createElement(\n    _AppBar2.default,\n    { position: 'static' },\n    _react2.default.createElement(\n      _Toolbar2.default,\n      null,\n      _react2.default.createElement(\n        _Typography2.default,\n        { type: 'title', color: 'inherit' },\n        'MERN Mediastream'\n      ),\n      _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: '/' },\n          _react2.default.createElement(\n            _IconButton2.default,\n            { 'aria-label': 'Home', style: isActive(history, \"/\") },\n            _react2.default.createElement(_Home2.default, null)\n          )\n        )\n      ),\n      _react2.default.createElement(\n        'div',\n        { style: { 'position': 'absolute', 'right': '10px' } },\n        _react2.default.createElement(\n          'span',\n          { style: { 'float': 'right' } },\n          !_authHelper2.default.isAuthenticated() && _react2.default.createElement(\n            'span',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signup' },\n              _react2.default.createElement(\n                _Button2.default,\n                { style: isActive(history, \"/signup\") },\n                'Sign up'\n              )\n            ),\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signin' },\n              _react2.default.createElement(\n                _Button2.default,\n                { style: isActive(history, \"/signin\") },\n                'Sign In'\n              )\n            )\n          ),\n          _authHelper2.default.isAuthenticated() && _react2.default.createElement(\n            'span',\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/media/new' },\n              _react2.default.createElement(\n                _Button2.default,\n                { style: isActive(history, \"/media/new\") },\n                _react2.default.createElement(_AddBox2.default, { style: { marginRight: '8px' } }),\n                ' Add Media'\n              )\n            ),\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: \"/user/\" + _authHelper2.default.isAuthenticated().user._id },\n              _react2.default.createElement(\n                _Button2.default,\n                { style: isActive(history, \"/user/\" + _authHelper2.default.isAuthenticated().user._id) },\n                'My Profile'\n              )\n            ),\n            _react2.default.createElement(\n              _Button2.default,\n              { color: 'inherit', onClick: function onClick() {\n                  _authHelper2.default.signout(function () {\n                    return history.push('/');\n                  });\n                } },\n              'Sign out'\n            )\n          )\n        )\n      )\n    )\n  );\n});\n\nvar _default = Menu;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isActive, 'isActive', 'G:/Projects/mern-mediastream/client/core/Menu.js');\n  reactHotLoader.register(Menu, 'Menu', 'G:/Projects/mern-mediastream/client/core/Menu.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/core/Menu.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/media/DeleteMedia.js":
/*!*************************************!*\
  !*** ./client/media/DeleteMedia.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Delete = __webpack_require__(/*! material-ui-icons/Delete */ \"material-ui-icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiMedia = __webpack_require__(/*! ./api-media.js */ \"./client/media/api-media.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DeleteMedia = function (_Component) {\n  _inherits(DeleteMedia, _Component);\n\n  function DeleteMedia() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, DeleteMedia);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteMedia.__proto__ || Object.getPrototypeOf(DeleteMedia)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      redirect: false,\n      open: false\n    }, _this.clickButton = function () {\n      _this.setState({ open: true });\n    }, _this.deleteMedia = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiMedia.remove)({\n        mediaId: _this.props.mediaId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.setState({ redirect: true });\n        }\n      });\n    }, _this.handleRequestClose = function () {\n      _this.setState({ open: false });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(DeleteMedia, [{\n    key: 'render',\n    value: function render() {\n      var redirect = this.state.redirect;\n      if (redirect) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n      }\n      return _react2.default.createElement(\n        'span',\n        null,\n        _react2.default.createElement(\n          _IconButton2.default,\n          { 'aria-label': 'Delete', onClick: this.clickButton, color: 'secondary' },\n          _react2.default.createElement(_Delete2.default, null)\n        ),\n        _react2.default.createElement(\n          _Dialog2.default,\n          { open: this.state.open, onClose: this.handleRequestClose },\n          _react2.default.createElement(\n            _Dialog.DialogTitle,\n            null,\n            \"Delete \" + this.props.mediaTitle\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogContent,\n            null,\n            _react2.default.createElement(\n              _Dialog.DialogContentText,\n              null,\n              'Confirm to delete ',\n              this.props.mediaTitle,\n              ' from your account.'\n            )\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.handleRequestClose, color: 'primary' },\n              'Cancel'\n            ),\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.deleteMedia, variant: 'raised', color: 'secondary', autoFocus: 'autoFocus' },\n              'Confirm'\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return DeleteMedia;\n}(_react.Component);\n\nDeleteMedia.propTypes = {\n  mediaId: _propTypes2.default.string.isRequired,\n  mediaTitle: _propTypes2.default.string.isRequired\n};\n\nvar _default = DeleteMedia;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteMedia, 'DeleteMedia', 'G:/Projects/mern-mediastream/client/media/DeleteMedia.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/media/DeleteMedia.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/DeleteMedia.js?");

/***/ }),

/***/ "./client/media/EditMedia.js":
/*!***********************************!*\
  !*** ./client/media/EditMedia.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _FileUpload = __webpack_require__(/*! material-ui-icons/FileUpload */ \"material-ui-icons/FileUpload\");\n\nvar _FileUpload2 = _interopRequireDefault(_FileUpload);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiMedia = __webpack_require__(/*! ./api-media.js */ \"./client/media/api-media.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 500,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    title: {\n      margin: theme.spacing.unit * 2,\n      color: theme.palette.protectedTitle,\n      fontSize: '1em'\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    },\n    input: {\n      display: 'none'\n    },\n    filename: {\n      marginLeft: '10px'\n    }\n  };\n};\n\nvar EditMedia = function (_Component) {\n  _inherits(EditMedia, _Component);\n\n  function EditMedia(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, EditMedia);\n\n    var _this = _possibleConstructorReturn(this, (EditMedia.__proto__ || Object.getPrototypeOf(EditMedia)).call(this));\n\n    _this.componentDidMount = function () {\n      (0, _apiMedia.read)({ mediaId: _this.match.params.mediaId }).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ media: data });\n        }\n      });\n    };\n\n    _this.clickSubmit = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiMedia.update)({\n        mediaId: _this.state.media._id\n      }, {\n        t: jwt.token\n      }, _this.state.media).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ error: '', redirect: true, media: data });\n        }\n      });\n    };\n\n    _this.handleChange = function (name) {\n      return function (event) {\n        var updatedMedia = _this.state.media;\n        updatedMedia[name] = event.target.value;\n        _this.setState({ media: updatedMedia });\n      };\n    };\n\n    _this.state = {\n      media: { title: '', description: '', genre: '' },\n      redirect: false,\n      error: ''\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(EditMedia, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      if (this.state.redirect) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/media/' + this.state.media._id });\n      }\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h1', className: classes.title },\n            'Edit Video Details'\n          ),\n          _react2.default.createElement(_TextField2.default, { id: 'title', label: 'Title', className: classes.textField, value: this.state.media.title, onChange: this.handleChange('title'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, {\n            id: 'multiline-flexible',\n            label: 'Description',\n            multiline: true,\n            rows: '2',\n            value: this.state.media.description,\n            onChange: this.handleChange('description'),\n            className: classes.textField,\n            margin: 'normal'\n          }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'genre', label: 'Genre', className: classes.textField, value: this.state.media.genre, onChange: this.handleChange('genre'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return EditMedia;\n}(_react.Component);\n\nEditMedia.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(EditMedia);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/media/EditMedia.js');\n  reactHotLoader.register(EditMedia, 'EditMedia', 'G:/Projects/mern-mediastream/client/media/EditMedia.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/media/EditMedia.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/EditMedia.js?");

/***/ }),

/***/ "./client/media/Media.js":
/*!*******************************!*\
  !*** ./client/media/Media.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Edit = __webpack_require__(/*! material-ui-icons/Edit */ \"material-ui-icons/Edit\");\n\nvar _Edit2 = _interopRequireDefault(_Edit);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactPlayer = __webpack_require__(/*! react-player */ \"react-player\");\n\nvar _reactPlayer2 = _interopRequireDefault(_reactPlayer);\n\nvar _Divider = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _DeleteMedia = __webpack_require__(/*! ./DeleteMedia */ \"./client/media/DeleteMedia.js\");\n\nvar _DeleteMedia2 = _interopRequireDefault(_DeleteMedia);\n\nvar _MediaPlayer = __webpack_require__(/*! ./MediaPlayer */ \"./client/media/MediaPlayer.js\");\n\nvar _MediaPlayer2 = _interopRequireDefault(_MediaPlayer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      padding: '20px'\n    },\n    header: {\n      padding: '0px 16px 16px 12px'\n    },\n    action: {\n      margin: '24px 20px 0px 0px',\n      display: 'inline-block',\n      fontSize: '1.15em',\n      color: theme.palette.secondary.dark\n    },\n    avatar: {\n      color: theme.palette.primary.contrastText,\n      backgroundColor: theme.palette.primary.light\n    }\n  };\n};\n\nvar Media = function (_Component) {\n  _inherits(Media, _Component);\n\n  function Media() {\n    _classCallCheck(this, Media);\n\n    return _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).apply(this, arguments));\n  }\n\n  _createClass(Media, [{\n    key: 'render',\n    value: function render() {\n      var mediaUrl = this.props.media._id ? '/api/media/video/' + this.props.media._id : null;\n      var nextUrl = this.props.nextUrl;\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(_Card.CardHeader, { className: classes.header,\n          title: this.props.media.title,\n          action: _react2.default.createElement(\n            'span',\n            { className: classes.action },\n            this.props.media.views + ' views'\n          ),\n          subheader: this.props.media.genre\n        }),\n        _react2.default.createElement(_MediaPlayer2.default, { srcUrl: mediaUrl, nextUrl: nextUrl, handleAutoplay: this.props.handleAutoplay }),\n        _react2.default.createElement(\n          _List2.default,\n          { dense: true },\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(\n              _List.ListItemAvatar,\n              null,\n              _react2.default.createElement(\n                _Avatar2.default,\n                { className: classes.avatar },\n                this.props.media.postedBy.name && this.props.media.postedBy.name[0]\n              )\n            ),\n            _react2.default.createElement(_List.ListItemText, { primary: this.props.media.postedBy.name,\n              secondary: \"Published on \" + new Date(this.props.media.created).toDateString() }),\n            _authHelper2.default.isAuthenticated().user && _authHelper2.default.isAuthenticated().user._id == this.props.media.postedBy._id && _react2.default.createElement(\n              _List.ListItemSecondaryAction,\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: \"/media/edit/\" + this.props.media._id },\n                _react2.default.createElement(\n                  _IconButton2.default,\n                  { 'aria-label': 'Edit', color: 'secondary' },\n                  _react2.default.createElement(_Edit2.default, null)\n                )\n              ),\n              _react2.default.createElement(_DeleteMedia2.default, { mediaId: this.props.media._id, mediaTitle: this.props.media.title })\n            )\n          ),\n          _react2.default.createElement(_Divider2.default, null),\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(_List.ListItemText, { primary: this.props.media.description })\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Media;\n}(_react.Component);\n\nMedia.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  media: _propTypes2.default.object,\n  nextUrl: _propTypes2.default.string,\n  handleAutoplay: _propTypes2.default.func.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Media);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/media/Media.js');\n  reactHotLoader.register(Media, 'Media', 'G:/Projects/mern-mediastream/client/media/Media.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/media/Media.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/Media.js?");

/***/ }),

/***/ "./client/media/MediaList.js":
/*!***********************************!*\
  !*** ./client/media/MediaList.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _GridList = __webpack_require__(/*! material-ui/GridList */ \"material-ui/GridList\");\n\nvar _GridList2 = _interopRequireDefault(_GridList);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactPlayer = __webpack_require__(/*! react-player */ \"react-player\");\n\nvar _reactPlayer2 = _interopRequireDefault(_reactPlayer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      display: 'flex',\n      flexWrap: 'wrap',\n      justifyContent: 'space-around',\n      overflow: 'hidden',\n      background: theme.palette.background.paper,\n      textAlign: 'left',\n      padding: '8px 16px'\n    },\n    gridList: {\n      width: '100%',\n      minHeight: 180,\n      padding: '0px 0 10px'\n    },\n    title: {\n      padding: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit * 2.5 + 'px ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.openTitle,\n      width: '100%'\n    },\n    tile: {\n      textAlign: 'center',\n      maxHeight: '100%'\n    },\n    tileBar: {\n      backgroundColor: 'rgba(0, 0, 0, 0.72)',\n      textAlign: 'left',\n      height: '55px'\n    },\n    tileTitle: {\n      fontSize: '1.1em',\n      marginBottom: '5px',\n      color: 'rgb(193, 173, 144)',\n      display: \"block\"\n    },\n    tileGenre: {\n      float: 'right',\n      color: 'rgb(193, 182, 164)',\n      marginRight: '8px'\n    }\n  };\n};\n\nvar MediaList = function (_Component) {\n  _inherits(MediaList, _Component);\n\n  function MediaList() {\n    _classCallCheck(this, MediaList);\n\n    return _possibleConstructorReturn(this, (MediaList.__proto__ || Object.getPrototypeOf(MediaList)).apply(this, arguments));\n  }\n\n  _createClass(MediaList, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        { className: classes.root },\n        _react2.default.createElement(\n          _GridList2.default,\n          { className: classes.gridList, cols: 3 },\n          this.props.media.map(function (tile, i) {\n            return _react2.default.createElement(\n              _GridList.GridListTile,\n              { key: i, className: classes.tile },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: \"/media/\" + tile._id },\n                _react2.default.createElement(_reactPlayer2.default, { url: '/api/media/video/' + tile._id, width: '100%', height: 'inherit', style: { maxHeight: '100%' } })\n              ),\n              _react2.default.createElement(_GridList.GridListTileBar, { className: classes.tileBar,\n                title: _react2.default.createElement(\n                  _reactRouterDom.Link,\n                  { to: \"/media/\" + tile._id, className: classes.tileTitle },\n                  ' ',\n                  tile.title,\n                  ' '\n                ),\n                subtitle: _react2.default.createElement(\n                  'span',\n                  null,\n                  _react2.default.createElement(\n                    'span',\n                    null,\n                    tile.views,\n                    ' views'\n                  ),\n                  _react2.default.createElement(\n                    'span',\n                    { className: classes.tileGenre },\n                    _react2.default.createElement(\n                      'em',\n                      null,\n                      tile.genre\n                    )\n                  )\n                )\n              })\n            );\n          })\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return MediaList;\n}(_react.Component);\n\nMediaList.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(MediaList);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/media/MediaList.js');\n  reactHotLoader.register(MediaList, 'MediaList', 'G:/Projects/mern-mediastream/client/media/MediaList.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/media/MediaList.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/MediaList.js?");

/***/ }),

/***/ "./client/media/MediaPlayer.js":
/*!*************************************!*\
  !*** ./client/media/MediaPlayer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"react-dom\");\n\nvar _screenfull = __webpack_require__(/*! screenfull */ \"screenfull\");\n\nvar _screenfull2 = _interopRequireDefault(_screenfull);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactPlayer = __webpack_require__(/*! react-player */ \"react-player\");\n\nvar _reactPlayer2 = _interopRequireDefault(_reactPlayer);\n\nvar _Progress = __webpack_require__(/*! material-ui/Progress */ \"material-ui/Progress\");\n\nvar _Input = __webpack_require__(/*! material-ui/Input */ \"material-ui/Input\");\n\nvar _Input2 = _interopRequireDefault(_Input);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    flex: {\n      display: 'flex'\n    },\n    primaryDashed: {\n      background: 'none',\n      backgroundColor: theme.palette.secondary.main\n    },\n    primaryColor: {\n      backgroundColor: '#6969694f'\n    },\n    dashed: {\n      animation: 'none'\n    },\n    controls: {\n      position: 'relative',\n      backgroundColor: '#ababab52'\n    },\n    rangeRoot: {\n      position: 'absolute',\n      width: '100%',\n      top: '-7px',\n      zIndex: '3456',\n      '-webkit-appearance': 'none',\n      backgroundColor: 'rgba(0,0,0,0)'\n    },\n    videoError: {\n      width: '100%',\n      textAlign: 'center',\n      color: theme.palette.primary.light\n    }\n  };\n};\n\nvar MediaPlayer = function (_Component) {\n  _inherits(MediaPlayer, _Component);\n\n  function MediaPlayer() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, MediaPlayer);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MediaPlayer.__proto__ || Object.getPrototypeOf(MediaPlayer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      playing: true,\n      volume: 0.8,\n      muted: false,\n      played: 0,\n      loaded: 0,\n      duration: 0,\n      ended: false,\n      playbackRate: 1.0,\n      loop: false,\n      fullscreen: false,\n      videoError: false\n    }, _this.componentDidMount = function () {\n      if (_screenfull2.default.enabled) {\n        _screenfull2.default.on('change', function () {\n          var fullscreen = _screenfull2.default.isFullscreen ? true : false;\n          _this.setState({ fullscreen: fullscreen });\n        });\n      }\n    }, _this.setVolume = function (e) {\n      _this.setState({ volume: parseFloat(e.target.value) });\n    }, _this.toggleMuted = function () {\n      _this.setState({ muted: !_this.state.muted });\n    }, _this.playPause = function () {\n      _this.setState({ playing: !_this.state.playing });\n    }, _this.onLoop = function () {\n      _this.setState({ loop: !_this.state.loop });\n    }, _this.onProgress = function (progress) {\n      // We only want to update time slider if we are not currently seeking\n      if (!_this.state.seeking) {\n        _this.setState({ played: progress.played, loaded: progress.loaded });\n      }\n    }, _this.onClickFullscreen = function () {\n      _screenfull2.default.request((0, _reactDom.findDOMNode)(_this.player));\n    }, _this.onEnded = function () {\n      if (_this.state.loop) {\n        _this.setState({ playing: true });\n      } else {\n        _this.props.handleAutoplay(function () {\n          _this.setState({ ended: true, playing: false });\n        });\n      }\n    }, _this.onDuration = function (duration) {\n      _this.setState({ duration: duration });\n    }, _this.onSeekMouseDown = function (e) {\n      _this.setState({ seeking: true });\n    }, _this.onSeekChange = function (e) {\n      _this.setState({ played: parseFloat(e.target.value), ended: parseFloat(e.target.value) >= 1 });\n    }, _this.onSeekMouseUp = function (e) {\n      _this.setState({ seeking: false });\n      _this.player.seekTo(parseFloat(e.target.value));\n    }, _this.ref = function (player) {\n      _this.player = player;\n    }, _this.format = function (seconds) {\n      var date = new Date(seconds * 1000);\n      var hh = date.getUTCHours();\n      var mm = date.getUTCMinutes();\n      var ss = ('0' + date.getUTCSeconds()).slice(-2);\n      if (hh) {\n        mm = ('0' + date.getUTCMinutes()).slice(-2);\n        return hh + ':' + mm + ':' + ss;\n      }\n      return mm + ':' + ss;\n    }, _this.videoError = function (e) {\n      _this.setState({ videoError: true });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(MediaPlayer, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n      var _state = this.state,\n          playing = _state.playing,\n          ended = _state.ended,\n          volume = _state.volume,\n          muted = _state.muted,\n          loop = _state.loop,\n          played = _state.played,\n          loaded = _state.loaded,\n          duration = _state.duration,\n          playbackRate = _state.playbackRate,\n          fullscreen = _state.fullscreen,\n          videoError = _state.videoError;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'div',\n          { className: classes.flex },\n          videoError && _react2.default.createElement(\n            'p',\n            { className: classes.videoError },\n            'Video Error. Try again later.'\n          ),\n          _react2.default.createElement(_reactPlayer2.default, {\n            ref: this.ref,\n            width: fullscreen ? '100%' : 'inherit',\n            height: fullscreen ? '100%' : 'inherit',\n            style: fullscreen ? { position: 'relative' } : { maxHeight: '500px' },\n            config: { attributes: { style: { height: '100%', width: '100%' } } },\n            url: this.props.srcUrl,\n            playing: playing,\n            loop: loop,\n            playbackRate: playbackRate,\n            volume: volume,\n            muted: muted,\n            onEnded: this.onEnded,\n            onError: this.videoError,\n            onProgress: this.onProgress,\n            onDuration: this.onDuration }),\n          _react2.default.createElement('br', null)\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: classes.controls },\n          _react2.default.createElement(_Progress.LinearProgress, { color: 'primary', variant: 'buffer', value: played * 100, valueBuffer: loaded * 100, style: { width: '100%' }, classes: {\n              colorPrimary: classes.primaryColor,\n              dashedColorPrimary: classes.primaryDashed,\n              dashed: classes.dashed\n            } }),\n          _react2.default.createElement('input', { type: 'range', min: 0, max: 1,\n            value: played, step: 'any',\n            onMouseDown: this.onSeekMouseDown,\n            onChange: this.onSeekChange,\n            onMouseUp: this.onSeekMouseUp,\n            className: classes.rangeRoot }),\n          _react2.default.createElement(\n            _IconButton2.default,\n            { color: 'primary', onClick: this.playPause },\n            _react2.default.createElement(\n              _Icon2.default,\n              null,\n              playing ? 'pause' : ended ? 'replay' : 'play_arrow'\n            )\n          ),\n          _react2.default.createElement(\n            _IconButton2.default,\n            { disabled: !this.props.nextUrl, color: 'primary' },\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: this.props.nextUrl, style: { color: 'inherit' } },\n              _react2.default.createElement(\n                _Icon2.default,\n                null,\n                'skip_next'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            _IconButton2.default,\n            { color: 'primary', onClick: this.toggleMuted },\n            _react2.default.createElement(\n              _Icon2.default,\n              null,\n              volume > 0 && !muted && 'volume_up' || muted && 'volume_off' || volume == 0 && 'volume_mute'\n            )\n          ),\n          _react2.default.createElement('input', { type: 'range', min: 0, max: 1, step: 'any', value: muted ? 0 : volume, onChange: this.setVolume, style: { verticalAlign: 'middle' } }),\n          _react2.default.createElement(\n            _IconButton2.default,\n            { color: loop ? 'primary' : 'default', onClick: this.onLoop },\n            _react2.default.createElement(\n              _Icon2.default,\n              null,\n              'loop'\n            )\n          ),\n          _react2.default.createElement(\n            _IconButton2.default,\n            { color: 'primary', onClick: this.onClickFullscreen },\n            _react2.default.createElement(\n              _Icon2.default,\n              null,\n              'fullscreen'\n            )\n          ),\n          _react2.default.createElement(\n            'span',\n            { style: { float: 'right', padding: '10px', color: '#b83423' } },\n            _react2.default.createElement(\n              'time',\n              { dateTime: 'P' + Math.round(duration * played) + 'S' },\n              this.format(duration * played)\n            ),\n            ' / ',\n            _react2.default.createElement(\n              'time',\n              { dateTime: 'P' + Math.round(duration) + 'S' },\n              this.format(duration)\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return MediaPlayer;\n}(_react.Component);\n\nMediaPlayer.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  srcUrl: _propTypes2.default.string,\n  nextUrl: _propTypes2.default.string,\n  handleAutoplay: _propTypes2.default.func.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(MediaPlayer);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/media/MediaPlayer.js');\n  reactHotLoader.register(MediaPlayer, 'MediaPlayer', 'G:/Projects/mern-mediastream/client/media/MediaPlayer.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/media/MediaPlayer.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/MediaPlayer.js?");

/***/ }),

/***/ "./client/media/NewMedia.js":
/*!**********************************!*\
  !*** ./client/media/NewMedia.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _FileUpload = __webpack_require__(/*! material-ui-icons/FileUpload */ \"material-ui-icons/FileUpload\");\n\nvar _FileUpload2 = _interopRequireDefault(_FileUpload);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiMedia = __webpack_require__(/*! ./api-media.js */ \"./client/media/api-media.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 500,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    title: {\n      margin: theme.spacing.unit * 2,\n      color: theme.palette.protectedTitle,\n      fontSize: '1em'\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    },\n    input: {\n      display: 'none'\n    },\n    filename: {\n      marginLeft: '10px'\n    }\n  };\n};\n\nvar NewMedia = function (_Component) {\n  _inherits(NewMedia, _Component);\n\n  function NewMedia() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, NewMedia);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NewMedia.__proto__ || Object.getPrototypeOf(NewMedia)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      title: '',\n      video: '',\n      description: '',\n      genre: '',\n      redirect: false,\n      error: '',\n      mediaId: ''\n    }, _this.componentDidMount = function () {\n      _this.mediaData = new FormData();\n    }, _this.clickSubmit = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiMedia.create)({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }, _this.mediaData).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ redirect: true, mediaId: data._id });\n        }\n      });\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        var value = name === 'video' ? event.target.files[0] : event.target.value;\n        _this.mediaData.set(name, value);\n        _this.setState(_defineProperty({}, name, value));\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(NewMedia, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      if (this.state.redirect) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/media/' + this.state.mediaId });\n      }\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h1', className: classes.title },\n            'New Video'\n          ),\n          _react2.default.createElement('input', { accept: 'video/*', onChange: this.handleChange('video'), className: classes.input, id: 'icon-button-file', type: 'file' }),\n          _react2.default.createElement(\n            'label',\n            { htmlFor: 'icon-button-file' },\n            _react2.default.createElement(\n              _Button2.default,\n              { color: 'secondary', variant: 'raised', component: 'span' },\n              'Upload',\n              _react2.default.createElement(_FileUpload2.default, null)\n            )\n          ),\n          ' ',\n          _react2.default.createElement(\n            'span',\n            { className: classes.filename },\n            this.state.video ? this.state.video.name : ''\n          ),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'title', label: 'Title', className: classes.textField, value: this.state.title, onChange: this.handleChange('title'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, {\n            id: 'multiline-flexible',\n            label: 'Description',\n            multiline: true,\n            rows: '2',\n            value: this.state.description,\n            onChange: this.handleChange('description'),\n            className: classes.textField,\n            margin: 'normal'\n          }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'genre', label: 'Genre', className: classes.textField, value: this.state.genre, onChange: this.handleChange('genre'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return NewMedia;\n}(_react.Component);\n\nNewMedia.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(NewMedia);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/media/NewMedia.js');\n  reactHotLoader.register(NewMedia, 'NewMedia', 'G:/Projects/mern-mediastream/client/media/NewMedia.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/media/NewMedia.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/NewMedia.js?");

/***/ }),

/***/ "./client/media/PlayMedia.js":
/*!***********************************!*\
  !*** ./client/media/PlayMedia.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Grid = __webpack_require__(/*! material-ui/Grid */ \"material-ui/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _apiMedia = __webpack_require__(/*! ./api-media.js */ \"./client/media/api-media.js\");\n\nvar _Media = __webpack_require__(/*! ./Media */ \"./client/media/Media.js\");\n\nvar _Media2 = _interopRequireDefault(_Media);\n\nvar _RelatedMedia = __webpack_require__(/*! ./RelatedMedia */ \"./client/media/RelatedMedia.js\");\n\nvar _RelatedMedia2 = _interopRequireDefault(_RelatedMedia);\n\nvar _Form = __webpack_require__(/*! material-ui/Form */ \"material-ui/Form\");\n\nvar _Switch = __webpack_require__(/*! material-ui/Switch */ \"material-ui/Switch\");\n\nvar _Switch2 = _interopRequireDefault(_Switch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      flexGrow: 1,\n      margin: 30\n    },\n    toggle: {\n      float: 'right',\n      marginRight: '30px',\n      marginTop: ' 10px'\n    }\n  };\n};\n\nvar PlayMedia = function (_Component) {\n  _inherits(PlayMedia, _Component);\n\n  function PlayMedia(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, PlayMedia);\n\n    var _this = _possibleConstructorReturn(this, (PlayMedia.__proto__ || Object.getPrototypeOf(PlayMedia)).call(this));\n\n    _this.loadMedia = function (mediaId) {\n      (0, _apiMedia.read)({ mediaId: mediaId }).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ media: data });\n          (0, _apiMedia.listRelated)({\n            mediaId: data._id }).then(function (data) {\n            if (data.error) {\n              console.log(data.error);\n            } else {\n              _this.setState({ relatedMedia: data });\n            }\n          });\n        }\n      });\n    };\n\n    _this.componentDidMount = function () {\n      _this.loadMedia(_this.match.params.mediaId);\n    };\n\n    _this.componentWillReceiveProps = function (props) {\n      _this.loadMedia(props.match.params.mediaId);\n    };\n\n    _this.handleChange = function (event) {\n      _this.setState({ autoPlay: event.target.checked });\n    };\n\n    _this.handleAutoplay = function (updateMediaControls) {\n      var playList = _this.state.relatedMedia;\n      var playMedia = playList[0];\n      if (!_this.state.autoPlay || playList.length == 0) return updateMediaControls();\n\n      if (playList.length > 1) {\n        playList.shift();\n        _this.setState({ media: playMedia, relatedMedia: playList });\n      } else {\n        (0, _apiMedia.listRelated)({\n          mediaId: playMedia._id }).then(function (data) {\n          if (data.error) {\n            console.log(data.error);\n          } else {\n            _this.setState({ media: playMedia, relatedMedia: data });\n          }\n        });\n      }\n    };\n\n    _this.state = {\n      media: { postedBy: {} },\n      relatedMedia: [],\n      autoPlay: false\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(PlayMedia, [{\n    key: 'render',\n    value: function render() {\n      //render SSR data\n      if (this.props.data && this.props.data[0] != null) {\n        this.state.media = this.props.data[0];\n        this.state.relatedMedia = [];\n      }\n\n      var nextUrl = this.state.relatedMedia.length > 0 ? '/media/' + this.state.relatedMedia[0]._id : '';\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        { className: classes.root },\n        _react2.default.createElement(\n          _Grid2.default,\n          { container: true, spacing: 24 },\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 8, sm: 8 },\n            _react2.default.createElement(_Media2.default, { media: this.state.media, nextUrl: nextUrl, handleAutoplay: this.handleAutoplay })\n          ),\n          this.state.relatedMedia.length > 0 && _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 4, sm: 4 },\n            _react2.default.createElement(_Form.FormControlLabel, { className: classes.toggle,\n              control: _react2.default.createElement(_Switch2.default, {\n                checked: this.state.autoPlay,\n                onChange: this.handleChange,\n                color: 'primary'\n              }),\n              label: this.state.autoPlay ? 'Autoplay ON' : 'Autoplay OFF'\n            }),\n            _react2.default.createElement(_RelatedMedia2.default, { media: this.state.relatedMedia })\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return PlayMedia;\n}(_react.Component);\n\nPlayMedia.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(PlayMedia);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/media/PlayMedia.js');\n  reactHotLoader.register(PlayMedia, 'PlayMedia', 'G:/Projects/mern-mediastream/client/media/PlayMedia.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/media/PlayMedia.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/PlayMedia.js?");

/***/ }),

/***/ "./client/media/RelatedMedia.js":
/*!**************************************!*\
  !*** ./client/media/RelatedMedia.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Divider = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _reactPlayer = __webpack_require__(/*! react-player */ \"react-player\");\n\nvar _reactPlayer2 = _interopRequireDefault(_reactPlayer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      paddingBottom: 24,\n      backgroundColor: '#80808024'\n    }),\n    title: {\n      margin: theme.spacing.unit * 3 + 'px ' + theme.spacing.unit + 'px ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.openTitle,\n      fontSize: '1em'\n    },\n    card: {\n      width: '100%',\n      display: 'inline-flex'\n    },\n    details: {\n      display: 'inline-block',\n      width: \"100%\"\n    },\n    content: {\n      flex: '1 0 auto',\n      padding: '16px 8px 0px'\n    },\n    controls: {\n      marginTop: '8px'\n    },\n    date: {\n      color: 'rgba(0, 0, 0, 0.4)'\n    },\n    mediaTitle: {\n      whiteSpace: 'nowrap',\n      overflow: 'hidden',\n      textOverflow: 'ellipsis',\n      width: '130px',\n      fontSize: '1em',\n      marginBottom: '5px'\n    },\n    subheading: {\n      color: 'rgba(88, 114, 128, 0.67)'\n    },\n    views: {\n      display: 'inline',\n      lineHeight: '3',\n      paddingLeft: '8px',\n      color: theme.palette.text.secondary\n    }\n  };\n};\n\nvar RelatedMedia = function (_Component) {\n  _inherits(RelatedMedia, _Component);\n\n  function RelatedMedia() {\n    _classCallCheck(this, RelatedMedia);\n\n    return _possibleConstructorReturn(this, (RelatedMedia.__proto__ || Object.getPrototypeOf(RelatedMedia)).apply(this, arguments));\n  }\n\n  _createClass(RelatedMedia, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Paper2.default,\n        { className: classes.root, elevation: 4, style: { padding: '16px' } },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'title', className: classes.title },\n          'Up Next'\n        ),\n        this.props.media.map(function (item, i) {\n          return _react2.default.createElement(\n            'span',\n            { key: i },\n            _react2.default.createElement(\n              _Card2.default,\n              { className: classes.card },\n              _react2.default.createElement(\n                'div',\n                { style: { marginRight: \"5px\", backgroundColor: \"black\" } },\n                _react2.default.createElement(\n                  _reactRouterDom.Link,\n                  { to: \"/media/\" + item._id },\n                  _react2.default.createElement(_reactPlayer2.default, { url: '/api/media/video/' + item._id, width: '160px', height: '140px' })\n                )\n              ),\n              _react2.default.createElement(\n                'div',\n                { className: classes.details },\n                _react2.default.createElement(\n                  _Card.CardContent,\n                  { className: classes.content },\n                  _react2.default.createElement(\n                    _reactRouterDom.Link,\n                    { to: '/media/' + item._id },\n                    _react2.default.createElement(\n                      _Typography2.default,\n                      { type: 'title', component: 'h3', className: classes.mediaTitle, color: 'primary' },\n                      item.title\n                    )\n                  ),\n                  _react2.default.createElement(\n                    _Typography2.default,\n                    { type: 'subheading', className: classes.subheading },\n                    item.genre\n                  ),\n                  _react2.default.createElement(\n                    _Typography2.default,\n                    { component: 'p', className: classes.date },\n                    new Date(item.created).toDateString()\n                  )\n                ),\n                _react2.default.createElement(\n                  'div',\n                  { className: classes.controls },\n                  _react2.default.createElement(\n                    _Typography2.default,\n                    { type: 'subheading', component: 'h3', className: classes.views, color: 'primary' },\n                    ' ',\n                    item.views,\n                    ' views'\n                  )\n                )\n              )\n            ),\n            _react2.default.createElement(_Divider2.default, null)\n          );\n        })\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return RelatedMedia;\n}(_react.Component);\n\nRelatedMedia.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  media: _propTypes2.default.array.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(RelatedMedia);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/media/RelatedMedia.js');\n  reactHotLoader.register(RelatedMedia, 'RelatedMedia', 'G:/Projects/mern-mediastream/client/media/RelatedMedia.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/media/RelatedMedia.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/RelatedMedia.js?");

/***/ }),

/***/ "./client/media/api-media.js":
/*!***********************************!*\
  !*** ./client/media/api-media.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.listRelated = exports.remove = exports.update = exports.read = exports.listByUser = exports.listPopular = exports.create = undefined;\n\nvar _config = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar create = function create(params, credentials, media) {\n  return fetch('/api/media/new/' + params.userId, {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: media\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar listPopular = function listPopular(params) {\n  return fetch('/api/media/popular', {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar listByUser = function listByUser(params) {\n  return fetch('/api/media/by/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar read = function read(params) {\n  return fetch(_config2.default.serverUrl + '/api/media/' + params.mediaId, {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar update = function update(params, credentials, media) {\n  return fetch('/api/media/' + params.mediaId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify(media)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar remove = function remove(params, credentials) {\n  return fetch('/api/media/' + params.mediaId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar listRelated = function listRelated(params) {\n  return fetch('/api/media/related/' + params.mediaId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.create = create;\nexports.listPopular = listPopular;\nexports.listByUser = listByUser;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\nexports.listRelated = listRelated;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, 'create', 'G:/Projects/mern-mediastream/client/media/api-media.js');\n  reactHotLoader.register(listPopular, 'listPopular', 'G:/Projects/mern-mediastream/client/media/api-media.js');\n  reactHotLoader.register(listByUser, 'listByUser', 'G:/Projects/mern-mediastream/client/media/api-media.js');\n  reactHotLoader.register(read, 'read', 'G:/Projects/mern-mediastream/client/media/api-media.js');\n  reactHotLoader.register(update, 'update', 'G:/Projects/mern-mediastream/client/media/api-media.js');\n  reactHotLoader.register(remove, 'remove', 'G:/Projects/mern-mediastream/client/media/api-media.js');\n  reactHotLoader.register(listRelated, 'listRelated', 'G:/Projects/mern-mediastream/client/media/api-media.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/api-media.js?");

/***/ }),

/***/ "./client/routeConfig.js":
/*!*******************************!*\
  !*** ./client/routeConfig.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _PlayMedia = __webpack_require__(/*! ./media/PlayMedia */ \"./client/media/PlayMedia.js\");\n\nvar _PlayMedia2 = _interopRequireDefault(_PlayMedia);\n\nvar _apiMedia = __webpack_require__(/*! ./media/api-media.js */ \"./client/media/api-media.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar routes = [{\n  path: '/media/:mediaId',\n  component: _PlayMedia2.default,\n  loadData: function loadData(params) {\n    return (0, _apiMedia.read)(params);\n  }\n}];\nvar _default = routes;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(routes, 'routes', 'G:/Projects/mern-mediastream/client/routeConfig.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/routeConfig.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/routeConfig.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Delete = __webpack_require__(/*! material-ui-icons/Delete */ \"material-ui-icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DeleteUser = function (_Component) {\n  _inherits(DeleteUser, _Component);\n\n  function DeleteUser() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, DeleteUser);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteUser.__proto__ || Object.getPrototypeOf(DeleteUser)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      redirect: false,\n      open: false\n    }, _this.clickButton = function () {\n      _this.setState({ open: true });\n    }, _this.deleteAccount = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.remove)({\n        userId: _this.props.userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _authHelper2.default.signout(function () {\n            return console.log('deleted');\n          });\n          _this.setState({ redirect: true });\n        }\n      });\n    }, _this.handleRequestClose = function () {\n      _this.setState({ open: false });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(DeleteUser, [{\n    key: 'render',\n    value: function render() {\n      var redirect = this.state.redirect;\n      if (redirect) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n      }\n      return _react2.default.createElement(\n        'span',\n        null,\n        _react2.default.createElement(\n          _IconButton2.default,\n          { 'aria-label': 'Delete', onClick: this.clickButton, color: 'secondary' },\n          _react2.default.createElement(_Delete2.default, null)\n        ),\n        _react2.default.createElement(\n          _Dialog2.default,\n          { open: this.state.open, onClose: this.handleRequestClose },\n          _react2.default.createElement(\n            _Dialog.DialogTitle,\n            null,\n            \"Delete Account\"\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogContent,\n            null,\n            _react2.default.createElement(\n              _Dialog.DialogContentText,\n              null,\n              'Confirm to delete your account.'\n            )\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.handleRequestClose, color: 'primary' },\n              'Cancel'\n            ),\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.deleteAccount, color: 'secondary', autoFocus: 'autoFocus' },\n              'Confirm'\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return DeleteUser;\n}(_react.Component);\n\nDeleteUser.propTypes = {\n  userId: _propTypes2.default.string.isRequired\n};\nvar _default = DeleteUser;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, 'DeleteUser', 'G:/Projects/mern-mediastream/client/user/DeleteUser.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/user/DeleteUser.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    title: {\n      margin: theme.spacing.unit * 2,\n      color: theme.palette.protectedTitle\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar EditProfile = function (_Component) {\n  _inherits(EditProfile, _Component);\n\n  function EditProfile(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, EditProfile);\n\n    var _this = _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).call(this));\n\n    _this.componentDidMount = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.read)({\n        userId: _this.match.params.userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ name: data.name, email: data.email });\n        }\n      });\n    };\n\n    _this.clickSubmit = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      var user = {\n        name: _this.state.name || undefined,\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n      (0, _apiUser.update)({\n        userId: _this.match.params.userId\n      }, {\n        t: jwt.token\n      }, user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ 'userId': data._id, 'redirectToProfile': true });\n        }\n      });\n    };\n\n    _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    };\n\n    _this.state = {\n      name: '',\n      email: '',\n      password: '',\n      redirectToProfile: false,\n      error: ''\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(EditProfile, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      if (this.state.redirectToProfile) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/user/' + this.state.userId });\n      }\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Edit Profile'\n          ),\n          _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return EditProfile;\n}(_react.Component);\n\nEditProfile.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(EditProfile);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/user/EditProfile.js');\n  reactHotLoader.register(EditProfile, 'EditProfile', 'G:/Projects/mern-mediastream/client/user/EditProfile.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/user/EditProfile.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Edit = __webpack_require__(/*! material-ui-icons/Edit */ \"material-ui-icons/Edit\");\n\nvar _Edit2 = _interopRequireDefault(_Edit);\n\nvar _Divider = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _DeleteUser = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n\nvar _DeleteUser2 = _interopRequireDefault(_DeleteUser);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiMedia = __webpack_require__(/*! ../media/api-media.js */ \"./client/media/api-media.js\");\n\nvar _MediaList = __webpack_require__(/*! ../media/MediaList */ \"./client/media/MediaList.js\");\n\nvar _MediaList2 = _interopRequireDefault(_MediaList);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      maxWidth: 850,\n      margin: 'auto',\n      padding: theme.spacing.unit * 3,\n      marginTop: theme.spacing.unit * 5\n    }),\n    title: {\n      margin: theme.spacing.unit * 3 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.protectedTitle\n    },\n    avatar: {\n      color: theme.palette.primary.contrastText,\n      backgroundColor: theme.palette.primary.light\n    }\n  };\n};\n\nvar Profile = function (_Component) {\n  _inherits(Profile, _Component);\n\n  function Profile(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, Profile);\n\n    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));\n\n    _this.init = function (userId) {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.read)({\n        userId: userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          _this.setState({ redirectToSignin: true });\n        } else {\n          _this.setState({ user: data });\n          (0, _apiMedia.listByUser)({ userId: data._id }).then(function (media) {\n            if (media.error) {\n              console.log(media.error);\n            } else {\n              _this.setState({ media: media });\n            }\n          });\n        }\n      });\n    };\n\n    _this.componentWillReceiveProps = function (props) {\n      _this.init(props.match.params.userId);\n    };\n\n    _this.componentDidMount = function () {\n      _this.init(_this.match.params.userId);\n    };\n\n    _this.state = {\n      user: '',\n      redirectToSignin: false,\n      media: []\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(Profile, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      var redirectToSignin = this.state.redirectToSignin;\n      if (redirectToSignin) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/signin' });\n      }\n      return _react2.default.createElement(\n        _Paper2.default,\n        { className: classes.root, elevation: 4 },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'title', className: classes.title },\n          'Profile'\n        ),\n        _react2.default.createElement(\n          _List2.default,\n          { dense: true },\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(\n              _List.ListItemAvatar,\n              null,\n              _react2.default.createElement(\n                _Avatar2.default,\n                { className: classes.avatar },\n                this.state.user.name && this.state.user.name[0]\n              )\n            ),\n            _react2.default.createElement(_List.ListItemText, { primary: this.state.user.name, secondary: this.state.user.email }),\n            ' ',\n            _authHelper2.default.isAuthenticated().user && _authHelper2.default.isAuthenticated().user._id == this.state.user._id && _react2.default.createElement(\n              _List.ListItemSecondaryAction,\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: \"/user/edit/\" + this.state.user._id },\n                _react2.default.createElement(\n                  _IconButton2.default,\n                  { 'aria-label': 'Edit', color: 'primary' },\n                  _react2.default.createElement(_Edit2.default, null)\n                )\n              ),\n              _react2.default.createElement(_DeleteUser2.default, { userId: this.state.user._id })\n            )\n          ),\n          _react2.default.createElement(_Divider2.default, null),\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(_List.ListItemText, { primary: \"Joined: \" + new Date(this.state.user.created).toDateString() })\n          ),\n          _react2.default.createElement(_MediaList2.default, { media: this.state.media })\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Profile;\n}(_react.Component);\n\nProfile.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Profile);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/user/Profile.js');\n  reactHotLoader.register(Profile, 'Profile', 'G:/Projects/mern-mediastream/client/user/Profile.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/user/Profile.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    title: {\n      marginTop: theme.spacing.unit * 2,\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar Signup = function (_Component) {\n  _inherits(Signup, _Component);\n\n  function Signup() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Signup);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      name: '',\n      password: '',\n      email: '',\n      open: false,\n      error: ''\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    }, _this.clickSubmit = function () {\n      var user = {\n        name: _this.state.name || undefined,\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n      (0, _apiUser.create)(user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ error: '', open: true });\n        }\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Signup, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _Card2.default,\n          { className: classes.card },\n          _react2.default.createElement(\n            _Card.CardContent,\n            null,\n            _react2.default.createElement(\n              _Typography2.default,\n              { type: 'headline', component: 'h2', className: classes.title },\n              'Sign Up'\n            ),\n            _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            ' ',\n            this.state.error && _react2.default.createElement(\n              _Typography2.default,\n              { component: 'p', color: 'error' },\n              _react2.default.createElement(\n                _Icon2.default,\n                { color: 'error', className: classes.error },\n                'error'\n              ),\n              this.state.error\n            )\n          ),\n          _react2.default.createElement(\n            _Card.CardActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n              'Submit'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _Dialog2.default,\n          { open: this.state.open, disableBackdropClick: true },\n          _react2.default.createElement(\n            _Dialog.DialogTitle,\n            null,\n            'New Account'\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogContent,\n            null,\n            _react2.default.createElement(\n              _Dialog.DialogContentText,\n              null,\n              'New account successfully created.'\n            )\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogActions,\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signin' },\n              _react2.default.createElement(\n                _Button2.default,\n                { color: 'primary', autoFocus: 'autoFocus', variant: 'raised' },\n                'Sign In'\n              )\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Signup;\n}(_react.Component);\n\nSignup.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signup);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/user/Signup.js');\n  reactHotLoader.register(Signup, 'Signup', 'G:/Projects/mern-mediastream/client/user/Signup.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/user/Signup.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _ArrowForward = __webpack_require__(/*! material-ui-icons/ArrowForward */ \"material-ui-icons/ArrowForward\");\n\nvar _ArrowForward2 = _interopRequireDefault(_ArrowForward);\n\nvar _Person = __webpack_require__(/*! material-ui-icons/Person */ \"material-ui-icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      padding: theme.spacing.unit,\n      margin: theme.spacing.unit * 5\n    }),\n    title: {\n      margin: theme.spacing.unit * 4 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.openTitle\n    }\n  };\n};\n\nvar Users = function (_Component) {\n  _inherits(Users, _Component);\n\n  function Users() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Users);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Users.__proto__ || Object.getPrototypeOf(Users)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      users: []\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Users, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      (0, _apiUser.list)().then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this2.setState({ users: data });\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Paper2.default,\n        { className: classes.root, elevation: 4 },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'title', className: classes.title },\n          'All Users'\n        ),\n        _react2.default.createElement(\n          _List2.default,\n          { dense: true },\n          this.state.users.map(function (item, i) {\n            return _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: \"/user/\" + item._id, key: i },\n              _react2.default.createElement(\n                _List.ListItem,\n                { button: true },\n                _react2.default.createElement(\n                  _List.ListItemAvatar,\n                  null,\n                  _react2.default.createElement(\n                    _Avatar2.default,\n                    null,\n                    _react2.default.createElement(_Person2.default, null)\n                  )\n                ),\n                _react2.default.createElement(_List.ListItemText, { primary: item.name }),\n                _react2.default.createElement(\n                  _List.ListItemSecondaryAction,\n                  null,\n                  _react2.default.createElement(\n                    _IconButton2.default,\n                    null,\n                    _react2.default.createElement(_ArrowForward2.default, null)\n                  )\n                )\n              )\n            );\n          })\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Users;\n}(_react.Component);\n\nUsers.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Users);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', 'G:/Projects/mern-mediastream/client/user/Users.js');\n  reactHotLoader.register(Users, 'Users', 'G:/Projects/mern-mediastream/client/user/Users.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/client/user/Users.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar create = function create(user) {\n  return fetch('/api/users/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar list = function list() {\n  return fetch('/api/users/', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar read = function read(params, credentials) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar update = function update(params, credentials, user) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar remove = function remove(params, credentials) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.create = create;\nexports.list = list;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, 'create', 'G:/Projects/mern-mediastream/client/user/api-user.js');\n  reactHotLoader.register(list, 'list', 'G:/Projects/mern-mediastream/client/user/api-user.js');\n  reactHotLoader.register(read, 'read', 'G:/Projects/mern-mediastream/client/user/api-user.js');\n  reactHotLoader.register(update, 'update', 'G:/Projects/mern-mediastream/client/user/api-user.js');\n  reactHotLoader.register(remove, 'remove', 'G:/Projects/mern-mediastream/client/user/api-user.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar config = {\n  env: \"development\" || 'development',\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"SDJF0W850FJ5LDFJ4095809DFJG045FG\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernmediastream',\n  serverUrl: process.env.serverUrl || 'http://localhost:3000'\n};\n\nvar _default = config;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, 'config', 'G:/Projects/mern-mediastream/config/config.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/config/config.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar signin = function signin(req, res) {\n  _user2.default.findOne({\n    \"email\": req.body.email\n  }, function (err, user) {\n\n    if (err || !user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    var token = _jsonwebtoken2.default.sign({\n      _id: user._id\n    }, _config2.default.jwtSecret);\n\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n\n    return res.json({\n      token: token,\n      user: { _id: user._id, name: user.name, email: user.email }\n    });\n  });\n};\n\nvar signout = function signout(req, res) {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nvar requireSignin = (0, _expressJwt2.default)({\n  secret: _config2.default.jwtSecret,\n  userProperty: 'auth'\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\nvar _default = {\n  signin: signin,\n  signout: signout,\n  requireSignin: requireSignin,\n  hasAuthorization: hasAuthorization\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, 'signin', 'G:/Projects/mern-mediastream/server/controllers/auth.controller.js');\n  reactHotLoader.register(signout, 'signout', 'G:/Projects/mern-mediastream/server/controllers/auth.controller.js');\n  reactHotLoader.register(requireSignin, 'requireSignin', 'G:/Projects/mern-mediastream/server/controllers/auth.controller.js');\n  reactHotLoader.register(hasAuthorization, 'hasAuthorization', 'G:/Projects/mern-mediastream/server/controllers/auth.controller.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/controllers/auth.controller.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/media.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/media.controller.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _media = __webpack_require__(/*! ../models/media.model */ \"./server/models/media.model.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n//media streaming\n\n\n//import Grid from 'gridfs-stream'\n/* Temporary fix for Mongoose v5+ and gridfs-stream v1.1.1 bug */\nvar Grid = __webpack_require__(/*! gridfs-stream */ \"gridfs-stream\");\neval('Grid.prototype.findOne = ' + Grid.prototype.findOne.toString().replace('nextObject', 'next'));\n/* Until gridfs-stream module is updated */\nGrid.mongo = _mongoose2.default.mongo;\nvar gridfs = null;\n_mongoose2.default.connection.on('connected', function () {\n  gridfs = Grid(_mongoose2.default.connection.db);\n});\n\nvar create = function create(req, res, next) {\n  var form = new _formidable2.default.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, function (err, fields, files) {\n    if (err) {\n      return res.status(400).json({\n        error: \"Video could not be uploaded\"\n      });\n    }\n    var media = new _media2.default(fields);\n    media.postedBy = req.profile;\n    if (files.video) {\n      var writestream = gridfs.createWriteStream({ _id: media._id });\n      _fs2.default.createReadStream(files.video.path).pipe(writestream);\n    }\n    media.save(function (err, result) {\n      if (err) {\n        return res.status(400).json({\n          error: _dbErrorHandler2.default.getErrorMessage(err)\n        });\n      }\n      res.json(result);\n    });\n  });\n};\n\nvar mediaByID = function mediaByID(req, res, next, id) {\n  _media2.default.findById(id).populate('postedBy', '_id name').exec(function (err, media) {\n    if (err || !media) return res.status('400').json({\n      error: \"Media not found\"\n    });\n    req.media = media;\n    next();\n  });\n};\n\nvar video = function video(req, res) {\n  gridfs.findOne({\n    _id: req.media._id\n  }, function (err, file) {\n    if (err) {\n      return res.status(400).send({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    if (!file) {\n      return res.status(404).send({\n        error: 'No video found'\n      });\n    }\n\n    if (req.headers['range']) {\n      var parts = req.headers['range'].replace(/bytes=/, \"\").split(\"-\");\n      var partialstart = parts[0];\n      var partialend = parts[1];\n\n      var start = parseInt(partialstart, 10);\n      var end = partialend ? parseInt(partialend, 10) : file.length - 1;\n      var chunksize = end - start + 1;\n\n      res.writeHead(206, {\n        'Accept-Ranges': 'bytes',\n        'Content-Length': chunksize,\n        'Content-Range': 'bytes ' + start + '-' + end + '/' + file.length,\n        'Content-Type': file.contentType\n      });\n\n      gridfs.createReadStream({\n        _id: file._id,\n        range: {\n          startPos: start,\n          endPos: end\n        }\n      }).pipe(res);\n    } else {\n      res.header('Content-Length', file.length);\n      res.header('Content-Type', file.contentType);\n\n      gridfs.createReadStream({\n        _id: file._id\n      }).pipe(res);\n    }\n  });\n};\n\nvar listPopular = function listPopular(req, res) {\n  _media2.default.find({}).limit(9).populate('postedBy', '_id name').sort('-views').exec(function (err, posts) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(posts);\n  });\n};\n\nvar listByUser = function listByUser(req, res) {\n  _media2.default.find({ postedBy: req.profile._id }).populate('postedBy', '_id name').sort('-created').exec(function (err, posts) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(posts);\n  });\n};\n\nvar read = function read(req, res) {\n  return res.json(req.media);\n};\n\nvar incrementViews = function incrementViews(req, res, next) {\n  _media2.default.findByIdAndUpdate(req.media._id, { $inc: { \"views\": 1 } }, { new: true }).exec(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    next();\n  });\n};\n\nvar update = function update(req, res, next) {\n  var media = req.media;\n  media = _lodash2.default.extend(media, req.body);\n  media.updated = Date.now();\n  media.save(function (err) {\n    if (err) {\n      return res.status(400).send({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(media);\n  });\n};\n\nvar isPoster = function isPoster(req, res, next) {\n  var isPoster = req.media && req.auth && req.media.postedBy._id == req.auth._id;\n  if (!isPoster) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\nvar remove = function remove(req, res, next) {\n  var media = req.media;\n  media.remove(function (err, deletedMedia) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    gridfs.remove({ _id: req.media._id });\n    res.json(deletedMedia);\n  });\n};\n\nvar listRelated = function listRelated(req, res) {\n  _media2.default.find({ \"_id\": { \"$ne\": req.media }, \"genre\": req.media.genre }).limit(4).sort('-views').populate('postedBy', '_id name').exec(function (err, posts) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(posts);\n  });\n};\n\nvar _default = {\n  create: create,\n  mediaByID: mediaByID,\n  video: video,\n  listPopular: listPopular,\n  listByUser: listByUser,\n  read: read,\n  incrementViews: incrementViews,\n  update: update,\n  isPoster: isPoster,\n  remove: remove,\n  listRelated: listRelated\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(gridfs, 'gridfs', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(create, 'create', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(mediaByID, 'mediaByID', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(video, 'video', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(listPopular, 'listPopular', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(listByUser, 'listByUser', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(read, 'read', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(incrementViews, 'incrementViews', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(update, 'update', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(isPoster, 'isPoster', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(remove, 'remove', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(listRelated, 'listRelated', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/controllers/media.controller.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/media.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar create = function create(req, res, next) {\n  var user = new _user2.default(req.body);\n  user.save(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n\n/**\n * Load user and append to req.\n */\nvar userByID = function userByID(req, res, next, id) {\n  _user2.default.findById(id).exec(function (err, user) {\n    if (err || !user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nvar read = function read(req, res) {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nvar list = function list(req, res) {\n  _user2.default.find(function (err, users) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(users);\n  }).select('name email updated created');\n};\n\nvar update = function update(req, res, next) {\n  var user = req.profile;\n  user = _lodash2.default.extend(user, req.body);\n  user.updated = Date.now();\n  user.save(function (err) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  });\n};\n\nvar remove = function remove(req, res, next) {\n  var user = req.profile;\n  user.remove(function (err, deletedUser) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\nvar _default = {\n  create: create,\n  userByID: userByID,\n  read: read,\n  list: list,\n  remove: remove,\n  update: update\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, 'create', 'G:/Projects/mern-mediastream/server/controllers/user.controller.js');\n  reactHotLoader.register(userByID, 'userByID', 'G:/Projects/mern-mediastream/server/controllers/user.controller.js');\n  reactHotLoader.register(read, 'read', 'G:/Projects/mern-mediastream/server/controllers/user.controller.js');\n  reactHotLoader.register(list, 'list', 'G:/Projects/mern-mediastream/server/controllers/user.controller.js');\n  reactHotLoader.register(update, 'update', 'G:/Projects/mern-mediastream/server/controllers/user.controller.js');\n  reactHotLoader.register(remove, 'remove', 'G:/Projects/mern-mediastream/server/controllers/user.controller.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/controllers/user.controller.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar compile = function compile(app) {\n  if (_config2.default.env === \"development\") {\n    var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      publicPath: _webpackConfigClient2.default.output.publicPath\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, 'compile', 'G:/Projects/mern-mediastream/server/devBundle.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/devBundle.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _template = __webpack_require__(/*! ./../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _media = __webpack_require__(/*! ./routes/media.routes */ \"./server/routes/media.routes.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _MainRouter = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n\nvar _MainRouter2 = _interopRequireDefault(_MainRouter);\n\nvar _StaticRouter = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n\nvar _StaticRouter2 = _interopRequireDefault(_StaticRouter);\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _colors = __webpack_require__(/*! material-ui/colors */ \"material-ui/colors\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _routeConfig = __webpack_require__(/*! ./../client/routeConfig */ \"./client/routeConfig.js\");\n\nvar _routeConfig2 = _interopRequireDefault(_routeConfig);\n\n__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n// modules for server side rendering\n\n//end\n\n//For SSR with data\n\n//end\n\n//comment out before building for production\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = (0, _express2.default)();\n\n//comment out before building for production\n_devBundle2.default.compile(app);\n\n//For SSR with data\nvar loadBranchData = function loadBranchData(location) {\n  var branch = (0, _reactRouterConfig.matchRoutes)(_routeConfig2.default, location);\n  var promises = branch.map(function (_ref) {\n    var route = _ref.route,\n        match = _ref.match;\n\n    return route.loadData ? route.loadData(branch[0].match.params) : Promise.resolve(null);\n  });\n  return Promise.all(promises);\n};\n\n// parse body params and attache them to req.body\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\n// secure apps by setting various HTTP headers\napp.use((0, _helmet2.default)());\n// enable CORS - Cross Origin Resource Sharing\napp.use((0, _cors2.default)());\n\napp.use('/dist', _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, 'dist')));\n\n// mount routes\napp.use('/', _user2.default);\napp.use('/', _auth2.default);\napp.use('/', _media2.default);\n\napp.get('*', function (req, res) {\n  var sheetsRegistry = new _jss.SheetsRegistry();\n  var theme = (0, _styles.createMuiTheme)({\n    palette: {\n      primary: {\n        light: '#f05545',\n        main: '#b71c1c',\n        dark: '#7f0000',\n        contrastText: '#fff'\n      },\n      secondary: {\n        light: '#fbfffc',\n        main: '#c8e6c9',\n        dark: '#97b498',\n        contrastText: '#37474f'\n      },\n      openTitle: _colors.red['500'],\n      protectedTitle: _colors.brown['300'],\n      type: 'light'\n    }\n  });\n  var generateClassName = (0, _styles.createGenerateClassName)();\n  var context = {};\n  loadBranchData(req.url).then(function (data) {\n    var markup = _server2.default.renderToString(_react2.default.createElement(\n      _StaticRouter2.default,\n      { location: req.url, context: context },\n      _react2.default.createElement(\n        _JssProvider2.default,\n        { registry: sheetsRegistry, generateClassName: generateClassName },\n        _react2.default.createElement(\n          _styles.MuiThemeProvider,\n          { theme: theme, sheetsManager: new Map() },\n          _react2.default.createElement(_MainRouter2.default, { data: data })\n        )\n      )\n    ));\n    if (context.url) {\n      return res.redirect(303, context.url);\n    }\n    var css = sheetsRegistry.toString();\n    res.status(200).send((0, _template2.default)({\n      markup: markup,\n      css: css\n    }));\n  }).catch(function (err) {\n    res.status(500).send({ \"error\": \"Could not load React view with data\" });\n  });\n});\n\n// Catch unauthorised errors\napp.use(function (err, req, res, next) {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({ \"error\": err.name + \": \" + err.message });\n  }\n});\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'G:/Projects/mern-mediastream/server/express.js');\n  reactHotLoader.register(app, 'app', 'G:/Projects/mern-mediastream/server/express.js');\n  reactHotLoader.register(loadBranchData, 'loadBranchData', 'G:/Projects/mern-mediastream/server/express.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/express.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n/**\n * Get unique error field name\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n    var output = void 0;\n    try {\n        var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n\n    return output;\n};\n\n/**\n * Get the error message from error object\n */\nvar getErrorMessage = function getErrorMessage(err) {\n    var message = '';\n\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (var errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n\n    return message;\n};\n\nvar _default = { getErrorMessage: getErrorMessage };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(getUniqueErrorMessage, 'getUniqueErrorMessage', 'G:/Projects/mern-mediastream/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(getErrorMessage, 'getErrorMessage', 'G:/Projects/mern-mediastream/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/helpers/dbErrorHandler.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/media.model.js":
/*!**************************************!*\
  !*** ./server/models/media.model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar MediaSchema = new _mongoose2.default.Schema({\n  title: {\n    type: String,\n    required: 'title is required'\n  },\n  description: String,\n  genre: String,\n  views: { type: Number, default: 0 },\n  postedBy: { type: _mongoose2.default.Schema.ObjectId, ref: 'User' },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date\n  }\n});\n\nvar _default = _mongoose2.default.model('Media', MediaSchema);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MediaSchema, 'MediaSchema', 'G:/Projects/mern-mediastream/server/models/media.model.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/models/media.model.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/media.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar UserSchema = new _mongoose2.default.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n\nUserSchema.methods = {\n  authenticate: function authenticate(plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return '';\n    try {\n      return _crypto2.default.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function makeSalt() {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nvar _default = _mongoose2.default.model('User', UserSchema);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, 'UserSchema', 'G:/Projects/mern-mediastream/server/models/user.model.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/models/user.model.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/signin').post(_auth2.default.signin);\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, 'router', 'G:/Projects/mern-mediastream/server/routes/auth.routes.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/routes/auth.routes.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/media.routes.js":
/*!***************************************!*\
  !*** ./server/routes/media.routes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _media = __webpack_require__(/*! ../controllers/media.controller */ \"./server/controllers/media.controller.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/media/new/:userId').post(_auth2.default.requireSignin, _media2.default.create);\n\nrouter.route('/api/media/video/:mediaId').get(_media2.default.video);\n\nrouter.route('/api/media/popular').get(_media2.default.listPopular);\n\nrouter.route('/api/media/related/:mediaId').get(_media2.default.listRelated);\n\nrouter.route('/api/media/by/:userId').get(_media2.default.listByUser);\n\nrouter.route('/api/media/:mediaId').get(_media2.default.incrementViews, _media2.default.read).put(_auth2.default.requireSignin, _media2.default.isPoster, _media2.default.update).delete(_auth2.default.requireSignin, _media2.default.isPoster, _media2.default.remove);\n\nrouter.param('userId', _user2.default.userByID);\nrouter.param('mediaId', _media2.default.mediaByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(router, 'router', 'G:/Projects/mern-mediastream/server/routes/media.routes.js');\n    reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/routes/media.routes.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/media.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/:userId').get(_auth2.default.requireSignin, _user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.remove);\n\nrouter.param('userId', _user2.default.userByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, 'router', 'G:/Projects/mern-mediastream/server/routes/user.routes.js');\n  reactHotLoader.register(_default, 'default', 'G:/Projects/mern-mediastream/server/routes/user.routes.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Connection URL\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(_config2.default.mongoUri);\n_mongoose2.default.connection.on('error', function () {\n  throw new Error('unable to connect to database: ' + _config2.default.mongoUri);\n});\n\n_express2.default.listen(_config2.default.port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default(_ref) {\n  var markup = _ref.markup,\n      css = _ref.css;\n\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"utf-8\\\">\\n          <title>MERN Mediastream</title>\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n          <style>\\n              a{\\n                text-decoration: none\\n              }\\n          </style>\\n        </head>\\n        <body style=\\\"margin:0\\\">\\n          <div id=\\\"root\\\">\" + markup + \"</div>\\n          <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"G:/Projects/mern-mediastream/template.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }]\n    }, plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', 'G:/Projects/mern-mediastream/webpack.config.client.js');\n    reactHotLoader.register(config, 'config', 'G:/Projects/mern-mediastream/webpack.config.client.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! G:\\Projects\\mern-mediastream\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "gridfs-stream":
/*!********************************!*\
  !*** external "gridfs-stream" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gridfs-stream\");\n\n//# sourceURL=webpack:///external_%22gridfs-stream%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "material-ui-icons/AddBox":
/*!*******************************************!*\
  !*** external "material-ui-icons/AddBox" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/AddBox\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/AddBox%22?");

/***/ }),

/***/ "material-ui-icons/ArrowForward":
/*!*************************************************!*\
  !*** external "material-ui-icons/ArrowForward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/ArrowForward%22?");

/***/ }),

/***/ "material-ui-icons/Delete":
/*!*******************************************!*\
  !*** external "material-ui-icons/Delete" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Delete\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Delete%22?");

/***/ }),

/***/ "material-ui-icons/Edit":
/*!*****************************************!*\
  !*** external "material-ui-icons/Edit" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Edit\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Edit%22?");

/***/ }),

/***/ "material-ui-icons/FileUpload":
/*!***********************************************!*\
  !*** external "material-ui-icons/FileUpload" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/FileUpload\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/FileUpload%22?");

/***/ }),

/***/ "material-ui-icons/Home":
/*!*****************************************!*\
  !*** external "material-ui-icons/Home" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Home\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Home%22?");

/***/ }),

/***/ "material-ui-icons/Person":
/*!*******************************************!*\
  !*** external "material-ui-icons/Person" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Person\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Person%22?");

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/AppBar\");\n\n//# sourceURL=webpack:///external_%22material-ui/AppBar%22?");

/***/ }),

/***/ "material-ui/Avatar":
/*!*************************************!*\
  !*** external "material-ui/Avatar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Avatar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Avatar%22?");

/***/ }),

/***/ "material-ui/Button":
/*!*************************************!*\
  !*** external "material-ui/Button" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Button\");\n\n//# sourceURL=webpack:///external_%22material-ui/Button%22?");

/***/ }),

/***/ "material-ui/Card":
/*!***********************************!*\
  !*** external "material-ui/Card" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Card\");\n\n//# sourceURL=webpack:///external_%22material-ui/Card%22?");

/***/ }),

/***/ "material-ui/Dialog":
/*!*************************************!*\
  !*** external "material-ui/Dialog" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Dialog\");\n\n//# sourceURL=webpack:///external_%22material-ui/Dialog%22?");

/***/ }),

/***/ "material-ui/Divider":
/*!**************************************!*\
  !*** external "material-ui/Divider" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Divider\");\n\n//# sourceURL=webpack:///external_%22material-ui/Divider%22?");

/***/ }),

/***/ "material-ui/Form":
/*!***********************************!*\
  !*** external "material-ui/Form" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Form\");\n\n//# sourceURL=webpack:///external_%22material-ui/Form%22?");

/***/ }),

/***/ "material-ui/Grid":
/*!***********************************!*\
  !*** external "material-ui/Grid" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Grid\");\n\n//# sourceURL=webpack:///external_%22material-ui/Grid%22?");

/***/ }),

/***/ "material-ui/GridList":
/*!***************************************!*\
  !*** external "material-ui/GridList" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/GridList\");\n\n//# sourceURL=webpack:///external_%22material-ui/GridList%22?");

/***/ }),

/***/ "material-ui/Icon":
/*!***********************************!*\
  !*** external "material-ui/Icon" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Icon\");\n\n//# sourceURL=webpack:///external_%22material-ui/Icon%22?");

/***/ }),

/***/ "material-ui/IconButton":
/*!*****************************************!*\
  !*** external "material-ui/IconButton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/IconButton\");\n\n//# sourceURL=webpack:///external_%22material-ui/IconButton%22?");

/***/ }),

/***/ "material-ui/Input":
/*!************************************!*\
  !*** external "material-ui/Input" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Input\");\n\n//# sourceURL=webpack:///external_%22material-ui/Input%22?");

/***/ }),

/***/ "material-ui/List":
/*!***********************************!*\
  !*** external "material-ui/List" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List\");\n\n//# sourceURL=webpack:///external_%22material-ui/List%22?");

/***/ }),

/***/ "material-ui/Paper":
/*!************************************!*\
  !*** external "material-ui/Paper" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Paper\");\n\n//# sourceURL=webpack:///external_%22material-ui/Paper%22?");

/***/ }),

/***/ "material-ui/Progress":
/*!***************************************!*\
  !*** external "material-ui/Progress" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Progress\");\n\n//# sourceURL=webpack:///external_%22material-ui/Progress%22?");

/***/ }),

/***/ "material-ui/Switch":
/*!*************************************!*\
  !*** external "material-ui/Switch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Switch\");\n\n//# sourceURL=webpack:///external_%22material-ui/Switch%22?");

/***/ }),

/***/ "material-ui/TextField":
/*!****************************************!*\
  !*** external "material-ui/TextField" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/TextField\");\n\n//# sourceURL=webpack:///external_%22material-ui/TextField%22?");

/***/ }),

/***/ "material-ui/Toolbar":
/*!**************************************!*\
  !*** external "material-ui/Toolbar" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Toolbar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Toolbar%22?");

/***/ }),

/***/ "material-ui/Typography":
/*!*****************************************!*\
  !*** external "material-ui/Typography" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Typography\");\n\n//# sourceURL=webpack:///external_%22material-ui/Typography%22?");

/***/ }),

/***/ "material-ui/colors":
/*!*************************************!*\
  !*** external "material-ui/colors" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/colors\");\n\n//# sourceURL=webpack:///external_%22material-ui/colors%22?");

/***/ }),

/***/ "material-ui/styles":
/*!*************************************!*\
  !*** external "material-ui/styles" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22material-ui/styles%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-player\");\n\n//# sourceURL=webpack:///external_%22react-player%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "screenfull":
/*!*****************************!*\
  !*** external "screenfull" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"screenfull\");\n\n//# sourceURL=webpack:///external_%22screenfull%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });