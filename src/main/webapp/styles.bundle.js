webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"import\":false}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  font-size: 100%;\n  font-family: 'Open sans', Verdana, Helvetica, sans serif;\n  margin: 0;\n}\n.build-monitor.dashboard {\n  font-size: 0.6875em;\n}\n.build-monitor header h1 {\n  font-size: 3em;\n  letter-spacing: 0.1em;\n}\n.build-monitor nav label {\n  font-size: 1em;\n}\n.build-monitor .main {\n  font-size: 24px;\n}\n.modal-header h1 {\n  font-size: 2.5em;\n}\n.modal-body p {\n  font-size: 1.2em;\n}\n.modal textarea {\n  font-family: \"Consolas\", \"Menlo\", \"Courier\", monospace;\n}\nbody {\n  margin: 0;\n}\n.build-monitor.dashboard {\n  height: 100vh;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -moz-justify-content: space-between;\n  -ms-justify-content: space-between;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: auto;\n}\n.build-monitor.dashboard > header {\n  height: 58px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.build-monitor.dashboard > .main {\n  display: block;\n  -moz-flex: 1 1 0px;\n  -ms-flex: 1 1 0px;\n  -webkit-box-flex: 1;\n          flex: 1 1 0px;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -moz-justify-content: space-between;\n  -ms-justify-content: space-between;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0px 8px 4px 8px;\n}\n.build-monitor.dashboard > footer {\n  height: 24px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.build-monitor .main.empty {\n  -moz-justify-content: space-around;\n  -ms-justify-content: space-around;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 0 10%;\n  text-align: center;\n}\n.build-monitor .main.empty div.notice {\n  -webkit-box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);\n  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 2em;\n}\n.build-monitor .main.empty div.notice p {\n  margin: 0;\n  color: #ddd;\n}\n.build-monitor.dashboard #widgets {\n  -moz-flex: 1;\n  -ms-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-flow: row wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-flow: row wrap;\n  -moz-justify-content: space-between;\n  -ms-justify-content: space-between;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  list-style-type: none;\n  margin: 4px 4px -4px -6px;\n  padding: 0;\n}\n.build-monitor.dashboard #widgets > li {\n  -moz-flex: 1;\n  -ms-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: visible;\n}\n.build-monitor.dashboard #widgets > li {\n  margin: 0 0 8px 8px;\n}\n.build-monitor.dashboard #widgets.columns-1 > li {\n  -moz-flex: 100%;\n  -ms-flex: 100%;\n  -webkit-box-flex: 100%;\n          flex: 100%;\n}\n.build-monitor.dashboard #widgets.columns-2 > li {\n  -moz-flex: 49%;\n  -ms-flex: 49%;\n  -webkit-box-flex: 49%;\n          flex: 49%;\n}\n.build-monitor.dashboard #widgets.columns-3 > li {\n  -moz-flex: 32.333333333333336%;\n  -ms-flex: 32.333333333333336%;\n  -webkit-box-flex: 32.333333333333336%;\n          flex: 32.333333333333336%;\n}\n.build-monitor.dashboard #widgets.columns-4 > li {\n  -moz-flex: 24%;\n  -ms-flex: 24%;\n  -webkit-box-flex: 24%;\n          flex: 24%;\n}\n.build-monitor.dashboard #widgets.columns-5 > li {\n  -moz-flex: 19%;\n  -ms-flex: 19%;\n  -webkit-box-flex: 19%;\n          flex: 19%;\n}\n.build-monitor.dashboard #widgets.columns-6 > li {\n  -moz-flex: 15.666666666666666%;\n  -ms-flex: 15.666666666666666%;\n  -webkit-box-flex: 15.666666666666666%;\n          flex: 15.666666666666666%;\n}\n.build-monitor.dashboard #widgets.columns-7 > li {\n  -moz-flex: 13.285714285714286%;\n  -ms-flex: 13.285714285714286%;\n  -webkit-box-flex: 13.285714285714286%;\n          flex: 13.285714285714286%;\n}\n.build-monitor.dashboard #widgets.columns-8 > li {\n  -moz-flex: 11.5%;\n  -ms-flex: 11.5%;\n  -webkit-box-flex: 11.5%;\n          flex: 11.5%;\n}\n.build-monitor.dashboard > footer {\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -moz-justify-content: space-between;\n  -ms-justify-content: space-between;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0 4px;\n  color: #ddd;\n}\n.build-monitor.dashboard > footer .column {\n  -moz-flex: 1;\n  -ms-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.build-monitor.dashboard > footer .column.connectivity .notifier {\n  display: inline-block;\n  margin: 2px 2px 0 6px;\n  padding: 2px 10px;\n  border-radius: 10px;\n  background: #ffcf85;\n  color: #393939;\n}\n.build-monitor.dashboard > footer .column.version-info {\n  margin: 2px 4px 0 0;\n  text-align: right;\n}\n.modal {\n  font-size: 1em;\n}\n.build-monitor.colour-blind-mode .progress {\n  opacity: 0.60;\n}\n.build-monitor .project.unknown > .progress {\n  background-color: #9d9d9d;\n}\n.build-monitor .project.successful > .progress {\n  background-color: green;\n}\n.build-monitor .project.unstable > .progress {\n  background-color: #f9aa1c;\n}\n.build-monitor .project.failing > .progress {\n  background-color: firebrick;\n}\n.build-monitor .project.aborted > .progress {\n  background-color: #909090;\n}\n.build-monitor:not(.reduce-motion-mode) .project.unknown > .progress.updated {\n  -webkit-animation: forUnknown 2.25s 2 alternate;\n  animation: forUnknown 2.25s 2 alternate;\n}\n.build-monitor:not(.reduce-motion-mode) .project.successful > .progress.updated {\n  -webkit-animation: forSuccessful 2.25s 2 alternate;\n  animation: forSuccessful 2.25s 2 alternate;\n}\n.build-monitor:not(.reduce-motion-mode) .project.unstable > .progress.updated {\n  -webkit-animation: forUnstable 2.25s 2 alternate;\n  animation: forUnstable 2.25s 2 alternate;\n}\n.build-monitor:not(.reduce-motion-mode) .project.failing > .progress.updated {\n  -webkit-animation: forFailing 2.25s 2 alternate;\n  animation: forFailing 2.25s 2 alternate;\n}\n.build-monitor:not(.reduce-motion-mode) .project.aborted > .progress.updated {\n  -webkit-animation: forAborted 2.25s 2 alternate;\n  animation: forAborted 2.25s 2 alternate;\n}\n@-webkit-keyframes forUnknown {\n  0% {\n    background-color: #9d9d9d;\n  }\n  100% {\n    background-color: grey;\n  }\n}\n@keyframes forUnknown {\n  0% {\n    background-color: #9d9d9d;\n  }\n  100% {\n    background-color: grey;\n  }\n}\n@-webkit-keyframes forSuccessful {\n  0% {\n    background-color: green;\n  }\n  100% {\n    background-color: limegreen;\n  }\n}\n@keyframes forSuccessful {\n  0% {\n    background-color: green;\n  }\n  100% {\n    background-color: limegreen;\n  }\n}\n@-webkit-keyframes forUnstable {\n  0% {\n    background-color: #f9aa1c;\n  }\n  100% {\n    background-color: #ffc500;\n  }\n}\n@keyframes forUnstable {\n  0% {\n    background-color: #f9aa1c;\n  }\n  100% {\n    background-color: #ffc500;\n  }\n}\n@-webkit-keyframes forFailing {\n  0% {\n    background-color: firebrick;\n  }\n  100% {\n    background-color: red;\n  }\n}\n@keyframes forFailing {\n  0% {\n    background-color: firebrick;\n  }\n  100% {\n    background-color: red;\n  }\n}\n@-webkit-keyframes forAborted {\n  0% {\n    background-color: #909090;\n  }\n  100% {\n    background-color: #a9a9a9;\n  }\n}\n@keyframes forAborted {\n  0% {\n    background-color: #909090;\n  }\n  100% {\n    background-color: #a9a9a9;\n  }\n}\n.build-monitor .widget.basic.project header h2 {\n  font-size: 2.5em;\n}\n.build-monitor .widget.basic.project .slots .slot {\n  font-size: 1.5em;\n  font-weight: bold;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.build-monitor .widget.basic.project {\n  -moz-flex: 1 1 auto;\n  -ms-flex: 1 1 auto;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -moz-justify-content: flex-end;\n  -ms-justify-content: flex-end;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.build-monitor .widget.basic.project header {\n  -moz-flex: 3 2 auto;\n  -ms-flex: 3 2 auto;\n  -webkit-box-flex: 3;\n          flex: 3 2 auto;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -moz-justify-content: flex-end;\n  -ms-justify-content: flex-end;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.build-monitor .widget.basic.project .slots {\n  -moz-flex: 2 3 auto;\n  -ms-flex: 2 3 auto;\n  -webkit-box-flex: 2;\n          flex: 2 3 auto;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-flex-direction: row;\n  -ms-flex-direction: row;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 5px 5px 5px 5px;\n\n}\n.build-monitor .widget.basic.project .slots ul {\n  width: 100%;\n}\n.build-monitor .widget.basic.project .slots li {\n  width: 100%;\n}\n.build-monitor .widget.basic.project .slots .slot {\n  -moz-flex: 1;\n  -ms-flex: 1;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-flex-direction: column;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -moz-justify-content: flex-end;\n  -ms-justify-content: flex-end;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n}\n.build-monitor .widget.basic.project {\n  position: relative;\n  border-radius: 10px;\n  overflow-y: hidden;\n  min-height: 0px;\n}\n.build-monitor .widget.basic.project header {\n  position: relative;\n  margin: 8px 8px 0 8px;\n  overflow: hidden;\n}\n.build-monitor .widget.basic.project header ul.details {\n  margin: 0.25em 0 0 0;\n  padding: 0;\n  list-style-type: none;\n  text-align: center;\n}\n.build-monitor .widget.basic.project header ul.details li {\n  margin: 0 0 0.25em 0;\n}\n.build-monitor .widget.basic.project header .build-failure-analyzer-plugin ul.identified-failures {\n  list-style-type: none;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n}\n.build-monitor .widget.basic.project header .build-failure-analyzer-plugin ul.identified-failures li {\n  display: inline-block;\n  margin-right: 0.5em;\n}\n.build-monitor .widget.basic.project header .build-failure-analyzer-plugin ul.identified-failures li:after {\n  content: \",\";\n}\n.build-monitor .widget.basic.project header .build-failure-analyzer-plugin ul.identified-failures li:last-child:after {\n  content: \"\";\n}\n.build-monitor .widget.basic.project .slots .slot-1 {\n  text-align: left;\n  padding: 0 0 4px 8px;\n  display: inline;\n  width: 50%;\n  opacity: 0.5;\n  font-weight: bold;\n}\n.build-monitor .widget.basic.project .slots .slot-1 .job-exec-ok{\n  color: #64FE2E;\n  font-size: 120%\n}\n.build-monitor .widget.basic.project .slots .slot-1 .job-exec-ko{\n  color: #F5E31A;\n  font-size: 120%\n}\n.build-monitor .widget.basic.project .slots .slot-1 .job-exec-un{\n  color: #0FA8D2;\n  font-size: 120%\n}\n.build-monitor .widget.basic.project .slots .slot-1 .job-exec-unk{\n  color: #0FA8D2;\n  font-size: 120%\n}\n.build-monitor .widget.basic.project .slots .slot-1 .slot-4 {\n  text-align: right;\n  padding: 0 0 4px 8px;\n  display: inline;\n  width: 50%;  \n  font-weight: bold;\n  opacity: 0.75;\n  float: right;  \n}\n.build-monitor .widget.basic.project .slots .slot-1 h2{\n  text-align: left;\n}\n.build-monitor .widget.basic.project .slots .slot-2 {\n  text-align: right;\n  padding: 5px 8px 4px 0;\n  display: inline;\n  width: 50%;\n  font-weight: bold;\n  opacity: 0.5;\n\n}\n.build-monitor .widget.basic.project .slots .slot-3 {\n  text-align: right;\n  padding: 0 8px 4px 10px;\n  display: inline;\n}\n.build-monitor .widget.basic.project > .progress {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 0%;\n  height: 100%;\n  text-align: right;\n  overflow: hidden;\n}\n.build-monitor .widget.basic.project > .progress .value {\n  display: none;\n}\n.build-monitor .widget.basic.project .slot {\n  opacity: 0.3;\n}\n.build-monitor .widget.basic.project.running .slot {\n  opacity: 0.5;\n}\n.build-monitor .widget.basic.project {\n  -webkit-box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);\n  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);\n}\n.build-monitor .widget.basic.project > .progress {\n  border-radius: 10px;\n}\n.rzslider span.rz-bubble {\n  color: #fff;\n}\n.rzslider span.rz-bubble.rz-limit {\n  color: #ccc;\n}\n.rzslider span.rz-pointer {\n  background-color: #f5f5f5;\n}\n.rzslider span.rz-pointer:after {\n  background-color: grey;\n}\n.rzslider span.rz-pointer:hover:after {\n  background-color: darkgrey;\n}\n.rzslider span.rz-pointer.rz-active:after {\n  background-color: black;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map