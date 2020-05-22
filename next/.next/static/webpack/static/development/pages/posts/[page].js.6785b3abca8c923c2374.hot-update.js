webpackHotUpdate("static/development/pages/posts/[page].js",{

/***/ "./components/menu.tsx":
/*!*****************************!*\
  !*** ./components/menu.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/churabou/study/react/css-tutorial/components/menu.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"menu__Wrapper\",\n  componentId: \"sc-1krm333-0\"\n})([\"padding:10px;h3{color:var(--theme-color);margin:0px;}ul{margin:0px;padding:10px;list-style:none;li{position:relative;height:50px;:hover{background:#f4f4f4;}a{position:absolute;top:0;left:0;right:0;bottom:0;line-height:30px;text-decoration:none;padding:10px;color:#333;:hover{color:orange;}}}}\"]);\n_c = Wrapper;\n\nvar Menu = function Menu(_ref) {\n  var sections = _ref.sections,\n      LinkComponent = _ref.LinkComponent;\n  return __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, sections.map(function (section, i) {\n    return __jsx(\"div\", {\n      key: \"section-\".concat(i),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }\n    }, __jsx(\"h3\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 11\n      }\n    }, \"section.title\"), __jsx(\"ul\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }\n    }, section.items.map(function (item, i) {\n      return __jsx(\"li\", {\n        key: \"page-\".concat(i),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 15\n        }\n      }, __jsx(LinkComponent, {\n        item: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 38\n        }\n      }));\n    })));\n  }));\n};\n\n_c2 = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUudHN4P2VlNTciXSwibmFtZXMiOlsiV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIk1lbnUiLCJzZWN0aW9ucyIsIkxpbmtDb21wb25lbnQiLCJtYXAiLCJzZWN0aW9uIiwiaSIsIml0ZW1zIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDRTQUFiO0tBQU1GLE87O0FBaUROLElBQU1HLElBQXFCLEdBQUcsU0FBeEJBLElBQXdCLE9BQWlDO0FBQUEsTUFBOUJDLFFBQThCLFFBQTlCQSxRQUE4QjtBQUFBLE1BQXBCQyxhQUFvQixRQUFwQkEsYUFBb0I7QUFDN0QsU0FDRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxRQUFRLENBQUNFLEdBQVQsQ0FBYSxVQUFDQyxPQUFELEVBQWVDLENBQWY7QUFBQSxXQUNaO0FBQUssU0FBRyxvQkFBYUEsQ0FBYixDQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxPQUFPLENBQUNFLEtBQVIsQ0FBY0gsR0FBZCxDQUFrQixVQUFDSSxJQUFELEVBQWFGLENBQWI7QUFBQSxhQUNqQjtBQUFJLFdBQUcsaUJBQVVBLENBQVYsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXVCLE1BQUMsYUFBRDtBQUFlLFlBQUksRUFBRUUsSUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUF2QixDQURpQjtBQUFBLEtBQWxCLENBREgsQ0FGRixDQURZO0FBQUEsR0FBYixDQURILENBREY7QUFjRCxDQWZEOztNQUFNUCxJO0FBaUJTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTBweDtcbiAgaDMge1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgdWwge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBsaSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICA6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogb3JhbmdlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgSXRlbSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XG4gIExpbmtDb21wb25lbnQ/OiBSZWFjdC5GQzx7IGl0ZW06IEl0ZW0gfT47XG4gIHNlY3Rpb25zOiB7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBpdGVtczogSXRlbVtdO1xuICB9W107XG59XG5cbmV4cG9ydCB0eXBlIFNlY3Rpb24gPSBQcm9wc1tcInNlY3Rpb25zXCJdWzBdO1xuXG5jb25zdCBNZW51OiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBzZWN0aW9ucywgTGlua0NvbXBvbmVudCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXI+XG4gICAgICB7c2VjdGlvbnMubWFwKChzZWN0aW9uOiBhbnksIGk6IG51bWJlcikgPT4gKFxuICAgICAgICA8ZGl2IGtleT17YHNlY3Rpb24tJHtpfWB9PlxuICAgICAgICAgIDxoMz5zZWN0aW9uLnRpdGxlPC9oMz5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICB7c2VjdGlvbi5pdGVtcy5tYXAoKGl0ZW06IEl0ZW0sIGk6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtgcGFnZS0ke2l9YH0+ezxMaW5rQ29tcG9uZW50IGl0ZW09e2l0ZW19IC8+fTwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu.tsx\n");

/***/ })

})