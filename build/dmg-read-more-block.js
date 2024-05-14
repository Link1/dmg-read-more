/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/dmg-read-more-block.js":
/*!***************************************!*\
  !*** ./blocks/dmg-read-more-block.js ***!
  \***************************************/
/***/ (() => {

eval("function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n// File: dmg-read-more-block.js\n\n(function () {\n  var __ = wp.i18n.__;\n  var registerBlockType = wp.blocks.registerBlockType;\n  var InspectorControls = wp.blockEditor.InspectorControls;\n  var _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    TextControl = _wp$components.TextControl;\n  var _wp$element = wp.element,\n    useState = _wp$element.useState,\n    useEffect = _wp$element.useEffect;\n  var DMGReadMoreBlock = function DMGReadMoreBlock() {\n    var _useState = useState([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n    var _useState3 = useState(''),\n      _useState4 = _slicedToArray(_useState3, 2),\n      searchTerm = _useState4[0],\n      setSearchTerm = _useState4[1];\n    var _useState5 = useState(null),\n      _useState6 = _slicedToArray(_useState5, 2),\n      selectedPost = _useState6[0],\n      setSelectedPost = _useState6[1];\n    useEffect(function () {\n      // Fetch recent posts\n      wp.apiFetch({\n        path: '/wp/v2/posts',\n        method: 'GET',\n        data: {\n          per_page: 5\n        }\n      }).then(function (data) {\n        setPosts(data);\n      });\n    }, []);\n    var onSearchChange = function onSearchChange(value) {\n      setSearchTerm(value);\n      if (value.trim() === '') {\n        // If search term is empty, fetch recent posts\n        wp.apiFetch({\n          path: '/wp/v2/posts',\n          method: 'GET',\n          data: {\n            per_page: 5\n          }\n        }).then(function (data) {\n          setPosts(data);\n        });\n      } else {\n        // Fetch posts based on search term\n        wp.apiFetch({\n          path: '/wp/v2/posts',\n          method: 'GET',\n          data: {\n            search: value,\n            per_page: 5\n          }\n        }).then(function (data) {\n          setPosts(data);\n        });\n      }\n    };\n    var onPostSelect = function onPostSelect(post) {\n      setSelectedPost(post);\n    };\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {\n      title: __('Select Post')\n    }, /*#__PURE__*/React.createElement(TextControl, {\n      label: __('Search for Posts'),\n      value: searchTerm,\n      onChange: onSearchChange\n    }), posts.map(function (post) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        key: post.id,\n        onClick: function onClick() {\n          return onPostSelect(post);\n        }\n      }, post.title.rendered);\n    }))), selectedPost && /*#__PURE__*/React.createElement(\"p\", {\n      className: \"dmg-read-more\"\n    }, \"Read More: \", /*#__PURE__*/React.createElement(\"a\", {\n      href: selectedPost.link\n    }, selectedPost.title.rendered)));\n  };\n  registerBlockType('dmg-read-more/block', {\n    title: __('DMG Read More'),\n    icon: 'admin-links',\n    category: 'common',\n    edit: DMGReadMoreBlock,\n    save: function save() {\n      return null;\n    }\n  });\n})();\n\n//# sourceURL=webpack://dmg-read-more/./blocks/dmg-read-more-block.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./blocks/dmg-read-more-block.js"]();
/******/ 	
/******/ })()
;