(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Alertx = factory());
})(this, (function () { 'use strict';

	function alertx(text) {}
	var src = alertx;

	return src;

}));
