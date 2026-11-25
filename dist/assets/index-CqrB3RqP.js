var Ll=Object.defineProperty;var Dl=(i,t,e)=>t in i?Ll(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var rt=(i,t,e)=>Dl(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="174",Il=0,_a=1,Ul=2,Dc=1,Ic=2,Tn=3,Gn=0,ke=1,De=2,Bn=0,Pi=1,va=2,xa=3,Ma=4,Fl=5,si=100,Nl=101,Ol=102,zl=103,Bl=104,kl=200,Gl=201,Vl=202,Hl=203,Jr=204,Qr=205,Wl=206,Xl=207,ql=208,Yl=209,Zl=210,Kl=211,jl=212,$l=213,Jl=214,to=0,eo=1,no=2,Ii=3,io=4,so=5,ro=6,oo=7,Uc=0,Ql=1,th=2,kn=0,eh=1,nh=2,ih=3,Fc=4,sh=5,rh=6,oh=7,Nc=300,Ui=301,Fi=302,ao=303,co=304,ur=306,us=1e3,ai=1001,lo=1002,dn=1003,ah=1004,vs=1005,gn=1006,xr=1007,ci=1008,Pn=1009,Oc=1010,zc=1011,ds=1012,Ho=1013,li=1014,wn=1015,ps=1016,Wo=1017,Xo=1018,Ni=1020,Bc=35902,kc=1021,Gc=1022,un=1023,Vc=1024,Hc=1025,Li=1026,Oi=1027,Wc=1028,qo=1029,Xc=1030,Yo=1031,Zo=1033,Ws=33776,Xs=33777,qs=33778,Ys=33779,ho=35840,uo=35841,fo=35842,po=35843,mo=36196,go=37492,_o=37496,vo=37808,xo=37809,Mo=37810,So=37811,yo=37812,Eo=37813,To=37814,wo=37815,bo=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Lo=37821,Zs=36492,Do=36494,Io=36495,qc=36283,Uo=36284,Fo=36285,No=36286,ch=3200,lh=3201,Yc=0,hh=1,zn="",Ne="srgb",zi="srgb-linear",tr="linear",ae="srgb",pi=7680,Sa=519,uh=512,dh=513,fh=514,Zc=515,ph=516,mh=517,gh=518,_h=519,ya=35044,Ea="300 es",bn=2e3,er=2001;class Wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ta=1234567;const os=Math.PI/180,fs=180/Math.PI;function Xi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Ko(i,t){return(i%t+t)%t}function vh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xh(i,t,e){return i!==t?(e-i)/(t-i):0}function as(i,t,e){return(1-e)*i+e*t}function Mh(i,t,e,n){return as(i,t,1-Math.exp(-e*n))}function Sh(i,t=1){return t-Math.abs(Ko(i,t*2)-t)}function yh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Eh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Th(i,t){return i+Math.floor(Math.random()*(t-i+1))}function wh(i,t){return i+Math.random()*(t-i)}function bh(i){return i*(.5-Math.random())}function Ah(i){i!==void 0&&(Ta=i);let t=Ta+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rh(i){return i*os}function Ch(i){return i*fs}function Ph(i){return(i&i-1)===0&&i!==0}function Lh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ih(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),m=r((n-t)/2),v=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*v,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*v,a*l);break;case"ZYZ":i.set(c*v,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const fe={DEG2RAD:os,RAD2DEG:fs,generateUUID:Xi,clamp:Kt,euclideanModulo:Ko,mapLinear:vh,inverseLerp:xh,lerp:as,damp:Mh,pingpong:Sh,smoothstep:yh,smootherstep:Eh,randInt:Th,randFloat:wh,randFloatSpread:bh,seededRandom:Ah,degToRad:Rh,radToDeg:Ch,isPowerOfTwo:Ph,ceilPowerOfTwo:Lh,floorPowerOfTwo:Dh,setQuaternionFromProperEuler:Ih,normalize:Ue,denormalize:Ri};class Zt{constructor(t=0,e=0){Zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,s,r,o,a,c,l){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],m=n[5],v=n[8],M=s[0],p=s[3],d=s[6],E=s[1],_=s[4],g=s[7],w=s[2],b=s[5],R=s[8];return r[0]=o*M+a*E+c*w,r[3]=o*p+a*_+c*b,r[6]=o*d+a*g+c*R,r[1]=l*M+h*E+u*w,r[4]=l*p+h*_+u*b,r[7]=l*d+h*g+u*R,r[2]=f*M+m*E+v*w,r[5]=f*p+m*_+v*b,r[8]=f*d+m*g+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,m=l*r-o*c,v=e*u+n*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=u*M,t[1]=(s*l-h*n)*M,t[2]=(a*n-s*o)*M,t[3]=f*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-a*e)*M,t[6]=m*M,t[7]=(n*c-l*e)*M,t[8]=(o*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Mr.makeScale(t,e)),this}rotate(t){return this.premultiply(Mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mr=new Ht;function Kc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uh(){const i=nr("canvas");return i.style.display="block",i}const wa={};function ei(i){i in wa||(wa[i]=!0,console.warn(i))}function Fh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Nh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Oh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ba=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Aa=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zh(){const i={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===zn?tr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zi]:{primaries:t,whitePoint:n,transfer:tr,toXYZ:ba,fromXYZ:Aa,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:ba,fromXYZ:Aa,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}const ee=zh();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mi;class Bh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=nr("canvas")),mi.width=t.width,mi.height=t.height;const n=mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=mi}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=nr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kh=0;class jo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sr(s[o].image)):r.push(Sr(s[o]))}else r=Sr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gh=0;class Oe extends Wi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=ai,s=ai,r=gn,o=ci,a=un,c=Pn,l=Oe.DEFAULT_ANISOTROPY,h=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Xi(),this.name="",this.source=new jo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case us:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case us:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Nc;Oe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],m=c[5],v=c[9],M=c[2],p=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,g=(m+1)/2,w=(d+1)/2,b=(h+f)/4,R=(u+M)/4,L=(v+p)/4;return _>g&&_>w?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=b/n,r=R/n):g>w?g<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),n=b/s,r=L/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=R/r,s=L/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-v)*(p-v)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-v)/E,this.y=(u-M)/E,this.z=(f-h)/E,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vh extends Wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new jo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Vh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jc extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hh extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],m=r[o+1],v=r[o+2],M=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(u!==M||c!==f||l!==m||h!==v){let p=1-a;const d=c*f+l*m+h*v+u*M,E=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const w=Math.sqrt(_),b=Math.atan2(w,d*E);p=Math.sin(p*b)/w,a=Math.sin(a*b)/w}const g=a*E;if(c=c*p+f*g,l=l*p+m*g,h=h*p+v*g,u=u*p+M*g,p===1-a){const w=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=w,l*=w,h*=w,u*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],m=r[o+2],v=r[o+3];return t[e]=a*v+h*u+c*m-l*f,t[e+1]=c*v+h*f+l*u-a*m,t[e+2]=l*v+h*m+a*f-c*u,t[e+3]=h*v-a*u-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),m=c(s/2),v=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*m*v,this._y=l*m*u-f*h*v,this._z=l*h*v+f*m*u,this._w=l*h*u-f*m*v;break;case"YXZ":this._x=f*h*u+l*m*v,this._y=l*m*u-f*h*v,this._z=l*h*v-f*m*u,this._w=l*h*u+f*m*v;break;case"ZXY":this._x=f*h*u-l*m*v,this._y=l*m*u+f*h*v,this._z=l*h*v+f*m*u,this._w=l*h*u-f*m*v;break;case"ZYX":this._x=f*h*u-l*m*v,this._y=l*m*u+f*h*v,this._z=l*h*v-f*m*u,this._w=l*h*u+f*m*v;break;case"YZX":this._x=f*h*u+l*m*v,this._y=l*m*u+f*h*v,this._z=l*h*v-f*m*u,this._w=l*h*u-f*m*v;break;case"XZY":this._x=f*h*u-l*m*v,this._y=l*m*u-f*h*v,this._z=l*h*v+f*m*u,this._w=l*h*u+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ra.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ra.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return yr.copy(this).projectOnVector(t),this.sub(yr)}reflect(t){return this.sub(yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yr=new I,Ra=new qi;class ms{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),Ms.subVectors(this.max,Ji),gi.subVectors(t.a,Ji),_i.subVectors(t.b,Ji),vi.subVectors(t.c,Ji),Dn.subVectors(_i,gi),In.subVectors(vi,_i),Zn.subVectors(gi,vi);let e=[0,-Dn.z,Dn.y,0,-In.z,In.y,0,-Zn.z,Zn.y,Dn.z,0,-Dn.x,In.z,0,-In.x,Zn.z,0,-Zn.x,-Dn.y,Dn.x,0,-In.y,In.x,0,-Zn.y,Zn.x,0];return!Er(e,gi,_i,vi,Ms)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,gi,_i,vi,Ms))?!1:(Ss.crossVectors(Dn,In),e=[Ss.x,Ss.y,Ss.z],Er(e,gi,_i,vi,Ms))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,xs=new ms,gi=new I,_i=new I,vi=new I,Dn=new I,In=new I,Zn=new I,Ji=new I,Ms=new I,Ss=new I,Kn=new I;function Er(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Kn.fromArray(i,r);const a=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),c=t.dot(Kn),l=e.dot(Kn),h=n.dot(Kn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Wh=new ms,Qi=new I,Tr=new I;class dr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qi.subVectors(t,this.center);const e=Qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qi.copy(t.center).add(Tr)),this.expandByPoint(Qi.copy(t.center).sub(Tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new I,wr=new I,ys=new I,Un=new I,br=new I,Es=new I,Ar=new I;class $o{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){wr.copy(t).add(e).multiplyScalar(.5),ys.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(wr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ys),a=Un.dot(this.direction),c=-Un.dot(ys),l=Un.lengthSq(),h=Math.abs(1-o*o);let u,f,m,v;if(h>0)if(u=o*c-a,f=o*a-c,v=r*h,u>=0)if(f>=-v)if(f<=v){const M=1/h;u*=M,f*=M,m=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;else f<=-v?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l):f<=v?(u=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wr).addScaledVector(ys,f),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){br.subVectors(e,t),Es.subVectors(n,t),Ar.crossVectors(br,Es);let o=this.direction.dot(Ar),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,t);const c=a*this.direction.dot(Es.crossVectors(Un,Es));if(c<0)return null;const l=a*this.direction.dot(br.cross(Un));if(l<0||c+l>o)return null;const h=-a*Un.dot(Ar);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,s,r,o,a,c,l,h,u,f,m,v,M,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,m,v,M,p)}set(t,e,n,s,r,o,a,c,l,h,u,f,m,v,M,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=v,d[11]=M,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/xi.setFromMatrixColumn(t,0).length(),r=1/xi.setFromMatrixColumn(t,1).length(),o=1/xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*u,v=a*h,M=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+v*l,e[5]=f-M*l,e[9]=-a*c,e[2]=M-f*l,e[6]=v+m*l,e[10]=o*c}else if(t.order==="YXZ"){const f=c*h,m=c*u,v=l*h,M=l*u;e[0]=f+M*a,e[4]=v*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-v,e[6]=M+f*a,e[10]=o*c}else if(t.order==="ZXY"){const f=c*h,m=c*u,v=l*h,M=l*u;e[0]=f-M*a,e[4]=-o*u,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*h,e[9]=M-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const f=o*h,m=o*u,v=a*h,M=a*u;e[0]=c*h,e[4]=v*l-m,e[8]=f*l+M,e[1]=c*u,e[5]=M*l+f,e[9]=m*l-v,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const f=o*c,m=o*l,v=a*c,M=a*l;e[0]=c*h,e[4]=M-f*u,e[8]=v*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*u+v,e[10]=f-M*u}else if(t.order==="XZY"){const f=o*c,m=o*l,v=a*c,M=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+M,e[5]=o*h,e[9]=m*u-v,e[2]=v*u-m,e[6]=a*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,qh)}lookAt(t,e,n){const s=this.elements;return We.subVectors(t,e),We.lengthSq()===0&&(We.z=1),We.normalize(),Fn.crossVectors(n,We),Fn.lengthSq()===0&&(Math.abs(n.z)===1?We.x+=1e-4:We.z+=1e-4,We.normalize(),Fn.crossVectors(n,We)),Fn.normalize(),Ts.crossVectors(We,Fn),s[0]=Fn.x,s[4]=Ts.x,s[8]=We.x,s[1]=Fn.y,s[5]=Ts.y,s[9]=We.y,s[2]=Fn.z,s[6]=Ts.z,s[10]=We.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],m=n[13],v=n[2],M=n[6],p=n[10],d=n[14],E=n[3],_=n[7],g=n[11],w=n[15],b=s[0],R=s[4],L=s[8],y=s[12],x=s[1],C=s[5],k=s[9],F=s[13],H=s[2],$=s[6],j=s[10],X=s[14],P=s[3],Z=s[7],G=s[11],K=s[15];return r[0]=o*b+a*x+c*H+l*P,r[4]=o*R+a*C+c*$+l*Z,r[8]=o*L+a*k+c*j+l*G,r[12]=o*y+a*F+c*X+l*K,r[1]=h*b+u*x+f*H+m*P,r[5]=h*R+u*C+f*$+m*Z,r[9]=h*L+u*k+f*j+m*G,r[13]=h*y+u*F+f*X+m*K,r[2]=v*b+M*x+p*H+d*P,r[6]=v*R+M*C+p*$+d*Z,r[10]=v*L+M*k+p*j+d*G,r[14]=v*y+M*F+p*X+d*K,r[3]=E*b+_*x+g*H+w*P,r[7]=E*R+_*C+g*$+w*Z,r[11]=E*L+_*k+g*j+w*G,r[15]=E*y+_*F+g*X+w*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],m=t[14],v=t[3],M=t[7],p=t[11],d=t[15];return v*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*m-n*c*m)+M*(+e*c*m-e*l*f+r*o*f-s*o*m+s*l*h-r*c*h)+p*(+e*l*u-e*a*m-r*o*u+n*o*m+r*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],m=t[11],v=t[12],M=t[13],p=t[14],d=t[15],E=u*p*l-M*f*l+M*c*m-a*p*m-u*c*d+a*f*d,_=v*f*l-h*p*l-v*c*m+o*p*m+h*c*d-o*f*d,g=h*M*l-v*u*l+v*a*m-o*M*m-h*a*d+o*u*d,w=v*u*c-h*M*c-v*a*f+o*M*f+h*a*p-o*u*p,b=e*E+n*_+s*g+r*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=E*R,t[1]=(M*f*r-u*p*r-M*s*m+n*p*m+u*s*d-n*f*d)*R,t[2]=(a*p*r-M*c*r+M*s*l-n*p*l-a*s*d+n*c*d)*R,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*m-n*c*m)*R,t[4]=_*R,t[5]=(h*p*r-v*f*r+v*s*m-e*p*m-h*s*d+e*f*d)*R,t[6]=(v*c*r-o*p*r-v*s*l+e*p*l+o*s*d-e*c*d)*R,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*m+e*c*m)*R,t[8]=g*R,t[9]=(v*u*r-h*M*r-v*n*m+e*M*m+h*n*d-e*u*d)*R,t[10]=(o*M*r-v*a*r+v*n*l-e*M*l-o*n*d+e*a*d)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*m-e*a*m)*R,t[12]=w*R,t[13]=(h*M*s-v*u*s+v*n*f-e*M*f-h*n*p+e*u*p)*R,t[14]=(v*a*s-o*M*s-v*n*c+e*M*c+o*n*p-e*a*p)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,m=r*h,v=r*u,M=o*h,p=o*u,d=a*u,E=c*l,_=c*h,g=c*u,w=n.x,b=n.y,R=n.z;return s[0]=(1-(M+d))*w,s[1]=(m+g)*w,s[2]=(v-_)*w,s[3]=0,s[4]=(m-g)*b,s[5]=(1-(f+d))*b,s[6]=(p+E)*b,s[7]=0,s[8]=(v+_)*R,s[9]=(p-E)*R,s[10]=(1-(f+M))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=xi.set(s[0],s[1],s[2]).length();const o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const l=1/r,h=1/o,u=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=bn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let m,v;if(a===bn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===er)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=bn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,m=(n+s)*h;let v,M;if(a===bn)v=(o+r)*u,M=-2*u;else if(a===er)v=r*u,M=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=M,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xi=new I,an=new ue,Xh=new I(0,0,0),qh=new I(1,1,1),Fn=new I,Ts=new I,We=new I,Ca=new ue,Pa=new qi;class _n{constructor(t=0,e=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ca.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ca,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pa.setFromEuler(this),this.setFromQuaternion(Pa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class Jo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yh=0;const La=new I,Mi=new qi,Sn=new ue,ws=new I,ts=new I,Zh=new I,Kh=new qi,Da=new I(1,0,0),Ia=new I(0,1,0),Ua=new I(0,0,1),Fa={type:"added"},jh={type:"removed"},Si={type:"childadded",child:null},Rr={type:"childremoved",child:null};class pe extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new I,e=new _n,n=new qi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ht}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.multiply(Mi),this}rotateOnWorldAxis(t,e){return Mi.setFromAxisAngle(t,e),this.quaternion.premultiply(Mi),this}rotateX(t){return this.rotateOnAxis(Da,t)}rotateY(t){return this.rotateOnAxis(Ia,t)}rotateZ(t){return this.rotateOnAxis(Ua,t)}translateOnAxis(t,e){return La.copy(t).applyQuaternion(this.quaternion),this.position.add(La.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Da,t)}translateY(t){return this.translateOnAxis(Ia,t)}translateZ(t){return this.translateOnAxis(Ua,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ws.copy(t):ws.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ts,ws,this.up):Sn.lookAt(ws,ts,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),Mi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Mi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Fa),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Fa),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Kh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}pe.DEFAULT_UP=new I(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new I,yn=new I,Cr=new I,En=new I,yi=new I,Ei=new I,Na=new I,Pr=new I,Lr=new I,Dr=new I,Ir=new ce,Ur=new ce,Fr=new ce;class ln{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),yn.subVectors(n,e),Cr.subVectors(t,e);const o=cn.dot(cn),a=cn.dot(yn),c=cn.dot(Cr),l=yn.dot(yn),h=yn.dot(Cr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(l*c-a*h)*f,v=(o*h-a*c)*f;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(o,En.y),c.addScaledVector(a,En.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ir.setScalar(0),Ur.setScalar(0),Fr.setScalar(0),Ir.fromBufferAttribute(t,e),Ur.fromBufferAttribute(t,n),Fr.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ir,r.x),o.addScaledVector(Ur,r.y),o.addScaledVector(Fr,r.z),o}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),yn.subVectors(t,e),cn.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),cn.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;yi.subVectors(s,n),Ei.subVectors(r,n),Pr.subVectors(t,n);const c=yi.dot(Pr),l=Ei.dot(Pr);if(c<=0&&l<=0)return e.copy(n);Lr.subVectors(t,s);const h=yi.dot(Lr),u=Ei.dot(Lr);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(yi,o);Dr.subVectors(t,r);const m=yi.dot(Dr),v=Ei.dot(Dr);if(v>=0&&m<=v)return e.copy(r);const M=m*l-c*v;if(M<=0&&l>=0&&v<=0)return a=l/(l-v),e.copy(n).addScaledVector(Ei,a);const p=h*v-m*u;if(p<=0&&u-h>=0&&m-v>=0)return Na.subVectors(r,s),a=(u-h)/(u-h+(m-v)),e.copy(s).addScaledVector(Na,a);const d=1/(p+M+f);return o=M*d,a=f*d,e.copy(n).addScaledVector(yi,o).addScaledVector(Ei,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Nr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Ko(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Nr(o,r,t+1/3),this.g=Nr(o,r,t),this.b=Nr(o,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=$c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ee.fromWorkingColorSpace(Le.copy(this),t),Math.round(Kt(Le.r*255,0,255))*65536+Math.round(Kt(Le.g*255,0,255))*256+Math.round(Kt(Le.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,s=Le.g,r=Le.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ne){ee.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,s=Le.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(bs);const n=as(Nn.h,bs.h,e),s=as(Nn.s,bs.s,e),r=as(Nn.l,bs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new Bt;Bt.NAMES=$c;let $h=0;class Yi extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Xi(),this.name="",this.type="Material",this.blending=Pi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jr,this.blendDst=Qr,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Qr&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class we extends Yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new I,As=new Zt;let Jh=0;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ya,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)As.fromBufferAttribute(this,e),As.applyMatrix3(t),this.setXY(e,As.x,As.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ya&&(t.usage=this.usage),t}}class Jc extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qc extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qh=0;const Je=new ue,Or=new pe,Ti=new I,Xe=new ms,es=new ms,Te=new I;class Ve extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kc(t)?Qc:Jc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return Or.lookAt(t),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ms);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Xe.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Xe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];es.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Xe.min,es.min),Xe.expandByPoint(Te),Te.addVectors(Xe.max,es.max),Xe.expandByPoint(Te)):(Xe.expandByPoint(es.min),Xe.expandByPoint(es.max))}Xe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Te.fromBufferAttribute(a,l),c&&(Ti.fromBufferAttribute(t,l),Te.add(Ti)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<n.count;L++)a[L]=new I,c[L]=new I;const l=new I,h=new I,u=new I,f=new Zt,m=new Zt,v=new Zt,M=new I,p=new I;function d(L,y,x){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,L),m.fromBufferAttribute(r,y),v.fromBufferAttribute(r,x),h.sub(l),u.sub(l),m.sub(f),v.sub(f);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(C),a[L].add(M),a[y].add(M),a[x].add(M),c[L].add(p),c[y].add(p),c[x].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let L=0,y=E.length;L<y;++L){const x=E[L],C=x.start,k=x.count;for(let F=C,H=C+k;F<H;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const _=new I,g=new I,w=new I,b=new I;function R(L){w.fromBufferAttribute(s,L),b.copy(w);const y=a[L];_.copy(y),_.sub(w.multiplyScalar(w.dot(y))).normalize(),g.crossVectors(b,y);const C=g.dot(c[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,C)}for(let L=0,y=E.length;L<y;++L){const x=E[L],C=x.start,k=x.count;for(let F=C,H=C+k;F<H;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),M=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,M),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let m=0,v=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?m=c[M]*a.data.stride+a.offset:m=c[M]*h;for(let d=0;d<h;d++)f[v++]=l[m++]}return new fn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new ue,jn=new $o,Rs=new dr,za=new I,Cs=new I,Ps=new I,Ls=new I,zr=new I,Ds=new I,Ba=new I,Is=new I;class et extends pe{constructor(t=new Ve,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ds.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(zr.fromBufferAttribute(u,t),o?Ds.addScaledVector(zr,h):Ds.addScaledVector(zr.sub(e),h))}e.add(Ds)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere),Rs.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(Rs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Rs,za)===null||jn.origin.distanceToSquared(za)>(t.far-t.near)**2))&&(Oa.copy(r).invert(),jn.copy(t.ray).applyMatrix4(Oa),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const p=f[v],d=o[p.materialIndex],E=Math.max(p.start,m.start),_=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let g=E,w=_;g<w;g+=3){const b=a.getX(g),R=a.getX(g+1),L=a.getX(g+2);s=Us(this,d,t,n,l,h,u,b,R,L),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const E=a.getX(p),_=a.getX(p+1),g=a.getX(p+2);s=Us(this,o,t,n,l,h,u,E,_,g),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let v=0,M=f.length;v<M;v++){const p=f[v],d=o[p.materialIndex],E=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let g=E,w=_;g<w;g+=3){const b=g,R=g+1,L=g+2;s=Us(this,d,t,n,l,h,u,b,R,L),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=v,d=M;p<d;p+=3){const E=p,_=p+1,g=p+2;s=Us(this,o,t,n,l,h,u,E,_,g),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function tu(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Gn,a),c===null)return null;Is.copy(a),Is.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Is);return l<e.near||l>e.far?null:{distance:l,point:Is.clone(),object:i}}function Us(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Cs),i.getVertexPosition(c,Ps),i.getVertexPosition(l,Ls);const h=tu(i,t,e,n,Cs,Ps,Ls,Ba);if(h){const u=new I;ln.getBarycoord(Ba,Cs,Ps,Ls,u),s&&(h.uv=ln.getInterpolatedAttribute(s,a,c,l,u,new Zt)),r&&(h.uv1=ln.getInterpolatedAttribute(r,a,c,l,u,new Zt)),o&&(h.normal=ln.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};ln.getNormal(Cs,Ps,Ls,f.normal),h.face=f,h.barycoord=u}return h}class mt extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,o,r,0),v("z","y","x",1,-1,n,e,-t,o,r,1),v("x","z","y",1,1,t,n,e,s,o,2),v("x","z","y",1,-1,t,n,-e,s,o,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function v(M,p,d,E,_,g,w,b,R,L,y){const x=g/R,C=w/L,k=g/2,F=w/2,H=b/2,$=R+1,j=L+1;let X=0,P=0;const Z=new I;for(let G=0;G<j;G++){const K=G*C-F;for(let tt=0;tt<$;tt++){const ft=tt*x-k;Z[M]=ft*E,Z[p]=K*_,Z[d]=H,l.push(Z.x,Z.y,Z.z),Z[M]=0,Z[p]=0,Z[d]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(tt/R),u.push(1-G/L),X+=1}}for(let G=0;G<L;G++)for(let K=0;K<R;K++){const tt=f+K+$*G,ft=f+K+$*(G+1),V=f+(K+1)+$*(G+1),nt=f+(K+1)+$*G;c.push(tt,ft,nt),c.push(ft,V,nt),P+=6}a.addGroup(m,P,y),m+=P,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=Bi(i[e]);for(const s in n)t[s]=n[s]}return t}function eu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tl(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const nu={clone:Bi,merge:Fe};var iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,su=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iu,this.fragmentShader=su,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bi(t.uniforms),this.uniformsGroups=eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class el extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new I,ka=new Zt,Ga=new Zt;class Ze extends el{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,ka,Ga),e.subVectors(Ga,ka)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(os*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,bi=1;class ru extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(wi,bi,t,e);s.layers=this.layers,this.add(s);const r=new Ze(wi,bi,t,e);r.layers=this.layers,this.add(r);const o=new Ze(wi,bi,t,e);o.layers=this.layers,this.add(o);const a=new Ze(wi,bi,t,e);a.layers=this.layers,this.add(a);const c=new Ze(wi,bi,t,e);c.layers=this.layers,this.add(c);const l=new Ze(wi,bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class nl extends Oe{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ou extends hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new nl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mt(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:Bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:Bn});r.uniforms.tEquirect.value=e;const o=new et(s,r),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=gn),new ru(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class jt extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const au={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),d=this._getHandJoint(l,M);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(au)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Qo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Bt(t),this.density=e}clone(){return new Qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cu extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const kr=new I,lu=new I,hu=new Ht;class ni{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=kr.subVectors(n,e).cross(lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hu.getNormalMatrix(t),s=this.coplanarPoint(kr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $n=new dr,Fs=new I;class ta{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],m=s[8],v=s[9],M=s[10],p=s[11],d=s[12],E=s[13],_=s[14],g=s[15];if(n[0].setComponents(c-r,f-l,p-m,g-d).normalize(),n[1].setComponents(c+r,f+l,p+m,g+d).normalize(),n[2].setComponents(c+o,f+h,p+v,g+E).normalize(),n[3].setComponents(c-o,f-h,p-v,g-E).normalize(),n[4].setComponents(c-a,f-u,p-M,g-_).normalize(),e===bn)n[5].setComponents(c+a,f+u,p+M,g+_).normalize();else if(e===er)n[5].setComponents(a,u,M,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($n)}intersectsSprite(t){return $n.center.set(0,0,0),$n.radius=.7071067811865476,$n.applyMatrix4(t.matrixWorld),this.intersectsSphere($n)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fs.x=s.normal.x>0?t.max.x:t.min.x,Fs.y=s.normal.y>0?t.max.y:t.min.y,Fs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class il extends Yi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ir=new I,sr=new I,Va=new ue,ns=new $o,Ns=new dr,Gr=new I,Ha=new I;class uu extends pe{constructor(t=new Ve,e=new il){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ir.fromBufferAttribute(e,s-1),sr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ir.distanceTo(sr);t.setAttribute("lineDistance",new me(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),Ns.radius+=r,t.ray.intersectsSphere(Ns)===!1)return;Va.copy(s).invert(),ns.copy(t.ray).applyMatrix4(Va);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let M=m,p=v-1;M<p;M+=l){const d=h.getX(M),E=h.getX(M+1),_=Os(this,t,ns,c,d,E,M);_&&e.push(_)}if(this.isLineLoop){const M=h.getX(v-1),p=h.getX(m),d=Os(this,t,ns,c,M,p,v-1);d&&e.push(d)}}else{const m=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let M=m,p=v-1;M<p;M+=l){const d=Os(this,t,ns,c,M,M+1,M);d&&e.push(d)}if(this.isLineLoop){const M=Os(this,t,ns,c,v-1,m,v-1);M&&e.push(M)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Os(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(ir.fromBufferAttribute(a,s),sr.fromBufferAttribute(a,r),e.distanceSqToSegment(ir,sr,Gr,Ha)>n)return;Gr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Gr);if(!(l<t.near||l>t.far))return{distance:l,point:Ha.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class ea extends Oe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sl extends Oe{constructor(t,e,n,s,r,o,a,c,l,h=Li){if(h!==Li&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=li),n===void 0&&h===Oi&&(n=Ni),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:dn,this.minFilter=c!==void 0?c:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new jo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cs extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,h=new Zt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(a,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class be extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],m=[];let v=0;const M=[],p=n/2;let d=0;E(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(f,3)),this.setAttribute("uv",new me(m,2));function E(){const g=new I,w=new I;let b=0;const R=(e-t)/n;for(let L=0;L<=r;L++){const y=[],x=L/r,C=x*(e-t)+t;for(let k=0;k<=s;k++){const F=k/s,H=F*c+a,$=Math.sin(H),j=Math.cos(H);w.x=C*$,w.y=-x*n+p,w.z=C*j,u.push(w.x,w.y,w.z),g.set($,R,j).normalize(),f.push(g.x,g.y,g.z),m.push(F,1-x),y.push(v++)}M.push(y)}for(let L=0;L<s;L++)for(let y=0;y<r;y++){const x=M[y][L],C=M[y+1][L],k=M[y+1][L+1],F=M[y][L+1];(t>0||y!==0)&&(h.push(x,C,F),b+=3),(e>0||y!==r-1)&&(h.push(C,k,F),b+=3)}l.addGroup(d,b,0),d+=b}function _(g){const w=v,b=new Zt,R=new I;let L=0;const y=g===!0?t:e,x=g===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,p*x,0),f.push(0,x,0),m.push(.5,.5),v++;const C=v;for(let k=0;k<=s;k++){const H=k/s*c+a,$=Math.cos(H),j=Math.sin(H);R.x=y*j,R.y=p*x,R.z=y*$,u.push(R.x,R.y,R.z),f.push(0,x,0),b.x=$*.5+.5,b.y=j*.5*x+.5,m.push(b.x,b.y),v++}for(let k=0;k<s;k++){const F=w+k,H=C+k;g===!0?h.push(H,H+1,F):h.push(H+1,H,F),L+=3}l.addGroup(d,L,g===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ki extends be{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ki(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class na extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new me(r,3)),this.setAttribute("normal",new me(r.slice(),3)),this.setAttribute("uv",new me(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const _=new I,g=new I,w=new I;for(let b=0;b<e.length;b+=3)m(e[b+0],_),m(e[b+1],g),m(e[b+2],w),c(_,g,w,E)}function c(E,_,g,w){const b=w+1,R=[];for(let L=0;L<=b;L++){R[L]=[];const y=E.clone().lerp(g,L/b),x=_.clone().lerp(g,L/b),C=b-L;for(let k=0;k<=C;k++)k===0&&L===b?R[L][k]=y:R[L][k]=y.clone().lerp(x,k/C)}for(let L=0;L<b;L++)for(let y=0;y<2*(b-L)-1;y++){const x=Math.floor(y/2);y%2===0?(f(R[L][x+1]),f(R[L+1][x]),f(R[L][x])):(f(R[L][x+1]),f(R[L+1][x+1]),f(R[L+1][x]))}}function l(E){const _=new I;for(let g=0;g<r.length;g+=3)_.x=r[g+0],_.y=r[g+1],_.z=r[g+2],_.normalize().multiplyScalar(E),r[g+0]=_.x,r[g+1]=_.y,r[g+2]=_.z}function h(){const E=new I;for(let _=0;_<r.length;_+=3){E.x=r[_+0],E.y=r[_+1],E.z=r[_+2];const g=p(E)/2/Math.PI+.5,w=d(E)/Math.PI+.5;o.push(g,1-w)}v(),u()}function u(){for(let E=0;E<o.length;E+=6){const _=o[E+0],g=o[E+2],w=o[E+4],b=Math.max(_,g,w),R=Math.min(_,g,w);b>.9&&R<.1&&(_<.2&&(o[E+0]+=1),g<.2&&(o[E+2]+=1),w<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function m(E,_){const g=E*3;_.x=t[g+0],_.y=t[g+1],_.z=t[g+2]}function v(){const E=new I,_=new I,g=new I,w=new I,b=new Zt,R=new Zt,L=new Zt;for(let y=0,x=0;y<r.length;y+=9,x+=6){E.set(r[y+0],r[y+1],r[y+2]),_.set(r[y+3],r[y+4],r[y+5]),g.set(r[y+6],r[y+7],r[y+8]),b.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),w.copy(E).add(_).add(g).divideScalar(3);const C=p(w);M(b,x+0,E,C),M(R,x+2,_,C),M(L,x+4,g,C)}}function M(E,_,g,w){w<0&&E.x===1&&(o[_]=E.x-1),g.x===0&&g.z===0&&(o[_]=w/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.vertices,t.indices,t.radius,t.details)}}class ia extends na{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ia(t.radius,t.detail)}}class Ln extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,m=[],v=[],M=[],p=[];for(let d=0;d<h;d++){const E=d*f-o;for(let _=0;_<l;_++){const g=_*u-r;v.push(g,-E,0),M.push(0,0,1),p.push(_/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){const _=E+l*d,g=E+l*(d+1),w=E+1+l*(d+1),b=E+1+l*d;m.push(_,g,b),m.push(g,w,b)}this.setIndex(m),this.setAttribute("position",new me(v,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.width,t.height,t.widthSegments,t.heightSegments)}}class pn extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,f=new I,m=[],v=[],M=[],p=[];for(let d=0;d<=n;d++){const E=[],_=d/n;let g=0;d===0&&o===0?g=.5/e:d===n&&c===Math.PI&&(g=-.5/e);for(let w=0;w<=e;w++){const b=w/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+_*a),v.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),p.push(b+g,1-_),E.push(l++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const _=h[d][E+1],g=h[d][E],w=h[d+1][E],b=h[d+1][E+1];(d!==0||o>0)&&m.push(_,g,b),(d!==n-1||c<Math.PI)&&m.push(g,w,b)}this.setIndex(m),this.setAttribute("position",new me(v,3)),this.setAttribute("normal",new me(M,3)),this.setAttribute("uv",new me(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rr extends Ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,f=new I;for(let m=0;m<=n;m++)for(let v=0;v<=s;v++){const M=v/s*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(M),u.y=(t+e*Math.cos(p))*Math.sin(M),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(v/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let v=1;v<=s;v++){const M=(s+1)*m+v-1,p=(s+1)*(m-1)+v-1,d=(s+1)*(m-1)+v,E=(s+1)*m+v;o.push(M,p,E),o.push(p,d,E)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class kt extends Yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yc,this.normalScale=new Zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class du extends Yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ch,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fu extends Yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sa extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class pu extends sa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vr=new ue,Wa=new I,Xa=new I;class rl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new Zt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wa),Xa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xa),e.updateMatrixWorld(),Vr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qa=new ue,is=new I,Hr=new I;class mu extends rl{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Zt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),is.setFromMatrixPosition(t.matrixWorld),n.position.copy(is),Hr.copy(n.position),Hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hr),n.updateMatrixWorld(),s.makeTranslation(-is.x,-is.y,-is.z),qa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa)}}class gu extends sa{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new mu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class ol extends el{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class _u extends rl{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vu extends sa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new _u}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class xu extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Mu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ya(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ya();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ya(){return performance.now()}const Za=new ue;class al{constructor(t,e,n=0,s=1/0){this.ray=new $o(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Jo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Za.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Za),this}intersectObject(t,e=!0,n=[]){return Oo(t,this,n,e),n.sort(Ka),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Oo(t[s],this,n,e);return n.sort(Ka),n}}function Ka(i,t){return i.distance-t.distance}function Oo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Oo(r[o],t,e,!0)}}function ja(i,t,e,n){const s=Su(n);switch(e){case kc:return i*t;case Vc:return i*t;case Hc:return i*t*2;case Wc:return i*t/s.components*s.byteLength;case qo:return i*t/s.components*s.byteLength;case Xc:return i*t*2/s.components*s.byteLength;case Yo:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case Zo:return i*t*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:case po:return Math.max(i,16)*Math.max(t,8)/4;case ho:case fo:return Math.max(i,8)*Math.max(t,8)/2;case mo:case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Mo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Lo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Zs:case Do:case Io:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qc:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fo:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Su(i){switch(i){case Pn:case Oc:return{byteLength:1,components:1};case ds:case zc:case ps:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case li:case Ho:case wn:return{byteLength:4,components:1};case Bc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cl(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function yu(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<u.length;m++){const v=u[f],M=u[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,u[f]=M)}u.length=f+1;for(let m=0,v=u.length;m<v;m++){const M=u[m];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Eu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
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
#endif`,wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ru=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cu=`#ifdef USE_AOMAP
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
#endif`,Pu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lu=`#ifdef USE_BATCHING
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
#endif`,Du=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Nu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ou=`#ifdef USE_BUMPMAP
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
#endif`,zu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qu=`#define PI 3.141592653589793
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
} // validated`,Yu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zu=`vec3 transformedNormal = objectNormal;
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
#endif`,Ku=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ju=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ju=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qu="gl_FragColor = linearToOutputTexel( gl_FragColor );",td=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ed=`#ifdef USE_ENVMAP
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
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,id=`#ifdef USE_ENVMAP
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
#endif`,sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
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
}`,ud=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
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
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Md=`PhysicalMaterial material;
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
#endif`,Sd=`struct PhysicalMaterial {
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
}`,yd=`
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
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
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
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ad=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dd=`#if defined( USE_POINTS_UV )
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
#endif`,Id=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Od=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
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
#endif`,qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,af=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cf=`float getShadowMask() {
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
}`,lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,df=`#ifdef USE_SKINNING
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
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_f=`#ifdef USE_TRANSMISSION
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
#endif`,vf=`#ifdef USE_TRANSMISSION
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
#endif`,xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ef=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tf=`uniform sampler2D t2D;
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
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Af=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`#include <common>
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
}`,Pf=`#if DEPTH_PACKING == 3200
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
}`,Lf=`#define DISTANCE
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
}`,Df=`#define DISTANCE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
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
}`,Nf=`uniform vec3 diffuse;
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
}`,Of=`#include <common>
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
}`,zf=`uniform vec3 diffuse;
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
}`,Bf=`#define LAMBERT
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
}`,kf=`#define LAMBERT
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
}`,Gf=`#define MATCAP
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
}`,Vf=`#define MATCAP
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
}`,Hf=`#define NORMAL
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
}`,Wf=`#define NORMAL
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
}`,Xf=`#define PHONG
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
}`,qf=`#define PHONG
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
}`,Yf=`#define STANDARD
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
}`,Zf=`#define STANDARD
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
}`,Kf=`#define TOON
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
}`,jf=`#define TOON
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
}`,$f=`uniform float size;
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
}`,Jf=`uniform vec3 diffuse;
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
}`,Qf=`#include <common>
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
}`,tp=`uniform vec3 color;
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
}`,ep=`uniform float rotation;
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
}`,np=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Eu,alphahash_pars_fragment:Tu,alphamap_fragment:wu,alphamap_pars_fragment:bu,alphatest_fragment:Au,alphatest_pars_fragment:Ru,aomap_fragment:Cu,aomap_pars_fragment:Pu,batching_pars_vertex:Lu,batching_vertex:Du,begin_vertex:Iu,beginnormal_vertex:Uu,bsdfs:Fu,iridescence_fragment:Nu,bumpmap_pars_fragment:Ou,clipping_planes_fragment:zu,clipping_planes_pars_fragment:Bu,clipping_planes_pars_vertex:ku,clipping_planes_vertex:Gu,color_fragment:Vu,color_pars_fragment:Hu,color_pars_vertex:Wu,color_vertex:Xu,common:qu,cube_uv_reflection_fragment:Yu,defaultnormal_vertex:Zu,displacementmap_pars_vertex:Ku,displacementmap_vertex:ju,emissivemap_fragment:$u,emissivemap_pars_fragment:Ju,colorspace_fragment:Qu,colorspace_pars_fragment:td,envmap_fragment:ed,envmap_common_pars_fragment:nd,envmap_pars_fragment:id,envmap_pars_vertex:sd,envmap_physical_pars_fragment:md,envmap_vertex:rd,fog_vertex:od,fog_pars_vertex:ad,fog_fragment:cd,fog_pars_fragment:ld,gradientmap_pars_fragment:hd,lightmap_pars_fragment:ud,lights_lambert_fragment:dd,lights_lambert_pars_fragment:fd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:_d,lights_phong_fragment:vd,lights_phong_pars_fragment:xd,lights_physical_fragment:Md,lights_physical_pars_fragment:Sd,lights_fragment_begin:yd,lights_fragment_maps:Ed,lights_fragment_end:Td,logdepthbuf_fragment:wd,logdepthbuf_pars_fragment:bd,logdepthbuf_pars_vertex:Ad,logdepthbuf_vertex:Rd,map_fragment:Cd,map_pars_fragment:Pd,map_particle_fragment:Ld,map_particle_pars_fragment:Dd,metalnessmap_fragment:Id,metalnessmap_pars_fragment:Ud,morphinstance_vertex:Fd,morphcolor_vertex:Nd,morphnormal_vertex:Od,morphtarget_pars_vertex:zd,morphtarget_vertex:Bd,normal_fragment_begin:kd,normal_fragment_maps:Gd,normal_pars_fragment:Vd,normal_pars_vertex:Hd,normal_vertex:Wd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:qd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:Zd,iridescence_pars_fragment:Kd,opaque_fragment:jd,packing:$d,premultiplied_alpha_fragment:Jd,project_vertex:Qd,dithering_fragment:tf,dithering_pars_fragment:ef,roughnessmap_fragment:nf,roughnessmap_pars_fragment:sf,shadowmap_pars_fragment:rf,shadowmap_pars_vertex:of,shadowmap_vertex:af,shadowmask_pars_fragment:cf,skinbase_vertex:lf,skinning_pars_vertex:hf,skinning_vertex:uf,skinnormal_vertex:df,specularmap_fragment:ff,specularmap_pars_fragment:pf,tonemapping_fragment:mf,tonemapping_pars_fragment:gf,transmission_fragment:_f,transmission_pars_fragment:vf,uv_pars_fragment:xf,uv_pars_vertex:Mf,uv_vertex:Sf,worldpos_vertex:yf,background_vert:Ef,background_frag:Tf,backgroundCube_vert:wf,backgroundCube_frag:bf,cube_vert:Af,cube_frag:Rf,depth_vert:Cf,depth_frag:Pf,distanceRGBA_vert:Lf,distanceRGBA_frag:Df,equirect_vert:If,equirect_frag:Uf,linedashed_vert:Ff,linedashed_frag:Nf,meshbasic_vert:Of,meshbasic_frag:zf,meshlambert_vert:Bf,meshlambert_frag:kf,meshmatcap_vert:Gf,meshmatcap_frag:Vf,meshnormal_vert:Hf,meshnormal_frag:Wf,meshphong_vert:Xf,meshphong_frag:qf,meshphysical_vert:Yf,meshphysical_frag:Zf,meshtoon_vert:Kf,meshtoon_frag:jf,points_vert:$f,points_frag:Jf,shadow_vert:Qf,shadow_frag:tp,sprite_vert:ep,sprite_frag:np},_t={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},mn={basic:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Fe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Fe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Bt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Fe([_t.points,_t.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Fe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Fe([_t.common,_t.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Fe([_t.sprite,_t.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Fe([_t.common,_t.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Fe([_t.lights,_t.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};mn.physical={uniforms:Fe([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const zs={r:0,b:0,g:0},Jn=new _n,ip=new ue;function sp(i,t,e,n,s,r,o){const a=new Bt(0);let c=r===!0?0:1,l,h,u=null,f=0,m=null;function v(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?e:t).get(g)),g}function M(_){let g=!1;const w=v(_);w===null?d(a,c):w&&w.isColor&&(d(w,1),g=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(_,g){const w=v(g);w&&(w.isCubeTexture||w.mapping===ur)?(h===void 0&&(h=new et(new mt(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Bi(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Jn.copy(g.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ip.makeRotationFromEuler(Jn)),h.material.toneMapped=ee.getTransfer(w.colorSpace)!==ae,(u!==w||f!==w.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,m=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new et(new Ln(2,2),new Vn({name:"BackgroundMaterial",uniforms:Bi(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ee.getTransfer(w.colorSpace)!==ae,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,f=w.version,m=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function d(_,g){_.getRGB(zs,tl(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,g,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),c=g,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,d(a,c)},render:M,addToRenderList:p,dispose:E}}function rp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(x,C,k,F,H){let $=!1;const j=u(F,k,C);r!==j&&(r=j,l(r.object)),$=m(x,F,k,H),$&&v(x,F,k,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,g(x,C,k,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,k){const F=k.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let $=H[C.id];$===void 0&&($={},H[C.id]=$);let j=$[F];return j===void 0&&(j=f(c()),$[F]=j),j}function f(x){const C=[],k=[],F=[];for(let H=0;H<e;H++)C[H]=0,k[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:F,object:x,attributes:{},index:null}}function m(x,C,k,F){const H=r.attributes,$=C.attributes;let j=0;const X=k.getAttributes();for(const P in X)if(X[P].location>=0){const G=H[P];let K=$[P];if(K===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),G===void 0||G.attribute!==K||K&&G.data!==K.data)return!0;j++}return r.attributesNum!==j||r.index!==F}function v(x,C,k,F){const H={},$=C.attributes;let j=0;const X=k.getAttributes();for(const P in X)if(X[P].location>=0){let G=$[P];G===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(G=x.instanceColor));const K={};K.attribute=G,G&&G.data&&(K.data=G.data),H[P]=K,j++}r.attributes=H,r.attributesNum=j,r.index=F}function M(){const x=r.newAttributes;for(let C=0,k=x.length;C<k;C++)x[C]=0}function p(x){d(x,0)}function d(x,C){const k=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;k[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),H[x]!==C&&(i.vertexAttribDivisor(x,C),H[x]=C)}function E(){const x=r.newAttributes,C=r.enabledAttributes;for(let k=0,F=C.length;k<F;k++)C[k]!==x[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function _(x,C,k,F,H,$,j){j===!0?i.vertexAttribIPointer(x,C,k,H,$):i.vertexAttribPointer(x,C,k,F,H,$)}function g(x,C,k,F){M();const H=F.attributes,$=k.getAttributes(),j=C.defaultAttributeValues;for(const X in $){const P=$[X];if(P.location>=0){let Z=H[X];if(Z===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor)),Z!==void 0){const G=Z.normalized,K=Z.itemSize,tt=t.get(Z);if(tt===void 0)continue;const ft=tt.buffer,V=tt.type,nt=tt.bytesPerElement,ct=V===i.INT||V===i.UNSIGNED_INT||Z.gpuType===Ho;if(Z.isInterleavedBufferAttribute){const st=Z.data,U=st.stride,Ct=Z.offset;if(st.isInstancedInterleavedBuffer){for(let xt=0;xt<P.locationSize;xt++)d(P.location+xt,st.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let xt=0;xt<P.locationSize;xt++)p(P.location+xt);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let xt=0;xt<P.locationSize;xt++)_(P.location+xt,K/P.locationSize,V,G,U*nt,(Ct+K/P.locationSize*xt)*nt,ct)}else{if(Z.isInstancedBufferAttribute){for(let st=0;st<P.locationSize;st++)d(P.location+st,Z.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let st=0;st<P.locationSize;st++)p(P.location+st);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let st=0;st<P.locationSize;st++)_(P.location+st,K/P.locationSize,V,G,K*nt,K/P.locationSize*st*nt,ct)}}else if(j!==void 0){const G=j[X];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(P.location,G);break;case 3:i.vertexAttrib3fv(P.location,G);break;case 4:i.vertexAttrib4fv(P.location,G);break;default:i.vertexAttrib1fv(P.location,G)}}}}E()}function w(){L();for(const x in n){const C=n[x];for(const k in C){const F=C[k];for(const H in F)h(F[H].object),delete F[H];delete C[k]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const k in C){const F=C[k];for(const H in F)h(F[H].object),delete F[H];delete C[k]}delete n[x.id]}function R(x){for(const C in n){const k=n[C];if(k[x.id]===void 0)continue;const F=k[x.id];for(const H in F)h(F[H].object),delete F[H];delete k[x.id]}}function L(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:E}}function op(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];e.update(m,n,1)}function c(l,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)o(l[v],h[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let v=0;for(let M=0;M<u;M++)v+=h[M]*f[M];e.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ap(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const L=R===ps&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Pn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=v>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:w,maxSamples:b}}function cp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ni,a=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const v=u.clippingPlanes,M=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||v===null||v.length===0||r&&!p)r?h(null):l();else{const E=r?0:n,_=E*4;let g=d.clippingState||null;c.value=g,g=h(v,f,_,m);for(let w=0;w!==_;++w)g[w]=e[w];d.clippingState=g,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,v){const M=u!==null?u.length:0;let p=null;if(M!==0){if(p=c.value,v!==!0||p===null){const d=m+M*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let _=0,g=m;_!==M;++_,g+=4)o.copy(u[_]).applyMatrix4(E,a),o.normal.toArray(p,g),p[g+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function lp(i){let t=new WeakMap;function e(o,a){return a===ao?o.mapping=Ui:a===co&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ao||a===co)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ou(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Ci=4,$a=[.125,.215,.35,.446,.526,.582],ri=20,Wr=new ol,Ja=new Bt;let Xr=null,qr=0,Yr=0,Zr=!1;const ii=(1+Math.sqrt(5))/2,Ai=1/ii,Qa=[new I(-ii,Ai,0),new I(ii,Ai,0),new I(-Ai,0,ii),new I(Ai,0,ii),new I(0,ii,-Ai),new I(0,ii,Ai),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],hp=new I;class tc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=hp}=r;Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,qr,Yr),this._renderer.xr.enabled=Zr,t.scissorTest=!1,Bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:ps,format:un,colorSpace:zi,depthBuffer:!1},s=ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ec(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=up(r)),this._blurMaterial=dp(r,t,e)}return s}_compileMaterial(t){const e=new et(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,s,r){const c=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,m=u.toneMapping;u.getClearColor(Ja),u.toneMapping=kn,u.autoClear=!1;const v=new we({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),M=new et(new mt,v);let p=!1;const d=t.background;d?d.isColor&&(v.color.copy(d),t.background=null,p=!0):(v.color.copy(Ja),p=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):_===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const g=this._cubeSize;Bs(s,_*g,E>2?g:0,g,g),u.setRenderTarget(s),p&&u.render(M,c),u.render(t,c)}M.geometry.dispose(),M.material.dispose(),u.toneMapping=m,u.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ui||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new et(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Bs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qa[(s-r-1)%Qa.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new et(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ri-1),M=r/v,p=isFinite(r)?1+Math.floor(h*M):ri;p>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ri}`);const d=[];let E=0;for(let R=0;R<ri;++R){const L=R/M,y=Math.exp(-L*L/2);d.push(y),R===0?E+=y:R<p&&(E+=2*y)}for(let R=0;R<d.length;R++)d[R]=d[R]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-n;const g=this._sizeLods[s],w=3*g*(s>_-Ci?s-_+Ci:0),b=4*(this._cubeSize-g);Bs(e,w,b,3*g,2*g),c.setRenderTarget(e),c.render(u,Wr)}}function up(i){const t=[],e=[],n=[];let s=i;const r=i-Ci+1+$a.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ci?c=$a[o-i+Ci-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,M=3,p=2,d=1,E=new Float32Array(M*v*m),_=new Float32Array(p*v*m),g=new Float32Array(d*v*m);for(let b=0;b<m;b++){const R=b%3*2/3-1,L=b>2?0:-1,y=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];E.set(y,M*v*b),_.set(f,p*v*b);const x=[b,b,b,b,b,b];g.set(x,d*v*b)}const w=new Ve;w.setAttribute("position",new fn(E,M)),w.setAttribute("uv",new fn(_,p)),w.setAttribute("faceIndex",new fn(g,d)),t.push(w),s>Ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ec(i,t,e){const n=new hi(i,t,e);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function dp(i,t,e){const n=new Float32Array(ri),s=new I(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ra(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function nc(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ic(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ra(){return`

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
	`}function fp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ao||c===co,h=c===Ui||c===Fi;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new tc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new tc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ei("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mp(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function l(u){const f=[],m=u.index,v=u.attributes.position;let M=0;if(m!==null){const E=m.array;M=m.version;for(let _=0,g=E.length;_<g;_+=3){const w=E[_+0],b=E[_+1],R=E[_+2];f.push(w,b,b,R,R,w)}}else if(v!==void 0){const E=v.array;M=v.version;for(let _=0,g=E.length/3-1;_<g;_+=3){const w=_+0,b=_+1,R=_+2;f.push(w,b,b,R,R,w)}}else return;const p=new(Kc(f)?Qc:Jc)(f,1);p.version=M;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function gp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,m){i.drawElements(n,m,r,f*o),e.update(m,n,1)}function l(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,f*o,v),e.update(m,n,v))}function h(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,v);let p=0;for(let d=0;d<v;d++)p+=m[d];e.update(p,n,1)}function u(f,m,v,M){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)l(f[d]/o,m[d],M[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,M,0,v);let d=0;for(let E=0;E<v;E++)d+=m[E]*M[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function _p(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function vp(i,t,e){const n=new WeakMap,s=new ce;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let g=0;v===!0&&(g=1),M===!0&&(g=2),p===!0&&(g=3);let w=a.attributes.position.count*g,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const R=new Float32Array(w*b*4*u),L=new jc(R,w,b,u);L.type=wn,L.needsUpdate=!0;const y=g*4;for(let C=0;C<u;C++){const k=d[C],F=E[C],H=_[C],$=w*b*4*C;for(let j=0;j<k.count;j++){const X=j*y;v===!0&&(s.fromBufferAttribute(k,j),R[$+X+0]=s.x,R[$+X+1]=s.y,R[$+X+2]=s.z,R[$+X+3]=0),M===!0&&(s.fromBufferAttribute(F,j),R[$+X+4]=s.x,R[$+X+5]=s.y,R[$+X+6]=s.z,R[$+X+7]=0),p===!0&&(s.fromBufferAttribute(H,j),R[$+X+8]=s.x,R[$+X+9]=s.y,R[$+X+10]=s.z,R[$+X+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new Zt(w,b)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const M=a.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function xp(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const ll=new Oe,sc=new sl(1,1),hl=new jc,ul=new Hh,dl=new nl,rc=[],oc=[],ac=new Float32Array(16),cc=new Float32Array(9),lc=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=rc[s];if(r===void 0&&(r=new Float32Array(s),rc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fr(i,t){let e=oc[t];e===void 0&&(e=new Int32Array(t),oc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Tp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;lc.set(n),i.uniformMatrix2fv(this.addr,!1,lc),Ee(e,n)}}function wp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;cc.set(n),i.uniformMatrix3fv(this.addr,!1,cc),Ee(e,n)}}function bp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;ac.set(n),i.uniformMatrix4fv(this.addr,!1,ac),Ee(e,n)}}function Ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Cp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Lp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Ip(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Fp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sc.compareFunction=Zc,r=sc):r=ll,e.setTexture2D(t||r,s)}function Np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ul,s)}function Op(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||dl,s)}function zp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hl,s)}function Bp(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return yp;case 35666:return Ep;case 35674:return Tp;case 35675:return wp;case 35676:return bp;case 5124:case 35670:return Ap;case 35667:case 35671:return Rp;case 35668:case 35672:return Cp;case 35669:case 35673:return Pp;case 5125:return Lp;case 36294:return Dp;case 36295:return Ip;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return zp}}function kp(i,t){i.uniform1fv(this.addr,t)}function Gp(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Vp(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function Hp(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Wp(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xp(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qp(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Yp(i,t){i.uniform1iv(this.addr,t)}function Zp(i,t){i.uniform2iv(this.addr,t)}function Kp(i,t){i.uniform3iv(this.addr,t)}function jp(i,t){i.uniform4iv(this.addr,t)}function $p(i,t){i.uniform1uiv(this.addr,t)}function Jp(i,t){i.uniform2uiv(this.addr,t)}function Qp(i,t){i.uniform3uiv(this.addr,t)}function tm(i,t){i.uniform4uiv(this.addr,t)}function em(i,t,e){const n=this.cache,s=t.length,r=fr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||ll,r[o])}function nm(i,t,e){const n=this.cache,s=t.length,r=fr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ul,r[o])}function im(i,t,e){const n=this.cache,s=t.length,r=fr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||dl,r[o])}function sm(i,t,e){const n=this.cache,s=t.length,r=fr(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hl,r[o])}function rm(i){switch(i){case 5126:return kp;case 35664:return Gp;case 35665:return Vp;case 35666:return Hp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Zp;case 35668:case 35672:return Kp;case 35669:case 35673:return jp;case 5125:return $p;case 36294:return Jp;case 36295:return Qp;case 36296:return tm;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return sm}}class om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bp(e.type)}}class am{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rm(e.type)}}class cm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function hc(i,t){i.seq.push(t),i.map[t.id]=t}function lm(i,t,e){const n=i.name,s=n.length;for(Kr.lastIndex=0;;){const r=Kr.exec(n),o=Kr.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){hc(e,l===void 0?new om(a,i,t):new am(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new cm(a),hc(e,u)),e=u}}}class Ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);lm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function uc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const hm=37297;let um=0;function dm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const dc=new Ht;function fm(i){ee._getMatrix(dc,ee.workingColorSpace,i);const t=`mat3( ${dc.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case tr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dm(i.getShaderSource(t),o)}else return s}function pm(i,t){const e=fm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function mm(i,t){let e;switch(t){case eh:e="Linear";break;case nh:e="Reinhard";break;case ih:e="Cineon";break;case Fc:e="ACESFilmic";break;case rh:e="AgX";break;case oh:e="Neutral";break;case sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ks=new I;function gm(){ee.getLuminanceCoefficients(ks);const i=ks.x.toFixed(4),t=ks.y.toFixed(4),e=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rs).join(`
`)}function vm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function rs(i){return i!==""}function pc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(Mm,ym)}const Sm=new Map;function ym(i,t){let e=qt[t];if(e===void 0){const n=Sm.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zo(e)}const Em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(i){return i.replace(Em,Tm)}function Tm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _c(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ic?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function bm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ui:case Fi:t="ENVMAP_TYPE_CUBE";break;case ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Am(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Rm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Uc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ql:t="ENVMAP_BLENDING_MIX";break;case th:t="ENVMAP_BLENDING_ADD";break}return t}function Cm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Pm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=wm(e),l=bm(e),h=Am(e),u=Rm(e),f=Cm(e),m=_m(e),v=vm(r),M=s.createProgram();let p,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rs).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(rs).join(`
`),d.length>0&&(d+=`
`)):(p=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),d=[_c(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?qt.tonemapping_pars_fragment:"",e.toneMapping!==kn?mm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,pm("linearToOutputTexel",e.outputColorSpace),gm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),o=zo(o),o=pc(o,e),o=mc(o,e),a=zo(a),a=pc(a,e),a=mc(a,e),o=gc(o),a=gc(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=E+p+o,g=E+d+a,w=uc(s,s.VERTEX_SHADER,_),b=uc(s,s.FRAGMENT_SHADER,g);s.attachShader(M,w),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function R(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(M).trim(),F=s.getShaderInfoLog(w).trim(),H=s.getShaderInfoLog(b).trim();let $=!0,j=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,w,b);else{const X=fc(s,w,"vertex"),P=fc(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+X+`
`+P)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||H==="")&&(j=!1);j&&(C.diagnostics={runnable:$,programLog:k,vertexShader:{log:F,prefix:p},fragmentShader:{log:H,prefix:d}})}s.deleteShader(w),s.deleteShader(b),L=new Ks(s,M),y=xm(s,M)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(M,hm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=um++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=b,this}let Lm=0;class Dm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Im(t),e.set(t,n)),n}}class Im{constructor(t){this.id=Lm++,this.code=t,this.usedTimes=0}}function Um(i,t,e,n,s,r,o){const a=new Jo,c=new Dm,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return l.add(y),y===0?"uv":`uv${y}`}function p(y,x,C,k,F){const H=k.fog,$=F.geometry,j=y.isMeshStandardMaterial?k.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||j),P=X&&X.mapping===ur?X.image.height:null,Z=v[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const G=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,K=G!==void 0?G.length:0;let tt=0;$.morphAttributes.position!==void 0&&(tt=1),$.morphAttributes.normal!==void 0&&(tt=2),$.morphAttributes.color!==void 0&&(tt=3);let ft,V,nt,ct;if(Z){const re=mn[Z];ft=re.vertexShader,V=re.fragmentShader}else ft=y.vertexShader,V=y.fragmentShader,c.update(y),nt=c.getVertexShaderID(y),ct=c.getFragmentShaderID(y);const st=i.getRenderTarget(),U=i.state.buffers.depth.getReversed(),Ct=F.isInstancedMesh===!0,xt=F.isBatchedMesh===!0,Nt=!!y.map,gt=!!y.matcap,ut=!!X,D=!!y.aoMap,ne=!!y.lightMap,It=!!y.bumpMap,Ft=!!y.normalMap,wt=!!y.displacementMap,Wt=!!y.emissiveMap,yt=!!y.metalnessMap,A=!!y.roughnessMap,S=y.anisotropy>0,B=y.clearcoat>0,J=y.dispersion>0,it=y.iridescence>0,W=y.sheen>0,pt=y.transmission>0,ht=S&&!!y.anisotropyMap,dt=B&&!!y.clearcoatMap,Gt=B&&!!y.clearcoatNormalMap,at=B&&!!y.clearcoatRoughnessMap,vt=it&&!!y.iridescenceMap,Pt=it&&!!y.iridescenceThicknessMap,Ut=W&&!!y.sheenColorMap,At=W&&!!y.sheenRoughnessMap,$t=!!y.specularMap,Xt=!!y.specularColorMap,le=!!y.specularIntensityMap,N=pt&&!!y.transmissionMap,Mt=pt&&!!y.thicknessMap,Q=!!y.gradientMap,ot=!!y.alphaMap,Tt=y.alphaTest>0,Et=!!y.alphaHash,Vt=!!y.extensions;let ge=kn;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ge=i.toneMapping);const Ce={shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:ft,fragmentShader:V,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:xt,batchingColor:xt&&F._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&F.instanceColor!==null,instancingMorph:Ct&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:zi,alphaToCoverage:!!y.alphaToCoverage,map:Nt,matcap:gt,envMap:ut,envMapMode:ut&&X.mapping,envMapCubeUVHeight:P,aoMap:D,lightMap:ne,bumpMap:It,normalMap:Ft,displacementMap:f&&wt,emissiveMap:Wt,normalMapObjectSpace:Ft&&y.normalMapType===hh,normalMapTangentSpace:Ft&&y.normalMapType===Yc,metalnessMap:yt,roughnessMap:A,anisotropy:S,anisotropyMap:ht,clearcoat:B,clearcoatMap:dt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:at,dispersion:J,iridescence:it,iridescenceMap:vt,iridescenceThicknessMap:Pt,sheen:W,sheenColorMap:Ut,sheenRoughnessMap:At,specularMap:$t,specularColorMap:Xt,specularIntensityMap:le,transmission:pt,transmissionMap:N,thicknessMap:Mt,gradientMap:Q,opaque:y.transparent===!1&&y.blending===Pi&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:Tt,alphaHash:Et,combine:y.combine,mapUv:Nt&&M(y.map.channel),aoMapUv:D&&M(y.aoMap.channel),lightMapUv:ne&&M(y.lightMap.channel),bumpMapUv:It&&M(y.bumpMap.channel),normalMapUv:Ft&&M(y.normalMap.channel),displacementMapUv:wt&&M(y.displacementMap.channel),emissiveMapUv:Wt&&M(y.emissiveMap.channel),metalnessMapUv:yt&&M(y.metalnessMap.channel),roughnessMapUv:A&&M(y.roughnessMap.channel),anisotropyMapUv:ht&&M(y.anisotropyMap.channel),clearcoatMapUv:dt&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&M(y.sheenRoughnessMap.channel),specularMapUv:$t&&M(y.specularMap.channel),specularColorMapUv:Xt&&M(y.specularColorMap.channel),specularIntensityMapUv:le&&M(y.specularIntensityMap.channel),transmissionMapUv:N&&M(y.transmissionMap.channel),thicknessMapUv:Mt&&M(y.thicknessMap.channel),alphaMapUv:ot&&M(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ft||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!$.attributes.uv&&(Nt||ot),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:U,skinning:F.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:tt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:Nt&&y.map.isVideoTexture===!0&&ee.getTransfer(y.map.colorSpace)===ae,decodeVideoTextureEmissive:Wt&&y.emissiveMap.isVideoTexture===!0&&ee.getTransfer(y.emissiveMap.colorSpace)===ae,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===De,flipSided:y.side===ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Vt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&y.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ce.vertexUv1s=l.has(1),Ce.vertexUv2s=l.has(2),Ce.vertexUv3s=l.has(3),l.clear(),Ce}function d(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)x.push(C),x.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(E(x,y),_(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function E(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function _(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),y.push(a.mask)}function g(y){const x=v[y.type];let C;if(x){const k=mn[x];C=nu.clone(k.uniforms)}else C=y.uniforms;return C}function w(y,x){let C;for(let k=0,F=h.length;k<F;k++){const H=h[k];if(H.cacheKey===x){C=H,++C.usedTimes;break}}return C===void 0&&(C=new Pm(i,x,y,r),h.push(C)),C}function b(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:g,acquireProgram:w,releaseProgram:b,releaseShaderCache:R,programs:h,dispose:L}}function Fm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Nm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,m,v,M,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:v,renderOrder:u.renderOrder,z:M,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=v,d.renderOrder=u.renderOrder,d.z=M,d.group=p),t++,d}function a(u,f,m,v,M,p){const d=o(u,f,m,v,M,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function c(u,f,m,v,M,p){const d=o(u,f,m,v,M,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Nm),n.length>1&&n.sort(f||vc),s.length>1&&s.sort(f||vc)}function h(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Om(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new xc,i.set(n,[o])):s>=r.length?(o=new xc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Bt};break;case"SpotLight":e={position:new I,direction:new I,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Bm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let km=0;function Gm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vm(i){const t=new zm,e=Bm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new ue,o=new ue;function a(l){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,v=0,M=0,p=0,d=0,E=0,_=0,g=0,w=0,b=0,R=0;l.sort(Gm);for(let y=0,x=l.length;y<x;y++){const C=l[y],k=C.color,F=C.intensity,H=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*F,u+=k.g*F,f+=k.b*F;else if(C.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(C.sh.coefficients[j],F);R++}else if(C.isDirectionalLight){const j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,P=e.get(C);P.shadowIntensity=X.intensity,P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,n.directionalShadow[m]=P,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=C.shadow.matrix,E++}n.directional[m]=j,m++}else if(C.isSpotLight){const j=t.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(k).multiplyScalar(F),j.distance=H,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,n.spot[M]=j;const X=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,X.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[M]=X.matrix,C.castShadow){const P=e.get(C);P.shadowIntensity=X.intensity,P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,n.spotShadow[M]=P,n.spotShadowMap[M]=$,g++}M++}else if(C.isRectAreaLight){const j=t.get(C);j.color.copy(k).multiplyScalar(F),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=j,p++}else if(C.isPointLight){const j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity),j.distance=C.distance,j.decay=C.decay,C.castShadow){const X=C.shadow,P=e.get(C);P.shadowIntensity=X.intensity,P.shadowBias=X.bias,P.shadowNormalBias=X.normalBias,P.shadowRadius=X.radius,P.shadowMapSize=X.mapSize,P.shadowCameraNear=X.camera.near,P.shadowCameraFar=X.camera.far,n.pointShadow[v]=P,n.pointShadowMap[v]=$,n.pointShadowMatrix[v]=C.shadow.matrix,_++}n.point[v]=j,v++}else if(C.isHemisphereLight){const j=t.get(C);j.skyColor.copy(C.color).multiplyScalar(F),j.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[d]=j,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==m||L.pointLength!==v||L.spotLength!==M||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==E||L.numPointShadows!==_||L.numSpotShadows!==g||L.numSpotMaps!==w||L.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=v,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=g+w-b,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,L.directionalLength=m,L.pointLength=v,L.spotLength=M,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=E,L.numPointShadows=_,L.numSpotShadows=g,L.numSpotMaps=w,L.numLightProbes=R,n.version=km++)}function c(l,h){let u=0,f=0,m=0,v=0,M=0;const p=h.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){const _=l[d];if(_.isDirectionalLight){const g=n.directional[u];g.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),u++}else if(_.isSpotLight){const g=n.spot[m];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(p),g.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(p),m++}else if(_.isRectAreaLight){const g=n.rectArea[v];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),g.halfWidth.set(_.width*.5,0,0),g.halfHeight.set(0,_.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const g=n.point[f];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){const g=n.hemi[M];g.direction.setFromMatrixPosition(_.matrixWorld),g.direction.transformDirection(p),M++}}}return{setup:a,setupView:c,state:n}}function Mc(i){const t=new Vm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Hm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Mc(i),t.set(s,[a])):r>=o.length?(a=new Mc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
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
}`;function qm(i,t,e){let n=new ta;const s=new Zt,r=new Zt,o=new ce,a=new du({depthPacking:lh}),c=new fu,l={},h=e.maxTextureSize,u={[Gn]:ke,[ke]:Gn,[De]:De},f=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:Wm,fragmentShader:Xm}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ve;v.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new et(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dc;let d=this.type;this.render=function(b,R,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Bn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=d!==Tn&&this.type===Tn,H=d===Tn&&this.type!==Tn;for(let $=0,j=b.length;$<j;$++){const X=b[$],P=X.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;s.copy(P.mapSize);const Z=P.getFrameExtents();if(s.multiply(Z),r.copy(P.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,P.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,P.mapSize.y=r.y)),P.map===null||F===!0||H===!0){const K=this.type!==Tn?{minFilter:dn,magFilter:dn}:{};P.map!==null&&P.map.dispose(),P.map=new hi(s.x,s.y,K),P.map.texture.name=X.name+".shadowMap",P.camera.updateProjectionMatrix()}i.setRenderTarget(P.map),i.clear();const G=P.getViewportCount();for(let K=0;K<G;K++){const tt=P.getViewport(K);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),k.viewport(o),P.updateMatrices(X,K),n=P.getFrustum(),g(R,L,P.camera,X,this.type)}P.isPointLightShadow!==!0&&this.type===Tn&&E(P,L),P.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(y,x,C)};function E(b,R){const L=t.update(M);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new hi(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,M,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,L,m,M,null)}function _(b,R,L,y){let x=null;const C=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)x=C;else if(x=L.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const k=x.uuid,F=R.uuid;let H=l[k];H===void 0&&(H={},l[k]=H);let $=H[F];$===void 0&&($=x.clone(),H[F]=$,R.addEventListener("dispose",w)),x=$}if(x.visible=R.visible,x.wireframe=R.wireframe,y===Tn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=L}return x}function g(b,R,L,y,x){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===Tn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const F=t.update(b),H=b.material;if(Array.isArray(H)){const $=F.groups;for(let j=0,X=$.length;j<X;j++){const P=$[j],Z=H[P.materialIndex];if(Z&&Z.visible){const G=_(b,Z,y,x);b.onBeforeShadow(i,b,R,L,F,G,P),i.renderBufferDirect(L,null,F,G,b,P),b.onAfterShadow(i,b,R,L,F,G,P)}}}else if(H.visible){const $=_(b,H,y,x);b.onBeforeShadow(i,b,R,L,F,$,null),i.renderBufferDirect(L,null,F,$,b,null),b.onAfterShadow(i,b,R,L,F,$,null)}}const k=b.children;for(let F=0,H=k.length;F<H;F++)g(k[F],R,L,y,x)}function w(b){b.target.removeEventListener("dispose",w);for(const L in l){const y=l[L],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}const Ym={[to]:eo,[no]:ro,[io]:oo,[Ii]:so,[eo]:to,[ro]:no,[oo]:io,[so]:Ii};function Zm(i,t){function e(){let N=!1;const Mt=new ce;let Q=null;const ot=new ce(0,0,0,0);return{setMask:function(Tt){Q!==Tt&&!N&&(i.colorMask(Tt,Tt,Tt,Tt),Q=Tt)},setLocked:function(Tt){N=Tt},setClear:function(Tt,Et,Vt,ge,Ce){Ce===!0&&(Tt*=ge,Et*=ge,Vt*=ge),Mt.set(Tt,Et,Vt,ge),ot.equals(Mt)===!1&&(i.clearColor(Tt,Et,Vt,ge),ot.copy(Mt))},reset:function(){N=!1,Q=null,ot.set(-1,0,0,0)}}}function n(){let N=!1,Mt=!1,Q=null,ot=null,Tt=null;return{setReversed:function(Et){if(Mt!==Et){const Vt=t.get("EXT_clip_control");Mt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const ge=Tt;Tt=null,this.setClear(ge)}Mt=Et},getReversed:function(){return Mt},setTest:function(Et){Et?st(i.DEPTH_TEST):U(i.DEPTH_TEST)},setMask:function(Et){Q!==Et&&!N&&(i.depthMask(Et),Q=Et)},setFunc:function(Et){if(Mt&&(Et=Ym[Et]),ot!==Et){switch(Et){case to:i.depthFunc(i.NEVER);break;case eo:i.depthFunc(i.ALWAYS);break;case no:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case io:i.depthFunc(i.EQUAL);break;case so:i.depthFunc(i.GEQUAL);break;case ro:i.depthFunc(i.GREATER);break;case oo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Et}},setLocked:function(Et){N=Et},setClear:function(Et){Tt!==Et&&(Mt&&(Et=1-Et),i.clearDepth(Et),Tt=Et)},reset:function(){N=!1,Q=null,ot=null,Tt=null,Mt=!1}}}function s(){let N=!1,Mt=null,Q=null,ot=null,Tt=null,Et=null,Vt=null,ge=null,Ce=null;return{setTest:function(re){N||(re?st(i.STENCIL_TEST):U(i.STENCIL_TEST))},setMask:function(re){Mt!==re&&!N&&(i.stencilMask(re),Mt=re)},setFunc:function(re,sn,vn){(Q!==re||ot!==sn||Tt!==vn)&&(i.stencilFunc(re,sn,vn),Q=re,ot=sn,Tt=vn)},setOp:function(re,sn,vn){(Et!==re||Vt!==sn||ge!==vn)&&(i.stencilOp(re,sn,vn),Et=re,Vt=sn,ge=vn)},setLocked:function(re){N=re},setClear:function(re){Ce!==re&&(i.clearStencil(re),Ce=re)},reset:function(){N=!1,Mt=null,Q=null,ot=null,Tt=null,Et=null,Vt=null,ge=null,Ce=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,m=[],v=null,M=!1,p=null,d=null,E=null,_=null,g=null,w=null,b=null,R=new Bt(0,0,0),L=0,y=!1,x=null,C=null,k=null,F=null,H=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,X=0;const P=i.getParameter(i.VERSION);P.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(P)[1]),j=X>=1):P.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),j=X>=2);let Z=null,G={};const K=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),ft=new ce().fromArray(K),V=new ce().fromArray(tt);function nt(N,Mt,Q,ot){const Tt=new Uint8Array(4),Et=i.createTexture();i.bindTexture(N,Et),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<Q;Vt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(Mt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return Et}const ct={};ct[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),ct[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ct[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Ii),It(!1),Ft(_a),st(i.CULL_FACE),D(Bn);function st(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function U(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ct(N,Mt){return u[N]!==Mt?(i.bindFramebuffer(N,Mt),u[N]=Mt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function xt(N,Mt){let Q=m,ot=!1;if(N){Q=f.get(Mt),Q===void 0&&(Q=[],f.set(Mt,Q));const Tt=N.textures;if(Q.length!==Tt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Et=0,Vt=Tt.length;Et<Vt;Et++)Q[Et]=i.COLOR_ATTACHMENT0+Et;Q.length=Tt.length,ot=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ot=!0);ot&&i.drawBuffers(Q)}function Nt(N){return v!==N?(i.useProgram(N),v=N,!0):!1}const gt={[si]:i.FUNC_ADD,[Nl]:i.FUNC_SUBTRACT,[Ol]:i.FUNC_REVERSE_SUBTRACT};gt[zl]=i.MIN,gt[Bl]=i.MAX;const ut={[kl]:i.ZERO,[Gl]:i.ONE,[Vl]:i.SRC_COLOR,[Jr]:i.SRC_ALPHA,[Zl]:i.SRC_ALPHA_SATURATE,[ql]:i.DST_COLOR,[Wl]:i.DST_ALPHA,[Hl]:i.ONE_MINUS_SRC_COLOR,[Qr]:i.ONE_MINUS_SRC_ALPHA,[Yl]:i.ONE_MINUS_DST_COLOR,[Xl]:i.ONE_MINUS_DST_ALPHA,[Kl]:i.CONSTANT_COLOR,[jl]:i.ONE_MINUS_CONSTANT_COLOR,[$l]:i.CONSTANT_ALPHA,[Jl]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,Mt,Q,ot,Tt,Et,Vt,ge,Ce,re){if(N===Bn){M===!0&&(U(i.BLEND),M=!1);return}if(M===!1&&(st(i.BLEND),M=!0),N!==Fl){if(N!==p||re!==y){if((d!==si||g!==si)&&(i.blendEquation(i.FUNC_ADD),d=si,g=si),re)switch(N){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.ONE,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ma:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}E=null,_=null,w=null,b=null,R.set(0,0,0),L=0,p=N,y=re}return}Tt=Tt||Mt,Et=Et||Q,Vt=Vt||ot,(Mt!==d||Tt!==g)&&(i.blendEquationSeparate(gt[Mt],gt[Tt]),d=Mt,g=Tt),(Q!==E||ot!==_||Et!==w||Vt!==b)&&(i.blendFuncSeparate(ut[Q],ut[ot],ut[Et],ut[Vt]),E=Q,_=ot,w=Et,b=Vt),(ge.equals(R)===!1||Ce!==L)&&(i.blendColor(ge.r,ge.g,ge.b,Ce),R.copy(ge),L=Ce),p=N,y=!1}function ne(N,Mt){N.side===De?U(i.CULL_FACE):st(i.CULL_FACE);let Q=N.side===ke;Mt&&(Q=!Q),It(Q),N.blending===Pi&&N.transparent===!1?D(Bn):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const ot=N.stencilWrite;a.setTest(ot),ot&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):U(i.SAMPLE_ALPHA_TO_COVERAGE)}function It(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function Ft(N){N!==Il?(st(i.CULL_FACE),N!==C&&(N===_a?i.cullFace(i.BACK):N===Ul?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):U(i.CULL_FACE),C=N}function wt(N){N!==k&&(j&&i.lineWidth(N),k=N)}function Wt(N,Mt,Q){N?(st(i.POLYGON_OFFSET_FILL),(F!==Mt||H!==Q)&&(i.polygonOffset(Mt,Q),F=Mt,H=Q)):U(i.POLYGON_OFFSET_FILL)}function yt(N){N?st(i.SCISSOR_TEST):U(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+$-1),Z!==N&&(i.activeTexture(N),Z=N)}function S(N,Mt,Q){Q===void 0&&(Z===null?Q=i.TEXTURE0+$-1:Q=Z);let ot=G[Q];ot===void 0&&(ot={type:void 0,texture:void 0},G[Q]=ot),(ot.type!==N||ot.texture!==Mt)&&(Z!==Q&&(i.activeTexture(Q),Z=Q),i.bindTexture(N,Mt||ct[N]),ot.type=N,ot.texture=Mt)}function B(){const N=G[Z];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pt(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Gt(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pt(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(N){ft.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ft.copy(N))}function At(N){V.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),V.copy(N))}function $t(N,Mt){let Q=l.get(Mt);Q===void 0&&(Q=new WeakMap,l.set(Mt,Q));let ot=Q.get(N);ot===void 0&&(ot=i.getUniformBlockIndex(Mt,N.name),Q.set(N,ot))}function Xt(N,Mt){const ot=l.get(Mt).get(N);c.get(Mt)!==ot&&(i.uniformBlockBinding(Mt,ot,N.__bindingPointIndex),c.set(Mt,ot))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Z=null,G={},u={},f=new WeakMap,m=[],v=null,M=!1,p=null,d=null,E=null,_=null,g=null,w=null,b=null,R=new Bt(0,0,0),L=0,y=!1,x=null,C=null,k=null,F=null,H=null,ft.set(0,0,i.canvas.width,i.canvas.height),V.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:U,bindFramebuffer:Ct,drawBuffers:xt,useProgram:Nt,setBlending:D,setMaterial:ne,setFlipSided:It,setCullFace:Ft,setLineWidth:wt,setPolygonOffset:Wt,setScissorTest:yt,activeTexture:A,bindTexture:S,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:vt,texImage3D:Pt,updateUBOMapping:$t,uniformBlockBinding:Xt,texStorage2D:Gt,texStorage3D:at,texSubImage2D:W,texSubImage3D:pt,compressedTexSubImage2D:ht,compressedTexSubImage3D:dt,scissor:Ut,viewport:At,reset:le}}function Km(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Zt,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return m?new OffscreenCanvas(A,S):nr("canvas")}function M(A,S,B){let J=1;const it=yt(A);if((it.width>B||it.height>B)&&(J=B/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(J*it.width),pt=Math.floor(J*it.height);u===void 0&&(u=v(W,pt));const ht=S?v(W,pt):u;return ht.width=W,ht.height=pt,ht.getContext("2d").drawImage(A,0,0,W,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+W+"x"+pt+")."),ht}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(A,S,B,J,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=S;if(S===i.RED&&(B===i.FLOAT&&(W=i.R32F),B===i.HALF_FLOAT&&(W=i.R16F),B===i.UNSIGNED_BYTE&&(W=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.R8UI),B===i.UNSIGNED_SHORT&&(W=i.R16UI),B===i.UNSIGNED_INT&&(W=i.R32UI),B===i.BYTE&&(W=i.R8I),B===i.SHORT&&(W=i.R16I),B===i.INT&&(W=i.R32I)),S===i.RG&&(B===i.FLOAT&&(W=i.RG32F),B===i.HALF_FLOAT&&(W=i.RG16F),B===i.UNSIGNED_BYTE&&(W=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RG8UI),B===i.UNSIGNED_SHORT&&(W=i.RG16UI),B===i.UNSIGNED_INT&&(W=i.RG32UI),B===i.BYTE&&(W=i.RG8I),B===i.SHORT&&(W=i.RG16I),B===i.INT&&(W=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGB8UI),B===i.UNSIGNED_SHORT&&(W=i.RGB16UI),B===i.UNSIGNED_INT&&(W=i.RGB32UI),B===i.BYTE&&(W=i.RGB8I),B===i.SHORT&&(W=i.RGB16I),B===i.INT&&(W=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),B===i.UNSIGNED_INT&&(W=i.RGBA32UI),B===i.BYTE&&(W=i.RGBA8I),B===i.SHORT&&(W=i.RGBA16I),B===i.INT&&(W=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),S===i.RGBA){const pt=it?tr:ee.getTransfer(J);B===i.FLOAT&&(W=i.RGBA32F),B===i.HALF_FLOAT&&(W=i.RGBA16F),B===i.UNSIGNED_BYTE&&(W=pt===ae?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function g(A,S){let B;return A?S===null||S===li||S===Ni?B=i.DEPTH24_STENCIL8:S===wn?B=i.DEPTH32F_STENCIL8:S===ds&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===li||S===Ni?B=i.DEPTH_COMPONENT24:S===wn?B=i.DEPTH_COMPONENT32F:S===ds&&(B=i.DEPTH_COMPONENT16),B}function w(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==dn&&A.minFilter!==gn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function b(A){const S=A.target;S.removeEventListener("dispose",b),L(S),S.isVideoTexture&&h.delete(S)}function R(A){const S=A.target;S.removeEventListener("dispose",R),x(S)}function L(A){const S=n.get(A);if(S.__webglInit===void 0)return;const B=A.source,J=f.get(B);if(J){const it=J[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&y(A),Object.keys(J).length===0&&f.delete(B)}n.remove(A)}function y(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const B=A.source,J=f.get(B);delete J[S.__cacheKey],o.memory.textures--}function x(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let it=0;it<S.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[J][it]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=A.textures;for(let J=0,it=B.length;J<it;J++){const W=n.get(B[J]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(B[J])}n.remove(A)}let C=0;function k(){C=0}function F(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function H(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function $(A,S){const B=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(B,A,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function j(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){V(B,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function X(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){V(B,A,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function P(A,S){const B=n.get(A);if(A.version>0&&B.__version!==A.version){nt(B,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const Z={[us]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},G={[dn]:i.NEAREST,[ah]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},K={[uh]:i.NEVER,[_h]:i.ALWAYS,[dh]:i.LESS,[Zc]:i.LEQUAL,[fh]:i.EQUAL,[gh]:i.GEQUAL,[ph]:i.GREATER,[mh]:i.NOTEQUAL};function tt(A,S){if(S.type===wn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===gn||S.magFilter===xr||S.magFilter===vs||S.magFilter===ci||S.minFilter===gn||S.minFilter===xr||S.minFilter===vs||S.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Z[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Z[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Z[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,G[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,G[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,K[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===dn||S.minFilter!==vs&&S.minFilter!==ci||S.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ft(A,S){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));const J=S.source;let it=f.get(J);it===void 0&&(it={},f.set(J,it));const W=H(S);if(W!==A.__cacheKey){it[W]===void 0&&(it[W]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),it[W].usedTimes++;const pt=it[A.__cacheKey];pt!==void 0&&(it[A.__cacheKey].usedTimes--,pt.usedTimes===0&&y(S)),A.__cacheKey=W,A.__webglTexture=it[W].texture}return B}function V(A,S,B){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const it=ft(A,S),W=S.source;e.bindTexture(J,A.__webglTexture,i.TEXTURE0+B);const pt=n.get(W);if(W.version!==pt.__version||it===!0){e.activeTexture(i.TEXTURE0+B);const ht=ee.getPrimaries(ee.workingColorSpace),dt=S.colorSpace===zn?null:ee.getPrimaries(S.colorSpace),Gt=S.colorSpace===zn||ht===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let at=M(S.image,!1,s.maxTextureSize);at=Wt(S,at);const vt=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type);let Ut=_(S.internalFormat,vt,Pt,S.colorSpace,S.isVideoTexture);tt(J,S);let At;const $t=S.mipmaps,Xt=S.isVideoTexture!==!0,le=pt.__version===void 0||it===!0,N=W.dataReady,Mt=w(S,at);if(S.isDepthTexture)Ut=g(S.format===Oi,S.type),le&&(Xt?e.texStorage2D(i.TEXTURE_2D,1,Ut,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ut,at.width,at.height,0,vt,Pt,null));else if(S.isDataTexture)if($t.length>0){Xt&&le&&e.texStorage2D(i.TEXTURE_2D,Mt,Ut,$t[0].width,$t[0].height);for(let Q=0,ot=$t.length;Q<ot;Q++)At=$t[Q],Xt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,vt,Pt,At.data):e.texImage2D(i.TEXTURE_2D,Q,Ut,At.width,At.height,0,vt,Pt,At.data);S.generateMipmaps=!1}else Xt?(le&&e.texStorage2D(i.TEXTURE_2D,Mt,Ut,at.width,at.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,vt,Pt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,at.width,at.height,0,vt,Pt,at.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Xt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ut,$t[0].width,$t[0].height,at.depth);for(let Q=0,ot=$t.length;Q<ot;Q++)if(At=$t[Q],S.format!==un)if(vt!==null)if(Xt){if(N)if(S.layerUpdates.size>0){const Tt=ja(At.width,At.height,S.format,S.type);for(const Et of S.layerUpdates){const Vt=At.data.subarray(Et*Tt/At.data.BYTES_PER_ELEMENT,(Et+1)*Tt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Et,At.width,At.height,1,vt,Vt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,at.depth,vt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ut,At.width,At.height,at.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,At.width,At.height,at.depth,vt,Pt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ut,At.width,At.height,at.depth,0,vt,Pt,At.data)}else{Xt&&le&&e.texStorage2D(i.TEXTURE_2D,Mt,Ut,$t[0].width,$t[0].height);for(let Q=0,ot=$t.length;Q<ot;Q++)At=$t[Q],S.format!==un?vt!==null?Xt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,vt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,Ut,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,At.width,At.height,vt,Pt,At.data):e.texImage2D(i.TEXTURE_2D,Q,Ut,At.width,At.height,0,vt,Pt,At.data)}else if(S.isDataArrayTexture)if(Xt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ut,at.width,at.height,at.depth),N)if(S.layerUpdates.size>0){const Q=ja(at.width,at.height,S.format,S.type);for(const ot of S.layerUpdates){const Tt=at.data.subarray(ot*Q/at.data.BYTES_PER_ELEMENT,(ot+1)*Q/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,at.width,at.height,1,vt,Pt,Tt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,vt,Pt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,at.width,at.height,at.depth,0,vt,Pt,at.data);else if(S.isData3DTexture)Xt?(le&&e.texStorage3D(i.TEXTURE_3D,Mt,Ut,at.width,at.height,at.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,vt,Pt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,at.width,at.height,at.depth,0,vt,Pt,at.data);else if(S.isFramebufferTexture){if(le)if(Xt)e.texStorage2D(i.TEXTURE_2D,Mt,Ut,at.width,at.height);else{let Q=at.width,ot=at.height;for(let Tt=0;Tt<Mt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Ut,Q,ot,0,vt,Pt,null),Q>>=1,ot>>=1}}else if($t.length>0){if(Xt&&le){const Q=yt($t[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Ut,Q.width,Q.height)}for(let Q=0,ot=$t.length;Q<ot;Q++)At=$t[Q],Xt?N&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,vt,Pt,At):e.texImage2D(i.TEXTURE_2D,Q,Ut,vt,Pt,At);S.generateMipmaps=!1}else if(Xt){if(le){const Q=yt(at);e.texStorage2D(i.TEXTURE_2D,Mt,Ut,Q.width,Q.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Pt,at)}else e.texImage2D(i.TEXTURE_2D,0,Ut,vt,Pt,at);p(S)&&d(J),pt.__version=W.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function nt(A,S,B){if(S.image.length!==6)return;const J=ft(A,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);const W=n.get(it);if(it.version!==W.__version||J===!0){e.activeTexture(i.TEXTURE0+B);const pt=ee.getPrimaries(ee.workingColorSpace),ht=S.colorSpace===zn?null:ee.getPrimaries(S.colorSpace),dt=S.colorSpace===zn||pt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Gt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,vt=[];for(let ot=0;ot<6;ot++)!Gt&&!at?vt[ot]=M(S.image[ot],!0,s.maxCubemapSize):vt[ot]=at?S.image[ot].image:S.image[ot],vt[ot]=Wt(S,vt[ot]);const Pt=vt[0],Ut=r.convert(S.format,S.colorSpace),At=r.convert(S.type),$t=_(S.internalFormat,Ut,At,S.colorSpace),Xt=S.isVideoTexture!==!0,le=W.__version===void 0||J===!0,N=it.dataReady;let Mt=w(S,Pt);tt(i.TEXTURE_CUBE_MAP,S);let Q;if(Gt){Xt&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,$t,Pt.width,Pt.height);for(let ot=0;ot<6;ot++){Q=vt[ot].mipmaps;for(let Tt=0;Tt<Q.length;Tt++){const Et=Q[Tt];S.format!==un?Ut!==null?Xt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,Et.width,Et.height,Ut,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,$t,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,0,0,Et.width,Et.height,Ut,At,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt,$t,Et.width,Et.height,0,Ut,At,Et.data)}}}else{if(Q=S.mipmaps,Xt&&le){Q.length>0&&Mt++;const ot=yt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,$t,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(at){Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,vt[ot].width,vt[ot].height,Ut,At,vt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,vt[ot].width,vt[ot].height,0,Ut,At,vt[ot].data);for(let Tt=0;Tt<Q.length;Tt++){const Vt=Q[Tt].image[ot].image;Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,Vt.width,Vt.height,Ut,At,Vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,$t,Vt.width,Vt.height,0,Ut,At,Vt.data)}}else{Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ut,At,vt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,$t,Ut,At,vt[ot]);for(let Tt=0;Tt<Q.length;Tt++){const Et=Q[Tt];Xt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,0,0,Ut,At,Et.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt+1,$t,Ut,At,Et.image[ot])}}}p(S)&&d(i.TEXTURE_CUBE_MAP),W.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ct(A,S,B,J,it,W){const pt=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),dt=_(B.internalFormat,pt,ht,B.colorSpace),Gt=n.get(S),at=n.get(B);if(at.__renderTarget=S,!Gt.__hasExternalTextures){const vt=Math.max(1,S.width>>W),Pt=Math.max(1,S.height>>W);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,W,dt,vt,Pt,S.depth,0,pt,ht,null):e.texImage2D(it,W,dt,vt,Pt,0,pt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ft(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,at.__webglTexture,0,It(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,at.__webglTexture,W),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const J=S.depthTexture,it=J&&J.isDepthTexture?J.type:null,W=g(S.stencilBuffer,it),pt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=It(S);Ft(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,W,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,W,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,W,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,A)}else{const J=S.textures;for(let it=0;it<J.length;it++){const W=J[it],pt=r.convert(W.format,W.colorSpace),ht=r.convert(W.type),dt=_(W.internalFormat,pt,ht,W.colorSpace),Gt=It(S);B&&Ft(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,dt,S.width,S.height):Ft(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,dt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,dt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function U(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const it=J.__webglTexture,W=It(S);if(S.depthTexture.format===Li)Ft(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(S.depthTexture.format===Oi)Ft(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ct(A){const S=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=J}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");U(S.__webglFramebuffer,A)}else if(B){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),st(S.__webglDepthbuffer[J],A,!1);else{const it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,W)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),st(S.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(A,S,B){const J=n.get(A);S!==void 0&&ct(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ct(A)}function Nt(A){const S=A.texture,B=n.get(A),J=n.get(S);A.addEventListener("dispose",R);const it=A.textures,W=A.isWebGLCubeRenderTarget===!0,pt=it.length>1;if(pt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,o.memory.textures++),W){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let dt=0;dt<S.mipmaps.length;dt++)B.__webglFramebuffer[ht][dt]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(pt)for(let ht=0,dt=it.length;ht<dt;ht++){const Gt=n.get(it[ht]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Ft(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<it.length;ht++){const dt=it[ht];B.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const Gt=r.convert(dt.format,dt.colorSpace),at=r.convert(dt.type),vt=_(dt.internalFormat,Gt,at,dt.colorSpace,A.isXRRenderTarget===!0),Pt=It(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,vt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),st(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),tt(i.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)ct(B.__webglFramebuffer[ht][dt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else ct(B.__webglFramebuffer[ht],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ht=0,dt=it.length;ht<dt;ht++){const Gt=it[ht],at=n.get(Gt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),tt(i.TEXTURE_2D,Gt),ct(B.__webglFramebuffer,A,Gt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),p(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,J.__webglTexture),tt(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let dt=0;dt<S.mipmaps.length;dt++)ct(B.__webglFramebuffer[dt],A,S,i.COLOR_ATTACHMENT0,ht,dt);else ct(B.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ht,0);p(S)&&d(ht),e.unbindTexture()}A.depthBuffer&&Ct(A)}function gt(A){const S=A.textures;for(let B=0,J=S.length;B<J;B++){const it=S[B];if(p(it)){const W=E(A),pt=n.get(it).__webglTexture;e.bindTexture(W,pt),d(W),e.unbindTexture()}}}const ut=[],D=[];function ne(A){if(A.samples>0){if(Ft(A)===!1){const S=A.textures,B=A.width,J=A.height;let it=i.COLOR_BUFFER_BIT;const W=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(A),ht=S.length>1;if(ht)for(let dt=0;dt<S.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let dt=0;dt<S.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[dt]);const Gt=n.get(S[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,it,i.NEAREST),c===!0&&(ut.length=0,D.length=0,ut.push(i.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ut.push(W),D.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let dt=0;dt<S.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[dt]);const Gt=n.get(S[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function It(A){return Math.min(s.maxSamples,A.samples)}function Ft(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function wt(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Wt(A,S){const B=A.colorSpace,J=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==zi&&B!==zn&&(ee.getTransfer(B)===ae?(J!==un||it!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=X,this.setTextureCube=P,this.rebindTextures=xt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Ft}function jm(i,t){function e(n,s=zn){let r;const o=ee.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oc)return i.BYTE;if(n===zc)return i.SHORT;if(n===ds)return i.UNSIGNED_SHORT;if(n===Ho)return i.INT;if(n===li)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===ps)return i.HALF_FLOAT;if(n===kc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===un)return i.RGBA;if(n===Vc)return i.LUMINANCE;if(n===Hc)return i.LUMINANCE_ALPHA;if(n===Li)return i.DEPTH_COMPONENT;if(n===Oi)return i.DEPTH_STENCIL;if(n===Wc)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===Xc)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===qs||n===Ys)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mo||n===go||n===_o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mo||n===go)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===_o)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vo||n===xo||n===Mo||n===So||n===yo||n===Eo||n===To||n===wo||n===bo||n===Ao||n===Ro||n===Co||n===Po||n===Lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Mo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===So)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===To)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===Do||n===Io)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Zs)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Io)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qc||n===Uo||n===Fo||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Zs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const $m=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jm=`
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

}`;class Qm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:$m,fragmentShader:Jm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new et(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t0 extends Wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,m=null,v=null;const M=new Qm,p=e.getContextAttributes();let d=null,E=null;const _=[],g=[],w=new Zt;let b=null;const R=new Ze;R.viewport=new ce;const L=new Ze;L.viewport=new ce;const y=[R,L],x=new xu;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let nt=_[V];return nt===void 0&&(nt=new Br,_[V]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(V){let nt=_[V];return nt===void 0&&(nt=new Br,_[V]=nt),nt.getGripSpace()},this.getHand=function(V){let nt=_[V];return nt===void 0&&(nt=new Br,_[V]=nt),nt.getHandSpace()};function F(V){const nt=g.indexOf(V.inputSource);if(nt===-1)return;const ct=_[nt];ct!==void 0&&(ct.update(V.inputSource,V.frame,l||o),ct.dispatchEvent({type:V.type,data:V.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let V=0;V<_.length;V++){const nt=g[V];nt!==null&&(g[V]=null,_[V].disconnect(nt))}C=null,k=null,M.reset(),t.setRenderTarget(d),m=null,f=null,u=null,s=null,E=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,st=null,U=null;p.depth&&(U=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=p.stencil?Oi:Li,st=p.stencil?Ni:li);const Ct={colorFormat:e.RGBA8,depthFormat:U,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ct),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new hi(f.textureWidth,f.textureHeight,{format:un,type:Pn,depthTexture:new sl(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ct={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new hi(m.framebufferWidth,m.framebufferHeight,{format:un,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(V){for(let nt=0;nt<V.removed.length;nt++){const ct=V.removed[nt],st=g.indexOf(ct);st>=0&&(g[st]=null,_[st].disconnect(ct))}for(let nt=0;nt<V.added.length;nt++){const ct=V.added[nt];let st=g.indexOf(ct);if(st===-1){for(let Ct=0;Ct<_.length;Ct++)if(Ct>=g.length){g.push(ct),st=Ct;break}else if(g[Ct]===null){g[Ct]=ct,st=Ct;break}if(st===-1)break}const U=_[st];U&&U.connect(ct)}}const j=new I,X=new I;function P(V,nt,ct){j.setFromMatrixPosition(nt.matrixWorld),X.setFromMatrixPosition(ct.matrixWorld);const st=j.distanceTo(X),U=nt.projectionMatrix.elements,Ct=ct.projectionMatrix.elements,xt=U[14]/(U[10]-1),Nt=U[14]/(U[10]+1),gt=(U[9]+1)/U[5],ut=(U[9]-1)/U[5],D=(U[8]-1)/U[0],ne=(Ct[8]+1)/Ct[0],It=xt*D,Ft=xt*ne,wt=st/(-D+ne),Wt=wt*-D;if(nt.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Wt),V.translateZ(wt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),U[10]===-1)V.projectionMatrix.copy(nt.projectionMatrix),V.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const yt=xt+wt,A=Nt+wt,S=It-Wt,B=Ft+(st-Wt),J=gt*Nt/A*yt,it=ut*Nt/A*yt;V.projectionMatrix.makePerspective(S,B,J,it,yt,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Z(V,nt){nt===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(nt.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let nt=V.near,ct=V.far;M.texture!==null&&(M.depthNear>0&&(nt=M.depthNear),M.depthFar>0&&(ct=M.depthFar)),x.near=L.near=R.near=nt,x.far=L.far=R.far=ct,(C!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,k=x.far),R.layers.mask=V.layers.mask|2,L.layers.mask=V.layers.mask|4,x.layers.mask=R.layers.mask|L.layers.mask;const st=V.parent,U=x.cameras;Z(x,st);for(let Ct=0;Ct<U.length;Ct++)Z(U[Ct],st);U.length===2?P(x,R,L):x.projectionMatrix.copy(R.projectionMatrix),G(V,x,st)};function G(V,nt,ct){ct===null?V.matrix.copy(nt.matrixWorld):(V.matrix.copy(ct.matrixWorld),V.matrix.invert(),V.matrix.multiply(nt.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(nt.projectionMatrix),V.projectionMatrixInverse.copy(nt.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=fs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(x)};let K=null;function tt(V,nt){if(h=nt.getViewerPose(l||o),v=nt,h!==null){const ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let st=!1;ct.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let xt=0;xt<ct.length;xt++){const Nt=ct[xt];let gt=null;if(m!==null)gt=m.getViewport(Nt);else{const D=u.getViewSubImage(f,Nt);gt=D.viewport,xt===0&&(t.setRenderTargetTextures(E,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(E))}let ut=y[xt];ut===void 0&&(ut=new Ze,ut.layers.enable(xt),ut.viewport=new ce,y[xt]=ut),ut.matrix.fromArray(Nt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Nt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(gt.x,gt.y,gt.width,gt.height),xt===0&&(x.matrix.copy(ut.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(ut)}const U=s.enabledFeatures;if(U&&U.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const xt=u.getDepthInformation(ct[0]);xt&&xt.isValid&&xt.texture&&M.init(t,xt,s.renderState)}}for(let ct=0;ct<_.length;ct++){const st=g[ct],U=_[ct];st!==null&&U!==void 0&&U.update(st,nt,l||o)}K&&K(V,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),v=null}const ft=new cl;ft.setAnimationLoop(tt),this.setAnimationLoop=function(V){K=V},this.dispose=function(){}}}const Qn=new _n,e0=new ue;function n0(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,tl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,E,_,g){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,g)):d.isMeshMatcapMaterial?(r(p,d),v(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),M(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,E,_):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===ke&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===ke&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const E=t.get(d),_=E.envMap,g=E.envMapRotation;_&&(p.envMap.value=_,Qn.copy(g),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),p.envMapRotation.value.setFromMatrix4(e0.makeRotationFromEuler(Qn)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,E,_){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=_*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ke&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function M(p,d){const E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function i0(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,_){const g=_.program;n.uniformBlockBinding(E,g)}function l(E,_){let g=s[E.id];g===void 0&&(v(E),g=h(E),s[E.id]=g,E.addEventListener("dispose",p));const w=_.program;n.updateUBOMapping(E,w);const b=t.render.frame;r[E.id]!==b&&(f(E),r[E.id]=b)}function h(E){const _=u();E.__bindingPointIndex=_;const g=i.createBuffer(),w=E.__size,b=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,w,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,g),g}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const _=s[E.id],g=E.uniforms,w=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,R=g.length;b<R;b++){const L=Array.isArray(g[b])?g[b]:[g[b]];for(let y=0,x=L.length;y<x;y++){const C=L[y];if(m(C,b,y,w)===!0){const k=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let $=0;$<F.length;$++){const j=F[$],X=M(j);typeof j=="number"||typeof j=="boolean"?(C.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,k+H,C.__data)):j.isMatrix3?(C.__data[0]=j.elements[0],C.__data[1]=j.elements[1],C.__data[2]=j.elements[2],C.__data[3]=0,C.__data[4]=j.elements[3],C.__data[5]=j.elements[4],C.__data[6]=j.elements[5],C.__data[7]=0,C.__data[8]=j.elements[6],C.__data[9]=j.elements[7],C.__data[10]=j.elements[8],C.__data[11]=0):(j.toArray(C.__data,H),H+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,_,g,w){const b=E.value,R=_+"_"+g;if(w[R]===void 0)return typeof b=="number"||typeof b=="boolean"?w[R]=b:w[R]=b.clone(),!0;{const L=w[R];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return w[R]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function v(E){const _=E.uniforms;let g=0;const w=16;for(let R=0,L=_.length;R<L;R++){const y=Array.isArray(_[R])?_[R]:[_[R]];for(let x=0,C=y.length;x<C;x++){const k=y[x],F=Array.isArray(k.value)?k.value:[k.value];for(let H=0,$=F.length;H<$;H++){const j=F[H],X=M(j),P=g%w,Z=P%X.boundary,G=P+Z;g+=Z,G!==0&&w-G<X.storage&&(g+=w-G),k.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=g,g+=X.storage}}}const b=g%w;return b>0&&(g+=w-b),E.__size=g,E.__cache={},this}function M(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function p(E){const _=E.target;_.removeEventListener("dispose",p);const g=o.indexOf(_.__bindingPointIndex);o.splice(g,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}class s0{constructor(t={}){const{canvas:e=Uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),M=new Int32Array(4);let p=null,d=null;const E=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=kn,this.toneMappingExposure=1;const g=this;let w=!1,b=0,R=0,L=null,y=-1,x=null;const C=new ce,k=new ce;let F=null;const H=new Bt(0);let $=0,j=e.width,X=e.height,P=1,Z=null,G=null;const K=new ce(0,0,j,X),tt=new ce(0,0,j,X);let ft=!1;const V=new ta;let nt=!1,ct=!1;this.transmissionResolutionScale=1;const st=new ue,U=new ue,Ct=new I,xt=new ce,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function ut(){return L===null?P:1}let D=n;function ne(T,O){return e.getContext(T,O)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vo}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),D===null){const O="webgl2";if(D=ne(O,T),D===null)throw ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let It,Ft,wt,Wt,yt,A,S,B,J,it,W,pt,ht,dt,Gt,at,vt,Pt,Ut,At,$t,Xt,le,N;function Mt(){It=new pp(D),It.init(),Xt=new jm(D,It),Ft=new ap(D,It,t,Xt),wt=new Zm(D,It),Ft.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),Wt=new _p(D),yt=new Fm,A=new Km(D,It,wt,yt,Ft,Xt,Wt),S=new lp(g),B=new fp(g),J=new yu(D),le=new rp(D,J),it=new mp(D,J,Wt,le),W=new xp(D,it,J,Wt),Ut=new vp(D,Ft,A),at=new cp(yt),pt=new Um(g,S,B,It,Ft,le,at),ht=new n0(g,yt),dt=new Om,Gt=new Hm(It),Pt=new sp(g,S,B,wt,W,m,c),vt=new qm(g,W,Ft),N=new i0(D,Wt,Ft,wt),At=new op(D,It,Wt),$t=new gp(D,It,Wt),Wt.programs=pt.programs,g.capabilities=Ft,g.extensions=It,g.properties=yt,g.renderLists=dt,g.shadowMap=vt,g.state=wt,g.info=Wt}Mt();const Q=new t0(g,D);this.xr=Q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=It.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=It.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(j,X,!1))},this.getSize=function(T){return T.set(j,X)},this.setSize=function(T,O,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,X=O,e.width=Math.floor(T*P),e.height=Math.floor(O*P),q===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(j*P,X*P).floor()},this.setDrawingBufferSize=function(T,O,q){j=T,X=O,P=q,e.width=Math.floor(T*q),e.height=Math.floor(O*q),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(K)},this.setViewport=function(T,O,q,Y){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,O,q,Y),wt.viewport(C.copy(K).multiplyScalar(P).round())},this.getScissor=function(T){return T.copy(tt)},this.setScissor=function(T,O,q,Y){T.isVector4?tt.set(T.x,T.y,T.z,T.w):tt.set(T,O,q,Y),wt.scissor(k.copy(tt).multiplyScalar(P).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(T){wt.setScissorTest(ft=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){G=T},this.getClearColor=function(T){return T.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,q=!0){let Y=0;if(T){let z=!1;if(L!==null){const lt=L.texture.format;z=lt===Zo||lt===Yo||lt===qo}if(z){const lt=L.texture.type,St=lt===Pn||lt===li||lt===ds||lt===Ni||lt===Wo||lt===Xo,bt=Pt.getClearColor(),Rt=Pt.getClearAlpha(),Ot=bt.r,zt=bt.g,Lt=bt.b;St?(v[0]=Ot,v[1]=zt,v[2]=Lt,v[3]=Rt,D.clearBufferuiv(D.COLOR,0,v)):(M[0]=Ot,M[1]=zt,M[2]=Lt,M[3]=Rt,D.clearBufferiv(D.COLOR,0,M))}else Y|=D.COLOR_BUFFER_BIT}O&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),Pt.dispose(),dt.dispose(),Gt.dispose(),yt.dispose(),S.dispose(),B.dispose(),W.dispose(),le.dispose(),N.dispose(),pt.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",ha),Q.removeEventListener("sessionend",ua),qn.stop()};function ot(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const T=Wt.autoReset,O=vt.enabled,q=vt.autoUpdate,Y=vt.needsUpdate,z=vt.type;Mt(),Wt.autoReset=T,vt.enabled=O,vt.autoUpdate=q,vt.needsUpdate=Y,vt.type=z}function Et(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vt(T){const O=T.target;O.removeEventListener("dispose",Vt),ge(O)}function ge(T){Ce(T),yt.remove(T)}function Ce(T){const O=yt.get(T).programs;O!==void 0&&(O.forEach(function(q){pt.releaseProgram(q)}),T.isShaderMaterial&&pt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,q,Y,z,lt){O===null&&(O=Nt);const St=z.isMesh&&z.matrixWorld.determinant()<0,bt=wl(T,O,q,Y,z);wt.setMaterial(Y,St);let Rt=q.index,Ot=1;if(Y.wireframe===!0){if(Rt=it.getWireframeAttribute(q),Rt===void 0)return;Ot=2}const zt=q.drawRange,Lt=q.attributes.position;let Qt=zt.start*Ot,ie=(zt.start+zt.count)*Ot;lt!==null&&(Qt=Math.max(Qt,lt.start*Ot),ie=Math.min(ie,(lt.start+lt.count)*Ot)),Rt!==null?(Qt=Math.max(Qt,0),ie=Math.min(ie,Rt.count)):Lt!=null&&(Qt=Math.max(Qt,0),ie=Math.min(ie,Lt.count));const xe=ie-Qt;if(xe<0||xe===1/0)return;le.setup(z,Y,bt,q,Rt);let _e,te=At;if(Rt!==null&&(_e=J.get(Rt),te=$t,te.setIndex(_e)),z.isMesh)Y.wireframe===!0?(wt.setLineWidth(Y.wireframeLinewidth*ut()),te.setMode(D.LINES)):te.setMode(D.TRIANGLES);else if(z.isLine){let Dt=Y.linewidth;Dt===void 0&&(Dt=1),wt.setLineWidth(Dt*ut()),z.isLineSegments?te.setMode(D.LINES):z.isLineLoop?te.setMode(D.LINE_LOOP):te.setMode(D.LINE_STRIP)}else z.isPoints?te.setMode(D.POINTS):z.isSprite&&te.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ei("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Dt=z._multiDrawStarts,Re=z._multiDrawCounts,se=z._multiDrawCount,rn=Rt?J.get(Rt).bytesPerElement:1,fi=yt.get(Y).currentProgram.getUniforms();for(let He=0;He<se;He++)fi.setValue(D,"_gl_DrawID",He),te.render(Dt[He]/rn,Re[He])}else if(z.isInstancedMesh)te.renderInstances(Qt,xe,z.count);else if(q.isInstancedBufferGeometry){const Dt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Re=Math.min(q.instanceCount,Dt);te.renderInstances(Qt,xe,Re)}else te.render(Qt,xe)};function re(T,O,q){T.transparent===!0&&T.side===De&&T.forceSinglePass===!1?(T.side=ke,T.needsUpdate=!0,_s(T,O,q),T.side=Gn,T.needsUpdate=!0,_s(T,O,q),T.side=De):_s(T,O,q)}this.compile=function(T,O,q=null){q===null&&(q=T),d=Gt.get(q),d.init(O),_.push(d),q.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),T!==q&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const Y=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const lt=z.material;if(lt)if(Array.isArray(lt))for(let St=0;St<lt.length;St++){const bt=lt[St];re(bt,q,z),Y.add(bt)}else re(lt,q,z),Y.add(lt)}),d=_.pop(),Y},this.compileAsync=function(T,O,q=null){const Y=this.compile(T,O,q);return new Promise(z=>{function lt(){if(Y.forEach(function(St){yt.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){z(T);return}setTimeout(lt,10)}It.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let sn=null;function vn(T){sn&&sn(T)}function ha(){qn.stop()}function ua(){qn.start()}const qn=new cl;qn.setAnimationLoop(vn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(T){sn=T,Q.setAnimationLoop(T),T===null?qn.stop():qn.start()},Q.addEventListener("sessionstart",ha),Q.addEventListener("sessionend",ua),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(O),O=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,O,L),d=Gt.get(T,_.length),d.init(O),_.push(d),U.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),V.setFromProjectionMatrix(U),ct=this.localClippingEnabled,nt=at.init(this.clippingPlanes,ct),p=dt.get(T,E.length),p.init(),E.push(p),Q.enabled===!0&&Q.isPresenting===!0){const lt=g.xr.getDepthSensingMesh();lt!==null&&_r(lt,O,-1/0,g.sortObjects)}_r(T,O,0,g.sortObjects),p.finish(),g.sortObjects===!0&&p.sort(Z,G),gt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,gt&&Pt.addToRenderList(p,T),this.info.render.frame++,nt===!0&&at.beginShadows();const q=d.state.shadowsArray;vt.render(q,T,O),nt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=p.opaque,z=p.transmissive;if(d.setupLights(),O.isArrayCamera){const lt=O.cameras;if(z.length>0)for(let St=0,bt=lt.length;St<bt;St++){const Rt=lt[St];fa(Y,z,T,Rt)}gt&&Pt.render(T);for(let St=0,bt=lt.length;St<bt;St++){const Rt=lt[St];da(p,T,Rt,Rt.viewport)}}else z.length>0&&fa(Y,z,T,O),gt&&Pt.render(T),da(p,T,O);L!==null&&R===0&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(g,T,O),le.resetDefaultState(),y=-1,x=null,_.pop(),_.length>0?(d=_[_.length-1],nt===!0&&at.setGlobalState(g.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function _r(T,O,q,Y){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){Y&&xt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(U);const St=W.update(T),bt=T.material;bt.visible&&p.push(T,St,bt,q,xt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){const St=W.update(T),bt=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),xt.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),xt.copy(St.boundingSphere.center)),xt.applyMatrix4(T.matrixWorld).applyMatrix4(U)),Array.isArray(bt)){const Rt=St.groups;for(let Ot=0,zt=Rt.length;Ot<zt;Ot++){const Lt=Rt[Ot],Qt=bt[Lt.materialIndex];Qt&&Qt.visible&&p.push(T,St,Qt,q,xt.z,Lt)}}else bt.visible&&p.push(T,St,bt,q,xt.z,null)}}const lt=T.children;for(let St=0,bt=lt.length;St<bt;St++)_r(lt[St],O,q,Y)}function da(T,O,q,Y){const z=T.opaque,lt=T.transmissive,St=T.transparent;d.setupLightsView(q),nt===!0&&at.setGlobalState(g.clippingPlanes,q),Y&&wt.viewport(C.copy(Y)),z.length>0&&gs(z,O,q),lt.length>0&&gs(lt,O,q),St.length>0&&gs(St,O,q),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function fa(T,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Y.id]===void 0&&(d.state.transmissionRenderTarget[Y.id]=new hi(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?ps:Pn,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const lt=d.state.transmissionRenderTarget[Y.id],St=Y.viewport||C;lt.setSize(St.z*g.transmissionResolutionScale,St.w*g.transmissionResolutionScale);const bt=g.getRenderTarget();g.setRenderTarget(lt),g.getClearColor(H),$=g.getClearAlpha(),$<1&&g.setClearColor(16777215,.5),g.clear(),gt&&Pt.render(q);const Rt=g.toneMapping;g.toneMapping=kn;const Ot=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),d.setupLightsView(Y),nt===!0&&at.setGlobalState(g.clippingPlanes,Y),gs(T,q,Y),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),It.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Lt=0,Qt=O.length;Lt<Qt;Lt++){const ie=O[Lt],xe=ie.object,_e=ie.geometry,te=ie.material,Dt=ie.group;if(te.side===De&&xe.layers.test(Y.layers)){const Re=te.side;te.side=ke,te.needsUpdate=!0,pa(xe,q,Y,_e,te,Dt),te.side=Re,te.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}g.setRenderTarget(bt),g.setClearColor(H,$),Ot!==void 0&&(Y.viewport=Ot),g.toneMapping=Rt}function gs(T,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let z=0,lt=T.length;z<lt;z++){const St=T[z],bt=St.object,Rt=St.geometry,Ot=Y===null?St.material:Y,zt=St.group;bt.layers.test(q.layers)&&pa(bt,O,q,Rt,Ot,zt)}}function pa(T,O,q,Y,z,lt){T.onBeforeRender(g,O,q,Y,z,lt),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(g,O,q,Y,T,lt),z.transparent===!0&&z.side===De&&z.forceSinglePass===!1?(z.side=ke,z.needsUpdate=!0,g.renderBufferDirect(q,O,Y,z,T,lt),z.side=Gn,z.needsUpdate=!0,g.renderBufferDirect(q,O,Y,z,T,lt),z.side=De):g.renderBufferDirect(q,O,Y,z,T,lt),T.onAfterRender(g,O,q,Y,z,lt)}function _s(T,O,q){O.isScene!==!0&&(O=Nt);const Y=yt.get(T),z=d.state.lights,lt=d.state.shadowsArray,St=z.state.version,bt=pt.getParameters(T,z.state,lt,O,q),Rt=pt.getProgramCacheKey(bt);let Ot=Y.programs;Y.environment=T.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(T.isMeshStandardMaterial?B:S).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",Vt),Ot=new Map,Y.programs=Ot);let zt=Ot.get(Rt);if(zt!==void 0){if(Y.currentProgram===zt&&Y.lightsStateVersion===St)return ga(T,bt),zt}else bt.uniforms=pt.getUniforms(T),T.onBeforeCompile(bt,g),zt=pt.acquireProgram(bt,Rt),Ot.set(Rt,zt),Y.uniforms=bt.uniforms;const Lt=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Lt.clippingPlanes=at.uniform),ga(T,bt),Y.needsLights=Al(T),Y.lightsStateVersion=St,Y.needsLights&&(Lt.ambientLightColor.value=z.state.ambient,Lt.lightProbe.value=z.state.probe,Lt.directionalLights.value=z.state.directional,Lt.directionalLightShadows.value=z.state.directionalShadow,Lt.spotLights.value=z.state.spot,Lt.spotLightShadows.value=z.state.spotShadow,Lt.rectAreaLights.value=z.state.rectArea,Lt.ltc_1.value=z.state.rectAreaLTC1,Lt.ltc_2.value=z.state.rectAreaLTC2,Lt.pointLights.value=z.state.point,Lt.pointLightShadows.value=z.state.pointShadow,Lt.hemisphereLights.value=z.state.hemi,Lt.directionalShadowMap.value=z.state.directionalShadowMap,Lt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Lt.spotShadowMap.value=z.state.spotShadowMap,Lt.spotLightMatrix.value=z.state.spotLightMatrix,Lt.spotLightMap.value=z.state.spotLightMap,Lt.pointShadowMap.value=z.state.pointShadowMap,Lt.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=zt,Y.uniformsList=null,zt}function ma(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Ks.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function ga(T,O){const q=yt.get(T);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function wl(T,O,q,Y,z){O.isScene!==!0&&(O=Nt),A.resetTextureUnits();const lt=O.fog,St=Y.isMeshStandardMaterial?O.environment:null,bt=L===null?g.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:zi,Rt=(Y.isMeshStandardMaterial?B:S).get(Y.envMap||St),Ot=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,zt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Lt=!!q.morphAttributes.position,Qt=!!q.morphAttributes.normal,ie=!!q.morphAttributes.color;let xe=kn;Y.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(xe=g.toneMapping);const _e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,te=_e!==void 0?_e.length:0,Dt=yt.get(Y),Re=d.state.lights;if(nt===!0&&(ct===!0||T!==x)){const Ie=T===x&&Y.id===y;at.setState(Y,T,Ie)}let se=!1;Y.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Re.state.version||Dt.outputColorSpace!==bt||z.isBatchedMesh&&Dt.batching===!1||!z.isBatchedMesh&&Dt.batching===!0||z.isBatchedMesh&&Dt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Dt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Dt.instancing===!1||!z.isInstancedMesh&&Dt.instancing===!0||z.isSkinnedMesh&&Dt.skinning===!1||!z.isSkinnedMesh&&Dt.skinning===!0||z.isInstancedMesh&&Dt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Dt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Dt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Dt.instancingMorph===!1&&z.morphTexture!==null||Dt.envMap!==Rt||Y.fog===!0&&Dt.fog!==lt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==at.numPlanes||Dt.numIntersection!==at.numIntersection)||Dt.vertexAlphas!==Ot||Dt.vertexTangents!==zt||Dt.morphTargets!==Lt||Dt.morphNormals!==Qt||Dt.morphColors!==ie||Dt.toneMapping!==xe||Dt.morphTargetsCount!==te)&&(se=!0):(se=!0,Dt.__version=Y.version);let rn=Dt.currentProgram;se===!0&&(rn=_s(Y,O,z));let fi=!1,He=!1,$i=!1;const de=rn.getUniforms(),je=Dt.uniforms;if(wt.useProgram(rn.program)&&(fi=!0,He=!0,$i=!0),Y.id!==y&&(y=Y.id,He=!0),fi||x!==T){wt.buffers.depth.getReversed()?(st.copy(T.projectionMatrix),Nh(st),Oh(st),de.setValue(D,"projectionMatrix",st)):de.setValue(D,"projectionMatrix",T.projectionMatrix),de.setValue(D,"viewMatrix",T.matrixWorldInverse);const Be=de.map.cameraPosition;Be!==void 0&&Be.setValue(D,Ct.setFromMatrixPosition(T.matrixWorld)),Ft.logarithmicDepthBuffer&&de.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&de.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),x!==T&&(x=T,He=!0,$i=!0)}if(z.isSkinnedMesh){de.setOptional(D,z,"bindMatrix"),de.setOptional(D,z,"bindMatrixInverse");const Ie=z.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),de.setValue(D,"boneTexture",Ie.boneTexture,A))}z.isBatchedMesh&&(de.setOptional(D,z,"batchingTexture"),de.setValue(D,"batchingTexture",z._matricesTexture,A),de.setOptional(D,z,"batchingIdTexture"),de.setValue(D,"batchingIdTexture",z._indirectTexture,A),de.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&de.setValue(D,"batchingColorTexture",z._colorsTexture,A));const $e=q.morphAttributes;if(($e.position!==void 0||$e.normal!==void 0||$e.color!==void 0)&&Ut.update(z,q,rn),(He||Dt.receiveShadow!==z.receiveShadow)&&(Dt.receiveShadow=z.receiveShadow,de.setValue(D,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(je.envMap.value=Rt,je.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(je.envMapIntensity.value=O.environmentIntensity),He&&(de.setValue(D,"toneMappingExposure",g.toneMappingExposure),Dt.needsLights&&bl(je,$i),lt&&Y.fog===!0&&ht.refreshFogUniforms(je,lt),ht.refreshMaterialUniforms(je,Y,P,X,d.state.transmissionRenderTarget[T.id]),Ks.upload(D,ma(Dt),je,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ks.upload(D,ma(Dt),je,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&de.setValue(D,"center",z.center),de.setValue(D,"modelViewMatrix",z.modelViewMatrix),de.setValue(D,"normalMatrix",z.normalMatrix),de.setValue(D,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ie=Y.uniformsGroups;for(let Be=0,vr=Ie.length;Be<vr;Be++){const Yn=Ie[Be];N.update(Yn,rn),N.bind(Yn,rn)}}return rn}function bl(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Al(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,O,q){yt.get(T.texture).__webglTexture=O,yt.get(T.depthTexture).__webglTexture=q;const Y=yt.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const q=yt.get(T);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const Rl=D.createFramebuffer();this.setRenderTarget=function(T,O=0,q=0){L=T,b=O,R=q;let Y=!0,z=null,lt=!1,St=!1;if(T){const Rt=yt.get(T);if(Rt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Rt.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Rt.__hasExternalTextures)A.rebindTextures(T,yt.get(T.texture).__webglTexture,yt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Lt=T.depthTexture;if(Rt.__boundDepthTexture!==Lt){if(Lt!==null&&yt.has(Lt)&&(T.width!==Lt.image.width||T.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(St=!0);const zt=yt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?z=zt[O][q]:z=zt[O],lt=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?z=yt.get(T).__webglMultisampledFramebuffer:Array.isArray(zt)?z=zt[q]:z=zt,C.copy(T.viewport),k.copy(T.scissor),F=T.scissorTest}else C.copy(K).multiplyScalar(P).floor(),k.copy(tt).multiplyScalar(P).floor(),F=ft;if(q!==0&&(z=Rl),wt.bindFramebuffer(D.FRAMEBUFFER,z)&&Y&&wt.drawBuffers(T,z),wt.viewport(C),wt.scissor(k),wt.setScissorTest(F),lt){const Rt=yt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Rt.__webglTexture,q)}else if(St){const Rt=yt.get(T.texture),Ot=O;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,q,Ot)}else if(T!==null&&q!==0){const Rt=yt.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(T,O,q,Y,z,lt,St){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt){wt.bindFramebuffer(D.FRAMEBUFFER,bt);try{const Rt=T.texture,Ot=Rt.format,zt=Rt.type;if(!Ft.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-Y&&q>=0&&q<=T.height-z&&D.readPixels(O,q,Y,z,Xt.convert(Ot),Xt.convert(zt),lt)}finally{const Rt=L!==null?yt.get(L).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(T,O,q,Y,z,lt,St){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=yt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt){const Rt=T.texture,Ot=Rt.format,zt=Rt.type;if(!Ft.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-Y&&q>=0&&q<=T.height-z){wt.bindFramebuffer(D.FRAMEBUFFER,bt);const Lt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Lt),D.bufferData(D.PIXEL_PACK_BUFFER,lt.byteLength,D.STREAM_READ),D.readPixels(O,q,Y,z,Xt.convert(Ot),Xt.convert(zt),0);const Qt=L!==null?yt.get(L).__webglFramebuffer:null;wt.bindFramebuffer(D.FRAMEBUFFER,Qt);const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Fh(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Lt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,lt),D.deleteBuffer(Lt),D.deleteSync(ie),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,q=0){T.isTexture!==!0&&(ei("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const Y=Math.pow(2,-q),z=Math.floor(T.image.width*Y),lt=Math.floor(T.image.height*Y),St=O!==null?O.x:0,bt=O!==null?O.y:0;A.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,St,bt,z,lt),wt.unbindTexture()};const Cl=D.createFramebuffer(),Pl=D.createFramebuffer();this.copyTextureToTexture=function(T,O,q=null,Y=null,z=0,lt=null){T.isTexture!==!0&&(ei("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,T=arguments[1],O=arguments[2],lt=arguments[3]||0,q=null),lt===null&&(z!==0?(ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=z,z=0):lt=0);let St,bt,Rt,Ot,zt,Lt,Qt,ie,xe;const _e=T.isCompressedTexture?T.mipmaps[lt]:T.image;if(q!==null)St=q.max.x-q.min.x,bt=q.max.y-q.min.y,Rt=q.isBox3?q.max.z-q.min.z:1,Ot=q.min.x,zt=q.min.y,Lt=q.isBox3?q.min.z:0;else{const $e=Math.pow(2,-z);St=Math.floor(_e.width*$e),bt=Math.floor(_e.height*$e),T.isDataArrayTexture?Rt=_e.depth:T.isData3DTexture?Rt=Math.floor(_e.depth*$e):Rt=1,Ot=0,zt=0,Lt=0}Y!==null?(Qt=Y.x,ie=Y.y,xe=Y.z):(Qt=0,ie=0,xe=0);const te=Xt.convert(O.format),Dt=Xt.convert(O.type);let Re;O.isData3DTexture?(A.setTexture3D(O,0),Re=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),Re=D.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),Re=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);const se=D.getParameter(D.UNPACK_ROW_LENGTH),rn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fi=D.getParameter(D.UNPACK_SKIP_PIXELS),He=D.getParameter(D.UNPACK_SKIP_ROWS),$i=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_e.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ot),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Lt);const de=T.isDataArrayTexture||T.isData3DTexture,je=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const $e=yt.get(T),Ie=yt.get(O),Be=yt.get($e.__renderTarget),vr=yt.get(Ie.__renderTarget);wt.bindFramebuffer(D.READ_FRAMEBUFFER,Be.__webglFramebuffer),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Yn=0;Yn<Rt;Yn++)de&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(T).__webglTexture,z,Lt+Yn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(O).__webglTexture,lt,xe+Yn)),D.blitFramebuffer(Ot,zt,St,bt,Qt,ie,St,bt,D.DEPTH_BUFFER_BIT,D.NEAREST);wt.bindFramebuffer(D.READ_FRAMEBUFFER,null),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||yt.has(T)){const $e=yt.get(T),Ie=yt.get(O);wt.bindFramebuffer(D.READ_FRAMEBUFFER,Cl),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Pl);for(let Be=0;Be<Rt;Be++)de?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$e.__webglTexture,z,Lt+Be):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$e.__webglTexture,z),je?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.__webglTexture,lt,xe+Be):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ie.__webglTexture,lt),z!==0?D.blitFramebuffer(Ot,zt,St,bt,Qt,ie,St,bt,D.COLOR_BUFFER_BIT,D.NEAREST):je?D.copyTexSubImage3D(Re,lt,Qt,ie,xe+Be,Ot,zt,St,bt):D.copyTexSubImage2D(Re,lt,Qt,ie,Ot,zt,St,bt);wt.bindFramebuffer(D.READ_FRAMEBUFFER,null),wt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else je?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(Re,lt,Qt,ie,xe,St,bt,Rt,te,Dt,_e.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,lt,Qt,ie,xe,St,bt,Rt,te,_e.data):D.texSubImage3D(Re,lt,Qt,ie,xe,St,bt,Rt,te,Dt,_e):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,lt,Qt,ie,St,bt,te,Dt,_e.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,lt,Qt,ie,_e.width,_e.height,te,_e.data):D.texSubImage2D(D.TEXTURE_2D,lt,Qt,ie,St,bt,te,Dt,_e);D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,rn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fi),D.pixelStorei(D.UNPACK_SKIP_ROWS,He),D.pixelStorei(D.UNPACK_SKIP_IMAGES,$i),lt===0&&O.generateMipmaps&&D.generateMipmap(Re),wt.unbindTexture()},this.copyTextureToTexture3D=function(T,O,q=null,Y=null,z=0){return T.isTexture!==!0&&(ei("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,T=arguments[2],O=arguments[3],z=arguments[4]||0),ei('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,O,q,Y,z)},this.initRenderTarget=function(T){yt.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),wt.unbindTexture()},this.resetState=function(){b=0,R=0,L=null,wt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class r0{constructor(){rt(this,"ctx",null);rt(this,"masterGain",null);rt(this,"noiseBuffer",null);rt(this,"ambienceStarted",!1)}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.7,this.masterGain.connect(this.ctx.destination),this.noiseBuffer=this.createNoiseBuffer(this.ctx,2)}this.ctx.state==="suspended"&&this.ctx.resume(),this.ambienceStarted||this.startAmbience()}createNoiseBuffer(t,e){const n=Math.floor(t.sampleRate*e),s=t.createBuffer(1,n,t.sampleRate),r=s.getChannelData(0);for(let o=0;o<n;o++)r[o]=Math.random()*2-1;return s}playShot(){if(!this.ctx||!this.masterGain||!this.noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(3400,t),n.frequency.exponentialRampToValueAtTime(380,t+.14);const s=this.ctx.createGain();s.gain.setValueAtTime(.55,t),s.gain.exponentialRampToValueAtTime(.001,t+.16),e.connect(n),n.connect(s),s.connect(this.masterGain),e.start(t,Math.random()*.5,.17);const r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(175,t),r.frequency.exponentialRampToValueAtTime(42,t+.09);const o=this.ctx.createGain();o.gain.setValueAtTime(.5,t),o.gain.exponentialRampToValueAtTime(.001,t+.1),r.connect(o),o.connect(this.masterGain),r.start(t),r.stop(t+.11)}playEmptyClick(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="square",e.frequency.setValueAtTime(1400,t),e.frequency.exponentialRampToValueAtTime(520,t+.025);const n=this.ctx.createBiquadFilter();n.type="highpass",n.frequency.value=800;const s=this.ctx.createGain();s.gain.setValueAtTime(.16,t),s.gain.exponentialRampToValueAtTime(.001,t+.03),e.connect(n),n.connect(s),s.connect(this.masterGain),e.start(t),e.stop(t+.035)}playReload(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime;this.scheduleMechClick(t+.02,720,420,.14),this.scheduleMechClick(t+.65,480,760,.18),this.scheduleMechClick(t+1.15,920,1280,.2)}scheduleMechClick(t,e,n,s){if(!this.ctx||!this.masterGain)return;const r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(e,t),r.frequency.exponentialRampToValueAtTime(n,t+.055);const o=this.ctx.createGain();o.gain.setValueAtTime(s,t),o.gain.exponentialRampToValueAtTime(.001,t+.065),r.connect(o),o.connect(this.masterGain),r.start(t),r.stop(t+.07)}playFootstep(t){if(!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=this.ctx.currentTime,n=this.ctx.createBufferSource();n.buffer=this.noiseBuffer;const s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();t==="water"?(s.type="bandpass",s.frequency.setValueAtTime(1150,e),s.Q.value=1.2,r.gain.setValueAtTime(.16,e),r.gain.exponentialRampToValueAtTime(.001,e+.16),n.start(e,Math.random()*.7,.17)):t==="sand"?(s.type="bandpass",s.frequency.setValueAtTime(680,e),s.Q.value=.8,r.gain.setValueAtTime(.11,e),r.gain.exponentialRampToValueAtTime(.001,e+.09),n.start(e,Math.random()*.7,.1)):t==="rock"?(s.type="lowpass",s.frequency.setValueAtTime(950,e),r.gain.setValueAtTime(.13,e),r.gain.exponentialRampToValueAtTime(.001,e+.065),n.start(e,Math.random()*.7,.07)):(s.type="lowpass",s.frequency.setValueAtTime(520,e),r.gain.setValueAtTime(.095,e),r.gain.exponentialRampToValueAtTime(.001,e+.08),n.start(e,Math.random()*.7,.085)),n.connect(s),s.connect(r),r.connect(this.masterGain)}playHit(t){if(!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(t?260:540,e),n.frequency.exponentialRampToValueAtTime(t?90:210,e+.08);const s=this.ctx.createGain();if(s.gain.setValueAtTime(t?.28:.2,e),s.gain.exponentialRampToValueAtTime(.001,e+.09),n.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.095),t){const r=this.ctx.createBufferSource();r.buffer=this.noiseBuffer;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1100,e),o.Q.value=1.1;const a=this.ctx.createGain();a.gain.setValueAtTime(.24,e),a.gain.exponentialRampToValueAtTime(.001,e+.19),r.connect(o),o.connect(a),a.connect(this.masterGain),r.start(e,Math.random()*.5,.2)}}playEnemyShot(t){if(!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=Math.max(.05,1/(1+Math.max(0,t)*.08)),n=this.ctx.currentTime,s=this.ctx.createBufferSource();s.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(2200,n),r.frequency.exponentialRampToValueAtTime(260,n+.14);const o=this.ctx.createGain();o.gain.setValueAtTime(.36*e,n),o.gain.exponentialRampToValueAtTime(.001,n+.15),s.connect(r),r.connect(o),o.connect(this.masterGain),s.start(n,Math.random()*.5,.16);const a=this.ctx.createOscillator();a.type="triangle",a.frequency.setValueAtTime(140,n),a.frequency.exponentialRampToValueAtTime(38,n+.085);const c=this.ctx.createGain();c.gain.setValueAtTime(.32*e,n),c.gain.exponentialRampToValueAtTime(.001,n+.09),a.connect(c),c.connect(this.masterGain),a.start(n),a.stop(n+.095)}playPlayerHurt(){if(!this.ctx||!this.masterGain||!this.noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="sine",e.frequency.setValueAtTime(135,t),e.frequency.exponentialRampToValueAtTime(42,t+.14);const n=this.ctx.createGain();n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.16);const s=this.ctx.createBufferSource();s.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(550,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.28,t),o.gain.exponentialRampToValueAtTime(.001,t+.12),s.connect(r),r.connect(o),o.connect(this.masterGain),s.start(t,Math.random()*.5,.13)}playHeadshot(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator();e.type="triangle",e.frequency.setValueAtTime(1550,t),e.frequency.exponentialRampToValueAtTime(980,t+.09);const n=this.ctx.createOscillator();n.type="sine",n.frequency.setValueAtTime(2350,t),n.frequency.exponentialRampToValueAtTime(1750,t+.075);const s=this.ctx.createGain();s.gain.setValueAtTime(.28,t),s.gain.exponentialRampToValueAtTime(.001,t+.11),e.connect(s),n.connect(s),s.connect(this.masterGain),e.start(t),n.start(t),e.stop(t+.12),n.stop(t+.12)}playPistolShot(){if(!this.ctx||!this.masterGain||!this.noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(2800,t),n.Q.value=.85;const s=this.ctx.createGain();s.gain.setValueAtTime(.45,t),s.gain.exponentialRampToValueAtTime(.001,t+.1),e.connect(n),n.connect(s),s.connect(this.masterGain),e.start(t,Math.random()*.5,.11);const r=this.ctx.createOscillator();r.type="triangle",r.frequency.setValueAtTime(240,t),r.frequency.exponentialRampToValueAtTime(65,t+.065);const o=this.ctx.createGain();o.gain.setValueAtTime(.38,t),o.gain.exponentialRampToValueAtTime(.001,t+.075),r.connect(o),o.connect(this.masterGain),r.start(t),r.stop(t+.08)}playKnifeSlash(){if(!this.ctx||!this.masterGain||!this.noiseBuffer)return;const t=this.ctx.currentTime,e=this.ctx.createBufferSource();e.buffer=this.noiseBuffer;const n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.setValueAtTime(900,t),n.frequency.exponentialRampToValueAtTime(3200,t+.06),n.frequency.exponentialRampToValueAtTime(700,t+.14),n.Q.value=1.6;const s=this.ctx.createGain();s.gain.setValueAtTime(.01,t),s.gain.linearRampToValueAtTime(.28,t+.04),s.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(s),s.connect(this.masterGain),e.start(t,Math.random()*.4,.16)}playPickup(){if(!this.ctx||!this.masterGain)return;const t=this.ctx.currentTime,e=[[587.33,0],[880,.09]];for(const[n,s]of e){const r=this.ctx.createOscillator();r.type="sine",r.frequency.setValueAtTime(n,t+s);const o=this.ctx.createGain();o.gain.setValueAtTime(.22,t+s),o.gain.exponentialRampToValueAtTime(.001,t+s+.22),r.connect(o),o.connect(this.masterGain),r.start(t+s),r.stop(t+s+.24)}}playHelicopterRotor(t){if(!this.ctx||!this.masterGain||!this.noiseBuffer)return;const e=Math.max(.03,1/(1+Math.max(0,t)*.035)),n=this.ctx.currentTime,s=this.ctx.createOscillator();s.type="sine",s.frequency.setValueAtTime(88,n),s.frequency.exponentialRampToValueAtTime(52,n+.075);const r=this.ctx.createGain();r.gain.setValueAtTime(.24*e,n),r.gain.exponentialRampToValueAtTime(.001,n+.085),s.connect(r),r.connect(this.masterGain),s.start(n),s.stop(n+.09);const o=this.ctx.createBufferSource();o.buffer=this.noiseBuffer;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=380;const c=this.ctx.createGain();c.gain.setValueAtTime(.14*e,n),c.gain.exponentialRampToValueAtTime(.001,n+.09),o.connect(a),a.connect(c),c.connect(this.masterGain),o.start(n,Math.random()*.6,.095)}startAmbience(){if(!this.ctx||!this.masterGain||!this.noiseBuffer||this.ambienceStarted)return;this.ambienceStarted=!0;const t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer,t.loop=!0;const e=this.ctx.createBiquadFilter();e.type="lowpass",e.frequency.value=340;const n=this.ctx.createGain();n.gain.value=.045;const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=.14;const r=this.ctx.createGain();r.gain.value=.025,s.connect(r),r.connect(n.gain),t.connect(e),e.connect(n),n.connect(this.masterGain),t.start(),s.start()}}const or=72,oi=0,Ye=-190,ar=62,cr=0,js=-.65,tn=0,en=46;function fl(i){return i===1?{x:0,z:0}:{x:oi,z:Ye}}function pl(i,t,e){return Math.max(t,Math.min(e,i))}function Ke(i,t,e){const n=pl((e-i)/(t-i),0,1);return n*n*(3-2*n)}function ls(i,t,e){return i+(t-i)*e}function Gs(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453123;return(e-Math.floor(e))*2-1}function o0(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Gs(e,n),l=Gs(e+1,n),h=Gs(e,n+1),u=Gs(e+1,n+1);return ls(ls(c,l,o),ls(h,u,o),a)}function An(i,t,e=4){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++)n+=o0(i*r,t*r)*s,o+=s,s*=.5,r*=2.03;return n/o}function oa(i){let t=i>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function a0(i,t){const e=Math.hypot(i,t),n=An(i*.022+5.2,t*.022-3.7,4)*10,s=or+n,r=e/s,o=1.65*(1-Ke(.68,1.04,r)),a=-6.4*Ke(.92,1.38,r),l=(4.7+2.9*An(i*.038+21.7,t*.038+14.3,4))*(1-Ke(.24,.85,r)),h=Math.max(0,1-r/.44),u=An(i*.075-9.1,t*.075+3.4,4),f=Math.pow(h,1.55)*(7.1+2.4*u),m=An(i*.11+3.1,t*.11-8.4,3)*.35*(1-Ke(.75,1.02,r));return o+a+l+f+m}function c0(i,t){const e=i-oi,n=t-Ye,s=Math.hypot(e,n),r=An(e*.026-8.3,n*.026+6.4,4)*8.5,o=ar+r,a=s/o,c=1.55*(1-Ke(.66,1.02,a)),l=-6.4*Ke(.9,1.36,a),u=(5.4+3.2*An(e*.042-14.1,n*.042+9.2,4))*(1-Ke(.2,.84,a)),f=Math.max(0,1-a/.48),m=An(e*.08+4.7,n*.08-5.5,4),v=Math.pow(f,1.35)*(8.6+2.8*m),M=An(e*.12-2.3,n*.12+7.1,3)*.4*(1-Ke(.74,1.02,a));return c+l+u+v+M}function Jt(i,t){return Math.max(a0(i,t),c0(i,t))}function Bo(i,t){const n=Jt(i-.75,t),s=Jt(i+.75,t),r=Jt(i,t-.75),o=Jt(i,t+.75),a=(s-n)/(2*.75),c=(o-r)/(2*.75);return 1/Math.sqrt(a*a+1+c*c)}function Sc(i,t){const e=Jt(i,t);if(e<cr+.08)return"water";if(e<2.1)return"sand";const n=Bo(i,t);return e>7.4||n<.78?"rock":"grass"}function l0(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");if(e){const s=e.createImageData(128,128),r=oa(9001);for(let o=0;o<s.data.length;o+=4){const a=Math.floor(230+r()*25);s.data[o]=a,s.data[o+1]=a,s.data[o+2]=a,s.data[o+3]=255}e.putImageData(s,0,0)}const n=new ea(t);return n.wrapS=us,n.wrapT=us,n.repeat.set(36,36),n.colorSpace=Ne,n}function yc(i,t,e,n,s,r){const o=new Ln(i,i,t,t);o.rotateX(-Math.PI/2);const a=o.attributes.position;for(let g=0;g<a.count;g++){const w=a.getX(g)+e,b=a.getZ(g)+n;a.setXYZ(g,w,Jt(w,b),b)}o.computeVertexNormals();const c=o.attributes.normal,l=new Float32Array(a.count*3),h=new Bt(s?3889249:4945018),u=new Bt(s?8155233:12887146),f=new Bt(s?10457210:15521439),m=new Bt(s?5073724:6266181),v=new Bt(s?3691053:4488246),M=new Bt(s?5917766:8222317),p=new Bt,d=new Bt;for(let g=0;g<a.count;g++){const w=a.getX(g),b=a.getY(g),R=a.getZ(g),L=c.getY(g),y=An(w*.08+12.1,R*.08-4.8,2)*.5+.5;if(d.copy(m).lerp(v,y),b<-.35){const F=Ke(-3.2,-.35,b);p.copy(h).lerp(u,F)}else if(b<.45){const F=Ke(-.35,.45,b);p.copy(u).lerp(f,F)}else if(b<2.4){const F=Ke(1.5,2.4,b);p.copy(f).lerp(d,F)}else p.copy(d);const x=Ke(s?.86:.82,.65,L),C=Ke(s?5.8:7.2,s?9.2:10.4,b),k=pl(Math.max(x,C),0,1);p.lerp(M,k),l[g*3]=p.r,l[g*3+1]=p.g,l[g*3+2]=p.b}o.setAttribute("color",new fn(l,3));const E=new kt({vertexColors:!0,map:r,roughness:.92,metalness:.02}),_=new et(o,E);return _.receiveShadow=!0,_.castShadow=!0,_.name=s?"terrain-island-2":"terrain-island-1",_}function Ec(i,t,e,n,s,r,o){const a=new jt;a.position.set(i,t-.15,e);const c=.88+n()*.35,l=6,h=1.05*c,u=.055+n()*.045,f=n()*Math.PI*2;let m=0,v=0,M=0;for(let _=0;_<l;_++){const g=_/l,w=(_+1)/l,b=ls(.32,.14,g)*c,R=ls(.32,.14,w)*c,L=new be(R,b,h*1.08,7),y=new et(L,s),x=u*(_+.8),C=Math.cos(f)*Math.sin(x)*h*.5,k=Math.sin(f)*Math.sin(x)*h*.5,F=Math.cos(x)*h*.5;y.position.set(m+C,v+F,M+k),y.rotation.order="YXZ",y.rotation.y=-f,y.rotation.z=-x,y.castShadow=!0,y.receiveShadow=!0,a.add(y),m+=C*2,v+=F*2,M+=k*2}const p=new jt;p.position.set(m,v,M),a.add(p);const d=new pn(.16*c,6,5);for(let _=0;_<3;_++){const g=_/3*Math.PI*2+n()*.5,w=new et(d,o);w.position.set(Math.cos(g)*.22*c,-.14*c,Math.sin(g)*.22*c),w.castShadow=!0,p.add(w)}const E=7;for(let _=0;_<E;_++){const g=_/E*Math.PI*2+(n()-.5)*.25,w=new jt;w.rotation.y=g,w.rotation.x=.22+n()*.16;const b=1.65*c,R=1.55*c,L=new mt(.46*c,.05*c,b),y=new et(L,r);y.position.set(0,.04*c,b*.5),y.castShadow=!0,y.receiveShadow=!0,w.add(y);const x=new ki(.24*c,R,4);x.rotateX(Math.PI/2),x.scale(1.15,.22,1);const C=new et(x,r);C.position.set(0,-.22*c,b+R*.42),C.rotation.x=.38,C.castShadow=!0,C.receiveShadow=!0,w.add(C),p.add(w)}return a}function Tc(i,t,e,n,s,r){const o=new ia(n,0),a=o.attributes.position,c=new Map;for(let h=0;h<a.count;h++){const u=a.getX(h),f=a.getY(h),m=a.getZ(h),v=`${u.toFixed(3)},${f.toFixed(3)},${m.toFixed(3)}`;let M=c.get(v);M===void 0&&(M=.78+s()*.42,c.set(v,M)),a.setXYZ(h,u*M,f*M*.76,m*M)}o.computeVertexNormals();const l=new et(o,r);return l.position.set(i,t+n*.22,e),l.rotation.set(s()*.4,s()*Math.PI*2,s()*.4),l.castShadow=!0,l.receiveShadow=!0,l.name="rock",l}function h0(i){const t=new jt,e=[],n=[],s=oa(20261125);i.background=new Bt(8900331),i.fog=new Qo(10147051,.0031);const r=new pu(12774399,14205333,.85);t.add(r);const o=new vu(16774358,2.15);o.position.set(78,98,52),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.camera.left=-95,o.shadow.camera.right=95,o.shadow.camera.top=95,o.shadow.camera.bottom=-95,o.shadow.camera.near=10,o.shadow.camera.far=260,o.shadow.bias=-5e-4,t.add(o),t.add(o.target);const a=new et(new pn(11,16,16),new we({color:16775388,fog:!1}));a.position.set(170,215,115),t.add(a);const c=l0(),l=yc(220,140,0,0,!1,c),h=yc(180,120,oi,Ye,!0,c);t.add(l),t.add(h),n.push(l,h);const u=new Ln(950,950,56,56);u.rotateX(-Math.PI/2);const f=u.attributes.position,m=new Float32Array(f.count),v=new Float32Array(f.count);for(let P=0;P<f.count;P++)m[P]=f.getX(P),v[P]=f.getZ(P);const M=new kt({color:959908,roughness:.18,metalness:.12,transparent:!0,opacity:.84}),p=new et(u,M);p.position.set(0,cr,-95),p.receiveShadow=!0,p.name="ocean",t.add(p);const d=new kt({color:8147768,roughness:.92}),E=new kt({color:4929581,roughness:.94}),_=new kt({color:3902514,roughness:.72,side:De}),g=new kt({color:2976044,roughness:.78,side:De}),w=new kt({color:5059100,roughness:.88}),b=new kt({color:8024938,roughness:.95,flatShading:!0}),R=new kt({color:6048839,roughness:.96,flatShading:!0}),L=new kt({color:7031859,roughness:.88}),y=[];let x=0;for(;y.length<36&&x<600;){x++;const P=s()*Math.PI*2,Z=12+s()*(or-14),G=Math.cos(P)*Z,K=Math.sin(P)*Z;if(Math.hypot(G-tn,K-en)<8.5||Math.abs(G)<6&&K<-40)continue;const tt=Jt(G,K);if(tt<.85||tt>5.6||Bo(G,K)<.84)continue;let ft=!1;for(const nt of y)if(Math.hypot(G-nt.x,K-nt.z)<5.8){ft=!0;break}if(ft)continue;y.push({x:G,z:K});const V=Ec(G,tt,K,s,d,_,w);t.add(V),n.push(V),e.push({x:G,z:K,radius:.42})}let C=0,k=0;for(;C<26&&k<500;){k++;const P=s()*Math.PI*2,Z=4+s()*(or-4),G=Math.cos(P)*Z,K=Math.sin(P)*Z;if(Math.hypot(G-tn,K-en)<7.5||Math.abs(G)<6&&K<-40)continue;const tt=Jt(G,K),ft=tt>=-.25&&tt<=1.8,V=tt>=5.2&&tt<=12.5;if(!ft&&!V)continue;let nt=!1;for(const U of e)if(Math.hypot(G-U.x,K-U.z)<U.radius+3.2){nt=!0;break}if(nt)continue;const ct=ft?.95+s()*1.15:.85+s()*.95,st=Tc(G,tt,K,ct,s,b);t.add(st),n.push(st),e.push({x:G,z:K,radius:ct*.82}),C++}const F=[];let H=0;for(;F.length<22&&H<500;){H++;const P=s()*Math.PI*2,Z=10+s()*(ar-12),G=oi+Math.cos(P)*Z,K=Ye+Math.sin(P)*Z;if(Math.abs(G-oi)<7&&K>Ye+32)continue;const tt=Jt(G,K);if(tt<.85||tt>5.8||Bo(G,K)<.82)continue;let ft=!1;for(const nt of F)if(Math.hypot(G-nt.x,K-nt.z)<5.8){ft=!0;break}if(ft)continue;F.push({x:G,z:K});const V=Ec(G,tt,K,s,E,g,w);t.add(V),n.push(V),e.push({x:G,z:K,radius:.42})}let $=0,j=0;for(;$<24&&j<500;){j++;const P=s()*Math.PI*2,Z=4+s()*(ar-4),G=oi+Math.cos(P)*Z,K=Ye+Math.sin(P)*Z;if(Math.abs(G-oi)<7&&K>Ye+32)continue;const tt=Jt(G,K),ft=tt>=-.25&&tt<=1.9,V=tt>=4.5&&tt<=14.5;if(!ft&&!V)continue;let nt=!1;for(const U of e)if(Math.hypot(G-U.x,K-U.z)<U.radius+3){nt=!0;break}if(nt)continue;const ct=ft?1+s()*1.2:.9+s()*1.1,st=Tc(G,tt,K,ct,s,R);t.add(st),n.push(st),e.push({x:G,z:K,radius:ct*.84}),$++}const X=[[-8,Ye+18],[10,Ye+12],[-14,Ye-8],[9,Ye-16]];for(const[P,Z]of X){const G=Jt(P,Z);if(G<.8)continue;const K=new et(new mt(1.4,1.2,1.4),L);K.position.set(P,G+.55,Z),K.rotation.y=s()*Math.PI,K.castShadow=!0,K.receiveShadow=!0,t.add(K),n.push(K),e.push({x:P,z:Z,radius:.95})}return i.add(t),{group:t,colliders:e,shootableEnvironment:n,setActiveIsland(P){const Z=fl(P);o.position.set(Z.x+78,98,Z.z+52),o.target.position.set(Z.x,0,Z.z),o.target.updateMatrixWorld()},update(P){for(let Z=0;Z<f.count;Z++){const G=m[Z],K=v[Z],tt=Math.sin(G*.08+P*1.4)*.14+Math.cos(K*.07-P*1.15)*.12+Math.sin((G+K)*.05+P*.85)*.08;f.setY(Z,tt)}f.needsUpdate=!0,u.computeVertexNormals()}}}const wc=["Motor","Hélice","Bateria","Timão","Tanque"];function bc(i,t,e){for(let n=i;e<0?n>=t:n<=t;n+=e)if(Jt(0,n)<-.25)return n;return i}function u0(i,t){const e=new jt;i.add(e);const n=bc(-44,-95,-.5),s=bc(Ye+40,Ye+88,.5),r=new I(0,.08,n-1.2),o=new I(0,.08,s+1.2),a=new jt;a.position.copy(r),e.add(a);const c=new kt({color:15857145,roughness:.45,metalness:.1}),l=new kt({color:165063,roughness:.4}),h=new kt({color:13358561,roughness:.7}),u=new kt({color:1976635,roughness:.6,metalness:.4}),f=new kt({color:3718648,transparent:!0,opacity:.55,roughness:.15}),m=new we({color:16096779}),v=new et(new mt(2.3,.85,4.6),c);v.position.set(0,.25,0),v.castShadow=!0,v.receiveShadow=!0,a.add(v);const M=new et(new mt(2.36,.2,4.4),l);M.position.set(0,.42,0),a.add(M);const p=new ki(1.3,1.9,4);p.rotateY(Math.PI/4),p.rotateX(Math.PI/2),p.scale(1.24,.52,1);const d=new et(p,c);d.position.set(0,.28,3.15),d.castShadow=!0,a.add(d);const E=new et(new mt(1.9,.14,3.8),h);E.position.set(0,.62,-.1),E.receiveShadow=!0,a.add(E);const _=new et(new mt(1.1,.75,.7),u);_.position.set(0,.98,.75),_.castShadow=!0,a.add(_);const g=new et(new mt(1.75,.55,.08),f);g.position.set(0,1.25,1.12),g.rotation.x=-.45,a.add(g);const w=new et(new rr(.18,.035,6,14),u);w.position.set(0,1.2,.38),w.rotation.x=.5,a.add(w);const b=new et(new mt(.56,.9,.65),u);b.position.set(0,.65,-2.45),b.castShadow=!0,a.add(b);const R=new et(new be(.03,.03,.7,6),u);R.position.set(.7,1.2,-1.8),a.add(R);const L=new et(new pn(.14,10,10),m);L.position.set(.7,1.6,-1.8),a.add(L);const y=new kt({color:7029795,roughness:.9});for(const U of[r,o]){const Ct=U.z>-95?1:-1,xt=U.z+Ct*4.5,Nt=Jt(1.6,xt),gt=new et(new be(.14,.16,1.3,8),y);gt.position.set(1.6,Nt+.55,xt),gt.castShadow=!0,e.add(gt)}a.rotation.y=Math.PI;const x=[],C=[],k=new pn(.24,6,6),F=new we({color:6583435,transparent:!0,opacity:.45}),H=5;let $=0,j=1,X=!1,P=0;const Z=3.2;let G=new I,K=new I,tt=2,ft=null,V=0,nt=0,ct=null;function st(){const U=new jt,Ct=new kt({color:16096779,emissive:14251782,emissiveIntensity:.45,roughness:.3,metalness:.75}),xt=new kt({color:2282478,emissive:440020,emissiveIntensity:.55,roughness:.25,metalness:.6}),Nt=new et(new mt(.46,.36,.46),Ct);Nt.castShadow=!0,U.add(Nt);const gt=new et(new rr(.32,.06,6,14),xt);gt.rotation.x=Math.PI/2,U.add(gt);const ut=new we({color:3718648,transparent:!0,opacity:.22,side:De,depthWrite:!1}),D=new et(new be(.18,.34,8,8,1,!0),ut);return D.position.y=4,U.add(D),U}return{group:e,spawnPartDrop(U){const Ct=Math.min(wc.length-1,$+x.length),xt=wc[Ct],Nt=new jt,gt=Math.max(.2,Jt(U.x,U.z)),ut=new I(U.x,gt+.55,U.z);Nt.position.copy(ut);const D=st();Nt.add(D),e.add(Nt),x.push({group:Nt,partMesh:D,pos:ut,name:xt,age:0})},canBoard(U){return X||$<H?!1:Math.hypot(U.x-a.position.x,U.z-a.position.z)<=6.5},startVoyage(U){return X||$<H?!1:(X=!0,P=0,tt=j===1?2:1,G=(j===1?r:o).clone(),K=(tt===1?r:o).clone(),ft=U,!0)},getVoyagePose(){if(!X)return null;const U=new I(0,2.05,.15);U.applyAxisAngle(new I(0,1,0),a.rotation.y);const Ct=a.position.clone().add(U),xt=a.rotation.y+Math.PI;return{position:Ct,yaw:xt,pitch:-.05}},getState(){return{partsCollected:$,partsRequired:H,activeDrops:x.length,isRepaired:$>=H,isSailing:X,currentIsland:j,nearbyPrompt:ct}},reset(){for(;x.length>0;){const U=x.pop();e.remove(U.group)}for(;C.length>0;){const U=C.pop();e.remove(U.mesh)}$=0,j=1,X=!1,P=0,ft=null,ct=null,a.position.copy(r),a.rotation.set(0,Math.PI,0),m.color.setHex(16096779)},update(U,Ct,xt){nt+=U;let Nt={collected:!1,partName:""};m.color.setHex($>=H?2278750:16096779);for(let gt=x.length-1;gt>=0;gt--){const ut=x[gt];ut.age+=U,ut.partMesh.rotation.y+=U*2.1,ut.group.position.y=ut.pos.y+Math.sin(ut.age*3.2)*.14,Ct&&!X&&Math.hypot(xt.x-ut.pos.x,xt.z-ut.pos.z)<=2.8&&($++,t.playPickup(),Nt={collected:!0,partName:ut.name},e.remove(ut.group),x.splice(gt,1))}if($<H&&(V-=U,V<=0)){V=.24;const gt=new et(k,F);gt.position.set(a.position.x+(Math.random()-.5)*.3,a.position.y+1.1,a.position.z+(j===1?2.4:-2.4)),e.add(gt),C.push({mesh:gt,vel:new I((Math.random()-.5)*.5,1.4+Math.random()*.6,(Math.random()-.5)*.5),life:1.2,maxLife:1.2})}for(let gt=C.length-1;gt>=0;gt--){const ut=C[gt];if(ut.life-=U,ut.life<=0)e.remove(ut.mesh),C.splice(gt,1);else{ut.mesh.position.addScaledVector(ut.vel,U);const D=1+(1-ut.life/ut.maxLife)*1.4;ut.mesh.scale.setScalar(D)}}if(X){P+=U;const gt=Math.min(1,P/Z),ut=gt<.5?2*gt*gt:1-Math.pow(-2*gt+2,2)/2;if(a.position.lerpVectors(G,K,ut),a.position.y=.1+Math.sin(nt*6.5)*.12,a.rotation.y=tt===2?Math.PI:0,a.rotation.x=-.06*Math.sin(gt*Math.PI),a.rotation.z=Math.sin(nt*3.4)*.035,gt>=1){X=!1,j=tt,a.position.copy(K),a.rotation.set(0,j===1?Math.PI:0,0);const D=j===2?o.z-5.5:r.z+5.5,ne=Jt(0,D)+1.72,It=new I(0,ne,D);ft==null||ft(j,It),ft=null}ct=null}else if(a.position.y=.08+Math.sin(nt*2.2)*.07,a.rotation.z=Math.sin(nt*1.7)*.025,a.rotation.y=j===1?Math.PI:0,Math.hypot(xt.x-a.position.x,xt.z-a.position.z)<=7.5)if($<H){const ut=H-$;ct=`Lancha quebrada — faltam ${ut} peça${ut>1?"s":""} (último inimigo de cada onda)`}else ct=j===1?"[E] Navegar para a Ilha 2":"[E] Voltar para a Ilha 1";else ct=null;return Nt}}}function d0(i,t,e,n,s,r){let o=1/0;for(let a=0;a<=2;a++){const c=a*.5,l=i.x+(t.x-i.x)*c,h=i.y+(t.y-i.y)*c,u=i.z+(t.z-i.z)*c,f=Math.max(s,Math.min(r,h)),m=l-e,v=h-f,M=u-n,p=m*m+v*v+M*M;p<o&&(o=p)}return o}function f0(i,t){let e=(i-t)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}function p0(i,t,e,n,s){const r=new jt;i.add(r);const o=[],a=[],c=[],l=new al,h=.5,u=new pn(.075,6,6);u.scale(1,1,3.2);const f=new we({color:16734751}),m=new Ln(.76,.09),v=new we({color:988970,transparent:!0,opacity:.78,side:De}),M=new Ln(.7,.055),p=new kt({color:1711394,roughness:.5,metalness:.65}),d=new we({color:16758531}),E=new kt({color:1120295,roughness:.2,metalness:.8});let _=1,g=1,w=5,b=0,R=-1,L=1,y=0,x=null;function C(P){const Z=fl(L),G=(L===1?or:ar)-8;for(let K=0;K<90;K++){const tt=Math.random()*Math.PI*2,ft=22+Math.random()*23,V=P.x+Math.cos(tt)*ft,nt=P.z+Math.sin(tt)*ft;if(Math.hypot(V-Z.x,nt-Z.z)>G)continue;const ct=Jt(V,nt);if(ct<=1||ct>13.5)continue;let st=!1;for(const U of t)if(Math.hypot(V-U.x,nt-U.z)<U.radius+2.2){st=!0;break}if(!st)return{x:V,y:ct,z:nt}}for(let K=0;K<24;K++){const tt=K/24*Math.PI*2,ft=Z.x+Math.cos(tt)*24,V=Z.z+Math.sin(tt)*24,nt=Jt(ft,V);if(nt>1&&Math.hypot(ft-P.x,V-P.z)>15)return{x:ft,y:nt,z:V}}return{x:Z.x,y:Jt(Z.x,Z.z),z:Z.z}}function k(P,Z,G,K){const tt=_++,ft=new jt;ft.position.set(P,Z,G);const V=new jt;ft.add(V);const nt=new kt({color:2765115,roughness:.88}),ct=new kt({color:3885108,roughness:.84}),st=new kt({color:12131356,roughness:.55,metalness:.15}),U=new kt({color:13211250,roughness:.85}),Ct=new kt({color:10033947,roughness:.58,metalness:.2}),xt=[nt,ct,st,U,Ct],Nt=[],gt=(Pt,Ut=!1)=>{Pt.castShadow=!0,Pt.receiveShadow=!0,Pt.userData.enemyId=tt,Ut&&(Pt.userData.isHead=!0),Nt.push(Pt),o.push(Pt)},ut=new jt;ut.position.set(-.14,.82,0);const D=new et(new mt(.18,.82,.2),nt);D.position.y=-.41,gt(D),ut.add(D),V.add(ut);const ne=new jt;ne.position.set(.14,.82,0);const It=new et(new mt(.18,.82,.2),nt);It.position.y=-.41,gt(It),ne.add(It),V.add(ne);const Ft=new et(new mt(.52,.64,.28),ct);Ft.position.set(0,1.15,0),gt(Ft),V.add(Ft);const wt=new et(new mt(.46,.42,.32),st);wt.position.set(0,1.2,.01),gt(wt),V.add(wt);const Wt=new et(new mt(.18,.2,.28),st);Wt.position.set(-.34,1.38,0),gt(Wt),V.add(Wt);const yt=new et(new mt(.18,.2,.28),st);yt.position.set(.34,1.38,0),gt(yt),V.add(yt);const A=new et(new mt(.14,.46,.14),ct);A.position.set(-.31,1.16,.2),A.rotation.x=-Math.PI*.36,A.rotation.z=.16,gt(A),V.add(A);const S=new et(new mt(.14,.46,.14),ct);S.position.set(.28,1.14,.18),S.rotation.x=-Math.PI*.42,gt(S),V.add(S);const B=new et(new mt(.08,.12,.72),p);B.position.set(.16,1.12,.48),gt(B),V.add(B);const J=new pe;J.position.set(.16,1.13,.86),V.add(J);const it=new et(new pn(.11,6,6),d);it.position.copy(J.position),it.visible=!1,V.add(it);const W=new et(new mt(.28,.28,.28),U);W.position.set(0,1.63,0),gt(W,!0),V.add(W);const pt=new et(new mt(.33,.18,.34),Ct);pt.position.set(0,1.72,-.01),gt(pt,!0),V.add(pt);const ht=new et(new mt(.26,.09,.06),E);ht.position.set(0,1.64,.14),gt(ht,!0),V.add(ht);const dt=new jt;dt.position.set(0,2.15,0),dt.visible=!1;const Gt=new et(m,v);dt.add(Gt);const at=new we({color:15680580,side:De}),vt=new et(M,at);return vt.position.z=.006,dt.add(vt),ft.add(dt),r.add(ft),{id:tt,root:ft,bodyGroup:V,leftLeg:ut,rightLeg:ne,muzzleTip:J,muzzleFlash:it,hpBarGroup:dt,hpFill:vt,hpFillMat:at,flashMaterials:xt,meshes:Nt,hp:100,maxHp:100,dead:!1,dropping:K,deathTimer:0,hitFlashTimer:0,muzzleFlashTimer:0,knockbackVel:new I,walkPhase:Math.random()*Math.PI*2,strafeDir:Math.random()>.5?1:-1,strafeTimer:1.5+Math.random()*2,burstCooldown:1.2+Math.random()*1.4,burstRemaining:0,burstShotTimer:0,hasLos:!1,losCheckTimer:Math.random()*.25}}function F(P){for(const Z of P.meshes){const G=o.indexOf(Z);G!==-1&&o.splice(G,1)}}function H(P){F(P),r.remove(P.root);for(const Z of P.flashMaterials)Z.dispose();P.hpFillMat.dispose()}function $(P,Z){g=P,w=Math.min(14,5+(P-1)*2),y=w,x=null;const G=C(Z);s.dispatchDrop(new I(G.x,G.y,G.z),w,K=>{y=Math.max(0,y-1);const tt=k(K.x,K.y,K.z,!0);a.push(tt)})}function j(P,Z){const G=new I;P.muzzleTip.getWorldPosition(G);const K=Z.clone();K.y-=.25;const tt=K.sub(G).normalize();tt.x+=(Math.random()-.5)*.085,tt.y+=(Math.random()-.5)*.055,tt.z+=(Math.random()-.5)*.085,tt.normalize();const ft=new et(u,f);ft.position.copy(G),ft.lookAt(G.clone().add(tt)),r.add(ft),c.push({mesh:ft,pos:G.clone(),prevPos:G.clone(),vel:tt.multiplyScalar(46),life:2.2}),P.muzzleFlashTimer=.055,P.muzzleFlash.visible=!0,n.playEnemyShot(G.distanceTo(Z))}$(1,new I(tn,Jt(tn,en)+1.72,en));const X=new I;return{group:r,shootableObjects:o,hitEnemy(P,Z,G=34){const K=P.userData.enemyId;if(K===void 0)return{hit:!1,killed:!1,headshot:!1};const tt=a.find(st=>st.id===K);if(!tt||tt.dead)return{hit:!1,killed:!1,headshot:!1};const ft=!!P.userData.isHead,V=ft?100:G;tt.hp=Math.max(0,tt.hp-V),tt.hitFlashTimer=.12;for(const st of tt.flashMaterials)st.emissive.setHex(ft?16436245:16726843),st.emissiveIntensity=.85;const nt=tt.root.position.clone().sub(Z);nt.y=0,nt.lengthSq()>1e-4&&(nt.normalize(),tt.knockbackVel.addScaledVector(nt,ft?4.2:2.2));const ct=tt.hp/tt.maxHp;return tt.hpBarGroup.visible=tt.hp>0&&tt.hp<tt.maxHp,tt.hpFill.scale.x=Math.max(.01,ct),tt.hpFill.position.x=-(1-ct)*.35,tt.hpFillMat.color.setHex(ct>.5?2278750:ct>.25?16096779:15680580),tt.hp<=0?(tt.dead=!0,tt.dropping=!1,tt.deathTimer=0,tt.hpBarGroup.visible=!1,tt.muzzleFlash.visible=!1,b++,x=new I(tt.root.position.x,Jt(tt.root.position.x,tt.root.position.z),tt.root.position.z),F(tt),{hit:!0,killed:!0,headshot:ft}):{hit:!0,killed:!1,headshot:ft}},getProgress(){let P=y;for(const Z of a)Z.dead||P++;return{wave:g,alive:P,totalInWave:w,kills:b}},setActiveIsland(P,Z){for(L=P;a.length>0;){const G=a.pop();H(G)}for(;c.length>0;){const G=c.pop();r.remove(G.mesh)}s.reset(),y=0,R=-1,$(g+1,Z)},reset(){for(;a.length>0;){const P=a.pop();H(P)}for(;c.length>0;){const P=c.pop();r.remove(P.mesh)}s.reset(),L=1,b=0,y=0,x=null,R=-1,$(1,new I(tn,Jt(tn,en)+1.72,en))},update(P,Z,G,K,tt){let ft=!1,V=0;for(let st=c.length-1;st>=0;st--){const U=c[st];if(U.life-=P,U.life<=0||!Z){U.life<=0&&(r.remove(U.mesh),c.splice(st,1));continue}if(U.prevPos.copy(U.pos),U.pos.addScaledVector(U.vel,P),U.mesh.position.copy(U.pos),U.pos.y<=Jt(U.pos.x,U.pos.z)){r.remove(U.mesh),c.splice(st,1);continue}d0(U.prevPos,U.pos,K.x,K.z,K.y-1.4,K.y+.2)<=.65*.65&&(r.remove(U.mesh),c.splice(st,1),tt(12))}let nt=0;for(let st=a.length-1;st>=0;st--){const U=a[st];if(U.hitFlashTimer>0&&(U.hitFlashTimer-=P,U.hitFlashTimer<=0))for(const W of U.flashMaterials)W.emissive.setHex(0),W.emissiveIntensity=0;if(U.muzzleFlashTimer>0&&(U.muzzleFlashTimer-=P,U.muzzleFlashTimer<=0&&(U.muzzleFlash.visible=!1)),U.dead){U.deathTimer+=P;const W=Math.min(1,U.deathTimer/.55);if(U.bodyGroup.rotation.x=-W*(Math.PI*.48),U.bodyGroup.position.y=-W*.25,U.deathTimer>3){const pt=(U.deathTimer-3)/.6;U.root.position.y-=pt*P*1.6}U.deathTimer>=3.6&&(H(U),a.splice(st,1));continue}if(nt++,U.hpBarGroup.visible&&U.hpBarGroup.lookAt(G.position),!Z)continue;if(U.dropping){U.root.position.y-=9*P;const W=Jt(U.root.position.x,U.root.position.z);U.root.position.y<=W&&(U.root.position.y=W,U.dropping=!1);continue}const Ct=U.root.position.x,xt=U.root.position.z,Nt=K.x-Ct,gt=K.z-xt,ut=Math.hypot(Nt,gt)||.001,D=Math.atan2(Nt,gt);U.root.rotation.y+=f0(D,U.root.rotation.y)*Math.min(1,P*7),U.strafeTimer-=P,U.strafeTimer<=0&&(U.strafeDir*=-1,U.strafeTimer=1.6+Math.random()*2.2);const ne=Nt/ut,It=gt/ut,Ft=-It*U.strafeDir,wt=ne*U.strafeDir;let Wt=0,yt=0,A=0;ut>24?(Wt=ne+Ft*.25,yt=It+wt*.25,A=3.9):ut>=8?(Wt=Ft+(ut>16?ne*.22:0),yt=wt+(ut>16?It*.22:0),A=2.6):(Wt=-ne*.75+Ft*.65,yt=-It*.75+wt*.65,A=2.4);const S=Math.hypot(Wt,yt);S>.001&&(Wt=Wt/S*A,yt=yt/S*A);let B=Ct+(Wt+U.knockbackVel.x)*P,J=xt+(yt+U.knockbackVel.z)*P;U.knockbackVel.multiplyScalar(Math.max(0,1-P*8)),Jt(B,J)<js&&(Jt(B,xt)>=js?J=xt:Jt(Ct,J)>=js?B=Ct:(B=Ct,J=xt));for(const W of t){const pt=B-W.x,ht=J-W.z,dt=W.radius+h,Gt=pt*pt+ht*ht;if(Gt<dt*dt){const at=Math.sqrt(Gt)||.001,vt=dt-at;B+=pt/at*vt,J+=ht/at*vt}}for(const W of a){if(W===U||W.dead)continue;const pt=B-W.root.position.x,ht=J-W.root.position.z,dt=h*2.2,Gt=pt*pt+ht*ht;if(Gt<dt*dt){const at=Math.sqrt(Gt)||.001,vt=(dt-at)*.5;B+=pt/at*vt,J+=ht/at*vt}}const it=Math.hypot(B-Ct,J-xt);if(U.root.position.set(B,Jt(B,J),J),it>.002){U.walkPhase+=P*A*2.8;const W=Math.sin(U.walkPhase)*.55;U.leftLeg.rotation.x=W,U.rightLeg.rotation.x=-W}else U.leftLeg.rotation.x=fe.lerp(U.leftLeg.rotation.x,0,Math.min(1,P*8)),U.rightLeg.rotation.x=fe.lerp(U.rightLeg.rotation.x,0,Math.min(1,P*8));if(U.losCheckTimer-=P,U.losCheckTimer<=0)if(U.losCheckTimer=.25,ut<=60){const W=X.set(B,U.root.position.y+1.45,J),pt=K.clone().sub(W),ht=pt.length();if(ht>.6){pt.divideScalar(ht),l.set(W,pt),l.far=ht-.5;const dt=l.intersectObjects(e,!0);U.hasLos=dt.length===0}else U.hasLos=!0}else U.hasLos=!1;U.burstRemaining>0?(U.burstShotTimer-=P,U.burstShotTimer<=0&&(U.hasLos&&j(U,K),U.burstRemaining--,U.burstShotTimer=.16,U.burstRemaining<=0&&(U.burstCooldown=1.6+Math.random()*1.1))):(U.burstCooldown-=P,U.burstCooldown<=0&&U.hasLos&&ut<=52&&(U.burstRemaining=2+Math.floor(Math.random()*2),U.burstShotTimer=0))}let ct=null;return Z&&(nt===0&&y===0&&R<0?(ft=!0,V=g,ct=x,x=null,R=1.8):R>=0&&(R-=P,R<=0&&(R=-1,$(g+1,K)))),{waveCleared:ft,clearedWave:V,lastKillPos:ct}}}}function m0(i,t){const e=new jt;e.visible=!1,i.add(e);const n=new kt({color:3555639,roughness:.62,metalness:.35}),s=new kt({color:1909288,roughness:.5,metalness:.6}),r=new kt({color:3718648,roughness:.15,metalness:.4,transparent:!0,opacity:.62}),o=new kt({color:1119515,roughness:.4,metalness:.7}),a=new we({color:16722731}),c=new kt({color:12099444,roughness:.9}),l=new et(new mt(2.3,2,5.4),n);l.position.set(0,.2,0),l.castShadow=!0,e.add(l);const h=new et(new mt(2,1.5,1.8),n);h.position.set(0,-.05,3.3),h.rotation.x=.2,h.castShadow=!0,e.add(h);const u=new et(new mt(1.9,1.1,1.7),r);u.position.set(0,.55,2.75),u.rotation.x=.32,e.add(u);const f=new et(new mt(1.3,.75,2.8),s);f.position.set(0,1.45,-.2),f.castShadow=!0,e.add(f);const m=new et(new mt(.65,.65,5.2),n);m.position.set(0,.55,-5),m.castShadow=!0,e.add(m);const v=new et(new mt(.22,1.7,1.05),s);v.position.set(0,1.35,-7.2),v.rotation.x=-.22,v.castShadow=!0,e.add(v);const M=new et(new mt(2.4,.14,.65),s);M.position.set(0,.6,-6.7),e.add(M);for(const X of[-1,1]){const P=new et(new be(.08,.08,4.8,8),s);P.rotation.x=Math.PI/2,P.position.set(X*1.15,-1.35,.4),e.add(P);for(const Z of[-.9,1.5]){const G=new et(new be(.06,.06,.9,6),s);G.position.set(X*1,-.95,Z),G.rotation.z=X*.28,e.add(G)}}const p=new jt;p.position.set(0,1.98,.1);const d=new et(new be(.24,.28,.4,10),s);p.add(d);for(let X=0;X<4;X++){const P=new et(new mt(.32,.05,5.4),o);P.rotation.y=X*Math.PI/2,P.position.set(Math.sin(P.rotation.y)*2.7,.12,Math.cos(P.rotation.y)*2.7),P.castShadow=!0,p.add(P)}e.add(p);const E=new jt;E.position.set(.24,1.45,-7.45);for(let X=0;X<2;X++){const P=new et(new mt(.04,1.5,.16),o);P.rotation.x=X*Math.PI/2,E.add(P)}e.add(E);const _=new et(new pn(.14,8,8),a);_.position.set(0,2.25,-7.2),e.add(_);const g=new jt;for(const X of[-1,1]){const P=new et(new be(.035,.035,13.5,6),c);P.position.set(X*.95,-7.5,.3),g.add(P)}g.visible=!1,e.add(g);let w="idle",b=0;const R=2.4,L=2.8,y=new I,x=new I,C=new I;let k=0,F=0,H=null,$=0,j=0;return{group:e,dispatchDrop(X,P,Z){if(P<=0)return;const G=Math.random()*Math.PI*2,K=G+Math.PI+(Math.random()-.5)*.6;x.set(X.x,X.y+14.5,X.z),y.set(X.x+Math.cos(G)*115,X.y+28,X.z+Math.sin(G)*115),C.set(X.x+Math.cos(K)*135,X.y+30,X.z+Math.sin(K)*135),e.position.copy(y),e.visible=!0,g.visible=!1,w="approaching",b=0,k=P,F=.15,H=Z,$=0},update(X,P,Z){if(w!=="idle"&&P){if(j+=X,p.rotation.y+=X*26,E.rotation.x+=X*36,_.visible=Math.sin(j*10)>0,$-=X,$<=0&&($=.14,t.playHelicopterRotor(e.position.distanceTo(Z))),w==="approaching"){b+=X;const G=Math.min(1,b/R),K=1-Math.pow(1-G,3);e.position.lerpVectors(y,x,K);const tt=Math.atan2(x.x-y.x,x.z-y.z);e.rotation.order="YXZ",e.rotation.y=tt,e.rotation.x=.2*(1-K),e.rotation.z=0,G>=1&&(w="dropping",b=0,g.visible=!0)}else if(w==="dropping")if(b+=X,e.position.x=x.x+Math.sin(b*1.8)*.25,e.position.y=x.y+Math.sin(b*2.6)*.22,e.position.z=x.z+Math.cos(b*1.5)*.25,e.rotation.x=Math.sin(b*2.1)*.03,e.rotation.z=Math.cos(b*1.9)*.04,k>0){if(F-=X,F<=0){F=.32,k--;const G=k%2===0?-.95:.95,K=new I(e.position.x+G+(Math.random()-.5)*.9,e.position.y-1.2,e.position.z+(Math.random()-.5)*.9);H==null||H(K)}}else b>.65&&(g.visible=!1,w="departing",b=0);else if(w==="departing"){b+=X;const G=Math.min(1,b/L),K=G*G;e.position.lerpVectors(x,C,K);const tt=Math.atan2(C.x-x.x,C.z-x.z);e.rotation.order="YXZ",e.rotation.y=tt,e.rotation.x=.24*Math.min(1,G*2.2),e.rotation.z=.14*Math.sin(G*Math.PI),G>=1&&(w="idle",e.visible=!1,H=null)}}},isActive(){return w!=="idle"},reset(){w="idle",b=0,k=0,H=null,g.visible=!1,e.visible=!1}}}class g0{constructor(t,e,n){rt(this,"camera");rt(this,"colliders");rt(this,"audio");rt(this,"eyeHeight",1.72);rt(this,"playerRadius",.45);rt(this,"gravity",-18.5);rt(this,"jumpSpeed",6.8);rt(this,"maxHealth",100);rt(this,"health",100);rt(this,"isDead",!1);rt(this,"damageFlash",0);rt(this,"regenCooldown",0);rt(this,"damageRoll",0);rt(this,"damagePitch",0);rt(this,"position",new I);rt(this,"verticalVel",0);rt(this,"isGrounded",!0);rt(this,"yaw",0);rt(this,"pitch",-.05);rt(this,"keys",new Set);rt(this,"touchForward",0);rt(this,"touchStrafe",0);rt(this,"touchSprint",!1);rt(this,"jumpQueued",!1);rt(this,"stepDistance",0);rt(this,"forward",new I);rt(this,"right",new I);rt(this,"moveDir",new I);this.camera=t,this.colliders=e,this.audio=n,this.camera.rotation.order="YXZ";const s=Jt(tn,en);this.position.set(tn,s+this.eyeHeight,en),this.syncCamera()}handleKeyDown(t){this.keys.add(t)}handleKeyUp(t){this.keys.delete(t)}clearInputs(){this.keys.clear(),this.touchForward=0,this.touchStrafe=0,this.touchSprint=!1,this.jumpQueued=!1}setTouchMove(t,e,n){this.touchForward=fe.clamp(t,-1,1),this.touchStrafe=fe.clamp(e,-1,1),this.touchSprint=n}triggerJump(){this.jumpQueued=!0}handleMouseLook(t,e,n){if(Math.abs(t)>250||Math.abs(e)>250)return{dx:0,dy:0};const s=n?.0014:.0022;return this.yaw-=t*s,this.pitch=fe.clamp(this.pitch-e*s,-1.48,1.48),this.syncCamera(),{dx:t,dy:e}}handleTouchLook(t,e,n){if(Math.abs(t)>400||Math.abs(e)>400)return{dx:0,dy:0};const s=n?.0032:.0052;return this.yaw-=t*s,this.pitch=fe.clamp(this.pitch-e*s,-1.48,1.48),this.syncCamera(),{dx:t,dy:e}}applyRecoilKick(t,e){this.pitch=fe.clamp(this.pitch+t,-1.48,1.48),this.yaw+=e,this.syncCamera()}getPosition(){return this.position.clone()}getHealth(){return{current:Math.ceil(this.health),max:this.maxHealth,isDead:this.isDead,damageFlash:this.damageFlash}}takeDamage(t){return this.isDead||t<=0?this.isDead:(this.health=Math.max(0,this.health-t),this.damageFlash=1,this.regenCooldown=6,this.damageRoll=(Math.random()>.5?1:-1)*.055,this.damagePitch=.035,this.audio.playPlayerHurt(),this.health<=0&&(this.health=0,this.isDead=!0,this.clearInputs()),this.isDead)}heal(t){this.isDead||t<=0||(this.health=Math.min(this.maxHealth,this.health+t))}reset(){const t=Jt(tn,en);this.position.set(tn,t+this.eyeHeight,en),this.verticalVel=0,this.isGrounded=!0,this.yaw=0,this.pitch=-.05,this.health=this.maxHealth,this.isDead=!1,this.damageFlash=0,this.regenCooldown=0,this.damageRoll=0,this.damagePitch=0,this.stepDistance=0,this.clearInputs(),this.syncCamera()}setPose(t,e,n){this.position.copy(t),this.yaw=e,this.pitch=fe.clamp(n,-1.48,1.48),this.verticalVel=0,this.isGrounded=!0,this.syncCamera()}syncCamera(){this.camera.position.copy(this.position),this.camera.rotation.set(fe.clamp(this.pitch+this.damagePitch,-1.48,1.48),this.yaw,this.damageRoll,"YXZ")}isWalkable(t,e){return Math.abs(t)>260||e>120||e<-320?!1:Jt(t,e)>=js}update(t,e,n){this.damageFlash=Math.max(0,this.damageFlash-t*2.4);const s=Math.min(1,t*10);this.damageRoll=fe.lerp(this.damageRoll,0,s),this.damagePitch=fe.lerp(this.damagePitch,0,s),e&&!this.isDead&&(this.regenCooldown>0?this.regenCooldown=Math.max(0,this.regenCooldown-t):this.health<this.maxHealth&&(this.health=Math.min(this.maxHealth,this.health+5*t)));const o=Jt(this.position.x,this.position.z)<cr,a=Sc(this.position.x,this.position.z);if(!e||this.isDead)return this.syncCamera(),{speedRatio:0,isSprinting:!1,isGrounded:this.isGrounded,inWater:o,surface:a};let c=this.touchForward,l=this.touchStrafe;(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&(c+=1),(this.keys.has("KeyS")||this.keys.has("ArrowDown"))&&(c-=1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&(l+=1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&(l-=1),c=fe.clamp(c,-1,1),l=fe.clamp(l,-1,1),this.forward.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw)),this.right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw)),this.moveDir.set(0,0,0),this.moveDir.addScaledVector(this.forward,c),this.moveDir.addScaledVector(this.right,l);const h=this.moveDir.length(),u=h>.001,f=Math.min(1,h);u&&this.moveDir.divideScalar(h);const v=(this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")||this.touchSprint)&&c>.2&&!n&&!o,M=(o||n?3.4:v?9.5:5.8)*f,p=this.position.x,d=this.position.z,E=p+this.moveDir.x*M*t,_=d+this.moveDir.z*M*t;this.isWalkable(E,_)?(this.position.x=E,this.position.z=_):this.isWalkable(E,d)?this.position.x=E:this.isWalkable(p,_)&&(this.position.z=_);for(const L of this.colliders){const y=this.position.x-L.x,x=this.position.z-L.z,C=L.radius+this.playerRadius,k=y*y+x*x;if(k<C*C){const F=Math.sqrt(k)||1e-4,H=C-F;this.position.x+=y/F*H,this.position.z+=x/F*H}}this.isGrounded&&(this.keys.has("Space")||this.jumpQueued)&&(this.verticalVel=this.jumpSpeed,this.isGrounded=!1),this.jumpQueued=!1,this.verticalVel+=this.gravity*t,this.position.y+=this.verticalVel*t;const g=Jt(this.position.x,this.position.z),w=g+this.eyeHeight;this.position.y<=w?(this.position.y=w,this.verticalVel=0,this.isGrounded=!0):this.isGrounded=!1;const b=Math.hypot(this.position.x-p,this.position.z-d),R=fe.clamp(b/(5.8*t||1),0,1.65);if(this.isGrounded&&b>.001){this.stepDistance+=b;const L=v?2.65:2.15;this.stepDistance>=L&&(this.stepDistance=0,this.audio.playFootstep(Sc(this.position.x,this.position.z)))}return this.syncCamera(),{speedRatio:R,isSprinting:v&&u,isGrounded:this.isGrounded,inWater:g<cr,surface:a}}}function _0(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");if(e){e.fillStyle="#e8dcc4",e.fillRect(0,0,256,256);const r=[[118,"#d93829"],[92,"#f8fafc"],[66,"#d93829"],[40,"#f8fafc"],[18,"#b91c1c"]];for(const[o,a]of r)e.beginPath(),e.arc(128,128,o,0,Math.PI*2),e.fillStyle=a,e.fill()}const n=new ea(t);return n.colorSpace=Ne,n}function v0(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");if(e){e.fillStyle="#a47148",e.fillRect(0,0,128,128),e.strokeStyle="#6f4523",e.lineWidth=14,e.strokeRect(7,7,114,114),e.lineWidth=10,e.beginPath(),e.moveTo(14,14),e.lineTo(114,114),e.moveTo(114,14),e.lineTo(14,114),e.stroke(),e.strokeStyle="rgba(62, 36, 16, 0.45)",e.lineWidth=2;for(let s=32;s<128;s+=24)e.beginPath(),e.moveTo(14,s),e.lineTo(114,s),e.stroke()}const n=new ea(t);return n.colorSpace=Ne,n}function x0(i,t,e,n){for(let s=0;s<=14;s+=1.5){const r=s===0?1:12;for(let o=0;o<r;o++){const a=o/r*Math.PI*2,c=i+Math.cos(a)*s,l=t+Math.sin(a)*s;if(Math.hypot(c-tn,l-en)<9)continue;const h=Jt(c,l);if(h<.85||h>12.5)continue;let u=!1;for(const f of e)if(Math.hypot(c-f.x,l-f.z)<f.radius+1.5){u=!0;break}if(!u){for(const f of n)if(Math.hypot(c-f.x,l-f.z)<4.5){u=!0;break}if(!u)return{x:c,y:h,z:l}}}}return null}function M0(i,t){const e=new jt,n=[],s=[],r=[],o=oa(77331),a=_0(),c=v0(),l=new kt({color:6044964,roughness:.9}),h=new kt({color:12753771,roughness:.85}),u=new kt({map:a,roughness:.65}),f=new we({color:12131356,transparent:!0,opacity:.01}),m=new kt({map:c,roughness:.82}),v=new kt({color:10251075,roughness:.88}),M=[{x:-6,z:30,kind:"bullseye"},{x:5,z:27,kind:"crate"},{x:14,z:33,kind:"bullseye"},{x:-18,z:24,kind:"crate"},{x:-28,z:8,kind:"bullseye"},{x:26,z:14,kind:"bullseye"},{x:34,z:-8,kind:"crate"},{x:-24,z:-22,kind:"bullseye"},{x:12,z:-32,kind:"crate"},{x:-4,z:-12,kind:"bullseye"},{x:6,z:4,kind:"bullseye"},{x:-12,z:-38,kind:"crate"}],p=[];M.forEach((E,_)=>{const g=x0(E.x,E.z,t,p);if(!g)return;p.push({x:g.x,z:g.z});const w=_+1,b=Math.atan2(tn-g.x,en-g.z);if(E.kind==="bullseye"){const R=new jt;R.position.set(g.x,g.y-.05,g.z),R.rotation.y=b;const L=new et(new mt(.16,.55,.16),l);L.position.set(0,.275,0),L.castShadow=!0,L.receiveShadow=!0,R.add(L);const y=new jt;y.position.set(0,.45,0),R.add(y);const x=new et(new mt(.12,.75,.12),l);x.position.set(0,.38,0),x.castShadow=!0,y.add(x);const C=new et(new be(.68,.68,.1,20),h);C.rotation.x=Math.PI/2,C.position.set(0,1.05,0),C.castShadow=!0,C.receiveShadow=!0,C.userData.targetId=w,y.add(C);const k=new et(new cs(.65,24),u);k.position.set(0,1.05,.055),k.userData.targetId=w,y.add(k);const F=new et(new cs(.65,24),u);F.rotation.y=Math.PI,F.position.set(0,1.05,-.055),F.userData.targetId=w,y.add(F);const H=new et(new cs(.22,16),f);H.position.set(0,1.05,.062),H.userData.targetId=w,H.userData.isBullseye=!0,y.add(H);const $=[C,k,F,H];n.push(...$),e.add(R),s.push({kind:"bullseye",id:w,root:R,hinge:y,meshes:$,hp:2,maxHp:2,cleared:!1,angle:0,angularVel:0})}else{const R=new jt;R.position.set(g.x,g.y-.04,g.z),R.rotation.y=b+(o()-.5)*.6;const L=new jt;R.add(L);const y=1.08,x=new et(new mt(y,y,y),m);x.position.set(0,y*.5,0),x.castShadow=!0,x.receiveShadow=!0,x.userData.targetId=w,L.add(x);const C=[x];if(_%2===1){const F=new et(new mt(.68,.68,.68),m);F.position.set(.06,y+.68*.5,-.04),F.rotation.y=.35,F.castShadow=!0,F.receiveShadow=!0,F.userData.targetId=w,L.add(F),C.push(F)}n.push(...C),e.add(R),s.push({kind:"crate",id:w,root:R,body:L,meshes:C,hp:3,maxHp:3,cleared:!1,shakeTime:0,shakeIntensity:0,baseY:0})}}),i.add(e);function d(E){const _=new mt(.45,.08,.16);for(let g=0;g<12;g++){const w=new et(_,v);w.position.set(E.x+(Math.random()-.5)*.7,E.y+.35+Math.random()*.7,E.z+(Math.random()-.5)*.7),w.castShadow=!0,e.add(w);const b=Math.random()*Math.PI*2,R=2.5+Math.random()*4.5;r.push({mesh:w,velocity:new I(Math.cos(b)*R,3.2+Math.random()*4.2,Math.sin(b)*R),rotVelocity:new I((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14),life:1.8+Math.random()*.8})}}return{group:e,shootableObjects:n,hitTarget(E,_){const g=E.userData.targetId;if(g===void 0)return{hit:!1,destroyed:!1,wasAlreadyCleared:!1};const w=s.find(b=>b.id===g);if(!w)return{hit:!1,destroyed:!1,wasAlreadyCleared:!1};if(w.cleared)return w.kind==="bullseye"&&(w.angularVel-=2.2),{hit:!0,destroyed:!1,wasAlreadyCleared:!0};if(w.kind==="bullseye"){const b=!!E.userData.isBullseye;return w.hp-=b?2:1,w.angularVel-=b?8.5:4.2,w.hp<=0?(w.cleared=!0,{hit:!0,destroyed:!0,wasAlreadyCleared:!1}):{hit:!0,destroyed:!1,wasAlreadyCleared:!1}}else return w.hp-=1,w.shakeTime=.22,w.shakeIntensity=.08,w.hp<=0?(w.cleared=!0,w.body.visible=!1,d(new I(w.root.position.x,_.y-.2,w.root.position.z)),{hit:!0,destroyed:!0,wasAlreadyCleared:!1}):{hit:!0,destroyed:!1,wasAlreadyCleared:!1}},getProgress(){let E=0;for(const _ of s)_.cleared&&E++;return{total:s.length,hitCount:E}},resetAll(){for(const E of s)E.cleared=!1,E.hp=E.maxHp,E.kind==="bullseye"?(E.angle=0,E.angularVel=0,E.hinge.rotation.x=0):(E.body.visible=!0,E.body.position.set(0,E.baseY,0),E.body.rotation.set(0,0,0),E.shakeTime=0)},update(E){for(const _ of s)if(_.kind==="bullseye"){const g=_.cleared?-Math.PI*.46:0,w=_.cleared?38:68,b=_.cleared?7.5:9.2,R=(g-_.angle)*w-_.angularVel*b;_.angularVel+=R*E,_.angle+=_.angularVel*E,_.angle<-Math.PI*.49&&(_.angle=-Math.PI*.49,_.angularVel*=-.25),_.hinge.rotation.x=_.angle}else if(_.shakeTime>0){_.shakeTime=Math.max(0,_.shakeTime-E);const g=_.shakeTime/.22*_.shakeIntensity;_.body.position.set((Math.random()-.5)*g,_.baseY,(Math.random()-.5)*g),_.body.rotation.z=(Math.random()-.5)*g*1.4,_.shakeTime===0&&(_.body.position.set(0,_.baseY,0),_.body.rotation.set(0,0,0))}for(let _=r.length-1;_>=0;_--){const g=r[_];if(g.life-=E,g.life<=0){e.remove(g.mesh),r.splice(_,1);continue}g.velocity.y-=16*E,g.mesh.position.addScaledVector(g.velocity,E),g.mesh.rotation.x+=g.rotVelocity.x*E,g.mesh.rotation.y+=g.rotVelocity.y*E,g.mesh.rotation.z+=g.rotVelocity.z*E;const w=Jt(g.mesh.position.x,g.mesh.position.z)+.05;g.mesh.position.y<w&&(g.mesh.position.y=w,g.velocity.y=Math.abs(g.velocity.y)*.25,g.velocity.x*=.65,g.velocity.z*=.65,g.rotVelocity.multiplyScalar(.5)),g.life<.4&&g.mesh.scale.setScalar(Math.max(.01,g.life/.4))}}}}function qe(i){const t=document.getElementById(i);if(!t)throw new Error(`Missing touch control element #${i}`);return t}class aa{constructor(t){rt(this,"root",qe("touch-controls"));rt(this,"lookZone",qe("touch-look-zone"));rt(this,"moveZone",qe("touch-move-zone"));rt(this,"joystickBase",qe("joystick-base"));rt(this,"joystickKnob",qe("joystick-knob"));rt(this,"btnFire",qe("btn-fire"));rt(this,"btnAds",qe("btn-ads"));rt(this,"btnJump",qe("btn-jump"));rt(this,"btnReload",qe("btn-reload"));rt(this,"btnWeapon",qe("btn-weapon"));rt(this,"btnInteract",qe("btn-interact"));rt(this,"btnLandscape",qe("btn-landscape"));rt(this,"btnPause",qe("btn-pause"));rt(this,"callbacks");rt(this,"maxRadius",44);rt(this,"deadzone",.12);rt(this,"movePointerId",null);rt(this,"lookPointerId",null);rt(this,"lookLastX",0);rt(this,"lookLastY",0);rt(this,"firePointerId",null);rt(this,"fireLastX",0);rt(this,"fireLastY",0);this.callbacks=t,this.bindEvents()}static isTouchDevice(){return window.matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>0||"ontouchstart"in window}setVisible(t){this.root.classList.toggle("visible",t),t||this.reset()}setAdsActive(t){this.btnAds.classList.toggle("active",t)}setInteractVisible(t){this.btnInteract.classList.toggle("hidden",!t)}setLandscapeActive(t){this.btnLandscape.classList.toggle("active",t)}reset(){this.movePointerId=null,this.lookPointerId=null,this.firePointerId!==null&&(this.firePointerId=null,this.btnFire.classList.remove("pressed"),this.callbacks.onFireChange(!1)),this.joystickBase.classList.remove("sprinting"),this.joystickKnob.style.transform="translate3d(0px, 0px, 0px)",this.callbacks.onMove(0,0,!1)}updateJoystick(t,e){const n=this.joystickBase.getBoundingClientRect(),s=n.left+n.width*.5,r=n.top+n.height*.5;let o=t-s,a=e-r;const c=Math.hypot(o,a);if(c>this.maxRadius&&c>0){const p=this.maxRadius/c;o*=p,a*=p}this.joystickKnob.style.transform=`translate3d(${o.toFixed(1)}px, ${a.toFixed(1)}px, 0px)`;const l=o/this.maxRadius,h=-a/this.maxRadius,u=Math.hypot(l,h);if(u<this.deadzone){this.joystickBase.classList.remove("sprinting"),this.callbacks.onMove(0,0,!1);return}const f=Math.min(1,(u-this.deadzone)/(1-this.deadzone)),m=l/u*f,v=h/u*f,M=v>.85&&Math.abs(m)<.48;this.joystickBase.classList.toggle("sprinting",M),this.callbacks.onMove(v,m,M)}bindEvents(){const t=r=>{r.stopPropagation()};this.root.addEventListener("mousedown",t),this.root.addEventListener("mouseup",t),this.root.addEventListener("mousemove",t),this.moveZone.addEventListener("pointerdown",r=>{if(r.preventDefault(),r.stopPropagation(),this.movePointerId===null){this.movePointerId=r.pointerId;try{this.moveZone.setPointerCapture(r.pointerId)}catch{}this.updateJoystick(r.clientX,r.clientY)}}),this.moveZone.addEventListener("pointermove",r=>{r.pointerId===this.movePointerId&&(r.preventDefault(),r.stopPropagation(),this.updateJoystick(r.clientX,r.clientY))});const e=r=>{r.pointerId===this.movePointerId&&(r.preventDefault(),r.stopPropagation(),this.movePointerId=null,this.joystickBase.classList.remove("sprinting"),this.joystickKnob.style.transform="translate3d(0px, 0px, 0px)",this.callbacks.onMove(0,0,!1))};this.moveZone.addEventListener("pointerup",e),this.moveZone.addEventListener("pointercancel",e),this.lookZone.addEventListener("pointerdown",r=>{if(r.preventDefault(),r.stopPropagation(),this.lookPointerId===null){this.lookPointerId=r.pointerId,this.lookLastX=r.clientX,this.lookLastY=r.clientY;try{this.lookZone.setPointerCapture(r.pointerId)}catch{}}}),this.lookZone.addEventListener("pointermove",r=>{if(r.pointerId!==this.lookPointerId)return;r.preventDefault(),r.stopPropagation();const o=r.clientX-this.lookLastX,a=r.clientY-this.lookLastY;this.lookLastX=r.clientX,this.lookLastY=r.clientY,this.callbacks.onLook(o,a)});const n=r=>{r.pointerId===this.lookPointerId&&(r.preventDefault(),r.stopPropagation(),this.lookPointerId=null)};this.lookZone.addEventListener("pointerup",n),this.lookZone.addEventListener("pointercancel",n),this.btnFire.addEventListener("pointerdown",r=>{if(r.preventDefault(),r.stopPropagation(),this.firePointerId===null){this.firePointerId=r.pointerId,this.fireLastX=r.clientX,this.fireLastY=r.clientY,this.btnFire.classList.add("pressed");try{this.btnFire.setPointerCapture(r.pointerId)}catch{}this.callbacks.onFireChange(!0)}}),this.btnFire.addEventListener("pointermove",r=>{if(r.pointerId!==this.firePointerId)return;r.preventDefault(),r.stopPropagation();const o=r.clientX-this.fireLastX,a=r.clientY-this.fireLastY;this.fireLastX=r.clientX,this.fireLastY=r.clientY,(o!==0||a!==0)&&this.callbacks.onLook(o,a)});const s=r=>{r.pointerId===this.firePointerId&&(r.preventDefault(),r.stopPropagation(),this.firePointerId=null,this.btnFire.classList.remove("pressed"),this.callbacks.onFireChange(!1))};this.btnFire.addEventListener("pointerup",s),this.btnFire.addEventListener("pointercancel",s),this.btnAds.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.callbacks.onAdsToggle()}),this.btnJump.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.callbacks.onJump()}),this.btnReload.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.callbacks.onReload()}),this.btnWeapon.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.callbacks.onWeaponCycle()}),this.btnInteract.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.callbacks.onInteract()}),this.btnLandscape.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.callbacks.onToggleLandscape()}),this.btnPause.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.callbacks.onPause()})}}const Vs=["rifle","pistol","knife"],Qe={rifle:{name:"CARABINA M4",isMelee:!1,auto:!0,magSize:30,defaultReserve:120,fireInterval:.105,reloadDuration:1.5,bodyDamage:34,range:180,adsFov:54,recoilZ:.055,recoilPitch:.048,camPitchKick:.011,hipPos:new I(.26,-.24,-.48),adsPos:new I(0,-.145,-.34)},pistol:{name:"PISTOLA 9MM",isMelee:!1,auto:!1,magSize:12,defaultReserve:60,fireInterval:.18,reloadDuration:1.15,bodyDamage:42,range:140,adsFov:62,recoilZ:.068,recoilPitch:.085,camPitchKick:.014,hipPos:new I(.24,-.23,-.44),adsPos:new I(0,-.15,-.36)},knife:{name:"FACA TÁTICA",isMelee:!0,auto:!0,magSize:0,defaultReserve:0,fireInterval:.38,reloadDuration:0,bodyDamage:70,range:3.4,adsFov:75,recoilZ:0,recoilPitch:0,camPitchKick:.004,hipPos:new I(.27,-.25,-.42),adsPos:new I(.27,-.25,-.42)}};class S0{constructor(t,e,n,s,r,o){rt(this,"camera");rt(this,"worldScene");rt(this,"audio");rt(this,"targets");rt(this,"enemies");rt(this,"environmentObjects");rt(this,"root",new jt);rt(this,"recoilGroup",new jt);rt(this,"rifleGroup",new jt);rt(this,"pistolGroup",new jt);rt(this,"knifeGroup",new jt);rt(this,"rifleMagGroup",new jt);rt(this,"pistolMagGroup",new jt);rt(this,"pistolSlideGroup",new jt);rt(this,"rifleMuzzleTip",new pe);rt(this,"rifleEjectionPort",new pe);rt(this,"pistolMuzzleTip",new pe);rt(this,"pistolEjectionPort",new pe);rt(this,"muzzleFlashGroup",new jt);rt(this,"muzzleLight",new gu(16757575,0,7));rt(this,"raycaster",new al);rt(this,"screenCenter",new Zt(0,0));rt(this,"baseFov",75);rt(this,"activeId","rifle");rt(this,"ammo",{rifle:{mag:30,reserve:120},pistol:{mag:12,reserve:60}});rt(this,"fireCooldown",0);rt(this,"isFiringHeld",!1);rt(this,"pendingTrigger",!1);rt(this,"isAiming",!1);rt(this,"isReloading",!1);rt(this,"reloadTimer",0);rt(this,"emptyClickCooldown",0);rt(this,"muzzleFlashTimer",0);rt(this,"slideKick",0);rt(this,"slashTimer",0);rt(this,"slashDuration",.24);rt(this,"swapDip",0);rt(this,"adsBlend",0);rt(this,"recoilZ",0);rt(this,"recoilPitch",0);rt(this,"recoilYaw",0);rt(this,"swayX",0);rt(this,"swayY",0);rt(this,"bobPhase",0);rt(this,"idleTime",0);rt(this,"tracers",[]);rt(this,"casings",[]);rt(this,"sparks",[]);rt(this,"casingGeo",new be(.008,.008,.032,6));rt(this,"casingMat",new kt({color:13936719,roughness:.35,metalness:.85}));rt(this,"sparkGeo",new mt(.038,.038,.038));this.camera=t,this.worldScene=e,this.audio=n,this.targets=s,this.enemies=r,this.environmentObjects=o,this.buildViewmodels(),this.applyWeaponVisibility(),this.root.position.copy(Qe.rifle.hipPos),this.camera.add(this.root)}buildViewmodels(){const t=new kt({color:2501168,roughness:.42,metalness:.72}),e=new kt({color:1513757,roughness:.55,metalness:.55}),n=new kt({color:2040617,roughness:.78,metalness:.15}),s=new kt({color:13751771,roughness:.24,metalness:.9}),r=new kt({color:3553845,roughness:.85,metalness:.05}),o=new kt({color:4937540,roughness:.9,metalness:.04}),a=new we({color:6333946,transparent:!0,opacity:.22,side:De}),c=new we({color:16722474}),l=new we({color:4906624});this.root.add(this.recoilGroup),this.recoilGroup.add(this.rifleGroup),this.recoilGroup.add(this.pistolGroup),this.recoilGroup.add(this.knifeGroup);const h=this.rifleGroup,u=new et(new mt(.052,.062,.28),t);u.position.set(0,.042,.04),h.add(u);const f=new et(new mt(.048,.048,.2),e);f.position.set(0,-.005,.06),h.add(f);const m=new et(new mt(.032,.012,.48),e);m.position.set(0,.079,-.05),h.add(m);const v=new et(new mt(.042,.018,.082),e);v.position.set(0,.094,.02),h.add(v);const M=new et(new mt(.007,.056,.068),n);M.position.set(-.021,.132,.02),h.add(M);const p=new et(new mt(.007,.056,.068),n);p.position.set(.021,.132,.02),h.add(p);const d=new et(new mt(.049,.007,.068),n);d.position.set(0,.162,.02),h.add(d);const E=new et(new Ln(.036,.046),a);E.position.set(0,.134,.02),h.add(E);const _=new et(new pn(.0024,8,8),c);_.position.set(0,.145,.02),h.add(_);const g=new et(new mt(.054,.058,.3),n);g.position.set(0,.042,-.25),h.add(g);for(let it=0;it<4;it++){const W=new et(new mt(.005,.014,.032),e);W.position.set(-.028,.046,-.15-it*.058),h.add(W);const pt=new et(new mt(.005,.014,.032),e);pt.position.set(.028,.046,-.15-it*.058),h.add(pt)}const w=new be(.011,.012,.24,10);w.rotateX(Math.PI/2);const b=new et(w,e);b.position.set(0,.044,-.49),h.add(b);const R=new be(.016,.015,.055,8);R.rotateX(Math.PI/2);const L=new et(R,t);L.position.set(0,.044,-.625),h.add(L);const y=new et(new mt(.006,.034,.016),e);y.position.set(0,.088,-.37),h.add(y);const x=new be(.016,.016,.18,8);x.rotateX(Math.PI/2);const C=new et(x,e);C.position.set(0,.038,.25),h.add(C);const k=new et(new mt(.042,.11,.16),n);k.position.set(0,.01,.34),h.add(k);const F=new et(new mt(.036,.11,.046),n);F.position.set(0,-.072,.13),F.rotation.x=.28,h.add(F),this.rifleMagGroup.position.set(0,-.025,.01);const H=new et(new mt(.028,.095,.062),e);H.position.set(0,-.045,0),H.rotation.x=-.14,this.rifleMagGroup.add(H);const $=new et(new mt(.028,.075,.06),e);$.position.set(0,-.115,-.016),$.rotation.x=-.28,this.rifleMagGroup.add($),h.add(this.rifleMagGroup);const j=new et(new mt(.056,.068,.075),r);j.position.set(.012,-.068,.135),j.rotation.x=.24,h.add(j);const X=new et(new mt(.072,.074,.24),o);X.position.set(.065,-.115,.28),X.rotation.set(.28,-.26,.12),h.add(X);const P=new et(new mt(.062,.064,.088),r);P.position.set(-.018,.016,-.22),P.rotation.z=.2,h.add(P);const Z=new et(new mt(.072,.074,.34),o);Z.position.set(-.13,-.09,-.03),Z.rotation.set(-.34,-.45,-.2),h.add(Z),this.rifleMuzzleTip.position.set(0,.044,-.66),h.add(this.rifleMuzzleTip),this.rifleEjectionPort.position.set(.032,.048,.02),h.add(this.rifleEjectionPort);const G=this.pistolGroup,K=new et(new mt(.034,.032,.22),n);K.position.set(0,.096,-.02),G.add(K);const tt=new et(new mt(.018,.026,.055),n);tt.position.set(0,.072,.018),G.add(tt);const ft=new et(new mt(.033,.115,.048),n);ft.position.set(0,.035,.065),ft.rotation.x=.28,G.add(ft),this.pistolMagGroup.position.set(0,.02,.068);const V=new et(new mt(.024,.095,.034),e);V.position.set(0,-.02,0),V.rotation.x=.28,this.pistolMagGroup.add(V),G.add(this.pistolMagGroup),this.pistolSlideGroup.position.set(0,.128,-.025);const nt=new et(new mt(.036,.036,.23),t);this.pistolSlideGroup.add(nt);const ct=new et(new mt(.005,.012,.008),l);ct.position.set(0,.022,-.102),this.pistolSlideGroup.add(ct);const st=new et(new mt(.007,.011,.008),e);st.position.set(-.009,.022,.102),this.pistolSlideGroup.add(st);const U=new et(new mt(.007,.011,.008),e);U.position.set(.009,.022,.102),this.pistolSlideGroup.add(U),G.add(this.pistolSlideGroup);const Ct=new be(.009,.009,.045,8);Ct.rotateX(Math.PI/2);const xt=new et(Ct,e);xt.position.set(0,.125,-.145),G.add(xt);const Nt=new et(new mt(.052,.068,.072),r);Nt.position.set(.008,.035,.072),Nt.rotation.x=.25,G.add(Nt);const gt=new et(new mt(.048,.06,.068),r);gt.position.set(-.014,.032,.058),gt.rotation.set(.22,.35,.1),G.add(gt);const ut=new et(new mt(.068,.068,.26),o);ut.position.set(.065,-.025,.22),ut.rotation.set(.25,-.22,.1),G.add(ut);const D=new et(new mt(.064,.064,.28),o);D.position.set(-.095,-.035,.21),D.rotation.set(.24,.32,-.12),G.add(D),this.pistolMuzzleTip.position.set(0,.125,-.18),G.add(this.pistolMuzzleTip),this.pistolEjectionPort.position.set(.022,.135,-.01),G.add(this.pistolEjectionPort);const ne=this.knifeGroup,It=new et(new be(.018,.02,.13,8),n);It.position.set(0,.01,.02),It.rotation.x=-.35,ne.add(It);const Ft=new et(new mt(.052,.014,.024),e);Ft.position.set(0,.072,-.004),Ft.rotation.x=-.35,ne.add(Ft);const wt=new et(new mt(.006,.15,.034),s);wt.position.set(0,.145,-.032),wt.rotation.x=-.35,ne.add(wt);const Wt=new ki(.018,.065,4);Wt.scale(.22,1,1);const yt=new et(Wt,s);yt.position.set(0,.238,-.067),yt.rotation.x=-.35,ne.add(yt);const A=new et(new mt(.056,.072,.072),r);A.position.set(.008,.008,.024),A.rotation.x=-.28,ne.add(A);const S=new et(new mt(.072,.072,.3),o);S.position.set(.06,-.06,.16),S.rotation.set(.32,-.28,.12),ne.add(S);const B=new we({color:16765557,transparent:!0,opacity:.9,side:De,depthWrite:!1});for(let it=0;it<3;it++){const W=new et(new ki(.055,.18,4),B);W.rotation.z=it*Math.PI/3,W.rotation.x=Math.PI/2,W.position.z=-.06,this.muzzleFlashGroup.add(W)}const J=new et(new pn(.045,6,6),new we({color:16777215}));this.muzzleFlashGroup.add(J),this.muzzleFlashGroup.visible=!1,this.recoilGroup.add(this.muzzleFlashGroup),this.muzzleLight.position.set(0,.08,-.5),this.recoilGroup.add(this.muzzleLight),this.root.traverse(it=>{it instanceof et&&(it.castShadow=!1,it.receiveShadow=!1)})}applyWeaponVisibility(){this.rifleGroup.visible=this.activeId==="rifle",this.pistolGroup.visible=this.activeId==="pistol",this.knifeGroup.visible=this.activeId==="knife"}selectWeapon(t){t!==this.activeId&&(this.activeId=t,this.isReloading=!1,this.reloadTimer=0,this.fireCooldown=.22,this.slashTimer=0,this.muzzleFlashTimer=0,this.muzzleFlashGroup.visible=!1,this.muzzleLight.intensity=0,this.rifleMagGroup.position.y=-.025,this.pistolMagGroup.position.y=.02,this.swapDip=1,t==="knife"&&(this.isAiming=!1),this.applyWeaponVisibility())}cycleWeapon(t){const n=(Vs.indexOf(this.activeId)+t+Vs.length)%Vs.length;this.selectWeapon(Vs[n])}setFiringHeld(t){t&&!this.isFiringHeld&&(this.pendingTrigger=!0),this.isFiringHeld=t,t||(this.emptyClickCooldown=0)}setAiming(t){this.isAiming=Qe[this.activeId].isMelee?!1:t}startReload(){const t=Qe[this.activeId];if(t.isMelee||this.isReloading)return;const e=this.ammo[this.activeId];e.mag>=t.magSize||e.reserve<=0||(this.isReloading=!0,this.reloadTimer=0,this.audio.playReload())}refillReserve(){this.ammo.rifle.reserve=Qe.rifle.defaultReserve,this.ammo.pistol.reserve=Qe.pistol.defaultReserve}reset(){for(this.activeId="rifle",this.ammo.rifle.mag=Qe.rifle.magSize,this.ammo.rifle.reserve=Qe.rifle.defaultReserve,this.ammo.pistol.mag=Qe.pistol.magSize,this.ammo.pistol.reserve=Qe.pistol.defaultReserve,this.fireCooldown=0,this.emptyClickCooldown=0,this.isFiringHeld=!1,this.pendingTrigger=!1,this.isAiming=!1,this.isReloading=!1,this.reloadTimer=0,this.adsBlend=0,this.swapDip=0,this.slashTimer=0,this.slideKick=0,this.recoilZ=0,this.recoilPitch=0,this.recoilYaw=0,this.swayX=0,this.swayY=0,this.muzzleFlashTimer=0,this.muzzleFlashGroup.visible=!1,this.muzzleLight.intensity=0,this.rifleMagGroup.position.y=-.025,this.pistolMagGroup.position.y=.02,this.pistolSlideGroup.position.z=-.025,this.applyWeaponVisibility(),this.camera.fov=this.baseFov,this.camera.updateProjectionMatrix();this.tracers.length>0;){const t=this.tracers.pop();this.worldScene.remove(t.line),t.line.geometry.dispose(),t.line.material.dispose()}for(;this.casings.length>0;){const t=this.casings.pop();this.worldScene.remove(t.mesh)}for(;this.sparks.length>0;){const t=this.sparks.pop();this.worldScene.remove(t.mesh)}}addMouseSway(t,e){this.swayX=fe.clamp(this.swayX-t*18e-5,-.035,.035),this.swayY=fe.clamp(this.swayY+e*18e-5,-.035,.035)}getState(){const t=Qe[this.activeId];if(t.isMelee)return{id:this.activeId,name:t.name,isMelee:!0,mag:0,magSize:0,reserve:0,isReloading:!1,isAiming:!1};const e=this.ammo[this.activeId];return{id:this.activeId,name:t.name,isMelee:!1,mag:e.mag,magSize:t.magSize,reserve:e.reserve,isReloading:this.isReloading,isAiming:this.isAiming&&!this.isReloading}}performKnifeSlash(t){var a,c,l,h;this.fireCooldown=t.fireInterval,this.slashTimer=this.slashDuration,this.audio.playKnifeSlash(),this.raycaster.setFromCamera(this.screenCenter,this.camera),this.raycaster.far=t.range;const e=[...this.enemies.shootableObjects,...this.targets.shootableObjects,...this.environmentObjects],n=this.raycaster.intersectObjects(e,!0);this.raycaster.far=1/0;let s=!1,r=!1,o=!1;if(n.length>0){const u=n[0],f=u.point.clone();if(u.object.userData.enemyId!==void 0){const m=this.enemies.hitEnemy(u.object,f,t.bodyDamage);m.hit&&(s=!0,r=m.killed,o=m.headshot,m.headshot?this.audio.playHeadshot():this.audio.playHit(m.killed),this.spawnImpactParticles(f,(a=u.face)==null?void 0:a.normal,m.headshot?16436245:16729156,m.headshot?10:7))}else{const m=this.targets.hitTarget(u.object,f,(c=u.face)==null?void 0:c.normal);m.hit?(s=!0,r=m.destroyed,this.audio.playHit(m.destroyed),this.spawnImpactParticles(f,(l=u.face)==null?void 0:l.normal,14596231,7)):this.spawnImpactParticles(f,(h=u.face)==null?void 0:h.normal,15192991,4)}}return{fired:!0,hitTarget:s,targetDestroyed:r,headshot:o,pitchKick:t.camPitchKick,yawKick:0}}fireShot(){var M,p,d,E;const t=Qe[this.activeId];if(t.isMelee)return this.performKnifeSlash(t);const e=this.ammo[this.activeId];if(e.mag<=0)return this.emptyClickCooldown<=0&&(this.audio.playEmptyClick(),this.emptyClickCooldown=.28,e.reserve>0&&this.startReload()),{fired:!1,hitTarget:!1,targetDestroyed:!1,headshot:!1,pitchKick:0,yawKick:0};e.mag--,this.fireCooldown=t.fireInterval,this.activeId==="pistol"?(this.audio.playPistolShot(),this.slideKick=.042):this.audio.playShot();const n=this.isAiming?.55:1;this.recoilZ=Math.min(this.recoilZ+t.recoilZ*n,.12),this.recoilPitch=Math.min(this.recoilPitch+t.recoilPitch*n,.14),this.recoilYaw+=(Math.random()-.5)*.025*n;const s=t.camPitchKick*n,r=(Math.random()-.5)*.006*n,o=this.activeId==="pistol"?this.pistolMuzzleTip:this.rifleMuzzleTip,a=this.activeId==="pistol"?this.pistolEjectionPort:this.rifleEjectionPort;this.muzzleFlashTimer=.045,this.muzzleFlashGroup.position.copy(o.position),this.muzzleFlashGroup.visible=!0,this.muzzleFlashGroup.rotation.z=Math.random()*Math.PI*2,this.muzzleFlashGroup.scale.setScalar((this.activeId==="pistol"?.68:.85)+Math.random()*.3),this.muzzleLight.intensity=3,this.spawnShellCasing(a),this.raycaster.setFromCamera(this.screenCenter,this.camera),this.raycaster.far=t.range;const c=[...this.enemies.shootableObjects,...this.targets.shootableObjects,...this.environmentObjects],l=this.raycaster.intersectObjects(c,!0);this.raycaster.far=1/0;const h=new I;o.getWorldPosition(h);let u,f=!1,m=!1,v=!1;if(l.length>0){const _=l[0];if(u=_.point.clone(),_.object.userData.enemyId!==void 0){const g=this.enemies.hitEnemy(_.object,u,t.bodyDamage);g.hit&&(f=!0,m=g.killed,v=g.headshot,g.headshot?this.audio.playHeadshot():this.audio.playHit(g.killed),this.spawnImpactParticles(u,(M=_.face)==null?void 0:M.normal,g.headshot?16436245:16729156,g.headshot?10:7))}else{const g=this.targets.hitTarget(_.object,u,(p=_.face)==null?void 0:p.normal);g.hit?(f=!0,m=g.destroyed,this.audio.playHit(g.destroyed),this.spawnImpactParticles(u,(d=_.face)==null?void 0:d.normal,14596231,7)):this.spawnImpactParticles(u,(E=_.face)==null?void 0:E.normal,15192991,5)}}else{const _=new I;this.camera.getWorldDirection(_),u=h.clone().addScaledVector(_,t.range)}return this.spawnTracer(h,u),{fired:!0,hitTarget:f,targetDestroyed:m,headshot:v,pitchKick:s,yawKick:r}}spawnTracer(t,e){const n=new Ve().setFromPoints([t,e]),s=new il({color:16774064,transparent:!0,opacity:.75}),r=new uu(n,s);this.worldScene.add(r),this.tracers.push({line:r,life:.055,maxLife:.055})}spawnShellCasing(t){const e=new et(this.casingGeo,this.casingMat),n=new I;t.getWorldPosition(n),e.position.copy(n);const s=new qi;this.camera.getWorldQuaternion(s);const o=new I(1,.6,-.1).normalize().applyQuaternion(s).multiplyScalar(2.4+Math.random()*.9);o.y+=1.4+Math.random()*.6,this.worldScene.add(e),this.casings.push({mesh:e,velocity:o,rotVelocity:new I(16,22,14),life:.9})}spawnImpactParticles(t,e,n,s){const r=new we({color:n}),o=e?e.clone().normalize():new I(0,1,0);for(let a=0;a<s;a++){const c=new et(this.sparkGeo,r);c.position.copy(t),this.worldScene.add(c);const l=o.clone().multiplyScalar(2.2+Math.random()*2.5);l.x+=(Math.random()-.5)*3.2,l.y+=Math.random()*2.4,l.z+=(Math.random()-.5)*3.2,this.sparks.push({mesh:c,velocity:l,life:.25+Math.random()*.18})}}update(t,e,n,s){this.idleTime+=t,this.fireCooldown=Math.max(0,this.fireCooldown-t),this.emptyClickCooldown=Math.max(0,this.emptyClickCooldown-t),this.swapDip=Math.max(0,this.swapDip-t*5.2),this.slideKick=fe.lerp(this.slideKick,0,Math.min(1,t*22)),this.pistolSlideGroup.position.z=-.025+this.slideKick,this.slashTimer>0&&(this.slashTimer=Math.max(0,this.slashTimer-t));const r=Qe[this.activeId];if(this.muzzleFlashTimer>0&&(this.muzzleFlashTimer-=t,this.muzzleFlashTimer<=0&&(this.muzzleFlashGroup.visible=!1,this.muzzleLight.intensity=0)),this.isReloading&&!r.isMelee){this.reloadTimer+=t;const E=Math.min(1,this.reloadTimer/r.reloadDuration),_=this.activeId==="pistol"?this.pistolMagGroup:this.rifleMagGroup,g=this.activeId==="pistol"?.02:-.025;if(E<.35){const w=E/.35;_.position.y=g-w*.22}else if(E<.72){const w=(E-.35)/.37;_.position.y=g-.22+w*.22}else _.position.y=g;if(this.reloadTimer>=r.reloadDuration){const w=this.ammo[this.activeId],b=r.magSize-w.mag,R=Math.min(b,w.reserve);w.mag+=R,w.reserve-=R,this.isReloading=!1,_.position.y=g}}let o={fired:!1,hitTarget:!1,targetDestroyed:!1,headshot:!1,pitchKick:0,yawKick:0};const a=r.auto?this.isFiringHeld||this.pendingTrigger:this.pendingTrigger;e&&a&&!this.isReloading&&this.fireCooldown<=0?(this.pendingTrigger=!1,o=this.fireShot()):(!e||!r.auto)&&(this.pendingTrigger=!1);const c=e&&this.isAiming&&!this.isReloading&&!r.isMelee;this.adsBlend=fe.lerp(this.adsBlend,c?1:0,Math.min(1,t*14));const l=fe.lerp(this.baseFov,r.adsFov,this.adsBlend);Math.abs(this.camera.fov-l)>.02&&(this.camera.fov=l,this.camera.updateProjectionMatrix());const h=e&&n>.05?(s?.016:.009)*(1-this.adsBlend*.75):0;this.bobPhase+=t*(s?12.5:8.5)*Math.max(.2,n);const u=Math.cos(this.bobPhase*.5)*h,f=Math.abs(Math.sin(this.bobPhase))*h*1.25,m=Math.sin(this.idleTime*1.9)*.0022*(1-this.adsBlend*.7);this.swayX=fe.lerp(this.swayX,0,Math.min(1,t*10)),this.swayY=fe.lerp(this.swayY,0,Math.min(1,t*10));const v=this.isReloading&&r.reloadDuration>0?Math.sin(this.reloadTimer/r.reloadDuration*Math.PI):0,M=this.slashTimer>0?1-this.slashTimer/this.slashDuration:0,p=this.slashTimer>0?Math.sin(M*Math.PI):0,d=r.hipPos.clone().lerp(r.adsPos,this.adsBlend);this.root.position.set(d.x+u+this.swayX*(1-this.adsBlend*.65)-p*.22,d.y-f+m+this.swayY*(1-this.adsBlend*.65)-v*.09-this.swapDip*.14+p*.04,d.z-p*.18),this.recoilZ=fe.lerp(this.recoilZ,0,Math.min(1,t*16)),this.recoilPitch=fe.lerp(this.recoilPitch,0,Math.min(1,t*14)),this.recoilYaw=fe.lerp(this.recoilYaw,0,Math.min(1,t*14)),this.recoilGroup.position.set(0,0,this.recoilZ),this.recoilGroup.rotation.set(this.recoilPitch-v*.42-p*.72,this.recoilYaw+v*.35+p*.85,v*.48+p*.65);for(let E=this.tracers.length-1;E>=0;E--){const _=this.tracers[E];_.life-=t,_.life<=0?(this.worldScene.remove(_.line),_.line.geometry.dispose(),_.line.material.dispose(),this.tracers.splice(E,1)):_.line.material.opacity=_.life/_.maxLife*.8}for(let E=this.casings.length-1;E>=0;E--){const _=this.casings[E];_.life-=t,_.life<=0?(this.worldScene.remove(_.mesh),this.casings.splice(E,1)):(_.velocity.y-=13.5*t,_.mesh.position.addScaledVector(_.velocity,t),_.mesh.rotation.x+=_.rotVelocity.x*t,_.mesh.rotation.y+=_.rotVelocity.y*t,_.mesh.rotation.z+=_.rotVelocity.z*t)}for(let E=this.sparks.length-1;E>=0;E--){const _=this.sparks[E];_.life-=t,_.life<=0?(this.worldScene.remove(_.mesh),this.sparks.splice(E,1)):(_.velocity.y-=12*t,_.mesh.position.addScaledVector(_.velocity,t),_.mesh.scale.setScalar(Math.max(.05,_.life/.35)))}return o}}function oe(i){const t=document.getElementById(i);if(!t)throw new Error(`Missing required DOM element #${i}`);return t}const y0=oe("canvas-container"),Ac=oe("damage-vignette"),E0=oe("blood-overlay"),Rc=oe("overlay"),ko=oe("touch-mode-btn"),Go=oe("landscape-btn"),ml=oe("play-btn"),gl=oe("gameover-overlay"),T0=oe("gameover-wave"),w0=oe("gameover-kills"),b0=oe("restart-btn"),A0=oe("wave-counter"),R0=oe("enemy-counter"),C0=oe("kill-counter"),Cc=oe("parts-counter"),P0=oe("island-badge"),L0=oe("target-counter"),D0=oe("health-value"),jr=oe("health-bar-fill"),ti=oe("status-indicator"),lr=oe("toast"),Hs=oe("interact-prompt"),$r=oe("crosshair"),ss=oe("hitmarker"),I0=oe("reload-prompt"),U0=oe("weapon-name"),F0=oe("ammo-readout"),Pc=oe("ammo-mag"),N0=oe("ammo-reserve"),O0=Array.from(document.querySelectorAll(".weapon-slot")),Xn=new cu,ui=new Ze(75,window.innerWidth/window.innerHeight,.05,750);Xn.add(ui);const ze=new s0({antialias:!0});ze.setPixelRatio(Math.min(window.devicePixelRatio,2));ze.setSize(window.innerWidth,window.innerHeight);ze.shadowMap.enabled=!0;ze.shadowMap.type=Ic;ze.toneMapping=Fc;ze.toneMappingExposure=1.05;y0.appendChild(ze.domElement);const Ki=new r0,Hn=h0(Xn),Gi=M0(Xn,Hn.colliders),_l=m0(Xn,Ki),Se=u0(Xn,Ki),ji=p0(Xn,Hn.colliders,Hn.shootableEnvironment,Ki,_l),ve=new g0(ui,Hn.colliders,Ki),Yt=new S0(ui,Xn,Ki,Gi,ji,Hn.shootableEnvironment);let he=!1,pr=!1,di=!1,mr=!1,$s=null,Js=null,Qs=0,Vi=!1,hr=0,hs=0,nn=!1,Ae=aa.isTouchDevice(),ca=!1,hn=!1;function vl(){if(!he||nn)return;const i=ve.getPosition();if(!Se.canBoard(i))return;const t=Se.getState().currentIsland===1?2:1;Se.startVoyage((n,s)=>{ve.setPose(s,n===2?0:Math.PI,-.04),Hn.setActiveIsland(n),ji.setActiveIsland(n,s),Rn(n===2?"Você chegou à Ilha 2! Cuidado com os novos inimigos!":"De volta à Ilha 1!",3)})&&(Yt.setFiringHeld(!1),Yt.setAiming(!1),hn=!1,Rn(`Navegando para a Ilha ${t}...`,2.6))}const Ge=new aa({onMove:(i,t,e)=>{ve.setTouchMove(i,t,e)},onLook:(i,t)=>{if(!he)return;const e=ve.handleTouchLook(i,t,Yt.getState().isAiming);Yt.addMouseSway(e.dx,e.dy)},onFireChange:i=>{!he||Se.getState().isSailing||Yt.setFiringHeld(i)},onAdsToggle:()=>{!he||Se.getState().isSailing||(hn=!hn,Yt.setAiming(hn),Ge.setAdsActive(hn))},onJump:()=>{!he||Se.getState().isSailing||ve.triggerJump()},onReload:()=>{!he||Se.getState().isSailing||Yt.startReload()},onWeaponCycle:()=>{!he||Se.getState().isSailing||(hn=!1,Yt.setAiming(!1),Yt.cycleWeapon(1),Ge.setAdsActive(!1))},onInteract:()=>{vl()},onToggleLandscape:()=>{Ml()},onPause:()=>{Sl()}});function xl(){const i=document;return!!(document.fullscreenElement||i.webkitFullscreenElement)}function la(){const i=xl(),t=window.innerWidth>window.innerHeight;Go.classList.toggle("active",i),Go.textContent=i?"Modo Horizontal: ATIVADO":t?"Modo Horizontal: TELA CHEIA":"Modo Horizontal: GIRAR / TELA CHEIA",Ge.setLandscapeActive(i)}async function Ml(){var n;const i=document,t=document.documentElement,e=screen.orientation;if(xl()){try{(n=e==null?void 0:e.unlock)==null||n.call(e)}catch{}try{document.exitFullscreen?await document.exitFullscreen():i.webkitExitFullscreen&&await i.webkitExitFullscreen()}catch{}}else{!ca&&aa.isTouchDevice()&&(Ae=!0,gr());try{t.requestFullscreen?await t.requestFullscreen():t.webkitRequestFullscreen&&await t.webkitRequestFullscreen()}catch{}let s=!1;try{e!=null&&e.lock&&(await e.lock("landscape"),s=!0)}catch{}!s&&window.innerHeight>window.innerWidth&&Rn("Gire o celular para a horizontal para melhor visualização!",2.8)}la(),Wn()}function gr(){document.body.classList.toggle("touch-active",Ae),ko.textContent=Ae?"Controles Touch: ATIVADO":"Controles Touch: DESATIVADO",ko.classList.toggle("active",Ae),Ge.setVisible(he&&Ae)}gr();la();function Rn(i,t=2.4){lr.textContent=i,lr.classList.remove("hidden"),hs=t}function z0(i,t){ss.classList.remove("hit","kill","headshot"),ss.offsetWidth,ss.classList.add("hit"),t?ss.classList.add("headshot"):i&&ss.classList.add("kill")}function Hi(i){i&&!nn?(ml.textContent=pr?"CONTINUAR":"JOGAR",Rc.classList.add("visible")):Rc.classList.remove("visible")}function Sl(){var i;!he&&!nn||(he=!1,di=!1,hn=!1,ve.clearInputs(),Yt.setFiringHeld(!1),Yt.setAiming(!1),Ge.setVisible(!1),Ge.setAdsActive(!1),document.pointerLockElement===ze.domElement&&((i=document.exitPointerLock)==null||i.call(document)),nn||Hi(!0))}function B0(){var t;if(nn)return;nn=!0,he=!1,di=!1,hn=!1,ve.clearInputs(),Yt.setFiringHeld(!1),Yt.setAiming(!1),Ge.setVisible(!1),Ge.setAdsActive(!1),Hi(!1),document.pointerLockElement===ze.domElement&&((t=document.exitPointerLock)==null||t.call(document));const i=ji.getProgress();T0.textContent=String(i.wave),w0.textContent=String(i.kills),gl.classList.add("visible")}function yl(){mr=!1,!(nn||!Ae&&document.pointerLockElement===ze.domElement)&&(di=!Ae,he=!0,pr=!0,$s=null,Js=null,Hi(!1),Ge.setVisible(Ae))}function El(){if(nn)return;if(Ki.unlock(),Ae){he=!0,pr=!0,di=!1,hn=!1,Hi(!1),Ge.setVisible(!0);return}const i=ze.domElement;mr=!0,yl();try{const t=i.requestPointerLock();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}}function k0(){nn=!1,hn=!1,gl.classList.remove("visible"),Vi=!1,hr=0,hs=0,lr.classList.add("hidden"),Hn.setActiveIsland(1),ve.reset(),Yt.reset(),Se.reset(),ji.reset(),Gi.resetAll(),Ge.reset(),El()}ko.addEventListener("click",()=>{Ae=!Ae,ca=!0,gr()});Go.addEventListener("click",()=>{Ml()});window.addEventListener("touchstart",()=>{!ca&&!Ae&&(Ae=!0,gr())},{passive:!0});ml.addEventListener("click",()=>{El()});b0.addEventListener("click",()=>{k0()});document.addEventListener("pointerlockchange",()=>{var t;const i=document.pointerLockElement===ze.domElement;if(mr=!1,i){if(nn){(t=document.exitPointerLock)==null||t.call(document);return}di=!1,he=!0,pr=!0,Hi(!1)}else di||(he=!1,ve.clearInputs(),Yt.setFiringHeld(!1),Yt.setAiming(!1),nn||Hi(!0))});document.addEventListener("pointerlockerror",()=>{mr&&!nn&&yl()});window.addEventListener("mousemove",i=>{if(!he||Ae||Se.getState().isSailing)return;let t=i.movementX,e=i.movementY;document.pointerLockElement!==ze.domElement&&($s!==null&&Js!==null&&t===0&&e===0&&(t=i.clientX-$s,e=i.clientY-Js),$s=i.clientX,Js=i.clientY);const{dx:n,dy:s}=ve.handleMouseLook(t,e,Yt.getState().isAiming);Yt.addMouseSway(n,s)});window.addEventListener("mousedown",i=>{!he||Ae||Se.getState().isSailing||(i.button===0?Yt.setFiringHeld(!0):i.button===2&&Yt.setAiming(!0))});window.addEventListener("mouseup",i=>{Ae||(i.button===0?Yt.setFiringHeld(!1):i.button===2&&Yt.setAiming(!1))});window.addEventListener("wheel",i=>{!he||Ae||Se.getState().isSailing||Math.abs(i.deltaY)>4&&Yt.cycleWeapon(i.deltaY>0?1:-1)},{passive:!0});window.addEventListener("contextmenu",i=>{i.preventDefault()});window.addEventListener("keydown",i=>{if(he){if(i.code==="Escape"&&(di||Ae)){Sl();return}Se.getState().isSailing||(ve.handleKeyDown(i.code),i.code==="KeyR"?Yt.startReload():i.code==="KeyT"?(Gi.resetAll(),Yt.refillReserve(),Vi=!1,Rn("Alvos reposicionados!",1.8)):i.code==="Digit1"?Yt.selectWeapon("rifle"):i.code==="Digit2"?Yt.selectWeapon("pistol"):i.code==="Digit3"?Yt.selectWeapon("knife"):i.code==="KeyQ"?Yt.cycleWeapon(1):i.code==="KeyE"&&vl())}});window.addEventListener("keyup",i=>{ve.handleKeyUp(i.code)});window.addEventListener("blur",()=>{hn=!1,ve.clearInputs(),Yt.setFiringHeld(!1),Yt.setAiming(!1),Ge.reset()});function Wn(){ui.aspect=window.innerWidth/window.innerHeight,ui.updateProjectionMatrix(),ze.setSize(window.innerWidth,window.innerHeight),la()}window.addEventListener("resize",Wn);window.addEventListener("orientationchange",()=>{Wn(),window.setTimeout(Wn,180)});document.addEventListener("fullscreenchange",()=>{Wn(),window.setTimeout(Wn,180)});document.addEventListener("webkitfullscreenchange",()=>{Wn(),window.setTimeout(Wn,180)});const Lc=new Mu;function G0(i,t,e,n){const s=Gi.getProgress();L0.textContent=`${s.hitCount} / ${s.total}`,s.total>0&&s.hitCount===s.total&&!Vi&&(Vi=!0,hr=2.6,Rn("Todos os alvos derrubados! Reiniciando...",2.5));const r=ji.getProgress();A0.textContent=String(r.wave),R0.textContent=String(r.alive),C0.textContent=String(r.kills);const o=Se.getState();Cc.textContent=`${o.partsCollected} / ${o.partsRequired}`,Cc.classList.toggle("parts-ready",o.isRepaired),P0.textContent=String(o.currentIsland),o.nearbyPrompt&&he&&!o.isSailing?(Hs.textContent=o.nearbyPrompt,Hs.classList.toggle("locked",!o.isRepaired),Hs.classList.remove("hidden")):Hs.classList.add("hidden"),Ge.setInteractVisible(he&&Se.canBoard(ve.getPosition()));const a=ve.getHealth(),c=Math.max(0,Math.min(100,a.current/a.max*100));D0.textContent=String(a.current),jr.style.width=`${c}%`,jr.classList.toggle("hp-warn",a.current<=50&&a.current>25),jr.classList.toggle("hp-danger",a.current<=25);const l=a.current<=30&&!a.isDead?(30-a.current)/60:0,h=Math.min(.92,Math.max(a.damageFlash*.78,l));Ac.style.opacity=String(h),Ac.classList.toggle("low-health",a.current<=30&&!a.isDead);const u=a.current<=40&&!a.isDead?(40-a.current)/70:0,f=Math.min(.96,Math.max(a.damageFlash*.92,u));E0.style.opacity=String(f);const m=Yt.getState();U0.textContent=m.name,F0.classList.toggle("melee-mode",m.isMelee),Pc.textContent=m.isMelee?"∞":String(m.mag),N0.textContent=m.isMelee?"":String(m.reserve),Pc.classList.toggle("low-ammo",!m.isMelee&&m.mag<=Math.ceil(m.magSize*.25));for(const M of O0)M.classList.toggle("active",M.dataset.weapon===m.id);const v=!m.isMelee&&!e&&m.mag<=Math.ceil(m.magSize*.25)&&m.reserve>0;I0.classList.toggle("hidden",!v),$r.classList.toggle("aiming",n),$r.classList.toggle("reloading",e),$r.classList.toggle("spread",Qs>0||t>.75),Ge.setAdsActive(n),e?(ti.textContent="RECARREGANDO...",ti.classList.add("reloading"),ti.classList.remove("hidden")):i&&!o.isSailing?(ti.textContent="ÁGUA RASA",ti.classList.remove("reloading"),ti.classList.remove("hidden")):ti.classList.add("hidden")}function Tl(){requestAnimationFrame(Tl);const i=Math.min(Lc.getDelta(),.05),t=Lc.elapsedTime;Qs=Math.max(0,Qs-i),hs>0&&(hs-=i,hs<=0&&lr.classList.add("hidden")),Vi&&(hr-=i,hr<=0&&(Vi=!1,Gi.resetAll(),Yt.refillReserve()));const e=Se.getVoyagePose();e&&ve.setPose(e.position,e.yaw,e.pitch);const n=Yt.getState(),s=e!==null,r=ve.update(i,he&&!s,n.isAiming),o=Yt.update(i,he&&!s,r.speedRatio,r.isSprinting);o.fired&&(ve.applyRecoilKick(o.pitchKick,o.yawKick),Qs=.09,o.hitTarget&&z0(o.targetDestroyed,o.headshot));const a=ve.getPosition();_l.update(i,he,a);const c=Se.update(i,he,a);if(c.collected){const u=Se.getState();u.isRepaired?Rn(`${c.partName} coletado (5/5)! Lancha desbloqueada na praia norte!`,3.5):Rn(`Peça coletada: ${c.partName} (${u.partsCollected}/${u.partsRequired})`,2.4)}const l=ji.update(i,he&&!s,ui,a,u=>{ve.takeDamage(u)&&B0()});if(l.waveCleared&&!ve.getHealth().isDead){ve.heal(25),Yt.refillReserve();const u=Se.getState();u.partsCollected+u.activeDrops<u.partsRequired&&l.lastKillPos?(Se.spawnPartDrop(l.lastKillPos),Rn(`Onda ${l.clearedWave} limpa! +25 VIDA — Último inimigo dropou uma peça da lancha!`,3.2)):Rn(`Onda ${l.clearedWave} limpa! +25 VIDA — Próxima onda chegando!`,2.6)}Hn.update(t),Gi.update(i);const h=Yt.getState();G0(r.inWater,r.speedRatio,h.isReloading,h.isAiming),ze.render(Xn,ui)}Tl();
