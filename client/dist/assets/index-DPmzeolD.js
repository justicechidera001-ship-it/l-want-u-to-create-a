(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function x0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uu={exports:{}},Fa={},ku={exports:{}},St={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function Ev(){if(Jp)return St;Jp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function S(b){return b===null||typeof b!="object"?null:(b=y&&b[y]||b["@@iterator"],typeof b=="function"?b:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,E={};function M(b,$,_e){this.props=b,this.context=$,this.refs=E,this.updater=_e||_}M.prototype.isReactComponent={},M.prototype.setState=function(b,$){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,$,"setState")},M.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function v(){}v.prototype=M.prototype;function L(b,$,_e){this.props=b,this.context=$,this.refs=E,this.updater=_e||_}var D=L.prototype=new v;D.constructor=L,w(D,M.prototype),D.isPureReactComponent=!0;var C=Array.isArray,H=Object.prototype.hasOwnProperty,F={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function B(b,$,_e){var q,re={},ge=null,oe=null;if($!=null)for(q in $.ref!==void 0&&(oe=$.ref),$.key!==void 0&&(ge=""+$.key),$)H.call($,q)&&!O.hasOwnProperty(q)&&(re[q]=$[q]);var W=arguments.length-2;if(W===1)re.children=_e;else if(1<W){for(var ye=Array(W),Le=0;Le<W;Le++)ye[Le]=arguments[Le+2];re.children=ye}if(b&&b.defaultProps)for(q in W=b.defaultProps,W)re[q]===void 0&&(re[q]=W[q]);return{$$typeof:s,type:b,key:ge,ref:oe,props:re,_owner:F.current}}function P(b,$){return{$$typeof:s,type:b.type,key:$,ref:b.ref,props:b.props,_owner:b._owner}}function R(b){return typeof b=="object"&&b!==null&&b.$$typeof===s}function j(b){var $={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(_e){return $[_e]})}var ne=/\/+/g;function ee(b,$){return typeof b=="object"&&b!==null&&b.key!=null?j(""+b.key):$.toString(36)}function he(b,$,_e,q,re){var ge=typeof b;(ge==="undefined"||ge==="boolean")&&(b=null);var oe=!1;if(b===null)oe=!0;else switch(ge){case"string":case"number":oe=!0;break;case"object":switch(b.$$typeof){case s:case e:oe=!0}}if(oe)return oe=b,re=re(oe),b=q===""?"."+ee(oe,0):q,C(re)?(_e="",b!=null&&(_e=b.replace(ne,"$&/")+"/"),he(re,$,_e,"",function(Le){return Le})):re!=null&&(R(re)&&(re=P(re,_e+(!re.key||oe&&oe.key===re.key?"":(""+re.key).replace(ne,"$&/")+"/")+b)),$.push(re)),1;if(oe=0,q=q===""?".":q+":",C(b))for(var W=0;W<b.length;W++){ge=b[W];var ye=q+ee(ge,W);oe+=he(ge,$,_e,ye,re)}else if(ye=S(b),typeof ye=="function")for(b=ye.call(b),W=0;!(ge=b.next()).done;)ge=ge.value,ye=q+ee(ge,W++),oe+=he(ge,$,_e,ye,re);else if(ge==="object")throw $=String(b),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return oe}function pe(b,$,_e){if(b==null)return b;var q=[],re=0;return he(b,q,"","",function(ge){return $.call(_e,ge,re++)}),q}function te(b){if(b._status===-1){var $=b._result;$=$(),$.then(function(_e){(b._status===0||b._status===-1)&&(b._status=1,b._result=_e)},function(_e){(b._status===0||b._status===-1)&&(b._status=2,b._result=_e)}),b._status===-1&&(b._status=0,b._result=$)}if(b._status===1)return b._result.default;throw b._result}var fe={current:null},V={transition:null},le={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:V,ReactCurrentOwner:F};function I(){throw Error("act(...) is not supported in production builds of React.")}return St.Children={map:pe,forEach:function(b,$,_e){pe(b,function(){$.apply(this,arguments)},_e)},count:function(b){var $=0;return pe(b,function(){$++}),$},toArray:function(b){return pe(b,function($){return $})||[]},only:function(b){if(!R(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},St.Component=M,St.Fragment=t,St.Profiler=o,St.PureComponent=L,St.StrictMode=r,St.Suspense=f,St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,St.act=I,St.cloneElement=function(b,$,_e){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var q=w({},b.props),re=b.key,ge=b.ref,oe=b._owner;if($!=null){if($.ref!==void 0&&(ge=$.ref,oe=F.current),$.key!==void 0&&(re=""+$.key),b.type&&b.type.defaultProps)var W=b.type.defaultProps;for(ye in $)H.call($,ye)&&!O.hasOwnProperty(ye)&&(q[ye]=$[ye]===void 0&&W!==void 0?W[ye]:$[ye])}var ye=arguments.length-2;if(ye===1)q.children=_e;else if(1<ye){W=Array(ye);for(var Le=0;Le<ye;Le++)W[Le]=arguments[Le+2];q.children=W}return{$$typeof:s,type:b.type,key:re,ref:ge,props:q,_owner:oe}},St.createContext=function(b){return b={$$typeof:u,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:l,_context:b},b.Consumer=b},St.createElement=B,St.createFactory=function(b){var $=B.bind(null,b);return $.type=b,$},St.createRef=function(){return{current:null}},St.forwardRef=function(b){return{$$typeof:d,render:b}},St.isValidElement=R,St.lazy=function(b){return{$$typeof:g,_payload:{_status:-1,_result:b},_init:te}},St.memo=function(b,$){return{$$typeof:p,type:b,compare:$===void 0?null:$}},St.startTransition=function(b){var $=V.transition;V.transition={};try{b()}finally{V.transition=$}},St.unstable_act=I,St.useCallback=function(b,$){return fe.current.useCallback(b,$)},St.useContext=function(b){return fe.current.useContext(b)},St.useDebugValue=function(){},St.useDeferredValue=function(b){return fe.current.useDeferredValue(b)},St.useEffect=function(b,$){return fe.current.useEffect(b,$)},St.useId=function(){return fe.current.useId()},St.useImperativeHandle=function(b,$,_e){return fe.current.useImperativeHandle(b,$,_e)},St.useInsertionEffect=function(b,$){return fe.current.useInsertionEffect(b,$)},St.useLayoutEffect=function(b,$){return fe.current.useLayoutEffect(b,$)},St.useMemo=function(b,$){return fe.current.useMemo(b,$)},St.useReducer=function(b,$,_e){return fe.current.useReducer(b,$,_e)},St.useRef=function(b){return fe.current.useRef(b)},St.useState=function(b){return fe.current.useState(b)},St.useSyncExternalStore=function(b,$,_e){return fe.current.useSyncExternalStore(b,$,_e)},St.useTransition=function(){return fe.current.useTransition()},St.version="18.3.1",St}var Qp;function ff(){return Qp||(Qp=1,ku.exports=Ev()),ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function bv(){if(em)return Fa;em=1;var s=ff(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var g,y={},S=null,_=null;p!==void 0&&(S=""+p),f.key!==void 0&&(S=""+f.key),f.ref!==void 0&&(_=f.ref);for(g in f)r.call(f,g)&&!l.hasOwnProperty(g)&&(y[g]=f[g]);if(d&&d.defaultProps)for(g in f=d.defaultProps,f)y[g]===void 0&&(y[g]=f[g]);return{$$typeof:e,type:d,key:S,ref:_,props:y,_owner:o.current}}return Fa.Fragment=t,Fa.jsx=u,Fa.jsxs=u,Fa}var tm;function Tv(){return tm||(tm=1,Uu.exports=bv()),Uu.exports}var m=Tv(),ze=ff();const v0=x0(ze);var cl={},Fu={exports:{}},In={},Ou={exports:{}},zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Av(){return nm||(nm=1,(function(s){function e(V,le){var I=V.length;V.push(le);e:for(;0<I;){var b=I-1>>>1,$=V[b];if(0<o($,le))V[b]=le,V[I]=$,I=b;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var le=V[0],I=V.pop();if(I!==le){V[0]=I;e:for(var b=0,$=V.length,_e=$>>>1;b<_e;){var q=2*(b+1)-1,re=V[q],ge=q+1,oe=V[ge];if(0>o(re,I))ge<$&&0>o(oe,re)?(V[b]=oe,V[ge]=I,b=ge):(V[b]=re,V[q]=I,b=q);else if(ge<$&&0>o(oe,I))V[b]=oe,V[ge]=I,b=ge;else break e}}return le}function o(V,le){var I=V.sortIndex-le.sortIndex;return I!==0?I:V.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],g=1,y=null,S=3,_=!1,w=!1,E=!1,M=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(V){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=V)r(p),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(p)}}function C(V){if(E=!1,D(V),!w)if(t(f)!==null)w=!0,te(H);else{var le=t(p);le!==null&&fe(C,le.startTime-V)}}function H(V,le){w=!1,E&&(E=!1,v(B),B=-1),_=!0;var I=S;try{for(D(le),y=t(f);y!==null&&(!(y.expirationTime>le)||V&&!j());){var b=y.callback;if(typeof b=="function"){y.callback=null,S=y.priorityLevel;var $=b(y.expirationTime<=le);le=s.unstable_now(),typeof $=="function"?y.callback=$:y===t(f)&&r(f),D(le)}else r(f);y=t(f)}if(y!==null)var _e=!0;else{var q=t(p);q!==null&&fe(C,q.startTime-le),_e=!1}return _e}finally{y=null,S=I,_=!1}}var F=!1,O=null,B=-1,P=5,R=-1;function j(){return!(s.unstable_now()-R<P)}function ne(){if(O!==null){var V=s.unstable_now();R=V;var le=!0;try{le=O(!0,V)}finally{le?ee():(F=!1,O=null)}}else F=!1}var ee;if(typeof L=="function")ee=function(){L(ne)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,pe=he.port2;he.port1.onmessage=ne,ee=function(){pe.postMessage(null)}}else ee=function(){M(ne,0)};function te(V){O=V,F||(F=!0,ee())}function fe(V,le){B=M(function(){V(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){w||_||(w=!0,te(H))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(V){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var I=S;S=le;try{return V()}finally{S=I}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,le){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var I=S;S=V;try{return le()}finally{S=I}},s.unstable_scheduleCallback=function(V,le,I){var b=s.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?b+I:b):I=b,V){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=I+$,V={id:g++,callback:le,priorityLevel:V,startTime:I,expirationTime:$,sortIndex:-1},I>b?(V.sortIndex=I,e(p,V),t(f)===null&&V===t(p)&&(E?(v(B),B=-1):E=!0,fe(C,I-b))):(V.sortIndex=$,e(f,V),w||_||(w=!0,te(H))),V},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(V){var le=S;return function(){var I=S;S=le;try{return V.apply(this,arguments)}finally{S=I}}}})(zu)),zu}var im;function Cv(){return im||(im=1,Ou.exports=Av()),Ou.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function Rv(){if(rm)return In;rm=1;var s=ff(),e=Cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function S(n){return f.call(y,n)?!0:f.call(g,n)?!1:p.test(n)?y[n]=!0:(g[n]=!0,!1)}function _(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||_(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,a,c,h,x,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=x,this.removeEmptyString=T}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];M[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,L);M[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,L);M[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,L);M[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var h=M.hasOwnProperty(i)?M[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,h,c)&&(a=null),c||h===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),F=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),j=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),V=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var I=Object.assign,b;function $(n){if(b===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);b=i&&i[1]||""}return`
`+b+n}var _e=!1;function q(n,i){if(!n||_e)return"";_e=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var h=ce.stack.split(`
`),x=c.stack.split(`
`),T=h.length-1,z=x.length-1;1<=T&&0<=z&&h[T]!==x[z];)z--;for(;1<=T&&0<=z;T--,z--)if(h[T]!==x[z]){if(T!==1||z!==1)do if(T--,z--,0>z||h[T]!==x[z]){var G=`
`+h[T].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=T&&0<=z);break}}}finally{_e=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function re(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=q(n.type,!1),n;case 11:return n=q(n.type.render,!1),n;case 1:return n=q(n.type,!0),n;default:return""}}function ge(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case F:return"Portal";case P:return"Profiler";case B:return"StrictMode";case ee:return"Suspense";case he:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case ne:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:ge(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return ge(n(i))}catch{}}return null}function oe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ge(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function W(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ye(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(n){var i=ye(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,x=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(T){c=""+T,x.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ze(n){n._valueTracker||(n._valueTracker=Le(n))}function me(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ye(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Q(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function k(n,i){var a=i.checked;return I({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Fe(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=W(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ee(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function De(n,i){Ee(n,i);var a=W(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?st(n,i.type,a):i.hasOwnProperty("defaultValue")&&st(n,i.type,W(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Te(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function st(n,i,a){(i!=="number"||Q(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ke=Array.isArray;function U(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+W(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function A(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return I({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function se(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ke(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:W(a)}}function Se(n,i){var a=W(i.value),c=W(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Me(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ve(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ve(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ne,Oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ne=Ne||document.createElement("div"),Ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},je=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){je.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ae[i]=Ae[n]})});function it(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+i).trim():i+"px"}function lt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=it(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Xe=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(n,i){if(i){if(Xe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function dt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function K(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var He=null,xe=null,we=null;function We(n){if(n=Ma(n)){if(typeof He!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Eo(i),He(n.stateNode,n.type,i))}}function Ge(n){xe?we?we.push(n):we=[n]:xe=n}function mt(){if(xe){var n=xe,i=we;if(we=xe=null,We(n),i)for(n=0;n<i.length;n++)We(i[n])}}function zt(n,i){return n(i)}function Kt(){}var bt=!1;function An(n,i,a){if(bt)return n(i,a);bt=!0;try{return zt(n,i,a)}finally{bt=!1,(xe!==null||we!==null)&&(Kt(),mt())}}function yn(n,i){var a=n.stateNode;if(a===null)return null;var c=Eo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var os=!1;if(d)try{var Yi={};Object.defineProperty(Yi,"passive",{get:function(){os=!0}}),window.addEventListener("test",Yi,Yi),window.removeEventListener("test",Yi,Yi)}catch{os=!1}function Ai(n,i,a,c,h,x,T,z,G){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(Ce){this.onError(Ce)}}var Ci=!1,Nr=null,Pr=!1,Ki=null,io={onError:function(n){Ci=!0,Nr=n}};function ls(n,i,a,c,h,x,T,z,G){Ci=!1,Nr=null,Ai.apply(io,arguments)}function ro(n,i,a,c,h,x,T,z,G){if(ls.apply(this,arguments),Ci){if(Ci){var ce=Nr;Ci=!1,Nr=null}else throw Error(t(198));Pr||(Pr=!0,Ki=ce)}}function xi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function so(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ao(n){if(xi(n)!==n)throw Error(t(188))}function ic(n){var i=n.alternate;if(!i){if(i=xi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var x=h.alternate;if(x===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===x.child){for(x=h.child;x;){if(x===a)return ao(h),n;if(x===c)return ao(h),i;x=x.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=x;else{for(var T=!1,z=h.child;z;){if(z===a){T=!0,a=h,c=x;break}if(z===c){T=!0,c=h,a=x;break}z=z.sibling}if(!T){for(z=x.child;z;){if(z===a){T=!0,a=x,c=h;break}if(z===c){T=!0,c=x,a=h;break}z=z.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function N(n){return n=ic(n),n!==null?Z(n):null}function Z(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Z(n);if(i!==null)return i;n=n.sibling}return null}var ue=e.unstable_scheduleCallback,de=e.unstable_cancelCallback,J=e.unstable_shouldYield,Ue=e.unstable_requestPaint,Pe=e.unstable_now,et=e.unstable_getCurrentPriorityLevel,Je=e.unstable_ImmediatePriority,ft=e.unstable_UserBlockingPriority,pt=e.unstable_NormalPriority,tt=e.unstable_LowPriority,Et=e.unstable_IdlePriority,Nt=null,wt=null;function un(n){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Nt,n,void 0,(n.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Ct,rt=Math.log,ii=Math.LN2;function Ct(n){return n>>>=0,n===0?32:31-(rt(n)/ii|0)|0}var dn=64,ri=4194304;function Zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,x=n.pingedLanes,T=a&268435455;if(T!==0){var z=T&~h;z!==0?c=Zt(z):(x&=T,x!==0&&(c=Zt(x)))}else T=a&~h,T!==0?c=Zt(T):x!==0&&(c=Zt(x));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,x=i&-i,h>=x||h===16&&(x&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-xt(i),h=1<<a,c|=n[a],i&=~h;return c}function Ut(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $n(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,x=n.pendingLanes;0<x;){var T=31-xt(x),z=1<<T,G=h[T];G===-1?((z&a)===0||(z&c)!==0)&&(h[T]=Ut(z,i)):G<=i&&(n.expiredLanes|=z),x&=~z}}function Ri(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Sn(){var n=dn;return dn<<=1,(dn&4194240)===0&&(dn=64),n}function qn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Cn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-xt(i),n[i]=a}function oo(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-xt(a),x=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~x}}function rc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-xt(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Lt=0;function Nf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Pf,sc,Lf,Df,If,ac=!1,lo=[],Zi=null,Ji=null,Qi=null,aa=new Map,oa=new Map,er=[],Xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uf(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":aa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(i.pointerId)}}function la(n,i,a,c,h,x){return n===null||n.nativeEvent!==x?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:x,targetContainers:[h]},i!==null&&(i=Ma(i),i!==null&&sc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function $g(n,i,a,c,h){switch(i){case"focusin":return Zi=la(Zi,n,i,a,c,h),!0;case"dragenter":return Ji=la(Ji,n,i,a,c,h),!0;case"mouseover":return Qi=la(Qi,n,i,a,c,h),!0;case"pointerover":var x=h.pointerId;return aa.set(x,la(aa.get(x)||null,n,i,a,c,h)),!0;case"gotpointercapture":return x=h.pointerId,oa.set(x,la(oa.get(x)||null,n,i,a,c,h)),!0}return!1}function kf(n){var i=Lr(n.target);if(i!==null){var a=xi(i);if(a!==null){if(i=a.tag,i===13){if(i=so(a),i!==null){n.blockedOn=i,If(n.priority,function(){Lf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function co(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=lc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pt=c,a.target.dispatchEvent(c),Pt=null}else return i=Ma(a),i!==null&&sc(i),n.blockedOn=a,!1;i.shift()}return!0}function Ff(n,i,a){co(n)&&a.delete(i)}function qg(){ac=!1,Zi!==null&&co(Zi)&&(Zi=null),Ji!==null&&co(Ji)&&(Ji=null),Qi!==null&&co(Qi)&&(Qi=null),aa.forEach(Ff),oa.forEach(Ff)}function ca(n,i){n.blockedOn===i&&(n.blockedOn=null,ac||(ac=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qg)))}function ua(n){function i(h){return ca(h,n)}if(0<lo.length){ca(lo[0],n);for(var a=1;a<lo.length;a++){var c=lo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Zi!==null&&ca(Zi,n),Ji!==null&&ca(Ji,n),Qi!==null&&ca(Qi,n),aa.forEach(i),oa.forEach(i),a=0;a<er.length;a++)c=er[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<er.length&&(a=er[0],a.blockedOn===null);)kf(a),a.blockedOn===null&&er.shift()}var cs=C.ReactCurrentBatchConfig,uo=!0;function Yg(n,i,a,c){var h=Lt,x=cs.transition;cs.transition=null;try{Lt=1,oc(n,i,a,c)}finally{Lt=h,cs.transition=x}}function Kg(n,i,a,c){var h=Lt,x=cs.transition;cs.transition=null;try{Lt=4,oc(n,i,a,c)}finally{Lt=h,cs.transition=x}}function oc(n,i,a,c){if(uo){var h=lc(n,i,a,c);if(h===null)bc(n,i,c,fo,a),Uf(n,c);else if($g(h,n,i,a,c))c.stopPropagation();else if(Uf(n,c),i&4&&-1<Xg.indexOf(n)){for(;h!==null;){var x=Ma(h);if(x!==null&&Pf(x),x=lc(n,i,a,c),x===null&&bc(n,i,c,fo,a),x===h)break;h=x}h!==null&&c.stopPropagation()}else bc(n,i,c,null,a)}}var fo=null;function lc(n,i,a,c){if(fo=null,n=K(c),n=Lr(n),n!==null)if(i=xi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=so(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return fo=n,null}function Of(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(et()){case Je:return 1;case ft:return 4;case pt:case tt:return 16;case Et:return 536870912;default:return 16}default:return 16}}var tr=null,cc=null,ho=null;function zf(){if(ho)return ho;var n,i=cc,a=i.length,c,h="value"in tr?tr.value:tr.textContent,x=h.length;for(n=0;n<a&&i[n]===h[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===h[x-c];c++);return ho=h.slice(n,1<c?1-c:void 0)}function po(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function mo(){return!0}function Bf(){return!1}function On(n){function i(a,c,h,x,T){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=x,this.target=T,this.currentTarget=null;for(var z in n)n.hasOwnProperty(z)&&(a=n[z],this[z]=a?a(x):x[z]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?mo:Bf,this.isPropagationStopped=Bf,this}return I(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=On(us),da=I({},us,{view:0,detail:0}),Zg=On(da),dc,fc,fa,go=I({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fa&&(fa&&n.type==="mousemove"?(dc=n.screenX-fa.screenX,fc=n.screenY-fa.screenY):fc=dc=0,fa=n),dc)},movementY:function(n){return"movementY"in n?n.movementY:fc}}),jf=On(go),Jg=I({},go,{dataTransfer:0}),Qg=On(Jg),ex=I({},da,{relatedTarget:0}),hc=On(ex),tx=I({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),nx=On(tx),ix=I({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rx=On(ix),sx=I({},us,{data:0}),Hf=On(sx),ax={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ox={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=lx[n])?!!i[n]:!1}function pc(){return cx}var ux=I({},da,{key:function(n){if(n.key){var i=ax[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ox[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(n){return n.type==="keypress"?po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),dx=On(ux),fx=I({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=On(fx),hx=I({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),px=On(hx),mx=I({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),gx=On(mx),xx=I({},go,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),vx=On(xx),_x=[9,13,27,32],mc=d&&"CompositionEvent"in window,ha=null;d&&"documentMode"in document&&(ha=document.documentMode);var yx=d&&"TextEvent"in window&&!ha,Gf=d&&(!mc||ha&&8<ha&&11>=ha),Wf=" ",Xf=!1;function $f(n,i){switch(n){case"keyup":return _x.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function Sx(n,i){switch(n){case"compositionend":return qf(i);case"keypress":return i.which!==32?null:(Xf=!0,Wf);case"textInput":return n=i.data,n===Wf&&Xf?null:n;default:return null}}function Mx(n,i){if(ds)return n==="compositionend"||!mc&&$f(n,i)?(n=zf(),ho=cc=tr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Gf&&i.locale!=="ko"?null:i.data;default:return null}}var wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!wx[n.type]:i==="textarea"}function Kf(n,i,a,c){Ge(c),i=So(i,"onChange"),0<i.length&&(a=new uc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var pa=null,ma=null;function Ex(n){ph(n,0)}function xo(n){var i=gs(n);if(me(i))return n}function bx(n,i){if(n==="change")return i}var Zf=!1;if(d){var gc;if(d){var xc="oninput"in document;if(!xc){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),xc=typeof Jf.oninput=="function"}gc=xc}else gc=!1;Zf=gc&&(!document.documentMode||9<document.documentMode)}function Qf(){pa&&(pa.detachEvent("onpropertychange",eh),ma=pa=null)}function eh(n){if(n.propertyName==="value"&&xo(ma)){var i=[];Kf(i,ma,n,K(n)),An(Ex,i)}}function Tx(n,i,a){n==="focusin"?(Qf(),pa=i,ma=a,pa.attachEvent("onpropertychange",eh)):n==="focusout"&&Qf()}function Ax(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return xo(ma)}function Cx(n,i){if(n==="click")return xo(i)}function Rx(n,i){if(n==="input"||n==="change")return xo(i)}function Nx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var si=typeof Object.is=="function"?Object.is:Nx;function ga(n,i){if(si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!si(n[h],i[h]))return!1}return!0}function th(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function nh(n,i){var a=th(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=th(a)}}function ih(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ih(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function rh(){for(var n=window,i=Q();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Q(n.document)}return i}function vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Px(n){var i=rh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ih(a.ownerDocument.documentElement,a)){if(c!==null&&vc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,x=Math.min(c.start,h);c=c.end===void 0?x:Math.min(c.end,h),!n.extend&&x>c&&(h=c,c=x,x=h),h=nh(a,x);var T=nh(a,c);h&&T&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),x>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Lx=d&&"documentMode"in document&&11>=document.documentMode,fs=null,_c=null,xa=null,yc=!1;function sh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||fs==null||fs!==Q(c)||(c=fs,"selectionStart"in c&&vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),xa&&ga(xa,c)||(xa=c,c=So(_c,"onSelect"),0<c.length&&(i=new uc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=fs)))}function vo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var hs={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},Sc={},ah={};d&&(ah=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function _o(n){if(Sc[n])return Sc[n];if(!hs[n])return n;var i=hs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ah)return Sc[n]=i[a];return n}var oh=_o("animationend"),lh=_o("animationiteration"),ch=_o("animationstart"),uh=_o("transitionend"),dh=new Map,fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){dh.set(n,i),l(i,[n])}for(var Mc=0;Mc<fh.length;Mc++){var wc=fh[Mc],Dx=wc.toLowerCase(),Ix=wc[0].toUpperCase()+wc.slice(1);nr(Dx,"on"+Ix)}nr(oh,"onAnimationEnd"),nr(lh,"onAnimationIteration"),nr(ch,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(uh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function hh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ro(c,i,void 0,n),n.currentTarget=null}function ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var x=void 0;if(i)for(var T=c.length-1;0<=T;T--){var z=c[T],G=z.instance,ce=z.currentTarget;if(z=z.listener,G!==x&&h.isPropagationStopped())break e;hh(h,z,ce),x=G}else for(T=0;T<c.length;T++){if(z=c[T],G=z.instance,ce=z.currentTarget,z=z.listener,G!==x&&h.isPropagationStopped())break e;hh(h,z,ce),x=G}}}if(Pr)throw n=Ki,Pr=!1,Ki=null,n}function Bt(n,i){var a=i[Pc];a===void 0&&(a=i[Pc]=new Set);var c=n+"__bubble";a.has(c)||(mh(i,n,2,!1),a.add(c))}function Ec(n,i,a){var c=0;i&&(c|=4),mh(a,n,c,i)}var yo="_reactListening"+Math.random().toString(36).slice(2);function _a(n){if(!n[yo]){n[yo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Ux.has(a)||Ec(a,!1,n),Ec(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[yo]||(i[yo]=!0,Ec("selectionchange",!1,i))}}function mh(n,i,a,c){switch(Of(i)){case 1:var h=Yg;break;case 4:h=Kg;break;default:h=oc}a=h.bind(null,i,a,n),h=void 0,!os||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function bc(n,i,a,c,h){var x=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var z=c.stateNode.containerInfo;if(z===h||z.nodeType===8&&z.parentNode===h)break;if(T===4)for(T=c.return;T!==null;){var G=T.tag;if((G===3||G===4)&&(G=T.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;T=T.return}for(;z!==null;){if(T=Lr(z),T===null)return;if(G=T.tag,G===5||G===6){c=x=T;continue e}z=z.parentNode}}c=c.return}An(function(){var ce=x,Ce=K(a),Re=[];e:{var be=dh.get(n);if(be!==void 0){var $e=uc,Ke=n;switch(n){case"keypress":if(po(a)===0)break e;case"keydown":case"keyup":$e=dx;break;case"focusin":Ke="focus",$e=hc;break;case"focusout":Ke="blur",$e=hc;break;case"beforeblur":case"afterblur":$e=hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=px;break;case oh:case lh:case ch:$e=nx;break;case uh:$e=gx;break;case"scroll":$e=Zg;break;case"wheel":$e=vx;break;case"copy":case"cut":case"paste":$e=rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=Vf}var Qe=(i&4)!==0,$t=!Qe&&n==="scroll",ie=Qe?be!==null?be+"Capture":null:be;Qe=[];for(var Y=ce,ae;Y!==null;){ae=Y;var Ie=ae.stateNode;if(ae.tag===5&&Ie!==null&&(ae=Ie,ie!==null&&(Ie=yn(Y,ie),Ie!=null&&Qe.push(ya(Y,Ie,ae)))),$t)break;Y=Y.return}0<Qe.length&&(be=new $e(be,Ke,null,a,Ce),Re.push({event:be,listeners:Qe}))}}if((i&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",be&&a!==Pt&&(Ke=a.relatedTarget||a.fromElement)&&(Lr(Ke)||Ke[Ni]))break e;if(($e||be)&&(be=Ce.window===Ce?Ce:(be=Ce.ownerDocument)?be.defaultView||be.parentWindow:window,$e?(Ke=a.relatedTarget||a.toElement,$e=ce,Ke=Ke?Lr(Ke):null,Ke!==null&&($t=xi(Ke),Ke!==$t||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):($e=null,Ke=ce),$e!==Ke)){if(Qe=jf,Ie="onMouseLeave",ie="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Qe=Vf,Ie="onPointerLeave",ie="onPointerEnter",Y="pointer"),$t=$e==null?be:gs($e),ae=Ke==null?be:gs(Ke),be=new Qe(Ie,Y+"leave",$e,a,Ce),be.target=$t,be.relatedTarget=ae,Ie=null,Lr(Ce)===ce&&(Qe=new Qe(ie,Y+"enter",Ke,a,Ce),Qe.target=ae,Qe.relatedTarget=$t,Ie=Qe),$t=Ie,$e&&Ke)t:{for(Qe=$e,ie=Ke,Y=0,ae=Qe;ae;ae=ps(ae))Y++;for(ae=0,Ie=ie;Ie;Ie=ps(Ie))ae++;for(;0<Y-ae;)Qe=ps(Qe),Y--;for(;0<ae-Y;)ie=ps(ie),ae--;for(;Y--;){if(Qe===ie||ie!==null&&Qe===ie.alternate)break t;Qe=ps(Qe),ie=ps(ie)}Qe=null}else Qe=null;$e!==null&&gh(Re,be,$e,Qe,!1),Ke!==null&&$t!==null&&gh(Re,$t,Ke,Qe,!0)}}e:{if(be=ce?gs(ce):window,$e=be.nodeName&&be.nodeName.toLowerCase(),$e==="select"||$e==="input"&&be.type==="file")var nt=bx;else if(Yf(be))if(Zf)nt=Rx;else{nt=Ax;var at=Tx}else($e=be.nodeName)&&$e.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(nt=Cx);if(nt&&(nt=nt(n,ce))){Kf(Re,nt,a,Ce);break e}at&&at(n,be,ce),n==="focusout"&&(at=be._wrapperState)&&at.controlled&&be.type==="number"&&st(be,"number",be.value)}switch(at=ce?gs(ce):window,n){case"focusin":(Yf(at)||at.contentEditable==="true")&&(fs=at,_c=ce,xa=null);break;case"focusout":xa=_c=fs=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,sh(Re,a,Ce);break;case"selectionchange":if(Lx)break;case"keydown":case"keyup":sh(Re,a,Ce)}var ot;if(mc)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else ds?$f(n,a)&&(ht="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(Gf&&a.locale!=="ko"&&(ds||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&ds&&(ot=zf()):(tr=Ce,cc="value"in tr?tr.value:tr.textContent,ds=!0)),at=So(ce,ht),0<at.length&&(ht=new Hf(ht,n,null,a,Ce),Re.push({event:ht,listeners:at}),ot?ht.data=ot:(ot=qf(a),ot!==null&&(ht.data=ot)))),(ot=yx?Sx(n,a):Mx(n,a))&&(ce=So(ce,"onBeforeInput"),0<ce.length&&(Ce=new Hf("onBeforeInput","beforeinput",null,a,Ce),Re.push({event:Ce,listeners:ce}),Ce.data=ot))}ph(Re,i)})}function ya(n,i,a){return{instance:n,listener:i,currentTarget:a}}function So(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,x=h.stateNode;h.tag===5&&x!==null&&(h=x,x=yn(n,a),x!=null&&c.unshift(ya(n,x,h)),x=yn(n,i),x!=null&&c.push(ya(n,x,h))),n=n.return}return c}function ps(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function gh(n,i,a,c,h){for(var x=i._reactName,T=[];a!==null&&a!==c;){var z=a,G=z.alternate,ce=z.stateNode;if(G!==null&&G===c)break;z.tag===5&&ce!==null&&(z=ce,h?(G=yn(a,x),G!=null&&T.unshift(ya(a,G,z))):h||(G=yn(a,x),G!=null&&T.push(ya(a,G,z)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var kx=/\r\n?/g,Fx=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(kx,`
`).replace(Fx,"")}function Mo(n,i,a){if(i=xh(i),xh(n)!==i&&a)throw Error(t(425))}function wo(){}var Tc=null,Ac=null;function Cc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,Ox=typeof clearTimeout=="function"?clearTimeout:void 0,vh=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof vh<"u"?function(n){return vh.resolve(null).then(n).catch(Bx)}:Rc;function Bx(n){setTimeout(function(){throw n})}function Nc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ua(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ua(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _h(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ms=Math.random().toString(36).slice(2),_i="__reactFiber$"+ms,Sa="__reactProps$"+ms,Ni="__reactContainer$"+ms,Pc="__reactEvents$"+ms,jx="__reactListeners$"+ms,Hx="__reactHandles$"+ms;function Lr(n){var i=n[_i];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ni]||a[_i]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=_h(n);n!==null;){if(a=n[_i])return a;n=_h(n)}return i}n=a,a=n.parentNode}return null}function Ma(n){return n=n[_i]||n[Ni],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Eo(n){return n[Sa]||null}var Lc=[],xs=-1;function rr(n){return{current:n}}function jt(n){0>xs||(n.current=Lc[xs],Lc[xs]=null,xs--)}function Ft(n,i){xs++,Lc[xs]=n.current,n.current=i}var sr={},fn=rr(sr),Rn=rr(!1),Dr=sr;function vs(n,i){var a=n.type.contextTypes;if(!a)return sr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},x;for(x in a)h[x]=i[x];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Nn(n){return n=n.childContextTypes,n!=null}function bo(){jt(Rn),jt(fn)}function yh(n,i,a){if(fn.current!==sr)throw Error(t(168));Ft(fn,i),Ft(Rn,a)}function Sh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,oe(n)||"Unknown",h));return I({},a,c)}function To(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Dr=fn.current,Ft(fn,n),Ft(Rn,Rn.current),!0}function Mh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Sh(n,i,Dr),c.__reactInternalMemoizedMergedChildContext=n,jt(Rn),jt(fn),Ft(fn,n)):jt(Rn),Ft(Rn,a)}var Pi=null,Ao=!1,Dc=!1;function wh(n){Pi===null?Pi=[n]:Pi.push(n)}function Vx(n){Ao=!0,wh(n)}function ar(){if(!Dc&&Pi!==null){Dc=!0;var n=0,i=Lt;try{var a=Pi;for(Lt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Pi=null,Ao=!1}catch(h){throw Pi!==null&&(Pi=Pi.slice(n+1)),ue(Je,ar),h}finally{Lt=i,Dc=!1}}return null}var _s=[],ys=0,Co=null,Ro=0,Yn=[],Kn=0,Ir=null,Li=1,Di="";function Ur(n,i){_s[ys++]=Ro,_s[ys++]=Co,Co=n,Ro=i}function Eh(n,i,a){Yn[Kn++]=Li,Yn[Kn++]=Di,Yn[Kn++]=Ir,Ir=n;var c=Li;n=Di;var h=32-xt(c)-1;c&=~(1<<h),a+=1;var x=32-xt(i)+h;if(30<x){var T=h-h%5;x=(c&(1<<T)-1).toString(32),c>>=T,h-=T,Li=1<<32-xt(i)+h|a<<h|c,Di=x+n}else Li=1<<x|a<<h|c,Di=n}function Ic(n){n.return!==null&&(Ur(n,1),Eh(n,1,0))}function Uc(n){for(;n===Co;)Co=_s[--ys],_s[ys]=null,Ro=_s[--ys],_s[ys]=null;for(;n===Ir;)Ir=Yn[--Kn],Yn[Kn]=null,Di=Yn[--Kn],Yn[Kn]=null,Li=Yn[--Kn],Yn[Kn]=null}var zn=null,Bn=null,Vt=!1,ai=null;function bh(n,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Th(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Bn=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ir!==null?{id:Li,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Bn=null,!0):!1;default:return!1}}function kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Fc(n){if(Vt){var i=Bn;if(i){var a=i;if(!Th(n,i)){if(kc(n))throw Error(t(418));i=ir(a.nextSibling);var c=zn;i&&Th(n,i)?bh(c,a):(n.flags=n.flags&-4097|2,Vt=!1,zn=n)}}else{if(kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,zn=n}}}function Ah(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function No(n){if(n!==zn)return!1;if(!Vt)return Ah(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Cc(n.type,n.memoizedProps)),i&&(i=Bn)){if(kc(n))throw Ch(),Error(t(418));for(;i;)bh(n,i),i=ir(i.nextSibling)}if(Ah(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Bn=ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Bn=null}}else Bn=zn?ir(n.stateNode.nextSibling):null;return!0}function Ch(){for(var n=Bn;n;)n=ir(n.nextSibling)}function Ss(){Bn=zn=null,Vt=!1}function Oc(n){ai===null?ai=[n]:ai.push(n)}var Gx=C.ReactCurrentBatchConfig;function wa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,x=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===x?i.ref:(i=function(T){var z=h.refs;T===null?delete z[x]:z[x]=T},i._stringRef=x,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Po(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Rh(n){var i=n._init;return i(n._payload)}function Nh(n){function i(ie,Y){if(n){var ae=ie.deletions;ae===null?(ie.deletions=[Y],ie.flags|=16):ae.push(Y)}}function a(ie,Y){if(!n)return null;for(;Y!==null;)i(ie,Y),Y=Y.sibling;return null}function c(ie,Y){for(ie=new Map;Y!==null;)Y.key!==null?ie.set(Y.key,Y):ie.set(Y.index,Y),Y=Y.sibling;return ie}function h(ie,Y){return ie=pr(ie,Y),ie.index=0,ie.sibling=null,ie}function x(ie,Y,ae){return ie.index=ae,n?(ae=ie.alternate,ae!==null?(ae=ae.index,ae<Y?(ie.flags|=2,Y):ae):(ie.flags|=2,Y)):(ie.flags|=1048576,Y)}function T(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function z(ie,Y,ae,Ie){return Y===null||Y.tag!==6?(Y=Ru(ae,ie.mode,Ie),Y.return=ie,Y):(Y=h(Y,ae),Y.return=ie,Y)}function G(ie,Y,ae,Ie){var nt=ae.type;return nt===O?Ce(ie,Y,ae.props.children,Ie,ae.key):Y!==null&&(Y.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===te&&Rh(nt)===Y.type)?(Ie=h(Y,ae.props),Ie.ref=wa(ie,Y,ae),Ie.return=ie,Ie):(Ie=tl(ae.type,ae.key,ae.props,null,ie.mode,Ie),Ie.ref=wa(ie,Y,ae),Ie.return=ie,Ie)}function ce(ie,Y,ae,Ie){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ae.containerInfo||Y.stateNode.implementation!==ae.implementation?(Y=Nu(ae,ie.mode,Ie),Y.return=ie,Y):(Y=h(Y,ae.children||[]),Y.return=ie,Y)}function Ce(ie,Y,ae,Ie,nt){return Y===null||Y.tag!==7?(Y=Vr(ae,ie.mode,Ie,nt),Y.return=ie,Y):(Y=h(Y,ae),Y.return=ie,Y)}function Re(ie,Y,ae){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=Ru(""+Y,ie.mode,ae),Y.return=ie,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case H:return ae=tl(Y.type,Y.key,Y.props,null,ie.mode,ae),ae.ref=wa(ie,null,Y),ae.return=ie,ae;case F:return Y=Nu(Y,ie.mode,ae),Y.return=ie,Y;case te:var Ie=Y._init;return Re(ie,Ie(Y._payload),ae)}if(ke(Y)||le(Y))return Y=Vr(Y,ie.mode,ae,null),Y.return=ie,Y;Po(ie,Y)}return null}function be(ie,Y,ae,Ie){var nt=Y!==null?Y.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return nt!==null?null:z(ie,Y,""+ae,Ie);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case H:return ae.key===nt?G(ie,Y,ae,Ie):null;case F:return ae.key===nt?ce(ie,Y,ae,Ie):null;case te:return nt=ae._init,be(ie,Y,nt(ae._payload),Ie)}if(ke(ae)||le(ae))return nt!==null?null:Ce(ie,Y,ae,Ie,null);Po(ie,ae)}return null}function $e(ie,Y,ae,Ie,nt){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return ie=ie.get(ae)||null,z(Y,ie,""+Ie,nt);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case H:return ie=ie.get(Ie.key===null?ae:Ie.key)||null,G(Y,ie,Ie,nt);case F:return ie=ie.get(Ie.key===null?ae:Ie.key)||null,ce(Y,ie,Ie,nt);case te:var at=Ie._init;return $e(ie,Y,ae,at(Ie._payload),nt)}if(ke(Ie)||le(Ie))return ie=ie.get(ae)||null,Ce(Y,ie,Ie,nt,null);Po(Y,Ie)}return null}function Ke(ie,Y,ae,Ie){for(var nt=null,at=null,ot=Y,ht=Y=0,an=null;ot!==null&&ht<ae.length;ht++){ot.index>ht?(an=ot,ot=null):an=ot.sibling;var Rt=be(ie,ot,ae[ht],Ie);if(Rt===null){ot===null&&(ot=an);break}n&&ot&&Rt.alternate===null&&i(ie,ot),Y=x(Rt,Y,ht),at===null?nt=Rt:at.sibling=Rt,at=Rt,ot=an}if(ht===ae.length)return a(ie,ot),Vt&&Ur(ie,ht),nt;if(ot===null){for(;ht<ae.length;ht++)ot=Re(ie,ae[ht],Ie),ot!==null&&(Y=x(ot,Y,ht),at===null?nt=ot:at.sibling=ot,at=ot);return Vt&&Ur(ie,ht),nt}for(ot=c(ie,ot);ht<ae.length;ht++)an=$e(ot,ie,ht,ae[ht],Ie),an!==null&&(n&&an.alternate!==null&&ot.delete(an.key===null?ht:an.key),Y=x(an,Y,ht),at===null?nt=an:at.sibling=an,at=an);return n&&ot.forEach(function(mr){return i(ie,mr)}),Vt&&Ur(ie,ht),nt}function Qe(ie,Y,ae,Ie){var nt=le(ae);if(typeof nt!="function")throw Error(t(150));if(ae=nt.call(ae),ae==null)throw Error(t(151));for(var at=nt=null,ot=Y,ht=Y=0,an=null,Rt=ae.next();ot!==null&&!Rt.done;ht++,Rt=ae.next()){ot.index>ht?(an=ot,ot=null):an=ot.sibling;var mr=be(ie,ot,Rt.value,Ie);if(mr===null){ot===null&&(ot=an);break}n&&ot&&mr.alternate===null&&i(ie,ot),Y=x(mr,Y,ht),at===null?nt=mr:at.sibling=mr,at=mr,ot=an}if(Rt.done)return a(ie,ot),Vt&&Ur(ie,ht),nt;if(ot===null){for(;!Rt.done;ht++,Rt=ae.next())Rt=Re(ie,Rt.value,Ie),Rt!==null&&(Y=x(Rt,Y,ht),at===null?nt=Rt:at.sibling=Rt,at=Rt);return Vt&&Ur(ie,ht),nt}for(ot=c(ie,ot);!Rt.done;ht++,Rt=ae.next())Rt=$e(ot,ie,ht,Rt.value,Ie),Rt!==null&&(n&&Rt.alternate!==null&&ot.delete(Rt.key===null?ht:Rt.key),Y=x(Rt,Y,ht),at===null?nt=Rt:at.sibling=Rt,at=Rt);return n&&ot.forEach(function(wv){return i(ie,wv)}),Vt&&Ur(ie,ht),nt}function $t(ie,Y,ae,Ie){if(typeof ae=="object"&&ae!==null&&ae.type===O&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case H:e:{for(var nt=ae.key,at=Y;at!==null;){if(at.key===nt){if(nt=ae.type,nt===O){if(at.tag===7){a(ie,at.sibling),Y=h(at,ae.props.children),Y.return=ie,ie=Y;break e}}else if(at.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===te&&Rh(nt)===at.type){a(ie,at.sibling),Y=h(at,ae.props),Y.ref=wa(ie,at,ae),Y.return=ie,ie=Y;break e}a(ie,at);break}else i(ie,at);at=at.sibling}ae.type===O?(Y=Vr(ae.props.children,ie.mode,Ie,ae.key),Y.return=ie,ie=Y):(Ie=tl(ae.type,ae.key,ae.props,null,ie.mode,Ie),Ie.ref=wa(ie,Y,ae),Ie.return=ie,ie=Ie)}return T(ie);case F:e:{for(at=ae.key;Y!==null;){if(Y.key===at)if(Y.tag===4&&Y.stateNode.containerInfo===ae.containerInfo&&Y.stateNode.implementation===ae.implementation){a(ie,Y.sibling),Y=h(Y,ae.children||[]),Y.return=ie,ie=Y;break e}else{a(ie,Y);break}else i(ie,Y);Y=Y.sibling}Y=Nu(ae,ie.mode,Ie),Y.return=ie,ie=Y}return T(ie);case te:return at=ae._init,$t(ie,Y,at(ae._payload),Ie)}if(ke(ae))return Ke(ie,Y,ae,Ie);if(le(ae))return Qe(ie,Y,ae,Ie);Po(ie,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,Y!==null&&Y.tag===6?(a(ie,Y.sibling),Y=h(Y,ae),Y.return=ie,ie=Y):(a(ie,Y),Y=Ru(ae,ie.mode,Ie),Y.return=ie,ie=Y),T(ie)):a(ie,Y)}return $t}var Ms=Nh(!0),Ph=Nh(!1),Lo=rr(null),Do=null,ws=null,zc=null;function Bc(){zc=ws=Do=null}function jc(n){var i=Lo.current;jt(Lo),n._currentValue=i}function Hc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Es(n,i){Do=n,zc=ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(zc!==n)if(n={context:n,memoizedValue:i,next:null},ws===null){if(Do===null)throw Error(t(308));ws=n,Do.dependencies={lanes:0,firstContext:n}}else ws=ws.next=n;return i}var kr=null;function Vc(n){kr===null?kr=[n]:kr.push(n)}function Lh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Vc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Ii(n,c)}function Ii(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var or=!1;function Gc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Ii(n,a)}return h=c.interleaved,h===null?(i.next=i,Vc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Ii(n,a)}function Io(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,rc(n,a)}}function Ih(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,x=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};x===null?h=x=T:x=x.next=T,a=a.next}while(a!==null);x===null?h=x=i:x=x.next=i}else h=x=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:x,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Uo(n,i,a,c){var h=n.updateQueue;or=!1;var x=h.firstBaseUpdate,T=h.lastBaseUpdate,z=h.shared.pending;if(z!==null){h.shared.pending=null;var G=z,ce=G.next;G.next=null,T===null?x=ce:T.next=ce,T=G;var Ce=n.alternate;Ce!==null&&(Ce=Ce.updateQueue,z=Ce.lastBaseUpdate,z!==T&&(z===null?Ce.firstBaseUpdate=ce:z.next=ce,Ce.lastBaseUpdate=G))}if(x!==null){var Re=h.baseState;T=0,Ce=ce=G=null,z=x;do{var be=z.lane,$e=z.eventTime;if((c&be)===be){Ce!==null&&(Ce=Ce.next={eventTime:$e,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var Ke=n,Qe=z;switch(be=i,$e=a,Qe.tag){case 1:if(Ke=Qe.payload,typeof Ke=="function"){Re=Ke.call($e,Re,be);break e}Re=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Qe.payload,be=typeof Ke=="function"?Ke.call($e,Re,be):Ke,be==null)break e;Re=I({},Re,be);break e;case 2:or=!0}}z.callback!==null&&z.lane!==0&&(n.flags|=64,be=h.effects,be===null?h.effects=[z]:be.push(z))}else $e={eventTime:$e,lane:be,tag:z.tag,payload:z.payload,callback:z.callback,next:null},Ce===null?(ce=Ce=$e,G=Re):Ce=Ce.next=$e,T|=be;if(z=z.next,z===null){if(z=h.shared.pending,z===null)break;be=z,z=be.next,be.next=null,h.lastBaseUpdate=be,h.shared.pending=null}}while(!0);if(Ce===null&&(G=Re),h.baseState=G,h.firstBaseUpdate=ce,h.lastBaseUpdate=Ce,i=h.shared.interleaved,i!==null){h=i;do T|=h.lane,h=h.next;while(h!==i)}else x===null&&(h.shared.lanes=0);zr|=T,n.lanes=T,n.memoizedState=Re}}function Uh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Ea={},yi=rr(Ea),ba=rr(Ea),Ta=rr(Ea);function Fr(n){if(n===Ea)throw Error(t(174));return n}function Wc(n,i){switch(Ft(Ta,i),Ft(ba,n),Ft(yi,Ea),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:qe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=qe(i,n)}jt(yi),Ft(yi,i)}function bs(){jt(yi),jt(ba),jt(Ta)}function kh(n){Fr(Ta.current);var i=Fr(yi.current),a=qe(i,n.type);i!==a&&(Ft(ba,n),Ft(yi,a))}function Xc(n){ba.current===n&&(jt(yi),jt(ba))}var Gt=rr(0);function ko(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $c=[];function qc(){for(var n=0;n<$c.length;n++)$c[n]._workInProgressVersionPrimary=null;$c.length=0}var Fo=C.ReactCurrentDispatcher,Yc=C.ReactCurrentBatchConfig,Or=0,Wt=null,Jt=null,rn=null,Oo=!1,Aa=!1,Ca=0,Wx=0;function hn(){throw Error(t(321))}function Kc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!si(n[a],i[a]))return!1;return!0}function Zc(n,i,a,c,h,x){if(Or=x,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Fo.current=n===null||n.memoizedState===null?Yx:Kx,n=a(c,h),Aa){x=0;do{if(Aa=!1,Ca=0,25<=x)throw Error(t(301));x+=1,rn=Jt=null,i.updateQueue=null,Fo.current=Zx,n=a(c,h)}while(Aa)}if(Fo.current=jo,i=Jt!==null&&Jt.next!==null,Or=0,rn=Jt=Wt=null,Oo=!1,i)throw Error(t(300));return n}function Jc(){var n=Ca!==0;return Ca=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Wt.memoizedState=rn=n:rn=rn.next=n,rn}function Jn(){if(Jt===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=rn===null?Wt.memoizedState:rn.next;if(i!==null)rn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},rn===null?Wt.memoizedState=rn=n:rn=rn.next=n}return rn}function Ra(n,i){return typeof i=="function"?i(n):i}function Qc(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Jt,h=c.baseQueue,x=a.pending;if(x!==null){if(h!==null){var T=h.next;h.next=x.next,x.next=T}c.baseQueue=h=x,a.pending=null}if(h!==null){x=h.next,c=c.baseState;var z=T=null,G=null,ce=x;do{var Ce=ce.lane;if((Or&Ce)===Ce)G!==null&&(G=G.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var Re={lane:Ce,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};G===null?(z=G=Re,T=c):G=G.next=Re,Wt.lanes|=Ce,zr|=Ce}ce=ce.next}while(ce!==null&&ce!==x);G===null?T=c:G.next=z,si(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do x=h.lane,Wt.lanes|=x,zr|=x,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function eu(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,x=i.memoizedState;if(h!==null){a.pending=null;var T=h=h.next;do x=n(x,T.action),T=T.next;while(T!==h);si(x,i.memoizedState)||(Pn=!0),i.memoizedState=x,i.baseQueue===null&&(i.baseState=x),a.lastRenderedState=x}return[x,c]}function Fh(){}function Oh(n,i){var a=Wt,c=Jn(),h=i(),x=!si(c.memoizedState,h);if(x&&(c.memoizedState=h,Pn=!0),c=c.queue,tu(jh.bind(null,a,c,n),[n]),c.getSnapshot!==i||x||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,Na(9,Bh.bind(null,a,c,h,i),void 0,null),sn===null)throw Error(t(349));(Or&30)!==0||zh(a,i,h)}return h}function zh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Bh(n,i,a,c){i.value=a,i.getSnapshot=c,Hh(i)&&Vh(n)}function jh(n,i,a){return a(function(){Hh(i)&&Vh(n)})}function Hh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!si(n,a)}catch{return!0}}function Vh(n){var i=Ii(n,1);i!==null&&ui(i,n,1,-1)}function Gh(n){var i=Si();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:n},i.queue=n,n=n.dispatch=qx.bind(null,Wt,n),[i.memoizedState,n]}function Na(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Wh(){return Jn().memoizedState}function zo(n,i,a,c){var h=Si();Wt.flags|=n,h.memoizedState=Na(1|i,a,void 0,c===void 0?null:c)}function Bo(n,i,a,c){var h=Jn();c=c===void 0?null:c;var x=void 0;if(Jt!==null){var T=Jt.memoizedState;if(x=T.destroy,c!==null&&Kc(c,T.deps)){h.memoizedState=Na(i,a,x,c);return}}Wt.flags|=n,h.memoizedState=Na(1|i,a,x,c)}function Xh(n,i){return zo(8390656,8,n,i)}function tu(n,i){return Bo(2048,8,n,i)}function $h(n,i){return Bo(4,2,n,i)}function qh(n,i){return Bo(4,4,n,i)}function Yh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Kh(n,i,a){return a=a!=null?a.concat([n]):null,Bo(4,4,Yh.bind(null,i,n),a)}function nu(){}function Zh(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Kc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Jh(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Kc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Qh(n,i,a){return(Or&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(si(a,i)||(a=Sn(),Wt.lanes|=a,zr|=a,n.baseState=!0),i)}function Xx(n,i){var a=Lt;Lt=a!==0&&4>a?a:4,n(!0);var c=Yc.transition;Yc.transition={};try{n(!1),i()}finally{Lt=a,Yc.transition=c}}function ep(){return Jn().memoizedState}function $x(n,i,a){var c=fr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},tp(n))np(i,a);else if(a=Lh(n,i,a,c),a!==null){var h=wn();ui(a,n,c,h),ip(a,i,c)}}function qx(n,i,a){var c=fr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(tp(n))np(i,h);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=i.lastRenderedReducer,x!==null))try{var T=i.lastRenderedState,z=x(T,a);if(h.hasEagerState=!0,h.eagerState=z,si(z,T)){var G=i.interleaved;G===null?(h.next=h,Vc(i)):(h.next=G.next,G.next=h),i.interleaved=h;return}}catch{}finally{}a=Lh(n,i,h,c),a!==null&&(h=wn(),ui(a,n,c,h),ip(a,i,c))}}function tp(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function np(n,i){Aa=Oo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function ip(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,rc(n,a)}}var jo={readContext:Zn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},Yx={readContext:Zn,useCallback:function(n,i){return Si().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:Xh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,zo(4194308,4,Yh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return zo(4,2,n,i)},useMemo:function(n,i){var a=Si();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Si();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=$x.bind(null,Wt,n),[c.memoizedState,n]},useRef:function(n){var i=Si();return n={current:n},i.memoizedState=n},useState:Gh,useDebugValue:nu,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=Gh(!1),i=n[0];return n=Xx.bind(null,n[1]),Si().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Wt,h=Si();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));(Or&30)!==0||zh(c,i,a)}h.memoizedState=a;var x={value:a,getSnapshot:i};return h.queue=x,Xh(jh.bind(null,c,x,n),[n]),c.flags|=2048,Na(9,Bh.bind(null,c,x,a,i),void 0,null),a},useId:function(){var n=Si(),i=sn.identifierPrefix;if(Vt){var a=Di,c=Li;a=(c&~(1<<32-xt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ca++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Wx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Kx={readContext:Zn,useCallback:Zh,useContext:Zn,useEffect:tu,useImperativeHandle:Kh,useInsertionEffect:$h,useLayoutEffect:qh,useMemo:Jh,useReducer:Qc,useRef:Wh,useState:function(){return Qc(Ra)},useDebugValue:nu,useDeferredValue:function(n){var i=Jn();return Qh(i,Jt.memoizedState,n)},useTransition:function(){var n=Qc(Ra)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:ep,unstable_isNewReconciler:!1},Zx={readContext:Zn,useCallback:Zh,useContext:Zn,useEffect:tu,useImperativeHandle:Kh,useInsertionEffect:$h,useLayoutEffect:qh,useMemo:Jh,useReducer:eu,useRef:Wh,useState:function(){return eu(Ra)},useDebugValue:nu,useDeferredValue:function(n){var i=Jn();return Jt===null?i.memoizedState=n:Qh(i,Jt.memoizedState,n)},useTransition:function(){var n=eu(Ra)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Fh,useSyncExternalStore:Oh,useId:ep,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=I({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function iu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:I({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ho={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=wn(),h=fr(n),x=Ui(c,h);x.payload=i,a!=null&&(x.callback=a),i=lr(n,x,h),i!==null&&(ui(i,n,h,c),Io(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=wn(),h=fr(n),x=Ui(c,h);x.tag=1,x.payload=i,a!=null&&(x.callback=a),i=lr(n,x,h),i!==null&&(ui(i,n,h,c),Io(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),c=fr(n),h=Ui(a,c);h.tag=2,i!=null&&(h.callback=i),i=lr(n,h,c),i!==null&&(ui(i,n,c,a),Io(i,n,c))}};function rp(n,i,a,c,h,x,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,x,T):i.prototype&&i.prototype.isPureReactComponent?!ga(a,c)||!ga(h,x):!0}function sp(n,i,a){var c=!1,h=sr,x=i.contextType;return typeof x=="object"&&x!==null?x=Zn(x):(h=Nn(i)?Dr:fn.current,c=i.contextTypes,x=(c=c!=null)?vs(n,h):sr),i=new i(a,x),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ho,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=x),i}function ap(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ho.enqueueReplaceState(i,i.state,null)}function ru(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Gc(n);var x=i.contextType;typeof x=="object"&&x!==null?h.context=Zn(x):(x=Nn(i)?Dr:fn.current,h.context=vs(n,x)),h.state=n.memoizedState,x=i.getDerivedStateFromProps,typeof x=="function"&&(iu(n,i,x,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Ho.enqueueReplaceState(h,h.state,null),Uo(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ts(n,i){try{var a="",c=i;do a+=re(c),c=c.return;while(c);var h=a}catch(x){h=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:i,stack:h,digest:null}}function su(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function au(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Jx=typeof WeakMap=="function"?WeakMap:Map;function op(n,i,a){a=Ui(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Yo||(Yo=!0,Su=c),au(n,i)},a}function lp(n,i,a){a=Ui(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){au(n,i)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(a.callback=function(){au(n,i),typeof c!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function cp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Jx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=fv.bind(null,n,i,a),i.then(n,n))}function up(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function dp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ui(-1,1),i.tag=2,lr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Qx=C.ReactCurrentOwner,Pn=!1;function Mn(n,i,a,c){i.child=n===null?Ph(i,null,a,c):Ms(i,n.child,a,c)}function fp(n,i,a,c,h){a=a.render;var x=i.ref;return Es(i,h),c=Zc(n,i,a,c,x,h),a=Jc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ki(n,i,h)):(Vt&&a&&Ic(i),i.flags|=1,Mn(n,i,c,h),i.child)}function hp(n,i,a,c,h){if(n===null){var x=a.type;return typeof x=="function"&&!Cu(x)&&x.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=x,pp(n,i,x,c,h)):(n=tl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(x=n.child,(n.lanes&h)===0){var T=x.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(T,c)&&n.ref===i.ref)return ki(n,i,h)}return i.flags|=1,n=pr(x,c),n.ref=i.ref,n.return=i,i.child=n}function pp(n,i,a,c,h){if(n!==null){var x=n.memoizedProps;if(ga(x,c)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=c=x,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,ki(n,i,h)}return ou(n,i,a,c,h)}function mp(n,i,a){var c=i.pendingProps,h=c.children,x=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(Cs,jn),jn|=a;else{if((a&1073741824)===0)return n=x!==null?x.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(Cs,jn),jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=x!==null?x.baseLanes:a,Ft(Cs,jn),jn|=c}else x!==null?(c=x.baseLanes|a,i.memoizedState=null):c=a,Ft(Cs,jn),jn|=c;return Mn(n,i,h,a),i.child}function gp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ou(n,i,a,c,h){var x=Nn(a)?Dr:fn.current;return x=vs(i,x),Es(i,h),a=Zc(n,i,a,c,x,h),c=Jc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ki(n,i,h)):(Vt&&c&&Ic(i),i.flags|=1,Mn(n,i,a,h),i.child)}function xp(n,i,a,c,h){if(Nn(a)){var x=!0;To(i)}else x=!1;if(Es(i,h),i.stateNode===null)Go(n,i),sp(i,a,c),ru(i,a,c,h),c=!0;else if(n===null){var T=i.stateNode,z=i.memoizedProps;T.props=z;var G=T.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=Zn(ce):(ce=Nn(a)?Dr:fn.current,ce=vs(i,ce));var Ce=a.getDerivedStateFromProps,Re=typeof Ce=="function"||typeof T.getSnapshotBeforeUpdate=="function";Re||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==c||G!==ce)&&ap(i,T,c,ce),or=!1;var be=i.memoizedState;T.state=be,Uo(i,c,T,h),G=i.memoizedState,z!==c||be!==G||Rn.current||or?(typeof Ce=="function"&&(iu(i,a,Ce,c),G=i.memoizedState),(z=or||rp(i,a,z,c,be,G,ce))?(Re||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),T.props=c,T.state=G,T.context=ce,c=z):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Dh(n,i),z=i.memoizedProps,ce=i.type===i.elementType?z:oi(i.type,z),T.props=ce,Re=i.pendingProps,be=T.context,G=a.contextType,typeof G=="object"&&G!==null?G=Zn(G):(G=Nn(a)?Dr:fn.current,G=vs(i,G));var $e=a.getDerivedStateFromProps;(Ce=typeof $e=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(z!==Re||be!==G)&&ap(i,T,c,G),or=!1,be=i.memoizedState,T.state=be,Uo(i,c,T,h);var Ke=i.memoizedState;z!==Re||be!==Ke||Rn.current||or?(typeof $e=="function"&&(iu(i,a,$e,c),Ke=i.memoizedState),(ce=or||rp(i,a,ce,c,be,Ke,G)||!1)?(Ce||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,Ke,G),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,Ke,G)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ke),T.props=c,T.state=Ke,T.context=G,c=ce):(typeof T.componentDidUpdate!="function"||z===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||z===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),c=!1)}return lu(n,i,a,c,x,h)}function lu(n,i,a,c,h,x){gp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return h&&Mh(i,a,!1),ki(n,i,x);c=i.stateNode,Qx.current=i;var z=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ms(i,n.child,null,x),i.child=Ms(i,null,z,x)):Mn(n,i,z,x),i.memoizedState=c.state,h&&Mh(i,a,!0),i.child}function vp(n){var i=n.stateNode;i.pendingContext?yh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&yh(n,i.context,!1),Wc(n,i.containerInfo)}function _p(n,i,a,c,h){return Ss(),Oc(h),i.flags|=256,Mn(n,i,a,c),i.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function uu(n){return{baseLanes:n,cachePool:null,transitions:null}}function yp(n,i,a){var c=i.pendingProps,h=Gt.current,x=!1,T=(i.flags&128)!==0,z;if((z=T)||(z=n!==null&&n.memoizedState===null?!1:(h&2)!==0),z?(x=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ft(Gt,h&1),n===null)return Fc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,x?(c=i.mode,x=i.child,T={mode:"hidden",children:T},(c&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=T):x=nl(T,c,0,null),n=Vr(n,c,a,null),x.return=i,n.return=i,x.sibling=n,i.child=x,i.child.memoizedState=uu(a),i.memoizedState=cu,n):du(i,T));if(h=n.memoizedState,h!==null&&(z=h.dehydrated,z!==null))return ev(n,i,T,c,z,h,a);if(x){x=c.fallback,T=i.mode,h=n.child,z=h.sibling;var G={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=pr(h,G),c.subtreeFlags=h.subtreeFlags&14680064),z!==null?x=pr(z,x):(x=Vr(x,T,a,null),x.flags|=2),x.return=i,c.return=i,c.sibling=x,i.child=c,c=x,x=i.child,T=n.child.memoizedState,T=T===null?uu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},x.memoizedState=T,x.childLanes=n.childLanes&~a,i.memoizedState=cu,c}return x=n.child,n=x.sibling,c=pr(x,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function du(n,i){return i=nl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Vo(n,i,a,c){return c!==null&&Oc(c),Ms(i,n.child,null,a),n=du(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function ev(n,i,a,c,h,x,T){if(a)return i.flags&256?(i.flags&=-257,c=su(Error(t(422))),Vo(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(x=c.fallback,h=i.mode,c=nl({mode:"visible",children:c.children},h,0,null),x=Vr(x,h,T,null),x.flags|=2,c.return=i,x.return=i,c.sibling=x,i.child=c,(i.mode&1)!==0&&Ms(i,n.child,null,T),i.child.memoizedState=uu(T),i.memoizedState=cu,x);if((i.mode&1)===0)return Vo(n,i,T,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var z=c.dgst;return c=z,x=Error(t(419)),c=su(x,c,void 0),Vo(n,i,T,c)}if(z=(T&n.childLanes)!==0,Pn||z){if(c=sn,c!==null){switch(T&-T){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|T))!==0?0:h,h!==0&&h!==x.retryLane&&(x.retryLane=h,Ii(n,h),ui(c,n,h,-1))}return Au(),c=su(Error(t(421))),Vo(n,i,T,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=hv.bind(null,n),h._reactRetry=i,null):(n=x.treeContext,Bn=ir(h.nextSibling),zn=i,Vt=!0,ai=null,n!==null&&(Yn[Kn++]=Li,Yn[Kn++]=Di,Yn[Kn++]=Ir,Li=n.id,Di=n.overflow,Ir=i),i=du(i,c.children),i.flags|=4096,i)}function Sp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Hc(n.return,i,a)}function fu(n,i,a,c,h){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(x.isBackwards=i,x.rendering=null,x.renderingStartTime=0,x.last=c,x.tail=a,x.tailMode=h)}function Mp(n,i,a){var c=i.pendingProps,h=c.revealOrder,x=c.tail;if(Mn(n,i,c.children,a),c=Gt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sp(n,a,i);else if(n.tag===19)Sp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ft(Gt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&ko(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),fu(i,!1,h,a,x);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&ko(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}fu(i,!0,a,null,x);break;case"together":fu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Go(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ki(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=pr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=pr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function tv(n,i,a){switch(i.tag){case 3:vp(i),Ss();break;case 5:kh(i);break;case 1:Nn(i.type)&&To(i);break;case 4:Wc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Ft(Lo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?yp(n,i,a):(Ft(Gt,Gt.current&1),n=ki(n,i,a),n!==null?n.sibling:null);Ft(Gt,Gt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Mp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ft(Gt,Gt.current),c)break;return null;case 22:case 23:return i.lanes=0,mp(n,i,a)}return ki(n,i,a)}var wp,hu,Ep,bp;wp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hu=function(){},Ep=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Fr(yi.current);var x=null;switch(a){case"input":h=k(n,h),c=k(n,c),x=[];break;case"select":h=I({},h,{value:void 0}),c=I({},c,{value:void 0}),x=[];break;case"textarea":h=A(n,h),c=A(n,c),x=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=wo)}gt(a,c);var T;a=null;for(ce in h)if(!c.hasOwnProperty(ce)&&h.hasOwnProperty(ce)&&h[ce]!=null)if(ce==="style"){var z=h[ce];for(T in z)z.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?x||(x=[]):(x=x||[]).push(ce,null));for(ce in c){var G=c[ce];if(z=h!=null?h[ce]:void 0,c.hasOwnProperty(ce)&&G!==z&&(G!=null||z!=null))if(ce==="style")if(z){for(T in z)!z.hasOwnProperty(T)||G&&G.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in G)G.hasOwnProperty(T)&&z[T]!==G[T]&&(a||(a={}),a[T]=G[T])}else a||(x||(x=[]),x.push(ce,a)),a=G;else ce==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,z=z?z.__html:void 0,G!=null&&z!==G&&(x=x||[]).push(ce,G)):ce==="children"?typeof G!="string"&&typeof G!="number"||(x=x||[]).push(ce,""+G):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(G!=null&&ce==="onScroll"&&Bt("scroll",n),x||z===G||(x=[])):(x=x||[]).push(ce,G))}a&&(x=x||[]).push("style",a);var ce=x;(i.updateQueue=ce)&&(i.flags|=4)}},bp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Pa(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function nv(n,i,a){var c=i.pendingProps;switch(Uc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return Nn(i.type)&&bo(),pn(i),null;case 3:return c=i.stateNode,bs(),jt(Rn),jt(fn),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(No(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(Eu(ai),ai=null))),hu(n,i),pn(i),null;case 5:Xc(i);var h=Fr(Ta.current);if(a=i.type,n!==null&&i.stateNode!=null)Ep(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=Fr(yi.current),No(i)){c=i.stateNode,a=i.type;var x=i.memoizedProps;switch(c[_i]=i,c[Sa]=x,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(h=0;h<va.length;h++)Bt(va[h],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":Fe(c,x),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!x.multiple},Bt("invalid",c);break;case"textarea":se(c,x),Bt("invalid",c)}gt(a,x),h=null;for(var T in x)if(x.hasOwnProperty(T)){var z=x[T];T==="children"?typeof z=="string"?c.textContent!==z&&(x.suppressHydrationWarning!==!0&&Mo(c.textContent,z,n),h=["children",z]):typeof z=="number"&&c.textContent!==""+z&&(x.suppressHydrationWarning!==!0&&Mo(c.textContent,z,n),h=["children",""+z]):o.hasOwnProperty(T)&&z!=null&&T==="onScroll"&&Bt("scroll",c)}switch(a){case"input":Ze(c),Te(c,x,!0);break;case"textarea":Ze(c),Me(c);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(c.onclick=wo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ve(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[_i]=i,n[Sa]=c,wp(n,i,!1,!1),i.stateNode=n;e:{switch(T=dt(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),h=c;break;case"iframe":case"object":case"embed":Bt("load",n),h=c;break;case"video":case"audio":for(h=0;h<va.length;h++)Bt(va[h],n);h=c;break;case"source":Bt("error",n),h=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),h=c;break;case"details":Bt("toggle",n),h=c;break;case"input":Fe(n,c),h=k(n,c),Bt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=I({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":se(n,c),h=A(n,c),Bt("invalid",n);break;default:h=c}gt(a,h),z=h;for(x in z)if(z.hasOwnProperty(x)){var G=z[x];x==="style"?lt(n,G):x==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&Oe(n,G)):x==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&ut(n,G):typeof G=="number"&&ut(n,""+G):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?G!=null&&x==="onScroll"&&Bt("scroll",n):G!=null&&D(n,x,G,T))}switch(a){case"input":Ze(n),Te(n,c,!1);break;case"textarea":Ze(n),Me(n);break;case"option":c.value!=null&&n.setAttribute("value",""+W(c.value));break;case"select":n.multiple=!!c.multiple,x=c.value,x!=null?U(n,!!c.multiple,x,!1):c.defaultValue!=null&&U(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=wo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)bp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Fr(Ta.current),Fr(yi.current),No(i)){if(c=i.stateNode,a=i.memoizedProps,c[_i]=i,(x=c.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:Mo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Mo(c.nodeValue,a,(n.mode&1)!==0)}x&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[_i]=i,i.stateNode=c}return pn(i),null;case 13:if(jt(Gt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Ch(),Ss(),i.flags|=98560,x=!1;else if(x=No(i),c!==null&&c.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=i.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[_i]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),x=!1}else ai!==null&&(Eu(ai),ai=null),x=!0;if(!x)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?Qt===0&&(Qt=3):Au())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return bs(),hu(n,i),n===null&&_a(i.stateNode.containerInfo),pn(i),null;case 10:return jc(i.type._context),pn(i),null;case 17:return Nn(i.type)&&bo(),pn(i),null;case 19:if(jt(Gt),x=i.memoizedState,x===null)return pn(i),null;if(c=(i.flags&128)!==0,T=x.rendering,T===null)if(c)Pa(x,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=ko(n),T!==null){for(i.flags|=128,Pa(x,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)x=a,n=c,x.flags&=14680066,T=x.alternate,T===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=T.childLanes,x.lanes=T.lanes,x.child=T.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=T.memoizedProps,x.memoizedState=T.memoizedState,x.updateQueue=T.updateQueue,x.type=T.type,n=T.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Gt,Gt.current&1|2),i.child}n=n.sibling}x.tail!==null&&Pe()>Rs&&(i.flags|=128,c=!0,Pa(x,!1),i.lanes=4194304)}else{if(!c)if(n=ko(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Pa(x,!0),x.tail===null&&x.tailMode==="hidden"&&!T.alternate&&!Vt)return pn(i),null}else 2*Pe()-x.renderingStartTime>Rs&&a!==1073741824&&(i.flags|=128,c=!0,Pa(x,!1),i.lanes=4194304);x.isBackwards?(T.sibling=i.child,i.child=T):(a=x.last,a!==null?a.sibling=T:i.child=T,x.last=T)}return x.tail!==null?(i=x.tail,x.rendering=i,x.tail=i.sibling,x.renderingStartTime=Pe(),i.sibling=null,a=Gt.current,Ft(Gt,c?a&1|2:a&1),i):(pn(i),null);case 22:case 23:return Tu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(jn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function iv(n,i){switch(Uc(i),i.tag){case 1:return Nn(i.type)&&bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return bs(),jt(Rn),jt(fn),qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Xc(i),null;case 13:if(jt(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return jt(Gt),null;case 4:return bs(),null;case 10:return jc(i.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Wo=!1,mn=!1,rv=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function As(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Xt(n,i,c)}else a.current=null}function pu(n,i,a){try{a()}catch(c){Xt(n,i,c)}}var Tp=!1;function sv(n,i){if(Tc=uo,n=rh(),vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,x=c.focusNode;c=c.focusOffset;try{a.nodeType,x.nodeType}catch{a=null;break e}var T=0,z=-1,G=-1,ce=0,Ce=0,Re=n,be=null;t:for(;;){for(var $e;Re!==a||h!==0&&Re.nodeType!==3||(z=T+h),Re!==x||c!==0&&Re.nodeType!==3||(G=T+c),Re.nodeType===3&&(T+=Re.nodeValue.length),($e=Re.firstChild)!==null;)be=Re,Re=$e;for(;;){if(Re===n)break t;if(be===a&&++ce===h&&(z=T),be===x&&++Ce===c&&(G=T),($e=Re.nextSibling)!==null)break;Re=be,be=Re.parentNode}Re=$e}a=z===-1||G===-1?null:{start:z,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ac={focusedElem:n,selectionRange:a},uo=!1,Ye=i;Ye!==null;)if(i=Ye,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ye=n;else for(;Ye!==null;){i=Ye;try{var Ke=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Qe=Ke.memoizedProps,$t=Ke.memoizedState,ie=i.stateNode,Y=ie.getSnapshotBeforeUpdate(i.elementType===i.type?Qe:oi(i.type,Qe),$t);ie.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){Xt(i,i.return,Ie)}if(n=i.sibling,n!==null){n.return=i.return,Ye=n;break}Ye=i.return}return Ke=Tp,Tp=!1,Ke}function La(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var x=h.destroy;h.destroy=void 0,x!==void 0&&pu(i,a,x)}h=h.next}while(h!==c)}}function Xo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function mu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ap(n){var i=n.alternate;i!==null&&(n.alternate=null,Ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[Sa],delete i[Pc],delete i[jx],delete i[Hx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cp(n){return n.tag===5||n.tag===3||n.tag===4}function Rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=wo));else if(c!==4&&(n=n.child,n!==null))for(gu(n,i,a),n=n.sibling;n!==null;)gu(n,i,a),n=n.sibling}function xu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(xu(n,i,a),n=n.sibling;n!==null;)xu(n,i,a),n=n.sibling}var ln=null,li=!1;function cr(n,i,a){for(a=a.child;a!==null;)Np(n,i,a),a=a.sibling}function Np(n,i,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Nt,a)}catch{}switch(a.tag){case 5:mn||As(a,i);case 6:var c=ln,h=li;ln=null,cr(n,i,a),ln=c,li=h,ln!==null&&(li?(n=ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):ln.removeChild(a.stateNode));break;case 18:ln!==null&&(li?(n=ln,a=a.stateNode,n.nodeType===8?Nc(n.parentNode,a):n.nodeType===1&&Nc(n,a),ua(n)):Nc(ln,a.stateNode));break;case 4:c=ln,h=li,ln=a.stateNode.containerInfo,li=!0,cr(n,i,a),ln=c,li=h;break;case 0:case 11:case 14:case 15:if(!mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var x=h,T=x.destroy;x=x.tag,T!==void 0&&((x&2)!==0||(x&4)!==0)&&pu(a,i,T),h=h.next}while(h!==c)}cr(n,i,a);break;case 1:if(!mn&&(As(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(z){Xt(a,i,z)}cr(n,i,a);break;case 21:cr(n,i,a);break;case 22:a.mode&1?(mn=(c=mn)||a.memoizedState!==null,cr(n,i,a),mn=c):cr(n,i,a);break;default:cr(n,i,a)}}function Pp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new rv),i.forEach(function(c){var h=pv.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var x=n,T=i,z=T;e:for(;z!==null;){switch(z.tag){case 5:ln=z.stateNode,li=!1;break e;case 3:ln=z.stateNode.containerInfo,li=!0;break e;case 4:ln=z.stateNode.containerInfo,li=!0;break e}z=z.return}if(ln===null)throw Error(t(160));Np(x,T,h),ln=null,li=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(ce){Xt(h,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Lp(i,n),i=i.sibling}function Lp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),Mi(n),c&4){try{La(3,n,n.return),Xo(3,n)}catch(Qe){Xt(n,n.return,Qe)}try{La(5,n,n.return)}catch(Qe){Xt(n,n.return,Qe)}}break;case 1:ci(i,n),Mi(n),c&512&&a!==null&&As(a,a.return);break;case 5:if(ci(i,n),Mi(n),c&512&&a!==null&&As(a,a.return),n.flags&32){var h=n.stateNode;try{ut(h,"")}catch(Qe){Xt(n,n.return,Qe)}}if(c&4&&(h=n.stateNode,h!=null)){var x=n.memoizedProps,T=a!==null?a.memoizedProps:x,z=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{z==="input"&&x.type==="radio"&&x.name!=null&&Ee(h,x),dt(z,T);var ce=dt(z,x);for(T=0;T<G.length;T+=2){var Ce=G[T],Re=G[T+1];Ce==="style"?lt(h,Re):Ce==="dangerouslySetInnerHTML"?Oe(h,Re):Ce==="children"?ut(h,Re):D(h,Ce,Re,ce)}switch(z){case"input":De(h,x);break;case"textarea":Se(h,x);break;case"select":var be=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!x.multiple;var $e=x.value;$e!=null?U(h,!!x.multiple,$e,!1):be!==!!x.multiple&&(x.defaultValue!=null?U(h,!!x.multiple,x.defaultValue,!0):U(h,!!x.multiple,x.multiple?[]:"",!1))}h[Sa]=x}catch(Qe){Xt(n,n.return,Qe)}}break;case 6:if(ci(i,n),Mi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,x=n.memoizedProps;try{h.nodeValue=x}catch(Qe){Xt(n,n.return,Qe)}}break;case 3:if(ci(i,n),Mi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ua(i.containerInfo)}catch(Qe){Xt(n,n.return,Qe)}break;case 4:ci(i,n),Mi(n);break;case 13:ci(i,n),Mi(n),h=n.child,h.flags&8192&&(x=h.memoizedState!==null,h.stateNode.isHidden=x,!x||h.alternate!==null&&h.alternate.memoizedState!==null||(yu=Pe())),c&4&&Pp(n);break;case 22:if(Ce=a!==null&&a.memoizedState!==null,n.mode&1?(mn=(ce=mn)||Ce,ci(i,n),mn=ce):ci(i,n),Mi(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Ce&&(n.mode&1)!==0)for(Ye=n,Ce=n.child;Ce!==null;){for(Re=Ye=Ce;Ye!==null;){switch(be=Ye,$e=be.child,be.tag){case 0:case 11:case 14:case 15:La(4,be,be.return);break;case 1:As(be,be.return);var Ke=be.stateNode;if(typeof Ke.componentWillUnmount=="function"){c=be,a=be.return;try{i=c,Ke.props=i.memoizedProps,Ke.state=i.memoizedState,Ke.componentWillUnmount()}catch(Qe){Xt(c,a,Qe)}}break;case 5:As(be,be.return);break;case 22:if(be.memoizedState!==null){Up(Re);continue}}$e!==null?($e.return=be,Ye=$e):Up(Re)}Ce=Ce.sibling}e:for(Ce=null,Re=n;;){if(Re.tag===5){if(Ce===null){Ce=Re;try{h=Re.stateNode,ce?(x=h.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(z=Re.stateNode,G=Re.memoizedProps.style,T=G!=null&&G.hasOwnProperty("display")?G.display:null,z.style.display=it("display",T))}catch(Qe){Xt(n,n.return,Qe)}}}else if(Re.tag===6){if(Ce===null)try{Re.stateNode.nodeValue=ce?"":Re.memoizedProps}catch(Qe){Xt(n,n.return,Qe)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;Ce===Re&&(Ce=null),Re=Re.return}Ce===Re&&(Ce=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:ci(i,n),Mi(n),c&4&&Pp(n);break;case 21:break;default:ci(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Cp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ut(h,""),c.flags&=-33);var x=Rp(n);xu(n,x,h);break;case 3:case 4:var T=c.stateNode.containerInfo,z=Rp(n);gu(n,z,T);break;default:throw Error(t(161))}}catch(G){Xt(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function av(n,i,a){Ye=n,Dp(n)}function Dp(n,i,a){for(var c=(n.mode&1)!==0;Ye!==null;){var h=Ye,x=h.child;if(h.tag===22&&c){var T=h.memoizedState!==null||Wo;if(!T){var z=h.alternate,G=z!==null&&z.memoizedState!==null||mn;z=Wo;var ce=mn;if(Wo=T,(mn=G)&&!ce)for(Ye=h;Ye!==null;)T=Ye,G=T.child,T.tag===22&&T.memoizedState!==null?kp(h):G!==null?(G.return=T,Ye=G):kp(h);for(;x!==null;)Ye=x,Dp(x),x=x.sibling;Ye=h,Wo=z,mn=ce}Ip(n)}else(h.subtreeFlags&8772)!==0&&x!==null?(x.return=h,Ye=x):Ip(n)}}function Ip(n){for(;Ye!==null;){var i=Ye;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||Xo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!mn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var x=i.updateQueue;x!==null&&Uh(i,x,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Uh(i,T,a)}break;case 5:var z=i.stateNode;if(a===null&&i.flags&4){a=z;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Ce=ce.memoizedState;if(Ce!==null){var Re=Ce.dehydrated;Re!==null&&ua(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&mu(i)}catch(be){Xt(i,i.return,be)}}if(i===n){Ye=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function Up(n){for(;Ye!==null;){var i=Ye;if(i===n){Ye=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ye=a;break}Ye=i.return}}function kp(n){for(;Ye!==null;){var i=Ye;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Xo(4,i)}catch(G){Xt(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(G){Xt(i,h,G)}}var x=i.return;try{mu(i)}catch(G){Xt(i,x,G)}break;case 5:var T=i.return;try{mu(i)}catch(G){Xt(i,T,G)}}}catch(G){Xt(i,i.return,G)}if(i===n){Ye=null;break}var z=i.sibling;if(z!==null){z.return=i.return,Ye=z;break}Ye=i.return}}var ov=Math.ceil,$o=C.ReactCurrentDispatcher,vu=C.ReactCurrentOwner,Qn=C.ReactCurrentBatchConfig,Tt=0,sn=null,qt=null,cn=0,jn=0,Cs=rr(0),Qt=0,Da=null,zr=0,qo=0,_u=0,Ia=null,Ln=null,yu=0,Rs=1/0,Fi=null,Yo=!1,Su=null,ur=null,Ko=!1,dr=null,Zo=0,Ua=0,Mu=null,Jo=-1,Qo=0;function wn(){return(Tt&6)!==0?Pe():Jo!==-1?Jo:Jo=Pe()}function fr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&cn!==0?cn&-cn:Gx.transition!==null?(Qo===0&&(Qo=Sn()),Qo):(n=Lt,n!==0||(n=window.event,n=n===void 0?16:Of(n.type)),n)}function ui(n,i,a,c){if(50<Ua)throw Ua=0,Mu=null,Error(t(185));Cn(n,a,c),((Tt&2)===0||n!==sn)&&(n===sn&&((Tt&2)===0&&(qo|=a),Qt===4&&hr(n,cn)),Dn(n,c),a===1&&Tt===0&&(i.mode&1)===0&&(Rs=Pe()+500,Ao&&ar()))}function Dn(n,i){var a=n.callbackNode;$n(n,i);var c=vi(n,n===sn?cn:0);if(c===0)a!==null&&de(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&de(a),i===1)n.tag===0?Vx(Op.bind(null,n)):wh(Op.bind(null,n)),zx(function(){(Tt&6)===0&&ar()}),a=null;else{switch(Nf(c)){case 1:a=Je;break;case 4:a=ft;break;case 16:a=pt;break;case 536870912:a=Et;break;default:a=pt}a=Xp(a,Fp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Fp(n,i){if(Jo=-1,Qo=0,(Tt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var c=vi(n,n===sn?cn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=el(n,c);else{i=c;var h=Tt;Tt|=2;var x=Bp();(sn!==n||cn!==i)&&(Fi=null,Rs=Pe()+500,jr(n,i));do try{uv();break}catch(z){zp(n,z)}while(!0);Bc(),$o.current=x,Tt=h,qt!==null?i=0:(sn=null,cn=0,i=Qt)}if(i!==0){if(i===2&&(h=Ri(n),h!==0&&(c=h,i=wu(n,h))),i===1)throw a=Da,jr(n,0),hr(n,c),Dn(n,Pe()),a;if(i===6)hr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!lv(h)&&(i=el(n,c),i===2&&(x=Ri(n),x!==0&&(c=x,i=wu(n,x))),i===1))throw a=Da,jr(n,0),hr(n,c),Dn(n,Pe()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Hr(n,Ln,Fi);break;case 3:if(hr(n,c),(c&130023424)===c&&(i=yu+500-Pe(),10<i)){if(vi(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){wn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Rc(Hr.bind(null,n,Ln,Fi),i);break}Hr(n,Ln,Fi);break;case 4:if(hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var T=31-xt(c);x=1<<T,T=i[T],T>h&&(h=T),c&=~x}if(c=h,c=Pe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ov(c/1960))-c,10<c){n.timeoutHandle=Rc(Hr.bind(null,n,Ln,Fi),c);break}Hr(n,Ln,Fi);break;case 5:Hr(n,Ln,Fi);break;default:throw Error(t(329))}}}return Dn(n,Pe()),n.callbackNode===a?Fp.bind(null,n):null}function wu(n,i){var a=Ia;return n.current.memoizedState.isDehydrated&&(jr(n,i).flags|=256),n=el(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&Eu(i)),n}function Eu(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function lv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],x=h.getSnapshot;h=h.value;try{if(!si(x(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~_u,i&=~qo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-xt(i),c=1<<a;n[a]=-1,i&=~c}}function Op(n){if((Tt&6)!==0)throw Error(t(327));Ns();var i=vi(n,0);if((i&1)===0)return Dn(n,Pe()),null;var a=el(n,i);if(n.tag!==0&&a===2){var c=Ri(n);c!==0&&(i=c,a=wu(n,c))}if(a===1)throw a=Da,jr(n,0),hr(n,i),Dn(n,Pe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Hr(n,Ln,Fi),Dn(n,Pe()),null}function bu(n,i){var a=Tt;Tt|=1;try{return n(i)}finally{Tt=a,Tt===0&&(Rs=Pe()+500,Ao&&ar())}}function Br(n){dr!==null&&dr.tag===0&&(Tt&6)===0&&Ns();var i=Tt;Tt|=1;var a=Qn.transition,c=Lt;try{if(Qn.transition=null,Lt=1,n)return n()}finally{Lt=c,Qn.transition=a,Tt=i,(Tt&6)===0&&ar()}}function Tu(){jn=Cs.current,jt(Cs)}function jr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ox(a)),qt!==null)for(a=qt.return;a!==null;){var c=a;switch(Uc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&bo();break;case 3:bs(),jt(Rn),jt(fn),qc();break;case 5:Xc(c);break;case 4:bs();break;case 13:jt(Gt);break;case 19:jt(Gt);break;case 10:jc(c.type._context);break;case 22:case 23:Tu()}a=a.return}if(sn=n,qt=n=pr(n.current,null),cn=jn=i,Qt=0,Da=null,_u=qo=zr=0,Ln=Ia=null,kr!==null){for(i=0;i<kr.length;i++)if(a=kr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,x=a.pending;if(x!==null){var T=x.next;x.next=h,c.next=T}a.pending=c}kr=null}return n}function zp(n,i){do{var a=qt;try{if(Bc(),Fo.current=jo,Oo){for(var c=Wt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Oo=!1}if(Or=0,rn=Jt=Wt=null,Aa=!1,Ca=0,vu.current=null,a===null||a.return===null){Qt=1,Da=i,qt=null;break}e:{var x=n,T=a.return,z=a,G=i;if(i=cn,z.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ce=G,Ce=z,Re=Ce.tag;if((Ce.mode&1)===0&&(Re===0||Re===11||Re===15)){var be=Ce.alternate;be?(Ce.updateQueue=be.updateQueue,Ce.memoizedState=be.memoizedState,Ce.lanes=be.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var $e=up(T);if($e!==null){$e.flags&=-257,dp($e,T,z,x,i),$e.mode&1&&cp(x,ce,i),i=$e,G=ce;var Ke=i.updateQueue;if(Ke===null){var Qe=new Set;Qe.add(G),i.updateQueue=Qe}else Ke.add(G);break e}else{if((i&1)===0){cp(x,ce,i),Au();break e}G=Error(t(426))}}else if(Vt&&z.mode&1){var $t=up(T);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),dp($t,T,z,x,i),Oc(Ts(G,z));break e}}x=G=Ts(G,z),Qt!==4&&(Qt=2),Ia===null?Ia=[x]:Ia.push(x),x=T;do{switch(x.tag){case 3:x.flags|=65536,i&=-i,x.lanes|=i;var ie=op(x,G,i);Ih(x,ie);break e;case 1:z=G;var Y=x.type,ae=x.stateNode;if((x.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(ur===null||!ur.has(ae)))){x.flags|=65536,i&=-i,x.lanes|=i;var Ie=lp(x,z,i);Ih(x,Ie);break e}}x=x.return}while(x!==null)}Hp(a)}catch(nt){i=nt,qt===a&&a!==null&&(qt=a=a.return);continue}break}while(!0)}function Bp(){var n=$o.current;return $o.current=jo,n===null?jo:n}function Au(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),sn===null||(zr&268435455)===0&&(qo&268435455)===0||hr(sn,cn)}function el(n,i){var a=Tt;Tt|=2;var c=Bp();(sn!==n||cn!==i)&&(Fi=null,jr(n,i));do try{cv();break}catch(h){zp(n,h)}while(!0);if(Bc(),Tt=a,$o.current=c,qt!==null)throw Error(t(261));return sn=null,cn=0,Qt}function cv(){for(;qt!==null;)jp(qt)}function uv(){for(;qt!==null&&!J();)jp(qt)}function jp(n){var i=Wp(n.alternate,n,jn);n.memoizedProps=n.pendingProps,i===null?Hp(n):qt=i,vu.current=null}function Hp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=nv(a,i,jn),a!==null){qt=a;return}}else{if(a=iv(a,i),a!==null){a.flags&=32767,qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Hr(n,i,a){var c=Lt,h=Qn.transition;try{Qn.transition=null,Lt=1,dv(n,i,a,c)}finally{Qn.transition=h,Lt=c}return null}function dv(n,i,a,c){do Ns();while(dr!==null);if((Tt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=a.lanes|a.childLanes;if(oo(n,x),n===sn&&(qt=sn=null,cn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ko||(Ko=!0,Xp(pt,function(){return Ns(),null})),x=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||x){x=Qn.transition,Qn.transition=null;var T=Lt;Lt=1;var z=Tt;Tt|=4,vu.current=null,sv(n,a),Lp(a,n),Px(Ac),uo=!!Tc,Ac=Tc=null,n.current=a,av(a),Ue(),Tt=z,Lt=T,Qn.transition=x}else n.current=a;if(Ko&&(Ko=!1,dr=n,Zo=h),x=n.pendingLanes,x===0&&(ur=null),un(a.stateNode),Dn(n,Pe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Yo)throw Yo=!1,n=Su,Su=null,n;return(Zo&1)!==0&&n.tag!==0&&Ns(),x=n.pendingLanes,(x&1)!==0?n===Mu?Ua++:(Ua=0,Mu=n):Ua=0,ar(),null}function Ns(){if(dr!==null){var n=Nf(Zo),i=Qn.transition,a=Lt;try{if(Qn.transition=null,Lt=16>n?16:n,dr===null)var c=!1;else{if(n=dr,dr=null,Zo=0,(Tt&6)!==0)throw Error(t(331));var h=Tt;for(Tt|=4,Ye=n.current;Ye!==null;){var x=Ye,T=x.child;if((Ye.flags&16)!==0){var z=x.deletions;if(z!==null){for(var G=0;G<z.length;G++){var ce=z[G];for(Ye=ce;Ye!==null;){var Ce=Ye;switch(Ce.tag){case 0:case 11:case 15:La(8,Ce,x)}var Re=Ce.child;if(Re!==null)Re.return=Ce,Ye=Re;else for(;Ye!==null;){Ce=Ye;var be=Ce.sibling,$e=Ce.return;if(Ap(Ce),Ce===ce){Ye=null;break}if(be!==null){be.return=$e,Ye=be;break}Ye=$e}}}var Ke=x.alternate;if(Ke!==null){var Qe=Ke.child;if(Qe!==null){Ke.child=null;do{var $t=Qe.sibling;Qe.sibling=null,Qe=$t}while(Qe!==null)}}Ye=x}}if((x.subtreeFlags&2064)!==0&&T!==null)T.return=x,Ye=T;else e:for(;Ye!==null;){if(x=Ye,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:La(9,x,x.return)}var ie=x.sibling;if(ie!==null){ie.return=x.return,Ye=ie;break e}Ye=x.return}}var Y=n.current;for(Ye=Y;Ye!==null;){T=Ye;var ae=T.child;if((T.subtreeFlags&2064)!==0&&ae!==null)ae.return=T,Ye=ae;else e:for(T=Y;Ye!==null;){if(z=Ye,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:Xo(9,z)}}catch(nt){Xt(z,z.return,nt)}if(z===T){Ye=null;break e}var Ie=z.sibling;if(Ie!==null){Ie.return=z.return,Ye=Ie;break e}Ye=z.return}}if(Tt=h,ar(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Nt,n)}catch{}c=!0}return c}finally{Lt=a,Qn.transition=i}}return!1}function Vp(n,i,a){i=Ts(a,i),i=op(n,i,1),n=lr(n,i,1),i=wn(),n!==null&&(Cn(n,1,i),Dn(n,i))}function Xt(n,i,a){if(n.tag===3)Vp(n,n,a);else for(;i!==null;){if(i.tag===3){Vp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ur===null||!ur.has(c))){n=Ts(a,n),n=lp(i,n,1),i=lr(i,n,1),n=wn(),i!==null&&(Cn(i,1,n),Dn(i,n));break}}i=i.return}}function fv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(cn&a)===a&&(Qt===4||Qt===3&&(cn&130023424)===cn&&500>Pe()-yu?jr(n,0):_u|=a),Dn(n,i)}function Gp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ri,ri<<=1,(ri&130023424)===0&&(ri=4194304)));var a=wn();n=Ii(n,i),n!==null&&(Cn(n,i,a),Dn(n,a))}function hv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Gp(n,a)}function pv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Gp(n,a)}var Wp;Wp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Rn.current)Pn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,tv(n,i,a);Pn=(n.flags&131072)!==0}else Pn=!1,Vt&&(i.flags&1048576)!==0&&Eh(i,Ro,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Go(n,i),n=i.pendingProps;var h=vs(i,fn.current);Es(i,a),h=Zc(null,i,c,n,h,a);var x=Jc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(c)?(x=!0,To(i)):x=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Gc(i),h.updater=Ho,i.stateNode=h,h._reactInternals=i,ru(i,c,n,a),i=lu(null,i,c,!0,x,a)):(i.tag=0,Vt&&x&&Ic(i),Mn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Go(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=gv(c),n=oi(c,n),h){case 0:i=ou(null,i,c,n,a);break e;case 1:i=xp(null,i,c,n,a);break e;case 11:i=fp(null,i,c,n,a);break e;case 14:i=hp(null,i,c,oi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),ou(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),xp(n,i,c,h,a);case 3:e:{if(vp(i),n===null)throw Error(t(387));c=i.pendingProps,x=i.memoizedState,h=x.element,Dh(n,i),Uo(i,c,null,a);var T=i.memoizedState;if(c=T.element,x.isDehydrated)if(x={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=x,i.memoizedState=x,i.flags&256){h=Ts(Error(t(423)),i),i=_p(n,i,c,a,h);break e}else if(c!==h){h=Ts(Error(t(424)),i),i=_p(n,i,c,a,h);break e}else for(Bn=ir(i.stateNode.containerInfo.firstChild),zn=i,Vt=!0,ai=null,a=Ph(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),c===h){i=ki(n,i,a);break e}Mn(n,i,c,a)}i=i.child}return i;case 5:return kh(i),n===null&&Fc(i),c=i.type,h=i.pendingProps,x=n!==null?n.memoizedProps:null,T=h.children,Cc(c,h)?T=null:x!==null&&Cc(c,x)&&(i.flags|=32),gp(n,i),Mn(n,i,T,a),i.child;case 6:return n===null&&Fc(i),null;case 13:return yp(n,i,a);case 4:return Wc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ms(i,null,c,a):Mn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),fp(n,i,c,h,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,x=i.memoizedProps,T=h.value,Ft(Lo,c._currentValue),c._currentValue=T,x!==null)if(si(x.value,T)){if(x.children===h.children&&!Rn.current){i=ki(n,i,a);break e}}else for(x=i.child,x!==null&&(x.return=i);x!==null;){var z=x.dependencies;if(z!==null){T=x.child;for(var G=z.firstContext;G!==null;){if(G.context===c){if(x.tag===1){G=Ui(-1,a&-a),G.tag=2;var ce=x.updateQueue;if(ce!==null){ce=ce.shared;var Ce=ce.pending;Ce===null?G.next=G:(G.next=Ce.next,Ce.next=G),ce.pending=G}}x.lanes|=a,G=x.alternate,G!==null&&(G.lanes|=a),Hc(x.return,a,i),z.lanes|=a;break}G=G.next}}else if(x.tag===10)T=x.type===i.type?null:x.child;else if(x.tag===18){if(T=x.return,T===null)throw Error(t(341));T.lanes|=a,z=T.alternate,z!==null&&(z.lanes|=a),Hc(T,a,i),T=x.sibling}else T=x.child;if(T!==null)T.return=x;else for(T=x;T!==null;){if(T===i){T=null;break}if(x=T.sibling,x!==null){x.return=T.return,T=x;break}T=T.return}x=T}Mn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Es(i,a),h=Zn(h),c=c(h),i.flags|=1,Mn(n,i,c,a),i.child;case 14:return c=i.type,h=oi(c,i.pendingProps),h=oi(c.type,h),hp(n,i,c,h,a);case 15:return pp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),Go(n,i),i.tag=1,Nn(c)?(n=!0,To(i)):n=!1,Es(i,a),sp(i,c,h),ru(i,c,h,a),lu(null,i,c,!0,n,a);case 19:return Mp(n,i,a);case 22:return mp(n,i,a)}throw Error(t(156,i.tag))};function Xp(n,i){return ue(n,i)}function mv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,a,c){return new mv(n,i,a,c)}function Cu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gv(n){if(typeof n=="function")return Cu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===pe)return 14}return 2}function pr(n,i){var a=n.alternate;return a===null?(a=ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function tl(n,i,a,c,h,x){var T=2;if(c=n,typeof n=="function")Cu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return Vr(a.children,h,x,i);case B:T=8,h|=8;break;case P:return n=ei(12,a,i,h|2),n.elementType=P,n.lanes=x,n;case ee:return n=ei(13,a,i,h),n.elementType=ee,n.lanes=x,n;case he:return n=ei(19,a,i,h),n.elementType=he,n.lanes=x,n;case fe:return nl(a,h,x,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case j:T=9;break e;case ne:T=11;break e;case pe:T=14;break e;case te:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(T,a,i,h),i.elementType=n,i.type=c,i.lanes=x,i}function Vr(n,i,a,c){return n=ei(7,n,c,i),n.lanes=a,n}function nl(n,i,a,c){return n=ei(22,n,c,i),n.elementType=fe,n.lanes=a,n.stateNode={isHidden:!1},n}function Ru(n,i,a){return n=ei(6,n,null,i),n.lanes=a,n}function Nu(n,i,a){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function xv(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qn(0),this.expirationTimes=qn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Pu(n,i,a,c,h,x,T,z,G){return n=new xv(n,i,a,z,G),i===1?(i=1,x===!0&&(i|=8)):i=0,x=ei(3,null,null,i),n.current=x,x.stateNode=n,x.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gc(x),n}function vv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function $p(n){if(!n)return sr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Nn(a))return Sh(n,a,i)}return i}function qp(n,i,a,c,h,x,T,z,G){return n=Pu(a,c,!0,n,h,x,T,z,G),n.context=$p(null),a=n.current,c=wn(),h=fr(a),x=Ui(c,h),x.callback=i??null,lr(a,x,h),n.current.lanes=h,Cn(n,h,c),Dn(n,c),n}function il(n,i,a,c){var h=i.current,x=wn(),T=fr(h);return a=$p(a),i.context===null?i.context=a:i.pendingContext=a,i=Ui(x,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=lr(h,i,T),n!==null&&(ui(n,h,T,x),Io(n,h,T)),T}function rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Yp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Lu(n,i){Yp(n,i),(n=n.alternate)&&Yp(n,i)}function _v(){return null}var Kp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Du(n){this._internalRoot=n}sl.prototype.render=Du.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));il(n,i,null,null)},sl.prototype.unmount=Du.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Br(function(){il(null,n,null,null)}),i[Ni]=null}};function sl(n){this._internalRoot=n}sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Df();n={blockedOn:null,target:n,priority:i};for(var a=0;a<er.length&&i!==0&&i<er[a].priority;a++);er.splice(a,0,n),a===0&&kf(n)}};function Iu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function yv(n,i,a,c,h){if(h){if(typeof c=="function"){var x=c;c=function(){var ce=rl(T);x.call(ce)}}var T=qp(i,c,n,0,null,!1,!1,"",Zp);return n._reactRootContainer=T,n[Ni]=T.current,_a(n.nodeType===8?n.parentNode:n),Br(),T}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var z=c;c=function(){var ce=rl(G);z.call(ce)}}var G=Pu(n,0,!1,null,null,!1,!1,"",Zp);return n._reactRootContainer=G,n[Ni]=G.current,_a(n.nodeType===8?n.parentNode:n),Br(function(){il(i,G,a,c)}),G}function ol(n,i,a,c,h){var x=a._reactRootContainer;if(x){var T=x;if(typeof h=="function"){var z=h;h=function(){var G=rl(T);z.call(G)}}il(i,T,n,h)}else T=yv(a,i,n,h,c);return rl(T)}Pf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Zt(i.pendingLanes);a!==0&&(rc(i,a|1),Dn(i,Pe()),(Tt&6)===0&&(Rs=Pe()+500,ar()))}break;case 13:Br(function(){var c=Ii(n,1);if(c!==null){var h=wn();ui(c,n,1,h)}}),Lu(n,1)}},sc=function(n){if(n.tag===13){var i=Ii(n,134217728);if(i!==null){var a=wn();ui(i,n,134217728,a)}Lu(n,134217728)}},Lf=function(n){if(n.tag===13){var i=fr(n),a=Ii(n,i);if(a!==null){var c=wn();ui(a,n,i,c)}Lu(n,i)}},Df=function(){return Lt},If=function(n,i){var a=Lt;try{return Lt=n,i()}finally{Lt=a}},He=function(n,i,a){switch(i){case"input":if(De(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Eo(c);if(!h)throw Error(t(90));me(c),De(c,h)}}}break;case"textarea":Se(n,a);break;case"select":i=a.value,i!=null&&U(n,!!a.multiple,i,!1)}},zt=bu,Kt=Br;var Sv={usingClientEntryPoint:!1,Events:[Ma,gs,Eo,Ge,mt,bu]},ka={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mv={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=N(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||_v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{Nt=ll.inject(Mv),wt=ll}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sv,In.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Iu(i))throw Error(t(200));return vv(n,i,null,a)},In.createRoot=function(n,i){if(!Iu(n))throw Error(t(299));var a=!1,c="",h=Kp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Pu(n,1,!1,null,null,a,!1,c,h),n[Ni]=i.current,_a(n.nodeType===8?n.parentNode:n),new Du(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=N(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Br(n)},In.hydrate=function(n,i,a){if(!al(i))throw Error(t(200));return ol(null,n,i,!0,a)},In.hydrateRoot=function(n,i,a){if(!Iu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,x="",T=Kp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(x=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=qp(i,null,n,1,a??null,h,!1,x,T),n[Ni]=i.current,_a(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new sl(i)},In.render=function(n,i,a){if(!al(i))throw Error(t(200));return ol(null,n,i,!1,a)},In.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Ni]=null})}),!0):!1},In.unstable_batchedUpdates=bu,In.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ol(n,i,a,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var sm;function Nv(){if(sm)return Fu.exports;sm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Fu.exports=Rv(),Fu.exports}var am;function Pv(){if(am)return cl;am=1;var s=Nv();return cl.createRoot=s.createRoot,cl.hydrateRoot=s.hydrateRoot,cl}var Lv=Pv();const Dv=x0(Lv);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=s=>s==null?void 0:s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Uv(s,e,t=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:Iv(s),size:24,node:e,...t.length>0?{aliases:t}:{}}}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=s=>{let e="",t=!1;for(const r of s){if(r==="-"||r==="_"||r<=" "){t=e.length>0;continue}e.length===0?e+=r.toLowerCase():e+=t?r.toUpperCase():r,t=!1}return e};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=s=>{const e=kv(s);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Bu(s){return s!=null}function Ov(s,e={}){var S,_;const t=e.attributeNames??{},r=w=>t[w]??w,o=s.size??s.width??Gr.width,l=s.size??s.height??Gr.height,u=((S=s.aliases)==null?void 0:S.filter(w=>typeof w=="string"&&w.trim()!=="").map(w=>`lucide-${w}`))??[],d=[...s.name?[`lucide-${s.name}`]:[],...u],f=((_=e.className)==null?void 0:_.split(" ").filter(Boolean))??[],p=e.includeDefaultClasses===!1?wd(...f):wd("lucide",...d,...f),g=e.absoluteStrokeWidth?Number(e.strokeWidth??Gr["stroke-width"])*Number(s.size??s.width??Gr.width)/Number(e.size??e.width??Gr.width):e.strokeWidth??Gr["stroke-width"];return["svg",{...Object.entries(Gr).reduce((w,[E,M])=>(w[r(E)]=M,w),{}),..."color"in e&&e.color&&{[r("stroke")]:e.color},..."size"in e&&Bu(e.size)&&{[r("width")]:e.size,[r("height")]:e.size},..."width"in e&&Bu(e.width)&&{[r("width")]:e.width},..."height"in e&&Bu(e.height)&&{[r("height")]:e.height},[r("stroke-width")]:g,...p&&{[r("class")]:p},[r("viewBox")]:`0 0 ${o} ${l}`,...e.hasA11yProp===!1?{[r("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},s.node.map(w=>{const[E,M,v]=w,L=e.nonScalingStroke?{[r("vector-effect")]:"non-scaling-stroke",...M}:M;return v?[E,L,v]:[E,L]})]}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function zv(s,e={}){return Ov(s,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=s=>{for(const e in s)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},jv=ze.createContext({}),Hv=()=>ze.useContext(jv),Vv=ze.forwardRef(({color:s,size:e,width:t,height:r,strokeWidth:o,absoluteStrokeWidth:l,nonScalingStroke:u,className:d="",children:f,iconNode:p=[],icon:g={node:p,aliases:[],size:24},...y},S)=>{const{size:_=24,strokeWidth:w=2,absoluteStrokeWidth:E=!1,nonScalingStroke:M=!1,color:v="currentColor",className:L=""}=Hv()??{},D=!!f||Bv(y),[C,H,F=[]]=zv(g,{color:s??v,width:t??e??_,height:r??e??_,strokeWidth:o??w,absoluteStrokeWidth:l??E,nonScalingStroke:u??M,className:wd(L,d),hasA11yProp:D,attributes:y});return ze.createElement(C,{ref:S,...H},[...F.map(([O,B])=>ze.createElement(O,B)),...Array.isArray(f)?f:[f]])});/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Mt(s,e=[],t=[]){const r=typeof s=="string"?Uv(s,e,t):s,o=ze.forwardRef(({className:l,...u},d)=>ze.createElement(Vv,{ref:d,icon:r,className:l,...u}));return r.name&&(o.displayName=Fv(r.name)),o}/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};_0.node;const Yl=Mt(_0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0={name:"bookmark",size:24,node:[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]]};y0.node;const jl=Mt(y0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};S0.node;const Ar=Mt(S0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};M0.node;const Gv=Mt(M0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};w0.node;const Ed=Mt(w0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};E0.node;const b0=Mt(E0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};T0.node;const A0=Mt(T0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}],["path",{d:"M6 14h2",key:"mk7k0u"}]]};C0.node;const om=Mt(C0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0={name:"dollar-sign",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6",key:"pwzcbw"}]]};R0.node;const Wv=Mt(R0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};N0.node;const Xv=Mt(N0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0={name:"info",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]};P0.node;const $v=Mt(P0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};L0.node;const hf=Mt(L0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};D0.node;const qv=Mt(D0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0={name:"maximize-2",size:24,node:[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]};I0.node;const Yv=Mt(I0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};U0.node;const Kv=Mt(U0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0={name:"minimize-2",size:24,node:[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]};k0.node;const Zv=Mt(k0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0={name:"minus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}]]};F0.node;const Jv=Mt(F0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0={name:"package",size:24,node:[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]};O0.node;const Qv=Mt(O0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0={name:"palette",size:24,node:[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]};z0.node;const e_=Mt(z0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0={name:"pause",size:24,node:[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]};B0.node;const t_=Mt(B0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};j0.node;const n_=Mt(j0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};H0.node;const V0=Mt(H0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};G0.node;const i_=Mt(G0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0={name:"ruler",size:24,node:[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]};W0.node;const bd=Mt(W0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};X0.node;const $0=Mt(X0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};q0.node;const Kl=Mt(q0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0={name:"shopping-bag",size:24,node:[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]]};Y0.node;const Ys=Mt(Y0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};K0.node;const r_=Mt(K0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};Z0.node;const Ya=Mt(Z0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};J0.node;const s_=Mt(J0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0={name:"sun-medium",size:24,node:[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]};Q0.node;const a_=Mt(Q0);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg={name:"tag",size:24,node:[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]};eg.node;const o_=Mt(eg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg={name:"trash",size:24,node:[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],aliases:["trash-2"]};tg.node;const ng=Mt(tg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig={name:"truck",size:24,node:[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]};ig.node;const Hl=Mt(ig);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg={name:"upload",size:24,node:[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]};rg.node;const l_=Mt(rg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg={name:"user",size:24,node:[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]};sg.node;const c_=Mt(sg);/**
 * @license lucide-react v1.70.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};ag.node;const Zl=Mt(ag);function u_({currentView:s,onNavigate:e,cartCount:t=0,onOpenCart:r,savedCount:o=0}){const[l,u]=v0.useState(!1),d=[{id:"studio",label:"3D Studio",icon:Ar},{id:"catalog",label:"Collections",icon:A0},{id:"wardrobe",label:"Saved Wardrobe",icon:jl,badge:o},{id:"tracking",label:"Track Order",icon:Hl},{id:"admin",label:"Admin Studio",icon:Kl}],f=p=>{e(p),u(!1)};return m.jsxs("header",{className:"sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 backdrop-blur-xl",children:[m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[m.jsxs("div",{onClick:()=>f("studio"),className:"flex items-center space-x-3 cursor-pointer group",children:[m.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-neon via-brand-cyan to-brand-violet p-0.5 shadow-glow-neon group-hover:scale-105 transition",children:m.jsx("div",{className:"w-full h-full bg-dark-950 rounded-[10px] flex items-center justify-center",children:m.jsx(Ar,{className:"w-5 h-5 text-brand-neon"})})}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"font-display font-extrabold text-lg text-white tracking-wider",children:"ATELIER"}),m.jsx("span",{className:"text-[11px] font-mono px-1.5 py-0.2 rounded bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 font-bold",children:"3D"})]}),m.jsx("p",{className:"text-[9px] font-mono text-slate-400 tracking-widest uppercase",children:"Next-Gen Fashion Lab"})]})]}),m.jsx("nav",{className:"hidden md:flex items-center space-x-1 glass-panel-subtle px-3 py-1.5 rounded-full border border-slate-800",children:d.map(p=>{const g=p.icon,y=s===p.id;return m.jsxs("button",{onClick:()=>f(p.id),className:`relative flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${y?"text-dark-950 bg-brand-neon shadow-glow-neon":"text-slate-300 hover:text-white hover:bg-slate-800/60"}`,children:[m.jsx(g,{className:`w-3.5 h-3.5 ${y?"text-dark-950":"text-slate-400"}`}),m.jsx("span",{children:p.label}),p.badge>0&&!y&&m.jsx("span",{className:"w-4 h-4 rounded-full bg-brand-cyan text-dark-950 text-[10px] font-bold flex items-center justify-center",children:p.badge})]},p.id)})}),m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsxs("button",{onClick:r,className:"relative flex items-center space-x-2 px-3.5 py-2 rounded-xl glass-panel border border-slate-700/80 hover:border-brand-neon/60 text-slate-200 hover:text-white transition group",children:[m.jsx(Ys,{className:"w-4 h-4 text-brand-neon group-hover:scale-110 transition"}),m.jsx("span",{className:"text-xs font-semibold hidden sm:inline",children:"Bag"}),t>0&&m.jsx("span",{className:"w-5 h-5 rounded-full bg-brand-neon text-dark-950 font-display font-extrabold text-xs flex items-center justify-center",children:t})]}),m.jsx("button",{onClick:()=>u(!l),className:"md:hidden p-2 rounded-xl glass-panel border border-slate-700 text-slate-300",children:l?m.jsx(Zl,{className:"w-5 h-5"}):m.jsx(Kv,{className:"w-5 h-5"})})]})]}),l&&m.jsx("div",{className:"md:hidden border-t border-slate-800 bg-dark-900/95 backdrop-blur-xl px-4 py-4 space-y-2",children:d.map(p=>{const g=p.icon,y=s===p.id;return m.jsxs("button",{onClick:()=>f(p.id),className:`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition ${y?"bg-brand-neon text-dark-950 font-bold":"text-slate-300 hover:bg-slate-800"}`,children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx(g,{className:"w-4 h-4"}),m.jsx("span",{children:p.label})]}),p.badge>0&&m.jsx("span",{className:"px-2 py-0.5 rounded-full bg-brand-cyan text-dark-950 text-xs font-bold",children:p.badge})]},p.id)})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="170",d_=0,lm=1,f_=2,og=1,lg=2,Vi=3,Cr=0,bn=1,Gn=2,br=0,Xs=1,cm=2,um=3,dm=4,h_=5,Qr=100,p_=101,m_=102,g_=103,x_=104,v_=200,__=201,y_=202,S_=203,Td=204,Ad=205,M_=206,w_=207,E_=208,b_=209,T_=210,A_=211,C_=212,R_=213,N_=214,Cd=0,Rd=1,Nd=2,Ks=3,Pd=4,Ld=5,Dd=6,Id=7,cg=0,P_=1,L_=2,Tr=0,D_=1,I_=2,U_=3,ug=4,k_=5,F_=6,O_=7,dg=300,Zs=301,Js=302,Ud=303,kd=304,Jl=306,is=1e3,ts=1001,Fd=1002,gi=1003,z_=1004,ul=1005,Ei=1006,ju=1007,ns=1008,$i=1009,fg=1010,hg=1011,Ka=1012,mf=1013,rs=1014,Gi=1015,Qa=1016,gf=1017,xf=1018,Qs=1020,pg=35902,mg=1021,gg=1022,mi=1023,xg=1024,vg=1025,$s=1026,ea=1027,_g=1028,vf=1029,yg=1030,_f=1031,yf=1033,Ul=33776,kl=33777,Fl=33778,Ol=33779,Od=35840,zd=35841,Bd=35842,jd=35843,Hd=36196,Vd=37492,Gd=37496,Wd=37808,Xd=37809,$d=37810,qd=37811,Yd=37812,Kd=37813,Zd=37814,Jd=37815,Qd=37816,ef=37817,tf=37818,nf=37819,rf=37820,sf=37821,zl=36492,af=36494,of=36495,Sg=36283,lf=36284,cf=36285,uf=36286,B_=3200,j_=3201,Mg=0,H_=1,Er="",ni="srgb",na="srgb-linear",Ql="linear",Dt="srgb",Ps=7680,fm=519,V_=512,G_=513,W_=514,wg=515,X_=516,$_=517,q_=518,Y_=519,hm=35044,pm="300 es",Wi=2e3,Vl=2001;class ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=Math.PI/180,Gl=180/Math.PI;function eo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function vn(s,e,t){return Math.max(e,Math.min(t,s))}function K_(s,e){return(s%e+e)%e}function Vu(s,e,t){return(1-t)*s+t*e}function Oa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e,t,r,o,l,u,d,f,p){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p)}set(e,t,r,o,l,u,d,f,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=f,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],g=r[4],y=r[7],S=r[2],_=r[5],w=r[8],E=o[0],M=o[3],v=o[6],L=o[1],D=o[4],C=o[7],H=o[2],F=o[5],O=o[8];return l[0]=u*E+d*L+f*H,l[3]=u*M+d*D+f*F,l[6]=u*v+d*C+f*O,l[1]=p*E+g*L+y*H,l[4]=p*M+g*D+y*F,l[7]=p*v+g*C+y*O,l[2]=S*E+_*L+w*H,l[5]=S*M+_*D+w*F,l[8]=S*v+_*C+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],g=e[8];return t*u*g-t*d*p-r*l*g+r*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],g=e[8],y=g*u-d*p,S=d*f-g*l,_=p*l-u*f,w=t*y+r*S+o*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=y*E,e[1]=(o*p-g*r)*E,e[2]=(d*r-o*u)*E,e[3]=S*E,e[4]=(g*t-o*f)*E,e[5]=(o*l-d*t)*E,e[6]=_*E,e[7]=(r*f-p*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new vt;function Eg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Z_(){const s=Wl("canvas");return s.style.display="block",s}const mm={};function Wa(s){s in mm||(mm[s]=!0,console.warn(s))}function J_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Q_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ey(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const At={enabled:!0,workingColorSpace:na,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Er?Ql:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const gm=[.64,.33,.3,.6,.15,.06],xm=[.2126,.7152,.0722],vm=[.3127,.329],_m=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ym=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);At.define({[na]:{primaries:gm,whitePoint:vm,transfer:Ql,toXYZ:_m,fromXYZ:ym,luminanceCoefficients:xm,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:gm,whitePoint:vm,transfer:Dt,toXYZ:_m,fromXYZ:ym,luminanceCoefficients:xm,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}});let Ls;class ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=Wl("canvas")),Ls.width=e.width,Ls.height=e.height;const r=Ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Xi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ny=0;class bg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Wu(o[u].image)):l.push(Wu(o[u]))}else l=Wu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Wu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ty.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iy=0;class Tn extends ia{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,r=ts,o=ts,l=Ei,u=ns,d=mi,f=$i,p=Tn.DEFAULT_ANISOTROPY,g=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=eo(),this.name="",this.source=new bg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case ts:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case ts:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=dg;Tn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,r=0,o=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],g=f[4],y=f[8],S=f[1],_=f[5],w=f[9],E=f[2],M=f[6],v=f[10];if(Math.abs(g-S)<.01&&Math.abs(y-E)<.01&&Math.abs(w-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(y+E)<.1&&Math.abs(w+M)<.1&&Math.abs(p+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,C=(_+1)/2,H=(v+1)/2,F=(g+S)/4,O=(y+E)/4,B=(w+M)/4;return D>C&&D>H?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=F/r,l=O/r):C>H?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=F/o,l=B/o):H<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(H),r=O/l,o=B/l),this.set(r,o,l,t),this}let L=Math.sqrt((M-w)*(M-w)+(y-E)*(y-E)+(S-g)*(S-g));return Math.abs(L)<.001&&(L=1),this.x=(M-w)/L,this.y=(y-E)/L,this.z=(S-g)/L,this.w=Math.acos((p+_+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ry extends ia{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Tn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new bg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends ry{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Tg extends Tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sy extends Tn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=gi,this.minFilter=gi,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let f=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];const S=l[u+0],_=l[u+1],w=l[u+2],E=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(d===1){e[t+0]=S,e[t+1]=_,e[t+2]=w,e[t+3]=E;return}if(y!==E||f!==S||p!==_||g!==w){let M=1-d;const v=f*S+p*_+g*w+y*E,L=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const H=Math.sqrt(D),F=Math.atan2(H,v*L);M=Math.sin(M*F)/H,d=Math.sin(d*F)/H}const C=d*L;if(f=f*M+S*C,p=p*M+_*C,g=g*M+w*C,y=y*M+E*C,M===1-d){const H=1/Math.sqrt(f*f+p*p+g*g+y*y);f*=H,p*=H,g*=H,y*=H}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],f=r[o+1],p=r[o+2],g=r[o+3],y=l[u],S=l[u+1],_=l[u+2],w=l[u+3];return e[t]=d*w+g*y+f*_-p*S,e[t+1]=f*w+g*S+p*y-d*_,e[t+2]=p*w+g*_+d*S-f*y,e[t+3]=g*w-d*y-f*S-p*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),g=d(o/2),y=d(l/2),S=f(r/2),_=f(o/2),w=f(l/2);switch(u){case"XYZ":this._x=S*g*y+p*_*w,this._y=p*_*y-S*g*w,this._z=p*g*w+S*_*y,this._w=p*g*y-S*_*w;break;case"YXZ":this._x=S*g*y+p*_*w,this._y=p*_*y-S*g*w,this._z=p*g*w-S*_*y,this._w=p*g*y+S*_*w;break;case"ZXY":this._x=S*g*y-p*_*w,this._y=p*_*y+S*g*w,this._z=p*g*w+S*_*y,this._w=p*g*y-S*_*w;break;case"ZYX":this._x=S*g*y-p*_*w,this._y=p*_*y+S*g*w,this._z=p*g*w-S*_*y,this._w=p*g*y+S*_*w;break;case"YZX":this._x=S*g*y+p*_*w,this._y=p*_*y+S*g*w,this._z=p*g*w-S*_*y,this._w=p*g*y-S*_*w;break;case"XZY":this._x=S*g*y-p*_*w,this._y=p*_*y-S*g*w,this._z=p*g*w+S*_*y,this._w=p*g*y+S*_*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],g=t[6],y=t[10],S=r+d+y;if(S>0){const _=.5/Math.sqrt(S+1);this._w=.25/_,this._x=(g-f)*_,this._y=(l-p)*_,this._z=(u-o)*_}else if(r>d&&r>y){const _=2*Math.sqrt(1+r-d-y);this._w=(g-f)/_,this._x=.25*_,this._y=(o+u)/_,this._z=(l+p)/_}else if(d>y){const _=2*Math.sqrt(1+d-r-y);this._w=(l-p)/_,this._x=(o+u)/_,this._y=.25*_,this._z=(f+g)/_}else{const _=2*Math.sqrt(1+y-r-d);this._w=(u-o)/_,this._x=(l+p)/_,this._y=(f+g)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,g=t._w;return this._x=r*g+u*d+o*p-l*f,this._y=o*g+u*f+l*d-r*p,this._z=l*g+u*p+r*f-o*d,this._w=u*g-r*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const _=1-t;return this._w=_*u+t*this._w,this._x=_*r+t*this._x,this._y=_*o+t*this._y,this._z=_*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),g=Math.atan2(p,d),y=Math.sin((1-t)*g)/p,S=Math.sin(t*g)/p;return this._w=u*y+this._w*S,this._x=r*y+this._x*S,this._y=o*y+this._y*S,this._z=l*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*r),g=2*(d*t-l*o),y=2*(l*r-u*t);return this.x=t+f*p+u*y-d*g,this.y=r+f*g+d*p-l*y,this.z=o+f*y+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-r*f,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xu.copy(this).projectOnVector(e),this.sub(Xu)}reflect(e){return this.sub(Xu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(vn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xu=new X,Sm=new to;class no{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,di):di.fromBufferAttribute(l,u),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(za),fl.subVectors(this.max,za),Ds.subVectors(e.a,za),Is.subVectors(e.b,za),Us.subVectors(e.c,za),gr.subVectors(Is,Ds),xr.subVectors(Us,Is),Wr.subVectors(Ds,Us);let t=[0,-gr.z,gr.y,0,-xr.z,xr.y,0,-Wr.z,Wr.y,gr.z,0,-gr.x,xr.z,0,-xr.x,Wr.z,0,-Wr.x,-gr.y,gr.x,0,-xr.y,xr.x,0,-Wr.y,Wr.x,0];return!$u(t,Ds,Is,Us,fl)||(t=[1,0,0,0,1,0,0,0,1],!$u(t,Ds,Is,Us,fl))?!1:(hl.crossVectors(gr,xr),t=[hl.x,hl.y,hl.z],$u(t,Ds,Is,Us,fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new X,new X,new X,new X,new X,new X,new X,new X],di=new X,dl=new no,Ds=new X,Is=new X,Us=new X,gr=new X,xr=new X,Wr=new X,za=new X,fl=new X,hl=new X,Xr=new X;function $u(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Xr.fromArray(s,l);const d=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),f=e.dot(Xr),p=t.dot(Xr),g=r.dot(Xr);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>d)return!1}return!0}const ay=new no,Ba=new X,qu=new X;class ec{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ay.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ba,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(qu)),this.expandByPoint(Ba.copy(e.center).sub(qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new X,Yu=new X,pl=new X,vr=new X,Ku=new X,ml=new X,Zu=new X;class Ag{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Yu.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Yu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(pl),d=vr.dot(this.direction),f=-vr.dot(pl),p=vr.lengthSq(),g=Math.abs(1-u*u);let y,S,_,w;if(g>0)if(y=u*f-d,S=u*d-f,w=l*g,y>=0)if(S>=-w)if(S<=w){const E=1/g;y*=E,S*=E,_=y*(y+u*S+2*d)+S*(u*y+S+2*f)+p}else S=l,y=Math.max(0,-(u*S+d)),_=-y*y+S*(S+2*f)+p;else S=-l,y=Math.max(0,-(u*S+d)),_=-y*y+S*(S+2*f)+p;else S<=-w?(y=Math.max(0,-(-u*l+d)),S=y>0?-l:Math.min(Math.max(-l,-f),l),_=-y*y+S*(S+2*f)+p):S<=w?(y=0,S=Math.min(Math.max(-l,-f),l),_=S*(S+2*f)+p):(y=Math.max(0,-(u*l+d)),S=y>0?l:Math.min(Math.max(-l,-f),l),_=-y*y+S*(S+2*f)+p);else S=u>0?-l:l,y=Math.max(0,-(u*S+d)),_=-y*y+S*(S+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Yu).addScaledVector(pl,S),_}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const r=zi.dot(this.direction),o=zi.dot(zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,f;const p=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,o=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,o=(e.min.x-S.x)*p),g>=0?(l=(e.min.y-S.y)*g,u=(e.max.y-S.y)*g):(l=(e.max.y-S.y)*g,u=(e.min.y-S.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),y>=0?(d=(e.min.z-S.z)*y,f=(e.max.z-S.z)*y):(d=(e.max.z-S.z)*y,f=(e.min.z-S.z)*y),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,r,o,l){Ku.subVectors(t,e),ml.subVectors(r,e),Zu.crossVectors(Ku,ml);let u=this.direction.dot(Zu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;vr.subVectors(this.origin,e);const f=d*this.direction.dot(ml.crossVectors(vr,ml));if(f<0)return null;const p=d*this.direction.dot(Ku.cross(vr));if(p<0||f+p>u)return null;const g=-d*vr.dot(Zu);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,o,l,u,d,f,p,g,y,S,_,w,E,M){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p,g,y,S,_,w,E,M)}set(e,t,r,o,l,u,d,f,p,g,y,S,_,w,E,M){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=d,v[13]=f,v[2]=p,v[6]=g,v[10]=y,v[14]=S,v[3]=_,v[7]=w,v[11]=E,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(o),p=Math.sin(o),g=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const S=u*g,_=u*y,w=d*g,E=d*y;t[0]=f*g,t[4]=-f*y,t[8]=p,t[1]=_+w*p,t[5]=S-E*p,t[9]=-d*f,t[2]=E-S*p,t[6]=w+_*p,t[10]=u*f}else if(e.order==="YXZ"){const S=f*g,_=f*y,w=p*g,E=p*y;t[0]=S+E*d,t[4]=w*d-_,t[8]=u*p,t[1]=u*y,t[5]=u*g,t[9]=-d,t[2]=_*d-w,t[6]=E+S*d,t[10]=u*f}else if(e.order==="ZXY"){const S=f*g,_=f*y,w=p*g,E=p*y;t[0]=S-E*d,t[4]=-u*y,t[8]=w+_*d,t[1]=_+w*d,t[5]=u*g,t[9]=E-S*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const S=u*g,_=u*y,w=d*g,E=d*y;t[0]=f*g,t[4]=w*p-_,t[8]=S*p+E,t[1]=f*y,t[5]=E*p+S,t[9]=_*p-w,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const S=u*f,_=u*p,w=d*f,E=d*p;t[0]=f*g,t[4]=E-S*y,t[8]=w*y+_,t[1]=y,t[5]=u*g,t[9]=-d*g,t[2]=-p*g,t[6]=_*y+w,t[10]=S-E*y}else if(e.order==="XZY"){const S=u*f,_=u*p,w=d*f,E=d*p;t[0]=f*g,t[4]=-y,t[8]=p*g,t[1]=S*y+E,t[5]=u*g,t[9]=_*y-w,t[2]=w*y-_,t[6]=d*g,t[10]=E*y+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oy,e,ly)}lookAt(e,t,r){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),_r.crossVectors(r,Hn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),_r.crossVectors(r,Hn)),_r.normalize(),gl.crossVectors(Hn,_r),o[0]=_r.x,o[4]=gl.x,o[8]=Hn.x,o[1]=_r.y,o[5]=gl.y,o[9]=Hn.y,o[2]=_r.z,o[6]=gl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],g=r[1],y=r[5],S=r[9],_=r[13],w=r[2],E=r[6],M=r[10],v=r[14],L=r[3],D=r[7],C=r[11],H=r[15],F=o[0],O=o[4],B=o[8],P=o[12],R=o[1],j=o[5],ne=o[9],ee=o[13],he=o[2],pe=o[6],te=o[10],fe=o[14],V=o[3],le=o[7],I=o[11],b=o[15];return l[0]=u*F+d*R+f*he+p*V,l[4]=u*O+d*j+f*pe+p*le,l[8]=u*B+d*ne+f*te+p*I,l[12]=u*P+d*ee+f*fe+p*b,l[1]=g*F+y*R+S*he+_*V,l[5]=g*O+y*j+S*pe+_*le,l[9]=g*B+y*ne+S*te+_*I,l[13]=g*P+y*ee+S*fe+_*b,l[2]=w*F+E*R+M*he+v*V,l[6]=w*O+E*j+M*pe+v*le,l[10]=w*B+E*ne+M*te+v*I,l[14]=w*P+E*ee+M*fe+v*b,l[3]=L*F+D*R+C*he+H*V,l[7]=L*O+D*j+C*pe+H*le,l[11]=L*B+D*ne+C*te+H*I,l[15]=L*P+D*ee+C*fe+H*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],g=e[2],y=e[6],S=e[10],_=e[14],w=e[3],E=e[7],M=e[11],v=e[15];return w*(+l*f*y-o*p*y-l*d*S+r*p*S+o*d*_-r*f*_)+E*(+t*f*_-t*p*S+l*u*S-o*u*_+o*p*g-l*f*g)+M*(+t*p*y-t*d*_-l*u*y+r*u*_+l*d*g-r*p*g)+v*(-o*d*g-t*f*y+t*d*S+o*u*y-r*u*S+r*f*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],g=e[8],y=e[9],S=e[10],_=e[11],w=e[12],E=e[13],M=e[14],v=e[15],L=y*M*p-E*S*p+E*f*_-d*M*_-y*f*v+d*S*v,D=w*S*p-g*M*p-w*f*_+u*M*_+g*f*v-u*S*v,C=g*E*p-w*y*p+w*d*_-u*E*_-g*d*v+u*y*v,H=w*y*f-g*E*f-w*d*S+u*E*S+g*d*M-u*y*M,F=t*L+r*D+o*C+l*H;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=L*O,e[1]=(E*S*l-y*M*l-E*o*_+r*M*_+y*o*v-r*S*v)*O,e[2]=(d*M*l-E*f*l+E*o*p-r*M*p-d*o*v+r*f*v)*O,e[3]=(y*f*l-d*S*l-y*o*p+r*S*p+d*o*_-r*f*_)*O,e[4]=D*O,e[5]=(g*M*l-w*S*l+w*o*_-t*M*_-g*o*v+t*S*v)*O,e[6]=(w*f*l-u*M*l-w*o*p+t*M*p+u*o*v-t*f*v)*O,e[7]=(u*S*l-g*f*l+g*o*p-t*S*p-u*o*_+t*f*_)*O,e[8]=C*O,e[9]=(w*y*l-g*E*l-w*r*_+t*E*_+g*r*v-t*y*v)*O,e[10]=(u*E*l-w*d*l+w*r*p-t*E*p-u*r*v+t*d*v)*O,e[11]=(g*d*l-u*y*l-g*r*p+t*y*p+u*r*_-t*d*_)*O,e[12]=H*O,e[13]=(g*E*o-w*y*o+w*r*S-t*E*S-g*r*M+t*y*M)*O,e[14]=(w*d*o-u*E*o-w*r*f+t*E*f+u*r*M-t*d*M)*O,e[15]=(u*y*o-g*d*o+g*r*f-t*y*f-u*r*S+t*d*S)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,g=l*d;return this.set(p*u+r,p*d-o*f,p*f+o*d,0,p*d+o*f,g*d+r,g*f-o*u,0,p*f-o*d,g*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,g=u+u,y=d+d,S=l*p,_=l*g,w=l*y,E=u*g,M=u*y,v=d*y,L=f*p,D=f*g,C=f*y,H=r.x,F=r.y,O=r.z;return o[0]=(1-(E+v))*H,o[1]=(_+C)*H,o[2]=(w-D)*H,o[3]=0,o[4]=(_-C)*F,o[5]=(1-(S+v))*F,o[6]=(M+L)*F,o[7]=0,o[8]=(w+D)*O,o[9]=(M-L)*O,o[10]=(1-(S+E))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=ks.set(o[0],o[1],o[2]).length();const u=ks.set(o[4],o[5],o[6]).length(),d=ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],fi.copy(this);const p=1/l,g=1/u,y=1/d;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=y,fi.elements[9]*=y,fi.elements[10]*=y,t.setFromRotationMatrix(fi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Wi){const f=this.elements,p=2*l/(t-e),g=2*l/(r-o),y=(t+e)/(t-e),S=(r+o)/(r-o);let _,w;if(d===Wi)_=-(u+l)/(u-l),w=-2*u*l/(u-l);else if(d===Vl)_=-u/(u-l),w=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=y,f[12]=0,f[1]=0,f[5]=g,f[9]=S,f[13]=0,f[2]=0,f[6]=0,f[10]=_,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Wi){const f=this.elements,p=1/(t-e),g=1/(r-o),y=1/(u-l),S=(t+e)*p,_=(r+o)*g;let w,E;if(d===Wi)w=(u+l)*y,E=-2*y;else if(d===Vl)w=l*y,E=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-S,f[1]=0,f[5]=2*g,f[9]=0,f[13]=-_,f[2]=0,f[6]=0,f[10]=E,f[14]=-w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ks=new X,fi=new Ht,oy=new X(0,0,0),ly=new X(1,1,1),_r=new X,gl=new X,Hn=new X,Mm=new Ht,wm=new to;class Ti{constructor(e=0,t=0,r=0,o=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],g=o[9],y=o[2],S=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(vn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,_),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-vn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,_),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(vn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,_),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-vn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,_),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(vn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(d,_));break;case"XZY":this._z=Math.asin(-vn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Cg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cy=0;const Em=new X,Fs=new to,Bi=new Ht,xl=new X,ja=new X,uy=new X,dy=new to,bm=new X(1,0,0),Tm=new X(0,1,0),Am=new X(0,0,1),Cm={type:"added"},fy={type:"removed"},Os={type:"childadded",child:null},Ju={type:"childremoved",child:null};class en extends ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new X,t=new Ti,r=new to,o=new X(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ht},normalMatrix:{value:new vt}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(Am,e)}translateOnAxis(e,t){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(Am,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?xl.copy(e):xl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ja,xl,this.up):Bi.lookAt(xl,ja,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Fs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cm),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fy),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cm),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const y=f[p];l(e.shapes,y)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),g=u(e.images),y=u(e.shapes),S=u(e.skeletons),_=u(e.animations),w=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),S.length>0&&(r.skeletons=S),_.length>0&&(r.animations=_),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(d){const f=[];for(const p in d){const g=d[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}en.DEFAULT_UP=new X(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new X,ji=new X,Qu=new X,Hi=new X,zs=new X,Bs=new X,Rm=new X,ed=new X,td=new X,nd=new X,id=new It,rd=new It,sd=new It;class pi{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),hi.subVectors(e,t),o.cross(hi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){hi.subVectors(o,t),ji.subVectors(r,t),Qu.subVectors(e,t);const u=hi.dot(hi),d=hi.dot(ji),f=hi.dot(Qu),p=ji.dot(ji),g=ji.dot(Qu),y=u*p-d*d;if(y===0)return l.set(0,0,0),null;const S=1/y,_=(p*f-d*g)*S,w=(u*g-d*f)*S;return l.set(1-_-w,w,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,t,r,o,l,u,d,f){return this.getBarycoord(e,t,r,o,Hi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Hi.x),f.addScaledVector(u,Hi.y),f.addScaledVector(d,Hi.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return id.setScalar(0),rd.setScalar(0),sd.setScalar(0),id.fromBufferAttribute(e,t),rd.fromBufferAttribute(e,r),sd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(id,l.x),u.addScaledVector(rd,l.y),u.addScaledVector(sd,l.z),u}static isFrontFacing(e,t,r,o){return hi.subVectors(r,t),ji.subVectors(e,t),hi.cross(ji).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),hi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return pi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;zs.subVectors(o,r),Bs.subVectors(l,r),ed.subVectors(e,r);const f=zs.dot(ed),p=Bs.dot(ed);if(f<=0&&p<=0)return t.copy(r);td.subVectors(e,o);const g=zs.dot(td),y=Bs.dot(td);if(g>=0&&y<=g)return t.copy(o);const S=f*y-g*p;if(S<=0&&f>=0&&g<=0)return u=f/(f-g),t.copy(r).addScaledVector(zs,u);nd.subVectors(e,l);const _=zs.dot(nd),w=Bs.dot(nd);if(w>=0&&_<=w)return t.copy(l);const E=_*p-f*w;if(E<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(r).addScaledVector(Bs,d);const M=g*w-_*y;if(M<=0&&y-g>=0&&_-w>=0)return Rm.subVectors(l,o),d=(y-g)/(y-g+(_-w)),t.copy(o).addScaledVector(Rm,d);const v=1/(M+E+S);return u=E*v,d=S*v,t.copy(r).addScaledVector(zs,u).addScaledVector(Bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function ad(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=At.workingColorSpace){if(e=K_(e,1),t=vn(t,0,1),r=vn(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ad(u,l,e+1/3),this.g=ad(u,l,e),this.b=ad(u,l,e-1/3)}return At.toWorkingColorSpace(this,o),this}setStyle(e,t=ni){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const r=Rg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return At.fromWorkingColorSpace(xn.copy(this),e),Math.round(vn(xn.r*255,0,255))*65536+Math.round(vn(xn.g*255,0,255))*256+Math.round(vn(xn.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(xn.copy(this),t);const r=xn.r,o=xn.g,l=xn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let f,p;const g=(d+u)/2;if(d===u)f=0,p=0;else{const y=u-d;switch(p=g<=.5?y/(u+d):y/(2-u-d),u){case r:f=(o-l)/y+(o<l?6:0);break;case o:f=(l-r)/y+2;break;case l:f=(r-o)/y+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ni){At.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,o=xn.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(vl);const r=Vu(yr.h,vl.h,t),o=Vu(yr.s,vl.s,t),l=Vu(yr.l,vl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new yt;yt.NAMES=Rg;let hy=0;class ra extends ia{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=eo(),this.name="",this.blending=Xs,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Td&&(r.blendSrc=this.blendSrc),this.blendDst!==Ad&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xl extends ra{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new X,_l=new ct;class bi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=hm,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Oa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hm&&(e.usage=this.usage),e}}class Ng extends bi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Pg extends bi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ot extends bi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let py=0;const ti=new Ht,od=new en,js=new X,Vn=new no,Ha=new no,on=new X;class Fn extends ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Eg(e)?Pg:Ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,r){return ti.makeTranslation(e,t,r),this.applyMatrix4(ti),this}scale(e,t,r){return ti.makeScale(e,t,r),this.applyMatrix4(ti),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ot(r,3))}else{for(let r=0,o=t.count;r<o;r++){const l=e[r];t.setXYZ(r,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Vn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ec);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ha.setFromBufferAttribute(d),this.morphTargetsRelative?(on.addVectors(Vn.min,Ha.min),Vn.expandByPoint(on),on.addVectors(Vn.max,Ha.max),Vn.expandByPoint(on)):(Vn.expandByPoint(Ha.min),Vn.expandByPoint(Ha.max))}Vn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)on.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(on));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)on.fromBufferAttribute(d,p),f&&(js.fromBufferAttribute(e,p),on.add(js)),o=Math.max(o,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let B=0;B<r.count;B++)d[B]=new X,f[B]=new X;const p=new X,g=new X,y=new X,S=new ct,_=new ct,w=new ct,E=new X,M=new X;function v(B,P,R){p.fromBufferAttribute(r,B),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,R),S.fromBufferAttribute(l,B),_.fromBufferAttribute(l,P),w.fromBufferAttribute(l,R),g.sub(p),y.sub(p),_.sub(S),w.sub(S);const j=1/(_.x*w.y-w.x*_.y);isFinite(j)&&(E.copy(g).multiplyScalar(w.y).addScaledVector(y,-_.y).multiplyScalar(j),M.copy(y).multiplyScalar(_.x).addScaledVector(g,-w.x).multiplyScalar(j),d[B].add(E),d[P].add(E),d[R].add(E),f[B].add(M),f[P].add(M),f[R].add(M))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let B=0,P=L.length;B<P;++B){const R=L[B],j=R.start,ne=R.count;for(let ee=j,he=j+ne;ee<he;ee+=3)v(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const D=new X,C=new X,H=new X,F=new X;function O(B){H.fromBufferAttribute(o,B),F.copy(H);const P=d[B];D.copy(P),D.sub(H.multiplyScalar(H.dot(P))).normalize(),C.crossVectors(F,P);const j=C.dot(f[B])<0?-1:1;u.setXYZW(B,D.x,D.y,D.z,j)}for(let B=0,P=L.length;B<P;++B){const R=L[B],j=R.start,ne=R.count;for(let ee=j,he=j+ne;ee<he;ee+=3)O(e.getX(ee+0)),O(e.getX(ee+1)),O(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,_=r.count;S<_;S++)r.setXYZ(S,0,0,0);const o=new X,l=new X,u=new X,d=new X,f=new X,p=new X,g=new X,y=new X;if(e)for(let S=0,_=e.count;S<_;S+=3){const w=e.getX(S+0),E=e.getX(S+1),M=e.getX(S+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,M),g.subVectors(u,l),y.subVectors(o,l),g.cross(y),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,M),d.add(g),f.add(g),p.add(g),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let S=0,_=t.count;S<_;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),u.fromBufferAttribute(t,S+2),g.subVectors(u,l),y.subVectors(o,l),g.cross(y),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(d,f){const p=d.array,g=d.itemSize,y=d.normalized,S=new p.constructor(f.length*g);let _=0,w=0;for(let E=0,M=f.length;E<M;E++){d.isInterleavedBufferAttribute?_=f[E]*d.data.stride+d.offset:_=f[E]*g;for(let v=0;v<g;v++)S[w++]=p[_++]}return new bi(S,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Fn,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let g=0,y=p.length;g<y;g++){const S=p[g],_=e(S,r);f.push(_)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let y=0,S=p.length;y<S;y++){const _=p[y];g.push(_.toJSON(e.data))}g.length>0&&(o[f]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],y=l[p];for(let S=0,_=y.length;S<_;S++)g.push(y[S].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nm=new Ht,$r=new Ag,yl=new ec,Pm=new X,Sl=new X,Ml=new X,wl=new X,ld=new X,El=new X,Lm=new X,bl=new X;class Be extends en{constructor(e=new Fn,t=new Xl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){El.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const g=d[f],y=l[f];g!==0&&(ld.fromBufferAttribute(y,e),u?El.addScaledVector(ld,g):El.addScaledVector(ld.sub(t),g))}t.add(El)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),yl.copy(r.boundingSphere),yl.applyMatrix4(l),$r.copy(e.ray).recast(e.near),!(yl.containsPoint($r.origin)===!1&&($r.intersectSphere(yl,Pm)===null||$r.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Nm.copy(l).invert(),$r.copy(e.ray).applyMatrix4(Nm),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,y=l.attributes.normal,S=l.groups,_=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,E=S.length;w<E;w++){const M=S[w],v=u[M.materialIndex],L=Math.max(M.start,_.start),D=Math.min(d.count,Math.min(M.start+M.count,_.start+_.count));for(let C=L,H=D;C<H;C+=3){const F=d.getX(C),O=d.getX(C+1),B=d.getX(C+2);o=Tl(this,v,e,r,p,g,y,F,O,B),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const w=Math.max(0,_.start),E=Math.min(d.count,_.start+_.count);for(let M=w,v=E;M<v;M+=3){const L=d.getX(M),D=d.getX(M+1),C=d.getX(M+2);o=Tl(this,u,e,r,p,g,y,L,D,C),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let w=0,E=S.length;w<E;w++){const M=S[w],v=u[M.materialIndex],L=Math.max(M.start,_.start),D=Math.min(f.count,Math.min(M.start+M.count,_.start+_.count));for(let C=L,H=D;C<H;C+=3){const F=C,O=C+1,B=C+2;o=Tl(this,v,e,r,p,g,y,F,O,B),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const w=Math.max(0,_.start),E=Math.min(f.count,_.start+_.count);for(let M=w,v=E;M<v;M+=3){const L=M,D=M+1,C=M+2;o=Tl(this,u,e,r,p,g,y,L,D,C),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}}}function my(s,e,t,r,o,l,u,d){let f;if(e.side===bn?f=r.intersectTriangle(u,l,o,!0,d):f=r.intersectTriangle(o,l,u,e.side===Cr,d),f===null)return null;bl.copy(d),bl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(bl);return p<t.near||p>t.far?null:{distance:p,point:bl.clone(),object:s}}function Tl(s,e,t,r,o,l,u,d,f,p){s.getVertexPosition(d,Sl),s.getVertexPosition(f,Ml),s.getVertexPosition(p,wl);const g=my(s,e,t,r,Sl,Ml,wl,Lm);if(g){const y=new X;pi.getBarycoord(Lm,Sl,Ml,wl,y),o&&(g.uv=pi.getInterpolatedAttribute(o,d,f,p,y,new ct)),l&&(g.uv1=pi.getInterpolatedAttribute(l,d,f,p,y,new ct)),u&&(g.normal=pi.getInterpolatedAttribute(u,d,f,p,y,new X),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:f,c:p,normal:new X,materialIndex:0};pi.getNormal(Sl,Ml,wl,S.normal),g.face=S,g.barycoord=y}return g}class Xn extends Fn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],g=[],y=[];let S=0,_=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(g,3)),this.setAttribute("uv",new Ot(y,2));function w(E,M,v,L,D,C,H,F,O,B,P){const R=C/O,j=H/B,ne=C/2,ee=H/2,he=F/2,pe=O+1,te=B+1;let fe=0,V=0;const le=new X;for(let I=0;I<te;I++){const b=I*j-ee;for(let $=0;$<pe;$++){const _e=$*R-ne;le[E]=_e*L,le[M]=b*D,le[v]=he,p.push(le.x,le.y,le.z),le[E]=0,le[M]=0,le[v]=F>0?1:-1,g.push(le.x,le.y,le.z),y.push($/O),y.push(1-I/B),fe+=1}}for(let I=0;I<B;I++)for(let b=0;b<O;b++){const $=S+b+pe*I,_e=S+b+pe*(I+1),q=S+(b+1)+pe*(I+1),re=S+(b+1)+pe*I;f.push($,_e,re),f.push(_e,q,re),V+=6}d.addGroup(_,V,P),_+=V,S+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function En(s){const e={};for(let t=0;t<s.length;t++){const r=ta(s[t]);for(const o in r)e[o]=r[o]}return e}function gy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Lg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const xy={clone:ta,merge:En};var vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends ra{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vy,this.fragmentShader=_y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Dg extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new X,Dm=new ct,Im=new ct;class kn extends Dg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(Hu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,t){return this.getViewBounds(e,Dm,Im),t.subVectors(Im,Dm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Vs=1;class yy extends en{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new kn(Hs,Vs,e,t);o.layers=this.layers,this.add(o);const l=new kn(Hs,Vs,e,t);l.layers=this.layers,this.add(l);const u=new kn(Hs,Vs,e,t);u.layers=this.layers,this.add(u);const d=new kn(Hs,Vs,e,t);d.layers=this.layers,this.add(d);const f=new kn(Hs,Vs,e,t);f.layers=this.layers,this.add(f);const p=new kn(Hs,Vs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Vl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,g]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(y,S,_),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Ig extends Tn{constructor(e,t,r,o,l,u,d,f,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Zs,super(e,t,r,o,l,u,d,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sy extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ig(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Xn(5,5,5),l=new Rr({name:"CubemapFromEquirect",uniforms:ta(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:bn,blending:br});l.uniforms.tEquirect.value=t;const u=new Be(o,l),d=t.minFilter;return t.minFilter===ns&&(t.minFilter=Ei),new yy(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}const cd=new X,My=new X,wy=new vt;class Zr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=cd.subVectors(r,t).cross(My.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(cd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||wy.getNormalMatrix(e),o=this.coplanarPoint(cd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new ec,Al=new X;class Sf{constructor(e=new Zr,t=new Zr,r=new Zr,o=new Zr,l=new Zr,u=new Zr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],g=o[5],y=o[6],S=o[7],_=o[8],w=o[9],E=o[10],M=o[11],v=o[12],L=o[13],D=o[14],C=o[15];if(r[0].setComponents(f-l,S-p,M-_,C-v).normalize(),r[1].setComponents(f+l,S+p,M+_,C+v).normalize(),r[2].setComponents(f+u,S+g,M+w,C+L).normalize(),r[3].setComponents(f-u,S-g,M-w,C-L).normalize(),r[4].setComponents(f-d,S-y,M-E,C-D).normalize(),t===Wi)r[5].setComponents(f+d,S+y,M+E,C+D).normalize();else if(t===Vl)r[5].setComponents(d,y,E,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Al.x=o.normal.x>0?e.max.x:e.min.x,Al.y=o.normal.y>0?e.max.y:e.min.y,Al.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ug(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ey(s){const e=new WeakMap;function t(d,f){const p=d.array,g=d.usage,y=p.byteLength,S=s.createBuffer();s.bindBuffer(f,S),s.bufferData(f,p,g),d.onUploadCallback();let _;if(p instanceof Float32Array)_=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=s.SHORT;else if(p instanceof Uint32Array)_=s.UNSIGNED_INT;else if(p instanceof Int32Array)_=s.INT;else if(p instanceof Int8Array)_=s.BYTE;else if(p instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:y}}function r(d,f,p){const g=f.array,y=f.updateRanges;if(s.bindBuffer(p,d),y.length===0)s.bufferSubData(p,0,g);else{y.sort((_,w)=>_.start-w.start);let S=0;for(let _=1;_<y.length;_++){const w=y[S],E=y[_];E.start<=w.start+w.count+1?w.count=Math.max(w.count,E.start+E.count-w.start):(++S,y[S]=E)}y.length=S+1;for(let _=0,w=y.length;_<w;_++){const E=y[_];s.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}class _n extends Fn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(o),p=d+1,g=f+1,y=e/d,S=t/f,_=[],w=[],E=[],M=[];for(let v=0;v<g;v++){const L=v*S-u;for(let D=0;D<p;D++){const C=D*y-l;w.push(C,-L,0),E.push(0,0,1),M.push(D/d),M.push(1-v/f)}}for(let v=0;v<f;v++)for(let L=0;L<d;L++){const D=L+p*v,C=L+p*(v+1),H=L+1+p*(v+1),F=L+1+p*v;_.push(D,C,F),_.push(C,H,F)}this.setIndex(_),this.setAttribute("position",new Ot(w,3)),this.setAttribute("normal",new Ot(E,3)),this.setAttribute("uv",new Ot(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _n(e.width,e.height,e.widthSegments,e.heightSegments)}}var by=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ty=`#ifdef USE_ALPHAHASH
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
#endif`,Ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ny=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Py=`#ifdef USE_AOMAP
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
#endif`,Ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dy=`#ifdef USE_BATCHING
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
#endif`,Iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
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
#endif`,zy=`#ifdef USE_BUMPMAP
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
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$y=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qy=`#define PI 3.141592653589793
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
} // validated`,Yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ky=`vec3 transformedNormal = objectNormal;
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
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tS="gl_FragColor = linearToOutputTexel( gl_FragColor );",nS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,aS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,lS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fS=`#ifdef USE_GRADIENTMAP
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
}`,hS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gS=`uniform bool receiveShadow;
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
#endif`,xS=`#ifdef USE_ENVMAP
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
#endif`,vS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MS=`PhysicalMaterial material;
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
#endif`,wS=`struct PhysicalMaterial {
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
}`,ES=`
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
#endif`,bS=`#if defined( RE_IndirectDiffuse )
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
#endif`,TS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IS=`#if defined( USE_POINTS_UV )
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
#endif`,US=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,OS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BS=`#ifdef USE_MORPHTARGETS
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
#endif`,jS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
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
#endif`,qS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cM=`float getShadowMask() {
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
}`,uM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
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
#endif`,fM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hM=`#ifdef USE_SKINNING
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
#endif`,pM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vM=`#ifdef USE_TRANSMISSION
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
#endif`,_M=`#ifdef USE_TRANSMISSION
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
#endif`,yM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bM=`uniform sampler2D t2D;
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
}`,TM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`#include <common>
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
}`,PM=`#if DEPTH_PACKING == 3200
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
}`,LM=`#define DISTANCE
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
}`,DM=`#define DISTANCE
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
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,UM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kM=`uniform float scale;
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
}`,FM=`uniform vec3 diffuse;
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
}`,OM=`#include <common>
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
}`,zM=`uniform vec3 diffuse;
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
}`,BM=`#define LAMBERT
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
}`,jM=`#define LAMBERT
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
}`,HM=`#define MATCAP
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
}`,VM=`#define MATCAP
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
}`,GM=`#define NORMAL
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
}`,WM=`#define NORMAL
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
}`,XM=`#define PHONG
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
}`,$M=`#define PHONG
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
}`,qM=`#define STANDARD
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
}`,YM=`#define STANDARD
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
}`,KM=`#define TOON
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
}`,ZM=`#define TOON
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
}`,JM=`uniform float size;
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
}`,QM=`uniform vec3 diffuse;
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
}`,e1=`#include <common>
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
}`,t1=`uniform vec3 color;
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
}`,n1=`uniform float rotation;
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
}`,i1=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:by,alphahash_pars_fragment:Ty,alphamap_fragment:Ay,alphamap_pars_fragment:Cy,alphatest_fragment:Ry,alphatest_pars_fragment:Ny,aomap_fragment:Py,aomap_pars_fragment:Ly,batching_pars_vertex:Dy,batching_vertex:Iy,begin_vertex:Uy,beginnormal_vertex:ky,bsdfs:Fy,iridescence_fragment:Oy,bumpmap_pars_fragment:zy,clipping_planes_fragment:By,clipping_planes_pars_fragment:jy,clipping_planes_pars_vertex:Hy,clipping_planes_vertex:Vy,color_fragment:Gy,color_pars_fragment:Wy,color_pars_vertex:Xy,color_vertex:$y,common:qy,cube_uv_reflection_fragment:Yy,defaultnormal_vertex:Ky,displacementmap_pars_vertex:Zy,displacementmap_vertex:Jy,emissivemap_fragment:Qy,emissivemap_pars_fragment:eS,colorspace_fragment:tS,colorspace_pars_fragment:nS,envmap_fragment:iS,envmap_common_pars_fragment:rS,envmap_pars_fragment:sS,envmap_pars_vertex:aS,envmap_physical_pars_fragment:xS,envmap_vertex:oS,fog_vertex:lS,fog_pars_vertex:cS,fog_fragment:uS,fog_pars_fragment:dS,gradientmap_pars_fragment:fS,lightmap_pars_fragment:hS,lights_lambert_fragment:pS,lights_lambert_pars_fragment:mS,lights_pars_begin:gS,lights_toon_fragment:vS,lights_toon_pars_fragment:_S,lights_phong_fragment:yS,lights_phong_pars_fragment:SS,lights_physical_fragment:MS,lights_physical_pars_fragment:wS,lights_fragment_begin:ES,lights_fragment_maps:bS,lights_fragment_end:TS,logdepthbuf_fragment:AS,logdepthbuf_pars_fragment:CS,logdepthbuf_pars_vertex:RS,logdepthbuf_vertex:NS,map_fragment:PS,map_pars_fragment:LS,map_particle_fragment:DS,map_particle_pars_fragment:IS,metalnessmap_fragment:US,metalnessmap_pars_fragment:kS,morphinstance_vertex:FS,morphcolor_vertex:OS,morphnormal_vertex:zS,morphtarget_pars_vertex:BS,morphtarget_vertex:jS,normal_fragment_begin:HS,normal_fragment_maps:VS,normal_pars_fragment:GS,normal_pars_vertex:WS,normal_vertex:XS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:qS,clearcoat_normal_fragment_maps:YS,clearcoat_pars_fragment:KS,iridescence_pars_fragment:ZS,opaque_fragment:JS,packing:QS,premultiplied_alpha_fragment:eM,project_vertex:tM,dithering_fragment:nM,dithering_pars_fragment:iM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:sM,shadowmap_pars_fragment:aM,shadowmap_pars_vertex:oM,shadowmap_vertex:lM,shadowmask_pars_fragment:cM,skinbase_vertex:uM,skinning_pars_vertex:dM,skinning_vertex:fM,skinnormal_vertex:hM,specularmap_fragment:pM,specularmap_pars_fragment:mM,tonemapping_fragment:gM,tonemapping_pars_fragment:xM,transmission_fragment:vM,transmission_pars_fragment:_M,uv_pars_fragment:yM,uv_pars_vertex:SM,uv_vertex:MM,worldpos_vertex:wM,background_vert:EM,background_frag:bM,backgroundCube_vert:TM,backgroundCube_frag:AM,cube_vert:CM,cube_frag:RM,depth_vert:NM,depth_frag:PM,distanceRGBA_vert:LM,distanceRGBA_frag:DM,equirect_vert:IM,equirect_frag:UM,linedashed_vert:kM,linedashed_frag:FM,meshbasic_vert:OM,meshbasic_frag:zM,meshlambert_vert:BM,meshlambert_frag:jM,meshmatcap_vert:HM,meshmatcap_frag:VM,meshnormal_vert:GM,meshnormal_frag:WM,meshphong_vert:XM,meshphong_frag:$M,meshphysical_vert:qM,meshphysical_frag:YM,meshtoon_vert:KM,meshtoon_frag:ZM,points_vert:JM,points_frag:QM,shadow_vert:e1,shadow_frag:t1,sprite_vert:n1,sprite_frag:i1},Ve={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},wi={basic:{uniforms:En([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:En([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:En([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:En([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:En([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:En([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:En([Ve.points,Ve.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:En([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:En([Ve.common,Ve.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:En([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:En([Ve.sprite,Ve.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:En([Ve.common,Ve.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:En([Ve.lights,Ve.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};wi.physical={uniforms:En([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Cl={r:0,b:0,g:0},Yr=new Ti,r1=new Ht;function s1(s,e,t,r,o,l,u){const d=new yt(0);let f=l===!0?0:1,p,g,y=null,S=0,_=null;function w(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?t:e).get(D)),D}function E(L){let D=!1;const C=w(L);C===null?v(d,f):C&&C.isColor&&(v(C,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,u):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,D){const C=w(D);C&&(C.isCubeTexture||C.mapping===Jl)?(g===void 0&&(g=new Be(new Xn(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:ta(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Yr.copy(D.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),g.material.uniforms.envMap.value=C,g.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(r1.makeRotationFromEuler(Yr)),g.material.toneMapped=At.getTransfer(C.colorSpace)!==Dt,(y!==C||S!==C.version||_!==s.toneMapping)&&(g.material.needsUpdate=!0,y=C,S=C.version,_=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new Be(new _n(2,2),new Rr({name:"BackgroundMaterial",uniforms:ta(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=C,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=At.getTransfer(C.colorSpace)!==Dt,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(y!==C||S!==C.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,y=C,S=C.version,_=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,D){L.getRGB(Cl,Lg(s)),r.buffers.color.setClear(Cl.r,Cl.g,Cl.b,D,u)}return{getClearColor:function(){return d},setClearColor:function(L,D=1){d.set(L),f=D,v(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,v(d,f)},render:E,addToRenderList:M}}function a1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,u=!1;function d(R,j,ne,ee,he){let pe=!1;const te=y(ee,ne,j);l!==te&&(l=te,p(l.object)),pe=_(R,ee,ne,he),pe&&w(R,ee,ne,he),he!==null&&e.update(he,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,C(R,j,ne,ee),he!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function f(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function y(R,j,ne){const ee=ne.wireframe===!0;let he=r[R.id];he===void 0&&(he={},r[R.id]=he);let pe=he[j.id];pe===void 0&&(pe={},he[j.id]=pe);let te=pe[ee];return te===void 0&&(te=S(f()),pe[ee]=te),te}function S(R){const j=[],ne=[],ee=[];for(let he=0;he<t;he++)j[he]=0,ne[he]=0,ee[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ne,attributeDivisors:ee,object:R,attributes:{},index:null}}function _(R,j,ne,ee){const he=l.attributes,pe=j.attributes;let te=0;const fe=ne.getAttributes();for(const V in fe)if(fe[V].location>=0){const I=he[V];let b=pe[V];if(b===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(b=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(b=R.instanceColor)),I===void 0||I.attribute!==b||b&&I.data!==b.data)return!0;te++}return l.attributesNum!==te||l.index!==ee}function w(R,j,ne,ee){const he={},pe=j.attributes;let te=0;const fe=ne.getAttributes();for(const V in fe)if(fe[V].location>=0){let I=pe[V];I===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(I=R.instanceColor));const b={};b.attribute=I,I&&I.data&&(b.data=I.data),he[V]=b,te++}l.attributes=he,l.attributesNum=te,l.index=ee}function E(){const R=l.newAttributes;for(let j=0,ne=R.length;j<ne;j++)R[j]=0}function M(R){v(R,0)}function v(R,j){const ne=l.newAttributes,ee=l.enabledAttributes,he=l.attributeDivisors;ne[R]=1,ee[R]===0&&(s.enableVertexAttribArray(R),ee[R]=1),he[R]!==j&&(s.vertexAttribDivisor(R,j),he[R]=j)}function L(){const R=l.newAttributes,j=l.enabledAttributes;for(let ne=0,ee=j.length;ne<ee;ne++)j[ne]!==R[ne]&&(s.disableVertexAttribArray(ne),j[ne]=0)}function D(R,j,ne,ee,he,pe,te){te===!0?s.vertexAttribIPointer(R,j,ne,he,pe):s.vertexAttribPointer(R,j,ne,ee,he,pe)}function C(R,j,ne,ee){E();const he=ee.attributes,pe=ne.getAttributes(),te=j.defaultAttributeValues;for(const fe in pe){const V=pe[fe];if(V.location>=0){let le=he[fe];if(le===void 0&&(fe==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),fe==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const I=le.normalized,b=le.itemSize,$=e.get(le);if($===void 0)continue;const _e=$.buffer,q=$.type,re=$.bytesPerElement,ge=q===s.INT||q===s.UNSIGNED_INT||le.gpuType===mf;if(le.isInterleavedBufferAttribute){const oe=le.data,W=oe.stride,ye=le.offset;if(oe.isInstancedInterleavedBuffer){for(let Le=0;Le<V.locationSize;Le++)v(V.location+Le,oe.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Le=0;Le<V.locationSize;Le++)M(V.location+Le);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Le=0;Le<V.locationSize;Le++)D(V.location+Le,b/V.locationSize,q,I,W*re,(ye+b/V.locationSize*Le)*re,ge)}else{if(le.isInstancedBufferAttribute){for(let oe=0;oe<V.locationSize;oe++)v(V.location+oe,le.meshPerAttribute);R.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let oe=0;oe<V.locationSize;oe++)M(V.location+oe);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let oe=0;oe<V.locationSize;oe++)D(V.location+oe,b/V.locationSize,q,I,b*re,b/V.locationSize*oe*re,ge)}}else if(te!==void 0){const I=te[fe];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(V.location,I);break;case 3:s.vertexAttrib3fv(V.location,I);break;case 4:s.vertexAttrib4fv(V.location,I);break;default:s.vertexAttrib1fv(V.location,I)}}}}L()}function H(){B();for(const R in r){const j=r[R];for(const ne in j){const ee=j[ne];for(const he in ee)g(ee[he].object),delete ee[he];delete j[ne]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const j=r[R.id];for(const ne in j){const ee=j[ne];for(const he in ee)g(ee[he].object),delete ee[he];delete j[ne]}delete r[R.id]}function O(R){for(const j in r){const ne=r[j];if(ne[R.id]===void 0)continue;const ee=ne[R.id];for(const he in ee)g(ee[he].object),delete ee[he];delete ne[R.id]}}function B(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:B,resetDefaultState:P,dispose:H,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:M,disableUnusedAttributes:L}}function o1(s,e,t){let r;function o(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function u(p,g,y){y!==0&&(s.drawArraysInstanced(r,p,g,y),t.update(g,r,y))}function d(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,y);let _=0;for(let w=0;w<y;w++)_+=g[w];t.update(_,r,1)}function f(p,g,y,S){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let w=0;w<p.length;w++)u(p[w],g[w],S[w]);else{_.multiDrawArraysInstancedWEBGL(r,p,0,g,0,S,0,y);let w=0;for(let E=0;E<y;E++)w+=g[E]*S[E];t.update(w,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function l1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==mi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const B=O===Qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==$i&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Gi&&!B)}function f(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=f(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const y=t.logarithmicDepthBuffer===!0,S=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=w>0,F=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:y,reverseDepthBuffer:S,maxTextures:_,maxVertexTextures:w,maxTextureSize:E,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:C,vertexTextures:H,maxSamples:F}}function c1(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Zr,d=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const _=y.length!==0||S||r!==0||o;return o=S,r=y.length,_},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,S){t=g(y,S,0)},this.setState=function(y,S,_){const w=y.clippingPlanes,E=y.clipIntersection,M=y.clipShadows,v=s.get(y);if(!o||w===null||w.length===0||l&&!M)l?g(null):p();else{const L=l?0:r,D=L*4;let C=v.clippingState||null;f.value=C,C=g(w,S,D,_);for(let H=0;H!==D;++H)C[H]=t[H];v.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(y,S,_,w){const E=y!==null?y.length:0;let M=null;if(E!==0){if(M=f.value,w!==!0||M===null){const v=_+E*4,L=S.matrixWorldInverse;d.getNormalMatrix(L),(M===null||M.length<v)&&(M=new Float32Array(v));for(let D=0,C=_;D!==E;++D,C+=4)u.copy(y[D]).applyMatrix4(L,d),u.normal.toArray(M,C),M[C+3]=u.constant}f.value=M,f.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,M}}function u1(s){let e=new WeakMap;function t(u,d){return d===Ud?u.mapping=Zs:d===kd&&(u.mapping=Js),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Ud||d===kd)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new Sy(f.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}class kg extends Dg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=g*this.view.offsetY,f=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,Um=[.125,.215,.35,.446,.526,.582],es=20,ud=new kg,km=new yt;let dd=null,fd=0,hd=0,pd=!1;const Jr=(1+Math.sqrt(5))/2,Gs=1/Jr,Fm=[new X(-Jr,Gs,0),new X(Jr,Gs,0),new X(-Gs,0,Jr),new X(Gs,0,Jr),new X(0,Jr,-Gs),new X(0,Jr,Gs),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Om{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,fd,hd),this._renderer.xr.enabled=pd,e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Qa,format:mi,colorSpace:na,depthBuffer:!1},o=zm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d1(l)),this._blurMaterial=f1(l,e,t)}return o}_compileMaterial(e){const t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,ud)}_sceneToCubeUV(e,t,r,o){const d=new kn(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(km),g.toneMapping=Tr,g.autoClear=!1;const _=new Xl({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1}),w=new Be(new Xn,_);let E=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,E=!0):(_.color.copy(km),E=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(d.up.set(0,f[v],0),d.lookAt(p[v],0,0)):L===1?(d.up.set(0,0,f[v]),d.lookAt(0,p[v],0)):(d.up.set(0,f[v],0),d.lookAt(0,0,p[v]));const D=this._cubeSize;Rl(o,L*D,v>2?D:0,D,D),g.setRenderTarget(o),E&&g.render(w,d),g.render(e,d)}w.geometry.dispose(),w.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=M}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Zs||e.mapping===Js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=jm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Be(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Rl(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,ud)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Fm[(o-l-1)%Fm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new Be(this._lodPlanes[o],p),S=p.uniforms,_=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*es-1),E=l/w,M=isFinite(l)?1+Math.floor(g*E):es;M>es&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${es}`);const v=[];let L=0;for(let O=0;O<es;++O){const B=O/E,P=Math.exp(-B*B/2);v.push(P),O===0?L+=P:O<M&&(L+=2*P)}for(let O=0;O<v.length;O++)v[O]=v[O]/L;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=v,S.latitudinal.value=u==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:D}=this;S.dTheta.value=w,S.mipInt.value=D-r;const C=this._sizeLods[o],H=3*C*(o>D-Ws?o-D+Ws:0),F=4*(this._cubeSize-C);Rl(t,H,F,3*C,2*C),f.setRenderTarget(t),f.render(y,ud)}}function d1(s){const e=[],t=[],r=[];let o=s;const l=s-Ws+1+Um.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let f=1/d;u>s-Ws?f=Um[u-s+Ws-1]:u===0&&(f=0),r.push(f);const p=1/(d-2),g=-p,y=1+p,S=[g,g,y,g,y,y,g,g,y,y,g,y],_=6,w=6,E=3,M=2,v=1,L=new Float32Array(E*w*_),D=new Float32Array(M*w*_),C=new Float32Array(v*w*_);for(let F=0;F<_;F++){const O=F%3*2/3-1,B=F>2?0:-1,P=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];L.set(P,E*w*F),D.set(S,M*w*F);const R=[F,F,F,F,F,F];C.set(R,v*w*F)}const H=new Fn;H.setAttribute("position",new bi(L,E)),H.setAttribute("uv",new bi(D,M)),H.setAttribute("faceIndex",new bi(C,v)),e.push(H),o>Ws&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function zm(s,e,t){const r=new ss(s,e,t);return r.texture.mapping=Jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function f1(s,e,t){const r=new Float32Array(es),o=new X(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Mf(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function Bm(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mf(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function jm(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Mf(){return`

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
	`}function h1(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const f=d.mapping,p=f===Ud||f===kd,g=f===Zs||f===Js;if(p||g){let y=e.get(d);const S=y!==void 0?y.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return t===null&&(t=new Om(s)),y=p?t.fromEquirectangular(d,y):t.fromCubemap(d,y),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),y.texture;if(y!==void 0)return y.texture;{const _=d.image;return p&&_&&_.height>0||g&&_&&o(_)?(t===null&&(t=new Om(s)),y=p?t.fromEquirectangular(d):t.fromCubemap(d),y.texture.pmremVersion=d.pmremVersion,e.set(d,y),d.addEventListener("dispose",l),y.texture):null}}}return d}function o(d){let f=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function p1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Wa("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function m1(s,e,t,r){const o={},l=new WeakMap;function u(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const w in S.attributes)e.remove(S.attributes[w]);for(const w in S.morphAttributes){const E=S.morphAttributes[w];for(let M=0,v=E.length;M<v;M++)e.remove(E[M])}S.removeEventListener("dispose",u),delete o[S.id];const _=l.get(S);_&&(e.remove(_),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function d(y,S){return o[S.id]===!0||(S.addEventListener("dispose",u),o[S.id]=!0,t.memory.geometries++),S}function f(y){const S=y.attributes;for(const w in S)e.update(S[w],s.ARRAY_BUFFER);const _=y.morphAttributes;for(const w in _){const E=_[w];for(let M=0,v=E.length;M<v;M++)e.update(E[M],s.ARRAY_BUFFER)}}function p(y){const S=[],_=y.index,w=y.attributes.position;let E=0;if(_!==null){const L=_.array;E=_.version;for(let D=0,C=L.length;D<C;D+=3){const H=L[D+0],F=L[D+1],O=L[D+2];S.push(H,F,F,O,O,H)}}else if(w!==void 0){const L=w.array;E=w.version;for(let D=0,C=L.length/3-1;D<C;D+=3){const H=D+0,F=D+1,O=D+2;S.push(H,F,F,O,O,H)}}else return;const M=new(Eg(S)?Pg:Ng)(S,1);M.version=E;const v=l.get(y);v&&e.remove(v),l.set(y,M)}function g(y){const S=l.get(y);if(S){const _=y.index;_!==null&&S.version<_.version&&p(y)}else p(y);return l.get(y)}return{get:d,update:f,getWireframeAttribute:g}}function g1(s,e,t){let r;function o(S){r=S}let l,u;function d(S){l=S.type,u=S.bytesPerElement}function f(S,_){s.drawElements(r,_,l,S*u),t.update(_,r,1)}function p(S,_,w){w!==0&&(s.drawElementsInstanced(r,_,l,S*u,w),t.update(_,r,w))}function g(S,_,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,S,0,w);let M=0;for(let v=0;v<w;v++)M+=_[v];t.update(M,r,1)}function y(S,_,w,E){if(w===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<S.length;v++)p(S[v]/u,_[v],E[v]);else{M.multiDrawElementsInstancedWEBGL(r,_,0,l,S,0,E,0,w);let v=0;for(let L=0;L<w;L++)v+=_[L]*E[L];t.update(v,r,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function x1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function v1(s,e,t){const r=new WeakMap,o=new It;function l(u,d,f){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,y=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==y){let R=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var _=R;S!==void 0&&S.texture.dispose();const w=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;w===!0&&(C=1),E===!0&&(C=2),M===!0&&(C=3);let H=d.attributes.position.count*C,F=1;H>e.maxTextureSize&&(F=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const O=new Float32Array(H*F*4*y),B=new Tg(O,H,F,y);B.type=Gi,B.needsUpdate=!0;const P=C*4;for(let j=0;j<y;j++){const ne=v[j],ee=L[j],he=D[j],pe=H*F*4*j;for(let te=0;te<ne.count;te++){const fe=te*P;w===!0&&(o.fromBufferAttribute(ne,te),O[pe+fe+0]=o.x,O[pe+fe+1]=o.y,O[pe+fe+2]=o.z,O[pe+fe+3]=0),E===!0&&(o.fromBufferAttribute(ee,te),O[pe+fe+4]=o.x,O[pe+fe+5]=o.y,O[pe+fe+6]=o.z,O[pe+fe+7]=0),M===!0&&(o.fromBufferAttribute(he,te),O[pe+fe+8]=o.x,O[pe+fe+9]=o.y,O[pe+fe+10]=o.z,O[pe+fe+11]=he.itemSize===4?o.w:1)}}S={count:y,texture:B,size:new ct(H,F)},r.set(d,S),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let M=0;M<p.length;M++)w+=p[M];const E=d.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function _1(s,e,t,r){let o=new WeakMap;function l(f){const p=r.render.frame,g=f.geometry,y=e.get(f,g);if(o.get(y)!==p&&(e.update(y),o.set(y,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const S=f.skeleton;o.get(S)!==p&&(S.update(),o.set(S,p))}return y}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class Fg extends Tn{constructor(e,t,r,o,l,u,d,f,p,g=$s){if(g!==$s&&g!==ea)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===$s&&(r=rs),r===void 0&&g===ea&&(r=Qs),super(null,o,l,u,d,f,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:gi,this.minFilter=f!==void 0?f:gi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Og=new Tn,Hm=new Fg(1,1),zg=new Tg,Bg=new sy,jg=new Ig,Vm=[],Gm=[],Wm=new Float32Array(16),Xm=new Float32Array(9),$m=new Float32Array(4);function sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Vm[o];if(l===void 0&&(l=new Float32Array(o),Vm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function tc(s,e){let t=Gm[e];t===void 0&&(t=new Int32Array(e),Gm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function y1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function S1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function M1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function w1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function E1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;$m.set(r),s.uniformMatrix2fv(this.addr,!1,$m),nn(t,r)}}function b1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;Xm.set(r),s.uniformMatrix3fv(this.addr,!1,Xm),nn(t,r)}}function T1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;Wm.set(r),s.uniformMatrix4fv(this.addr,!1,Wm),nn(t,r)}}function A1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function C1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function R1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function N1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function P1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function L1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function D1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function I1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function U1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Hm.compareFunction=wg,l=Hm):l=Og,t.setTexture2D(e||l,o)}function k1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Bg,o)}function F1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||jg,o)}function O1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||zg,o)}function z1(s){switch(s){case 5126:return y1;case 35664:return S1;case 35665:return M1;case 35666:return w1;case 35674:return E1;case 35675:return b1;case 35676:return T1;case 5124:case 35670:return A1;case 35667:case 35671:return C1;case 35668:case 35672:return R1;case 35669:case 35673:return N1;case 5125:return P1;case 36294:return L1;case 36295:return D1;case 36296:return I1;case 35678:case 36198:case 36298:case 36306:case 35682:return U1;case 35679:case 36299:case 36307:return k1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}function B1(s,e){s.uniform1fv(this.addr,e)}function j1(s,e){const t=sa(e,this.size,2);s.uniform2fv(this.addr,t)}function H1(s,e){const t=sa(e,this.size,3);s.uniform3fv(this.addr,t)}function V1(s,e){const t=sa(e,this.size,4);s.uniform4fv(this.addr,t)}function G1(s,e){const t=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function W1(s,e){const t=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function X1(s,e){const t=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $1(s,e){s.uniform1iv(this.addr,e)}function q1(s,e){s.uniform2iv(this.addr,e)}function Y1(s,e){s.uniform3iv(this.addr,e)}function K1(s,e){s.uniform4iv(this.addr,e)}function Z1(s,e){s.uniform1uiv(this.addr,e)}function J1(s,e){s.uniform2uiv(this.addr,e)}function Q1(s,e){s.uniform3uiv(this.addr,e)}function ew(s,e){s.uniform4uiv(this.addr,e)}function tw(s,e,t){const r=this.cache,o=e.length,l=tc(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Og,l[u])}function nw(s,e,t){const r=this.cache,o=e.length,l=tc(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Bg,l[u])}function iw(s,e,t){const r=this.cache,o=e.length,l=tc(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||jg,l[u])}function rw(s,e,t){const r=this.cache,o=e.length,l=tc(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||zg,l[u])}function sw(s){switch(s){case 5126:return B1;case 35664:return j1;case 35665:return H1;case 35666:return V1;case 35674:return G1;case 35675:return W1;case 35676:return X1;case 5124:case 35670:return $1;case 35667:case 35671:return q1;case 35668:case 35672:return Y1;case 35669:case 35673:return K1;case 5125:return Z1;case 36294:return J1;case 36295:return Q1;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}class aw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=z1(t.type)}}class ow{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sw(t.type)}}class lw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const md=/(\w+)(\])?(\[|\.)?/g;function qm(s,e){s.seq.push(e),s.map[e.id]=e}function cw(s,e,t){const r=s.name,o=r.length;for(md.lastIndex=0;;){const l=md.exec(r),u=md.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){qm(t,p===void 0?new aw(d,s,e):new ow(d,s,e));break}else{let y=t.map[d];y===void 0&&(y=new lw(d),qm(t,y)),t=y}}}class Bl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);cw(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Ym(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const uw=37297;let dw=0;function fw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Km=new vt;function hw(s){At._getMatrix(Km,At.workingColorSpace,s);const e=`mat3( ${Km.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Zm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+fw(s.getShaderSource(e),u)}else return o}function pw(s,e){const t=hw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mw(s,e){let t;switch(e){case D_:t="Linear";break;case I_:t="Reinhard";break;case U_:t="Cineon";break;case ug:t="ACESFilmic";break;case F_:t="AgX";break;case O_:t="Neutral";break;case k_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nl=new X;function gw(){At.getLuminanceCoefficients(Nl);const s=Nl.x.toFixed(4),e=Nl.y.toFixed(4),t=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function vw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function _w(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Xa(s){return s!==""}function Jm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yw=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(s){return s.replace(yw,Mw)}const Sw=new Map;function Mw(s,e){let t=_t[e];if(t===void 0){const r=Sw.get(e);if(r!==void 0)t=_t[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return df(t)}const ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e0(s){return s.replace(ww,Ew)}function Ew(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function t0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function bw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===og?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===lg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Tw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Aw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function Cw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cg:e="ENVMAP_BLENDING_MULTIPLY";break;case P_:e="ENVMAP_BLENDING_MIX";break;case L_:e="ENVMAP_BLENDING_ADD";break}return e}function Rw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Nw(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=bw(t),p=Tw(t),g=Aw(t),y=Cw(t),S=Rw(t),_=xw(t),w=vw(l),E=o.createProgram();let M,v,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Xa).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Xa).join(`
`),v.length>0&&(v+=`
`)):(M=[t0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),v=[t0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Tr?"#define TONE_MAPPING":"",t.toneMapping!==Tr?_t.tonemapping_pars_fragment:"",t.toneMapping!==Tr?mw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,pw("linearToOutputTexel",t.outputColorSpace),gw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),u=df(u),u=Jm(u,t),u=Qm(u,t),d=df(d),d=Jm(d,t),d=Qm(d,t),u=e0(u),d=e0(d),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,M=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",t.glslVersion===pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+M+u,C=L+v+d,H=Ym(o,o.VERTEX_SHADER,D),F=Ym(o,o.FRAGMENT_SHADER,C);o.attachShader(E,H),o.attachShader(E,F),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function O(j){if(s.debug.checkShaderErrors){const ne=o.getProgramInfoLog(E).trim(),ee=o.getShaderInfoLog(H).trim(),he=o.getShaderInfoLog(F).trim();let pe=!0,te=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,E,H,F);else{const fe=Zm(o,H,"vertex"),V=Zm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ne+`
`+fe+`
`+V)}else ne!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ne):(ee===""||he==="")&&(te=!1);te&&(j.diagnostics={runnable:pe,programLog:ne,vertexShader:{log:ee,prefix:M},fragmentShader:{log:he,prefix:v}})}o.deleteShader(H),o.deleteShader(F),B=new Bl(o,E),P=_w(o,E)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(E,uw)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=H,this.fragmentShader=F,this}let Pw=0;class Lw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Dw(e),t.set(e,r)),r}}class Dw{constructor(e){this.id=Pw++,this.code=e,this.usedTimes=0}}function Iw(s,e,t,r,o,l,u){const d=new Cg,f=new Lw,p=new Set,g=[],y=o.logarithmicDepthBuffer,S=o.vertexTextures;let _=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return p.add(P),P===0?"uv":`uv${P}`}function M(P,R,j,ne,ee){const he=ne.fog,pe=ee.geometry,te=P.isMeshStandardMaterial?ne.environment:null,fe=(P.isMeshStandardMaterial?t:e).get(P.envMap||te),V=fe&&fe.mapping===Jl?fe.image.height:null,le=w[P.type];P.precision!==null&&(_=o.getMaxPrecision(P.precision),_!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",_,"instead."));const I=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,b=I!==void 0?I.length:0;let $=0;pe.morphAttributes.position!==void 0&&($=1),pe.morphAttributes.normal!==void 0&&($=2),pe.morphAttributes.color!==void 0&&($=3);let _e,q,re,ge;if(le){const bt=wi[le];_e=bt.vertexShader,q=bt.fragmentShader}else _e=P.vertexShader,q=P.fragmentShader,f.update(P),re=f.getVertexShaderID(P),ge=f.getFragmentShaderID(P);const oe=s.getRenderTarget(),W=s.state.buffers.depth.getReversed(),ye=ee.isInstancedMesh===!0,Le=ee.isBatchedMesh===!0,Ze=!!P.map,me=!!P.matcap,Q=!!fe,k=!!P.aoMap,Fe=!!P.lightMap,Ee=!!P.bumpMap,De=!!P.normalMap,Te=!!P.displacementMap,st=!!P.emissiveMap,ke=!!P.metalnessMap,U=!!P.roughnessMap,A=P.anisotropy>0,se=P.clearcoat>0,Se=P.dispersion>0,Me=P.iridescence>0,ve=P.sheen>0,qe=P.transmission>0,Ne=A&&!!P.anisotropyMap,Oe=se&&!!P.clearcoatMap,ut=se&&!!P.clearcoatNormalMap,Ae=se&&!!P.clearcoatRoughnessMap,je=Me&&!!P.iridescenceMap,it=Me&&!!P.iridescenceThicknessMap,lt=ve&&!!P.sheenColorMap,Xe=ve&&!!P.sheenRoughnessMap,gt=!!P.specularMap,dt=!!P.specularColorMap,Pt=!!P.specularIntensityMap,K=qe&&!!P.transmissionMap,He=qe&&!!P.thicknessMap,xe=!!P.gradientMap,we=!!P.alphaMap,We=P.alphaTest>0,Ge=!!P.alphaHash,mt=!!P.extensions;let zt=Tr;P.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(zt=s.toneMapping);const Kt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:_e,fragmentShader:q,defines:P.defines,customVertexShaderID:re,customFragmentShaderID:ge,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:_,batching:Le,batchingColor:Le&&ee._colorsTexture!==null,instancing:ye,instancingColor:ye&&ee.instanceColor!==null,instancingMorph:ye&&ee.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:na,alphaToCoverage:!!P.alphaToCoverage,map:Ze,matcap:me,envMap:Q,envMapMode:Q&&fe.mapping,envMapCubeUVHeight:V,aoMap:k,lightMap:Fe,bumpMap:Ee,normalMap:De,displacementMap:S&&Te,emissiveMap:st,normalMapObjectSpace:De&&P.normalMapType===H_,normalMapTangentSpace:De&&P.normalMapType===Mg,metalnessMap:ke,roughnessMap:U,anisotropy:A,anisotropyMap:Ne,clearcoat:se,clearcoatMap:Oe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ae,dispersion:Se,iridescence:Me,iridescenceMap:je,iridescenceThicknessMap:it,sheen:ve,sheenColorMap:lt,sheenRoughnessMap:Xe,specularMap:gt,specularColorMap:dt,specularIntensityMap:Pt,transmission:qe,transmissionMap:K,thicknessMap:He,gradientMap:xe,opaque:P.transparent===!1&&P.blending===Xs&&P.alphaToCoverage===!1,alphaMap:we,alphaTest:We,alphaHash:Ge,combine:P.combine,mapUv:Ze&&E(P.map.channel),aoMapUv:k&&E(P.aoMap.channel),lightMapUv:Fe&&E(P.lightMap.channel),bumpMapUv:Ee&&E(P.bumpMap.channel),normalMapUv:De&&E(P.normalMap.channel),displacementMapUv:Te&&E(P.displacementMap.channel),emissiveMapUv:st&&E(P.emissiveMap.channel),metalnessMapUv:ke&&E(P.metalnessMap.channel),roughnessMapUv:U&&E(P.roughnessMap.channel),anisotropyMapUv:Ne&&E(P.anisotropyMap.channel),clearcoatMapUv:Oe&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:ut&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:it&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&E(P.sheenRoughnessMap.channel),specularMapUv:gt&&E(P.specularMap.channel),specularColorMapUv:dt&&E(P.specularColorMap.channel),specularIntensityMapUv:Pt&&E(P.specularIntensityMap.channel),transmissionMapUv:K&&E(P.transmissionMap.channel),thicknessMapUv:He&&E(P.thicknessMap.channel),alphaMapUv:we&&E(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(De||A),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!pe.attributes.uv&&(Ze||we),fog:!!he,useFog:P.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:W,skinning:ee.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:$,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:zt,decodeVideoTexture:Ze&&P.map.isVideoTexture===!0&&At.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:st&&P.emissiveMap.isVideoTexture===!0&&At.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Gn,flipSided:P.side===bn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:mt&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&P.extensions.multiDraw===!0||Le)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Kt.vertexUv1s=p.has(1),Kt.vertexUv2s=p.has(2),Kt.vertexUv3s=p.has(3),p.clear(),Kt}function v(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const j in P.defines)R.push(j),R.push(P.defines[j]);return P.isRawShaderMaterial===!1&&(L(R,P),D(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function L(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function D(P,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),P.push(d.mask)}function C(P){const R=w[P.type];let j;if(R){const ne=wi[R];j=xy.clone(ne.uniforms)}else j=P.uniforms;return j}function H(P,R){let j;for(let ne=0,ee=g.length;ne<ee;ne++){const he=g[ne];if(he.cacheKey===R){j=he,++j.usedTimes;break}}return j===void 0&&(j=new Nw(s,R,P,l),g.push(j)),j}function F(P){if(--P.usedTimes===0){const R=g.indexOf(P);g[R]=g[g.length-1],g.pop(),P.destroy()}}function O(P){f.remove(P)}function B(){f.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:C,acquireProgram:H,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:B}}function Uw(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function kw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function n0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function i0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(y,S,_,w,E,M){let v=s[e];return v===void 0?(v={id:y.id,object:y,geometry:S,material:_,groupOrder:w,renderOrder:y.renderOrder,z:E,group:M},s[e]=v):(v.id=y.id,v.object=y,v.geometry=S,v.material=_,v.groupOrder=w,v.renderOrder=y.renderOrder,v.z=E,v.group=M),e++,v}function d(y,S,_,w,E,M){const v=u(y,S,_,w,E,M);_.transmission>0?r.push(v):_.transparent===!0?o.push(v):t.push(v)}function f(y,S,_,w,E,M){const v=u(y,S,_,w,E,M);_.transmission>0?r.unshift(v):_.transparent===!0?o.unshift(v):t.unshift(v)}function p(y,S){t.length>1&&t.sort(y||kw),r.length>1&&r.sort(S||n0),o.length>1&&o.sort(S||n0)}function g(){for(let y=e,S=s.length;y<S;y++){const _=s[y];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:f,finish:g,sort:p}}function Fw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new i0,s.set(r,[u])):o>=l.length?(u=new i0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new yt};break;case"SpotLight":t={position:new X,direction:new X,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function zw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Bw=0;function jw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Hw(s){const e=new Ow,t=zw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new X);const o=new X,l=new Ht,u=new Ht;function d(p){let g=0,y=0,S=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let _=0,w=0,E=0,M=0,v=0,L=0,D=0,C=0,H=0,F=0,O=0;p.sort(jw);for(let P=0,R=p.length;P<R;P++){const j=p[P],ne=j.color,ee=j.intensity,he=j.distance,pe=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)g+=ne.r*ee,y+=ne.g*ee,S+=ne.b*ee;else if(j.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(j.sh.coefficients[te],ee);O++}else if(j.isDirectionalLight){const te=e.get(j);if(te.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const fe=j.shadow,V=t.get(j);V.shadowIntensity=fe.intensity,V.shadowBias=fe.bias,V.shadowNormalBias=fe.normalBias,V.shadowRadius=fe.radius,V.shadowMapSize=fe.mapSize,r.directionalShadow[_]=V,r.directionalShadowMap[_]=pe,r.directionalShadowMatrix[_]=j.shadow.matrix,L++}r.directional[_]=te,_++}else if(j.isSpotLight){const te=e.get(j);te.position.setFromMatrixPosition(j.matrixWorld),te.color.copy(ne).multiplyScalar(ee),te.distance=he,te.coneCos=Math.cos(j.angle),te.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),te.decay=j.decay,r.spot[E]=te;const fe=j.shadow;if(j.map&&(r.spotLightMap[H]=j.map,H++,fe.updateMatrices(j),j.castShadow&&F++),r.spotLightMatrix[E]=fe.matrix,j.castShadow){const V=t.get(j);V.shadowIntensity=fe.intensity,V.shadowBias=fe.bias,V.shadowNormalBias=fe.normalBias,V.shadowRadius=fe.radius,V.shadowMapSize=fe.mapSize,r.spotShadow[E]=V,r.spotShadowMap[E]=pe,C++}E++}else if(j.isRectAreaLight){const te=e.get(j);te.color.copy(ne).multiplyScalar(ee),te.halfWidth.set(j.width*.5,0,0),te.halfHeight.set(0,j.height*.5,0),r.rectArea[M]=te,M++}else if(j.isPointLight){const te=e.get(j);if(te.color.copy(j.color).multiplyScalar(j.intensity),te.distance=j.distance,te.decay=j.decay,j.castShadow){const fe=j.shadow,V=t.get(j);V.shadowIntensity=fe.intensity,V.shadowBias=fe.bias,V.shadowNormalBias=fe.normalBias,V.shadowRadius=fe.radius,V.shadowMapSize=fe.mapSize,V.shadowCameraNear=fe.camera.near,V.shadowCameraFar=fe.camera.far,r.pointShadow[w]=V,r.pointShadowMap[w]=pe,r.pointShadowMatrix[w]=j.shadow.matrix,D++}r.point[w]=te,w++}else if(j.isHemisphereLight){const te=e.get(j);te.skyColor.copy(j.color).multiplyScalar(ee),te.groundColor.copy(j.groundColor).multiplyScalar(ee),r.hemi[v]=te,v++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=S;const B=r.hash;(B.directionalLength!==_||B.pointLength!==w||B.spotLength!==E||B.rectAreaLength!==M||B.hemiLength!==v||B.numDirectionalShadows!==L||B.numPointShadows!==D||B.numSpotShadows!==C||B.numSpotMaps!==H||B.numLightProbes!==O)&&(r.directional.length=_,r.spot.length=E,r.rectArea.length=M,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+H-F,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,B.directionalLength=_,B.pointLength=w,B.spotLength=E,B.rectAreaLength=M,B.hemiLength=v,B.numDirectionalShadows=L,B.numPointShadows=D,B.numSpotShadows=C,B.numSpotMaps=H,B.numLightProbes=O,r.version=Bw++)}function f(p,g){let y=0,S=0,_=0,w=0,E=0;const M=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const D=p[v];if(D.isDirectionalLight){const C=r.directional[y];C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),y++}else if(D.isSpotLight){const C=r.spot[_];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),_++}else if(D.isRectAreaLight){const C=r.rectArea[w];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),u.identity(),l.copy(D.matrixWorld),l.premultiply(M),u.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),w++}else if(D.isPointLight){const C=r.point[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),S++}else if(D.isHemisphereLight){const C=r.hemi[E];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(M),E++}}}return{setup:d,setupView:f,state:r}}function r0(s){const e=new Hw(s),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function u(g){r.push(g)}function d(){e.setup(t)}function f(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function Vw(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new r0(s),e.set(o,[d])):l>=u.length?(d=new r0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}class Gw extends ra{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=B_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ww extends ra{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
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
}`;function qw(s,e,t){let r=new Sf;const o=new ct,l=new ct,u=new It,d=new Gw({depthPacking:j_}),f=new Ww,p={},g=t.maxTextureSize,y={[Cr]:bn,[bn]:Cr,[Gn]:Gn},S=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Xw,fragmentShader:$w}),_=S.clone();_.defines.HORIZONTAL_PASS=1;const w=new Fn;w.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Be(w,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=og;let v=this.type;this.render=function(F,O,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),ne=s.state;ne.setBlending(br),ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ee=v!==Vi&&this.type===Vi,he=v===Vi&&this.type!==Vi;for(let pe=0,te=F.length;pe<te;pe++){const fe=F[pe],V=fe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const le=V.getFrameExtents();if(o.multiply(le),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/le.x),o.x=l.x*le.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/le.y),o.y=l.y*le.y,V.mapSize.y=l.y)),V.map===null||ee===!0||he===!0){const b=this.type!==Vi?{minFilter:gi,magFilter:gi}:{};V.map!==null&&V.map.dispose(),V.map=new ss(o.x,o.y,b),V.map.texture.name=fe.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const I=V.getViewportCount();for(let b=0;b<I;b++){const $=V.getViewport(b);u.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),ne.viewport(u),V.updateMatrices(fe,b),r=V.getFrustum(),C(O,B,V.camera,fe,this.type)}V.isPointLightShadow!==!0&&this.type===Vi&&L(V,B),V.needsUpdate=!1}v=this.type,M.needsUpdate=!1,s.setRenderTarget(P,R,j)};function L(F,O){const B=e.update(E);S.defines.VSM_SAMPLES!==F.blurSamples&&(S.defines.VSM_SAMPLES=F.blurSamples,_.defines.VSM_SAMPLES=F.blurSamples,S.needsUpdate=!0,_.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ss(o.x,o.y)),S.uniforms.shadow_pass.value=F.map.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,B,S,E,null),_.uniforms.shadow_pass.value=F.mapPass.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,B,_,E,null)}function D(F,O,B,P){let R=null;const j=B.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(j!==void 0)R=j;else if(R=B.isPointLight===!0?f:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ne=R.uuid,ee=O.uuid;let he=p[ne];he===void 0&&(he={},p[ne]=he);let pe=he[ee];pe===void 0&&(pe=R.clone(),he[ee]=pe,O.addEventListener("dispose",H)),R=pe}if(R.visible=O.visible,R.wireframe=O.wireframe,P===Vi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:y[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,B.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ne=s.properties.get(R);ne.light=B}return R}function C(F,O,B,P,R){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Vi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,F.matrixWorld);const ee=e.update(F),he=F.material;if(Array.isArray(he)){const pe=ee.groups;for(let te=0,fe=pe.length;te<fe;te++){const V=pe[te],le=he[V.materialIndex];if(le&&le.visible){const I=D(F,le,P,R);F.onBeforeShadow(s,F,O,B,ee,I,V),s.renderBufferDirect(B,null,ee,I,F,V),F.onAfterShadow(s,F,O,B,ee,I,V)}}}else if(he.visible){const pe=D(F,he,P,R);F.onBeforeShadow(s,F,O,B,ee,pe,null),s.renderBufferDirect(B,null,ee,pe,F,null),F.onAfterShadow(s,F,O,B,ee,pe,null)}}const ne=F.children;for(let ee=0,he=ne.length;ee<he;ee++)C(ne[ee],O,B,P,R)}function H(F){F.target.removeEventListener("dispose",H);for(const B in p){const P=p[B],R=F.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const Yw={[Cd]:Rd,[Nd]:Dd,[Pd]:Id,[Ks]:Ld,[Rd]:Cd,[Dd]:Nd,[Id]:Pd,[Ld]:Ks};function Kw(s,e){function t(){let K=!1;const He=new It;let xe=null;const we=new It(0,0,0,0);return{setMask:function(We){xe!==We&&!K&&(s.colorMask(We,We,We,We),xe=We)},setLocked:function(We){K=We},setClear:function(We,Ge,mt,zt,Kt){Kt===!0&&(We*=zt,Ge*=zt,mt*=zt),He.set(We,Ge,mt,zt),we.equals(He)===!1&&(s.clearColor(We,Ge,mt,zt),we.copy(He))},reset:function(){K=!1,xe=null,we.set(-1,0,0,0)}}}function r(){let K=!1,He=!1,xe=null,we=null,We=null;return{setReversed:function(Ge){if(He!==Ge){const mt=e.get("EXT_clip_control");He?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT);const zt=We;We=null,this.setClear(zt)}He=Ge},getReversed:function(){return He},setTest:function(Ge){Ge?oe(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(Ge){xe!==Ge&&!K&&(s.depthMask(Ge),xe=Ge)},setFunc:function(Ge){if(He&&(Ge=Yw[Ge]),we!==Ge){switch(Ge){case Cd:s.depthFunc(s.NEVER);break;case Rd:s.depthFunc(s.ALWAYS);break;case Nd:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case Pd:s.depthFunc(s.EQUAL);break;case Ld:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case Id:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=Ge}},setLocked:function(Ge){K=Ge},setClear:function(Ge){We!==Ge&&(He&&(Ge=1-Ge),s.clearDepth(Ge),We=Ge)},reset:function(){K=!1,xe=null,we=null,We=null,He=!1}}}function o(){let K=!1,He=null,xe=null,we=null,We=null,Ge=null,mt=null,zt=null,Kt=null;return{setTest:function(bt){K||(bt?oe(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(bt){He!==bt&&!K&&(s.stencilMask(bt),He=bt)},setFunc:function(bt,An,yn){(xe!==bt||we!==An||We!==yn)&&(s.stencilFunc(bt,An,yn),xe=bt,we=An,We=yn)},setOp:function(bt,An,yn){(Ge!==bt||mt!==An||zt!==yn)&&(s.stencilOp(bt,An,yn),Ge=bt,mt=An,zt=yn)},setLocked:function(bt){K=bt},setClear:function(bt){Kt!==bt&&(s.clearStencil(bt),Kt=bt)},reset:function(){K=!1,He=null,xe=null,we=null,We=null,Ge=null,mt=null,zt=null,Kt=null}}}const l=new t,u=new r,d=new o,f=new WeakMap,p=new WeakMap;let g={},y={},S=new WeakMap,_=[],w=null,E=!1,M=null,v=null,L=null,D=null,C=null,H=null,F=null,O=new yt(0,0,0),B=0,P=!1,R=null,j=null,ne=null,ee=null,he=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,fe=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(fe=parseFloat(/^WebGL (\d)/.exec(V)[1]),te=fe>=1):V.indexOf("OpenGL ES")!==-1&&(fe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),te=fe>=2);let le=null,I={};const b=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),_e=new It().fromArray(b),q=new It().fromArray($);function re(K,He,xe,we){const We=new Uint8Array(4),Ge=s.createTexture();s.bindTexture(K,Ge),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<xe;mt++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(He,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,We):s.texImage2D(He+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,We);return Ge}const ge={};ge[s.TEXTURE_2D]=re(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=re(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=re(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=re(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),oe(s.DEPTH_TEST),u.setFunc(Ks),Ee(!1),De(lm),oe(s.CULL_FACE),k(br);function oe(K){g[K]!==!0&&(s.enable(K),g[K]=!0)}function W(K){g[K]!==!1&&(s.disable(K),g[K]=!1)}function ye(K,He){return y[K]!==He?(s.bindFramebuffer(K,He),y[K]=He,K===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=He),K===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=He),!0):!1}function Le(K,He){let xe=_,we=!1;if(K){xe=S.get(He),xe===void 0&&(xe=[],S.set(He,xe));const We=K.textures;if(xe.length!==We.length||xe[0]!==s.COLOR_ATTACHMENT0){for(let Ge=0,mt=We.length;Ge<mt;Ge++)xe[Ge]=s.COLOR_ATTACHMENT0+Ge;xe.length=We.length,we=!0}}else xe[0]!==s.BACK&&(xe[0]=s.BACK,we=!0);we&&s.drawBuffers(xe)}function Ze(K){return w!==K?(s.useProgram(K),w=K,!0):!1}const me={[Qr]:s.FUNC_ADD,[p_]:s.FUNC_SUBTRACT,[m_]:s.FUNC_REVERSE_SUBTRACT};me[g_]=s.MIN,me[x_]=s.MAX;const Q={[v_]:s.ZERO,[__]:s.ONE,[y_]:s.SRC_COLOR,[Td]:s.SRC_ALPHA,[T_]:s.SRC_ALPHA_SATURATE,[E_]:s.DST_COLOR,[M_]:s.DST_ALPHA,[S_]:s.ONE_MINUS_SRC_COLOR,[Ad]:s.ONE_MINUS_SRC_ALPHA,[b_]:s.ONE_MINUS_DST_COLOR,[w_]:s.ONE_MINUS_DST_ALPHA,[A_]:s.CONSTANT_COLOR,[C_]:s.ONE_MINUS_CONSTANT_COLOR,[R_]:s.CONSTANT_ALPHA,[N_]:s.ONE_MINUS_CONSTANT_ALPHA};function k(K,He,xe,we,We,Ge,mt,zt,Kt,bt){if(K===br){E===!0&&(W(s.BLEND),E=!1);return}if(E===!1&&(oe(s.BLEND),E=!0),K!==h_){if(K!==M||bt!==P){if((v!==Qr||C!==Qr)&&(s.blendEquation(s.FUNC_ADD),v=Qr,C=Qr),bt)switch(K){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cm:s.blendFunc(s.ONE,s.ONE);break;case um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}L=null,D=null,H=null,F=null,O.set(0,0,0),B=0,M=K,P=bt}return}We=We||He,Ge=Ge||xe,mt=mt||we,(He!==v||We!==C)&&(s.blendEquationSeparate(me[He],me[We]),v=He,C=We),(xe!==L||we!==D||Ge!==H||mt!==F)&&(s.blendFuncSeparate(Q[xe],Q[we],Q[Ge],Q[mt]),L=xe,D=we,H=Ge,F=mt),(zt.equals(O)===!1||Kt!==B)&&(s.blendColor(zt.r,zt.g,zt.b,Kt),O.copy(zt),B=Kt),M=K,P=!1}function Fe(K,He){K.side===Gn?W(s.CULL_FACE):oe(s.CULL_FACE);let xe=K.side===bn;He&&(xe=!xe),Ee(xe),K.blending===Xs&&K.transparent===!1?k(br):k(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),u.setFunc(K.depthFunc),u.setTest(K.depthTest),u.setMask(K.depthWrite),l.setMask(K.colorWrite);const we=K.stencilWrite;d.setTest(we),we&&(d.setMask(K.stencilWriteMask),d.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),d.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),st(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(K){R!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),R=K)}function De(K){K!==d_?(oe(s.CULL_FACE),K!==j&&(K===lm?s.cullFace(s.BACK):K===f_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),j=K}function Te(K){K!==ne&&(te&&s.lineWidth(K),ne=K)}function st(K,He,xe){K?(oe(s.POLYGON_OFFSET_FILL),(ee!==He||he!==xe)&&(s.polygonOffset(He,xe),ee=He,he=xe)):W(s.POLYGON_OFFSET_FILL)}function ke(K){K?oe(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function U(K){K===void 0&&(K=s.TEXTURE0+pe-1),le!==K&&(s.activeTexture(K),le=K)}function A(K,He,xe){xe===void 0&&(le===null?xe=s.TEXTURE0+pe-1:xe=le);let we=I[xe];we===void 0&&(we={type:void 0,texture:void 0},I[xe]=we),(we.type!==K||we.texture!==He)&&(le!==xe&&(s.activeTexture(xe),le=xe),s.bindTexture(K,He||ge[K]),we.type=K,we.texture=He)}function se(){const K=I[le];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function Se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ve(){try{s.texSubImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ae(){try{s.texStorage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function je(){try{s.texImage2D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function it(){try{s.texImage3D.apply(s,arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function lt(K){_e.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),_e.copy(K))}function Xe(K){q.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),q.copy(K))}function gt(K,He){let xe=p.get(He);xe===void 0&&(xe=new WeakMap,p.set(He,xe));let we=xe.get(K);we===void 0&&(we=s.getUniformBlockIndex(He,K.name),xe.set(K,we))}function dt(K,He){const we=p.get(He).get(K);f.get(He)!==we&&(s.uniformBlockBinding(He,we,K.__bindingPointIndex),f.set(He,we))}function Pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},le=null,I={},y={},S=new WeakMap,_=[],w=null,E=!1,M=null,v=null,L=null,D=null,C=null,H=null,F=null,O=new yt(0,0,0),B=0,P=!1,R=null,j=null,ne=null,ee=null,he=null,_e.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:oe,disable:W,bindFramebuffer:ye,drawBuffers:Le,useProgram:Ze,setBlending:k,setMaterial:Fe,setFlipSided:Ee,setCullFace:De,setLineWidth:Te,setPolygonOffset:st,setScissorTest:ke,activeTexture:U,bindTexture:A,unbindTexture:se,compressedTexImage2D:Se,compressedTexImage3D:Me,texImage2D:je,texImage3D:it,updateUBOMapping:gt,uniformBlockBinding:dt,texStorage2D:ut,texStorage3D:Ae,texSubImage2D:ve,texSubImage3D:qe,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Oe,scissor:lt,viewport:Xe,reset:Pt}}function s0(s,e,t,r){const o=Zw(r);switch(t){case mg:return s*e;case xg:return s*e;case vg:return s*e*2;case _g:return s*e/o.components*o.byteLength;case vf:return s*e/o.components*o.byteLength;case yg:return s*e*2/o.components*o.byteLength;case _f:return s*e*2/o.components*o.byteLength;case gg:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case yf:return s*e*4/o.components*o.byteLength;case Ul:case kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:case jd:return Math.max(s,16)*Math.max(e,8)/4;case Od:case Bd:return Math.max(s,8)*Math.max(e,8)/2;case Hd:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case rf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case sf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zl:case af:case of:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sg:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cf:case uf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zw(s){switch(s){case $i:case fg:return{byteLength:1,components:1};case Ka:case hg:case Qa:return{byteLength:2,components:1};case gf:case xf:return{byteLength:2,components:4};case rs:case mf:case Gi:return{byteLength:4,components:1};case pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Jw(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,g=new WeakMap;let y;const S=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,A){return _?new OffscreenCanvas(U,A):Wl("canvas")}function E(U,A,se){let Se=1;const Me=ke(U);if((Me.width>se||Me.height>se)&&(Se=se/Math.max(Me.width,Me.height)),Se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ve=Math.floor(Se*Me.width),qe=Math.floor(Se*Me.height);y===void 0&&(y=w(ve,qe));const Ne=A?w(ve,qe):y;return Ne.width=ve,Ne.height=qe,Ne.getContext("2d").drawImage(U,0,0,ve,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ve+"x"+qe+")."),Ne}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),U;return U}function M(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(U,A,se,Se,Me=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ve=A;if(A===s.RED&&(se===s.FLOAT&&(ve=s.R32F),se===s.HALF_FLOAT&&(ve=s.R16F),se===s.UNSIGNED_BYTE&&(ve=s.R8)),A===s.RED_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.R8UI),se===s.UNSIGNED_SHORT&&(ve=s.R16UI),se===s.UNSIGNED_INT&&(ve=s.R32UI),se===s.BYTE&&(ve=s.R8I),se===s.SHORT&&(ve=s.R16I),se===s.INT&&(ve=s.R32I)),A===s.RG&&(se===s.FLOAT&&(ve=s.RG32F),se===s.HALF_FLOAT&&(ve=s.RG16F),se===s.UNSIGNED_BYTE&&(ve=s.RG8)),A===s.RG_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.RG8UI),se===s.UNSIGNED_SHORT&&(ve=s.RG16UI),se===s.UNSIGNED_INT&&(ve=s.RG32UI),se===s.BYTE&&(ve=s.RG8I),se===s.SHORT&&(ve=s.RG16I),se===s.INT&&(ve=s.RG32I)),A===s.RGB_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),se===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),se===s.UNSIGNED_INT&&(ve=s.RGB32UI),se===s.BYTE&&(ve=s.RGB8I),se===s.SHORT&&(ve=s.RGB16I),se===s.INT&&(ve=s.RGB32I)),A===s.RGBA_INTEGER&&(se===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),se===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),se===s.UNSIGNED_INT&&(ve=s.RGBA32UI),se===s.BYTE&&(ve=s.RGBA8I),se===s.SHORT&&(ve=s.RGBA16I),se===s.INT&&(ve=s.RGBA32I)),A===s.RGB&&se===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),A===s.RGBA){const qe=Me?Ql:At.getTransfer(Se);se===s.FLOAT&&(ve=s.RGBA32F),se===s.HALF_FLOAT&&(ve=s.RGBA16F),se===s.UNSIGNED_BYTE&&(ve=qe===Dt?s.SRGB8_ALPHA8:s.RGBA8),se===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),se===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function C(U,A){let se;return U?A===null||A===rs||A===Qs?se=s.DEPTH24_STENCIL8:A===Gi?se=s.DEPTH32F_STENCIL8:A===Ka&&(se=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===rs||A===Qs?se=s.DEPTH_COMPONENT24:A===Gi?se=s.DEPTH_COMPONENT32F:A===Ka&&(se=s.DEPTH_COMPONENT16),se}function H(U,A){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==gi&&U.minFilter!==Ei?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function F(U){const A=U.target;A.removeEventListener("dispose",F),B(A),A.isVideoTexture&&g.delete(A)}function O(U){const A=U.target;A.removeEventListener("dispose",O),R(A)}function B(U){const A=r.get(U);if(A.__webglInit===void 0)return;const se=U.source,Se=S.get(se);if(Se){const Me=Se[A.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&P(U),Object.keys(Se).length===0&&S.delete(se)}r.remove(U)}function P(U){const A=r.get(U);s.deleteTexture(A.__webglTexture);const se=U.source,Se=S.get(se);delete Se[A.__cacheKey],u.memory.textures--}function R(U){const A=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(A.__webglFramebuffer[Se]))for(let Me=0;Me<A.__webglFramebuffer[Se].length;Me++)s.deleteFramebuffer(A.__webglFramebuffer[Se][Me]);else s.deleteFramebuffer(A.__webglFramebuffer[Se]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[Se])}else{if(Array.isArray(A.__webglFramebuffer))for(let Se=0;Se<A.__webglFramebuffer.length;Se++)s.deleteFramebuffer(A.__webglFramebuffer[Se]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Se=0;Se<A.__webglColorRenderbuffer.length;Se++)A.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[Se]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const se=U.textures;for(let Se=0,Me=se.length;Se<Me;Se++){const ve=r.get(se[Se]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),u.memory.textures--),r.remove(se[Se])}r.remove(U)}let j=0;function ne(){j=0}function ee(){const U=j;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),j+=1,U}function he(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function pe(U,A){const se=r.get(U);if(U.isVideoTexture&&Te(U),U.isRenderTargetTexture===!1&&U.version>0&&se.__version!==U.version){const Se=U.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(se,U,A);return}}t.bindTexture(s.TEXTURE_2D,se.__webglTexture,s.TEXTURE0+A)}function te(U,A){const se=r.get(U);if(U.version>0&&se.__version!==U.version){q(se,U,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,se.__webglTexture,s.TEXTURE0+A)}function fe(U,A){const se=r.get(U);if(U.version>0&&se.__version!==U.version){q(se,U,A);return}t.bindTexture(s.TEXTURE_3D,se.__webglTexture,s.TEXTURE0+A)}function V(U,A){const se=r.get(U);if(U.version>0&&se.__version!==U.version){re(se,U,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture,s.TEXTURE0+A)}const le={[is]:s.REPEAT,[ts]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},I={[gi]:s.NEAREST,[z_]:s.NEAREST_MIPMAP_NEAREST,[ul]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[ju]:s.LINEAR_MIPMAP_NEAREST,[ns]:s.LINEAR_MIPMAP_LINEAR},b={[V_]:s.NEVER,[Y_]:s.ALWAYS,[G_]:s.LESS,[wg]:s.LEQUAL,[W_]:s.EQUAL,[q_]:s.GEQUAL,[X_]:s.GREATER,[$_]:s.NOTEQUAL};function $(U,A){if(A.type===Gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Ei||A.magFilter===ju||A.magFilter===ul||A.magFilter===ns||A.minFilter===Ei||A.minFilter===ju||A.minFilter===ul||A.minFilter===ns)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,le[A.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,le[A.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,le[A.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,I[A.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,I[A.minFilter]),A.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,b[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gi||A.minFilter!==ul&&A.minFilter!==ns||A.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function _e(U,A){let se=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",F));const Se=A.source;let Me=S.get(Se);Me===void 0&&(Me={},S.set(Se,Me));const ve=he(A);if(ve!==U.__cacheKey){Me[ve]===void 0&&(Me[ve]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,se=!0),Me[ve].usedTimes++;const qe=Me[U.__cacheKey];qe!==void 0&&(Me[U.__cacheKey].usedTimes--,qe.usedTimes===0&&P(A)),U.__cacheKey=ve,U.__webglTexture=Me[ve].texture}return se}function q(U,A,se){let Se=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=s.TEXTURE_3D);const Me=_e(U,A),ve=A.source;t.bindTexture(Se,U.__webglTexture,s.TEXTURE0+se);const qe=r.get(ve);if(ve.version!==qe.__version||Me===!0){t.activeTexture(s.TEXTURE0+se);const Ne=At.getPrimaries(At.workingColorSpace),Oe=A.colorSpace===Er?null:At.getPrimaries(A.colorSpace),ut=A.colorSpace===Er||Ne===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ae=E(A.image,!1,o.maxTextureSize);Ae=st(A,Ae);const je=l.convert(A.format,A.colorSpace),it=l.convert(A.type);let lt=D(A.internalFormat,je,it,A.colorSpace,A.isVideoTexture);$(Se,A);let Xe;const gt=A.mipmaps,dt=A.isVideoTexture!==!0,Pt=qe.__version===void 0||Me===!0,K=ve.dataReady,He=H(A,Ae);if(A.isDepthTexture)lt=C(A.format===ea,A.type),Pt&&(dt?t.texStorage2D(s.TEXTURE_2D,1,lt,Ae.width,Ae.height):t.texImage2D(s.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,je,it,null));else if(A.isDataTexture)if(gt.length>0){dt&&Pt&&t.texStorage2D(s.TEXTURE_2D,He,lt,gt[0].width,gt[0].height);for(let xe=0,we=gt.length;xe<we;xe++)Xe=gt[xe],dt?K&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Xe.width,Xe.height,je,it,Xe.data):t.texImage2D(s.TEXTURE_2D,xe,lt,Xe.width,Xe.height,0,je,it,Xe.data);A.generateMipmaps=!1}else dt?(Pt&&t.texStorage2D(s.TEXTURE_2D,He,lt,Ae.width,Ae.height),K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae.width,Ae.height,je,it,Ae.data)):t.texImage2D(s.TEXTURE_2D,0,lt,Ae.width,Ae.height,0,je,it,Ae.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){dt&&Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,lt,gt[0].width,gt[0].height,Ae.depth);for(let xe=0,we=gt.length;xe<we;xe++)if(Xe=gt[xe],A.format!==mi)if(je!==null)if(dt){if(K)if(A.layerUpdates.size>0){const We=s0(Xe.width,Xe.height,A.format,A.type);for(const Ge of A.layerUpdates){const mt=Xe.data.subarray(Ge*We/Xe.data.BYTES_PER_ELEMENT,(Ge+1)*We/Xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,Ge,Xe.width,Xe.height,1,je,mt)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Xe.width,Xe.height,Ae.depth,je,Xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,lt,Xe.width,Xe.height,Ae.depth,0,Xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?K&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Xe.width,Xe.height,Ae.depth,je,it,Xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,lt,Xe.width,Xe.height,Ae.depth,0,je,it,Xe.data)}else{dt&&Pt&&t.texStorage2D(s.TEXTURE_2D,He,lt,gt[0].width,gt[0].height);for(let xe=0,we=gt.length;xe<we;xe++)Xe=gt[xe],A.format!==mi?je!==null?dt?K&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Xe.width,Xe.height,je,Xe.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,lt,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?K&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Xe.width,Xe.height,je,it,Xe.data):t.texImage2D(s.TEXTURE_2D,xe,lt,Xe.width,Xe.height,0,je,it,Xe.data)}else if(A.isDataArrayTexture)if(dt){if(Pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,He,lt,Ae.width,Ae.height,Ae.depth),K)if(A.layerUpdates.size>0){const xe=s0(Ae.width,Ae.height,A.format,A.type);for(const we of A.layerUpdates){const We=Ae.data.subarray(we*xe/Ae.data.BYTES_PER_ELEMENT,(we+1)*xe/Ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,we,Ae.width,Ae.height,1,je,it,We)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,je,it,Ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,lt,Ae.width,Ae.height,Ae.depth,0,je,it,Ae.data);else if(A.isData3DTexture)dt?(Pt&&t.texStorage3D(s.TEXTURE_3D,He,lt,Ae.width,Ae.height,Ae.depth),K&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,je,it,Ae.data)):t.texImage3D(s.TEXTURE_3D,0,lt,Ae.width,Ae.height,Ae.depth,0,je,it,Ae.data);else if(A.isFramebufferTexture){if(Pt)if(dt)t.texStorage2D(s.TEXTURE_2D,He,lt,Ae.width,Ae.height);else{let xe=Ae.width,we=Ae.height;for(let We=0;We<He;We++)t.texImage2D(s.TEXTURE_2D,We,lt,xe,we,0,je,it,null),xe>>=1,we>>=1}}else if(gt.length>0){if(dt&&Pt){const xe=ke(gt[0]);t.texStorage2D(s.TEXTURE_2D,He,lt,xe.width,xe.height)}for(let xe=0,we=gt.length;xe<we;xe++)Xe=gt[xe],dt?K&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,je,it,Xe):t.texImage2D(s.TEXTURE_2D,xe,lt,je,it,Xe);A.generateMipmaps=!1}else if(dt){if(Pt){const xe=ke(Ae);t.texStorage2D(s.TEXTURE_2D,He,lt,xe.width,xe.height)}K&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,je,it,Ae)}else t.texImage2D(s.TEXTURE_2D,0,lt,je,it,Ae);M(A)&&v(Se),qe.__version=ve.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function re(U,A,se){if(A.image.length!==6)return;const Se=_e(U,A),Me=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+se);const ve=r.get(Me);if(Me.version!==ve.__version||Se===!0){t.activeTexture(s.TEXTURE0+se);const qe=At.getPrimaries(At.workingColorSpace),Ne=A.colorSpace===Er?null:At.getPrimaries(A.colorSpace),Oe=A.colorSpace===Er||qe===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ut=A.isCompressedTexture||A.image[0].isCompressedTexture,Ae=A.image[0]&&A.image[0].isDataTexture,je=[];for(let we=0;we<6;we++)!ut&&!Ae?je[we]=E(A.image[we],!0,o.maxCubemapSize):je[we]=Ae?A.image[we].image:A.image[we],je[we]=st(A,je[we]);const it=je[0],lt=l.convert(A.format,A.colorSpace),Xe=l.convert(A.type),gt=D(A.internalFormat,lt,Xe,A.colorSpace),dt=A.isVideoTexture!==!0,Pt=ve.__version===void 0||Se===!0,K=Me.dataReady;let He=H(A,it);$(s.TEXTURE_CUBE_MAP,A);let xe;if(ut){dt&&Pt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,He,gt,it.width,it.height);for(let we=0;we<6;we++){xe=je[we].mipmaps;for(let We=0;We<xe.length;We++){const Ge=xe[We];A.format!==mi?lt!==null?dt?K&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We,0,0,Ge.width,Ge.height,lt,Ge.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We,gt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We,0,0,Ge.width,Ge.height,lt,Xe,Ge.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We,gt,Ge.width,Ge.height,0,lt,Xe,Ge.data)}}}else{if(xe=A.mipmaps,dt&&Pt){xe.length>0&&He++;const we=ke(je[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,He,gt,we.width,we.height)}for(let we=0;we<6;we++)if(Ae){dt?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,je[we].width,je[we].height,lt,Xe,je[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,gt,je[we].width,je[we].height,0,lt,Xe,je[we].data);for(let We=0;We<xe.length;We++){const mt=xe[We].image[we].image;dt?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We+1,0,0,mt.width,mt.height,lt,Xe,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We+1,gt,mt.width,mt.height,0,lt,Xe,mt.data)}}else{dt?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,lt,Xe,je[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,gt,lt,Xe,je[we]);for(let We=0;We<xe.length;We++){const Ge=xe[We];dt?K&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We+1,0,0,lt,Xe,Ge.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We+1,gt,lt,Xe,Ge.image[we])}}}M(A)&&v(s.TEXTURE_CUBE_MAP),ve.__version=Me.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ge(U,A,se,Se,Me,ve){const qe=l.convert(se.format,se.colorSpace),Ne=l.convert(se.type),Oe=D(se.internalFormat,qe,Ne,se.colorSpace),ut=r.get(A),Ae=r.get(se);if(Ae.__renderTarget=A,!ut.__hasExternalTextures){const je=Math.max(1,A.width>>ve),it=Math.max(1,A.height>>ve);Me===s.TEXTURE_3D||Me===s.TEXTURE_2D_ARRAY?t.texImage3D(Me,ve,Oe,je,it,A.depth,0,qe,Ne,null):t.texImage2D(Me,ve,Oe,je,it,0,qe,Ne,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),De(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,Me,Ae.__webglTexture,0,Ee(A)):(Me===s.TEXTURE_2D||Me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,Me,Ae.__webglTexture,ve),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(U,A,se){if(s.bindRenderbuffer(s.RENDERBUFFER,U),A.depthBuffer){const Se=A.depthTexture,Me=Se&&Se.isDepthTexture?Se.type:null,ve=C(A.stencilBuffer,Me),qe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=Ee(A);De(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,ve,A.width,A.height):se?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ve,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ve,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,U)}else{const Se=A.textures;for(let Me=0;Me<Se.length;Me++){const ve=Se[Me],qe=l.convert(ve.format,ve.colorSpace),Ne=l.convert(ve.type),Oe=D(ve.internalFormat,qe,Ne,ve.colorSpace),ut=Ee(A);se&&De(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Oe,A.width,A.height):De(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Oe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function W(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(A.depthTexture);Se.__renderTarget=A,(!Se.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);const Me=Se.__webglTexture,ve=Ee(A);if(A.depthTexture.format===$s)De(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(A.depthTexture.format===ea)De(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function ye(U){const A=r.get(U),se=U.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==U.depthTexture){const Se=U.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Se){const Me=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Se.removeEventListener("dispose",Me)};Se.addEventListener("dispose",Me),A.__depthDisposeCallback=Me}A.__boundDepthTexture=Se}if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");W(A.__webglFramebuffer,U)}else if(se){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]===void 0)A.__webglDepthbuffer[Se]=s.createRenderbuffer(),oe(A.__webglDepthbuffer[Se],U,!1);else{const Me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,ve)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),oe(A.__webglDepthbuffer,U,!1);else{const Se=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Me)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(U,A,se){const Se=r.get(U);A!==void 0&&ge(Se.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),se!==void 0&&ye(U)}function Ze(U){const A=U.texture,se=r.get(U),Se=r.get(A);U.addEventListener("dispose",O);const Me=U.textures,ve=U.isWebGLCubeRenderTarget===!0,qe=Me.length>1;if(qe||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=A.version,u.memory.textures++),ve){se.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer[Ne]=[];for(let Oe=0;Oe<A.mipmaps.length;Oe++)se.__webglFramebuffer[Ne][Oe]=s.createFramebuffer()}else se.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)se.__webglFramebuffer[Ne]=s.createFramebuffer()}else se.__webglFramebuffer=s.createFramebuffer();if(qe)for(let Ne=0,Oe=Me.length;Ne<Oe;Ne++){const ut=r.get(Me[Ne]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&De(U)===!1){se.__webglMultisampledFramebuffer=s.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Me.length;Ne++){const Oe=Me[Ne];se.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,se.__webglColorRenderbuffer[Ne]);const ut=l.convert(Oe.format,Oe.colorSpace),Ae=l.convert(Oe.type),je=D(Oe.internalFormat,ut,Ae,Oe.colorSpace,U.isXRRenderTarget===!0),it=Ee(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,je,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,se.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(se.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(se.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),$(s.TEXTURE_CUBE_MAP,A);for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)ge(se.__webglFramebuffer[Ne][Oe],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Oe);else ge(se.__webglFramebuffer[Ne],U,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(A)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let Ne=0,Oe=Me.length;Ne<Oe;Ne++){const ut=Me[Ne],Ae=r.get(ut);t.bindTexture(s.TEXTURE_2D,Ae.__webglTexture),$(s.TEXTURE_2D,ut),ge(se.__webglFramebuffer,U,ut,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,0),M(ut)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ne=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Se.__webglTexture),$(Ne,A),A.mipmaps&&A.mipmaps.length>0)for(let Oe=0;Oe<A.mipmaps.length;Oe++)ge(se.__webglFramebuffer[Oe],U,A,s.COLOR_ATTACHMENT0,Ne,Oe);else ge(se.__webglFramebuffer,U,A,s.COLOR_ATTACHMENT0,Ne,0);M(A)&&v(Ne),t.unbindTexture()}U.depthBuffer&&ye(U)}function me(U){const A=U.textures;for(let se=0,Se=A.length;se<Se;se++){const Me=A[se];if(M(Me)){const ve=L(U),qe=r.get(Me).__webglTexture;t.bindTexture(ve,qe),v(ve),t.unbindTexture()}}}const Q=[],k=[];function Fe(U){if(U.samples>0){if(De(U)===!1){const A=U.textures,se=U.width,Se=U.height;let Me=s.COLOR_BUFFER_BIT;const ve=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(U),Ne=A.length>1;if(Ne)for(let Oe=0;Oe<A.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Me|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Me|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Oe]);const ut=r.get(A[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,se,Se,0,0,se,Se,Me,s.NEAREST),f===!0&&(Q.length=0,k.length=0,Q.push(s.COLOR_ATTACHMENT0+Oe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Q.push(ve),k.push(ve),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,k)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let Oe=0;Oe<A.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,qe.__webglColorRenderbuffer[Oe]);const ut=r.get(A[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const A=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function Ee(U){return Math.min(o.maxSamples,U.samples)}function De(U){const A=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Te(U){const A=u.render.frame;g.get(U)!==A&&(g.set(U,A),U.update())}function st(U,A){const se=U.colorSpace,Se=U.format,Me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||se!==na&&se!==Er&&(At.getTransfer(se)===Dt?(Se!==mi||Me!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),A}function ke(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=ne,this.setTexture2D=pe,this.setTexture2DArray=te,this.setTexture3D=fe,this.setTextureCube=V,this.rebindTextures=Le,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=De}function Qw(s,e){function t(r,o=Er){let l;const u=At.getTransfer(o);if(r===$i)return s.UNSIGNED_BYTE;if(r===gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fg)return s.BYTE;if(r===hg)return s.SHORT;if(r===Ka)return s.UNSIGNED_SHORT;if(r===mf)return s.INT;if(r===rs)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Qa)return s.HALF_FLOAT;if(r===mg)return s.ALPHA;if(r===gg)return s.RGB;if(r===mi)return s.RGBA;if(r===xg)return s.LUMINANCE;if(r===vg)return s.LUMINANCE_ALPHA;if(r===$s)return s.DEPTH_COMPONENT;if(r===ea)return s.DEPTH_STENCIL;if(r===_g)return s.RED;if(r===vf)return s.RED_INTEGER;if(r===yg)return s.RG;if(r===_f)return s.RG_INTEGER;if(r===yf)return s.RGBA_INTEGER;if(r===Ul||r===kl||r===Fl||r===Ol)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ul)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ul)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Od||r===zd||r===Bd||r===jd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Od)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hd||r===Vd||r===Gd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Hd||r===Vd)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Gd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wd||r===Xd||r===$d||r===qd||r===Yd||r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Wd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$d)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ef)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zl||r===af||r===of)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===zl)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===af)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===of)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sg||r===lf||r===cf||r===uf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===lf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===uf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}class eE extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wn extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tE={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const M=t.getJointPose(E,r),v=this._getHandJoint(p,E);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],S=g.position.distanceTo(y.position),_=.02,w=.005;p.inputState.pinching&&S>_+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=_-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(tE)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Wn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const nE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iE=`
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

}`;class rE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Tn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Rr({vertexShader:nE,fragmentShader:iE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Be(new _n(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sE extends ia{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,g=null,y=null,S=null,_=null,w=null;const E=new rE,M=t.getContextAttributes();let v=null,L=null;const D=[],C=[],H=new ct;let F=null;const O=new kn;O.viewport=new It;const B=new kn;B.viewport=new It;const P=[O,B],R=new eE;let j=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=D[q];return re===void 0&&(re=new gd,D[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=D[q];return re===void 0&&(re=new gd,D[q]=re),re.getGripSpace()},this.getHand=function(q){let re=D[q];return re===void 0&&(re=new gd,D[q]=re),re.getHandSpace()};function ee(q){const re=C.indexOf(q.inputSource);if(re===-1)return;const ge=D[re];ge!==void 0&&(ge.update(q.inputSource,q.frame,p||u),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function he(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",he),o.removeEventListener("inputsourceschange",pe);for(let q=0;q<D.length;q++){const re=C[q];re!==null&&(C[q]=null,D[q].disconnect(re))}j=null,ne=null,E.reset(),e.setRenderTarget(v),_=null,S=null,y=null,o=null,L=null,_e.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){d=q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(q){p=q},this.getBaseLayer=function(){return S!==null?S:_},this.getBinding=function(){return y},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",he),o.addEventListener("inputsourceschange",pe),M.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(H),o.renderState.layers===void 0){const re={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,re),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),L=new ss(_.framebufferWidth,_.framebufferHeight,{format:mi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let re=null,ge=null,oe=null;M.depth&&(oe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=M.stencil?ea:$s,ge=M.stencil?Qs:rs);const W={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:l};y=new XRWebGLBinding(o,t),S=y.createProjectionLayer(W),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new ss(S.textureWidth,S.textureHeight,{format:mi,type:$i,depthTexture:new Fg(S.textureWidth,S.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),_e.setContext(o),_e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function pe(q){for(let re=0;re<q.removed.length;re++){const ge=q.removed[re],oe=C.indexOf(ge);oe>=0&&(C[oe]=null,D[oe].disconnect(ge))}for(let re=0;re<q.added.length;re++){const ge=q.added[re];let oe=C.indexOf(ge);if(oe===-1){for(let ye=0;ye<D.length;ye++)if(ye>=C.length){C.push(ge),oe=ye;break}else if(C[ye]===null){C[ye]=ge,oe=ye;break}if(oe===-1)break}const W=D[oe];W&&W.connect(ge)}}const te=new X,fe=new X;function V(q,re,ge){te.setFromMatrixPosition(re.matrixWorld),fe.setFromMatrixPosition(ge.matrixWorld);const oe=te.distanceTo(fe),W=re.projectionMatrix.elements,ye=ge.projectionMatrix.elements,Le=W[14]/(W[10]-1),Ze=W[14]/(W[10]+1),me=(W[9]+1)/W[5],Q=(W[9]-1)/W[5],k=(W[8]-1)/W[0],Fe=(ye[8]+1)/ye[0],Ee=Le*k,De=Le*Fe,Te=oe/(-k+Fe),st=Te*-k;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(st),q.translateZ(Te),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),W[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ke=Le+Te,U=Ze+Te,A=Ee-st,se=De+(oe-st),Se=me*Ze/U*ke,Me=Q*Ze/U*ke;q.projectionMatrix.makePerspective(A,se,Se,Me,ke,U),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function le(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let re=q.near,ge=q.far;E.texture!==null&&(E.depthNear>0&&(re=E.depthNear),E.depthFar>0&&(ge=E.depthFar)),R.near=B.near=O.near=re,R.far=B.far=O.far=ge,(j!==R.near||ne!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),j=R.near,ne=R.far),O.layers.mask=q.layers.mask|2,B.layers.mask=q.layers.mask|4,R.layers.mask=O.layers.mask|B.layers.mask;const oe=q.parent,W=R.cameras;le(R,oe);for(let ye=0;ye<W.length;ye++)le(W[ye],oe);W.length===2?V(R,O,B):R.projectionMatrix.copy(O.projectionMatrix),I(q,R,oe)};function I(q,re,ge){ge===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(S===null&&_===null))return f},this.setFoveation=function(q){f=q,S!==null&&(S.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let b=null;function $(q,re){if(g=re.getViewerPose(p||u),w=re,g!==null){const ge=g.views;_!==null&&(e.setRenderTargetFramebuffer(L,_.framebuffer),e.setRenderTarget(L));let oe=!1;ge.length!==R.cameras.length&&(R.cameras.length=0,oe=!0);for(let ye=0;ye<ge.length;ye++){const Le=ge[ye];let Ze=null;if(_!==null)Ze=_.getViewport(Le);else{const Q=y.getViewSubImage(S,Le);Ze=Q.viewport,ye===0&&(e.setRenderTargetTextures(L,Q.colorTexture,S.ignoreDepthValues?void 0:Q.depthStencilTexture),e.setRenderTarget(L))}let me=P[ye];me===void 0&&(me=new kn,me.layers.enable(ye),me.viewport=new It,P[ye]=me),me.matrix.fromArray(Le.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(Le.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),ye===0&&(R.matrix.copy(me.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),oe===!0&&R.cameras.push(me)}const W=o.enabledFeatures;if(W&&W.includes("depth-sensing")){const ye=y.getDepthInformation(ge[0]);ye&&ye.isValid&&ye.texture&&E.init(e,ye,o.renderState)}}for(let ge=0;ge<D.length;ge++){const oe=C[ge],W=D[ge];oe!==null&&W!==void 0&&W.update(oe,re,p||u)}b&&b(q,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),w=null}const _e=new Ug;_e.setAnimationLoop($),this.setAnimationLoop=function(q){b=q},this.dispose=function(){}}}const Kr=new Ti,aE=new Ht;function oE(s,e){function t(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,Lg(s)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function o(M,v,L,D,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(M,v):v.isMeshToonMaterial?(l(M,v),y(M,v)):v.isMeshPhongMaterial?(l(M,v),g(M,v)):v.isMeshStandardMaterial?(l(M,v),S(M,v),v.isMeshPhysicalMaterial&&_(M,v,C)):v.isMeshMatcapMaterial?(l(M,v),w(M,v)):v.isMeshDepthMaterial?l(M,v):v.isMeshDistanceMaterial?(l(M,v),E(M,v)):v.isMeshNormalMaterial?l(M,v):v.isLineBasicMaterial?(u(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?f(M,v,L,D):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,t(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,t(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,t(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===bn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,t(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===bn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,t(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,t(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const L=e.get(v),D=L.envMap,C=L.envMapRotation;D&&(M.envMap.value=D,Kr.copy(C),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),M.envMapRotation.value.setFromMatrix4(aE.makeRotationFromEuler(Kr)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,M.aoMapTransform))}function u(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,t(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function f(M,v,L,D){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*L,M.scale.value=D*.5,v.map&&(M.map.value=v.map,t(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,t(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,t(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,t(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function y(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function S(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function _(M,v,L){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===bn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=L.texture,M.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,M.specularIntensityMapTransform))}function w(M,v){v.matcap&&(M.matcap.value=v.matcap)}function E(M,v){const L=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(L.matrixWorld),M.nearDistance.value=L.shadow.camera.near,M.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function lE(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(L,D){const C=D.program;r.uniformBlockBinding(L,C)}function p(L,D){let C=o[L.id];C===void 0&&(w(L),C=g(L),o[L.id]=C,L.addEventListener("dispose",M));const H=D.program;r.updateUBOMapping(L,H);const F=e.render.frame;l[L.id]!==F&&(S(L),l[L.id]=F)}function g(L){const D=y();L.__bindingPointIndex=D;const C=s.createBuffer(),H=L.__size,F=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,H,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function y(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const D=o[L.id],C=L.uniforms,H=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let F=0,O=C.length;F<O;F++){const B=Array.isArray(C[F])?C[F]:[C[F]];for(let P=0,R=B.length;P<R;P++){const j=B[P];if(_(j,F,P,H)===!0){const ne=j.__offset,ee=Array.isArray(j.value)?j.value:[j.value];let he=0;for(let pe=0;pe<ee.length;pe++){const te=ee[pe],fe=E(te);typeof te=="number"||typeof te=="boolean"?(j.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,ne+he,j.__data)):te.isMatrix3?(j.__data[0]=te.elements[0],j.__data[1]=te.elements[1],j.__data[2]=te.elements[2],j.__data[3]=0,j.__data[4]=te.elements[3],j.__data[5]=te.elements[4],j.__data[6]=te.elements[5],j.__data[7]=0,j.__data[8]=te.elements[6],j.__data[9]=te.elements[7],j.__data[10]=te.elements[8],j.__data[11]=0):(te.toArray(j.__data,he),he+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ne,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(L,D,C,H){const F=L.value,O=D+"_"+C;if(H[O]===void 0)return typeof F=="number"||typeof F=="boolean"?H[O]=F:H[O]=F.clone(),!0;{const B=H[O];if(typeof F=="number"||typeof F=="boolean"){if(B!==F)return H[O]=F,!0}else if(B.equals(F)===!1)return B.copy(F),!0}return!1}function w(L){const D=L.uniforms;let C=0;const H=16;for(let O=0,B=D.length;O<B;O++){const P=Array.isArray(D[O])?D[O]:[D[O]];for(let R=0,j=P.length;R<j;R++){const ne=P[R],ee=Array.isArray(ne.value)?ne.value:[ne.value];for(let he=0,pe=ee.length;he<pe;he++){const te=ee[he],fe=E(te),V=C%H,le=V%fe.boundary,I=V+le;C+=le,I!==0&&H-I<fe.storage&&(C+=H-I),ne.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=C,C+=fe.storage}}}const F=C%H;return F>0&&(C+=H-F),L.__size=C,L.__cache={},this}function E(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function M(L){const D=L.target;D.removeEventListener("dispose",M);const C=u.indexOf(D.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function v(){for(const L in o)s.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:f,update:p,dispose:v}}class cE{constructor(e={}){const{canvas:t=Z_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=u;const w=new Uint32Array(4),E=new Int32Array(4);let M=null,v=null;const L=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ni,this.toneMapping=Tr,this.toneMappingExposure=1;const C=this;let H=!1,F=0,O=0,B=null,P=-1,R=null;const j=new It,ne=new It;let ee=null;const he=new yt(0);let pe=0,te=t.width,fe=t.height,V=1,le=null,I=null;const b=new It(0,0,te,fe),$=new It(0,0,te,fe);let _e=!1;const q=new Sf;let re=!1,ge=!1;const oe=new Ht,W=new Ht,ye=new X,Le=new It,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let me=!1;function Q(){return B===null?V:1}let k=r;function Fe(N,Z){return t.getContext(N,Z)}try{const N={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pf}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),k===null){const Z="webgl2";if(k=Fe(Z,N),k===null)throw Fe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let Ee,De,Te,st,ke,U,A,se,Se,Me,ve,qe,Ne,Oe,ut,Ae,je,it,lt,Xe,gt,dt,Pt,K;function He(){Ee=new p1(k),Ee.init(),dt=new Qw(k,Ee),De=new l1(k,Ee,e,dt),Te=new Kw(k,Ee),De.reverseDepthBuffer&&S&&Te.buffers.depth.setReversed(!0),st=new x1(k),ke=new Uw,U=new Jw(k,Ee,Te,ke,De,dt,st),A=new u1(C),se=new h1(C),Se=new Ey(k),Pt=new a1(k,Se),Me=new m1(k,Se,st,Pt),ve=new _1(k,Me,Se,st),lt=new v1(k,De,U),Ae=new c1(ke),qe=new Iw(C,A,se,Ee,De,Pt,Ae),Ne=new oE(C,ke),Oe=new Fw,ut=new Vw(Ee),it=new s1(C,A,se,Te,ve,_,f),je=new qw(C,ve,De),K=new lE(k,st,De,Te),Xe=new o1(k,Ee,st),gt=new g1(k,Ee,st),st.programs=qe.programs,C.capabilities=De,C.extensions=Ee,C.properties=ke,C.renderLists=Oe,C.shadowMap=je,C.state=Te,C.info=st}He();const xe=new sE(C,k);this.xr=xe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const N=Ee.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ee.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(N){N!==void 0&&(V=N,this.setSize(te,fe,!1))},this.getSize=function(N){return N.set(te,fe)},this.setSize=function(N,Z,ue=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=N,fe=Z,t.width=Math.floor(N*V),t.height=Math.floor(Z*V),ue===!0&&(t.style.width=N+"px",t.style.height=Z+"px"),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(te*V,fe*V).floor()},this.setDrawingBufferSize=function(N,Z,ue){te=N,fe=Z,V=ue,t.width=Math.floor(N*ue),t.height=Math.floor(Z*ue),this.setViewport(0,0,N,Z)},this.getCurrentViewport=function(N){return N.copy(j)},this.getViewport=function(N){return N.copy(b)},this.setViewport=function(N,Z,ue,de){N.isVector4?b.set(N.x,N.y,N.z,N.w):b.set(N,Z,ue,de),Te.viewport(j.copy(b).multiplyScalar(V).round())},this.getScissor=function(N){return N.copy($)},this.setScissor=function(N,Z,ue,de){N.isVector4?$.set(N.x,N.y,N.z,N.w):$.set(N,Z,ue,de),Te.scissor(ne.copy($).multiplyScalar(V).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(N){Te.setScissorTest(_e=N)},this.setOpaqueSort=function(N){le=N},this.setTransparentSort=function(N){I=N},this.getClearColor=function(N){return N.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(N=!0,Z=!0,ue=!0){let de=0;if(N){let J=!1;if(B!==null){const Ue=B.texture.format;J=Ue===yf||Ue===_f||Ue===vf}if(J){const Ue=B.texture.type,Pe=Ue===$i||Ue===rs||Ue===Ka||Ue===Qs||Ue===gf||Ue===xf,et=it.getClearColor(),Je=it.getClearAlpha(),ft=et.r,pt=et.g,tt=et.b;Pe?(w[0]=ft,w[1]=pt,w[2]=tt,w[3]=Je,k.clearBufferuiv(k.COLOR,0,w)):(E[0]=ft,E[1]=pt,E[2]=tt,E[3]=Je,k.clearBufferiv(k.COLOR,0,E))}else de|=k.COLOR_BUFFER_BIT}Z&&(de|=k.DEPTH_BUFFER_BIT),ue&&(de|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),Oe.dispose(),ut.dispose(),ke.dispose(),A.dispose(),se.dispose(),ve.dispose(),Pt.dispose(),K.dispose(),qe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",os),xe.removeEventListener("sessionend",Yi),Ai.stop()};function we(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const N=st.autoReset,Z=je.enabled,ue=je.autoUpdate,de=je.needsUpdate,J=je.type;He(),st.autoReset=N,je.enabled=Z,je.autoUpdate=ue,je.needsUpdate=de,je.type=J}function Ge(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function mt(N){const Z=N.target;Z.removeEventListener("dispose",mt),zt(Z)}function zt(N){Kt(N),ke.remove(N)}function Kt(N){const Z=ke.get(N).programs;Z!==void 0&&(Z.forEach(function(ue){qe.releaseProgram(ue)}),N.isShaderMaterial&&qe.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,ue,de,J,Ue){Z===null&&(Z=Ze);const Pe=J.isMesh&&J.matrixWorld.determinant()<0,et=so(N,Z,ue,de,J);Te.setMaterial(de,Pe);let Je=ue.index,ft=1;if(de.wireframe===!0){if(Je=Me.getWireframeAttribute(ue),Je===void 0)return;ft=2}const pt=ue.drawRange,tt=ue.attributes.position;let Et=pt.start*ft,Nt=(pt.start+pt.count)*ft;Ue!==null&&(Et=Math.max(Et,Ue.start*ft),Nt=Math.min(Nt,(Ue.start+Ue.count)*ft)),Je!==null?(Et=Math.max(Et,0),Nt=Math.min(Nt,Je.count)):tt!=null&&(Et=Math.max(Et,0),Nt=Math.min(Nt,tt.count));const wt=Nt-Et;if(wt<0||wt===1/0)return;Pt.setup(J,de,et,ue,Je);let un,xt=Xe;if(Je!==null&&(un=Se.get(Je),xt=gt,xt.setIndex(un)),J.isMesh)de.wireframe===!0?(Te.setLineWidth(de.wireframeLinewidth*Q()),xt.setMode(k.LINES)):xt.setMode(k.TRIANGLES);else if(J.isLine){let rt=de.linewidth;rt===void 0&&(rt=1),Te.setLineWidth(rt*Q()),J.isLineSegments?xt.setMode(k.LINES):J.isLineLoop?xt.setMode(k.LINE_LOOP):xt.setMode(k.LINE_STRIP)}else J.isPoints?xt.setMode(k.POINTS):J.isSprite&&xt.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)xt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))xt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const rt=J._multiDrawStarts,ii=J._multiDrawCounts,Ct=J._multiDrawCount,dn=Je?Se.get(Je).bytesPerElement:1,ri=ke.get(de).currentProgram.getUniforms();for(let Zt=0;Zt<Ct;Zt++)ri.setValue(k,"_gl_DrawID",Zt),xt.render(rt[Zt]/dn,ii[Zt])}else if(J.isInstancedMesh)xt.renderInstances(Et,wt,J.count);else if(ue.isInstancedBufferGeometry){const rt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ii=Math.min(ue.instanceCount,rt);xt.renderInstances(Et,wt,ii)}else xt.render(Et,wt)};function bt(N,Z,ue){N.transparent===!0&&N.side===Gn&&N.forceSinglePass===!1?(N.side=bn,N.needsUpdate=!0,ls(N,Z,ue),N.side=Cr,N.needsUpdate=!0,ls(N,Z,ue),N.side=Gn):ls(N,Z,ue)}this.compile=function(N,Z,ue=null){ue===null&&(ue=N),v=ut.get(ue),v.init(Z),D.push(v),ue.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),N!==ue&&N.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(v.pushLight(J),J.castShadow&&v.pushShadow(J))}),v.setupLights();const de=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ue=J.material;if(Ue)if(Array.isArray(Ue))for(let Pe=0;Pe<Ue.length;Pe++){const et=Ue[Pe];bt(et,ue,J),de.add(et)}else bt(Ue,ue,J),de.add(Ue)}),D.pop(),v=null,de},this.compileAsync=function(N,Z,ue=null){const de=this.compile(N,Z,ue);return new Promise(J=>{function Ue(){if(de.forEach(function(Pe){ke.get(Pe).currentProgram.isReady()&&de.delete(Pe)}),de.size===0){J(N);return}setTimeout(Ue,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let An=null;function yn(N){An&&An(N)}function os(){Ai.stop()}function Yi(){Ai.start()}const Ai=new Ug;Ai.setAnimationLoop(yn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(N){An=N,xe.setAnimationLoop(N),N===null?Ai.stop():Ai.start()},xe.addEventListener("sessionstart",os),xe.addEventListener("sessionend",Yi),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(Z),Z=xe.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,Z,B),v=ut.get(N,D.length),v.init(Z),D.push(v),W.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),q.setFromProjectionMatrix(W),ge=this.localClippingEnabled,re=Ae.init(this.clippingPlanes,ge),M=Oe.get(N,L.length),M.init(),L.push(M),xe.enabled===!0&&xe.isPresenting===!0){const Ue=C.xr.getDepthSensingMesh();Ue!==null&&Ci(Ue,Z,-1/0,C.sortObjects)}Ci(N,Z,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(le,I),me=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,me&&it.addToRenderList(M,N),this.info.render.frame++,re===!0&&Ae.beginShadows();const ue=v.state.shadowsArray;je.render(ue,N,Z),re===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=M.opaque,J=M.transmissive;if(v.setupLights(),Z.isArrayCamera){const Ue=Z.cameras;if(J.length>0)for(let Pe=0,et=Ue.length;Pe<et;Pe++){const Je=Ue[Pe];Pr(de,J,N,Je)}me&&it.render(N);for(let Pe=0,et=Ue.length;Pe<et;Pe++){const Je=Ue[Pe];Nr(M,N,Je,Je.viewport)}}else J.length>0&&Pr(de,J,N,Z),me&&it.render(N),Nr(M,N,Z);B!==null&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),N.isScene===!0&&N.onAfterRender(C,N,Z),Pt.resetDefaultState(),P=-1,R=null,D.pop(),D.length>0?(v=D[D.length-1],re===!0&&Ae.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,L.pop(),L.length>0?M=L[L.length-1]:M=null};function Ci(N,Z,ue,de){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLight)v.pushLight(N),N.castShadow&&v.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||q.intersectsSprite(N)){de&&Le.setFromMatrixPosition(N.matrixWorld).applyMatrix4(W);const Pe=ve.update(N),et=N.material;et.visible&&M.push(N,Pe,et,ue,Le.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||q.intersectsObject(N))){const Pe=ve.update(N),et=N.material;if(de&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Le.copy(N.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Le.copy(Pe.boundingSphere.center)),Le.applyMatrix4(N.matrixWorld).applyMatrix4(W)),Array.isArray(et)){const Je=Pe.groups;for(let ft=0,pt=Je.length;ft<pt;ft++){const tt=Je[ft],Et=et[tt.materialIndex];Et&&Et.visible&&M.push(N,Pe,Et,ue,Le.z,tt)}}else et.visible&&M.push(N,Pe,et,ue,Le.z,null)}}const Ue=N.children;for(let Pe=0,et=Ue.length;Pe<et;Pe++)Ci(Ue[Pe],Z,ue,de)}function Nr(N,Z,ue,de){const J=N.opaque,Ue=N.transmissive,Pe=N.transparent;v.setupLightsView(ue),re===!0&&Ae.setGlobalState(C.clippingPlanes,ue),de&&Te.viewport(j.copy(de)),J.length>0&&Ki(J,Z,ue),Ue.length>0&&Ki(Ue,Z,ue),Pe.length>0&&Ki(Pe,Z,ue),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Pr(N,Z,ue,de){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[de.id]===void 0&&(v.state.transmissionRenderTarget[de.id]=new ss(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float")?Qa:$i,minFilter:ns,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ue=v.state.transmissionRenderTarget[de.id],Pe=de.viewport||j;Ue.setSize(Pe.z,Pe.w);const et=C.getRenderTarget();C.setRenderTarget(Ue),C.getClearColor(he),pe=C.getClearAlpha(),pe<1&&C.setClearColor(16777215,.5),C.clear(),me&&it.render(ue);const Je=C.toneMapping;C.toneMapping=Tr;const ft=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),v.setupLightsView(de),re===!0&&Ae.setGlobalState(C.clippingPlanes,de),Ki(N,ue,de),U.updateMultisampleRenderTarget(Ue),U.updateRenderTargetMipmap(Ue),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let tt=0,Et=Z.length;tt<Et;tt++){const Nt=Z[tt],wt=Nt.object,un=Nt.geometry,xt=Nt.material,rt=Nt.group;if(xt.side===Gn&&wt.layers.test(de.layers)){const ii=xt.side;xt.side=bn,xt.needsUpdate=!0,io(wt,ue,de,un,xt,rt),xt.side=ii,xt.needsUpdate=!0,pt=!0}}pt===!0&&(U.updateMultisampleRenderTarget(Ue),U.updateRenderTargetMipmap(Ue))}C.setRenderTarget(et),C.setClearColor(he,pe),ft!==void 0&&(de.viewport=ft),C.toneMapping=Je}function Ki(N,Z,ue){const de=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,Ue=N.length;J<Ue;J++){const Pe=N[J],et=Pe.object,Je=Pe.geometry,ft=de===null?Pe.material:de,pt=Pe.group;et.layers.test(ue.layers)&&io(et,Z,ue,Je,ft,pt)}}function io(N,Z,ue,de,J,Ue){N.onBeforeRender(C,Z,ue,de,J,Ue),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(C,Z,ue,de,N,Ue),J.transparent===!0&&J.side===Gn&&J.forceSinglePass===!1?(J.side=bn,J.needsUpdate=!0,C.renderBufferDirect(ue,Z,de,J,N,Ue),J.side=Cr,J.needsUpdate=!0,C.renderBufferDirect(ue,Z,de,J,N,Ue),J.side=Gn):C.renderBufferDirect(ue,Z,de,J,N,Ue),N.onAfterRender(C,Z,ue,de,J,Ue)}function ls(N,Z,ue){Z.isScene!==!0&&(Z=Ze);const de=ke.get(N),J=v.state.lights,Ue=v.state.shadowsArray,Pe=J.state.version,et=qe.getParameters(N,J.state,Ue,Z,ue),Je=qe.getProgramCacheKey(et);let ft=de.programs;de.environment=N.isMeshStandardMaterial?Z.environment:null,de.fog=Z.fog,de.envMap=(N.isMeshStandardMaterial?se:A).get(N.envMap||de.environment),de.envMapRotation=de.environment!==null&&N.envMap===null?Z.environmentRotation:N.envMapRotation,ft===void 0&&(N.addEventListener("dispose",mt),ft=new Map,de.programs=ft);let pt=ft.get(Je);if(pt!==void 0){if(de.currentProgram===pt&&de.lightsStateVersion===Pe)return xi(N,et),pt}else et.uniforms=qe.getUniforms(N),N.onBeforeCompile(et,C),pt=qe.acquireProgram(et,Je),ft.set(Je,pt),de.uniforms=et.uniforms;const tt=de.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(tt.clippingPlanes=Ae.uniform),xi(N,et),de.needsLights=ic(N),de.lightsStateVersion=Pe,de.needsLights&&(tt.ambientLightColor.value=J.state.ambient,tt.lightProbe.value=J.state.probe,tt.directionalLights.value=J.state.directional,tt.directionalLightShadows.value=J.state.directionalShadow,tt.spotLights.value=J.state.spot,tt.spotLightShadows.value=J.state.spotShadow,tt.rectAreaLights.value=J.state.rectArea,tt.ltc_1.value=J.state.rectAreaLTC1,tt.ltc_2.value=J.state.rectAreaLTC2,tt.pointLights.value=J.state.point,tt.pointLightShadows.value=J.state.pointShadow,tt.hemisphereLights.value=J.state.hemi,tt.directionalShadowMap.value=J.state.directionalShadowMap,tt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,tt.spotShadowMap.value=J.state.spotShadowMap,tt.spotLightMatrix.value=J.state.spotLightMatrix,tt.spotLightMap.value=J.state.spotLightMap,tt.pointShadowMap.value=J.state.pointShadowMap,tt.pointShadowMatrix.value=J.state.pointShadowMatrix),de.currentProgram=pt,de.uniformsList=null,pt}function ro(N){if(N.uniformsList===null){const Z=N.currentProgram.getUniforms();N.uniformsList=Bl.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function xi(N,Z){const ue=ke.get(N);ue.outputColorSpace=Z.outputColorSpace,ue.batching=Z.batching,ue.batchingColor=Z.batchingColor,ue.instancing=Z.instancing,ue.instancingColor=Z.instancingColor,ue.instancingMorph=Z.instancingMorph,ue.skinning=Z.skinning,ue.morphTargets=Z.morphTargets,ue.morphNormals=Z.morphNormals,ue.morphColors=Z.morphColors,ue.morphTargetsCount=Z.morphTargetsCount,ue.numClippingPlanes=Z.numClippingPlanes,ue.numIntersection=Z.numClipIntersection,ue.vertexAlphas=Z.vertexAlphas,ue.vertexTangents=Z.vertexTangents,ue.toneMapping=Z.toneMapping}function so(N,Z,ue,de,J){Z.isScene!==!0&&(Z=Ze),U.resetTextureUnits();const Ue=Z.fog,Pe=de.isMeshStandardMaterial?Z.environment:null,et=B===null?C.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:na,Je=(de.isMeshStandardMaterial?se:A).get(de.envMap||Pe),ft=de.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pt=!!ue.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),tt=!!ue.morphAttributes.position,Et=!!ue.morphAttributes.normal,Nt=!!ue.morphAttributes.color;let wt=Tr;de.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(wt=C.toneMapping);const un=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,xt=un!==void 0?un.length:0,rt=ke.get(de),ii=v.state.lights;if(re===!0&&(ge===!0||N!==R)){const Sn=N===R&&de.id===P;Ae.setState(de,N,Sn)}let Ct=!1;de.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==ii.state.version||rt.outputColorSpace!==et||J.isBatchedMesh&&rt.batching===!1||!J.isBatchedMesh&&rt.batching===!0||J.isBatchedMesh&&rt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&rt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&rt.instancing===!1||!J.isInstancedMesh&&rt.instancing===!0||J.isSkinnedMesh&&rt.skinning===!1||!J.isSkinnedMesh&&rt.skinning===!0||J.isInstancedMesh&&rt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&rt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&rt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&rt.instancingMorph===!1&&J.morphTexture!==null||rt.envMap!==Je||de.fog===!0&&rt.fog!==Ue||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ae.numPlanes||rt.numIntersection!==Ae.numIntersection)||rt.vertexAlphas!==ft||rt.vertexTangents!==pt||rt.morphTargets!==tt||rt.morphNormals!==Et||rt.morphColors!==Nt||rt.toneMapping!==wt||rt.morphTargetsCount!==xt)&&(Ct=!0):(Ct=!0,rt.__version=de.version);let dn=rt.currentProgram;Ct===!0&&(dn=ls(de,Z,J));let ri=!1,Zt=!1,vi=!1;const Ut=dn.getUniforms(),$n=rt.uniforms;if(Te.useProgram(dn.program)&&(ri=!0,Zt=!0,vi=!0),de.id!==P&&(P=de.id,Zt=!0),ri||R!==N){Te.buffers.depth.getReversed()?(oe.copy(N.projectionMatrix),Q_(oe),ey(oe),Ut.setValue(k,"projectionMatrix",oe)):Ut.setValue(k,"projectionMatrix",N.projectionMatrix),Ut.setValue(k,"viewMatrix",N.matrixWorldInverse);const qn=Ut.map.cameraPosition;qn!==void 0&&qn.setValue(k,ye.setFromMatrixPosition(N.matrixWorld)),De.logarithmicDepthBuffer&&Ut.setValue(k,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&Ut.setValue(k,"isOrthographic",N.isOrthographicCamera===!0),R!==N&&(R=N,Zt=!0,vi=!0)}if(J.isSkinnedMesh){Ut.setOptional(k,J,"bindMatrix"),Ut.setOptional(k,J,"bindMatrixInverse");const Sn=J.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ut.setValue(k,"boneTexture",Sn.boneTexture,U))}J.isBatchedMesh&&(Ut.setOptional(k,J,"batchingTexture"),Ut.setValue(k,"batchingTexture",J._matricesTexture,U),Ut.setOptional(k,J,"batchingIdTexture"),Ut.setValue(k,"batchingIdTexture",J._indirectTexture,U),Ut.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&Ut.setValue(k,"batchingColorTexture",J._colorsTexture,U));const Ri=ue.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&lt.update(J,ue,dn),(Zt||rt.receiveShadow!==J.receiveShadow)&&(rt.receiveShadow=J.receiveShadow,Ut.setValue(k,"receiveShadow",J.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&($n.envMap.value=Je,$n.flipEnvMap.value=Je.isCubeTexture&&Je.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&Z.environment!==null&&($n.envMapIntensity.value=Z.environmentIntensity),Zt&&(Ut.setValue(k,"toneMappingExposure",C.toneMappingExposure),rt.needsLights&&ao($n,vi),Ue&&de.fog===!0&&Ne.refreshFogUniforms($n,Ue),Ne.refreshMaterialUniforms($n,de,V,fe,v.state.transmissionRenderTarget[N.id]),Bl.upload(k,ro(rt),$n,U)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Bl.upload(k,ro(rt),$n,U),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&Ut.setValue(k,"center",J.center),Ut.setValue(k,"modelViewMatrix",J.modelViewMatrix),Ut.setValue(k,"normalMatrix",J.normalMatrix),Ut.setValue(k,"modelMatrix",J.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const Sn=de.uniformsGroups;for(let qn=0,Cn=Sn.length;qn<Cn;qn++){const oo=Sn[qn];K.update(oo,dn),K.bind(oo,dn)}}return dn}function ao(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function ic(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(N,Z,ue){ke.get(N.texture).__webglTexture=Z,ke.get(N.depthTexture).__webglTexture=ue;const de=ke.get(N);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=ue===void 0,de.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,Z){const ue=ke.get(N);ue.__webglFramebuffer=Z,ue.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(N,Z=0,ue=0){B=N,F=Z,O=ue;let de=!0,J=null,Ue=!1,Pe=!1;if(N){const Je=ke.get(N);if(Je.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(k.FRAMEBUFFER,null),de=!1;else if(Je.__webglFramebuffer===void 0)U.setupRenderTarget(N);else if(Je.__hasExternalTextures)U.rebindTextures(N,ke.get(N.texture).__webglTexture,ke.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const tt=N.depthTexture;if(Je.__boundDepthTexture!==tt){if(tt!==null&&ke.has(tt)&&(N.width!==tt.image.width||N.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(N)}}const ft=N.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Pe=!0);const pt=ke.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(pt[Z])?J=pt[Z][ue]:J=pt[Z],Ue=!0):N.samples>0&&U.useMultisampledRTT(N)===!1?J=ke.get(N).__webglMultisampledFramebuffer:Array.isArray(pt)?J=pt[ue]:J=pt,j.copy(N.viewport),ne.copy(N.scissor),ee=N.scissorTest}else j.copy(b).multiplyScalar(V).floor(),ne.copy($).multiplyScalar(V).floor(),ee=_e;if(Te.bindFramebuffer(k.FRAMEBUFFER,J)&&de&&Te.drawBuffers(N,J),Te.viewport(j),Te.scissor(ne),Te.setScissorTest(ee),Ue){const Je=ke.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Je.__webglTexture,ue)}else if(Pe){const Je=ke.get(N.texture),ft=Z||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Je.__webglTexture,ue||0,ft)}P=-1},this.readRenderTargetPixels=function(N,Z,ue,de,J,Ue,Pe){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Pe!==void 0&&(et=et[Pe]),et){Te.bindFramebuffer(k.FRAMEBUFFER,et);try{const Je=N.texture,ft=Je.format,pt=Je.type;if(!De.textureFormatReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-de&&ue>=0&&ue<=N.height-J&&k.readPixels(Z,ue,de,J,dt.convert(ft),dt.convert(pt),Ue)}finally{const Je=B!==null?ke.get(B).__webglFramebuffer:null;Te.bindFramebuffer(k.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(N,Z,ue,de,J,Ue,Pe){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=ke.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Pe!==void 0&&(et=et[Pe]),et){const Je=N.texture,ft=Je.format,pt=Je.type;if(!De.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=N.width-de&&ue>=0&&ue<=N.height-J){Te.bindFramebuffer(k.FRAMEBUFFER,et);const tt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.bufferData(k.PIXEL_PACK_BUFFER,Ue.byteLength,k.STREAM_READ),k.readPixels(Z,ue,de,J,dt.convert(ft),dt.convert(pt),0);const Et=B!==null?ke.get(B).__webglFramebuffer:null;Te.bindFramebuffer(k.FRAMEBUFFER,Et);const Nt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await J_(k,Nt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ue),k.deleteBuffer(tt),k.deleteSync(Nt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(N,Z=null,ue=0){N.isTexture!==!0&&(Wa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,N=arguments[1]);const de=Math.pow(2,-ue),J=Math.floor(N.image.width*de),Ue=Math.floor(N.image.height*de),Pe=Z!==null?Z.x:0,et=Z!==null?Z.y:0;U.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,ue,0,0,Pe,et,J,Ue),Te.unbindTexture()},this.copyTextureToTexture=function(N,Z,ue=null,de=null,J=0){N.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,N=arguments[1],Z=arguments[2],J=arguments[3]||0,ue=null);let Ue,Pe,et,Je,ft,pt,tt,Et,Nt;const wt=N.isCompressedTexture?N.mipmaps[J]:N.image;ue!==null?(Ue=ue.max.x-ue.min.x,Pe=ue.max.y-ue.min.y,et=ue.isBox3?ue.max.z-ue.min.z:1,Je=ue.min.x,ft=ue.min.y,pt=ue.isBox3?ue.min.z:0):(Ue=wt.width,Pe=wt.height,et=wt.depth||1,Je=0,ft=0,pt=0),de!==null?(tt=de.x,Et=de.y,Nt=de.z):(tt=0,Et=0,Nt=0);const un=dt.convert(Z.format),xt=dt.convert(Z.type);let rt;Z.isData3DTexture?(U.setTexture3D(Z,0),rt=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(U.setTexture2DArray(Z,0),rt=k.TEXTURE_2D_ARRAY):(U.setTexture2D(Z,0),rt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const ii=k.getParameter(k.UNPACK_ROW_LENGTH),Ct=k.getParameter(k.UNPACK_IMAGE_HEIGHT),dn=k.getParameter(k.UNPACK_SKIP_PIXELS),ri=k.getParameter(k.UNPACK_SKIP_ROWS),Zt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,wt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,wt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Je),k.pixelStorei(k.UNPACK_SKIP_ROWS,ft),k.pixelStorei(k.UNPACK_SKIP_IMAGES,pt);const vi=N.isDataArrayTexture||N.isData3DTexture,Ut=Z.isDataArrayTexture||Z.isData3DTexture;if(N.isRenderTargetTexture||N.isDepthTexture){const $n=ke.get(N),Ri=ke.get(Z),Sn=ke.get($n.__renderTarget),qn=ke.get(Ri.__renderTarget);Te.bindFramebuffer(k.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Te.bindFramebuffer(k.DRAW_FRAMEBUFFER,qn.__webglFramebuffer);for(let Cn=0;Cn<et;Cn++)vi&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(N).__webglTexture,J,pt+Cn),N.isDepthTexture?(Ut&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(Z).__webglTexture,J,Nt+Cn),k.blitFramebuffer(Je,ft,Ue,Pe,tt,Et,Ue,Pe,k.DEPTH_BUFFER_BIT,k.NEAREST)):Ut?k.copyTexSubImage3D(rt,J,tt,Et,Nt+Cn,Je,ft,Ue,Pe):k.copyTexSubImage2D(rt,J,tt,Et,Nt+Cn,Je,ft,Ue,Pe);Te.bindFramebuffer(k.READ_FRAMEBUFFER,null),Te.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Ut?N.isDataTexture||N.isData3DTexture?k.texSubImage3D(rt,J,tt,Et,Nt,Ue,Pe,et,un,xt,wt.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(rt,J,tt,Et,Nt,Ue,Pe,et,un,wt.data):k.texSubImage3D(rt,J,tt,Et,Nt,Ue,Pe,et,un,xt,wt):N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,J,tt,Et,Ue,Pe,un,xt,wt.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,J,tt,Et,wt.width,wt.height,un,wt.data):k.texSubImage2D(k.TEXTURE_2D,J,tt,Et,Ue,Pe,un,xt,wt);k.pixelStorei(k.UNPACK_ROW_LENGTH,ii),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ct),k.pixelStorei(k.UNPACK_SKIP_PIXELS,dn),k.pixelStorei(k.UNPACK_SKIP_ROWS,ri),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zt),J===0&&Z.generateMipmaps&&k.generateMipmap(rt),Te.unbindTexture()},this.copyTextureToTexture3D=function(N,Z,ue=null,de=null,J=0){return N.isTexture!==!0&&(Wa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ue=arguments[0]||null,de=arguments[1]||null,N=arguments[2],Z=arguments[3],J=arguments[4]||0),Wa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(N,Z,ue,de,J)},this.initRenderTarget=function(N){ke.get(N).__webglFramebuffer===void 0&&U.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?U.setTextureCube(N,0):N.isData3DTexture?U.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?U.setTexture2DArray(N,0):U.setTexture2D(N,0),Te.unbindTexture()},this.resetState=function(){F=0,O=0,B=null,Te.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}class wf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(e),this.density=t}clone(){return new wf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class uE extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hg extends ra{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $l=new X,ql=new X,a0=new Ht,Va=new Ag,Pl=new ec,xd=new X,o0=new X;class dE extends en{constructor(e=new Fn,t=new Hg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)$l.fromBufferAttribute(t,o-1),ql.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=$l.distanceTo(ql);e.setAttribute("lineDistance",new Ot(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(o),Pl.radius+=l,e.ray.intersectsSphere(Pl)===!1)return;a0.copy(o).invert(),Va.copy(e.ray).applyMatrix4(a0);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,g=r.index,S=r.attributes.position;if(g!==null){const _=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let E=_,M=w-1;E<M;E+=p){const v=g.getX(E),L=g.getX(E+1),D=Ll(this,e,Va,f,v,L);D&&t.push(D)}if(this.isLineLoop){const E=g.getX(w-1),M=g.getX(_),v=Ll(this,e,Va,f,E,M);v&&t.push(v)}}else{const _=Math.max(0,u.start),w=Math.min(S.count,u.start+u.count);for(let E=_,M=w-1;E<M;E+=p){const v=Ll(this,e,Va,f,E,E+1);v&&t.push(v)}if(this.isLineLoop){const E=Ll(this,e,Va,f,w-1,_);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Ll(s,e,t,r,o,l){const u=s.geometry.attributes.position;if($l.fromBufferAttribute(u,o),ql.fromBufferAttribute(u,l),t.distanceSqToSegment($l,ql,xd,o0)>r)return;xd.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(xd);if(!(f<e.near||f>e.far))return{distance:f,point:o0.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const l0=new X,c0=new X;class fE extends dE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)l0.fromBufferAttribute(t,o),c0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+l0.distanceTo(c0);e.setAttribute("lineDistance",new Ot(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ef extends Tn{constructor(e,t,r,o,l,u,d,f,p){super(e,t,r,o,l,u,d,f,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,f=l-1,p;for(;d<=f;)if(o=Math.floor(d+(f-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)f=o-1;else{f=o;break}if(o=f,r[o]===u)return o/(l-1);const g=r[o],S=r[o+1]-g,_=(u-g)/S;return(o+_)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),f=t||(u.isVector2?new ct:new X);return f.copy(d).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new X,o=[],l=[],u=[],d=new X,f=new Ht;for(let _=0;_<=e;_++){const w=_/e;o[_]=this.getTangentAt(w,new X)}l[0]=new X,u[0]=new X;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),y=Math.abs(o[0].y),S=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),y<=p&&(p=y,r.set(0,1,0)),S<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),u[_]=u[_-1].clone(),d.crossVectors(o[_-1],o[_]),d.length()>Number.EPSILON){d.normalize();const w=Math.acos(vn(o[_-1].dot(o[_]),-1,1));l[_].applyMatrix4(f.makeRotationAxis(d,w))}u[_].crossVectors(o[_],l[_])}if(t===!0){let _=Math.acos(vn(l[0].dot(l[e]),-1,1));_/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(_=-_);for(let w=1;w<=e;w++)l[w].applyMatrix4(f.makeRotationAxis(o[w],_*w)),u[w].crossVectors(o[w],l[w])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vg extends qi{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=f}getPoint(e,t=new ct){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),y=Math.sin(this.aRotation),S=f-this.aX,_=p-this.aY;f=S*g-_*y+this.aX,p=S*y+_*g+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class hE extends Vg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function bf(){let s=0,e=0,t=0,r=0;function o(l,u,d,f){s=l,e=d,t=-3*l+3*u-2*d-f,r=2*l-2*u+d+f}return{initCatmullRom:function(l,u,d,f,p){o(u,d,p*(d-l),p*(f-u))},initNonuniformCatmullRom:function(l,u,d,f,p,g,y){let S=(u-l)/p-(d-l)/(p+g)+(d-u)/g,_=(d-u)/g-(f-u)/(g+y)+(f-d)/y;S*=g,_*=g,o(u,d,S,_)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const Dl=new X,vd=new bf,_d=new bf,yd=new bf;class Gg extends qi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new X){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),f=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:f===0&&d===l-1&&(d=l-2,f=1);let p,g;this.closed||d>0?p=o[(d-1)%l]:(Dl.subVectors(o[0],o[1]).add(o[0]),p=Dl);const y=o[d%l],S=o[(d+1)%l];if(this.closed||d+2<l?g=o[(d+2)%l]:(Dl.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let w=Math.pow(p.distanceToSquared(y),_),E=Math.pow(y.distanceToSquared(S),_),M=Math.pow(S.distanceToSquared(g),_);E<1e-4&&(E=1),w<1e-4&&(w=E),M<1e-4&&(M=E),vd.initNonuniformCatmullRom(p.x,y.x,S.x,g.x,w,E,M),_d.initNonuniformCatmullRom(p.y,y.y,S.y,g.y,w,E,M),yd.initNonuniformCatmullRom(p.z,y.z,S.z,g.z,w,E,M)}else this.curveType==="catmullrom"&&(vd.initCatmullRom(p.x,y.x,S.x,g.x,this.tension),_d.initCatmullRom(p.y,y.y,S.y,g.y,this.tension),yd.initCatmullRom(p.z,y.z,S.z,g.z,this.tension));return r.set(vd.calc(f),_d.calc(f),yd.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function u0(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,f=s*d;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*d+l*s+t}function pE(s,e){const t=1-s;return t*t*e}function mE(s,e){return 2*(1-s)*s*e}function gE(s,e){return s*s*e}function $a(s,e,t,r){return pE(s,e)+mE(s,t)+gE(s,r)}function xE(s,e){const t=1-s;return t*t*t*e}function vE(s,e){const t=1-s;return 3*t*t*s*e}function _E(s,e){return 3*(1-s)*s*s*e}function yE(s,e){return s*s*s*e}function qa(s,e,t,r,o){return xE(s,e)+vE(s,t)+_E(s,r)+yE(s,o)}class SE extends qi{constructor(e=new ct,t=new ct,r=new ct,o=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new ct){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(qa(e,o.x,l.x,u.x,d.x),qa(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ME extends qi{constructor(e=new X,t=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(qa(e,o.x,l.x,u.x,d.x),qa(e,o.y,l.y,u.y,d.y),qa(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wE extends qi{constructor(e=new ct,t=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ct){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ct){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class EE extends qi{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class bE extends qi{constructor(e=new ct,t=new ct,r=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ct){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set($a(e,o.x,l.x,u.x),$a(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wg extends qi{constructor(e=new X,t=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set($a(e,o.x,l.x,u.x),$a(e,o.y,l.y,u.y),$a(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TE extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ct){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,f=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],y=o[u>o.length-3?o.length-1:u+2];return r.set(u0(d,f.x,p.x,g.x,y.x),u0(d,f.y,p.y,g.y,y.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new ct().fromArray(o))}return this}}var AE=Object.freeze({__proto__:null,ArcCurve:hE,CatmullRomCurve3:Gg,CubicBezierCurve:SE,CubicBezierCurve3:ME,EllipseCurve:Vg,LineCurve:wE,LineCurve3:EE,QuadraticBezierCurve:bE,QuadraticBezierCurve3:Wg,SplineCurve:TE});class kt extends Fn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const g=[],y=[],S=[],_=[];let w=0;const E=[],M=r/2;let v=0;L(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new Ot(y,3)),this.setAttribute("normal",new Ot(S,3)),this.setAttribute("uv",new Ot(_,2));function L(){const C=new X,H=new X;let F=0;const O=(t-e)/r;for(let B=0;B<=l;B++){const P=[],R=B/l,j=R*(t-e)+e;for(let ne=0;ne<=o;ne++){const ee=ne/o,he=ee*f+d,pe=Math.sin(he),te=Math.cos(he);H.x=j*pe,H.y=-R*r+M,H.z=j*te,y.push(H.x,H.y,H.z),C.set(pe,O,te).normalize(),S.push(C.x,C.y,C.z),_.push(ee,1-R),P.push(w++)}E.push(P)}for(let B=0;B<o;B++)for(let P=0;P<l;P++){const R=E[P][B],j=E[P+1][B],ne=E[P+1][B+1],ee=E[P][B+1];(e>0||P!==0)&&(g.push(R,j,ee),F+=3),(t>0||P!==l-1)&&(g.push(j,ne,ee),F+=3)}p.addGroup(v,F,0),v+=F}function D(C){const H=w,F=new ct,O=new X;let B=0;const P=C===!0?e:t,R=C===!0?1:-1;for(let ne=1;ne<=o;ne++)y.push(0,M*R,0),S.push(0,R,0),_.push(.5,.5),w++;const j=w;for(let ne=0;ne<=o;ne++){const he=ne/o*f+d,pe=Math.cos(he),te=Math.sin(he);O.x=P*te,O.y=M*R,O.z=P*pe,y.push(O.x,O.y,O.z),S.push(0,R,0),F.x=pe*.5+.5,F.y=te*.5*R+.5,_.push(F.x,F.y),w++}for(let ne=0;ne<o;ne++){const ee=H+ne,he=j+ne;C===!0?g.push(he,he+1,ee):g.push(he+1,he,ee),B+=3}p.addGroup(v,B,C===!0?1:2),v+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tf extends Fn{constructor(e=.5,t=1,r=32,o=1,l=0,u=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:r,phiSegments:o,thetaStart:l,thetaLength:u},r=Math.max(3,r),o=Math.max(1,o);const d=[],f=[],p=[],g=[];let y=e;const S=(t-e)/o,_=new X,w=new ct;for(let E=0;E<=o;E++){for(let M=0;M<=r;M++){const v=l+M/r*u;_.x=y*Math.cos(v),_.y=y*Math.sin(v),f.push(_.x,_.y,_.z),p.push(0,0,1),w.x=(_.x/t+1)/2,w.y=(_.y/t+1)/2,g.push(w.x,w.y)}y+=S}for(let E=0;E<o;E++){const M=E*(r+1);for(let v=0;v<r;v++){const L=v+M,D=L,C=L+r+1,H=L+r+2,F=L+1;d.push(D,C,F),d.push(C,H,F)}}this.setIndex(d),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(p,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class as extends Fn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let p=0;const g=[],y=new X,S=new X,_=[],w=[],E=[],M=[];for(let v=0;v<=r;v++){const L=[],D=v/r;let C=0;v===0&&u===0?C=.5/t:v===r&&f===Math.PI&&(C=-.5/t);for(let H=0;H<=t;H++){const F=H/t;y.x=-e*Math.cos(o+F*l)*Math.sin(u+D*d),y.y=e*Math.cos(u+D*d),y.z=e*Math.sin(o+F*l)*Math.sin(u+D*d),w.push(y.x,y.y,y.z),S.copy(y).normalize(),E.push(S.x,S.y,S.z),M.push(F+C,1-D),L.push(p++)}g.push(L)}for(let v=0;v<r;v++)for(let L=0;L<t;L++){const D=g[v][L+1],C=g[v][L],H=g[v+1][L],F=g[v+1][L+1];(v!==0||u>0)&&_.push(D,C,F),(v!==r-1||f<Math.PI)&&_.push(C,H,F)}this.setIndex(_),this.setAttribute("position",new Ot(w,3)),this.setAttribute("normal",new Ot(E,3)),this.setAttribute("uv",new Ot(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Za extends Fn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],f=[],p=[],g=new X,y=new X,S=new X;for(let _=0;_<=r;_++)for(let w=0;w<=o;w++){const E=w/o*l,M=_/r*Math.PI*2;y.x=(e+t*Math.cos(M))*Math.cos(E),y.y=(e+t*Math.cos(M))*Math.sin(E),y.z=t*Math.sin(M),d.push(y.x,y.y,y.z),g.x=e*Math.cos(E),g.y=e*Math.sin(E),S.subVectors(y,g).normalize(),f.push(S.x,S.y,S.z),p.push(w/o),p.push(_/r)}for(let _=1;_<=r;_++)for(let w=1;w<=o;w++){const E=(o+1)*_+w-1,M=(o+1)*(_-1)+w-1,v=(o+1)*(_-1)+w,L=(o+1)*_+w;u.push(E,M,L),u.push(M,v,L)}this.setIndex(u),this.setAttribute("position",new Ot(d,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Af extends Fn{constructor(e=new Wg(new X(-1,-1,0),new X(-1,1,0),new X(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new X,f=new X,p=new ct;let g=new X;const y=[],S=[],_=[],w=[];E(),this.setIndex(w),this.setAttribute("position",new Ot(y,3)),this.setAttribute("normal",new Ot(S,3)),this.setAttribute("uv",new Ot(_,2));function E(){for(let D=0;D<t;D++)M(D);M(l===!1?t:0),L(),v()}function M(D){g=e.getPointAt(D/t,g);const C=u.normals[D],H=u.binormals[D];for(let F=0;F<=o;F++){const O=F/o*Math.PI*2,B=Math.sin(O),P=-Math.cos(O);f.x=P*C.x+B*H.x,f.y=P*C.y+B*H.y,f.z=P*C.z+B*H.z,f.normalize(),S.push(f.x,f.y,f.z),d.x=g.x+r*f.x,d.y=g.y+r*f.y,d.z=g.z+r*f.z,y.push(d.x,d.y,d.z)}}function v(){for(let D=1;D<=t;D++)for(let C=1;C<=o;C++){const H=(o+1)*(D-1)+(C-1),F=(o+1)*D+(C-1),O=(o+1)*D+C,B=(o+1)*(D-1)+C;w.push(H,F,B),w.push(F,O,B)}}function L(){for(let D=0;D<=t;D++)for(let C=0;C<=o;C++)p.x=D/t,p.y=C/o,_.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Af(new AE[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class wr extends ra{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mg,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nc extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Sd=new Ht,d0=new X,f0=new X;class Cf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sf,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;d0.setFromMatrixPosition(e.matrixWorld),t.position.copy(d0),f0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(f0),t.updateMatrixWorld(),Sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class CE extends Cf{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=Gl*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class RE extends nc{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new CE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const h0=new Ht,Ga=new X,Md=new X;class NE extends Cf{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new It(2,1,1,1),new It(0,1,1,1),new It(3,1,1,1),new It(1,1,1,1),new It(3,0,1,1),new It(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ga),Md.copy(r.position),Md.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Md),r.updateMatrixWorld(),o.makeTranslation(-Ga.x,-Ga.y,-Ga.z),h0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(h0)}}class PE extends nc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new NE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class LE extends Cf{constructor(){super(new kg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mr extends nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new LE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Il extends nc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class DE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=p0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=p0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function p0(){return performance.now()}class IE extends fE{constructor(e=10,t=10,r=4473924,o=8947848){r=new yt(r),o=new yt(o);const l=t/2,u=e/t,d=e/2,f=[],p=[];for(let S=0,_=0,w=-d;S<=t;S++,w+=u){f.push(-d,0,w,d,0,w),f.push(w,0,-d,w,0,d);const E=S===l?r:o;E.toArray(p,_),_+=3,E.toArray(p,_),_+=3,E.toArray(p,_),_+=3,E.toArray(p,_),_+=3}const g=new Fn;g.setAttribute("position",new Ot(f,3)),g.setAttribute("color",new Ot(p,3));const y=new Hg({vertexColors:!0,toneMapped:!1});super(g,y),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);function Ja(s,e=.03,t=4){const r=s.attributes.position;for(let o=0;o<r.count;o++){const l=r.getY(o),u=r.getX(o),d=r.getZ(o),f=Math.sin(l*t+u*2)*e,p=Math.cos(l*(t*1.5)+d*3)*(e*.6);r.setZ(o,d+f+p)}return s.computeVertexNormals(),s}function m0(s){const e=new Wn;e.name="garment_hoodie";const t=new kt(.85,.95,2.1,32,24,!0),r=t.attributes.position;for(let te=0;te<r.count;te++){const fe=r.getY(te),V=r.getX(te),le=r.getZ(te),I=(fe+1.05)/2.1,b=1+Math.sin(I*Math.PI)*.12;r.setX(te,V*b),r.setZ(te,le*.75+(I>.5?(I-.5)*.15:0))}Ja(t,.02,5);const o=new Be(t,s.primary);o.castShadow=!0,o.receiveShadow=!0,o.name="primary_mesh",e.add(o);const l=new kt(.72,.76,.6,24,6,!1,-Math.PI*.35,Math.PI*.7),u=new Be(l,s.accent||s.primary);u.position.set(0,-.3,.03),u.scale.set(1.03,1,.85),u.castShadow=!0,u.name="pocket_mesh",e.add(u);const d=new kt(.025,.025,.62,12),f=new Be(d,s.accent||s.primary);f.position.set(-.55,-.3,.55),f.rotation.z=.25,e.add(f);const p=new Be(d,s.accent||s.primary);p.position.set(.55,-.3,.55),p.rotation.z=-.25,e.add(p);const g=new kt(.92,.9,.22,32),y=new Be(g,s.accent||s.primary);y.position.set(0,-1.15,0),y.scale.set(1,1,.75),y.castShadow=!0,y.name="accent_mesh_hem",e.add(y);const S=new kt(.38,.22,1.7,24,16);Ja(S,.025,4);const _=new Be(S,s.primary);_.position.set(-1.18,.15,0),_.rotation.z=.42,_.rotation.y=.1,_.castShadow=!0,e.add(_);const w=new kt(.23,.21,.28,20),E=new Be(w,s.accent||s.primary);E.position.set(-1.6,-.55,0),E.rotation.z=.42,E.name="accent_mesh_cuff_l",e.add(E);const M=new Be(S.clone(),s.primary);M.position.set(1.18,.15,0),M.rotation.z=-.42,M.rotation.y=-.1,M.castShadow=!0,e.add(M);const v=new Be(w,s.accent||s.primary);v.position.set(1.6,-.55,0),v.rotation.z=-.42,v.name="accent_mesh_cuff_r",e.add(v);const L=new as(.68,32,24,0,Math.PI*2,0,Math.PI*.72),D=L.attributes.position;for(let te=0;te<D.count;te++){const fe=D.getZ(te);fe>.25&&D.setZ(te,.25-Math.sin((fe-.25)*2)*.1)}L.computeVertexNormals();const C=new Be(L,s.accent||s.primary);C.position.set(0,1.35,-.15),C.rotation.x=-.15,C.scale.set(1,1.25,1.15),C.castShadow=!0,C.name="hood_mesh",e.add(C);const H=new as(.65,24,16,0,Math.PI*2,0,Math.PI*.7),F=new Be(H,s.primary);F.position.set(0,1.35,-.15),F.rotation.x=-.15,F.scale.set(.98,1.22,1.12),F.material.side=bn,e.add(F);const O=te=>{const fe=new Gg([new X(te*.3,.95,.42),new X(te*.35,.6,.46),new X(te*.28,.2,.48),new X(te*.32,-.15,.5)]),V=new Af(fe,20,.022,8,!1),le=new Be(V,s.cords);le.name="cord_mesh",e.add(le);const I=new kt(.028,.028,.14,12),b=new Be(I,s.hardware);b.position.set(te*.32,-.18,.5),b.name="aglet_mesh",e.add(b)};O(-1),O(1);const B=new _n(.85,.85,12,12),P=B.attributes.position;for(let te=0;te<P.count;te++){const fe=P.getX(te);P.setZ(te,-fe*fe*.15+.015)}B.computeVertexNormals();const R=new Be(B,s.decal);R.position.set(0,.4,.54),R.name="decal_front",e.add(R);const j=new _n(.9,.9,12,12),ne=j.attributes.position;for(let te=0;te<ne.count;te++){const fe=ne.getX(te);ne.setZ(te,fe*fe*.15+.015)}j.computeVertexNormals();const ee=new Be(j,s.decal);ee.position.set(0,.35,-.53),ee.rotation.y=Math.PI,ee.name="decal_back",e.add(ee);const he=new _n(.35,.35),pe=new Be(he,s.decal);return pe.position.set(-.35,.55,.52),pe.rotation.y=.2,pe.name="decal_chest_left",e.add(pe),e}function UE(s){const e=new Wn;e.name="garment_tshirt";const t=new kt(.82,.88,2.3,32,24,!0),r=t.attributes.position;for(let L=0;L<r.count;L++){const D=r.getY(L),C=r.getX(L),H=r.getZ(L),F=(D+1.15)/2.3,O=1+Math.sin(F*Math.PI)*.1;r.setX(L,C*O),r.setZ(L,H*.68+(F>.5?(F-.5)*.12:0))}Ja(t,.02,5.5);const o=new Be(t,s.primary);o.castShadow=!0,o.receiveShadow=!0,e.add(o);const l=new Za(.36,.065,16,32),u=new Be(l,s.accent||s.primary);u.position.set(0,1.15,.05),u.rotation.x=Math.PI*.45,u.castShadow=!0,u.name="collar_mesh",e.add(u);const d=new kt(.34,.3,.85,24),f=new Be(d,s.primary);f.position.set(-1.05,.7,0),f.rotation.z=.65,f.rotation.y=.1,f.castShadow=!0,e.add(f);const p=new Be(d.clone(),s.primary);p.position.set(1.05,.7,0),p.rotation.z=-.65,p.rotation.y=-.1,p.castShadow=!0,e.add(p);const g=new Za(.88,.028,12,32),y=new Be(g,s.accent||s.primary);y.position.set(0,-1.15,0),y.rotation.x=Math.PI/2,y.scale.set(1,.7,1),e.add(y);const S=new _n(.85,.85),_=new Be(S,s.decal);_.position.set(0,.3,.48),_.name="decal_front",e.add(_);const w=new _n(.9,.9),E=new Be(w,s.decal);E.position.set(0,.3,-.48),E.rotation.y=Math.PI,E.name="decal_back",e.add(E);const M=new _n(.32,.32),v=new Be(M,s.decal);return v.position.set(-.32,.48,.46),v.rotation.y=.18,v.name="decal_chest_left",e.add(v),e}function kE(s){const e=new Wn;e.name="garment_jacket";const t=new kt(.88,.92,2.2,32,24,!0),r=t.attributes.position;for(let j=0;j<r.count;j++){const ne=r.getY(j),ee=r.getX(j),he=r.getZ(j),pe=(ne+1.1)/2.2;r.setX(j,ee*(1+Math.sin(pe*Math.PI)*.14)),r.setZ(j,he*.75+(pe>.4?(pe-.4)*.18:0))}Ja(t,.02,6);const o=new Be(t,s.primary);o.castShadow=!0,e.add(o);const l=new kt(.42,.48,.55,32),u=new Be(l,s.accent||s.primary);u.position.set(0,1.35,.05),u.scale.set(1,1,.85),u.castShadow=!0,e.add(u);const d=new Xn(.06,2.2,.03),f=new Be(d,s.accent);f.position.set(0,0,.54),e.add(f);const p=new Xn(.045,.18,.05),g=new Be(p,s.hardware);g.position.set(0,.4,.57),e.add(g);const y=new Xn(.36,.42,.05),S=new Be(y,s.accent||s.primary);S.position.set(-.42,.35,.5),S.rotation.y=.25,e.add(S);const _=new Be(y,s.accent||s.primary);_.position.set(.42,.35,.5),_.rotation.y=-.25,e.add(_);const w=new kt(.36,.24,1.8,24),E=new Be(w,s.primary);E.position.set(-1.22,.15,0),E.rotation.z=.4,e.add(E);const M=new kt(.28,.27,.15,24),v=new Be(M,s.cords||s.accent);v.position.set(-1.38,-.2,0),v.rotation.z=.4,e.add(v);const L=new Be(w.clone(),s.primary);L.position.set(1.22,.15,0),L.rotation.z=-.4,e.add(L);const D=new Be(M,s.cords||s.accent);D.position.set(1.38,-.2,0),D.rotation.z=-.4,e.add(D);const C=new kt(.25,.23,.22,20),H=new Be(C,s.accent);H.position.set(-1.62,-.65,0),H.rotation.z=.4,e.add(H);const F=new Be(C,s.accent);F.position.set(1.62,-.65,0),F.rotation.z=-.4,e.add(F);const O=new _n(.9,.9),B=new Be(O,s.decal);B.position.set(0,.35,-.55),B.rotation.y=Math.PI,B.name="decal_back",e.add(B);const P=new _n(.7,.7),R=new Be(P,s.decal);return R.position.set(.38,.35,.54),R.rotation.y=-.2,R.name="decal_front",e.add(R),e}function FE(s){const e=new Wn;e.name="garment_blazer";const t=new kt(.85,.9,2.3,32,24,!0),r=t.attributes.position;for(let D=0;D<r.count;D++){const C=r.getY(D),H=r.getX(D),F=r.getZ(D),O=(C+1.15)/2.3,B=1-Math.sin(O*Math.PI*.8)*.1;r.setX(D,H*B*1.1),r.setZ(D,F*.75)}const o=new Be(t,s.primary);o.castShadow=!0,e.add(o);const l=new Xn(.38,1.1,.05),u=new Be(l,s.accent||s.primary);u.position.set(-.35,.7,.46),u.rotation.set(-.15,.35,-.2),u.castShadow=!0,e.add(u);const d=new Be(l,s.accent||s.primary);d.position.set(.35,.7,.46),d.rotation.set(-.15,-.35,.2),d.castShadow=!0,e.add(d);const f=new kt(.045,.045,.02,16),p=new Be(f,s.hardware);p.position.set(0,-.1,.52),p.rotation.x=Math.PI/2,e.add(p);const g=new Be(f,s.hardware);g.position.set(0,-.4,.52),g.rotation.x=Math.PI/2,e.add(g);const y=new Xn(.38,.1,.04),S=new Be(y,s.primary);S.position.set(-.52,-.45,.45),S.rotation.y=.3,e.add(S);const _=new Be(y,s.primary);_.position.set(.52,-.45,.45),_.rotation.y=-.3,e.add(_);const w=new kt(.35,.22,1.8,24),E=new Be(w,s.primary);E.position.set(-1.18,.18,0),E.rotation.z=.35,e.add(E);const M=new Be(w.clone(),s.primary);M.position.set(1.18,.18,0),M.rotation.z=-.35,e.add(M);const v=new _n(.35,.35),L=new Be(v,s.decal);return L.position.set(-.48,.45,.48),L.rotation.y=.3,L.name="decal_chest_left",e.add(L),e}function OE(s){const e=new Wn;e.name="garment_pants";const t=new kt(.8,.82,.3,32),r=new Be(t,s.accent||s.primary);r.position.set(0,.95,0),r.scale.set(1,1,.75),e.add(r);const o=new kt(.38,.24,2.2,24,16);Ja(o,.02,5);const l=new Be(o,s.primary);l.position.set(-.42,-.25,0),l.rotation.z=-.05,l.castShadow=!0,e.add(l);const u=new Be(o.clone(),s.primary);u.position.set(.42,-.25,0),u.rotation.z=.05,u.castShadow=!0,e.add(u);const d=new Xn(.18,.5,.35),f=new Be(d,s.accent||s.primary);f.position.set(-.76,-.2,0),f.rotation.y=-.15,e.add(f);const p=new Be(d,s.accent||s.primary);p.position.set(.76,-.2,0),p.rotation.y=.15,e.add(p);const g=new Xn(.2,.1,.37),y=new Be(g,s.accent);y.position.set(-.77,.08,0),e.add(y);const S=new Be(g,s.accent);S.position.set(.77,.08,0),e.add(S);const _=new kt(.25,.22,.2,20),w=new Be(_,s.accent);w.position.set(-.48,-1.35,0),e.add(w);const E=new Be(_,s.accent);E.position.set(.48,-1.35,0),e.add(E);const M=new _n(.3,.3),v=new Be(M,s.decal);return v.position.set(-.86,-.2,0),v.rotation.y=-Math.PI/2,v.name="decal_chest_left",e.add(v),e}function zE(s){const e=new Wn;e.name="garment_cap";const t=new as(.8,32,24,0,Math.PI*2,0,Math.PI*.52),r=new Be(t,s.primary);r.castShadow=!0,e.add(r);const o=new kt(.86,.88,.06,24,4,!1,-Math.PI*.4,Math.PI*.8),l=new Be(o,s.accent||s.primary);l.position.set(0,-.05,.45),l.rotation.x=.2,l.scale.set(1.05,1,1.2),l.castShadow=!0,e.add(l);const u=new as(.08,16,16),d=new Be(u,s.accent||s.primary);d.position.set(0,.8,0),e.add(d);const f=new Za(.78,.035,12,24,Math.PI*.5),p=new Be(f,s.accent);p.position.set(0,.05,-.15),p.rotation.x=Math.PI/2,p.rotation.z=Math.PI*.75,e.add(p);const g=new Xn(.12,.08,.04),y=new Be(g,s.hardware);y.position.set(0,.08,-.85),e.add(y);const S=new _n(.65,.5,8,8),_=S.attributes.position;for(let E=0;E<_.count;E++){const M=_.getX(E);_.setZ(E,-M*M*.2+.02)}S.computeVertexNormals();const w=new Be(S,s.decal);return w.position.set(0,.4,.72),w.rotation.x=-.3,w.name="decal_front",e.add(w),e}function BE(){const s=new Wn;s.name="avatar_mannequin";const e=new wr({color:1579552,roughness:.35,metalness:.65}),t=new as(.38,32,24);t.scale(.85,1.25,1);const r=new Be(t,e);r.position.set(0,2.2,0),r.castShadow=!0,s.add(r);const o=new kt(.18,.22,.45,24),l=new Be(o,e);l.position.set(0,1.6,0),s.add(l);const u=new kt(.04,.04,1.8,16),d=new wr({color:3359061,metalness:.9,roughness:.2}),f=new Be(u,d);f.position.set(0,-2.1,0),s.add(f);const p=new kt(.7,.75,.08,32),g=new Be(p,d);return g.position.set(0,-2.95,0),s.add(g),s}function g0(s="terry",e="#14171d"){const t=document.createElement("canvas");t.width=512,t.height=512;const r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,512,512);const o=r.getImageData(0,0,512,512),l=o.data;if(s==="terry"||s==="cotton")for(let d=0;d<512;d++)for(let f=0;f<512;f++){const p=(d*512+f)*4,g=Math.sin(f*.4)*12,y=Math.cos(d*.4)*12,S=(Math.random()-.5)*18,_=g+y+S;l[p]=Math.min(255,Math.max(0,l[p]+_)),l[p+1]=Math.min(255,Math.max(0,l[p+1]+_)),l[p+2]=Math.min(255,Math.max(0,l[p+2]+_))}else if(s==="ripstop")for(let d=0;d<512;d++)for(let f=0;f<512;f++){const p=(d*512+f)*4,g=f%32===0||d%32===0,y=f%8===0||d%8===0;let S=(Math.random()-.5)*8;g?S+=28:y&&(S+=10),l[p]=Math.min(255,Math.max(0,l[p]+S)),l[p+1]=Math.min(255,Math.max(0,l[p+1]+S)),l[p+2]=Math.min(255,Math.max(0,l[p+2]+S))}else if(s==="denim"||s==="twill")for(let d=0;d<512;d++)for(let f=0;f<512;f++){const p=(d*512+f)*4,g=Math.sin((f+d*1.5)*.7)*20,y=(Math.random()-.5)*14,S=g+y;l[p]=Math.min(255,Math.max(0,l[p]+S)),l[p+1]=Math.min(255,Math.max(0,l[p+1]+S)),l[p+2]=Math.min(255,Math.max(0,l[p+2]+S))}else if(s==="leather")for(let d=0;d<512;d++)for(let f=0;f<512;f++){const p=(d*512+f)*4,g=f%16-8,y=d%16-8,_=(Math.sqrt(g*g+y*y)<6?15:-15)+(Math.random()-.5)*10;l[p]=Math.min(255,Math.max(0,l[p]+_)),l[p+1]=Math.min(255,Math.max(0,l[p+1]+_)),l[p+2]=Math.min(255,Math.max(0,l[p+2]+_))}else if(s==="velvet")for(let d=0;d<512;d++)for(let f=0;f<512;f++){const p=(d*512+f)*4,g=Math.sin(f*.1+d*.1)*15,y=(Math.random()-.5)*12,S=g+y;l[p]=Math.min(255,Math.max(0,l[p]+S)),l[p+1]=Math.min(255,Math.max(0,l[p+1]+S)),l[p+2]=Math.min(255,Math.max(0,l[p+2]+S))}r.putImageData(o,0,0);const u=new Ef(t);return u.wrapS=is,u.wrapT=is,u.repeat.set(4,4),u}function jE(s="terry"){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#808080",t.fillRect(0,0,256,256);const r=t.getImageData(0,0,256,256),o=r.data;for(let u=0;u<256;u++)for(let d=0;d<256;d++){const f=(u*256+d)*4;let p=128;s==="ripstop"?d%16===0||u%16===0?p=180:p=120+Math.floor((Math.random()-.5)*20):s==="denim"||s==="twill"?p=128+Math.floor(Math.sin((d+u)*.8)*35+(Math.random()-.5)*15):p=128+Math.floor(Math.sin(d*.5)*20+Math.cos(u*.5)*20+(Math.random()-.5)*15),p=Math.max(0,Math.min(255,p)),o[f]=p,o[f+1]=p,o[f+2]=p}t.putImageData(r,0,0);const l=new Ef(e);return l.wrapS=is,l.wrapT=is,l.repeat.set(6,6),l}function HE(s,e=.7,t=0,r=1){const o=document.createElement("canvas");o.width=1024,o.height=1024;const l=o.getContext("2d"),u=new Ef(o);if(u.needsUpdate=!0,!s)return u;const d=new Image;if(typeof s=="string"&&s.trim().startsWith("<svg")){const f="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(s);d.src=f}else d.crossOrigin="anonymous",d.src=s;return d.onload=()=>{l.clearRect(0,0,1024,1024),l.save(),l.globalAlpha=r,l.translate(512,512),l.rotate(t*Math.PI/180);const f=512*e;l.drawImage(d,-f/2,-f/2,f,f),l.restore(),u.needsUpdate=!0},u}function VE({product:s,customConfig:e,onHotspotClick:t,activeHotspot:r,onExportSnapshot:o}){var me;const l=ze.useRef(null),u=ze.useRef(null),d=ze.useRef(null),f=ze.useRef(null),p=ze.useRef(null),g=ze.useRef(null),y=ze.useRef(null),S=ze.useRef({}),_=ze.useRef(null),w=ze.useRef(!1),E=ze.useRef(!1),M=ze.useRef({x:0,y:0}),v=ze.useRef(new X(0,0,0)),L=ze.useRef({radius:5.5,theta:0,phi:Math.PI/2}),[D,C]=ze.useState(!0),[H,F]=ze.useState("studio"),[O,B]=ze.useState(!0),[P,R]=ze.useState("shaded"),[j,ne]=ze.useState(!0),[ee,he]=ze.useState(!1),[pe,te]=ze.useState([]),[fe,V]=ze.useState(!1);ze.useEffect(()=>{const Q=l.current;if(!Q)return;const k=Q.clientWidth,Fe=Q.clientHeight,Ee=new uE;u.current=Ee,Ee.background=new yt(461070),Ee.fog=new wf(461070,.08);const De=new kn(45,k/Fe,.1,100);f.current=De,L.current={radius:5.8,theta:.1,phi:Math.PI/2.05},le();const Te=new cE({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,powerPreference:"high-performance"});Te.setSize(k,Fe),Te.setPixelRatio(Math.min(window.devicePixelRatio,2)),Te.toneMapping=ug,Te.toneMappingExposure=1.15,Te.shadowMap.enabled=!0,Te.shadowMap.type=lg,d.current=Te,Q.appendChild(Te.domElement);const st=new _n(30,30),ke=new wr({color:658967,roughness:.7,metalness:.2}),U=new Be(st,ke);U.rotation.x=-Math.PI/2,U.position.y=-2.6,U.receiveShadow=!0,Ee.add(U);const A=new IE(24,24,1976635,988970);A.position.y=-2.59,Ee.add(A);const se=new kt(1.4,1.5,.08,48),Se=new wr({color:1119780,roughness:.4,metalness:.5}),Me=new Be(se,Se);Me.position.y=-2.55,Me.receiveShadow=!0,Ee.add(Me);const ve=new Tf(1.42,1.48,48),qe=new Xl({color:62880,side:Gn}),Ne=new Be(ve,qe);Ne.rotation.x=-Math.PI/2,Ne.position.y=-2.5,Ee.add(Ne);const Oe=new Wn;y.current=Oe,Ee.add(Oe),I("studio");const ut=new Wn;p.current=ut,Ee.add(ut);const Ae=BE();g.current=Ae,Ee.add(Ae);const je=()=>{if(!Q||!Te||!De)return;const Xe=Q.clientWidth,gt=Q.clientHeight;De.aspect=Xe/gt,De.updateProjectionMatrix(),Te.setSize(Xe,gt)};window.addEventListener("resize",je);let it=new DE;const lt=()=>{_.current=requestAnimationFrame(lt);const Xe=it.getDelta(),gt=it.getElapsedTime();if(D&&!w.current&&(L.current.theta+=Xe*.45,le()),j&&p.current){const dt=Math.sin(gt*1.5)*.04;p.current.position.y=dt,g.current&&(g.current.position.y=dt)}Te.render(Ee,De),Le()};return lt(),()=>{window.removeEventListener("resize",je),_.current&&cancelAnimationFrame(_.current),Q&&Te.domElement&&Q.removeChild(Te.domElement),Te.dispose()}},[]);const le=()=>{if(!f.current)return;const{radius:Q,theta:k,phi:Fe}=L.current,Ee=f.current,De=v.current;Ee.position.x=De.x+Q*Math.sin(Fe)*Math.sin(k),Ee.position.y=De.y+Q*Math.cos(Fe),Ee.position.z=De.z+Q*Math.sin(Fe)*Math.cos(k),Ee.lookAt(De)},I=Q=>{const k=y.current;if(k){for(;k.children.length>0;)k.remove(k.children[0]);if(Q==="studio"){const Fe=new Il(16777215,.9);k.add(Fe);const Ee=new Mr(16777215,2.2);Ee.position.set(4,6,5),Ee.castShadow=!0,Ee.shadow.mapSize.width=2048,Ee.shadow.mapSize.height=2048,Ee.shadow.bias=-5e-4,k.add(Ee);const De=new Mr(16774112,1.2);De.position.set(-4,3,-3),k.add(De);const Te=new Mr(13621468,1.8);Te.position.set(0,5,-6),k.add(Te)}else if(Q==="cyber"){const Fe=new Il(856866,1.4);k.add(Fe);const Ee=new Mr(62880,3.2);Ee.position.set(4,5,4),k.add(Ee);const De=new Mr(15485081,2.8);De.position.set(-5,4,-4),k.add(De);const Te=new PE(55797,4,15);Te.position.set(0,-1,3),k.add(Te)}else if(Q==="golden"){const Fe=new Il(3678736,1.2);k.add(Fe);const Ee=new Mr(16096779,3.5);Ee.position.set(5,4,4),Ee.castShadow=!0,k.add(Ee);const De=new Mr(8141549,1.5);De.position.set(-4,3,-3),k.add(De)}else if(Q==="runway"){const Fe=new Il(1118481,.6);k.add(Fe);const Ee=new RE(16777215,5);Ee.position.set(0,8,2),Ee.angle=Math.PI/5,Ee.penumbra=.5,Ee.castShadow=!0,k.add(Ee);const De=new Mr(9741240,1.6);De.position.set(0,2,-6),k.add(De)}}};ze.useEffect(()=>{var Ae;if(!u.current||!p.current||!s)return;const Q=p.current;for(;Q.children.length>0;)Q.remove(Q.children[0]);const k=(e==null?void 0:e.primaryColor)||"#14171d",Fe=(e==null?void 0:e.accentColor)||"#00f5a0",Ee=(e==null?void 0:e.cordsColor)||"#ffffff",De=(e==null?void 0:e.fabricId)||"terry",Te=((Ae=s.fabrics)==null?void 0:Ae.find(je=>je.id===De))||{roughness:.85,metalness:.05,bumpScale:.08},st=g0(De,k),ke=jE(De),U=new wr({color:new yt(k),map:st,bumpMap:ke,bumpScale:Te.bumpScale||.06,roughness:Te.roughness??.8,metalness:Te.metalness??.05,wireframe:P==="wireframe",side:Gn});P==="clay"&&(U.color.set(13751771),U.roughness=.9,U.metalness=0);const A=new wr({color:new yt(Fe),map:g0(De,Fe),bumpMap:ke,bumpScale:(Te.bumpScale||.06)*.8,roughness:Te.roughness??.75,metalness:Te.metalness??.08,wireframe:P==="wireframe",side:Gn}),se=new wr({color:13421772,metalness:.95,roughness:.15}),Se=new wr({color:new yt(Ee),roughness:.8,metalness:.05}),Me=(e==null?void 0:e.decal)||{},ve=HE(Me.customImage||Me.svgContent||null,Me.scale||.7,Me.rotation||0,Me.opacity??1),qe=new Xl({map:ve,transparent:!0,depthTest:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,side:Gn});S.current={primary:U,accent:A,hardware:se,cords:Se,decal:qe};let Ne;const Oe=s.type||"hoodie";Oe==="hoodie"?Ne=m0(S.current):Oe==="tshirt"?Ne=UE(S.current):Oe==="jacket"?Ne=kE(S.current):Oe==="blazer"?Ne=FE(S.current):Oe==="pants"?Ne=OE(S.current):Oe==="cap"?Ne=zE(S.current):Ne=m0(S.current),Q.add(Ne);const ut=Me.position||"front";Ne.traverse(je=>{var it;(it=je.name)!=null&&it.startsWith("decal_")&&(je.visible=ut==="front"&&je.name==="decal_front"||ut==="back"&&je.name==="decal_back"||ut==="chest-left"&&je.name==="decal_chest_left")})},[s,e,P]),ze.useEffect(()=>{g.current&&(g.current.visible=O)},[O]);const b=Q=>{F(Q),I(Q)},$=Q=>{C(!1),Q==="front"?L.current={radius:5.5,theta:0,phi:Math.PI/2}:Q==="back"?L.current={radius:5.5,theta:Math.PI,phi:Math.PI/2}:Q==="left"?L.current={radius:5.5,theta:Math.PI/2,phi:Math.PI/2}:Q==="right"?L.current={radius:5.5,theta:-Math.PI/2,phi:Math.PI/2}:Q==="closeup"&&(L.current={radius:3.2,theta:0,phi:Math.PI/2.2}),le()},_e=Q=>{Q.button===0?w.current=!0:Q.button===2&&(E.current=!0),M.current={x:Q.clientX,y:Q.clientY}},q=Q=>{if(!w.current&&!E.current)return;const k=Q.clientX-M.current.x,Fe=Q.clientY-M.current.y;M.current={x:Q.clientX,y:Q.clientY},w.current?(L.current.theta-=k*.007,L.current.phi=Math.max(.15,Math.min(Math.PI-.15,L.current.phi-Fe*.007)),le()):E.current&&(v.current.y+=Fe*.005,le())},re=()=>{w.current=!1,E.current=!1},ge=Q=>{Q.preventDefault(),L.current.radius=Math.max(2,Math.min(9.5,L.current.radius+Q.deltaY*.005)),le()},oe=Q=>{Q.touches.length===1&&(w.current=!0,M.current={x:Q.touches[0].clientX,y:Q.touches[0].clientY})},W=Q=>{if(!w.current||Q.touches.length!==1)return;const k=Q.touches[0].clientX-M.current.x,Fe=Q.touches[0].clientY-M.current.y;M.current={x:Q.touches[0].clientX,y:Q.touches[0].clientY},L.current.theta-=k*.008,L.current.phi=Math.max(.15,Math.min(Math.PI-.15,L.current.phi-Fe*.008)),le()},ye=()=>{w.current=!1},Le=ze.useCallback(()=>{if(!f.current||!l.current||!(s!=null&&s.hotspots))return;const Q=l.current,k=Q.clientWidth,Fe=Q.clientHeight,Ee=f.current,De=s.hotspots.map(Te=>{const st=new X(Te.x,Te.y,Te.z);j&&p.current&&(st.y+=p.current.position.y),st.project(Ee);const ke=st.z<1,U=(st.x+1)*k/2,A=(-st.y+1)*Fe/2;return{...Te,xScreen:U,yScreen:A,isVisible:ke}});te(De)},[s,j]),Ze=()=>{d.current&&(V(!0),setTimeout(()=>{try{const Q=d.current,k=Q.domElement.toDataURL("image/png"),Fe=document.createElement("canvas");Fe.width=Q.domElement.width,Fe.height=Q.domElement.height;const Ee=Fe.getContext("2d"),De=new Image;De.src=k,De.onload=()=>{var ke;Ee.drawImage(De,0,0),Ee.font='bold 24px "Plus Jakarta Sans", sans-serif',Ee.fillStyle="rgba(255, 255, 255, 0.9)",Ee.fillText(`ATELIER 3D // ${s.name.toUpperCase()}`,36,Fe.height-56),Ee.font="16px monospace",Ee.fillStyle="#00f5a0",Ee.fillText(`CONFIG ID: TC-${Math.floor(1e4+Math.random()*9e4)} | FABRIC: ${((ke=e==null?void 0:e.fabricId)==null?void 0:ke.toUpperCase())||"TERRY"}`,36,Fe.height-30);const Te=Fe.toDataURL("image/png"),st=document.createElement("a");st.download=`${s.name.toLowerCase().replace(/\s+/g,"-")}-custom-3d-mockup.png`,st.href=Te,st.click(),o&&o(Te),V(!1)}}catch(Q){console.error("Snapshot failed:",Q),V(!1)}},150))};return m.jsxs("div",{className:`relative w-full h-full select-none overflow-hidden rounded-2xl bg-gradient-to-b from-dark-900 to-dark-950 border border-slate-800/80 shadow-2xl transition-all duration-300 ${ee?"fixed inset-0 z-50 rounded-none":""}`,children:[m.jsx("div",{ref:l,className:"w-full h-full cursor-grab active:cursor-grabbing",onMouseDown:_e,onMouseMove:q,onMouseUp:re,onContextMenu:Q=>Q.preventDefault(),onWheel:ge,onTouchStart:oe,onTouchMove:W,onTouchEnd:ye}),m.jsxs("div",{className:"absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none",children:[m.jsxs("div",{className:"flex items-center space-x-1 glass-panel px-2.5 py-1.5 rounded-xl pointer-events-auto shadow-lg border border-slate-700/60",children:[m.jsxs("span",{className:"text-[11px] font-mono uppercase text-slate-400 mr-2 flex items-center",children:[m.jsx(A0,{className:"w-3.5 h-3.5 mr-1 text-brand-cyan"})," View:"]}),["front","back","left","closeup"].map(Q=>m.jsx("button",{onClick:()=>$(Q),className:"px-2.5 py-1 text-xs font-semibold rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/60 transition capitalize",children:Q},Q))]}),m.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[m.jsxs("div",{className:"flex items-center space-x-1 glass-panel px-2 py-1.5 rounded-xl border border-slate-700/60 text-xs",children:[m.jsx(a_,{className:"w-3.5 h-3.5 text-brand-gold mr-1"}),m.jsxs("select",{value:H,onChange:Q=>b(Q.target.value),className:"bg-transparent text-slate-200 text-xs font-medium focus:outline-none cursor-pointer pr-1",children:[m.jsx("option",{value:"studio",className:"bg-dark-900 text-slate-100",children:"Softbox Studio"}),m.jsx("option",{value:"cyber",className:"bg-dark-900 text-slate-100",children:"Cyber Neon"}),m.jsx("option",{value:"golden",className:"bg-dark-900 text-slate-100",children:"Golden Hour"}),m.jsx("option",{value:"runway",className:"bg-dark-900 text-slate-100",children:"Dark Runway"})]})]}),m.jsx("button",{onClick:()=>B(!O),title:"Toggle Mannequin Avatar",className:`p-2 rounded-xl glass-panel border transition ${O?"border-brand-neon/60 text-brand-neon bg-brand-neon/10":"border-slate-700/60 text-slate-400 hover:text-slate-200"}`,children:m.jsx(c_,{className:"w-4 h-4"})}),m.jsxs("button",{onClick:()=>{const Q=["shaded","clay","wireframe"],k=Q[(Q.indexOf(P)+1)%Q.length];R(k)},title:`Mode: ${P}`,className:"p-2 rounded-xl glass-panel border border-slate-700/60 text-slate-300 hover:text-white transition flex items-center text-xs space-x-1",children:[m.jsx(hf,{className:"w-4 h-4 text-brand-cyan"}),m.jsx("span",{className:"capitalize text-[11px] hidden sm:inline",children:P})]}),m.jsx("button",{onClick:()=>C(!D),title:D?"Pause Spin":"Play Spin",className:`p-2 rounded-xl glass-panel border transition ${D?"border-brand-cyan/60 text-brand-cyan bg-brand-cyan/10":"border-slate-700/60 text-slate-400 hover:text-slate-200"}`,children:D?m.jsx(t_,{className:"w-4 h-4"}):m.jsx(n_,{className:"w-4 h-4"})}),m.jsx("button",{onClick:Ze,disabled:fe,title:"Export High-Res 3D Snapshot",className:"p-2 rounded-xl glass-panel border border-slate-700/60 text-slate-300 hover:text-brand-neon hover:border-brand-neon/40 transition",children:m.jsx(Gv,{className:`w-4 h-4 ${fe?"animate-spin text-brand-neon":""}`})}),m.jsx("button",{onClick:()=>he(!ee),title:ee?"Exit Fullscreen":"Fullscreen",className:"p-2 rounded-xl glass-panel border border-slate-700/60 text-slate-400 hover:text-white transition",children:ee?m.jsx(Zv,{className:"w-4 h-4"}):m.jsx(Yv,{className:"w-4 h-4"})})]})]}),pe.map(Q=>{if(!Q.isVisible)return null;const k=(r==null?void 0:r.id)===Q.id;return m.jsxs("div",{style:{position:"absolute",left:`${Q.xScreen}px`,top:`${Q.yScreen}px`,transform:"translate(-50%, -50%)",zIndex:30},className:"group pointer-events-auto",children:[m.jsxs("button",{onClick:()=>t&&t(Q),className:`relative flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 ${k?"bg-brand-neon text-dark-950 scale-125 ring-4 ring-brand-neon/40":"bg-dark-900/90 text-brand-cyan border border-brand-cyan/50 hover:scale-110 hover:border-brand-neon"}`,children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-current"}),m.jsx("span",{className:"absolute inset-0 rounded-full hotspot-pulse pointer-events-none"})]}),m.jsxs("div",{className:"absolute left-8 top-1/2 -translate-y-1/2 w-64 p-3 rounded-xl glass-panel border border-slate-700/80 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform translate-x-1 group-hover:translate-x-0 z-40 backdrop-blur-md",children:[m.jsxs("div",{className:"flex items-center space-x-1.5 text-brand-neon text-xs font-mono font-bold uppercase tracking-wider mb-1",children:[m.jsx(Ya,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Tailored Spec"})]}),m.jsx("h4",{className:"text-sm font-bold text-white leading-tight mb-1",children:Q.label}),m.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:Q.desc})]})]},Q.id)}),m.jsxs("div",{className:"absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none text-xs text-slate-400",children:[m.jsxs("div",{className:"glass-panel px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-mono flex items-center space-x-2",children:[m.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-brand-neon animate-pulse"}),m.jsx("span",{className:"text-slate-300 font-semibold",children:s==null?void 0:s.name}),m.jsx("span",{className:"text-slate-500",children:"|"}),m.jsx("span",{className:"text-brand-cyan",children:((me=e==null?void 0:e.fabricId)==null?void 0:me.toUpperCase())||"TERRY"})]}),m.jsxs("div",{className:"hidden md:flex items-center space-x-3 glass-panel px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-400",children:[m.jsx("span",{children:"Drag: 360° Rotate"}),m.jsx("span",{children:"•"}),m.jsx("span",{children:"Right-Click: Pan"}),m.jsx("span",{children:"•"}),m.jsx("span",{children:"Scroll: Zoom"})]})]})]})}function GE({product:s,customConfig:e,onChangeConfig:t,presets:r=[],onAddToCart:o,onSaveToWardrobe:l,onOpenSizeGuide:u,onExportSnapshot:d}){var pe,te,fe,V,le,I,b,$,_e,q,re,ge,oe;const[f,p]=ze.useState("colors"),[g,y]=ze.useState(!1),[S,_]=ze.useState(!1),w=ze.useRef(null);if(!s)return null;const E=s.price||0,M=((pe=s.fabrics)==null?void 0:pe.find(W=>W.id===e.fabricId))||{},v=M.priceExtra||0,L=(te=e.decal)!=null&&te.customImage||(fe=e.decal)!=null&&fe.svgContent&&e.decal.id!=="none"?15:0,D=E+v+L,C=W=>{t({...e,primaryColor:W})},H=W=>{t({...e,accentColor:W})},F=W=>{t({...e,cordsColor:W})},O=W=>{t({...e,fabricId:W})},B=W=>{t({...e,decal:{...e.decal,id:W.id,svgContent:W.svg,customImage:null}})},P=async W=>{var Le;const ye=(Le=W.target.files)==null?void 0:Le[0];if(ye){y(!0);try{const Ze=new FileReader;Ze.onload=async me=>{const Q=me.target.result;t({...e,decal:{...e.decal,id:"custom-upload",svgContent:null,customImage:Q}});try{await fetch("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({base64:Q})})}catch(k){console.warn("Background upload failed, local base64 used:",k)}y(!1)},Ze.readAsDataURL(ye)}catch(Ze){console.error("File read error:",Ze),y(!1)}}},R=W=>{t({...e,decal:{...e.decal,position:W}})},j=W=>{t({...e,decal:{...e.decal,scale:parseFloat(W)}})},ne=W=>{t({...e,decal:{...e.decal,rotation:parseInt(W,10)}})},ee=W=>{t({...e,decal:{...e.decal,opacity:parseFloat(W)}})},he=()=>{l({productName:s.name,productId:s.id,primaryColor:e.primaryColor,accentColor:e.accentColor,cordsColor:e.cordsColor,fabricId:e.fabricId,fabricName:M.name||"Standard",size:e.size,decal:e.decal,price:D}),_(!0),setTimeout(()=>_(!1),2500)};return m.jsxs("div",{className:"flex flex-col h-full bg-dark-900 border border-slate-800 rounded-2xl shadow-xl overflow-hidden",children:[m.jsxs("div",{className:"p-5 border-b border-slate-800 bg-dark-850/80",children:[m.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[m.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-bold bg-brand-neon/15 text-brand-neon border border-brand-neon/30",children:s.badge||"Studio Customizer"}),m.jsxs("span",{className:"text-xs font-mono text-slate-400",children:[s.rating," ★ (",s.reviewsCount," reviews)"]})]}),m.jsx("h2",{className:"text-xl font-display font-bold text-white tracking-tight",children:s.name}),m.jsx("p",{className:"text-xs text-slate-400 mt-1 line-clamp-1",children:s.tagline}),m.jsxs("div",{className:"mt-3 flex items-baseline space-x-2",children:[m.jsxs("span",{className:"text-2xl font-display font-extrabold text-white",children:["$",D]}),v>0&&m.jsxs("span",{className:"text-xs font-mono text-brand-cyan",children:["(+$",v," ",(V=M.name)==null?void 0:V.split(" ")[0],")"]}),L>0&&m.jsx("span",{className:"text-xs font-mono text-brand-gold",children:"(+$15 Custom Decal)"})]})]}),m.jsx("div",{className:"grid grid-cols-4 border-b border-slate-800 text-xs font-semibold bg-dark-950/60",children:[{id:"colors",label:"Colors",icon:e_},{id:"fabrics",label:"Fabrics",icon:hf},{id:"graphics",label:"Decals",icon:Ya},{id:"sizes",label:"Fit & Size",icon:bd}].map(W=>{const ye=W.icon,Le=f===W.id;return m.jsxs("button",{onClick:()=>p(W.id),className:`flex flex-col items-center justify-center py-3 px-2 border-b-2 transition duration-200 ${Le?"border-brand-neon text-white bg-slate-800/40":"border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/20"}`,children:[m.jsx(ye,{className:`w-4 h-4 mb-1 ${Le?"text-brand-neon":""}`}),m.jsx("span",{className:"text-[11px] font-medium",children:W.label})]},W.id)})}),m.jsxs("div",{className:"flex-1 overflow-y-auto p-5 space-y-6",children:[f==="colors"&&m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[m.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold",children:"1. Base Fabric Color"}),m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-slate-600 inline-block",style:{backgroundColor:e.primaryColor}}),m.jsx("span",{className:"text-xs font-mono text-slate-400",children:e.primaryColor})]})]}),m.jsx("div",{className:"grid grid-cols-4 gap-2 mb-3",children:(le=s.colors)==null?void 0:le.map(W=>{const ye=e.primaryColor===W.hex;return m.jsxs("button",{onClick:()=>C(W.hex),className:`relative flex items-center p-2 rounded-xl border transition ${ye?"border-brand-neon bg-slate-800 ring-2 ring-brand-neon/30":"border-slate-800 hover:border-slate-600 bg-dark-850"}`,children:[m.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 shadow-inner flex-shrink-0 mr-2",style:{backgroundColor:W.hex}}),m.jsx("span",{className:"text-[11px] font-medium text-slate-300 truncate",children:W.name})]},W.hex)})}),m.jsxs("div",{className:"flex items-center space-x-3 p-2.5 rounded-xl bg-dark-950 border border-slate-800",children:[m.jsx("input",{type:"color",value:e.primaryColor,onChange:W=>C(W.target.value),className:"w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 p-0"}),m.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Custom Hex Color Wheel"})]})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[m.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold",children:"2. Accent & Trims Color"}),m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-slate-600 inline-block",style:{backgroundColor:e.accentColor}}),m.jsx("span",{className:"text-xs font-mono text-slate-400",children:e.accentColor})]})]}),m.jsx("div",{className:"grid grid-cols-4 gap-2 mb-3",children:[{name:"Neon Green",hex:"#00f5a0"},{name:"Electric Cyan",hex:"#00d9f5"},{name:"Solar Amber",hex:"#f59e0b"},{name:"Hot Crimson",hex:"#ef4444"},{name:"Pure White",hex:"#ffffff"},{name:"Cyber Violet",hex:"#c084fc"},{name:"Stealth Onyx",hex:"#111827"},{name:"Chrome Grey",hex:"#64748b"}].map(W=>{const ye=e.accentColor===W.hex;return m.jsxs("button",{onClick:()=>H(W.hex),className:`relative flex items-center p-2 rounded-xl border transition ${ye?"border-brand-cyan bg-slate-800 ring-2 ring-brand-cyan/30":"border-slate-800 hover:border-slate-600 bg-dark-850"}`,children:[m.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 flex-shrink-0 mr-2",style:{backgroundColor:W.hex}}),m.jsx("span",{className:"text-[11px] font-medium text-slate-300 truncate",children:W.name})]},W.hex)})}),m.jsxs("div",{className:"flex items-center space-x-3 p-2.5 rounded-xl bg-dark-950 border border-slate-800",children:[m.jsx("input",{type:"color",value:e.accentColor,onChange:W=>H(W.target.value),className:"w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 p-0"}),m.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"Custom Accent Wheel"})]})]}),m.jsxs("div",{children:[m.jsx("div",{className:"flex items-center justify-between mb-2",children:m.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold",children:"3. Drawstrings & Aglets"})}),m.jsx("div",{className:"flex space-x-2",children:["#ffffff","#000000","#00f5a0","#00d9f5","#f59e0b","#dc2626"].map(W=>m.jsx("button",{onClick:()=>F(W),className:`w-8 h-8 rounded-full border-2 transition ${e.cordsColor===W?"border-brand-neon scale-110":"border-slate-700"}`,style:{backgroundColor:W}},W))})]})]}),f==="fabrics"&&m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"Select Luxury Material Grade"}),m.jsx("span",{className:"text-xs text-brand-neon font-mono",children:"PBR Calibrated"})]}),m.jsx("div",{className:"space-y-3",children:(I=s.fabrics)==null?void 0:I.map(W=>{const ye=e.fabricId===W.id;return m.jsxs("div",{onClick:()=>O(W.id),className:`p-3.5 rounded-xl border cursor-pointer transition ${ye?"border-brand-neon bg-dark-850 ring-1 ring-brand-neon/40 shadow-lg":"border-slate-800 hover:border-slate-700 bg-dark-950"}`,children:[m.jsxs("div",{className:"flex items-start justify-between mb-1",children:[m.jsxs("div",{children:[m.jsxs("h4",{className:"text-sm font-bold text-white flex items-center",children:[W.name,W.priceExtra>0?m.jsxs("span",{className:"ml-2 text-xs font-mono text-brand-gold bg-brand-gold/10 px-1.5 py-0.5 rounded",children:["+$",W.priceExtra]}):m.jsx("span",{className:"ml-2 text-xs font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded",children:"Standard"})]}),m.jsx("span",{className:"text-[11px] font-mono text-brand-cyan",children:W.gsm})]}),m.jsx("div",{className:`w-5 h-5 rounded-full flex items-center justify-center border ${ye?"bg-brand-neon text-dark-950 border-brand-neon":"border-slate-700"}`,children:ye&&m.jsx(Ed,{className:"w-3.5 h-3.5 stroke-[3]"})})]}),m.jsx("p",{className:"text-xs text-slate-400 leading-relaxed mt-1",children:W.desc})]},W.id)})})]}),f==="graphics"&&m.jsxs("div",{className:"space-y-5",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2",children:"Decal Placement Zone"}),m.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"front",label:"Front Chest"},{id:"back",label:"Back Graphic"},{id:"chest-left",label:"Crest / Pocket"}].map(W=>{var Le;const ye=((Le=e.decal)==null?void 0:Le.position)===W.id;return m.jsx("button",{onClick:()=>R(W.id),className:`py-2 px-3 text-xs font-medium rounded-xl border transition ${ye?"border-brand-neon bg-brand-neon/10 text-brand-neon font-bold":"border-slate-800 text-slate-400 hover:text-white bg-dark-950"}`,children:W.label},W.id)})})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2",children:"Upload Custom Logo / Artwork"}),m.jsx("input",{ref:w,type:"file",accept:"image/png, image/jpeg, image/svg+xml, image/webp",className:"hidden",onChange:P}),m.jsxs("button",{onClick:()=>{var W;return(W=w.current)==null?void 0:W.click()},disabled:g,className:"w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-dashed border-brand-cyan/50 hover:border-brand-cyan bg-brand-cyan/5 hover:bg-brand-cyan/10 text-brand-cyan text-xs font-semibold transition",children:[m.jsx(l_,{className:`w-4 h-4 ${g?"animate-bounce":""}`}),m.jsx("span",{children:g?"Processing artwork...":"Upload PNG / SVG / JPG (Transparent)"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold block mb-2",children:"Curated Graphic Prints Library"}),m.jsx("div",{className:"grid grid-cols-2 gap-2.5",children:r.map(W=>{var Le;const ye=((Le=e.decal)==null?void 0:Le.id)===W.id;return m.jsxs("div",{onClick:()=>B(W),className:`p-2.5 rounded-xl border cursor-pointer transition flex flex-col items-center justify-center bg-dark-950 ${ye?"border-brand-neon ring-2 ring-brand-neon/30 bg-slate-800/60":"border-slate-800 hover:border-slate-700"}`,children:[m.jsx("div",{className:"w-16 h-16 flex items-center justify-center mb-1.5",dangerouslySetInnerHTML:{__html:W.svg}}),m.jsx("span",{className:"text-[11px] font-bold text-slate-200 text-center leading-tight",children:W.name}),m.jsx("span",{className:"text-[9px] font-mono text-slate-500 uppercase",children:W.category})]},W.id)})})]}),m.jsxs("div",{className:"p-3.5 rounded-xl bg-dark-950 border border-slate-800 space-y-3",children:[m.jsxs("span",{className:"text-[11px] font-mono uppercase tracking-wider text-brand-neon font-bold flex items-center",children:[m.jsx(r_,{className:"w-3.5 h-3.5 mr-1.5"})," Adjust Graphic Transform"]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[m.jsx("span",{children:"Scale"}),m.jsxs("span",{className:"font-mono",children:[Math.round((((b=e.decal)==null?void 0:b.scale)||.7)*100),"%"]})]}),m.jsx("input",{type:"range",min:"0.3",max:"1.0",step:"0.05",value:(($=e.decal)==null?void 0:$.scale)||.7,onChange:W=>j(W.target.value),className:"w-full accent-brand-neon cursor-pointer"})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[m.jsx("span",{children:"Angle"}),m.jsxs("span",{className:"font-mono",children:[((_e=e.decal)==null?void 0:_e.rotation)||0,"°"]})]}),m.jsx("input",{type:"range",min:"-180",max:"180",step:"5",value:((q=e.decal)==null?void 0:q.rotation)||0,onChange:W=>ne(W.target.value),className:"w-full accent-brand-cyan cursor-pointer"})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1",children:[m.jsx("span",{children:"Opacity"}),m.jsxs("span",{className:"font-mono",children:[Math.round((((re=e.decal)==null?void 0:re.opacity)??1)*100),"%"]})]}),m.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:((ge=e.decal)==null?void 0:ge.opacity)??1,onChange:W=>ee(W.target.value),className:"w-full accent-brand-neon cursor-pointer"})]})]})]}),f==="sizes"&&m.jsxs("div",{className:"space-y-5",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("label",{className:"text-xs font-mono uppercase tracking-wider text-slate-300 font-bold",children:"Select Tailored Size"}),m.jsxs("button",{onClick:u,className:"text-xs font-mono text-brand-cyan hover:underline flex items-center",children:[m.jsx(bd,{className:"w-3.5 h-3.5 mr-1"})," View Size Chart"]})]}),m.jsx("div",{className:"grid grid-cols-3 gap-2.5",children:(oe=s.sizes)==null?void 0:oe.map(W=>{const ye=e.size===W;return m.jsxs("button",{onClick:()=>t({...e,size:W}),className:`py-3 rounded-xl border text-sm font-bold transition flex flex-col items-center justify-center ${ye?"border-brand-neon bg-brand-neon/15 text-brand-neon ring-2 ring-brand-neon/30":"border-slate-800 text-slate-300 hover:border-slate-700 bg-dark-950"}`,children:[m.jsx("span",{children:W}),m.jsx("span",{className:"text-[10px] font-mono text-slate-500 font-normal",children:"In Stock"})]},W)})}),m.jsxs("div",{className:"p-3.5 rounded-xl bg-dark-950 border border-slate-800/80",children:[m.jsxs("h5",{className:"text-xs font-bold text-white mb-1 flex items-center",children:[m.jsx($v,{className:"w-3.5 h-3.5 text-brand-gold mr-1.5"})," Silhouette & Fit Profile"]}),m.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Engineered with an oversized streetwear drape. Drop shoulders and elongated sleeves provide relaxed comfort. True to size for intentional relaxed drape, or size down for tailored fit."})]})]})]}),m.jsxs("div",{className:"p-4 border-t border-slate-800 bg-dark-850/90 space-y-2.5",children:[m.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[m.jsxs("button",{onClick:he,className:`flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border text-xs font-semibold transition ${S?"border-brand-neon text-brand-neon bg-brand-neon/10":"border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white bg-dark-900"}`,children:[S?m.jsx(Ed,{className:"w-3.5 h-3.5"}):m.jsx(jl,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:S?"Saved in Wardrobe":"Save Design"})]}),m.jsxs("button",{onClick:d,className:"flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl border border-slate-700 hover:border-brand-cyan/50 text-slate-300 hover:text-brand-cyan bg-dark-900 text-xs font-semibold transition",children:[m.jsx(Ya,{className:"w-3.5 h-3.5 text-brand-cyan"}),m.jsx("span",{children:"Export 3D Mockup"})]})]}),m.jsxs("button",{onClick:()=>{o({product:s,customConfig:e,fabric:M,price:D})},className:"w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-brand-neon via-brand-cyan to-brand-neon text-dark-950 font-display font-extrabold text-sm tracking-wide shadow-glow-neon hover:opacity-95 active:scale-[0.98] transition",children:[m.jsx(Ys,{className:"w-4 h-4 stroke-[2.5]"}),m.jsxs("span",{children:["ADD CUSTOM CREATION — $",D]})]})]})]})}function WE({products:s=[],onSelectProductFor3D:e,onQuickAddToCart:t}){const[r,o]=ze.useState("All"),[l,u]=ze.useState(""),d=["All","Hoodies","T-Shirts","Jackets","Blazers","Pants","Headwear"],f=s.filter(p=>{const g=r==="All"||p.category.toLowerCase()===r.toLowerCase(),y=p.name.toLowerCase().includes(l.toLowerCase())||p.tagline.toLowerCase().includes(l.toLowerCase())||p.category.toLowerCase().includes(l.toLowerCase());return g&&y});return m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[m.jsxs("div",{className:"relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-slate-800 shadow-2xl",children:[m.jsxs("div",{className:"relative z-10 max-w-2xl space-y-4",children:[m.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/15 text-brand-neon border border-brand-neon/30 text-xs font-mono font-bold tracking-wider",children:[m.jsx(Ya,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"2026 TECHNICAL RUNWAY COLLECTION"})]}),m.jsxs("h1",{className:"text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight",children:["Crafted for Reality. ",m.jsx("br",{}),m.jsx("span",{className:"bg-gradient-to-r from-brand-neon via-brand-cyan to-brand-violet bg-clip-text text-transparent",children:"Tailored in 3D."})]}),m.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"Every garment is an open canvas. Select any piece from our archival drops, inspect tailoring in real-time 3D, customize luxury fabrics, and imprint custom graphic artwork."})]}),m.jsx("div",{className:"absolute right-0 top-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"}),m.jsx("div",{className:"absolute right-40 bottom-0 w-80 h-80 bg-brand-neon/10 rounded-full blur-3xl pointer-events-none"})]}),m.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800",children:[m.jsx("div",{className:"flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none",children:d.map(p=>{const g=r===p;return m.jsx("button",{onClick:()=>o(p),className:`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${g?"bg-brand-neon text-dark-950 font-bold shadow-glow-neon":"text-slate-400 hover:text-white hover:bg-slate-800/60"}`,children:p},p)})}),m.jsxs("div",{className:"relative w-full sm:w-72",children:[m.jsx($0,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),m.jsx("input",{type:"text",placeholder:"Search garments, fabrics...",value:l,onChange:p=>u(p.target.value),className:"w-full bg-dark-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-neon transition"})]})]}),m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:f.map(p=>{var g,y,S;return m.jsxs("div",{className:"group relative flex flex-col rounded-2xl bg-dark-900 border border-slate-800/80 hover:border-brand-cyan/50 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1",children:[m.jsxs("div",{className:"p-4 flex items-center justify-between",children:[m.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-brand-neon/15 text-brand-neon border border-brand-neon/30",children:p.badge||"Archive"}),m.jsxs("div",{className:"flex items-center space-x-1 text-brand-gold text-xs font-mono",children:[m.jsx(s_,{className:"w-3.5 h-3.5 fill-current"}),m.jsx("span",{children:p.rating}),m.jsxs("span",{className:"text-slate-500",children:["(",p.reviewsCount,")"]})]})]}),m.jsxs("div",{onClick:()=>e(p),className:"relative mx-4 h-60 rounded-xl bg-dark-950/80 border border-slate-800/80 flex flex-col items-center justify-center cursor-pointer overflow-hidden group-hover:border-brand-cyan/40 transition",children:[m.jsxs("div",{className:"relative flex flex-col items-center",children:[m.jsx("div",{className:"w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-brand-cyan transition duration-300",children:m.jsx(Ar,{className:"w-10 h-10 text-brand-neon group-hover:text-brand-cyan transition"})}),m.jsxs("span",{className:"mt-3 text-xs font-mono font-bold text-brand-cyan flex items-center space-x-1",children:[m.jsx("span",{children:"Interactive 3D Configurator"}),m.jsx(Yl,{className:"w-3 h-3 group-hover:translate-x-1 transition"})]})]}),m.jsxs("div",{className:"absolute bottom-3 left-4 flex items-center space-x-1.5",children:[(g=p.colors)==null?void 0:g.slice(0,5).map(_=>m.jsx("span",{className:"w-3 h-3 rounded-full border border-slate-700",style:{backgroundColor:_.hex},title:_.name},_.hex)),((y=p.colors)==null?void 0:y.length)>5&&m.jsxs("span",{className:"text-[10px] font-mono text-slate-500",children:["+",p.colors.length-5]})]}),m.jsxs("span",{className:"absolute bottom-3 right-4 text-[10px] font-mono text-slate-400 bg-dark-900/90 px-2 py-0.5 rounded border border-slate-800",children:[(S=p.fabrics)==null?void 0:S.length," Fabrics"]})]}),m.jsxs("div",{className:"p-5 flex-1 flex flex-col justify-between",children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-[11px] font-mono uppercase text-brand-cyan font-bold tracking-wider mb-1",children:p.category}),m.jsx("h3",{className:"text-lg font-display font-bold text-white tracking-tight mb-1 group-hover:text-brand-neon transition",children:p.name}),m.jsx("p",{className:"text-xs text-slate-400 line-clamp-2 leading-relaxed",children:p.tagline})]}),m.jsxs("div",{className:"mt-5 pt-4 border-t border-slate-800 flex items-center justify-between",children:[m.jsxs("div",{children:[m.jsx("span",{className:"text-xs text-slate-500 block font-mono",children:"Base Price"}),m.jsxs("span",{className:"text-xl font-display font-extrabold text-white",children:["$",p.price]})]}),m.jsx("div",{className:"flex items-center space-x-2",children:m.jsxs("button",{onClick:()=>e(p),className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-brand-neon hover:text-dark-950 text-white font-semibold text-xs transition flex items-center space-x-1.5 shadow-sm",children:[m.jsx(Ar,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Customize 3D"})]})})]})]})]},p.id)})})]})}function XE({isOpen:s,onClose:e,items:t=[],onUpdateQuantity:r,onRemoveItem:o,onProceedToCheckout:l,discountCode:u,onApplyDiscount:d,discountAmount:f=0}){const[p,g]=ze.useState(""),[y,S]=ze.useState("");if(!s)return null;const _=t.reduce((v,L)=>v+L.price*L.quantity,0),w=_>150||u==="FREESHIP"||t.length===0?0:15,E=Math.max(0,_-f+w),M=v=>{v.preventDefault();const L=p.trim().toUpperCase();if(L)if(L==="DRIP20"){const D=Math.round(_*.2);d(L,D),S("")}else L==="FREESHIP"?(d(L,0),S("")):S("Invalid code. Try DRIP20 (20% off) or FREESHIP")};return m.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[m.jsx("div",{onClick:e,className:"absolute inset-0 bg-dark-950/80 backdrop-blur-md transition-opacity"}),m.jsx("div",{className:"absolute inset-y-0 right-0 max-w-full flex pl-10",children:m.jsxs("div",{className:"w-screen max-w-md bg-dark-900 border-l border-slate-800 shadow-2xl flex flex-col",children:[m.jsxs("div",{className:"p-5 border-b border-slate-800 flex items-center justify-between bg-dark-850",children:[m.jsxs("div",{className:"flex items-center space-x-2",children:[m.jsx(Ys,{className:"w-5 h-5 text-brand-neon"}),m.jsx("h2",{className:"font-display font-bold text-lg text-white",children:"Your Custom Bag"}),m.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300",children:[t.length," ",t.length===1?"item":"items"]})]}),m.jsx("button",{onClick:e,className:"p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition",children:m.jsx(Zl,{className:"w-5 h-5"})})]}),m.jsx("div",{className:"flex-1 overflow-y-auto p-5 space-y-4",children:t.length===0?m.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center p-6 space-y-3",children:[m.jsx("div",{className:"w-16 h-16 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-500",children:m.jsx(Ys,{className:"w-8 h-8"})}),m.jsx("h3",{className:"text-base font-bold text-white",children:"Your bag is empty"}),m.jsx("p",{className:"text-xs text-slate-400 max-w-xs",children:"Configure any garment in the 3D Studio, pick custom fabrics, and add your bespoke piece to bag."}),m.jsx("button",{onClick:e,className:"mt-2 px-5 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs",children:"Explore 3D Studio"})]}):t.map(v=>{var L;return m.jsxs("div",{className:"p-4 rounded-xl bg-dark-950 border border-slate-800/80 space-y-3",children:[m.jsxs("div",{className:"flex items-start justify-between",children:[m.jsxs("div",{children:[m.jsx("h4",{className:"text-sm font-bold text-white",children:v.productName}),m.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-400 font-mono mt-0.5",children:[m.jsxs("span",{children:["Size: ",v.size]}),m.jsx("span",{children:"•"}),m.jsx("span",{className:"text-brand-cyan",children:v.fabricName})]})]}),m.jsxs("span",{className:"text-sm font-display font-bold text-white",children:["$",v.price]})]}),m.jsxs("div",{className:"flex items-center space-x-2 text-[11px] font-mono",children:[m.jsxs("div",{className:"flex items-center space-x-1 px-2 py-0.5 rounded bg-dark-900 border border-slate-800",children:[m.jsx("span",{className:"text-slate-400",children:"Base:"}),m.jsx("span",{className:"w-3 h-3 rounded-full border border-slate-600 inline-block",style:{backgroundColor:v.primaryColor}})]}),m.jsxs("div",{className:"flex items-center space-x-1 px-2 py-0.5 rounded bg-dark-900 border border-slate-800",children:[m.jsx("span",{className:"text-slate-400",children:"Accent:"}),m.jsx("span",{className:"w-3 h-3 rounded-full border border-slate-600 inline-block",style:{backgroundColor:v.accentColor}})]}),((L=v.decal)==null?void 0:L.id)&&v.decal.id!=="none"&&m.jsxs("span",{className:"px-2 py-0.5 rounded bg-brand-gold/10 text-brand-gold border border-brand-gold/20 truncate",children:["Decal: ",v.decal.position]})]}),m.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-800/60",children:[m.jsxs("div",{className:"flex items-center space-x-2 glass-panel px-2 py-1 rounded-lg border border-slate-700/60",children:[m.jsx("button",{onClick:()=>r(v.cartId,Math.max(1,v.quantity-1)),className:"p-0.5 text-slate-400 hover:text-white",children:m.jsx(Jv,{className:"w-3.5 h-3.5"})}),m.jsx("span",{className:"text-xs font-mono font-bold text-white px-2",children:v.quantity}),m.jsx("button",{onClick:()=>r(v.cartId,v.quantity+1),className:"p-0.5 text-slate-400 hover:text-white",children:m.jsx(V0,{className:"w-3.5 h-3.5"})})]}),m.jsxs("button",{onClick:()=>o(v.cartId),className:"text-xs text-rose-400 hover:text-rose-300 flex items-center space-x-1 font-mono transition",children:[m.jsx(ng,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Remove"})]})]})]},v.cartId)})}),t.length>0&&m.jsxs("div",{className:"p-5 border-t border-slate-800 bg-dark-850/95 space-y-4",children:[m.jsxs("form",{onSubmit:M,className:"space-y-1",children:[m.jsxs("div",{className:"flex space-x-2",children:[m.jsxs("div",{className:"relative flex-1",children:[m.jsx(o_,{className:"w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2"}),m.jsx("input",{type:"text",placeholder:"Promo code (e.g. DRIP20)",value:p,onChange:v=>g(v.target.value),className:"w-full bg-dark-950 border border-slate-800 rounded-xl pl-8 pr-3 py-2 text-xs text-white uppercase placeholder-slate-500 font-mono focus:outline-none focus:border-brand-neon"})]}),m.jsx("button",{type:"submit",className:"px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition",children:"Apply"})]}),y&&m.jsx("p",{className:"text-[11px] text-rose-400 font-mono",children:y}),u&&m.jsxs("p",{className:"text-[11px] text-brand-neon font-mono",children:["✓ Code ",u," applied!"]})]}),m.jsxs("div",{className:"space-y-2 text-xs font-mono text-slate-400",children:[m.jsxs("div",{className:"flex justify-between",children:[m.jsx("span",{children:"Subtotal"}),m.jsxs("span",{className:"text-white",children:["$",_]})]}),f>0&&m.jsxs("div",{className:"flex justify-between text-brand-neon",children:[m.jsxs("span",{children:["Discount (",u,")"]}),m.jsxs("span",{children:["-$",f]})]}),m.jsxs("div",{className:"flex justify-between",children:[m.jsx("span",{children:"Standard Shipping"}),m.jsx("span",{className:"text-white",children:w===0?"FREE":`$${w}`})]}),m.jsxs("div",{className:"pt-2 border-t border-slate-800 flex justify-between text-sm font-bold text-white font-display",children:[m.jsx("span",{children:"Total Amount"}),m.jsxs("span",{className:"text-brand-neon text-lg",children:["$",E]})]})]}),m.jsxs("button",{onClick:l,className:"w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-neon via-brand-cyan to-brand-neon text-dark-950 font-display font-extrabold text-sm tracking-wide shadow-glow-neon flex items-center justify-center space-x-2 hover:opacity-95 transition",children:[m.jsx("span",{children:"PROCEED TO CHECKOUT"}),m.jsx(Yl,{className:"w-4 h-4 stroke-[2.5]"})]}),m.jsxs("div",{className:"flex items-center justify-center space-x-2 text-[10px] font-mono text-slate-500",children:[m.jsx(Kl,{className:"w-3.5 h-3.5 text-brand-neon"}),m.jsx("span",{children:"Encrypted 256-Bit Custom Order Dispatch"})]})]})]})})]})}var Rf={};(function s(e,t,r,o){var l=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),u=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),b=I.getContext("2d");b.fillRect(0,0,1,1);var $=I.transferToImageBitmap();b.createPattern($,"no-repeat")}catch{return!1}return!0})();function f(){}function p(I){var b=t.exports.Promise,$=b!==void 0?b:e.Promise;return typeof $=="function"?new $(I):(I(f,f),null)}var g=(function(I,b){return{transform:function($){if(I)return $;if(b.has($))return b.get($);var _e=new OffscreenCanvas($.width,$.height),q=_e.getContext("2d");return q.drawImage($,0,0),b.set($,_e),_e},clear:function(){b.clear()}}})(d,new Map),y=(function(){var I=Math.floor(16.666666666666668),b,$,_e={},q=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(re){var ge=Math.random();return _e[ge]=requestAnimationFrame(function oe(W){q===W||q+I-1<W?(q=W,delete _e[ge],re()):_e[ge]=requestAnimationFrame(oe)}),ge},$=function(re){_e[re]&&cancelAnimationFrame(_e[re])}):(b=function(re){return setTimeout(re,I)},$=function(re){return clearTimeout(re)}),{frame:b,cancel:$}})(),S=(function(){var I,b,$={};function _e(q){function re(ge,oe){q.postMessage({options:ge||{},callback:oe})}q.init=function(oe){var W=oe.transferControlToOffscreen();q.postMessage({canvas:W},[W])},q.fire=function(oe,W,ye){if(b)return re(oe,null),b;var Le=Math.random().toString(36).slice(2);return b=p(function(Ze){function me(Q){Q.data.callback===Le&&(delete $[Le],q.removeEventListener("message",me),b=null,g.clear(),ye(),Ze())}q.addEventListener("message",me),re(oe,Le),$[Le]=me.bind(null,{data:{callback:Le}})}),b},q.reset=function(){q.postMessage({reset:!0});for(var oe in $)$[oe](),delete $[oe]}}return function(){if(I)return I;if(!r&&l){var q=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([q])))}catch(re){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",re),null}_e(I)}return I}})(),_={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function w(I,b){return b?b(I):I}function E(I){return I!=null}function M(I,b,$){return w(I&&E(I[b])?I[b]:_[b],$)}function v(I){return I<0?0:Math.floor(I)}function L(I,b){return Math.floor(Math.random()*(b-I))+I}function D(I){return parseInt(I,16)}function C(I){return I.map(H)}function H(I){var b=String(I).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:D(b.substring(0,2)),g:D(b.substring(2,4)),b:D(b.substring(4,6))}}function F(I){var b=M(I,"origin",Object);return b.x=M(b,"x",Number),b.y=M(b,"y",Number),b}function O(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function B(I){var b=I.getBoundingClientRect();I.width=b.width,I.height=b.height}function P(I){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=I,b}function R(I,b,$,_e,q,re,ge,oe,W){I.save(),I.translate(b,$),I.rotate(re),I.scale(_e,q),I.arc(0,0,1,ge,oe,W),I.restore()}function j(I){var b=I.angle*(Math.PI/180),$=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-b+(.5*$-Math.random()*$),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function ne(I,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var $=b.tick++/b.totalTicks,_e=b.x+b.random*b.tiltCos,q=b.y+b.random*b.tiltSin,re=b.wobbleX+b.random*b.tiltCos,ge=b.wobbleY+b.random*b.tiltSin;if(I.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-$)+")",I.beginPath(),u&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))I.fill(fe(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(re-_e)*.1,Math.abs(ge-q)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var oe=Math.PI/10*b.wobble,W=Math.abs(re-_e)*.1,ye=Math.abs(ge-q)*.1,Le=b.shape.bitmap.width*b.scalar,Ze=b.shape.bitmap.height*b.scalar,me=new DOMMatrix([Math.cos(oe)*W,Math.sin(oe)*W,-Math.sin(oe)*ye,Math.cos(oe)*ye,b.x,b.y]);me.multiplySelf(new DOMMatrix(b.shape.matrix));var Q=I.createPattern(g.transform(b.shape.bitmap),"no-repeat");Q.setTransform(me),I.globalAlpha=1-$,I.fillStyle=Q,I.fillRect(b.x-Le/2,b.y-Ze/2,Le,Ze),I.globalAlpha=1}else if(b.shape==="circle")I.ellipse?I.ellipse(b.x,b.y,Math.abs(re-_e)*b.ovalScalar,Math.abs(ge-q)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):R(I,b.x,b.y,Math.abs(re-_e)*b.ovalScalar,Math.abs(ge-q)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var k=Math.PI/2*3,Fe=4*b.scalar,Ee=8*b.scalar,De=b.x,Te=b.y,st=5,ke=Math.PI/st;st--;)De=b.x+Math.cos(k)*Ee,Te=b.y+Math.sin(k)*Ee,I.lineTo(De,Te),k+=ke,De=b.x+Math.cos(k)*Fe,Te=b.y+Math.sin(k)*Fe,I.lineTo(De,Te),k+=ke;else I.moveTo(Math.floor(b.x),Math.floor(b.y)),I.lineTo(Math.floor(b.wobbleX),Math.floor(q)),I.lineTo(Math.floor(re),Math.floor(ge)),I.lineTo(Math.floor(_e),Math.floor(b.wobbleY));return I.closePath(),I.fill(),b.tick<b.totalTicks}function ee(I,b,$,_e,q){var re=b.slice(),ge=I.getContext("2d"),oe,W,ye=p(function(Le){function Ze(){oe=W=null,ge.clearRect(0,0,_e.width,_e.height),g.clear(),q(),Le()}function me(){r&&!(_e.width===o.width&&_e.height===o.height)&&(_e.width=I.width=o.width,_e.height=I.height=o.height),!_e.width&&!_e.height&&($(I),_e.width=I.width,_e.height=I.height),ge.clearRect(0,0,_e.width,_e.height),re=re.filter(function(Q){return ne(ge,Q)}),re.length?oe=y.frame(me):Ze()}oe=y.frame(me),W=Ze});return{addFettis:function(Le){return re=re.concat(Le),ye},canvas:I,promise:ye,reset:function(){oe&&y.cancel(oe),W&&W()}}}function he(I,b){var $=!I,_e=!!M(b||{},"resize"),q=!1,re=M(b,"disableForReducedMotion",Boolean),ge=l&&!!M(b||{},"useWorker"),oe=ge?S():null,W=$?O:B,ye=I&&oe?!!I.__confetti_initialized:!1,Le=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ze;function me(k,Fe,Ee){for(var De=M(k,"particleCount",v),Te=M(k,"angle",Number),st=M(k,"spread",Number),ke=M(k,"startVelocity",Number),U=M(k,"decay",Number),A=M(k,"gravity",Number),se=M(k,"drift",Number),Se=M(k,"colors",C),Me=M(k,"ticks",Number),ve=M(k,"shapes"),qe=M(k,"scalar"),Ne=!!M(k,"flat"),Oe=F(k),ut=De,Ae=[],je=I.width*Oe.x,it=I.height*Oe.y;ut--;)Ae.push(j({x:je,y:it,angle:Te,spread:st,startVelocity:ke,color:Se[ut%Se.length],shape:ve[L(0,ve.length)],ticks:Me,decay:U,gravity:A,drift:se,scalar:qe,flat:Ne}));return Ze?Ze.addFettis(Ae):(Ze=ee(I,Ae,W,Fe,Ee),Ze.promise)}function Q(k){var Fe=re||M(k,"disableForReducedMotion",Boolean),Ee=M(k,"zIndex",Number);if(Fe&&Le)return p(function(ke){ke()});$&&Ze?I=Ze.canvas:$&&!I&&(I=P(Ee),document.body.appendChild(I)),_e&&!ye&&W(I);var De={width:I.width,height:I.height};oe&&!ye&&oe.init(I),ye=!0,oe&&(I.__confetti_initialized=!0);function Te(){if(oe){var ke={getBoundingClientRect:function(){if(!$)return I.getBoundingClientRect()}};W(ke),oe.postMessage({resize:{width:ke.width,height:ke.height}});return}De.width=De.height=null}function st(){Ze=null,_e&&(q=!1,e.removeEventListener("resize",Te)),$&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,ye=!1)}return _e&&!q&&(q=!0,e.addEventListener("resize",Te,!1)),oe?oe.fire(k,De,st):me(k,De,st)}return Q.reset=function(){oe&&oe.reset(),Ze&&Ze.reset()},Q}var pe;function te(){return pe||(pe=he(null,{useWorker:!0,resize:!0})),pe}function fe(I,b,$,_e,q,re,ge){var oe=new Path2D(I),W=new Path2D;W.addPath(oe,new DOMMatrix(b));var ye=new Path2D;return ye.addPath(W,new DOMMatrix([Math.cos(ge)*q,Math.sin(ge)*q,-Math.sin(ge)*re,Math.cos(ge)*re,$,_e])),ye}function V(I){if(!u)throw new Error("path confetti are not supported in this browser");var b,$;typeof I=="string"?b=I:(b=I.path,$=I.matrix);var _e=new Path2D(b),q=document.createElement("canvas"),re=q.getContext("2d");if(!$){for(var ge=1e3,oe=ge,W=ge,ye=0,Le=0,Ze,me,Q=0;Q<ge;Q+=2)for(var k=0;k<ge;k+=2)re.isPointInPath(_e,Q,k,"nonzero")&&(oe=Math.min(oe,Q),W=Math.min(W,k),ye=Math.max(ye,Q),Le=Math.max(Le,k));Ze=ye-oe,me=Le-W;var Fe=10,Ee=Math.min(Fe/Ze,Fe/me);$=[Ee,0,0,Ee,-Math.round(Ze/2+oe)*Ee,-Math.round(me/2+W)*Ee]}return{type:"path",path:b,matrix:$}}function le(I){var b,$=1,_e="#000000",q='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?b=I:(b=I.text,$="scalar"in I?I.scalar:$,q="fontFamily"in I?I.fontFamily:q,_e="color"in I?I.color:_e);var re=10*$,ge=""+re+"px "+q,oe=new OffscreenCanvas(re,re),W=oe.getContext("2d");W.font=ge;var ye=W.measureText(b),Le=Math.ceil(ye.actualBoundingBoxRight+ye.actualBoundingBoxLeft),Ze=Math.ceil(ye.actualBoundingBoxAscent+ye.actualBoundingBoxDescent),me=2,Q=ye.actualBoundingBoxLeft+me,k=ye.actualBoundingBoxAscent+me;Le+=me+me,Ze+=me+me,oe=new OffscreenCanvas(Le,Ze),W=oe.getContext("2d"),W.font=ge,W.fillStyle=_e,W.fillText(b,Q,k);var Fe=1/$;return{type:"bitmap",bitmap:oe.transferToImageBitmap(),matrix:[Fe,0,0,Fe,-Le*Fe/2,-Ze*Fe/2]}}t.exports=function(){return te().apply(this,arguments)},t.exports.reset=function(){te().reset()},t.exports.create=he,t.exports.shapeFromPath=V,t.exports.shapeFromText=le})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Rf,!1);const $E=Rf.exports;Rf.exports.create;function qE({isOpen:s,onClose:e,cartItems:t=[],totalAmount:r=0,subtotal:o=0,shipping:l=0,discount:u=0,onOrderPlaced:d}){var F,O;const[f,p]=ze.useState("shipping"),[g,y]=ze.useState(!1),[S,_]=ze.useState(null),[w,E]=ze.useState({fullName:"Alex Rivera",email:"alex.rivera@example.com",address:"742 Evergreen Terrace",city:"San Francisco",state:"CA",postalCode:"94107",country:"United States"}),[M,v]=ze.useState("card"),[L,D]=ze.useState({number:"•••• •••• •••• 4242",name:"ALEX RIVERA",expiry:"12/28",cvv:"984"});if(!s)return null;const C=B=>{B.preventDefault(),p("payment")},H=async B=>{B.preventDefault(),y(!0);try{const P={customer:w,items:t.map(ne=>({productId:ne.productId,name:ne.productName,type:ne.type,primaryColor:ne.primaryColor,accentColor:ne.accentColor,fabricId:ne.fabricId,fabricName:ne.fabricName,size:ne.size,decal:ne.decal,quantity:ne.quantity,price:ne.price})),paymentMethod:M==="card"?"Credit Card (ending 4242)":M.toUpperCase(),subtotal:o,shipping:l,discount:u,total:r},j=await(await fetch("/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(P)})).json();j.success&&j.order&&(_(j.order),p("success"),d(j.order),$E({particleCount:120,spread:70,origin:{y:.6}}))}catch(P){console.error("Order creation failed:",P)}finally{y(!1)}};return m.jsxs("div",{className:"fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4",children:[m.jsx("div",{onClick:f==="success"?e:void 0,className:"fixed inset-0 bg-dark-950/85 backdrop-blur-md transition-opacity"}),m.jsxs("div",{className:"relative w-full max-w-xl bg-dark-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10",children:[m.jsxs("div",{className:"p-6 border-b border-slate-800 flex items-center justify-between bg-dark-850",children:[m.jsxs("div",{children:[m.jsx("div",{className:"flex items-center space-x-2",children:m.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-brand-neon font-bold",children:"Atelier 3D Checkout"})}),m.jsxs("h3",{className:"text-xl font-display font-bold text-white mt-0.5",children:[f==="shipping"&&"1. Delivery Address",f==="payment"&&"2. Secure Payment",f==="success"&&"Order Confirmed!"]})]}),m.jsx("button",{onClick:e,className:"p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition",children:m.jsx(Zl,{className:"w-5 h-5"})})]}),f==="shipping"&&m.jsxs("form",{onSubmit:C,className:"p-6 space-y-4",children:[m.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[m.jsxs("div",{className:"col-span-2",children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Full Name"}),m.jsx("input",{type:"text",required:!0,value:w.fullName,onChange:B=>E({...w,fullName:B.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon font-sans"})]}),m.jsxs("div",{className:"col-span-2",children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Email for Tracking Updates"}),m.jsx("input",{type:"email",required:!0,value:w.email,onChange:B=>E({...w,email:B.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon font-sans"})]}),m.jsxs("div",{className:"col-span-2",children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Street Address"}),m.jsx("input",{type:"text",required:!0,value:w.address,onChange:B=>E({...w,address:B.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon font-sans"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"City"}),m.jsx("input",{type:"text",required:!0,value:w.city,onChange:B=>E({...w,city:B.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Postal Code"}),m.jsx("input",{type:"text",required:!0,value:w.postalCode,onChange:B=>E({...w,postalCode:B.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon"})]}),m.jsxs("div",{className:"col-span-2",children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1.5",children:"Country"}),m.jsxs("select",{value:w.country,onChange:B=>E({...w,country:B.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-brand-neon",children:[m.jsx("option",{value:"United States",children:"United States"}),m.jsx("option",{value:"United Kingdom",children:"United Kingdom"}),m.jsx("option",{value:"Germany",children:"Germany"}),m.jsx("option",{value:"Japan",children:"Japan"}),m.jsx("option",{value:"Canada",children:"Canada"}),m.jsx("option",{value:"France",children:"France"}),m.jsx("option",{value:"Australia",children:"Australia"})]})]})]}),m.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between",children:[m.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Total: $",r]}),m.jsxs("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center space-x-2 hover:opacity-90 transition shadow-glow-neon",children:[m.jsx("span",{children:"CONTINUE TO PAYMENT"}),m.jsx(Yl,{className:"w-3.5 h-3.5"})]})]})]}),f==="payment"&&m.jsxs("form",{onSubmit:H,className:"p-6 space-y-5",children:[m.jsx("div",{className:"grid grid-cols-3 gap-3",children:[{id:"card",label:"Credit Card",icon:om},{id:"apple",label:"Apple Pay",icon:Kl},{id:"klarna",label:"Klarna 4x",icon:Ya}].map(B=>{const P=B.icon,R=M===B.id;return m.jsxs("button",{type:"button",onClick:()=>v(B.id),className:`py-3 px-2 rounded-xl border flex flex-col items-center justify-center text-xs transition ${R?"border-brand-cyan bg-brand-cyan/10 text-brand-cyan font-bold ring-2 ring-brand-cyan/30":"border-slate-800 text-slate-400 hover:text-white bg-dark-950"}`,children:[m.jsx(P,{className:"w-4 h-4 mb-1"}),m.jsx("span",{children:B.label})]},B.id)})}),m.jsxs("div",{className:"relative rounded-2xl p-5 bg-gradient-to-tr from-slate-900 via-dark-800 to-slate-900 border border-slate-700 shadow-xl overflow-hidden",children:[m.jsxs("div",{className:"flex justify-between items-start mb-6",children:[m.jsx("span",{className:"text-xs font-mono text-brand-cyan font-bold tracking-widest",children:"ATELIER BLACK"}),m.jsx("span",{className:"text-xs font-mono text-slate-400",children:"VISA / MASTERCARD"})]}),m.jsx("div",{className:"text-lg font-mono tracking-widest text-white mb-4",children:"4242 •••• •••• 9842"}),m.jsxs("div",{className:"flex justify-between items-end text-xs font-mono text-slate-300",children:[m.jsxs("div",{children:[m.jsx("span",{className:"block text-[9px] text-slate-500 uppercase",children:"Cardholder"}),m.jsx("span",{children:w.fullName.toUpperCase()})]}),m.jsxs("div",{children:[m.jsx("span",{className:"block text-[9px] text-slate-500 uppercase",children:"Expires"}),m.jsx("span",{children:"12 / 28"})]})]})]}),m.jsxs("div",{className:"space-y-3",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Card Number"}),m.jsxs("div",{className:"relative",children:[m.jsx(om,{className:"w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2"}),m.jsx("input",{type:"text",required:!0,value:L.number,onChange:B=>D({...L,number:B.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-brand-neon"})]})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Expiration"}),m.jsx("input",{type:"text",required:!0,value:L.expiry,onChange:B=>D({...L,expiry:B.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-brand-neon"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"CVC / CVV"}),m.jsx("input",{type:"password",required:!0,maxLength:4,value:L.cvv,onChange:B=>D({...L,cvv:B.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white font-mono focus:outline-none focus:border-brand-neon"})]})]})]}),m.jsxs("div",{className:"pt-4 border-t border-slate-800 flex items-center justify-between",children:[m.jsx("button",{type:"button",onClick:()=>p("shipping"),className:"text-xs font-mono text-slate-400 hover:text-white",children:"← Back"}),m.jsxs("button",{type:"submit",disabled:g,className:"px-6 py-3 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center space-x-2 hover:opacity-90 transition shadow-glow-neon",children:[m.jsx(qv,{className:"w-3.5 h-3.5 stroke-[2.5]"}),m.jsx("span",{children:g?"AUTHORIZING...":`PAY $${r}`})]})]})]}),f==="success"&&S&&m.jsxs("div",{className:"p-8 text-center space-y-6",children:[m.jsx("div",{className:"w-16 h-16 rounded-3xl bg-brand-neon/20 border border-brand-neon/50 text-brand-neon flex items-center justify-center mx-auto shadow-glow-neon animate-bounce",children:m.jsx(b0,{className:"w-9 h-9"})}),m.jsxs("div",{children:[m.jsx("span",{className:"text-xs font-mono text-brand-neon font-bold uppercase tracking-wider",children:"Production Queue Initiated"}),m.jsxs("h2",{className:"text-2xl font-display font-extrabold text-white mt-1",children:["Thank You, ",(F=S.customer)==null?void 0:F.fullName,"!"]}),m.jsx("p",{className:"text-xs text-slate-400 mt-1 max-w-sm mx-auto",children:"Your custom 3D garment specs have been submitted to our digital cutter and tailoring workshop."})]}),m.jsxs("div",{className:"p-4 rounded-2xl bg-dark-950 border border-slate-800 space-y-2",children:[m.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[m.jsx("span",{className:"text-slate-400",children:"Order Reference"}),m.jsx("span",{className:"text-brand-cyan font-bold",children:S.orderId})]}),m.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[m.jsx("span",{className:"text-slate-400",children:"Items Ordered"}),m.jsxs("span",{className:"text-white",children:[(O=S.items)==null?void 0:O.length," Bespoke Pieces"]})]}),m.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[m.jsx("span",{className:"text-slate-400",children:"Total Charged"}),m.jsxs("span",{className:"text-brand-neon font-bold",children:["$",S.total]})]}),m.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[m.jsx("span",{className:"text-slate-400",children:"Estimated Delivery"}),m.jsx("span",{className:"text-white",children:"3-5 Business Days"})]})]}),m.jsxs("div",{className:"flex flex-col sm:flex-row gap-3 pt-2",children:[m.jsxs("button",{onClick:()=>{e(),window.location.hash=`#track-${S.orderId}`},className:"flex-1 py-3 px-4 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center justify-center space-x-2 hover:opacity-90 shadow-glow-neon",children:[m.jsx(Hl,{className:"w-4 h-4"}),m.jsx("span",{children:"TRACK MY ORDER"})]}),m.jsx("button",{onClick:e,className:"py-3 px-5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-semibold",children:"Back to Studio"})]})]})]})]})}function YE({initialOrderId:s="TC-94821",onOpenStudio:e}){var S,_,w,E,M,v,L,D,C;const[t,r]=ze.useState(s),[o,l]=ze.useState(null),[u,d]=ze.useState(!1),[f,p]=ze.useState(""),g=async H=>{if(H){d(!0),p("");try{const O=await(await fetch(`/api/orders/${H.trim()}`)).json();O.success&&O.order?l(O.order):(p("Order not found. Check code (e.g. TC-94821)."),l(null))}catch{p("Failed to fetch order tracking."),l(null)}finally{d(!1)}}};ze.useEffect(()=>{s&&g(s)},[s]);const y=H=>{H.preventDefault(),g(t)};return m.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[m.jsxs("div",{className:"text-center space-y-3 max-w-xl mx-auto",children:[m.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 text-xs font-mono font-bold uppercase tracking-wider",children:[m.jsx(Hl,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Real-time Atelier Tracking"})]}),m.jsx("h1",{className:"text-3xl font-display font-extrabold text-white",children:"Live Garment Dispatch Status"}),m.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Track the digital cutting, 3D screen printing, and tailored assembly of your bespoke garments."}),m.jsxs("form",{onSubmit:y,className:"flex gap-2 pt-2",children:[m.jsxs("div",{className:"relative flex-1",children:[m.jsx($0,{className:"w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2"}),m.jsx("input",{type:"text",placeholder:"Enter Order Code (e.g. TC-94821)",value:t,onChange:H=>r(H.target.value),className:"w-full bg-dark-900 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white font-mono uppercase focus:outline-none focus:border-brand-neon"})]}),m.jsx("button",{type:"submit",className:"px-6 py-3 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs font-display hover:opacity-90 transition shadow-glow-neon",children:"Track Order"})]}),f&&m.jsx("p",{className:"text-xs font-mono text-rose-400",children:f})]}),u&&m.jsx("div",{className:"text-center py-12 text-slate-400 font-mono text-xs animate-pulse",children:"Retrieving garment production log..."}),o&&!u&&m.jsxs("div",{className:"space-y-6",children:[m.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl space-y-6",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4",children:[m.jsxs("div",{children:[m.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Order ID"}),m.jsx("h3",{className:"text-2xl font-mono font-bold text-brand-neon",children:o.orderId})]}),m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40",children:o.status}),m.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Placed: ",new Date(o.createdAt).toLocaleDateString()]})]})]}),m.jsx("div",{className:"relative pt-4",children:m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-4",children:(S=o.timeline)==null?void 0:S.map((H,F)=>m.jsxs("div",{className:"flex sm:flex-col items-center sm:text-center space-x-3 sm:space-x-0 sm:space-y-2",children:[m.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition shadow-lg ${H.done?"bg-brand-neon text-dark-950 shadow-glow-neon":"bg-dark-950 text-slate-500 border border-slate-800"}`,children:H.done?m.jsx(b0,{className:"w-5 h-5 stroke-[2.5]"}):F+1}),m.jsxs("div",{children:[m.jsx("h4",{className:`text-xs font-bold leading-tight ${H.done?"text-white":"text-slate-500"}`,children:H.status}),H.time&&m.jsx("span",{className:"text-[10px] font-mono text-brand-cyan block",children:new Date(H.time).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]},F))})})]}),m.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[m.jsxs("div",{className:"md:col-span-2 p-6 rounded-3xl bg-dark-900 border border-slate-800 space-y-4",children:[m.jsxs("h4",{className:"text-sm font-bold text-white font-display flex items-center space-x-2",children:[m.jsx(Qv,{className:"w-4 h-4 text-brand-neon"}),m.jsx("span",{children:"Custom Garments in This Order"})]}),m.jsx("div",{className:"space-y-3",children:(_=o.items)==null?void 0:_.map((H,F)=>m.jsxs("div",{className:"p-4 rounded-2xl bg-dark-950 border border-slate-800 flex items-center justify-between",children:[m.jsxs("div",{children:[m.jsx("h5",{className:"text-sm font-bold text-white",children:H.name}),m.jsxs("div",{className:"flex items-center space-x-2 text-xs text-slate-400 font-mono mt-1",children:[m.jsxs("span",{children:["Size: ",H.size]}),m.jsx("span",{children:"•"}),m.jsx("span",{className:"text-brand-cyan",children:H.fabricName||"Custom"})]}),m.jsxs("div",{className:"flex items-center space-x-2 mt-2",children:[m.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-slate-700",style:{backgroundColor:H.primaryColor}}),m.jsx("span",{className:"w-3.5 h-3.5 rounded-full border border-slate-700",style:{backgroundColor:H.accentColor}})]})]}),m.jsxs("div",{className:"text-right",children:[m.jsxs("span",{className:"text-sm font-display font-bold text-white",children:["$",H.price]}),m.jsxs("span",{className:"text-xs text-slate-500 block font-mono",children:["Qty: ",H.quantity||1]})]})]},F))})]}),m.jsxs("div",{className:"p-6 rounded-3xl bg-dark-900 border border-slate-800 space-y-4",children:[m.jsxs("h4",{className:"text-sm font-bold text-white font-display flex items-center space-x-2",children:[m.jsx(Hl,{className:"w-4 h-4 text-brand-cyan"}),m.jsx("span",{children:"Shipping Address"})]}),m.jsxs("div",{className:"space-y-1 text-xs text-slate-300 font-mono",children:[m.jsx("p",{className:"font-bold text-white",children:(w=o.customer)==null?void 0:w.fullName}),m.jsx("p",{children:(E=o.customer)==null?void 0:E.address}),m.jsxs("p",{children:[(M=o.customer)==null?void 0:M.city,", ",(v=o.customer)==null?void 0:v.state," ",(L=o.customer)==null?void 0:L.postalCode]}),m.jsx("p",{children:(D=o.customer)==null?void 0:D.country}),m.jsx("p",{className:"pt-2 text-slate-400",children:(C=o.customer)==null?void 0:C.email})]}),m.jsxs("div",{className:"pt-4 border-t border-slate-800 space-y-1 text-xs font-mono",children:[m.jsxs("div",{className:"flex justify-between text-slate-400",children:[m.jsx("span",{children:"Subtotal"}),m.jsxs("span",{className:"text-white",children:["$",o.subtotal]})]}),m.jsxs("div",{className:"flex justify-between text-slate-400",children:[m.jsx("span",{children:"Shipping"}),m.jsx("span",{className:"text-white",children:o.shipping===0?"FREE":`$${o.shipping}`})]}),m.jsxs("div",{className:"flex justify-between text-brand-neon font-bold text-sm pt-2 border-t border-slate-800/80",children:[m.jsx("span",{children:"Total Paid"}),m.jsxs("span",{children:["$",o.total]})]})]})]})]})]})]})}function KE({savedDesigns:s=[],onLoadIntoStudio:e,onAddToCart:t,onDeleteDesign:r}){return m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-violet/20 text-brand-cyan border border-brand-violet/40 text-xs font-mono font-bold tracking-wider mb-2",children:[m.jsx(jl,{className:"w-3.5 h-3.5 text-brand-neon"}),m.jsx("span",{children:"Personal Atelier Archive"})]}),m.jsx("h1",{className:"text-3xl font-display font-extrabold text-white",children:"Your Saved 3D Wardrobe"}),m.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"Revisit your custom-crafted garments, adjust tailoring configurations, or dispatch them directly to cart."})]}),m.jsxs("span",{className:"text-xs font-mono text-slate-400 bg-dark-900 px-3 py-1.5 rounded-xl border border-slate-800",children:[s.length," Saved Creations"]})]}),s.length===0?m.jsxs("div",{className:"text-center py-20 rounded-3xl bg-dark-900 border border-slate-800 p-8 space-y-4",children:[m.jsx("div",{className:"w-16 h-16 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-500 mx-auto",children:m.jsx(jl,{className:"w-8 h-8"})}),m.jsx("h3",{className:"text-lg font-bold text-white",children:"No custom designs saved yet"}),m.jsx("p",{className:"text-xs text-slate-400 max-w-sm mx-auto",children:'Open the 3D Studio, pick custom fabrics, colors, and decal placements, and click "Save Design" to store your creations here.'}),m.jsx("button",{onClick:()=>e(null),className:"px-6 py-2.5 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs font-display hover:opacity-90 shadow-glow-neon",children:"Launch 3D Studio"})]}):m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:s.map(o=>m.jsxs("div",{className:"group rounded-2xl bg-dark-900 border border-slate-800 hover:border-brand-neon/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl",children:[m.jsxs("div",{className:"p-5 bg-dark-950/80 border-b border-slate-800/80 flex items-center justify-between",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"text-base font-bold text-white font-display group-hover:text-brand-neon transition",children:o.name||o.productName}),m.jsx("span",{className:"text-xs font-mono text-slate-400",children:o.productName})]}),m.jsx("button",{onClick:()=>r(o.id),title:"Delete design",className:"p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition",children:m.jsx(ng,{className:"w-4 h-4"})})]}),m.jsxs("div",{className:"p-5 space-y-4 flex-1",children:[m.jsxs("div",{onClick:()=>e(o),className:"h-36 rounded-xl bg-dark-900 border border-slate-800 flex flex-col items-center justify-center cursor-pointer hover:border-brand-cyan/60 transition group-hover:bg-dark-850",children:[m.jsx("div",{className:"w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-brand-neon mb-2 shadow-lg",children:m.jsx(Ar,{className:"w-6 h-6"})}),m.jsxs("span",{className:"text-xs font-mono text-brand-cyan flex items-center space-x-1",children:[m.jsx("span",{children:"Inspect in 3D"}),m.jsx(Yl,{className:"w-3 h-3"})]})]}),m.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[m.jsxs("div",{className:"flex justify-between",children:[m.jsx("span",{className:"text-slate-400",children:"Fabric Grade:"}),m.jsx("span",{className:"text-white font-bold",children:o.fabricName||"French Terry"})]}),m.jsxs("div",{className:"flex justify-between",children:[m.jsx("span",{className:"text-slate-400",children:"Selected Size:"}),m.jsx("span",{className:"text-brand-neon font-bold",children:o.size||"L"})]}),m.jsxs("div",{className:"flex justify-between items-center",children:[m.jsx("span",{className:"text-slate-400",children:"Palette:"}),m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:o.primaryColor},title:"Primary Color"}),m.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:o.accentColor},title:"Accent Color"}),o.cordsColor&&m.jsx("span",{className:"w-4 h-4 rounded-full border border-slate-700 shadow-sm",style:{backgroundColor:o.cordsColor},title:"Hardware / Cords"})]})]})]})]}),m.jsxs("div",{className:"p-4 bg-dark-850/90 border-t border-slate-800 flex items-center justify-between gap-3",children:[m.jsxs("span",{className:"text-lg font-display font-extrabold text-white",children:["$",o.price||128]}),m.jsxs("div",{className:"flex items-center space-x-2",children:[m.jsxs("button",{onClick:()=>e(o),className:"px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition flex items-center space-x-1",children:[m.jsx(Ar,{className:"w-3.5 h-3.5 text-brand-cyan"}),m.jsx("span",{children:"Open 3D"})]}),m.jsxs("button",{onClick:()=>t(o),className:"px-4 py-2 rounded-xl bg-brand-neon hover:opacity-90 text-dark-950 font-bold text-xs transition flex items-center space-x-1.5 shadow-glow-neon",children:[m.jsx(Ys,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Add to Bag"})]})]})]})]},o.id))})]})}function ZE({onRefreshData:s}){const[e,t]=ze.useState(null),[r,o]=ze.useState([]),[l,u]=ze.useState(!0),[d,f]=ze.useState(!1),[p,g]=ze.useState({name:"",category:"Hoodies",type:"hoodie",price:135,tagline:"",description:""}),y=async()=>{u(!0);try{const[_,w]=await Promise.all([fetch("/api/admin/metrics"),fetch("/api/orders")]),E=await _.json(),M=await w.json();E.success&&t(E.metrics),M.success&&o(M.orders)}catch(_){console.error("Failed to load admin stats:",_)}finally{u(!1)}};ze.useEffect(()=>{y()},[]);const S=async _=>{_.preventDefault();try{(await(await fetch("/api/products",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...p,price:Number(p.price),colors:[{name:"Onyx Black",hex:"#14171d"},{name:"Cyber Neon",hex:"#00f5a0"},{name:"Electric Cyan",hex:"#00d9f5"}],fabrics:[{id:"terry",name:"Heavyweight French Terry",gsm:"480 GSM",priceExtra:0,desc:"Dense combed knit."},{id:"cotton",name:"Brushed Fleece Cotton",gsm:"420 GSM",priceExtra:15,desc:"Thermal fleece."}],sizes:["S","M","L","XL"]})})).json()).success&&(f(!1),g({name:"",category:"Hoodies",type:"hoodie",price:135,tagline:"",description:""}),y(),s&&s())}catch(w){console.error("Failed to create product:",w)}};return m.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8",children:[m.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-neon/15 text-brand-neon border border-brand-neon/30 text-xs font-mono font-bold tracking-wider mb-2",children:[m.jsx(Kl,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Atelier Operational Center"})]}),m.jsx("h1",{className:"text-3xl font-display font-extrabold text-white",children:"Studio Management & Metrics"}),m.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-1",children:"Real-time telemetry on customer 3D customizations, orders pipeline, and catalog garments."})]}),m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("button",{onClick:y,className:"p-2.5 rounded-xl glass-panel border border-slate-700 text-slate-300 hover:text-white",title:"Refresh metrics",children:m.jsx(i_,{className:`w-4 h-4 ${l?"animate-spin":""}`})}),m.jsxs("button",{onClick:()=>f(!0),className:"px-4 py-2.5 rounded-xl bg-brand-neon text-dark-950 font-display font-extrabold text-xs tracking-wider flex items-center space-x-1.5 shadow-glow-neon",children:[m.jsx(V0,{className:"w-4 h-4 stroke-[3]"}),m.jsx("span",{children:"ADD NEW GARMENT"})]})]})]}),m.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[{label:"Gross Studio Revenue",val:`$${(e==null?void 0:e.totalRevenue)||0}`,icon:Wv,color:"text-brand-neon",bg:"bg-brand-neon/10 border-brand-neon/20"},{label:"Custom Orders Placed",val:(e==null?void 0:e.totalOrders)||0,icon:Ys,color:"text-brand-cyan",bg:"bg-brand-cyan/10 border-brand-cyan/20"},{label:"3D Custom Creations",val:(e==null?void 0:e.totalDesigns)||0,icon:Ar,color:"text-purple-400",bg:"bg-purple-500/10 border-purple-500/20"},{label:"Active Catalog Pieces",val:(e==null?void 0:e.totalProducts)||6,icon:hf,color:"text-brand-gold",bg:"bg-brand-gold/10 border-brand-gold/20"}].map((_,w)=>{const E=_.icon;return m.jsxs("div",{className:"p-5 rounded-2xl bg-dark-900 border border-slate-800 flex items-center justify-between shadow-xl",children:[m.jsxs("div",{children:[m.jsx("span",{className:"text-xs font-mono text-slate-400 block mb-1",children:_.label}),m.jsx("span",{className:"text-2xl font-display font-extrabold text-white",children:_.val})]}),m.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center border ${_.bg}`,children:m.jsx(E,{className:`w-6 h-6 ${_.color}`})})]},w)})}),m.jsxs("div",{className:"p-6 rounded-3xl bg-dark-900 border border-slate-800 shadow-xl space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg font-bold font-display text-white",children:"Live Orders Dispatch Queue"}),m.jsx("p",{className:"text-xs text-slate-400 font-mono",children:"Bespoke garments currently in queue"})]}),m.jsxs("span",{className:"text-xs font-mono text-brand-neon",children:[r.length," Orders"]})]}),m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 uppercase text-[10px]",children:[m.jsx("th",{className:"py-3 px-4",children:"Order Code"}),m.jsx("th",{className:"py-3 px-4",children:"Customer"}),m.jsx("th",{className:"py-3 px-4",children:"Garment Items"}),m.jsx("th",{className:"py-3 px-4",children:"Total"}),m.jsx("th",{className:"py-3 px-4",children:"Production Status"}),m.jsx("th",{className:"py-3 px-4",children:"Date"})]})}),m.jsx("tbody",{className:"divide-y divide-slate-800/60",children:r.map(_=>{var w,E,M;return m.jsxs("tr",{className:"hover:bg-dark-950 transition",children:[m.jsx("td",{className:"py-3.5 px-4 font-bold text-brand-cyan",children:_.orderId}),m.jsxs("td",{className:"py-3.5 px-4 text-white",children:[m.jsx("div",{children:(w=_.customer)==null?void 0:w.fullName}),m.jsx("span",{className:"text-[10px] text-slate-500 font-sans",children:(E=_.customer)==null?void 0:E.email})]}),m.jsx("td",{className:"py-3.5 px-4 text-slate-300",children:(M=_.items)==null?void 0:M.map(v=>`${v.name} (${v.size})`).join(", ")}),m.jsxs("td",{className:"py-3.5 px-4 text-brand-neon font-bold",children:["$",_.total]}),m.jsx("td",{className:"py-3.5 px-4",children:m.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-neon/15 text-brand-neon border border-brand-neon/30",children:_.status})}),m.jsx("td",{className:"py-3.5 px-4 text-slate-400",children:new Date(_.createdAt).toLocaleDateString()})]},_.orderId)})})]})})]}),d&&m.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[m.jsx("div",{onClick:()=>f(!1),className:"fixed inset-0 bg-dark-950/80 backdrop-blur-md"}),m.jsxs("div",{className:"relative w-full max-w-lg bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl z-10 space-y-4",children:[m.jsx("h3",{className:"text-xl font-display font-bold text-white",children:"Add New Garment to Atelier"}),m.jsxs("form",{onSubmit:S,className:"space-y-3",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Product Name"}),m.jsx("input",{type:"text",required:!0,placeholder:"e.g. Phantom Cyber Anorak",value:p.name,onChange:_=>g({...p,name:_.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Category"}),m.jsxs("select",{value:p.category,onChange:_=>g({...p,category:_.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white",children:[m.jsx("option",{value:"Hoodies",children:"Hoodies"}),m.jsx("option",{value:"T-Shirts",children:"T-Shirts"}),m.jsx("option",{value:"Jackets",children:"Jackets"}),m.jsx("option",{value:"Blazers",children:"Blazers"}),m.jsx("option",{value:"Pants",children:"Pants"}),m.jsx("option",{value:"Headwear",children:"Headwear"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"3D Mesh Type"}),m.jsxs("select",{value:p.type,onChange:_=>g({...p,type:_.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white",children:[m.jsx("option",{value:"hoodie",children:"Hoodie"}),m.jsx("option",{value:"tshirt",children:"T-Shirt"}),m.jsx("option",{value:"jacket",children:"Jacket"}),m.jsx("option",{value:"blazer",children:"Blazer"}),m.jsx("option",{value:"pants",children:"Cargo Pants"}),m.jsx("option",{value:"cap",children:"Cap"})]})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Base Price ($)"}),m.jsx("input",{type:"number",required:!0,value:p.price,onChange:_=>g({...p,price:_.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-xs font-mono text-slate-400 block mb-1",children:"Tagline"}),m.jsx("input",{type:"text",placeholder:"e.g. 500 GSM heavyweight brushed fleece",value:p.tagline,onChange:_=>g({...p,tagline:_.target.value}),className:"w-full bg-dark-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-white"})]}),m.jsxs("div",{className:"pt-3 border-t border-slate-800 flex justify-end space-x-3",children:[m.jsx("button",{type:"button",onClick:()=>f(!1),className:"px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white",children:"Cancel"}),m.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs",children:"Create Garment"})]})]})]})]})]})}function JE({isOpen:s,onClose:e}){const[t,r]=ze.useState("cm");if(!s)return null;const o=t==="cm"?[{size:"XS",chest:"106 cm",length:"68 cm",sleeve:"58 cm"},{size:"S",chest:"112 cm",length:"71 cm",sleeve:"60 cm"},{size:"M",chest:"118 cm",length:"73 cm",sleeve:"62 cm"},{size:"L",chest:"124 cm",length:"76 cm",sleeve:"64 cm"},{size:"XL",chest:"130 cm",length:"78 cm",sleeve:"66 cm"},{size:"XXL",chest:"136 cm",length:"81 cm",sleeve:"67 cm"}]:[{size:"XS",chest:"41.7 in",length:"26.8 in",sleeve:"22.8 in"},{size:"S",chest:"44.1 in",length:"28.0 in",sleeve:"23.6 in"},{size:"M",chest:"46.5 in",length:"28.7 in",sleeve:"24.4 in"},{size:"L",chest:"48.8 in",length:"29.9 in",sleeve:"25.2 in"},{size:"XL",chest:"51.2 in",length:"30.7 in",sleeve:"26.0 in"},{size:"XXL",chest:"53.5 in",length:"31.9 in",sleeve:"26.4 in"}];return m.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4",children:[m.jsx("div",{onClick:e,className:"fixed inset-0 bg-dark-950/80 backdrop-blur-md"}),m.jsxs("div",{className:"relative w-full max-w-lg bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl z-10 space-y-5",children:[m.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-800",children:[m.jsxs("div",{className:"flex items-center space-x-2",children:[m.jsx(bd,{className:"w-5 h-5 text-brand-neon"}),m.jsx("h3",{className:"text-lg font-display font-bold text-white",children:"Garment Sizing Specification"})]}),m.jsx("button",{onClick:e,className:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800",children:m.jsx(Zl,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[m.jsx("span",{className:"text-slate-400",children:"Oversized Streetwear Silhouette"}),m.jsxs("div",{className:"flex bg-dark-950 p-1 rounded-xl border border-slate-800",children:[m.jsx("button",{onClick:()=>r("cm"),className:`px-3 py-1 rounded-lg transition ${t==="cm"?"bg-brand-neon text-dark-950 font-bold":"text-slate-400"}`,children:"CM"}),m.jsx("button",{onClick:()=>r("in"),className:`px-3 py-1 rounded-lg transition ${t==="in"?"bg-brand-neon text-dark-950 font-bold":"text-slate-400"}`,children:"INCHES"})]})]}),m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 uppercase text-[10px]",children:[m.jsx("th",{className:"py-2.5 px-3",children:"Size"}),m.jsx("th",{className:"py-2.5 px-3",children:"Chest Width"}),m.jsx("th",{className:"py-2.5 px-3",children:"Garment Length"}),m.jsx("th",{className:"py-2.5 px-3",children:"Sleeve Length"})]})}),m.jsx("tbody",{className:"divide-y divide-slate-800/60",children:o.map(l=>m.jsxs("tr",{className:"hover:bg-dark-950/80",children:[m.jsx("td",{className:"py-2.5 px-3 font-bold text-brand-neon",children:l.size}),m.jsx("td",{className:"py-2.5 px-3 text-slate-200",children:l.chest}),m.jsx("td",{className:"py-2.5 px-3 text-slate-200",children:l.length}),m.jsx("td",{className:"py-2.5 px-3 text-slate-200",children:l.sleeve})]},l.size))})]})}),m.jsxs("div",{className:"p-3.5 rounded-xl bg-dark-950 border border-slate-800 text-xs text-slate-400 space-y-1",children:[m.jsx("p",{className:"font-bold text-white",children:"How We Measure:"}),m.jsx("p",{children:"• Chest is measured flat from armpit to armpit and multiplied by 2."}),m.jsx("p",{children:"• Length is measured from highest shoulder point down to bottom hemline."})]})]})]})}function QE(){const[s,e]=ze.useState("studio"),[t,r]=ze.useState([]),[o,l]=ze.useState([]),[u,d]=ze.useState([]),[f,p]=ze.useState(!0),[g,y]=ze.useState(null),[S,_]=ze.useState({primaryColor:"#14171d",accentColor:"#00f5a0",cordsColor:"#ffffff",fabricId:"terry",size:"L",decal:{id:"cyber-kanji",position:"front",scale:.65,rotation:0,opacity:.95}}),[w,E]=ze.useState(null),[M,v]=ze.useState(!1),[L,D]=ze.useState(null),[C,H]=ze.useState(()=>{try{const me=localStorage.getItem("atelier_cart");return me?JSON.parse(me):[]}catch{return[]}}),[F,O]=ze.useState(!1),[B,P]=ze.useState(!1),[R,j]=ze.useState(""),[ne,ee]=ze.useState(0),[he,pe]=ze.useState("TC-94821"),[te,fe]=ze.useState(null);ze.useEffect(()=>{try{localStorage.setItem("atelier_cart",JSON.stringify(C))}catch(me){console.warn("Could not save cart to localStorage",me)}},[C]);const V=async()=>{var me,Q;try{const[k,Fe,Ee]=await Promise.all([fetch("/api/products"),fetch("/api/presets"),fetch("/api/custom-designs")]),De=await k.json(),Te=await Fe.json(),st=await Ee.json();if(De.success&&De.products.length>0&&(r(De.products),!g)){const ke=De.products[0];y(ke),ke.defaultConfig&&_({...ke.defaultConfig,decal:{...ke.defaultConfig.decal,svgContent:((Q=(me=Te.presets)==null?void 0:me[0])==null?void 0:Q.svg)||null}})}Te.success&&l(Te.presets),st.success&&d(st.designs)}catch(k){console.error("Error fetching data:",k)}finally{p(!1)}};ze.useEffect(()=>{V()},[]),ze.useEffect(()=>{const me=()=>{const Q=window.location.hash;if(Q.startsWith("#track-")){const k=Q.replace("#track-","");pe(k),e("tracking")}};return window.addEventListener("hashchange",me),me(),()=>window.removeEventListener("hashchange",me)},[]);const le=me=>{D(me),setTimeout(()=>D(null),3e3)},I=me=>{if(y(me),me.defaultConfig){const Q=o.find(k=>{var Fe;return k.id===((Fe=me.defaultConfig.decal)==null?void 0:Fe.id)})||o[0];_({...me.defaultConfig,decal:{...me.defaultConfig.decal,svgContent:(Q==null?void 0:Q.svg)||null}})}e("studio")},b=({product:me,customConfig:Q,fabric:k,price:Fe})=>{const Ee={cartId:`item-${Date.now()}-${Math.random()}`,productId:me.id,productName:me.name,type:me.type,primaryColor:Q.primaryColor,accentColor:Q.accentColor,cordsColor:Q.cordsColor,fabricId:Q.fabricId,fabricName:k.name||"Standard",size:Q.size,decal:Q.decal,price:Fe,quantity:1};H(De=>[Ee,...De]),O(!0),le(`Added ${me.name} (${Q.size}) to Bag!`)},$=async me=>{try{const k=await(await fetch("/api/custom-designs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:`${g.name} Custom`,...me})})).json();k.success&&k.design&&(d(Fe=>[k.design,...Fe]),le("Saved custom creation to your Wardrobe!"))}catch(Q){console.error("Failed to save design:",Q)}},_e=async me=>{try{(await(await fetch(`/api/custom-designs/${me}`,{method:"DELETE"})).json()).success&&(d(Fe=>Fe.filter(Ee=>Ee.id!==me)),le("Design deleted from Wardrobe."))}catch(Q){console.error("Failed to delete design:",Q)}},q=me=>{if(!me){e("studio");return}const Q=t.find(Fe=>Fe.id===me.productId)||t[0];y(Q);const k=o.find(Fe=>{var Ee;return Fe.id===((Ee=me.decal)==null?void 0:Ee.id)});_({primaryColor:me.primaryColor,accentColor:me.accentColor,cordsColor:me.cordsColor||"#ffffff",fabricId:me.fabricId,size:me.size||"L",decal:{...me.decal,svgContent:k?k.svg:null}}),e("studio"),le(`Loaded ${me.name} into 3D Studio.`)},re=me=>{H([]),pe(me.orderId)},ge=(me,Q)=>{H(k=>k.map(Fe=>Fe.cartId===me?{...Fe,quantity:Q}:Fe))},oe=me=>{H(Q=>Q.filter(k=>k.cartId!==me))},W=(me,Q)=>{j(me),ee(Q)},ye=C.reduce((me,Q)=>me+Q.price*Q.quantity,0),Le=ye>150||R==="FREESHIP"||C.length===0?0:15,Ze=Math.max(0,ye-ne+Le);return m.jsxs("div",{className:"min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-neon/30 selection:text-brand-neon",children:[L&&m.jsxs("div",{className:"fixed bottom-6 right-6 z-50 glass-panel border border-brand-neon/50 px-4 py-3 rounded-2xl shadow-2xl flex items-center space-x-2 text-xs font-mono text-white animate-fade-in backdrop-blur-xl",children:[m.jsx(Ed,{className:"w-4 h-4 text-brand-neon"}),m.jsx("span",{children:L})]}),m.jsx(u_,{currentView:s,onNavigate:e,cartCount:C.reduce((me,Q)=>me+Q.quantity,0),onOpenCart:()=>O(!0),savedCount:u.length}),m.jsxs("main",{className:"flex-1 flex flex-col",children:[s==="studio"&&m.jsxs("div",{className:"flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between glass-panel p-2 rounded-2xl border border-slate-800/80 overflow-x-auto scrollbar-none gap-2",children:[m.jsx("span",{className:"text-[11px] font-mono text-slate-400 uppercase tracking-wider px-3 hidden lg:inline",children:"Garment Models:"}),m.jsx("div",{className:"flex items-center space-x-1.5",children:t.map(me=>{const Q=(g==null?void 0:g.id)===me.id;return m.jsxs("button",{onClick:()=>I(me),className:`flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${Q?"bg-brand-neon text-dark-950 font-bold shadow-glow-neon":"text-slate-400 hover:text-white hover:bg-slate-800/60"}`,children:[m.jsx(Ar,{className:`w-3.5 h-3.5 ${Q?"text-dark-950":"text-brand-cyan"}`}),m.jsxs("span",{children:[me.name.split(" ")[0]," ",me.name.split(" ")[1]||""]})]},me.id)})})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[620px] lg:min-h-[700px]",children:[m.jsx("div",{className:"lg:col-span-7 xl:col-span-8 h-[480px] lg:h-full relative",children:g?m.jsx(VE,{product:g,customConfig:S,activeHotspot:w,onHotspotClick:E,onExportSnapshot:me=>{fe(me),le("High-Res 3D Mockup captured!")}}):m.jsx("div",{className:"w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs",children:"Loading 3D Engine..."})}),m.jsx("div",{className:"lg:col-span-5 xl:col-span-4 h-full",children:g&&m.jsx(GE,{product:g,customConfig:S,onChangeConfig:_,presets:o,onAddToCart:b,onSaveToWardrobe:$,onOpenSizeGuide:()=>v(!0),onExportSnapshot:()=>{le("Click the camera icon on the top right of the 3D viewer to download PNG snapshot!")}})})]})]}),s==="catalog"&&m.jsx(WE,{products:t,onSelectProductFor3D:I,onQuickAddToCart:me=>{I(me)}}),s==="wardrobe"&&m.jsx(KE,{savedDesigns:u,onLoadIntoStudio:q,onAddToCart:me=>{const Q=t.find(k=>k.id===me.productId)||t[0];b({product:Q,customConfig:{primaryColor:me.primaryColor,accentColor:me.accentColor,cordsColor:me.cordsColor,fabricId:me.fabricId,size:me.size||"L",decal:me.decal},fabric:{name:me.fabricName},price:me.price||Q.price})},onDeleteDesign:_e}),s==="tracking"&&m.jsx(YE,{initialOrderId:he,onOpenStudio:()=>e("studio")}),s==="admin"&&m.jsx(ZE,{onRefreshData:V})]}),m.jsx(XE,{isOpen:F,onClose:()=>O(!1),items:C,onUpdateQuantity:ge,onRemoveItem:oe,onProceedToCheckout:()=>{O(!1),P(!0)},discountCode:R,onApplyDiscount:W,discountAmount:ne}),m.jsx(qE,{isOpen:B,onClose:()=>P(!1),cartItems:C,subtotal:ye,shipping:Le,discount:ne,totalAmount:Ze,onOrderPlaced:re}),m.jsx(JE,{isOpen:M,onClose:()=>v(!1)}),te&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-950/85 backdrop-blur-md",children:m.jsxs("div",{className:"relative max-w-xl w-full bg-dark-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4",children:[m.jsxs("div",{className:"flex justify-between items-center pb-2 border-b border-slate-800",children:[m.jsx("span",{className:"text-xs font-mono text-brand-neon font-bold uppercase",children:"3D Snapshot Generated"}),m.jsx("button",{onClick:()=>fe(null),className:"text-xs text-slate-400 hover:text-white",children:"Close"})]}),m.jsx("img",{src:te,alt:"Snapshot",className:"w-full rounded-2xl border border-slate-800 shadow-xl"}),m.jsx("div",{className:"flex justify-end space-x-3",children:m.jsxs("a",{href:te,download:"custom-garment-mockup.png",className:"px-4 py-2 rounded-xl bg-brand-neon text-dark-950 font-bold text-xs flex items-center space-x-1.5 shadow-glow-neon",children:[m.jsx(Xv,{className:"w-3.5 h-3.5"}),m.jsx("span",{children:"Save to Device"})]})})]})}),m.jsx("footer",{className:"border-t border-slate-800/80 bg-dark-950 py-8 px-4 sm:px-6 lg:px-8 mt-12",children:m.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4",children:[m.jsxs("div",{className:"flex items-center space-x-2",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-brand-neon inline-block"}),m.jsx("span",{className:"text-slate-300 font-bold",children:"ATELIER 3D"}),m.jsx("span",{children:"— Bespoke Technical Garment Studio"})]}),m.jsxs("div",{className:"flex items-center space-x-4",children:[m.jsx("span",{children:"Three.js PBR WebGL"}),m.jsx("span",{children:"•"}),m.jsx("span",{children:"Node.js / Express"}),m.jsx("span",{children:"•"}),m.jsx("span",{children:"Digital Atelier 2026"})]})]})})]})}Dv.createRoot(document.getElementById("root")).render(m.jsx(v0.StrictMode,{children:m.jsx(QE,{})}));
