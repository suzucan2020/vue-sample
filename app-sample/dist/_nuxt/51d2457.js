(window.webpackJsonp=window.webpackJsonp||[]).push([[18,6,10],{384:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{colors:["green","secondary","yellow darken-4","red lighten-2","orange darken-1"],cycle:!1,slides:["First","Second","Third","Fourth","Fifth"]}}},c=r(82),o=r(173),l=r.n(o),v=r(376),d=r(461),f=r(462),m=r(236),h=r(399),_=r(388),y=r(400),C=r(409),x=r(372),V=r(401),j=r(87),w=r(453),O=r(451),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{elevation:"24","max-width":"444"}},[r("v-system-bar",{attrs:{"lights-out":""}}),t._v(" "),r("v-carousel",{attrs:{continuous:!1,cycle:t.cycle,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":"mdi-minus",height:"300"}},t._l(t.slides,(function(e,i){return r("v-carousel-item",{key:i},[r("v-sheet",{attrs:{color:t.colors[i],height:"100%",tile:""}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"text-h2"},[t._v("\n            "+t._s(e)+" Slide\n          ")])])],1)],1)})),1),t._v(" "),r("v-list",{attrs:{"two-line":""}},[r("v-list-item",[r("v-list-item-avatar",[r("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.png"}})],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",[t._v("John Leider")]),t._v(" "),r("v-list-item-subtitle",[t._v("Author")])],1),t._v(" "),r("v-list-item-action",[r("v-switch",{attrs:{label:"Cycle Slides",inset:""},model:{value:t.cycle,callback:function(e){t.cycle=e},expression:"cycle"}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VCarousel:d.a,VCarouselItem:f.a,VImg:m.a,VList:h.a,VListItem:_.a,VListItemAction:y.a,VListItemAvatar:C.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VRow:V.a,VSheet:j.a,VSwitch:w.a,VSystemBar:O.a})},385:function(t,e,r){"use strict";r.r(e);r(59);var n={data:function(){return{loading:!1,selection:1}},methods:{reserve:function(){var t=this;this.loading=!0,setTimeout((function(){return t.loading=!1}),2e3)}}},c=r(82),o=r(173),l=r.n(o),v=r(185),d=r(376),f=r(371),m=r(452),h=r(456),_=r(368),y=r(236),C=r(396),x=r(463),V=r(401),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto my-12",attrs:{loading:t.loading,"max-width":"374"}},[r("template",{slot:"progress"},[r("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),t._v(" "),r("v-img",{attrs:{height:"250",src:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}),t._v(" "),r("v-card-title",[t._v("Cafe Badilico")]),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[r("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),t._v(" "),r("div",{staticClass:"grey--text ms-4"},[t._v("\n        4.5 (413)\n      ")])],1),t._v(" "),r("div",{staticClass:"my-4 text-subtitle-1"},[t._v("\n      $ • Italian, Cafe\n    ")]),t._v(" "),r("div",[t._v("Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.")])],1),t._v(" "),r("v-divider",{staticClass:"mx-4"}),t._v(" "),r("v-card-title",[t._v("Tonight's availability")]),t._v(" "),r("v-card-text",[r("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[r("v-chip",[t._v("5:30PM")]),t._v(" "),r("v-chip",[t._v("7:30PM")]),t._v(" "),r("v-chip",[t._v("8:00PM")]),t._v(" "),r("v-chip",[t._v("9:00PM")])],1)],1),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:t.reserve}},[t._v("\n      Reserve\n    ")])],1)],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VChip:m.a,VChipGroup:h.a,VDivider:_.a,VImg:y.a,VProgressLinear:C.a,VRating:x.a,VRow:V.a})},386:function(t,e,r){"use strict";r.r(e);var n={},c=r(82),o=r(173),l=r.n(o),v=r(185),d=r(376),f=r(371),m=r(236),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},[r("v-card-title",[t._v("Top 10 Australian beaches")])],1),t._v(" "),r("v-card-subtitle",{staticClass:"pb-0"},[t._v("\n    Number 10\n  ")]),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v("Whitehaven Beach")]),t._v(" "),r("div",[t._v("Whitsunday Island, Whitsunday Islands")])]),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{color:"orange",text:""}},[t._v("\n      Share\n    ")]),t._v(" "),r("v-btn",{attrs:{color:"orange",text:""}},[t._v("\n      Explore\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VImg:m.a})},391:function(t,e,r){"use strict";r(12),r(21),r(23),r(24);var n=r(3),c=(r(57),r(20),r(33),r(58),r(237),r(17),r(43),r(238),r(239),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(47),r(63),r(16),r(68),r(374),r(0)),o=r(174),l=r(4);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],m=f.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=f.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),_=f.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(_)};function C(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var x=new Map;e.a=c.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var v in r)l+=String(r[v]);var d=x.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var n=r[t],c=C(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),x.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),c)}})},404:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:12},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6},{title:"Best airlines",src:"https://cdn.vuetifyjs.com/images/cards/plane.jpg",flex:6}]}}},c=r(82),o=r(173),l=r.n(o),v=r(367),d=r(185),f=r(376),m=r(371),h=r(391),_=r(410),y=r(166),C=r(236),x=r(401),V=r(369),j=r(451),w=r(167),O=r(90),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[r("v-system-bar",{attrs:{color:"indigo darken-2",dark:""}},[r("v-spacer"),t._v(" "),r("v-icon",[t._v("mdi-window-minimize")]),t._v(" "),r("v-icon",[t._v("mdi-window-maximize")]),t._v(" "),r("v-icon",[t._v("mdi-close")])],1),t._v(" "),r("v-toolbar",{attrs:{color:"indigo",dark:""}},[r("v-app-bar-nav-icon"),t._v(" "),r("v-toolbar-title",[t._v("Discover")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1)],1),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return r("v-col",{key:e.title,attrs:{cols:e.flex}},[r("v-card",[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[r("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-heart")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-bookmark")])],1),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBarNavIcon:v.a,VBtn:d.a,VCard:f.a,VCardActions:m.a,VCardTitle:m.d,VCol:h.a,VContainer:_.a,VIcon:y.a,VImg:C.a,VRow:x.a,VSpacer:V.a,VSystemBar:j.a,VToolbar:w.a,VToolbarTitle:O.b})},405:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{cards:[{title:"Pre-fab homes",src:"https://cdn.vuetifyjs.com/images/cards/house.jpg",flex:6},{title:"Favorite road trips",src:"https://cdn.vuetifyjs.com/images/cards/road.jpg",flex:6}]}}},c=r(82),o=r(173),l=r.n(o),v=r(376),d=r(371),f=r(391),m=r(236),h=r(401),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return r("v-col",{key:e.title,attrs:{cols:e.flex}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}}),t._v(" "),r("v-card-text",{staticClass:"text--primary"},[r("div",[t._v(" "+t._s(e.title)+" ")])])],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:v.a,VCardText:d.c,VCol:f.a,VImg:m.a,VRow:h.a})},410:function(t,e,r){"use strict";r(21),r(20),r(68),r(31),r(252),r(374),r(75),r(70);var n=r(0);var c,o=r(174);e.a=(c="container",n.default.extend({name:"v-".concat(c),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,e){var r=e.props,data=e.data,n=e.children;data.staticClass="".concat(c," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var l=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}));l.length&&(data.staticClass+=" ".concat(l.join(" ")))}return r.id&&(data.domProps=data.domProps||{},data.domProps.id=r.id),t(r.tag,data,n)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var r,n=e.props,data=e.data,c=e.children,l=data.attrs;return l&&(data.attrs={},r=Object.keys(l).filter((function(t){if("slot"===t)return!1;var e=l[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e}))),n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,Object(o.a)(data,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(r||[])}),c)}})},458:function(t,e,r){"use strict";r.r(e);var n=r(82),c=r(173),o=r.n(c),l=r(391),v=r(410),d=r(401),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("carousel")],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("card")],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("card2")],1),t._v(" "),r("v-col",{attrs:{cols:"6"}},[r("card3")],1)],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("card4")],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{Carousel:r(384).default,Card:r(385).default,Card2:r(386).default,Card3:r(404).default,Card4:r(405).default}),o()(component,{VCol:l.a,VContainer:v.a,VRow:d.a})}}]);