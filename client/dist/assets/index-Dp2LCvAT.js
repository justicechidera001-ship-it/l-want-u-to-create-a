(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function _0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ku={exports:{}},Fa={},Fu={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Av(){if(em)return Mt;em=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function y(w){return w===null||typeof w!="object"?null:(w=_&&w[_]||w["@@iterator"],typeof w=="function"?w:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function S(w,H,ge){this.props=w,this.context=H,this.refs=E,this.updater=ge||M}S.prototype.isReactComponent={},S.prototype.setState=function(w,H){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,H,"setState")},S.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function g(){}g.prototype=S.prototype;function P(w,H,ge){this.props=w,this.context=H,this.refs=E,this.updater=ge||M}var D=P.prototype=new g;D.constructor=P,b(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,$=Object.prototype.hasOwnProperty,z={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function U(w,H,ge){var G,Q={},me=null,oe=null;if(H!=null)for(G in H.ref!==void 0&&(oe=H.ref),H.key!==void 0&&(me=""+H.key),H)$.call(H,G)&&!O.hasOwnProperty(G)&&(Q[G]=H[G]);var ye=arguments.length-2;if(ye===1)Q.children=ge;else if(1<ye){for(var Ee=Array(ye),ze=0;ze<ye;ze++)Ee[ze]=arguments[ze+2];Q.children=Ee}if(w&&w.defaultProps)for(G in ye=w.defaultProps,ye)Q[G]===void 0&&(Q[G]=ye[G]);return{$$typeof:s,type:w,key:me,ref:oe,props:Q,_owner:z.current}}function N(w,H){return{$$typeof:s,type:w.type,key:H,ref:w.ref,props:w.props,_owner:w._owner}}function R(w){return typeof w=="object"&&w!==null&&w.$$typeof===s}function j(w){var H={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(ge){return H[ge]})}var te=/\/+/g;function Z(w,H){return typeof w=="object"&&w!==null&&w.key!=null?j(""+w.key):H.toString(36)}function pe(w,H,ge,G,Q){var me=typeof w;(me==="undefined"||me==="boolean")&&(w=null);var oe=!1;if(w===null)oe=!0;else switch(me){case"string":case"number":oe=!0;break;case"object":switch(w.$$typeof){case s:case e:oe=!0}}if(oe)return oe=w,Q=Q(oe),w=G===""?"."+Z(oe,0):G,C(Q)?(ge="",w!=null&&(ge=w.replace(te,"$&/")+"/"),pe(Q,H,ge,"",function(ze){return ze})):Q!=null&&(R(Q)&&(Q=N(Q,ge+(!Q.key||oe&&oe.key===Q.key?"":(""+Q.key).replace(te,"$&/")+"/")+w)),H.push(Q)),1;if(oe=0,G=G===""?".":G+":",C(w))for(var ye=0;ye<w.length;ye++){me=w[ye];var Ee=G+Z(me,ye);oe+=pe(me,H,ge,Ee,Q)}else if(Ee=y(w),typeof Ee=="function")for(w=Ee.call(w),ye=0;!(me=w.next()).done;)me=me.value,Ee=G+Z(me,ye++),oe+=pe(me,H,ge,Ee,Q);else if(me==="object")throw H=String(w),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return oe}function xe(w,H,ge){if(w==null)return w;var G=[],Q=0;return pe(w,G,"","",function(me){return H.call(ge,me,Q++)}),G}function ne(w){if(w._status===-1){var H=w._result;H=H(),H.then(function(ge){(w._status===0||w._status===-1)&&(w._status=1,w._result=ge)},function(ge){(w._status===0||w._status===-1)&&(w._status=2,w._result=ge)}),w._status===-1&&(w._status=0,w._result=H)}if(w._status===1)return w._result.default;throw w._result}var le={current:null},V={transition:null},ce={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:V,ReactCurrentOwner:z};function I(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:xe,forEach:function(w,H,ge){xe(w,function(){H.apply(this,arguments)},ge)},count:function(w){var H=0;return xe(w,function(){H++}),H},toArray:function(w){return xe(w,function(H){return H})||[]},only:function(w){if(!R(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},Mt.Component=S,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=P,Mt.StrictMode=r,Mt.Suspense=p,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Mt.act=I,Mt.cloneElement=function(w,H,ge){if(w==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+w+".");var G=b({},w.props),Q=w.key,me=w.ref,oe=w._owner;if(H!=null){if(H.ref!==void 0&&(me=H.ref,oe=z.current),H.key!==void 0&&(Q=""+H.key),w.type&&w.type.defaultProps)var ye=w.type.defaultProps;for(Ee in H)$.call(H,Ee)&&!O.hasOwnProperty(Ee)&&(G[Ee]=H[Ee]===void 0&&ye!==void 0?ye[Ee]:H[Ee])}var Ee=arguments.length-2;if(Ee===1)G.children=ge;else if(1<Ee){ye=Array(Ee);for(var ze=0;ze<Ee;ze++)ye[ze]=arguments[ze+2];G.children=ye}return{$$typeof:s,type:w.type,key:Q,ref:me,props:G,_owner:oe}},Mt.createContext=function(w){return w={$$typeof:u,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},w.Provider={$$typeof:l,_context:w},w.Consumer=w},Mt.createElement=U,Mt.createFactory=function(w){var H=U.bind(null,w);return H.type=w,H},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(w){return{$$typeof:d,render:w}},Mt.isValidElement=R,Mt.lazy=function(w){return{$$typeof:x,_payload:{_status:-1,_result:w},_init:ne}},Mt.memo=function(w,H){return{$$typeof:f,type:w,compare:H===void 0?null:H}},Mt.startTransition=function(w){var H=V.transition;V.transition={};try{w()}finally{V.transition=H}},Mt.unstable_act=I,Mt.useCallback=function(w,H){return le.current.useCallback(w,H)},Mt.useContext=function(w){return le.current.useContext(w)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(w){return le.current.useDeferredValue(w)},Mt.useEffect=function(w,H){return le.current.useEffect(w,H)},Mt.useId=function(){return le.current.useId()},Mt.useImperativeHandle=function(w,H,ge){return le.current.useImperativeHandle(w,H,ge)},Mt.useInsertionEffect=function(w,H){return le.current.useInsertionEffect(w,H)},Mt.useLayoutEffect=function(w,H){return le.current.useLayoutEffect(w,H)},Mt.useMemo=function(w,H){return le.current.useMemo(w,H)},Mt.useReducer=function(w,H,ge){return le.current.useReducer(w,H,ge)},Mt.useRef=function(w){return le.current.useRef(w)},Mt.useState=function(w){return le.current.useState(w)},Mt.useSyncExternalStore=function(w,H,ge){return le.current.useSyncExternalStore(w,H,ge)},Mt.useTransition=function(){return le.current.useTransition()},Mt.version="18.3.1",Mt}var tm;function hh(){return tm||(tm=1,Fu.exports=Av()),Fu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Rv(){if(nm)return Fa;nm=1;var s=hh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,f){var x,_={},y=null,M=null;f!==void 0&&(y=""+f),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(_[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)_[x]===void 0&&(_[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:M,props:_,_owner:o.current}}return Fa.Fragment=t,Fa.jsx=u,Fa.jsxs=u,Fa}var im;function Nv(){return im||(im=1,ku.exports=Rv()),ku.exports}var h=Nv(),Fe=hh();const y0=_0(Fe);var ul={},Ou={exports:{}},In={},zu={exports:{}},Bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function Pv(){return rm||(rm=1,(function(s){function e(V,ce){var I=V.length;V.push(ce);e:for(;0<I;){var w=I-1>>>1,H=V[w];if(0<o(H,ce))V[w]=ce,V[I]=H,I=w;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ce=V[0],I=V.pop();if(I!==ce){V[0]=I;e:for(var w=0,H=V.length,ge=H>>>1;w<ge;){var G=2*(w+1)-1,Q=V[G],me=G+1,oe=V[me];if(0>o(Q,I))me<H&&0>o(oe,Q)?(V[w]=oe,V[me]=I,w=me):(V[w]=Q,V[G]=I,w=G);else if(me<H&&0>o(oe,I))V[w]=oe,V[me]=I,w=me;else break e}}return ce}function o(V,ce){var I=V.sortIndex-ce.sortIndex;return I!==0?I:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],f=[],x=1,_=null,y=3,M=!1,b=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(V){for(var ce=t(f);ce!==null;){if(ce.callback===null)r(f);else if(ce.startTime<=V)r(f),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=t(f)}}function C(V){if(E=!1,D(V),!b)if(t(p)!==null)b=!0,ne($);else{var ce=t(f);ce!==null&&le(C,ce.startTime-V)}}function $(V,ce){b=!1,E&&(E=!1,g(U),U=-1),M=!0;var I=y;try{for(D(ce),_=t(p);_!==null&&(!(_.expirationTime>ce)||V&&!j());){var w=_.callback;if(typeof w=="function"){_.callback=null,y=_.priorityLevel;var H=w(_.expirationTime<=ce);ce=s.unstable_now(),typeof H=="function"?_.callback=H:_===t(p)&&r(p),D(ce)}else r(p);_=t(p)}if(_!==null)var ge=!0;else{var G=t(f);G!==null&&le(C,G.startTime-ce),ge=!1}return ge}finally{_=null,y=I,M=!1}}var z=!1,O=null,U=-1,N=5,R=-1;function j(){return!(s.unstable_now()-R<N)}function te(){if(O!==null){var V=s.unstable_now();R=V;var ce=!0;try{ce=O(!0,V)}finally{ce?Z():(z=!1,O=null)}}else z=!1}var Z;if(typeof P=="function")Z=function(){P(te)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,xe=pe.port2;pe.port1.onmessage=te,Z=function(){xe.postMessage(null)}}else Z=function(){S(te,0)};function ne(V){O=V,z||(z=!0,Z())}function le(V,ce){U=S(function(){V(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){b||M||(b=!0,ne($))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(V){switch(y){case 1:case 2:case 3:var ce=3;break;default:ce=y}var I=y;y=ce;try{return V()}finally{y=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var I=y;y=V;try{return ce()}finally{y=I}},s.unstable_scheduleCallback=function(V,ce,I){var w=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?w+I:w):I=w,V){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=I+H,V={id:x++,callback:ce,priorityLevel:V,startTime:I,expirationTime:H,sortIndex:-1},I>w?(V.sortIndex=I,e(f,V),t(p)===null&&V===t(f)&&(E?(g(U),U=-1):E=!0,le(C,I-w))):(V.sortIndex=H,e(p,V),b||M||(b=!0,ne($))),V},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(V){var ce=y;return function(){var I=y;y=ce;try{return V.apply(this,arguments)}finally{y=I}}}})(Bu)),Bu}var sm;function Lv(){return sm||(sm=1,zu.exports=Pv()),zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function Dv(){if(am)return In;am=1;var s=hh(),e=Lv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function y(n){return p.call(_,n)?!0:p.call(x,n)?!1:f.test(n)?_[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,c,m,v,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=m,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,P);S[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,P);S[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,P);S[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var m=S.hasOwnProperty(i)?S[i]:null;(m!==null?m.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,a,m,c)&&(a=null),c||m===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):m.mustUseProperty?n[m.propertyName]=a===null?m.type===3?!1:"":a:(i=m.attributeName,c=m.attributeNamespace,a===null?n.removeAttribute(i):(m=m.type,a=m===3||m===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),z=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),j=Symbol.for("react.context"),te=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),xe=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),V=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var I=Object.assign,w;function H(n){if(w===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);w=i&&i[1]||""}return`
`+w+n}var ge=!1;function G(n,i){if(!n||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var c=de}Reflect.construct(n,[],i)}else{try{i.call()}catch(de){c=de}n.call(i.prototype)}else{try{throw Error()}catch(de){c=de}n()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var m=de.stack.split(`
`),v=c.stack.split(`
`),T=m.length-1,B=v.length-1;1<=T&&0<=B&&m[T]!==v[B];)B--;for(;1<=T&&0<=B;T--,B--)if(m[T]!==v[B]){if(T!==1||B!==1)do if(T--,B--,0>B||m[T]!==v[B]){var W=`
`+m[T].replace(" at new "," at ");return n.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",n.displayName)),W}while(1<=T&&0<=B);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Q(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=G(n.type,!1),n;case 11:return n=G(n.type.render,!1),n;case 1:return n=G(n.type,!0),n;default:return""}}function me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case z:return"Portal";case N:return"Profiler";case U:return"StrictMode";case Z:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case te:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xe:return i=n.displayName||null,i!==null?i:me(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return me(n(i))}catch{}}return null}function oe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return me(i);case 8:return i===U?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ze(n){var i=Ee(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var m=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return m.call(this)},set:function(T){c=""+T,v.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ue(n){n._valueTracker||(n._valueTracker=ze(n))}function ae(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ee(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function K(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function F(n,i){var a=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Oe(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function be(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function Pe(n,i){be(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?st(n,i.type,a):i.hasOwnProperty("defaultValue")&&st(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ce(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function st(n,i,a){(i!=="number"||K(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Be=Array.isArray;function k(n,i,a,c){if(n=n.options,i){i={};for(var m=0;m<a.length;m++)i["$"+a[m]]=!0;for(a=0;a<n.length;a++)m=i.hasOwnProperty("$"+n[a].value),n[a].selected!==m&&(n[a].selected=m),m&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,m=0;m<n.length;m++){if(n[m].value===a){n[m].selected=!0,c&&(n[m].defaultSelected=!0);return}i!==null||n[m].disabled||(i=n[m])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function re(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Be(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function Se(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Me(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function _e(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ye(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?_e(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Le,je=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,m){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,m)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Le.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){He.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ae[i]=Ae[n]})});function it(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+i).trim():i+"px"}function lt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,m=it(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,m):n[a]=m}}var $e=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xt(n,i){if(i){if($e[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function dt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function Y(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ve=null,ve=null,we=null;function Xe(n){if(n=Ma(n)){if(typeof Ve!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Eo(i),Ve(n.stateNode,n.type,i))}}function We(n){ve?we?we.push(n):we=[n]:ve=n}function mt(){if(ve){var n=ve,i=we;if(we=ve=null,Xe(n),i)for(n=0;n<i.length;n++)Xe(i[n])}}function zt(n,i){return n(i)}function Zt(){}var Et=!1;function Cn(n,i,a){if(Et)return n(i,a);Et=!0;try{return zt(n,i,a)}finally{Et=!1,(ve!==null||we!==null)&&(Zt(),mt())}}function yn(n,i){var a=n.stateNode;if(a===null)return null;var c=Eo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var os=!1;if(d)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){os=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{os=!1}function Ci(n,i,a,c,m,v,T,B,W){var de=Array.prototype.slice.call(arguments,3);try{i.apply(a,de)}catch(Re){this.onError(Re)}}var Ai=!1,Nr=null,Pr=!1,Ki=null,ro={onError:function(n){Ai=!0,Nr=n}};function ls(n,i,a,c,m,v,T,B,W){Ai=!1,Nr=null,Ci.apply(ro,arguments)}function so(n,i,a,c,m,v,T,B,W){if(ls.apply(this,arguments),Ai){if(Ai){var de=Nr;Ai=!1,Nr=null}else throw Error(t(198));Pr||(Pr=!0,Ki=de)}}function gi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ao(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oo(n){if(gi(n)!==n)throw Error(t(188))}function rc(n){var i=n.alternate;if(!i){if(i=gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var m=a.return;if(m===null)break;var v=m.alternate;if(v===null){if(c=m.return,c!==null){a=c;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===a)return oo(m),n;if(v===c)return oo(m),i;v=v.sibling}throw Error(t(188))}if(a.return!==c.return)a=m,c=v;else{for(var T=!1,B=m.child;B;){if(B===a){T=!0,a=m,c=v;break}if(B===c){T=!0,c=m,a=v;break}B=B.sibling}if(!T){for(B=v.child;B;){if(B===a){T=!0,a=v,c=m;break}if(B===c){T=!0,c=v,a=m;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function L(n){return n=rc(n),n!==null?J(n):null}function J(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=J(n);if(i!==null)return i;n=n.sibling}return null}var he=e.unstable_scheduleCallback,fe=e.unstable_cancelCallback,ee=e.unstable_shouldYield,Ue=e.unstable_requestPaint,De=e.unstable_now,et=e.unstable_getCurrentPriorityLevel,Je=e.unstable_ImmediatePriority,ht=e.unstable_UserBlockingPriority,pt=e.unstable_NormalPriority,tt=e.unstable_LowPriority,bt=e.unstable_IdlePriority,Nt=null,wt=null;function dn(n){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Nt,n,void 0,(n.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:At,rt=Math.log,ii=Math.LN2;function At(n){return n>>>=0,n===0?32:31-(rt(n)/ii|0)|0}var hn=64,ri=4194304;function Jt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,m=n.suspendedLanes,v=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~m;B!==0?c=Jt(B):(v&=T,v!==0&&(c=Jt(v)))}else T=a&~m,T!==0?c=Jt(T):v!==0&&(c=Jt(v));if(c===0)return 0;if(i!==0&&i!==c&&(i&m)===0&&(m=c&-c,v=i&-i,m>=v||m===16&&(v&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-gt(i),m=1<<a,c|=n[a],i&=~m;return c}function Ut(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $n(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,m=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-gt(v),B=1<<T,W=m[T];W===-1?((B&a)===0||(B&c)!==0)&&(m[T]=Ut(B,i)):W<=i&&(n.expiredLanes|=B),v&=~B}}function Ri(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=hn;return hn<<=1,(hn&4194240)===0&&(hn=64),n}function qn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function An(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-gt(i),n[i]=a}function lo(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var m=31-gt(a),v=1<<m;i[m]=0,c[m]=-1,n[m]=-1,a&=~v}}function sc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-gt(a),m=1<<c;m&i|n[c]&i&&(n[c]|=i),a&=~m}}var Lt=0;function Ph(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Lh,ac,Dh,Ih,Uh,oc=!1,co=[],Zi=null,Ji=null,Qi=null,aa=new Map,oa=new Map,er=[],Kx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kh(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":aa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(i.pointerId)}}function la(n,i,a,c,m,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:v,targetContainers:[m]},i!==null&&(i=Ma(i),i!==null&&ac(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,m!==null&&i.indexOf(m)===-1&&i.push(m),n)}function Zx(n,i,a,c,m){switch(i){case"focusin":return Zi=la(Zi,n,i,a,c,m),!0;case"dragenter":return Ji=la(Ji,n,i,a,c,m),!0;case"mouseover":return Qi=la(Qi,n,i,a,c,m),!0;case"pointerover":var v=m.pointerId;return aa.set(v,la(aa.get(v)||null,n,i,a,c,m)),!0;case"gotpointercapture":return v=m.pointerId,oa.set(v,la(oa.get(v)||null,n,i,a,c,m)),!0}return!1}function Fh(n){var i=Lr(n.target);if(i!==null){var a=gi(i);if(a!==null){if(i=a.tag,i===13){if(i=ao(a),i!==null){n.blockedOn=i,Uh(n.priority,function(){Dh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function uo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=cc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pt=c,a.target.dispatchEvent(c),Pt=null}else return i=Ma(a),i!==null&&ac(i),n.blockedOn=a,!1;i.shift()}return!0}function Oh(n,i,a){uo(n)&&a.delete(i)}function Jx(){oc=!1,Zi!==null&&uo(Zi)&&(Zi=null),Ji!==null&&uo(Ji)&&(Ji=null),Qi!==null&&uo(Qi)&&(Qi=null),aa.forEach(Oh),oa.forEach(Oh)}function ca(n,i){n.blockedOn===i&&(n.blockedOn=null,oc||(oc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Jx)))}function ua(n){function i(m){return ca(m,n)}if(0<co.length){ca(co[0],n);for(var a=1;a<co.length;a++){var c=co[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Zi!==null&&ca(Zi,n),Ji!==null&&ca(Ji,n),Qi!==null&&ca(Qi,n),aa.forEach(i),oa.forEach(i),a=0;a<er.length;a++)c=er[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<er.length&&(a=er[0],a.blockedOn===null);)Fh(a),a.blockedOn===null&&er.shift()}var cs=C.ReactCurrentBatchConfig,ho=!0;function Qx(n,i,a,c){var m=Lt,v=cs.transition;cs.transition=null;try{Lt=1,lc(n,i,a,c)}finally{Lt=m,cs.transition=v}}function eg(n,i,a,c){var m=Lt,v=cs.transition;cs.transition=null;try{Lt=4,lc(n,i,a,c)}finally{Lt=m,cs.transition=v}}function lc(n,i,a,c){if(ho){var m=cc(n,i,a,c);if(m===null)Tc(n,i,c,fo,a),kh(n,c);else if(Zx(m,n,i,a,c))c.stopPropagation();else if(kh(n,c),i&4&&-1<Kx.indexOf(n)){for(;m!==null;){var v=Ma(m);if(v!==null&&Lh(v),v=cc(n,i,a,c),v===null&&Tc(n,i,c,fo,a),v===m)break;m=v}m!==null&&c.stopPropagation()}else Tc(n,i,c,null,a)}}var fo=null;function cc(n,i,a,c){if(fo=null,n=Y(c),n=Lr(n),n!==null)if(i=gi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ao(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return fo=n,null}function zh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(et()){case Je:return 1;case ht:return 4;case pt:case tt:return 16;case bt:return 536870912;default:return 16}default:return 16}}var tr=null,uc=null,po=null;function Bh(){if(po)return po;var n,i=uc,a=i.length,c,m="value"in tr?tr.value:tr.textContent,v=m.length;for(n=0;n<a&&i[n]===m[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===m[v-c];c++);return po=m.slice(n,1<c?1-c:void 0)}function mo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function xo(){return!0}function jh(){return!1}function On(n){function i(a,c,m,v,T){this._reactName=a,this._targetInst=m,this.type=c,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(v):v[B]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?xo:jh,this.isPropagationStopped=jh,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dc=On(us),da=I({},us,{view:0,detail:0}),tg=On(da),hc,fc,ha,go=I({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ha&&(ha&&n.type==="mousemove"?(hc=n.screenX-ha.screenX,fc=n.screenY-ha.screenY):fc=hc=0,ha=n),hc)},movementY:function(n){return"movementY"in n?n.movementY:fc}}),Hh=On(go),ng=I({},go,{dataTransfer:0}),ig=On(ng),rg=I({},da,{relatedTarget:0}),pc=On(rg),sg=I({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),ag=On(sg),og=I({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),lg=On(og),cg=I({},us,{data:0}),Vh=On(cg),ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=hg[n])?!!i[n]:!1}function mc(){return fg}var pg=I({},da,{key:function(n){if(n.key){var i=ug[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=mo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?dg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mc,charCode:function(n){return n.type==="keypress"?mo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?mo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),mg=On(pg),xg=I({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=On(xg),gg=I({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mc}),vg=On(gg),_g=I({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),yg=On(_g),Sg=I({},go,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Mg=On(Sg),wg=[9,13,27,32],xc=d&&"CompositionEvent"in window,fa=null;d&&"documentMode"in document&&(fa=document.documentMode);var bg=d&&"TextEvent"in window&&!fa,Wh=d&&(!xc||fa&&8<fa&&11>=fa),Xh=" ",$h=!1;function qh(n,i){switch(n){case"keyup":return wg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function Eg(n,i){switch(n){case"compositionend":return Yh(i);case"keypress":return i.which!==32?null:($h=!0,Xh);case"textInput":return n=i.data,n===Xh&&$h?null:n;default:return null}}function Tg(n,i){if(ds)return n==="compositionend"||!xc&&qh(n,i)?(n=Bh(),po=uc=tr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Wh&&i.locale!=="ko"?null:i.data;default:return null}}var Cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Cg[n.type]:i==="textarea"}function Zh(n,i,a,c){We(c),i=Mo(i,"onChange"),0<i.length&&(a=new dc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var pa=null,ma=null;function Ag(n){xf(n,0)}function vo(n){var i=xs(n);if(ae(i))return n}function Rg(n,i){if(n==="change")return i}var Jh=!1;if(d){var gc;if(d){var vc="oninput"in document;if(!vc){var Qh=document.createElement("div");Qh.setAttribute("oninput","return;"),vc=typeof Qh.oninput=="function"}gc=vc}else gc=!1;Jh=gc&&(!document.documentMode||9<document.documentMode)}function ef(){pa&&(pa.detachEvent("onpropertychange",tf),ma=pa=null)}function tf(n){if(n.propertyName==="value"&&vo(ma)){var i=[];Zh(i,ma,n,Y(n)),Cn(Ag,i)}}function Ng(n,i,a){n==="focusin"?(ef(),pa=i,ma=a,pa.attachEvent("onpropertychange",tf)):n==="focusout"&&ef()}function Pg(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vo(ma)}function Lg(n,i){if(n==="click")return vo(i)}function Dg(n,i){if(n==="input"||n==="change")return vo(i)}function Ig(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var si=typeof Object.is=="function"?Object.is:Ig;function xa(n,i){if(si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var m=a[c];if(!p.call(i,m)||!si(n[m],i[m]))return!1}return!0}function nf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rf(n,i){var a=nf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=nf(a)}}function sf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?sf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function af(){for(var n=window,i=K();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=K(n.document)}return i}function _c(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ug(n){var i=af(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&sf(a.ownerDocument.documentElement,a)){if(c!==null&&_c(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var m=a.textContent.length,v=Math.min(c.start,m);c=c.end===void 0?v:Math.min(c.end,m),!n.extend&&v>c&&(m=c,c=v,v=m),m=rf(a,v);var T=rf(a,c);m&&T&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(m.node,m.offset),n.removeAllRanges(),v>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kg=d&&"documentMode"in document&&11>=document.documentMode,hs=null,yc=null,ga=null,Sc=!1;function of(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Sc||hs==null||hs!==K(c)||(c=hs,"selectionStart"in c&&_c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ga&&xa(ga,c)||(ga=c,c=Mo(yc,"onSelect"),0<c.length&&(i=new dc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=hs)))}function _o(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var fs={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Mc={},lf={};d&&(lf=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function yo(n){if(Mc[n])return Mc[n];if(!fs[n])return n;var i=fs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in lf)return Mc[n]=i[a];return n}var cf=yo("animationend"),uf=yo("animationiteration"),df=yo("animationstart"),hf=yo("transitionend"),ff=new Map,pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){ff.set(n,i),l(i,[n])}for(var wc=0;wc<pf.length;wc++){var bc=pf[wc],Fg=bc.toLowerCase(),Og=bc[0].toUpperCase()+bc.slice(1);nr(Fg,"on"+Og)}nr(cf,"onAnimationEnd"),nr(uf,"onAnimationIteration"),nr(df,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(hf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function mf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,so(c,i,void 0,n),n.currentTarget=null}function xf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],m=c.event;c=c.listeners;e:{var v=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],W=B.instance,de=B.currentTarget;if(B=B.listener,W!==v&&m.isPropagationStopped())break e;mf(m,B,de),v=W}else for(T=0;T<c.length;T++){if(B=c[T],W=B.instance,de=B.currentTarget,B=B.listener,W!==v&&m.isPropagationStopped())break e;mf(m,B,de),v=W}}}if(Pr)throw n=Ki,Pr=!1,Ki=null,n}function Bt(n,i){var a=i[Lc];a===void 0&&(a=i[Lc]=new Set);var c=n+"__bubble";a.has(c)||(gf(i,n,2,!1),a.add(c))}function Ec(n,i,a){var c=0;i&&(c|=4),gf(a,n,c,i)}var So="_reactListening"+Math.random().toString(36).slice(2);function _a(n){if(!n[So]){n[So]=!0,r.forEach(function(a){a!=="selectionchange"&&(zg.has(a)||Ec(a,!1,n),Ec(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[So]||(i[So]=!0,Ec("selectionchange",!1,i))}}function gf(n,i,a,c){switch(zh(i)){case 1:var m=Qx;break;case 4:m=eg;break;default:m=lc}a=m.bind(null,i,a,n),m=void 0,!os||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(m=!0),c?m!==void 0?n.addEventListener(i,a,{capture:!0,passive:m}):n.addEventListener(i,a,!0):m!==void 0?n.addEventListener(i,a,{passive:m}):n.addEventListener(i,a,!1)}function Tc(n,i,a,c,m){var v=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===m||B.nodeType===8&&B.parentNode===m)break;if(T===4)for(T=c.return;T!==null;){var W=T.tag;if((W===3||W===4)&&(W=T.stateNode.containerInfo,W===m||W.nodeType===8&&W.parentNode===m))return;T=T.return}for(;B!==null;){if(T=Lr(B),T===null)return;if(W=T.tag,W===5||W===6){c=v=T;continue e}B=B.parentNode}}c=c.return}Cn(function(){var de=v,Re=Y(a),Ne=[];e:{var Te=ff.get(n);if(Te!==void 0){var qe=dc,Ze=n;switch(n){case"keypress":if(mo(a)===0)break e;case"keydown":case"keyup":qe=mg;break;case"focusin":Ze="focus",qe=pc;break;case"focusout":Ze="blur",qe=pc;break;case"beforeblur":case"afterblur":qe=pc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=Hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=ig;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=vg;break;case cf:case uf:case df:qe=ag;break;case hf:qe=yg;break;case"scroll":qe=tg;break;case"wheel":qe=Mg;break;case"copy":case"cut":case"paste":qe=lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=Gh}var Qe=(i&4)!==0,qt=!Qe&&n==="scroll",ie=Qe?Te!==null?Te+"Capture":null:Te;Qe=[];for(var q=de,se;q!==null;){se=q;var Ie=se.stateNode;if(se.tag===5&&Ie!==null&&(se=Ie,ie!==null&&(Ie=yn(q,ie),Ie!=null&&Qe.push(ya(q,Ie,se)))),qt)break;q=q.return}0<Qe.length&&(Te=new qe(Te,Ze,null,a,Re),Ne.push({event:Te,listeners:Qe}))}}if((i&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",Te&&a!==Pt&&(Ze=a.relatedTarget||a.fromElement)&&(Lr(Ze)||Ze[Ni]))break e;if((qe||Te)&&(Te=Re.window===Re?Re:(Te=Re.ownerDocument)?Te.defaultView||Te.parentWindow:window,qe?(Ze=a.relatedTarget||a.toElement,qe=de,Ze=Ze?Lr(Ze):null,Ze!==null&&(qt=gi(Ze),Ze!==qt||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(qe=null,Ze=de),qe!==Ze)){if(Qe=Hh,Ie="onMouseLeave",ie="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=Gh,Ie="onPointerLeave",ie="onPointerEnter",q="pointer"),qt=qe==null?Te:xs(qe),se=Ze==null?Te:xs(Ze),Te=new Qe(Ie,q+"leave",qe,a,Re),Te.target=qt,Te.relatedTarget=se,Ie=null,Lr(Re)===de&&(Qe=new Qe(ie,q+"enter",Ze,a,Re),Qe.target=se,Qe.relatedTarget=qt,Ie=Qe),qt=Ie,qe&&Ze)t:{for(Qe=qe,ie=Ze,q=0,se=Qe;se;se=ps(se))q++;for(se=0,Ie=ie;Ie;Ie=ps(Ie))se++;for(;0<q-se;)Qe=ps(Qe),q--;for(;0<se-q;)ie=ps(ie),se--;for(;q--;){if(Qe===ie||ie!==null&&Qe===ie.alternate)break t;Qe=ps(Qe),ie=ps(ie)}Qe=null}else Qe=null;qe!==null&&vf(Ne,Te,qe,Qe,!1),Ze!==null&&qt!==null&&vf(Ne,qt,Ze,Qe,!0)}}e:{if(Te=de?xs(de):window,qe=Te.nodeName&&Te.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Te.type==="file")var nt=Rg;else if(Kh(Te))if(Jh)nt=Dg;else{nt=Pg;var at=Ng}else(qe=Te.nodeName)&&qe.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(nt=Lg);if(nt&&(nt=nt(n,de))){Zh(Ne,nt,a,Re);break e}at&&at(n,Te,de),n==="focusout"&&(at=Te._wrapperState)&&at.controlled&&Te.type==="number"&&st(Te,"number",Te.value)}switch(at=de?xs(de):window,n){case"focusin":(Kh(at)||at.contentEditable==="true")&&(hs=at,yc=de,ga=null);break;case"focusout":ga=yc=hs=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,of(Ne,a,Re);break;case"selectionchange":if(kg)break;case"keydown":case"keyup":of(Ne,a,Re)}var ot;if(xc)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else ds?qh(n,a)&&(ft="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(Wh&&a.locale!=="ko"&&(ds||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&ds&&(ot=Bh()):(tr=Re,uc="value"in tr?tr.value:tr.textContent,ds=!0)),at=Mo(de,ft),0<at.length&&(ft=new Vh(ft,n,null,a,Re),Ne.push({event:ft,listeners:at}),ot?ft.data=ot:(ot=Yh(a),ot!==null&&(ft.data=ot)))),(ot=bg?Eg(n,a):Tg(n,a))&&(de=Mo(de,"onBeforeInput"),0<de.length&&(Re=new Vh("onBeforeInput","beforeinput",null,a,Re),Ne.push({event:Re,listeners:de}),Re.data=ot))}xf(Ne,i)})}function ya(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Mo(n,i){for(var a=i+"Capture",c=[];n!==null;){var m=n,v=m.stateNode;m.tag===5&&v!==null&&(m=v,v=yn(n,a),v!=null&&c.unshift(ya(n,v,m)),v=yn(n,i),v!=null&&c.push(ya(n,v,m))),n=n.return}return c}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function vf(n,i,a,c,m){for(var v=i._reactName,T=[];a!==null&&a!==c;){var B=a,W=B.alternate,de=B.stateNode;if(W!==null&&W===c)break;B.tag===5&&de!==null&&(B=de,m?(W=yn(a,v),W!=null&&T.unshift(ya(a,W,B))):m||(W=yn(a,v),W!=null&&T.push(ya(a,W,B)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var Bg=/\r\n?/g,jg=/\u0000|\uFFFD/g;function _f(n){return(typeof n=="string"?n:""+n).replace(Bg,`
`).replace(jg,"")}function wo(n,i,a){if(i=_f(i),_f(n)!==i&&a)throw Error(t(425))}function bo(){}var Cc=null,Ac=null;function Rc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nc=typeof setTimeout=="function"?setTimeout:void 0,Hg=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(n){return yf.resolve(null).then(n).catch(Gg)}:Nc;function Gg(n){setTimeout(function(){throw n})}function Pc(n,i){var a=i,c=0;do{var m=a.nextSibling;if(n.removeChild(a),m&&m.nodeType===8)if(a=m.data,a==="/$"){if(c===0){n.removeChild(m),ua(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=m}while(a);ua(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Sf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),_i="__reactFiber$"+ms,Sa="__reactProps$"+ms,Ni="__reactContainer$"+ms,Lc="__reactEvents$"+ms,Wg="__reactListeners$"+ms,Xg="__reactHandles$"+ms;function Lr(n){var i=n[_i];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ni]||a[_i]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Sf(n);n!==null;){if(a=n[_i])return a;n=Sf(n)}return i}n=a,a=n.parentNode}return null}function Ma(n){return n=n[_i]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Eo(n){return n[Sa]||null}var Dc=[],gs=-1;function rr(n){return{current:n}}function jt(n){0>gs||(n.current=Dc[gs],Dc[gs]=null,gs--)}function Ft(n,i){gs++,Dc[gs]=n.current,n.current=i}var sr={},fn=rr(sr),Rn=rr(!1),Dr=sr;function vs(n,i){var a=n.type.contextTypes;if(!a)return sr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var m={},v;for(v in a)m[v]=i[v];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=m),m}function Nn(n){return n=n.childContextTypes,n!=null}function To(){jt(Rn),jt(fn)}function Mf(n,i,a){if(fn.current!==sr)throw Error(t(168));Ft(fn,i),Ft(Rn,a)}function wf(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var m in c)if(!(m in i))throw Error(t(108,oe(n)||"Unknown",m));return I({},a,c)}function Co(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Dr=fn.current,Ft(fn,n),Ft(Rn,Rn.current),!0}function bf(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=wf(n,i,Dr),c.__reactInternalMemoizedMergedChildContext=n,jt(Rn),jt(fn),Ft(fn,n)):jt(Rn),Ft(Rn,a)}var Pi=null,Ao=!1,Ic=!1;function Ef(n){Pi===null?Pi=[n]:Pi.push(n)}function $g(n){Ao=!0,Ef(n)}function ar(){if(!Ic&&Pi!==null){Ic=!0;var n=0,i=Lt;try{var a=Pi;for(Lt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Pi=null,Ao=!1}catch(m){throw Pi!==null&&(Pi=Pi.slice(n+1)),he(Je,ar),m}finally{Lt=i,Ic=!1}}return null}var _s=[],ys=0,Ro=null,No=0,Yn=[],Kn=0,Ir=null,Li=1,Di="";function Ur(n,i){_s[ys++]=No,_s[ys++]=Ro,Ro=n,No=i}function Tf(n,i,a){Yn[Kn++]=Li,Yn[Kn++]=Di,Yn[Kn++]=Ir,Ir=n;var c=Li;n=Di;var m=32-gt(c)-1;c&=~(1<<m),a+=1;var v=32-gt(i)+m;if(30<v){var T=m-m%5;v=(c&(1<<T)-1).toString(32),c>>=T,m-=T,Li=1<<32-gt(i)+m|a<<m|c,Di=v+n}else Li=1<<v|a<<m|c,Di=n}function Uc(n){n.return!==null&&(Ur(n,1),Tf(n,1,0))}function kc(n){for(;n===Ro;)Ro=_s[--ys],_s[ys]=null,No=_s[--ys],_s[ys]=null;for(;n===Ir;)Ir=Yn[--Kn],Yn[Kn]=null,Di=Yn[--Kn],Yn[Kn]=null,Li=Yn[--Kn],Yn[Kn]=null}var zn=null,Bn=null,Vt=!1,ai=null;function Cf(n,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Af(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Bn=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ir!==null?{id:Li,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Bn=null,!0):!1;default:return!1}}function Fc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Oc(n){if(Vt){var i=Bn;if(i){var a=i;if(!Af(n,i)){if(Fc(n))throw Error(t(418));i=ir(a.nextSibling);var c=zn;i&&Af(n,i)?Cf(c,a):(n.flags=n.flags&-4097|2,Vt=!1,zn=n)}}else{if(Fc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,zn=n}}}function Rf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function Po(n){if(n!==zn)return!1;if(!Vt)return Rf(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Rc(n.type,n.memoizedProps)),i&&(i=Bn)){if(Fc(n))throw Nf(),Error(t(418));for(;i;)Cf(n,i),i=ir(i.nextSibling)}if(Rf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Bn=ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=zn?ir(n.stateNode.nextSibling):null;return!0}function Nf(){for(var n=Bn;n;)n=ir(n.nextSibling)}function Ss(){Bn=zn=null,Vt=!1}function zc(n){ai===null?ai=[n]:ai.push(n)}var qg=C.ReactCurrentBatchConfig;function wa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var m=c,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(T){var B=m.refs;T===null?delete B[v]:B[v]=T},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Lo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Pf(n){var i=n._init;return i(n._payload)}function Lf(n){function i(ie,q){if(n){var se=ie.deletions;se===null?(ie.deletions=[q],ie.flags|=16):se.push(q)}}function a(ie,q){if(!n)return null;for(;q!==null;)i(ie,q),q=q.sibling;return null}function c(ie,q){for(ie=new Map;q!==null;)q.key!==null?ie.set(q.key,q):ie.set(q.index,q),q=q.sibling;return ie}function m(ie,q){return ie=pr(ie,q),ie.index=0,ie.sibling=null,ie}function v(ie,q,se){return ie.index=se,n?(se=ie.alternate,se!==null?(se=se.index,se<q?(ie.flags|=2,q):se):(ie.flags|=2,q)):(ie.flags|=1048576,q)}function T(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function B(ie,q,se,Ie){return q===null||q.tag!==6?(q=Nu(se,ie.mode,Ie),q.return=ie,q):(q=m(q,se),q.return=ie,q)}function W(ie,q,se,Ie){var nt=se.type;return nt===O?Re(ie,q,se.props.children,Ie,se.key):q!==null&&(q.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ne&&Pf(nt)===q.type)?(Ie=m(q,se.props),Ie.ref=wa(ie,q,se),Ie.return=ie,Ie):(Ie=nl(se.type,se.key,se.props,null,ie.mode,Ie),Ie.ref=wa(ie,q,se),Ie.return=ie,Ie)}function de(ie,q,se,Ie){return q===null||q.tag!==4||q.stateNode.containerInfo!==se.containerInfo||q.stateNode.implementation!==se.implementation?(q=Pu(se,ie.mode,Ie),q.return=ie,q):(q=m(q,se.children||[]),q.return=ie,q)}function Re(ie,q,se,Ie,nt){return q===null||q.tag!==7?(q=Vr(se,ie.mode,Ie,nt),q.return=ie,q):(q=m(q,se),q.return=ie,q)}function Ne(ie,q,se){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Nu(""+q,ie.mode,se),q.return=ie,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case $:return se=nl(q.type,q.key,q.props,null,ie.mode,se),se.ref=wa(ie,null,q),se.return=ie,se;case z:return q=Pu(q,ie.mode,se),q.return=ie,q;case ne:var Ie=q._init;return Ne(ie,Ie(q._payload),se)}if(Be(q)||ce(q))return q=Vr(q,ie.mode,se,null),q.return=ie,q;Lo(ie,q)}return null}function Te(ie,q,se,Ie){var nt=q!==null?q.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return nt!==null?null:B(ie,q,""+se,Ie);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case $:return se.key===nt?W(ie,q,se,Ie):null;case z:return se.key===nt?de(ie,q,se,Ie):null;case ne:return nt=se._init,Te(ie,q,nt(se._payload),Ie)}if(Be(se)||ce(se))return nt!==null?null:Re(ie,q,se,Ie,null);Lo(ie,se)}return null}function qe(ie,q,se,Ie,nt){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return ie=ie.get(se)||null,B(q,ie,""+Ie,nt);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case $:return ie=ie.get(Ie.key===null?se:Ie.key)||null,W(q,ie,Ie,nt);case z:return ie=ie.get(Ie.key===null?se:Ie.key)||null,de(q,ie,Ie,nt);case ne:var at=Ie._init;return qe(ie,q,se,at(Ie._payload),nt)}if(Be(Ie)||ce(Ie))return ie=ie.get(se)||null,Re(q,ie,Ie,nt,null);Lo(q,Ie)}return null}function Ze(ie,q,se,Ie){for(var nt=null,at=null,ot=q,ft=q=0,on=null;ot!==null&&ft<se.length;ft++){ot.index>ft?(on=ot,ot=null):on=ot.sibling;var Rt=Te(ie,ot,se[ft],Ie);if(Rt===null){ot===null&&(ot=on);break}n&&ot&&Rt.alternate===null&&i(ie,ot),q=v(Rt,q,ft),at===null?nt=Rt:at.sibling=Rt,at=Rt,ot=on}if(ft===se.length)return a(ie,ot),Vt&&Ur(ie,ft),nt;if(ot===null){for(;ft<se.length;ft++)ot=Ne(ie,se[ft],Ie),ot!==null&&(q=v(ot,q,ft),at===null?nt=ot:at.sibling=ot,at=ot);return Vt&&Ur(ie,ft),nt}for(ot=c(ie,ot);ft<se.length;ft++)on=qe(ot,ie,ft,se[ft],Ie),on!==null&&(n&&on.alternate!==null&&ot.delete(on.key===null?ft:on.key),q=v(on,q,ft),at===null?nt=on:at.sibling=on,at=on);return n&&ot.forEach(function(mr){return i(ie,mr)}),Vt&&Ur(ie,ft),nt}function Qe(ie,q,se,Ie){var nt=ce(se);if(typeof nt!="function")throw Error(t(150));if(se=nt.call(se),se==null)throw Error(t(151));for(var at=nt=null,ot=q,ft=q=0,on=null,Rt=se.next();ot!==null&&!Rt.done;ft++,Rt=se.next()){ot.index>ft?(on=ot,ot=null):on=ot.sibling;var mr=Te(ie,ot,Rt.value,Ie);if(mr===null){ot===null&&(ot=on);break}n&&ot&&mr.alternate===null&&i(ie,ot),q=v(mr,q,ft),at===null?nt=mr:at.sibling=mr,at=mr,ot=on}if(Rt.done)return a(ie,ot),Vt&&Ur(ie,ft),nt;if(ot===null){for(;!Rt.done;ft++,Rt=se.next())Rt=Ne(ie,Rt.value,Ie),Rt!==null&&(q=v(Rt,q,ft),at===null?nt=Rt:at.sibling=Rt,at=Rt);return Vt&&Ur(ie,ft),nt}for(ot=c(ie,ot);!Rt.done;ft++,Rt=se.next())Rt=qe(ot,ie,ft,Rt.value,Ie),Rt!==null&&(n&&Rt.alternate!==null&&ot.delete(Rt.key===null?ft:Rt.key),q=v(Rt,q,ft),at===null?nt=Rt:at.sibling=Rt,at=Rt);return n&&ot.forEach(function(Cv){return i(ie,Cv)}),Vt&&Ur(ie,ft),nt}function qt(ie,q,se,Ie){if(typeof se=="object"&&se!==null&&se.type===O&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case $:e:{for(var nt=se.key,at=q;at!==null;){if(at.key===nt){if(nt=se.type,nt===O){if(at.tag===7){a(ie,at.sibling),q=m(at,se.props.children),q.return=ie,ie=q;break e}}else if(at.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ne&&Pf(nt)===at.type){a(ie,at.sibling),q=m(at,se.props),q.ref=wa(ie,at,se),q.return=ie,ie=q;break e}a(ie,at);break}else i(ie,at);at=at.sibling}se.type===O?(q=Vr(se.props.children,ie.mode,Ie,se.key),q.return=ie,ie=q):(Ie=nl(se.type,se.key,se.props,null,ie.mode,Ie),Ie.ref=wa(ie,q,se),Ie.return=ie,ie=Ie)}return T(ie);case z:e:{for(at=se.key;q!==null;){if(q.key===at)if(q.tag===4&&q.stateNode.containerInfo===se.containerInfo&&q.stateNode.implementation===se.implementation){a(ie,q.sibling),q=m(q,se.children||[]),q.return=ie,ie=q;break e}else{a(ie,q);break}else i(ie,q);q=q.sibling}q=Pu(se,ie.mode,Ie),q.return=ie,ie=q}return T(ie);case ne:return at=se._init,qt(ie,q,at(se._payload),Ie)}if(Be(se))return Ze(ie,q,se,Ie);if(ce(se))return Qe(ie,q,se,Ie);Lo(ie,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,q!==null&&q.tag===6?(a(ie,q.sibling),q=m(q,se),q.return=ie,ie=q):(a(ie,q),q=Nu(se,ie.mode,Ie),q.return=ie,ie=q),T(ie)):a(ie,q)}return qt}var Ms=Lf(!0),Df=Lf(!1),Do=rr(null),Io=null,ws=null,Bc=null;function jc(){Bc=ws=Io=null}function Hc(n){var i=Do.current;jt(Do),n._currentValue=i}function Vc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function bs(n,i){Io=n,Bc=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(Bc!==n)if(n={context:n,memoizedValue:i,next:null},ws===null){if(Io===null)throw Error(t(308));ws=n,Io.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return i}var kr=null;function Gc(n){kr===null?kr=[n]:kr.push(n)}function If(n,i,a,c){var m=i.interleaved;return m===null?(a.next=a,Gc(i)):(a.next=m.next,m.next=a),i.interleaved=a,Ii(n,c)}function Ii(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var or=!1;function Wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var m=c.pending;return m===null?i.next=i:(i.next=m.next,m.next=i),c.pending=i,Ii(n,a)}return m=c.interleaved,m===null?(i.next=i,Gc(c)):(i.next=m.next,m.next=i),c.interleaved=i,Ii(n,a)}function Uo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,sc(n,a)}}function kf(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var m=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?m=v=T:v=v.next=T,a=a.next}while(a!==null);v===null?m=v=i:v=v.next=i}else m=v=i;a={baseState:c.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ko(n,i,a,c){var m=n.updateQueue;or=!1;var v=m.firstBaseUpdate,T=m.lastBaseUpdate,B=m.shared.pending;if(B!==null){m.shared.pending=null;var W=B,de=W.next;W.next=null,T===null?v=de:T.next=de,T=W;var Re=n.alternate;Re!==null&&(Re=Re.updateQueue,B=Re.lastBaseUpdate,B!==T&&(B===null?Re.firstBaseUpdate=de:B.next=de,Re.lastBaseUpdate=W))}if(v!==null){var Ne=m.baseState;T=0,Re=de=W=null,B=v;do{var Te=B.lane,qe=B.eventTime;if((c&Te)===Te){Re!==null&&(Re=Re.next={eventTime:qe,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ze=n,Qe=B;switch(Te=i,qe=a,Qe.tag){case 1:if(Ze=Qe.payload,typeof Ze=="function"){Ne=Ze.call(qe,Ne,Te);break e}Ne=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Qe.payload,Te=typeof Ze=="function"?Ze.call(qe,Ne,Te):Ze,Te==null)break e;Ne=I({},Ne,Te);break e;case 2:or=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Te=m.effects,Te===null?m.effects=[B]:Te.push(B))}else qe={eventTime:qe,lane:Te,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Re===null?(de=Re=qe,W=Ne):Re=Re.next=qe,T|=Te;if(B=B.next,B===null){if(B=m.shared.pending,B===null)break;Te=B,B=Te.next,Te.next=null,m.lastBaseUpdate=Te,m.shared.pending=null}}while(!0);if(Re===null&&(W=Ne),m.baseState=W,m.firstBaseUpdate=de,m.lastBaseUpdate=Re,i=m.shared.interleaved,i!==null){m=i;do T|=m.lane,m=m.next;while(m!==i)}else v===null&&(m.shared.lanes=0);zr|=T,n.lanes=T,n.memoizedState=Ne}}function Ff(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],m=c.callback;if(m!==null){if(c.callback=null,c=a,typeof m!="function")throw Error(t(191,m));m.call(c)}}}var ba={},yi=rr(ba),Ea=rr(ba),Ta=rr(ba);function Fr(n){if(n===ba)throw Error(t(174));return n}function Xc(n,i){switch(Ft(Ta,i),Ft(Ea,n),Ft(yi,ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ye(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ye(i,n)}jt(yi),Ft(yi,i)}function Es(){jt(yi),jt(Ea),jt(Ta)}function Of(n){Fr(Ta.current);var i=Fr(yi.current),a=Ye(i,n.type);i!==a&&(Ft(Ea,n),Ft(yi,a))}function $c(n){Ea.current===n&&(jt(yi),jt(Ea))}var Gt=rr(0);function Fo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qc=[];function Yc(){for(var n=0;n<qc.length;n++)qc[n]._workInProgressVersionPrimary=null;qc.length=0}var Oo=C.ReactCurrentDispatcher,Kc=C.ReactCurrentBatchConfig,Or=0,Wt=null,Qt=null,sn=null,zo=!1,Ca=!1,Aa=0,Yg=0;function pn(){throw Error(t(321))}function Zc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!si(n[a],i[a]))return!1;return!0}function Jc(n,i,a,c,m,v){if(Or=v,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Oo.current=n===null||n.memoizedState===null?Qg:ev,n=a(c,m),Ca){v=0;do{if(Ca=!1,Aa=0,25<=v)throw Error(t(301));v+=1,sn=Qt=null,i.updateQueue=null,Oo.current=tv,n=a(c,m)}while(Ca)}if(Oo.current=Ho,i=Qt!==null&&Qt.next!==null,Or=0,sn=Qt=Wt=null,zo=!1,i)throw Error(t(300));return n}function Qc(){var n=Aa!==0;return Aa=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Wt.memoizedState=sn=n:sn=sn.next=n,sn}function Jn(){if(Qt===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=sn===null?Wt.memoizedState:sn.next;if(i!==null)sn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},sn===null?Wt.memoizedState=sn=n:sn=sn.next=n}return sn}function Ra(n,i){return typeof i=="function"?i(n):i}function eu(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Qt,m=c.baseQueue,v=a.pending;if(v!==null){if(m!==null){var T=m.next;m.next=v.next,v.next=T}c.baseQueue=m=v,a.pending=null}if(m!==null){v=m.next,c=c.baseState;var B=T=null,W=null,de=v;do{var Re=de.lane;if((Or&Re)===Re)W!==null&&(W=W.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:n(c,de.action);else{var Ne={lane:Re,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};W===null?(B=W=Ne,T=c):W=W.next=Ne,Wt.lanes|=Re,zr|=Re}de=de.next}while(de!==null&&de!==v);W===null?T=c:W.next=B,si(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=W,a.lastRenderedState=c}if(n=a.interleaved,n!==null){m=n;do v=m.lane,Wt.lanes|=v,zr|=v,m=m.next;while(m!==n)}else m===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function tu(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,m=a.pending,v=i.memoizedState;if(m!==null){a.pending=null;var T=m=m.next;do v=n(v,T.action),T=T.next;while(T!==m);si(v,i.memoizedState)||(Pn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,c]}function zf(){}function Bf(n,i){var a=Wt,c=Jn(),m=i(),v=!si(c.memoizedState,m);if(v&&(c.memoizedState=m,Pn=!0),c=c.queue,nu(Vf.bind(null,a,c,n),[n]),c.getSnapshot!==i||v||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Na(9,Hf.bind(null,a,c,m,i),void 0,null),an===null)throw Error(t(349));(Or&30)!==0||jf(a,i,m)}return m}function jf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Hf(n,i,a,c){i.value=a,i.getSnapshot=c,Gf(i)&&Wf(n)}function Vf(n,i,a){return a(function(){Gf(i)&&Wf(n)})}function Gf(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!si(n,a)}catch{return!0}}function Wf(n){var i=Ii(n,1);i!==null&&ui(i,n,1,-1)}function Xf(n){var i=Si();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:n},i.queue=n,n=n.dispatch=Jg.bind(null,Wt,n),[i.memoizedState,n]}function Na(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function $f(){return Jn().memoizedState}function Bo(n,i,a,c){var m=Si();Wt.flags|=n,m.memoizedState=Na(1|i,a,void 0,c===void 0?null:c)}function jo(n,i,a,c){var m=Jn();c=c===void 0?null:c;var v=void 0;if(Qt!==null){var T=Qt.memoizedState;if(v=T.destroy,c!==null&&Zc(c,T.deps)){m.memoizedState=Na(i,a,v,c);return}}Wt.flags|=n,m.memoizedState=Na(1|i,a,v,c)}function qf(n,i){return Bo(8390656,8,n,i)}function nu(n,i){return jo(2048,8,n,i)}function Yf(n,i){return jo(4,2,n,i)}function Kf(n,i){return jo(4,4,n,i)}function Zf(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Jf(n,i,a){return a=a!=null?a.concat([n]):null,jo(4,4,Zf.bind(null,i,n),a)}function iu(){}function Qf(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function ep(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Zc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function tp(n,i,a){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(si(a,i)||(a=Sn(),Wt.lanes|=a,zr|=a,n.baseState=!0),i)}function Kg(n,i){var a=Lt;Lt=a!==0&&4>a?a:4,n(!0);var c=Kc.transition;Kc.transition={};try{n(!1),i()}finally{Lt=a,Kc.transition=c}}function np(){return Jn().memoizedState}function Zg(n,i,a){var c=hr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ip(n))rp(i,a);else if(a=If(n,i,a,c),a!==null){var m=wn();ui(a,n,c,m),sp(a,i,c)}}function Jg(n,i,a){var c=hr(n),m={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ip(n))rp(i,m);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var T=i.lastRenderedState,B=v(T,a);if(m.hasEagerState=!0,m.eagerState=B,si(B,T)){var W=i.interleaved;W===null?(m.next=m,Gc(i)):(m.next=W.next,W.next=m),i.interleaved=m;return}}catch{}finally{}a=If(n,i,m,c),a!==null&&(m=wn(),ui(a,n,c,m),sp(a,i,c))}}function ip(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function rp(n,i){Ca=zo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function sp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,sc(n,a)}}var Ho={readContext:Zn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},Qg={readContext:Zn,useCallback:function(n,i){return Si().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:qf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Bo(4194308,4,Zf.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Bo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Bo(4,2,n,i)},useMemo:function(n,i){var a=Si();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Si();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Zg.bind(null,Wt,n),[c.memoizedState,n]},useRef:function(n){var i=Si();return n={current:n},i.memoizedState=n},useState:Xf,useDebugValue:iu,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=Xf(!1),i=n[0];return n=Kg.bind(null,n[1]),Si().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Wt,m=Si();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),an===null)throw Error(t(349));(Or&30)!==0||jf(c,i,a)}m.memoizedState=a;var v={value:a,getSnapshot:i};return m.queue=v,qf(Vf.bind(null,c,v,n),[n]),c.flags|=2048,Na(9,Hf.bind(null,c,v,a,i),void 0,null),a},useId:function(){var n=Si(),i=an.identifierPrefix;if(Vt){var a=Di,c=Li;a=(c&~(1<<32-gt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Yg++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ev={readContext:Zn,useCallback:Qf,useContext:Zn,useEffect:nu,useImperativeHandle:Jf,useInsertionEffect:Yf,useLayoutEffect:Kf,useMemo:ep,useReducer:eu,useRef:$f,useState:function(){return eu(Ra)},useDebugValue:iu,useDeferredValue:function(n){var i=Jn();return tp(i,Qt.memoizedState,n)},useTransition:function(){var n=eu(Ra)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:zf,useSyncExternalStore:Bf,useId:np,unstable_isNewReconciler:!1},tv={readContext:Zn,useCallback:Qf,useContext:Zn,useEffect:nu,useImperativeHandle:Jf,useInsertionEffect:Yf,useLayoutEffect:Kf,useMemo:ep,useReducer:tu,useRef:$f,useState:function(){return tu(Ra)},useDebugValue:iu,useDeferredValue:function(n){var i=Jn();return Qt===null?i.memoizedState=n:tp(i,Qt.memoizedState,n)},useTransition:function(){var n=tu(Ra)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:zf,useSyncExternalStore:Bf,useId:np,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=I({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ru(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:I({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Vo={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=wn(),m=hr(n),v=Ui(c,m);v.payload=i,a!=null&&(v.callback=a),i=lr(n,v,m),i!==null&&(ui(i,n,m,c),Uo(i,n,m))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=wn(),m=hr(n),v=Ui(c,m);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=lr(n,v,m),i!==null&&(ui(i,n,m,c),Uo(i,n,m))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),c=hr(n),m=Ui(a,c);m.tag=2,i!=null&&(m.callback=i),i=lr(n,m,c),i!==null&&(ui(i,n,c,a),Uo(i,n,c))}};function ap(n,i,a,c,m,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,v,T):i.prototype&&i.prototype.isPureReactComponent?!xa(a,c)||!xa(m,v):!0}function op(n,i,a){var c=!1,m=sr,v=i.contextType;return typeof v=="object"&&v!==null?v=Zn(v):(m=Nn(i)?Dr:fn.current,c=i.contextTypes,v=(c=c!=null)?vs(n,m):sr),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Vo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=v),i}function lp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Vo.enqueueReplaceState(i,i.state,null)}function su(n,i,a,c){var m=n.stateNode;m.props=a,m.state=n.memoizedState,m.refs={},Wc(n);var v=i.contextType;typeof v=="object"&&v!==null?m.context=Zn(v):(v=Nn(i)?Dr:fn.current,m.context=vs(n,v)),m.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(ru(n,i,v,a),m.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(i=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),i!==m.state&&Vo.enqueueReplaceState(m,m.state,null),ko(n,a,m,c),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Ts(n,i){try{var a="",c=i;do a+=Q(c),c=c.return;while(c);var m=a}catch(v){m=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:m,digest:null}}function au(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function ou(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var nv=typeof WeakMap=="function"?WeakMap:Map;function cp(n,i,a){a=Ui(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Ko||(Ko=!0,Mu=c),ou(n,i)},a}function up(n,i,a){a=Ui(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var m=i.value;a.payload=function(){return c(m)},a.callback=function(){ou(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){ou(n,i),typeof c!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function dp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new nv;var m=new Set;c.set(i,m)}else m=c.get(i),m===void 0&&(m=new Set,c.set(i,m));m.has(a)||(m.add(a),n=xv.bind(null,n,i,a),i.then(n,n))}function hp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function fp(n,i,a,c,m){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ui(-1,1),i.tag=2,lr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var iv=C.ReactCurrentOwner,Pn=!1;function Mn(n,i,a,c){i.child=n===null?Df(i,null,a,c):Ms(i,n.child,a,c)}function pp(n,i,a,c,m){a=a.render;var v=i.ref;return bs(i,m),c=Jc(n,i,a,c,v,m),a=Qc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,ki(n,i,m)):(Vt&&a&&Uc(i),i.flags|=1,Mn(n,i,c,m),i.child)}function mp(n,i,a,c,m){if(n===null){var v=a.type;return typeof v=="function"&&!Ru(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,xp(n,i,v,c,m)):(n=nl(a.type,null,c,i,i.mode,m),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&m)===0){var T=v.memoizedProps;if(a=a.compare,a=a!==null?a:xa,a(T,c)&&n.ref===i.ref)return ki(n,i,m)}return i.flags|=1,n=pr(v,c),n.ref=i.ref,n.return=i,i.child=n}function xp(n,i,a,c,m){if(n!==null){var v=n.memoizedProps;if(xa(v,c)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=c=v,(n.lanes&m)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,ki(n,i,m)}return lu(n,i,a,c,m)}function gp(n,i,a){var c=i.pendingProps,m=c.children,v=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(As,jn),jn|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(As,jn),jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=v!==null?v.baseLanes:a,Ft(As,jn),jn|=c}else v!==null?(c=v.baseLanes|a,i.memoizedState=null):c=a,Ft(As,jn),jn|=c;return Mn(n,i,m,a),i.child}function vp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function lu(n,i,a,c,m){var v=Nn(a)?Dr:fn.current;return v=vs(i,v),bs(i,m),a=Jc(n,i,a,c,v,m),c=Qc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~m,ki(n,i,m)):(Vt&&c&&Uc(i),i.flags|=1,Mn(n,i,a,m),i.child)}function _p(n,i,a,c,m){if(Nn(a)){var v=!0;Co(i)}else v=!1;if(bs(i,m),i.stateNode===null)Wo(n,i),op(i,a,c),su(i,a,c,m),c=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var W=T.context,de=a.contextType;typeof de=="object"&&de!==null?de=Zn(de):(de=Nn(a)?Dr:fn.current,de=vs(i,de));var Re=a.getDerivedStateFromProps,Ne=typeof Re=="function"||typeof T.getSnapshotBeforeUpdate=="function";Ne||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||W!==de)&&lp(i,T,c,de),or=!1;var Te=i.memoizedState;T.state=Te,ko(i,c,T,m),W=i.memoizedState,B!==c||Te!==W||Rn.current||or?(typeof Re=="function"&&(ru(i,a,Re,c),W=i.memoizedState),(B=or||ap(i,a,B,c,Te,W,de))?(Ne||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=W),T.props=c,T.state=W,T.context=de,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Uf(n,i),B=i.memoizedProps,de=i.type===i.elementType?B:oi(i.type,B),T.props=de,Ne=i.pendingProps,Te=T.context,W=a.contextType,typeof W=="object"&&W!==null?W=Zn(W):(W=Nn(a)?Dr:fn.current,W=vs(i,W));var qe=a.getDerivedStateFromProps;(Re=typeof qe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==Ne||Te!==W)&&lp(i,T,c,W),or=!1,Te=i.memoizedState,T.state=Te,ko(i,c,T,m);var Ze=i.memoizedState;B!==Ne||Te!==Ze||Rn.current||or?(typeof qe=="function"&&(ru(i,a,qe,c),Ze=i.memoizedState),(de=or||ap(i,a,de,c,Te,Ze,W)||!1)?(Re||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ze,W),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ze,W)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),T.props=c,T.state=Ze,T.context=W,c=de):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),c=!1)}return cu(n,i,a,c,v,m)}function cu(n,i,a,c,m,v){vp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return m&&bf(i,a,!1),ki(n,i,v);c=i.stateNode,iv.current=i;var B=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ms(i,n.child,null,v),i.child=Ms(i,null,B,v)):Mn(n,i,B,v),i.memoizedState=c.state,m&&bf(i,a,!0),i.child}function yp(n){var i=n.stateNode;i.pendingContext?Mf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Mf(n,i.context,!1),Xc(n,i.containerInfo)}function Sp(n,i,a,c,m){return Ss(),zc(m),i.flags|=256,Mn(n,i,a,c),i.child}var uu={dehydrated:null,treeContext:null,retryLane:0};function du(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mp(n,i,a){var c=i.pendingProps,m=Gt.current,v=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(m&2)!==0),B?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),Ft(Gt,m&1),n===null)return Oc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,v?(c=i.mode,v=i.child,T={mode:"hidden",children:T},(c&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=il(T,c,0,null),n=Vr(n,c,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=du(a),i.memoizedState=uu,n):hu(i,T));if(m=n.memoizedState,m!==null&&(B=m.dehydrated,B!==null))return rv(n,i,T,c,B,m,a);if(v){v=c.fallback,T=i.mode,m=n.child,B=m.sibling;var W={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==m?(c=i.child,c.childLanes=0,c.pendingProps=W,i.deletions=null):(c=pr(m,W),c.subtreeFlags=m.subtreeFlags&14680064),B!==null?v=pr(B,v):(v=Vr(v,T,a,null),v.flags|=2),v.return=i,c.return=i,c.sibling=v,i.child=c,c=v,v=i.child,T=n.child.memoizedState,T=T===null?du(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~a,i.memoizedState=uu,c}return v=n.child,n=v.sibling,c=pr(v,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function hu(n,i){return i=il({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Go(n,i,a,c){return c!==null&&zc(c),Ms(i,n.child,null,a),n=hu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function rv(n,i,a,c,m,v,T){if(a)return i.flags&256?(i.flags&=-257,c=au(Error(t(422))),Go(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=c.fallback,m=i.mode,c=il({mode:"visible",children:c.children},m,0,null),v=Vr(v,m,T,null),v.flags|=2,c.return=i,v.return=i,c.sibling=v,i.child=c,(i.mode&1)!==0&&Ms(i,n.child,null,T),i.child.memoizedState=du(T),i.memoizedState=uu,v);if((i.mode&1)===0)return Go(n,i,T,null);if(m.data==="$!"){if(c=m.nextSibling&&m.nextSibling.dataset,c)var B=c.dgst;return c=B,v=Error(t(419)),c=au(v,c,void 0),Go(n,i,T,c)}if(B=(T&n.childLanes)!==0,Pn||B){if(c=an,c!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(c.suspendedLanes|T))!==0?0:m,m!==0&&m!==v.retryLane&&(v.retryLane=m,Ii(n,m),ui(c,n,m,-1))}return Au(),c=au(Error(t(421))),Go(n,i,T,c)}return m.data==="$?"?(i.flags|=128,i.child=n.child,i=gv.bind(null,n),m._reactRetry=i,null):(n=v.treeContext,Bn=ir(m.nextSibling),zn=i,Vt=!0,ai=null,n!==null&&(Yn[Kn++]=Li,Yn[Kn++]=Di,Yn[Kn++]=Ir,Li=n.id,Di=n.overflow,Ir=i),i=hu(i,c.children),i.flags|=4096,i)}function wp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Vc(n.return,i,a)}function fu(n,i,a,c,m){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:m}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=c,v.tail=a,v.tailMode=m)}function bp(n,i,a){var c=i.pendingProps,m=c.revealOrder,v=c.tail;if(Mn(n,i,c.children,a),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wp(n,a,i);else if(n.tag===19)wp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ft(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(m){case"forwards":for(a=i.child,m=null;a!==null;)n=a.alternate,n!==null&&Fo(n)===null&&(m=a),a=a.sibling;a=m,a===null?(m=i.child,i.child=null):(m=a.sibling,a.sibling=null),fu(i,!1,m,a,v);break;case"backwards":for(a=null,m=i.child,i.child=null;m!==null;){if(n=m.alternate,n!==null&&Fo(n)===null){i.child=m;break}n=m.sibling,m.sibling=a,a=m,m=n}fu(i,!0,a,null,v);break;case"together":fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ki(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=pr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=pr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function sv(n,i,a){switch(i.tag){case 3:yp(i),Ss();break;case 5:Of(i);break;case 1:Nn(i.type)&&Co(i);break;case 4:Xc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,m=i.memoizedProps.value;Ft(Do,c._currentValue),c._currentValue=m;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Mp(n,i,a):(Ft(Gt,Gt.current&1),n=ki(n,i,a),n!==null?n.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return bp(n,i,a);i.flags|=128}if(m=i.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ft(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,gp(n,i,a)}return ki(n,i,a)}var Ep,pu,Tp,Cp;Ep=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},pu=function(){},Tp=function(n,i,a,c){var m=n.memoizedProps;if(m!==c){n=i.stateNode,Fr(yi.current);var v=null;switch(a){case"input":m=F(n,m),c=F(n,c),v=[];break;case"select":m=I({},m,{value:void 0}),c=I({},c,{value:void 0}),v=[];break;case"textarea":m=A(n,m),c=A(n,c),v=[];break;default:typeof m.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=bo)}xt(a,c);var T;a=null;for(de in m)if(!c.hasOwnProperty(de)&&m.hasOwnProperty(de)&&m[de]!=null)if(de==="style"){var B=m[de];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?v||(v=[]):(v=v||[]).push(de,null));for(de in c){var W=c[de];if(B=m!=null?m[de]:void 0,c.hasOwnProperty(de)&&W!==B&&(W!=null||B!=null))if(de==="style")if(B){for(T in B)!B.hasOwnProperty(T)||W&&W.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in W)W.hasOwnProperty(T)&&B[T]!==W[T]&&(a||(a={}),a[T]=W[T])}else a||(v||(v=[]),v.push(de,a)),a=W;else de==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,B=B?B.__html:void 0,W!=null&&B!==W&&(v=v||[]).push(de,W)):de==="children"?typeof W!="string"&&typeof W!="number"||(v=v||[]).push(de,""+W):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(W!=null&&de==="onScroll"&&Bt("scroll",n),v||B===W||(v=[])):(v=v||[]).push(de,W))}a&&(v=v||[]).push("style",a);var de=v;(i.updateQueue=de)&&(i.flags|=4)}},Cp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Pa(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var m=n.child;m!==null;)a|=m.lanes|m.childLanes,c|=m.subtreeFlags&14680064,c|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)a|=m.lanes|m.childLanes,c|=m.subtreeFlags,c|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function av(n,i,a){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Nn(i.type)&&To(),mn(i),null;case 3:return c=i.stateNode,Es(),jt(Rn),jt(fn),Yc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Po(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(Eu(ai),ai=null))),pu(n,i),mn(i),null;case 5:$c(i);var m=Fr(Ta.current);if(a=i.type,n!==null&&i.stateNode!=null)Tp(n,i,a,c,m),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Fr(yi.current),Po(i)){c=i.stateNode,a=i.type;var v=i.memoizedProps;switch(c[_i]=i,c[Sa]=v,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(m=0;m<va.length;m++)Bt(va[m],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Oe(c,v),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!v.multiple},Bt("invalid",c);break;case"textarea":re(c,v),Bt("invalid",c)}xt(a,v),m=null;for(var T in v)if(v.hasOwnProperty(T)){var B=v[T];T==="children"?typeof B=="string"?c.textContent!==B&&(v.suppressHydrationWarning!==!0&&wo(c.textContent,B,n),m=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(v.suppressHydrationWarning!==!0&&wo(c.textContent,B,n),m=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&Bt("scroll",c)}switch(a){case"input":ue(c),Ce(c,v,!0);break;case"textarea":ue(c),Me(c);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(c.onclick=bo)}c=m,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=_e(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[_i]=i,n[Sa]=c,Ep(n,i,!1,!1),i.stateNode=n;e:{switch(T=dt(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),m=c;break;case"iframe":case"object":case"embed":Bt("load",n),m=c;break;case"video":case"audio":for(m=0;m<va.length;m++)Bt(va[m],n);m=c;break;case"source":Bt("error",n),m=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),m=c;break;case"details":Bt("toggle",n),m=c;break;case"input":Oe(n,c),m=F(n,c),Bt("invalid",n);break;case"option":m=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},m=I({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":re(n,c),m=A(n,c),Bt("invalid",n);break;default:m=c}xt(a,m),B=m;for(v in B)if(B.hasOwnProperty(v)){var W=B[v];v==="style"?lt(n,W):v==="dangerouslySetInnerHTML"?(W=W?W.__html:void 0,W!=null&&je(n,W)):v==="children"?typeof W=="string"?(a!=="textarea"||W!=="")&&ut(n,W):typeof W=="number"&&ut(n,""+W):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?W!=null&&v==="onScroll"&&Bt("scroll",n):W!=null&&D(n,v,W,T))}switch(a){case"input":ue(n),Ce(n,c,!1);break;case"textarea":ue(n),Me(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,v=c.value,v!=null?k(n,!!c.multiple,v,!1):c.defaultValue!=null&&k(n,!!c.multiple,c.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=bo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)Cp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fr(Ta.current),Fr(yi.current),Po(i)){if(c=i.stateNode,a=i.memoizedProps,c[_i]=i,(v=c.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:wo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&wo(c.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[_i]=i,i.stateNode=c}return mn(i),null;case 13:if(jt(Gt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Nf(),Ss(),i.flags|=98560,v=!1;else if(v=Po(i),c!==null&&c.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[_i]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),v=!1}else ai!==null&&(Eu(ai),ai=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?en===0&&(en=3):Au())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return Es(),pu(n,i),n===null&&_a(i.stateNode.containerInfo),mn(i),null;case 10:return Hc(i.type._context),mn(i),null;case 17:return Nn(i.type)&&To(),mn(i),null;case 19:if(jt(Gt),v=i.memoizedState,v===null)return mn(i),null;if(c=(i.flags&128)!==0,T=v.rendering,T===null)if(c)Pa(v,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Fo(n),T!==null){for(i.flags|=128,Pa(v,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)v=a,n=c,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Gt,Gt.current&1|2),i.child}n=n.sibling}v.tail!==null&&De()>Rs&&(i.flags|=128,c=!0,Pa(v,!1),i.lanes=4194304)}else{if(!c)if(n=Fo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Pa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!Vt)return mn(i),null}else 2*De()-v.renderingStartTime>Rs&&a!==1073741824&&(i.flags|=128,c=!0,Pa(v,!1),i.lanes=4194304);v.isBackwards?(T.sibling=i.child,i.child=T):(a=v.last,a!==null?a.sibling=T:i.child=T,v.last=T)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=De(),i.sibling=null,a=Gt.current,Ft(Gt,c?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return Cu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(jn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ov(n,i){switch(kc(i),i.tag){case 1:return Nn(i.type)&&To(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Es(),jt(Rn),jt(fn),Yc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return $c(i),null;case 13:if(jt(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt(Gt),null;case 4:return Es(),null;case 10:return Hc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var Xo=!1,xn=!1,lv=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Cs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){$t(n,i,c)}else a.current=null}function mu(n,i,a){try{a()}catch(c){$t(n,i,c)}}var Ap=!1;function cv(n,i){if(Cc=ho,n=af(),_c(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var m=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var T=0,B=-1,W=-1,de=0,Re=0,Ne=n,Te=null;t:for(;;){for(var qe;Ne!==a||m!==0&&Ne.nodeType!==3||(B=T+m),Ne!==v||c!==0&&Ne.nodeType!==3||(W=T+c),Ne.nodeType===3&&(T+=Ne.nodeValue.length),(qe=Ne.firstChild)!==null;)Te=Ne,Ne=qe;for(;;){if(Ne===n)break t;if(Te===a&&++de===m&&(B=T),Te===v&&++Re===c&&(W=T),(qe=Ne.nextSibling)!==null)break;Ne=Te,Te=Ne.parentNode}Ne=qe}a=B===-1||W===-1?null:{start:B,end:W}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:n,selectionRange:a},ho=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Qe=Ze.memoizedProps,qt=Ze.memoizedState,ie=i.stateNode,q=ie.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:oi(i.type,Qe),qt);ie.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){$t(i,i.return,Ie)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return Ze=Ap,Ap=!1,Ze}function La(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var m=c=c.next;do{if((m.tag&n)===n){var v=m.destroy;m.destroy=void 0,v!==void 0&&mu(i,a,v)}m=m.next}while(m!==c)}}function $o(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function xu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Rp(n){var i=n.alternate;i!==null&&(n.alternate=null,Rp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[Sa],delete i[Lc],delete i[Wg],delete i[Xg])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Np(n){return n.tag===5||n.tag===3||n.tag===4}function Pp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Np(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=bo));else if(c!==4&&(n=n.child,n!==null))for(gu(n,i,a),n=n.sibling;n!==null;)gu(n,i,a),n=n.sibling}function vu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(vu(n,i,a),n=n.sibling;n!==null;)vu(n,i,a),n=n.sibling}var cn=null,li=!1;function cr(n,i,a){for(a=a.child;a!==null;)Lp(n,i,a),a=a.sibling}function Lp(n,i,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Nt,a)}catch{}switch(a.tag){case 5:xn||Cs(a,i);case 6:var c=cn,m=li;cn=null,cr(n,i,a),cn=c,li=m,cn!==null&&(li?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(li?(n=cn,a=a.stateNode,n.nodeType===8?Pc(n.parentNode,a):n.nodeType===1&&Pc(n,a),ua(n)):Pc(cn,a.stateNode));break;case 4:c=cn,m=li,cn=a.stateNode.containerInfo,li=!0,cr(n,i,a),cn=c,li=m;break;case 0:case 11:case 14:case 15:if(!xn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){m=c=c.next;do{var v=m,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&mu(a,i,T),m=m.next}while(m!==c)}cr(n,i,a);break;case 1:if(!xn&&(Cs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){$t(a,i,B)}cr(n,i,a);break;case 21:cr(n,i,a);break;case 22:a.mode&1?(xn=(c=xn)||a.memoizedState!==null,cr(n,i,a),xn=c):cr(n,i,a);break;default:cr(n,i,a)}}function Dp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new lv),i.forEach(function(c){var m=vv.bind(null,n,c);a.has(c)||(a.add(c),c.then(m,m))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var m=a[c];try{var v=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:cn=B.stateNode,li=!1;break e;case 3:cn=B.stateNode.containerInfo,li=!0;break e;case 4:cn=B.stateNode.containerInfo,li=!0;break e}B=B.return}if(cn===null)throw Error(t(160));Lp(v,T,m),cn=null,li=!1;var W=m.alternate;W!==null&&(W.return=null),m.return=null}catch(de){$t(m,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ip(i,n),i=i.sibling}function Ip(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),Mi(n),c&4){try{La(3,n,n.return),$o(3,n)}catch(Qe){$t(n,n.return,Qe)}try{La(5,n,n.return)}catch(Qe){$t(n,n.return,Qe)}}break;case 1:ci(i,n),Mi(n),c&512&&a!==null&&Cs(a,a.return);break;case 5:if(ci(i,n),Mi(n),c&512&&a!==null&&Cs(a,a.return),n.flags&32){var m=n.stateNode;try{ut(m,"")}catch(Qe){$t(n,n.return,Qe)}}if(c&4&&(m=n.stateNode,m!=null)){var v=n.memoizedProps,T=a!==null?a.memoizedProps:v,B=n.type,W=n.updateQueue;if(n.updateQueue=null,W!==null)try{B==="input"&&v.type==="radio"&&v.name!=null&&be(m,v),dt(B,T);var de=dt(B,v);for(T=0;T<W.length;T+=2){var Re=W[T],Ne=W[T+1];Re==="style"?lt(m,Ne):Re==="dangerouslySetInnerHTML"?je(m,Ne):Re==="children"?ut(m,Ne):D(m,Re,Ne,de)}switch(B){case"input":Pe(m,v);break;case"textarea":Se(m,v);break;case"select":var Te=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!v.multiple;var qe=v.value;qe!=null?k(m,!!v.multiple,qe,!1):Te!==!!v.multiple&&(v.defaultValue!=null?k(m,!!v.multiple,v.defaultValue,!0):k(m,!!v.multiple,v.multiple?[]:"",!1))}m[Sa]=v}catch(Qe){$t(n,n.return,Qe)}}break;case 6:if(ci(i,n),Mi(n),c&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,v=n.memoizedProps;try{m.nodeValue=v}catch(Qe){$t(n,n.return,Qe)}}break;case 3:if(ci(i,n),Mi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ua(i.containerInfo)}catch(Qe){$t(n,n.return,Qe)}break;case 4:ci(i,n),Mi(n);break;case 13:ci(i,n),Mi(n),m=n.child,m.flags&8192&&(v=m.memoizedState!==null,m.stateNode.isHidden=v,!v||m.alternate!==null&&m.alternate.memoizedState!==null||(Su=De())),c&4&&Dp(n);break;case 22:if(Re=a!==null&&a.memoizedState!==null,n.mode&1?(xn=(de=xn)||Re,ci(i,n),xn=de):ci(i,n),Mi(n),c&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Re&&(n.mode&1)!==0)for(Ke=n,Re=n.child;Re!==null;){for(Ne=Ke=Re;Ke!==null;){switch(Te=Ke,qe=Te.child,Te.tag){case 0:case 11:case 14:case 15:La(4,Te,Te.return);break;case 1:Cs(Te,Te.return);var Ze=Te.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=Te,a=Te.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(Qe){$t(c,a,Qe)}}break;case 5:Cs(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Fp(Ne);continue}}qe!==null?(qe.return=Te,Ke=qe):Fp(Ne)}Re=Re.sibling}e:for(Re=null,Ne=n;;){if(Ne.tag===5){if(Re===null){Re=Ne;try{m=Ne.stateNode,de?(v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(B=Ne.stateNode,W=Ne.memoizedProps.style,T=W!=null&&W.hasOwnProperty("display")?W.display:null,B.style.display=it("display",T))}catch(Qe){$t(n,n.return,Qe)}}}else if(Ne.tag===6){if(Re===null)try{Ne.stateNode.nodeValue=de?"":Ne.memoizedProps}catch(Qe){$t(n,n.return,Qe)}}else if((Ne.tag!==22&&Ne.tag!==23||Ne.memoizedState===null||Ne===n)&&Ne.child!==null){Ne.child.return=Ne,Ne=Ne.child;continue}if(Ne===n)break e;for(;Ne.sibling===null;){if(Ne.return===null||Ne.return===n)break e;Re===Ne&&(Re=null),Ne=Ne.return}Re===Ne&&(Re=null),Ne.sibling.return=Ne.return,Ne=Ne.sibling}}break;case 19:ci(i,n),Mi(n),c&4&&Dp(n);break;case 21:break;default:ci(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Np(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var m=c.stateNode;c.flags&32&&(ut(m,""),c.flags&=-33);var v=Pp(n);vu(n,v,m);break;case 3:case 4:var T=c.stateNode.containerInfo,B=Pp(n);gu(n,B,T);break;default:throw Error(t(161))}}catch(W){$t(n,n.return,W)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function uv(n,i,a){Ke=n,Up(n)}function Up(n,i,a){for(var c=(n.mode&1)!==0;Ke!==null;){var m=Ke,v=m.child;if(m.tag===22&&c){var T=m.memoizedState!==null||Xo;if(!T){var B=m.alternate,W=B!==null&&B.memoizedState!==null||xn;B=Xo;var de=xn;if(Xo=T,(xn=W)&&!de)for(Ke=m;Ke!==null;)T=Ke,W=T.child,T.tag===22&&T.memoizedState!==null?Op(m):W!==null?(W.return=T,Ke=W):Op(m);for(;v!==null;)Ke=v,Up(v),v=v.sibling;Ke=m,Xo=B,xn=de}kp(n)}else(m.subtreeFlags&8772)!==0&&v!==null?(v.return=m,Ke=v):kp(n)}}function kp(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||$o(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!xn)if(a===null)c.componentDidMount();else{var m=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);c.componentDidUpdate(m,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&Ff(i,v,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ff(i,T,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var W=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":W.autoFocus&&a.focus();break;case"img":W.src&&(a.src=W.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var Re=de.memoizedState;if(Re!==null){var Ne=Re.dehydrated;Ne!==null&&ua(Ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&xu(i)}catch(Te){$t(i,i.return,Te)}}if(i===n){Ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function Fp(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function Op(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{$o(4,i)}catch(W){$t(i,a,W)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var m=i.return;try{c.componentDidMount()}catch(W){$t(i,m,W)}}var v=i.return;try{xu(i)}catch(W){$t(i,v,W)}break;case 5:var T=i.return;try{xu(i)}catch(W){$t(i,T,W)}}}catch(W){$t(i,i.return,W)}if(i===n){Ke=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Ke=B;break}Ke=i.return}}var dv=Math.ceil,qo=C.ReactCurrentDispatcher,_u=C.ReactCurrentOwner,Qn=C.ReactCurrentBatchConfig,Tt=0,an=null,Yt=null,un=0,jn=0,As=rr(0),en=0,Da=null,zr=0,Yo=0,yu=0,Ia=null,Ln=null,Su=0,Rs=1/0,Fi=null,Ko=!1,Mu=null,ur=null,Zo=!1,dr=null,Jo=0,Ua=0,wu=null,Qo=-1,el=0;function wn(){return(Tt&6)!==0?De():Qo!==-1?Qo:Qo=De()}function hr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&un!==0?un&-un:qg.transition!==null?(el===0&&(el=Sn()),el):(n=Lt,n!==0||(n=window.event,n=n===void 0?16:zh(n.type)),n)}function ui(n,i,a,c){if(50<Ua)throw Ua=0,wu=null,Error(t(185));An(n,a,c),((Tt&2)===0||n!==an)&&(n===an&&((Tt&2)===0&&(Yo|=a),en===4&&fr(n,un)),Dn(n,c),a===1&&Tt===0&&(i.mode&1)===0&&(Rs=De()+500,Ao&&ar()))}function Dn(n,i){var a=n.callbackNode;$n(n,i);var c=vi(n,n===an?un:0);if(c===0)a!==null&&fe(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&fe(a),i===1)n.tag===0?$g(Bp.bind(null,n)):Ef(Bp.bind(null,n)),Vg(function(){(Tt&6)===0&&ar()}),a=null;else{switch(Ph(c)){case 1:a=Je;break;case 4:a=ht;break;case 16:a=pt;break;case 536870912:a=bt;break;default:a=pt}a=qp(a,zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function zp(n,i){if(Qo=-1,el=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var c=vi(n,n===an?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=tl(n,c);else{i=c;var m=Tt;Tt|=2;var v=Hp();(an!==n||un!==i)&&(Fi=null,Rs=De()+500,jr(n,i));do try{pv();break}catch(B){jp(n,B)}while(!0);jc(),qo.current=v,Tt=m,Yt!==null?i=0:(an=null,un=0,i=en)}if(i!==0){if(i===2&&(m=Ri(n),m!==0&&(c=m,i=bu(n,m))),i===1)throw a=Da,jr(n,0),fr(n,c),Dn(n,De()),a;if(i===6)fr(n,c);else{if(m=n.current.alternate,(c&30)===0&&!hv(m)&&(i=tl(n,c),i===2&&(v=Ri(n),v!==0&&(c=v,i=bu(n,v))),i===1))throw a=Da,jr(n,0),fr(n,c),Dn(n,De()),a;switch(n.finishedWork=m,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,Ln,Fi);break;case 3:if(fr(n,c),(c&130023424)===c&&(i=Su+500-De(),10<i)){if(vi(n,0)!==0)break;if(m=n.suspendedLanes,(m&c)!==c){wn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=Nc(Hr.bind(null,n,Ln,Fi),i);break}Hr(n,Ln,Fi);break;case 4:if(fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,m=-1;0<c;){var T=31-gt(c);v=1<<T,T=i[T],T>m&&(m=T),c&=~v}if(c=m,c=De()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*dv(c/1960))-c,10<c){n.timeoutHandle=Nc(Hr.bind(null,n,Ln,Fi),c);break}Hr(n,Ln,Fi);break;case 5:Hr(n,Ln,Fi);break;default:throw Error(t(329))}}}return Dn(n,De()),n.callbackNode===a?zp.bind(null,n):null}function bu(n,i){var a=Ia;return n.current.memoizedState.isDehydrated&&(jr(n,i).flags|=256),n=tl(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&Eu(i)),n}function Eu(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function hv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var m=a[c],v=m.getSnapshot;m=m.value;try{if(!si(v(),m))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(n,i){for(i&=~yu,i&=~Yo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-gt(i),c=1<<a;n[a]=-1,i&=~c}}function Bp(n){if((Tt&6)!==0)throw Error(t(327));Ns();var i=vi(n,0);if((i&1)===0)return Dn(n,De()),null;var a=tl(n,i);if(n.tag!==0&&a===2){var c=Ri(n);c!==0&&(i=c,a=bu(n,c))}if(a===1)throw a=Da,jr(n,0),fr(n,i),Dn(n,De()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,Ln,Fi),Dn(n,De()),null}function Tu(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(Rs=De()+500,Ao&&ar())}}function Br(n){dr!==null&&dr.tag===0&&(Tt&6)===0&&Ns();var i=Tt;Tt|=1;var a=Qn.transition,c=Lt;try{if(Qn.transition=null,Lt=1,n)return n()}finally{Lt=c,Qn.transition=a,Tt=i,(Tt&6)===0&&ar()}}function Cu(){jn=As.current,jt(As)}function jr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Hg(a)),Yt!==null)for(a=Yt.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&To();break;case 3:Es(),jt(Rn),jt(fn),Yc();break;case 5:$c(c);break;case 4:Es();break;case 13:jt(Gt);break;case 19:jt(Gt);break;case 10:Hc(c.type._context);break;case 22:case 23:Cu()}a=a.return}if(an=n,Yt=n=pr(n.current,null),un=jn=i,en=0,Da=null,yu=Yo=zr=0,Ln=Ia=null,kr!==null){for(i=0;i<kr.length;i++)if(a=kr[i],c=a.interleaved,c!==null){a.interleaved=null;var m=c.next,v=a.pending;if(v!==null){var T=v.next;v.next=m,c.next=T}a.pending=c}kr=null}return n}function jp(n,i){do{var a=Yt;try{if(jc(),Oo.current=Ho,zo){for(var c=Wt.memoizedState;c!==null;){var m=c.queue;m!==null&&(m.pending=null),c=c.next}zo=!1}if(Or=0,sn=Qt=Wt=null,Ca=!1,Aa=0,_u.current=null,a===null||a.return===null){en=1,Da=i,Yt=null;break}e:{var v=n,T=a.return,B=a,W=i;if(i=un,B.flags|=32768,W!==null&&typeof W=="object"&&typeof W.then=="function"){var de=W,Re=B,Ne=Re.tag;if((Re.mode&1)===0&&(Ne===0||Ne===11||Ne===15)){var Te=Re.alternate;Te?(Re.updateQueue=Te.updateQueue,Re.memoizedState=Te.memoizedState,Re.lanes=Te.lanes):(Re.updateQueue=null,Re.memoizedState=null)}var qe=hp(T);if(qe!==null){qe.flags&=-257,fp(qe,T,B,v,i),qe.mode&1&&dp(v,de,i),i=qe,W=de;var Ze=i.updateQueue;if(Ze===null){var Qe=new Set;Qe.add(W),i.updateQueue=Qe}else Ze.add(W);break e}else{if((i&1)===0){dp(v,de,i),Au();break e}W=Error(t(426))}}else if(Vt&&B.mode&1){var qt=hp(T);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),fp(qt,T,B,v,i),zc(Ts(W,B));break e}}v=W=Ts(W,B),en!==4&&(en=2),Ia===null?Ia=[v]:Ia.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var ie=cp(v,W,i);kf(v,ie);break e;case 1:B=W;var q=v.type,se=v.stateNode;if((v.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(ur===null||!ur.has(se)))){v.flags|=65536,i&=-i,v.lanes|=i;var Ie=up(v,B,i);kf(v,Ie);break e}}v=v.return}while(v!==null)}Gp(a)}catch(nt){i=nt,Yt===a&&a!==null&&(Yt=a=a.return);continue}break}while(!0)}function Hp(){var n=qo.current;return qo.current=Ho,n===null?Ho:n}function Au(){(en===0||en===3||en===2)&&(en=4),an===null||(zr&268435455)===0&&(Yo&268435455)===0||fr(an,un)}function tl(n,i){var a=Tt;Tt|=2;var c=Hp();(an!==n||un!==i)&&(Fi=null,jr(n,i));do try{fv();break}catch(m){jp(n,m)}while(!0);if(jc(),Tt=a,qo.current=c,Yt!==null)throw Error(t(261));return an=null,un=0,en}function fv(){for(;Yt!==null;)Vp(Yt)}function pv(){for(;Yt!==null&&!ee();)Vp(Yt)}function Vp(n){var i=$p(n.alternate,n,jn);n.memoizedProps=n.pendingProps,i===null?Gp(n):Yt=i,_u.current=null}function Gp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=av(a,i,jn),a!==null){Yt=a;return}}else{if(a=ov(a,i),a!==null){a.flags&=32767,Yt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Yt=null;return}}if(i=i.sibling,i!==null){Yt=i;return}Yt=i=n}while(i!==null);en===0&&(en=5)}function Hr(n,i,a){var c=Lt,m=Qn.transition;try{Qn.transition=null,Lt=1,mv(n,i,a,c)}finally{Qn.transition=m,Lt=c}return null}function mv(n,i,a,c){do Ns();while(dr!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var m=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(lo(n,v),n===an&&(Yt=an=null,un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zo||(Zo=!0,qp(pt,function(){return Ns(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Qn.transition,Qn.transition=null;var T=Lt;Lt=1;var B=Tt;Tt|=4,_u.current=null,cv(n,a),Ip(a,n),Ug(Ac),ho=!!Cc,Ac=Cc=null,n.current=a,uv(a),Ue(),Tt=B,Lt=T,Qn.transition=v}else n.current=a;if(Zo&&(Zo=!1,dr=n,Jo=m),v=n.pendingLanes,v===0&&(ur=null),dn(a.stateNode),Dn(n,De()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)m=i[a],c(m.value,{componentStack:m.stack,digest:m.digest});if(Ko)throw Ko=!1,n=Mu,Mu=null,n;return(Jo&1)!==0&&n.tag!==0&&Ns(),v=n.pendingLanes,(v&1)!==0?n===wu?Ua++:(Ua=0,wu=n):Ua=0,ar(),null}function Ns(){if(dr!==null){var n=Ph(Jo),i=Qn.transition,a=Lt;try{if(Qn.transition=null,Lt=16>n?16:n,dr===null)var c=!1;else{if(n=dr,dr=null,Jo=0,(Tt&6)!==0)throw Error(t(331));var m=Tt;for(Tt|=4,Ke=n.current;Ke!==null;){var v=Ke,T=v.child;if((Ke.flags&16)!==0){var B=v.deletions;if(B!==null){for(var W=0;W<B.length;W++){var de=B[W];for(Ke=de;Ke!==null;){var Re=Ke;switch(Re.tag){case 0:case 11:case 15:La(8,Re,v)}var Ne=Re.child;if(Ne!==null)Ne.return=Re,Ke=Ne;else for(;Ke!==null;){Re=Ke;var Te=Re.sibling,qe=Re.return;if(Rp(Re),Re===de){Ke=null;break}if(Te!==null){Te.return=qe,Ke=Te;break}Ke=qe}}}var Ze=v.alternate;if(Ze!==null){var Qe=Ze.child;if(Qe!==null){Ze.child=null;do{var qt=Qe.sibling;Qe.sibling=null,Qe=qt}while(Qe!==null)}}Ke=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Ke=T;else e:for(;Ke!==null;){if(v=Ke,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:La(9,v,v.return)}var ie=v.sibling;if(ie!==null){ie.return=v.return,Ke=ie;break e}Ke=v.return}}var q=n.current;for(Ke=q;Ke!==null;){T=Ke;var se=T.child;if((T.subtreeFlags&2064)!==0&&se!==null)se.return=T,Ke=se;else e:for(T=q;Ke!==null;){if(B=Ke,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:$o(9,B)}}catch(nt){$t(B,B.return,nt)}if(B===T){Ke=null;break e}var Ie=B.sibling;if(Ie!==null){Ie.return=B.return,Ke=Ie;break e}Ke=B.return}}if(Tt=m,ar(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Nt,n)}catch{}c=!0}return c}finally{Lt=a,Qn.transition=i}}return!1}function Wp(n,i,a){i=Ts(a,i),i=cp(n,i,1),n=lr(n,i,1),i=wn(),n!==null&&(An(n,1,i),Dn(n,i))}function $t(n,i,a){if(n.tag===3)Wp(n,n,a);else for(;i!==null;){if(i.tag===3){Wp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ur===null||!ur.has(c))){n=Ts(a,n),n=up(i,n,1),i=lr(i,n,1),n=wn(),i!==null&&(An(i,1,n),Dn(i,n));break}}i=i.return}}function xv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,an===n&&(un&a)===a&&(en===4||en===3&&(un&130023424)===un&&500>De()-Su?jr(n,0):yu|=a),Dn(n,i)}function Xp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ri,ri<<=1,(ri&130023424)===0&&(ri=4194304)));var a=wn();n=Ii(n,i),n!==null&&(An(n,i,a),Dn(n,a))}function gv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Xp(n,a)}function vv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,m=n.memoizedState;m!==null&&(a=m.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Xp(n,a)}var $p;$p=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)Pn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,sv(n,i,a);Pn=(n.flags&131072)!==0}else Pn=!1,Vt&&(i.flags&1048576)!==0&&Tf(i,No,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Wo(n,i),n=i.pendingProps;var m=vs(i,fn.current);bs(i,a),m=Jc(null,i,c,n,m,a);var v=Qc();return i.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(c)?(v=!0,Co(i)):v=!1,i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Wc(i),m.updater=Vo,i.stateNode=m,m._reactInternals=i,su(i,c,n,a),i=cu(null,i,c,!0,v,a)):(i.tag=0,Vt&&v&&Uc(i),Mn(null,i,m,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Wo(n,i),n=i.pendingProps,m=c._init,c=m(c._payload),i.type=c,m=i.tag=yv(c),n=oi(c,n),m){case 0:i=lu(null,i,c,n,a);break e;case 1:i=_p(null,i,c,n,a);break e;case 11:i=pp(null,i,c,n,a);break e;case 14:i=mp(null,i,c,oi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:oi(c,m),lu(n,i,c,m,a);case 1:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:oi(c,m),_p(n,i,c,m,a);case 3:e:{if(yp(i),n===null)throw Error(t(387));c=i.pendingProps,v=i.memoizedState,m=v.element,Uf(n,i),ko(i,c,null,a);var T=i.memoizedState;if(c=T.element,v.isDehydrated)if(v={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){m=Ts(Error(t(423)),i),i=Sp(n,i,c,a,m);break e}else if(c!==m){m=Ts(Error(t(424)),i),i=Sp(n,i,c,a,m);break e}else for(Bn=ir(i.stateNode.containerInfo.firstChild),zn=i,Vt=!0,ai=null,a=Df(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),c===m){i=ki(n,i,a);break e}Mn(n,i,c,a)}i=i.child}return i;case 5:return Of(i),n===null&&Oc(i),c=i.type,m=i.pendingProps,v=n!==null?n.memoizedProps:null,T=m.children,Rc(c,m)?T=null:v!==null&&Rc(c,v)&&(i.flags|=32),vp(n,i),Mn(n,i,T,a),i.child;case 6:return n===null&&Oc(i),null;case 13:return Mp(n,i,a);case 4:return Xc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ms(i,null,c,a):Mn(n,i,c,a),i.child;case 11:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:oi(c,m),pp(n,i,c,m,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,m=i.pendingProps,v=i.memoizedProps,T=m.value,Ft(Do,c._currentValue),c._currentValue=T,v!==null)if(si(v.value,T)){if(v.children===m.children&&!Rn.current){i=ki(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var B=v.dependencies;if(B!==null){T=v.child;for(var W=B.firstContext;W!==null;){if(W.context===c){if(v.tag===1){W=Ui(-1,a&-a),W.tag=2;var de=v.updateQueue;if(de!==null){de=de.shared;var Re=de.pending;Re===null?W.next=W:(W.next=Re.next,Re.next=W),de.pending=W}}v.lanes|=a,W=v.alternate,W!==null&&(W.lanes|=a),Vc(v.return,a,i),B.lanes|=a;break}W=W.next}}else if(v.tag===10)T=v.type===i.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),Vc(T,a,i),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===i){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Mn(n,i,m.children,a),i=i.child}return i;case 9:return m=i.type,c=i.pendingProps.children,bs(i,a),m=Zn(m),c=c(m),i.flags|=1,Mn(n,i,c,a),i.child;case 14:return c=i.type,m=oi(c,i.pendingProps),m=oi(c.type,m),mp(n,i,c,m,a);case 15:return xp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,m=i.pendingProps,m=i.elementType===c?m:oi(c,m),Wo(n,i),i.tag=1,Nn(c)?(n=!0,Co(i)):n=!1,bs(i,a),op(i,c,m),su(i,c,m,a),cu(null,i,c,!0,n,a);case 19:return bp(n,i,a);case 22:return gp(n,i,a)}throw Error(t(156,i.tag))};function qp(n,i){return he(n,i)}function _v(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,a,c){return new _v(n,i,a,c)}function Ru(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yv(n){if(typeof n=="function")return Ru(n)?1:0;if(n!=null){if(n=n.$$typeof,n===te)return 11;if(n===xe)return 14}return 2}function pr(n,i){var a=n.alternate;return a===null?(a=ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function nl(n,i,a,c,m,v){var T=2;if(c=n,typeof n=="function")Ru(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return Vr(a.children,m,v,i);case U:T=8,m|=8;break;case N:return n=ei(12,a,i,m|2),n.elementType=N,n.lanes=v,n;case Z:return n=ei(13,a,i,m),n.elementType=Z,n.lanes=v,n;case pe:return n=ei(19,a,i,m),n.elementType=pe,n.lanes=v,n;case le:return il(a,m,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case j:T=9;break e;case te:T=11;break e;case xe:T=14;break e;case ne:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(T,a,i,m),i.elementType=n,i.type=c,i.lanes=v,i}function Vr(n,i,a,c){return n=ei(7,n,c,i),n.lanes=a,n}function il(n,i,a,c){return n=ei(22,n,c,i),n.elementType=le,n.lanes=a,n.stateNode={isHidden:!1},n}function Nu(n,i,a){return n=ei(6,n,null,i),n.lanes=a,n}function Pu(n,i,a){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Sv(n,i,a,c,m){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qn(0),this.expirationTimes=qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.identifierPrefix=c,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Lu(n,i,a,c,m,v,T,B,W){return n=new Sv(n,i,a,B,W),i===1?(i=1,v===!0&&(i|=8)):i=0,v=ei(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(v),n}function Mv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Yp(n){if(!n)return sr;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Nn(a))return wf(n,a,i)}return i}function Kp(n,i,a,c,m,v,T,B,W){return n=Lu(a,c,!0,n,m,v,T,B,W),n.context=Yp(null),a=n.current,c=wn(),m=hr(a),v=Ui(c,m),v.callback=i??null,lr(a,v,m),n.current.lanes=m,An(n,m,c),Dn(n,c),n}function rl(n,i,a,c){var m=i.current,v=wn(),T=hr(m);return a=Yp(a),i.context===null?i.context=a:i.pendingContext=a,i=Ui(v,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=lr(m,i,T),n!==null&&(ui(n,m,T,v),Uo(n,m,T)),T}function sl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Zp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Du(n,i){Zp(n,i),(n=n.alternate)&&Zp(n,i)}function wv(){return null}var Jp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Iu(n){this._internalRoot=n}al.prototype.render=Iu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));rl(n,i,null,null)},al.prototype.unmount=Iu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){rl(null,n,null,null)}),i[Ni]=null}};function al(n){this._internalRoot=n}al.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ih();n={blockedOn:null,target:n,priority:i};for(var a=0;a<er.length&&i!==0&&i<er[a].priority;a++);er.splice(a,0,n),a===0&&Fh(n)}};function Uu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ol(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function bv(n,i,a,c,m){if(m){if(typeof c=="function"){var v=c;c=function(){var de=sl(T);v.call(de)}}var T=Kp(i,c,n,0,null,!1,!1,"",Qp);return n._reactRootContainer=T,n[Ni]=T.current,_a(n.nodeType===8?n.parentNode:n),Br(),T}for(;m=n.lastChild;)n.removeChild(m);if(typeof c=="function"){var B=c;c=function(){var de=sl(W);B.call(de)}}var W=Lu(n,0,!1,null,null,!1,!1,"",Qp);return n._reactRootContainer=W,n[Ni]=W.current,_a(n.nodeType===8?n.parentNode:n),Br(function(){rl(i,W,a,c)}),W}function ll(n,i,a,c,m){var v=a._reactRootContainer;if(v){var T=v;if(typeof m=="function"){var B=m;m=function(){var W=sl(T);B.call(W)}}rl(i,T,n,m)}else T=bv(a,i,n,m,c);return sl(T)}Lh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Jt(i.pendingLanes);a!==0&&(sc(i,a|1),Dn(i,De()),(Tt&6)===0&&(Rs=De()+500,ar()))}break;case 13:Br(function(){var c=Ii(n,1);if(c!==null){var m=wn();ui(c,n,1,m)}}),Du(n,1)}},ac=function(n){if(n.tag===13){var i=Ii(n,134217728);if(i!==null){var a=wn();ui(i,n,134217728,a)}Du(n,134217728)}},Dh=function(n){if(n.tag===13){var i=hr(n),a=Ii(n,i);if(a!==null){var c=wn();ui(a,n,i,c)}Du(n,i)}},Ih=function(){return Lt},Uh=function(n,i){var a=Lt;try{return Lt=n,i()}finally{Lt=a}},Ve=function(n,i,a){switch(i){case"input":if(Pe(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var m=Eo(c);if(!m)throw Error(t(90));ae(c),Pe(c,m)}}}break;case"textarea":Se(n,a);break;case"select":i=a.value,i!=null&&k(n,!!a.multiple,i,!1)}},zt=Tu,Zt=Br;var Ev={usingClientEntryPoint:!1,Events:[Ma,xs,Eo,We,mt,Tu]},ka={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tv={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=L(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||wv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cl.isDisabled&&cl.supportsFiber)try{Nt=cl.inject(Tv),wt=cl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ev,In.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uu(i))throw Error(t(200));return Mv(n,i,null,a)},In.createRoot=function(n,i){if(!Uu(n))throw Error(t(299));var a=!1,c="",m=Jp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(m=i.onRecoverableError)),i=Lu(n,1,!1,null,null,a,!1,c,m),n[Ni]=i.current,_a(n.nodeType===8?n.parentNode:n),new Iu(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=L(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Br(n)},In.hydrate=function(n,i,a){if(!ol(i))throw Error(t(200));return ll(null,n,i,!0,a)},In.hydrateRoot=function(n,i,a){if(!Uu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,m=!1,v="",T=Jp;if(a!=null&&(a.unstable_strictMode===!0&&(m=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Kp(i,null,n,1,a??null,m,!1,v,T),n[Ni]=i.current,_a(n),c)for(n=0;n<c.length;n++)a=c[n],m=a._getVersion,m=m(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,m]:i.mutableSourceEagerHydrationData.push(a,m);return new al(i)},In.render=function(n,i,a){if(!ol(i))throw Error(t(200));return ll(null,n,i,!1,a)},In.unmountComponentAtNode=function(n){if(!ol(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){ll(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},In.unstable_batchedUpdates=Tu,In.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ol(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ll(n,i,a,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var om;function Iv(){if(om)return Ou.exports;om=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ou.exports=Dv(),Ou.exports}var lm;function Uv(){if(lm)return ul;lm=1;var s=Iv();return ul.createRoot=s.createRoot,ul.hydrateRoot=s.hydrateRoot,ul}var kv=Uv();const Fv=_0(kv);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function zv(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Ov(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=s=>{const e=Bv(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ju(s){return s!=null}function Hv(s,e={}){var y,M;const t=e.attributeNames??{},r=b=>t[b]??b,o=s.size??s.width??Gr.width,l=s.size??s.height??Gr.height,u=((y=s.aliases)==null?void 0:y.filter(b=>typeof b=="string"&&b.trim()!=="").map(b=>`lucide-${b}`))??[],d=[...s.name?[`lucide-${s.name}`]:[],...u],p=((M=e.className)==null?void 0:M.split(" ").filter(Boolean))??[],f=e.includeDefaultClasses===!1?bd(...p):bd("lucide",...d,...p),x=e.absoluteStrokeWidth?Number(e.strokeWidth??Gr["stroke-width"])*Number(s.size??s.width??Gr.width)/Number(e.size??e.width??Gr.width):e.strokeWidth??Gr["stroke-width"];return["svg",{...Object.entries(Gr).reduce((b,[E,S])=>(b[r(E)]=S,b),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&ju(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&ju(e.width)&&{[r("width")]:e.width},..."height"in e&&ju(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:x,...f&&{[r("class")]:f},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(b=>{const[E,S,g]=b,P=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...S}:S;return g?[E,P,g]:[E,P]})]}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Vv(s,e={}){return Hv(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},Wv=Fe.createContext({}),Xv=()=>Fe.useContext(Wv),$v=Fe.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:d="",children:p,iconNode:f=[],icon:x={node:f,aliases:[],size:24},..._},y)=>{const{size:M=24,strokeWidth:b=2,absoluteStrokeWidth:E=!1,nonScalingStroke:S=!1,color:g="currentColor",className:P=""}=Xv()??{},D=!!p||Gv(_),[C,$,z=[]]=Vv(x,{color:s??g,width:t??e??M,height:r??e??M,strokeWidth:o??b,absoluteStrokeWidth:l??E,nonScalingStroke:u??S,className:bd(P,d),hasA11yProp:D,attributes:_});return Fe.createElement(C,{ref:y,...$},[...z.map(([O,U])=>Fe.createElement(O,U)),...Array.isArray(p)?p:[p]])});/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function yt(s,e=[],t=[]){const r=typeof s=="string"?zv(s,e,t):s,o=Fe.forwardRef(({className:l,...u},d)=>Fe.createElement($v,{ref:d,icon:r,className:l,...u}));return r.name&&(o.displayName=jv(r.name)),o}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};S0.node;const Zl=yt(S0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0={name:"ban",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M4.929 4.929 19.07 19.071",key:"196cmz"}]]};M0.node;const qv=yt(M0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};w0.node;const Hl=yt(w0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};b0.node;const Cr=yt(b0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};E0.node;const Yv=yt(E0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};T0.node;const Vl=yt(T0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};C0.node;const A0=yt(C0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};R0.node;const N0=yt(R0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}],["path",{d:"M6 14h2",key:"mk7k0u"}]]};P0.node;const cm=yt(P0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0={name:"dollar-sign",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6",key:"pwzcbw"}]]};L0.node;const Kv=yt(L0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};D0.node;const Zv=yt(D0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};I0.node;const Jv=yt(I0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};U0.node;const Qv=yt(U0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};k0.node;const fh=yt(k0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};F0.node;const e_=yt(F0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};O0.node;const t_=yt(O0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};z0.node;const n_=yt(z0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};B0.node;const i_=yt(B0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0={name:"minus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}]]};j0.node;const r_=yt(j0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0={name:"package",size:24,node:[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]};H0.node;const s_=yt(H0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};V0.node;const a_=yt(V0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};G0.node;const o_=yt(G0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};W0.node;const l_=yt(W0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};X0.node;const $0=yt(X0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};q0.node;const Ed=yt(q0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0={name:"rotate-ccw",size:24,node:[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]};Y0.node;const c_=yt(Y0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0={name:"ruler",size:24,node:[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]};K0.node;const Td=yt(K0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};Z0.node;const J0=yt(Z0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};Q0.node;const Jl=yt(Q0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex={name:"shopping-bag",size:24,node:[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]]};ex.node;const Ys=yt(ex);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};tx.node;const u_=yt(tx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};nx.node;const Ya=yt(nx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};ix.node;const d_=yt(ix);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx={name:"sun-medium",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]};rx.node;const h_=yt(rx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};sx.node;const f_=yt(sx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};ax.node;const ph=yt(ax);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox={name:"truck",size:24,node:[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]};ox.node;const Gl=yt(ox);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};lx.node;const p_=yt(lx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};cx.node;const m_=yt(cx);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};ux.node;const Qa=yt(ux);function x_({currentView:s,onNavigate:e,cartCount:t=0,onOpenCart:r,savedCount:o=0}){const[l,u]=y0.useState(!1),d=[{id:"studio",label:"3D Studio",icon:Cr},{id:"catalog",label:"Collections",icon:N0},{id:"wardrobe",label:"Saved Wardrobe",icon:Hl,badge:o},{id:"tracking",label:"Track Order",icon:Gl},{id:"admin",label:"Admin Studio",icon:Jl}],p=f=>{e(f),u(!1)};return h.jsxs("header",{className:"sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 backdrop-blur-xl",children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[h.jsxs("div",{onClick:()=>p("studio"),className:"flex items-center space-x-3 cursor-pointer group",children:[h.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-neon via-brand-cyan to-brand-violet p-0.5 shadow-glow-neon group-hover:scale-105 transition",children:h.jsx("div",{className:"w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center",children:h.jsx(Cr,{className:"w-5 h-5 text-brand-neon"})})}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"font-display font-extrabold text-lg text-white tracking-wider",children:"ATELIER"}),h.jsx("span",{className:"text-[11px] font-mono px-1.5 py-0.2 rounded bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 font-bold",children:"3D"})]}),h.jsx("p",{className:"text-[9px] font-mono text-slate-400 tracking-widest uppercase",children:"Next-Gen Fashion Lab"})]})]}),h.jsx("nav",{className:"hidden md:flex items-center space-x-1 glass-panel-subtle px-3 py-1.5 rounded-full border border-slate-800",children:d.map(f=>{const x=f.icon,_=s===f.id;return h.jsxs("button",{onClick:()=>p(f.id),className:`relative flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${_?"text-dark-950 bg-brand-neon shadow-glow-neon":"text-slate-300 hover:text-white hover:bg-slate-800/60"}`,children:[h.jsx(x,{className:`w-3.5 h-3.5 ${_?"text-dark-950":"text-slate-400"}`}),h.jsx("span",{children:f.label}),f.badge>0&&!_&&h.jsx("span",{className:"w-4 h-4 rounded-full bg-brand-cyan text-dark-950 text-[10px] font-bold flex items-center justify-center",children:f.badge})]},f.id)})}),h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsxs("button",{onClick:r,className:"relative flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel border border-slate-700/80 hover:border-brand-neon/60 text-slate-200 hover:text-white transition group",children:[h.jsx(Ys,{className:"w-4 h-4 text-brand-neon group-hover:scale-110 transition"}),h.jsx("span",{className:"text-xs font-semibold hidden sm:inline",children:"Bag"}),t>0&&h.jsx("span",{className:"w-5 h-5 rounded-full bg-brand-neon text-dark-950 font-display font-extrabold text-xs flex items-center justify-center",children:t})]}),h.jsx("button",{onClick:()=>u(!l),className:"md:hidden p-2 rounded-xl glass-panel border border-slate-700 text-slate-300",children:l?h.jsx(Qa,{className:"w-5 h-5"}):h.jsx(n_,{className:"w-5 h-5"})})]})]}),l&&h.jsx("div",{className:"md:hidden border-t border-slate-800 bg-dark-900/95 backdrop-blur-xl px-4 py-4 space-y-2",children:d.map(f=>{const x=f.icon,_=s===f.id;return h.jsxs("button",{onClick:()=>p(f.id),className:`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition ${_?"bg-brand-neon text-dark-950 font-bold":"text-slate-300 hover:bg-slate-800"}`,children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx(x,{className:"w-4 h-4"}),h.jsx("span",{children:f.label})]}),f.badge>0&&h.jsx("span",{className:"px-2 py-0.5 rounded-full bg-brand-cyan text-dark-950 text-xs font-bold",children:f.badge})]},f.id)})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="170",g_=0,um=1,v_=2,dx=1,hx=2,Vi=3,Ar=0,En=1,Gn=2,Er=0,Xs=1,dm=2,hm=3,fm=4,__=5,Qr=100,y_=101,S_=102,M_=103,w_=104,b_=200,E_=201,T_=202,C_=203,Cd=204,Ad=205,A_=206,R_=207,N_=208,P_=209,L_=210,D_=211,I_=212,U_=213,k_=214,Rd=0,Nd=1,Pd=2,Ks=3,Ld=4,Dd=5,Id=6,Ud=7,fx=0,F_=1,O_=2,Tr=0,z_=1,B_=2,j_=3,px=4,H_=5,V_=6,G_=7,mx=300,Zs=301,Js=302,kd=303,Fd=304,Ql=306,is=1e3,ts=1001,Od=1002,xi=1003,W_=1004,dl=1005,bi=1006,Hu=1007,ns=1008,$i=1009,xx=1010,gx=1011,Ka=1012,xh=1013,rs=1014,Gi=1015,eo=1016,gh=1017,vh=1018,Qs=1020,vx=35902,_x=1021,yx=1022,mi=1023,Sx=1024,Mx=1025,$s=1026,ea=1027,wx=1028,_h=1029,bx=1030,yh=1031,Sh=1033,kl=33776,Fl=33777,Ol=33778,zl=33779,zd=35840,Bd=35841,jd=35842,Hd=35843,Vd=36196,Gd=37492,Wd=37496,Xd=37808,$d=37809,qd=37810,Yd=37811,Kd=37812,Zd=37813,Jd=37814,Qd=37815,eh=37816,th=37817,nh=37818,ih=37819,rh=37820,sh=37821,Bl=36492,ah=36494,oh=36495,Ex=36283,lh=36284,ch=36285,uh=36286,X_=3200,$_=3201,Tx=0,q_=1,br="",ni="srgb",na="srgb-linear",ec="linear",Dt="srgb",Ps=7680,pm=519,Y_=512,K_=513,Z_=514,Cx=515,J_=516,Q_=517,ey=518,ty=519,mm=35044,xm="300 es",Wi=2e3,Wl=2001;class ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vu=Math.PI/180,Xl=180/Math.PI;function to(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function _n(s,e,t){return Math.max(e,Math.min(t,s))}function ny(s,e){return(s%e+e)%e}function Gu(s,e,t){return(1-t)*s+t*e}function Oa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_n(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,r,o,l,u,d,p,f){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,f)}set(e,t,r,o,l,u,d,p,f){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],f=r[1],x=r[4],_=r[7],y=r[2],M=r[5],b=r[8],E=o[0],S=o[3],g=o[6],P=o[1],D=o[4],C=o[7],$=o[2],z=o[5],O=o[8];return l[0]=u*E+d*P+p*$,l[3]=u*S+d*D+p*z,l[6]=u*g+d*C+p*O,l[1]=f*E+x*P+_*$,l[4]=f*S+x*D+_*z,l[7]=f*g+x*C+_*O,l[2]=y*E+M*P+b*$,l[5]=y*S+M*D+b*z,l[8]=y*g+M*C+b*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],f=e[7],x=e[8];return t*u*x-t*d*f-r*l*x+r*d*p+o*l*f-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],f=e[7],x=e[8],_=x*u-d*f,y=d*p-x*l,M=f*l-u*p,b=t*_+r*y+o*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=_*E,e[1]=(o*f-x*r)*E,e[2]=(d*r-o*u)*E,e[3]=y*E,e[4]=(x*t-o*p)*E,e[5]=(o*l-d*t)*E,e[6]=M*E,e[7]=(r*p-f*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),f=Math.sin(l);return this.set(r*p,r*f,-r*(p*u+f*d)+u+e,-o*f,o*p,-o*(-f*u+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wu=new vt;function Ax(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $l(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function iy(){const s=$l("canvas");return s.style.display="block",s}const gm={};function Wa(s){s in gm||(gm[s]=!0,console.warn(s))}function ry(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function sy(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ay(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ct={enabled:!0,workingColorSpace:na,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===br?ec:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const vm=[.64,.33,.3,.6,.15,.06],_m=[.2126,.7152,.0722],ym=[.3127,.329],Sm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mm=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ct.define({[na]:{primaries:vm,whitePoint:ym,transfer:ec,toXYZ:Sm,fromXYZ:Mm,luminanceCoefficients:_m,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:vm,whitePoint:ym,transfer:Dt,toXYZ:Sm,fromXYZ:Mm,luminanceCoefficients:_m,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let Ls;class oy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=$l("canvas")),Ls.width=e.width,Ls.height=e.height;const r=Ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$l("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Xi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ly=0;class Rx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Xu(o[u].image)):l.push(Xu(o[u]))}else l=Xu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Xu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?oy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cy=0;class Tn extends ia{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,r=ts,o=ts,l=bi,u=ns,d=mi,p=$i,f=Tn.DEFAULT_ANISOTROPY,x=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=to(),this.name="",this.source=new Rx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=mx;Tn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,r=0,o=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,f=p[0],x=p[4],_=p[8],y=p[1],M=p[5],b=p[9],E=p[2],S=p[6],g=p[10];if(Math.abs(x-y)<.01&&Math.abs(_-E)<.01&&Math.abs(b-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+E)<.1&&Math.abs(b+S)<.1&&Math.abs(f+M+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(f+1)/2,C=(M+1)/2,$=(g+1)/2,z=(x+y)/4,O=(_+E)/4,U=(b+S)/4;return D>C&&D>$?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=z/r,l=O/r):C>$?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=z/o,l=U/o):$<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt($),r=O/l,o=U/l),this.set(r,o,l,t),this}let P=Math.sqrt((S-b)*(S-b)+(_-E)*(_-E)+(y-x)*(y-x));return Math.abs(P)<.001&&(P=1),this.x=(S-b)/P,this.y=(_-E)/P,this.z=(y-x)/P,this.w=Math.acos((f+M+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uy extends ia{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Tn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Rx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends uy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Nx extends Tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xi,this.minFilter=xi,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dy extends Tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xi,this.minFilter=xi,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],f=r[o+1],x=r[o+2],_=r[o+3];const y=l[u+0],M=l[u+1],b=l[u+2],E=l[u+3];if(d===0){e[t+0]=p,e[t+1]=f,e[t+2]=x,e[t+3]=_;return}if(d===1){e[t+0]=y,e[t+1]=M,e[t+2]=b,e[t+3]=E;return}if(_!==E||p!==y||f!==M||x!==b){let S=1-d;const g=p*y+f*M+x*b+_*E,P=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const $=Math.sqrt(D),z=Math.atan2($,g*P);S=Math.sin(S*z)/$,d=Math.sin(d*z)/$}const C=d*P;if(p=p*S+y*C,f=f*S+M*C,x=x*S+b*C,_=_*S+E*C,S===1-d){const $=1/Math.sqrt(p*p+f*f+x*x+_*_);p*=$,f*=$,x*=$,_*=$}}e[t]=p,e[t+1]=f,e[t+2]=x,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],f=r[o+2],x=r[o+3],_=l[u],y=l[u+1],M=l[u+2],b=l[u+3];return e[t]=d*b+x*_+p*M-f*y,e[t+1]=p*b+x*y+f*_-d*M,e[t+2]=f*b+x*M+d*y-p*_,e[t+3]=x*b-d*_-p*y-f*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,f=d(r/2),x=d(o/2),_=d(l/2),y=p(r/2),M=p(o/2),b=p(l/2);switch(u){case"XYZ":this._x=y*x*_+f*M*b,this._y=f*M*_-y*x*b,this._z=f*x*b+y*M*_,this._w=f*x*_-y*M*b;break;case"YXZ":this._x=y*x*_+f*M*b,this._y=f*M*_-y*x*b,this._z=f*x*b-y*M*_,this._w=f*x*_+y*M*b;break;case"ZXY":this._x=y*x*_-f*M*b,this._y=f*M*_+y*x*b,this._z=f*x*b+y*M*_,this._w=f*x*_-y*M*b;break;case"ZYX":this._x=y*x*_-f*M*b,this._y=f*M*_+y*x*b,this._z=f*x*b-y*M*_,this._w=f*x*_+y*M*b;break;case"YZX":this._x=y*x*_+f*M*b,this._y=f*M*_+y*x*b,this._z=f*x*b-y*M*_,this._w=f*x*_-y*M*b;break;case"XZY":this._x=y*x*_-f*M*b,this._y=f*M*_-y*x*b,this._z=f*x*b+y*M*_,this._w=f*x*_+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],f=t[2],x=t[6],_=t[10],y=r+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-f)*M,this._z=(u-o)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(x-p)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+f)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(l-f)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(u-o)/M,this._x=(l+f)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,f=t._z,x=t._w;return this._x=r*x+u*d+o*f-l*p,this._y=o*x+u*p+l*d-r*f,this._z=l*x+u*f+r*p-o*d,this._w=u*x-r*d-o*p-l*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*r+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const f=Math.sqrt(p),x=Math.atan2(f,d),_=Math.sin((1-t)*x)/f,y=Math.sin(t*x)/f;return this._w=u*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,f=2*(u*o-d*r),x=2*(d*t-l*o),_=2*(l*r-u*t);return this.x=t+p*f+u*_-d*x,this.y=r+p*x+d*f-l*_,this.z=o+p*_+l*x-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $u.copy(this).projectOnVector(e),this.sub($u)}reflect(e){return this.sub($u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_n(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $u=new X,wm=new no;class io{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,di):di.fromBufferAttribute(l,u),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hl.copy(r.boundingBox)),hl.applyMatrix4(e.matrixWorld),this.union(hl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),fl.subVectors(this.max,za),Ds.subVectors(e.a,za),Is.subVectors(e.b,za),Us.subVectors(e.c,za),xr.subVectors(Is,Ds),gr.subVectors(Us,Is),Wr.subVectors(Ds,Us);let t=[0,-xr.z,xr.y,0,-gr.z,gr.y,0,-Wr.z,Wr.y,xr.z,0,-xr.x,gr.z,0,-gr.x,Wr.z,0,-Wr.x,-xr.y,xr.x,0,-gr.y,gr.x,0,-Wr.y,Wr.x,0];return!qu(t,Ds,Is,Us,fl)||(t=[1,0,0,0,1,0,0,0,1],!qu(t,Ds,Is,Us,fl))?!1:(pl.crossVectors(xr,gr),t=[pl.x,pl.y,pl.z],qu(t,Ds,Is,Us,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new X,new X,new X,new X,new X,new X,new X,new X],di=new X,hl=new io,Ds=new X,Is=new X,Us=new X,xr=new X,gr=new X,Wr=new X,za=new X,fl=new X,pl=new X,Xr=new X;function qu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Xr.fromArray(s,l);const d=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),p=e.dot(Xr),f=t.dot(Xr),x=r.dot(Xr);if(Math.max(-Math.max(p,f,x),Math.min(p,f,x))>d)return!1}return!0}const hy=new io,Ba=new X,Yu=new X;class tc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):hy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ba,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(Yu)),this.expandByPoint(Ba.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new X,Ku=new X,ml=new X,vr=new X,Zu=new X,xl=new X,Ju=new X;class Px{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Ku.copy(e).add(t).multiplyScalar(.5),ml.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Ku);const l=e.distanceTo(t)*.5,u=-this.direction.dot(ml),d=vr.dot(this.direction),p=-vr.dot(ml),f=vr.lengthSq(),x=Math.abs(1-u*u);let _,y,M,b;if(x>0)if(_=u*p-d,y=u*d-p,b=l*x,_>=0)if(y>=-b)if(y<=b){const E=1/x;_*=E,y*=E,M=_*(_+u*y+2*d)+y*(u*_+y+2*p)+f}else y=l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*p)+f;else y=-l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*p)+f;else y<=-b?(_=Math.max(0,-(-u*l+d)),y=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+y*(y+2*p)+f):y<=b?(_=0,y=Math.min(Math.max(-l,-p),l),M=y*(y+2*p)+f):(_=Math.max(0,-(u*l+d)),y=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+y*(y+2*p)+f);else y=u>0?-l:l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*p)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ku).addScaledVector(ml,y),M}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const r=zi.dot(this.direction),o=zi.dot(zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const f=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return f>=0?(r=(e.min.x-y.x)*f,o=(e.max.x-y.x)*f):(r=(e.max.x-y.x)*f,o=(e.min.x-y.x)*f),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-y.z)*_,p=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,p=(e.min.z-y.z)*_),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,r,o,l){Zu.subVectors(t,e),xl.subVectors(r,e),Ju.crossVectors(Zu,xl);let u=this.direction.dot(Ju),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;vr.subVectors(this.origin,e);const p=d*this.direction.dot(xl.crossVectors(vr,xl));if(p<0)return null;const f=d*this.direction.dot(Zu.cross(vr));if(f<0||p+f>u)return null;const x=-d*vr.dot(Ju);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,o,l,u,d,p,f,x,_,y,M,b,E,S){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,f,x,_,y,M,b,E,S)}set(e,t,r,o,l,u,d,p,f,x,_,y,M,b,E,S){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=o,g[1]=l,g[5]=u,g[9]=d,g[13]=p,g[2]=f,g[6]=x,g[10]=_,g[14]=y,g[3]=M,g[7]=b,g[11]=E,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),f=Math.sin(o),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=u*x,M=u*_,b=d*x,E=d*_;t[0]=p*x,t[4]=-p*_,t[8]=f,t[1]=M+b*f,t[5]=y-E*f,t[9]=-d*p,t[2]=E-y*f,t[6]=b+M*f,t[10]=u*p}else if(e.order==="YXZ"){const y=p*x,M=p*_,b=f*x,E=f*_;t[0]=y+E*d,t[4]=b*d-M,t[8]=u*f,t[1]=u*_,t[5]=u*x,t[9]=-d,t[2]=M*d-b,t[6]=E+y*d,t[10]=u*p}else if(e.order==="ZXY"){const y=p*x,M=p*_,b=f*x,E=f*_;t[0]=y-E*d,t[4]=-u*_,t[8]=b+M*d,t[1]=M+b*d,t[5]=u*x,t[9]=E-y*d,t[2]=-u*f,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const y=u*x,M=u*_,b=d*x,E=d*_;t[0]=p*x,t[4]=b*f-M,t[8]=y*f+E,t[1]=p*_,t[5]=E*f+y,t[9]=M*f-b,t[2]=-f,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const y=u*p,M=u*f,b=d*p,E=d*f;t[0]=p*x,t[4]=E-y*_,t[8]=b*_+M,t[1]=_,t[5]=u*x,t[9]=-d*x,t[2]=-f*x,t[6]=M*_+b,t[10]=y-E*_}else if(e.order==="XZY"){const y=u*p,M=u*f,b=d*p,E=d*f;t[0]=p*x,t[4]=-_,t[8]=f*x,t[1]=y*_+E,t[5]=u*x,t[9]=M*_-b,t[2]=b*_-M,t[6]=d*x,t[10]=E*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fy,e,py)}lookAt(e,t,r){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),_r.crossVectors(r,Hn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),_r.crossVectors(r,Hn)),_r.normalize(),gl.crossVectors(Hn,_r),o[0]=_r.x,o[4]=gl.x,o[8]=Hn.x,o[1]=_r.y,o[5]=gl.y,o[9]=Hn.y,o[2]=_r.z,o[6]=gl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],f=r[12],x=r[1],_=r[5],y=r[9],M=r[13],b=r[2],E=r[6],S=r[10],g=r[14],P=r[3],D=r[7],C=r[11],$=r[15],z=o[0],O=o[4],U=o[8],N=o[12],R=o[1],j=o[5],te=o[9],Z=o[13],pe=o[2],xe=o[6],ne=o[10],le=o[14],V=o[3],ce=o[7],I=o[11],w=o[15];return l[0]=u*z+d*R+p*pe+f*V,l[4]=u*O+d*j+p*xe+f*ce,l[8]=u*U+d*te+p*ne+f*I,l[12]=u*N+d*Z+p*le+f*w,l[1]=x*z+_*R+y*pe+M*V,l[5]=x*O+_*j+y*xe+M*ce,l[9]=x*U+_*te+y*ne+M*I,l[13]=x*N+_*Z+y*le+M*w,l[2]=b*z+E*R+S*pe+g*V,l[6]=b*O+E*j+S*xe+g*ce,l[10]=b*U+E*te+S*ne+g*I,l[14]=b*N+E*Z+S*le+g*w,l[3]=P*z+D*R+C*pe+$*V,l[7]=P*O+D*j+C*xe+$*ce,l[11]=P*U+D*te+C*ne+$*I,l[15]=P*N+D*Z+C*le+$*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],f=e[13],x=e[2],_=e[6],y=e[10],M=e[14],b=e[3],E=e[7],S=e[11],g=e[15];return b*(+l*p*_-o*f*_-l*d*y+r*f*y+o*d*M-r*p*M)+E*(+t*p*M-t*f*y+l*u*y-o*u*M+o*f*x-l*p*x)+S*(+t*f*_-t*d*M-l*u*_+r*u*M+l*d*x-r*f*x)+g*(-o*d*x-t*p*_+t*d*y+o*u*_-r*u*y+r*p*x)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],f=e[7],x=e[8],_=e[9],y=e[10],M=e[11],b=e[12],E=e[13],S=e[14],g=e[15],P=_*S*f-E*y*f+E*p*M-d*S*M-_*p*g+d*y*g,D=b*y*f-x*S*f-b*p*M+u*S*M+x*p*g-u*y*g,C=x*E*f-b*_*f+b*d*M-u*E*M-x*d*g+u*_*g,$=b*_*p-x*E*p-b*d*y+u*E*y+x*d*S-u*_*S,z=t*P+r*D+o*C+l*$;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/z;return e[0]=P*O,e[1]=(E*y*l-_*S*l-E*o*M+r*S*M+_*o*g-r*y*g)*O,e[2]=(d*S*l-E*p*l+E*o*f-r*S*f-d*o*g+r*p*g)*O,e[3]=(_*p*l-d*y*l-_*o*f+r*y*f+d*o*M-r*p*M)*O,e[4]=D*O,e[5]=(x*S*l-b*y*l+b*o*M-t*S*M-x*o*g+t*y*g)*O,e[6]=(b*p*l-u*S*l-b*o*f+t*S*f+u*o*g-t*p*g)*O,e[7]=(u*y*l-x*p*l+x*o*f-t*y*f-u*o*M+t*p*M)*O,e[8]=C*O,e[9]=(b*_*l-x*E*l-b*r*M+t*E*M+x*r*g-t*_*g)*O,e[10]=(u*E*l-b*d*l+b*r*f-t*E*f-u*r*g+t*d*g)*O,e[11]=(x*d*l-u*_*l-x*r*f+t*_*f+u*r*M-t*d*M)*O,e[12]=$*O,e[13]=(x*E*o-b*_*o+b*r*y-t*E*y-x*r*S+t*_*S)*O,e[14]=(b*d*o-u*E*o-b*r*p+t*E*p+u*r*S-t*d*S)*O,e[15]=(u*_*o-x*d*o+x*r*p-t*_*p-u*r*y+t*d*y)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,f=l*u,x=l*d;return this.set(f*u+r,f*d-o*p,f*p+o*d,0,f*d+o*p,x*d+r,x*p-o*u,0,f*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,f=l+l,x=u+u,_=d+d,y=l*f,M=l*x,b=l*_,E=u*x,S=u*_,g=d*_,P=p*f,D=p*x,C=p*_,$=r.x,z=r.y,O=r.z;return o[0]=(1-(E+g))*$,o[1]=(M+C)*$,o[2]=(b-D)*$,o[3]=0,o[4]=(M-C)*z,o[5]=(1-(y+g))*z,o[6]=(S+P)*z,o[7]=0,o[8]=(b+D)*O,o[9]=(S-P)*O,o[10]=(1-(y+E))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=ks.set(o[0],o[1],o[2]).length();const u=ks.set(o[4],o[5],o[6]).length(),d=ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],hi.copy(this);const f=1/l,x=1/u,_=1/d;return hi.elements[0]*=f,hi.elements[1]*=f,hi.elements[2]*=f,hi.elements[4]*=x,hi.elements[5]*=x,hi.elements[6]*=x,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,t.setFromRotationMatrix(hi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Wi){const p=this.elements,f=2*l/(t-e),x=2*l/(r-o),_=(t+e)/(t-e),y=(r+o)/(r-o);let M,b;if(d===Wi)M=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(d===Wl)M=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=f,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Wi){const p=this.elements,f=1/(t-e),x=1/(r-o),_=1/(u-l),y=(t+e)*f,M=(r+o)*x;let b,E;if(d===Wi)b=(u+l)*_,E=-2*_;else if(d===Wl)b=l*_,E=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*f,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=E,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ks=new X,hi=new Ht,fy=new X(0,0,0),py=new X(1,1,1),_r=new X,gl=new X,Hn=new X,bm=new Ht,Em=new no;class Ti{constructor(e=0,t=0,r=0,o=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],f=o[5],x=o[9],_=o[2],y=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(_n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,f),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,f)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(_n(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-_n(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(_n(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,f),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,f),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Em.setFromEuler(this),this.setFromQuaternion(Em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Lx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let my=0;const Tm=new X,Fs=new no,Bi=new Ht,vl=new X,ja=new X,xy=new X,gy=new no,Cm=new X(1,0,0),Am=new X(0,1,0),Rm=new X(0,0,1),Nm={type:"added"},vy={type:"removed"},Os={type:"childadded",child:null},Qu={type:"childremoved",child:null};class tn extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new X,t=new Ti,r=new no,o=new X(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new vt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vl.copy(e):vl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ja,vl,this.up):Bi.lookAt(vl,ja,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nm),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vy),Qu.child=e,this.dispatchEvent(Qu),Qu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nm),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,xy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,gy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let f=0,x=p.length;f<x;f++){const _=p[f];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,f=this.material.length;p<f;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),f=u(e.textures),x=u(e.images),_=u(e.shapes),y=u(e.skeletons),M=u(e.animations),b=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),f.length>0&&(r.textures=f),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=o,r;function u(d){const p=[];for(const f in d){const x=d[f];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}tn.DEFAULT_UP=new X(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new X,ji=new X,ed=new X,Hi=new X,zs=new X,Bs=new X,Pm=new X,td=new X,nd=new X,id=new X,rd=new It,sd=new It,ad=new It;class pi{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){fi.subVectors(o,t),ji.subVectors(r,t),ed.subVectors(e,t);const u=fi.dot(fi),d=fi.dot(ji),p=fi.dot(ed),f=ji.dot(ji),x=ji.dot(ed),_=u*f-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,M=(f*p-d*x)*y,b=(u*x-d*p)*y;return l.set(1-M-b,b,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,Hi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Hi.x),p.addScaledVector(u,Hi.y),p.addScaledVector(d,Hi.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return rd.setScalar(0),sd.setScalar(0),ad.setScalar(0),rd.fromBufferAttribute(e,t),sd.fromBufferAttribute(e,r),ad.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(rd,l.x),u.addScaledVector(sd,l.y),u.addScaledVector(ad,l.z),u}static isFrontFacing(e,t,r,o){return fi.subVectors(r,t),ji.subVectors(e,t),fi.cross(ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),fi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return pi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;zs.subVectors(o,r),Bs.subVectors(l,r),td.subVectors(e,r);const p=zs.dot(td),f=Bs.dot(td);if(p<=0&&f<=0)return t.copy(r);nd.subVectors(e,o);const x=zs.dot(nd),_=Bs.dot(nd);if(x>=0&&_<=x)return t.copy(o);const y=p*_-x*f;if(y<=0&&p>=0&&x<=0)return u=p/(p-x),t.copy(r).addScaledVector(zs,u);id.subVectors(e,l);const M=zs.dot(id),b=Bs.dot(id);if(b>=0&&M<=b)return t.copy(l);const E=M*f-p*b;if(E<=0&&f>=0&&b<=0)return d=f/(f-b),t.copy(r).addScaledVector(Bs,d);const S=x*b-M*_;if(S<=0&&_-x>=0&&M-b>=0)return Pm.subVectors(l,o),d=(_-x)/(_-x+(M-b)),t.copy(o).addScaledVector(Pm,d);const g=1/(S+E+y);return u=E*g,d=y*g,t.copy(r).addScaledVector(zs,u).addScaledVector(Bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function od(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=ny(e,1),t=_n(t,0,1),r=_n(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=od(u,l,e+1/3),this.g=od(u,l,e),this.b=od(u,l,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=ni){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const r=Dx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Ct.fromWorkingColorSpace(vn.copy(this),e),Math.round(_n(vn.r*255,0,255))*65536+Math.round(_n(vn.g*255,0,255))*256+Math.round(_n(vn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(vn.copy(this),t);const r=vn.r,o=vn.g,l=vn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,f;const x=(d+u)/2;if(d===u)p=0,f=0;else{const _=u-d;switch(f=x<=.5?_/(u+d):_/(2-u-d),u){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=f,e.l=x,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ni){Ct.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,r=vn.g,o=vn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(_l);const r=Gu(yr.h,_l.h,t),o=Gu(yr.s,_l.s,t),l=Gu(yr.l,_l.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new St;St.NAMES=Dx;let _y=0;class ra extends ia{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=to(),this.name="",this.blending=Xs,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Ad,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==Ad&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ql extends ra{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=fx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new X,yl=new ct;class Ei{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=mm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Oa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mm&&(e.usage=this.usage),e}}class Ix extends Ei{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ux extends Ei{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ot extends Ei{constructor(e,t,r){super(new Float32Array(e),t,r)}}let yy=0;const ti=new Ht,ld=new tn,js=new X,Vn=new io,Ha=new io,ln=new X;class Fn extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ax(e)?Ux:Ix)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,r){return ti.makeTranslation(e,t,r),this.applyMatrix4(ti),this}scale(e,t,r){return ti.makeScale(e,t,r),this.applyMatrix4(ti),this}lookAt(e){return ld.lookAt(e),ld.updateMatrix(),this.applyMatrix4(ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ot(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ha.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Vn.min,Ha.min),Vn.expandByPoint(ln),ln.addVectors(Vn.max,Ha.max),Vn.expandByPoint(ln)):(Vn.expandByPoint(Ha.min),Vn.expandByPoint(Ha.max))}Vn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let f=0,x=d.count;f<x;f++)ln.fromBufferAttribute(d,f),p&&(js.fromBufferAttribute(e,f),ln.add(js)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let U=0;U<r.count;U++)d[U]=new X,p[U]=new X;const f=new X,x=new X,_=new X,y=new ct,M=new ct,b=new ct,E=new X,S=new X;function g(U,N,R){f.fromBufferAttribute(r,U),x.fromBufferAttribute(r,N),_.fromBufferAttribute(r,R),y.fromBufferAttribute(l,U),M.fromBufferAttribute(l,N),b.fromBufferAttribute(l,R),x.sub(f),_.sub(f),M.sub(y),b.sub(y);const j=1/(M.x*b.y-b.x*M.y);isFinite(j)&&(E.copy(x).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(j),S.copy(_).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(j),d[U].add(E),d[N].add(E),d[R].add(E),p[U].add(S),p[N].add(S),p[R].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let U=0,N=P.length;U<N;++U){const R=P[U],j=R.start,te=R.count;for(let Z=j,pe=j+te;Z<pe;Z+=3)g(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const D=new X,C=new X,$=new X,z=new X;function O(U){$.fromBufferAttribute(o,U),z.copy($);const N=d[U];D.copy(N),D.sub($.multiplyScalar($.dot(N))).normalize(),C.crossVectors(z,N);const j=C.dot(p[U])<0?-1:1;u.setXYZW(U,D.x,D.y,D.z,j)}for(let U=0,N=P.length;U<N;++U){const R=P[U],j=R.start,te=R.count;for(let Z=j,pe=j+te;Z<pe;Z+=3)O(e.getX(Z+0)),O(e.getX(Z+1)),O(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const o=new X,l=new X,u=new X,d=new X,p=new X,f=new X,x=new X,_=new X;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),E=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,b),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,E),f.fromBufferAttribute(r,S),d.add(x),p.add(x),f.add(x),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(E,p.x,p.y,p.z),r.setXYZ(S,f.x,f.y,f.z)}else for(let y=0,M=t.count;y<M;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,p){const f=d.array,x=d.itemSize,_=d.normalized,y=new f.constructor(p.length*x);let M=0,b=0;for(let E=0,S=p.length;E<S;E++){d.isInterleavedBufferAttribute?M=p[E]*d.data.stride+d.offset:M=p[E]*x;for(let g=0;g<x;g++)y[b++]=f[M++]}return new Ei(y,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],f=e(p,r);t.setAttribute(d,f)}const l=this.morphAttributes;for(const d in l){const p=[],f=l[d];for(let x=0,_=f.length;x<_;x++){const y=f[x],M=e(y,r);p.push(M)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const f=u[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const f in p)p[f]!==void 0&&(e[f]=p[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const f=r[p];e.data.attributes[p]=f.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const f=this.morphAttributes[p],x=[];for(let _=0,y=f.length;_<y;_++){const M=f[_];x.push(M.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const f in o){const x=o[f];this.setAttribute(f,x.clone(t))}const l=e.morphAttributes;for(const f in l){const x=[],_=l[f];for(let y=0,M=_.length;y<M;y++)x.push(_[y].clone(t));this.morphAttributes[f]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,x=u.length;f<x;f++){const _=u[f];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Ht,$r=new Px,Sl=new tc,Dm=new X,Ml=new X,wl=new X,bl=new X,cd=new X,El=new X,Im=new X,Tl=new X;class ke extends tn{constructor(e=new Fn,t=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){El.set(0,0,0);for(let p=0,f=l.length;p<f;p++){const x=d[p],_=l[p];x!==0&&(cd.fromBufferAttribute(_,e),u?El.addScaledVector(cd,x):El.addScaledVector(cd.sub(t),x))}t.add(El)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Sl.copy(r.boundingSphere),Sl.applyMatrix4(l),$r.copy(e.ray).recast(e.near),!(Sl.containsPoint($r.origin)===!1&&($r.intersectSphere(Sl,Dm)===null||$r.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Lm.copy(l).invert(),$r.copy(e.ray).applyMatrix4(Lm),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,f=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let b=0,E=y.length;b<E;b++){const S=y[b],g=u[S.materialIndex],P=Math.max(S.start,M.start),D=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let C=P,$=D;C<$;C+=3){const z=d.getX(C),O=d.getX(C+1),U=d.getX(C+2);o=Cl(this,g,e,r,f,x,_,z,O,U),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let S=b,g=E;S<g;S+=3){const P=d.getX(S),D=d.getX(S+1),C=d.getX(S+2);o=Cl(this,u,e,r,f,x,_,P,D,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let b=0,E=y.length;b<E;b++){const S=y[b],g=u[S.materialIndex],P=Math.max(S.start,M.start),D=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let C=P,$=D;C<$;C+=3){const z=C,O=C+1,U=C+2;o=Cl(this,g,e,r,f,x,_,z,O,U),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const b=Math.max(0,M.start),E=Math.min(p.count,M.start+M.count);for(let S=b,g=E;S<g;S+=3){const P=S,D=S+1,C=S+2;o=Cl(this,u,e,r,f,x,_,P,D,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Sy(s,e,t,r,o,l,u,d){let p;if(e.side===En?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Ar,d),p===null)return null;Tl.copy(d),Tl.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Tl);return f<t.near||f>t.far?null:{distance:f,point:Tl.clone(),object:s}}function Cl(s,e,t,r,o,l,u,d,p,f){s.getVertexPosition(d,Ml),s.getVertexPosition(p,wl),s.getVertexPosition(f,bl);const x=Sy(s,e,t,r,Ml,wl,bl,Im);if(x){const _=new X;pi.getBarycoord(Im,Ml,wl,bl,_),o&&(x.uv=pi.getInterpolatedAttribute(o,d,p,f,_,new ct)),l&&(x.uv1=pi.getInterpolatedAttribute(l,d,p,f,_,new ct)),u&&(x.normal=pi.getInterpolatedAttribute(u,d,p,f,_,new X),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:f,normal:new X,materialIndex:0};pi.getNormal(Ml,wl,bl,y.normal),x.face=y,x.barycoord=_}return x}class Xn extends Fn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],f=[],x=[],_=[];let y=0,M=0;b("z","y","x",-1,-1,r,t,e,u,l,0),b("z","y","x",1,-1,r,t,-e,u,l,1),b("x","z","y",1,1,e,r,t,o,u,2),b("x","z","y",1,-1,e,r,-t,o,u,3),b("x","y","z",1,-1,e,t,r,o,l,4),b("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(_,2));function b(E,S,g,P,D,C,$,z,O,U,N){const R=C/O,j=$/U,te=C/2,Z=$/2,pe=z/2,xe=O+1,ne=U+1;let le=0,V=0;const ce=new X;for(let I=0;I<ne;I++){const w=I*j-Z;for(let H=0;H<xe;H++){const ge=H*R-te;ce[E]=ge*P,ce[S]=w*D,ce[g]=pe,f.push(ce.x,ce.y,ce.z),ce[E]=0,ce[S]=0,ce[g]=z>0?1:-1,x.push(ce.x,ce.y,ce.z),_.push(H/O),_.push(1-I/U),le+=1}}for(let I=0;I<U;I++)for(let w=0;w<O;w++){const H=y+w+xe*I,ge=y+w+xe*(I+1),G=y+(w+1)+xe*(I+1),Q=y+(w+1)+xe*I;p.push(H,ge,Q),p.push(ge,G,Q),V+=6}d.addGroup(M,V,N),M+=V,y+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function bn(s){const e={};for(let t=0;t<s.length;t++){const r=ta(s[t]);for(const o in r)e[o]=r[o]}return e}function My(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function kx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const wy={clone:ta,merge:bn};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ey=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends ra{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=Ey,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Fx extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new X,Um=new ct,km=new ct;class kn extends Fx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(Vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Um,km),t.subVectors(km,Um)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,f=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/f,o*=u.width/p,r*=u.height/f}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Vs=1;class Ty extends tn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new kn(Hs,Vs,e,t);o.layers=this.layers,this.add(o);const l=new kn(Hs,Vs,e,t);l.layers=this.layers,this.add(l);const u=new kn(Hs,Vs,e,t);u.layers=this.layers,this.add(u);const d=new kn(Hs,Vs,e,t);d.layers=this.layers,this.add(d);const p=new kn(Hs,Vs,e,t);p.layers=this.layers,this.add(p);const f=new kn(Hs,Vs,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const f of t)this.remove(f);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Wl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,f,x]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,f),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(_,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Ox extends Tn{constructor(e,t,r,o,l,u,d,p,f,x){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,r,o,l,u,d,p,f,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cy extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ox(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Xn(5,5,5),l=new Rr({name:"CubemapFromEquirect",uniforms:ta(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:En,blending:Er});l.uniforms.tEquirect.value=t;const u=new ke(o,l),d=t.minFilter;return t.minFilter===ns&&(t.minFilter=bi),new Ty(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const ud=new X,Ay=new X,Ry=new vt;class Zr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ud.subVectors(r,t).cross(Ay.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ud),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ry.getNormalMatrix(e),o=this.coplanarPoint(ud).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new tc,Al=new X;class Mh{constructor(e=new Zr,t=new Zr,r=new Zr,o=new Zr,l=new Zr,u=new Zr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],p=o[3],f=o[4],x=o[5],_=o[6],y=o[7],M=o[8],b=o[9],E=o[10],S=o[11],g=o[12],P=o[13],D=o[14],C=o[15];if(r[0].setComponents(p-l,y-f,S-M,C-g).normalize(),r[1].setComponents(p+l,y+f,S+M,C+g).normalize(),r[2].setComponents(p+u,y+x,S+b,C+P).normalize(),r[3].setComponents(p-u,y-x,S-b,C-P).normalize(),r[4].setComponents(p-d,y-_,S-E,C-D).normalize(),t===Wi)r[5].setComponents(p+d,y+_,S+E,C+D).normalize();else if(t===Wl)r[5].setComponents(d,_,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Al.x=o.normal.x>0?e.max.x:e.min.x,Al.y=o.normal.y>0?e.max.y:e.min.y,Al.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zx(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ny(s){const e=new WeakMap;function t(d,p){const f=d.array,x=d.usage,_=f.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,f,x),d.onUploadCallback();let M;if(f instanceof Float32Array)M=s.FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=s.SHORT;else if(f instanceof Uint32Array)M=s.UNSIGNED_INT;else if(f instanceof Int32Array)M=s.INT;else if(f instanceof Int8Array)M=s.BYTE;else if(f instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:y,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,f){const x=p.array,_=p.updateRanges;if(s.bindBuffer(f,d),_.length===0)s.bufferSubData(f,0,x);else{_.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<_.length;M++){const b=_[y],E=_[M];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++y,_[y]=E)}_.length=y+1;for(let M=0,b=_.length;M<b;M++){const E=_[M];s.bufferSubData(f,E.start*x.BYTES_PER_ELEMENT,x,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const f=e.get(d);if(f===void 0)e.set(d,t(d,p));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,d,p),f.version=d.version}}return{get:o,remove:l,update:u}}class Xt extends Fn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),f=d+1,x=p+1,_=e/d,y=t/p,M=[],b=[],E=[],S=[];for(let g=0;g<x;g++){const P=g*y-u;for(let D=0;D<f;D++){const C=D*_-l;b.push(C,-P,0),E.push(0,0,1),S.push(D/d),S.push(1-g/p)}}for(let g=0;g<p;g++)for(let P=0;P<d;P++){const D=P+f*g,C=P+f*(g+1),$=P+1+f*(g+1),z=P+1+f*g;M.push(D,C,z),M.push(C,$,z)}this.setIndex(M),this.setAttribute("position",new Ot(b,3)),this.setAttribute("normal",new Ot(E,3)),this.setAttribute("uv",new Ot(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,By=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,eS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oS="gl_FragColor = linearToOutputTexel( gl_FragColor );",lS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ES=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,KS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,e1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,n1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,i1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,a1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,l1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,c1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,d1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,m1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,x1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,v1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,y1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,E1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,A1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,R1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const N1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,W1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,J1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:Py,alphahash_pars_fragment:Ly,alphamap_fragment:Dy,alphamap_pars_fragment:Iy,alphatest_fragment:Uy,alphatest_pars_fragment:ky,aomap_fragment:Fy,aomap_pars_fragment:Oy,batching_pars_vertex:zy,batching_vertex:By,begin_vertex:jy,beginnormal_vertex:Hy,bsdfs:Vy,iridescence_fragment:Gy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:$y,clipping_planes_pars_vertex:qy,clipping_planes_vertex:Yy,color_fragment:Ky,color_pars_fragment:Zy,color_pars_vertex:Jy,color_vertex:Qy,common:eS,cube_uv_reflection_fragment:tS,defaultnormal_vertex:nS,displacementmap_pars_vertex:iS,displacementmap_vertex:rS,emissivemap_fragment:sS,emissivemap_pars_fragment:aS,colorspace_fragment:oS,colorspace_pars_fragment:lS,envmap_fragment:cS,envmap_common_pars_fragment:uS,envmap_pars_fragment:dS,envmap_pars_vertex:hS,envmap_physical_pars_fragment:wS,envmap_vertex:fS,fog_vertex:pS,fog_pars_vertex:mS,fog_fragment:xS,fog_pars_fragment:gS,gradientmap_pars_fragment:vS,lightmap_pars_fragment:_S,lights_lambert_fragment:yS,lights_lambert_pars_fragment:SS,lights_pars_begin:MS,lights_toon_fragment:bS,lights_toon_pars_fragment:ES,lights_phong_fragment:TS,lights_phong_pars_fragment:CS,lights_physical_fragment:AS,lights_physical_pars_fragment:RS,lights_fragment_begin:NS,lights_fragment_maps:PS,lights_fragment_end:LS,logdepthbuf_fragment:DS,logdepthbuf_pars_fragment:IS,logdepthbuf_pars_vertex:US,logdepthbuf_vertex:kS,map_fragment:FS,map_pars_fragment:OS,map_particle_fragment:zS,map_particle_pars_fragment:BS,metalnessmap_fragment:jS,metalnessmap_pars_fragment:HS,morphinstance_vertex:VS,morphcolor_vertex:GS,morphnormal_vertex:WS,morphtarget_pars_vertex:XS,morphtarget_vertex:$S,normal_fragment_begin:qS,normal_fragment_maps:YS,normal_pars_fragment:KS,normal_pars_vertex:ZS,normal_vertex:JS,normalmap_pars_fragment:QS,clearcoat_normal_fragment_begin:e1,clearcoat_normal_fragment_maps:t1,clearcoat_pars_fragment:n1,iridescence_pars_fragment:i1,opaque_fragment:r1,packing:s1,premultiplied_alpha_fragment:a1,project_vertex:o1,dithering_fragment:l1,dithering_pars_fragment:c1,roughnessmap_fragment:u1,roughnessmap_pars_fragment:d1,shadowmap_pars_fragment:h1,shadowmap_pars_vertex:f1,shadowmap_vertex:p1,shadowmask_pars_fragment:m1,skinbase_vertex:x1,skinning_pars_vertex:g1,skinning_vertex:v1,skinnormal_vertex:_1,specularmap_fragment:y1,specularmap_pars_fragment:S1,tonemapping_fragment:M1,tonemapping_pars_fragment:w1,transmission_fragment:b1,transmission_pars_fragment:E1,uv_pars_fragment:T1,uv_pars_vertex:C1,uv_vertex:A1,worldpos_vertex:R1,background_vert:N1,background_frag:P1,backgroundCube_vert:L1,backgroundCube_frag:D1,cube_vert:I1,cube_frag:U1,depth_vert:k1,depth_frag:F1,distanceRGBA_vert:O1,distanceRGBA_frag:z1,equirect_vert:B1,equirect_frag:j1,linedashed_vert:H1,linedashed_frag:V1,meshbasic_vert:G1,meshbasic_frag:W1,meshlambert_vert:X1,meshlambert_frag:$1,meshmatcap_vert:q1,meshmatcap_frag:Y1,meshnormal_vert:K1,meshnormal_frag:Z1,meshphong_vert:J1,meshphong_frag:Q1,meshphysical_vert:eM,meshphysical_frag:tM,meshtoon_vert:nM,meshtoon_frag:iM,points_vert:rM,points_frag:sM,shadow_vert:aM,shadow_frag:oM,sprite_vert:lM,sprite_frag:cM},Ge={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},wi={basic:{uniforms:bn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:bn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:bn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:bn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:bn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new St(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:bn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:bn([Ge.points,Ge.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:bn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:bn([Ge.common,Ge.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:bn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:bn([Ge.sprite,Ge.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:bn([Ge.common,Ge.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:bn([Ge.lights,Ge.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};wi.physical={uniforms:bn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Rl={r:0,b:0,g:0},Yr=new Ti,uM=new Ht;function dM(s,e,t,r,o,l,u){const d=new St(0);let p=l===!0?0:1,f,x,_=null,y=0,M=null;function b(P){let D=P.isScene===!0?P.background:null;return D&&D.isTexture&&(D=(P.backgroundBlurriness>0?t:e).get(D)),D}function E(P){let D=!1;const C=b(P);C===null?g(d,p):C&&C.isColor&&(g(C,1),D=!0);const $=s.xr.getEnvironmentBlendMode();$==="additive"?r.buffers.color.setClear(0,0,0,1,u):$==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(P,D){const C=b(D);C&&(C.isCubeTexture||C.mapping===Ql)?(x===void 0&&(x=new ke(new Xn(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:ta(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function($,z,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Yr.copy(D.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),x.material.uniforms.envMap.value=C,x.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(uM.makeRotationFromEuler(Yr)),x.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Dt,(_!==C||y!==C.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,_=C,y=C.version,M=s.toneMapping),x.layers.enableAll(),P.unshift(x,x.geometry,x.material,0,0,null)):C&&C.isTexture&&(f===void 0&&(f=new ke(new Xt(2,2),new Rr({name:"BackgroundMaterial",uniforms:ta(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=C,f.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,f.material.toneMapped=Ct.getTransfer(C.colorSpace)!==Dt,C.matrixAutoUpdate===!0&&C.updateMatrix(),f.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||y!==C.version||M!==s.toneMapping)&&(f.material.needsUpdate=!0,_=C,y=C.version,M=s.toneMapping),f.layers.enableAll(),P.unshift(f,f.geometry,f.material,0,0,null))}function g(P,D){P.getRGB(Rl,kx(s)),r.buffers.color.setClear(Rl.r,Rl.g,Rl.b,D,u)}return{getClearColor:function(){return d},setClearColor:function(P,D=1){d.set(P),p=D,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,g(d,p)},render:E,addToRenderList:S}}function hM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(R,j,te,Z,pe){let xe=!1;const ne=_(Z,te,j);l!==ne&&(l=ne,f(l.object)),xe=M(R,Z,te,pe),xe&&b(R,Z,te,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(xe||u)&&(u=!1,C(R,j,te,Z),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function p(){return s.createVertexArray()}function f(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function _(R,j,te){const Z=te.wireframe===!0;let pe=r[R.id];pe===void 0&&(pe={},r[R.id]=pe);let xe=pe[j.id];xe===void 0&&(xe={},pe[j.id]=xe);let ne=xe[Z];return ne===void 0&&(ne=y(p()),xe[Z]=ne),ne}function y(R){const j=[],te=[],Z=[];for(let pe=0;pe<t;pe++)j[pe]=0,te[pe]=0,Z[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:Z,object:R,attributes:{},index:null}}function M(R,j,te,Z){const pe=l.attributes,xe=j.attributes;let ne=0;const le=te.getAttributes();for(const V in le)if(le[V].location>=0){const I=pe[V];let w=xe[V];if(w===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(w=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(w=R.instanceColor)),I===void 0||I.attribute!==w||w&&I.data!==w.data)return!0;ne++}return l.attributesNum!==ne||l.index!==Z}function b(R,j,te,Z){const pe={},xe=j.attributes;let ne=0;const le=te.getAttributes();for(const V in le)if(le[V].location>=0){let I=xe[V];I===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(I=R.instanceColor));const w={};w.attribute=I,I&&I.data&&(w.data=I.data),pe[V]=w,ne++}l.attributes=pe,l.attributesNum=ne,l.index=Z}function E(){const R=l.newAttributes;for(let j=0,te=R.length;j<te;j++)R[j]=0}function S(R){g(R,0)}function g(R,j){const te=l.newAttributes,Z=l.enabledAttributes,pe=l.attributeDivisors;te[R]=1,Z[R]===0&&(s.enableVertexAttribArray(R),Z[R]=1),pe[R]!==j&&(s.vertexAttribDivisor(R,j),pe[R]=j)}function P(){const R=l.newAttributes,j=l.enabledAttributes;for(let te=0,Z=j.length;te<Z;te++)j[te]!==R[te]&&(s.disableVertexAttribArray(te),j[te]=0)}function D(R,j,te,Z,pe,xe,ne){ne===!0?s.vertexAttribIPointer(R,j,te,pe,xe):s.vertexAttribPointer(R,j,te,Z,pe,xe)}function C(R,j,te,Z){E();const pe=Z.attributes,xe=te.getAttributes(),ne=j.defaultAttributeValues;for(const le in xe){const V=xe[le];if(V.location>=0){let ce=pe[le];if(ce===void 0&&(le==="instanceMatrix"&&R.instanceMatrix&&(ce=R.instanceMatrix),le==="instanceColor"&&R.instanceColor&&(ce=R.instanceColor)),ce!==void 0){const I=ce.normalized,w=ce.itemSize,H=e.get(ce);if(H===void 0)continue;const ge=H.buffer,G=H.type,Q=H.bytesPerElement,me=G===s.INT||G===s.UNSIGNED_INT||ce.gpuType===xh;if(ce.isInterleavedBufferAttribute){const oe=ce.data,ye=oe.stride,Ee=ce.offset;if(oe.isInstancedInterleavedBuffer){for(let ze=0;ze<V.locationSize;ze++)g(V.location+ze,oe.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ze=0;ze<V.locationSize;ze++)S(V.location+ze);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let ze=0;ze<V.locationSize;ze++)D(V.location+ze,w/V.locationSize,G,I,ye*Q,(Ee+w/V.locationSize*ze)*Q,me)}else{if(ce.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)g(V.location+oe,ce.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let oe=0;oe<V.locationSize;oe++)S(V.location+oe);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let oe=0;oe<V.locationSize;oe++)D(V.location+oe,w/V.locationSize,G,I,w*Q,w/V.locationSize*oe*Q,me)}}else if(ne!==void 0){const I=ne[le];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(V.location,I);break;case 3:s.vertexAttrib3fv(V.location,I);break;case 4:s.vertexAttrib4fv(V.location,I);break;default:s.vertexAttrib1fv(V.location,I)}}}}P()}function $(){U();for(const R in r){const j=r[R];for(const te in j){const Z=j[te];for(const pe in Z)x(Z[pe].object),delete Z[pe];delete j[te]}delete r[R]}}function z(R){if(r[R.id]===void 0)return;const j=r[R.id];for(const te in j){const Z=j[te];for(const pe in Z)x(Z[pe].object),delete Z[pe];delete j[te]}delete r[R.id]}function O(R){for(const j in r){const te=r[j];if(te[R.id]===void 0)continue;const Z=te[R.id];for(const pe in Z)x(Z[pe].object),delete Z[pe];delete te[R.id]}}function U(){N(),u=!0,l!==o&&(l=o,f(l.object))}function N(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:N,dispose:$,releaseStatesOfGeometry:z,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:S,disableUnusedAttributes:P}}function fM(s,e,t){let r;function o(f){r=f}function l(f,x){s.drawArrays(r,f,x),t.update(x,r,1)}function u(f,x,_){_!==0&&(s.drawArraysInstanced(r,f,x,_),t.update(x,r,_))}function d(f,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,x,0,_);let M=0;for(let b=0;b<_;b++)M+=x[b];t.update(M,r,1)}function p(f,x,_,y){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<f.length;b++)u(f[b],x[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(r,f,0,x,0,y,0,_);let b=0;for(let E=0;E<_;E++)b+=x[E]*y[E];t.update(b,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function pM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==mi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const U=O===eo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==$i&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Gi&&!U)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const x=p(f);x!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",x,"instead."),f=x);const _=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),$=b>0,z=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:$,maxSamples:z}}function mM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Zr,d=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||o;return o=y,r=_.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=x(_,y,0)},this.setState=function(_,y,M){const b=_.clippingPlanes,E=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!o||b===null||b.length===0||l&&!S)l?x(null):f();else{const P=l?0:r,D=P*4;let C=g.clippingState||null;p.value=C,C=x(b,y,D,M);for(let $=0;$!==D;++$)C[$]=t[$];g.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function f(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,y,M,b){const E=_!==null?_.length:0;let S=null;if(E!==0){if(S=p.value,b!==!0||S===null){const g=M+E*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(S===null||S.length<g)&&(S=new Float32Array(g));for(let D=0,C=M;D!==E;++D,C+=4)u.copy(_[D]).applyMatrix4(P,d),u.normal.toArray(S,C),S[C+3]=u.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function xM(s){let e=new WeakMap;function t(u,d){return d===kd?u.mapping=Zs:d===Fd&&(u.mapping=Js),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===kd||d===Fd)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const f=new Cy(p.height);return f.fromEquirectangularTexture(s,u),e.set(u,f),u.addEventListener("dispose",o),t(f.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class Bx extends Fx{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=f*this.view.offsetX,u=l+f*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,Fm=[.125,.215,.35,.446,.526,.582],es=20,dd=new Bx,Om=new St;let hd=null,fd=0,pd=0,md=!1;const Jr=(1+Math.sqrt(5))/2,Gs=1/Jr,zm=[new X(-Jr,Gs,0),new X(Jr,Gs,0),new X(-Gs,0,Jr),new X(Gs,0,Jr),new X(0,Jr,-Gs),new X(0,Jr,Gs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){hd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hd,fd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:eo,format:mi,colorSpace:na,depthBuffer:!1},o=jm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gM(l)),this._blurMaterial=vM(l,e,t)}return o}_compileMaterial(e){const t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,dd)}_sceneToCubeUV(e,t,r,o){const d=new kn(90,1,t,r),p=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(Om),x.toneMapping=Tr,x.autoClear=!1;const M=new ql({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),b=new ke(new Xn,M);let E=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,E=!0):(M.color.copy(Om),E=!0);for(let g=0;g<6;g++){const P=g%3;P===0?(d.up.set(0,p[g],0),d.lookAt(f[g],0,0)):P===1?(d.up.set(0,0,p[g]),d.lookAt(0,f[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,f[g]));const D=this._cubeSize;Nl(o,P*D,g>2?D:0,D,D),x.setRenderTarget(o),E&&x.render(b,d),x.render(e,d)}b.geometry.dispose(),b.material.dispose(),x.toneMapping=y,x.autoClear=_,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Zs||e.mapping===Js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new ke(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Nl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,dd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=zm[(o-l-1)%zm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const p=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new ke(this._lodPlanes[o],f),y=f.uniforms,M=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*es-1),E=l/b,S=isFinite(l)?1+Math.floor(x*E):es;S>es&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${es}`);const g=[];let P=0;for(let O=0;O<es;++O){const U=O/E,N=Math.exp(-U*U/2);g.push(N),O===0?P+=N:O<S&&(P+=2*N)}for(let O=0;O<g.length;O++)g[O]=g[O]/P;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=b,y.mipInt.value=D-r;const C=this._sizeLods[o],$=3*C*(o>D-Ws?o-D+Ws:0),z=4*(this._cubeSize-C);Nl(t,$,z,3*C,2*C),p.setRenderTarget(t),p.render(_,dd)}}function gM(s){const e=[],t=[],r=[];let o=s;const l=s-Ws+1+Fm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let p=1/d;u>s-Ws?p=Fm[u-s+Ws-1]:u===0&&(p=0),r.push(p);const f=1/(d-2),x=-f,_=1+f,y=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,b=6,E=3,S=2,g=1,P=new Float32Array(E*b*M),D=new Float32Array(S*b*M),C=new Float32Array(g*b*M);for(let z=0;z<M;z++){const O=z%3*2/3-1,U=z>2?0:-1,N=[O,U,0,O+2/3,U,0,O+2/3,U+1,0,O,U,0,O+2/3,U+1,0,O,U+1,0];P.set(N,E*b*z),D.set(y,S*b*z);const R=[z,z,z,z,z,z];C.set(R,g*b*z)}const $=new Fn;$.setAttribute("position",new Ei(P,E)),$.setAttribute("uv",new Ei(D,S)),$.setAttribute("faceIndex",new Ei(C,g)),e.push($),o>Ws&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function jm(s,e,t){const r=new ss(s,e,t);return r.texture.mapping=Ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function vM(s,e,t){const r=new Float32Array(es),o=new X(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Hm(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Vm(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function wh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _M(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,f=p===kd||p===Fd,x=p===Zs||p===Js;if(f||x){let _=e.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new Bm(s)),_=f?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return f&&M&&M.height>0||x&&M&&o(M)?(t===null&&(t=new Bm(s)),_=f?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let p=0;const f=6;for(let x=0;x<f;x++)d[x]!==void 0&&p++;return p===f}function l(d){const p=d.target;p.removeEventListener("dispose",l);const f=e.get(p);f!==void 0&&(e.delete(p),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function yM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Wa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function SM(s,e,t,r){const o={},l=new WeakMap;function u(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);for(const b in y.morphAttributes){const E=y.morphAttributes[b];for(let S=0,g=E.length;S<g;S++)e.remove(E[S])}y.removeEventListener("dispose",u),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(_,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function p(_){const y=_.attributes;for(const b in y)e.update(y[b],s.ARRAY_BUFFER);const M=_.morphAttributes;for(const b in M){const E=M[b];for(let S=0,g=E.length;S<g;S++)e.update(E[S],s.ARRAY_BUFFER)}}function f(_){const y=[],M=_.index,b=_.attributes.position;let E=0;if(M!==null){const P=M.array;E=M.version;for(let D=0,C=P.length;D<C;D+=3){const $=P[D+0],z=P[D+1],O=P[D+2];y.push($,z,z,O,O,$)}}else if(b!==void 0){const P=b.array;E=b.version;for(let D=0,C=P.length/3-1;D<C;D+=3){const $=D+0,z=D+1,O=D+2;y.push($,z,z,O,O,$)}}else return;const S=new(Ax(y)?Ux:Ix)(y,1);S.version=E;const g=l.get(_);g&&e.remove(g),l.set(_,S)}function x(_){const y=l.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&f(_)}else f(_);return l.get(_)}return{get:d,update:p,getWireframeAttribute:x}}function MM(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,M){s.drawElements(r,M,l,y*u),t.update(M,r,1)}function f(y,M,b){b!==0&&(s.drawElementsInstanced(r,M,l,y*u,b),t.update(M,r,b))}function x(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,y,0,b);let S=0;for(let g=0;g<b;g++)S+=M[g];t.update(S,r,1)}function _(y,M,b,E){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)f(y[g]/u,M[g],E[g]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,l,y,0,E,0,b);let g=0;for(let P=0;P<b;P++)g+=M[P]*E[P];t.update(g,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=f,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function wM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function bM(s,e,t){const r=new WeakMap,o=new It;function l(u,d,p){const f=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let R=function(){U.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var M=R;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let $=d.attributes.position.count*C,z=1;$>e.maxTextureSize&&(z=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const O=new Float32Array($*z*4*_),U=new Nx(O,$,z,_);U.type=Gi,U.needsUpdate=!0;const N=C*4;for(let j=0;j<_;j++){const te=g[j],Z=P[j],pe=D[j],xe=$*z*4*j;for(let ne=0;ne<te.count;ne++){const le=ne*N;b===!0&&(o.fromBufferAttribute(te,ne),O[xe+le+0]=o.x,O[xe+le+1]=o.y,O[xe+le+2]=o.z,O[xe+le+3]=0),E===!0&&(o.fromBufferAttribute(Z,ne),O[xe+le+4]=o.x,O[xe+le+5]=o.y,O[xe+le+6]=o.z,O[xe+le+7]=0),S===!0&&(o.fromBufferAttribute(pe,ne),O[xe+le+8]=o.x,O[xe+le+9]=o.y,O[xe+le+10]=o.z,O[xe+le+11]=pe.itemSize===4?o.w:1)}}y={count:_,texture:U,size:new ct($,z)},r.set(d,y),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let b=0;for(let S=0;S<f.length;S++)b+=f[S];const E=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",f)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function EM(s,e,t,r){let o=new WeakMap;function l(p){const f=r.render.frame,x=p.geometry,_=e.get(p,x);if(o.get(_)!==f&&(e.update(_),o.set(_,f)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==f&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,f))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==f&&(y.update(),o.set(y,f))}return _}function u(){o=new WeakMap}function d(p){const f=p.target;f.removeEventListener("dispose",d),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:l,dispose:u}}class jx extends Tn{constructor(e,t,r,o,l,u,d,p,f,x=$s){if(x!==$s&&x!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===$s&&(r=rs),r===void 0&&x===ea&&(r=Qs),super(null,o,l,u,d,p,x,r,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:xi,this.minFilter=p!==void 0?p:xi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Hx=new Tn,Gm=new jx(1,1),Vx=new Nx,Gx=new dy,Wx=new Ox,Wm=[],Xm=[],$m=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Wm[o];if(l===void 0&&(l=new Float32Array(o),Wm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function nc(s,e){let t=Xm[e];t===void 0&&(t=new Int32Array(e),Xm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function TM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function NM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Ym.set(r),s.uniformMatrix2fv(this.addr,!1,Ym),rn(t,r)}}function PM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;qm.set(r),s.uniformMatrix3fv(this.addr,!1,qm),rn(t,r)}}function LM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;$m.set(r),s.uniformMatrix4fv(this.addr,!1,$m),rn(t,r)}}function DM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function FM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function zM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function jM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Gm.compareFunction=Cx,l=Gm):l=Hx,t.setTexture2D(e||l,o)}function HM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Gx,o)}function VM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Wx,o)}function GM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Vx,o)}function WM(s){switch(s){case 5126:return TM;case 35664:return CM;case 35665:return AM;case 35666:return RM;case 35674:return NM;case 35675:return PM;case 35676:return LM;case 5124:case 35670:return DM;case 35667:case 35671:return IM;case 35668:case 35672:return UM;case 35669:case 35673:return kM;case 5125:return FM;case 36294:return OM;case 36295:return zM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return HM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}function XM(s,e){s.uniform1fv(this.addr,e)}function $M(s,e){const t=sa(e,this.size,2);s.uniform2fv(this.addr,t)}function qM(s,e){const t=sa(e,this.size,3);s.uniform3fv(this.addr,t)}function YM(s,e){const t=sa(e,this.size,4);s.uniform4fv(this.addr,t)}function KM(s,e){const t=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ZM(s,e){const t=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function JM(s,e){const t=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function QM(s,e){s.uniform1iv(this.addr,e)}function ew(s,e){s.uniform2iv(this.addr,e)}function tw(s,e){s.uniform3iv(this.addr,e)}function nw(s,e){s.uniform4iv(this.addr,e)}function iw(s,e){s.uniform1uiv(this.addr,e)}function rw(s,e){s.uniform2uiv(this.addr,e)}function sw(s,e){s.uniform3uiv(this.addr,e)}function aw(s,e){s.uniform4uiv(this.addr,e)}function ow(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Hx,l[u])}function lw(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Gx,l[u])}function cw(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Wx,l[u])}function uw(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Vx,l[u])}function dw(s){switch(s){case 5126:return XM;case 35664:return $M;case 35665:return qM;case 35666:return YM;case 35674:return KM;case 35675:return ZM;case 35676:return JM;case 5124:case 35670:return QM;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}class hw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=WM(t.type)}}class fw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dw(t.type)}}class pw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function Km(s,e){s.seq.push(e),s.map[e.id]=e}function mw(s,e,t){const r=s.name,o=r.length;for(xd.lastIndex=0;;){const l=xd.exec(r),u=xd.lastIndex;let d=l[1];const p=l[2]==="]",f=l[3];if(p&&(d=d|0),f===void 0||f==="["&&u+2===o){Km(t,f===void 0?new hw(d,s,e):new fw(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new pw(d),Km(t,_)),t=_}}}class jl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);mw(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Zm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const xw=37297;let gw=0;function vw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Jm=new vt;function _w(s){Ct._getMatrix(Jm,Ct.workingColorSpace,s);const e=`mat3( ${Jm.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case ec:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Qm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+vw(s.getShaderSource(e),u)}else return o}function yw(s,e){const t=_w(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sw(s,e){let t;switch(e){case z_:t="Linear";break;case B_:t="Reinhard";break;case j_:t="Cineon";break;case px:t="ACESFilmic";break;case V_:t="AgX";break;case G_:t="Neutral";break;case H_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pl=new X;function Mw(){Ct.getLuminanceCoefficients(Pl);const s=Pl.x.toFixed(4),e=Pl.y.toFixed(4),t=Pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function bw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Ew(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Xa(s){return s!==""}function e0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function t0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tw=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(s){return s.replace(Tw,Aw)}const Cw=new Map;function Aw(s,e){let t=_t[e];if(t===void 0){const r=Cw.get(e);if(r!==void 0)t=_t[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return dh(t)}const Rw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function n0(s){return s.replace(Rw,Nw)}function Nw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function i0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===dx?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===hx?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Lw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function Iw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fx:e="ENVMAP_BLENDING_MULTIPLY";break;case F_:e="ENVMAP_BLENDING_MIX";break;case O_:e="ENVMAP_BLENDING_ADD";break}return e}function Uw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function kw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=Pw(t),f=Lw(t),x=Dw(t),_=Iw(t),y=Uw(t),M=ww(t),b=bw(l),E=o.createProgram();let S,g,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Xa).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Xa).join(`
`),g.length>0&&(g+=`
`)):(S=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),g=[i0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+x:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?_t.tonemapping_pars_fragment:"",t.toneMapping!==Tr?Sw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,yw("linearToOutputTexel",t.outputColorSpace),Mw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),u=dh(u),u=e0(u,t),u=t0(u,t),d=dh(d),d=e0(d,t),d=t0(d,t),u=n0(u),d=n0(d),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=P+S+u,C=P+g+d,$=Zm(o,o.VERTEX_SHADER,D),z=Zm(o,o.FRAGMENT_SHADER,C);o.attachShader(E,$),o.attachShader(E,z),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function O(j){if(s.debug.checkShaderErrors){const te=o.getProgramInfoLog(E).trim(),Z=o.getShaderInfoLog($).trim(),pe=o.getShaderInfoLog(z).trim();let xe=!0,ne=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(xe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,$,z);else{const le=Qm(o,$,"vertex"),V=Qm(o,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+te+`
`+le+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(Z===""||pe==="")&&(ne=!1);ne&&(j.diagnostics={runnable:xe,programLog:te,vertexShader:{log:Z,prefix:S},fragmentShader:{log:pe,prefix:g}})}o.deleteShader($),o.deleteShader(z),U=new jl(o,E),N=Ew(o,E)}let U;this.getUniforms=function(){return U===void 0&&O(this),U};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(E,xw)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=$,this.fragmentShader=z,this}let Fw=0;class Ow{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new zw(e),t.set(e,r)),r}}class zw{constructor(e){this.id=Fw++,this.code=e,this.usedTimes=0}}function Bw(s,e,t,r,o,l,u){const d=new Lx,p=new Ow,f=new Set,x=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(N){return f.add(N),N===0?"uv":`uv${N}`}function S(N,R,j,te,Z){const pe=te.fog,xe=Z.geometry,ne=N.isMeshStandardMaterial?te.environment:null,le=(N.isMeshStandardMaterial?t:e).get(N.envMap||ne),V=le&&le.mapping===Ql?le.image.height:null,ce=b[N.type];N.precision!==null&&(M=o.getMaxPrecision(N.precision),M!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",M,"instead."));const I=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,w=I!==void 0?I.length:0;let H=0;xe.morphAttributes.position!==void 0&&(H=1),xe.morphAttributes.normal!==void 0&&(H=2),xe.morphAttributes.color!==void 0&&(H=3);let ge,G,Q,me;if(ce){const Et=wi[ce];ge=Et.vertexShader,G=Et.fragmentShader}else ge=N.vertexShader,G=N.fragmentShader,p.update(N),Q=p.getVertexShaderID(N),me=p.getFragmentShaderID(N);const oe=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ee=Z.isInstancedMesh===!0,ze=Z.isBatchedMesh===!0,ue=!!N.map,ae=!!N.matcap,K=!!le,F=!!N.aoMap,Oe=!!N.lightMap,be=!!N.bumpMap,Pe=!!N.normalMap,Ce=!!N.displacementMap,st=!!N.emissiveMap,Be=!!N.metalnessMap,k=!!N.roughnessMap,A=N.anisotropy>0,re=N.clearcoat>0,Se=N.dispersion>0,Me=N.iridescence>0,_e=N.sheen>0,Ye=N.transmission>0,Le=A&&!!N.anisotropyMap,je=re&&!!N.clearcoatMap,ut=re&&!!N.clearcoatNormalMap,Ae=re&&!!N.clearcoatRoughnessMap,He=Me&&!!N.iridescenceMap,it=Me&&!!N.iridescenceThicknessMap,lt=_e&&!!N.sheenColorMap,$e=_e&&!!N.sheenRoughnessMap,xt=!!N.specularMap,dt=!!N.specularColorMap,Pt=!!N.specularIntensityMap,Y=Ye&&!!N.transmissionMap,Ve=Ye&&!!N.thicknessMap,ve=!!N.gradientMap,we=!!N.alphaMap,Xe=N.alphaTest>0,We=!!N.alphaHash,mt=!!N.extensions;let zt=Tr;N.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(zt=s.toneMapping);const Zt={shaderID:ce,shaderType:N.type,shaderName:N.name,vertexShader:ge,fragmentShader:G,defines:N.defines,customVertexShaderID:Q,customFragmentShaderID:me,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:M,batching:ze,batchingColor:ze&&Z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Z.instanceColor!==null,instancingMorph:Ee&&Z.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:na,alphaToCoverage:!!N.alphaToCoverage,map:ue,matcap:ae,envMap:K,envMapMode:K&&le.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Oe,bumpMap:be,normalMap:Pe,displacementMap:y&&Ce,emissiveMap:st,normalMapObjectSpace:Pe&&N.normalMapType===q_,normalMapTangentSpace:Pe&&N.normalMapType===Tx,metalnessMap:Be,roughnessMap:k,anisotropy:A,anisotropyMap:Le,clearcoat:re,clearcoatMap:je,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ae,dispersion:Se,iridescence:Me,iridescenceMap:He,iridescenceThicknessMap:it,sheen:_e,sheenColorMap:lt,sheenRoughnessMap:$e,specularMap:xt,specularColorMap:dt,specularIntensityMap:Pt,transmission:Ye,transmissionMap:Y,thicknessMap:Ve,gradientMap:ve,opaque:N.transparent===!1&&N.blending===Xs&&N.alphaToCoverage===!1,alphaMap:we,alphaTest:Xe,alphaHash:We,combine:N.combine,mapUv:ue&&E(N.map.channel),aoMapUv:F&&E(N.aoMap.channel),lightMapUv:Oe&&E(N.lightMap.channel),bumpMapUv:be&&E(N.bumpMap.channel),normalMapUv:Pe&&E(N.normalMap.channel),displacementMapUv:Ce&&E(N.displacementMap.channel),emissiveMapUv:st&&E(N.emissiveMap.channel),metalnessMapUv:Be&&E(N.metalnessMap.channel),roughnessMapUv:k&&E(N.roughnessMap.channel),anisotropyMapUv:Le&&E(N.anisotropyMap.channel),clearcoatMapUv:je&&E(N.clearcoatMap.channel),clearcoatNormalMapUv:ut&&E(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&E(N.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&E(N.iridescenceMap.channel),iridescenceThicknessMapUv:it&&E(N.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&E(N.sheenColorMap.channel),sheenRoughnessMapUv:$e&&E(N.sheenRoughnessMap.channel),specularMapUv:xt&&E(N.specularMap.channel),specularColorMapUv:dt&&E(N.specularColorMap.channel),specularIntensityMapUv:Pt&&E(N.specularIntensityMap.channel),transmissionMapUv:Y&&E(N.transmissionMap.channel),thicknessMapUv:Ve&&E(N.thicknessMap.channel),alphaMapUv:we&&E(N.alphaMap.channel),vertexTangents:!!xe.attributes.tangent&&(Pe||A),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!xe.attributes.uv&&(ue||we),fog:!!pe,useFog:N.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:ye,skinning:Z.isSkinnedMesh===!0,morphTargets:xe.morphAttributes.position!==void 0,morphNormals:xe.morphAttributes.normal!==void 0,morphColors:xe.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:H,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:zt,decodeVideoTexture:ue&&N.map.isVideoTexture===!0&&Ct.getTransfer(N.map.colorSpace)===Dt,decodeVideoTextureEmissive:st&&N.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(N.emissiveMap.colorSpace)===Dt,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Gn,flipSided:N.side===En,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:mt&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&N.extensions.multiDraw===!0||ze)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Zt.vertexUv1s=f.has(1),Zt.vertexUv2s=f.has(2),Zt.vertexUv3s=f.has(3),f.clear(),Zt}function g(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const j in N.defines)R.push(j),R.push(N.defines[j]);return N.isRawShaderMaterial===!1&&(P(R,N),D(R,N),R.push(s.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function P(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function D(N,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),N.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),N.push(d.mask)}function C(N){const R=b[N.type];let j;if(R){const te=wi[R];j=wy.clone(te.uniforms)}else j=N.uniforms;return j}function $(N,R){let j;for(let te=0,Z=x.length;te<Z;te++){const pe=x[te];if(pe.cacheKey===R){j=pe,++j.usedTimes;break}}return j===void 0&&(j=new kw(s,R,N,l),x.push(j)),j}function z(N){if(--N.usedTimes===0){const R=x.indexOf(N);x[R]=x[x.length-1],x.pop(),N.destroy()}}function O(N){p.remove(N)}function U(){p.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:C,acquireProgram:$,releaseProgram:z,releaseShaderCache:O,programs:x,dispose:U}}function jw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Hw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function r0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function s0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,y,M,b,E,S){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:y,material:M,groupOrder:b,renderOrder:_.renderOrder,z:E,group:S},s[e]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=M,g.groupOrder=b,g.renderOrder=_.renderOrder,g.z=E,g.group=S),e++,g}function d(_,y,M,b,E,S){const g=u(_,y,M,b,E,S);M.transmission>0?r.push(g):M.transparent===!0?o.push(g):t.push(g)}function p(_,y,M,b,E,S){const g=u(_,y,M,b,E,S);M.transmission>0?r.unshift(g):M.transparent===!0?o.unshift(g):t.unshift(g)}function f(_,y){t.length>1&&t.sort(_||Hw),r.length>1&&r.sort(y||r0),o.length>1&&o.sort(y||r0)}function x(){for(let _=e,y=s.length;_<y;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:x,sort:f}}function Vw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new s0,s.set(r,[u])):o>=l.length?(u=new s0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new St};break;case"SpotLight":t={position:new X,direction:new X,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function Ww(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Xw=0;function $w(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function qw(s){const e=new Gw,t=Ww(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new X);const o=new X,l=new Ht,u=new Ht;function d(f){let x=0,_=0,y=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,b=0,E=0,S=0,g=0,P=0,D=0,C=0,$=0,z=0,O=0;f.sort($w);for(let N=0,R=f.length;N<R;N++){const j=f[N],te=j.color,Z=j.intensity,pe=j.distance,xe=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=te.r*Z,_+=te.g*Z,y+=te.b*Z;else if(j.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(j.sh.coefficients[ne],Z);O++}else if(j.isDirectionalLight){const ne=e.get(j);if(ne.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const le=j.shadow,V=t.get(j);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,r.directionalShadow[M]=V,r.directionalShadowMap[M]=xe,r.directionalShadowMatrix[M]=j.shadow.matrix,P++}r.directional[M]=ne,M++}else if(j.isSpotLight){const ne=e.get(j);ne.position.setFromMatrixPosition(j.matrixWorld),ne.color.copy(te).multiplyScalar(Z),ne.distance=pe,ne.coneCos=Math.cos(j.angle),ne.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),ne.decay=j.decay,r.spot[E]=ne;const le=j.shadow;if(j.map&&(r.spotLightMap[$]=j.map,$++,le.updateMatrices(j),j.castShadow&&z++),r.spotLightMatrix[E]=le.matrix,j.castShadow){const V=t.get(j);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,r.spotShadow[E]=V,r.spotShadowMap[E]=xe,C++}E++}else if(j.isRectAreaLight){const ne=e.get(j);ne.color.copy(te).multiplyScalar(Z),ne.halfWidth.set(j.width*.5,0,0),ne.halfHeight.set(0,j.height*.5,0),r.rectArea[S]=ne,S++}else if(j.isPointLight){const ne=e.get(j);if(ne.color.copy(j.color).multiplyScalar(j.intensity),ne.distance=j.distance,ne.decay=j.decay,j.castShadow){const le=j.shadow,V=t.get(j);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,V.shadowCameraNear=le.camera.near,V.shadowCameraFar=le.camera.far,r.pointShadow[b]=V,r.pointShadowMap[b]=xe,r.pointShadowMatrix[b]=j.shadow.matrix,D++}r.point[b]=ne,b++}else if(j.isHemisphereLight){const ne=e.get(j);ne.skyColor.copy(j.color).multiplyScalar(Z),ne.groundColor.copy(j.groundColor).multiplyScalar(Z),r.hemi[g]=ne,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ge.LTC_FLOAT_1,r.rectAreaLTC2=Ge.LTC_FLOAT_2):(r.rectAreaLTC1=Ge.LTC_HALF_1,r.rectAreaLTC2=Ge.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const U=r.hash;(U.directionalLength!==M||U.pointLength!==b||U.spotLength!==E||U.rectAreaLength!==S||U.hemiLength!==g||U.numDirectionalShadows!==P||U.numPointShadows!==D||U.numSpotShadows!==C||U.numSpotMaps!==$||U.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=E,r.rectArea.length=S,r.point.length=b,r.hemi.length=g,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+$-z,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=O,U.directionalLength=M,U.pointLength=b,U.spotLength=E,U.rectAreaLength=S,U.hemiLength=g,U.numDirectionalShadows=P,U.numPointShadows=D,U.numSpotShadows=C,U.numSpotMaps=$,U.numLightProbes=O,r.version=Xw++)}function p(f,x){let _=0,y=0,M=0,b=0,E=0;const S=x.matrixWorldInverse;for(let g=0,P=f.length;g<P;g++){const D=f[g];if(D.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),_++}else if(D.isSpotLight){const C=r.spot[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),M++}else if(D.isRectAreaLight){const C=r.rectArea[b];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(D.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),b++}else if(D.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const C=r.hemi[E];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:d,setupView:p,state:r}}function a0(s){const e=new qw(s),t=[],r=[];function o(x){f.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function d(){e.setup(t)}function p(x){e.setupView(t,x)}const f={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function Yw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new a0(s),e.set(o,[d])):l>=u.length?(d=new a0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class Kw extends ra{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=X_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zw extends ra{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eb(s,e,t){let r=new Mh;const o=new ct,l=new ct,u=new It,d=new Kw({depthPacking:$_}),p=new Zw,f={},x=t.maxTextureSize,_={[Ar]:En,[En]:Ar,[Gn]:Gn},y=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Jw,fragmentShader:Qw}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new Fn;b.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ke(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dx;let g=this.type;this.render=function(z,O,U){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;const N=s.getRenderTarget(),R=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),te=s.state;te.setBlending(Er),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const Z=g!==Vi&&this.type===Vi,pe=g===Vi&&this.type!==Vi;for(let xe=0,ne=z.length;xe<ne;xe++){const le=z[xe],V=le.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ce=V.getFrameExtents();if(o.multiply(ce),l.copy(V.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/ce.x),o.x=l.x*ce.x,V.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/ce.y),o.y=l.y*ce.y,V.mapSize.y=l.y)),V.map===null||Z===!0||pe===!0){const w=this.type!==Vi?{minFilter:xi,magFilter:xi}:{};V.map!==null&&V.map.dispose(),V.map=new ss(o.x,o.y,w),V.map.texture.name=le.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const I=V.getViewportCount();for(let w=0;w<I;w++){const H=V.getViewport(w);u.set(l.x*H.x,l.y*H.y,l.x*H.z,l.y*H.w),te.viewport(u),V.updateMatrices(le,w),r=V.getFrustum(),C(O,U,V.camera,le,this.type)}V.isPointLightShadow!==!0&&this.type===Vi&&P(V,U),V.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(N,R,j)};function P(z,O){const U=e.update(E);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ss(o.x,o.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(O,null,U,y,E,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(O,null,U,M,E,null)}function D(z,O,U,N){let R=null;const j=U.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(j!==void 0)R=j;else if(R=U.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const te=R.uuid,Z=O.uuid;let pe=f[te];pe===void 0&&(pe={},f[te]=pe);let xe=pe[Z];xe===void 0&&(xe=R.clone(),pe[Z]=xe,O.addEventListener("dispose",$)),R=xe}if(R.visible=O.visible,R.wireframe=O.wireframe,N===Vi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:_[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,U.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const te=s.properties.get(R);te.light=U}return R}function C(z,O,U,N,R){if(z.visible===!1)return;if(z.layers.test(O.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&R===Vi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,z.matrixWorld);const Z=e.update(z),pe=z.material;if(Array.isArray(pe)){const xe=Z.groups;for(let ne=0,le=xe.length;ne<le;ne++){const V=xe[ne],ce=pe[V.materialIndex];if(ce&&ce.visible){const I=D(z,ce,N,R);z.onBeforeShadow(s,z,O,U,Z,I,V),s.renderBufferDirect(U,null,Z,I,z,V),z.onAfterShadow(s,z,O,U,Z,I,V)}}}else if(pe.visible){const xe=D(z,pe,N,R);z.onBeforeShadow(s,z,O,U,Z,xe,null),s.renderBufferDirect(U,null,Z,xe,z,null),z.onAfterShadow(s,z,O,U,Z,xe,null)}}const te=z.children;for(let Z=0,pe=te.length;Z<pe;Z++)C(te[Z],O,U,N,R)}function $(z){z.target.removeEventListener("dispose",$);for(const U in f){const N=f[U],R=z.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const tb={[Rd]:Nd,[Pd]:Id,[Ld]:Ud,[Ks]:Dd,[Nd]:Rd,[Id]:Pd,[Ud]:Ld,[Dd]:Ks};function nb(s,e){function t(){let Y=!1;const Ve=new It;let ve=null;const we=new It(0,0,0,0);return{setMask:function(Xe){ve!==Xe&&!Y&&(s.colorMask(Xe,Xe,Xe,Xe),ve=Xe)},setLocked:function(Xe){Y=Xe},setClear:function(Xe,We,mt,zt,Zt){Zt===!0&&(Xe*=zt,We*=zt,mt*=zt),Ve.set(Xe,We,mt,zt),we.equals(Ve)===!1&&(s.clearColor(Xe,We,mt,zt),we.copy(Ve))},reset:function(){Y=!1,ve=null,we.set(-1,0,0,0)}}}function r(){let Y=!1,Ve=!1,ve=null,we=null,Xe=null;return{setReversed:function(We){if(Ve!==We){const mt=e.get("EXT_clip_control");Ve?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT);const zt=Xe;Xe=null,this.setClear(zt)}Ve=We},getReversed:function(){return Ve},setTest:function(We){We?oe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(We){ve!==We&&!Y&&(s.depthMask(We),ve=We)},setFunc:function(We){if(Ve&&(We=tb[We]),we!==We){switch(We){case Rd:s.depthFunc(s.NEVER);break;case Nd:s.depthFunc(s.ALWAYS);break;case Pd:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case Ld:s.depthFunc(s.EQUAL);break;case Dd:s.depthFunc(s.GEQUAL);break;case Id:s.depthFunc(s.GREATER);break;case Ud:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=We}},setLocked:function(We){Y=We},setClear:function(We){Xe!==We&&(Ve&&(We=1-We),s.clearDepth(We),Xe=We)},reset:function(){Y=!1,ve=null,we=null,Xe=null,Ve=!1}}}function o(){let Y=!1,Ve=null,ve=null,we=null,Xe=null,We=null,mt=null,zt=null,Zt=null;return{setTest:function(Et){Y||(Et?oe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Et){Ve!==Et&&!Y&&(s.stencilMask(Et),Ve=Et)},setFunc:function(Et,Cn,yn){(ve!==Et||we!==Cn||Xe!==yn)&&(s.stencilFunc(Et,Cn,yn),ve=Et,we=Cn,Xe=yn)},setOp:function(Et,Cn,yn){(We!==Et||mt!==Cn||zt!==yn)&&(s.stencilOp(Et,Cn,yn),We=Et,mt=Cn,zt=yn)},setLocked:function(Et){Y=Et},setClear:function(Et){Zt!==Et&&(s.clearStencil(Et),Zt=Et)},reset:function(){Y=!1,Ve=null,ve=null,we=null,Xe=null,We=null,mt=null,zt=null,Zt=null}}}const l=new t,u=new r,d=new o,p=new WeakMap,f=new WeakMap;let x={},_={},y=new WeakMap,M=[],b=null,E=!1,S=null,g=null,P=null,D=null,C=null,$=null,z=null,O=new St(0,0,0),U=0,N=!1,R=null,j=null,te=null,Z=null,pe=null;const xe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,le=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),ne=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ne=le>=2);let ce=null,I={};const w=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),ge=new It().fromArray(w),G=new It().fromArray(H);function Q(Y,Ve,ve,we){const Xe=new Uint8Array(4),We=s.createTexture();s.bindTexture(Y,We),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<ve;mt++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ve,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Xe):s.texImage2D(Ve+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Xe);return We}const me={};me[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),me[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),me[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),oe(s.DEPTH_TEST),u.setFunc(Ks),be(!1),Pe(um),oe(s.CULL_FACE),F(Er);function oe(Y){x[Y]!==!0&&(s.enable(Y),x[Y]=!0)}function ye(Y){x[Y]!==!1&&(s.disable(Y),x[Y]=!1)}function Ee(Y,Ve){return _[Y]!==Ve?(s.bindFramebuffer(Y,Ve),_[Y]=Ve,Y===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ve),Y===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ve),!0):!1}function ze(Y,Ve){let ve=M,we=!1;if(Y){ve=y.get(Ve),ve===void 0&&(ve=[],y.set(Ve,ve));const Xe=Y.textures;if(ve.length!==Xe.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let We=0,mt=Xe.length;We<mt;We++)ve[We]=s.COLOR_ATTACHMENT0+We;ve.length=Xe.length,we=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,we=!0);we&&s.drawBuffers(ve)}function ue(Y){return b!==Y?(s.useProgram(Y),b=Y,!0):!1}const ae={[Qr]:s.FUNC_ADD,[y_]:s.FUNC_SUBTRACT,[S_]:s.FUNC_REVERSE_SUBTRACT};ae[M_]=s.MIN,ae[w_]=s.MAX;const K={[b_]:s.ZERO,[E_]:s.ONE,[T_]:s.SRC_COLOR,[Cd]:s.SRC_ALPHA,[L_]:s.SRC_ALPHA_SATURATE,[N_]:s.DST_COLOR,[A_]:s.DST_ALPHA,[C_]:s.ONE_MINUS_SRC_COLOR,[Ad]:s.ONE_MINUS_SRC_ALPHA,[P_]:s.ONE_MINUS_DST_COLOR,[R_]:s.ONE_MINUS_DST_ALPHA,[D_]:s.CONSTANT_COLOR,[I_]:s.ONE_MINUS_CONSTANT_COLOR,[U_]:s.CONSTANT_ALPHA,[k_]:s.ONE_MINUS_CONSTANT_ALPHA};function F(Y,Ve,ve,we,Xe,We,mt,zt,Zt,Et){if(Y===Er){E===!0&&(ye(s.BLEND),E=!1);return}if(E===!1&&(oe(s.BLEND),E=!0),Y!==__){if(Y!==S||Et!==N){if((g!==Qr||C!==Qr)&&(s.blendEquation(s.FUNC_ADD),g=Qr,C=Qr),Et)switch(Y){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dm:s.blendFunc(s.ONE,s.ONE);break;case hm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case dm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}P=null,D=null,$=null,z=null,O.set(0,0,0),U=0,S=Y,N=Et}return}Xe=Xe||Ve,We=We||ve,mt=mt||we,(Ve!==g||Xe!==C)&&(s.blendEquationSeparate(ae[Ve],ae[Xe]),g=Ve,C=Xe),(ve!==P||we!==D||We!==$||mt!==z)&&(s.blendFuncSeparate(K[ve],K[we],K[We],K[mt]),P=ve,D=we,$=We,z=mt),(zt.equals(O)===!1||Zt!==U)&&(s.blendColor(zt.r,zt.g,zt.b,Zt),O.copy(zt),U=Zt),S=Y,N=!1}function Oe(Y,Ve){Y.side===Gn?ye(s.CULL_FACE):oe(s.CULL_FACE);let ve=Y.side===En;Ve&&(ve=!ve),be(ve),Y.blending===Xs&&Y.transparent===!1?F(Er):F(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),u.setFunc(Y.depthFunc),u.setTest(Y.depthTest),u.setMask(Y.depthWrite),l.setMask(Y.colorWrite);const we=Y.stencilWrite;d.setTest(we),we&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),st(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function be(Y){R!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),R=Y)}function Pe(Y){Y!==g_?(oe(s.CULL_FACE),Y!==j&&(Y===um?s.cullFace(s.BACK):Y===v_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),j=Y}function Ce(Y){Y!==te&&(ne&&s.lineWidth(Y),te=Y)}function st(Y,Ve,ve){Y?(oe(s.POLYGON_OFFSET_FILL),(Z!==Ve||pe!==ve)&&(s.polygonOffset(Ve,ve),Z=Ve,pe=ve)):ye(s.POLYGON_OFFSET_FILL)}function Be(Y){Y?oe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function k(Y){Y===void 0&&(Y=s.TEXTURE0+xe-1),ce!==Y&&(s.activeTexture(Y),ce=Y)}function A(Y,Ve,ve){ve===void 0&&(ce===null?ve=s.TEXTURE0+xe-1:ve=ce);let we=I[ve];we===void 0&&(we={type:void 0,texture:void 0},I[ve]=we),(we.type!==Y||we.texture!==Ve)&&(ce!==ve&&(s.activeTexture(ve),ce=ve),s.bindTexture(Y,Ve||me[Y]),we.type=Y,we.texture=Ve)}function re(){const Y=I[ce];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function _e(){try{s.texSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ye(){try{s.texSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Le(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function je(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function He(){try{s.texImage2D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function lt(Y){ge.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),ge.copy(Y))}function $e(Y){G.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),G.copy(Y))}function xt(Y,Ve){let ve=f.get(Ve);ve===void 0&&(ve=new WeakMap,f.set(Ve,ve));let we=ve.get(Y);we===void 0&&(we=s.getUniformBlockIndex(Ve,Y.name),ve.set(Y,we))}function dt(Y,Ve){const we=f.get(Ve).get(Y);p.get(Ve)!==we&&(s.uniformBlockBinding(Ve,we,Y.__bindingPointIndex),p.set(Ve,we))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},ce=null,I={},_={},y=new WeakMap,M=[],b=null,E=!1,S=null,g=null,P=null,D=null,C=null,$=null,z=null,O=new St(0,0,0),U=0,N=!1,R=null,j=null,te=null,Z=null,pe=null,ge.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:oe,disable:ye,bindFramebuffer:Ee,drawBuffers:ze,useProgram:ue,setBlending:F,setMaterial:Oe,setFlipSided:be,setCullFace:Pe,setLineWidth:Ce,setPolygonOffset:st,setScissorTest:Be,activeTexture:k,bindTexture:A,unbindTexture:re,compressedTexImage2D:Se,compressedTexImage3D:Me,texImage2D:He,texImage3D:it,updateUBOMapping:xt,uniformBlockBinding:dt,texStorage2D:ut,texStorage3D:Ae,texSubImage2D:_e,texSubImage3D:Ye,compressedTexSubImage2D:Le,compressedTexSubImage3D:je,scissor:lt,viewport:$e,reset:Pt}}function o0(s,e,t,r){const o=ib(r);switch(t){case _x:return s*e;case Sx:return s*e;case Mx:return s*e*2;case wx:return s*e/o.components*o.byteLength;case _h:return s*e/o.components*o.byteLength;case bx:return s*e*2/o.components*o.byteLength;case yh:return s*e*2/o.components*o.byteLength;case yx:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case Sh:return s*e*4/o.components*o.byteLength;case kl:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ol:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Hd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case jd:return Math.max(s,8)*Math.max(e,8)/2;case Vd:case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case eh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case th:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ih:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case rh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case sh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Bl:case ah:case oh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ex:case lh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ch:case uh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ib(s){switch(s){case $i:case xx:return{byteLength:1,components:1};case Ka:case gx:case eo:return{byteLength:2,components:1};case gh:case vh:return{byteLength:2,components:4};case rs:case xh:case Gi:return{byteLength:4,components:1};case vx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function rb(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ct,x=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(k,A){return M?new OffscreenCanvas(k,A):$l("canvas")}function E(k,A,re){let Se=1;const Me=Be(k);if((Me.width>re||Me.height>re)&&(Se=re/Math.max(Me.width,Me.height)),Se<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const _e=Math.floor(Se*Me.width),Ye=Math.floor(Se*Me.height);_===void 0&&(_=b(_e,Ye));const Le=A?b(_e,Ye):_;return Le.width=_e,Le.height=Ye,Le.getContext("2d").drawImage(k,0,0,_e,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+_e+"x"+Ye+")."),Le}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),k;return k}function S(k){return k.generateMipmaps}function g(k){s.generateMipmap(k)}function P(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(k,A,re,Se,Me=!1){if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let _e=A;if(A===s.RED&&(re===s.FLOAT&&(_e=s.R32F),re===s.HALF_FLOAT&&(_e=s.R16F),re===s.UNSIGNED_BYTE&&(_e=s.R8)),A===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(_e=s.R8UI),re===s.UNSIGNED_SHORT&&(_e=s.R16UI),re===s.UNSIGNED_INT&&(_e=s.R32UI),re===s.BYTE&&(_e=s.R8I),re===s.SHORT&&(_e=s.R16I),re===s.INT&&(_e=s.R32I)),A===s.RG&&(re===s.FLOAT&&(_e=s.RG32F),re===s.HALF_FLOAT&&(_e=s.RG16F),re===s.UNSIGNED_BYTE&&(_e=s.RG8)),A===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(_e=s.RG8UI),re===s.UNSIGNED_SHORT&&(_e=s.RG16UI),re===s.UNSIGNED_INT&&(_e=s.RG32UI),re===s.BYTE&&(_e=s.RG8I),re===s.SHORT&&(_e=s.RG16I),re===s.INT&&(_e=s.RG32I)),A===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(_e=s.RGB8UI),re===s.UNSIGNED_SHORT&&(_e=s.RGB16UI),re===s.UNSIGNED_INT&&(_e=s.RGB32UI),re===s.BYTE&&(_e=s.RGB8I),re===s.SHORT&&(_e=s.RGB16I),re===s.INT&&(_e=s.RGB32I)),A===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(_e=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(_e=s.RGBA16UI),re===s.UNSIGNED_INT&&(_e=s.RGBA32UI),re===s.BYTE&&(_e=s.RGBA8I),re===s.SHORT&&(_e=s.RGBA16I),re===s.INT&&(_e=s.RGBA32I)),A===s.RGB&&re===s.UNSIGNED_INT_5_9_9_9_REV&&(_e=s.RGB9_E5),A===s.RGBA){const Ye=Me?ec:Ct.getTransfer(Se);re===s.FLOAT&&(_e=s.RGBA32F),re===s.HALF_FLOAT&&(_e=s.RGBA16F),re===s.UNSIGNED_BYTE&&(_e=Ye===Dt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(_e=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(_e=s.RGB5_A1)}return(_e===s.R16F||_e===s.R32F||_e===s.RG16F||_e===s.RG32F||_e===s.RGBA16F||_e===s.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function C(k,A){let re;return k?A===null||A===rs||A===Qs?re=s.DEPTH24_STENCIL8:A===Gi?re=s.DEPTH32F_STENCIL8:A===Ka&&(re=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===rs||A===Qs?re=s.DEPTH_COMPONENT24:A===Gi?re=s.DEPTH_COMPONENT32F:A===Ka&&(re=s.DEPTH_COMPONENT16),re}function $(k,A){return S(k)===!0||k.isFramebufferTexture&&k.minFilter!==xi&&k.minFilter!==bi?Math.log2(Math.max(A.width,A.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?A.mipmaps.length:1}function z(k){const A=k.target;A.removeEventListener("dispose",z),U(A),A.isVideoTexture&&x.delete(A)}function O(k){const A=k.target;A.removeEventListener("dispose",O),R(A)}function U(k){const A=r.get(k);if(A.__webglInit===void 0)return;const re=k.source,Se=y.get(re);if(Se){const Me=Se[A.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&N(k),Object.keys(Se).length===0&&y.delete(re)}r.remove(k)}function N(k){const A=r.get(k);s.deleteTexture(A.__webglTexture);const re=k.source,Se=y.get(re);delete Se[A.__cacheKey],u.memory.textures--}function R(k){const A=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(A.__webglFramebuffer[Se]))for(let Me=0;Me<A.__webglFramebuffer[Se].length;Me++)s.deleteFramebuffer(A.__webglFramebuffer[Se][Me]);else s.deleteFramebuffer(A.__webglFramebuffer[Se]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[Se])}else{if(Array.isArray(A.__webglFramebuffer))for(let Se=0;Se<A.__webglFramebuffer.length;Se++)s.deleteFramebuffer(A.__webglFramebuffer[Se]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Se=0;Se<A.__webglColorRenderbuffer.length;Se++)A.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[Se]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const re=k.textures;for(let Se=0,Me=re.length;Se<Me;Se++){const _e=r.get(re[Se]);_e.__webglTexture&&(s.deleteTexture(_e.__webglTexture),u.memory.textures--),r.remove(re[Se])}r.remove(k)}let j=0;function te(){j=0}function Z(){const k=j;return k>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+o.maxTextures),j+=1,k}function pe(k){const A=[];return A.push(k.wrapS),A.push(k.wrapT),A.push(k.wrapR||0),A.push(k.magFilter),A.push(k.minFilter),A.push(k.anisotropy),A.push(k.internalFormat),A.push(k.format),A.push(k.type),A.push(k.generateMipmaps),A.push(k.premultiplyAlpha),A.push(k.flipY),A.push(k.unpackAlignment),A.push(k.colorSpace),A.join()}function xe(k,A){const re=r.get(k);if(k.isVideoTexture&&Ce(k),k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){const Se=k.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(re,k,A);return}}t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+A)}function ne(k,A){const re=r.get(k);if(k.version>0&&re.__version!==k.version){G(re,k,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+A)}function le(k,A){const re=r.get(k);if(k.version>0&&re.__version!==k.version){G(re,k,A);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+A)}function V(k,A){const re=r.get(k);if(k.version>0&&re.__version!==k.version){Q(re,k,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+A)}const ce={[is]:s.REPEAT,[ts]:s.CLAMP_TO_EDGE,[Od]:s.MIRRORED_REPEAT},I={[xi]:s.NEAREST,[W_]:s.NEAREST_MIPMAP_NEAREST,[dl]:s.NEAREST_MIPMAP_LINEAR,[bi]:s.LINEAR,[Hu]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},w={[Y_]:s.NEVER,[ty]:s.ALWAYS,[K_]:s.LESS,[Cx]:s.LEQUAL,[Z_]:s.EQUAL,[ey]:s.GEQUAL,[J_]:s.GREATER,[Q_]:s.NOTEQUAL};function H(k,A){if(A.type===Gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===bi||A.magFilter===Hu||A.magFilter===dl||A.magFilter===ns||A.minFilter===bi||A.minFilter===Hu||A.minFilter===dl||A.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,ce[A.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,ce[A.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,ce[A.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,I[A.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,I[A.minFilter]),A.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,w[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===xi||A.minFilter!==dl&&A.minFilter!==ns||A.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ge(k,A){let re=!1;k.__webglInit===void 0&&(k.__webglInit=!0,A.addEventListener("dispose",z));const Se=A.source;let Me=y.get(Se);Me===void 0&&(Me={},y.set(Se,Me));const _e=pe(A);if(_e!==k.__cacheKey){Me[_e]===void 0&&(Me[_e]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,re=!0),Me[_e].usedTimes++;const Ye=Me[k.__cacheKey];Ye!==void 0&&(Me[k.__cacheKey].usedTimes--,Ye.usedTimes===0&&N(A)),k.__cacheKey=_e,k.__webglTexture=Me[_e].texture}return re}function G(k,A,re){let Se=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=s.TEXTURE_3D);const Me=ge(k,A),_e=A.source;t.bindTexture(Se,k.__webglTexture,s.TEXTURE0+re);const Ye=r.get(_e);if(_e.version!==Ye.__version||Me===!0){t.activeTexture(s.TEXTURE0+re);const Le=Ct.getPrimaries(Ct.workingColorSpace),je=A.colorSpace===br?null:Ct.getPrimaries(A.colorSpace),ut=A.colorSpace===br||Le===je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ae=E(A.image,!1,o.maxTextureSize);Ae=st(A,Ae);const He=l.convert(A.format,A.colorSpace),it=l.convert(A.type);let lt=D(A.internalFormat,He,it,A.colorSpace,A.isVideoTexture);H(Se,A);let $e;const xt=A.mipmaps,dt=A.isVideoTexture!==!0,Pt=Ye.__version===void 0||Me===!0,Y=_e.dataReady,Ve=$(A,Ae);if(A.isDepthTexture)lt=C(A.format===ea,A.type),Pt&&(dt?t.texStorage2D(s.TEXTURE_2D,1,lt,Ae.width,Ae.height):t.texImage2D(s.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,He,it,null));else if(A.isDataTexture)if(xt.length>0){dt&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ve,lt,xt[0].width,xt[0].height);for(let ve=0,we=xt.length;ve<we;ve++)$e=xt[ve],dt?Y&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,$e.width,$e.height,He,it,$e.data):t.texImage2D(s.TEXTURE_2D,ve,lt,$e.width,$e.height,0,He,it,$e.data);A.generateMipmaps=!1}else dt?(Pt&&t.texStorage2D(s.TEXTURE_2D,Ve,lt,Ae.width,Ae.height),Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,He,it,Ae.data)):t.texImage2D(s.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,He,it,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){dt&&Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,lt,xt[0].width,xt[0].height,Ae.depth);for(let ve=0,we=xt.length;ve<we;ve++)if($e=xt[ve],A.format!==mi)if(He!==null)if(dt){if(Y)if(A.layerUpdates.size>0){const Xe=o0($e.width,$e.height,A.format,A.type);for(const We of A.layerUpdates){const mt=$e.data.subarray(We*Xe/$e.data.BYTES_PER_ELEMENT,(We+1)*Xe/$e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,We,$e.width,$e.height,1,He,mt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,$e.width,$e.height,Ae.depth,He,$e.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,lt,$e.width,$e.height,Ae.depth,0,$e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,$e.width,$e.height,Ae.depth,He,it,$e.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,lt,$e.width,$e.height,Ae.depth,0,He,it,$e.data)}else{dt&&Pt&&t.texStorage2D(s.TEXTURE_2D,Ve,lt,xt[0].width,xt[0].height);for(let ve=0,we=xt.length;ve<we;ve++)$e=xt[ve],A.format!==mi?He!==null?dt?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,$e.width,$e.height,He,$e.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,lt,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Y&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,$e.width,$e.height,He,it,$e.data):t.texImage2D(s.TEXTURE_2D,ve,lt,$e.width,$e.height,0,He,it,$e.data)}else if(A.isDataArrayTexture)if(dt){if(Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,lt,Ae.width,Ae.height,Ae.depth),Y)if(A.layerUpdates.size>0){const ve=o0(Ae.width,Ae.height,A.format,A.type);for(const we of A.layerUpdates){const Xe=Ae.data.subarray(we*ve/Ae.data.BYTES_PER_ELEMENT,(we+1)*ve/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,Ae.width,Ae.height,1,He,it,Xe)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,it,Ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,lt,Ae.width,Ae.height,Ae.depth,0,He,it,Ae.data);else if(A.isData3DTexture)dt?(Pt&&t.texStorage3D(s.TEXTURE_3D,Ve,lt,Ae.width,Ae.height,Ae.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,He,it,Ae.data)):t.texImage3D(s.TEXTURE_3D,0,lt,Ae.width,Ae.height,Ae.depth,0,He,it,Ae.data);else if(A.isFramebufferTexture){if(Pt)if(dt)t.texStorage2D(s.TEXTURE_2D,Ve,lt,Ae.width,Ae.height);else{let ve=Ae.width,we=Ae.height;for(let Xe=0;Xe<Ve;Xe++)t.texImage2D(s.TEXTURE_2D,Xe,lt,ve,we,0,He,it,null),ve>>=1,we>>=1}}else if(xt.length>0){if(dt&&Pt){const ve=Be(xt[0]);t.texStorage2D(s.TEXTURE_2D,Ve,lt,ve.width,ve.height)}for(let ve=0,we=xt.length;ve<we;ve++)$e=xt[ve],dt?Y&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,He,it,$e):t.texImage2D(s.TEXTURE_2D,ve,lt,He,it,$e);A.generateMipmaps=!1}else if(dt){if(Pt){const ve=Be(Ae);t.texStorage2D(s.TEXTURE_2D,Ve,lt,ve.width,ve.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,He,it,Ae)}else t.texImage2D(s.TEXTURE_2D,0,lt,He,it,Ae);S(A)&&g(Se),Ye.__version=_e.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function Q(k,A,re){if(A.image.length!==6)return;const Se=ge(k,A),Me=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+re);const _e=r.get(Me);if(Me.version!==_e.__version||Se===!0){t.activeTexture(s.TEXTURE0+re);const Ye=Ct.getPrimaries(Ct.workingColorSpace),Le=A.colorSpace===br?null:Ct.getPrimaries(A.colorSpace),je=A.colorSpace===br||Ye===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const ut=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,He=[];for(let we=0;we<6;we++)!ut&&!Ae?He[we]=E(A.image[we],!0,o.maxCubemapSize):He[we]=Ae?A.image[we].image:A.image[we],He[we]=st(A,He[we]);const it=He[0],lt=l.convert(A.format,A.colorSpace),$e=l.convert(A.type),xt=D(A.internalFormat,lt,$e,A.colorSpace),dt=A.isVideoTexture!==!0,Pt=_e.__version===void 0||Se===!0,Y=Me.dataReady;let Ve=$(A,it);H(s.TEXTURE_CUBE_MAP,A);let ve;if(ut){dt&&Pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,xt,it.width,it.height);for(let we=0;we<6;we++){ve=He[we].mipmaps;for(let Xe=0;Xe<ve.length;Xe++){const We=ve[Xe];A.format!==mi?lt!==null?dt?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe,0,0,We.width,We.height,lt,We.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe,xt,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe,0,0,We.width,We.height,lt,$e,We.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe,xt,We.width,We.height,0,lt,$e,We.data)}}}else{if(ve=A.mipmaps,dt&&Pt){ve.length>0&&Ve++;const we=Be(He[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,xt,we.width,we.height)}for(let we=0;we<6;we++)if(Ae){dt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,He[we].width,He[we].height,lt,$e,He[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xt,He[we].width,He[we].height,0,lt,$e,He[we].data);for(let Xe=0;Xe<ve.length;Xe++){const mt=ve[Xe].image[we].image;dt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe+1,0,0,mt.width,mt.height,lt,$e,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe+1,xt,mt.width,mt.height,0,lt,$e,mt.data)}}else{dt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,lt,$e,He[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,xt,lt,$e,He[we]);for(let Xe=0;Xe<ve.length;Xe++){const We=ve[Xe];dt?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe+1,0,0,lt,$e,We.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,Xe+1,xt,lt,$e,We.image[we])}}}S(A)&&g(s.TEXTURE_CUBE_MAP),_e.__version=Me.version,A.onUpdate&&A.onUpdate(A)}k.__version=A.version}function me(k,A,re,Se,Me,_e){const Ye=l.convert(re.format,re.colorSpace),Le=l.convert(re.type),je=D(re.internalFormat,Ye,Le,re.colorSpace),ut=r.get(A),Ae=r.get(re);if(Ae.__renderTarget=A,!ut.__hasExternalTextures){const He=Math.max(1,A.width>>_e),it=Math.max(1,A.height>>_e);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,_e,je,He,it,A.depth,0,Ye,Le,null):t.texImage2D(Me,_e,je,He,it,0,Ye,Le,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),Pe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,Me,Ae.__webglTexture,0,be(A)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,Me,Ae.__webglTexture,_e),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(k,A,re){if(s.bindRenderbuffer(s.RENDERBUFFER,k),A.depthBuffer){const Se=A.depthTexture,Me=Se&&Se.isDepthTexture?Se.type:null,_e=C(A.stencilBuffer,Me),Ye=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=be(A);Pe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,_e,A.width,A.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,_e,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,_e,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,k)}else{const Se=A.textures;for(let Me=0;Me<Se.length;Me++){const _e=Se[Me],Ye=l.convert(_e.format,_e.colorSpace),Le=l.convert(_e.type),je=D(_e.internalFormat,Ye,Le,_e.colorSpace),ut=be(A);re&&Pe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,je,A.width,A.height):Pe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,je,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,je,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(k,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(A.depthTexture);Se.__renderTarget=A,(!Se.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),xe(A.depthTexture,0);const Me=Se.__webglTexture,_e=be(A);if(A.depthTexture.format===$s)Pe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(A.depthTexture.format===ea)Pe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Ee(k){const A=r.get(k),re=k.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==k.depthTexture){const Se=k.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Se){const Me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Se.removeEventListener("dispose",Me)};Se.addEventListener("dispose",Me),A.__depthDisposeCallback=Me}A.__boundDepthTexture=Se}if(k.depthTexture&&!A.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");ye(A.__webglFramebuffer,k)}else if(re){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]===void 0)A.__webglDepthbuffer[Se]=s.createRenderbuffer(),oe(A.__webglDepthbuffer[Se],k,!1);else{const Me=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=A.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,_e)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),oe(A.__webglDepthbuffer,k,!1);else{const Se=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(k,A,re){const Se=r.get(k);A!==void 0&&me(Se.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&Ee(k)}function ue(k){const A=k.texture,re=r.get(k),Se=r.get(A);k.addEventListener("dispose",O);const Me=k.textures,_e=k.isWebGLCubeRenderTarget===!0,Ye=Me.length>1;if(Ye||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=A.version,u.memory.textures++),_e){re.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[Le]=[];for(let je=0;je<A.mipmaps.length;je++)re.__webglFramebuffer[Le][je]=s.createFramebuffer()}else re.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let Le=0;Le<A.mipmaps.length;Le++)re.__webglFramebuffer[Le]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let Le=0,je=Me.length;Le<je;Le++){const ut=r.get(Me[Le]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),u.memory.textures++)}if(k.samples>0&&Pe(k)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Le=0;Le<Me.length;Le++){const je=Me[Le];re.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[Le]);const ut=l.convert(je.format,je.colorSpace),Ae=l.convert(je.type),He=D(je.internalFormat,ut,Ae,je.colorSpace,k.isXRRenderTarget===!0),it=be(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,He,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,re.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(re.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(_e){t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),H(s.TEXTURE_CUBE_MAP,A);for(let Le=0;Le<6;Le++)if(A.mipmaps&&A.mipmaps.length>0)for(let je=0;je<A.mipmaps.length;je++)me(re.__webglFramebuffer[Le][je],k,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,je);else me(re.__webglFramebuffer[Le],k,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(A)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Le=0,je=Me.length;Le<je;Le++){const ut=Me[Le],Ae=r.get(ut);t.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),H(s.TEXTURE_2D,ut),me(re.__webglFramebuffer,k,ut,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,0),S(ut)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let Le=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Le=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Le,Se.__webglTexture),H(Le,A),A.mipmaps&&A.mipmaps.length>0)for(let je=0;je<A.mipmaps.length;je++)me(re.__webglFramebuffer[je],k,A,s.COLOR_ATTACHMENT0,Le,je);else me(re.__webglFramebuffer,k,A,s.COLOR_ATTACHMENT0,Le,0);S(A)&&g(Le),t.unbindTexture()}k.depthBuffer&&Ee(k)}function ae(k){const A=k.textures;for(let re=0,Se=A.length;re<Se;re++){const Me=A[re];if(S(Me)){const _e=P(k),Ye=r.get(Me).__webglTexture;t.bindTexture(_e,Ye),g(_e),t.unbindTexture()}}}const K=[],F=[];function Oe(k){if(k.samples>0){if(Pe(k)===!1){const A=k.textures,re=k.width,Se=k.height;let Me=s.COLOR_BUFFER_BIT;const _e=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(k),Le=A.length>1;if(Le)for(let je=0;je<A.length;je++)t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let je=0;je<A.length;je++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[je]);const ut=r.get(A[je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,re,Se,0,0,re,Se,Me,s.NEAREST),p===!0&&(K.length=0,F.length=0,K.push(s.COLOR_ATTACHMENT0+je),k.depthBuffer&&k.resolveDepthBuffer===!1&&(K.push(_e),F.push(_e),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let je=0;je<A.length;je++){t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[je]);const ut=r.get(A[je]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+je,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&p){const A=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function be(k){return Math.min(o.maxSamples,k.samples)}function Pe(k){const A=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ce(k){const A=u.render.frame;x.get(k)!==A&&(x.set(k,A),k.update())}function st(k,A){const re=k.colorSpace,Se=k.format,Me=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||re!==na&&re!==br&&(Ct.getTransfer(re)===Dt?(Se!==mi||Me!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),A}function Be(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(f.width=k.naturalWidth||k.width,f.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(f.width=k.displayWidth,f.height=k.displayHeight):(f.width=k.width,f.height=k.height),f}this.allocateTextureUnit=Z,this.resetTextureUnits=te,this.setTexture2D=xe,this.setTexture2DArray=ne,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=ze,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Pe}function sb(s,e){function t(r,o=br){let l;const u=Ct.getTransfer(o);if(r===$i)return s.UNSIGNED_BYTE;if(r===gh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===vh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===vx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===xx)return s.BYTE;if(r===gx)return s.SHORT;if(r===Ka)return s.UNSIGNED_SHORT;if(r===xh)return s.INT;if(r===rs)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===eo)return s.HALF_FLOAT;if(r===_x)return s.ALPHA;if(r===yx)return s.RGB;if(r===mi)return s.RGBA;if(r===Sx)return s.LUMINANCE;if(r===Mx)return s.LUMINANCE_ALPHA;if(r===$s)return s.DEPTH_COMPONENT;if(r===ea)return s.DEPTH_STENCIL;if(r===wx)return s.RED;if(r===_h)return s.RED_INTEGER;if(r===bx)return s.RG;if(r===yh)return s.RG_INTEGER;if(r===Sh)return s.RGBA_INTEGER;if(r===kl||r===Fl||r===Ol||r===zl)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Bd||r===jd||r===Hd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===Gd||r===Wd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vd||r===Gd)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xd||r===$d||r===qd||r===Yd||r===Kd||r===Zd||r===Jd||r===Qd||r===eh||r===th||r===nh||r===ih||r===rh||r===sh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Xd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$d)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===eh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===th)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ih)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bl||r===ah||r===oh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Bl)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ah)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ex||r===lh||r===ch||r===uh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Bl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===lh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ch)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class ab extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ob={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),g=this._getHandJoint(f,E);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const x=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],y=x.position.distanceTo(_.position),M=.02,b=.005;f.inputState.pinching&&y>M+b?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&y<=M-b&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ob)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Tn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Rr({vertexShader:lb,fragmentShader:cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Xt(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class db extends ia{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,f=null,x=null,_=null,y=null,M=null,b=null;const E=new ub,S=t.getContextAttributes();let g=null,P=null;const D=[],C=[],$=new ct;let z=null;const O=new kn;O.viewport=new It;const U=new kn;U.viewport=new It;const N=[O,U],R=new ab;let j=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=D[G];return Q===void 0&&(Q=new gd,D[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=D[G];return Q===void 0&&(Q=new gd,D[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=D[G];return Q===void 0&&(Q=new gd,D[G]=Q),Q.getHandSpace()};function Z(G){const Q=C.indexOf(G.inputSource);if(Q===-1)return;const me=D[Q];me!==void 0&&(me.update(G.inputSource,G.frame,f||u),me.dispatchEvent({type:G.type,data:G.inputSource}))}function pe(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",pe),o.removeEventListener("inputsourceschange",xe);for(let G=0;G<D.length;G++){const Q=C[G];Q!==null&&(C[G]=null,D[G].disconnect(Q))}j=null,te=null,E.reset(),e.setRenderTarget(g),M=null,y=null,_=null,o=null,P=null,ge.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize($.width,$.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){l=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){d=G,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function(G){f=G},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(G){if(o=G,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",pe),o.addEventListener("inputsourceschange",xe),S.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize($),o.renderState.layers===void 0){const Q={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Q),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ss(M.framebufferWidth,M.framebufferHeight,{format:mi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let Q=null,me=null,oe=null;S.depth&&(oe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=S.stencil?ea:$s,me=S.stencil?Qs:rs);const ye={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:l};_=new XRWebGLBinding(o,t),y=_.createProjectionLayer(ye),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),P=new ss(y.textureWidth,y.textureHeight,{format:mi,type:$i,depthTexture:new jx(y.textureWidth,y.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),f=null,u=await o.requestReferenceSpace(d),ge.setContext(o),ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function xe(G){for(let Q=0;Q<G.removed.length;Q++){const me=G.removed[Q],oe=C.indexOf(me);oe>=0&&(C[oe]=null,D[oe].disconnect(me))}for(let Q=0;Q<G.added.length;Q++){const me=G.added[Q];let oe=C.indexOf(me);if(oe===-1){for(let Ee=0;Ee<D.length;Ee++)if(Ee>=C.length){C.push(me),oe=Ee;break}else if(C[Ee]===null){C[Ee]=me,oe=Ee;break}if(oe===-1)break}const ye=D[oe];ye&&ye.connect(me)}}const ne=new X,le=new X;function V(G,Q,me){ne.setFromMatrixPosition(Q.matrixWorld),le.setFromMatrixPosition(me.matrixWorld);const oe=ne.distanceTo(le),ye=Q.projectionMatrix.elements,Ee=me.projectionMatrix.elements,ze=ye[14]/(ye[10]-1),ue=ye[14]/(ye[10]+1),ae=(ye[9]+1)/ye[5],K=(ye[9]-1)/ye[5],F=(ye[8]-1)/ye[0],Oe=(Ee[8]+1)/Ee[0],be=ze*F,Pe=ze*Oe,Ce=oe/(-F+Oe),st=Ce*-F;if(Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(st),G.translateZ(Ce),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),ye[10]===-1)G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Be=ze+Ce,k=ue+Ce,A=be-st,re=Pe+(oe-st),Se=ae*ue/k*Be,Me=K*ue/k*Be;G.projectionMatrix.makePerspective(A,re,Se,Me,Be,k),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ce(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(o===null)return;let Q=G.near,me=G.far;E.texture!==null&&(E.depthNear>0&&(Q=E.depthNear),E.depthFar>0&&(me=E.depthFar)),R.near=U.near=O.near=Q,R.far=U.far=O.far=me,(j!==R.near||te!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),j=R.near,te=R.far),O.layers.mask=G.layers.mask|2,U.layers.mask=G.layers.mask|4,R.layers.mask=O.layers.mask|U.layers.mask;const oe=G.parent,ye=R.cameras;ce(R,oe);for(let Ee=0;Ee<ye.length;Ee++)ce(ye[Ee],oe);ye.length===2?V(R,O,U):R.projectionMatrix.copy(O.projectionMatrix),I(G,R,oe)};function I(G,Q,me){me===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(me.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Xl*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(G){p=G,y!==null&&(y.fixedFoveation=G),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=G)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let w=null;function H(G,Q){if(x=Q.getViewerPose(f||u),b=Q,x!==null){const me=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let oe=!1;me.length!==R.cameras.length&&(R.cameras.length=0,oe=!0);for(let Ee=0;Ee<me.length;Ee++){const ze=me[Ee];let ue=null;if(M!==null)ue=M.getViewport(ze);else{const K=_.getViewSubImage(y,ze);ue=K.viewport,Ee===0&&(e.setRenderTargetTextures(P,K.colorTexture,y.ignoreDepthValues?void 0:K.depthStencilTexture),e.setRenderTarget(P))}let ae=N[Ee];ae===void 0&&(ae=new kn,ae.layers.enable(Ee),ae.viewport=new It,N[Ee]=ae),ae.matrix.fromArray(ze.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ze.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ue.x,ue.y,ue.width,ue.height),Ee===0&&(R.matrix.copy(ae.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),oe===!0&&R.cameras.push(ae)}const ye=o.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Ee=_.getDepthInformation(me[0]);Ee&&Ee.isValid&&Ee.texture&&E.init(e,Ee,o.renderState)}}for(let me=0;me<D.length;me++){const oe=C[me],ye=D[me];oe!==null&&ye!==void 0&&ye.update(oe,Q,f||u)}w&&w(G,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),b=null}const ge=new zx;ge.setAnimationLoop(H),this.setAnimationLoop=function(G){w=G},this.dispose=function(){}}}const Kr=new Ti,hb=new Ht;function fb(s,e){function t(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,kx(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function o(S,g,P,D,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(S,g):g.isMeshToonMaterial?(l(S,g),_(S,g)):g.isMeshPhongMaterial?(l(S,g),x(S,g)):g.isMeshStandardMaterial?(l(S,g),y(S,g),g.isMeshPhysicalMaterial&&M(S,g,C)):g.isMeshMatcapMaterial?(l(S,g),b(S,g)):g.isMeshDepthMaterial?l(S,g):g.isMeshDistanceMaterial?(l(S,g),E(S,g)):g.isMeshNormalMaterial?l(S,g):g.isLineBasicMaterial?(u(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?p(S,g,P,D):g.isSpriteMaterial?f(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,t(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===En&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,t(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===En&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,t(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,t(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const P=e.get(g),D=P.envMap,C=P.envMapRotation;D&&(S.envMap.value=D,Kr.copy(C),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),S.envMapRotation.value.setFromMatrix4(hb.makeRotationFromEuler(Kr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,S.aoMapTransform))}function u(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function p(S,g,P,D){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*P,S.scale.value=D*.5,g.map&&(S.map.value=g.map,t(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function f(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function x(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,P){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===En&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,g){g.matcap&&(S.matcap.value=g.matcap)}function E(S,g){const P=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function pb(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,D){const C=D.program;r.uniformBlockBinding(P,C)}function f(P,D){let C=o[P.id];C===void 0&&(b(P),C=x(P),o[P.id]=C,P.addEventListener("dispose",S));const $=D.program;r.updateUBOMapping(P,$);const z=e.render.frame;l[P.id]!==z&&(y(P),l[P.id]=z)}function x(P){const D=_();P.__bindingPointIndex=D;const C=s.createBuffer(),$=P.__size,z=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,$,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function _(){for(let P=0;P<d;P++)if(u.indexOf(P)===-1)return u.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const D=o[P.id],C=P.uniforms,$=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let z=0,O=C.length;z<O;z++){const U=Array.isArray(C[z])?C[z]:[C[z]];for(let N=0,R=U.length;N<R;N++){const j=U[N];if(M(j,z,N,$)===!0){const te=j.__offset,Z=Array.isArray(j.value)?j.value:[j.value];let pe=0;for(let xe=0;xe<Z.length;xe++){const ne=Z[xe],le=E(ne);typeof ne=="number"||typeof ne=="boolean"?(j.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,te+pe,j.__data)):ne.isMatrix3?(j.__data[0]=ne.elements[0],j.__data[1]=ne.elements[1],j.__data[2]=ne.elements[2],j.__data[3]=0,j.__data[4]=ne.elements[3],j.__data[5]=ne.elements[4],j.__data[6]=ne.elements[5],j.__data[7]=0,j.__data[8]=ne.elements[6],j.__data[9]=ne.elements[7],j.__data[10]=ne.elements[8],j.__data[11]=0):(ne.toArray(j.__data,pe),pe+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,te,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(P,D,C,$){const z=P.value,O=D+"_"+C;if($[O]===void 0)return typeof z=="number"||typeof z=="boolean"?$[O]=z:$[O]=z.clone(),!0;{const U=$[O];if(typeof z=="number"||typeof z=="boolean"){if(U!==z)return $[O]=z,!0}else if(U.equals(z)===!1)return U.copy(z),!0}return!1}function b(P){const D=P.uniforms;let C=0;const $=16;for(let O=0,U=D.length;O<U;O++){const N=Array.isArray(D[O])?D[O]:[D[O]];for(let R=0,j=N.length;R<j;R++){const te=N[R],Z=Array.isArray(te.value)?te.value:[te.value];for(let pe=0,xe=Z.length;pe<xe;pe++){const ne=Z[pe],le=E(ne),V=C%$,ce=V%le.boundary,I=V+ce;C+=ce,I!==0&&$-I<le.storage&&(C+=$-I),te.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=C,C+=le.storage}}}const z=C%$;return z>0&&(C+=$-z),P.__size=C,P.__cache={},this}function E(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function S(P){const D=P.target;D.removeEventListener("dispose",S);const C=u.indexOf(D.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function g(){for(const P in o)s.deleteBuffer(o[P]);u=[],o={},l={}}return{bind:p,update:f,dispose:g}}class mb{constructor(e={}){const{canvas:t=iy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:f=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const b=new Uint32Array(4),E=new Int32Array(4);let S=null,g=null;const P=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Tr,this.toneMappingExposure=1;const C=this;let $=!1,z=0,O=0,U=null,N=-1,R=null;const j=new It,te=new It;let Z=null;const pe=new St(0);let xe=0,ne=t.width,le=t.height,V=1,ce=null,I=null;const w=new It(0,0,ne,le),H=new It(0,0,ne,le);let ge=!1;const G=new Mh;let Q=!1,me=!1;const oe=new Ht,ye=new Ht,Ee=new X,ze=new It,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function K(){return U===null?V:1}let F=r;function Oe(L,J){return t.getContext(L,J)}try{const L={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:f,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mh}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Xe,!1),t.addEventListener("webglcontextcreationerror",We,!1),F===null){const J="webgl2";if(F=Oe(J,L),F===null)throw Oe(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let be,Pe,Ce,st,Be,k,A,re,Se,Me,_e,Ye,Le,je,ut,Ae,He,it,lt,$e,xt,dt,Pt,Y;function Ve(){be=new yM(F),be.init(),dt=new sb(F,be),Pe=new pM(F,be,e,dt),Ce=new nb(F,be),Pe.reverseDepthBuffer&&y&&Ce.buffers.depth.setReversed(!0),st=new wM(F),Be=new jw,k=new rb(F,be,Ce,Be,Pe,dt,st),A=new xM(C),re=new _M(C),Se=new Ny(F),Pt=new hM(F,Se),Me=new SM(F,Se,st,Pt),_e=new EM(F,Me,Se,st),lt=new bM(F,Pe,k),Ae=new mM(Be),Ye=new Bw(C,A,re,be,Pe,Pt,Ae),Le=new fb(C,Be),je=new Vw,ut=new Yw(be),it=new dM(C,A,re,Ce,_e,M,p),He=new eb(C,_e,Pe),Y=new pb(F,st,Pe,Ce),$e=new fM(F,be,st),xt=new MM(F,be,st),st.programs=Ye.programs,C.capabilities=Pe,C.extensions=be,C.properties=Be,C.renderLists=je,C.shadowMap=He,C.state=Ce,C.info=st}Ve();const ve=new db(C,F);this.xr=ve,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const L=be.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=be.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(L){L!==void 0&&(V=L,this.setSize(ne,le,!1))},this.getSize=function(L){return L.set(ne,le)},this.setSize=function(L,J,he=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=L,le=J,t.width=Math.floor(L*V),t.height=Math.floor(J*V),he===!0&&(t.style.width=L+"px",t.style.height=J+"px"),this.setViewport(0,0,L,J)},this.getDrawingBufferSize=function(L){return L.set(ne*V,le*V).floor()},this.setDrawingBufferSize=function(L,J,he){ne=L,le=J,V=he,t.width=Math.floor(L*he),t.height=Math.floor(J*he),this.setViewport(0,0,L,J)},this.getCurrentViewport=function(L){return L.copy(j)},this.getViewport=function(L){return L.copy(w)},this.setViewport=function(L,J,he,fe){L.isVector4?w.set(L.x,L.y,L.z,L.w):w.set(L,J,he,fe),Ce.viewport(j.copy(w).multiplyScalar(V).round())},this.getScissor=function(L){return L.copy(H)},this.setScissor=function(L,J,he,fe){L.isVector4?H.set(L.x,L.y,L.z,L.w):H.set(L,J,he,fe),Ce.scissor(te.copy(H).multiplyScalar(V).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(L){Ce.setScissorTest(ge=L)},this.setOpaqueSort=function(L){ce=L},this.setTransparentSort=function(L){I=L},this.getClearColor=function(L){return L.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(L=!0,J=!0,he=!0){let fe=0;if(L){let ee=!1;if(U!==null){const Ue=U.texture.format;ee=Ue===Sh||Ue===yh||Ue===_h}if(ee){const Ue=U.texture.type,De=Ue===$i||Ue===rs||Ue===Ka||Ue===Qs||Ue===gh||Ue===vh,et=it.getClearColor(),Je=it.getClearAlpha(),ht=et.r,pt=et.g,tt=et.b;De?(b[0]=ht,b[1]=pt,b[2]=tt,b[3]=Je,F.clearBufferuiv(F.COLOR,0,b)):(E[0]=ht,E[1]=pt,E[2]=tt,E[3]=Je,F.clearBufferiv(F.COLOR,0,E))}else fe|=F.COLOR_BUFFER_BIT}J&&(fe|=F.DEPTH_BUFFER_BIT),he&&(fe|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Xe,!1),t.removeEventListener("webglcontextcreationerror",We,!1),je.dispose(),ut.dispose(),Be.dispose(),A.dispose(),re.dispose(),_e.dispose(),Pt.dispose(),Y.dispose(),Ye.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",os),ve.removeEventListener("sessionend",Yi),Ci.stop()};function we(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Xe(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const L=st.autoReset,J=He.enabled,he=He.autoUpdate,fe=He.needsUpdate,ee=He.type;Ve(),st.autoReset=L,He.enabled=J,He.autoUpdate=he,He.needsUpdate=fe,He.type=ee}function We(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function mt(L){const J=L.target;J.removeEventListener("dispose",mt),zt(J)}function zt(L){Zt(L),Be.remove(L)}function Zt(L){const J=Be.get(L).programs;J!==void 0&&(J.forEach(function(he){Ye.releaseProgram(he)}),L.isShaderMaterial&&Ye.releaseShaderCache(L))}this.renderBufferDirect=function(L,J,he,fe,ee,Ue){J===null&&(J=ue);const De=ee.isMesh&&ee.matrixWorld.determinant()<0,et=ao(L,J,he,fe,ee);Ce.setMaterial(fe,De);let Je=he.index,ht=1;if(fe.wireframe===!0){if(Je=Me.getWireframeAttribute(he),Je===void 0)return;ht=2}const pt=he.drawRange,tt=he.attributes.position;let bt=pt.start*ht,Nt=(pt.start+pt.count)*ht;Ue!==null&&(bt=Math.max(bt,Ue.start*ht),Nt=Math.min(Nt,(Ue.start+Ue.count)*ht)),Je!==null?(bt=Math.max(bt,0),Nt=Math.min(Nt,Je.count)):tt!=null&&(bt=Math.max(bt,0),Nt=Math.min(Nt,tt.count));const wt=Nt-bt;if(wt<0||wt===1/0)return;Pt.setup(ee,fe,et,he,Je);let dn,gt=$e;if(Je!==null&&(dn=Se.get(Je),gt=xt,gt.setIndex(dn)),ee.isMesh)fe.wireframe===!0?(Ce.setLineWidth(fe.wireframeLinewidth*K()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(ee.isLine){let rt=fe.linewidth;rt===void 0&&(rt=1),Ce.setLineWidth(rt*K()),ee.isLineSegments?gt.setMode(F.LINES):ee.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else ee.isPoints?gt.setMode(F.POINTS):ee.isSprite&&gt.setMode(F.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)gt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))gt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const rt=ee._multiDrawStarts,ii=ee._multiDrawCounts,At=ee._multiDrawCount,hn=Je?Se.get(Je).bytesPerElement:1,ri=Be.get(fe).currentProgram.getUniforms();for(let Jt=0;Jt<At;Jt++)ri.setValue(F,"_gl_DrawID",Jt),gt.render(rt[Jt]/hn,ii[Jt])}else if(ee.isInstancedMesh)gt.renderInstances(bt,wt,ee.count);else if(he.isInstancedBufferGeometry){const rt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,ii=Math.min(he.instanceCount,rt);gt.renderInstances(bt,wt,ii)}else gt.render(bt,wt)};function Et(L,J,he){L.transparent===!0&&L.side===Gn&&L.forceSinglePass===!1?(L.side=En,L.needsUpdate=!0,ls(L,J,he),L.side=Ar,L.needsUpdate=!0,ls(L,J,he),L.side=Gn):ls(L,J,he)}this.compile=function(L,J,he=null){he===null&&(he=L),g=ut.get(he),g.init(J),D.push(g),he.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),L!==he&&L.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),g.setupLights();const fe=new Set;return L.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ue=ee.material;if(Ue)if(Array.isArray(Ue))for(let De=0;De<Ue.length;De++){const et=Ue[De];Et(et,he,ee),fe.add(et)}else Et(Ue,he,ee),fe.add(Ue)}),D.pop(),g=null,fe},this.compileAsync=function(L,J,he=null){const fe=this.compile(L,J,he);return new Promise(ee=>{function Ue(){if(fe.forEach(function(De){Be.get(De).currentProgram.isReady()&&fe.delete(De)}),fe.size===0){ee(L);return}setTimeout(Ue,10)}be.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Cn=null;function yn(L){Cn&&Cn(L)}function os(){Ci.stop()}function Yi(){Ci.start()}const Ci=new zx;Ci.setAnimationLoop(yn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(L){Cn=L,ve.setAnimationLoop(L),L===null?Ci.stop():Ci.start()},ve.addEventListener("sessionstart",os),ve.addEventListener("sessionend",Yi),this.render=function(L,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(J),J=ve.getCamera()),L.isScene===!0&&L.onBeforeRender(C,L,J,U),g=ut.get(L,D.length),g.init(J),D.push(g),ye.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G.setFromProjectionMatrix(ye),me=this.localClippingEnabled,Q=Ae.init(this.clippingPlanes,me),S=je.get(L,P.length),S.init(),P.push(S),ve.enabled===!0&&ve.isPresenting===!0){const Ue=C.xr.getDepthSensingMesh();Ue!==null&&Ai(Ue,J,-1/0,C.sortObjects)}Ai(L,J,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ce,I),ae=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,ae&&it.addToRenderList(S,L),this.info.render.frame++,Q===!0&&Ae.beginShadows();const he=g.state.shadowsArray;He.render(he,L,J),Q===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const fe=S.opaque,ee=S.transmissive;if(g.setupLights(),J.isArrayCamera){const Ue=J.cameras;if(ee.length>0)for(let De=0,et=Ue.length;De<et;De++){const Je=Ue[De];Pr(fe,ee,L,Je)}ae&&it.render(L);for(let De=0,et=Ue.length;De<et;De++){const Je=Ue[De];Nr(S,L,Je,Je.viewport)}}else ee.length>0&&Pr(fe,ee,L,J),ae&&it.render(L),Nr(S,L,J);U!==null&&(k.updateMultisampleRenderTarget(U),k.updateRenderTargetMipmap(U)),L.isScene===!0&&L.onAfterRender(C,L,J),Pt.resetDefaultState(),N=-1,R=null,D.pop(),D.length>0?(g=D[D.length-1],Q===!0&&Ae.setGlobalState(C.clippingPlanes,g.state.camera)):g=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Ai(L,J,he,fe){if(L.visible===!1)return;if(L.layers.test(J.layers)){if(L.isGroup)he=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(J);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||G.intersectsSprite(L)){fe&&ze.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ye);const De=_e.update(L),et=L.material;et.visible&&S.push(L,De,et,he,ze.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||G.intersectsObject(L))){const De=_e.update(L),et=L.material;if(fe&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ze.copy(L.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),ze.copy(De.boundingSphere.center)),ze.applyMatrix4(L.matrixWorld).applyMatrix4(ye)),Array.isArray(et)){const Je=De.groups;for(let ht=0,pt=Je.length;ht<pt;ht++){const tt=Je[ht],bt=et[tt.materialIndex];bt&&bt.visible&&S.push(L,De,bt,he,ze.z,tt)}}else et.visible&&S.push(L,De,et,he,ze.z,null)}}const Ue=L.children;for(let De=0,et=Ue.length;De<et;De++)Ai(Ue[De],J,he,fe)}function Nr(L,J,he,fe){const ee=L.opaque,Ue=L.transmissive,De=L.transparent;g.setupLightsView(he),Q===!0&&Ae.setGlobalState(C.clippingPlanes,he),fe&&Ce.viewport(j.copy(fe)),ee.length>0&&Ki(ee,J,he),Ue.length>0&&Ki(Ue,J,he),De.length>0&&Ki(De,J,he),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Pr(L,J,he,fe){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[fe.id]===void 0&&(g.state.transmissionRenderTarget[fe.id]=new ss(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?eo:$i,minFilter:ns,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Ue=g.state.transmissionRenderTarget[fe.id],De=fe.viewport||j;Ue.setSize(De.z,De.w);const et=C.getRenderTarget();C.setRenderTarget(Ue),C.getClearColor(pe),xe=C.getClearAlpha(),xe<1&&C.setClearColor(16777215,.5),C.clear(),ae&&it.render(he);const Je=C.toneMapping;C.toneMapping=Tr;const ht=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),g.setupLightsView(fe),Q===!0&&Ae.setGlobalState(C.clippingPlanes,fe),Ki(L,he,fe),k.updateMultisampleRenderTarget(Ue),k.updateRenderTargetMipmap(Ue),be.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let tt=0,bt=J.length;tt<bt;tt++){const Nt=J[tt],wt=Nt.object,dn=Nt.geometry,gt=Nt.material,rt=Nt.group;if(gt.side===Gn&&wt.layers.test(fe.layers)){const ii=gt.side;gt.side=En,gt.needsUpdate=!0,ro(wt,he,fe,dn,gt,rt),gt.side=ii,gt.needsUpdate=!0,pt=!0}}pt===!0&&(k.updateMultisampleRenderTarget(Ue),k.updateRenderTargetMipmap(Ue))}C.setRenderTarget(et),C.setClearColor(pe,xe),ht!==void 0&&(fe.viewport=ht),C.toneMapping=Je}function Ki(L,J,he){const fe=J.isScene===!0?J.overrideMaterial:null;for(let ee=0,Ue=L.length;ee<Ue;ee++){const De=L[ee],et=De.object,Je=De.geometry,ht=fe===null?De.material:fe,pt=De.group;et.layers.test(he.layers)&&ro(et,J,he,Je,ht,pt)}}function ro(L,J,he,fe,ee,Ue){L.onBeforeRender(C,J,he,fe,ee,Ue),L.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ee.onBeforeRender(C,J,he,fe,L,Ue),ee.transparent===!0&&ee.side===Gn&&ee.forceSinglePass===!1?(ee.side=En,ee.needsUpdate=!0,C.renderBufferDirect(he,J,fe,ee,L,Ue),ee.side=Ar,ee.needsUpdate=!0,C.renderBufferDirect(he,J,fe,ee,L,Ue),ee.side=Gn):C.renderBufferDirect(he,J,fe,ee,L,Ue),L.onAfterRender(C,J,he,fe,ee,Ue)}function ls(L,J,he){J.isScene!==!0&&(J=ue);const fe=Be.get(L),ee=g.state.lights,Ue=g.state.shadowsArray,De=ee.state.version,et=Ye.getParameters(L,ee.state,Ue,J,he),Je=Ye.getProgramCacheKey(et);let ht=fe.programs;fe.environment=L.isMeshStandardMaterial?J.environment:null,fe.fog=J.fog,fe.envMap=(L.isMeshStandardMaterial?re:A).get(L.envMap||fe.environment),fe.envMapRotation=fe.environment!==null&&L.envMap===null?J.environmentRotation:L.envMapRotation,ht===void 0&&(L.addEventListener("dispose",mt),ht=new Map,fe.programs=ht);let pt=ht.get(Je);if(pt!==void 0){if(fe.currentProgram===pt&&fe.lightsStateVersion===De)return gi(L,et),pt}else et.uniforms=Ye.getUniforms(L),L.onBeforeCompile(et,C),pt=Ye.acquireProgram(et,Je),ht.set(Je,pt),fe.uniforms=et.uniforms;const tt=fe.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(tt.clippingPlanes=Ae.uniform),gi(L,et),fe.needsLights=rc(L),fe.lightsStateVersion=De,fe.needsLights&&(tt.ambientLightColor.value=ee.state.ambient,tt.lightProbe.value=ee.state.probe,tt.directionalLights.value=ee.state.directional,tt.directionalLightShadows.value=ee.state.directionalShadow,tt.spotLights.value=ee.state.spot,tt.spotLightShadows.value=ee.state.spotShadow,tt.rectAreaLights.value=ee.state.rectArea,tt.ltc_1.value=ee.state.rectAreaLTC1,tt.ltc_2.value=ee.state.rectAreaLTC2,tt.pointLights.value=ee.state.point,tt.pointLightShadows.value=ee.state.pointShadow,tt.hemisphereLights.value=ee.state.hemi,tt.directionalShadowMap.value=ee.state.directionalShadowMap,tt.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,tt.spotShadowMap.value=ee.state.spotShadowMap,tt.spotLightMatrix.value=ee.state.spotLightMatrix,tt.spotLightMap.value=ee.state.spotLightMap,tt.pointShadowMap.value=ee.state.pointShadowMap,tt.pointShadowMatrix.value=ee.state.pointShadowMatrix),fe.currentProgram=pt,fe.uniformsList=null,pt}function so(L){if(L.uniformsList===null){const J=L.currentProgram.getUniforms();L.uniformsList=jl.seqWithValue(J.seq,L.uniforms)}return L.uniformsList}function gi(L,J){const he=Be.get(L);he.outputColorSpace=J.outputColorSpace,he.batching=J.batching,he.batchingColor=J.batchingColor,he.instancing=J.instancing,he.instancingColor=J.instancingColor,he.instancingMorph=J.instancingMorph,he.skinning=J.skinning,he.morphTargets=J.morphTargets,he.morphNormals=J.morphNormals,he.morphColors=J.morphColors,he.morphTargetsCount=J.morphTargetsCount,he.numClippingPlanes=J.numClippingPlanes,he.numIntersection=J.numClipIntersection,he.vertexAlphas=J.vertexAlphas,he.vertexTangents=J.vertexTangents,he.toneMapping=J.toneMapping}function ao(L,J,he,fe,ee){J.isScene!==!0&&(J=ue),k.resetTextureUnits();const Ue=J.fog,De=fe.isMeshStandardMaterial?J.environment:null,et=U===null?C.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:na,Je=(fe.isMeshStandardMaterial?re:A).get(fe.envMap||De),ht=fe.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pt=!!he.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),tt=!!he.morphAttributes.position,bt=!!he.morphAttributes.normal,Nt=!!he.morphAttributes.color;let wt=Tr;fe.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(wt=C.toneMapping);const dn=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,gt=dn!==void 0?dn.length:0,rt=Be.get(fe),ii=g.state.lights;if(Q===!0&&(me===!0||L!==R)){const Sn=L===R&&fe.id===N;Ae.setState(fe,L,Sn)}let At=!1;fe.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==ii.state.version||rt.outputColorSpace!==et||ee.isBatchedMesh&&rt.batching===!1||!ee.isBatchedMesh&&rt.batching===!0||ee.isBatchedMesh&&rt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&rt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&rt.instancing===!1||!ee.isInstancedMesh&&rt.instancing===!0||ee.isSkinnedMesh&&rt.skinning===!1||!ee.isSkinnedMesh&&rt.skinning===!0||ee.isInstancedMesh&&rt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&rt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&rt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&rt.instancingMorph===!1&&ee.morphTexture!==null||rt.envMap!==Je||fe.fog===!0&&rt.fog!==Ue||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ae.numPlanes||rt.numIntersection!==Ae.numIntersection)||rt.vertexAlphas!==ht||rt.vertexTangents!==pt||rt.morphTargets!==tt||rt.morphNormals!==bt||rt.morphColors!==Nt||rt.toneMapping!==wt||rt.morphTargetsCount!==gt)&&(At=!0):(At=!0,rt.__version=fe.version);let hn=rt.currentProgram;At===!0&&(hn=ls(fe,J,ee));let ri=!1,Jt=!1,vi=!1;const Ut=hn.getUniforms(),$n=rt.uniforms;if(Ce.useProgram(hn.program)&&(ri=!0,Jt=!0,vi=!0),fe.id!==N&&(N=fe.id,Jt=!0),ri||R!==L){Ce.buffers.depth.getReversed()?(oe.copy(L.projectionMatrix),sy(oe),ay(oe),Ut.setValue(F,"projectionMatrix",oe)):Ut.setValue(F,"projectionMatrix",L.projectionMatrix),Ut.setValue(F,"viewMatrix",L.matrixWorldInverse);const qn=Ut.map.cameraPosition;qn!==void 0&&qn.setValue(F,Ee.setFromMatrixPosition(L.matrixWorld)),Pe.logarithmicDepthBuffer&&Ut.setValue(F,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Ut.setValue(F,"isOrthographic",L.isOrthographicCamera===!0),R!==L&&(R=L,Jt=!0,vi=!0)}if(ee.isSkinnedMesh){Ut.setOptional(F,ee,"bindMatrix"),Ut.setOptional(F,ee,"bindMatrixInverse");const Sn=ee.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ut.setValue(F,"boneTexture",Sn.boneTexture,k))}ee.isBatchedMesh&&(Ut.setOptional(F,ee,"batchingTexture"),Ut.setValue(F,"batchingTexture",ee._matricesTexture,k),Ut.setOptional(F,ee,"batchingIdTexture"),Ut.setValue(F,"batchingIdTexture",ee._indirectTexture,k),Ut.setOptional(F,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ut.setValue(F,"batchingColorTexture",ee._colorsTexture,k));const Ri=he.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&lt.update(ee,he,hn),(Jt||rt.receiveShadow!==ee.receiveShadow)&&(rt.receiveShadow=ee.receiveShadow,Ut.setValue(F,"receiveShadow",ee.receiveShadow)),fe.isMeshGouraudMaterial&&fe.envMap!==null&&($n.envMap.value=Je,$n.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),fe.isMeshStandardMaterial&&fe.envMap===null&&J.environment!==null&&($n.envMapIntensity.value=J.environmentIntensity),Jt&&(Ut.setValue(F,"toneMappingExposure",C.toneMappingExposure),rt.needsLights&&oo($n,vi),Ue&&fe.fog===!0&&Le.refreshFogUniforms($n,Ue),Le.refreshMaterialUniforms($n,fe,V,le,g.state.transmissionRenderTarget[L.id]),jl.upload(F,so(rt),$n,k)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(jl.upload(F,so(rt),$n,k),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Ut.setValue(F,"center",ee.center),Ut.setValue(F,"modelViewMatrix",ee.modelViewMatrix),Ut.setValue(F,"normalMatrix",ee.normalMatrix),Ut.setValue(F,"modelMatrix",ee.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const Sn=fe.uniformsGroups;for(let qn=0,An=Sn.length;qn<An;qn++){const lo=Sn[qn];Y.update(lo,hn),Y.bind(lo,hn)}}return hn}function oo(L,J){L.ambientLightColor.needsUpdate=J,L.lightProbe.needsUpdate=J,L.directionalLights.needsUpdate=J,L.directionalLightShadows.needsUpdate=J,L.pointLights.needsUpdate=J,L.pointLightShadows.needsUpdate=J,L.spotLights.needsUpdate=J,L.spotLightShadows.needsUpdate=J,L.rectAreaLights.needsUpdate=J,L.hemisphereLights.needsUpdate=J}function rc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(L,J,he){Be.get(L.texture).__webglTexture=J,Be.get(L.depthTexture).__webglTexture=he;const fe=Be.get(L);fe.__hasExternalTextures=!0,fe.__autoAllocateDepthBuffer=he===void 0,fe.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),fe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,J){const he=Be.get(L);he.__webglFramebuffer=J,he.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(L,J=0,he=0){U=L,z=J,O=he;let fe=!0,ee=null,Ue=!1,De=!1;if(L){const Je=Be.get(L);if(Je.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(F.FRAMEBUFFER,null),fe=!1;else if(Je.__webglFramebuffer===void 0)k.setupRenderTarget(L);else if(Je.__hasExternalTextures)k.rebindTextures(L,Be.get(L.texture).__webglTexture,Be.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const tt=L.depthTexture;if(Je.__boundDepthTexture!==tt){if(tt!==null&&Be.has(tt)&&(L.width!==tt.image.width||L.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(L)}}const ht=L.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(De=!0);const pt=Be.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(pt[J])?ee=pt[J][he]:ee=pt[J],Ue=!0):L.samples>0&&k.useMultisampledRTT(L)===!1?ee=Be.get(L).__webglMultisampledFramebuffer:Array.isArray(pt)?ee=pt[he]:ee=pt,j.copy(L.viewport),te.copy(L.scissor),Z=L.scissorTest}else j.copy(w).multiplyScalar(V).floor(),te.copy(H).multiplyScalar(V).floor(),Z=ge;if(Ce.bindFramebuffer(F.FRAMEBUFFER,ee)&&fe&&Ce.drawBuffers(L,ee),Ce.viewport(j),Ce.scissor(te),Ce.setScissorTest(Z),Ue){const Je=Be.get(L.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+J,Je.__webglTexture,he)}else if(De){const Je=Be.get(L.texture),ht=J||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Je.__webglTexture,he||0,ht)}N=-1},this.readRenderTargetPixels=function(L,J,he,fe,ee,Ue,De){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=Be.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&De!==void 0&&(et=et[De]),et){Ce.bindFramebuffer(F.FRAMEBUFFER,et);try{const Je=L.texture,ht=Je.format,pt=Je.type;if(!Pe.textureFormatReadable(ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=L.width-fe&&he>=0&&he<=L.height-ee&&F.readPixels(J,he,fe,ee,dt.convert(ht),dt.convert(pt),Ue)}finally{const Je=U!==null?Be.get(U).__webglFramebuffer:null;Ce.bindFramebuffer(F.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(L,J,he,fe,ee,Ue,De){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=Be.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&De!==void 0&&(et=et[De]),et){const Je=L.texture,ht=Je.format,pt=Je.type;if(!Pe.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=L.width-fe&&he>=0&&he<=L.height-ee){Ce.bindFramebuffer(F.FRAMEBUFFER,et);const tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.bufferData(F.PIXEL_PACK_BUFFER,Ue.byteLength,F.STREAM_READ),F.readPixels(J,he,fe,ee,dt.convert(ht),dt.convert(pt),0);const bt=U!==null?Be.get(U).__webglFramebuffer:null;Ce.bindFramebuffer(F.FRAMEBUFFER,bt);const Nt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ry(F,Nt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ue),F.deleteBuffer(tt),F.deleteSync(Nt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,J=null,he=0){L.isTexture!==!0&&(Wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,L=arguments[1]);const fe=Math.pow(2,-he),ee=Math.floor(L.image.width*fe),Ue=Math.floor(L.image.height*fe),De=J!==null?J.x:0,et=J!==null?J.y:0;k.setTexture2D(L,0),F.copyTexSubImage2D(F.TEXTURE_2D,he,0,0,De,et,ee,Ue),Ce.unbindTexture()},this.copyTextureToTexture=function(L,J,he=null,fe=null,ee=0){L.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture function signature has changed."),fe=arguments[0]||null,L=arguments[1],J=arguments[2],ee=arguments[3]||0,he=null);let Ue,De,et,Je,ht,pt,tt,bt,Nt;const wt=L.isCompressedTexture?L.mipmaps[ee]:L.image;he!==null?(Ue=he.max.x-he.min.x,De=he.max.y-he.min.y,et=he.isBox3?he.max.z-he.min.z:1,Je=he.min.x,ht=he.min.y,pt=he.isBox3?he.min.z:0):(Ue=wt.width,De=wt.height,et=wt.depth||1,Je=0,ht=0,pt=0),fe!==null?(tt=fe.x,bt=fe.y,Nt=fe.z):(tt=0,bt=0,Nt=0);const dn=dt.convert(J.format),gt=dt.convert(J.type);let rt;J.isData3DTexture?(k.setTexture3D(J,0),rt=F.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(k.setTexture2DArray(J,0),rt=F.TEXTURE_2D_ARRAY):(k.setTexture2D(J,0),rt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,J.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,J.unpackAlignment);const ii=F.getParameter(F.UNPACK_ROW_LENGTH),At=F.getParameter(F.UNPACK_IMAGE_HEIGHT),hn=F.getParameter(F.UNPACK_SKIP_PIXELS),ri=F.getParameter(F.UNPACK_SKIP_ROWS),Jt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,wt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Je),F.pixelStorei(F.UNPACK_SKIP_ROWS,ht),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pt);const vi=L.isDataArrayTexture||L.isData3DTexture,Ut=J.isDataArrayTexture||J.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const $n=Be.get(L),Ri=Be.get(J),Sn=Be.get($n.__renderTarget),qn=Be.get(Ri.__renderTarget);Ce.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let An=0;An<et;An++)vi&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(L).__webglTexture,ee,pt+An),L.isDepthTexture?(Ut&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.get(J).__webglTexture,ee,Nt+An),F.blitFramebuffer(Je,ht,Ue,De,tt,bt,Ue,De,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ut?F.copyTexSubImage3D(rt,ee,tt,bt,Nt+An,Je,ht,Ue,De):F.copyTexSubImage2D(rt,ee,tt,bt,Nt+An,Je,ht,Ue,De);Ce.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ut?L.isDataTexture||L.isData3DTexture?F.texSubImage3D(rt,ee,tt,bt,Nt,Ue,De,et,dn,gt,wt.data):J.isCompressedArrayTexture?F.compressedTexSubImage3D(rt,ee,tt,bt,Nt,Ue,De,et,dn,wt.data):F.texSubImage3D(rt,ee,tt,bt,Nt,Ue,De,et,dn,gt,wt):L.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ee,tt,bt,Ue,De,dn,gt,wt.data):L.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ee,tt,bt,wt.width,wt.height,dn,wt.data):F.texSubImage2D(F.TEXTURE_2D,ee,tt,bt,Ue,De,dn,gt,wt);F.pixelStorei(F.UNPACK_ROW_LENGTH,ii),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At),F.pixelStorei(F.UNPACK_SKIP_PIXELS,hn),F.pixelStorei(F.UNPACK_SKIP_ROWS,ri),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Jt),ee===0&&J.generateMipmaps&&F.generateMipmap(rt),Ce.unbindTexture()},this.copyTextureToTexture3D=function(L,J,he=null,fe=null,ee=0){return L.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),he=arguments[0]||null,fe=arguments[1]||null,L=arguments[2],J=arguments[3],ee=arguments[4]||0),Wa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,J,he,fe,ee)},this.initRenderTarget=function(L){Be.get(L).__webglFramebuffer===void 0&&k.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?k.setTextureCube(L,0):L.isData3DTexture?k.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?k.setTexture2DArray(L,0):k.setTexture2D(L,0),Ce.unbindTexture()},this.resetState=function(){z=0,O=0,U=null,Ce.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}class bh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=t}clone(){return new bh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xb extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Xx extends ra{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new X,Kl=new X,l0=new Ht,Va=new Px,Ll=new tc,vd=new X,c0=new X;class gb extends tn{constructor(e=new Fn,t=new Xx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Yl.fromBufferAttribute(t,o-1),Kl.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Yl.distanceTo(Kl);e.setAttribute("lineDistance",new Ot(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(o),Ll.radius+=l,e.ray.intersectsSphere(Ll)===!1)return;l0.copy(o).invert(),Va.copy(e.ray).applyMatrix4(l0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,f=this.isLineSegments?2:1,x=r.index,y=r.attributes.position;if(x!==null){const M=Math.max(0,u.start),b=Math.min(x.count,u.start+u.count);for(let E=M,S=b-1;E<S;E+=f){const g=x.getX(E),P=x.getX(E+1),D=Dl(this,e,Va,p,g,P);D&&t.push(D)}if(this.isLineLoop){const E=x.getX(b-1),S=x.getX(M),g=Dl(this,e,Va,p,E,S);g&&t.push(g)}}else{const M=Math.max(0,u.start),b=Math.min(y.count,u.start+u.count);for(let E=M,S=b-1;E<S;E+=f){const g=Dl(this,e,Va,p,E,E+1);g&&t.push(g)}if(this.isLineLoop){const E=Dl(this,e,Va,p,b-1,M);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Dl(s,e,t,r,o,l){const u=s.geometry.attributes.position;if(Yl.fromBufferAttribute(u,o),Kl.fromBufferAttribute(u,l),t.distanceSqToSegment(Yl,Kl,vd,c0)>r)return;vd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(vd);if(!(p<e.near||p>e.far))return{distance:p,point:c0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const u0=new X,d0=new X;class vb extends gb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)u0.fromBufferAttribute(t,o),d0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+u0.distanceTo(d0);e.setAttribute("lineDistance",new Ot(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Eh extends Tn{constructor(e,t,r,o,l,u,d,p,f){super(e,t,r,o,l,u,d,p,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,p=l-1,f;for(;d<=p;)if(o=Math.floor(d+(p-d)/2),f=r[o]-u,f<0)d=o+1;else if(f>0)p=o-1;else{p=o;break}if(o=p,r[o]===u)return o/(l-1);const x=r[o],y=r[o+1]-x,M=(u-x)/y;return(o+M)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),p=t||(u.isVector2?new ct:new X);return p.copy(d).sub(u).normalize(),p}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new X,o=[],l=[],u=[],d=new X,p=new Ht;for(let M=0;M<=e;M++){const b=M/e;o[M]=this.getTangentAt(b,new X)}l[0]=new X,u[0]=new X;let f=Number.MAX_VALUE;const x=Math.abs(o[0].x),_=Math.abs(o[0].y),y=Math.abs(o[0].z);x<=f&&(f=x,r.set(1,0,0)),_<=f&&(f=_,r.set(0,1,0)),y<=f&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let M=1;M<=e;M++){if(l[M]=l[M-1].clone(),u[M]=u[M-1].clone(),d.crossVectors(o[M-1],o[M]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(_n(o[M-1].dot(o[M]),-1,1));l[M].applyMatrix4(p.makeRotationAxis(d,b))}u[M].crossVectors(o[M],l[M])}if(t===!0){let M=Math.acos(_n(l[0].dot(l[e]),-1,1));M/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(M=-M);for(let b=1;b<=e;b++)l[b].applyMatrix4(p.makeRotationAxis(o[b],M*b)),u[b].crossVectors(o[b],l[b])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class $x extends qi{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=p}getPoint(e,t=new ct){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let p=this.aX+this.xRadius*Math.cos(d),f=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const x=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=p-this.aX,M=f-this.aY;p=y*x-M*_+this.aX,f=y*_+M*x+this.aY}return r.set(p,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _b extends $x{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Th(){let s=0,e=0,t=0,r=0;function o(l,u,d,p){s=l,e=d,t=-3*l+3*u-2*d-p,r=2*l-2*u+d+p}return{initCatmullRom:function(l,u,d,p,f){o(u,d,f*(d-l),f*(p-u))},initNonuniformCatmullRom:function(l,u,d,p,f,x,_){let y=(u-l)/f-(d-l)/(f+x)+(d-u)/x,M=(d-u)/x-(p-u)/(x+_)+(p-d)/_;y*=x,M*=x,o(u,d,y,M)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const Il=new X,_d=new Th,yd=new Th,Sd=new Th;class qx extends qi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new X){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),p=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:p===0&&d===l-1&&(d=l-2,p=1);let f,x;this.closed||d>0?f=o[(d-1)%l]:(Il.subVectors(o[0],o[1]).add(o[0]),f=Il);const _=o[d%l],y=o[(d+1)%l];if(this.closed||d+2<l?x=o[(d+2)%l]:(Il.subVectors(o[l-1],o[l-2]).add(o[l-1]),x=Il),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let b=Math.pow(f.distanceToSquared(_),M),E=Math.pow(_.distanceToSquared(y),M),S=Math.pow(y.distanceToSquared(x),M);E<1e-4&&(E=1),b<1e-4&&(b=E),S<1e-4&&(S=E),_d.initNonuniformCatmullRom(f.x,_.x,y.x,x.x,b,E,S),yd.initNonuniformCatmullRom(f.y,_.y,y.y,x.y,b,E,S),Sd.initNonuniformCatmullRom(f.z,_.z,y.z,x.z,b,E,S)}else this.curveType==="catmullrom"&&(_d.initCatmullRom(f.x,_.x,y.x,x.x,this.tension),yd.initCatmullRom(f.y,_.y,y.y,x.y,this.tension),Sd.initCatmullRom(f.z,_.z,y.z,x.z,this.tension));return r.set(_d.calc(p),yd.calc(p),Sd.calc(p)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function h0(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,p=s*d;return(2*t-2*r+l+u)*p+(-3*t+3*r-2*l-u)*d+l*s+t}function yb(s,e){const t=1-s;return t*t*e}function Sb(s,e){return 2*(1-s)*s*e}function Mb(s,e){return s*s*e}function $a(s,e,t,r){return yb(s,e)+Sb(s,t)+Mb(s,r)}function wb(s,e){const t=1-s;return t*t*t*e}function bb(s,e){const t=1-s;return 3*t*t*s*e}function Eb(s,e){return 3*(1-s)*s*s*e}function Tb(s,e){return s*s*s*e}function qa(s,e,t,r,o){return wb(s,e)+bb(s,t)+Eb(s,r)+Tb(s,o)}class Cb extends qi{constructor(e=new ct,t=new ct,r=new ct,o=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ct){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(qa(e,o.x,l.x,u.x,d.x),qa(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ab extends qi{constructor(e=new X,t=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(qa(e,o.x,l.x,u.x,d.x),qa(e,o.y,l.y,u.y,d.y),qa(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Rb extends qi{constructor(e=new ct,t=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ct){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ct){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nb extends qi{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pb extends qi{constructor(e=new ct,t=new ct,r=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ct){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set($a(e,o.x,l.x,u.x),$a(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yx extends qi{constructor(e=new X,t=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set($a(e,o.x,l.x,u.x),$a(e,o.y,l.y,u.y),$a(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lb extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ct){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,p=o[u===0?u:u-1],f=o[u],x=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set(h0(d,p.x,f.x,x.x,_.x),h0(d,p.y,f.y,x.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ct().fromArray(o))}return this}}var Db=Object.freeze({__proto__:null,ArcCurve:_b,CatmullRomCurve3:qx,CubicBezierCurve:Cb,CubicBezierCurve3:Ab,EllipseCurve:$x,LineCurve:Rb,LineCurve3:Nb,QuadraticBezierCurve:Pb,QuadraticBezierCurve3:Yx,SplineCurve:Lb});class kt extends Fn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const f=this;o=Math.floor(o),l=Math.floor(l);const x=[],_=[],y=[],M=[];let b=0;const E=[],S=r/2;let g=0;P(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(x),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(M,2));function P(){const C=new X,$=new X;let z=0;const O=(t-e)/r;for(let U=0;U<=l;U++){const N=[],R=U/l,j=R*(t-e)+e;for(let te=0;te<=o;te++){const Z=te/o,pe=Z*p+d,xe=Math.sin(pe),ne=Math.cos(pe);$.x=j*xe,$.y=-R*r+S,$.z=j*ne,_.push($.x,$.y,$.z),C.set(xe,O,ne).normalize(),y.push(C.x,C.y,C.z),M.push(Z,1-R),N.push(b++)}E.push(N)}for(let U=0;U<o;U++)for(let N=0;N<l;N++){const R=E[N][U],j=E[N+1][U],te=E[N+1][U+1],Z=E[N][U+1];(e>0||N!==0)&&(x.push(R,j,Z),z+=3),(t>0||N!==l-1)&&(x.push(j,te,Z),z+=3)}f.addGroup(g,z,0),g+=z}function D(C){const $=b,z=new ct,O=new X;let U=0;const N=C===!0?e:t,R=C===!0?1:-1;for(let te=1;te<=o;te++)_.push(0,S*R,0),y.push(0,R,0),M.push(.5,.5),b++;const j=b;for(let te=0;te<=o;te++){const pe=te/o*p+d,xe=Math.cos(pe),ne=Math.sin(pe);O.x=N*ne,O.y=S*R,O.z=N*xe,_.push(O.x,O.y,O.z),y.push(0,R,0),z.x=xe*.5+.5,z.y=ne*.5*R+.5,M.push(z.x,z.y),b++}for(let te=0;te<o;te++){const Z=$+te,pe=j+te;C===!0?x.push(pe,pe+1,Z):x.push(pe+1,pe,Z),U+=3}f.addGroup(g,U,C===!0?1:2),g+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ch extends Fn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],p=[],f=[],x=[];let _=e;const y=(t-e)/o,M=new X,b=new ct;for(let E=0;E<=o;E++){for(let S=0;S<=r;S++){const g=l+S/r*u;M.x=_*Math.cos(g),M.y=_*Math.sin(g),p.push(M.x,M.y,M.z),f.push(0,0,1),b.x=(M.x/t+1)/2,b.y=(M.y/t+1)/2,x.push(b.x,b.y)}_+=y}for(let E=0;E<o;E++){const S=E*(r+1);for(let g=0;g<r;g++){const P=g+S,D=P,C=P+r+1,$=P+r+2,z=P+1;d.push(D,C,z),d.push(C,$,z)}}this.setIndex(d),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class as extends Fn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let f=0;const x=[],_=new X,y=new X,M=[],b=[],E=[],S=[];for(let g=0;g<=r;g++){const P=[],D=g/r;let C=0;g===0&&u===0?C=.5/t:g===r&&p===Math.PI&&(C=-.5/t);for(let $=0;$<=t;$++){const z=$/t;_.x=-e*Math.cos(o+z*l)*Math.sin(u+D*d),_.y=e*Math.cos(u+D*d),_.z=e*Math.sin(o+z*l)*Math.sin(u+D*d),b.push(_.x,_.y,_.z),y.copy(_).normalize(),E.push(y.x,y.y,y.z),S.push(z+C,1-D),P.push(f++)}x.push(P)}for(let g=0;g<r;g++)for(let P=0;P<t;P++){const D=x[g][P+1],C=x[g][P],$=x[g+1][P],z=x[g+1][P+1];(g!==0||u>0)&&M.push(D,C,z),(g!==r-1||p<Math.PI)&&M.push(C,$,z)}this.setIndex(M),this.setAttribute("position",new Ot(b,3)),this.setAttribute("normal",new Ot(E,3)),this.setAttribute("uv",new Ot(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Za extends Fn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],p=[],f=[],x=new X,_=new X,y=new X;for(let M=0;M<=r;M++)for(let b=0;b<=o;b++){const E=b/o*l,S=M/r*Math.PI*2;_.x=(e+t*Math.cos(S))*Math.cos(E),_.y=(e+t*Math.cos(S))*Math.sin(E),_.z=t*Math.sin(S),d.push(_.x,_.y,_.z),x.x=e*Math.cos(E),x.y=e*Math.sin(E),y.subVectors(_,x).normalize(),p.push(y.x,y.y,y.z),f.push(b/o),f.push(M/r)}for(let M=1;M<=r;M++)for(let b=1;b<=o;b++){const E=(o+1)*M+b-1,S=(o+1)*(M-1)+b-1,g=(o+1)*(M-1)+b,P=(o+1)*M+b;u.push(E,S,P),u.push(S,g,P)}this.setIndex(u),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ah extends Fn{constructor(e=new Yx(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new X,p=new X,f=new ct;let x=new X;const _=[],y=[],M=[],b=[];E(),this.setIndex(b),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(M,2));function E(){for(let D=0;D<t;D++)S(D);S(l===!1?t:0),P(),g()}function S(D){x=e.getPointAt(D/t,x);const C=u.normals[D],$=u.binormals[D];for(let z=0;z<=o;z++){const O=z/o*Math.PI*2,U=Math.sin(O),N=-Math.cos(O);p.x=N*C.x+U*$.x,p.y=N*C.y+U*$.y,p.z=N*C.z+U*$.z,p.normalize(),y.push(p.x,p.y,p.z),d.x=x.x+r*p.x,d.y=x.y+r*p.y,d.z=x.z+r*p.z,_.push(d.x,d.y,d.z)}}function g(){for(let D=1;D<=t;D++)for(let C=1;C<=o;C++){const $=(o+1)*(D-1)+(C-1),z=(o+1)*D+(C-1),O=(o+1)*D+C,U=(o+1)*(D-1)+C;b.push($,z,U),b.push(z,O,U)}}function P(){for(let D=0;D<=t;D++)for(let C=0;C<=o;C++)f.x=D/t,f.y=C/o,M.push(f.x,f.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ah(new Db[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class wr extends ra{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tx,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ic extends tn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Md=new Ht,f0=new X,p0=new X;class Rh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;f0.setFromMatrixPosition(e.matrixWorld),t.position.copy(f0),p0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(p0),t.updateMatrixWorld(),Md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ib extends Rh{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=Xl*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ub extends ic{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new Ib}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const m0=new Ht,Ga=new X,wd=new X;class kb extends Rh{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ga),wd.copy(r.position),wd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(wd),r.updateMatrixWorld(),o.makeTranslation(-Ga.x,-Ga.y,-Ga.z),m0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(m0)}}class Fb extends ic{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new kb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ob extends Rh{constructor(){super(new Bx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mr extends ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Ob}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ul extends ic{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class zb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=x0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=x0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function x0(){return performance.now()}class Bb extends vb{constructor(e=10,t=10,r=4473924,o=8947848){r=new St(r),o=new St(o);const l=t/2,u=e/t,d=e/2,p=[],f=[];for(let y=0,M=0,b=-d;y<=t;y++,b+=u){p.push(-d,0,b,d,0,b),p.push(b,0,-d,b,0,d);const E=y===l?r:o;E.toArray(f,M),M+=3,E.toArray(f,M),M+=3,E.toArray(f,M),M+=3,E.toArray(f,M),M+=3}const x=new Fn;x.setAttribute("position",new Ot(p,3)),x.setAttribute("color",new Ot(f,3));const _=new Xx({vertexColors:!0,toneMapped:!1});super(x,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function Ja(s,e=.03,t=4){const r=s.attributes.position;for(let o=0;o<r.count;o++){const l=r.getY(o),u=r.getX(o),d=r.getZ(o),p=Math.sin(l*t+u*2)*e,f=Math.cos(l*(t*1.5)+d*3)*(e*.6);r.setZ(o,d+p+f)}return s.computeVertexNormals(),s}function g0(s){const e=new Wn;e.name="garment_hoodie";const t=new kt(.85,.95,2.1,32,24,!0),r=t.attributes.position;for(let ne=0;ne<r.count;ne++){const le=r.getY(ne),V=r.getX(ne),ce=r.getZ(ne),I=(le+1.05)/2.1,w=1+Math.sin(I*Math.PI)*.12;r.setX(ne,V*w),r.setZ(ne,ce*.75+(I>.5?(I-.5)*.15:0))}Ja(t,.02,5);const o=new ke(t,s.primary);o.castShadow=!0,o.receiveShadow=!0,o.name="primary_mesh",e.add(o);const l=new kt(.72,.76,.6,24,6,!1,-Math.PI*.35,Math.PI*.7),u=new ke(l,s.accent||s.primary);u.position.set(0,-.3,.03),u.scale.set(1.03,1,.85),u.castShadow=!0,u.name="pocket_mesh",e.add(u);const d=new kt(.025,.025,.62,12),p=new ke(d,s.accent||s.primary);p.position.set(-.55,-.3,.55),p.rotation.z=.25,e.add(p);const f=new ke(d,s.accent||s.primary);f.position.set(.55,-.3,.55),f.rotation.z=-.25,e.add(f);const x=new kt(.92,.9,.22,32),_=new ke(x,s.accent||s.primary);_.position.set(0,-1.15,0),_.scale.set(1,1,.75),_.castShadow=!0,_.name="accent_mesh_hem",e.add(_);const y=new kt(.38,.22,1.7,24,16);Ja(y,.025,4);const M=new ke(y,s.primary);M.position.set(-1.18,.15,0),M.rotation.z=.42,M.rotation.y=.1,M.castShadow=!0,e.add(M);const b=new kt(.23,.21,.28,20),E=new ke(b,s.accent||s.primary);E.position.set(-1.6,-.55,0),E.rotation.z=.42,E.name="accent_mesh_cuff_l",e.add(E);const S=new ke(y.clone(),s.primary);S.position.set(1.18,.15,0),S.rotation.z=-.42,S.rotation.y=-.1,S.castShadow=!0,e.add(S);const g=new ke(b,s.accent||s.primary);g.position.set(1.6,-.55,0),g.rotation.z=-.42,g.name="accent_mesh_cuff_r",e.add(g);const P=new as(.68,32,24,0,Math.PI*2,0,Math.PI*.72),D=P.attributes.position;for(let ne=0;ne<D.count;ne++){const le=D.getZ(ne);le>.25&&D.setZ(ne,.25-Math.sin((le-.25)*2)*.1)}P.computeVertexNormals();const C=new ke(P,s.accent||s.primary);C.position.set(0,1.35,-.15),C.rotation.x=-.15,C.scale.set(1,1.25,1.15),C.castShadow=!0,C.name="hood_mesh",e.add(C);const $=new as(.65,24,16,0,Math.PI*2,0,Math.PI*.7),z=new ke($,s.primary);z.position.set(0,1.35,-.15),z.rotation.x=-.15,z.scale.set(.98,1.22,1.12),z.material.side=En,e.add(z);const O=ne=>{const le=new qx([new X(ne*.3,.95,.42),new X(ne*.35,.6,.46),new X(ne*.28,.2,.48),new X(ne*.32,-.15,.5)]),V=new Ah(le,20,.022,8,!1),ce=new ke(V,s.cords);ce.name="cord_mesh",e.add(ce);const I=new kt(.028,.028,.14,12),w=new ke(I,s.hardware);w.position.set(ne*.32,-.18,.5),w.name="aglet_mesh",e.add(w)};O(-1),O(1);const U=new Xt(.85,.85,12,12),N=U.attributes.position;for(let ne=0;ne<N.count;ne++){const le=N.getX(ne);N.setZ(ne,-le*le*.15+.015)}U.computeVertexNormals();const R=new ke(U,s.decal);R.position.set(0,.4,.54),R.name="decal_front",e.add(R);const j=new Xt(.9,.9,12,12),te=j.attributes.position;for(let ne=0;ne<te.count;ne++){const le=te.getX(ne);te.setZ(ne,le*le*.15+.015)}j.computeVertexNormals();const Z=new ke(j,s.decal);Z.position.set(0,.35,-.53),Z.rotation.y=Math.PI,Z.name="decal_back",e.add(Z);const pe=new Xt(.35,.35),xe=new ke(pe,s.decal);return xe.position.set(-.35,.55,.52),xe.rotation.y=.2,xe.name="decal_chest_left",e.add(xe),e}function jb(s){const e=new Wn;e.name="garment_tshirt";const t=new kt(.82,.88,2.3,32,24,!0),r=t.attributes.position;for(let P=0;P<r.count;P++){const D=r.getY(P),C=r.getX(P),$=r.getZ(P),z=(D+1.15)/2.3,O=1+Math.sin(z*Math.PI)*.1;r.setX(P,C*O),r.setZ(P,$*.68+(z>.5?(z-.5)*.12:0))}Ja(t,.02,5.5);const o=new ke(t,s.primary);o.castShadow=!0,o.receiveShadow=!0,e.add(o);const l=new Za(.36,.065,16,32),u=new ke(l,s.accent||s.primary);u.position.set(0,1.15,.05),u.rotation.x=Math.PI*.45,u.castShadow=!0,u.name="collar_mesh",e.add(u);const d=new kt(.34,.3,.85,24),p=new ke(d,s.primary);p.position.set(-1.05,.7,0),p.rotation.z=.65,p.rotation.y=.1,p.castShadow=!0,e.add(p);const f=new ke(d.clone(),s.primary);f.position.set(1.05,.7,0),f.rotation.z=-.65,f.rotation.y=-.1,f.castShadow=!0,e.add(f);const x=new Za(.88,.028,12,32),_=new ke(x,s.accent||s.primary);_.position.set(0,-1.15,0),_.rotation.x=Math.PI/2,_.scale.set(1,.7,1),e.add(_);const y=new Xt(.85,.85),M=new ke(y,s.decal);M.position.set(0,.3,.48),M.name="decal_front",e.add(M);const b=new Xt(.9,.9),E=new ke(b,s.decal);E.position.set(0,.3,-.48),E.rotation.y=Math.PI,E.name="decal_back",e.add(E);const S=new Xt(.32,.32),g=new ke(S,s.decal);return g.position.set(-.32,.48,.46),g.rotation.y=.18,g.name="decal_chest_left",e.add(g),e}function Hb(s){const e=new Wn;e.name="garment_jacket";const t=new kt(.88,.92,2.2,32,24,!0),r=t.attributes.position;for(let Z=0;Z<r.count;Z++){const pe=r.getY(Z),xe=r.getX(Z),ne=r.getZ(Z),le=(pe+1.1)/2.2;r.setX(Z,xe*(1+Math.sin(le*Math.PI)*.14)),r.setZ(Z,ne*.75+(le>.4?(le-.4)*.18:0))}Ja(t,.02,6);const o=new ke(t,s.primary);o.castShadow=!0,e.add(o);const l=new kt(.42,.48,.55,32),u=new ke(l,s.accent||s.primary);u.position.set(0,1.35,.05),u.scale.set(1,1,.85),u.castShadow=!0,e.add(u);const d=new Xn(.06,2.2,.03),p=new ke(d,s.accent);p.position.set(0,0,.54),e.add(p);const f=new Xn(.045,.18,.05),x=new ke(f,s.hardware);x.position.set(0,.4,.57),e.add(x);const _=new Xn(.36,.42,.05),y=new ke(_,s.accent||s.primary);y.position.set(-.42,.35,.5),y.rotation.y=.25,e.add(y);const M=new ke(_,s.accent||s.primary);M.position.set(.42,.35,.5),M.rotation.y=-.25,e.add(M);const b=new kt(.36,.24,1.8,24),E=new ke(b,s.primary);E.position.set(-1.22,.15,0),E.rotation.z=.4,e.add(E);const S=new kt(.28,.27,.15,24),g=new ke(S,s.cords||s.accent);g.position.set(-1.38,-.2,0),g.rotation.z=.4,e.add(g);const P=new ke(b.clone(),s.primary);P.position.set(1.22,.15,0),P.rotation.z=-.4,e.add(P);const D=new ke(S,s.cords||s.accent);D.position.set(1.38,-.2,0),D.rotation.z=-.4,e.add(D);const C=new kt(.25,.23,.22,20),$=new ke(C,s.accent);$.position.set(-1.62,-.65,0),$.rotation.z=.4,e.add($);const z=new ke(C,s.accent);z.position.set(1.62,-.65,0),z.rotation.z=-.4,e.add(z);const O=new Xt(.9,.9),U=new ke(O,s.decal);U.position.set(0,.35,-.55),U.rotation.y=Math.PI,U.name="decal_back",e.add(U);const N=new Xt(.7,.7),R=new ke(N,s.decal);R.position.set(.38,.35,.54),R.rotation.y=-.2,R.name="decal_front",e.add(R);const j=new Xt(.32,.32),te=new ke(j,s.decal);return te.position.set(-.42,.58,.53),te.rotation.y=.22,te.name="decal_chest_left",e.add(te),e}function Vb(s){const e=new Wn;e.name="garment_blazer";const t=new kt(.85,.9,2.3,32,24,!0),r=t.attributes.position;for(let O=0;O<r.count;O++){const U=r.getY(O),N=r.getX(O),R=r.getZ(O),j=(U+1.15)/2.3,te=1-Math.sin(j*Math.PI*.8)*.1;r.setX(O,N*te*1.1),r.setZ(O,R*.75)}const o=new ke(t,s.primary);o.castShadow=!0,e.add(o);const l=new Xn(.38,1.1,.05),u=new ke(l,s.accent||s.primary);u.position.set(-.35,.7,.46),u.rotation.set(-.15,.35,-.2),u.castShadow=!0,e.add(u);const d=new ke(l,s.accent||s.primary);d.position.set(.35,.7,.46),d.rotation.set(-.15,-.35,.2),d.castShadow=!0,e.add(d);const p=new kt(.045,.045,.02,16),f=new ke(p,s.hardware);f.position.set(0,-.1,.52),f.rotation.x=Math.PI/2,e.add(f);const x=new ke(p,s.hardware);x.position.set(0,-.4,.52),x.rotation.x=Math.PI/2,e.add(x);const _=new Xn(.38,.1,.04),y=new ke(_,s.primary);y.position.set(-.52,-.45,.45),y.rotation.y=.3,e.add(y);const M=new ke(_,s.primary);M.position.set(.52,-.45,.45),M.rotation.y=-.3,e.add(M);const b=new kt(.35,.22,1.8,24),E=new ke(b,s.primary);E.position.set(-1.18,.18,0),E.rotation.z=.35,e.add(E);const S=new ke(b.clone(),s.primary);S.position.set(1.18,.18,0),S.rotation.z=-.35,e.add(S);const g=new Xt(.35,.35),P=new ke(g,s.decal);P.position.set(-.48,.45,.48),P.rotation.y=.3,P.name="decal_chest_left",e.add(P);const D=new Xt(.55,.55),C=new ke(D,s.decal);C.position.set(.28,.25,.5),C.rotation.y=-.18,C.name="decal_front",e.add(C);const $=new Xt(.85,.85),z=new ke($,s.decal);return z.position.set(0,.3,-.52),z.rotation.y=Math.PI,z.name="decal_back",e.add(z),e}function Gb(s){const e=new Wn;e.name="garment_pants";const t=new kt(.8,.82,.3,32),r=new ke(t,s.accent||s.primary);r.position.set(0,.95,0),r.scale.set(1,1,.75),e.add(r);const o=new kt(.38,.24,2.2,24,16);Ja(o,.02,5);const l=new ke(o,s.primary);l.position.set(-.42,-.25,0),l.rotation.z=-.05,l.castShadow=!0,e.add(l);const u=new ke(o.clone(),s.primary);u.position.set(.42,-.25,0),u.rotation.z=.05,u.castShadow=!0,e.add(u);const d=new Xn(.18,.5,.35),p=new ke(d,s.accent||s.primary);p.position.set(-.76,-.2,0),p.rotation.y=-.15,e.add(p);const f=new ke(d,s.accent||s.primary);f.position.set(.76,-.2,0),f.rotation.y=.15,e.add(f);const x=new Xn(.2,.1,.37),_=new ke(x,s.accent);_.position.set(-.77,.08,0),e.add(_);const y=new ke(x,s.accent);y.position.set(.77,.08,0),e.add(y);const M=new kt(.25,.22,.2,20),b=new ke(M,s.accent);b.position.set(-.48,-1.35,0),e.add(b);const E=new ke(M,s.accent);E.position.set(.48,-1.35,0),e.add(E);const S=new Xt(.32,.32),g=new ke(S,s.decal);g.position.set(-.86,-.2,0),g.rotation.y=-Math.PI/2,g.name="decal_chest_left",e.add(g);const P=new Xt(.4,.4),D=new ke(P,s.decal);D.position.set(-.42,-.3,.36),D.name="decal_front",e.add(D);const C=new Xt(.35,.35),$=new ke(C,s.decal);return $.position.set(.42,.4,-.36),$.rotation.y=Math.PI,$.name="decal_back",e.add($),e}function Wb(s){const e=new Wn;e.name="garment_cap";const t=new as(.8,32,24,0,Math.PI*2,0,Math.PI*.52),r=new ke(t,s.primary);r.castShadow=!0,e.add(r);const o=new kt(.86,.88,.06,24,4,!1,-Math.PI*.4,Math.PI*.8),l=new ke(o,s.accent||s.primary);l.position.set(0,-.05,.45),l.rotation.x=.2,l.scale.set(1.05,1,1.2),l.castShadow=!0,e.add(l);const u=new as(.08,16,16),d=new ke(u,s.accent||s.primary);d.position.set(0,.8,0),e.add(d);const p=new Za(.78,.035,12,24,Math.PI*.5),f=new ke(p,s.accent);f.position.set(0,.05,-.15),f.rotation.x=Math.PI/2,f.rotation.z=Math.PI*.75,e.add(f);const x=new Xn(.12,.08,.04),_=new ke(x,s.hardware);_.position.set(0,.08,-.85),e.add(_);const y=new Xt(.65,.5,8,8),M=y.attributes.position;for(let D=0;D<M.count;D++){const C=M.getX(D);M.setZ(D,-C*C*.2+.02)}y.computeVertexNormals();const b=new ke(y,s.decal);b.position.set(0,.4,.72),b.rotation.x=-.3,b.name="decal_front",e.add(b);const E=new Xt(.48,.25),S=new ke(E,s.decal);S.position.set(0,.35,-.74),S.rotation.y=Math.PI,S.rotation.x=.35,S.name="decal_back",e.add(S);const g=new Xt(.35,.3),P=new ke(g,s.decal);return P.position.set(-.75,.35,.1),P.rotation.y=-Math.PI/2,P.name="decal_chest_left",e.add(P),e}function Xb(){const s=new Wn;s.name="avatar_mannequin";const e=new wr({color:1579552,roughness:.35,metalness:.65}),t=new as(.38,32,24);t.scale(.85,1.25,1);const r=new ke(t,e);r.position.set(0,2.2,0),r.castShadow=!0,s.add(r);const o=new kt(.18,.22,.45,24),l=new ke(o,e);l.position.set(0,1.6,0),s.add(l);const u=new kt(.04,.04,1.8,16),d=new wr({color:3359061,metalness:.9,roughness:.2}),p=new ke(u,d);p.position.set(0,-2.1,0),s.add(p);const f=new kt(.7,.75,.08,32),x=new ke(f,d);return x.position.set(0,-2.95,0),s.add(x),s}function v0(s="terry",e="#14171d"){const t=document.createElement("canvas");t.width=512,t.height=512;const r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,512,512);const o=r.getImageData(0,0,512,512),l=o.data;if(s==="terry"||s==="cotton")for(let d=0;d<512;d++)for(let p=0;p<512;p++){const f=(d*512+p)*4,x=Math.sin(p*.4)*12,_=Math.cos(d*.4)*12,y=(Math.random()-.5)*18,M=x+_+y;l[f]=Math.min(255,Math.max(0,l[f]+M)),l[f+1]=Math.min(255,Math.max(0,l[f+1]+M)),l[f+2]=Math.min(255,Math.max(0,l[f+2]+M))}else if(s==="ripstop")for(let d=0;d<512;d++)for(let p=0;p<512;p++){const f=(d*512+p)*4,x=p%32===0||d%32===0,_=p%8===0||d%8===0;let y=(Math.random()-.5)*8;x?y+=28:_&&(y+=10),l[f]=Math.min(255,Math.max(0,l[f]+y)),l[f+1]=Math.min(255,Math.max(0,l[f+1]+y)),l[f+2]=Math.min(255,Math.max(0,l[f+2]+y))}else if(s==="denim"||s==="twill")for(let d=0;d<512;d++)for(let p=0;p<512;p++){const f=(d*512+p)*4,x=Math.sin((p+d*1.5)*.7)*20,_=(Math.random()-.5)*14,y=x+_;l[f]=Math.min(255,Math.max(0,l[f]+y)),l[f+1]=Math.min(255,Math.max(0,l[f+1]+y)),l[f+2]=Math.min(255,Math.max(0,l[f+2]+y))}else if(s==="leather")for(let d=0;d<512;d++)for(let p=0;p<512;p++){const f=(d*512+p)*4,x=p%16-8,_=d%16-8,M=(Math.sqrt(x*x+_*_)<6?15:-15)+(Math.random()-.5)*10;l[f]=Math.min(255,Math.max(0,l[f]+M)),l[f+1]=Math.min(255,Math.max(0,l[f+1]+M)),l[f+2]=Math.min(255,Math.max(0,l[f+2]+M))}else if(s==="velvet")for(let d=0;d<512;d++)for(let p=0;p<512;p++){const f=(d*512+p)*4,x=Math.sin(p*.1+d*.1)*15,_=(Math.random()-.5)*12,y=x+_;l[f]=Math.min(255,Math.max(0,l[f]+y)),l[f+1]=Math.min(255,Math.max(0,l[f+1]+y)),l[f+2]=Math.min(255,Math.max(0,l[f+2]+y))}r.putImageData(o,0,0);const u=new Eh(t);return u.wrapS=is,u.wrapT=is,u.repeat.set(4,4),u}function $b(s="terry"){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,256,256);const r=t.getImageData(0,0,256,256),o=r.data;for(let u=0;u<256;u++)for(let d=0;d<256;d++){const p=(u*256+d)*4;let f=128;s==="ripstop"?d%16===0||u%16===0?f=180:f=120+Math.floor((Math.random()-.5)*20):s==="denim"||s==="twill"?f=128+Math.floor(Math.sin((d+u)*.8)*35+(Math.random()-.5)*15):f=128+Math.floor(Math.sin(d*.5)*20+Math.cos(u*.5)*20+(Math.random()-.5)*15),f=Math.max(0,Math.min(255,f)),o[p]=f,o[p+1]=f,o[p+2]=f}t.putImageData(r,0,0);const l=new Eh(e);return l.wrapS=is,l.wrapT=is,l.repeat.set(6,6),l}function qb(s,e=.7,t=0,r=1){const o=document.createElement("canvas");o.width=1024,o.height=1024;const l=o.getContext("2d"),u=new Eh(o);if(u.needsUpdate=!0,!s)return u;const d=new Image;if(typeof s=="string"&&s.trim().startsWith("<svg")){const p="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(s);d.src=p}else d.crossOrigin="anonymous",d.src=s;return d.onload=()=>{l.clearRect(0,0,1024,1024),l.save(),l.globalAlpha=r,l.translate(512,512),l.rotate(t*Math.PI/180);const p=512*e;l.drawImage(d,-p/2,-p/2,p,p),l.restore(),u.needsUpdate=!0},u}function Yb({product:s,customConfig:e,onHotspotClick:t,activeHotspot:r,onExportSnapshot:o}){var ae;const l=Fe.useRef(null),u=Fe.useRef(null),d=Fe.useRef(null),p=Fe.useRef(null),f=Fe.useRef(null),x=Fe.useRef(null),_=Fe.useRef(null),y=Fe.useRef({}),M=Fe.useRef(null),b=Fe.useRef(!1),E=Fe.useRef(!1),S=Fe.useRef({x:0,y:0}),g=Fe.useRef(new X(0,0,0)),P=Fe.useRef({radius:5.5,theta:0,phi:Math.PI/2}),[D,C]=Fe.useState(!0),[$,z]=Fe.useState("studio"),[O,U]=Fe.useState(!0),[N,R]=Fe.useState("shaded"),[j,te]=Fe.useState(!0),[Z,pe]=Fe.useState(!1),[xe,ne]=Fe.useState([]),[le,V]=Fe.useState(!1);Fe.useEffect(()=>{const K=l.current;if(!K)return;const F=K.clientWidth,Oe=K.clientHeight,be=new xb;u.current=be,be.background=new St(461070),be.fog=new bh(461070,.08);const Pe=new kn(45,F/Oe,.1,100);p.current=Pe,P.current={radius:5.8,theta:.1,phi:Math.PI/2.05},ce();const Ce=new mb({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,powerPreference:"high-performance"});Ce.setSize(F,Oe),Ce.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ce.toneMapping=px,Ce.toneMappingExposure=1.15,Ce.shadowMap.enabled=!0,Ce.shadowMap.type=hx,d.current=Ce,K.appendChild(Ce.domElement);const st=new Xt(30,30),Be=new wr({color:658967,roughness:.7,metalness:.2}),k=new ke(st,Be);k.rotation.x=-Math.PI/2,k.position.y=-2.6,k.receiveShadow=!0,be.add(k);const A=new Bb(24,24,1976635,988970);A.position.y=-2.59,be.add(A);const re=new kt(1.4,1.5,.08,48),Se=new wr({color:1119780,roughness:.4,metalness:.5}),Me=new ke(re,Se);Me.position.y=-2.55,Me.receiveShadow=!0,be.add(Me);const _e=new Ch(1.42,1.48,48),Ye=new ql({color:62880,side:Gn}),Le=new ke(_e,Ye);Le.rotation.x=-Math.PI/2,Le.position.y=-2.5,be.add(Le);const je=new Wn;_.current=je,be.add(je),I("studio");const ut=new Wn;f.current=ut,be.add(ut);const Ae=Xb();x.current=Ae,be.add(Ae);const He=()=>{if(!K||!Ce||!Pe)return;const $e=K.clientWidth,xt=K.clientHeight;Pe.aspect=$e/xt,Pe.updateProjectionMatrix(),Ce.setSize($e,xt)};window.addEventListener("resize",He);let it=new zb;const lt=()=>{M.current=requestAnimationFrame(lt);const $e=it.getDelta(),xt=it.getElapsedTime();if(D&&!b.current&&(P.current.theta+=$e*.45,ce()),j&&f.current){const dt=Math.sin(xt*1.5)*.04;f.current.position.y=dt,x.current&&(x.current.position.y=dt)}Ce.render(be,Pe),ze()};return lt(),()=>{window.removeEventListener("resize",He),M.current&&cancelAnimationFrame(M.current),K&&Ce.domElement&&K.removeChild(Ce.domElement),Ce.dispose()}},[]);const ce=()=>{if(!p.current)return;const{radius:K,theta:F,phi:Oe}=P.current,be=p.current,Pe=g.current;be.position.x=Pe.x+K*Math.sin(Oe)*Math.sin(F),be.position.y=Pe.y+K*Math.cos(Oe),be.position.z=Pe.z+K*Math.sin(Oe)*Math.cos(F),be.lookAt(Pe)},I=K=>{const F=_.current;if(F){for(;F.children.length>0;)F.remove(F.children[0]);if(K==="studio"){const Oe=new Ul(16777215,.9);F.add(Oe);const be=new Mr(16777215,2.2);be.position.set(4,6,5),be.castShadow=!0,be.shadow.mapSize.width=2048,be.shadow.mapSize.height=2048,be.shadow.bias=-5e-4,F.add(be);const Pe=new Mr(16774112,1.2);Pe.position.set(-4,3,-3),F.add(Pe);const Ce=new Mr(13621468,1.8);Ce.position.set(0,5,-6),F.add(Ce)}else if(K==="cyber"){const Oe=new Ul(856866,1.4);F.add(Oe);const be=new Mr(62880,3.2);be.position.set(4,5,4),F.add(be);const Pe=new Mr(15485081,2.8);Pe.position.set(-5,4,-4),F.add(Pe);const Ce=new Fb(55797,4,15);Ce.position.set(0,-1,3),F.add(Ce)}else if(K==="golden"){const Oe=new Ul(3678736,1.2);F.add(Oe);const be=new Mr(16096779,3.5);be.position.set(5,4,4),be.castShadow=!0,F.add(be);const Pe=new Mr(8141549,1.5);Pe.position.set(-4,3,-3),F.add(Pe)}else if(K==="runway"){const Oe=new Ul(1118481,.6);F.add(Oe);const be=new Ub(16777215,5);be.position.set(0,8,2),be.angle=Math.PI/5,be.penumbra=.5,be.castShadow=!0,F.add(be);const Pe=new Mr(9741240,1.6);Pe.position.set(0,2,-6),F.add(Pe)}}};Fe.useEffect(()=>{var Ae;if(!u.current||!f.current||!s)return;const K=f.current;for(;K.children.length>0;)K.remove(K.children[0]);const F=(e==null?void 0:e.primaryColor)||"#14171d",Oe=(e==null?void 0:e.accentColor)||"#00f5a0",be=(e==null?void 0:e.cordsColor)||"#ffffff",Pe=(e==null?void 0:e.fabricId)||"terry",Ce=((Ae=s.fabrics)==null?void 0:Ae.find(He=>He.id===Pe))||{roughness:.85,metalness:.05,bumpScale:.08},st=v0(Pe,F),Be=$b(Pe),k=new wr({color:new St(F),map:st,bumpMap:Be,bumpScale:Ce.bumpScale||.06,roughness:Ce.roughness??.8,metalness:Ce.metalness??.05,wireframe:N==="wireframe",side:Gn});N==="clay"&&(k.color.set(13751771),k.roughness=.9,k.metalness=0);const A=new wr({color:new St(Oe),map:v0(Pe,Oe),bumpMap:Be,bumpScale:(Ce.bumpScale||.06)*.8,roughness:Ce.roughness??.75,metalness:Ce.metalness??.08,wireframe:N==="wireframe",side:Gn}),re=new wr({color:13421772,metalness:.95,roughness:.15}),Se=new wr({color:new St(be),roughness:.8,metalness:.05}),Me=(e==null?void 0:e.decal)||{},_e=qb(Me.customImage||Me.svgContent||null,Me.scale||.7,Me.rotation||0,Me.opacity??1),Ye=new ql({map:_e,transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,side:Gn});y.current={primary:k,accent:A,hardware:re,cords:Se,decal:Ye};let Le;const je=s.type||"hoodie";je==="hoodie"?Le=g0(y.current):je==="tshirt"?Le=jb(y.current):je==="jacket"?Le=Hb(y.current):je==="blazer"?Le=Vb(y.current):je==="pants"?Le=Gb(y.current):je==="cap"?Le=Wb(y.current):Le=g0(y.current),K.add(Le);const ut=Me.position||"front";Le.traverse(He=>{var it;(it=He.name)!=null&&it.startsWith("decal_")&&(He.visible=ut==="front"&&He.name==="decal_front"||ut==="back"&&He.name==="decal_back"||ut==="chest-left"&&He.name==="decal_chest_left")})},[s,e,N]),Fe.useEffect(()=>{x.current&&(x.current.visible=O)},[O]);const w=K=>{z(K),I(K)},H=K=>{C(!1),K==="front"?P.current={radius:5.5,theta:0,phi:Math.PI/2}:K==="back"?P.current={radius:5.5,theta:Math.PI,phi:Math.PI/2}:K==="left"?P.current={radius:5.5,theta:Math.PI/2,phi:Math.PI/2}:K==="right"?P.current={radius:5.5,theta:-Math.PI/2,phi:Math.PI/2}:K==="closeup"&&(P.current={radius:3.2,theta:0,phi:Math.PI/2.2}),ce()},ge=K=>{K.button===0?b.current=!0:K.button===2&&(E.current=!0),S.current={x:K.clientX,y:K.clientY}},G=K=>{if(!b.current&&!E.current)return;const F=K.clientX-S.current.x,Oe=K.clientY-S.current.y;S.current={x:K.clientX,y:K.clientY},b.current?(P.current.theta-=F*.007,P.current.phi=Math.max(.15,Math.min(Math.PI-.15,P.current.phi-Oe*.007)),ce()):E.current&&(g.current.y+=Oe*.005,ce())},Q=()=>{b.current=!1,E.current=!1},me=K=>{K.preventDefault(),P.current.radius=Math.max(2,Math.min(9.5,P.current.radius+K.deltaY*.005)),ce()},oe=K=>{K.touches.length===1&&(b.current=!0,S.current={x:K.touches[0].clientX,y:K.touches[0].clientY})},ye=K=>{if(!b.current||K.touches.length!==1)return;const F=K.touches[0].clientX-S.current.x,Oe=K.touches[0].clientY-S.current.y;S.current={x:K.touches[0].clientX,y:K.touches[0].clientY},P.current.theta-=F*.008,P.current.phi=Math.max(.15,Math.min(Math.PI-.15,P.current.phi-Oe*.008)),ce()},Ee=()=>{b.current=!1},ze=Fe.useCallback(()=>{if(!p.current||!l.current||!(s!=null&&s.hotspots))return;const K=l.current,F=K.clientWidth,Oe=K.clientHeight,be=p.current,Pe=s.hotspots.map(Ce=>{const st=new X(Ce.x,Ce.y,Ce.z);j&&f.current&&(st.y+=f.current.position.y),st.project(be);const Be=st.z<1,k=(st.x+1)*F/2,A=(-st.y+1)*Oe/2;return{...Ce,xScreen:k,yScreen:A,isVisible:Be}});ne(Pe)},[s,j]),ue=()=>{d.current&&(V(!0),setTimeout(()=>{try{const K=d.current,F=K.domElement.toDataURL("image/png"),Oe=document.createElement("canvas");Oe.width=K.domElement.width,Oe.height=K.domElement.height;const be=Oe.getContext("2d"),Pe=new Image;Pe.src=F,Pe.onload=()=>{var Be;be.drawImage(Pe,0,0),be.font='bold 24px "Plus Jakarta Sans", sans-serif',be.fillStyle="rgba(255, 255, 255, 0.9)",be.fillText(`ATELIER 3D // ${s.name.toUpperCase()}`,36,Oe.height-56),be.font="16px monospace",be.fillStyle="#00f5a0",be.fillText(`CONFIG ID: TC-${Math.floor(1e4+Math.random()*9e4)} | FABRIC: ${((Be=e==null?void 0:e.fabricId)==null?void 0:Be.toUpperCase())||"TERRY"}`,36,Oe.height-30);const Ce=Oe.toDataURL("image/png"),st=document.createElement("a");st.download=`${s.name.toLowerCase().replace(/\s+/g,"-")}-custom-3d-mockup.png`,st.href=Ce,st.click(),o&&o(Ce),V(!1)}}catch(K){console.error("Snapshot failed:",K),V(!1)}},150))};return h.jsxs("div",{className:`relative w-full h-full select-none overflow-hidden rounded-2xl bg-gradient-to-b from-dark-900 to-dark-950 border border-slate-800/80 shadow-2xl transition-all duration-300 ${Z?"fixed inset-0 z-50 rounded-none":""}`,children:[h.jsx("div",{ref:l,className:"w-full h-full cursor-grab active:cursor-grabbing",onMouseDown:ge,onMouseMove:G,onMouseUp:Q,onContextMenu:K=>K.preventDefault(),onWheel:me,onTouchStart:oe,onTouchMove:ye,onTouchEnd:Ee}),h.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none",children:[h.jsxs("div",{className:"flex items-center space-x-1 glass-panel px-2.5 py-1.5 rounded-xl pointer-events-auto shadow-lg border border-slate-700/60",children:[h.jsxs("span",{className:"text-[11px] font-mono uppercase text-slate-400 mr-2 flex items-center",children:[h.jsx(N0,{className:"w-3.5 h-3.5 mr-1 text-brand-cyan"})," View:"]}),["front","back","left","right","closeup"].map(K=>h.jsx("button",{onClick:()=>H(K),className:"px-2.5 py-1 text-xs font-semibold rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/60 transition capitalize",children:K},K))]}),h.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[h.jsxs("div",{className:"flex items-center space-x-1 glass-panel px-2 py-1.5 rounded-xl border border-slate-700/60 text-xs",children:[h.jsx(h_,{className:"w-3.5 h-3.5 text-brand-gold mr-1"}),h.jsxs("select",{value:$,onChange:K=>w(K.target.value),className:"bg-transparent text-slate-200 text-xs font-medium focus:outline-none cursor-pointer pr-1",children:[h.jsx("option",{value:"studio",className:"bg-dark-900 text-slate-100",children:"Softbox Studio"}),h.jsx("option",{value:"cyber",className:"bg-dark-900 text-slate-100",children:"Cyber Neon"}),h.jsx("option",{value:"golden",className:"bg-dark-900 text-slate-100",children:"Golden Hour"}),h.jsx("option",{value:"runway",className:"bg-dark-900 text-slate-100",children:"Dark Runway"})]})]}),h.jsx("button",{onClick:()=>U(!O),title:"Toggle Mannequin Avatar",className:`p-2 rounded-xl glass-panel border transition ${O?"border-brand-neon/60 text-brand-neon bg-brand-neon/10":"border-slate-700/60 text-slate-400 hover:text-slate-200"}`,children:h.jsx(m_,{className:"w-4 h-4"})}),h.jsxs("button",{onClick:()=>{const K=["shaded","clay","wireframe"],F=K[(K.indexOf(N)+1)%K.length];R(F)},title:`Mode: ${N}`,className:"p-2 rounded-xl glass-panel border border-slate-700/60 text-slate-300 hover:text-white transition flex items-center text-xs space-x-1",children:[h.jsx(fh,{className:"w-4 h-4 text-brand-cyan"}),h.jsx("span",{className:"capitalize text-[11px] hidden sm:inline",children:N})]}),h.jsx("button",{onClick:()=>C(!D),title:D?"Pause Spin":"Play Spin",className:`p-2 rounded-xl glass-panel border transition ${D?"border-brand-cyan/60 text-brand-cyan bg-brand-cyan/10":"border-slate-700/60 text-slate-400 hover:text-slate-200"}`,children:D?h.jsx(o_,{className:"w-4 h-4"}):h.jsx(l_,{className:"w-4 h-4"})}),h.jsx("button",{onClick:ue,disabled:le,title:"Export High-Res 3D Snapshot",className:"p-2 rounded-xl glass-panel border border-slate-700/60 text-slate-300 hover:text-brand-neon hover:border-brand-neon/40 transition",children:h.jsx(Yv,{className:`w-4 h-4 ${le?"animate-spin text-brand-neon":""}`})}),h.jsx("button",{onClick:()=>pe(!Z),title:Z?"Exit Fullscreen":"Fullscreen",className:"p-2 rounded-xl glass-panel border border-slate-700/60 text-slate-400 hover:text-white transition",children:Z?h.jsx(i_,{className:"w-4 h-4"}):h.jsx(t_,{className:"w-4 h-4"})})]})]}),xe.map(K=>{if(!K.isVisible)return null;const F=(r==null?void 0:r.id)===K.id;return h.jsxs("div",{style:{position:"absolute",left:`${K.xScreen}px`,top:`${K.yScreen}px`,transform:"translate(-50%, -50%)",zIndex:30},className:"group pointer-events-auto",children:[h.jsxs("button",{onClick:()=>t&&t(K),className:`relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${F?"bg-brand-neon text-dark-950 scale-125 ring-4 ring-brand-neon/40":"bg-dark-900/90 text-brand-cyan border border-brand-cyan/50 hover:scale-110 hover:border-brand-neon"}`,children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-current"}),h.jsx("span",{className:"absolute inset-0 rounded-full hotspot-pulse pointer-events-none"})]}),h.jsxs("div",{className:"absolute left-8 top-1/2 -translate-y-1/2 w-64 p-3 rounded-xl glass-panel border border-slate-700/80 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform translate-x-1 group-hover:translate-x-0 z-40 backdrop-blur-md",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 text-brand-neon text-xs font-mono font-bold uppercase tracking-wider mb-1",children:[h.jsx(Ya,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Tailored Spec"})]}),h.jsx("h4",{className:"text-sm font-bold text-white leading-tight mb-1",children:K.label}),h.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:K.desc})]})]},K.id)}),h.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none text-xs text-slate-400",children:[h.jsxs("div",{className:"glass-panel px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-mono flex items-center space-x-2",children:[h.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-brand-neon animate-pulse"}),h.jsx("span",{className:"text-slate-300 font-semibold",children:s==null?void 0:s.name}),h.jsx("span",{className:"text-slate-500",children:"|"}),h.jsx("span",{className:"text-brand-cyan",children:((ae=e==null?void 0:e.fabricId)==null?void 0:ae.toUpperCase())||"TERRY"})]}),h.jsxs("div",{className:"hidden md:flex items-center space-x-3 glass-panel px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400",children:[h.jsx("span",{children:"Drag: 360° Rotate"}),h.jsx("span",{children:"•"}),h.jsx("span",{children:"Right-Click: Pan"}),h.jsx("span",{children:"•"}),h.jsx("span",{children:"Scroll: Zoom"})]})]})]})}function Kb({product:s,customConfig:e,onChangeConfig:t,presets:r=[],onAddToCart:o,onSaveToWardrobe:l,onOpenSizeGuide:u,onExportSnapshot:d}){var xe,ne,le,V,ce,I,w,H,ge,G,Q,me,oe,ye,Ee,ze;const[p,f]=Fe.useState("colors"),[x,_]=Fe.useState(!1),[y,M]=Fe.useState(!1),b=Fe.useRef(null);if(!s)return null;const E=s.price||0,S=((xe=s.fabrics)==null?void 0:xe.find(ue=>ue.id===e.fabricId))||{},g=S.priceExtra||0,P=(ne=e.decal)!=null&&ne.customImage||(le=e.decal)!=null&&le.svgContent&&e.decal.id!=="none"?15:0,D=E+g+P,C=ue=>{t({...e,primaryColor:ue})},$=ue=>{t({...e,accentColor:ue})},z=ue=>{t({...e,cordsColor:ue})},O=ue=>{t({...e,fabricId:ue})},U=ue=>{t({...e,decal:{...e.decal,id:ue.id,svgContent:ue.svg,customImage:null}})},N=async ue=>{var K;const ae=(K=ue.target.files)==null?void 0:K[0];if(ae){_(!0);try{const F=new FileReader;F.onload=async Oe=>{const be=Oe.target.result;t({...e,decal:{...e.decal,id:"custom-upload",svgContent:null,customImage:be}});try{await fetch("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base64:be})})}catch(Pe){console.warn("Background upload failed, local base64 used:",Pe)}_(!1)},F.readAsDataURL(ae)}catch(F){console.error("File read error:",F),_(!1)}}},R=ue=>{t({...e,decal:{...e.decal,position:ue}})},j=ue=>{t({...e,decal:{...e.decal,scale:parseFloat(ue)}})},te=ue=>{t({...e,decal:{...e.decal,rotation:parseInt(ue,10)}})},Z=ue=>{t({...e,decal:{...e.decal,opacity:parseFloat(ue)}})},pe=()=>{l({productName:s.name,productId:s.id,primaryColor:e.primaryColor,accentColor:e.accentColor,cordsColor:e.cordsColor,fabricId:e.fabricId,fabricName:S.name||"Standard",size:e.size,decal:e.decal,price:D}),M(!0),setTimeout(()=>M(!1),2500)};return h.jsxs("div",{className:"flex flex-col h-full bg-dark-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden",children:[h.jsxs("div",{className:"p-5 border-b border-slate-800 bg-dark-850/80",children:[h.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[h.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-brand-neon/15 text-brand-neon border border-brand-neon/30",children:s.badge||"Studio Customizer"}),h.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[s.rating," ★ (",s.reviewsCount," reviews)"]})]}),h.jsx("h2",{className:"text-xl font-display font-bold text-white tracking-tight",children:s.name}),h.jsx("p",{className:"text-xs text-slate-400 mt-1 line-clamp-1",children:s.tagline}),h.jsxs("div",{className:"mt-3 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-baseline space-x-2",children:[h.jsxs("span",{className:"text-2xl font-display font-extrabold text-white",children:["$",D]}),g>0&&h.jsxs("span",{className:"text-xs font-mono text-brand-cyan",children:["(+$",g," ",(V=S.name)==null?void 0:V.split(" ")[0],")"]}),P>0&&h.jsx("span",{className:"text-xs font-mono text-brand-gold",children:"(+$15 Custom Decal)"})]}),s.defaultConfig&&h.jsxs("button",{onClick:()=>{var ue;t({...s.defaultConfig,decal:{...s.defaultConfig.decal,svgContent:((ue=r[0])==null?void 0:ue.svg)||null}})},title:"Reset Garment to Factory Defaults",className:"text-[11px] font-mono text-slate-400 hover:text-brand-neon flex items-center space-x-1 px-2 py-1 rounded-lg bg-dark-900 border border-slate-800 hover:border-slate-700 transition",children:[h.jsx(c_,{className:"w-3 h-3"}),h.jsx("span",{children:"Reset"})]})]})]}),h.jsx("div",{className:"grid grid-cols-4 border-b border-slate-800 text-xs font-semibold bg-dark-950/60",children:[{id:"colors",label:"Colors",icon:a_},{id:"fabrics",label:"Fabrics",icon:fh},{id:"graphics",label:"Decals",icon:Ya},{id:"sizes",label:"Fit & Size",icon:Td}].map(ue=>{const ae=ue.icon,K=p===ue.id;return h.jsxs("button",{onClick:()=>f(ue.id),className:`flex flex-col items-center justify-center py-3 px-2 border-b-2 transition duration-200 ${K?"border-brand-neon text-white bg-slate-800/40":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/20"}`,children:[h.jsx(ae,{className:`w-4 h-4 mb-1 ${K?"text-brand-neon":""}`}),h.jsx("span",{className:"text-[11px] font-medium",children:ue.label})]},ue.id)})}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[p==="colors"&&h.jsxs("div",{className:"space-y-6",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[h.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold",children:"1. Base Fabric Color"}),h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-slate-600 inline-block",style:{backgroundColor:e.primaryColor}}),h.jsx("span",{className:"text-xs font-mono text-slate-400",children:e.primaryColor})]})]}),h.jsx("div",{className:"grid grid-cols-4 gap-2 mb-3",children:(ce=s.colors)==null?void 0:ce.map(ue=>{const ae=e.primaryColor===ue.hex;return h.jsxs("button",{onClick:()=>C(ue.hex),className:`relative flex items-center p-2 rounded-xl border transition ${ae?"border-brand-neon bg-slate-800 ring-2 ring-brand-neon/30":"border-slate-800 hover:border-slate-600 bg-dark-850"}`,children:[h.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 shadow-inner flex-shrink-0 mr-2",style:{backgroundColor:ue.hex}}),h.jsx("span",{className:"text-[11px] font-medium text-slate-300 truncate",children:ue.name})]},ue.hex)})}),h.jsxs("div",{className:"flex items-center space-x-3 p-2.5 rounded-xl bg-dark-950 border border-slate-800",children:[h.jsx("input",{type:"color",value:e.primaryColor,onChange:ue=>C(ue.target.value),className:"w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 p-0"}),h.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Custom Hex Color Wheel"})]})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[h.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold",children:"2. Accent & Trims Color"}),h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-slate-600 inline-block",style:{backgroundColor:e.accentColor}}),h.jsx("span",{className:"text-xs font-mono text-slate-400",children:e.accentColor})]})]}),h.jsx("div",{className:"grid grid-cols-4 gap-2 mb-3",children:[{name:"Neon Green",hex:"#00f5a0"},{name:"Electric Cyan",hex:"#00d9f5"},{name:"Solar Amber",hex:"#f59e0b"},{name:"Hot Crimson",hex:"#ef4444"},{name:"Pure White",hex:"#ffffff"},{name:"Cyber Violet",hex:"#c084fc"},{name:"Stealth Onyx",hex:"#111827"},{name:"Chrome Grey",hex:"#64748b"}].map(ue=>{const ae=e.accentColor===ue.hex;return h.jsxs("button",{onClick:()=>$(ue.hex),className:`relative flex items-center p-2 rounded-xl border transition ${ae?"border-brand-cyan bg-slate-800 ring-2 ring-brand-cyan/30":"border-slate-800 hover:border-slate-600 bg-dark-850"}`,children:[h.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 flex-shrink-0 mr-2",style:{backgroundColor:ue.hex}}),h.jsx("span",{className:"text-[11px] font-medium text-slate-300 truncate",children:ue.name})]},ue.hex)})}),h.jsxs("div",{className:"flex items-center space-x-3 p-2.5 rounded-xl bg-dark-950 border border-slate-800",children:[h.jsx("input",{type:"color",value:e.accentColor,onChange:ue=>$(ue.target.value),className:"w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 p-0"}),h.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Custom Accent Wheel"})]})]}),h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center justify-between mb-2",children:h.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold",children:"3. Drawstrings & Aglets"})}),h.jsx("div",{className:"flex space-x-2",children:["#ffffff","#000000","#00f5a0","#00d9f5","#f59e0b","#dc2626"].map(ue=>h.jsx("button",{onClick:()=>z(ue),className:`w-8 h-8 rounded-full border-2 transition ${e.cordsColor===ue?"border-brand-neon scale-110":"border-slate-700"}`,style:{backgroundColor:ue}},ue))})]})]}),p==="fabrics"&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"Select Luxury Material Grade"}),h.jsx("span",{className:"text-xs text-brand-neon font-mono",children:"PBR Calibrated"})]}),h.jsx("div",{className:"space-y-3",children:(I=s.fabrics)==null?void 0:I.map(ue=>{const ae=e.fabricId===ue.id;return h.jsxs("div",{onClick:()=>O(ue.id),className:`p-3.5 rounded-xl border cursor-pointer transition ${ae?"border-brand-neon bg-dark-850 ring-1 ring-brand-neon/40 shadow-lg":"border-slate-800 hover:border-slate-700 bg-dark-950"}`,children:[h.jsxs("div",{className:"flex items-start justify-between mb-1",children:[h.jsxs("div",{children:[h.jsxs("h4",{className:"text-sm font-bold text-white flex items-center",children:[ue.name,ue.priceExtra>0?h.jsxs("span",{className:"ml-2 text-xs font-mono text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded",children:["+$",ue.priceExtra]}):h.jsx("span",{className:"ml-2 text-xs font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded",children:"Standard"})]}),h.jsx("span",{className:"text-[11px] font-mono text-brand-cyan",children:ue.gsm})]}),h.jsx("div",{className:`w-5 h-5 rounded-full flex items-center justify-center border ${ae?"bg-brand-neon text-dark-950 border-brand-neon":"border-slate-700"}`,children:ae&&h.jsx(Vl,{className:"w-3.5 h-3.5 stroke-[3]"})})]}),h.jsx("p",{className:"text-xs text-slate-400 leading-relaxed mt-1",children:ue.desc})]},ue.id)})})]}),p==="graphics"&&h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2",children:"Decal Placement Zone"}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"front",label:"Front Chest"},{id:"back",label:"Back Graphic"},{id:"chest-left",label:"Crest / Pocket"}].map(ue=>{var K;const ae=((K=e.decal)==null?void 0:K.position)===ue.id;return h.jsx("button",{onClick:()=>R(ue.id),className:`py-2 px-3 text-xs font-medium rounded-xl border transition ${ae?"border-brand-neon bg-brand-neon/10 text-brand-neon font-bold":"border-slate-800 text-slate-400 hover:text-white bg-dark-950"}`,children:ue.label},ue.id)})})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2",children:"Upload Custom Logo / Artwork"}),h.jsx("input",{ref:b,type:"file",accept:"image/png, image/jpeg, image/svg+xml, image/webp",className:"hidden",onChange:N}),h.jsxs("button",{onClick:()=>{var ue;return(ue=b.current)==null?void 0:ue.click()},disabled:x,className:"w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-dashed border-brand-cyan/50 hover:border-brand-cyan bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan text-xs font-semibold transition",children:[h.jsx(p_,{className:`w-4 h-4 ${x?"animate-bounce":""}`}),h.jsx("span",{children:x?"Processing artwork...":"Upload PNG / SVG / JPG (Transparent)"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2",children:"Curated Graphic Prints Library"}),h.jsxs("div",{className:"grid grid-cols-2 gap-2.5",children:[h.jsxs("div",{onClick:()=>{t({...e,decal:{...e.decal,id:"none",svgContent:null,customImage:null}})},className:`p-2.5 rounded-xl border cursor-pointer transition flex flex-col items-center justify-center bg-dark-950 ${((w=e.decal)==null?void 0:w.id)==="none"||!((H=e.decal)!=null&&H.svgContent)&&!((ge=e.decal)!=null&&ge.customImage)?"border-brand-neon ring-2 ring-brand-neon/30 bg-slate-800/60":"border-slate-800 hover:border-slate-700"}`,children:[h.jsx("div",{className:"w-16 h-16 flex items-center justify-center mb-1.5 text-slate-500",children:h.jsx(qv,{className:"w-8 h-8 opacity-60"})}),h.jsx("span",{className:"text-[11px] font-bold text-slate-200 text-center leading-tight",children:"Clean Plain"}),h.jsx("span",{className:"text-[9px] font-mono text-slate-500 uppercase",children:"Minimalist"})]}),r.map(ue=>{var K;const ae=((K=e.decal)==null?void 0:K.id)===ue.id;return h.jsxs("div",{onClick:()=>U(ue),className:`p-2.5 rounded-xl border cursor-pointer transition flex flex-col items-center justify-center bg-dark-950 ${ae?"border-brand-neon ring-2 ring-brand-neon/30 bg-slate-800/60":"border-slate-800 hover:border-slate-700"}`,children:[h.jsx("div",{className:"w-16 h-16 flex items-center justify-center mb-1.5",dangerouslySetInnerHTML:{__html:ue.svg}}),h.jsx("span",{className:"text-[11px] font-bold text-slate-200 text-center leading-tight",children:ue.name}),h.jsx("span",{className:"text-[9px] font-mono text-slate-500 uppercase",children:ue.category})]},ue.id)})]})]}),h.jsxs("div",{className:"p-3.5 rounded-xl bg-dark-950 border border-slate-800 space-y-3",children:[h.jsxs("span",{className:"text-[11px] font-mono uppercase tracking-wider text-brand-neon font-bold flex items-center",children:[h.jsx(u_,{className:"w-3.5 h-3.5 mr-1.5"})," Adjust Graphic Transform"]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[h.jsx("span",{children:"Scale"}),h.jsxs("span",{className:"font-mono",children:[Math.round((((G=e.decal)==null?void 0:G.scale)||.7)*100),"%"]})]}),h.jsx("input",{type:"range",min:"0.3",max:"1.0",step:"0.05",value:((Q=e.decal)==null?void 0:Q.scale)||.7,onChange:ue=>j(ue.target.value),className:"w-full accent-brand-neon cursor-pointer"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[h.jsx("span",{children:"Angle"}),h.jsxs("span",{className:"font-mono",children:[((me=e.decal)==null?void 0:me.rotation)||0,"°"]})]}),h.jsx("input",{type:"range",min:"-180",max:"180",step:"5",value:((oe=e.decal)==null?void 0:oe.rotation)||0,onChange:ue=>te(ue.target.value),className:"w-full accent-brand-cyan cursor-pointer"})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[h.jsx("span",{children:"Opacity"}),h.jsxs("span",{className:"font-mono",children:[Math.round((((ye=e.decal)==null?void 0:ye.opacity)??1)*100),"%"]})]}),h.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:((Ee=e.decal)==null?void 0:Ee.opacity)??1,onChange:ue=>Z(ue.target.value),className:"w-full accent-brand-neon cursor-pointer"})]})]})]}),p==="sizes"&&h.jsxs("div",{className:"space-y-5",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold",children:"Select Tailored Size"}),h.jsxs("button",{onClick:u,className:"text-xs font-mono text-brand-cyan hover:underline flex items-center",children:[h.jsx(Td,{className:"w-3.5 h-3.5 mr-1"})," View Size Chart"]})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2.5",children:(ze=s.sizes)==null?void 0:ze.map(ue=>{const ae=e.size===ue;return h.jsxs("button",{onClick:()=>t({...e,size:ue}),className:`py-3 rounded-xl border text-sm font-bold transition flex flex-col items-center justify-center ${ae?"border-brand-neon bg-brand-neon/15 text-brand-neon ring-2 ring-brand-neon/30":"border-slate-800 text-slate-300 hover:border-slate-700 bg-dark-950"}`,children:[h.jsx("span",{children:ue}),h.jsx("span",{className:"text-[10px] font-mono text-slate-500 font-normal",children:"In Stock"})]},ue)})}),h.jsxs("div",{className:"p-3.5 rounded-xl bg-dark-950 border border-slate-800/80",children:[h.jsxs("h5",{className:"text-xs font-bold text-white mb-1 flex items-center",children:[h.jsx(Qv,{className:"w-3.5 h-3.5 text-brand-gold mr-1.5"})," Silhouette & Fit Profile"]}),h.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Engineered with an oversized streetwear drape. Drop shoulders and elongated sleeves provide relaxed comfort. True to size for intentional relaxed drape, or size down for tailored fit."})]})]})]}),h.jsxs("div",{className:"p-4 border-t border-slate-800 bg-dark-850/90 space-y-2.5",children:[h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{onClick:pe,className:`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border text-xs font-semibold transition ${y?"border-brand-neon text-brand-neon bg-brand-neon/10":"border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white bg-dark-900"}`,children:[y?h.jsx(Vl,{className:"w-3.5 h-3.5"}):h.jsx(Hl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:y?"Saved in Wardrobe":"Save Design"})]}),h.jsxs("button",{onClick:d,className:"flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border border-slate-700 hover:border-brand-cyan/50 text-slate-300 hover:text-brand-cyan bg-dark-900 text-xs font-semibold transition",children:[h.jsx(Ya,{className:"w-3.5 h-3.5 text-brand-cyan"}),h.jsx("span",{children:"Export 3D Mockup"})]})]}),h.jsxs("button",{onClick:()=>{o({product:s,customConfig:e,fabric:S,price:D})},className:"w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-neon via-brand-cyan to-brand-neon text-dark-950 font-display font-extrabold text-sm tracking-wide shadow-glow-neon hover:opacity-95 active:scale-[0.98] transition",children:[h.jsx(Ys,{className:"w-4 h-4 stroke-[2.5]"}),h.jsxs("span",{children:["ADD CUSTOM CREATION — $",D]})]})]})]})}function Zb({products:s=[],onSelectProductFor3D:e,onQuickAddToCart:t}){const[r,o]=Fe.useState("All"),[l,u]=Fe.useState(""),d=["All","Hoodies","T-Shirts","Jackets","Blazers","Pants","Headwear"],p=s.filter(f=>{const x=r==="All"||f.category.toLowerCase()===r.toLowerCase(),_=f.name.toLowerCase().includes(l.toLowerCase())||f.tagline.toLowerCase().includes(l.toLowerCase())||f.category.toLowerCase().includes(l.toLowerCase());return x&&_});return h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[h.jsxs("div",{className:"relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-slate-800 shadow-2xl",children:[h.jsxs("div",{className:"relative z-10 max-w-2xl space-y-4",children:[h.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/15 text-brand-neon border border-brand-neon/30 text-xs font-mono font-bold tracking-wider",children:[h.jsx(Ya,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"2026 TECHNICAL RUNWAY COLLECTION"})]}),h.jsxs("h1",{className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight",children:["Crafted for Reality. ",h.jsx("br",{}),h.jsx("span",{className:"bg-gradient-to-r from-brand-neon via-brand-cyan to-brand-violet bg-clip-text text-transparent",children:"Tailored in 3D."})]}),h.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"Every garment is an open canvas. Select any piece from our archival drops, inspect tailoring in real-time 3D, customize luxury fabrics, and imprint custom graphic artwork."})]}),h.jsx("div",{className:"absolute right-0 top-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"}),h.jsx("div",{className:"absolute right-40 bottom-0 w-80 h-80 bg-brand-neon/10 rounded-full blur-3xl pointer-events-none"})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800",children:[h.jsx("div",{className:"flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none",children:d.map(f=>{const x=r===f;return h.jsx("button",{onClick:()=>o(f),className:`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${x?"bg-brand-neon text-dark-950 font-bold shadow-glow-neon":"text-slate-400 hover:text-white hover:bg-slate-800/60"}`,children:f},f)})}),h.jsxs("div",{className:"relative w-full sm:w-72",children:[h.jsx(J0,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),h.jsx("input",{type:"text",placeholder:"Search garments, fabrics...",value:l,onChange:f=>u(f.target.value),className:"w-full bg-dark-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon transition"})]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:p.map(f=>{var x,_,y;return h.jsxs("div",{className:"group relative flex flex-col rounded-2xl bg-dark-900 border border-slate-800/80 hover:border-brand-cyan/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1",children:[h.jsxs("div",{className:"p-4 flex items-center justify-between",children:[h.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-brand-neon/15 text-brand-neon border border-brand-neon/30",children:f.badge||"Archive"}),h.jsxs("div",{className:"flex items-center space-x-1 text-brand-gold text-xs font-mono",children:[h.jsx(d_,{className:"w-3.5 h-3.5 fill-current"}),h.jsx("span",{children:f.rating}),h.jsxs("span",{className:"text-slate-500",children:["(",f.reviewsCount,")"]})]})]}),h.jsxs("div",{onClick:()=>e(f),className:"relative mx-4 h-60 rounded-xl bg-dark-950/80 border border-slate-800/80 flex flex-col items-center justify-center cursor-pointer overflow-hidden group-hover:border-brand-cyan/40 transition",children:[h.jsxs("div",{className:"relative flex flex-col items-center",children:[h.jsx("div",{className:"w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-brand-cyan transition duration-300",children:h.jsx(Cr,{className:"w-10 h-10 text-brand-neon group-hover:text-brand-cyan transition"})}),h.jsxs("span",{className:"mt-3 text-xs font-mono font-bold text-brand-cyan flex items-center space-x-1",children:[h.jsx("span",{children:"Interactive 3D Configurator"}),h.jsx(Zl,{className:"w-3 h-3 group-hover:translate-x-1 transition"})]})]}),h.jsxs("div",{className:"absolute bottom-3 left-4 flex items-center space-x-1.5",children:[(x=f.colors)==null?void 0:x.slice(0,5).map(M=>h.jsx("span",{className:"w-3 h-3 rounded-full border border-slate-700",style:{backgroundColor:M.hex},title:M.name},M.hex)),((_=f.colors)==null?void 0:_.length)>5&&h.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["+",f.colors.length-5]})]}),h.jsxs("span",{className:"absolute bottom-3 right-4 text-[10px] font-mono text-slate-400 bg-dark-900/90 px-2 py-0.5 rounded border border-slate-800",children:[(y=f.fabrics)==null?void 0:y.length," Fabrics"]})]}),h.jsxs("div",{className:"p-5 flex-1 flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-[11px] font-mono uppercase text-brand-cyan font-bold tracking-wider mb-1",children:f.category}),h.jsx("h3",{className:"text-lg font-display font-bold text-white tracking-tight mb-1 group-hover:text-brand-neon transition",children:f.name}),h.jsx("p",{className:"text-xs text-slate-400 line-clamp-2 leading-relaxed",children:f.tagline})]}),h.jsxs("div",{className:"mt-5 pt-4 border-t border-slate-800 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs text-slate-500 block font-mono",children:"Base Price"}),h.jsxs("span",{className:"text-xl font-display font-extrabold text-white",children:["$",f.price]})]}),h.jsx("div",{className:"flex items-center space-x-2",children:h.jsxs("button",{onClick:()=>e(f),className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-brand-neon hover:text-dark-950 text-white font-semibold text-xs transition flex items-center space-x-1.5 shadow-sm",children:[h.jsx(Cr,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Customize 3D"})]})})]})]})]},f.id)})})]})}function Jb({isOpen:s,onClose:e,items:t=[],onUpdateQuantity:r,onRemoveItem:o,onProceedToCheckout:l,discountCode:u,onApplyDiscount:d,discountAmount:p=0}){const[f,x]=Fe.useState(""),[_,y]=Fe.useState("");if(!s)return null;const M=t.reduce((g,P)=>g+P.price*P.quantity,0),b=M>150||u==="FREESHIP"||t.length===0?0:15,E=Math.max(0,M-p+b),S=g=>{g.preventDefault();const P=f.trim().toUpperCase();if(P)if(P==="DRIP20"){const D=Math.round(M*.2);d(P,D),y("")}else P==="FREESHIP"?(d(P,0),y("")):y("Invalid code. Try DRIP20 (20% off) or FREESHIP")};return h.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[h.jsx("div",{onClick:e,className:"absolute inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity"}),h.jsx("div",{className:"absolute inset-y-0 right-0 max-w-full flex pl-10",children:h.jsxs("div",{className:"w-screen max-w-md bg-dark-900 border-l border-slate-800 shadow-2xl flex flex-col",children:[h.jsxs("div",{className:"p-5 border-b border-slate-800 flex items-center justify-between bg-dark-850",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx(Ys,{className:"w-5 h-5 text-brand-neon"}),h.jsx("h2",{className:"font-display font-bold text-lg text-white",children:"Your Custom Bag"}),h.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300",children:[t.length," ",t.length===1?"item":"items"]})]}),h.jsx("button",{onClick:e,className:"p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition",children:h.jsx(Qa,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-5 space-y-4",children:t.length===0?h.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center p-6 space-y-3",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-500",children:h.jsx(Ys,{className:"w-8 h-8"})}),h.jsx("h3",{className:"text-base font-bold text-white",children:"Your bag is empty"}),h.jsx("p",{className:"text-xs text-slate-400 max-w-xs",children:"Configure any garment in the 3D Studio, pick custom fabrics, and add your bespoke piece to bag."}),h.jsx("button",{onClick:e,className:"mt-2 px-5 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs",children:"Explore 3D Studio"})]}):t.map(g=>{var P;return h.jsxs("div",{className:"p-4 rounded-xl bg-dark-950 border border-slate-800/80 space-y-3",children:[h.jsxs("div",{className:"flex items-start justify-between",children:[h.jsxs("div",{children:[h.jsx("h4",{className:"text-sm font-bold text-white",children:g.productName}),h.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-400 font-mono mt-0.5",children:[h.jsxs("span",{children:["Size: ",g.size]}),h.jsx("span",{children:"•"}),h.jsx("span",{className:"text-brand-cyan",children:g.fabricName})]})]}),h.jsxs("span",{className:"text-sm font-display font-bold text-white",children:["$",g.price]})]}),h.jsxs("div",{className:"flex items-center space-x-2 text-[11px] font-mono",children:[h.jsxs("div",{className:"flex items-center space-x-1 px-2 py-0.5 rounded bg-dark-900 border border-slate-800",children:[h.jsx("span",{className:"text-slate-400",children:"Base:"}),h.jsx("span",{className:"w-3 h-3 rounded-full border border-slate-600 inline-block",style:{backgroundColor:g.primaryColor}})]}),h.jsxs("div",{className:"flex items-center space-x-1 px-2 py-0.5 rounded bg-dark-900 border border-slate-800",children:[h.jsx("span",{className:"text-slate-400",children:"Accent:"}),h.jsx("span",{className:"w-3 h-3 rounded-full border border-slate-600 inline-block",style:{backgroundColor:g.accentColor}})]}),((P=g.decal)==null?void 0:P.id)&&g.decal.id!=="none"&&h.jsxs("span",{className:"px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold border border-brand-gold/20 truncate",children:["Decal: ",g.decal.position]})]}),h.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800/60",children:[h.jsxs("div",{className:"flex items-center space-x-2 glass-panel px-2 py-1 rounded-lg border border-slate-700/60",children:[h.jsx("button",{onClick:()=>r(g.cartId,Math.max(1,g.quantity-1)),className:"p-0.5 text-slate-400 hover:text-white",children:h.jsx(r_,{className:"w-3.5 h-3.5"})}),h.jsx("span",{className:"text-xs font-mono font-bold text-white px-2",children:g.quantity}),h.jsx("button",{onClick:()=>r(g.cartId,g.quantity+1),className:"p-0.5 text-slate-400 hover:text-white",children:h.jsx($0,{className:"w-3.5 h-3.5"})})]}),h.jsxs("button",{onClick:()=>o(g.cartId),className:"text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1 font-mono transition",children:[h.jsx(ph,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Remove"})]})]})]},g.cartId)})}),t.length>0&&h.jsxs("div",{className:"p-5 border-t border-slate-800 bg-dark-850/95 space-y-4",children:[h.jsxs("form",{onSubmit:S,className:"space-y-1",children:[h.jsxs("div",{className:"flex space-x-2",children:[h.jsxs("div",{className:"relative flex-1",children:[h.jsx(f_,{className:"w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2"}),h.jsx("input",{type:"text",placeholder:"Promo code (e.g. DRIP20)",value:f,onChange:g=>x(g.target.value),className:"w-full bg-dark-950 border border-slate-800 rounded-xl pl-8 pr-3 py-2 text-xs text-white uppercase placeholder-slate-500 font-mono focus:outline-none focus:border-brand-neon"})]}),h.jsx("button",{type:"submit",className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition",children:"Apply"})]}),_&&h.jsx("p",{className:"text-[11px] text-rose-400 font-mono",children:_}),u&&h.jsxs("p",{className:"text-[11px] text-brand-neon font-mono",children:["✓ Code ",u," applied!"]})]}),h.jsxs("div",{className:"space-y-2 text-xs font-mono text-slate-400",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{children:"Subtotal"}),h.jsxs("span",{className:"text-white",children:["$",M]})]}),p>0&&h.jsxs("div",{className:"flex justify-between text-brand-neon",children:[h.jsxs("span",{children:["Discount (",u,")"]}),h.jsxs("span",{children:["-$",p]})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{children:"Standard Shipping"}),h.jsx("span",{className:"text-white",children:b===0?"FREE":`$${b}`})]}),h.jsxs("div",{className:"pt-2 border-t border-slate-800 flex justify-between text-sm font-bold text-white font-display",children:[h.jsx("span",{children:"Total Amount"}),h.jsxs("span",{className:"text-brand-neon text-lg",children:["$",E]})]})]}),h.jsxs("button",{onClick:l,className:"w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-neon via-brand-cyan to-brand-neon text-dark-950 font-display font-extrabold text-sm tracking-wide shadow-glow-neon flex items-center justify-center space-x-2 hover:opacity-95 transition",children:[h.jsx("span",{children:"PROCEED TO CHECKOUT"}),h.jsx(Zl,{className:"w-4 h-4 stroke-[2.5]"})]}),h.jsxs("div",{className:"flex items-center justify-center space-x-2 text-[10px] font-mono text-slate-500",children:[h.jsx(Jl,{className:"w-3.5 h-3.5 text-brand-neon"}),h.jsx("span",{children:"Encrypted 256-Bit Custom Order Dispatch"})]})]})]})})]})}var Nh={};(function s(e,t,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),w=I.getContext("2d");w.fillRect(0,0,1,1);var H=I.transferToImageBitmap();w.createPattern(H,"no-repeat")}catch{return!1}return!0})();function p(){}function f(I){var w=t.exports.Promise,H=w!==void 0?w:e.Promise;return typeof H=="function"?new H(I):(I(p,p),null)}var x=(function(I,w){return{transform:function(H){if(I)return H;if(w.has(H))return w.get(H);var ge=new OffscreenCanvas(H.width,H.height),G=ge.getContext("2d");return G.drawImage(H,0,0),w.set(H,ge),ge},clear:function(){w.clear()}}})(d,new Map),_=(function(){var I=Math.floor(16.666666666666668),w,H,ge={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(w=function(Q){var me=Math.random();return ge[me]=requestAnimationFrame(function oe(ye){G===ye||G+I-1<ye?(G=ye,delete ge[me],Q()):ge[me]=requestAnimationFrame(oe)}),me},H=function(Q){ge[Q]&&cancelAnimationFrame(ge[Q])}):(w=function(Q){return setTimeout(Q,I)},H=function(Q){return clearTimeout(Q)}),{frame:w,cancel:H}})(),y=(function(){var I,w,H={};function ge(G){function Q(me,oe){G.postMessage({options:me||{},callback:oe})}G.init=function(oe){var ye=oe.transferControlToOffscreen();G.postMessage({canvas:ye},[ye])},G.fire=function(oe,ye,Ee){if(w)return Q(oe,null),w;var ze=Math.random().toString(36).slice(2);return w=f(function(ue){function ae(K){K.data.callback===ze&&(delete H[ze],G.removeEventListener("message",ae),w=null,x.clear(),Ee(),ue())}G.addEventListener("message",ae),Q(oe,ze),H[ze]=ae.bind(null,{data:{callback:ze}})}),w},G.reset=function(){G.postMessage({reset:!0});for(var oe in H)H[oe](),delete H[oe]}}return function(){if(I)return I;if(!r&&l){var G=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([G])))}catch(Q){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Q),null}ge(I)}return I}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(I,w){return w?w(I):I}function E(I){return I!=null}function S(I,w,H){return b(I&&E(I[w])?I[w]:M[w],H)}function g(I){return I<0?0:Math.floor(I)}function P(I,w){return Math.floor(Math.random()*(w-I))+I}function D(I){return parseInt(I,16)}function C(I){return I.map($)}function $(I){var w=String(I).replace(/[^0-9a-f]/gi,"");return w.length<6&&(w=w[0]+w[0]+w[1]+w[1]+w[2]+w[2]),{r:D(w.substring(0,2)),g:D(w.substring(2,4)),b:D(w.substring(4,6))}}function z(I){var w=S(I,"origin",Object);return w.x=S(w,"x",Number),w.y=S(w,"y",Number),w}function O(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function U(I){var w=I.getBoundingClientRect();I.width=w.width,I.height=w.height}function N(I){var w=document.createElement("canvas");return w.style.position="fixed",w.style.top="0px",w.style.left="0px",w.style.pointerEvents="none",w.style.zIndex=I,w}function R(I,w,H,ge,G,Q,me,oe,ye){I.save(),I.translate(w,H),I.rotate(Q),I.scale(ge,G),I.arc(0,0,1,me,oe,ye),I.restore()}function j(I){var w=I.angle*(Math.PI/180),H=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-w+(.5*H-Math.random()*H),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function te(I,w){w.x+=Math.cos(w.angle2D)*w.velocity+w.drift,w.y+=Math.sin(w.angle2D)*w.velocity+w.gravity,w.velocity*=w.decay,w.flat?(w.wobble=0,w.wobbleX=w.x+10*w.scalar,w.wobbleY=w.y+10*w.scalar,w.tiltSin=0,w.tiltCos=0,w.random=1):(w.wobble+=w.wobbleSpeed,w.wobbleX=w.x+10*w.scalar*Math.cos(w.wobble),w.wobbleY=w.y+10*w.scalar*Math.sin(w.wobble),w.tiltAngle+=.1,w.tiltSin=Math.sin(w.tiltAngle),w.tiltCos=Math.cos(w.tiltAngle),w.random=Math.random()+2);var H=w.tick++/w.totalTicks,ge=w.x+w.random*w.tiltCos,G=w.y+w.random*w.tiltSin,Q=w.wobbleX+w.random*w.tiltCos,me=w.wobbleY+w.random*w.tiltSin;if(I.fillStyle="rgba("+w.color.r+", "+w.color.g+", "+w.color.b+", "+(1-H)+")",I.beginPath(),u&&w.shape.type==="path"&&typeof w.shape.path=="string"&&Array.isArray(w.shape.matrix))I.fill(le(w.shape.path,w.shape.matrix,w.x,w.y,Math.abs(Q-ge)*.1,Math.abs(me-G)*.1,Math.PI/10*w.wobble));else if(w.shape.type==="bitmap"){var oe=Math.PI/10*w.wobble,ye=Math.abs(Q-ge)*.1,Ee=Math.abs(me-G)*.1,ze=w.shape.bitmap.width*w.scalar,ue=w.shape.bitmap.height*w.scalar,ae=new DOMMatrix([Math.cos(oe)*ye,Math.sin(oe)*ye,-Math.sin(oe)*Ee,Math.cos(oe)*Ee,w.x,w.y]);ae.multiplySelf(new DOMMatrix(w.shape.matrix));var K=I.createPattern(x.transform(w.shape.bitmap),"no-repeat");K.setTransform(ae),I.globalAlpha=1-H,I.fillStyle=K,I.fillRect(w.x-ze/2,w.y-ue/2,ze,ue),I.globalAlpha=1}else if(w.shape==="circle")I.ellipse?I.ellipse(w.x,w.y,Math.abs(Q-ge)*w.ovalScalar,Math.abs(me-G)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI):R(I,w.x,w.y,Math.abs(Q-ge)*w.ovalScalar,Math.abs(me-G)*w.ovalScalar,Math.PI/10*w.wobble,0,2*Math.PI);else if(w.shape==="star")for(var F=Math.PI/2*3,Oe=4*w.scalar,be=8*w.scalar,Pe=w.x,Ce=w.y,st=5,Be=Math.PI/st;st--;)Pe=w.x+Math.cos(F)*be,Ce=w.y+Math.sin(F)*be,I.lineTo(Pe,Ce),F+=Be,Pe=w.x+Math.cos(F)*Oe,Ce=w.y+Math.sin(F)*Oe,I.lineTo(Pe,Ce),F+=Be;else I.moveTo(Math.floor(w.x),Math.floor(w.y)),I.lineTo(Math.floor(w.wobbleX),Math.floor(G)),I.lineTo(Math.floor(Q),Math.floor(me)),I.lineTo(Math.floor(ge),Math.floor(w.wobbleY));return I.closePath(),I.fill(),w.tick<w.totalTicks}function Z(I,w,H,ge,G){var Q=w.slice(),me=I.getContext("2d"),oe,ye,Ee=f(function(ze){function ue(){oe=ye=null,me.clearRect(0,0,ge.width,ge.height),x.clear(),G(),ze()}function ae(){r&&!(ge.width===o.width&&ge.height===o.height)&&(ge.width=I.width=o.width,ge.height=I.height=o.height),!ge.width&&!ge.height&&(H(I),ge.width=I.width,ge.height=I.height),me.clearRect(0,0,ge.width,ge.height),Q=Q.filter(function(K){return te(me,K)}),Q.length?oe=_.frame(ae):ue()}oe=_.frame(ae),ye=ue});return{addFettis:function(ze){return Q=Q.concat(ze),Ee},canvas:I,promise:Ee,reset:function(){oe&&_.cancel(oe),ye&&ye()}}}function pe(I,w){var H=!I,ge=!!S(w||{},"resize"),G=!1,Q=S(w,"disableForReducedMotion",Boolean),me=l&&!!S(w||{},"useWorker"),oe=me?y():null,ye=H?O:U,Ee=I&&oe?!!I.__confetti_initialized:!1,ze=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ue;function ae(F,Oe,be){for(var Pe=S(F,"particleCount",g),Ce=S(F,"angle",Number),st=S(F,"spread",Number),Be=S(F,"startVelocity",Number),k=S(F,"decay",Number),A=S(F,"gravity",Number),re=S(F,"drift",Number),Se=S(F,"colors",C),Me=S(F,"ticks",Number),_e=S(F,"shapes"),Ye=S(F,"scalar"),Le=!!S(F,"flat"),je=z(F),ut=Pe,Ae=[],He=I.width*je.x,it=I.height*je.y;ut--;)Ae.push(j({x:He,y:it,angle:Ce,spread:st,startVelocity:Be,color:Se[ut%Se.length],shape:_e[P(0,_e.length)],ticks:Me,decay:k,gravity:A,drift:re,scalar:Ye,flat:Le}));return ue?ue.addFettis(Ae):(ue=Z(I,Ae,ye,Oe,be),ue.promise)}function K(F){var Oe=Q||S(F,"disableForReducedMotion",Boolean),be=S(F,"zIndex",Number);if(Oe&&ze)return f(function(Be){Be()});H&&ue?I=ue.canvas:H&&!I&&(I=N(be),document.body.appendChild(I)),ge&&!Ee&&ye(I);var Pe={width:I.width,height:I.height};oe&&!Ee&&oe.init(I),Ee=!0,oe&&(I.__confetti_initialized=!0);function Ce(){if(oe){var Be={getBoundingClientRect:function(){if(!H)return I.getBoundingClientRect()}};ye(Be),oe.postMessage({resize:{width:Be.width,height:Be.height}});return}Pe.width=Pe.height=null}function st(){ue=null,ge&&(G=!1,e.removeEventListener("resize",Ce)),H&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,Ee=!1)}return ge&&!G&&(G=!0,e.addEventListener("resize",Ce,!1)),oe?oe.fire(F,Pe,st):ae(F,Pe,st)}return K.reset=function(){oe&&oe.reset(),ue&&ue.reset()},K}var xe;function ne(){return xe||(xe=pe(null,{useWorker:!0,resize:!0})),xe}function le(I,w,H,ge,G,Q,me){var oe=new Path2D(I),ye=new Path2D;ye.addPath(oe,new DOMMatrix(w));var Ee=new Path2D;return Ee.addPath(ye,new DOMMatrix([Math.cos(me)*G,Math.sin(me)*G,-Math.sin(me)*Q,Math.cos(me)*Q,H,ge])),Ee}function V(I){if(!u)throw new Error("path confetti are not supported in this browser");var w,H;typeof I=="string"?w=I:(w=I.path,H=I.matrix);var ge=new Path2D(w),G=document.createElement("canvas"),Q=G.getContext("2d");if(!H){for(var me=1e3,oe=me,ye=me,Ee=0,ze=0,ue,ae,K=0;K<me;K+=2)for(var F=0;F<me;F+=2)Q.isPointInPath(ge,K,F,"nonzero")&&(oe=Math.min(oe,K),ye=Math.min(ye,F),Ee=Math.max(Ee,K),ze=Math.max(ze,F));ue=Ee-oe,ae=ze-ye;var Oe=10,be=Math.min(Oe/ue,Oe/ae);H=[be,0,0,be,-Math.round(ue/2+oe)*be,-Math.round(ae/2+ye)*be]}return{type:"path",path:w,matrix:H}}function ce(I){var w,H=1,ge="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?w=I:(w=I.text,H="scalar"in I?I.scalar:H,G="fontFamily"in I?I.fontFamily:G,ge="color"in I?I.color:ge);var Q=10*H,me=""+Q+"px "+G,oe=new OffscreenCanvas(Q,Q),ye=oe.getContext("2d");ye.font=me;var Ee=ye.measureText(w),ze=Math.ceil(Ee.actualBoundingBoxRight+Ee.actualBoundingBoxLeft),ue=Math.ceil(Ee.actualBoundingBoxAscent+Ee.actualBoundingBoxDescent),ae=2,K=Ee.actualBoundingBoxLeft+ae,F=Ee.actualBoundingBoxAscent+ae;ze+=ae+ae,ue+=ae+ae,oe=new OffscreenCanvas(ze,ue),ye=oe.getContext("2d"),ye.font=me,ye.fillStyle=ge,ye.fillText(w,K,F);var Oe=1/H;return{type:"bitmap",bitmap:oe.transferToImageBitmap(),matrix:[Oe,0,0,Oe,-ze*Oe/2,-ue*Oe/2]}}t.exports=function(){return ne().apply(this,arguments)},t.exports.reset=function(){ne().reset()},t.exports.create=pe,t.exports.shapeFromPath=V,t.exports.shapeFromText=ce})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Nh,!1);const Qb=Nh.exports;Nh.exports.create;function eE({isOpen:s,onClose:e,cartItems:t=[],totalAmount:r=0,subtotal:o=0,shipping:l=0,discount:u=0,onOrderPlaced:d}){var z,O;const[p,f]=Fe.useState("shipping"),[x,_]=Fe.useState(!1),[y,M]=Fe.useState(null),[b,E]=Fe.useState({fullName:"Alex Rivera",email:"alex.rivera@example.com",address:"742 Evergreen Terrace",city:"San Francisco",state:"CA",postalCode:"94107",country:"United States"}),[S,g]=Fe.useState("card"),[P,D]=Fe.useState({number:"•••• •••• •••• 4242",name:"ALEX RIVERA",expiry:"12/28",cvv:"984"});if(!s)return null;const C=U=>{U.preventDefault(),f("payment")},$=async U=>{U.preventDefault(),_(!0);try{const N={customer:b,items:t.map(te=>({productId:te.productId,name:te.productName,type:te.type,primaryColor:te.primaryColor,accentColor:te.accentColor,fabricId:te.fabricId,fabricName:te.fabricName,size:te.size,decal:te.decal,quantity:te.quantity,price:te.price})),paymentMethod:S==="card"?"Credit Card (ending 4242)":S.toUpperCase(),subtotal:o,shipping:l,discount:u,total:r},j=await(await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)})).json();j.success&&j.order&&(M(j.order),f("success"),d(j.order),Qb({particleCount:120,spread:70,origin:{y:.6}}))}catch(N){console.error("Order creation failed:",N)}finally{_(!1)}};return h.jsxs("div",{className:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4",children:[h.jsx("div",{onClick:p==="success"?e:void 0,className:"fixed inset-0 bg-dark-950/85 backdrop-blur-md transition-opacity"}),h.jsxs("div",{className:"relative w-full max-w-xl bg-dark-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10",children:[h.jsxs("div",{className:"p-6 border-b border-slate-800 flex items-center justify-between bg-dark-850",children:[h.jsxs("div",{children:[h.jsx("div",{className:"flex items-center space-x-2",children:h.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-brand-neon font-bold",children:"Atelier 3D Checkout"})}),h.jsxs("h3",{className:"text-xl font-display font-bold text-white mt-0.5",children:[p==="shipping"&&"1. Delivery Address",p==="payment"&&"2. Secure Payment",p==="success"&&"Order Confirmed!"]})]}),h.jsx("button",{onClick:e,className:"p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition",children:h.jsx(Qa,{className:"w-5 h-5"})})]}),p==="shipping"&&h.jsxs("form",{onSubmit:C,className:"p-6 space-y-4",children:[h.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[h.jsxs("div",{className:"col-span-2",children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Full Name"}),h.jsx("input",{type:"text",required:!0,value:b.fullName,onChange:U=>E({...b,fullName:U.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon font-sans"})]}),h.jsxs("div",{className:"col-span-2",children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Email for Tracking Updates"}),h.jsx("input",{type:"email",required:!0,value:b.email,onChange:U=>E({...b,email:U.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon font-sans"})]}),h.jsxs("div",{className:"col-span-2",children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Street Address"}),h.jsx("input",{type:"text",required:!0,value:b.address,onChange:U=>E({...b,address:U.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon font-sans"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"City"}),h.jsx("input",{type:"text",required:!0,value:b.city,onChange:U=>E({...b,city:U.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Postal Code"}),h.jsx("input",{type:"text",required:!0,value:b.postalCode,onChange:U=>E({...b,postalCode:U.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon"})]}),h.jsxs("div",{className:"col-span-2",children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Country"}),h.jsxs("select",{value:b.country,onChange:U=>E({...b,country:U.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon",children:[h.jsx("option",{value:"United States",children:"United States"}),h.jsx("option",{value:"United Kingdom",children:"United Kingdom"}),h.jsx("option",{value:"Germany",children:"Germany"}),h.jsx("option",{value:"Japan",children:"Japan"}),h.jsx("option",{value:"Canada",children:"Canada"}),h.jsx("option",{value:"France",children:"France"}),h.jsx("option",{value:"Australia",children:"Australia"})]})]})]}),h.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between",children:[h.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Total: $",r]}),h.jsxs("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center space-x-2 hover:opacity-90 transition shadow-glow-neon",children:[h.jsx("span",{children:"CONTINUE TO PAYMENT"}),h.jsx(Zl,{className:"w-3.5 h-3.5"})]})]})]}),p==="payment"&&h.jsxs("form",{onSubmit:$,className:"p-6 space-y-5",children:[h.jsx("div",{className:"grid grid-cols-3 gap-3",children:[{id:"card",label:"Credit Card",icon:cm},{id:"apple",label:"Apple Pay",icon:Jl},{id:"klarna",label:"Klarna 4x",icon:Ya}].map(U=>{const N=U.icon,R=S===U.id;return h.jsxs("button",{type:"button",onClick:()=>g(U.id),className:`py-3 px-2 rounded-xl border flex flex-col items-center justify-center text-xs transition ${R?"border-brand-cyan bg-brand-cyan/10 text-brand-cyan font-bold ring-2 ring-brand-cyan/30":"border-slate-800 text-slate-400 hover:text-white bg-dark-950"}`,children:[h.jsx(N,{className:"w-4 h-4 mb-1"}),h.jsx("span",{children:U.label})]},U.id)})}),h.jsxs("div",{className:"relative rounded-2xl p-5 bg-gradient-to-tr from-slate-900 via-dark-800 to-slate-900 border border-slate-700 shadow-xl overflow-hidden",children:[h.jsxs("div",{className:"flex justify-between items-start mb-6",children:[h.jsx("span",{className:"text-xs font-mono text-brand-cyan font-bold tracking-widest",children:"ATELIER BLACK"}),h.jsx("span",{className:"text-xs font-mono text-slate-400",children:"VISA / MASTERCARD"})]}),h.jsx("div",{className:"text-lg font-mono tracking-widest text-white mb-4",children:"4242 •••• •••• 9842"}),h.jsxs("div",{className:"flex justify-between items-end text-xs font-mono text-slate-300",children:[h.jsxs("div",{children:[h.jsx("span",{className:"block text-[9px] text-slate-500 uppercase",children:"Cardholder"}),h.jsx("span",{children:b.fullName.toUpperCase()})]}),h.jsxs("div",{children:[h.jsx("span",{className:"block text-[9px] text-slate-500 uppercase",children:"Expires"}),h.jsx("span",{children:"12 / 28"})]})]})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Card Number"}),h.jsxs("div",{className:"relative",children:[h.jsx(cm,{className:"w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2"}),h.jsx("input",{type:"text",required:!0,value:P.number,onChange:U=>D({...P,number:U.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-brand-neon"})]})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Expiration"}),h.jsx("input",{type:"text",required:!0,value:P.expiry,onChange:U=>D({...P,expiry:U.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-brand-neon"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"CVC / CVV"}),h.jsx("input",{type:"password",required:!0,maxLength:4,value:P.cvv,onChange:U=>D({...P,cvv:U.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-brand-neon"})]})]})]}),h.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between",children:[h.jsx("button",{type:"button",onClick:()=>f("shipping"),className:"text-xs font-mono text-slate-400 hover:text-white",children:"← Back"}),h.jsxs("button",{type:"submit",disabled:x,className:"px-6 py-3 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center space-x-2 hover:opacity-90 transition shadow-glow-neon",children:[h.jsx(e_,{className:"w-3.5 h-3.5 stroke-[2.5]"}),h.jsx("span",{children:x?"AUTHORIZING...":`PAY $${r}`})]})]})]}),p==="success"&&y&&h.jsxs("div",{className:"p-8 text-center space-y-6",children:[h.jsx("div",{className:"w-16 h-16 rounded-3xl bg-brand-neon/20 border border-brand-neon/50 text-brand-neon flex items-center justify-center mx-auto shadow-glow-neon animate-bounce",children:h.jsx(A0,{className:"w-9 h-9"})}),h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono text-brand-neon font-bold uppercase tracking-wider",children:"Production Queue Initiated"}),h.jsxs("h2",{className:"text-2xl font-display font-extrabold text-white mt-1",children:["Thank You, ",(z=y.customer)==null?void 0:z.fullName,"!"]}),h.jsx("p",{className:"text-xs text-slate-400 mt-1 max-w-sm mx-auto",children:"Your custom 3D garment specs have been submitted to our digital cutter and tailoring workshop."})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-2",children:[h.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[h.jsx("span",{className:"text-slate-400",children:"Order Reference"}),h.jsx("span",{className:"text-brand-cyan font-bold",children:y.orderId})]}),h.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[h.jsx("span",{className:"text-slate-400",children:"Items Ordered"}),h.jsxs("span",{className:"text-white",children:[(O=y.items)==null?void 0:O.length," Bespoke Pieces"]})]}),h.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[h.jsx("span",{className:"text-slate-400",children:"Total Charged"}),h.jsxs("span",{className:"text-brand-neon font-bold",children:["$",y.total]})]}),h.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[h.jsx("span",{className:"text-slate-400",children:"Estimated Delivery"}),h.jsx("span",{className:"text-white",children:"3-5 Business Days"})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[h.jsxs("button",{onClick:()=>{e(),window.location.hash=`#track-${y.orderId}`},className:"flex-1 py-3 px-4 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center justify-center space-x-2 hover:opacity-90 shadow-glow-neon",children:[h.jsx(Gl,{className:"w-4 h-4"}),h.jsx("span",{children:"TRACK MY ORDER"})]}),h.jsx("button",{onClick:e,className:"py-3 px-5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold",children:"Back to Studio"})]})]})]})]})}function tE({initialOrderId:s="TC-94821",onOpenStudio:e}){var E,S,g,P,D,C,$,z,O;const[t,r]=Fe.useState(s),[o,l]=Fe.useState(null),[u,d]=Fe.useState(!1),[p,f]=Fe.useState(""),[x,_]=Fe.useState([]);Fe.useEffect(()=>{fetch("/api/orders").then(U=>U.json()).then(U=>{U.success&&U.orders&&_(U.orders.map(N=>N.orderId))}).catch(()=>{})},[]);const y=async U=>{if(U){d(!0),f("");try{const R=await(await fetch(`/api/orders/${U.trim()}`)).json();R.success&&R.order?l(R.order):(f(`Order "${U}" not found. Try TC-94821 or place a new order.`),l(null))}catch{f("Failed to fetch order tracking."),l(null)}finally{d(!1)}}};Fe.useEffect(()=>{s&&(r(s),y(s))},[s]);const M=U=>{U.preventDefault(),y(t)},b=U=>{r(U),y(U)};return h.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[h.jsxs("div",{className:"text-center space-y-3 max-w-xl mx-auto",children:[h.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 text-xs font-mono font-bold uppercase tracking-wider",children:[h.jsx(Gl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Real-time Atelier Tracking"})]}),h.jsx("h1",{className:"text-3xl font-display font-extrabold text-white",children:"Live Garment Dispatch Status"}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Track digital fabric cutting, high-density 3D screen printing, and tailored assembly of your bespoke pieces."}),h.jsxs("form",{onSubmit:M,className:"flex gap-2 pt-2",children:[h.jsxs("div",{className:"relative flex-1",children:[h.jsx(J0,{className:"w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2"}),h.jsx("input",{type:"text",placeholder:"Enter Order Code (e.g. TC-94821)",value:t,onChange:U=>r(U.target.value),className:"w-full bg-dark-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white font-mono uppercase focus:outline-none focus:border-brand-neon"})]}),h.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs font-display hover:opacity-90 transition shadow-glow-neon",children:"Track Order"})]}),x.length>0&&h.jsxs("div",{className:"pt-2 flex flex-wrap items-center justify-center gap-2 text-xs font-mono",children:[h.jsx("span",{className:"text-slate-500",children:"Quick track:"}),x.slice(0,4).map(U=>h.jsx("button",{onClick:()=>b(U),className:`px-2.5 py-1 rounded-lg border text-[11px] transition ${t===U?"border-brand-neon text-brand-neon bg-brand-neon/10 font-bold":"border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 bg-dark-900"}`,children:U},U))]}),p&&h.jsx("p",{className:"text-xs font-mono text-rose-400 pt-1",children:p})]}),u&&h.jsxs("div",{className:"text-center py-12 text-slate-400 font-mono text-xs flex items-center justify-center space-x-2",children:[h.jsx(Ed,{className:"w-4 h-4 animate-spin text-brand-neon"}),h.jsx("span",{children:"Retrieving garment production log..."})]}),o&&!u&&h.jsxs("div",{className:"space-y-6 animate-fade-in",children:[h.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl space-y-6",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Order ID"}),h.jsx("h3",{className:"text-2xl font-mono font-bold text-brand-neon",children:o.orderId})]}),h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40",children:o.status}),h.jsx("button",{onClick:()=>y(o.orderId),className:"p-1.5 rounded-lg bg-dark-950 border border-slate-800 text-slate-400 hover:text-brand-neon hover:border-brand-neon/40 transition",title:"Refresh Live Status",children:h.jsx(Ed,{className:"w-3.5 h-3.5"})}),h.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Placed: ",new Date(o.createdAt).toLocaleDateString()]})]})]}),h.jsx("div",{className:"relative pt-4",children:h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-4",children:(E=o.timeline)==null?void 0:E.map((U,N)=>h.jsxs("div",{className:"flex sm:flex-col items-center sm:text-center space-x-3 sm:space-x-0 sm:space-y-2",children:[h.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition shadow-lg ${U.done?"bg-brand-neon text-dark-950 shadow-glow-neon ring-4 ring-brand-neon/20":"bg-dark-950 text-slate-500 border border-slate-800"}`,children:U.done?h.jsx(A0,{className:"w-5 h-5 stroke-[2.5]"}):N+1}),h.jsxs("div",{children:[h.jsx("h4",{className:`text-xs font-bold leading-tight ${U.done?"text-white":"text-slate-500"}`,children:U.status}),U.time?h.jsx("span",{className:"text-[10px] font-mono text-brand-cyan block",children:new Date(U.time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}):h.jsx("span",{className:"text-[10px] font-mono text-slate-600 block",children:"Pending"})]})]},N))})})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[h.jsxs("div",{className:"md:col-span-2 p-6 rounded-3xl bg-dark-900 border border-slate-800 space-y-4",children:[h.jsxs("h4",{className:"text-sm font-bold text-white font-display flex items-center space-x-2",children:[h.jsx(s_,{className:"w-4 h-4 text-brand-neon"}),h.jsx("span",{children:"Custom Garments in This Order"})]}),h.jsx("div",{className:"space-y-3",children:(S=o.items)==null?void 0:S.map((U,N)=>{var R;return h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-950 border border-slate-800 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("h5",{className:"text-sm font-bold text-white font-display",children:U.name}),h.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-400 font-mono mt-1",children:[h.jsxs("span",{children:["Size: ",h.jsx("strong",{className:"text-white",children:U.size})]}),h.jsx("span",{children:"•"}),h.jsx("span",{className:"text-brand-cyan",children:U.fabricName||"French Terry"}),((R=U.decal)==null?void 0:R.position)&&h.jsxs(h.Fragment,{children:[h.jsx("span",{children:"•"}),h.jsxs("span",{className:"text-brand-gold capitalize",children:["Zone: ",U.decal.position]})]})]}),h.jsxs("div",{className:"flex items-center space-x-2 mt-2",children:[h.jsx("span",{className:"text-[11px] font-mono text-slate-500",children:"Palette:"}),h.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:U.primaryColor},title:`Primary: ${U.primaryColor}`}),U.accentColor&&h.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:U.accentColor},title:`Accent: ${U.accentColor}`})]})]}),h.jsxs("div",{className:"text-right",children:[h.jsxs("span",{className:"text-sm font-display font-bold text-brand-neon",children:["$",U.price*(U.quantity||1)]}),h.jsxs("span",{className:"text-xs text-slate-500 block font-mono",children:["Qty: ",U.quantity||1]})]})]},N)})})]}),h.jsxs("div",{className:"p-6 rounded-3xl bg-dark-900 border border-slate-800 space-y-4",children:[h.jsxs("h4",{className:"text-sm font-bold text-white font-display flex items-center space-x-2",children:[h.jsx(Gl,{className:"w-4 h-4 text-brand-cyan"}),h.jsx("span",{children:"Delivery Logistics"})]}),h.jsxs("div",{className:"p-3 rounded-xl bg-dark-950 border border-slate-800/80 space-y-1",children:[h.jsx("div",{className:"text-[10px] font-mono text-brand-neon uppercase tracking-wider font-bold",children:"Express Courier"}),h.jsx("div",{className:"text-xs text-white font-bold",children:"DHL Carbon-Neutral Express"}),h.jsx("div",{className:"text-[11px] font-mono text-slate-400",children:"Estimated Arrival: 3-5 Business Days"})]}),h.jsxs("div",{className:"space-y-1 text-xs text-slate-300 font-mono",children:[h.jsx("p",{className:"font-bold text-white",children:(g=o.customer)==null?void 0:g.fullName}),h.jsx("p",{children:(P=o.customer)==null?void 0:P.address}),h.jsxs("p",{children:[(D=o.customer)==null?void 0:D.city,", ",(C=o.customer)==null?void 0:C.state," ",($=o.customer)==null?void 0:$.postalCode]}),h.jsx("p",{children:(z=o.customer)==null?void 0:z.country}),h.jsx("p",{className:"pt-2 text-slate-400",children:(O=o.customer)==null?void 0:O.email})]}),h.jsxs("div",{className:"pt-4 border-t border-slate-800 space-y-1 text-xs font-mono",children:[h.jsxs("div",{className:"flex justify-between text-slate-400",children:[h.jsx("span",{children:"Subtotal"}),h.jsxs("span",{className:"text-white",children:["$",o.subtotal]})]}),o.discount>0&&h.jsxs("div",{className:"flex justify-between text-brand-neon",children:[h.jsx("span",{children:"Promo Discount"}),h.jsxs("span",{children:["-$",o.discount]})]}),h.jsxs("div",{className:"flex justify-between text-slate-400",children:[h.jsx("span",{children:"Shipping"}),h.jsx("span",{className:"text-white",children:o.shipping===0?"FREE":`$${o.shipping}`})]}),h.jsxs("div",{className:"flex justify-between text-brand-neon font-bold text-sm pt-2 border-t border-slate-800/80",children:[h.jsx("span",{children:"Total Paid"}),h.jsxs("span",{children:["$",o.total]})]})]})]})]})]})]})}function nE({savedDesigns:s=[],onLoadIntoStudio:e,onAddToCart:t,onDeleteDesign:r}){return h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-violet/20 text-brand-cyan border border-brand-violet/40 text-xs font-mono font-bold tracking-wider mb-2",children:[h.jsx(Hl,{className:"w-3.5 h-3.5 text-brand-neon"}),h.jsx("span",{children:"Personal Atelier Archive"})]}),h.jsx("h1",{className:"text-3xl font-display font-extrabold text-white",children:"Your Saved 3D Wardrobe"}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"Revisit your custom-crafted garments, adjust tailoring configurations, or dispatch them directly to cart."})]}),h.jsxs("span",{className:"text-xs font-mono text-slate-400 bg-dark-900 px-3 py-1.5 rounded-xl border border-slate-800",children:[s.length," Saved Creations"]})]}),s.length===0?h.jsxs("div",{className:"text-center py-20 rounded-3xl bg-dark-900 border border-slate-800 p-8 space-y-4",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-500 mx-auto",children:h.jsx(Hl,{className:"w-8 h-8"})}),h.jsx("h3",{className:"text-lg font-bold text-white",children:"No custom designs saved yet"}),h.jsx("p",{className:"text-xs text-slate-400 max-w-sm mx-auto",children:'Open the 3D Studio, pick custom fabrics, colors, and decal placements, and click "Save Design" to store your creations here.'}),h.jsx("button",{onClick:()=>e(null),className:"px-6 py-2.5 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs font-display hover:opacity-90 shadow-glow-neon",children:"Launch 3D Studio"})]}):h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(o=>h.jsxs("div",{className:"group rounded-2xl bg-dark-900 border border-slate-800 hover:border-brand-neon/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl",children:[h.jsxs("div",{className:"p-5 bg-dark-950/80 border-b border-slate-800/80 flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-base font-bold text-white font-display group-hover:text-brand-neon transition",children:o.name||o.productName}),h.jsx("span",{className:"text-xs font-mono text-slate-400",children:o.productName})]}),h.jsx("button",{onClick:()=>r(o.id),title:"Delete design",className:"p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition",children:h.jsx(ph,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:"p-5 space-y-4 flex-1",children:[h.jsxs("div",{onClick:()=>e(o),className:"h-36 rounded-xl bg-dark-900 border border-slate-800 flex flex-col items-center justify-center cursor-pointer hover:border-brand-cyan/60 transition group-hover:bg-dark-850",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-brand-neon mb-2 shadow-lg",children:h.jsx(Cr,{className:"w-6 h-6"})}),h.jsxs("span",{className:"text-xs font-mono text-brand-cyan flex items-center space-x-1",children:[h.jsx("span",{children:"Inspect in 3D"}),h.jsx(Zl,{className:"w-3 h-3"})]})]}),h.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"text-slate-400",children:"Fabric Grade:"}),h.jsx("span",{className:"text-white font-bold",children:o.fabricName||"French Terry"})]}),h.jsxs("div",{className:"flex justify-between",children:[h.jsx("span",{className:"text-slate-400",children:"Selected Size:"}),h.jsx("span",{className:"text-brand-neon font-bold",children:o.size||"L"})]}),h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("span",{className:"text-slate-400",children:"Palette:"}),h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:o.primaryColor},title:"Primary Color"}),h.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:o.accentColor},title:"Accent Color"}),o.cordsColor&&h.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:o.cordsColor},title:"Hardware / Cords"})]})]})]})]}),h.jsxs("div",{className:"p-4 bg-dark-850/90 border-t border-slate-800 flex items-center justify-between gap-3",children:[h.jsxs("span",{className:"text-lg font-display font-extrabold text-white",children:["$",o.price||128]}),h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsxs("button",{onClick:()=>e(o),className:"px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition flex items-center space-x-1",children:[h.jsx(Cr,{className:"w-3.5 h-3.5 text-brand-cyan"}),h.jsx("span",{children:"Open 3D"})]}),h.jsxs("button",{onClick:()=>t(o),className:"px-4 py-2 rounded-xl bg-brand-neon hover:opacity-90 text-dark-950 font-bold text-xs transition flex items-center space-x-1.5 shadow-glow-neon",children:[h.jsx(Ys,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Add to Bag"})]})]})]})]},o.id))})]})}function iE({onRefreshData:s}){var R,j,te,Z,pe,xe,ne,le,V,ce,I;const[e,t]=Fe.useState(null),[r,o]=Fe.useState([]),[l,u]=Fe.useState(!0),[d,p]=Fe.useState(!1),[f,x]=Fe.useState(null),[_,y]=Fe.useState("All"),[M,b]=Fe.useState(null),[E,S]=Fe.useState(null),[g,P]=Fe.useState({name:"",category:"Hoodies",type:"hoodie",price:135,tagline:"",description:""}),D=w=>{S(w),setTimeout(()=>S(null),3e3)},C=async()=>{u(!0);try{const[w,H]=await Promise.all([fetch("/api/admin/metrics"),fetch("/api/orders")]),ge=await w.json(),G=await H.json();ge.success&&t(ge.metrics),G.success&&o(G.orders)}catch(w){console.error("Failed to load admin stats:",w)}finally{u(!1)}};Fe.useEffect(()=>{C()},[]);const $=async(w,H)=>{b(w);try{const G=await(await fetch(`/api/orders/${w}/status`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({status:H})})).json();G.success&&G.order&&(o(Q=>Q.map(me=>me.orderId===w?G.order:me)),(f==null?void 0:f.orderId)===w&&x(G.order),D(`Order ${w} updated to: ${H}`))}catch(ge){console.error("Failed to update status:",ge)}finally{b(null)}},z=async w=>{if(window.confirm(`Delete order ${w}?`))try{(await(await fetch(`/api/orders/${w}`,{method:"DELETE"})).json()).success&&(o(G=>G.filter(Q=>Q.orderId!==w)),(f==null?void 0:f.orderId)===w&&x(null),D(`Order ${w} deleted.`))}catch(H){console.error("Failed to delete order:",H)}},O=async w=>{w.preventDefault();try{const ge=await(await fetch("/api/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...g,price:Number(g.price),colors:[{name:"Onyx Black",hex:"#14171d"},{name:"Cyber Neon",hex:"#00f5a0"},{name:"Electric Cyan",hex:"#00d9f5"},{name:"Pure White",hex:"#ffffff"}],fabrics:[{id:"terry",name:"Heavyweight French Terry",gsm:"480 GSM",priceExtra:0,desc:"Dense combed knit."},{id:"cotton",name:"Brushed Fleece Cotton",gsm:"420 GSM",priceExtra:15,desc:"Thermal fleece."}],sizes:["S","M","L","XL"]})})).json();ge.success&&(p(!1),P({name:"",category:"Hoodies",type:"hoodie",price:135,tagline:"",description:""}),C(),D(`Garment model ${ge.product.name} launched!`),s&&s())}catch(H){console.error("Failed to create product:",H)}},U=["Order Confirmed","Laser Fabric Cut","Custom 3D Print & Stitch","Quality Inspection","Dispatched with Courier","Delivered"],N=r.filter(w=>_==="All"?!0:_==="In Production"?w.status==="In Production"||w.status==="Laser Fabric Cut"||w.status==="Custom 3D Print & Stitch":_==="Dispatched"?w.status==="Dispatched with Courier"||w.status==="Shipped":_==="Delivered"?w.status==="Delivered":w.status===_);return h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[E&&h.jsxs("div",{className:"fixed bottom-6 right-6 z-50 glass-panel border border-brand-neon/60 px-4 py-2.5 rounded-xl shadow-2xl flex items-center space-x-2 text-xs font-mono text-white animate-fade-in backdrop-blur-xl",children:[h.jsx(Vl,{className:"w-4 h-4 text-brand-neon"}),h.jsx("span",{children:E})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/15 text-brand-neon border border-brand-neon/30 text-xs font-mono font-bold tracking-wider mb-2",children:[h.jsx(Jl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Atelier Operational Center"})]}),h.jsx("h1",{className:"text-3xl font-display font-extrabold text-white",children:"Studio Management & Metrics"}),h.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"Real-time telemetry on customer 3D customizations, orders pipeline, and catalog garments."})]}),h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("button",{onClick:C,className:"p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition",title:"Refresh Data",children:h.jsx(Ed,{className:`w-4 h-4 ${l?"animate-spin text-brand-neon":""}`})}),h.jsxs("button",{onClick:()=>p(!0),className:"px-4 py-2.5 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs font-display flex items-center space-x-1.5 shadow-glow-neon hover:opacity-95 transition",children:[h.jsx($0,{className:"w-4 h-4"}),h.jsx("span",{children:"Add Garment Model"})]})]})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[{label:"Total Studio Revenue",val:`$${((R=e==null?void 0:e.totalRevenue)==null?void 0:R.toLocaleString())||"0"}`,icon:Kv,color:"text-brand-neon",bg:"bg-brand-neon/10 border-brand-neon/20"},{label:"Total Bespoke Orders",val:(e==null?void 0:e.totalOrders)||"0",icon:Ys,color:"text-brand-cyan",bg:"bg-brand-cyan/10 border-brand-cyan/20"},{label:"Custom User Designs",val:(e==null?void 0:e.totalDesigns)||"0",icon:Cr,color:"text-brand-gold",bg:"bg-brand-gold/10 border-brand-gold/20"},{label:"Active Garment Models",val:(e==null?void 0:e.totalProducts)||"0",icon:fh,color:"text-purple-400",bg:"bg-purple-500/10 border-purple-500/20"}].map((w,H)=>{const ge=w.icon;return h.jsxs("div",{className:"p-5 rounded-2xl bg-dark-900 border border-slate-800 flex items-center justify-between shadow-xl",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono text-slate-400 block mb-1",children:w.label}),h.jsx("span",{className:"text-2xl font-display font-extrabold text-white",children:w.val})]}),h.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center border ${w.bg}`,children:h.jsx(ge,{className:`w-6 h-6 ${w.color}`})})]},H)})}),h.jsxs("div",{className:"p-6 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl space-y-4",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold font-display text-white",children:"Live Orders Dispatch Queue"}),h.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Bespoke garments currently in production pipeline"})]}),h.jsx("div",{className:"flex items-center space-x-1.5 overflow-x-auto scrollbar-none",children:["All","In Production","Dispatched","Delivered"].map(w=>h.jsx("button",{onClick:()=>y(w),className:`px-3 py-1 rounded-xl text-xs font-mono transition ${_===w?"bg-brand-cyan text-dark-950 font-bold":"text-slate-400 hover:text-white bg-dark-950 border border-slate-800"}`,children:w},w))})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 uppercase text-[10px]",children:[h.jsx("th",{className:"py-3 px-4",children:"Order Code"}),h.jsx("th",{className:"py-3 px-4",children:"Customer"}),h.jsx("th",{className:"py-3 px-4",children:"Garment Items"}),h.jsx("th",{className:"py-3 px-4",children:"Total"}),h.jsx("th",{className:"py-3 px-4",children:"Production Status"}),h.jsx("th",{className:"py-3 px-4",children:"Date"}),h.jsx("th",{className:"py-3 px-4 text-right",children:"Actions"})]})}),h.jsx("tbody",{className:"divide-y divide-slate-800/60",children:N.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:"7",className:"py-8 text-center text-slate-500",children:"No orders found matching filter."})}):N.map(w=>{var H,ge,G;return h.jsxs("tr",{className:"hover:bg-dark-950/80 transition",children:[h.jsx("td",{className:"py-3.5 px-4 font-bold text-brand-cyan",children:w.orderId}),h.jsxs("td",{className:"py-3.5 px-4 text-white",children:[h.jsx("div",{className:"font-semibold",children:(H=w.customer)==null?void 0:H.fullName}),h.jsx("span",{className:"text-[10px] text-slate-500 font-sans",children:(ge=w.customer)==null?void 0:ge.email})]}),h.jsx("td",{className:"py-3.5 px-4 text-slate-300",children:h.jsx("div",{className:"space-y-1",children:(G=w.items)==null?void 0:G.map((Q,me)=>h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full border border-slate-600 inline-block",style:{backgroundColor:Q.primaryColor}}),h.jsxs("span",{children:[Q.name," (",Q.size,") × ",Q.quantity]})]},me))})}),h.jsxs("td",{className:"py-3.5 px-4 text-brand-neon font-bold",children:["$",w.total]}),h.jsx("td",{className:"py-3.5 px-4",children:h.jsx("select",{value:w.status,disabled:M===w.orderId,onChange:Q=>$(w.orderId,Q.target.value),className:"bg-dark-950 text-slate-200 border border-slate-700/80 rounded-lg px-2.5 py-1 text-[11px] font-mono focus:border-brand-neon focus:outline-none cursor-pointer",children:U.map(Q=>h.jsx("option",{value:Q,children:Q},Q))})}),h.jsx("td",{className:"py-3.5 px-4 text-slate-400",children:new Date(w.createdAt).toLocaleDateString()}),h.jsx("td",{className:"py-3.5 px-4 text-right",children:h.jsxs("div",{className:"flex items-center justify-end space-x-1.5",children:[h.jsx("button",{onClick:()=>x(w),title:"View Order Details",className:"p-1.5 rounded-lg bg-dark-950 border border-slate-800 hover:border-brand-cyan text-slate-400 hover:text-brand-cyan transition",children:h.jsx(Jv,{className:"w-3.5 h-3.5"})}),h.jsx("button",{onClick:()=>z(w.orderId),title:"Delete Order",className:"p-1.5 rounded-lg bg-dark-950 border border-slate-800 hover:border-rose-500 text-slate-400 hover:text-rose-400 transition",children:h.jsx(ph,{className:"w-3.5 h-3.5"})})]})})]},w.orderId)})})]})})]}),f&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/80 backdrop-blur-md",children:h.jsxs("div",{className:"relative w-full max-w-2xl bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Order Specs"}),h.jsx("h3",{className:"text-xl font-mono font-bold text-brand-neon",children:f.orderId})]}),h.jsx("button",{onClick:()=>x(null),className:"p-1.5 rounded-xl bg-dark-950 border border-slate-800 text-slate-400 hover:text-white",children:h.jsx(Qa,{className:"w-4 h-4"})})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono",children:[h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1",children:[h.jsx("span",{className:"text-slate-500 uppercase text-[10px] block",children:"Customer"}),h.jsx("div",{className:"text-white font-bold",children:(j=f.customer)==null?void 0:j.fullName}),h.jsx("div",{className:"text-slate-400",children:(te=f.customer)==null?void 0:te.email}),h.jsxs("div",{className:"text-brand-cyan text-[11px] pt-1",children:["Payment: ",f.paymentMethod]})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-1",children:[h.jsx("span",{className:"text-slate-500 uppercase text-[10px] block",children:"Delivery Address"}),h.jsx("div",{className:"text-white",children:(Z=f.customer)==null?void 0:Z.address}),h.jsxs("div",{className:"text-slate-400",children:[(pe=f.customer)==null?void 0:pe.city,", ",(xe=f.customer)==null?void 0:xe.state," ",(ne=f.customer)==null?void 0:ne.postalCode]}),h.jsx("div",{className:"text-slate-400",children:(le=f.customer)==null?void 0:le.country})]})]}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider block",children:["Custom Tailored Garments (",(V=f.items)==null?void 0:V.length,")"]}),h.jsx("div",{className:"space-y-2",children:(ce=f.items)==null?void 0:ce.map((w,H)=>h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-950 border border-slate-800 flex items-center justify-between text-xs font-mono",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsxs("div",{className:"flex items-center space-x-1",children:[h.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:w.primaryColor},title:`Primary: ${w.primaryColor}`}),w.accentColor&&h.jsx("span",{className:"w-3 h-3 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:w.accentColor},title:`Accent: ${w.accentColor}`})]}),h.jsxs("div",{children:[h.jsx("div",{className:"font-bold text-white font-display text-sm",children:w.name}),h.jsxs("div",{className:"text-slate-400 text-[11px]",children:["Fabric: ",w.fabricName||w.fabricId," • Size: ",w.size," • Qty: ",w.quantity]})]})]}),h.jsxs("span",{className:"text-brand-neon font-bold",children:["$",w.price*w.quantity]})]},H))})]}),h.jsxs("div",{className:"p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-3",children:[h.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[h.jsx("span",{className:"text-slate-400",children:"Current Production Stage:"}),h.jsx("span",{className:"text-brand-neon font-bold px-2 py-0.5 rounded bg-brand-neon/10 border border-brand-neon/30",children:f.status})]}),h.jsx("div",{className:"space-y-2 pt-2 border-t border-slate-800/80",children:(I=f.timeline)==null?void 0:I.map((w,H)=>h.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:`w-2 h-2 rounded-full ${w.done?"bg-brand-neon":"bg-slate-700"}`}),h.jsx("span",{className:w.done?"text-white":"text-slate-500",children:w.status})]}),h.jsx("span",{className:"text-slate-500",children:w.time?new Date(w.time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"Pending"})]},H))})]}),h.jsxs("div",{className:"flex justify-between items-center pt-2",children:[h.jsxs("span",{className:"text-sm font-mono text-slate-400",children:["Order Total: ",h.jsxs("strong",{className:"text-white text-base",children:["$",f.total]})]}),h.jsx("button",{onClick:()=>x(null),className:"px-5 py-2 rounded-xl bg-slate-800 text-white font-mono text-xs hover:bg-slate-700 transition",children:"Close"})]})]})}),d&&h.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[h.jsx("div",{onClick:()=>p(!1),className:"fixed inset-0 bg-dark-950/80 backdrop-blur-md"}),h.jsxs("div",{className:"relative w-full max-w-lg bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl z-10 space-y-4",children:[h.jsx("h3",{className:"text-xl font-display font-bold text-white",children:"Add New Garment to Atelier"}),h.jsxs("form",{onSubmit:O,className:"space-y-3",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Product Name"}),h.jsx("input",{type:"text",required:!0,placeholder:"e.g. Phantom Cyber Anorak",value:g.name,onChange:w=>P({...g,name:w.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Category"}),h.jsxs("select",{value:g.category,onChange:w=>P({...g,category:w.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon",children:[h.jsx("option",{value:"Hoodies",children:"Hoodies"}),h.jsx("option",{value:"T-Shirts",children:"T-Shirts"}),h.jsx("option",{value:"Jackets",children:"Jackets"}),h.jsx("option",{value:"Blazers",children:"Blazers"}),h.jsx("option",{value:"Pants",children:"Pants"}),h.jsx("option",{value:"Headwear",children:"Headwear"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"3D Mesh Type"}),h.jsxs("select",{value:g.type,onChange:w=>P({...g,type:w.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon",children:[h.jsx("option",{value:"hoodie",children:"Hoodie"}),h.jsx("option",{value:"tshirt",children:"T-Shirt"}),h.jsx("option",{value:"jacket",children:"Jacket"}),h.jsx("option",{value:"blazer",children:"Blazer"}),h.jsx("option",{value:"pants",children:"Cargo Pants"}),h.jsx("option",{value:"cap",children:"Cap"})]})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Base Price ($)"}),h.jsx("input",{type:"number",required:!0,value:g.price,onChange:w=>P({...g,price:w.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Tagline"}),h.jsx("input",{type:"text",placeholder:"e.g. 500 GSM heavyweight brushed fleece",value:g.tagline,onChange:w=>P({...g,tagline:w.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-brand-neon"})]}),h.jsxs("div",{className:"pt-3 border-t border-slate-800 flex justify-end space-x-3",children:[h.jsx("button",{type:"button",onClick:()=>p(!1),className:"px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white",children:"Cancel"}),h.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs shadow-glow-neon",children:"Create Garment"})]})]})]})]})]})}function rE({isOpen:s,onClose:e}){const[t,r]=Fe.useState("cm");if(!s)return null;const o=t==="cm"?[{size:"XS",chest:"106 cm",length:"68 cm",sleeve:"58 cm"},{size:"S",chest:"112 cm",length:"71 cm",sleeve:"60 cm"},{size:"M",chest:"118 cm",length:"73 cm",sleeve:"62 cm"},{size:"L",chest:"124 cm",length:"76 cm",sleeve:"64 cm"},{size:"XL",chest:"130 cm",length:"78 cm",sleeve:"66 cm"},{size:"XXL",chest:"136 cm",length:"81 cm",sleeve:"67 cm"}]:[{size:"XS",chest:"41.7 in",length:"26.8 in",sleeve:"22.8 in"},{size:"S",chest:"44.1 in",length:"28.0 in",sleeve:"23.6 in"},{size:"M",chest:"46.5 in",length:"28.7 in",sleeve:"24.4 in"},{size:"L",chest:"48.8 in",length:"29.9 in",sleeve:"25.2 in"},{size:"XL",chest:"51.2 in",length:"30.7 in",sleeve:"26.0 in"},{size:"XXL",chest:"53.5 in",length:"31.9 in",sleeve:"26.4 in"}];return h.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[h.jsx("div",{onClick:e,className:"fixed inset-0 bg-dark-950/80 backdrop-blur-md"}),h.jsxs("div",{className:"relative w-full max-w-lg bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl z-10 space-y-5",children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx(Td,{className:"w-5 h-5 text-brand-neon"}),h.jsx("h3",{className:"text-lg font-display font-bold text-white",children:"Garment Sizing Specification"})]}),h.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800",children:h.jsx(Qa,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[h.jsx("span",{className:"text-slate-400",children:"Oversized Streetwear Silhouette"}),h.jsxs("div",{className:"flex bg-dark-950 p-1 rounded-xl border border-slate-800",children:[h.jsx("button",{onClick:()=>r("cm"),className:`px-3 py-1 rounded-lg transition ${t==="cm"?"bg-brand-neon text-dark-950 font-bold":"text-slate-400"}`,children:"CM"}),h.jsx("button",{onClick:()=>r("in"),className:`px-3 py-1 rounded-lg transition ${t==="in"?"bg-brand-neon text-dark-950 font-bold":"text-slate-400"}`,children:"INCHES"})]})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 uppercase text-[10px]",children:[h.jsx("th",{className:"py-2.5 px-3",children:"Size"}),h.jsx("th",{className:"py-2.5 px-3",children:"Chest Width"}),h.jsx("th",{className:"py-2.5 px-3",children:"Garment Length"}),h.jsx("th",{className:"py-2.5 px-3",children:"Sleeve Length"})]})}),h.jsx("tbody",{className:"divide-y divide-slate-800/60",children:o.map(l=>h.jsxs("tr",{className:"hover:bg-dark-950/80",children:[h.jsx("td",{className:"py-2.5 px-3 font-bold text-brand-neon",children:l.size}),h.jsx("td",{className:"py-2.5 px-3 text-slate-200",children:l.chest}),h.jsx("td",{className:"py-2.5 px-3 text-slate-200",children:l.length}),h.jsx("td",{className:"py-2.5 px-3 text-slate-200",children:l.sleeve})]},l.size))})]})}),h.jsxs("div",{className:"p-3.5 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-400 space-y-1",children:[h.jsx("p",{className:"font-bold text-white",children:"How We Measure:"}),h.jsx("p",{children:"• Chest is measured flat from armpit to armpit and multiplied by 2."}),h.jsx("p",{children:"• Length is measured from highest shoulder point down to bottom hemline."})]})]})]})}function sE(){const[s,e]=Fe.useState("studio"),[t,r]=Fe.useState([]),[o,l]=Fe.useState([]),[u,d]=Fe.useState([]),[p,f]=Fe.useState(!0),[x,_]=Fe.useState(null),[y,M]=Fe.useState({primaryColor:"#14171d",accentColor:"#00f5a0",cordsColor:"#ffffff",fabricId:"terry",size:"L",decal:{id:"cyber-kanji",position:"front",scale:.65,rotation:0,opacity:.95}}),[b,E]=Fe.useState(null),[S,g]=Fe.useState(!1),[P,D]=Fe.useState(null),[C,$]=Fe.useState(()=>{try{const ae=localStorage.getItem("atelier_cart");return ae?JSON.parse(ae):[]}catch{return[]}}),[z,O]=Fe.useState(!1),[U,N]=Fe.useState(!1),[R,j]=Fe.useState(""),[te,Z]=Fe.useState(0),[pe,xe]=Fe.useState("TC-94821"),[ne,le]=Fe.useState(null);Fe.useEffect(()=>{try{localStorage.setItem("atelier_cart",JSON.stringify(C))}catch(ae){console.warn("Could not save cart to localStorage",ae)}},[C]);const V=async()=>{var ae,K;try{const[F,Oe,be]=await Promise.all([fetch("/api/products"),fetch("/api/presets"),fetch("/api/custom-designs")]),Pe=await F.json(),Ce=await Oe.json(),st=await be.json();if(Pe.success&&Pe.products.length>0&&(r(Pe.products),!x)){const Be=Pe.products[0];_(Be),Be.defaultConfig&&M({...Be.defaultConfig,decal:{...Be.defaultConfig.decal,svgContent:((K=(ae=Ce.presets)==null?void 0:ae[0])==null?void 0:K.svg)||null}})}Ce.success&&l(Ce.presets),st.success&&d(st.designs)}catch(F){console.error("Error fetching data:",F)}finally{f(!1)}};Fe.useEffect(()=>{V()},[]),Fe.useEffect(()=>{const ae=()=>{const K=window.location.hash;if(K.startsWith("#track-")){const F=K.replace("#track-","");xe(F),e("tracking")}};return window.addEventListener("hashchange",ae),ae(),()=>window.removeEventListener("hashchange",ae)},[]);const ce=ae=>{D(ae),setTimeout(()=>D(null),3e3)},I=ae=>{if(_(ae),ae.defaultConfig){const K=o.find(F=>{var Oe;return F.id===((Oe=ae.defaultConfig.decal)==null?void 0:Oe.id)})||o[0];M({...ae.defaultConfig,decal:{...ae.defaultConfig.decal,svgContent:(K==null?void 0:K.svg)||null}})}e("studio")},w=({product:ae,customConfig:K,fabric:F,price:Oe})=>{const be={cartId:`item-${Date.now()}-${Math.random()}`,productId:ae.id,productName:ae.name,type:ae.type,primaryColor:K.primaryColor,accentColor:K.accentColor,cordsColor:K.cordsColor,fabricId:K.fabricId,fabricName:F.name||"Standard",size:K.size,decal:K.decal,price:Oe,quantity:1};$(Pe=>[be,...Pe]),O(!0),ce(`Added ${ae.name} (${K.size}) to Bag!`)},H=async ae=>{try{const F=await(await fetch("/api/custom-designs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:`${x.name} Custom`,...ae})})).json();F.success&&F.design&&(d(Oe=>[F.design,...Oe]),ce("Saved custom creation to your Wardrobe!"))}catch(K){console.error("Failed to save design:",K)}},ge=async ae=>{try{(await(await fetch(`/api/custom-designs/${ae}`,{method:"DELETE"})).json()).success&&(d(Oe=>Oe.filter(be=>be.id!==ae)),ce("Design deleted from Wardrobe."))}catch(K){console.error("Failed to delete design:",K)}},G=ae=>{if(!ae){e("studio");return}const K=t.find(Oe=>Oe.id===ae.productId)||t[0];_(K);const F=o.find(Oe=>{var be;return Oe.id===((be=ae.decal)==null?void 0:be.id)});M({primaryColor:ae.primaryColor,accentColor:ae.accentColor,cordsColor:ae.cordsColor||"#ffffff",fabricId:ae.fabricId,size:ae.size||"L",decal:{...ae.decal,svgContent:F?F.svg:null}}),e("studio"),ce(`Loaded ${ae.name} into 3D Studio.`)},Q=ae=>{$([]),xe(ae.orderId)},me=(ae,K)=>{$(F=>F.map(Oe=>Oe.cartId===ae?{...Oe,quantity:K}:Oe))},oe=ae=>{$(K=>K.filter(F=>F.cartId!==ae))},ye=(ae,K)=>{j(ae),Z(K)},Ee=C.reduce((ae,K)=>ae+K.price*K.quantity,0),ze=Ee>150||R==="FREESHIP"||C.length===0?0:15,ue=Math.max(0,Ee-te+ze);return h.jsxs("div",{className:"min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-neon/30 selection:text-brand-neon",children:[P&&h.jsxs("div",{className:"fixed bottom-6 right-6 z-50 glass-panel border border-brand-neon/50 px-4 py-3 rounded-2xl shadow-2xl flex items-center space-x-2 text-xs font-mono text-white animate-fade-in backdrop-blur-xl",children:[h.jsx(Vl,{className:"w-4 h-4 text-brand-neon"}),h.jsx("span",{children:P})]}),h.jsx(x_,{currentView:s,onNavigate:e,cartCount:C.reduce((ae,K)=>ae+K.quantity,0),onOpenCart:()=>O(!0),savedCount:u.length}),h.jsxs("main",{className:"flex-1 flex flex-col",children:[s==="studio"&&h.jsxs("div",{className:"flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between glass-panel p-2 rounded-2xl border border-slate-800/80 overflow-x-auto scrollbar-none gap-2",children:[h.jsx("span",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider px-3 hidden lg:inline",children:"Garment Models:"}),h.jsx("div",{className:"flex items-center space-x-1.5",children:t.map(ae=>{const K=(x==null?void 0:x.id)===ae.id;return h.jsxs("button",{onClick:()=>I(ae),className:`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${K?"bg-brand-neon text-dark-950 font-bold shadow-glow-neon":"text-slate-400 hover:text-white hover:bg-slate-800/60"}`,children:[h.jsx(Cr,{className:`w-3.5 h-3.5 ${K?"text-dark-950":"text-brand-cyan"}`}),h.jsxs("span",{children:[ae.name.split(" ")[0]," ",ae.name.split(" ")[1]||""]})]},ae.id)})})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[620px] lg:min-h-[700px]",children:[h.jsx("div",{className:"lg:col-span-7 xl:col-span-8 h-[480px] lg:h-full relative",children:x?h.jsx(Yb,{product:x,customConfig:y,activeHotspot:b,onHotspotClick:E,onExportSnapshot:ae=>{le(ae),ce("High-Res 3D Mockup captured!")}}):h.jsx("div",{className:"w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs",children:"Loading 3D Engine..."})}),h.jsx("div",{className:"lg:col-span-5 xl:col-span-4 h-full",children:x&&h.jsx(Kb,{product:x,customConfig:y,onChangeConfig:M,presets:o,onAddToCart:w,onSaveToWardrobe:H,onOpenSizeGuide:()=>g(!0),onExportSnapshot:()=>{ce("Click the camera icon on the top right of the 3D viewer to download PNG snapshot!")}})})]})]}),s==="catalog"&&h.jsx(Zb,{products:t,onSelectProductFor3D:I,onQuickAddToCart:ae=>{I(ae)}}),s==="wardrobe"&&h.jsx(nE,{savedDesigns:u,onLoadIntoStudio:G,onAddToCart:ae=>{const K=t.find(F=>F.id===ae.productId)||t[0];w({product:K,customConfig:{primaryColor:ae.primaryColor,accentColor:ae.accentColor,cordsColor:ae.cordsColor,fabricId:ae.fabricId,size:ae.size||"L",decal:ae.decal},fabric:{name:ae.fabricName},price:ae.price||K.price})},onDeleteDesign:ge}),s==="tracking"&&h.jsx(tE,{initialOrderId:pe,onOpenStudio:()=>e("studio")}),s==="admin"&&h.jsx(iE,{onRefreshData:V})]}),h.jsx(Jb,{isOpen:z,onClose:()=>O(!1),items:C,onUpdateQuantity:me,onRemoveItem:oe,onProceedToCheckout:()=>{O(!1),N(!0)},discountCode:R,onApplyDiscount:ye,discountAmount:te}),h.jsx(eE,{isOpen:U,onClose:()=>N(!1),cartItems:C,subtotal:Ee,shipping:ze,discount:te,totalAmount:ue,onOrderPlaced:Q}),h.jsx(rE,{isOpen:S,onClose:()=>g(!1)}),ne&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md",children:h.jsxs("div",{className:"relative max-w-xl w-full bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4",children:[h.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-slate-800",children:[h.jsx("span",{className:"text-xs font-mono text-brand-neon font-bold uppercase",children:"3D Snapshot Generated"}),h.jsx("button",{onClick:()=>le(null),className:"text-xs text-slate-400 hover:text-white",children:"Close"})]}),h.jsx("img",{src:ne,alt:"Snapshot",className:"w-full rounded-2xl border border-slate-800 shadow-xl"}),h.jsx("div",{className:"flex justify-end space-x-3",children:h.jsxs("a",{href:ne,download:"custom-garment-mockup.png",className:"px-4 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs flex items-center space-x-1.5 shadow-glow-neon",children:[h.jsx(Zv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Save to Device"})]})})]})}),h.jsx("footer",{className:"border-t border-slate-800/80 bg-dark-950 py-8 px-4 sm:px-6 lg:px-8 mt-12",children:h.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-neon inline-block"}),h.jsx("span",{className:"text-slate-300 font-bold",children:"ATELIER 3D"}),h.jsx("span",{children:"— Bespoke Technical Garment Studio"})]}),h.jsxs("div",{className:"flex items-center space-x-4",children:[h.jsx("span",{children:"Three.js PBR WebGL"}),h.jsx("span",{children:"•"}),h.jsx("span",{children:"Node.js / Express"}),h.jsx("span",{children:"•"}),h.jsx("span",{children:"Digital Atelier 2026"})]})]})})]})}Fv.createRoot(document.getElementById("root")).render(h.jsx(y0.StrictMode,{children:h.jsx(sE,{})}));
