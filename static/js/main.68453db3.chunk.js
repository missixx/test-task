(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c.n(i),s=c(13),a=c.n(s),r=c(19),o=c(4),d=c(10),l=(c(28),c(29),c(30),c(0));var u=Object(o.b)((function(e){return{state:e}}),(function(e){return{onChangingInput:function(t){return e({type:"CHANGING_INPUT",payload:{value:t}})}}}))((function(e){var t=n.a.createRef();return Object(l.jsx)("div",{className:"infoBar",children:Object(l.jsxs)("div",{className:"infoBar__inner",children:[Object(l.jsx)("div",{className:"logo-block",children:Object(l.jsx)(d.b,{to:"/",children:Object(l.jsx)("div",{className:"logo"})})}),Object(l.jsxs)("div",{className:"info",children:[Object(l.jsx)("div",{className:"info__item",children:Object(l.jsx)("div",{className:"info__name",children:Object(l.jsx)(d.b,{to:"/",children:"SHOP"})})}),Object(l.jsx)("div",{className:"info__item",children:Object(l.jsx)("div",{className:"info__name",children:Object(l.jsx)(d.b,{to:"/ourstory",children:"OUR STORY"})})}),Object(l.jsx)("div",{className:"info__item",children:Object(l.jsx)("div",{className:"info__name",children:Object(l.jsx)(d.b,{to:"/contacts",children:"CONTACT"})})})]}),Object(l.jsx)("div",{className:"searching",children:Object(l.jsx)("input",{type:"search",className:"searching__input",ref:t,onChange:function(){e.onChangingInput(t.current.value)}})}),Object(l.jsx)("div",{className:"login",children:Object(l.jsx)("div",{className:"login__btn",children:"Login"})}),Object(l.jsxs)("div",{className:"busket",children:[Object(l.jsxs)(d.b,{to:"/busket",children:[" ",Object(l.jsx)("div",{className:"busket__img"})]}),Object(l.jsx)("div",{className:e.state.busketItems.length>0?"busket__counter":"busket__counter--none",children:e.state.busketItems.length})]})]})})}));function m(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)(u,{})})}var j=c(2);function b(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"CONTACTS PAGE"})})}c(34),c(35);var h=Object(o.b)((function(e){return{}}),(function(e){return{onAddToBusket:function(t){return e({type:"ADD_TO_BUSKET",payload:{item:t}})},onChangingCheckedStatus:function(t){return e({type:"CHANGE_CHECKED_STATUS",payload:{id:t}})}}}))((function(e){var t=function(){e.onAddToBusket(e.item),e.onChangingCheckedStatus(e.item.id)};return Object(l.jsxs)("div",{className:"item",children:[Object(l.jsx)("div",{className:"item__img",style:{backgroundImage:"url(".concat(e.item.img,")")}}),Object(l.jsxs)("div",{className:"item__info",children:[Object(l.jsxs)("div",{className:"item-name",children:[e.item.name," "]}),Object(l.jsx)("div",{className:"item-description",children:e.item.description})]}),e.item.checked?Object(l.jsx)("button",{className:"buy-btn--checked",onClick:t,children:"Added to busket"}):Object(l.jsxs)("button",{className:"buy-btn",onClick:t,children:["SHOP $",e.item.price]})]})}));c(36);var O=Object(o.b)((function(e){return{state:e}}),(function(e){return{onChangeSelectByCategory:function(t){return e({type:"CHANGING_SELECT_BY_CATEGORY",payload:{value:t}})},onChangeSelectSort:function(t){return e({type:"CHANGING_SELECT_SORT",payload:{value:t}})}}}))((function(e){var t=n.a.createRef(),c=n.a.createRef();return Object(l.jsx)("div",{className:"filters-bar",children:Object(l.jsxs)("div",{className:"filters-bar__inner",children:[Object(l.jsx)("div",{className:"shopAll",children:"Shop All"}),Object(l.jsx)("div",{className:"items",children:"100 items"}),Object(l.jsxs)("div",{className:"filters",children:[Object(l.jsxs)("div",{className:"filters__category",children:[Object(l.jsx)("div",{className:"filters__name",children:"Categories:"}),Object(l.jsx)("form",{children:Object(l.jsxs)("select",{value:e.state.selectedByCategoryValue,className:"filters__button",ref:t,onChange:function(){e.onChangeSelectByCategory(t.current.value)},children:[Object(l.jsx)("option",{value:"",children:" All"}),Object(l.jsx)("option",{value:"Creams",children:"Creams"}),Object(l.jsx)("option",{value:"Sprays",children:"Sprays"}),Object(l.jsx)("option",{value:"Brushes",children:"Brushes"}),Object(l.jsx)("option",{value:"Lipsticks",children:"Lipsticks"})]})})]}),Object(l.jsxs)("div",{className:"filters__category",children:[Object(l.jsx)("div",{className:"filters__name",children:"Sort by:"}),Object(l.jsx)("form",{children:Object(l.jsxs)("select",{className:"filters__button",ref:c,onChange:function(){e.onChangeSelectSort(c.current.value)},children:[Object(l.jsx)("option",{value:"NEWEST",children:"NEWEST"}),Object(l.jsx)("option",{value:"OLDEST",children:"OLDEST"}),Object(l.jsx)("option",{value:"LOW-PRICE",children:"BY PRICE(LOW)"}),Object(l.jsx)("option",{value:"HIGH-PRICE",children:"BY PRICE(HIGH)"})]})})]})]})]})})}));var p=Object(o.b)((function(e){return{items:function(e,t){switch(t.selectSortValue){case"OLDEST":var c=e.slice();return c.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),c;case"NEWEST":var i=e.slice();return i.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),i;case"LOW-PRICE":var n=e.slice();return n.sort((function(e,t){return new Date(e.price)-new Date(t.price)})),n;case"HIGH-PRICE":var s=e.slice();return s.sort((function(e,t){return new Date(t.price)-new Date(e.price)})),s;default:return e}}(e.items.filter((function(t){return t.category.includes(e.selectedByCategoryValue)})).filter((function(t){return t.name.toUpperCase().includes(e.searchInputValue.toUpperCase())})),e)}}),null)((function(e){var t=e.items.map((function(e){return Object(l.jsx)(h,{item:e},e.id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{}),Object(l.jsxs)("div",{className:"items-container",children:[" ",t]})]})}));function v(){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"OUR STORY PAGE"})})}c(37);var f=Object(o.b)((function(e){return{}}),(function(e){return{onOpenModal:function(t){return e({type:"OPEN_MODAL",payload:{item:t}})},onItemCountIncrem:function(t){return e({type:"ITEM_COUNT_INCREMENT",payload:{item:t}})},onItemCountDecrem:function(t){return e({type:"ITEM_COUNT_DECREMENT",payload:{item:t}})}}}))((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"busket-item",children:[Object(l.jsx)("div",{className:"busket-item__img",style:{backgroundImage:"url(".concat(e.item.img,")")}}),Object(l.jsxs)("div",{className:"busket-item__info",children:[Object(l.jsx)("div",{className:"busket-item__name",children:e.item.name}),Object(l.jsx)("div",{className:"busket-item__descr",children:e.item.description})]}),Object(l.jsxs)("div",{className:"busket-item__calc-block",children:[Object(l.jsx)("span",{onClick:function(){e.onItemCountDecrem(e.item)},className:"busket-item__minus",children:"-"}),Object(l.jsx)("span",{children:e.item.itemsCount}),Object(l.jsx)("span",{onClick:function(){e.onItemCountIncrem(e.item)},className:"busket-item__plus",children:"+"})]}),Object(l.jsx)("span",{children:"x"}),Object(l.jsxs)("div",{className:"busket-item__price",children:[e.item.price,"$"]}),Object(l.jsx)("div",{className:"busket-item__result",children:Object(l.jsxs)("span",{children:["amount: ",e.item.itemsCount*e.item.price,"$"]})}),Object(l.jsx)("div",{className:"busket-item__delete-block",onClick:function(){e.onOpenModal(e.item)},children:"X"})]}),Object(l.jsx)("hr",{})]})}));var g=Object(o.b)((function(e){return{busketItems:e.busketItems}}),(function(e){return{}}))((function(e){var t=e.busketItems.map((function(e){return Object(l.jsx)(f,{item:e},e.id)})),c=e.busketItems.reduce((function(e,t){return+e+t.itemsCount*t.price}),[]);return Object(l.jsxs)("div",{children:[t,0===e.busketItems.length?Object(l.jsx)("h2",{children:"BUSKET IS EMPTY..."}):Object(l.jsxs)("h2",{children:["TOTAL AMOUNT: ",c]})]})}));function x(){return Object(l.jsx)("h1",{children:"Error 404. Page not found."})}function _(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",children:Object(l.jsx)(p,{})}),Object(l.jsx)(j.a,{path:"/ourstory",children:Object(l.jsx)(v,{})}),Object(l.jsx)(j.a,{path:"/contacts",children:Object(l.jsx)(b,{})}),Object(l.jsx)(j.a,{path:"/busket",children:Object(l.jsx)(g,{})}),Object(l.jsx)(j.a,{children:Object(l.jsx)(x,{})})]})})}c(38);var C=Object(o.b)((function(e){return{modal:e.modal}}),(function(e){return{onDelFromBusket:function(t){return e({type:"DELETE_FROM_BUSKET",payload:{item:t}})},onChangingCheckedStatus:function(t){return e({type:"CHANGE_CHECKED_STATUS",payload:{id:t}})},onCloseModal:function(){return e({type:"CLOSE_MODAL"})}}}))((function(e){return Object(l.jsx)("div",{className:e.modal.isActive?"modal":"modal--none",children:Object(l.jsxs)("div",{className:"modal-inner",children:[Object(l.jsx)("div",{className:"modal__background"}),Object(l.jsxs)("div",{className:"modal__window",children:[Object(l.jsx)("div",{className:"modal__close",onClick:e.onCloseModal,children:"X"}),Object(l.jsx)("div",{className:"modal__wrapper",children:Object(l.jsx)("div",{className:"modal__text",children:"Are you sure?"})}),Object(l.jsx)("div",{className:"modal__wrapper",children:Object(l.jsxs)("div",{className:"modal__buttons",children:[Object(l.jsx)("button",{onClick:function(){e.onDelFromBusket(e.modal.item),e.onChangingCheckedStatus(e.modal.item.id),e.onCloseModal()},children:"OK"}),Object(l.jsx)("button",{onClick:e.onCloseModal,children:"CANCEL"})]})})]})]})})}));c(39),c(40);function y(e){return Object(l.jsx)("div",{className:"app",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(m,{}),Object(l.jsx)(_,{}),Object(l.jsx)(C,{})]})})}var N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),s(e),a(e)}))},k=c(9),E=[{id:1,date:"2012-01-26T13:51:50.417-07:00",category:"Creams",img:"https://i.ibb.co/vxFnDJz/cream-img.png",name:"Body Cream",description:"Daily Oil Wash",price:30,checked:!1},{id:2,date:"2013-01-26T13:51:50.417-07:00",category:"Sprays",img:"https://i.ibb.co/8cYMYHm/spray-img.png",name:"Face Spray",description:"Eye and Lip Cream",price:25,checked:!1},{id:3,date:"2012-05-26T13:51:50.417-07:00",category:"Brushes",img:"https://i.ibb.co/b6f0XFB/brush-img.png",name:"Tooth Brush",description:"Oil serum",price:15,checked:!1},{id:4,date:"2012-01-26T13:55:50.417-07:00",category:"Lipsticks",img:"https://i.ibb.co/J3sjwLQ/lipstick-img.png",name:"Classic Lipstick",description:"Hydrating Skin",price:43,checked:!1},{id:5,date:"2015-01-26T13:51:50.417-07:00",category:"Creams",img:"https://i.ibb.co/vxFnDJz/cream-img.png",name:"Body Cream",description:"Daily Oil Wash",price:54,checked:!1},{id:6,date:"2010-01-26T13:51:50.417-07:00",category:"Sprays",img:"https://i.ibb.co/8cYMYHm/spray-img.png",name:"Face Spray",description:"Eye and Lip Cream",price:80,checked:!1},{id:7,date:"2012-09-26T13:51:50.417-07:00",category:"Brushes",img:"https://i.ibb.co/b6f0XFB/brush-img.png",name:"Tooth Brush",description:"Oil serum",price:36,checked:!1},{id:8,date:"2020-01-26T13:51:50.417-07:00",category:"Lipsticks",img:"https://i.ibb.co/J3sjwLQ/lipstick-img.png",name:"Classic Lipstick",description:"Hydrating Skin",price:10,checked:!1},{id:9,date:"2009-01-26T13:51:50.417-07:00",category:"Creams",img:"https://i.ibb.co/vxFnDJz/cream-img.png",name:"Body Cream",description:"Daily Oil Wash",price:87,checked:!1},{id:10,date:"2007-01-26T13:51:50.417-07:00",category:"Sprays",img:"https://i.ibb.co/8cYMYHm/spray-img.png",name:"Face Spray",description:"Eye and Lip Cream",price:56,checked:!1},{id:11,date:"1992-04-23T13:51:50.417-07:00",category:"Brushes",img:"https://i.ibb.co/b6f0XFB/brush-img.png",name:"Tooth Brush",description:"Oil serum",price:87,checked:!1},{id:12,date:"2021-01-26T13:51:50.417-07:00",category:"Lipsticks",img:"https://i.ibb.co/J3sjwLQ/lipstick-img.png",name:"Classic Lipstick",description:"Hydrating Skin",price:94,checked:!1},{id:13,date:"2012-01-26T13:34:50.417-07:00",category:"Creams",img:"https://i.ibb.co/vxFnDJz/cream-img.png",name:"Body Cream",description:"Daily Oil Wash",price:56,checked:!1}];var T="NEWEST";var S=c(20),I=[];var D={isActive:!1};var A=Object(r.a)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CHECKED_STATUS":var c=e.map((function(e){return e.id===t.payload.id?Object(k.a)(Object(k.a)({},e),{},{checked:!e.checked}):Object(k.a)({},e)}));return c;default:return e}},searchInputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGING_INPUT":return t.payload.value;default:return e}},selectedByCategoryValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGING_SELECT_BY_CATEGORY":return t.payload.value;default:return e}},selectSortValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGING_SELECT_SORT":return t.payload.value;default:return e}},busketItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_BUSKET":if(t.payload.item.checked){var c=e.filter((function(e){return e.id!==t.payload.item.id}));return c}return[].concat(Object(S.a)(e),[Object(k.a)(Object(k.a)({},t.payload.item),{},{itemsCount:1})]);case"DELETE_FROM_BUSKET":var i=e.filter((function(e){return e.id!==t.payload.item.id}));return i;case"ITEM_COUNT_INCREMENT":var n=e.map((function(e){return e.id===t.payload.item.id?Object(k.a)(Object(k.a)({},e),{},{itemsCount:e.itemsCount+1}):e}));return n;case"ITEM_COUNT_DECREMENT":var s=e.map((function(e){return e.id===t.payload.item.id&&e.itemsCount>1?Object(k.a)(Object(k.a)({},e),{},{itemsCount:e.itemsCount-1}):e}));return s;default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLOSE_MODAL":return{isActive:!1};case"OPEN_MODAL":return{isActive:!0,item:t.payload.item};default:return e}}}),B=Object(r.b)(A);a.a.render(Object(l.jsx)(o.a,{store:B,children:Object(l.jsx)(d.a,{children:Object(l.jsx)(y,{})})}),document.getElementById("root")),N()}},[[41,1,2]]]);
//# sourceMappingURL=main.68453db3.chunk.js.map