module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Markdown.tsx":
/*!*********************************!*\
  !*** ./components/Markdown.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/churabou/study/react/css-tutorial/components/Markdown.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Markdown__Wapper",
  componentId: "sc-3p5ts5-0"
})(["h1,h2,h3,h4{color:var(--theme-color);}"]);
/* harmony default export */ __webpack_exports__["default"] = (({
  content
}) => __jsx(Wapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 3
  }
}, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
  source: content,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
})));

/***/ }),

/***/ "./components/codeEditor.tsx":
/*!***********************************!*\
  !*** ./components/codeEditor.tsx ***!
  \***********************************/
/*! exports provided: useCodeEditor, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCodeEditor", function() { return useCodeEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "prismjs");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/churabou/study/react/css-tutorial/components/codeEditor.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // FIXME: 自動シンタックスハイライトつきエディター

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "codeEditor__Wrapper",
  componentId: "sc-1thq31z-0"
})([".editor{position:relative;height:500px;.title{width:60px;height:20px;position:absolute;top:-20px;left:0;z-index:4;line-height:20px;text-align:center;background:white;color:var(--theme-color);}.sync{position:absolute;padding:10px;top:0;left:0;bottom:0;width:100%;margin:0;font-size:20px;font-family:Consolas,Monaco,\"Andale Mono\",\"Ubuntu Mono\",monospace;white-space:pre-wrap;line-height:1.5em;word-wrap:break-word;}textarea{resize:none;color:transparent;background:transparent;caret-color:red;border:none;outline:none;}pre{overflow-y:scroll;z-index:-1;}}"]);
const useCodeEditor = ({
  language,
  content
}) => {
  const {
    0: _content,
    1: setContent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(content);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    prismjs__WEBPACK_IMPORTED_MODULE_2___default.a.highlightAll();
  }, [_content]);
  return {
    content: _content,
    setContent,
    language
  };
};

const CodeEditor = ({
  content,
  setContent,
  language
}) => __jsx(Wrapper, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "editor",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 7
  }
}, language), __jsx("pre", {
  className: "sync",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 7
  }
}, __jsx("code", {
  className: `language-${language}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }
}, content)), __jsx("textarea", {
  value: content,
  className: "sync",
  onChange: e => setContent(e.target.value),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 7
  }
}))); // tmp jsut preview


const _CodeEditor = ({
  content,
  setContent,
  language
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 3
  }
}, __jsx("pre", {
  style: {
    overflow: "scroll",
    wordWrap: "break-word"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }
}, __jsx("code", {
  className: `language-${language}`,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 7
  }
}, content)));

/* harmony default export */ __webpack_exports__["default"] = (_CodeEditor);

/***/ }),

/***/ "./components/liveEditor.tsx":
/*!***********************************!*\
  !*** ./components/liveEditor.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _codeEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codeEditor */ "./components/codeEditor.tsx");
var _jsxFileName = "/Users/churabou/study/react/css-tutorial/components/liveEditor.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "liveEditor__Wrapper",
  componentId: "sc-1b1g6v6-0"
})(["display:flex;margin:60px 0px;*{box-sizing:border-box;}.left{width:100%;margin-right:20px;overflow:scroll;}.right{width:100%;background:white;iframe{border:none;width:100%;height:100%;}}"]);

const LiveEditor = ({
  html,
  css,
  commonCSS
}) => {
  const htmlEditor = Object(_codeEditor__WEBPACK_IMPORTED_MODULE_2__["useCodeEditor"])({
    language: "html",
    content: html
  });
  const cssEditor = Object(_codeEditor__WEBPACK_IMPORTED_MODULE_2__["useCodeEditor"])({
    language: "css",
    content: css
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(_codeEditor__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, htmlEditor, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  })), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), __jsx(_codeEditor__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, cssEditor, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("iframe", {
    srcDoc: `<html><style>${commonCSS}${cssEditor.content}</style><body>${htmlEditor.content}</body></html>`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (LiveEditor);

/***/ }),

/***/ "./components/menu.tsx":
/*!*****************************!*\
  !*** ./components/menu.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/churabou/study/react/css-tutorial/components/menu.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "menu__Wrapper",
  componentId: "sc-1krm333-0"
})(["padding:10px;h3{color:var(--theme-color);margin:0px;}ul{margin:0px;padding:10px;list-style:none;li{position:relative;height:50px;:hover{background:#f4f4f4;}a{position:absolute;top:0;left:0;right:0;bottom:0;line-height:30px;text-decoration:none;padding:10px;color:#333;:hover{color:orange;}}}}"]);

const Menu = ({
  sections,
  LinkComponent
}) => {
  return __jsx(Wrapper, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, sections.map((section, i) => __jsx("div", {
    key: `section-${i}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, "section.title"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, section.items.map((item, i) => __jsx("li", {
    key: `page-${i}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, __jsx(LinkComponent, {
    item: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 38
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/page.tsx":
/*!*****************************!*\
  !*** ./components/page.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./components/menu.tsx");
var _jsxFileName = "/Users/churabou/study/react/css-tutorial/components/page.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const Layout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "page__Layout",
  componentId: "vwtru1-0"
})(["height:100vh;.header{padding:20px;h1{margin:0px;}border-bottom:1px #bbb solid;}.split{width:100%;display:flex;&-left{width:350px;border-right:1px solid #bbb;}&-right{flex:auto;}}"]);

const Page = ({
  content,
  menu
}) => {
  return __jsx(Layout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, __jsx("header", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "CSS Traning")), __jsx("div", {
    className: "split",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "split-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_menu__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, menu, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "split-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, content)));
};

/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./lib/transform.ts":
/*!**************************!*\
  !*** ./lib/transform.ts ***!
  \**************************/
/*! exports provided: transformContent, pulckHtmlCss */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformContent", function() { return transformContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pulckHtmlCss", function() { return pulckHtmlCss; });
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_0__);

const transformContent = content => {
  let results = [];
  let block = "";
  const data = gray_matter__WEBPACK_IMPORTED_MODULE_0___default()(content);
  results.push({
    type: "frontmatter",
    value: data.data
  });
  let type = "markdown";
  data.content.split("\n").forEach((line, i) => {
    if (line.includes("BEGIN_COMMON_CSS")) {
      if (block !== "") {
        results.push({
          type: "markdown",
          value: block
        });
      }

      type = "common-css";
      block = "";
      return;
    }

    if (line.includes("BEGIN_LIVE_EDITOR")) {
      if (block !== "") {
        results.push({
          type: "markdown",
          value: block
        });
      }

      type = "live-editor";
      block = "";
      return;
    }

    if (line.includes("END_COMMON_CSS")) {
      results.push({
        type,
        value: block
      });
      block = "";
      return;
    }

    if (line.includes("END_LIVE_EDITOR")) {
      results.push({
        type,
        value: block
      });
      block = "";
      return;
    }

    block += line + "\n";
  });
  results.push({
    type: "markdown",
    value: block
  });
  results = results.map(token => {
    let next = token;

    if (token.type === "live-editor") {
      next.value = pulckHtmlCss(token.value);
    }

    return next;
  });
  return results;
};
function pulckHtmlCss(content) {
  let html = "";
  let css = "";
  let type = "none";
  content.split("\n").forEach(line => {
    if (line.includes("```") && line.includes("html")) {
      type = "html";
      return;
    }

    if (line.includes("```") && line.includes("css")) {
      type = "css";
      return;
    }

    if (line.includes("```")) {
      type = "none";
      return;
    }

    if (type === "html") {
      html += line + "\n";
    }

    if (type === "css") {
      css += line + "\n";
    }
  });
  return {
    html,
    css
  };
}

/***/ }),

/***/ "./pages/posts/[page].tsx":
/*!********************************!*\
  !*** ./pages/posts/[page].tsx ***!
  \********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/page */ "./components/page.tsx");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_liveEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/liveEditor */ "./components/liveEditor.tsx");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Markdown */ "./components/Markdown.tsx");
/* harmony import */ var _lib_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/transform */ "./lib/transform.ts");
var _jsxFileName = "/Users/churabou/study/react/css-tutorial/pages/posts/[page].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const fetchSections = () => {
  const postsDirectory = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), "contents");
  const sectionDirectories = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readdirSync(postsDirectory);
  return sectionDirectories.map(section => {
    const filenames = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readdirSync(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(postsDirectory, section));
    return {
      title: section,
      items: filenames.map(name => ({
        title: name,
        path: `${section}.${name}`
      }))
    };
  });
};

const loadContent = filename => {
  const filePath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), "contents", filename);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_3___default.a.readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default.a.join(filePath), "utf8");
  const content = Object(_lib_transform__WEBPACK_IMPORTED_MODULE_6__["transformContent"])(fileContents);
  return content;
};

async function getStaticPaths() {
  const contents = fetchSections().map(section => section.items.map(item => ({
    params: {
      page: item.path
    }
  }))); // flatten

  const paths = Array.prototype.concat.apply([], contents);
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  // HACK section1.demoみたいになっているのでsection1/demoにする
  const path = params.page.replace(".", "/");
  const props = {
    post: {
      contents: loadContent(path)
    },
    sections: fetchSections()
  };
  return {
    props
  };
}

const App = ({
  post,
  sections
}) => {
  var _post$contents$find;

  // linkを外から入れらるようになった。
  const menuProps = {
    LinkComponent: item => {
      return __jsx("a", {
        href: item.item.path,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 14
        }
      }, item.item.title);
    },
    sections
  };
  const commonCSS = Object(_lib_transform__WEBPACK_IMPORTED_MODULE_6__["pulckHtmlCss"])(((_post$contents$find = post.contents.find(c => c.type === "common-css")) === null || _post$contents$find === void 0 ? void 0 : _post$contents$find.value) || "").css;

  const Content = () => __jsx("div", {
    style: {
      padding: "40px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }, post.contents.map((content, i) => {
    const key = `${content.type}-${i}`;

    if (content.type === "markdown" || content.type === "common-css") {
      return __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: key,
        content: content.value,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 18
        }
      });
    }

    if (content.type === "frontmatter") {
      return __jsx("div", {
        key: key,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, __jsx("h1", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }
      }, content.value.title));
    }

    return __jsx(_components_liveEditor__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      key: key
    }, _objectSpread({
      commonCSS
    }, content.value), {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 16
      }
    }));
  }));

  return __jsx(_components_page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    content: __jsx(Content, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 25
      }
    }),
    menu: menuProps,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ 4:
/*!**************************************!*\
  !*** multi ./pages/posts/[page].tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/churabou/study/react/css-tutorial/pages/posts/[page].tsx */"./pages/posts/[page].tsx");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NYXJrZG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2RlRWRpdG9yLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpdmVFZGl0b3IudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9saWIvdHJhbnNmb3JtLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL3Bvc3RzL1twYWdlXS50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiV2FwcGVyIiwic3R5bGVkIiwiZGl2IiwiY29udGVudCIsIldyYXBwZXIiLCJ1c2VDb2RlRWRpdG9yIiwibGFuZ3VhZ2UiLCJfY29udGVudCIsInNldENvbnRlbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByaXNtIiwiaGlnaGxpZ2h0QWxsIiwiQ29kZUVkaXRvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9Db2RlRWRpdG9yIiwib3ZlcmZsb3ciLCJ3b3JkV3JhcCIsIkxpdmVFZGl0b3IiLCJodG1sIiwiY3NzIiwiY29tbW9uQ1NTIiwiaHRtbEVkaXRvciIsImNzc0VkaXRvciIsIk1lbnUiLCJzZWN0aW9ucyIsIkxpbmtDb21wb25lbnQiLCJtYXAiLCJzZWN0aW9uIiwiaSIsIml0ZW1zIiwiaXRlbSIsIkxheW91dCIsIlBhZ2UiLCJtZW51IiwidHJhbnNmb3JtQ29udGVudCIsInJlc3VsdHMiLCJibG9jayIsImRhdGEiLCJtYXR0ZXIiLCJwdXNoIiwidHlwZSIsInNwbGl0IiwiZm9yRWFjaCIsImxpbmUiLCJpbmNsdWRlcyIsInRva2VuIiwibmV4dCIsInB1bGNrSHRtbENzcyIsImZldGNoU2VjdGlvbnMiLCJwb3N0c0RpcmVjdG9yeSIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsInNlY3Rpb25EaXJlY3RvcmllcyIsImZzIiwicmVhZGRpclN5bmMiLCJmaWxlbmFtZXMiLCJ0aXRsZSIsIm5hbWUiLCJsb2FkQ29udGVudCIsImZpbGVuYW1lIiwiZmlsZVBhdGgiLCJmaWxlQ29udGVudHMiLCJyZWFkRmlsZVN5bmMiLCJnZXRTdGF0aWNQYXRocyIsImNvbnRlbnRzIiwicGFyYW1zIiwicGFnZSIsInBhdGhzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJjb25jYXQiLCJhcHBseSIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJyZXBsYWNlIiwicHJvcHMiLCJwb3N0IiwiQXBwIiwibWVudVByb3BzIiwiZmluZCIsImMiLCJDb250ZW50IiwicGFkZGluZyIsImtleSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QURILENBREY7O0FBa0JBLFNBQU8sTUFBQyx3REFBRDtBQUFNLFdBQU8sRUFBRSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFmO0FBQTRCLFFBQUksRUFBRW1FLFNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBaENEOztBQWtDZUQsa0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0EsK0I7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL3Bvc3RzL1twYWdlXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgV2FwcGVyID0gc3R5bGVkLmRpdmBcbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQge1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGNvbnRlbnQgfTogeyBjb250ZW50OiBzdHJpbmcgfSkgPT4gKFxuICA8V2FwcGVyPlxuICAgIDxSZWFjdE1hcmtkb3duIHNvdXJjZT17Y29udGVudH0gLz5cbiAgPC9XYXBwZXI+XG4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgUHJpc20gZnJvbSBcInByaXNtanNcIjtcblxuLy8gRklYTUU6IOiHquWLleOCt+ODs+OCv+ODg+OCr+OCueODj+OCpOODqeOCpOODiOOBpOOBjeOCqOODh+OCo+OCv+ODvFxuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgLmVkaXRvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgLnRpdGxlIHtcbiAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMjBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiA0O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS1jb2xvcik7XG4gICAgfVxuXG4gICAgLnN5bmMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCBcIkFuZGFsZSBNb25vXCIsIFwiVWJ1bnR1IE1vbm9cIiwgbW9ub3NwYWNlO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIH1cblxuICAgIHRleHRhcmVhIHtcbiAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgY2FyZXQtY29sb3I6IHJlZDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgcHJlIHtcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IHVzZUNvZGVFZGl0b3IgPSAoe1xuICBsYW5ndWFnZSxcbiAgY29udGVudCxcbn06IHtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufSkgPT4ge1xuICBjb25zdCBbX2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoY29udGVudCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgUHJpc20uaGlnaGxpZ2h0QWxsKCk7XG4gIH0sIFtfY29udGVudF0pO1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IF9jb250ZW50LFxuICAgIHNldENvbnRlbnQsXG4gICAgbGFuZ3VhZ2UsXG4gIH07XG59O1xuY29uc3QgQ29kZUVkaXRvcjogUmVhY3QuRkM8e1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHNldENvbnRlbnQ6IChjb250ZW50OiBzdHJpbmcpID0+IHZvaWQ7XG59PiA9ICh7IGNvbnRlbnQsIHNldENvbnRlbnQsIGxhbmd1YWdlIH0pID0+IChcbiAgPFdyYXBwZXI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJlZGl0b3JcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57bGFuZ3VhZ2V9PC9kaXY+XG4gICAgICA8cHJlIGNsYXNzTmFtZT1cInN5bmNcIj5cbiAgICAgICAgPGNvZGUgY2xhc3NOYW1lPXtgbGFuZ3VhZ2UtJHtsYW5ndWFnZX1gfT57Y29udGVudH08L2NvZGU+XG4gICAgICA8L3ByZT5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgY2xhc3NOYW1lPVwic3luY1wiXG4gICAgICAgIG9uQ2hhbmdlPXsoZTogYW55KSA9PiBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIDwvV3JhcHBlcj5cbik7XG5cbi8vIHRtcCBqc3V0IHByZXZpZXdcbmNvbnN0IF9Db2RlRWRpdG9yOiBSZWFjdC5GQzx7XG4gIGxhbmd1YWdlOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgc2V0Q29udGVudDogKGNvbnRlbnQ6IHN0cmluZykgPT4gdm9pZDtcbn0+ID0gKHsgY29udGVudCwgc2V0Q29udGVudCwgbGFuZ3VhZ2UgfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxwcmUgc3R5bGU9e3sgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsIHdvcmRXcmFwOiBcImJyZWFrLXdvcmRcIiB9fT5cbiAgICAgIDxjb2RlIGNsYXNzTmFtZT17YGxhbmd1YWdlLSR7bGFuZ3VhZ2V9YH0+e2NvbnRlbnR9PC9jb2RlPlxuICAgIDwvcHJlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IF9Db2RlRWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDb2RlRWRpdG9yLCB7IHVzZUNvZGVFZGl0b3IgfSBmcm9tIFwiLi9jb2RlRWRpdG9yXCI7XG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDYwcHggMHB4O1xuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAubGVmdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cblxuICAucmlnaHQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGlmcmFtZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IExpdmVFZGl0b3I6IFJlYWN0LkZDPHtcbiAgaHRtbDogc3RyaW5nO1xuICBjc3M6IHN0cmluZztcbiAgY29tbW9uQ1NTPzogc3RyaW5nO1xufT4gPSAoeyBodG1sLCBjc3MsIGNvbW1vbkNTUyB9KSA9PiB7XG4gIGNvbnN0IGh0bWxFZGl0b3IgPSB1c2VDb2RlRWRpdG9yKHtcbiAgICBsYW5ndWFnZTogXCJodG1sXCIsXG4gICAgY29udGVudDogaHRtbCxcbiAgfSk7XG4gIGNvbnN0IGNzc0VkaXRvciA9IHVzZUNvZGVFZGl0b3Ioe1xuICAgIGxhbmd1YWdlOiBcImNzc1wiLFxuICAgIGNvbnRlbnQ6IGNzcyxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgIDxDb2RlRWRpdG9yIHsuLi5odG1sRWRpdG9yfSAvPlxuICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgIDxDb2RlRWRpdG9yIHsuLi5jc3NFZGl0b3J9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgc3JjRG9jPXtgPGh0bWw+PHN0eWxlPiR7Y29tbW9uQ1NTfSR7Y3NzRWRpdG9yLmNvbnRlbnR9PC9zdHlsZT48Ym9keT4ke2h0bWxFZGl0b3IuY29udGVudH08L2JvZHk+PC9odG1sPmB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXZlRWRpdG9yO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEwcHg7XG4gIGgzIHtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIHVsIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbGkge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgICAgIH1cbiAgICAgIGEge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIDpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuaW50ZXJmYWNlIEl0ZW0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBwYXRoOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBMaW5rQ29tcG9uZW50PzogUmVhY3QuRkM8eyBpdGVtOiBJdGVtIH0+O1xuICBzZWN0aW9uczoge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgfVtdO1xufVxuXG5leHBvcnQgdHlwZSBTZWN0aW9uID0gUHJvcHNbXCJzZWN0aW9uc1wiXVswXTtcblxuY29uc3QgTWVudTogUmVhY3QuRkM8UHJvcHM+ID0gKHsgc2VjdGlvbnMsIExpbmtDb21wb25lbnQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAge3NlY3Rpb25zLm1hcCgoc2VjdGlvbjogYW55LCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2BzZWN0aW9uLSR7aX1gfT5cbiAgICAgICAgICA8aDM+c2VjdGlvbi50aXRsZTwvaDM+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3NlY3Rpb24uaXRlbXMubWFwKChpdGVtOiBJdGVtLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17YHBhZ2UtJHtpfWB9Pns8TGlua0NvbXBvbmVudCBpdGVtPXtpdGVtfSAvPn08L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgTGF5b3V0ID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLmhlYWRlciB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoMSB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICNiYmIgc29saWQ7XG4gIH1cbiAgLnNwbGl0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICYtbGVmdCB7XG4gICAgICB3aWR0aDogMzUwcHg7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmJiO1xuICAgIH1cbiAgICAmLXJpZ2h0IHtcbiAgICAgIGZsZXg6IGF1dG87XG4gICAgfVxuICB9XG5gO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBjb250ZW50OiBhbnk7IC8vIEZJWE1FXG4gIG1lbnU6IHtcbiAgICBMaW5rQ29tcG9uZW50PzogYW55OyAvLyBGSVhNRVxuICAgIHNlY3Rpb25zOiBhbnk7XG4gIH07XG59XG5cbmNvbnN0IFBhZ2U6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGNvbnRlbnQsIG1lbnUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8aDE+Q1NTIFRyYW5pbmc8L2gxPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwbGl0XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtbGVmdFwiPlxuICAgICAgICAgIDxNZW51IHsuLi5tZW51fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1yaWdodFwiPntjb250ZW50fTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwiaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUb2tlbiB7XG4gIHR5cGU6IFwibWFya2Rvd25cIiB8IFwibGl2ZS1lZGl0b3JcIiB8IFwiZnJvbnRtYXR0ZXJcIiB8IFwiY29tbW9uLWNzc1wiO1xuICB2YWx1ZTogYW55O1xufVxuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ29udGVudCA9IChjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgbGV0IHJlc3VsdHM6IFRva2VuW10gPSBbXTtcbiAgbGV0IGJsb2NrID0gXCJcIjtcblxuICBjb25zdCBkYXRhID0gbWF0dGVyKGNvbnRlbnQpO1xuXG4gIHJlc3VsdHMucHVzaCh7IHR5cGU6IFwiZnJvbnRtYXR0ZXJcIiwgdmFsdWU6IGRhdGEuZGF0YSB9KTtcblxuICBsZXQgdHlwZTogVG9rZW5bXCJ0eXBlXCJdID0gXCJtYXJrZG93blwiO1xuXG4gIGRhdGEuY29udGVudC5zcGxpdChcIlxcblwiKS5mb3JFYWNoKChsaW5lLCBpKSA9PiB7XG4gICAgaWYgKGxpbmUuaW5jbHVkZXMoXCJCRUdJTl9DT01NT05fQ1NTXCIpKSB7XG4gICAgICBpZiAoYmxvY2sgIT09IFwiXCIpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHsgdHlwZTogXCJtYXJrZG93blwiLCB2YWx1ZTogYmxvY2sgfSk7XG4gICAgICB9XG4gICAgICB0eXBlID0gXCJjb21tb24tY3NzXCI7XG4gICAgICBibG9jayA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGxpbmUuaW5jbHVkZXMoXCJCRUdJTl9MSVZFX0VESVRPUlwiKSkge1xuICAgICAgaWYgKGJsb2NrICE9PSBcIlwiKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7IHR5cGU6IFwibWFya2Rvd25cIiwgdmFsdWU6IGJsb2NrIH0pO1xuICAgICAgfVxuICAgICAgdHlwZSA9IFwibGl2ZS1lZGl0b3JcIjtcbiAgICAgIGJsb2NrID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGluZS5pbmNsdWRlcyhcIkVORF9DT01NT05fQ1NTXCIpKSB7XG4gICAgICByZXN1bHRzLnB1c2goeyB0eXBlLCB2YWx1ZTogYmxvY2sgfSk7XG4gICAgICBibG9jayA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGxpbmUuaW5jbHVkZXMoXCJFTkRfTElWRV9FRElUT1JcIikpIHtcbiAgICAgIHJlc3VsdHMucHVzaCh7IHR5cGUsIHZhbHVlOiBibG9jayB9KTtcbiAgICAgIGJsb2NrID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBibG9jayArPSBsaW5lICsgXCJcXG5cIjtcbiAgfSk7XG5cbiAgcmVzdWx0cy5wdXNoKHsgdHlwZTogXCJtYXJrZG93blwiLCB2YWx1ZTogYmxvY2sgfSk7XG5cbiAgcmVzdWx0cyA9IHJlc3VsdHMubWFwKCh0b2tlbikgPT4ge1xuICAgIGxldCBuZXh0ID0gdG9rZW47XG4gICAgaWYgKHRva2VuLnR5cGUgPT09IFwibGl2ZS1lZGl0b3JcIikge1xuICAgICAgbmV4dC52YWx1ZSA9IHB1bGNrSHRtbENzcyh0b2tlbi52YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0O1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwdWxja0h0bWxDc3MoY29udGVudDogc3RyaW5nKSB7XG4gIGxldCBodG1sID0gXCJcIjtcbiAgbGV0IGNzcyA9IFwiXCI7XG4gIGxldCB0eXBlOiBcImh0bWxcIiB8IFwiY3NzXCIgfCBcIm5vbmVcIiA9IFwibm9uZVwiO1xuXG4gIGNvbnRlbnQuc3BsaXQoXCJcXG5cIikuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgIGlmIChsaW5lLmluY2x1ZGVzKFwiYGBgXCIpICYmIGxpbmUuaW5jbHVkZXMoXCJodG1sXCIpKSB7XG4gICAgICB0eXBlID0gXCJodG1sXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsaW5lLmluY2x1ZGVzKFwiYGBgXCIpICYmIGxpbmUuaW5jbHVkZXMoXCJjc3NcIikpIHtcbiAgICAgIHR5cGUgPSBcImNzc1wiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChsaW5lLmluY2x1ZGVzKFwiYGBgXCIpKSB7XG4gICAgICB0eXBlID0gXCJub25lXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFwiaHRtbFwiKSB7XG4gICAgICBodG1sICs9IGxpbmUgKyBcIlxcblwiO1xuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBcImNzc1wiKSB7XG4gICAgICBjc3MgKz0gbGluZSArIFwiXFxuXCI7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHsgaHRtbCwgY3NzIH07XG59XG4iLCJpbXBvcnQgUGFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9wYWdlXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IExpdmVFZGl0b3IgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGl2ZUVkaXRvclwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01hcmtkb3duXCI7XG5pbXBvcnQgeyB0cmFuc2Zvcm1Db250ZW50LCBUb2tlbiwgcHVsY2tIdG1sQ3NzIH0gZnJvbSBcIi4uLy4uL2xpYi90cmFuc2Zvcm1cIjtcbmltcG9ydCB7IFByb3BzIGFzIE1lbnVQcm9wcyB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL21lbnVcIjtcblxuY29uc3QgZmV0Y2hTZWN0aW9ucyA9ICgpOiBTZWN0aW9uW10gPT4ge1xuICBjb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImNvbnRlbnRzXCIpO1xuICBjb25zdCBzZWN0aW9uRGlyZWN0b3JpZXMgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSk7XG4gIHJldHVybiBzZWN0aW9uRGlyZWN0b3JpZXMubWFwKChzZWN0aW9uKSA9PiB7XG4gICAgY29uc3QgZmlsZW5hbWVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKHBvc3RzRGlyZWN0b3J5LCBzZWN0aW9uKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiBzZWN0aW9uLFxuICAgICAgaXRlbXM6IGZpbGVuYW1lcy5tYXAoKG5hbWUpID0+ICh7XG4gICAgICAgIHRpdGxlOiBuYW1lLFxuICAgICAgICBwYXRoOiBgJHtzZWN0aW9ufS4ke25hbWV9YCxcbiAgICAgIH0pKSxcbiAgICB9O1xuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRDb250ZW50ID0gKGZpbGVuYW1lOiBzdHJpbmcpOiBUb2tlbltdID0+IHtcbiAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJjb250ZW50c1wiLCBmaWxlbmFtZSk7XG4gIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oZmlsZVBhdGgpLCBcInV0ZjhcIik7XG4gIGNvbnN0IGNvbnRlbnQgPSB0cmFuc2Zvcm1Db250ZW50KGZpbGVDb250ZW50cyk7XG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjb250ZW50cyA9IGZldGNoU2VjdGlvbnMoKS5tYXAoKHNlY3Rpb246IFNlY3Rpb24pID0+XG4gICAgc2VjdGlvbi5pdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICBwYXJhbXM6IHsgcGFnZTogaXRlbS5wYXRoIH0sXG4gICAgfSkpXG4gICk7XG4gIC8vIGZsYXR0ZW5cbiAgY29uc3QgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBjb250ZW50cyk7XG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH06IGFueSkge1xuICAvLyBIQUNLIHNlY3Rpb24xLmRlbW/jgb/jgZ/jgYTjgavjgarjgaPjgabjgYTjgovjga7jgadzZWN0aW9uMS9kZW1v44Gr44GZ44KLXG4gIGNvbnN0IHBhdGggPSBwYXJhbXMucGFnZS5yZXBsYWNlKFwiLlwiLCBcIi9cIik7XG4gIGNvbnN0IHByb3BzOiBQcm9wcyA9IHtcbiAgICBwb3N0OiB7XG4gICAgICBjb250ZW50czogbG9hZENvbnRlbnQocGF0aCksXG4gICAgfSxcbiAgICBzZWN0aW9uczogZmV0Y2hTZWN0aW9ucygpLFxuICB9O1xuICByZXR1cm4ge1xuICAgIHByb3BzLFxuICB9O1xufVxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwb3N0OiB7XG4gICAgY29udGVudHM6IFRva2VuW107XG4gIH07XG4gIHNlY3Rpb25zOiBTZWN0aW9uW107XG59XG5cbmNvbnN0IEFwcDogUmVhY3QuRkM8UHJvcHM+ID0gKHsgcG9zdCwgc2VjdGlvbnMgfSkgPT4ge1xuICAvLyBsaW5r44KS5aSW44GL44KJ5YWl44KM44KJ44KL44KI44GG44Gr44Gq44Gj44Gf44CCXG4gIGNvbnN0IG1lbnVQcm9wczogTWVudVByb3BzID0ge1xuICAgIExpbmtDb21wb25lbnQ6IChpdGVtOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiA8YSBocmVmPXtpdGVtLml0ZW0ucGF0aH0+e2l0ZW0uaXRlbS50aXRsZX08L2E+O1xuICAgIH0sXG4gICAgc2VjdGlvbnMsXG4gIH07XG5cbiAgY29uc3QgY29tbW9uQ1NTID0gcHVsY2tIdG1sQ3NzKFxuICAgIHBvc3QuY29udGVudHMuZmluZCgoYykgPT4gYy50eXBlID09PSBcImNvbW1vbi1jc3NcIik/LnZhbHVlIHx8IFwiXCJcbiAgKS5jc3M7XG5cbiAgY29uc3QgQ29udGVudCA9ICgpID0+IChcbiAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiNDBweFwiIH19PlxuICAgICAge3Bvc3QuY29udGVudHMubWFwKChjb250ZW50OiBUb2tlbiwgaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke2NvbnRlbnQudHlwZX0tJHtpfWA7XG4gICAgICAgIGlmIChjb250ZW50LnR5cGUgPT09IFwibWFya2Rvd25cIiB8fCBjb250ZW50LnR5cGUgPT09IFwiY29tbW9uLWNzc1wiKSB7XG4gICAgICAgICAgcmV0dXJuIDxNYXJrZG93biBrZXk9e2tleX0gY29udGVudD17Y29udGVudC52YWx1ZX0gLz47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbnRlbnQudHlwZSA9PT0gXCJmcm9udG1hdHRlclwiKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxuICAgICAgICAgICAgICA8aDE+e2NvbnRlbnQudmFsdWUudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDxMaXZlRWRpdG9yIGtleT17a2V5fSB7Li4ueyBjb21tb25DU1MsIC4uLmNvbnRlbnQudmFsdWUgfX0gLz47XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgKTtcbiAgcmV0dXJuIDxQYWdlIGNvbnRlbnQ9ezxDb250ZW50IC8+fSBtZW51PXttZW51UHJvcHN9IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JheS1tYXR0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hcmtkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=