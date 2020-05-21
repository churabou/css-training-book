webpackHotUpdate("static/development/pages/posts/[page].js",{

/***/ "./pages/posts/[page].tsx":
/*!********************************!*\
  !*** ./pages/posts/[page].tsx ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/page */ \"./components/page.tsx\");\n/* harmony import */ var _components_liveEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/liveEditor */ \"./components/liveEditor.tsx\");\n/* harmony import */ var _lib_transform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/transform */ \"./lib/transform.ts\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/churabou/study/react/css-tutorial/pages/posts/[page].tsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n// これでlinkを外から入れらるようになった。\n// mdからメニューを取得してページングできるはず。\n// ぱすぱらむを取得すれば（static prposで)\nvar createProps = function createProps(sections) {\n  return {\n    LinkComponent: function LinkComponent(item) {\n      return __jsx(\"a\", {\n        href: item.item.path,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 12\n        }\n      }, item.item.title);\n    },\n    sections: sections\n  };\n};\n\nvar App = function App(_ref) {\n  var _post$contents$find;\n\n  var post = _ref.post,\n      sections = _ref.sections;\n  var menuProps = createProps(sections);\n  var commonCSS = Object(_lib_transform__WEBPACK_IMPORTED_MODULE_5__[\"pulckHtmlCss\"])(((_post$contents$find = post.contents.find(function (c) {\n    return c.type === \"common-css\";\n  })) === null || _post$contents$find === void 0 ? void 0 : _post$contents$find.value) || \"\").css;\n\n  var Content = function Content() {\n    return __jsx(\"div\", {\n      style: {\n        padding: \"40px\"\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 5\n      }\n    }, post.contents.map(function (content, i) {\n      var key = \"\".concat(content.type, \"-\").concat(i);\n\n      if (content.type === \"markdown\" || content.type === \"common-css\") {\n        return __jsx(MarkdownBlock, {\n          key: key,\n          content: content.value,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 18\n          }\n        });\n      }\n\n      if (content.type === \"frontmatter\") {\n        return __jsx(_MDWapper, {\n          key: key,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }\n        }, __jsx(\"h1\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 15\n          }\n        }, content.value.title));\n      }\n\n      return __jsx(_components_liveEditor__WEBPACK_IMPORTED_MODULE_4__[\"default\"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: key\n      }, _objectSpread({\n        commonCSS: commonCSS\n      }, content.value), {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 16\n        }\n      }));\n    }));\n  };\n\n  return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    content: __jsx(Content, {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 25\n      }\n    }),\n    menu: menuProps,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 10\n    }\n  });\n};\n\n_c = App;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c;\n\n$RefreshReg$(_c, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy9bcGFnZV0udHN4PzI1YTgiXSwibmFtZXMiOlsiY3JlYXRlUHJvcHMiLCJzZWN0aW9ucyIsIkxpbmtDb21wb25lbnQiLCJpdGVtIiwicGF0aCIsInRpdGxlIiwiQXBwIiwicG9zdCIsIm1lbnVQcm9wcyIsImNvbW1vbkNTUyIsInB1bGNrSHRtbENzcyIsImNvbnRlbnRzIiwiZmluZCIsImMiLCJ0eXBlIiwidmFsdWUiLCJjc3MiLCJDb250ZW50IiwicGFkZGluZyIsIm1hcCIsImNvbnRlbnQiLCJpIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQTtBQUVBOztBQWlFQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxRQUFEO0FBQUEsU0FBcUM7QUFDdkRDLGlCQUFhLEVBQUUsdUJBQUNDLElBQUQsRUFBZTtBQUM1QixhQUFPO0FBQUcsWUFBSSxFQUFFQSxJQUFJLENBQUNBLElBQUwsQ0FBVUMsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUEwQkQsSUFBSSxDQUFDQSxJQUFMLENBQVVFLEtBQXBDLENBQVA7QUFDRCxLQUhzRDtBQUl2REosWUFBUSxFQUFSQTtBQUp1RCxHQUFyQztBQUFBLENBQXBCOztBQU9BLElBQU1LLEdBQW9CLEdBQUcsU0FBdkJBLEdBQXVCLE9BQXdCO0FBQUE7O0FBQUEsTUFBckJDLElBQXFCLFFBQXJCQSxJQUFxQjtBQUFBLE1BQWZOLFFBQWUsUUFBZkEsUUFBZTtBQUNuRCxNQUFNTyxTQUFTLEdBQUdSLFdBQVcsQ0FBQ0MsUUFBRCxDQUE3QjtBQUVBLE1BQU1RLFNBQVMsR0FBR0MsbUVBQVksQ0FDNUIsd0JBQUFILElBQUksQ0FBQ0ksUUFBTCxDQUFjQyxJQUFkLENBQW1CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLElBQUYsS0FBVyxZQUFsQjtBQUFBLEdBQW5CLDZFQUFvREMsS0FBcEQsS0FBNkQsRUFEakMsQ0FBWixDQUVoQkMsR0FGRjs7QUFJQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQ2Q7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQVgsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dYLElBQUksQ0FBQ0ksUUFBTCxDQUFjUSxHQUFkLENBQWtCLFVBQUNDLE9BQUQsRUFBaUJDLENBQWpCLEVBQStCO0FBQ2hELFVBQU1DLEdBQUcsYUFBTUYsT0FBTyxDQUFDTixJQUFkLGNBQXNCTyxDQUF0QixDQUFUOztBQUNBLFVBQUlELE9BQU8sQ0FBQ04sSUFBUixLQUFpQixVQUFqQixJQUErQk0sT0FBTyxDQUFDTixJQUFSLEtBQWlCLFlBQXBELEVBQWtFO0FBQ2hFLGVBQU8sTUFBQyxhQUFEO0FBQWUsYUFBRyxFQUFFUSxHQUFwQjtBQUF5QixpQkFBTyxFQUFFRixPQUFPLENBQUNMLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztBQUNELFVBQUlLLE9BQU8sQ0FBQ04sSUFBUixLQUFpQixhQUFyQixFQUFvQztBQUNsQyxlQUNFLE1BQUMsU0FBRDtBQUFXLGFBQUcsRUFBRVEsR0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0YsT0FBTyxDQUFDTCxLQUFSLENBQWNWLEtBQW5CLENBREYsQ0FERjtBQUtEOztBQUNELGFBQU8sTUFBQyw4REFBRDtBQUFZLFdBQUcsRUFBRWlCO0FBQWpCO0FBQTRCYixpQkFBUyxFQUFUQTtBQUE1QixTQUEwQ1csT0FBTyxDQUFDTCxLQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQVA7QUFDRCxLQWJBLENBREgsQ0FEYztBQUFBLEdBQWhCOztBQWtCQSxTQUFPLE1BQUMsd0RBQUQ7QUFBTSxXQUFPLEVBQUUsTUFBQyxPQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBZjtBQUE0QixRQUFJLEVBQUVQLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBMUJEOztLQUFNRixHOztBQTRCU0Esa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bcGFnZV0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcGFnZVwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBMaXZlRWRpdG9yIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xpdmVFZGl0b3JcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blwiO1xuaW1wb3J0IHsgdHJhbnNmb3JtQ29udGVudCwgVG9rZW4sIHB1bGNrSHRtbENzcyB9IGZyb20gXCIuLi8uLi9saWIvdHJhbnNmb3JtXCI7XG5pbXBvcnQgeyBQcm9wcyBhcyBNZW51UHJvcHMgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZW51XCI7XG5cbmludGVyZmFjZSBTZWN0aW9uIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXRlbXM6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZztcbiAgfVtdO1xufVxuXG5jb25zdCBmZXRjaFNlY3Rpb25zID0gKCk6IFNlY3Rpb25bXSA9PiB7XG4gIGNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwiY29udGVudHNcIik7XG4gIGNvbnN0IHNlY3Rpb25EaXJlY3RvcmllcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcbiAgcmV0dXJuIHNlY3Rpb25EaXJlY3Rvcmllcy5tYXAoKHNlY3Rpb24pID0+IHtcbiAgICBjb25zdCBmaWxlbmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIHNlY3Rpb24pKTtcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IHNlY3Rpb24sXG4gICAgICBpdGVtczogZmlsZW5hbWVzLm1hcCgobmFtZSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IG5hbWUsXG4gICAgICAgIHBhdGg6IGAke3NlY3Rpb259LiR7bmFtZX1gLFxuICAgICAgfSkpLFxuICAgIH07XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZENvbnRlbnQgPSAoZmlsZW5hbWU6IHN0cmluZyk6IFRva2VuW10gPT4ge1xuICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImNvbnRlbnRzXCIsIGZpbGVuYW1lKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihmaWxlUGF0aCksIFwidXRmOFwiKTtcbiAgY29uc3QgY29udGVudCA9IHRyYW5zZm9ybUNvbnRlbnQoZmlsZUNvbnRlbnRzKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNvbnRlbnRzID0gZmV0Y2hTZWN0aW9ucygpLm1hcCgoc2VjdGlvbjogU2VjdGlvbikgPT5cbiAgICBzZWN0aW9uLml0ZW1zLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgIHBhcmFtczogeyBwYWdlOiBpdGVtLnBhdGggfSxcbiAgICB9KSlcbiAgKTtcbiAgLy8gZmxhdHRlblxuICBjb25zdCBwYXRocyA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGNvbnRlbnRzKTtcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfTogYW55KSB7XG4gIC8vIEhBQ0sgc2VjdGlvbjEuZGVtb+OBv+OBn+OBhOOBq+OBquOBo+OBpuOBhOOCi+OBruOBp3NlY3Rpb24xL2RlbW/jgavjgZnjgotcbiAgY29uc3QgcGF0aCA9IHBhcmFtcy5wYWdlLnJlcGxhY2UoXCIuXCIsIFwiL1wiKTtcbiAgY29uc3QgcHJvcHM6IFByb3BzID0ge1xuICAgIHBvc3Q6IHtcbiAgICAgIGNvbnRlbnRzOiBsb2FkQ29udGVudChwYXRoKSxcbiAgICB9LFxuICAgIHNlY3Rpb25zOiBmZXRjaFNlY3Rpb25zKCksXG4gIH07XG4gIHJldHVybiB7XG4gICAgcHJvcHMsXG4gIH07XG59XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBvc3Q6IHtcbiAgICBjb250ZW50czogVG9rZW5bXTtcbiAgfTtcbiAgc2VjdGlvbnM6IFNlY3Rpb25bXTtcbn1cblxuLy8g44GT44KM44GnbGlua+OCkuWkluOBi+OCieWFpeOCjOOCieOCi+OCiOOBhuOBq+OBquOBo+OBn+OAglxuLy8gbWTjgYvjgonjg6Hjg4vjg6Xjg7zjgpLlj5blvpfjgZfjgabjg5rjg7zjgrjjg7PjgrDjgafjgY3jgovjga/jgZrjgIJcbi8vIOOBseOBmeOBseOCieOCgOOCkuWPluW+l+OBmeOCjOOBsO+8iHN0YXRpYyBwcnBvc+OBpylcbmNvbnN0IGNyZWF0ZVByb3BzID0gKHNlY3Rpb25zOiBTZWN0aW9uW10pOiBNZW51UHJvcHMgPT4gKHtcbiAgTGlua0NvbXBvbmVudDogKGl0ZW06IGFueSkgPT4ge1xuICAgIHJldHVybiA8YSBocmVmPXtpdGVtLml0ZW0ucGF0aH0+e2l0ZW0uaXRlbS50aXRsZX08L2E+O1xuICB9LFxuICBzZWN0aW9ucyxcbn0pO1xuXG5jb25zdCBBcHA6IFJlYWN0LkZDPFByb3BzPiA9ICh7IHBvc3QsIHNlY3Rpb25zIH0pID0+IHtcbiAgY29uc3QgbWVudVByb3BzID0gY3JlYXRlUHJvcHMoc2VjdGlvbnMpO1xuXG4gIGNvbnN0IGNvbW1vbkNTUyA9IHB1bGNrSHRtbENzcyhcbiAgICBwb3N0LmNvbnRlbnRzLmZpbmQoKGMpID0+IGMudHlwZSA9PT0gXCJjb21tb24tY3NzXCIpPy52YWx1ZSB8fCBcIlwiXG4gICkuY3NzO1xuXG4gIGNvbnN0IENvbnRlbnQgPSAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjQwcHhcIiB9fT5cbiAgICAgIHtwb3N0LmNvbnRlbnRzLm1hcCgoY29udGVudDogVG9rZW4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBgJHtjb250ZW50LnR5cGV9LSR7aX1gO1xuICAgICAgICBpZiAoY29udGVudC50eXBlID09PSBcIm1hcmtkb3duXCIgfHwgY29udGVudC50eXBlID09PSBcImNvbW1vbi1jc3NcIikge1xuICAgICAgICAgIHJldHVybiA8TWFya2Rvd25CbG9jayBrZXk9e2tleX0gY29udGVudD17Y29udGVudC52YWx1ZX0gLz47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRlbnQudHlwZSA9PT0gXCJmcm9udG1hdHRlclwiKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxfTURXYXBwZXIga2V5PXtrZXl9PlxuICAgICAgICAgICAgICA8aDE+e2NvbnRlbnQudmFsdWUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDwvX01EV2FwcGVyPlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxMaXZlRWRpdG9yIGtleT17a2V5fSB7Li4ueyBjb21tb25DU1MsIC4uLmNvbnRlbnQudmFsdWUgfX0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIDxQYWdlIGNvbnRlbnQ9ezxDb250ZW50IC8+fSBtZW51PXttZW51UHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/posts/[page].tsx\n");

/***/ })

})