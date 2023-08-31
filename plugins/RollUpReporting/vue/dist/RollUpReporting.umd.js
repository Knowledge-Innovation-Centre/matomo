(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CoreHome"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["CoreHome", ], factory);
	else if(typeof exports === 'object')
		exports["RollUpReporting"] = factory(require("CoreHome"), require("vue"));
	else
		root["RollUpReporting"] = factory(root["CoreHome"], root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__19dc__, __WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "plugins/RollUpReporting/vue/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "19dc":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19dc__;

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "FieldRollUpChildren", function() { return /* reexport */ FieldRollUpChildren; });
__webpack_require__.d(__webpack_exports__, "ManageRollUp", function() { return /* reexport */ ManageRollUp; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/RollUpReporting/vue/src/FieldRollUpChildren/FieldRollUpChildren.vue?vue&type=template&id=4d644efe

var _hoisted_1 = ["for", "innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_ManageRollUp = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("ManageRollUp");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_ManageRollUp, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["mergeProps"])({
    name: _ctx.name,
    "model-value": _ctx.modelValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.onChange($event);
    })
  }, _ctx.uiControlAttributes, {
    id: _ctx.name
  }), null, 16, ["name", "model-value", "id"]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("label", {
    for: _ctx.name,
    class: "active",
    innerHTML: _ctx.$sanitize(_ctx.title)
  }, null, 8, _hoisted_1)]);
}
// CONCATENATED MODULE: ./plugins/RollUpReporting/vue/src/FieldRollUpChildren/FieldRollUpChildren.vue?vue&type=template&id=4d644efe

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-babel/node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/@vue/cli-plugin-babel/node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/RollUpReporting/vue/src/ManageRollUp/ManageRollUp.vue?vue&type=template&id=b22e0e9a

var ManageRollUpvue_type_template_id_b22e0e9a_hoisted_1 = {
  class: "manageRollUp"
};

var _hoisted_2 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_3 = {
  for: "rollupsiteid",
  class: "siteSelectorLabel"
};
var _hoisted_4 = {
  for: "rollupcontains"
};

var _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("br", null, null, -1);

var _hoisted_6 = ["placeholder"];
var _hoisted_7 = ["disabled", "value"];
var _hoisted_8 = {
  class: "entityTable"
};
var _hoisted_9 = {
  class: "siteId"
};
var _hoisted_10 = {
  class: "siteName"
};
var _hoisted_11 = {
  class: "siteAction"
};
var _hoisted_12 = {
  colspan: "3"
};
var _hoisted_13 = {
  class: "siteAction"
};
var _hoisted_14 = ["onClick"];
function ManageRollUpvue_type_template_id_b22e0e9a_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SiteSelector = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("SiteSelector");

  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", ManageRollUpvue_type_template_id_b22e0e9a_hoisted_1, [_hoisted_2, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_3, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('RollUpReporting_SelectMeasurable')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])(_component_SiteSelector, {
    modelValue: _ctx.selectedSite,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return _ctx.selectedSite = $event;
    }),
    id: "rollupsiteid",
    "switch-site-on-select": false,
    "show-selected-site": true,
    "only-sites-with-admin-access": true
  }, null, 8, ["modelValue"])])], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.showAllSites]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("div", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", _hoisted_4, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('RollUpReporting_SelectMeasurablesMatchingSearch')), 1), _hoisted_5, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    class: "control_text rollUpSearchMeasurablesField",
    type: "text",
    id: "rollupcontains",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.containsText = $event;
    }),
    placeholder: _ctx.translate('General_Search')
  }, null, 8, _hoisted_6), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vModelText"], _ctx.containsText]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("input", {
    style: {
      "margin-left": "3.5px"
    },
    disabled: !_ctx.containsText,
    class: "btn rollUpSearchFindMeasurables",
    type: "button",
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return _ctx.addSitesContaining(_ctx.containsText);
    }),
    value: _ctx.translate('RollUpReporting_FindMeasurables')
  }, null, 8, _hoisted_7)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.showAllSites]]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("table", _hoisted_8, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("thead", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", _hoisted_9, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Id')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", _hoisted_10, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Name')), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("th", _hoisted_11, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('General_Remove')), 1)])]), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tbody", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("tr", null, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_12, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(_ctx.translate('RollUpReporting_NoMeasurableAssignedYet')), 1)], 512), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], !_ctx.sites.length]]), (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])(_ctx.sites, function (site, index) {
    return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("tr", {
      key: index
    }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(site.id), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(site.name), 1), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("td", _hoisted_13, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("span", {
      class: "icon-minus table-action",
      onClick: function onClick($event) {
        return _ctx.removeSite(site);
      }
    }, null, 8, _hoisted_14)])], 512)), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.sites.length > 0]]);
  }), 128))])])]);
}
// CONCATENATED MODULE: ./plugins/RollUpReporting/vue/src/ManageRollUp/ManageRollUp.vue?vue&type=template&id=b22e0e9a

// EXTERNAL MODULE: external "CoreHome"
var external_CoreHome_ = __webpack_require__("19dc");

// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/RollUpReporting/vue/src/ManageRollUp/ManageRollUp.vue?vue&type=script&lang=ts
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var KEY_NO_SITE_DEFINED = 'nositedefined';
/* harmony default export */ var ManageRollUpvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    modelValue: Array
  },
  components: {
    SiteSelector: external_CoreHome_["SiteSelector"]
  },
  data: function data() {
    return {
      showAllSites: false,
      containsText: '',
      selectedSite: null,
      allSites: null
    };
  },
  created: function created() {
    var _this = this,
        _this$modelValue;

    external_CoreHome_["AjaxHelper"].fetch({
      method: 'SitesManager.getSitesWithAdminAccess',
      filter_limit: -1
    }).then(function (sites) {
      _this.allSites = sites;
    });

    if (!((_this$modelValue = this.modelValue) !== null && _this$modelValue !== void 0 && _this$modelValue.length)) {
      this.$emit('update:modelValue', [KEY_NO_SITE_DEFINED]);
    }
  },
  watch: {
    selectedSite: function selectedSite(newValue) {
      this.addSite(newValue);
    },
    modelValue: function modelValue() {
      var _this$modelValue2;

      if (this.modelValue && this.modelValue.indexOf('all') > -1) {
        this.showAllSites = true;
      }

      if (!this.hasKeyDefined()) {
        this.$emit('update:modelValue', [].concat(_toConsumableArray(this.modelValue || []), [KEY_NO_SITE_DEFINED]));
        return;
      }

      if (((_this$modelValue2 = this.modelValue) === null || _this$modelValue2 === void 0 ? void 0 : _this$modelValue2.length) === 1 && this.hasKeyDefined()) {
        this.showAllSites = false;
      }
    }
  },
  emits: ['update:modelValue'],
  computed: {
    sites: function sites() {
      var _this$allSites,
          _this2 = this;

      if (this.modelValue && this.modelValue.indexOf('all') > -1) {
        return [{
          name: Object(external_CoreHome_["translate"])('RollUpReporting_AllMeasurablesAssigned'),
          id: 'all'
        }];
      }

      var result = [];

      if ((_this$allSites = this.allSites) !== null && _this$allSites !== void 0 && _this$allSites.length && this.modelValue) {
        (this.modelValue || []).forEach(function (idSite) {
          if (idSite === KEY_NO_SITE_DEFINED) {
            return;
          }

          _this2.allSites.forEach(function (site) {
            if (site && site.idsite === idSite) {
              result.push({
                id: site.idsite,
                name: site.name
              });
            }
          });
        });
      }

      return result;
    }
  },
  methods: {
    addSite: function addSite(site) {
      if (this.showAllSites) {
        return;
      }

      if (site && site.id) {
        var update = false;
        var newSiteIds = this.modelValue || [];

        if (site.id === 'all') {
          newSiteIds = [KEY_NO_SITE_DEFINED];
          update = true;
          this.showAllSites = true;
        } // we only add the site id if it was not added before


        if (!this.isSiteIncludedAlready(site.id)) {
          newSiteIds.push(site.id);
          update = true;
        }

        if (update) {
          this.$emit('update:modelValue', newSiteIds);
        }
      }
    },
    isSiteIncludedAlready: function isSiteIncludedAlready(idSite) {
      var _this$modelValue3;

      return ((_this$modelValue3 = this.modelValue) === null || _this$modelValue3 === void 0 ? void 0 : _this$modelValue3.length) && this.modelValue.indexOf(idSite) !== -1;
    },
    removeSite: function removeSite(site) {
      var index = (this.modelValue || []).indexOf(site.id);

      if (index > -1) {
        var newValue = _toConsumableArray(this.modelValue || []);

        newValue.splice(index, 1);
        this.$emit('update:modelValue', newValue);
      }
    },
    addSitesContaining: function addSitesContaining(searchTerm) {
      var _this3 = this;

      if (!searchTerm) {
        return;
      }

      var displaySearchTerm = "\"".concat(external_CoreHome_["Matomo"].helper.escape(external_CoreHome_["Matomo"].helper.htmlEntities(searchTerm)), "\"");
      external_CoreHome_["AjaxHelper"].fetch({
        method: 'SitesManager.getSitesWithAdminAccess',
        pattern: searchTerm,
        filter_limit: -1
      }).then(function (sites) {
        if (!sites || !sites.length) {
          var _sitesToAdd = "<div>\n            <h2>".concat(Object(external_CoreHome_["translate"])('RollUpReporting_MatchingSearchNotFound', displaySearchTerm), "</h2>\n            <input role=\"ok\" type=\"button\" value=\"").concat(Object(external_CoreHome_["translate"])('General_Ok'), "\"/>\n          </div>");

          external_CoreHome_["Matomo"].helper.modalConfirm(_sitesToAdd);
          return;
        }

        var newSites = [];
        var alreadyAddedSites = [];
        sites.forEach(function (site) {
          var siteName = window.vueSanitize(external_CoreHome_["Matomo"].helper.htmlEntities(site.name));
          var siteTitle = "".concat(siteName, " (id ").concat(parseInt("".concat(site.idsite), 10), ")<br />");

          if (_this3.isSiteIncludedAlready(site.idsite)) {
            alreadyAddedSites.push(siteTitle);
          } else {
            newSites.push(siteTitle);
          }
        });
        var title = Object(external_CoreHome_["translate"])('RollUpReporting_MatchingSearchConfirmTitle', newSites.length);

        if (alreadyAddedSites.length) {
          var text = Object(external_CoreHome_["translate"])('RollUpReporting_MatchingSearchConfirmTitleAlreadyAdded', alreadyAddedSites.length);
          title += " (".concat(text, ")");
        }

        var sitesToAdd = "<div><h2>".concat(title, "</h2><p>\n          ").concat(Object(external_CoreHome_["translate"])('RollUpReporting_MatchingSearchMatchedAdd', newSites.length, displaySearchTerm), ":\n          <br /><br />");
        sitesToAdd += newSites.join('');

        if (alreadyAddedSites.length) {
          var _text = Object(external_CoreHome_["translate"])('RollUpReporting_MatchingSearchMatchedAlreadyAdded', alreadyAddedSites.length, displaySearchTerm);

          sitesToAdd += "<br />".concat(_text, ":<br /><br />").concat(alreadyAddedSites.join(''));
        }

        sitesToAdd += "</p><input role=\"yes\" type=\"button\" value=\"".concat(Object(external_CoreHome_["translate"])('General_Yes'), "\"/>\n          <input role=\"no\" type=\"button\" value=\"").concat(Object(external_CoreHome_["translate"])('General_No'), "\"/>\n          </div>");
        external_CoreHome_["Matomo"].helper.modalConfirm(sitesToAdd, {
          yes: function yes() {
            sites.forEach(function (site) {
              return _this3.addSite({
                id: site.idsite,
                name: site.name
              });
            });
          }
        });
      });
    },
    hasKeyDefined: function hasKeyDefined() {
      return (this.modelValue || []).indexOf(KEY_NO_SITE_DEFINED) > -1;
    }
  }
}));
// CONCATENATED MODULE: ./plugins/RollUpReporting/vue/src/ManageRollUp/ManageRollUp.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/RollUpReporting/vue/src/ManageRollUp/ManageRollUp.vue



ManageRollUpvue_type_script_lang_ts.render = ManageRollUpvue_type_template_id_b22e0e9a_render

/* harmony default export */ var ManageRollUp = (ManageRollUpvue_type_script_lang_ts);
// CONCATENATED MODULE: ./node_modules/@vue/cli-plugin-typescript/node_modules/cache-loader/dist/cjs.js??ref--14-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--14-2!./node_modules/@vue/cli-service/node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./plugins/RollUpReporting/vue/src/FieldRollUpChildren/FieldRollUpChildren.vue?vue&type=script&lang=ts


/* harmony default export */ var FieldRollUpChildrenvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  props: {
    name: String,
    uiControlAttributes: Object,
    modelValue: Array,
    title: String
  },
  components: {
    ManageRollUp: ManageRollUp
  },
  inheritAttrs: false,
  methods: {
    onChange: function onChange(newValue) {
      this.$emit('update:modelValue', newValue);
    }
  }
}));
// CONCATENATED MODULE: ./plugins/RollUpReporting/vue/src/FieldRollUpChildren/FieldRollUpChildren.vue?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./plugins/RollUpReporting/vue/src/FieldRollUpChildren/FieldRollUpChildren.vue



FieldRollUpChildrenvue_type_script_lang_ts.render = render

/* harmony default export */ var FieldRollUpChildren = (FieldRollUpChildrenvue_type_script_lang_ts);
// CONCATENATED MODULE: ./plugins/RollUpReporting/vue/src/index.ts
/*!
 * Copyright (C) InnoCraft Ltd - All rights reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property of InnoCraft Ltd.
 * The intellectual and technical concepts contained herein are protected by trade secret or
 * copyright law. Redistribution of this information or reproduction of this material is strictly
 * forbidden unless prior written permission is obtained from InnoCraft Ltd.
 *
 * You shall use this code only in accordance with the license agreement obtained from
 * InnoCraft Ltd.
 *
 * @link https://www.innocraft.com/
 * @license For license details see https://www.innocraft.com/license
 */


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ })

/******/ });
});
//# sourceMappingURL=RollUpReporting.umd.js.map