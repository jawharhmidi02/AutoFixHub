!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).axios=t()}(this,(function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return c(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){s=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw o}}return i}(e,t)||l(e,t)||p()}function u(e){return function(e){if(Array.isArray(e))return d(e)}(e)||f(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){if(Array.isArray(e))return e}function f(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e,t){return function(){return e.apply(t,arguments)}}var m,y=Object.prototype.toString,v=Object.getPrototypeOf,b=(m=Object.create(null),function(e){var t=y.call(e);return m[t]||(m[t]=t.slice(8,-1).toLowerCase())}),g=function(e){return e=e.toLowerCase(),function(t){return b(t)===e}},w=function(e){return function(t){return n(t)===e}},O=Array.isArray,E=w("undefined");var S=g("ArrayBuffer");var R=w("string"),A=w("function"),j=w("number"),T=function(e){return null!==e&&"object"===n(e)},P=function(e){if("object"!==b(e))return!1;var t=v(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},N=g("Date"),x=g("File"),C=g("Blob"),k=g("FileList"),_=g("URLSearchParams");function F(e,t){var r,o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=i.allOwnKeys,s=void 0!==a&&a;if(null!=e)if("object"!==n(e)&&(e=[e]),O(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{var u,c=s?Object.getOwnPropertyNames(e):Object.keys(e),f=c.length;for(r=0;r<f;r++)u=c[r],t.call(null,e[u],u,e)}}function U(e,t){t=t.toLowerCase();for(var n,r=Object.keys(e),o=r.length;o-- >0;)if(t===(n=r[o]).toLowerCase())return n;return null}var D="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,B=function(e){return!E(e)&&e!==D};var L,I=(L="undefined"!=typeof Uint8Array&&v(Uint8Array),function(e){return L&&e instanceof L}),q=g("HTMLFormElement"),z=function(e){var t=Object.prototype.hasOwnProperty;return function(e,n){return t.call(e,n)}}(),M=g("RegExp"),H=function(e,t){var n=Object.getOwnPropertyDescriptors(e),r={};F(n,(function(n,o){var i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},J="abcdefghijklmnopqrstuvwxyz",W="0123456789",K={DIGIT:W,ALPHA:J,ALPHA_DIGIT:J+J.toUpperCase()+W};var V=g("AsyncFunction"),G={isArray:O,isArrayBuffer:S,isBuffer:function(e){return null!==e&&!E(e)&&null!==e.constructor&&!E(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t;return e&&("function"==typeof FormData&&e instanceof FormData||A(e.append)&&("formdata"===(t=b(e))||"object"===t&&A(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&S(e.buffer)},isString:R,isNumber:j,isBoolean:function(e){return!0===e||!1===e},isObject:T,isPlainObject:P,isUndefined:E,isDate:N,isFile:x,isBlob:C,isRegExp:M,isFunction:A,isStream:function(e){return T(e)&&A(e.pipe)},isURLSearchParams:_,isTypedArray:I,isFileList:k,forEach:F,merge:function e(){for(var t=B(this)&&this||{},n=t.caseless,r={},o=function(t,o){var i=n&&U(r,o)||o;P(r[i])&&P(t)?r[i]=e(r[i],t):P(t)?r[i]=e({},t):O(t)?r[i]=t.slice():r[i]=t},i=0,a=arguments.length;i<a;i++)arguments[i]&&F(arguments[i],o);return r},extend:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.allOwnKeys;return F(t,(function(t,r){n&&A(t)?e[r]=h(t,n):e[r]=t}),{allOwnKeys:o}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n,r){var o,i,a,s={};if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)a=o[i],r&&!r(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==n&&v(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:b,kindOfTest:g,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;if(O(e))return e;var t=e.length;if(!j(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},forEachEntry:function(e,t){for(var n,r=(e&&e[Symbol.iterator]).call(e);(n=r.next())&&!n.done;){var o=n.value;t.call(e,o[0],o[1])}},matchAll:function(e,t){for(var n,r=[];null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:q,hasOwnProperty:z,hasOwnProp:z,reduceDescriptors:H,freezeMethods:function(e){H(e,(function(t,n){if(A(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;var r=e[n];A(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:function(e,t){var n={},r=function(e){e.forEach((function(e){n[e]=!0}))};return O(e)?r(e):r(String(e).split(t)),n},toCamelCase:function(e){return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t},findKey:U,global:D,isContextDefined:B,ALPHABET:K,generateString:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K.ALPHA_DIGIT,n="",r=t.length;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&A(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:function(e){var t=new Array(10);return function e(n,r){if(T(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[r]=n;var o=O(n)?[]:{};return F(n,(function(t,n){var i=e(t,r+1);!E(i)&&(o[n]=i)})),t[r]=void 0,o}}return n}(e,0)},isAsyncFn:V,isThenable:function(e){return e&&(T(e)||A(e))&&A(e.then)&&A(e.catch)}};function X(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}G.inherits(X,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:G.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var $=X.prototype,Q={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){Q[e]={value:e}})),Object.defineProperties(X,Q),Object.defineProperty($,"isAxiosError",{value:!0}),X.from=function(e,t,n,r,o,i){var a=Object.create($);return G.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(function(e){return"isAxiosError"!==e})),X.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};function Z(e){return G.isPlainObject(e)||G.isArray(e)}function Y(e){return G.endsWith(e,"[]")?e.slice(0,-2):e}function ee(e,t,n){return e?e.concat(t).map((function(e,t){return e=Y(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}var te=G.toFlatObject(G,{},null,(function(e){return/^is[A-Z]/.test(e)}));function ne(e,t,r){if(!G.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;var o=(r=G.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!G.isUndefined(t[e])}))).metaTokens,i=r.visitor||f,a=r.dots,s=r.indexes,u=(r.Blob||"undefined"!=typeof Blob&&Blob)&&G.isSpecCompliantForm(t);if(!G.isFunction(i))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(G.isDate(e))return e.toISOString();if(!u&&G.isBlob(e))throw new X("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(e)||G.isTypedArray(e)?u&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function f(e,r,i){var u=e;if(e&&!i&&"object"===n(e))if(G.endsWith(r,"{}"))r=o?r:r.slice(0,-2),e=JSON.stringify(e);else if(G.isArray(e)&&function(e){return G.isArray(e)&&!e.some(Z)}(e)||(G.isFileList(e)||G.endsWith(r,"[]"))&&(u=G.toArray(e)))return r=Y(r),u.forEach((function(e,n){!G.isUndefined(e)&&null!==e&&t.append(!0===s?ee([r],n,a):null===s?r:r+"[]",c(e))})),!1;return!!Z(e)||(t.append(ee(i,r,a),c(e)),!1)}var l=[],d=Object.assign(te,{defaultVisitor:f,convertValue:c,isVisitable:Z});if(!G.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!G.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),G.forEach(n,(function(n,o){!0===(!(G.isUndefined(n)||null===n)&&i.call(t,n,G.isString(o)?o.trim():o,r,d))&&e(n,r?r.concat(o):[o])})),l.pop()}}(e),t}function re(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function oe(e,t){this._pairs=[],e&&ne(e,this,t)}var ie=oe.prototype;function ae(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function se(e,t,n){if(!t)return e;var r,o=n&&n.encode||ae,i=n&&n.serialize;if(r=i?i(t,n):G.isURLSearchParams(t)?t.toString():new oe(t,n).toString(o)){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e}ie.append=function(e,t){this._pairs.push([e,t])},ie.toString=function(e){var t=e?function(t){return e.call(this,t,re)}:re;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ue,ce=function(){function e(){r(this,e),this.handlers=[]}return i(e,[{key:"use",value:function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){G.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}]),e}(),fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},le={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:oe,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]},de="undefined"!=typeof window&&"undefined"!=typeof document,pe=(ue="undefined"!=typeof navigator&&navigator.product,de&&["ReactNative","NativeScript","NS"].indexOf(ue)<0),he="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,me=t(t({},Object.freeze({__proto__:null,hasBrowserEnv:de,hasStandardBrowserWebWorkerEnv:he,hasStandardBrowserEnv:pe})),le);function ye(e){function t(e,n,r,o){var i=e[o++],a=Number.isFinite(+i),s=o>=e.length;return i=!i&&G.isArray(r)?r.length:i,s?(G.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a):(r[i]&&G.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&G.isArray(r[i])&&(r[i]=function(e){var t,n,r={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)r[n=o[t]]=e[n];return r}(r[i])),!a)}if(G.isFormData(e)&&G.isFunction(e.entries)){var n={};return G.forEachEntry(e,(function(e,r){t(function(e){return G.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return"[]"===e[0]?"":e[1]||e[0]}))}(e),r,n,0)})),n}return null}var ve={transitional:fe,adapter:["xhr","http"],transformRequest:[function(e,t){var n,r=t.getContentType()||"",o=r.indexOf("application/json")>-1,i=G.isObject(e);if(i&&G.isHTMLForm(e)&&(e=new FormData(e)),G.isFormData(e))return o&&o?JSON.stringify(ye(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return ne(e,new me.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return me.isNode&&G.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((n=G.isFileList(e))||r.indexOf("multipart/form-data")>-1){var a=this.env&&this.env.FormData;return ne(n?{"files[]":e}:e,a&&new a,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),function(e,t,n){if(G.isString(e))try{return(t||JSON.parse)(e),G.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||ve.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&G.isString(e)&&(n&&!this.responseType||r)){var o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw X.from(e,X.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:me.classes.FormData,Blob:me.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch"],(function(e){ve.headers[e]={}}));var be=ve,ge=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),we=Symbol("internals");function Oe(e){return e&&String(e).trim().toLowerCase()}function Ee(e){return!1===e||null==e?e:G.isArray(e)?e.map(Ee):String(e)}function Se(e,t,n,r,o){return G.isFunction(r)?r.call(this,t,n):(o&&(t=n),G.isString(t)?G.isString(r)?-1!==t.indexOf(r):G.isRegExp(r)?r.test(t):void 0:void 0)}var Re=function(e,t){function n(e){r(this,n),e&&this.set(e)}return i(n,[{key:"set",value:function(e,t,n){var r=this;function o(e,t,n){var o=Oe(t);if(!o)throw new Error("header name must be a non-empty string");var i=G.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Ee(e))}var i,a,s,u,c,f=function(e,t){return G.forEach(e,(function(e,n){return o(e,n,t)}))};return G.isPlainObject(e)||e instanceof this.constructor?f(e,t):G.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?f((c={},(i=e)&&i.split("\n").forEach((function(e){u=e.indexOf(":"),a=e.substring(0,u).trim().toLowerCase(),s=e.substring(u+1).trim(),!a||c[a]&&ge[a]||("set-cookie"===a?c[a]?c[a].push(s):c[a]=[s]:c[a]=c[a]?c[a]+", "+s:s)})),c),t):null!=e&&o(t,e,n),this}},{key:"get",value:function(e,t){if(e=Oe(e)){var n=G.findKey(this,e);if(n){var r=this[n];if(!t)return r;if(!0===t)return function(e){for(var t,n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=r.exec(e);)n[t[1]]=t[2];return n}(r);if(G.isFunction(t))return t.call(this,r,n);if(G.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(e,t){if(e=Oe(e)){var n=G.findKey(this,e);return!(!n||void 0===this[n]||t&&!Se(0,this[n],n,t))}return!1}},{key:"delete",value:function(e,t){var n=this,r=!1;function o(e){if(e=Oe(e)){var o=G.findKey(n,e);!o||t&&!Se(0,n[o],o,t)||(delete n[o],r=!0)}}return G.isArray(e)?e.forEach(o):o(e),r}},{key:"clear",value:function(e){for(var t=Object.keys(this),n=t.length,r=!1;n--;){var o=t[n];e&&!Se(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}},{key:"normalize",value:function(e){var t=this,n={};return G.forEach(this,(function(r,o){var i=G.findKey(n,o);if(i)return t[i]=Ee(r),void delete t[o];var a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))}(o):String(o).trim();a!==o&&delete t[o],t[a]=Ee(r),n[a]=!0})),this}},{key:"concat",value:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=this.constructor).concat.apply(e,[this].concat(n))}},{key:"toJSON",value:function(e){var t=Object.create(null);return G.forEach(this,(function(n,r){null!=n&&!1!==n&&(t[r]=e&&G.isArray(n)?n.join(", "):n)})),t}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map((function(e){var t=s(e,2);return t[0]+": "+t[1]})).join("\n")}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(e){return e instanceof this?e:new this(e)}},{key:"concat",value:function(e){for(var t=new this(e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r.forEach((function(e){return t.set(e)})),t}},{key:"accessor",value:function(e){var t=(this[we]=this[we]={accessors:{}}).accessors,n=this.prototype;function r(e){var r=Oe(e);t[r]||(!function(e,t){var n=G.toCamelCase(" "+t);["get","set","has"].forEach((function(r){Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return G.isArray(e)?e.forEach(r):r(e),this}}]),n}();Re.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),G.reduceDescriptors(Re.prototype,(function(e,t){var n=e.value,r=t[0].toUpperCase()+t.slice(1);return{get:function(){return n},set:function(e){this[r]=e}}})),G.freezeMethods(Re);var Ae=Re;function je(e,t){var n=this||be,r=t||n,o=Ae.from(r.headers),i=r.data;return G.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Te(e){return!(!e||!e.__CANCEL__)}function Pe(e,t,n){X.call(this,null==e?"canceled":e,X.ERR_CANCELED,t,n),this.name="CanceledError"}G.inherits(Pe,X,{__CANCEL__:!0});var Ne=me.hasStandardBrowserEnv?{write:function(e,t,n,r,o,i){var a=[e+"="+encodeURIComponent(t)];G.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),G.isString(r)&&a.push("path="+r),G.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function xe(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var Ce=me.hasStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=G.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function ke(e,t){var n=0,r=function(e,t){e=e||10;var n,r=new Array(e),o=new Array(e),i=0,a=0;return t=void 0!==t?t:1e3,function(s){var u=Date.now(),c=o[a];n||(n=u),r[i]=s,o[i]=u;for(var f=a,l=0;f!==i;)l+=r[f++],f%=e;if((i=(i+1)%e)===a&&(a=(a+1)%e),!(u-n<t)){var d=c&&u-c;return d?Math.round(1e3*l/d):void 0}}}(50,250);return function(o){var i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,u=r(s);n=i;var c={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&i<=a?(a-i)/u:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}var _e={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){var r,o,i,a=e.data,s=Ae.from(e.headers).normalize(),d=e.responseType,h=e.withXSRFToken;function m(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}if(G.isFormData(a))if(me.hasStandardBrowserEnv||me.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if(!1!==(o=s.getContentType())){var y=o?o.split(";").map((function(e){return e.trim()})).filter(Boolean):[],v=c(i=y)||f(i)||l(i)||p(),b=v[0],g=v.slice(1);s.setContentType([b||"multipart/form-data"].concat(u(g)).join("; "))}var w=new XMLHttpRequest;if(e.auth){var O=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(O+":"+E))}var S=xe(e.baseURL,e.url);function R(){if(w){var r=Ae.from("getAllResponseHeaders"in w&&w.getAllResponseHeaders());!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new X("Request failed with status code "+n.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),m()}),(function(e){n(e),m()}),{data:d&&"text"!==d&&"json"!==d?w.response:w.responseText,status:w.status,statusText:w.statusText,headers:r,config:e,request:w}),w=null}}if(w.open(e.method.toUpperCase(),se(S,e.params,e.paramsSerializer),!0),w.timeout=e.timeout,"onloadend"in w?w.onloadend=R:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(R)},w.onabort=function(){w&&(n(new X("Request aborted",X.ECONNABORTED,e,w)),w=null)},w.onerror=function(){n(new X("Network Error",X.ERR_NETWORK,e,w)),w=null},w.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||fe;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new X(t,r.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,e,w)),w=null},me.hasStandardBrowserEnv&&(h&&G.isFunction(h)&&(h=h(e)),h||!1!==h&&Ce(S))){var A=e.xsrfHeaderName&&e.xsrfCookieName&&Ne.read(e.xsrfCookieName);A&&s.set(e.xsrfHeaderName,A)}void 0===a&&s.setContentType(null),"setRequestHeader"in w&&G.forEach(s.toJSON(),(function(e,t){w.setRequestHeader(t,e)})),G.isUndefined(e.withCredentials)||(w.withCredentials=!!e.withCredentials),d&&"json"!==d&&(w.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&w.addEventListener("progress",ke(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",ke(e.onUploadProgress)),(e.cancelToken||e.signal)&&(r=function(t){w&&(n(!t||t.type?new Pe(null,e,w):t),w.abort(),w=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r)));var j,T=(j=/^([-+\w]{1,25})(:?\/\/|:)/.exec(S))&&j[1]||"";T&&-1===me.protocols.indexOf(T)?n(new X("Unsupported protocol "+T+":",X.ERR_BAD_REQUEST,e)):w.send(a||null)}))}};G.forEach(_e,(function(e,t){if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Fe=function(e){return"- ".concat(e)},Ue=function(e){return G.isFunction(e)||null===e||!1===e},De=function(e){for(var t,n,r=(e=G.isArray(e)?e:[e]).length,o={},i=0;i<r;i++){var a=void 0;if(n=t=e[i],!Ue(t)&&void 0===(n=_e[(a=String(t)).toLowerCase()]))throw new X("Unknown adapter '".concat(a,"'"));if(n)break;o[a||"#"+i]=n}if(!n){var u=Object.entries(o).map((function(e){var t=s(e,2),n=t[0],r=t[1];return"adapter ".concat(n," ")+(!1===r?"is not supported by the environment":"is not available in the build")}));throw new X("There is no suitable adapter to dispatch the request "+(r?u.length>1?"since :\n"+u.map(Fe).join("\n"):" "+Fe(u[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return n};function Be(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Pe(null,e)}function Le(e){return Be(e),e.headers=Ae.from(e.headers),e.data=je.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),De(e.adapter||be.adapter)(e).then((function(t){return Be(e),t.data=je.call(e,e.transformResponse,t),t.headers=Ae.from(t.headers),t}),(function(t){return Te(t)||(Be(e),t&&t.response&&(t.response.data=je.call(e,e.transformResponse,t.response),t.response.headers=Ae.from(t.response.headers))),Promise.reject(t)}))}var Ie=function(e){return e instanceof Ae?e.toJSON():e};function qe(e,t){t=t||{};var n={};function r(e,t,n){return G.isPlainObject(e)&&G.isPlainObject(t)?G.merge.call({caseless:n},e,t):G.isPlainObject(t)?G.merge({},t):G.isArray(t)?t.slice():t}function o(e,t,n){return G.isUndefined(t)?G.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!G.isUndefined(t))return r(void 0,t)}function a(e,t){return G.isUndefined(t)?G.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}var u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:function(e,t){return o(Ie(e),Ie(t),!0)}};return G.forEach(Object.keys(Object.assign({},e,t)),(function(r){var i=u[r]||o,a=i(e[r],t[r],r);G.isUndefined(a)&&i!==s||(n[r]=a)})),n}var ze="1.6.2",Me={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Me[e]=function(r){return n(r)===e||"a"+(t<1?"n ":" ")+e}}));var He={};Me.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new X(r(o," has been removed"+(t?" in "+t:"")),X.ERR_DEPRECATED);return t&&!He[o]&&(He[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Je={assertOptions:function(e,t,r){if("object"!==n(e))throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(e),i=o.length;i-- >0;){var a=o[i],s=t[a];if(s){var u=e[a],c=void 0===u||s(u,a,e);if(!0!==c)throw new X("option "+a+" must be "+c,X.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new X("Unknown option "+a,X.ERR_BAD_OPTION)}},validators:Me},We=Je.validators,Ke=function(){function e(t){r(this,e),this.defaults=t,this.interceptors={request:new ce,response:new ce}}return i(e,[{key:"request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var n=t=qe(this.defaults,t),r=n.transitional,o=n.paramsSerializer,i=n.headers;void 0!==r&&Je.assertOptions(r,{silentJSONParsing:We.transitional(We.boolean),forcedJSONParsing:We.transitional(We.boolean),clarifyTimeoutError:We.transitional(We.boolean)},!1),null!=o&&(G.isFunction(o)?t.paramsSerializer={serialize:o}:Je.assertOptions(o,{encode:We.function,serialize:We.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();var a=i&&G.merge(i.common,i[t.method]);i&&G.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete i[e]})),t.headers=Ae.concat(a,i);var s=[],u=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(u=u&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));var c,f=[];this.interceptors.response.forEach((function(e){f.push(e.fulfilled,e.rejected)}));var l,d=0;if(!u){var p=[Le.bind(this),void 0];for(p.unshift.apply(p,s),p.push.apply(p,f),l=p.length,c=Promise.resolve(t);d<l;)c=c.then(p[d++],p[d++]);return c}l=s.length;var h=t;for(d=0;d<l;){var m=s[d++],y=s[d++];try{h=m(h)}catch(e){y.call(this,e);break}}try{c=Le.call(this,h)}catch(e){return Promise.reject(e)}for(d=0,l=f.length;d<l;)c=c.then(f[d++],f[d++]);return c}},{key:"getUri",value:function(e){return se(xe((e=qe(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}]),e}();G.forEach(["delete","get","head","options"],(function(e){Ke.prototype[e]=function(t,n){return this.request(qe(n||{},{method:e,url:t,data:(n||{}).data}))}})),G.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(qe(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ke.prototype[e]=t(),Ke.prototype[e+"Form"]=t(!0)}));var Ve=Ke,Ge=function(){function e(t){if(r(this,e),"function"!=typeof t)throw new TypeError("executor must be a function.");var n;this.promise=new Promise((function(e){n=e}));var o=this;this.promise.then((function(e){if(o._listeners){for(var t=o._listeners.length;t-- >0;)o._listeners[t](e);o._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){o.subscribe(e),t=e})).then(e);return n.cancel=function(){o.unsubscribe(t)},n},t((function(e,t,r){o.reason||(o.reason=new Pe(e,t,r),n(o.reason))}))}return i(e,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:function(){var t;return{token:new e((function(e){t=e})),cancel:t}}}]),e}();var Xe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xe).forEach((function(e){var t=s(e,2),n=t[0],r=t[1];Xe[r]=n}));var $e=Xe;var Qe=function e(t){var n=new Ve(t),r=h(Ve.prototype.request,n);return G.extend(r,Ve.prototype,n,{allOwnKeys:!0}),G.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(qe(t,n))},r}(be);return Qe.Axios=Ve,Qe.CanceledError=Pe,Qe.CancelToken=Ge,Qe.isCancel=Te,Qe.VERSION=ze,Qe.toFormData=ne,Qe.AxiosError=X,Qe.Cancel=Qe.CanceledError,Qe.all=function(e){return Promise.all(e)},Qe.spread=function(e){return function(t){return e.apply(null,t)}},Qe.isAxiosError=function(e){return G.isObject(e)&&!0===e.isAxiosError},Qe.mergeConfig=qe,Qe.AxiosHeaders=Ae,Qe.formToJSON=function(e){return ye(G.isHTMLForm(e)?new FormData(e):e)},Qe.getAdapter=De,Qe.HttpStatusCode=$e,Qe.default=Qe,Qe}));


document.querySelector('.login').addEventListener("click",function(){
    window.location.href = "../login.html";
});
document.querySelector('.extractupdatelog').addEventListener('click',async ()=>{
    window.open('updatelog.html', '_blank').focus();
    newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" extracted the update-log';
    ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
        "updatelog" : newupdatelog+'<br><br>'+devaccount.updatelog,
        "email" : devaccount.email,
        "password" : devaccount.password,
        "username" : devaccount.username,
        "name" : devaccount.name,
    })
})


let data;
let dataowner;
let dataarticle;
let cards = document.querySelectorAll(".shopshop");
let cardsowner = document.querySelectorAll(".ownerowner");
let cardsdev = document.querySelectorAll(".devdev");
let cardsarticle = document.querySelectorAll(".articlearticle");
let nextButton = document.querySelector(".suivshop");
let previousButton = document.querySelector(".prevshop");
let nextButtonowner = document.querySelector(".suivowner");
let previousButtonowner = document.querySelector(".prevowner");
let nextButtondev = document.querySelector(".suivdev");
let previousButtondev = document.querySelector(".prevdev");
let nextButtonarticle = document.querySelector(".suivarticle");
let previousButtonarticle = document.querySelector(".prevarticle");
let pageText = document.querySelector(".numpageshop");
let pageTextowner = document.querySelector(".numpageowner");
let pageTextdev = document.querySelector(".numpageowner");
let pageTextarticle = document.querySelector(".numpagearticle");
var addshop = document.querySelector('.addshopshopinterface');
var addowner = document.querySelector('.addownerinterface');
var adddev = document.querySelector('.adddevinterface');
addshop.addEventListener("click",e=>{
    addshop.style.zIndex = "-99"
    document.body.style.overflow = "hidden";
    document.querySelector('.addshoppopup').querySelector('.addpopuptext').innerHTML=`Create Shop`;
    document.querySelector('.addshoppopup').querySelector('.addshopButton').innerHTML = 'Create';
    document.querySelector('.addshoppopup').querySelector('.addcancelButton').innerHTML = 'Cancel';
    document.querySelector('.addshoppopup').querySelector('.addpopupContainer').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.addshoppopup').querySelector('.addpopupContainer').style.opacity = '1';
        document.querySelector('.addshoppopup').querySelector('.addpopupContent').style.opacity = '1';
        document.querySelector('.addshoppopup').querySelector('.addpopupContent').style.transform = 'translateY(0)';
    }, 50);
    document.querySelector('.addshoppopup').querySelector('.addcancelButton').addEventListener('click', function() {
        document.querySelector('.addshoppopup').querySelector('.addpopupContainer').style.opacity = '0';
        document.querySelector('.addshoppopup').querySelector('.addpopupContent').style.opacity = '0';
        document.querySelector('.addshoppopup').querySelector('.addpopupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.addshoppopup').querySelector('.addpopupContainer').style.display = 'none';
        }, 300);
        addshop.style.zIndex = ""
        document.body.style.overflow = "";


    });
    document.querySelector('.addshoppopup').querySelector('.addshopButton').remove();
    editbutton = ""
    editbutton = document.createElement("button");
    editbutton.innerHTML = "Create"
    editbutton.classList.add("addshopButton")
    editbutton.classList.add("addButton")
    editbutton.setAttribute('id','addButton')
    document.querySelector('.addshoppopup').querySelector('.addbuttons').appendChild(editbutton)
    document.querySelector('.addshoppopup').querySelector('.addshopButton').addEventListener('click', async function() {
        addshop.style.zIndex = ""

        fullnameadd = document.querySelector('.addshoppopup').querySelector(".addchiefinputs").querySelector(".fullname");
        phonenumberadd = document.querySelector('.addshoppopup').querySelector(".addchiefinputs").querySelector(".phonenumber");
        emailadd = document.querySelector('.addshoppopup').querySelector(".addchiefinputs").querySelector(".email");
        shopnameadd = document.querySelector('.addshoppopup').querySelector(".addshopinputs").querySelector(".shopname");
        addressadd = document.querySelector('.addshoppopup').querySelector(".addshopinputs").querySelector(".address");

        if(fullnameadd.value == ""){
            alert("full name cant be empty ! ");
            return false;
        }
        if(!validatePhoneNumber(phonenumberadd.value)){
            alert("Phone number is not valid ! ");
            return false;
        }
        if(!validateEmail(emailadd.value)){
            alert("Email is not valid ! ");
            return false;
        }
        if(shopnameadd.value == ""){
            alert("shop name cant be empty ! ");
            return false;
        }
        if(addressadd.value == ""){
            alert("address cant be empty ! ");
            return false;
        }
        hi = await axios.get("/api/v1/accounts");
        hi = hi.data.accounts;
        test = false;
        hi.forEach((element) =>{
            if(!test){
                if(element.phonenumber == phonenumberadd.value){
                    alert("Phone number already in use ! ");
                    test = true;
                }
                else if(element.email == emailadd.value){
                    alert("Email already in use ! ");
                    test = true;
                }
            }
        })
        if(!test){
            var randomstring = Math.random().toString(36).slice(-8);
            bomba = await axios.post("/api/v1/accounts", {
                "phonenumber" : phonenumberadd.value,
                "password" : randomstring,
                "fullname" : fullnameadd.value,
                "email" : emailadd.value
            });

            bomba = await axios.post("/api/v1/shops", {
                "shopname" : shopnameadd.value,
                "chiefname" : fullnameadd.value,
                "phonenumber" : phonenumberadd.value,
                "email" : emailadd.value,
                "address" : addressadd.value
            });
            newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" added new chief and shop with email :"'+emailadd.value+'"';
            ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
                "updatelog" : newupdatelog+'<br>'+devaccount.updatelog,
                "email" : devaccount.email,
                "password" : devaccount.password,
                "username" : devaccount.username,
                "name" : devaccount.name,
            })


            document.querySelector('.none').querySelector('.chiefname').value = fullnameadd.value;
            d = await axios.get('/api/v1/accounts');
            d = d.data
            let owner;
            d.accounts.forEach(element =>{
                if(element.owner){
                    owner = element;
                }
            })
            document.querySelector('.none').querySelector('.ownername').value = devaccount.name;
            document.querySelector('.none').querySelector('.chiefemail').value = emailadd.value;
            document.querySelector('.none').querySelector('.message').value = 'Your Password is : '+ randomstring;

             document.querySelector('.formsubmit').click();

            document.querySelector('.addshoppopup').querySelector('.addpopupContainer').style.opacity = '0';
            document.querySelector('.addshoppopup').querySelector('.addpopupContent').style.opacity = '0';
            document.querySelector('.addshoppopup').querySelector('.addpopupContent').style.transform = 'translateY(-20px)';
            setTimeout(function() {
                document.querySelector('.addshoppopup').querySelector('.addpopupContainer').style.display = 'none';
            }, 300);
            document.body.style.overflow = "";
            setTimeout(e=>{location.reload()},5000)
        }
    })
})

addowner.addEventListener("click",e=>{
    addowner.style.zIndex = "-99"
    document.body.style.overflow = "hidden";
    document.querySelector('.addownerpopup').querySelector('.addpopuptext').innerHTML=`Create Owner`;
    document.querySelector('.addownerpopup').querySelector('.addownerButton').innerHTML = 'Create';
    document.querySelector('.addownerpopup').querySelector('.addcancelButton').innerHTML = 'Cancel';
    document.querySelector('.addownerpopup').querySelector('.addpopupContainer').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.addownerpopup').querySelector('.addpopupContainer').style.opacity = '1';
        document.querySelector('.addownerpopup').querySelector('.addpopupContent').style.opacity = '1';
        document.querySelector('.addownerpopup').querySelector('.addpopupContent').style.transform = 'translateY(0)';
    }, 50);
    document.querySelector('.addownerpopup').querySelector('.addcancelButton').addEventListener('click', function() {
        document.querySelector('.addownerpopup').querySelector('.addpopupContainer').style.opacity = '0';
        document.querySelector('.addownerpopup').querySelector('.addpopupContent').style.opacity = '0';
        document.querySelector('.addownerpopup').querySelector('.addpopupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.addownerpopup').querySelector('.addpopupContainer').style.display = 'none';
        }, 300);
        addowner.style.zIndex = ""
        document.body.style.overflow = "";

    });
    document.querySelector('.addownerpopup').querySelector('.addownerButton').remove();
    editbutton = ""
    editbutton = document.createElement("button");
    editbutton.innerHTML = "Create"
    editbutton.classList.add("addownerButton")
    editbutton.classList.add("addButton")
    editbutton.setAttribute('id','addButton')
    document.querySelector('.addownerpopup').querySelector('.addbuttons').appendChild(editbutton)
    document.querySelector('.addownerpopup').querySelector('.addownerButton').addEventListener('click', async function() {
        addowner.style.zIndex = ""

        fullnameadd = document.querySelector('.addownerpopup').querySelector(".chiefinputs").querySelector(".fullname");
        phonenumberadd = document.querySelector('.addownerpopup').querySelector(".chiefinputs").querySelector(".phonenumber");
        emailadd = document.querySelector('.addownerpopup').querySelector(".chiefinputs").querySelector(".email");
        shopnameadd = document.querySelector('.addownerpopup').querySelector(".chiefinputs").querySelector(".shopname");

        if(fullnameadd.value == ""){
            alert("full name cant be empty ! ");
            return false;
        }
        if(!validatePhoneNumber(phonenumberadd.value)){
            alert("Phone number is not valid ! ");
            return false;
        }
        if(!validateEmail(emailadd.value)){
            alert("Email is not valid ! ");
            return false;
        }
        if(shopnameadd.value == ""){
            alert("Password cant be empty ! ");
            return false;
        }
        
        hi = owners;
        test = false
        hi.forEach((element) =>{
            if(!test){
                if(element.phonenumber == phonenumberadd.value){
                    alert("Phone number already in use ! ");
                    test = true;
                }
                else if(element.email == emailadd.value){
                    alert("Email already in use ! ");
                    test = true;
                }
            }
        })
        if(!test){
            var randomstring = Math.random().toString(36).slice(-8);
            bomba = await axios.post("/api/v1/accounts", {
                "phonenumber" : phonenumberadd.value,
                "password" : shopnameadd.value,
                "fullname" : fullnameadd.value,
                "email" : emailadd.value,
                "owner" : true
            });
            newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" added new owner with email :"'+emailadd.value+'"';
            ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
                "updatelog" : newupdatelog+'<br>'+devaccount.updatelog,
                "email" : devaccount.email,
                "password" : devaccount.password,
                "username" : devaccount.username,
                "name" : devaccount.name,
            })

            document.querySelector('.addownerpopup').querySelector('.addpopupContainer').style.opacity = '0';
            document.querySelector('.addownerpopup').querySelector('.addpopupContent').style.opacity = '0';
            document.querySelector('.addownerpopup').querySelector('.addpopupContent').style.transform = 'translateY(-20px)';
            setTimeout(function() {
                document.querySelector('.addownerpopup').querySelector('.addpopupContainer').style.display = 'none';
            }, 300);
            document.body.style.overflow = "";
            location.reload();
        }
    })
})
adddev.addEventListener("click",e=>{
    adddev.style.zIndex = "-99"
    document.body.style.overflow = "hidden";
    document.querySelector('.adddevpopup').querySelector('.addpopuptext').innerHTML=`Create Owner`;
    document.querySelector('.adddevpopup').querySelector('.addownerButton').innerHTML = 'Create';
    document.querySelector('.adddevpopup').querySelector('.addcancelButton').innerHTML = 'Cancel';
    document.querySelector('.adddevpopup').querySelector('.addpopupContainer').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.adddevpopup').querySelector('.addpopupContainer').style.opacity = '1';
        document.querySelector('.adddevpopup').querySelector('.addpopupContent').style.opacity = '1';
        document.querySelector('.adddevpopup').querySelector('.addpopupContent').style.transform = 'translateY(0)';
    }, 50);
    document.querySelector('.adddevpopup').querySelector('.addcancelButton').addEventListener('click', function() {
        document.querySelector('.adddevpopup').querySelector('.addpopupContainer').style.opacity = '0';
        document.querySelector('.adddevpopup').querySelector('.addpopupContent').style.opacity = '0';
        document.querySelector('.adddevpopup').querySelector('.addpopupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.adddevpopup').querySelector('.addpopupContainer').style.display = 'none';
        }, 300);
        adddev.style.zIndex = ""
        document.body.style.overflow = "";

    });
    document.querySelector('.adddevpopup').querySelector('.addownerButton').remove();
    editbutton = ""
    editbutton = document.createElement("button");
    editbutton.innerHTML = "Create"
    editbutton.classList.add("addownerButton")
    editbutton.classList.add("addButton")
    editbutton.setAttribute('id','addButton')
    document.querySelector('.adddevpopup').querySelector('.addbuttons').appendChild(editbutton)
    document.querySelector('.adddevpopup').querySelector('.addownerButton').addEventListener('click', async function() {
        adddev.style.zIndex = ""

        fullnameadd = document.querySelector('.adddevpopup').querySelector(".chiefinputs").querySelector(".fullname");
        phonenumberadd = document.querySelector('.adddevpopup').querySelector(".chiefinputs").querySelector(".phonenumber");
        emailadd = document.querySelector('.adddevpopup').querySelector(".chiefinputs").querySelector(".email");
        shopnameadd = document.querySelector('.adddevpopup').querySelector(".chiefinputs").querySelector(".shopname");

        if(fullnameadd.value == ""){
            alert("Name cant be empty ! ");
            return false;
        }
        if(phonenumberadd.value == ""){
            alert("Username is not valid ! ");
            return false;
        }
        if(!validateEmail(emailadd.value)){
            alert("Email is not valid ! ");
            return false;
        }
        if(shopnameadd.value == ""){
            alert("Password cant be empty ! ");
            return false;
        }
        
        hi = devsdata;
        test = false
        hi.forEach((element) =>{
            if(!test){
                if(element.username == phonenumberadd.value){
                    alert("Username already in use ! ");
                    test = true;
                }
                
            }
        })
        if(!test){
            bomba = await axios.post("/api/v1/devs/", {
                "username" : phonenumberadd.value,
                "password" : shopnameadd.value,
                "name" : fullnameadd.value,
                "email" : emailadd.value
            });
            newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" added new Developer account with email :"'+emailadd.value+'"';
            ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
                "updatelog" : newupdatelog+'<br>'+devaccount.updatelog,
                "email" : devaccount.email,
                "password" : devaccount.password,
                "username" : devaccount.username,
                "name" : devaccount.name,
            })

            document.querySelector('.adddevpopup').querySelector('.addpopupContainer').style.opacity = '0';
            document.querySelector('.adddevpopup').querySelector('.addpopupContent').style.opacity = '0';
            document.querySelector('.adddevpopup').querySelector('.addpopupContent').style.transform = 'translateY(-20px)';
            setTimeout(function() {
                document.querySelector('.adddevpopup').querySelector('.addpopupContainer').style.display = 'none';
            }, 300);
            document.body.style.overflow = "";
            location.reload();
        }
    })
})

function placeData(shop, card){
    node = card[0];
    node.innerHTML = ' ' + shop.shopname;
    node = card[1];
    node.innerHTML = '<i class="fa fa-user"></i> ' + shop.chiefname;
    node = card[2];
    node.innerHTML = '<i class="fa fa-phone"></i> ' + shop.phonenumber;
    node = card[3];
    node.innerHTML = '<i class="fa fa-envelope"></i> ' + shop.email;
    node = card[4];
    node.innerHTML = '<i class="fa fa-map-marker"></i> ' + shop.address;
}
function placeDataowner(shop, card){
    node = card[0];
    node.innerHTML = ' ' + shop.fullname;
    node = card[1];
    node.innerHTML = '<i class="fa fa-phone"></i> ' + shop.phonenumber;
    node = card[2];
    node.innerHTML = '<i class="fa fa-envelope"></i> ' + shop.email;
    node = card[3];
    node.innerHTML = '<i class="fas fa-lock"></i> ' + shop.password;
}
function placeDatadev(shop, card){
    node = card[0];
    node.innerHTML = ' ' + shop.username;
    node = card[1];
    node.innerHTML = '<i class="fa fa-user"></i> ' + shop.name;
    node = card[2];
    node.innerHTML = '<i class="fa fa-envelope"></i> ' + shop.email;
    node = card[3];
    node.innerHTML = '<i class="fas fa-lock"></i> ' + shop.password;
}


var shops;
var owners;
var articles;
var devusername;
var devpassword;
var totalownerpage;
var ownerpage;
var totaldevpage;
var devpage;
var devaccount;
var devsdata;
async function myLoad(){

    passtext = ""
    devsdata = await axios.get('/api/v1/devs');
    devsdata = devsdata.data.devs;
    devusername = localStorage.getItem('devusername');
    devsdata.forEach(element =>{
        if(element.username == devusername){
            devaccount = element;
        }
    })

    document.querySelector(".auto").innerHTML = devaccount.name;
    data = await axios.get('/api/v1/shops');
    data = data.data;
    shops = data.shops;
    for(i = 0; i < shops.length ; i++){
        nodes = cards[i].children;
        editbutton = document.createElement('button')
        editbutton.classList.add("edit")
        editbutton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        deletebutton = document.createElement('button')        
        deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
        deletebutton.classList.add("delete")
        cards[i].querySelector('.buttons').appendChild(editbutton)
        cards[i].querySelector('.buttons').appendChild(deletebutton)
        cards[i].querySelector('.delete').addEventListener('click',(function(index) {
            return  function(e){
                deleteshop(shops[index].shopname, shops[index].email);
            }
        })(i));
        cards[i].querySelector('.edit').addEventListener('click',(function(index) {
            return function(e){
                editshop(shops[index].shopname, shops[index].email);
            }
        })(i));
        placeData(shops[i], nodes);
        cards[i].parentElement.style.display = "flex";
    }
    dataowner = await axios.get('/api/v1/accounts');
    dataowner = dataowner.data;
    owners = dataowner.accounts;
    k = []
    owners.forEach(element =>{
        if(element.owner){
            k.push(element);
        }
    })
    owners = k
    totalownerpage = Math.ceil(owners.length / 6) ;
    ownerpage = 1;
    for(i = 0; i < owners.length && i < 6 ; i++){
        nodes = cardsowner[i].children;
        editbutton = document.createElement('button')
        editbutton.classList.add("edit")
        editbutton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        deletebutton = document.createElement('button')        
        deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
        deletebutton.classList.add("delete")
        cardsowner[i].querySelector('.buttons').appendChild(editbutton)
        if(owners.length != 1){
            cardsowner[i].querySelector('.buttons').appendChild(deletebutton)
            cardsowner[i].querySelector('.delete').addEventListener('click',(function(index) {
                return  function(e){
                    deleteshopowner(owners[index]);
                }
            })(i))
        }

        cardsowner[i].querySelector('.edit').addEventListener('click',(function(index) {
            return function(e){
                editshopowner(owners[index]);
            }
        })(i));
        placeDataowner(owners[i], nodes);
        cardsowner[i].parentElement.style.display = "flex";
    }
    devs = devsdata
    totaldevpage = Math.ceil(devs.length / 6) ;
    devpage = 1;
    for(i = 0; i < devs.length && i < 6 ; i++){
        nodes = cardsdev[i].children;
        editbutton = document.createElement('button')
        editbutton.classList.add("edit")
        editbutton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        deletebutton = document.createElement('button')        
        deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
        deletebutton.classList.add("delete")
        if(devs.length != 1){
            cardsdev[i].querySelector('.buttons').appendChild(deletebutton)

            cardsdev[i].querySelector('.delete').addEventListener('click',(function(index) {
                return  function(e){
                    deleteshopdev(devs[index]);
                }
            })(i));
        }
        cardsdev[i].querySelector('.buttons').appendChild(editbutton)
        cardsdev[i].querySelector('.edit').addEventListener('click',(function(index) {
            return function(e){
                editshopdev(devs[index]);
            }
        })(i));
        
        
        placeDatadev(devs[i], nodes);
        cardsdev[i].parentElement.style.display = "flex";
    }
    
    document.querySelector('.form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_fwyydah', 'template_py55c3s', this)
            .then(() => {
            }, (error) => {
            });
    });
}
previousButtonowner.addEventListener("click", async (e) =>{
    e.preventDefault();
    if(ownerpage != 1){
        ownerpage = ownerpage - 1;
        for(i = 0; i < 6; i++){
            cardsowner[i].style.display = "none";
        }
        for(i = 0; i < owners.length && i < 6 ; i++){
            nodes = cardsowner[i].children;
            cardsowner[i].style.display = "flex";
            editbutton = document.createElement('button')
            editbutton.classList.add("edit")
            editbutton.innerHTML = '<i class="fas fa-edit"></i> Edit';
            deletebutton = document.createElement('button')        
            deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
            deletebutton.classList.add("delete")
            cardsowner[i].querySelector('.buttons').innerHTML =""
            cardsowner[i].querySelector('.buttons').appendChild(editbutton)
            cardsowner[i].querySelector('.buttons').appendChild(deletebutton)
            cardsowner[i].querySelector('.delete').addEventListener('click',(function(index) {
                return  function(e){
                    deleteshopowner(owners[index]);
                }
            })(i))
            cardsowner[i].querySelector('.edit').addEventListener('click',(function(index) {
                return function(e){
                    editshopowner(owners[index]);
                }
            })(i));
            placeDataowner(owners[i + (ownerpage - 1) * 6], nodes);
        }
        pageTextowner.innerHTML = ownerpage;
    }
}
)
nextButtonowner.addEventListener("click", async (e) =>{
    e.preventDefault();
    if(ownerpage != totalownerpage){
        ownerpage = ownerpage + 1;
        for(i = 0; i < 6; i++){
            cardsowner[i].style.display = "none";
        }
        for(i = 0; i < owners.length && i < 6 ; i++){
            nodes = cardsowner[i].children;
            editbutton = document.createElement('button')
            editbutton.classList.add("edit")
            editbutton.innerHTML = '<i class="fas fa-edit"></i> Edit';
            deletebutton = document.createElement('button')        
            deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
            deletebutton.classList.add("delete")
            cardsowner[i].querySelector('.buttons').innerHTML =""
            cardsowner[i].querySelector('.buttons').appendChild(editbutton)
            cardsowner[i].querySelector('.buttons').appendChild(deletebutton)
            cardsowner[i].querySelector('.delete').addEventListener('click',(function(index) {
                return  function(e){
                    deleteshopowner(owners[index]);
                }
            })(i))
            cardsowner[i].querySelector('.edit').addEventListener('click',(function(index) {
                return function(e){
                    editshopowner(owners[index]);
                }
            })(i));
            cardsowner[i].style.display = "flex";
            
            placeDataowner(owners[i + (ownerpage - 1) * 6], nodes);
        }
        pageTextowner.innerHTML = ownerpage;
    }
})
previousButtondev.addEventListener("click", async (e) =>{
    e.preventDefault();
    if(devpage != 1){
        devpage = devpage - 1;
        for(i = 0; i < 6; i++){
            cardsdev[i].style.display = "none";
        }
        for(i = 0; i < devs.length && i < 6 ; i++){
            nodes = cardsdev[i].children;
            cardsdev[i].style.display = "flex";
            editbutton = document.createElement('button')
            editbutton.classList.add("edit")
            editbutton.innerHTML = '<i class="fas fa-edit"></i> Edit';
            deletebutton = document.createElement('button')        
            deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
            deletebutton.classList.add("delete")
            cardsdev[i].querySelector('.buttons').innerHTML =""
            cardsdev[i].querySelector('.buttons').appendChild(editbutton)
            cardsdev[i].querySelector('.buttons').appendChild(deletebutton)

            cardsdev[i].querySelector('.delete').addEventListener('click',(function(index) {
                return  function(e){
                    deleteshopdev(devs[index]);
                }
            })(i));
            cardsdev[i].querySelector('.edit').addEventListener('click',(function(index) {
                return function(e){
                    editshopdev(devs[index]);
                }
            })(i));
            placeDatadev(devs[i + (devpage - 1) * 6], nodes);
        }
        pageTextdev.innerHTML = devpage;
    }
}
)
nextButtondev.addEventListener("click", async (e) =>{
    e.preventDefault();
    if(devpage != totaldevpage){
        devpage = devpage + 1;
        for(i = 0; i < 6; i++){
            cardsdev[i].style.display = "none";
        }
        for(i = 0; i < devs.length && i < 6 ; i++){
            nodes = cardsdev[i].children;
            editbutton = document.createElement('button')
            editbutton.classList.add("edit")
            editbutton.innerHTML = '<i class="fas fa-edit"></i> Edit';
            deletebutton = document.createElement('button')        
            deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
            deletebutton.classList.add("delete")
            cardsdev[i].querySelector('.buttons').innerHTML =""
            cardsdev[i].querySelector('.buttons').appendChild(editbutton)
            cardsdev[i].querySelector('.buttons').appendChild(deletebutton)
            cardsdev[i].style.display = "flex";
            cardsdev[i].querySelector('.delete').addEventListener('click',(function(index) {
                return  function(e){
                    deleteshopdev(devs[index]);
                }
            })(i));
            cardsdev[i].querySelector('.edit').addEventListener('click',(function(index) {
                return function(e){
                    editshopdev(devs[index]);
                }
            })(i));
            placeDatadev(devs[i + (devpage - 1) * 6], nodes);
        }
        pageTextdev.innerHTML = devpage;
    }
})
previousButton.addEventListener("click", async (e) =>{
    e.preventDefault();
    if(data.currentPage > 1){
        for(i = 0; i < cards.length; i++){
            cards[i].parentElement.style.display = "none";
        }
        p = Number(data.currentPage) - 1;
        data = await axios.get('/api/v1/shops/?page=' + p);
        data = data.data
        shops = data.shops;
        for(i = 0; i < shops.length; i++){
            nodes = cards[i].children;
            editbutton = document.createElement('button')
            editbutton.classList.add("edit")
            editbutton.innerHTML = '<i class="fas fa-edit"></i> Edit';
            deletebutton = document.createElement('button')        
            deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
            deletebutton.classList.add("delete")
            cards[i].querySelector('.buttons').innerHTML =""
            cards[i].querySelector('.buttons').appendChild(editbutton)
            cards[i].querySelector('.buttons').appendChild(deletebutton)
            cards[i].parentElement.style.display = "flex";
            cards[i].querySelector('.delete').addEventListener('click',(function(index) {
                return  function(e){
                    deleteshop(shops[index].shopname, shops[index].email);
                }
            })(i));
            cards[i].querySelector('.edit').addEventListener('click',(function(index) {
                return function(e){
                    editshop(shops[index].shopname, shops[index].email);
                }
            })(i));
            placeData(shops[i], nodes);

        }
        pageText.innerHTML = p;
    }
})
nextButton.addEventListener("click", async (e) =>{
    e.preventDefault();
    if(data.currentPage < data.totalPages){
        for(i = 0; i < cards.length; i++){
            cards[i].parentElement.style.display = "none";
        }
        p = Number(data.currentPage) + 1;
        data = await axios.get('/api/v1/shops/?page=' + p);
        data = data.data
        shops = data.shops;
        for(i = 0; i < shops.length; i++){
            nodes = cards[i].children;
            editbutton = document.createElement('button')
            editbutton.classList.add("edit")
            editbutton.innerHTML = '<i class="fas fa-edit"></i> Edit';
            deletebutton = document.createElement('button')        
            deletebutton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
            deletebutton.classList.add("delete")
            cards[i].querySelector('.buttons').innerHTML =""
            cards[i].querySelector('.buttons').appendChild(editbutton)
            cards[i].querySelector('.buttons').appendChild(deletebutton)
            cards[i].parentElement.style.display = "flex";
            cards[i].querySelector('.delete').addEventListener('click',(function(index) {
                return  function(e){
                    deleteshop(shops[index].shopname, shops[index].email);
                }
            })(i));
            cards[i].querySelector('.edit').addEventListener('click',(function(index) {
                return function(e){
                    editshop(shops[index].shopname, shops[index].email);
                }
            })(i));
            placeData(shops[i], nodes);
        }
        pageText.innerHTML = p;
    }
})

function deleteshop(shopname,email){
    document.body.style.overflow = "hidden";
    document.querySelector('.deleteshoppopup').querySelector('.popuptext').innerHTML=`Delete ${shopname}?`;
    document.querySelector('.deleteshoppopup').querySelector('.deleteButton').innerHTML = 'Delete';
    document.querySelector('.deleteshoppopup').querySelector('.cancelButton').innerHTML = 'Cancel';
    document.querySelector('.deleteshoppopup').querySelector('.popupContainer').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.deleteshoppopup').querySelector('.popupContainer').style.opacity = '1';
        document.querySelector('.deleteshoppopup').querySelector('.popupContent').style.opacity = '1';
        document.querySelector('.deleteshoppopup').querySelector('.popupContent').style.transform = 'translateY(0)';
    }, 50);
    document.querySelector('.deleteshoppopup').querySelector('.cancelButton').addEventListener('click', function() {
        document.querySelector('.deleteshoppopup').querySelector('.popupContainer').style.opacity = '0';
        document.querySelector('.deleteshoppopup').querySelector('.popupContent').style.opacity = '0';
        document.querySelector('.deleteshoppopup').querySelector('.popupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.deleteshoppopup').querySelector('.popupContainer').style.display = 'none';
        }, 300);
        document.body.style.overflow = "";
    });
    document.querySelector('.deleteshoppopup').querySelector('.deleteButton').remove()
    editbutton = document.createElement('button')
    editbutton.innerHTML = "Delete"
    editbutton.classList.add("Button")
    editbutton.classList.add("deleteButton")
    editbutton.setAttribute("id","deleteButton")
    document.querySelector('.deleteshoppopup').querySelector('.popupContent').appendChild(editbutton)
         
    document.querySelector('.deleteshoppopup').querySelector('.deleteButton').addEventListener('click', async function() {
        ok = await axios.get("/api/v1/articles/byemail/"+email)
        ok = ok.data.articles;
        ok.forEach(async element=>{
            h = await axios.delete("/api/v1/articles/byid/"+element._id)
        })
        OK = await axios.delete("/api/v1/shops/" + email);
        OK = await axios.delete("/api/v1/accounts/" + email);
        newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" deleted shop and chief with email :"'+email+'"';
        ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
            "updatelog" : newupdatelog+'<br>'+devaccount.updatelog,
            "email" : devaccount.email,
            "password" : devaccount.password,
            "username" : devaccount.username,
            "name" : devaccount.name,
        })
        document.querySelector('.deleteshoppopup').querySelector('.popupContainer').style.opacity = '0';
        document.querySelector('.deleteshoppopup').querySelector('.popupContent').style.opacity = '0';
        document.querySelector('.deleteshoppopup').querySelector('.popupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.deleteshoppopup').querySelector('.popupContainer').style.display = 'none';
        }, 300);
        document.body.style.overflow = "";
        setTimeout(() => {
            location.reload();            
        }, 500);
});
}
function deleteshopowner(owner){
    document.body.style.overflow = "hidden";
    document.querySelector('.deleteownerpopup').querySelector('.popuptext').innerHTML=`Delete ${owner.fullname}?`;
    document.querySelector('.deleteownerpopup').querySelector('.deleteButton').innerHTML = 'Delete';
    document.querySelector('.deleteownerpopup').querySelector('.cancelButton').innerHTML = 'Cancel';
    document.querySelector('.deleteownerpopup').querySelector('.popupContainer').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.deleteownerpopup').querySelector('.popupContainer').style.opacity = '1';
        document.querySelector('.deleteownerpopup').querySelector('.popupContent').style.opacity = '1';
        document.querySelector('.deleteownerpopup').querySelector('.popupContent').style.transform = 'translateY(0)';
    }, 50);
    document.querySelector('.deleteownerpopup').querySelector('.cancelButton').addEventListener('click', function() {
        document.querySelector('.deleteownerpopup').querySelector('.popupContainer').style.opacity = '0';
        document.querySelector('.deleteownerpopup').querySelector('.popupContent').style.opacity = '0';
        document.querySelector('.deleteownerpopup').querySelector('.popupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.deleteownerpopup').querySelector('.popupContainer').style.display = 'none';
        }, 300);
        document.body.style.overflow = "";
    });
    document.querySelector('.deleteownerpopup').querySelector('.deleteButton').remove()
    editbutton = document.createElement('button')
    editbutton.innerHTML = "Delete"
    editbutton.classList.add("Button")
    editbutton.classList.add("deleteButton")
    editbutton.setAttribute("id","deleteButton")
    document.querySelector('.deleteownerpopup').querySelector('.popupContent').appendChild(editbutton)
    document.querySelector('.deleteownerpopup').querySelector('.deleteButton').addEventListener('click', async function() {
        OK = await axios.delete("/api/v1/accounts/" + owner.email);
        newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" deleted owner with email :"'+owner.email+'"';
        ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
            "updatelog" : newupdatelog+'<br>'+devaccount.updatelog,
            "email" : devaccount.email,
            "password" : devaccount.password,
            "username" : devaccount.username,
            "name" : devaccount.name,
        })
        document.querySelector('.deleteownerpopup').querySelector('.popupContainer').style.opacity = '0';
        document.querySelector('.deleteownerpopup').querySelector('.popupContent').style.opacity = '0';
        document.querySelector('.deleteownerpopup').querySelector('.popupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.deleteownerpopup').querySelector('.popupContainer').style.display = 'none';
        }, 300);
        document.body.style.overflow = "";
        location.reload();
});
}
function deleteshopdev(dev){
    document.body.style.overflow = "hidden";
    document.querySelector('.deletedevpopup').querySelector('.popuptext').innerHTML=`Delete ${dev.username}?`;
    document.querySelector('.deletedevpopup').querySelector('.deleteButton').innerHTML = 'Delete';
    document.querySelector('.deletedevpopup').querySelector('.cancelButton').innerHTML = 'Cancel';
    document.querySelector('.deletedevpopup').querySelector('.popupContainer').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.deletedevpopup').querySelector('.popupContainer').style.opacity = '1';
        document.querySelector('.deletedevpopup').querySelector('.popupContent').style.opacity = '1';
        document.querySelector('.deletedevpopup').querySelector('.popupContent').style.transform = 'translateY(0)';
    }, 50);
    document.querySelector('.deletedevpopup').querySelector('.cancelButton').addEventListener('click', function() {
        document.querySelector('.deletedevpopup').querySelector('.popupContainer').style.opacity = '0';
        document.querySelector('.deletedevpopup').querySelector('.popupContent').style.opacity = '0';
        document.querySelector('.deletedevpopup').querySelector('.popupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.deletedevpopup').querySelector('.popupContainer').style.display = 'none';
        }, 300);
        document.body.style.overflow = "";
    });
    document.querySelector('.deletedevpopup').querySelector('.deleteButton').remove()
    editbutton = document.createElement('button')
    editbutton.innerHTML = "Delete"
    editbutton.classList.add("Button")
    editbutton.classList.add("deleteButton")
    editbutton.setAttribute("id","deleteButton")
    document.querySelector('.deletedevpopup').querySelector('.popupContent').appendChild(editbutton)
    document.querySelector('.deletedevpopup').querySelector('.deleteButton').addEventListener('click', async function() {
        OK = await axios.delete("/api/v1/devs/" + dev.username);
        newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" deleted developer with username :"'+dev.username+'" <br>"'+dev.username+'" Update-log :<br>'+dev.updatelog+'<br><br>';
        ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
            "updatelog" : newupdatelog+'<br>'+devaccount.updatelog,
            "email" : devaccount.email,
            "password" : devaccount.password,
            "username" : devaccount.username,
            "name" : devaccount.name
        })
        document.querySelector('.deletedevpopup').querySelector('.popupContainer').style.opacity = '0';
        document.querySelector('.deletedevpopup').querySelector('.popupContent').style.opacity = '0';
        document.querySelector('.deletedevpopup').querySelector('.popupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.deletedevpopup').querySelector('.popupContainer').style.display = 'none';
        }, 300);
        document.body.style.overflow = "";
        location.reload();
});
}
var chiefnameinput;
var phonenumberinput;
var emailinput;
var shopnameinput;
var addressinput;
async function editshopdev(dev){
    document.body.style.overflow = "hidden";
    chiefnameinput = document.querySelector('.editdevpopup').querySelector(".chiefinputs").querySelector(".fullname");
    phonenumberinput = document.querySelector('.editdevpopup').querySelector(".chiefinputs").querySelector(".phonenumber");
    emailinput = document.querySelector('.editdevpopup').querySelector(".chiefinputs").querySelector(".email");
    shopnameinput = document.querySelector('.editdevpopup').querySelector(".chiefinputs").querySelector(".shopname");
    chiefnameinput.value = dev.name;
    phonenumberinput.value = dev.username;
    emailinput.value = dev.email;
    shopnameinput.value = dev.password;
    document.querySelector('.editdevpopup').querySelector('.editpopuptext').innerHTML=`Edit ${dev.name}`;
    document.querySelector('.editdevpopup').querySelector('.editshopButton').innerHTML = 'Save';
    document.querySelector('.editdevpopup').querySelector('.editcancelButton').innerHTML = 'Cancel';
    document.querySelector('.editdevpopup').querySelector('.editpopupContainer').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.editdevpopup').querySelector('.editpopupContainer').style.opacity = '1';
        document.querySelector('.editdevpopup').querySelector('.editpopupContent').style.opacity = '1';
        document.querySelector('.editdevpopup').querySelector('.editpopupContent').style.transform = 'translateY(0)';
    }, 50);
    document.querySelector('.editdevpopup').querySelector('.editcancelButton').addEventListener('click', function() {
        document.querySelector('.editdevpopup').querySelector('.editpopupContainer').style.opacity = '0';
        document.querySelector('.editdevpopup').querySelector('.editpopupContent').style.opacity = '0';
        document.querySelector('.editdevpopup').querySelector('.editpopupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.editdevpopup').querySelector('.editpopupContainer').style.display = 'none';
        }, 300);
        document.body.style.overflow = "";
        chiefnameinput.value = "";
        phonenumberinput.value = "";
        emailinput.value = "";
        shopnameinput.value = "";
    });
    document.querySelector('.editdevpopup').querySelector('.editshopButton').remove()
    editbutton = document.createElement('button')
    editbutton.innerHTML = "Save"
    editbutton.classList.add("editButton")
    editbutton.classList.add("editshopButton")
    editbutton.setAttribute("id","editButton")
    document.querySelector('.editdevpopup').querySelector('.editbuttons').appendChild(editbutton)
    document.querySelector('.editdevpopup').querySelector('.editshopButton').addEventListener('click', async(e) => {
        e.preventDefault();
        adddev.style.zIndex = ""

        if(chiefnameinput.value == ""){
            alert("Name cant be empty ! ");
            return false;
        }
        if(phonenumberinput.value == ""){
            alert("Username is not valid ! ");
            return false;
        }
        if(!validateEmail(emailinput.value)){
            alert("Email is not valid ! ");
            return false;
        }
        if(shopnameinput.value == ""){
            alert("Password cant be empty ! ");
            return false;
        }
        
        hi = devsdata;
        test = false
        if(dev.username != phonenumberinput.value){
            hi.forEach((element) =>{
                if(!test){
                    if(element.username == phonenumberinput.value){
                        alert("Username already in use ! ");
                        test = true;
                    }
                    
                }
            })
        }
        
        if(!test){
            newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" Edited Developer account with username :"'+dev.value+'"';
            bomba = await axios.patch("/api/v1/devs/"+dev.username, {
                "username" : phonenumberinput.value,
                "password" : shopnameinput.value,
                "name" : chiefnameinput.value,
                "email" : emailinput.value,
                "updatelog" : dev.updatelog,
            });
            if(dev.username != devaccount.username){
                ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
                    "updatelog" : newupdatelog+'<br>'+devaccount.updatelog,
                    "email" : devaccount.email,
                    "password" : devaccount.password,
                    "username" : devaccount.username,
                    "name" : devaccount.name,
                })
            }
            

            document.querySelector('.editdevpopup').querySelector('.editpopupContainer').style.opacity = '0';
            document.querySelector('.editdevpopup').querySelector('.editpopupContent').style.opacity = '0';
            document.querySelector('.editdevpopup').querySelector('.editpopupContent').style.transform = 'translateY(-20px)';
            setTimeout(function() {
                document.querySelector('.editdevpopup').querySelector('.editpopupContainer').style.display = 'none';
            }, 300);
            document.body.style.overflow = "";
            location.reload();  
        }
    
    });
}

async function editshop(shopname, email){
    ok = await axios.get("/api/v1/shops/" + email);
    ok = ok.data.shop
    document.body.style.overflow = "hidden";
    chiefnameinput = document.querySelector('.editshoppopup').querySelector(".chiefinputs").querySelector(".fullname");
    phonenumberinput = document.querySelector('.editshoppopup').querySelector(".chiefinputs").querySelector(".phonenumber");
    emailinput = document.querySelector('.editshoppopup').querySelector(".chiefinputs").querySelector(".email");
    shopnameinput = document.querySelector('.editshoppopup').querySelector(".shopinputs").querySelector(".shopname");
    addressinput = document.querySelector('.editshoppopup').querySelector(".shopinputs").querySelector(".address");
    chiefnameinput.value = ok.chiefname;
    phonenumberinput.value = ok.phonenumber;
    emailinput.value = ok.email;
    shopnameinput.value = ok.shopname;
    addressinput.value = ok.address;
    document.querySelector('.editshoppopup').querySelector('.editpopuptext').innerHTML=`Edit ${shopname}`;
    document.querySelector('.editshoppopup').querySelector('.editshopButton').innerHTML = 'Save';
    document.querySelector('.editshoppopup').querySelector('.editcancelButton').innerHTML = 'Cancel';
    document.querySelector('.editshoppopup').querySelector('.editpopupContainer').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.editshoppopup').querySelector('.editpopupContainer').style.opacity = '1';
        document.querySelector('.editshoppopup').querySelector('.editpopupContent').style.opacity = '1';
        document.querySelector('.editshoppopup').querySelector('.editpopupContent').style.transform = 'translateY(0)';
    }, 50);
    document.querySelector('.editshoppopup').querySelector('.editcancelButton').addEventListener('click', function() {
        document.querySelector('.editshoppopup').querySelector('.editpopupContainer').style.opacity = '0';
        document.querySelector('.editshoppopup').querySelector('.editpopupContent').style.opacity = '0';
        document.querySelector('.editshoppopup').querySelector('.editpopupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.editshoppopup').querySelector('.editpopupContainer').style.display = 'none';
        }, 300);
        document.body.style.overflow = "";
        chiefnameinput.value = "";
        phonenumberinput.value = "";
        emailinput.value = "";
        addressinput.value = "";
        shopnameinput.value = "";
    });
    document.querySelector('.editshoppopup').querySelector('.editshopButton').remove()
    editbutton = document.createElement('button')
    editbutton.innerHTML = "Save"
    editbutton.classList.add("editButton")
    editbutton.classList.add("editshopButton")
    editbutton.setAttribute("id","editButton")
    document.querySelector('.editshoppopup').querySelector('.editbuttons').appendChild(editbutton)
    document.querySelector('.editshoppopup').querySelector('.editshopButton').addEventListener('click', async(e) => {
        
        e.preventDefault();
        if(chiefnameinput.value == ""){
            alert("Full name cant be empty ! ");
            return false;
        }
        if(!validatePhoneNumber(phonenumberinput.value)){
            alert("Phone number is not valid ! ");
            return false;
        }
        if(!validateEmail(emailinput.value)){
            alert("Email is not valid ! ");
            return false;
        }
        if(shopnameinput.value == ""){
            alert("Shop name can't be empty ! ");
            return false;
        }
        if(addressinput.value == ""){
            alert("Address can't be empty ! ");
            return false;
        }
        test = false;
        if(email != emailinput.value){
            var emails = await axios.get("api/v1/shops/?page=1&limit=9999999");
            emails = emails.data.shops
            emails.forEach((element) =>{
                if(!test){
                    if(element.email == emailinput.value){
                        alert("Email already in use !");
                        test = true;
                    }
                }
            })
            if(!test){
                m = await axios.get('/api/v1/articles/byemail/'+email)
                m = m.data.articles
                m.forEach(async (element) =>{
                    await axios.patch("/api/v1/articles/byid/" + element._id,  {
                        "email" : emailinput.value,
                    })
                })
                document.querySelector('.none').querySelector('.chiefname').value = chiefnameinput.value;
                d = await axios.get('/api/v1/accounts');
                d = d.data
                document.querySelector('.none').querySelector('.ownername').value = devaccount.name;
                document.querySelector('.none').querySelector('.chiefemail').value = emailinput.value;
                k = await axios.get("/api/v1/accounts/" + email);
                k = k.data.account
                document.querySelector('.none').querySelector('.message').value = 'Your Password is : '+ k.password;
    
                document.querySelector('.formsubmit').click();
            }
        }
        if(!test){
            OK = await axios.patch("/api/v1/shops/" + email,  {
                "shopname" : shopnameinput.value,
                "chiefname" : chiefnameinput.value,
                "phonenumber" : phonenumberinput.value,
                "email" : emailinput.value,
                "address": addressinput.value    
            })
            chief = await axios.get("/api/v1/accounts/"+email);
            chief = chief.data.account;
            OK = await axios.patch("/api/v1/accounts/" + email,  {
                "owner" : false,
                "fullname" : chiefnameinput.value,
                "phonenumber" : phonenumberinput.value,
                "email" : emailinput.value,
                "password": chief.password   
            })
            newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" edit shop and chief with email :"'+email+'"';
            ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
                "updatelog" : newupdatelog+'<br>'+devaccount.updatelog,
                "email" : devaccount.email,
                "password" : devaccount.password,
                "username" : devaccount.username,
                "name" : devaccount.name,
            })
            document.querySelector('.editshoppopup').querySelector('.editpopupContainer').style.opacity = '0';
            document.querySelector('.editshoppopup').querySelector('.editpopupContent').style.opacity = '0';
            document.querySelector('.editshoppopup').querySelector('.editpopupContent').style.transform = 'translateY(-20px)';
            setTimeout(function() {
                document.querySelector('.editshoppopup').querySelector('.editpopupContainer').style.display = 'none';     
            }, 300);
            document.body.style.overflow = "";
            location.reload();
        }
    });
}

async function editshopowner(owner){
    document.body.style.overflow = "hidden";
    chiefnameinput = document.querySelector('.editownerpopup').querySelector(".chiefinputs").querySelector(".fullname");
    phonenumberinput = document.querySelector('.editownerpopup').querySelector(".chiefinputs").querySelector(".phonenumber");
    emailinput = document.querySelector('.editownerpopup').querySelector(".chiefinputs").querySelector(".email");
    shopnameinput = document.querySelector('.editownerpopup').querySelector(".chiefinputs").querySelector(".shopname");
    chiefnameinput.value = owner.fullname;
    phonenumberinput.value = owner.phonenumber;
    emailinput.value = owner.email;
    shopnameinput.value = owner.password;
    document.querySelector('.editownerpopup').querySelector('.editpopuptext').innerHTML=`Edit ${owner.fullname}`;
    document.querySelector('.editownerpopup').querySelector('.editshopButton').innerHTML = 'Save';
    document.querySelector('.editownerpopup').querySelector('.editcancelButton').innerHTML = 'Cancel';
    document.querySelector('.editownerpopup').querySelector('.editpopupContainer').style.display = 'flex';
    setTimeout(function() {
        document.querySelector('.editownerpopup').querySelector('.editpopupContainer').style.opacity = '1';
        document.querySelector('.editownerpopup').querySelector('.editpopupContent').style.opacity = '1';
        document.querySelector('.editownerpopup').querySelector('.editpopupContent').style.transform = 'translateY(0)';
    }, 50);
    document.querySelector('.editownerpopup').querySelector('.editcancelButton').addEventListener('click', function() {
        document.querySelector('.editownerpopup').querySelector('.editpopupContainer').style.opacity = '0';
        document.querySelector('.editownerpopup').querySelector('.editpopupContent').style.opacity = '0';
        document.querySelector('.editownerpopup').querySelector('.editpopupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.editownerpopup').querySelector('.editpopupContainer').style.display = 'none';
        }, 300);
        document.body.style.overflow = "";
        chiefnameinput.value = "";
        phonenumberinput.value = "";
        emailinput.value = "";
        shopnameinput.value = "";
    });
    document.querySelector('.editownerpopup').querySelector('.editshopButton').remove()
    editbutton = document.createElement('button')
    editbutton.innerHTML = "Save"
    editbutton.classList.add("editButton")
    editbutton.classList.add("editshopButton")
    editbutton.setAttribute("id","editButton")
    document.querySelector('.editownerpopup').querySelector('.editbuttons').appendChild(editbutton)
    document.querySelector('.editownerpopup').querySelector('.editshopButton').addEventListener('click', async(e) => {
        e.preventDefault();
        
        if(chiefnameinput.value == ""){
            alert("Full name cant be empty ! ");
            return false;
        }
        if(!validatePhoneNumber(phonenumberinput.value)){
            alert("Phone number is not valid ! ");
            return false;
        }
        if(!validateEmail(emailinput.value)){
            alert("Email is not valid ! ");
            return false;
        }
        if(shopnameinput.value == ""){
            alert("Password can't be empty ! ");
            return false;
        }
        OK = await axios.patch("/api/v1/accounts/" + owner.email,  {
            "password" : shopnameinput.value,
            "fullname" : chiefnameinput.value,
            "phonenumber" : phonenumberinput.value,
            "email" : emailinput.value,
            "owner" : true
        })
        newupdatelog = 'At "'+new Date()+'" :<br>'+'The dev "'+devaccount.username+'" owner with email :"'+owner.email+'"';
        ok = await axios.patch("/api/v1/devs/"+devaccount.username,{
            "updatelog" : newupdatelog+'<br>'+devaccount.updatelog,
            "email" : devaccount.email,
            "password" : devaccount.password,
            "username" : devaccount.username,
            "name" : devaccount.name,
        })
        document.querySelector('.editownerpopup').querySelector('.editpopupContainer').style.opacity = '0';
        document.querySelector('.editownerpopup').querySelector('.editpopupContent').style.opacity = '0';
        document.querySelector('.editownerpopup').querySelector('.editpopupContent').style.transform = 'translateY(-20px)';
        setTimeout(function() {
            document.querySelector('.editownerpopup').querySelector('.editpopupContainer').style.display = 'none';     
        }, 300);
        document.body.style.overflow = "";
        location.reload();
    
    });
}


function validateEmail(em) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return em.match(validRegex);
}

function validatePhoneNumber(pn){
    allowedKeys = "0123456789";
    if(pn.length != 8){
        return false;
    }
    for(var i = 0; i < pn.length; i++){
        if(allowedKeys.indexOf(pn[i]) < 0){
            return false;
        }
    }
    return true;
}

var articleList = document.querySelectorAll('.article')
for (var i = 0; i < articleList.length; i++) {
    articleList[i].addEventListener('mouseover', function(index) {
        return function(){
            var articletitle = articleList[index].querySelector('.title').querySelector('a');
            articletitle.classList.add('hovered')
        }
    }(i))
    articleList[i].addEventListener('mouseout', function(index) {
        return function(){
            var articletitle = articleList[index].querySelector('.title').querySelector('a')
            articletitle.classList.remove('hovered')
        }
    }(i))
}
var updownbutton = document.querySelector('.updown')
function order(){
    if (updownbutton.value == 'up'){
        updownbutton.value = 'down'
        updownbutton.innerHTML = '<div class="text">&#8595;</div>'
        sort = 1;
        displaySort();
    }
    else{
        updownbutton.value = 'up'
        updownbutton.innerHTML = '<div class="text">&#8593;</div>'
        sort = 0;
        displaySort();
    }
}



var datadata;
var sortedByDate;
var sortedByDateAsc;
var sortedByDateDesc;
var sortedByRates;
var sortedByRatesAsc;
var sortedByRatesDesc;
var sortedByName;
var sortedByNameAsc;
var sortedByNameDesc;
var latestArticles;
var popularArticles;
var currentArticles;
var articleCards = document.querySelectorAll(".article");
var sort = 0 // 0 ASC | 1 DESC

var search = document.getElementsByName("radio")
search.forEach((element) =>{
    element.addEventListener("change", (e) =>{
        e.preventDefault();
        switch (e.target.value) {
            case "0":
                currentArticles = [sortedByNameAsc, sortedByNameDesc];
                break;
            case "1":
                currentArticles = [sortedByRatesAsc, sortedByRatesDesc];
                break;
            case "2":
                currentArticles = [sortedByDateAsc, sortedByDateDesc];
                break;
            default:
                break;
        }
        displaySort();
    })
})

async function myLoad2(){
    datadata = await axios.get("/api/v1/articles");
    datadata = datadata.data.articles;
    sortedByDateAsc = [... datadata];
    sortedByRatesAsc = [... datadata];
    sortedByNameAsc = [... datadata];
    sortedByDateAsc.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    sortedByRatesAsc.sort((a, b) => b.users - a.users);
    sortedByNameAsc.sort((a, b) => {
        if(a.title < b.title){
            return -1;
        }
        if(a.title > b.title){
            return 1;
        }
        return 0;
    });

    sortedByDateDesc = [... sortedByDateAsc];
    sortedByRatesDesc = [... sortedByRatesAsc];
    sortedByNameDesc = [... sortedByNameAsc];
    sortedByDateDesc = sortedByDateDesc.reverse();
    sortedByRatesDesc = sortedByRatesDesc.reverse();
    sortedByNameDesc = sortedByNameDesc.reverse();



    sortedByDate = [sortedByDateAsc, sortedByDateDesc];
    sortedByRates = [sortedByRatesAsc, sortedByRatesDesc];
    sortedByName = [sortedByNameAsc, sortedByNameDesc];
    currentArticles = sortedByName;
    latestArticles = document.querySelectorAll(".latest-articles");
    popularArticles = document.querySelectorAll(".popular-articles");

    for(var i = 0; i < 5 && i < datadata.length; i++){

        latestArticles[i].innerHTML = sortedByDateAsc[i].title;
        latestArticles[i].addEventListener('click',function(id){
            return function(){
                localStorage.setItem('id',id)
                location.href = 'article.html';
            }
        }(sortedByDateAsc[i]._id))

        popularArticles[i].innerHTML = sortedByRatesAsc[i].title;
        popularArticles[i].addEventListener('click',function(id){
            return function(){
                localStorage.setItem('id',id)
                location.href = 'article.html';
            }
        }(sortedByRatesAsc[i]._id))
    }
    if(localStorage.getItem('search') != null){
        document.querySelectorAll('.shopspanel')[2].scrollIntoView({behavior: 'smooth'})
        searchInput.value = localStorage.getItem('search');
        localStorage.removeItem('search');
        searchButton.click();
    }
    else{
        displaySort();
    }
    
}
var page = 1;
var totalPages;

function displaySort(){
    totalPages = Math.ceil((currentArticles[sort].length / 5));
    articleCards.forEach((element) =>{
        element.style.display = "none";
        element.querySelectorAll(".stars").forEach((el)=>{
            el.classList.remove("checked");
        })
    })
    for(var i = (page - 1) * 5; i < page * 5; i++){
        if( i >= currentArticles[sort].length){
            break;
        }
        index = i - ((page - 1) * 5);
        articleCards[index].style.display = "flex";
        articleCards[index].querySelector("img").src = currentArticles[sort][i].image;
        articleCards[index].querySelector(".title").querySelector("a").innerHTML = currentArticles[sort][i].title;
        articleCards[index].querySelector(".desc").innerHTML = currentArticles[sort][i].description;
        articleCards[index].querySelector(".users").innerHTML = currentArticles[sort][i].users;
        articleCards[index].addEventListener('click',function(id){
            return function(){
                localStorage.setItem('id',id)
                location.href = 'article.html';
            }
        }(currentArticles[sort][i]._id))
        articleCards[index]
        t = new Date(currentArticles[sort][i].date).toLocaleString();
        t = t.slice(0, t.indexOf(","));
        articleCards[index].querySelector(".time").innerHTML = t ;
        rates = articleCards[index].querySelectorAll(".stars");
        for(var j = 0; j < Math.round(currentArticles[sort][i].rating); j++){
            rates[j].classList.add("checked");
        }
    }
}
var articlepageText = document.querySelector(".numpagearticle");
document.querySelector(".suivarticle").addEventListener("click", (e) =>{
    e.preventDefault();
    if(page < totalPages){
        page ++;
        displaySort();
        articlepageText.innerHTML = page;
    }
})  

document.querySelector(".prevarticle").addEventListener("click", (e) =>{
    e.preventDefault();
    if(page > 1){
        page --;
        displaySort();
        articlepageText.innerHTML = page;
    }
})

searchButton = document.querySelector(".searchbutton");
searchInput = document.querySelector(".searchinput");
searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    if(searchInput.value == ""){
        updownbutton.value = 'up'
        updownbutton.innerHTML = '<div class="text">&#8593;</div>'
        sort = 0;
        page = 1;
        articlepageText.innerHTML = "1";
        search.forEach((element) =>{
            if(element.checked){
                element.checked = false;
            }
            if(element.value == "0"){
                element.checked = true;
            }
        })
        myLoad2 ();
        return;
    }
    searchWords = new Set(searchInput.value.replace(",", " ").replace(".", " ").split(" "))
    searchWords.delete('');
    m = new Map();
    searchWords.forEach((word) =>{
        datadata.forEach((element)=>{
            word = word.toLowerCase()
            titleList = element.title.toLowerCase()
            descriptionList = element.description.toLowerCase()
            tagsList = element.tags.toLowerCase()
                if(titleList.indexOf(word) != -1){
                if(m.get(element) == undefined){
                    m.set(element, 1);
                }
                else{
                    m.set(element, m.get(element) + 1);
                }
            }
            if(descriptionList.indexOf(word) != -1){
                if(m.get(element) == undefined){
                    m.set(element, 1);
                }
                else{
                    m.set(element, m.get(element) + 1);
                }
            }
            if(tagsList.indexOf(word) != -1){
                if(m.get(element) == undefined){
                    m.set(element, 1);
                }
                else{
                    m.set(element, m.get(element) + 1);
                }
            }
            sortedArray = Array.from(m).sort((a, b) => b[1] - a[1]);
            sortedMap = new Map(sortedArray);
            sortedArray = [];
            sortedMap.forEach((value, key) =>{
                sortedArray.push(key);
            });
            currentArticles = [... sortedArray];
            currentArticles = [currentArticles, sortedArray.reverse()];
            updownbutton.value = 'up'
            updownbutton.innerHTML = '<div class="text">&#8593;</div>'
            sort = 0;
            page = 1;
            articlepageText.innerHTML = "1";
            search.forEach((element) =>{
                if(element.checked){
                    element.checked = false;
                }
            })
            displaySort();
        })
    })

})


async function loadName(){
    let card = document.querySelector(".auto");
    d = await axios.get('/api/v1/accounts');
    d = d.data.accounts
    test = false;
    d.forEach(element =>{
        if(!test && element.email == localStorage.getItem('chief')){
            chiefaccount = element;
            test = true
        }
    })
    card.innerHTML = chiefaccount.fullname;
}