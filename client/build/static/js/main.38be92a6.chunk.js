(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{19:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/pizza.300d72e2.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/pasta.5c056c7e.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/focaccia.3744b6d6.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/antipasti.95e03e48.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/tiramisu.d84bb0ab.jpg"},31:function(e,t,a){e.exports=a(46)},33:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(1),r=(a(33),a(2)),o=(a(19),a(23)),i=a.n(o),s=a(24),u=a.n(s),m=a(25),d=a.n(m),p=a(26),E=a.n(p),b=a(27),h=a.n(b),f=Object(n.createContext)(null),g=function(){var e=Object(n.useContext)(f),t=e.token,a=e.setProducts;return Object(n.useEffect)((function(){console.log(t),fetch("/products",{headers:{"content-type":"application/json","x-auth":t}}).then((function(e){return e.json()})).then((function(e){a(e.products),console.log(e)}))}),[t]),c.a.createElement("div",{className:"products"},c.a.createElement("div",{className:"container-component-products"},c.a.createElement(r.b,{to:"/products/Pizza"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:i.a,alt:"pizza",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Pizza")))),c.a.createElement(r.b,{to:"/products/Pasta"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:u.a,alt:"pasta",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Pasta")))),c.a.createElement(r.b,{to:"/products/Focaccia"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:d.a,alt:"focaccia",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Focaccia")))),c.a.createElement(r.b,{to:"/products/Antipasti"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:E.a,alt:"antipasti",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Antipasti")))),c.a.createElement(r.b,{to:"/products/Desserts"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:h.a,alt:"tiramisu",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Desserts"))))))},j=a(8);a(39);function v(){var e=Object(n.useContext)(f),t=e.client,a=e.setClient,l=e.cookies;return console.log("cookies:"+l),Object(n.useEffect)((function(){var e=localStorage.getItem("id");e&&fetch("/clients/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),a(e.client)}))}),[]),console.log(t,"from Homepage"),c.a.createElement("div",{className:"main-container"},l&&t&&"Admin"===t.role?c.a.createElement(j.a,{to:"/admin"}):null,l&&t&&"User"===t.role?c.a.createElement(j.a,{to:"/account"}):null,c.a.createElement("div",{className:"home-main"},c.a.createElement("div",{className:"home-container"},c.a.createElement("h1",null,"Benvenuti in Italia"),c.a.createElement("h1",null,'Benvenuti al Ristorante "Quel Mazzolin di Fiori"'),c.a.createElement("h2",null,"Please register or login to make your order"))))}var O=a(7),N=a.n(O),S=a(10),C=a(14);a(41);function y(){var e=Object(n.useContext)(f),t=e.cart,a=e.setCart,l=(e.user,e.status),r=e.setStatus,o=e.client,i=(e.order,e.setOrder);console.log(t);var s=function(e){var n=Object(C.a)(t);n.splice(e,1),a(n)},u=t.reduce((function(e,t){return e+t.product.price}),0),m=function(){var e=Object(S.a)(N.a.mark((function e(n){var c,l,s,u,m;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=t.map((function(e){return e.id})),l={order:c,client:o._id},console.log(c),s={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)},e.next=7,fetch("/orders",s);case 7:return u=e.sent,e.next=10,u.json();case 10:m=e.sent,console.log(m),m.success&&(r(!0),i(m),a([]));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"cart"},l?c.a.createElement(j.a,{to:"/checkout"}):c.a.createElement("ul",{className:"container-cart"},t?t.map((function(e){return c.a.createElement("div",{className:"product-card"},c.a.createElement("img",{src:e.product.img,alt:e.product.name,width:"200",height:"100"}),c.a.createElement("li",null,"Type: ",e.product.type),c.a.createElement("li",null,"Name: ",e.product.name),c.a.createElement("li",null,"Price: ",e.product.price,"\u20ac"),c.a.createElement("button",{onClick:s},"Remove"))})):c.a.createElement("h1",null,"Add your desired product first")),t&&t.length>0?c.a.createElement("div",{className:"total"},c.a.createElement("h1",null,"Total: ",u," \u20ac"),c.a.createElement("button",{onClick:m},"CheckOut")):null)}a(21);function x(){var e=Object(n.useContext)(f),t=(e.setCookies,e.cookies),a=e.client,r=e.order,o=(e.setClient,e.logout),i=Object(n.useState)([]),s=Object(l.a)(i,2);s[0],s[1];console.log(a,"from account"),console.log(r);return c.a.createElement("div",null,t&&a&&"Admin"===a.role?c.a.createElement(j.a,{to:"/admin"}):null,t&&a&&"User"===a.role?c.a.createElement("div",{className:"account"},c.a.createElement("h1",null,"Hi ",a.firstName),c.a.createElement("h2",null,"Your details"),c.a.createElement("h3",null,"Firstname: ",a.firstName),c.a.createElement("h3",null,"Lastname: ",a.lastName),c.a.createElement("h3",null,"Email: ",a.email),c.a.createElement("h3",null,"Address: ",a.street),c.a.createElement("h3",null,"Zipcode: ",a.zipCode),c.a.createElement("h3",null,"Your Orders: "),c.a.createElement("button",{onClick:function(){return o()}},"logout")):c.a.createElement(j.a,{to:"/"}))}a(42);function k(e){var t=Object(n.useContext)(f),a=t.products,r=t.filteredProduct,o=t.setFilteredProduct,i=t.cart,s=t.setCart,u=(t.client,t.cookies);console.log(e);var m=Object(n.useState)(1),d=Object(l.a)(m,2);d[0],d[1];Object(n.useEffect)((function(){!function(){var t=a&&a.filter((function(t){return t.type===e.match.params.name}));o(t),console.log(t)}()}),[]);return c.a.createElement("div",{className:"eachproduct"},u?c.a.createElement("ul",{className:"container-products"},r&&r.length>0?r.map((function(e,t){return c.a.createElement("div",{key:t,className:"product-card"},c.a.createElement("img",{src:e.img,alt:e.name,width:"200",height:"100"}),c.a.createElement("li",null,"Type: ",e.type),c.a.createElement("li",null,"Name: ",e.name),c.a.createElement("li",null,"Price: ",e.price," \u20ac"),c.a.createElement("button",{onClick:function(){!function(e){var t={id:e._id,product:e};s([].concat(Object(C.a)(i),[t])),alert("Added")}(e)}},"Add to Cart"))})):null):c.a.createElement("h1",null,"Please Login or Register to make your order"))}function w(){var e=Object(n.useContext)(f),t=(e.status,e.setStatus);return Object(n.useEffect)((function(){t(!1)})),c.a.createElement("div",{className:"checkout"},c.a.createElement("h1",null,"Thank you for your Purchase"))}function P(){var e=Object(n.useContext)(f),t=e.token,a=e.logout,l=e.cookies,r=e.client;console.log(r,"from admin");return c.a.createElement("div",{className:"admin"},l?c.a.createElement("div",null,c.a.createElement("h1",null,"Get all Clients"),c.a.createElement("button",{onClick:function(){fetch("/clients",{headers:{"content-type":"application/json","x-auth":t}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Get all clients"),c.a.createElement("h1",null,"Get all Orders"),c.a.createElement("button",{onClick:function(){fetch("/orders",{headers:{"content-type":"application/json","x-auth":t}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Get all orders"),c.a.createElement("button",null,"Add a Product"),c.a.createElement("button",{onClick:function(){return a()}},"logout")):c.a.createElement(j.a,{to:"/"}))}a(22);var z=function(){var e=Object(n.useContext)(f),t=e.setToken,a=e.client,r=e.setClient,o=e.cookies,i=e.setCookies;console.log("cookies:"+o);var s=Object(n.useState)(null),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(null),E=Object(l.a)(p,2),b=E[0],h=E[1],g=Object(n.useState)(!0),v=Object(l.a)(g,2),O=v[0],C=v[1],y=function(){var e=Object(S.a)(N.a.mark((function e(a){var n,c,l,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={email:m,password:b},c={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch("/clients/login",c);case 5:return l=e.sent,e.next=8,l.json();case 8:o=e.sent,console.log(o,"This is data login"),o.success?(t(o.token),r(o.client),localStorage.setItem("login",!0),localStorage.setItem("id",o.client._id),i(!0),C(!0)):C(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"form-container"},o&&a&&"Admin"===a.role?c.a.createElement(j.a,{to:"/admin"}):null,o&&a&&"User"===a.role?c.a.createElement(j.a,{to:"/account"}):null,c.a.createElement("div",{className:"loginoflogin"},c.a.createElement("div",{className:"login-form"},c.a.createElement("h1",null,"Log in"),c.a.createElement("form",{onSubmit:y,className:"login"},c.a.createElement("label",null,"E-Mail:",c.a.createElement("input",{type:"email",id:"email-login",name:"email",onChange:function(e){return d(e.target.value)},required:!0})),c.a.createElement("label",null,"Password:",c.a.createElement("input",{type:"password",id:"password-login",name:"password",onChange:function(e){return h(e.target.value)},required:!0})),c.a.createElement("button",{type:"submit"},"Log In"),O?null:c.a.createElement("p",null,"Wrong email or wrong password")))))};function A(){var e=Object(n.useContext)(f),t=e.setToken,a=e.client,r=e.setClient,o=e.cookies,i=e.setCookies;console.log("cookies:"+o);var s=Object(n.useState)(null),u=Object(l.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(null),E=Object(l.a)(p,2),b=E[0],h=E[1],g=Object(n.useState)(null),v=Object(l.a)(g,2),O=v[0],C=v[1],y=Object(n.useState)(null),x=Object(l.a)(y,2),k=x[0],w=x[1],P=Object(n.useState)(null),z=Object(l.a)(P,2),A=z[0],T=z[1],I=Object(n.useState)(null),q=Object(l.a)(I,2),F=q[0],L=q[1],D=Object(n.useState)(null),J=Object(l.a)(D,2),U=J[0],G=J[1],M=Object(n.useState)(!0),R=Object(l.a)(M,2),Y=R[0],_=R[1],B=Object(n.useState)(""),H=Object(l.a)(B,2),Q=H[0],Z=H[1],W=Object(n.useState)(""),K=Object(l.a)(W,2),V=K[0],X=K[1],$=Object(n.useState)(""),ee=Object(l.a)($,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),ce=Object(l.a)(ne,2),le=(ce[0],ce[1],function(){var e=Object(S.a)(N.a.mark((function e(a){var n,c,l,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={firstName:m,lastName:b,email:O,password:k,phoneNumber:U,street:A,zipCode:F},c={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch("/clients",c);case 5:return l=e.sent,e.next=8,l.json();case 8:o=e.sent,console.log(o,"This is data signup"),o.success&&(t(o.token),r(o.client),localStorage.setItem("login",!0),localStorage.setItem("id",o.client._id),i(!0),_(!0)),o.message&&(_(!1),X(null),ae(null),o.message.map((function(e){e.email&&Z(e.email),e.password&&X(e.password)}))),o.err&&(_(!1),X(null),Z(null),ae(o.err));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return c.a.createElement("div",{className:"form-container"},o&&a&&"Admin"===a.role?c.a.createElement(j.a,{to:"/admin"}):null,o&&a&&"User"===a.role?c.a.createElement(j.a,{to:"/account"}):null,c.a.createElement("div",{className:"signup-form"},c.a.createElement("h1",null,"Sign up"),c.a.createElement("form",{onSubmit:le,className:"login"},c.a.createElement("label",null,"First Name:",c.a.createElement("input",{type:"text",id:"first-name",name:"firstName",onChange:function(e){return d(e.target.value)},required:!0})),c.a.createElement("label",null,"Last Name:",c.a.createElement("input",{type:"text",id:"last-name",name:"lastName",onChange:function(e){return h(e.target.value)},required:!0})),c.a.createElement("label",null,"E-Mail:",c.a.createElement("input",{type:"email",id:"email",name:"email",onChange:function(e){return C(e.target.value)},required:!0})),!Y&&Q?c.a.createElement("p",null,Q):null,!Y&&te?c.a.createElement("p",null,"E-mail already exists"):null,c.a.createElement("label",null,"Password:",c.a.createElement("input",{type:"password",id:"password",name:"password",onChange:function(e){return w(e.target.value)},required:!0})),!Y&&V?c.a.createElement("p",null,V):null,c.a.createElement("label",null,"Phone:",c.a.createElement("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return G(e.target.value)},required:!0})),c.a.createElement("label",null,"Street and Number:",c.a.createElement("input",{type:"text",id:"street",name:"street",onChange:function(e){return T(e.target.value)},required:!0})),c.a.createElement("label",null,"Zipcode:",c.a.createElement("input",{type:"text",id:"zipcode",name:"zipCode",onChange:function(e){return L(e.target.value)},required:!0})),c.a.createElement("button",{type:"submit"},"Sign Up"))))}var T=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)([]),p=Object(l.a)(d,2),E=p[0],b=p[1],h=Object(n.useState)([]),O=Object(l.a)(h,2),N=O[0],S=O[1],C=Object(n.useState)(!1),T=Object(l.a)(C,2),I=T[0],q=T[1],F=Object(n.useState)(0),L=Object(l.a)(F,2),D=L[0],J=L[1],U=Object(n.useState)(null),G=Object(l.a)(U,2),M=G[0],R=G[1],Y=Object(n.useState)(!1),_=Object(l.a)(Y,2),B=_[0],H=_[1],Q=Object(n.useState)(!1),Z=Object(l.a)(Q,2),W=Z[0],K=Z[1],V=Object(n.useState)([]),X=Object(l.a)(V,2),$=X[0],ee=X[1];return Object(n.useEffect)((function(){localStorage.getItem("login")&&H(!0)}),[]),c.a.createElement(f.Provider,{value:{logout:function(){fetch("/clients/logout"),localStorage.clear(),H(!1)},order:$,setOrder:ee,status:W,setStatus:K,setCookies:H,cookies:B,isLogged:I,setIsLogged:q,client:M,setClient:R,token:a,setToken:o,products:u,setProducts:m,cart:N,setCart:S,filteredProduct:E,setFilteredProduct:b,total:D,setTotal:J}},c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement("span",{className:"green"},"Quel")," ",c.a.createElement("span",{className:"white"},"Mazzolin di")," ",c.a.createElement("span",{className:"red"},"Fiori")),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.b,{activeStyle:{color:"white"},to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(r.b,{activeStyle:{color:"white"},to:"/products"},"Products")),c.a.createElement("li",null,c.a.createElement(r.b,{activeStyle:{color:"white"},to:"/cart"},"Your Cart")),c.a.createElement("li",null,c.a.createElement(r.b,{activeStyle:{color:"white"},to:"/account"},"Your Account")),c.a.createElement("li",null,c.a.createElement(r.b,{activeStyle:{color:"white"},to:"/login"},"Login")),c.a.createElement("li",null,c.a.createElement(r.b,{activeStyle:{color:"white"},to:"/register"},"Register"))))),c.a.createElement(j.d,null,c.a.createElement(j.b,{exact:!0,path:"/",component:v}),c.a.createElement(j.b,{exact:!0,path:"/products",component:g}),c.a.createElement(j.b,{exact:!0,path:"/products/:name",component:k}),c.a.createElement(j.b,{exact:!0,path:"/cart",component:y}),c.a.createElement(j.b,{exact:!0,path:"/account",component:x}),c.a.createElement(j.b,{exact:!0,path:"/checkout",component:w}),c.a.createElement(j.b,{exact:!0,path:"/admin",component:P}),c.a.createElement(j.b,{exact:!0,path:"/login",component:z}),c.a.createElement(j.b,{exact:!0,path:"/register",component:A})))))},I=a(30);a.n(I).a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.38be92a6.chunk.js.map