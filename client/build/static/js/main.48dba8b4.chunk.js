(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{16:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){e.exports=a.p+"static/media/pizza.300d72e2.jpg"},23:function(e,t,a){e.exports=a.p+"static/media/pasta.5c056c7e.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/focaccia.3744b6d6.jpg"},25:function(e,t,a){e.exports=a.p+"static/media/antipasti.95e03e48.jpg"},26:function(e,t,a){e.exports=a.p+"static/media/tiramisu.d84bb0ab.jpg"},30:function(e,t,a){e.exports=a(42)},32:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(1),r=(a(32),a(3)),o=(a(16),a(22)),i=a.n(o),s=a(23),u=a.n(s),m=a(24),d=a.n(m),p=a(25),E=a.n(p),f=a(26),h=a.n(f),g=Object(n.createContext)(null),b=function(){var e=Object(n.useContext)(g),t=e.token,a=e.setProducts;return Object(n.useEffect)((function(){console.log(t),fetch("/products",{headers:{"content-type":"application/json","x-auth":t}}).then((function(e){return e.json()})).then((function(e){a(e.products),console.log(e)}))}),[t]),c.a.createElement("div",{className:"products"},c.a.createElement(r.b,{to:"/products/Pizza"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:i.a,alt:"pizza",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Pizza")))),c.a.createElement(r.b,{to:"/products/Pasta"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:u.a,alt:"pasta",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Pasta")))),c.a.createElement(r.b,{to:"/products/Focaccia"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:d.a,alt:"focaccia",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Focaccia")))),c.a.createElement(r.b,{to:"/products/Antipasti"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:E.a,alt:"antipasti",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Antipasti")))),c.a.createElement(r.b,{to:"/products/Desserts"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"imgCard"},c.a.createElement("img",{src:h.a,alt:"tiramisu",width:"300",height:"200"})),c.a.createElement("div",{className:"content"},c.a.createElement("h1",null,"Desserts")))))},v=a(7),j=a(8),O=a.n(j),C=a(12);function N(e){var t=Object(n.useContext)(g),a=t.setToken,r=t.client,o=t.setClient,i=(t.isLogged,t.setIsLogged,t.token,t.cookies),s=t.setCookies;console.log("cookies:"+i);var u=Object(n.useState)(null),m=Object(l.a)(u,2),d=m[0],p=m[1],E=Object(n.useState)(null),f=Object(l.a)(E,2),h=f[0],b=f[1],j=Object(n.useState)(null),N=Object(l.a)(j,2),S=N[0],y=N[1],x=Object(n.useState)(null),k=Object(l.a)(x,2),w=k[0],P=k[1],A=Object(n.useState)(null),T=Object(l.a)(A,2),z=T[0],I=T[1],L=Object(n.useState)(null),D=Object(l.a)(L,2),q=D[0],F=D[1],R=Object(n.useState)(null),G=Object(l.a)(R,2),H=G[0],J=G[1],U=Object(n.useState)(!1),Y=Object(l.a)(U,2);Y[0],Y[1];Object(n.useEffect)((function(){var e=localStorage.getItem("id");e&&fetch("/clients/".concat(e)).then((function(e){return e.json()})).then((function(e){console.log(e),o(e.client)}))}),[]),console.log(r,"from Homepage");var _=function(){var e=Object(C.a)(O.a.mark((function e(t){var n,c,l,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={firstName:d,lastName:h,email:S,password:w,phoneNumber:H,street:z,zipCode:q},c={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch("/clients",c);case 5:return l=e.sent,e.next=8,l.json();case 8:i=e.sent,console.log(i),i.success&&(a(i.token),o(i.client),localStorage.setItem("login",!0),localStorage.setItem("id",i.client._id),s(!0)),console.log(r);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(O.a.mark((function e(t){var n,c,l,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:S,password:w},c={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)},e.next=5,fetch("/clients/login",c);case 5:return l=e.sent,e.next=8,l.json();case 8:r=e.sent,console.log(r),r.success?(a(r.token),o(r.client),localStorage.setItem("login",!0),localStorage.setItem("id",r.client._id),s(!0)):alert("Your email or password are wrong or doesn't exist in our database");case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"main-container"},i&&r&&"Admin"===r.role?c.a.createElement(v.a,{to:"/admin"}):null,i&&r&&"User"===r.role?c.a.createElement(v.a,{to:"/account"}):c.a.createElement("div",{className:"form-container"},c.a.createElement("div",{className:"signup-form"},c.a.createElement("h1",null,"Sign up for your order"),c.a.createElement("form",{onSubmit:_,className:"signup"},c.a.createElement("label",null,"First Name:",c.a.createElement("input",{type:"text",id:"first-name",name:"firstName",onChange:function(e){return p(e.target.value)},required:!0})),c.a.createElement("label",null,"Last Name:",c.a.createElement("input",{type:"text",id:"last-name",name:"lastName",onChange:function(e){return b(e.target.value)},required:!0})),c.a.createElement("label",null,"E-Mail:",c.a.createElement("input",{type:"email",id:"email",name:"email",onChange:function(e){return y(e.target.value)},required:!0})),c.a.createElement("label",null,"Password:",c.a.createElement("input",{type:"password",id:"password",name:"password",onChange:function(e){return P(e.target.value)},required:!0})),c.a.createElement("label",null,"Phone:",c.a.createElement("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return J(e.target.value)},required:!0})),c.a.createElement("label",null,"Street and Number:",c.a.createElement("input",{type:"text",id:"street",name:"street",onChange:function(e){return I(e.target.value)},required:!0})),c.a.createElement("label",null,"Zipcode:",c.a.createElement("input",{type:"text",id:"zipcode",name:"zipCode",onChange:function(e){return F(e.target.value)},required:!0})),c.a.createElement("button",{type:"submit"},"Sign Up"))),c.a.createElement("div",{className:"login-form"},c.a.createElement("h1",null,"Log in if you have an account"),c.a.createElement("form",{onSubmit:M,className:"login"},c.a.createElement("label",null,"E-Mail:",c.a.createElement("input",{type:"email",id:"email-login",name:"email",onChange:function(e){return y(e.target.value)},required:!0})),c.a.createElement("label",null,"Password:",c.a.createElement("input",{type:"password",id:"password-login",name:"password",onChange:function(e){return P(e.target.value)},required:!0})),c.a.createElement("button",{type:"submit"},"Log In")))))}var S=a(14);function y(){var e=Object(n.useContext)(g),t=e.cart,a=e.setCart,l=(e.user,e.status),r=e.setStatus,o=e.client,i=(e.order,e.setOrder);console.log(t);var s=function(e){var n=Object(S.a)(t);n.splice(e,1),a(n)},u=t.reduce((function(e,t){return e+t.product.price}),0),m=function(){var e=Object(C.a)(O.a.mark((function e(n){var c,l,s,u,m;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=t.map((function(e){return e.id})),l={order:c,client:o._id},console.log(c),s={method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(l)},e.next=7,fetch("/orders",s);case 7:return u=e.sent,e.next=10,u.json();case 10:m=e.sent,console.log(m),m.success&&(r(!0),i(m),a([]));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"container-products"},l?c.a.createElement(v.a,{to:"/checkout"}):c.a.createElement("div",{className:"container-products"},t&&t.map((function(e){return c.a.createElement("div",null,c.a.createElement("img",{src:e.product.img,alt:e.product.name,width:"200",height:"100"}),c.a.createElement("li",null,"Type: ",e.product.type),c.a.createElement("li",null,"Name: ",e.product.name),c.a.createElement("li",null,"Price: ",e.product.price,"\u20ac"),c.a.createElement("button",{onClick:s},"Remove"))})),t&&t.length>0?c.a.createElement("div",null,c.a.createElement("h1",null,"Total: ",u),c.a.createElement("button",{onClick:m},"CheckOut")):c.a.createElement("div",null,c.a.createElement("h1",null,"PLEASE ADD THE DESIRED PRODUCTS TO THE CART"))))}a(21);function x(){var e=Object(n.useContext)(g),t=(e.setCookies,e.cookies),a=e.client,l=e.order,r=(e.setClient,e.logout);return console.log(a,"from account"),console.log(l),c.a.createElement("div",null,t&&a&&"Admin"===a.role?c.a.createElement(v.a,{to:"/admin"}):null,t&&a&&"User"===a.role?c.a.createElement("div",{className:"account"},c.a.createElement("h1",null,"Hi ",a.firstName),c.a.createElement("h2",null,"Your details"),c.a.createElement("h3",null,"Firstname: ",a.firstName),c.a.createElement("h3",null,"Lastname: ",a.lastName),c.a.createElement("h3",null,"Email: ",a.email),c.a.createElement("h3",null,"Address: ",a.street),c.a.createElement("h3",null,"Zipcode: ",a.zipCode),c.a.createElement("h3",null,"Your Orders: "),c.a.createElement("button",{onClick:function(){return r()}},"logout")):c.a.createElement(v.a,{to:"/"}))}function k(e){var t=Object(n.useContext)(g),a=t.products,r=t.filteredProduct,o=t.setFilteredProduct,i=t.cart,s=t.setCart;t.client;console.log(e);var u=Object(n.useState)(1),m=Object(l.a)(u,2);m[0],m[1];Object(n.useEffect)((function(){!function(){var t=a&&a.filter((function(t){return t.type===e.match.params.name}));o(t),console.log(t)}()}),[]);return c.a.createElement("div",null,c.a.createElement("ul",{className:"container-products"},r&&r.length>0?r.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("img",{src:e.img,alt:e.name,width:"200",height:"100"}),c.a.createElement("li",null,e.type),c.a.createElement("li",null,e.name),c.a.createElement("li",null,e.price,"\u20ac"),c.a.createElement("button",{onClick:function(){!function(e){var t={id:e._id,product:e};s([].concat(Object(S.a)(i),[t])),alert("Added")}(e)}},"Add to Cart"))})):c.a.createElement("div",null,c.a.createElement("h1",null,"PLEASE LOGIN FIRST OR CREATE AN ACCOUNT"))))}function w(){var e=Object(n.useContext)(g),t=(e.status,e.setStatus);return Object(n.useEffect)((function(){t(!1)})),c.a.createElement("div",{className:"checkout"},c.a.createElement("h1",null,"Thank you for your Purchase"))}function P(){var e=Object(n.useContext)(g),t=e.token,a=e.logout,l=e.cookies,r=e.client;console.log(r,"from admin");return c.a.createElement("div",{className:"admin"},l?c.a.createElement("div",null,c.a.createElement("h1",null,"Get all Clients"),c.a.createElement("button",{onClick:function(){fetch("/clients",{headers:{"content-type":"application/json","x-auth":t}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Get all clients"),c.a.createElement("h1",null,"Get all Orders"),c.a.createElement("button",{onClick:function(){fetch("/orders",{headers:{"content-type":"application/json","x-auth":t}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Get all orders"),c.a.createElement("button",null,"Add a Product"),c.a.createElement("button",{onClick:function(){return a()}},"logout")):c.a.createElement(v.a,{to:"/"}))}var A=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)([]),s=Object(l.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)([]),p=Object(l.a)(d,2),E=p[0],f=p[1],h=Object(n.useState)([]),j=Object(l.a)(h,2),O=j[0],C=j[1],S=Object(n.useState)(!1),A=Object(l.a)(S,2),T=A[0],z=A[1],I=Object(n.useState)(0),L=Object(l.a)(I,2),D=L[0],q=L[1],F=Object(n.useState)(null),R=Object(l.a)(F,2),G=R[0],H=R[1],J=Object(n.useState)(!1),U=Object(l.a)(J,2),Y=U[0],_=U[1],M=Object(n.useState)(!1),Z=Object(l.a)(M,2),B=Z[0],Q=Z[1],K=Object(n.useState)([]),V=Object(l.a)(K,2),W=V[0],X=V[1];return Object(n.useEffect)((function(){localStorage.getItem("login")&&_(!0)}),[]),c.a.createElement(g.Provider,{value:{logout:function(){fetch("/clients/logout"),localStorage.clear(),_(!1)},order:W,setOrder:X,status:B,setStatus:Q,setCookies:_,cookies:Y,isLogged:T,setIsLogged:z,client:G,setClient:H,token:a,setToken:o,products:u,setProducts:m,cart:O,setCart:C,filteredProduct:E,setFilteredProduct:f,total:D,setTotal:q}},c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement("h1",null,c.a.createElement("span",{className:"green"},"Quel")," ",c.a.createElement("span",{className:"white"},"Mazzolin di")," ",c.a.createElement("span",{className:"red"},"Fiori")),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(r.c,{activeStyle:{color:"white"},to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(r.c,{activeStyle:{color:"white"},to:"/products"},"Products")),c.a.createElement("li",null,c.a.createElement(r.c,{activeStyle:{color:"white"},to:"/cart"},"Your Cart")),c.a.createElement("li",null,c.a.createElement(r.c,{activeStyle:{color:"white"},to:"/account"},"Your Account"))))),c.a.createElement(v.d,null,c.a.createElement(v.b,{exact:!0,path:"/",component:N}),c.a.createElement(v.b,{exact:!0,path:"/products",component:b}),c.a.createElement(v.b,{exact:!0,path:"/products/:name",component:k}),c.a.createElement(v.b,{exact:!0,path:"/cart",component:y}),c.a.createElement(v.b,{exact:!0,path:"/account",component:x}),c.a.createElement(v.b,{exact:!0,path:"/checkout",component:w}),c.a.createElement(v.b,{exact:!0,path:"/admin",component:P})))))},T=a(29);a.n(T).a.render(c.a.createElement(A,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.48dba8b4.chunk.js.map