import{i,j as u,k as f,T as v,l as p,h as d,c as o,m as h,s as T}from"./3qKZY2hG.js";function E(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=f;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&v)!==0,c=(t&p)!==0,a,_=!r.startsWith("<!>");return()=>{if(d)return n(o,null),o;a===void 0&&(a=E(_?r:"<!>"+r),e||(a=u(a)));var s=c?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=u(s),l=s.lastChild;n(m,l)}else n(s,s);return s}}function M(r=""){if(!d){var t=i(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),T(e)),n(e,e),e}function x(){if(d)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=i();return r.append(t,e),n(t,e),r}function N(r,t){if(d){f.nodes_end=o,h();return}r!==null&&r.before(t)}export{N as a,n as b,x as c,M as d,y as t};
