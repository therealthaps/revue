(function(e){function t(t){for(var r,u,s=t[0],c=t[1],i=t[2],d=0,b=[];d<s.length;d++)u=s[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&b.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},u={app:0},o={app:0},a=[];function s(e){return c.p+"js/"+({about:"about",create:"create",createsubvue:"createsubvue","gridfeed~subvue~user":"gridfeed~subvue~user",gridfeed:"gridfeed",subvue:"subvue",user:"user",login:"login",post:"post",signup:"signup"}[e]||e)+"."+{about:"92c9306b",create:"1342a73b",createsubvue:"b087f3a7","gridfeed~subvue~user":"707327f6",gridfeed:"35cd65df",subvue:"80f7f68e",user:"7785382a",login:"574c1990",post:"894679fc",signup:"5043e852"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,create:1,createsubvue:1,"gridfeed~subvue~user":1,gridfeed:1,subvue:1,user:1,login:1,post:1,signup:1};u[e]?t.push(u[e]):0!==u[e]&&n[e]&&t.push(u[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",create:"create",createsubvue:"createsubvue","gridfeed~subvue~user":"gridfeed~subvue~user",gridfeed:"gridfeed",subvue:"subvue",user:"user",login:"login",post:"post",signup:"signup"}[e]||e)+"."+{about:"fb240a14",create:"672127c0",createsubvue:"4ab57012","gridfeed~subvue~user":"37a9186e",gridfeed:"7876a68a",subvue:"2c1d5c14",user:"cd952baf",login:"bbf9cf59",post:"9a2d76e6",signup:"1392c00b"}[e]+".css",o=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var i=a[s],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===r||d===o))return t()}var b=document.getElementsByTagName("style");for(s=0;s<b.length;s++){i=b[s],d=i.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete u[e],f.parentNode.removeChild(f),n(a)},f.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(f)})).then((function(){u[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var b=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",b.name="ChunkLoadError",b.type=r,b.request=u,n[1](b)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/revue/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var b=0;b<i.length;b++)t(i[b]);var f=d;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1b98":function(e,t,n){"use strict";n("4369")},"1efd":function(e,t,n){},"3f4a":function(e,t,n){"use strict";var r=n("bc3a"),u=n.n(r),o=n("4360");t["a"]=function(){return u.a.create({baseURL:"http://104.248.108.220:80/api",headers:{Authorization:"JWT ".concat(o["a"].state.token)}})}},"3ffe":function(e,t,n){"use strict";var r=n("7a23"),u=Object(r["H"])("data-v-c62069d6");Object(r["s"])("data-v-c62069d6");var o=Object(r["g"])("svg",{fill:"#FFFFFF",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},[Object(r["g"])("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),Object(r["g"])("path",{d:"M0 0h24v24H0z",fill:"none"})],-1);Object(r["q"])();var a=u((function(e,t,n,u,a,s){return Object(r["F"])((Object(r["p"])(),Object(r["d"])("div",{onClick:t[1]||(t[1]=function(t){return e.$router.push({name:"CreatePost"})}),class:"create-button"},[o],512)),[[r["C"],e.$store.state.isUserLoggedIn]])})),s={name:"create-button"};n("1b98");s.render=a,s.__scopeId="data-v-c62069d6";t["a"]=s},4360:function(e,t,n){"use strict";var r=n("5502"),u=n("0e44"),o=n("bf80");t["a"]=r["a"].createStore({plugins:[Object(u["a"])()],state:{token:null,user:null,isUserLoggedIn:!1,subscribedSubvues:[]},mutations:{setToken:function(e,t){e.token=t,e.isUserLoggedIn=!!t},setUser:function(e,t){e.user=t},setSubscribedSubvues:function(e,t){e.subscribedSubvues=t}},actions:{setToken:function(e,t){var n=e.commit;n("setToken",t)},setUser:function(e,t){var n=e.commit;n("setUser",t)},updateSubscribedSubvues:function(e,t){var n=e.commit,r=e.state;r.isUserLoggedIn&&(t?n("setSubscribedSubvues",t):o["a"].username(r.user.username).then((function(e){n("setSubscribedSubvues",e.data.subscribed)})).catch((function(){})))}},modules:{}})},4369:function(e,t,n){},"46fe":function(e,t,n){"use strict";var r=n("3f4a");t["a"]={index:function(){return Object(r["a"])().get("posts")},create:function(e){return Object(r["a"])().post("posts",e)},delete:function(e){return Object(r["a"])().delete("posts/id/"+e)},item:function(e){return Object(r["a"])().get("posts/id/"+e)},user:function(e){return Object(r["a"])().get("posts/user/"+e)},addComment:function(e,t){return Object(r["a"])().post("posts/"+e+"/comments",{content:t})},upVote:function(e){return Object(r["a"])().post("posts/"+e+"/upvote")},downVote:function(e){return Object(r["a"])().post("posts/"+e+"/downvote")}}},"506a":function(e,t,n){"use strict";n("eff9")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),u={id:"app"};function o(e,t,n,o,a,s){var c=Object(r["x"])("NavBar"),i=Object(r["x"])("router-view");return Object(r["p"])(),Object(r["d"])("div",u,[Object(r["g"])(c),Object(r["g"])("main",null,[Object(r["g"])(i)])])}var a=Object(r["H"])("data-v-28a3aeb9");Object(r["s"])("data-v-28a3aeb9");var s=Object(r["f"])("Productify"),c=Object(r["f"])("About"),i=Object(r["f"])("Grid Feed"),d=Object(r["f"])("Sign Up"),b=Object(r["f"])("Login"),f=Object(r["f"])("My Grids");Object(r["q"])();var l=a((function(e,t,n,u,o,l){var p=Object(r["x"])("router-link");return Object(r["p"])(),Object(r["d"])("nav",null,[Object(r["g"])(p,{class:"title",to:{name:"Home",params:{}}},{default:a((function(){return[s]})),_:1}),Object(r["g"])(p,{to:{name:"AboutUs"}},{default:a((function(){return[c]})),_:1}),Object(r["g"])(p,{to:{name:"GridFeed"}},{default:a((function(){return[i]})),_:1}),e.$store.state.isUserLoggedIn?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])(p,{key:0,style:{float:"right"},to:{name:"SignUp",params:{}}},{default:a((function(){return[d]})),_:1})),e.$store.state.isUserLoggedIn?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])(p,{key:1,style:{float:"right"},to:{name:"Login",params:{}}},{default:a((function(){return[b]})),_:1})),e.$store.state.isUserLoggedIn?(Object(r["p"])(),Object(r["d"])("a",{key:2,style:{float:"right"},onClick:t[1]||(t[1]=function(e){return l.logout()})},"Logout")):Object(r["e"])("",!0),e.$store.state.isUserLoggedIn?(Object(r["p"])(),Object(r["d"])(p,{key:3,style:{float:"right"},to:{name:"User",params:{username:e.$store.state.user.username}}},{default:a((function(){return[f]})),_:1},8,["to"])):Object(r["e"])("",!0)])})),p={name:"nav",data:function(){return{isOpen:!1}},methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setUser",null),this.$router.push({name:"Home"})}}};n("fccc");p.render=l,p.__scopeId="data-v-28a3aeb9";var g=p,v={name:"app",components:{NavBar:g},created:function(){this.$store.dispatch("updateSubscribedSubvues")}};n("506a");v.render=o;var m=v,h=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),O={class:"home container"},j={class:"welcome"},y={key:0},S={key:0};function k(e,t,n,u,o,a){var s=Object(r["x"])("CreateButton");return Object(r["p"])(),Object(r["d"])("div",O,[Object(r["g"])("div",j,[e.$store.state.isUserLoggedIn?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("h1",y," Welcome to Productify "))]),e.$store.state.isUserLoggedIn?(Object(r["p"])(),Object(r["d"])("h1",S,"Hello, "+Object(r["z"])(e.$store.state.user.username),1)):Object(r["e"])("",!0),Object(r["g"])(s)])}var w=n("46fe"),U=n("3ffe"),L={name:"home",components:{CreateButton:U["a"]},data:function(){return{posts:null}},mounted:function(){var e=this;w["a"].index().then((function(t){e.posts=t.data}))}};n("a392");L.render=k;var P=L,_=[{path:"/",name:"Home",component:P},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/signup",name:"SignUp",component:function(){return n.e("signup").then(n.bind(null,"5c9c"))}},{path:"/s/:name",name:"Subvue",component:function(){return Promise.all([n.e("gridfeed~subvue~user"),n.e("subvue")]).then(n.bind(null,"f073"))}},{path:"/s/:subvuePermalink/:id",name:"Post",component:function(){return n.e("post").then(n.bind(null,"37d3"))}},{path:"/u/:username",name:"User",component:function(){return Promise.all([n.e("gridfeed~subvue~user"),n.e("user")]).then(n.bind(null,"1511"))}},{path:"/create",name:"CreatePost",component:function(){return n.e("create").then(n.bind(null,"1928"))}},{path:"/aboutus",name:"AboutUs",component:function(){return n.e("about").then(n.bind(null,"4047"))}},{path:"/create/subvue",name:"CreateSubvue",component:function(){return n.e("createsubvue").then(n.bind(null,"ed22"))}},{path:"/gridfeed",name:"GridFeed",component:function(){return Promise.all([n.e("gridfeed~subvue~user"),n.e("gridfeed")]).then(n.bind(null,"1cea"))}}],C=Object(h["a"])({history:Object(h["b"])("/revue/"),routes:_}),x=C,$=n("4360");n("7d05"),Object(r["c"])(m).use(x).use($["a"]).mount("#app")},6304:function(e,t,n){},"7d05":function(e,t,n){},a392:function(e,t,n){"use strict";n("6304")},bf80:function(e,t,n){"use strict";var r=n("3f4a");t["a"]={username:function(e){return Object(r["a"])().get("users/"+e)}}},eff9:function(e,t,n){},fccc:function(e,t,n){"use strict";n("1efd")}});
//# sourceMappingURL=app.35d51b2c.js.map