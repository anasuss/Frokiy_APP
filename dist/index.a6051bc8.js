var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,v,g,m,y,b="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function _(e){return e&&e.__esModule?e.default:e}var w={},k={},E=b.parcelRequired3d8;null==E&&((E=function(e){if(e in w)return w[e].exports;if(e in k){var t=k[e];delete k[e];var r={id:e,exports:{}};return w[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){k[e]=t},b.parcelRequired3d8=E);var S={},M={},O=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
M=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
O("object"==typeof self&&self)||O("object"==typeof b&&b)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||M||Function("return this")();var $={},j={};// Detect IE8's incomplete defineProperty implementation
$=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},F={};F=!j(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var x=Function.prototype.call;L=F?x.bind(x):function(){return x.apply(x,arguments)};var P={}.propertyIsEnumerable,T=Object.getOwnPropertyDescriptor;o=T&&!P.call({1:2},1)?function(e){var t=T(this,e);return!!t&&t.enumerable}:P;var I={};I=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var q={},N={},C={},H=Function.prototype,D=H.call,A=F&&H.bind.bind(D,D),R={},z=(C=F?A:function(e){return function(){return D.apply(e,arguments)}})({}.toString),W=C("".slice);R=function(e){return W(z(e),8,-1)};var U=Object,G=C("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
N=j(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!U("z").propertyIsEnumerable(0)})?function(e){return"String"===R(e)?G(e,""):U(e)}:U;var B={},J={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
J=function(e){return null==e};var Y=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
B=function(e){if(J(e))throw new Y("Can't call method on "+e);return e},q=function(e){return N(B(e))};var Q={},V={},K={},X={},Z={},ee="object"==typeof document&&document.all,et=(Z={all:ee,IS_HTMLDDA:void 0===ee&&void 0!==ee}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
X=Z.IS_HTMLDDA?function(e){return"function"==typeof e||e===et}:function(e){return"function"==typeof e};var er=Z.all;K=Z.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:X(e)||e===er}:function(e){return"object"==typeof e?null!==e:X(e)};var en={},ei={};ei=function(e,t){var r;return arguments.length<2?(r=M[e],X(r)?r:void 0):M[e]&&M[e][t]};var eo={};eo=C({}.isPrototypeOf);var ea={},es={},ec={},eu={};eu="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var el=M.process,ed=M.Deno,ep=el&&el.versions||ed&&ed.version,ef=ep&&ep.v8;ef&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(s=(a=ef.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&eu&&(!(a=eu.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eu.match(/Chrome\/(\d+)/))&&(s=+a[1]),ec=s;var eh=M.String;ea=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(es=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!eh(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&ec&&ec<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ev=Object;en=ea?function(e){return"symbol"==typeof e}:function(e){var t=ei("Symbol");return X(t)&&eo(t.prototype,ev(e))};var eg={},em={},ey={},eb=String;ey=function(e){try{return eb(e)}catch(e){return"Object"}};var e_=TypeError;// `Assert: IsCallable(argument) is true`
em=function(e){if(X(e))return e;throw new e_(ey(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eg=function(e,t){var r=e[t];return J(r)?void 0:em(r)};var ew={},ek=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
ew=function(e,t){var r,n;if("string"===t&&X(r=e.toString)&&!K(n=L(r,e))||X(r=e.valueOf)&&!K(n=L(r,e))||"string"!==t&&X(r=e.toString)&&!K(n=L(r,e)))return n;throw new ek("Can't convert object to primitive value")};var eE={},eS={};eS=!1;var eM={},eO={},e$=Object.defineProperty;eO=function(e,t){try{e$(M,e,{value:t,configurable:!0,writable:!0})}catch(r){M[e]=t}return t};var ej="__core-js_shared__";eM=M[ej]||eO(ej,{}),(eE=function(e,t){return eM[e]||(eM[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.33.0",mode:eS?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eL={},eF={},ex=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
eF=function(e){return ex(B(e))};var eP=C({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eL=Object.hasOwn||function(e,t){return eP(eF(e),t)};var eT={},eI=0,eq=Math.random(),eN=C(1..toString);eT=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eN(++eI+eq,36)};var eC=M.Symbol,eH=eE("wks"),eD=ea?eC.for||eC:eC&&eC.withoutSetter||eT,eA=TypeError,eR=(eL(eH,e="toPrimitive")||(eH[e]=es&&eL(eC,e)?eC[e]:eD("Symbol."+e)),eH[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
V=function(e,t){if(!K(e)||en(e))return e;var r,n=eg(e,eR);if(n){if(void 0===t&&(t="default"),r=L(n,e,t),!K(r)||en(r))return r;throw new eA("Can't convert object to primitive value")}return void 0===t&&(t="number"),ew(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
Q=function(e){var t=V(e,"string");return en(t)?t:t+""};var ez={},eW={},eU=M.document,eG=K(eU)&&K(eU.createElement);eW=function(e){return eG?eU.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
ez=!$&&!j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eB=Object.getOwnPropertyDescriptor;i=$?eB:function(e,t){if(e=q(e),t=Q(t),ez)try{return eB(e,t)}catch(e){}if(eL(e,t))return I(!L(o,e,t),e[t])};var eJ={},eY={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eY=$&&j(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eQ={},eV=String,eK=TypeError;// `Assert: Type(argument) is Object`
eQ=function(e){if(K(e))return e;throw new eK(eV(e)+" is not an object")};var eX=TypeError,eZ=Object.defineProperty,e0=Object.getOwnPropertyDescriptor,e1="enumerable",e2="configurable",e3="writable";c=$?eY?function(e,t,r){if(eQ(e),t=Q(t),eQ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e3 in r&&!r[e3]){var n=e0(e,t);n&&n[e3]&&(e[t]=r.value,r={configurable:e2 in r?r[e2]:n[e2],enumerable:e1 in r?r[e1]:n[e1],writable:!1})}return eZ(e,t,r)}:eZ:function(e,t,r){if(eQ(e),t=Q(t),eQ(r),ez)try{return eZ(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eX("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eJ=$?function(e,t,r){return c(e,t,I(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e7={},e9=Function.prototype,e8=$&&Object.getOwnPropertyDescriptor,e5=eL(e9,"name")&&(!$||$&&e8(e9,"name").configurable),e6={},te=C(Function.toString);X(eM.inspectSource)||(eM.inspectSource=function(e){return te(e)}),e6=eM.inspectSource;var tt={},tr={},tn=M.WeakMap;tr=X(tn)&&/native code/.test(String(tn));var ti={},to=eE("keys");ti=function(e){return to[e]||(to[e]=eT(e))};var ta={};ta={};var ts="Object already initialized",tc=M.TypeError,tu=M.WeakMap;if(tr||eM.state){var tl=eM.state||(eM.state=new tu);/* eslint-disable no-self-assign -- prototype methods protection */tl.get=tl.get,tl.has=tl.has,tl.set=tl.set,/* eslint-enable no-self-assign -- prototype methods protection */u=function(e,t){if(tl.has(e))throw new tc(ts);return t.facade=e,tl.set(e,t),t},l=function(e){return tl.get(e)||{}},d=function(e){return tl.has(e)}}else{var tp=ti("state");ta[tp]=!0,u=function(e,t){if(eL(e,tp))throw new tc(ts);return t.facade=e,eJ(e,tp,t),t},l=function(e){return eL(e,tp)?e[tp]:{}},d=function(e){return eL(e,tp)}}var tf=(tt={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!K(t)||(r=l(t)).type!==e)throw new tc("Incompatible receiver, "+e+" required");return r}}}).enforce,th=tt.get,tv=String,tg=Object.defineProperty,tm=C("".slice),ty=C("".replace),tb=C([].join),t_=$&&!j(function(){return 8!==tg(function(){},"length",{value:8}).length}),tw=String(String).split("String"),tk=e7=function(e,t,r){"Symbol("===tm(tv(t),0,7)&&(t="["+ty(tv(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eL(e,"name")||e5&&e.name!==t)&&($?tg(e,"name",{value:t,configurable:!0}):e.name=t),t_&&r&&eL(r,"arity")&&e.length!==r.arity&&tg(e,"length",{value:r.arity});try{r&&eL(r,"constructor")&&r.constructor?$&&tg(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return eL(n,"source")||(n.source=tb(tw,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tk(function(){return X(this)&&th(this).source||e6(this)},"toString"),e4=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(X(r)&&e7(r,o,n),n.global)i?e[t]=r:eO(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tE={},tS={},tM={},tO={},t$={},tj={},tL=Math.ceil,tF=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tj=Math.trunc||function(e){var t=+e;return(t>0?tF:tL)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
t$=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tj(t)};var tx=Math.max,tP=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tO=function(e,t){var r=t$(e);return r<0?tx(r+t,0):tP(r,t)};var tT={},tI={},tq=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tI=function(e){return e>0?tq(t$(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tT=function(e){return tI(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var tN=function(e){return function(t,r,n){var i,o=q(t),a=tT(o),s=tO(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>s;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[s++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tC={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:tN(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:tN(!1)}.indexOf,tH=C([].push);tM=function(e,t){var r,n=q(e),i=0,o=[];for(r in n)!eL(ta,r)&&eL(n,r)&&tH(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eL(n,r=t[i++])&&(~tC(o,r)||tH(o,r));return o};var tD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tM(e,tD)},f=Object.getOwnPropertySymbols;var tA=C([].concat);// all object keys, includes non-enumerable and symbols
tS=ei("Reflect","ownKeys")||function(e){var t=p(eQ(e));return f?tA(t,f(e)):t},tE=function(e,t,r){for(var n=tS(t),o=0;o<n.length;o++){var a=n[o];eL(e,a)||r&&eL(r,a)||c(e,a,i(t,a))}};var tR={},tz=/#|\.prototype\./,tW=function(e,t){var r=tG[tU(e)];return r===tJ||r!==tB&&(X(t)?j(t):!!t)},tU=tW.normalize=function(e){return String(e).replace(tz,".").toLowerCase()},tG=tW.data={},tB=tW.NATIVE="N",tJ=tW.POLYFILL="P";tR=tW,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/S=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?M:l?M[c]||eO(c,{}):(M[c]||{}).prototype)for(n in t){// contained in target
if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tR(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tE(a,o)}(e.sham||o&&o.sham)&&eJ(a,"sham",!0),e4(r,n,a,e)}};var tY={},tQ={},tV=Function.prototype,tK=tV.apply,tX=tV.call;// eslint-disable-next-line es/no-reflect -- safe
tQ="object"==typeof Reflect&&Reflect.apply||(F?tX.bind(tK):function(){return tX.apply(tK,arguments)});var tZ={},t0={},t1=(t0=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===R(e))return C(e)})(t0.bind);// optional / simple context binding
tZ=function(e,t){return em(e),void 0===t?e:F?t1(e,t):function(){return e.apply(t,arguments)}};var t2={};t2=ei("document","documentElement");var t3={};t3=C([].slice);var t4={},t7=TypeError;t4=function(e,t){if(e<t)throw new t7("Not enough arguments");return e};var t9={};// eslint-disable-next-line redos/no-vulnerable -- safe
t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(eu);var t8={};t8="process"===R(M.process);var t5=M.setImmediate,t6=M.clearImmediate,re=M.process,rt=M.Dispatch,rr=M.Function,rn=M.MessageChannel,ri=M.String,ro=0,ra={},rs="onreadystatechange";j(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
h=M.location});var rc=function(e){if(eL(ra,e)){var t=ra[e];delete ra[e],t()}},ru=function(e){return function(){rc(e)}},rl=function(e){rc(e.data)},rd=function(e){// old engines have not location.origin
M.postMessage(ri(e),h.protocol+"//"+h.host)};t5&&t6||(t5=function(e){t4(arguments.length,1);var t=X(e)?e:rr(e),r=t3(arguments,1);return ra[++ro]=function(){tQ(t,void 0,r)},v(ro),ro},t6=function(e){delete ra[e]},t8?v=function(e){re.nextTick(ru(e))}:rt&&rt.now?v=function(e){rt.now(ru(e))}:rn&&!t9?(m=(g=new rn).port2,g.port1.onmessage=rl,v=tZ(m.postMessage,m)):M.addEventListener&&X(M.postMessage)&&!M.importScripts&&h&&"file:"!==h.protocol&&!j(rd)?(v=rd,M.addEventListener("message",rl,!1)):v=rs in eW("script")?function(e){t2.appendChild(eW("script"))[rs]=function(){t2.removeChild(this),rc(e)}}:function(e){setTimeout(ru(e),0)});var rp=(tY={set:t5,clear:t6}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
S({global:!0,bind:!0,enumerable:!0,forced:M.clearImmediate!==rp},{clearImmediate:rp});var rf=tY.set,rh={},rv={};/* global Bun -- Deno case */rv="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rg=M.Function,rm=/MSIE .\./.test(eu)||rv&&((t=M.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rh=function(e,t){var r=t?2:1;return rm?function(n,i/* , ...arguments */){var o=t4(arguments.length,1)>r,a=X(n)?n:rg(n),s=o?t3(arguments,r):[],c=o?function(){tQ(a,this,s)}:a;return t?e(c,i):e(c)}:e};// https://github.com/oven-sh/bun/issues/1633
var ry=M.setImmediate?rh(rf,!1):rf;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
S({global:!0,bind:!0,enumerable:!0,forced:M.setImmediate!==ry},{setImmediate:ry});const rb="https://forkify-api.herokuapp.com/api/v2/recipes",r_="b0f6741c-a145-44fe-9a83-3964308ba257",rw=async function(e,t){try{console.log(e);let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]);if(!n.ok)throw Error(`${n.message} ${n.status}`);let i=await n.json();return i}catch(e){throw console.error(e),e}};/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rk=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(c,"_invoke",{value:(a=new $(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=s.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),c)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function m(){}function y(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(b=w);var k=y.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,s)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function M(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(M,this),this.reset(!0)}function j(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(k),u(k,c,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=j,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rk}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rk:Function("r","regeneratorRuntime = r")(rk)}const rE={recipe:{},search:{query:"",results:[],page:1,numberOfRecipensPerPage:10},bookMarks:[]},rS=function(e){let{recipe:t}=e.data;return{cookingTime:t.cooking_time,id:t.id,image:t.image_url,ingredients:t.ingredients,publisher:t.publisher,servings:t.servings,title:t.title,sourceUrl:t.source_url,...t.key&&{key:t.key}}},rM=async function(e){try{let t=await rw(`${rb}/${e}?key=${r_}`);rE.recipe=rS(t),rE.bookMarks.some(t=>t.id==e)?rE.recipe.bookMarked=!0:rE.recipe.bookMarked=!1}catch(e){throw console.error(e),e}},rO=async function(e){try{let t=await rw(`${rb}?search=${e}&key=${r_}`);rE.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,image:e.image_url,publisher:e.publisher,...e.key&&{key:e.key}}))}catch(e){throw console.error(e),e}},r$=function(e=1){rE.search.page=e;let t=(e-1)*rE.search.numberOfRecipensPerPage,r=e*rE.search.numberOfRecipensPerPage;return rE.search.results.slice(t,r)},rj=function(){localStorage.setItem("bookmarks",JSON.stringify(rE.bookMarks))},rL=function(e){rE.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rE.recipe.servings}),rE.recipe.servings=e},rF=function(e){// add to bookMark
rE.bookMarks.push(e),e.id===rE.recipe.id&&(rE.recipe.bookMarked=!0),rj()},rx=function(e){// add to bookMark
let t=rE.bookMarks.findIndex(t=>t.id===e);e===rE.recipe.id&&(rE.recipe.bookMarked=!1),rE.bookMarks.splice(t,1),rj()},rP=async function(e){try{console.log(e);let t=Object.entries(e).filter(e=>e[0].startsWith("ingredien")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient fromat! Please use the correct format");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={cooking_time:+e.cookingTime,image_url:e.image,title:e.title,source_url:e.sourceUrl,publisher:e.publisher,servings:+e.servings,ingredients:t},n=await rw(`${rb}/?key=${r_}`,r);rE.recipe=rS(n),rF(rE.recipe)}catch(e){throw e}};!function(){let e=localStorage.getItem("bookmarks");e&&(rE.bookMarks=JSON.parse(e))}();var rT={};rT=new URL(E("27Lyk").resolve("eyyUD"),import.meta.url).toString(),(Fraction=function(e,t){/* double argument invocation */if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(// what are they?
// hmm....
// assume they are ints?
this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){// or a = '2/3' and b = undefined if we are just passed a single-part number
var r,n,i=num.split(" ");/* compound fraction e.g. 'A B/C' *///  if a is an integer ...
if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));// could not parse
if(!r||n)return;/* simple fraction e.g. 'A/B' */if("string"==typeof r&&r.match("/")){// it's not a whole number... it's actually a fraction without a whole part written
var o=r.split("/");this.numerator=o[0],this.denominator=o[1];/* string floating point */}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},/* pretty-printer, converts fractions into whole numbers and fractions */Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},/* destructively rescale the fraction by some integral factor */Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));// fractions that are equal should have equal normalized forms
var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},/* Utility functions *//* Destructively normalize the fraction to its smallest representation. 
 * e.g. 4/16 -> 1/4, 14/28 -> 1/2, etc.
 * This is called after all math ops.
 */Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){// XXX hackish.  Is there a better way to address this issue?
//
/* first check if we have decimals, and if we do eliminate them
         * multiply by the 10 ^ number of decimal places in the number
         * round the number to nine decimal places
         * to avoid js floating point funnies
         */if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),//this.numerator *= scaleup;
this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),//this.numerator *= scaleup;
this.denominator*=t}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),/* Takes two numbers and returns their greatest common factor.
 */Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(t);return(// for each factor in fa
// if it's also in fb
// put it into the common factors
n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},// Adapted from: 
// http://www.btinternet.com/~se16/js/factor.htm
Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;// and increment
return 1!=t&&r.push(t),r;// Return the prime factors
},y=Fraction;class rI{_data;constructor(){}renderError(e=this._errorMessage){let t=`<div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/_(rT)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/_(rT)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
      </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let e=`
          <div class="spinner">
                <svg>
                  <use href="${/*@__PURE__*/_(rT)}#icon-loader"></use>
                </svg>
              </div>`;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentEl.innerHTML=""}// updating only the neccary elements
update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentEl.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}class rq extends rI{_parentEl=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another recipe";_message;constructor(){super()}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
        <svg class="recipe__icon">
        <use href="${/*@__PURE__*/_(rT)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?new y(e.quantity).toString():""}</div>
        <div class="recipe__description">
        <span class="recipe__unit">${e.unit}</span>
        ${e.description}
        </div>
        </li>
        `}addHandlerBookMark(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/_(rT)}#icon-clock"></use>
        </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
      </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${/*@__PURE__*/_(rT)}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--increase-servings" data-update=${this._data.servings>1?this._data.servings-1:this._data.servings}>
          <svg>
            <use href="${/*@__PURE__*/_(rT)}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--increase-servings" data-update=${this._data.servings+1}>
          <svg>
            <use href="${/*@__PURE__*/_(rT)}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
      <svg>
      <use href="${/*@__PURE__*/_(rT)}#icon-user"></use>
      </svg>
      </div>
      <button class="btn--round btn--bookmark">
      <svg class="">
      <use href="${/*@__PURE__*/_(rT)}#icon-bookmark${this._data.bookMarked?"-fill":""}"></use>
      </svg>
      </button>
  </div>
  
  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
    </ul>
  </div>

  <div class="recipe__directions">
  <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
    This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
      </p>
      <a
      class="btn--small recipe__btn"
      href="${this._data.sourceUrl}"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${/*@__PURE__*/_(rT)}#icon-arrow-right"></use>
      </svg>
      </a>
      </div>`}handlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}handlerUpdateServing(e){this._parentEl.addEventListener("click",t=>{let r=t.target.closest(".btn--tiny");if(!r)return;let n=+r.dataset.update;e(n)})}}var rN=new rq;class rC{constructor(){}_parentEl=document.querySelector(".search");_message;getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearSearchInput(),e}_clearSearchInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",t=>{t.preventDefault(),e()})}}var rH=new rC;class rD extends rI{_parentEl=document.querySelector(".results");_errorMessage="No recipes for your query! Please try again";constructor(){super()}_generateMarkup(){return this._data.map(this._generateMarkuEl).join("")}_generateMarkuEl(e){let t=window.location.hash.slice(1);return`<li class="preview">
        <a class="preview__link  ${t===e.id?"preview__link--active":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="recipe__user-generated ${e.key?"":"hidden"}">
            <svg>
            <use href="${/*@__PURE__*/_(rT)}#icon-user"></use>
            </svg>
            </div>
          </div>
        </a>
      </li>`}}var rA=new rD;class rR extends rI{_parentEl=document.querySelector(".bookmarks");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";constructor(){super()}addHandelerBookMarks(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(this._generateMarkuEl).join("")}_generateMarkuEl(e){let t=window.location.hash.slice(1);return`<li class="preview">
        <a class="preview__link  ${t===e.id?"preview__link--active":""}" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
            <div class="recipe__user-generated ${e.key?"":"hidden"}">
            <svg>
            <use href="${/*@__PURE__*/_(rT)}#icon-user"></use>
            </svg>
            </div>
          </div>
        </a>
      </li>`}}var rz=new rR;class rW extends rI{_parentEl=document.querySelector(".pagination");addHandlerClick(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){console.log(this._data);let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.numberOfRecipensPerPage);return(// Page 1, and there are other pages
1===e&&t>1?`
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/_(rT)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/_(rT)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
      `:e<t?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/_(rT)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
          <span>Page ${e+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/_(rT)}#icon-arrow-right"></use>
          </svg>
        </button>
      `:"")}}var rU=new rW;class rG extends rI{constructor(){super(),this._addHandlerClose(),this._addHandlerOpen()}_parentEl=document.querySelector(".upload");_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");_errorMessage="We could not find that recipe. Please try another recipe";_message="Data successfully add it to the bookmark";toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerOpen(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerClose(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}}var rB=new rG;const rJ=async function(){try{rN.renderSpinner();// loading recipe
let e=window.location.hash.slice(1);if(!e)return;await rM(e),rA.update(r$());let{recipe:t}=rE;rN.render(t),rz.render(rE.bookMarks)}catch(e){rN.renderError(),console.error(e)}},rY=async function(){try{rA.renderSpinner();let e=rH.getQuery();if(!e)return;await rO(e),rA.render(r$()),rU.render(rE.search)}catch(e){rN.renderError(),console.error(e)}},rQ=async function(e){try{rB.renderSpinner(),await rP(e),rB.renderMessage(),rz.render(rE.bookMarks),window.history.pushState(null,"",`#${rE.recipe.id}`),setTimeout(()=>{rB.toggleWindow()},2e3)}catch(e){rB.renderError(e)}};rz.addHandelerBookMarks(function(){rz.render(rE.bookMarks)}),rN.handlerRender(rJ),rN.handlerUpdateServing(function(e){rL(e),rN.update(rE.recipe)}),rN.addHandlerBookMark(function(){rE.recipe.bookMarked?rx(rE.recipe.id):rF(rE.recipe),rN.update(rE.recipe),rz.render(rE.bookMarks)}),rH.addHandlerSearch(rY),rU.addHandlerClick(function(e){rA.render(r$(e)),rU.render(rE.search)}),rB.addHandlerUpload(rQ);//# sourceMappingURL=index.a6051bc8.js.map

//# sourceMappingURL=index.a6051bc8.js.map
