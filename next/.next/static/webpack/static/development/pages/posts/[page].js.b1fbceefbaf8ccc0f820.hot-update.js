webpackHotUpdate("static/development/pages/posts/[page].js",{

/***/ "./components/menu.tsx":
/*!*****************************!*\
  !*** ./components/menu.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/churabou/study/react/css-tutorial/components/menu.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"menu__Wrapper\",\n  componentId: \"sc-1krm333-0\"\n})([\"padding:10px;h3{color:var(--theme-color);margin:0px;}ul{margin:0px;padding:10px;list-style:none;li{position:relative;height:50px;:hover{background:#f4f4f4;}a{position:absolute;top:0;left:0;right:0;bottom:0;line-height:30px;text-decoration:none;padding:10px;color:#333;:hover{color:orange;}}}}\"]);\n_c = Wrapper;\n\nvar Menu = function Menu(_ref) {\n  var sections = _ref.sections,\n      LinkComponent = _ref.LinkComponent;\n  return __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, sections.map(function (section, i) {\n    return __jsx(\"div\", {\n      key: \"section-\".concat(i),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }\n    }, \"section.title\"), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }, section.items.map(function (item, i) {\n      return __jsx(\"li\", {\n        key: \"page-\".concat(i),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 15\n        }\n      }, __jsx(LinkComponent, {\n        item: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 38\n        }\n      }));\n    })));\n  }));\n};\n\n_c2 = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUudHN4P2VlNTciXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIk1lbnUiLCJzZWN0aW9ucyIsIkxpbmtDb21wb25lbnQiLCJtYXAiLCJzZWN0aW9uIiwiaSIsIml0ZW1zIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRTQUFiO0tBQU1GLE87O0FBK0NOLElBQU1HLElBQXFCLEdBQUcsU0FBeEJBLElBQXdCLE9BQWlDO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDN0QsU0FDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWVDLENBQWY7QUFBQSxXQUNaO0FBQUssU0FBRyxvQkFBYUEsQ0FBYixDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxPQUFPLENBQUNFLEtBQVIsQ0FBY0gsR0FBZCxDQUFrQixVQUFDSSxJQUFELEVBQWFGLENBQWI7QUFBQSxhQUNqQjtBQUFJLFdBQUcsaUJBQVVBLENBQVYsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVCLE1BQUMsYUFBRDtBQUFlLFlBQUksRUFBRUUsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF2QixDQURpQjtBQUFBLEtBQWxCLENBREgsQ0FGRixDQURZO0FBQUEsR0FBYixDQURILENBREY7QUFjRCxDQWZEOztNQUFNUCxJO0FBaUJTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTBweDtcbiAgaDMge1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgdWwge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICA6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgSXRlbSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIExpbmtDb21wb25lbnQ/OiBSZWFjdC5GQzx7IGl0ZW06IEl0ZW0gfT47XG4gIHNlY3Rpb25zOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpdGVtczogSXRlbVtdO1xuICB9W107XG59XG5cbmNvbnN0IE1lbnU6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHNlY3Rpb25zLCBMaW5rQ29tcG9uZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb246IGFueSwgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtgc2VjdGlvbi0ke2l9YH0+XG4gICAgICAgICAgPGgzPnNlY3Rpb24udGl0bGU8L2gzPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtzZWN0aW9uLml0ZW1zLm1hcCgoaXRlbTogSXRlbSwgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2BwYWdlLSR7aX1gfT57PExpbmtDb21wb25lbnQgaXRlbT17aXRlbX0gLz59PC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9XcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/menu.tsx\n");

/***/ }),

/***/ "./pages/posts/[page].tsx":
/*!********************************!*\
  !*** ./pages/posts/[page].tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/page */ \"./components/page.tsx\");\n/* harmony import */ var _components_liveEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/liveEditor */ \"./components/liveEditor.tsx\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _lib_transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/transform */ \"./lib/transform.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/churabou/study/react/css-tutorial/pages/posts/[page].tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar _MDWapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div.withConfig({\n  displayName: \"page___MDWapper\",\n  componentId: \"mxv6kk-0\"\n})([\"h1,h2,h3,h4{color:var(--theme-color);}\"]);\n\nvar MarkdownBlock = function MarkdownBlock(_ref) {\n  var content = _ref.content;\n  return __jsx(_MDWapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 3\n    }\n  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    source: content,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }));\n}; // これでlinkを外から入れらるようになった。\n// mdからメニューを取得してページングできるはず。\n// ぱすぱらむを取得すれば（static prposで)\n\n\n_c = MarkdownBlock;\n\nvar createProps = function createProps(sections) {\n  return {\n    LinkComponent: function LinkComponent(item) {\n      return __jsx(\"a\", {\n        href: item.item.path,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 12\n        }\n      }, item.item.title);\n    },\n    sections: sections\n  };\n};\n\nvar App = function App(_ref2) {\n  var _post$contents$find;\n\n  var post = _ref2.post,\n      sections = _ref2.sections;\n  var menuProps = createProps(sections);\n  var commonCSS = Object(_lib_transform__WEBPACK_IMPORTED_MODULE_7__[\"pulckHtmlCss\"])(((_post$contents$find = post.contents.find(function (c) {\n    return c.type === \"common-css\";\n  })) === null || _post$contents$find === void 0 ? void 0 : _post$contents$find.value) || \"\").css;\n\n  var Content = function Content() {\n    return __jsx(\"div\", {\n      style: {\n        padding: \"40px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 5\n      }\n    }, post.contents.map(function (content, i) {\n      var key = \"\".concat(content.type, \"-\").concat(i);\n\n      if (content.type === \"markdown\" || content.type === \"common-css\") {\n        return __jsx(MarkdownBlock, {\n          key: key,\n          content: content.value,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 18\n          }\n        });\n      }\n\n      if (content.type === \"frontmatter\") {\n        return __jsx(_MDWapper, {\n          key: key,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 13\n          }\n        }, __jsx(\"h1\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 15\n          }\n        }, content.value.title));\n      }\n\n      return __jsx(_components_liveEditor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: key\n      }, _objectSpread({\n        commonCSS: commonCSS\n      }, content.value), {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 16\n        }\n      }));\n    }));\n  };\n\n  return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    content: __jsx(Content, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 25\n      }\n    }),\n    menu: menuProps,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 10\n    }\n  });\n};\n\n_c2 = App;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"MarkdownBlock\");\n$RefreshReg$(_c2, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9bcGFnZV0udHN4PzI1YTgiXSwibmFtZXMiOlsiX01EV2FwcGVyIiwic3R5bGVkIiwiZGl2IiwiTWFya2Rvd25CbG9jayIsImNvbnRlbnQiLCJjcmVhdGVQcm9wcyIsInNlY3Rpb25zIiwiTGlua0NvbXBvbmVudCIsIml0ZW0iLCJwYXRoIiwidGl0bGUiLCJBcHAiLCJwb3N0IiwibWVudVByb3BzIiwiY29tbW9uQ1NTIiwicHVsY2tIdG1sQ3NzIiwiY29udGVudHMiLCJmaW5kIiwiYyIsInR5cGUiLCJ2YWx1ZSIsImNzcyIsIkNvbnRlbnQiLCJwYWRkaW5nIiwibWFwIiwiaSIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBaUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSw4Q0FBZjs7QUFTQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FDcEIsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQWUsVUFBTSxFQUFFQSxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FEb0I7QUFBQSxDQUF0QixDLENBTUE7QUFDQTtBQUNBOzs7S0FSTUQsYTs7QUFTTixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFEO0FBQUEsU0FBcUM7QUFDdkRDLGlCQUFhLEVBQUUsdUJBQUNDLElBQUQsRUFBZTtBQUM1QixhQUFPO0FBQUcsWUFBSSxFQUFFQSxJQUFJLENBQUNBLElBQUwsQ0FBVUMsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEwQkQsSUFBSSxDQUFDQSxJQUFMLENBQVVFLEtBQXBDLENBQVA7QUFDRCxLQUhzRDtBQUl2REosWUFBUSxFQUFSQTtBQUp1RCxHQUFyQztBQUFBLENBQXBCOztBQU9BLElBQU1LLEdBQW9CLEdBQUcsU0FBdkJBLEdBQXVCLFFBQXdCO0FBQUE7O0FBQUEsTUFBckJDLElBQXFCLFNBQXJCQSxJQUFxQjtBQUFBLE1BQWZOLFFBQWUsU0FBZkEsUUFBZTtBQUNuRCxNQUFNTyxTQUFTLEdBQUdSLFdBQVcsQ0FBQ0MsUUFBRCxDQUE3QjtBQUVBLE1BQU1RLFNBQVMsR0FBR0MsbUVBQVksQ0FDNUIsd0JBQUFILElBQUksQ0FBQ0ksUUFBTCxDQUFjQyxJQUFkLENBQW1CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLElBQUYsS0FBVyxZQUFsQjtBQUFBLEdBQW5CLDZFQUFvREMsS0FBcEQsS0FBNkQsRUFEakMsQ0FBWixDQUVoQkMsR0FGRjs7QUFJQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQ2Q7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dYLElBQUksQ0FBQ0ksUUFBTCxDQUFjUSxHQUFkLENBQWtCLFVBQUNwQixPQUFELEVBQWlCcUIsQ0FBakIsRUFBK0I7QUFDaEQsVUFBTUMsR0FBRyxhQUFNdEIsT0FBTyxDQUFDZSxJQUFkLGNBQXNCTSxDQUF0QixDQUFUOztBQUNBLFVBQUlyQixPQUFPLENBQUNlLElBQVIsS0FBaUIsVUFBakIsSUFBK0JmLE9BQU8sQ0FBQ2UsSUFBUixLQUFpQixZQUFwRCxFQUFrRTtBQUNoRSxlQUFPLE1BQUMsYUFBRDtBQUFlLGFBQUcsRUFBRU8sR0FBcEI7QUFBeUIsaUJBQU8sRUFBRXRCLE9BQU8sQ0FBQ2dCLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUNELFVBQUloQixPQUFPLENBQUNlLElBQVIsS0FBaUIsYUFBckIsRUFBb0M7QUFDbEMsZUFDRSxNQUFDLFNBQUQ7QUFBVyxhQUFHLEVBQUVPLEdBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUt0QixPQUFPLENBQUNnQixLQUFSLENBQWNWLEtBQW5CLENBREYsQ0FERjtBQUtEOztBQUNELGFBQU8sTUFBQyw4REFBRDtBQUFZLFdBQUcsRUFBRWdCO0FBQWpCO0FBQTRCWixpQkFBUyxFQUFUQTtBQUE1QixTQUEwQ1YsT0FBTyxDQUFDZ0IsS0FBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFQO0FBQ0QsS0FiQSxDQURILENBRGM7QUFBQSxHQUFoQjs7QUFrQkEsU0FBTyxNQUFDLHdEQUFEO0FBQU0sV0FBTyxFQUFFLE1BQUMsT0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWY7QUFBNEIsUUFBSSxFQUFFUCxTQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQTFCRDs7TUFBTUYsRzs7QUE0QlNBLGtFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9zdHMvW3BhZ2VdLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3BhZ2VcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgTGl2ZUVkaXRvciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9saXZlRWRpdG9yXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm1Db250ZW50LCBUb2tlbiwgcHVsY2tIdG1sQ3NzIH0gZnJvbSBcIi4uLy4uL2xpYi90cmFuc2Zvcm1cIjtcbmltcG9ydCB7IFByb3BzIGFzIE1lbnVQcm9wcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lbnVcIjtcblxuaW50ZXJmYWNlIFNlY3Rpb24ge1xuICB0aXRsZTogc3RyaW5nO1xuICBpdGVtczoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgcGF0aDogc3RyaW5nO1xuICB9W107XG59XG5cbmNvbnN0IGZldGNoU2VjdGlvbnMgPSAoKTogU2VjdGlvbltdID0+IHtcbiAgY29uc3QgcG9zdHNEaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJjb250ZW50c1wiKTtcbiAgY29uc3Qgc2VjdGlvbkRpcmVjdG9yaWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xuICByZXR1cm4gc2VjdGlvbkRpcmVjdG9yaWVzLm1hcCgoc2VjdGlvbikgPT4ge1xuICAgIGNvbnN0IGZpbGVuYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgc2VjdGlvbikpO1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogc2VjdGlvbixcbiAgICAgIGl0ZW1zOiBmaWxlbmFtZXMubWFwKChuYW1lKSA9PiAoe1xuICAgICAgICB0aXRsZTogbmFtZSxcbiAgICAgICAgcGF0aDogYCR7c2VjdGlvbn0uJHtuYW1lfWAsXG4gICAgICB9KSksXG4gICAgfTtcbiAgfSk7XG59O1xuXG5jb25zdCBsb2FkQ29udGVudCA9IChmaWxlbmFtZTogc3RyaW5nKTogVG9rZW5bXSA9PiB7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiY29udGVudHNcIiwgZmlsZW5hbWUpO1xuICBjb25zdCBmaWxlQ29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGZpbGVQYXRoKSwgXCJ1dGY4XCIpO1xuICBjb25zdCBjb250ZW50ID0gdHJhbnNmb3JtQ29udGVudChmaWxlQ29udGVudHMpO1xuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY29udGVudHMgPSBmZXRjaFNlY3Rpb25zKCkubWFwKChzZWN0aW9uOiBTZWN0aW9uKSA9PlxuICAgIHNlY3Rpb24uaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IHBhZ2U6IGl0ZW0ucGF0aCB9LFxuICAgIH0pKVxuICApO1xuICAvLyBmbGF0dGVuXG4gIGNvbnN0IHBhdGhzID0gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgY29udGVudHMpO1xuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9OiBhbnkpIHtcbiAgLy8gSEFDSyBzZWN0aW9uMS5kZW1v44G/44Gf44GE44Gr44Gq44Gj44Gm44GE44KL44Gu44Gnc2VjdGlvbjEvZGVtb+OBq+OBmeOCi1xuICBjb25zdCBwYXRoID0gcGFyYW1zLnBhZ2UucmVwbGFjZShcIi5cIiwgXCIvXCIpO1xuICBjb25zdCBwcm9wczogUHJvcHMgPSB7XG4gICAgcG9zdDoge1xuICAgICAgY29udGVudHM6IGxvYWRDb250ZW50KHBhdGgpLFxuICAgIH0sXG4gICAgc2VjdGlvbnM6IGZldGNoU2VjdGlvbnMoKSxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wcyxcbiAgfTtcbn1cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcG9zdDoge1xuICAgIGNvbnRlbnRzOiBUb2tlbltdO1xuICB9O1xuICBzZWN0aW9uczogU2VjdGlvbltdO1xufVxuXG5jb25zdCBfTURXYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCB7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgfVxuYDtcblxuY29uc3QgTWFya2Rvd25CbG9jayA9ICh7IGNvbnRlbnQgfTogeyBjb250ZW50OiBzdHJpbmcgfSkgPT4gKFxuICA8X01EV2FwcGVyPlxuICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17Y29udGVudH0gLz5cbiAgPC9fTURXYXBwZXI+XG4pO1xuXG4vLyDjgZPjgozjgadsaW5r44KS5aSW44GL44KJ5YWl44KM44KJ44KL44KI44GG44Gr44Gq44Gj44Gf44CCXG4vLyBtZOOBi+OCieODoeODi+ODpeODvOOCkuWPluW+l+OBl+OBpuODmuODvOOCuOODs+OCsOOBp+OBjeOCi+OBr+OBmuOAglxuLy8g44Gx44GZ44Gx44KJ44KA44KS5Y+W5b6X44GZ44KM44Gw77yIc3RhdGljIHBycG9z44GnKVxuY29uc3QgY3JlYXRlUHJvcHMgPSAoc2VjdGlvbnM6IFNlY3Rpb25bXSk6IE1lbnVQcm9wcyA9PiAoe1xuICBMaW5rQ29tcG9uZW50OiAoaXRlbTogYW55KSA9PiB7XG4gICAgcmV0dXJuIDxhIGhyZWY9e2l0ZW0uaXRlbS5wYXRofT57aXRlbS5pdGVtLnRpdGxlfTwvYT47XG4gIH0sXG4gIHNlY3Rpb25zLFxufSk7XG5cbmNvbnN0IEFwcDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcG9zdCwgc2VjdGlvbnMgfSkgPT4ge1xuICBjb25zdCBtZW51UHJvcHMgPSBjcmVhdGVQcm9wcyhzZWN0aW9ucyk7XG5cbiAgY29uc3QgY29tbW9uQ1NTID0gcHVsY2tIdG1sQ3NzKFxuICAgIHBvc3QuY29udGVudHMuZmluZCgoYykgPT4gYy50eXBlID09PSBcImNvbW1vbi1jc3NcIik/LnZhbHVlIHx8IFwiXCJcbiAgKS5jc3M7XG5cbiAgY29uc3QgQ29udGVudCA9ICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiNDBweFwiIH19PlxuICAgICAge3Bvc3QuY29udGVudHMubWFwKChjb250ZW50OiBUb2tlbiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke2NvbnRlbnQudHlwZX0tJHtpfWA7XG4gICAgICAgIGlmIChjb250ZW50LnR5cGUgPT09IFwibWFya2Rvd25cIiB8fCBjb250ZW50LnR5cGUgPT09IFwiY29tbW9uLWNzc1wiKSB7XG4gICAgICAgICAgcmV0dXJuIDxNYXJrZG93bkJsb2NrIGtleT17a2V5fSBjb250ZW50PXtjb250ZW50LnZhbHVlfSAvPjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29udGVudC50eXBlID09PSBcImZyb250bWF0dGVyXCIpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPF9NRFdhcHBlciBrZXk9e2tleX0+XG4gICAgICAgICAgICAgIDxoMT57Y29udGVudC52YWx1ZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgPC9fTURXYXBwZXI+XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gPExpdmVFZGl0b3Iga2V5PXtrZXl9IHsuLi57IGNvbW1vbkNTUywgLi4uY29udGVudC52YWx1ZSB9fSAvPjtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xuICByZXR1cm4gPFBhZ2UgY29udGVudD17PENvbnRlbnQgLz59IG1lbnU9e21lbnVQcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[page].tsx\n");

/***/ })

})