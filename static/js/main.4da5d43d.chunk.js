(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{28:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),s=i(13),r=i.n(s),a=i(19),o=i(4),d=i(10),l=(i(28),i(29),i(30),i(31),i(0));var u=Object(o.b)((function(e){return{state:e}}),(function(e){return{onChangingInput:function(t){return e({type:"CHANGING_INPUT",payload:{value:t}})}}}))((function(e){var t=n.a.createRef();return Object(l.jsx)("div",{className:"infoBar",children:Object(l.jsxs)("div",{className:"infoBar__inner",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)(d.b,{to:"/main-page",children:Object(l.jsx)("div",{className:"logo__img"})})}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("div",{className:"info__item",children:Object(l.jsx)("div",{className:"info__name",children:Object(l.jsx)(d.b,{to:"/main-page",children:"SHOP"})})}),Object(l.jsx)("div",{className:"info__item",children:Object(l.jsx)("div",{className:"info__name",children:Object(l.jsx)(d.b,{to:"/ourstory",children:"OUR STORY"})})}),Object(l.jsx)("div",{className:"info__item",children:Object(l.jsx)("div",{className:"info__name",children:Object(l.jsx)(d.b,{to:"/contacts",children:"CONTACT"})})})]}),Object(l.jsx)("div",{className:"searching",children:Object(l.jsx)("input",{type:"search",className:"searching__input",ref:t,onChange:function(){e.onChangingInput(t.current.value)}})}),Object(l.jsx)("div",{className:"login",children:Object(l.jsx)("div",{className:"login__btn",children:"Login"})}),Object(l.jsxs)("div",{className:"busket",children:[Object(l.jsxs)(d.b,{to:"/busket",children:[" ",Object(l.jsx)("div",{className:"busket__img"})]}),Object(l.jsx)("div",{className:e.state.busketItems.length>0?"busket__counter":"busket__counter--none",children:e.state.busketItems.length})]})]})})}));function m(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)(u,{})})}var j=i(2);function b(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"CONTACTS PAGE"})})}i(35),i(36);var h=Object(o.b)((function(e){return{}}),(function(e){return{onAddToBusket:function(t){return e({type:"ADD_TO_BUSKET",payload:{item:t}})},onChangingCheckedStatus:function(t){return e({type:"CHANGE_CHECKED_STATUS",payload:{id:t}})}}}))((function(e){return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"item__img",style:{backgroundImage:"url(".concat(e.item.img,")")}}),Object(l.jsxs)("div",{className:"item__info",children:[Object(l.jsxs)("div",{className:"item-name",children:[e.item.name," "]}),Object(l.jsx)("div",{className:"item-description",children:e.item.description})]}),Object(l.jsxs)("button",{className:e.item.checked?"buy-btn--checked":"buy-btn",onClick:function(){e.onAddToBusket(e.item),e.onChangingCheckedStatus(e.item.id)},children:["SHOP $",e.item.price]})]})}));i(37);var p=Object(o.b)((function(e){return{state:e}}),(function(e){return{onChangeSelectByCategory:function(t){return e({type:"CHANGING_SELECT_BY_CATEGORY",payload:{value:t}})},onChangeSelectSort:function(t){return e({type:"CHANGING_SELECT_SORT",payload:{value:t}})}}}))((function(e){var t=n.a.createRef(),i=n.a.createRef();return Object(l.jsx)("div",{className:"filters-bar",children:Object(l.jsxs)("div",{className:"filters-bar__inner",children:[Object(l.jsx)("div",{className:"shopAll",children:Object(l.jsx)("div",{className:"shopAll__name",children:"Shop All"})}),Object(l.jsx)("div",{className:"items",children:Object(l.jsx)("div",{className:"items__name",children:"100 items"})}),Object(l.jsxs)("div",{className:"filters",children:[Object(l.jsxs)("div",{className:"filters__category",children:[Object(l.jsx)("div",{className:"filters__name",children:"Categories:"}),Object(l.jsx)("form",{children:Object(l.jsxs)("select",{className:"filters__button",ref:t,onChange:function(){e.onChangeSelectByCategory(t.current.value)},children:[Object(l.jsx)("option",{value:"",children:" All"}),Object(l.jsx)("option",{value:"Creams",children:"Creams"}),Object(l.jsx)("option",{value:"Sprays",children:"Sprays"}),Object(l.jsx)("option",{value:"Brushes",children:"Brushes"}),Object(l.jsx)("option",{value:"Lipsticks",children:"Lipsticks"})]})})]}),Object(l.jsxs)("div",{className:"filters__sortBy",children:[Object(l.jsx)("div",{className:"filters__name",children:"Sort by:"}),Object(l.jsx)("form",{children:Object(l.jsxs)("select",{className:"filters__button",ref:i,onChange:function(){e.onChangeSelectSort(i.current.value)},children:[Object(l.jsx)("option",{value:"NEWEST",children:"NEWEST"}),Object(l.jsx)("option",{value:"OLDEST",children:"OLDEST"}),Object(l.jsx)("option",{value:"LOW-PRICE",children:"BY PRICE(LOW)"}),Object(l.jsx)("option",{value:"HIGH-PRICE",children:"BY PRICE(HIGH)"})]})})]})]})]})})}));var O=Object(o.b)((function(e){return{items:function(e,t){switch(t.selectSortValue){case"OLDEST":var i=e.slice();return i.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),i;case"NEWEST":var c=e.slice();return c.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),c;case"LOW-PRICE":var n=e.slice();return n.sort((function(e,t){return new Date(e.price)-new Date(t.price)})),n;case"HIGH-PRICE":var s=e.slice();return s.sort((function(e,t){return new Date(t.price)-new Date(e.price)})),s;default:return e}}(e.items.filter((function(t){return t.category.includes(e.selectedByCategoryValue)})).filter((function(t){return t.name.toUpperCase().includes(e.searchInputValue.toUpperCase())})),e)}}),null)((function(e){var t=e.items.map((function(e){return Object(l.jsx)(h,{item:e},e.id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(p,{}),Object(l.jsxs)("div",{className:"items-container",children:[" ",t]})]})}));function g(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"OUR STORY PAGE"})})}i(38);var f=Object(o.b)((function(e){return{}}),(function(e){return{onDelFromBusket:function(t){return e({type:"DELETE_FROM_BUSKET",payload:{item:t}})},onChangingCheckedStatus:function(t){return e({type:"CHANGE_CHECKED_STATUS",payload:{id:t}})},onItemCountIncrem:function(t){return e({type:"ITEM_COUNT_INCREMENT",payload:{item:t}})},onItemCountDecrem:function(t){return e({type:"ITEM_COUNT_DECREMENT",payload:{item:t}})}}}))((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"busket-item-block",children:[Object(l.jsx)("div",{className:"busket-item__img",style:{backgroundImage:"url(".concat(e.item.img,")")}}),Object(l.jsxs)("div",{className:"busket-item__info",children:[Object(l.jsx)("div",{className:"busket-item__name",children:e.item.name}),Object(l.jsx)("div",{className:"busket-item__descr",children:e.item.description})]}),Object(l.jsxs)("div",{className:"busket-item__calc-block",children:[Object(l.jsx)("span",{onClick:function(){e.onItemCountDecrem(e.item)},className:"busket-item__minus",children:"-"}),Object(l.jsx)("span",{children:e.item.itemsCount}),Object(l.jsx)("span",{onClick:function(){e.onItemCountIncrem(e.item)},className:"busket-item__plus",children:"+"})]}),Object(l.jsx)("span",{children:"x"}),Object(l.jsxs)("div",{className:"busket-item__price",children:[e.item.price,"$"]}),Object(l.jsx)("div",{className:"busket-item__result",children:Object(l.jsxs)("span",{children:["amount: ",e.item.itemsCount*e.item.price,"$"]})}),Object(l.jsx)("div",{className:"busket-item__delete",children:Object(l.jsx)("span",{onClick:function(){e.onDelFromBusket(e.item),e.onChangingCheckedStatus(e.item.id)},children:"X"})})]}),Object(l.jsx)("hr",{})]})}));var v=Object(o.b)((function(e){return{busketItems:e.busketItems}}),(function(e){return{}}))((function(e){var t=e.busketItems.map((function(e){return Object(l.jsx)(f,{item:e},e.id)})),i=e.busketItems.reduce((function(e,t){return+e+t.itemsCount*t.price}),[]);return Object(l.jsxs)("div",{children:[t,0===e.busketItems.length?Object(l.jsx)("h2",{children:"BUSKET IS EMPTY..."}):Object(l.jsxs)("h2",{children:["TOTAL AMOUNT: ",i]})]})}));function x(){return Object(l.jsx)("h1",{children:"Error 404. Page not found."})}function _(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/main-page",children:Object(l.jsx)(O,{})}),Object(l.jsx)(j.a,{path:"/ourstory",children:Object(l.jsx)(g,{})}),Object(l.jsx)(j.a,{path:"/contacts",children:Object(l.jsx)(b,{})}),Object(l.jsx)(j.a,{path:"/busket",children:Object(l.jsx)(v,{})}),Object(l.jsx)(j.a,{children:Object(l.jsx)(x,{})})]})})}function C(e){return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(m,{}),Object(l.jsx)(_,{})]})})}var y=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,40)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),c(e),n(e),s(e),r(e)}))},N=i(9),k=[{id:1,date:"2012-01-26T13:51:50.417-07:00",category:"Creams",img:"https://i.ibb.co/vxFnDJz/cream-img.png",name:"Body Cream",description:"Daily Oil Wash",price:30,checked:!1},{id:2,date:"2013-01-26T13:51:50.417-07:00",category:"Sprays",img:"https://i.ibb.co/8cYMYHm/spray-img.png",name:"Face Spray",description:"Eye and Lip Cream",price:25,checked:!1},{id:3,date:"2012-05-26T13:51:50.417-07:00",category:"Brushes",img:"https://i.ibb.co/b6f0XFB/brush-img.png",name:"Tooth Brush",description:"Oil serum",price:15,checked:!1},{id:4,date:"2012-01-26T13:55:50.417-07:00",category:"Lipsticks",img:"https://i.ibb.co/J3sjwLQ/lipstick-img.png",name:"Classic Lipstick",description:"Hydrating Skin",price:43,checked:!1},{id:5,date:"2015-01-26T13:51:50.417-07:00",category:"Creams",img:"https://i.ibb.co/vxFnDJz/cream-img.png",name:"Body Cream",description:"Daily Oil Wash",price:54,checked:!1},{id:6,date:"2010-01-26T13:51:50.417-07:00",category:"Sprays",img:"https://i.ibb.co/8cYMYHm/spray-img.png",name:"Face Spray",description:"Eye and Lip Cream",price:80,checked:!1},{id:7,date:"2012-09-26T13:51:50.417-07:00",category:"Brushes",img:"https://i.ibb.co/b6f0XFB/brush-img.png",name:"Tooth Brush",description:"Oil serum",price:36,checked:!1},{id:8,date:"2020-01-26T13:51:50.417-07:00",category:"Lipsticks",img:"https://i.ibb.co/J3sjwLQ/lipstick-img.png",name:"Classic Lipstick",description:"Hydrating Skin",price:10,checked:!1},{id:9,date:"2009-01-26T13:51:50.417-07:00",category:"Creams",img:"https://i.ibb.co/vxFnDJz/cream-img.png",name:"Body Cream",description:"Daily Oil Wash",price:87,checked:!1},{id:10,date:"2007-01-26T13:51:50.417-07:00",category:"Sprays",img:"https://i.ibb.co/8cYMYHm/spray-img.png",name:"Face Spray",description:"Eye and Lip Cream",price:56,checked:!1},{id:11,date:"1992-04-23T13:51:50.417-07:00",category:"Brushes",img:"https://i.ibb.co/b6f0XFB/brush-img.png",name:"Tooth Brush",description:"Oil serum",price:87,checked:!1},{id:12,date:"2021-01-26T13:51:50.417-07:00",category:"Lipsticks",img:"https://i.ibb.co/J3sjwLQ/lipstick-img.png",name:"Classic Lipstick",description:"Hydrating Skin",price:94,checked:!1},{id:13,date:"2012-01-26T13:34:50.417-07:00",category:"Creams",img:"https://i.ibb.co/vxFnDJz/cream-img.png",name:"Body Cream",description:"Daily Oil Wash",price:56,checked:!1}];var T="NEWEST";var E=i(20),S=[];var I=Object(a.a)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CHECKED_STATUS":var i=e.map((function(e){return e.id===t.payload.id?Object(N.a)(Object(N.a)({},e),{},{checked:!e.checked}):Object(N.a)({},e)}));return i;default:return e}},searchInputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGING_INPUT":return t.payload.value;default:return e}},selectedByCategoryValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGING_SELECT_BY_CATEGORY":return t.payload.value;default:return e}},selectSortValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGING_SELECT_SORT":return t.payload.value;default:return e}},busketItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_BUSKET":if(t.payload.item.checked){var i=e.filter((function(e){return e.id!==t.payload.item.id}));return i}return[].concat(Object(E.a)(e),[Object(N.a)(Object(N.a)({},t.payload.item),{},{itemsCount:1})]);case"DELETE_FROM_BUSKET":var c=e.filter((function(e){return e.id!==t.payload.item.id}));return c;case"ITEM_COUNT_INCREMENT":var n=e.map((function(e){return e.id===t.payload.item.id?Object(N.a)(Object(N.a)({},e),{},{itemsCount:e.itemsCount+1}):e}));return n;case"ITEM_COUNT_DECREMENT":var s=e.map((function(e){return e.id===t.payload.item.id&&e.itemsCount>1?Object(N.a)(Object(N.a)({},e),{},{itemsCount:e.itemsCount-1}):e}));return s;default:return e}}}),B=Object(a.b)(I);r.a.render(Object(l.jsx)(o.a,{store:B,children:Object(l.jsx)(d.a,{children:Object(l.jsx)(C,{})})}),document.getElementById("root")),y()}},[[39,1,2]]]);
//# sourceMappingURL=main.4da5d43d.chunk.js.map