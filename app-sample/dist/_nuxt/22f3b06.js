(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{404:function(t,e,r){"use strict";r(11),r(21),r(23),r(24);var n=r(3),o=(r(59),r(18),r(33),r(60),r(248),r(13),r(40),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(44),r(66),r(15),r(69),r(400),r(0)),c=r(176),l=r(5);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],m=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(m),offset:Object.keys(y),order:Object.keys(j)};function h(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var n=r[t],o=h(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},405:function(t,e,r){"use strict";r(21),r(18),r(69),r(31),r(262),r(400),r(76),r(70);var n=r(0);var o,c=r(176);e.a=(o="container",n.default.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var c=data.attrs;if(c){data.attrs={};var l=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,o=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),o)}})},488:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{cards:[{title:"A",text:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:6},{title:"B",text:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6}]}}},o=r(83),c=r(175),l=r.n(c),f=r(401),d=r(404),v=r(405),m=r(247),y=r(483),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},t._l(t.cards,(function(e){return r("div",{directives:[{name:"for",rawName:"v-for",value:e in t.cards,expression:"card in cards"}],key:e.title},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"800"}},[r("h3",[t._v(" "+t._s(e.title)+" ")]),t._v(" "),r("v-row",{attrs:{dense:""}},[r("v-col",{attrs:{cols:"6"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}})],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("p",[t._v(" "+t._s(e.text)+" ")])])],1)],1)],1)})),0)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:f.a,VCol:d.a,VContainer:v.a,VImg:m.a,VRow:y.a})}}]);