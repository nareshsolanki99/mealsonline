(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1UcF1",summary:"CartItem_summary__c5CDQ",price:"CartItem_price__1C0mB",amount:"CartItem_amount__2Zu7n",actions:"CartItem_actions__27Oi8"}},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(3),i=n.n(c),r=(n(14),n(5)),a=n(1),s=n.n(a),o=n.p+"static/media/meals.2971f633.jpg",d=(n(15),n(0)),l=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=(n(17),s.a.createContext({items:[],totalAmount:0,addItem:function(e){},delItem:function(e){}}));var j=function(e){var t=Object(a.useContext)(u);console.log(t.items);var n=t.items.reduce((function(e,t){return e+t.amount}),0);return Object(d.jsxs)("button",{onClick:e.showCart,className:"button",children:[Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)(l,{})}),Object(d.jsx)("span",{children:"Your cart"}),Object(d.jsx)("span",{className:"badge",children:n})]})};var m=function(e){return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:"Meals Online"}),Object(d.jsx)(j,{showCart:e.onShowCart})]}),Object(d.jsx)("div",{className:"main-image",children:Object(d.jsx)("img",{src:o,alt:"A table full of food"})})]})},b=(n(18),function(e){return Object(d.jsx)("div",{className:"card",children:e.children})}),h=(n(19),n(6)),O=(n(20),s.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:"input",children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(h.a)({ref:t},e.input))]})}))),x=(n(21),function(e){var t=Object(a.useRef)();return Object(d.jsxs)("form",{className:"form",onSubmit:function(n){n.preventDefault();var c=t.current.value,i=+c;"0"===c.trim()||i<1||i>5||(console.log("Eneterd Amount is"+i),e.onAddToCart(i))},children:[Object(d.jsx)(O,{ref:t,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:1,max:5,step:1,defaultValue:1}}),Object(d.jsx)("button",{children:"+ Add"})]})}),f=function(e){var t="Rs.".concat(e.price.toFixed(2)),n=Object(a.useContext)(u);return Object(d.jsxs)("li",{className:"meal",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:"description",children:e.description}),Object(d.jsx)("div",{className:"price",children:t})]}),Object(d.jsx)("div",{children:Object(d.jsx)(x,{onAddToCart:function(t){var c={id:e.id,name:e.name,price:e.price,amount:t};n.addItem(c)},id:e.id})})]})},p=(n(22),[{id:"m1",name:"Paneer Tikka Masala",description:"Cottage Cheese with spicy gravy",price:225},{id:"m2",name:"Paneer Butter Masala",description:"Cottage Cheese dipped in gravy with butter on top",price:250},{id:"m5",name:"Veg Kadhai",description:"Mixed vegetables with spicy gravy",price:180},{id:"m3",name:"Veg Biryani",description:"A Rice bowl with vegetables and whole spices",price:300},{id:"m4",name:"Butter Roti",description:"Tandoor Roti with butter on it",price:30}]),v=function(){var e=p.map((function(e){return Object(d.jsx)(f,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:"meals",children:Object(d.jsx)(b,{children:Object(d.jsx)("ul",{children:e})})})},C=(n(23),function(){return Object(d.jsxs)("section",{className:"summary",children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})}),g=function(){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(C,{}),Object(d.jsx)(v,{})]})},A=(n(24),n(25),function(e){return Object(d.jsx)("div",{onClick:e.hideCart,className:"backdrop"})}),N=function(e){return Object(d.jsx)("div",{className:"modal",children:Object(d.jsx)("div",{className:"content",children:e.children})})},y=document.getElementById("overlay"),w=function(e){return Object(d.jsxs)(a.Fragment,{children:[i.a.createPortal(Object(d.jsx)(A,{hideCart:e.hideCart}),y),i.a.createPortal(Object(d.jsx)(N,{children:e.children}),y)]})},I=n(2),_=n.n(I),k=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:_.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:_.a.summary,children:[Object(d.jsx)("span",{className:_.a.price,children:t}),Object(d.jsxs)("span",{className:_.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:_.a.action,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},D=function(e){var t=Object(a.useContext)(u),n=function(e){t.addItem(Object(h.a)(Object(h.a)({},e),{},{amount:1}))},c=function(e){t.delItem(e)},i=Object(d.jsx)("ul",{className:"cart-items",children:t.items.map((function(e){return Object(d.jsx)(k,{onAdd:n.bind(null,e),onRemove:c.bind(null,e.id),name:e.name,price:e.price,amount:e.amount},e.id)}))}),r=!0;return 0===t.items.length&&(r=!1),Object(d.jsxs)(w,{hideCart:e.onHideCart,children:[i,Object(d.jsxs)("div",{className:"total",children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:t.totalAmount.toFixed(2)})]}),Object(d.jsxs)("div",{className:"actions",children:[Object(d.jsx)("button",{onClick:e.onHideCart,className:"button--alt",children:"Close"}),r&&Object(d.jsx)("button",{onClick:function(){e.orderStatus(!0),e.onHideCart()},children:"Order"})]})]})},R=n(9),F={items:[],totalAmount:0},H=function(e,t){if("ADD"===t.type){var n=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c],r=Object(R.a)(e.items);if(i){var a=r[c].amount+t.item.amount;r[c].amount=a}else r=e.items.concat(t.item);return{items:r,totalAmount:n}}if("DEL"===t.type){var s=e.items.findIndex((function(e){return e.id===t.id})),o=e.items[s],d=e.totalAmount-o.price,l=Object(R.a)(e.items);if(1===o.amount)l=e.items.filter((function(e){return e.id!==t.id}));else{var u=o.amount-1;l[s].amount=u}return{items:l,totalAmount:d}}return F},S=function(e){var t=Object(a.useReducer)(H,F),n=Object(r.a)(t,2),c=n[0],i=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){i({type:"ADD",item:e})},delItem:function(e){i({type:"DEL",id:e})},clearCart:function(){i({type:"CLEAR"})}};return Object(d.jsx)(u.Provider,{value:s,children:e.children})},B=function(e){var t=Object(a.useContext)(u);return Object(d.jsxs)(w,{children:[" ",Object(d.jsx)("div",{children:"Thank You! Your order has been placed successfully"}),Object(d.jsx)("button",{onClick:function(){e.orderStatus(!1),t.clearCart()},children:"Close"})]})};var M=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(r.a)(i,2),o=s[0],l=s[1],u=function(){c(!1)};return Object(d.jsxs)(S,{children:[n&&Object(d.jsx)(D,{orderStatus:l,onHideCart:u}),Object(d.jsx)(m,{onShowCart:function(){c(!0)}}),o&&Object(d.jsx)(B,{orderStatus:l,onhideCart:u}),Object(d.jsx)("main",{children:Object(d.jsx)(g,{})})]})};i.a.render(Object(d.jsx)(M,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.1169c71c.chunk.js.map