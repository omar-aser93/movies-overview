(this["webpackJsonpmovies-overview"]=this["webpackJsonpmovies-overview"]||[]).push([[0],{38:function(e,t,a){e.exports=a(51)},43:function(e,t,a){},44:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),i=(a(43),a(44),a(8)),l=a(67),s=a(69),u=function(e){var t=e.title,a=e.poster_path,o=e.overview,c=e.vote_average,u=e.release_date,m="https://image.tmdb.org/t/p/w1280",v=Object(n.useState)(!1),d=Object(i.a)(v,2),p=d[0],h=d[1];return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"contain",onClick:function(){return h(!0)}},r.a.createElement("img",{src:m+a,alt:"poster"}),r.a.createElement("div",{className:"overview"},o)),r.a.createElement("h1",null,t),r.a.createElement("div",{className:"rate"},r.a.createElement("span",null,c),"  ",r.a.createElement("p",null,u)),r.a.createElement(l.a,{open:p,onClose:function(){return h(!1)}},r.a.createElement(s.a,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4}},r.a.createElement("div",{className:"modalData"},r.a.createElement("img",{src:m+a,alt:"poster"}),r.a.createElement("div",{className:"modalText"},r.a.createElement("div",null,o))))))},m=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),l=Object(i.a)(c,2),s=l[0],m=l[1];Object(n.useEffect)((function(){v()}),[]);var v=function(){fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8b3086d8cc10f509a461783c237dd937&page=1").then((function(e){return e.json()})).then((function(e){o(e.results),console.log(e.results)}))};return r.a.createElement("div",{className:"GetMovies"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?&api_key=8b3086d8cc10f509a461783c237dd937&page=1&query="+s).then((function(e){return e.json()})).then((function(e){o(e.results)}))}},r.a.createElement("input",{type:"search",placeholder:"search movie",value:s,onChange:function(e){return m(e.target.value)},required:!0}),r.a.createElement("button",{type:"submit"},"Search")),r.a.createElement("h2",null,"Trending Movies / Search reasults : "),r.a.createElement("div",{className:"moviesList"}," ",null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement(u,Object.assign({key:e.id},e))}))))};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.a9eb5aa1.chunk.js.map