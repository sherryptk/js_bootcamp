!function(n){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=n();else if("function"==typeof define&&define.amd)define([],n);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).uuidv4=n()}}(function(){return function(){return function n(e,r,t){function o(f,u){if(!r[f]){if(!e[f]){var d="function"==typeof require&&require;if(!u&&d)return d(f,!0);if(i)return i(f,!0);var a=new Error("Cannot find module '"+f+"'");throw a.code="MODULE_NOT_FOUND",a}var p=r[f]={exports:{}};e[f][0].call(p.exports,function(n){return o(e[f][1][n]||n)},p,p.exports,n,e,r,t)}return r[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}}()({1:[function(n,e,r){for(var t=[],o=0;o<256;++o)t[o]=(o+256).toString(16).substr(1);e.exports=function(n,e){var r=e||0,o=t;return[o[n[r++]],o[n[r++]],o[n[r++]],o[n[r++]],"-",o[n[r++]],o[n[r++]],"-",o[n[r++]],o[n[r++]],"-",o[n[r++]],o[n[r++]],"-",o[n[r++]],o[n[r++]],o[n[r++]],o[n[r++]],o[n[r++]],o[n[r++]]].join("")}},{}],2:[function(n,e,r){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var o=new Uint8Array(16);e.exports=function(){return t(o),o}}else{var i=new Array(16);e.exports=function(){for(var n,e=0;e<16;e++)0==(3&e)&&(n=4294967296*Math.random()),i[e]=n>>>((3&e)<<3)&255;return i}}},{}],3:[function(n,e,r){var t=n("./lib/rng"),o=n("./lib/bytesToUuid");e.exports=function(n,e,r){var i=e&&r||0;"string"==typeof n&&(e="binary"===n?new Array(16):null,n=null);var f=(n=n||{}).random||(n.rng||t)();if(f[6]=15&f[6]|64,f[8]=63&f[8]|128,e)for(var u=0;u<16;++u)e[i+u]=f[u];return e||o(f)}},{"./lib/bytesToUuid":1,"./lib/rng":2}]},{},[3])(3)});