(window.webpackJsonp=window.webpackJsonp||[]).push([[28,17,18,19],{398:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return f}));var n=r(401),c=r(5),o=Object(c.f)("v-card__actions"),l=Object(c.f)("v-card__subtitle"),d=Object(c.f)("v-card__text"),f=Object(c.f)("v-card__title");n.a},404:function(t,e,r){"use strict";r(11),r(21),r(23),r(24);var n=r(3),c=(r(59),r(18),r(33),r(60),r(248),r(13),r(40),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(44),r(66),r(15),r(69),r(400),r(0)),o=r(176),l=r(5);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),j=v.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),h=v.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(j),order:Object.keys(h)};function x(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var O=new Map;e.a=c.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},j),{},{order:{type:[String,Number],default:null}},h),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=O.get(l);return f||function(){var t,e;for(e in f=[],y)y[e].forEach((function(t){var n=r[t],c=x(e,t,n);c&&f.push(c)}));var c=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),O.set(l,f)}(),t(r.tag,Object(o.a)(data,{class:f}),c)}})},405:function(t,e,r){"use strict";r(21),r(18),r(69),r(31),r(262),r(400),r(76),r(70);var n=r(0);var c,o=r(176);e.a=(c="container",n.default.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var l=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},435:function(t,e,r){"use strict";r.r(e);var n={},c=r(83),o=r(175),l=r.n(o),d=r(398),f=r(247),v=r(483),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-img",{staticClass:"white--text align-center",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[r("v-row",{attrs:{justify:"center"}},[r("v-card-title",[t._v("hello world")])],1),t._v(" "),r("v-row",{attrs:{justify:"center"}},[r("p",[t._v("Enjoy Nuxt !!!")])])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCardTitle:d.d,VImg:f.a,VRow:v.a})},436:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{cards:[{title:"A",text:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:6},{title:"B",text:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6}]}}},c=r(83),o=r(175),l=r.n(o),d=r(401),f=r(404),v=r(405),m=r(247),j=r(483),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},t._l(t.cards,(function(e){return r("div",{directives:[{name:"for",rawName:"v-for",value:e in t.cards,expression:"card in cards"}],key:e.title},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800"}},[r("h3",[t._v(" "+t._s(e.title)+" ")]),t._v(" "),r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"6"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("p",[t._v(" "+t._s(e.text)+" ")])])],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCol:f.a,VContainer:v.a,VImg:m.a,VRow:j.a})},437:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{cards:[{title:"A",text:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:6},{title:"B",text:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"C",text:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:6},{title:"D",text:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6}]}}},c=r(83),o=r(175),l=r.n(o),d=r(401),f=r(398),v=r(404),m=r(405),j=r(247),h=r(483),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return r("v-col",{key:e.title,attrs:{cols:e.flex}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("h3",[t._v(" "+t._s(e.title)+" ")]),t._v(" "),r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(" "+t._s(e.text)+" ")])])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:f.c,VCol:v.a,VContainer:m.a,VImg:j.a,VRow:h.a})},494:function(t,e,r){"use strict";r.r(e);var n=r(83),c=r(175),o=r.n(c),l=r(404),d=r(405),f=r(483),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("ServiceImageText")],1)],1),t._v(" "),r("v-row",[r("h2",[t._v("Hello")])]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("ServiceCard1")],1)],1),t._v(" "),r("v-row",[r("h2",[t._v("World")])]),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("ServiceCard4")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{ServiceImageText:r(435).default,ServiceCard1:r(436).default,ServiceCard4:r(437).default}),o()(component,{VCol:l.a,VContainer:d.a,VRow:f.a})}}]);