(this.webpackJsonpjibaro=this.webpackJsonpjibaro||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),l=n.n(c),i=(n(26),n(8)),o=n(9),s=n(11),u=n(10),d=n(6),m=n(1),h=n(20),f=function(){var e="";switch(Math.floor(8*Math.random())+1){case 1:e="action";break;case 2:e="comedy";break;case 3:e="drama";break;case 4:e="fantasy";break;case 5:e="horror";break;case 6:e="mystery";break;case 7:e="romance";break;case 8:e="thriller";break;default:e="unique"}return e},p=function(){var e="";switch(Math.floor(7*Math.random())+1){case 1:e="g";break;case 2:e="pg";break;case 3:e="pg13";break;case 4:e="r";break;case 5:e="nc17";break;case 6:e="unrated";break;case 7:e="not rated";break;default:e="unique"}return e},g=function(e){return{fontWeight:"700",fontSize:"26px",textTransform:"uppercase",color:e||"#F6FFF8",margin:"0",padding:"0"}},v=function(e){var t=e.text;return r.a.createElement("h1",{style:g(e.textColor)},t||"hello word")},E=function(e){return{padding:"0",margin:"0",fontWeight:"700",fontSize:"18px",textTransform:"uppercase",color:e||"#F6FFF8"}},x=function(e){var t=e.text;return r.a.createElement("h1",{style:E(e.textColor)},t||"hello word")};var b=function(e){return a.createElement("svg",Object.assign({width:20,height:20,fill:"none"},e),a.createElement("path",{d:"M4.7 0H0v9h2l2.7-9zm13.301 13h-6v4a3 3 0 01-3 3H8v-4l-2.9-3.625A5.02 5.02 0 014 9.24V8l2.1-7h8.337a4 4 0 013.88 3.03l1.622 6.485A2 2 0 0118.001 13z",fill:"#F6FFF8"}))};var y=function(e){return a.createElement("svg",Object.assign({width:21,height:20,fill:"none"},e),a.createElement("path",{d:"M4.787 20H.103v-9h1.993l2.691 9zM18.043 7h-5.98V3c0-.796-.315-1.559-.876-2.121A2.985 2.985 0 009.073 0h-.997v4l-2.89 3.625A5.03 5.03 0 004.09 10.76V12l2.093 7h8.309c.89 0 1.752-.298 2.453-.847a4 4 0 001.414-2.183l1.617-6.485a2.005 2.005 0 00-1.06-2.282A1.988 1.988 0 0018.044 7z",fill:"#F6FFF8"}))},w=function(e){return{margin:"10px",padding:"15px 25px",width:"90px !important",height:"45px !important",backgroundColor:e||"#89BEB2",textAlign:"center",boxShadow:"4px 4px 10px rgba(153, 153, 153, 0.8)",border:"none",borderRadius:"3px"}},k=function(e){var t=e.onclick,n=e.text,a=e.bColor;return t=t||"",r.a.createElement("button",{onClick:t,style:w(a)},r.a.createElement(x,{text:n,textColor:"#F6FFF8"}))},C={section:function(e){return{display:"inline-block",background:"green",backgroundImage:"url("+e+")",width:"300px",height:"175px",borderRadius:"6px",margin:"5px",boxSizing:"border-box"}},div:function(){return{width:"25%",height:"25%",margin:"10px",padding:"0",display:"flex",alignItems:"flex-start",justifyContent:" space-around"}},heads:function(){return{width:"100%",height:"25%",margin:"5px",padding:"15px 0px",display:"flex",flexFlow:"wrap",alignItems:"flex-start",justifyContent:" space-around"}},buttons:function(){return{display:"flex",width:"100%",marginTop:"25px"}}},F=function(e){var t=e.rate,n=e.rating,a=e.category,c=e.src,l=e.movieName,i=e.id,o=e.movie;n=n||"none",a=a||"unique";var s=(t=t||50)<=55?r.a.createElement(b,null):r.a.createElement(y,null);return r.a.createElement("section",{style:C.section(c),key:i},r.a.createElement("div",{style:C.heads()},r.a.createElement("div",null,r.a.createElement(v,{text:l}),r.a.createElement(x,{text:"".concat(t,", ").concat(a)})),r.a.createElement("div",{style:C.div()},r.a.createElement(x,{text:n+"%"}),s),r.a.createElement("div",{style:C.buttons()},r.a.createElement(d.b,{to:{pathname:"/video/".concat(i),state:{movie:o}}},r.a.createElement(k,{text:"watch",bColor:"#34463E"})),r.a.createElement(k,{text:"save"}))))},z=(n(32),{div:function(e){return{border:"#34463E solid 3px",borderRadius:"6px",width:e||"380px",height:"40px",display:"flex",justifyContent:"flex-end",backgroundColor:"#A4C3B2"}},input:{width:"85%",border:"none",borderRadius:"6px",backgroundColor:"#A4C3B2"},icon:{padding:"0",margin:"5px",alignSelf:"center",display:"flex"},label:{margin:"0",padding:"0"}}),j=function(e){var t=e.name,n=e.icon,a=e.action,c=e.size;return r.a.createElement("div",{style:z.div(c)},r.a.createElement("input",{className:"input",style:z.input,name:t,id:t,type:"text",onChange:function(e){return a(e,e.target.value)}}),r.a.createElement("div",{style:z.icon},n))};var M=function(e){return a.createElement("svg",Object.assign({width:19,height:19,fill:"none"},e),a.createElement("path",{d:"M19 16.471l-5.096-5.095a7.46 7.46 0 001.09-3.876A7.498 7.498 0 100 7.498a7.495 7.495 0 007.498 7.494 7.45 7.45 0 003.877-1.089L16.473 19 19 16.47v.001zM2.86 7.498A4.645 4.645 0 017.496 2.86a4.644 4.644 0 014.637 4.638 4.644 4.644 0 01-4.636 4.636A4.646 4.646 0 012.86 7.497l-.002.001z",fill:"#34463E"}))},B={button:function(){return{background:"#A4C3B2",border:"none"}}},O=function(e){var t=e.action,n=e.size;return r.a.createElement("div",null,r.a.createElement(j,{icon:r.a.createElement("button",{style:B.button()},r.a.createElement(M,null)),size:n,action:t}))};var _=function(e){return a.createElement("svg",Object.assign({width:95,height:48,fill:"none"},e),a.createElement("g",{clipPath:"url(#prefix__clip0)"},a.createElement("path",{d:"M79.78 34H2.1c-6.818 0 21.915 14 24.35 14 .487 0 1.218 0 1.948-.233L72.474 41l7.305-7zM84.65 38.667c3.165.233 5.6 1.633 6.818 2.333.487 0 .73-.233.73-.467l2.192-3.966c0-.234 0-.234-.244-.467l-1.948-1.867c0-.233-.243-.233-.487-.233h-9.496l-7.306 7c1.218-.7 4.87-2.8 9.74-2.333zM82.457 36.8c0-.467.243-.7.73-.7s.487.233.487.7c0 .467-.243.467-.487.467-.243 0-.73-.234-.73-.467zm7.061.233c0-.466.487-.7.731-.7.243 0 .487.234.487.467s-.243.467-.487.467c-.243 0-.73 0-.73-.234z",fill:"#1B4332"}),a.createElement("path",{d:"M89.763 36.8c0 .258.218.467.487.467a.477.477 0 00.487-.467.477.477 0 00-.487-.467.477.477 0 00-.487.467zM82.701 36.8c0 .258.218.467.487.467a.477.477 0 00.487-.467.477.477 0 00-.487-.467.477.477 0 00-.487.467z",fill:"#fff"})),a.createElement("path",{d:"M1.203 21.776h5.6v3.52c0 .47.267.704.8.704h.352c.533 0 .8-.235.8-.704V9.456h5.6v16.576c0 2.645-1.568 3.968-4.704 3.968H5.907c-3.136 0-4.704-1.323-4.704-3.968v-4.256zm15.585-12.32h5.6V30h-5.6V9.456zm16.764 7.712V13.84c0-.47-.266-.704-.8-.704h-2.304v4.736h2.304c.534 0 .8-.235.8-.704zm0 8.448v-3.36c0-.47-.266-.704-.8-.704h-2.304v4.768h2.304c.534 0 .8-.235.8-.704zm-8.608-16.16h9.408c3.136 0 4.704 1.323 4.704 3.968v2.624c0 1.856-.512 3.061-1.536 3.616.598.256 1.003.65 1.216 1.184.214.512.32 1.216.32 2.112v3.072c0 2.645-1.568 3.968-4.704 3.968h-9.408V9.456zM51.908 30l-.64-3.072H46.34L45.668 30h-5.504l5.28-20.544h6.816L57.54 30h-5.632zm-4.704-7.04h3.2l-1.568-7.392-1.632 7.392zm17.215-.256V30h-5.6V9.456h9.504c3.136 0 4.704 1.323 4.704 3.968v5.312c0 2.027-.917 3.275-2.752 3.744L74.051 30h-6.016l-3.264-7.296h-.352zm2.208-9.248H64.42v5.44h2.208c.534 0 .8-.235.8-.704V14.16c0-.47-.266-.704-.8-.704zm13.238-4H84.6c3.136 0 4.704 1.323 4.704 3.968v12.608c0 2.645-1.568 3.968-4.704 3.968h-4.736c-3.136 0-4.704-1.323-4.704-3.968V13.424c0-2.645 1.568-3.968 4.704-3.968zm3.84 15.84V14.16c0-.47-.267-.704-.8-.704H81.56c-.534 0-.8.235-.8.704v11.136c0 .47.267.704.8.704h1.344c.533 0 .8-.235.8-.704z",fill:"#6B9080"}),a.createElement("defs",null,a.createElement("clipPath",{id:"prefix__clip0"},a.createElement("path",{fill:"#fff",transform:"rotate(90 30.195 64.195)",d:"M0 0h14v93.507H0z"}))))};var S=function(e){return a.createElement("svg",Object.assign({width:34,height:36,fill:"none"},e),a.createElement("g",{filter:"url(#prefix__filter0_d)"},a.createElement("path",{d:"M28.589 27.675a1 1 0 000-1.71l-16.683-10.11a1 1 0 010-1.71L28.59 4.035a1 1 0 000-1.71L25.27.315a1 1 0 00-1.037 0L1.411 14.144a1 1 0 000 1.71l22.823 13.83a1 1 0 001.037 0l3.318-2.01z",fill:"#34463E"})),a.createElement("defs",null,a.createElement("filter",{id:"prefix__filter0_d",x:.93,y:.169,width:32.141,height:35.661,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),a.createElement("feOffset",{dx:2,dy:4}),a.createElement("feGaussianBlur",{stdDeviation:1}),a.createElement("feColorMatrix",{values:"0 0 0 0 0.203922 0 0 0 0 0.27451 0 0 0 0 0.243137 0 0 0 0.5 0"}),a.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))))},A={body:function(){return{backgroundColor:"#A4C3B2",minHeight:"100vh",widht:"100%"}},cardsDeck:function(){return{minWidth:"920px",width:"75%",display:"flex",flexFlow:"wrap",justifyContent:"space-around",padding:"50px",margin:"10px auto"}},card:function(){return{margin:"10px 0"}},controller:function(){return{display:"flex",justifyContent:"space-between",alignItems:"center",width:"60vw",padding:"30px"}}},I=function(e){var t;return t=e.search.map((function(e){return r.a.createElement("div",{style:A.card()},r.a.createElement(F,{id:e.id,rate:e.rate,rating:e.rating,category:e.category,movieName:e.name,src:e.src,movie:e}))})),r.a.createElement("div",{style:A.body()},r.a.createElement("div",{style:A.controller()},r.a.createElement("div",null,r.a.createElement(S,null)),r.a.createElement("div",null,r.a.createElement(_,null)),r.a.createElement("form",null,r.a.createElement(O,{action:e.results}))),r.a.createElement("div",{style:A.cardsDeck()},t))};var H=function(e){return a.createElement("svg",Object.assign({width:34,height:36,fill:"none"},e),a.createElement("g",{filter:"url(#prefix__filter0_d)"},a.createElement("path",{d:"M1.411 2.325a1 1 0 000 1.71l16.683 10.11a1 1 0 010 1.71L1.41 25.965a1 1 0 000 1.71l3.318 2.01a1 1 0 001.037 0l22.823-13.83a1 1 0 000-1.71L5.766.315a1 1 0 00-1.037 0l-3.318 2.01z",fill:"#F6FFF8"})),a.createElement("defs",null,a.createElement("filter",{id:"prefix__filter0_d",x:.929,y:.169,width:32.141,height:35.661,filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),a.createElement("feColorMatrix",{in:"SourceAlpha",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),a.createElement("feOffset",{dx:2,dy:4}),a.createElement("feGaussianBlur",{stdDeviation:1}),a.createElement("feColorMatrix",{values:"0 0 0 0 0.203922 0 0 0 0 0.27451 0 0 0 0 0.243137 0 0 0 1 0"}),a.createElement("feBlend",{in2:"BackgroundImageFix",result:"effect1_dropShadow"}),a.createElement("feBlend",{in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))))},V={body:function(){return{backgroundColor:"#A4C3B2",minHeight:"100vh",widht:"100%",margin:"0",padding:"10px"}},cardsDeck:function(){return{width:"100%",display:"flex",flexFlow:"column wrap",justifyContent:"space-around",padding:"0px",margin:"10px 0"}},card:function(){return{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#34463E",borderRadius:"6px",height:"60px",width:"75%",padding:"0",margin:"5px auto"}},controller:function(){return{display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%",padding:"20px 0",margin:"0"}},button:function(){return{borderRadius:"0 6px 6px 0",backgroundColor:"#517B64",height:"60px",border:"none"}}},L=function(e){var t;return t=e.search.map((function(e){return r.a.createElement("article",{style:V.card()},r.a.createElement("div",{style:{padding:"0 10px"}},r.a.createElement(v,{text:e.name})),r.a.createElement(d.b,{to:{pathname:"/video/".concat(e.id),state:{movie:e}}},r.a.createElement("button",{style:V.button()},r.a.createElement(H,null))))})),r.a.createElement("div",{style:V.body()},r.a.createElement("div",{style:V.controller()},r.a.createElement("div",null,r.a.createElement(S,null)),r.a.createElement("form",null,r.a.createElement(O,{size:"240px",action:e.results}))),r.a.createElement("div",{style:V.cardsDeck()},t))},R=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],search:[]},e.search=function(t,n){t.preventDefault(),e.setState({search:[]});var a=[];e.state.movies.forEach((function(e){e.name.includes(n)&&n.length>0&&a.push(e)})),e.setState({search:a})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({videosList:[]}),fetch("https://pixabay.com/api/videos/?key=17004747-4fedee7cd990d0ed3ec1f708c&per_page=50",{method:"GET",mode:"cors"}).then((function(e){return e.json()})).then((function(e){return e.hits.map((function(e){return{id:e.id,name:e.tags.split(",")[0],rate:p(),rating:Math.floor(100*Math.random())+1,category:f(),src:e.userImageURL,videos:e.videos.medium}}))})).then((function(t){t.map((function(t){return e.state.movies.push(t)})),e.setState(Object(h.a)({},t))}))}},{key:"render",value:function(){var e;return e=window.screen.width<=380?r.a.createElement(L,{search:this.state.search,results:this.search}):window.screen.width>=381&&window.screen.width<=900?"tablet size":r.a.createElement(I,{search:this.state.search,results:this.search}),r.a.createElement("div",{style:D.body()},e)}}]),n}(a.Component),D={body:function(){return{backgroundColor:"#A4C3B2",minHeight:"100vh",widht:"100%"}}},G=R,U=function(e){var t=e.location.state.movie.videos;return console.log(t.url),r.a.createElement("div",null,r.a.createElement("video",{style:{width:"100%",height:"100%"},controls:!0},r.a.createElement("source",{src:t.url,type:"video/mp4"})))},W=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:G}),r.a.createElement(m.a,{exact:!0,path:"/video/:id",component:U})))}}]),n}(a.Component),N=(n(33),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.a,null,r.a.createElement(W,null)))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.82e5a6f7.chunk.js.map