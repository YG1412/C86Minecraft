var fabric=fabric||{version:"3.6.1"};if("undefined"!=typeof exports?exports.fabric=fabric:"function"==typeof define&&define.amd&&define([],function(){return fabric}),"undefined"!=typeof document&&"undefined"!=typeof window)document instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document)?fabric.document=document:fabric.document=document.implementation.createHTMLDocument(""),fabric.window=window;else{var jsdom=require("jsdom"),virtualWindow=new jsdom.JSDOM(decodeURIComponent("%3C!DOCTYPE%20html%3E%3Chtml%3E%3Chead%3E%3C%2Fhead%3E%3Cbody%3E%3C%2Fbody%3E%3C%2Fhtml%3E"),{features:{FetchExternalResources:["img"]},resources:"usable"}).window;fabric.document=virtualWindow.document,fabric.jsdomImplForWrapper=require("jsdom/lib/jsdom/living/generated/utils").implForWrapper,fabric.nodeCanvas=require("jsdom/lib/jsdom/utils").Canvas,fabric.window=virtualWindow,DOMParser=fabric.window.DOMParser}function resizeCanvasIfNeeded(t){var e=t.targetCanvas,i=e.width,r=e.height,n=t.destinationWidth,s=t.destinationHeight;i===n&&r===s||(e.width=n,e.height=s)}function copyGLTo2DDrawImage(t,e){var i=t.canvas,r=e.targetCanvas,n=r.getContext("2d");n.translate(0,r.height),n.scale(1,-1);var s=i.height-r.height;n.drawImage(i,0,s,r.width,r.height,0,0,r.width,r.height)}function copyGLTo2DPutImageData(t,e){var i=e.targetCanvas.getContext("2d"),r=e.destinationWidth,n=e.destinationHeight,s=r*n*4,o=new Uint8Array(this.imageBuffer,0,s),a=new Uint8ClampedArray(this.imageBuffer,0,s);t.readPixels(0,0,r,n,t.RGBA,t.UNSIGNED_BYTE,o);var h=new ImageData(a,r,n);i.putImageData(h,0,0)}fabric.isTouchSupported="ontouchstart"in fabric.window||"ontouchstart"in fabric.document||fabric.window&&fabric.window.navigator&&0<fabric.window.navigator.maxTouchPoints,fabric.isLikelyNode="undefined"!=typeof Buffer&&"undefined"==typeof window,fabric.SHARED_ATTRIBUTES=["display","transform","fill","fill-opacity","fill-rule","opacity","stroke","stroke-dasharray","stroke-linecap","stroke-dashoffset","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","id","paint-order","vector-effect","instantiated_by_use","clip-path"],fabric.DPI=96,fabric.reNum="(?:[-+]?(?:\\d+|\\d*\\.\\d+)(?:[eE][-+]?\\d+)?)",fabric.rePathCommand=/([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:[eE][-+]?\d+)?)/gi,fabric.reNonWord=/[ \n\.,;!\?\-]/,fabric.fontPaths={},fabric.iMatrix=[1,0,0,1,0,0],fabric.svgNS="http://www.w3.org/2000/svg",fabric.perfLimitSizeTotal=2097152,fabric.maxCacheSideLimit=4096,fabric.minCacheSideLimit=256,fabric.charWidthsCache={},fabric.textureSize=2048,fabric.disableStyleCopyPaste=!1,fabric.enableGLFiltering=!0,fabric.devicePixelRatio=fabric.window.devicePixelRatio||fabric.window.webkitDevicePixelRatio||fabric.window.mozDevicePixelRatio||1,fabric.browserShadowBlurConstant=1,fabric.arcToSegmentsCache={},fabric.boundsOfCurveCache={},fabric.cachesBoundsOfCurve=!0,fabric.forceGLPutImageData=!1,fabric.initFilterBackend=function(){return fabric.enableGLFiltering&&fabric.isWebglSupported&&fabric.isWebglSupported(fabric.textureSize)?(console.log("max texture size: "+fabric.maxTextureSize),new fabric.WebglFilterBackend({tileSize:fabric.textureSize})):fabric.Canvas2dFilterBackend?new fabric.Canvas2dFilterBackend:void 0},"undefined"!=typeof document&&"undefined"!=typeof window&&(window.fabric=fabric),function(){function r(t,e){if(this.__eventListeners[t]){var i=this.__eventListeners[t];e?i[i.indexOf(e)]=!1:fabric.util.array.fill(i,!1)}}function t(t,e){if(this.__eventListeners||(this.__eventListeners={}),1===arguments.length)for(var i in t)this.on(i,t[i]);else this.__eventListeners[t]||(this.__eventListeners[t]=[]),this.__eventListeners[t].push(e);return this}function e(t,e){if(!this.__eventListeners)return this;if(0===arguments.length)for(t in this.__eventListeners)r.call(this,t);else if(1===arguments.length&&"object"==typeof t)for(var i in t)r.call(this,i,t[i]);else r.call(this,t,e);return this}function i(t,e){if(!this.__eventListeners)return this;var i=this.__eventListeners[t];if(!i)return this;for(var r=0,n=i.length;r<n;r++)i[r]&&i[r].call(this,e||{});return this.__eventListeners[t]=i.filter(function(t){return!1!==t}),this}fabric.Observable={observe:t,stopObserving:e,fire:i,on:t,off:e,trigger:i}}(),fabric.Collection={_objects:[],add:function()