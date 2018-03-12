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
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\nbody {\r\n  font-size: 100%;\r\n  font-family: 'Open sans', Verdana, Helvetica, sans serif;\r\n  margin: 0;\r\n}\r\n.build-monitor.dashboard {\r\n  font-size: 0.6875em;\r\n}\r\n.build-monitor header h1 {\r\n  font-size: 3em;\r\n  letter-spacing: 0.1em;\r\n}\r\n.build-monitor nav label {\r\n  font-size: 1em;\r\n}\r\n.build-monitor .main {\r\n  font-size: 24px;\r\n}\r\n.modal-header h1 {\r\n  font-size: 2.5em;\r\n}\r\n.modal-body p {\r\n  font-size: 1.2em;\r\n}\r\n.modal textarea {\r\n  font-family: \"Consolas\", \"Menlo\", \"Courier\", monospace;\r\n}\r\nbody {\r\n  margin: 0;\r\n}\r\n.build-monitor.dashboard {\r\n  height: 100vh;\r\n  display: -moz-flex;\r\n  display: -ms-flexbox;\r\n  display: -ms-flex;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -moz-justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  margin: auto;\r\n}\r\n.build-monitor.dashboard > header {\r\n  height: 58px;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n}\r\n.build-monitor.dashboard > .main {\r\n  display: block;\r\n  -moz-flex: 1 1 0px;\r\n  -ms-flex: 1 1 0px;\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 0px;\r\n  overflow-y: auto;\r\n  -webkit-overflow-scrolling: touch;\r\n  display: -moz-flex;\r\n  display: -ms-flexbox;\r\n  display: -ms-flex;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -moz-justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 0px 8px 4px 8px;\r\n}\r\n.build-monitor.dashboard > footer {\r\n  height: 24px;\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n}\r\n.build-monitor .main.empty {\r\n  -moz-justify-content: space-around;\r\n  -ms-justify-content: space-around;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  padding: 0 10%;\r\n  text-align: center;\r\n}\r\n.build-monitor .main.empty div.notice {\r\n  -webkit-box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);\r\n  border-radius: 10px;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  padding: 2em;\r\n}\r\n.build-monitor .main.empty div.notice p {\r\n  margin: 0;\r\n  color: #ddd;\r\n}\r\n.build-monitor.dashboard #widgets {\r\n  -moz-flex: 1;\r\n  -ms-flex: 1;\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  display: -moz-flex;\r\n  display: -ms-flexbox;\r\n  display: -ms-flex;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-flow: row wrap;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-flow: row wrap;\r\n  -moz-justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  list-style-type: none;\r\n  margin: 4px 4px -4px -6px;\r\n  padding: 0;\r\n}\r\n.build-monitor.dashboard #widgets > li {\r\n  -moz-flex: 1;\r\n  -ms-flex: 1;\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  overflow: visible;\r\n}\r\n.build-monitor.dashboard #widgets > li {\r\n  margin: 0 0 8px 8px;\r\n}\r\n.build-monitor.dashboard #widgets.columns-1 > li {\r\n  -moz-flex: 100%;\r\n  -ms-flex: 100%;\r\n  -webkit-box-flex: 100%;\r\n          flex: 100%;\r\n}\r\n.build-monitor.dashboard #widgets.columns-2 > li {\r\n  -moz-flex: 49%;\r\n  -ms-flex: 49%;\r\n  -webkit-box-flex: 49%;\r\n          flex: 49%;\r\n}\r\n.build-monitor.dashboard #widgets.columns-3 > li {\r\n  -moz-flex: 32.333333333333336%;\r\n  -ms-flex: 32.333333333333336%;\r\n  -webkit-box-flex: 32.333333333333336%;\r\n          flex: 32.333333333333336%;\r\n}\r\n.build-monitor.dashboard #widgets.columns-4 > li {\r\n  -moz-flex: 24%;\r\n  -ms-flex: 24%;\r\n  -webkit-box-flex: 24%;\r\n          flex: 24%;\r\n}\r\n.build-monitor.dashboard #widgets.columns-5 > li {\r\n  -moz-flex: 19%;\r\n  -ms-flex: 19%;\r\n  -webkit-box-flex: 19%;\r\n          flex: 19%;\r\n}\r\n.build-monitor.dashboard #widgets.columns-6 > li {\r\n  -moz-flex: 15.666666666666666%;\r\n  -ms-flex: 15.666666666666666%;\r\n  -webkit-box-flex: 15.666666666666666%;\r\n          flex: 15.666666666666666%;\r\n}\r\n.build-monitor.dashboard #widgets.columns-7 > li {\r\n  -moz-flex: 13.285714285714286%;\r\n  -ms-flex: 13.285714285714286%;\r\n  -webkit-box-flex: 13.285714285714286%;\r\n          flex: 13.285714285714286%;\r\n}\r\n.build-monitor.dashboard #widgets.columns-8 > li {\r\n  -moz-flex: 11.5%;\r\n  -ms-flex: 11.5%;\r\n  -webkit-box-flex: 11.5%;\r\n          flex: 11.5%;\r\n}\r\n.build-monitor.dashboard > footer {\r\n  display: -moz-flex;\r\n  display: -ms-flexbox;\r\n  display: -ms-flex;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -moz-flex-direction: row;\r\n  -ms-flex-direction: row;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -moz-justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 0 4px;\r\n  color: #ddd;\r\n}\r\n.build-monitor.dashboard > footer .column {\r\n  -moz-flex: 1;\r\n  -ms-flex: 1;\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n}\r\n.build-monitor.dashboard > footer .column.connectivity .notifier {\r\n  display: inline-block;\r\n  margin: 2px 2px 0 6px;\r\n  padding: 2px 10px;\r\n  border-radius: 10px;\r\n  background: #ffcf85;\r\n  color: #393939;\r\n}\r\n.build-monitor.dashboard > footer .column.version-info {\r\n  margin: 2px 4px 0 0;\r\n  text-align: right;\r\n}\r\n.modal {\r\n  font-size: 1em;\r\n}\r\n.build-monitor.colour-blind-mode .progress {\r\n  opacity: 0.60;\r\n}\r\n.build-monitor .project.unknown > .progress {\r\n  background-color: #9d9d9d;\r\n}\r\n.build-monitor .project.successful > .progress {\r\n  background-color: green;\r\n}\r\n.build-monitor .project.unstable > .progress {\r\n  background-color: #f9aa1c;\r\n}\r\n.build-monitor .project.failing > .progress {\r\n  background-color: firebrick;\r\n}\r\n.build-monitor .project.aborted > .progress {\r\n  background-color: #909090;\r\n}\r\n.build-monitor:not(.reduce-motion-mode) .project.unknown > .progress.updated {\r\n  -webkit-animation: forUnknown 2.25s 2 alternate;\r\n  animation: forUnknown 2.25s 2 alternate;\r\n}\r\n.build-monitor:not(.reduce-motion-mode) .project.successful > .progress.updated {\r\n  -webkit-animation: forSuccessful 2.25s 2 alternate;\r\n  animation: forSuccessful 2.25s 2 alternate;\r\n}\r\n.build-monitor:not(.reduce-motion-mode) .project.unstable > .progress.updated {\r\n  -webkit-animation: forUnstable 2.25s 2 alternate;\r\n  animation: forUnstable 2.25s 2 alternate;\r\n}\r\n.build-monitor:not(.reduce-motion-mode) .project.failing > .progress.updated {\r\n  -webkit-animation: forFailing 2.25s 2 alternate;\r\n  animation: forFailing 2.25s 2 alternate;\r\n}\r\n.build-monitor:not(.reduce-motion-mode) .project.aborted > .progress.updated {\r\n  -webkit-animation: forAborted 2.25s 2 alternate;\r\n  animation: forAborted 2.25s 2 alternate;\r\n}\r\n@-webkit-keyframes forUnknown {\r\n  0% {\r\n    background-color: #9d9d9d;\r\n  }\r\n  100% {\r\n    background-color: grey;\r\n  }\r\n}\r\n@keyframes forUnknown {\r\n  0% {\r\n    background-color: #9d9d9d;\r\n  }\r\n  100% {\r\n    background-color: grey;\r\n  }\r\n}\r\n@-webkit-keyframes forSuccessful {\r\n  0% {\r\n    background-color: green;\r\n  }\r\n  100% {\r\n    background-color: limegreen;\r\n  }\r\n}\r\n@keyframes forSuccessful {\r\n  0% {\r\n    background-color: green;\r\n  }\r\n  100% {\r\n    background-color: limegreen;\r\n  }\r\n}\r\n@-webkit-keyframes forUnstable {\r\n  0% {\r\n    background-color: #f9aa1c;\r\n  }\r\n  100% {\r\n    background-color: #ffc500;\r\n  }\r\n}\r\n@keyframes forUnstable {\r\n  0% {\r\n    background-color: #f9aa1c;\r\n  }\r\n  100% {\r\n    background-color: #ffc500;\r\n  }\r\n}\r\n@-webkit-keyframes forFailing {\r\n  0% {\r\n    background-color: firebrick;\r\n  }\r\n  100% {\r\n    background-color: red;\r\n  }\r\n}\r\n@keyframes forFailing {\r\n  0% {\r\n    background-color: firebrick;\r\n  }\r\n  100% {\r\n    background-color: red;\r\n  }\r\n}\r\n@-webkit-keyframes forAborted {\r\n  0% {\r\n    background-color: #909090;\r\n  }\r\n  100% {\r\n    background-color: #a9a9a9;\r\n  }\r\n}\r\n@keyframes forAborted {\r\n  0% {\r\n    background-color: #909090;\r\n  }\r\n  100% {\r\n    background-color: #a9a9a9;\r\n  }\r\n}\r\n.build-monitor .widget.basic.project header h2 {\r\n  font-size: 2.5em;\r\n}\r\n.build-monitor .widget.basic.project .slots .slot {\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n}\r\n.build-monitor .widget.basic.project {\r\n  -moz-flex: 1 1 auto;\r\n  -ms-flex: 1 1 auto;\r\n  -webkit-box-flex: 1;\r\n          flex: 1 1 auto;\r\n  display: -moz-flex;\r\n  display: -ms-flexbox;\r\n  display: -ms-flex;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -moz-justify-content: flex-end;\r\n  -ms-justify-content: flex-end;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.build-monitor .widget.basic.project header {\r\n  -moz-flex: 3 2 auto;\r\n  -ms-flex: 3 2 auto;\r\n  -webkit-box-flex: 3;\r\n          flex: 3 2 auto;\r\n  display: -moz-flex;\r\n  display: -ms-flexbox;\r\n  display: -ms-flex;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -moz-justify-content: flex-end;\r\n  -ms-justify-content: flex-end;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.build-monitor .widget.basic.project .slots {\r\n  -moz-flex: 2 3 auto;\r\n  -ms-flex: 2 3 auto;\r\n  -webkit-box-flex: 2;\r\n          flex: 2 3 auto;\r\n  display: -moz-flex;\r\n  display: -ms-flexbox;\r\n  display: -ms-flex;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -moz-flex-direction: row;\r\n  -ms-flex-direction: row;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  padding: 5px 5px 5px 5px;\r\n\r\n}\r\n.build-monitor .widget.basic.project .slots ul {\r\n  width: 100%;\r\n}\r\n.build-monitor .widget.basic.project .slots li {\r\n  width: 100%;\r\n}\r\n.build-monitor .widget.basic.project .slots .slot {\r\n  -moz-flex: 1;\r\n  -ms-flex: 1;\r\n  -webkit-box-flex: 1;\r\n          flex: 1;\r\n  display: -moz-flex;\r\n  display: -ms-flexbox;\r\n  display: -ms-flex;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -moz-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -moz-justify-content: flex-end;\r\n  -ms-justify-content: flex-end;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.build-monitor .widget.basic.project {\r\n  position: relative;\r\n  border-radius: 10px;\r\n  overflow-y: hidden;\r\n  min-height: 0px;\r\n}\r\n.build-monitor .widget.basic.project header {\r\n  position: relative;\r\n  margin: 8px 8px 0 8px;\r\n  overflow: hidden;\r\n}\r\n.build-monitor .widget.basic.project header ul.details {\r\n  margin: 0.25em 0 0 0;\r\n  padding: 0;\r\n  list-style-type: none;\r\n  text-align: center;\r\n}\r\n.build-monitor .widget.basic.project header ul.details li {\r\n  margin: 0 0 0.25em 0;\r\n}\r\n.build-monitor .widget.basic.project header .build-failure-analyzer-plugin ul.identified-failures {\r\n  list-style-type: none;\r\n  display: inline-block;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n.build-monitor .widget.basic.project header .build-failure-analyzer-plugin ul.identified-failures li {\r\n  display: inline-block;\r\n  margin-right: 0.5em;\r\n}\r\n.build-monitor .widget.basic.project header .build-failure-analyzer-plugin ul.identified-failures li:after {\r\n  content: \",\";\r\n}\r\n.build-monitor .widget.basic.project header .build-failure-analyzer-plugin ul.identified-failures li:last-child:after {\r\n  content: \"\";\r\n}\r\n.build-monitor .widget.basic.project .slots .slot-1 {\r\n  text-align: left;\r\n  padding: 0 0 4px 8px;\r\n  display: inline;\r\n  width: 50%;\r\n  opacity: 0.5;\r\n  font-weight: bold;\r\n}\r\n.build-monitor .widget.basic.project .slots .slot-1 .job-exec-ok{\r\n  color: #64FE2E;\r\n  font-size: 120%\r\n}\r\n.build-monitor .widget.basic.project .slots .slot-1 .job-exec-ko{\r\n  color: #F5E31A;\r\n  font-size: 120%\r\n}\r\n.build-monitor .widget.basic.project .slots .slot-1 .job-exec-un{\r\n  color: #0FA8D2;\r\n  font-size: 120%\r\n}\r\n.build-monitor .widget.basic.project .slots .slot-1 .job-exec-unk{\r\n  color: #0FA8D2;\r\n  font-size: 120%\r\n}\r\n.build-monitor .widget.basic.project .slots .slot-1 .slot-4 {\r\n  text-align: right;\r\n  padding: 0 0 4px 8px;\r\n  display: inline;\r\n  width: 50%;  \r\n  font-weight: bold;\r\n  opacity: 0.75;\r\n  float: right;  \r\n}\r\n.build-monitor .widget.basic.project .slots .slot-1 h2{\r\n  text-align: left;\r\n}\r\n.build-monitor .widget.basic.project .slots .slot-2 {\r\n  text-align: right;\r\n  padding: 5px 8px 4px 0;\r\n  display: inline;\r\n  width: 50%;\r\n  font-weight: bold;\r\n  opacity: 0.5;\r\n\r\n}\r\n.build-monitor .widget.basic.project .slots .slot-3 {\r\n  text-align: right;\r\n  padding: 0 8px 4px 10px;\r\n  display: inline;\r\n}\r\n.build-monitor .widget.basic.project > .progress {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 0%;\r\n  height: 100%;\r\n  text-align: right;\r\n  overflow: hidden;\r\n}\r\n.build-monitor .widget.basic.project > .progress .value {\r\n  display: none;\r\n}\r\n.build-monitor .widget.basic.project .slot {\r\n  opacity: 0.3;\r\n}\r\n.build-monitor .widget.basic.project.running .slot {\r\n  opacity: 0.5;\r\n}\r\n.build-monitor .widget.basic.project {\r\n  -webkit-box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);\r\n  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);\r\n}\r\n.build-monitor .widget.basic.project > .progress {\r\n  border-radius: 10px;\r\n}\r\n.rzslider span.rz-bubble {\r\n  color: #fff;\r\n}\r\n.rzslider span.rz-bubble.rz-limit {\r\n  color: #ccc;\r\n}\r\n.rzslider span.rz-pointer {\r\n  background-color: #f5f5f5;\r\n}\r\n.rzslider span.rz-pointer:after {\r\n  background-color: grey;\r\n}\r\n.rzslider span.rz-pointer:hover:after {\r\n  background-color: darkgrey;\r\n}\r\n.rzslider span.rz-pointer.rz-active:after {\r\n  background-color: black;\r\n}\r\n", ""]);

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