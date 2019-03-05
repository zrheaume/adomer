(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),c=a.n(r),o=a(118),u=a(119),s=a(120),m=a(15),i=a(25),E=a.n(i),p={server:{get:{details:function(e){return new Promise(function(t,a){try{E.a.get("/api/details/".concat(String(e))).then(function(e){if(e.data)return console.log(e.data),t(e.data)})}catch(n){return a(n)}})}},post:{signup:function(e){return new Promise(function(t,a){try{console.log("creating new user"),E.a.post("/act/signup",e).then(function(e){return t(e.data)}).catch(function(e){return a(e)})}catch(n){return a(n)}})},login:function(e){return new Promise(function(t,a){try{console.log("getting existing user"),E.a.post("/act/login",e).then(function(e){var t=e.data.session;window.sessionStorage.setItem("SID",t),window.location.href="/home"}).catch(function(e){return a(e)})}catch(n){return a(n)}})}}}},d=a(17),g=a.n(d),f=a(19),v=a.n(f),h=a(14),b=a.n(h),w=a(11),y=a.n(w),S=a(8),C=a.n(S),I=a(18),O=a.n(I),x=a(52),j=a.n(x);var L=function(e){return l.a.createElement(j.a,{fluid:!0,style:{background:"#ffb247"}},l.a.createElement(g.a,{className:"text-center"},l.a.createElement("h1",null,"adomer online"),l.a.createElement("p",null," Connect your applications to adomer-toolkit diagnostics ")))};function N(e){var t=Object(n.useState)({submitted:!1,succeeded:!1,errors:!1}),a=Object(m.a)(t,2),r=a[0];a[1];return l.a.createElement(C.a,{onSubmit:function(e){r.submitted=!0,e.preventDefault(),e.persist();var t={email:e.target[0].value,username:e.target[1].value,secret:e.target[2].value,secretConf:e.target[3].value};p.server.post.signup(t).then(function(e){e&&(console.log(e),e._id?(console.log("Success!"),r.succeeded=!0):e.errors?(console.log("Errors!"),r.succeeded=!1):e.name&&(console.log("Different Errors!"),r.succeeded=!1))}).catch(function(e){console.error(e)})}},l.a.createElement("h2",{className:"text-center"},l.a.createElement("strong",null,"Sign Up")),l.a.createElement("hr",null),l.a.createElement(C.a.Group,{controlId:"singup_email"},l.a.createElement(C.a.Label,null,"Email address"),l.a.createElement(C.a.Control,{type:"email",placeholder:"Enter email"}),l.a.createElement(C.a.Text,{className:"text-muted"},"We'll never share your email with anyone else. ")),l.a.createElement(C.a.Group,{controlId:"singup_username"},l.a.createElement(C.a.Label,null,"Username"),l.a.createElement(C.a.Control,{type:"username",placeholder:"Enter username"})),l.a.createElement(C.a.Group,{controlId:"singup_secret"},l.a.createElement(C.a.Label,null,"Password"),l.a.createElement(C.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(C.a.Group,{controlId:"singup_secretConf"},l.a.createElement(C.a.Label,null,"Password (Confirm)"),l.a.createElement(C.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(O.a,{variant:"primary",type:"submit"}," Submit "))}function P(e){var t=Object(n.useState)({submitted:!1,succeeded:!1,errors:!1}),a=Object(m.a)(t,2),r=a[0];a[1];return l.a.createElement(C.a,{onSubmit:function(e){r.submitted=!0,e.preventDefault(),e.persist();var t={username:e.target[0].value,secret:e.target[1].value};p.server.post.login(t).then(function(e){console.log(e)}).catch(function(e){console.error(e)})}},l.a.createElement("h2",{className:"text-center"},l.a.createElement("strong",null,"Log In")),l.a.createElement("hr",null),l.a.createElement(C.a.Group,{controlId:"formBasicEmail"},l.a.createElement(C.a.Label,null,"Username"),l.a.createElement(C.a.Control,{type:"username",placeholder:"Enter username"})),l.a.createElement(C.a.Group,{controlId:"formBasicPassword"},l.a.createElement(C.a.Label,null,"Password"),l.a.createElement(C.a.Control,{type:"password",placeholder:"Password"})),l.a.createElement(O.a,{variant:"primary",type:"submit"}," Submit "))}function k(e){return l.a.createElement(y.a,{style:{width:"70%",margin:"auto"}},l.a.createElement(y.a.Header,null,l.a.createElement("div",{className:"text-center"},l.a.createElement("span",{style:{marginRight:"15px"}},"Login"),l.a.createElement(O.a,{onClick:e.toggle}," ",e.mode?l.a.createElement("i",{className:"fas fa-arrow-circle-right"}):l.a.createElement("i",{className:"fas fa-arrow-circle-left"})),l.a.createElement("span",{style:{marginLeft:"15px"}},"Signup"))),l.a.createElement(y.a.Body,null,e.mode?l.a.createElement(N,{toggler:e.toggle}):l.a.createElement(P,{toggler:e.toggle})))}function B(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),r=a[0],c=a[1];return l.a.createElement(v.a,null,l.a.createElement(b.a,null,l.a.createElement(k,{mode:r,toggle:function(){c(0===r?1:0)}})))}var D=function(e){return l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(g.a,null,l.a.createElement(B,null)))},G=a(33),H=a.n(G),U=a(20),_=a.n(U),T=a(32),A=a.n(T);var F=function(e){return l.a.createElement("div",null,l.a.createElement(_.a,{bg:"light",expand:"lg"},l.a.createElement(_.a.Brand,null,"adomer"),l.a.createElement(_.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(_.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(A.a,{className:"mr-auto"},l.a.createElement(A.a.Link,{href:"#home"},"Home")),l.a.createElement("em",null,e.user))))};function R(e){return l.a.createElement(b.a,{lg:4},l.a.createElement(y.a,null,l.a.createElement(y.a.Header,null,l.a.createElement("h3",null," My Apps ")),l.a.createElement(y.a.Body,null,l.a.createElement(H.a,null,e.list.map(function(t,a){var n=a;return l.a.createElement(H.a.Item,{action:!0,key:a,id:"app-".concat(a),onClick:function(){e.toggleApp(n)}},l.a.createElement("strong",null,t.name))})))))}function J(e){return l.a.createElement(b.a,{lg:8},l.a.createElement(y.a,{className:"tree-render-location"},l.a.createElement(y.a.Header,null,l.a.createElement("h3",null,"atk appMap"))))}function M(e){var t=l.a.createElement("div",null);if(e.app.content.stats){var a=e.app.content.stats;t=l.a.createElement("div",null,l.a.createElement("h4",null," User Defined components "),l.a.createElement("hr",null),l.a.createElement("strong",null," Function Components ")," ",a.\u03a3Fu,l.a.createElement("br",null),l.a.createElement("strong",null," Class Components ")," ",a.\u03a3Cl,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null," Ratio ")," ",a.\u03bcFuCl,l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("strong",null," Stateful Components ")," ",a.\u03a3St,l.a.createElement("br",null),l.a.createElement("strong",null," Stateless Components ")," ",a.\u03a3Sl,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null," Ratio ")," ",a.\u03bcStSl,l.a.createElement("br",null))}return l.a.createElement(b.a,null,l.a.createElement(y.a,null,l.a.createElement(y.a.Header,null,l.a.createElement("h3",null,"appStats")),l.a.createElement(y.a.Body,null,l.a.createElement(t,null))))}function W(e){var t=Object(n.useState)(0),a=Object(m.a)(t,2),r=a[0],c=a[1];return l.a.createElement("div",null,l.a.createElement(v.a,null,l.a.createElement(R,{list:e.list,toggleApp:c}),l.a.createElement(J,{list:e.list,app:r})),l.a.createElement(v.a,null,l.a.createElement(M,{app:e.list[r]})))}function q(e){return l.a.createElement("div",null,l.a.createElement(F,{user:e.info.username}),l.a.createElement(g.a,{fluid:!0},l.a.createElement(W,{list:e.info.apps})))}var z=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){if(!r){var e=String(window.sessionStorage.getItem("SID"));p.server.get.details(e).then(function(e){c({content:e})}).catch(function(e){console.error("COULD NOT GET session")})}}),l.a.createElement("div",null,r?l.a.createElement(q,{info:r.content}):l.a.createElement("div",null))};var K=function(e){return l.a.createElement(o.a,null,l.a.createElement(u.a,null,l.a.createElement(s.a,{exact:!0,path:"/",component:D}),l.a.createElement(s.a,{path:"/home",component:z})))};c.a.render(l.a.createElement(K,null),document.getElementById("root"))},54:function(e,t,a){e.exports=a(115)}},[[54,1,2]]]);
//# sourceMappingURL=main.17bd1330.chunk.js.map