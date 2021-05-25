(()=>{"use strict";var e,t={845:(e,t,n)=>{var r,a=n(294),o=n(935),c=n(697),u=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e){return a.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:30,height:30,viewBox:"0 0 24 24"},e),r||(r=a.createElement("path",{fill:"#333",d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945C17.634 8.177 15.322 5 12 5c-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246A9.954 9.954 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10a9.956 9.956 0 01-2.247 6.305z"})))}n.p;var s;function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e){return a.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24"},e),s||(s=a.createElement("path",{d:"M9.602 3.7c-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456C2.875 20.45 3 20.866 3 24H1.005L1 22.759c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418C4.535 4.949 7.918 0 13 0c3.321 0 5.97 2.117 5.97 6.167 0 3.555-1.949 6.833-2.383 7.833h-2.115c.392-1.536 2.499-4.366 2.499-7.842 0-5.153-5.867-4.985-7.369-2.458zM23 19h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z"})))}n.p;var p=function(e){switch(e.name){case"user":return a.createElement(l,null);case"user2":return a.createElement(m,null);default:return null}};p.propTypes={name:u().string},p.defaultProps={name:""};const h=p;const d={create:function(e){return fetch("/api/contact_create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},get:function(){return fetch("/api/all_contacts")},delete:function(e){return fetch("/api//del_conact/".concat(e),{method:"DELETE"})},edit:function(e,t){return fetch("/api/edit_contact/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function(e){var t=e.toggle,n=e.item,r=e.setContacts,o=g((0,a.useState)(n),2),c=o[0],u=o[1],i=g((0,a.useState)(null),2),l=i[0],s=i[1],f=function(e){u(b(b({},c),{},v({},e.target.name,e.target.value)))},m=function(e){e.preventDefault(),d.edit(n._id,c).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=new Error("ошибка");throw t.data=e,t}))})).then((function(e){r(e),t((function(e){return!e}))})).catch((function(e){s(e.data.message),setTimeout((function(){return s(null)}),2500)}))};return a.createElement("form",{className:"form_card",onSubmit:function(e){return m(e)}},a.createElement("h2",{className:"form_card_head ".concat(l&&"error")},l||"Edit contact"),a.createElement("label",{htmlFor:"name",className:"label_name_card"},a.createElement("input",{autoFocus:!0,autoComplete:"off",required:!0,onChange:function(e){return f(e)},type:"text",name:"name",id:"name",value:c.name,placeholder:"Enter name",className:"search_input"})),a.createElement("label",{className:"label_phone_card",htmlFor:"phone"},a.createElement("input",{required:!0,autoComplete:"off",onChange:function(e){return f(e)},type:"text",name:"phone",id:"phone",value:c.phone,placeholder:"Enter phone +380...",className:"search_input"})),a.createElement("div",{className:"card_button_wrap"},a.createElement("button",{type:"submit",className:"button_card"},"Change"),a.createElement("button",{type:"button",className:"button_card",onClick:function(){return t((function(e){return!e}))}},"Cancel")))};O.propTypes={setContacts:u().func,toggle:u().func,item:{name:u().string,phone:u().string,_id:u().string}},O.defaultProps={setContacts:function(){},toggle:function(){},item:{}};const w=O;function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=function(e){var t=e.item,n=e.cards,r=e.setContacts,o=j((0,a.useState)(!0),2),c=o[0],u=o[1];return a.createElement("div",{className:"card"},c?a.createElement(a.Fragment,null,a.createElement("div",{className:"content_card"},a.createElement(h,{name:"user"}),a.createElement("p",{className:"card_name"},t.name)),a.createElement("p",{className:"card_phone"},t.phone),a.createElement("div",{className:"button_wrap"},a.createElement("button",{type:"button",className:"button_card",onClick:function(){return u((function(e){return!e}))}},"Change"),a.createElement("button",{type:"button",className:"button_card",onClick:function(){d.delete(t._id).then((function(e){if(e.ok){var a=n.filter((function(e){return e._id!==t._id}));r(a)}}))}},"Delete"))):a.createElement(w,{setContacts:r,toggle:u,item:t}))};C.propTypes={item:{name:u().string,phone:u().string,_id:u().string},cards:[u().object],setContacts:u().func},C.defaultProps={item:{},cards:[],setContacts:function(){}};const S=C;var N=function(e){var t=e.error;return a.createElement(a.Fragment,null,a.createElement("p",{className:"error"},t||""))};N.propTypes={error:u().string},N.defaultProps={error:""};const P=N;function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var D=function(e){var t=e.setContacts,n={name:"",phone:""},r=T((0,a.useState)(null),2),o=r[0],c=r[1],u=T((0,a.useState)(n),2),i=u[0],l=u[1],s=function(e){e.preventDefault(),d.create(i).then((function(e){return e.ok?e.json():e.json().then((function(e){var t=new Error("ошибка");throw t.data=e,t}))})).then((function(e){t(e.contacts),l(n)})).catch((function(e){c(e.data.message),setTimeout((function(){return c(null)}),2500)}))},f=function(e){l(k(k({},i),{},x({},e.target.name,e.target.value)))};return a.createElement("div",{className:"form_wrap"},a.createElement("form",{className:"form",onSubmit:function(e){return s(e)}},a.createElement("h2",{className:"form_head"},"Create contact"),a.createElement(P,{error:o}),a.createElement("label",{className:"label_form",htmlFor:"name"},a.createElement("span",{className:"label_name"},"Name:"),a.createElement("input",{required:!0,onChange:function(e){return f(e)},type:"text",name:"name",id:"name",value:i.name,placeholder:"Enter name",className:"search_input"})),a.createElement("label",{className:"label_form",htmlFor:"phone"},a.createElement("span",{className:"label_phone"},"Phone:"),a.createElement("input",{required:!0,onChange:function(e){return f(e)},type:"text",name:"phone",id:"phone",value:i.phone,placeholder:"Enter phone +380...",className:"search_input"})),a.createElement("button",{className:"button_submit",type:"submit"},"Create Contact")))};D.propTypes={setContacts:u().func},D.defaultProps={setContacts:function(){}};const M=D;function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const q=function(){var e=F((0,a.useState)([]),2),t=e[0],n=e[1],r=F((0,a.useState)([]),2),o=r[0],c=r[1],u=F((0,a.useState)(""),2),i=u[0],l=u[1];return(0,a.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));c(e)}),[t,i]),(0,a.useEffect)((function(){d.get().then((function(e){return e.json()})).then((function(e){n(e.contacts)}))}),[]),a.createElement("div",{className:"wrapper"},a.createElement("header",{className:"header"},a.createElement("h1",{className:"heading"},"Phone Book")),a.createElement("aside",{className:"aside"},a.createElement(M,{setContacts:n}),a.createElement("div",{className:"search"},a.createElement("input",{className:"search_input",placeholder:"Search by name",onChange:function(e){return function(e){l(e.target.value)}(e)}}))),a.createElement("main",{className:"main"},a.createElement("div",{className:"main_content"},a.createElement("ul",{className:"main_content_wrap"},null==o?void 0:o.map((function(e){return a.createElement("li",{className:"card_item",key:e._id},a.createElement(S,{item:e,cards:t,setContacts:n}))}))))))};o.render(a.createElement(q,null),document.getElementById("root"))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var c=1/0;for(l=0;l<e.length;l++){for(var[n,a,o]=e[l],u=!0,i=0;i<n.length;i++)(!1&o||c>=o)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(u=!1,o<c&&(c=o));u&&(e.splice(l--,1),t=a())}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.p="/",(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[c,u,i]=n,l=0;for(a in u)r.o(u,a)&&(r.m[a]=u[a]);for(i&&i(r),t&&t(n);l<c.length;l++)o=c[l],r.o(e,o)&&e[o]&&e[o][0](),e[c[l]]=0;r.O()},n=self.webpackChunkphone_book=self.webpackChunkphone_book||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[30],(()=>r(845)));a=r.O(a)})();