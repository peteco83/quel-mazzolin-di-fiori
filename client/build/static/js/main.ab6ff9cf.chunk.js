(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/pizza.287b4101.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/pasta.5c056c7e.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/focaccia.3744b6d6.jpg"},49:function(e,t,a){e.exports=a.p+"static/media/antipasti.95e03e48.jpg"},50:function(e,t,a){e.exports=a.p+"static/media/tiramisu.d84bb0ab.jpg"},52:function(e,t,a){e.exports=a(74)},54:function(e,t,a){},60:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=Object(n.createContext)(null),o=(a(54),a(5)),i=a(22),s=(a(60),a(28));function u(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],u=t[1],m=Object(n.useState)(!1),d=Object(c.a)(m,2),p=d[0],E=d[1],h=Object(n.useContext)(r),b=h.setCookies,g=h.cookies,f=h.client,v=(h.order,h.setClient,h.logout);Object(n.useEffect)((function(){localStorage.getItem("login")&&b(!0),O()}),[]);var j=function(){return u(!1)},O=function(){window.innerWidth<=960?E(!0):E(!1)};return window.addEventListener("resize",O),l.a.createElement("nav",null,l.a.createElement("div",{className:"main-logo"},l.a.createElement(o.b,{className:"logo-link",to:"/"},l.a.createElement("h1",{className:"logo"},"Quel Mazzolin di Fiori")),p?l.a.createElement(o.b,{className:"menu-icon",onClick:function(){u(!a)}},l.a.createElement(i.a,{className:a?"icon-rotate":"icon",icon:s.a})):null),l.a.createElement("div",{className:a?"nav-menu active":"nav-menu"},l.a.createElement("ul",{className:"nav__list"},g?l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/products",onClick:j},"Products")):null,g&&f&&"User"===f.role?l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/account",onClick:j},"Your Account")):null,g?l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/cart",onClick:j},"Your Cart")):null,g&&f&&"Admin"===f.role?l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/admin",onClick:j},"Admin")):null,g?null:l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/login",onClick:j},"Login")),g?null:l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",to:"/register",onClick:j},"Register")),g?l.a.createElement("li",null,l.a.createElement(o.b,{className:"link",onClick:function(){v(),j()},to:"/"},"Logout")):null)))}var m=a(15),d=(a(36),a(11)),p=a.n(d),E=a(76);function h(){var e=Object(n.useContext)(r),t=(e.client,e.setClient,e.cookies);return l.a.createElement("div",{className:"main-container"},t?l.a.createElement("div",{className:"home-main"},l.a.createElement(p.a,{top:!0},l.a.createElement("div",{className:"home-container"},l.a.createElement("h1",null,"Benvenuti in Italia"),l.a.createElement("h1",null,'Benvenuti al Ristorante "Quel Mazzolin di Fiori"')))):l.a.createElement("div",{className:"home-main"},l.a.createElement(p.a,{top:!0},l.a.createElement("div",{className:"home-container"},l.a.createElement("h1",null,"Benvenuti in Italia"),l.a.createElement("h1",null,'Benvenuti al Ristorante "Quel Mazzolin di Fiori"'),l.a.createElement("h2",null,"Please register or login to make your order")),l.a.createElement("div",{className:"btn-log-reg"},l.a.createElement(o.b,{className:"link",to:"/login"},l.a.createElement(E.a,{className:"buttons"},"Login")),l.a.createElement(o.b,{className:"link",to:"/register"},l.a.createElement(E.a,{className:"buttons"},"Sign Up "))))))}a(64),a(65);function b(){return l.a.createElement("div",{className:"contact-form"},l.a.createElement(p.a,{top:!0},l.a.createElement("div",{className:"login-form"},l.a.createElement("h1",null,"Contact us!!"),l.a.createElement("h4",null,"If you have any issue or any ",l.a.createElement("br",null),"question please send us an email"),l.a.createElement("form",{className:"login"},l.a.createElement("input",{type:"text",placeholder:"Your Name",name:"name"}),l.a.createElement("input",{type:"mail",placeholder:"Your Email",name:"email"}),l.a.createElement("textarea",{name:"message",placeholder:"Your Message",cols:"0",rows:"10"}),l.a.createElement("button",{type:"submit"},"Send")))))}function g(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"footer-content"},l.a.createElement("h2",{className:"logo"},"Quel Mazzolin di fiori"),l.a.createElement("h2",{className:"year"},"2020"))))}var f=a(77);a(66);function v(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement(f.a,{activeIndex:a,onSelect:function(e,t){r(e)},className:"carousel"},l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-90 slides",src:"https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg",alt:"First slide"}),l.a.createElement(f.a.Caption,null,l.a.createElement("h3",null,"First slide label"),l.a.createElement("p",null,"Nulla vitae elit libero, a pharetra augue mollis interdum."))),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-90 slides",src:"https://cdn.pixabay.com/photo/2015/04/08/13/14/food-712667_960_720.jpg",alt:"Second slide"}),l.a.createElement(f.a.Caption,null,l.a.createElement("h3",null,"Second slide label"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit."))),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-90 slides",src:"https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg",alt:"Third slide"}),l.a.createElement(f.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-90 slides",src:"https://cdn.pixabay.com/photo/2015/04/08/13/14/food-712667_960_720.jpg",alt:"Third slide"}),l.a.createElement(f.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))),l.a.createElement(f.a.Item,null,l.a.createElement("img",{className:"d-block w-90 slides",src:"https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg",alt:"Third slide"}),l.a.createElement(f.a.Caption,null,l.a.createElement("h3",null,"Third slide label"),l.a.createElement("p",null,"Praesent commodo cursus magna, vel scelerisque nisl consectetur."))))}a(70);function j(){return l.a.createElement("div",null,l.a.createElement(p.a,{top:!0},l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,"About us"),l.a.createElement("h5",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus quam recusandae praesentium quasi natus sequi voluptates beatae voluptatibus nisi officia autem laudantium cumque laborum magnam adipisci, nihil fugiat? Deleniti, libero?"),l.a.createElement("h2",null,"These are some of our best dishes"))),l.a.createElement(v,null))}function O(){var e=Object(n.useContext)(r),t=e.client,a=e.setClient,c=e.cookies;return console.log("cookies:"+c),Object(n.useEffect)((function(){var e=localStorage.getItem("id");e&&fetch("/clients/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.client)}))}),[]),console.log(t,"from Homepage"),l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(j,null),l.a.createElement(b,null),l.a.createElement(g,null))}a(71);var N=a(46),C=a.n(N),k=a(47),y=a.n(k),S=a(48),x=a.n(S),w=a(49),z=a.n(w),P=a(50),T=a.n(P),I=function(){var e=Object(n.useContext)(r),t=e.token,a=e.setProducts;return Object(n.useEffect)((function(){console.log(t),fetch("/products",{headers:{"content-type":"application/json","x-auth":t}}).then((function(e){return e.json()})).then((function(e){a(e.products),console.log(e)}))}),[t]),l.a.createElement("div",{className:"products"},l.a.createElement(p.a,{top:!0},l.a.createElement("div",{className:"container-component-products"},l.a.createElement(o.b,{to:"/products/Pizza"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgCard"},l.a.createElement("img",{src:C.a,alt:"pizza",width:"300",height:"200"})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Pizza")))),l.a.createElement(o.b,{to:"/products/Pasta"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgCard"},l.a.createElement("img",{src:y.a,alt:"pasta",width:"300",height:"200"})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Pasta")))),l.a.createElement(o.b,{to:"/products/Focaccia"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgCard"},l.a.createElement("img",{src:x.a,alt:"focaccia",width:"300",height:"200"})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Focaccia")))),l.a.createElement(o.b,{to:"/products/Antipasti"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgCard"},l.a.createElement("img",{src:z.a,alt:"antipasti",width:"300",height:"200"})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Antipasti")))),l.a.createElement(o.b,{to:"/products/Desserts"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"imgCard"},l.a.createElement("img",{src:T.a,alt:"tiramisu",width:"300",height:"200"})),l.a.createElement("div",{className:"content"},l.a.createElement("h1",null,"Desserts")))))))},q=a(13),_=a.n(q),A=a(16),L=a(25),F=(a(38),a(17));function Y(){var e=Object(n.useContext)(r),t=e.cart,a=e.setCart,c=(e.user,e.status),o=e.setStatus,i=e.client,s=(e.order,e.setOrder);console.log(t);var u=function(e){var n=Object(L.a)(t);n.splice(e,1),a(n)},d=t.reduce((function(e,t){return e+t.product.price}),0),p=function(){var e=Object(A.a)(_.a.mark((function e(n){var l,c,r,u,m;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),l=t.map((function(e){return e.id})),c={order:l,client:i._id},console.log(l),r={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(c)},e.next=7,fetch("/orders",r);case 7:return u=e.sent,e.next=10,u.json();case 10:m=e.sent,console.log(m),m.success&&(o(!0),s(m),a([]));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"cart"},l.a.createElement(F.a,{type:"tadpole",bg:!0}),t&&t.length>0?l.a.createElement("div",{className:"total"},l.a.createElement("h1",null,"Total: ",d," \u20ac"),l.a.createElement(E.a,{onClick:p},"CheckOut")):null,c?l.a.createElement(m.a,{to:"/checkout"}):l.a.createElement("div",{className:"cart-container"},l.a.createElement("ul",{className:"container-products"},t?t.map((function(e){return l.a.createElement("div",{className:"product-card"},l.a.createElement("img",{src:e.product.img,alt:e.product.name,width:"200",height:"100"}),l.a.createElement("li",null,"Type: ",e.product.type),l.a.createElement("li",null,"Name: ",e.product.name),l.a.createElement("li",null,"Price: ",e.product.price,"\u20ac"),l.a.createElement("button",{onClick:u},"Remove"))})):l.a.createElement("h1",null,"Add your desired product first"))))}a(39);function D(){var e=Object(n.useContext)(r),t=(e.setCookies,e.cookies),a=e.client,o=e.order,i=(e.setClient,e.logout,Object(n.useState)([])),s=Object(c.a)(i,2);s[0],s[1];return console.log(a,"from account"),console.log(o),l.a.createElement("div",{className:"account-container"},l.a.createElement(F.a,{type:"tadpole",bg:!0}),t?l.a.createElement(p.a,{top:!0},l.a.createElement("div",{className:"account"},l.a.createElement("h1",null,"Hi ",a.firstName),l.a.createElement("h2",null,"Your details"),l.a.createElement("div",{className:"account-info"},l.a.createElement("h3",null,"Firstname: ",a.firstName),l.a.createElement("h3",null,"Lastname: ",a.lastName)),l.a.createElement("div",{className:"account-info"},l.a.createElement("h3",null,"Email:"),l.a.createElement("h3",null,a.email)),l.a.createElement("div",{className:"account-info"},l.a.createElement("h3",null,"Address: ",a.street),l.a.createElement("h3",null,"Zipcode: ",a.zipCode)))):null)}function M(e){var t=Object(n.useContext)(r),a=t.products,o=t.filteredProduct,i=t.setFilteredProduct,s=t.cart,u=t.setCart,m=(t.client,t.cookies);console.log(e);var d=Object(n.useState)(1),p=Object(c.a)(d,2);p[0],p[1];Object(n.useEffect)((function(){!function(){var t=a&&a.filter((function(t){return t.type===e.match.params.name}));i(t),console.log(t)}()}),[]);return l.a.createElement("div",{className:"eachproduct"},m?l.a.createElement("ul",{className:"container-products"},o&&o.length>0?o.map((function(e,t){return l.a.createElement("div",{key:t,className:"product-card"},l.a.createElement("img",{src:e.img,alt:e.name,width:"200",height:"100"}),l.a.createElement("li",null,"Type: ",e.type),l.a.createElement("li",null,"Name: ",e.name),l.a.createElement("li",null,"Price: ",e.price," \u20ac"),l.a.createElement("button",{onClick:function(){!function(e){var t={id:e._id,product:e};u([].concat(Object(L.a)(s),[t])),alert("Added")}(e)}},"Add to Cart"))})):null):l.a.createElement("h1",null,"Please Login or Register to make your order"))}a(73);function B(){var e=Object(n.useContext)(r),t=(e.status,e.setStatus);return Object(n.useEffect)((function(){t(!1)})),l.a.createElement("div",{className:"checkout"},l.a.createElement(F.a,{type:"tadpole",bg:!0}),l.a.createElement("h1",null,"Thank you for ",l.a.createElement("br",null),"your Purchase"))}function J(){var e=Object(n.useContext)(r),t=e.token,a=(e.logout,e.cookies),c=e.client;console.log(c,"from admin");return l.a.createElement("div",{className:"admin"},a?l.a.createElement("div",null,l.a.createElement("h1",null,"Get all Clients"),l.a.createElement("button",{onClick:function(){fetch("/clients",{headers:{"content-type":"application/json","x-auth":t}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Get all clients"),l.a.createElement("h1",null,"Get all Orders"),l.a.createElement("button",{onClick:function(){fetch("/orders",{headers:{"content-type":"application/json","x-auth":t}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Get all orders"),l.a.createElement("button",null,"Add a Product")):null)}var R=a(24),U=a.n(R),G=(a(40),function(){var e=Object(n.useContext)(r),t=e.setToken,a=e.client,o=e.setClient,i=e.cookies,s=e.setCookies;console.log("cookies:"+i);var u=Object(n.useState)(null),d=Object(c.a)(u,2),p=d[0],E=d[1],h=Object(n.useState)(null),b=Object(c.a)(h,2),g=b[0],f=b[1],v=Object(n.useState)(!0),j=Object(c.a)(v,2),O=j[0],N=j[1],C=function(){var e=Object(A.a)(_.a.mark((function e(a){var n,l,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={email:p,password:g},l={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch("/clients/login",l);case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,console.log(r,"This is data login"),r.success?(t(r.token),o(r.client),localStorage.setItem("login",!0),localStorage.setItem("id",r.client._id),s(!0),N(!0)):N(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"form-container"},i&&a&&"Admin"===a.role?l.a.createElement(m.a,{to:"/admin"}):null,i&&a&&"User"===a.role?l.a.createElement(m.a,{to:"/account"}):null,l.a.createElement(U.a,null,l.a.createElement("div",{className:"login-form"},l.a.createElement("h1",null,"Log in"),l.a.createElement("h4",null,"Please log in to make your order"),l.a.createElement("form",{onSubmit:C,className:"login"},l.a.createElement("input",{type:"email",placeholder:"Your Email",id:"email-login",name:"email",onChange:function(e){return E(e.target.value)},required:!0}),l.a.createElement("input",{type:"password",id:"password-login",name:"password",onChange:function(e){return f(e.target.value)},required:!0}),l.a.createElement("button",{type:"submit"},"Log In"),O?null:l.a.createElement("p",null,"Wrong email or wrong password")))))});function Q(){var e=Object(n.useContext)(r),t=e.setToken,a=e.client,o=e.setClient,i=e.cookies,s=e.setCookies;console.log("cookies:"+i);var u=Object(n.useState)(null),d=Object(c.a)(u,2),p=d[0],E=d[1],h=Object(n.useState)(null),b=Object(c.a)(h,2),g=b[0],f=b[1],v=Object(n.useState)(null),j=Object(c.a)(v,2),O=j[0],N=j[1],C=Object(n.useState)(null),k=Object(c.a)(C,2),y=k[0],S=k[1],x=Object(n.useState)(null),w=Object(c.a)(x,2),z=w[0],P=w[1],T=Object(n.useState)(null),I=Object(c.a)(T,2),q=I[0],L=I[1],F=Object(n.useState)(null),Y=Object(c.a)(F,2),D=Y[0],M=Y[1],B=Object(n.useState)(!0),J=Object(c.a)(B,2),R=J[0],G=J[1],Q=Object(n.useState)(""),H=Object(c.a)(Q,2),W=H[0],Z=H[1],K=Object(n.useState)(""),V=Object(c.a)(K,2),X=V[0],$=V[1],ee=Object(n.useState)(""),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],le=Object(n.useState)(""),ce=Object(c.a)(le,2),re=(ce[0],ce[1],function(){var e=Object(A.a)(_.a.mark((function e(a){var n,l,c,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={firstName:p,lastName:g,email:O,password:y,phoneNumber:D,street:z,zipCode:q},l={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch("/clients",l);case 5:return c=e.sent,e.next=8,c.json();case 8:r=e.sent,console.log(r,"This is data signup"),r.success&&(t(r.token),o(r.client),localStorage.setItem("login",!0),localStorage.setItem("id",r.client._id),s(!0),G(!0)),r.message&&(G(!1),$(null),ne(null),r.message.map((function(e){e.email&&Z(e.email),e.password&&$(e.password)}))),r.err&&(G(!1),$(null),Z(null),ne(r.err));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return l.a.createElement("div",{className:"form-container"},i&&a&&"Admin"===a.role?l.a.createElement(m.a,{to:"/admin"}):null,i&&a&&"User"===a.role?l.a.createElement(m.a,{to:"/account"}):null,l.a.createElement(U.a,null,l.a.createElement("div",{className:"signup-form"},l.a.createElement("h1",null,"Sign up"),l.a.createElement("h4",null,"Create an account to make ",l.a.createElement("br",null),"your order"),l.a.createElement("form",{onSubmit:re,className:"login"},l.a.createElement("input",{type:"text",id:"first-name",name:"firstName",placeholder:"First name",onChange:function(e){return E(e.target.value)},required:!0}),l.a.createElement("input",{type:"text",id:"last-name",name:"lastName",placeholder:"Last name",onChange:function(e){return f(e.target.value)},required:!0}),l.a.createElement("input",{type:"email",id:"email",name:"email",placeholder:"Email",onChange:function(e){return N(e.target.value)},required:!0}),!R&&W?l.a.createElement("p",null,W):null,!R&&ae?l.a.createElement("p",null,"E-mail already exists"):null,l.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Password",onChange:function(e){return S(e.target.value)},required:!0}),!R&&X?l.a.createElement("p",null,X):null,l.a.createElement("input",{type:"text",id:"phone",name:"phone",placeholder:"Telephone number",onChange:function(e){return M(e.target.value)},required:!0}),l.a.createElement("input",{type:"text",id:"street",name:"street",placeholder:"Your Adress",onChange:function(e){return P(e.target.value)},required:!0}),l.a.createElement("input",{type:"text",id:"zipcode",name:"zipCode",placeholder:"Zip Code",onChange:function(e){return L(e.target.value)},required:!0}),l.a.createElement("button",{type:"submit"},"Sign Up")))))}function H(){return l.a.createElement(m.d,null,l.a.createElement(m.b,{exact:!0,path:"/",component:O}),l.a.createElement(m.b,{exact:!0,path:"/products",component:I}),l.a.createElement(m.b,{exact:!0,path:"/products/:name",component:M}),l.a.createElement(m.b,{exact:!0,path:"/cart",component:Y}),l.a.createElement(m.b,{exact:!0,path:"/account",component:D}),l.a.createElement(m.b,{exact:!0,path:"/checkout",component:B}),l.a.createElement(m.b,{exact:!0,path:"/admin",component:J}),l.a.createElement(m.b,{exact:!0,path:"/login",component:G}),l.a.createElement(m.b,{exact:!0,path:"/register",component:Q}),l.a.createElement(m.b,{exact:!0,path:"/contact",component:b}))}var W=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)([]),m=Object(c.a)(s,2),d=m[0],p=m[1],E=Object(n.useState)([]),h=Object(c.a)(E,2),b=h[0],g=h[1],f=Object(n.useState)([]),v=Object(c.a)(f,2),j=v[0],O=v[1],N=Object(n.useState)(!1),C=Object(c.a)(N,2),k=C[0],y=C[1],S=Object(n.useState)(0),x=Object(c.a)(S,2),w=x[0],z=x[1],P=Object(n.useState)(null),T=Object(c.a)(P,2),I=T[0],q=T[1],_=Object(n.useState)(!1),A=Object(c.a)(_,2),L=A[0],F=A[1],Y=Object(n.useState)(!1),D=Object(c.a)(Y,2),M=D[0],B=D[1],J=Object(n.useState)([]),R=Object(c.a)(J,2),U=R[0],G=R[1];return Object(n.useEffect)((function(){localStorage.getItem("login")&&F(!0)}),[]),l.a.createElement(r.Provider,{value:{logout:function(){fetch("/clients/logout"),localStorage.clear(),F(!1)},order:U,setOrder:G,status:M,setStatus:B,setCookies:F,cookies:L,isLogged:k,setIsLogged:y,client:I,setClient:q,token:a,setToken:i,products:d,setProducts:p,cart:j,setCart:O,filteredProduct:b,setFilteredProduct:g,total:w,setTotal:z}},l.a.createElement("div",{className:"App"},l.a.createElement(o.a,null,l.a.createElement(u,null),l.a.createElement(H,null))))},Z=a(18);a.n(Z).a.render(l.a.createElement(W,null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.ab6ff9cf.chunk.js.map