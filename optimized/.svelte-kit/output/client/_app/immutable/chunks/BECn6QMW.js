import{q as V,r as R,t as A,v as C,w as M,l as I,x as b,k as P,H as Y,y as j,z as T,A as g,s as D,o as q,c as p,B,C as $,D as z,F,G,I as W,j as J,a as K,p as Q,h as E,e as U,g as X}from"./rrUmd42d.js";import{b as Z}from"./BM7U9ktV.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,O=new Set;function m(r){var N;var e=this,s=e.ownerDocument,c=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],t=o[0]||r.target,u=0,_=r.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;d<=h&&(u=d)}if(t=o[u]||r.target,t!==e){V(r,"currentTarget",{configurable:!0,get(){return t||s}});var w=M,i=I;R(null),A(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(C(l)){var[H,...L]=l;H.apply(t,[r,...L])}else l.call(t,r)}catch(y){a?n.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,R(w),A(i)}}}function nr(r,e){var s=e==null?"":typeof e=="object"?e+"":e;s!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=s,r.nodeValue=s==null?"":s+"")}function tr(r,e){return k(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const s=e.target,c=E,o=p;try{for(var t=P(s);t&&(t.nodeType!==8||t.data!==Y);)t=j(t);if(!t)throw T;g(!0),D(t),q();const u=k(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==B)throw $(),T;return g(!1),u}catch(u){if(u===T)return e.recover===!1&&z(),b(),F(s),g(!1),tr(r,e);throw u}finally{g(c),D(o)}}const v=new Map;function k(r,{target:e,anchor:s,props:c={},events:o,context:t,intro:u=!0}){b();var _=new Set,d=i=>{for(var a=0;a<i.length;a++){var n=i[a];if(!_.has(n)){_.add(n);var f=rr(n);e.addEventListener(n,m,{passive:f});var l=v.get(n);l===void 0?(document.addEventListener(n,m,{passive:f}),v.set(n,1)):v.set(n,l+1)}}};d(G(er)),O.add(d);var h=void 0,w=W(()=>{var i=s??e.appendChild(J());return K(()=>{if(t){Q({});var a=X;a.c=t}o&&(c.$$events=o),E&&Z(i,null),h=r(i,c)||{},E&&(I.nodes_end=p),t&&U()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var n=v.get(a);--n===0?(document.removeEventListener(a,m),v.delete(a)):v.set(a,n)}O.delete(d),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function or(r,e){const s=S.get(r);return s?(S.delete(r),s(e)):Promise.resolve()}export{ir as h,tr as m,nr as s,or as u};
