(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),c=a.n(l),o=a(116),u=a(117),s=a(118),m=a(18),i=a(24),E=a.n(i),d={server:{get:{details:function(e){return new Promise(function(t,a){try{E.a.get("/api/details/".concat(e)).then(function(e){if(e.data)return console.log(e.data),t(e.data)})}catch(n){return a(n)}})}},post:{signup:function(e){return new Promise(function(t,a){try{console.log("creating new user"),E.a.post("/act/signup",e).then(function(e){return t(e.data)}).catch(function(e){return a(e)})}catch(n){return a(n)}})},login:function(e){return new Promise(function(t,a){try{console.log("getting existing user"),E.a.post("/act/login",e).then(function(e){var t=e.data.session;window.sessionStorage.setItem("SID",t),window.location.href="/home"}).catch(function(e){return a(e)})}catch(n){return a(n)}})}}}},g=a(16),f=a.n(g),p=a(19),h=a.n(p),v=a(14),b=a.n(v),w=a(13),y=a.n(w),C=a(6),S=a.n(C),x=a(17),I=a.n(x),L=a(49),P=a.n(L);var j=function(e){return r.a.createElement(P.a,{fluid:!0,style:{background:"#ffb247"}},r.a.createElement(f.a,{className:"text-center"},r.a.createElement("h1",null,"adomer online"),r.a.createElement("p",null," Connect your application to adomer-toolkit diagnostics ")))};function O(e){var t=Object(n.useState)({submitted:!1,succeeded:!1,errors:!1}),a=Object(m.a)(t,2),l=a[0];a[1];return r.a.createElement(S.a,{onSubmit:function(e){l.submitted=!0,e.preventDefault(),e.persist();var t={email:e.target[0].value,username:e.target[1].value,secret:e.target[2].value,secretConf:e.target[3].value};d.server.post.signup(t).then(function(e){e&&(console.log(e),e._id?(console.log("Success!"),l.succeeded=!0):e.errors?(console.log("Errors!"),l.succeeded=!1):e.name&&(console.log("Different Errors!"),l.succeeded=!1))}).catch(function(e){console.error(e)})}},r.a.createElement("h2",{className:"text-center"},r.a.createElement("strong",null,"Sign Up")),r.a.createElement("hr",null),r.a.createElement(S.a.Group,{controlId:"singup_email"},r.a.createElement(S.a.Label,null,"Email address"),r.a.createElement(S.a.Control,{type:"email",placeholder:"Enter email"}),r.a.createElement(S.a.Text,{className:"text-muted"},"We'll never share your email with anyone else. ")),r.a.createElement(S.a.Group,{controlId:"singup_username"},r.a.createElement(S.a.Label,null,"Username"),r.a.createElement(S.a.Control,{type:"username",placeholder:"Enter username"})),r.a.createElement(S.a.Group,{controlId:"singup_secret"},r.a.createElement(S.a.Label,null,"Password"),r.a.createElement(S.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement(S.a.Group,{controlId:"singup_secretConf"},r.a.createElement(S.a.Label,null,"Password (Confirm)"),r.a.createElement(S.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement(I.a,{variant:"primary",type:"submit"}," Submit "))}function N(e){var t=Object(n.useState)({submitted:!1,succeeded:!1,errors:!1}),a=Object(m.a)(t,2),l=a[0];a[1];return r.a.createElement(S.a,{onSubmit:function(e){l.submitted=!0,e.preventDefault(),e.persist();var t={username:e.target[0].value,secret:e.target[1].value};d.server.post.login(t).then(function(e){console.log(e)}).catch(function(e){console.error(e)})}},r.a.createElement("h2",{className:"text-center"},r.a.createElement("strong",null,"Log In")),r.a.createElement("hr",null),r.a.createElement(S.a.Group,{controlId:"formBasicEmail"},r.a.createElement(S.a.Label,null,"Username"),r.a.createElement(S.a.Control,{type:"username",placeholder:"Enter username"})),r.a.createElement(S.a.Group,{controlId:"formBasicPassword"},r.a.createElement(S.a.Label,null,"Password"),r.a.createElement(S.a.Control,{type:"password",placeholder:"Password"})),r.a.createElement(I.a,{variant:"primary",type:"submit"}," Submit "))}function k(e){return r.a.createElement(y.a,{style:{width:"70%",margin:"auto"}},r.a.createElement(y.a.Header,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{style:{marginRight:"15px"}},"Login"),r.a.createElement(I.a,{onClick:e.toggle}," ",e.mode?r.a.createElement("i",{className:"fas fa-arrow-circle-right"}):r.a.createElement("i",{className:"fas fa-arrow-circle-left"})),r.a.createElement("span",{style:{marginLeft:"15px"}},"Signup"))),r.a.createElement(y.a.Body,null,e.mode?r.a.createElement(O,{toggler:e.toggle}):r.a.createElement(N,{toggler:e.toggle})))}function G(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),l=a[0],c=a[1];return r.a.createElement(h.a,null,r.a.createElement(b.a,null,r.a.createElement(k,{mode:l,toggle:function(){c(0===l?1:0)}})))}var B=function(e){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(f.a,null,r.a.createElement(G,null)))},D=a(20),_=a.n(D),H=a(31),T=a.n(H);var U=function(e){return r.a.createElement("div",null,r.a.createElement(_.a,{bg:"light",expand:"lg"},r.a.createElement(_.a.Brand,null,"adomer"),r.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(T.a,{className:"mr-auto"},r.a.createElement(T.a.Link,{href:"#home"},"Home")),r.a.createElement("em",null,e.user))))};function J(e){return r.a.createElement(b.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",null,"Cool")))}function R(e){return r.a.createElement(b.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",null,"Cool")))}function F(e){return r.a.createElement(b.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",null,"Cool")))}function W(e){return r.a.createElement("div",null,r.a.createElement(h.a,null,r.a.createElement(J,null),r.a.createElement(R,null)),r.a.createElement(h.a,null,r.a.createElement(F,null)))}function q(e){return r.a.createElement("div",null,r.a.createElement(U,{user:e.info.username}),r.a.createElement(f.a,{fluid:!0},r.a.createElement(W,null)))}var z=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],c=a[1];return Object(n.useEffect)(function(){if(!l){var e=window.sessionStorage.getItem("SID");d.server.get.details(e).then(function(e){c({content:e})}).catch(function(e){throw new Error("FETCHER: 'uh-oh'")})}}),r.a.createElement("div",null,l?r.a.createElement(q,{info:l.content}):r.a.createElement("div",null))};var A=function(e){return r.a.createElement(o.a,null,r.a.createElement(u.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:B}),r.a.createElement(s.a,{path:"/home",component:z})))};c.a.render(r.a.createElement(A,null),document.getElementById("root"))},51:function(e,t,a){e.exports=a(113)}},[[51,1,2]]]);
//# sourceMappingURL=main.00c8ed8b.chunk.js.map