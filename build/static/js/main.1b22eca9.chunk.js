(this.webpackJsonpbitclout=this.webpackJsonpbitclout||[]).push([[0],{134:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(12),r=c.n(i),s=(c(94),c(17)),o=c(175),l=c(195),d=c(176),j=c(177),h=c(197),b=c(198),u=c.p+"static/media/logo.57b619dd.png",p=c(2),g=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.a,{fluid:!0,className:"header",children:Object(p.jsxs)(l.a,{bg:"light",className:"pt-3 pb-3",children:[Object(p.jsx)(d.a,{sm:"4",md:"8",children:Object(p.jsx)(o.a,{className:"text-left",children:Object(p.jsxs)(l.a.Brand,{href:"#home",children:[Object(p.jsx)("img",{src:u,alt:u,className:"logo"})," ",Object(p.jsx)("h2",{className:"header",children:"BitcloutInfo"})]})})}),Object(p.jsxs)(d.a,{sm:"8",md:"4",className:"headerSearch",children:[Object(p.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(j.a,{className:"m-3",children:[Object(p.jsx)(h.a,{placeholder:"Search"}),Object(p.jsx)(j.a.Append,{children:Object(p.jsx)(b.a,{variant:"outline-success",className:"mr-2",children:"Search"})})]})})]})]})})})},m=c(39),x=c.n(m),O=c(48),f=c(49),v=c(178),y=c(196),C=c(74),P=c.n(C),S=c(54),k=c.n(S);var N,w=function(e){var t=Object(a.useState)([]),c=Object(s.a)(t,2),n=c[0],i=c[1],r=Object(a.useState)(!0),o=Object(s.a)(r,2),l=o[0],j=o[1],h=Object(a.useState)(!1),b=Object(s.a)(h,2),u=b[0],g=b[1],m=function(e){var t=e/1e9*localStorage.getItem("bitclout_price");return"$".concat(t.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","))},C=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([k.a.post("https://api-bitclout.herokuapp.com/api/v1/get-profiles",{PublicKeyBase58Check:"",Username:null,UsernamePrefix:null,Description:null,OrderBy:"influencer_coin_price",NumToFetch:5,ReaderPublicKeyBase58Check:"BC1YLiZ3Jgat6FKmWR8mcZEyW5JkGghspJtSX3WVijnL87kV1sD9Npo",ModerationType:"leaderboard",FetchUsersThatHODL:!1,AddGlobalFeedBool:!1}).then((function(e){return e.data})).catch((function(e){return console.log(e.message),e}))]).then((function(e){var t,c=[],a=Object(O.a)(e[0].ProfilesFound.entries());try{for(a.s();!(t=a.n()).done;){var n=Object(s.a)(t.value,2),r=n[0],o=n[1];c.push(Object(p.jsx)(d.a,{md:"10",className:"topGainers",children:Object(p.jsxs)(v.a,{children:[Object(p.jsx)(d.a,{md:"2",children:Object(p.jsx)("img",{src:"https://bitclout.com/api/v0/get-single-profile-picture/".concat(o.PublicKeyBase58Check),alt:"pic",width:"15vw",height:"15vh"})}),Object(p.jsx)(d.a,{md:"5",children:Object(p.jsxs)("h6",{style:{fontSize:"0.9rem"},children:[o.Username," ",o.IsVerified?Object(p.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/good-quality.png",alt:"",width:"12px",height:"12px"}):""]})}),Object(p.jsx)(d.a,{md:"5",children:Object(p.jsx)("h6",{style:{color:"green"},children:m(o.CoinPriceBitCloutNanos)})})]})},r))}}catch(l){a.e(l)}finally{a.f()}i(c),j(!1)})).catch((function(e){return console.log(e),e}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){C()})),Object(a.useEffect)((function(){null==e.creator?g(!1):g(!0)}),[g,e.creator]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(y.a,{bg:"light",className:"RateCard m-4",children:Object(p.jsxs)(d.a,{md:"10",children:[Object(p.jsx)("h5",{children:"Bitclout price"}),Object(p.jsxs)("h6",{children:["~$",localStorage.getItem("bitclout_price")," per coin"]})]})}),Object(p.jsxs)(y.a,{bg:"light",className:"WishlistCard",children:[Object(p.jsx)(d.a,{md:"10",children:Object(p.jsx)("h6",{className:"topGainersText",children:"Top Gainers"})}),l?Object(p.jsx)(P.a,{color:"black",size:"50"}):n]}),Object(p.jsxs)(y.a,{bg:"light",className:"CoinInfoCard m-4",children:[Object(p.jsx)(d.a,{md:"10",children:Object(p.jsx)("h6",{className:"coinInfoHeader pt-3",children:"Creator's Bitclout Info"})}),Object(p.jsx)(d.a,{md:"10",className:"infoSection p-1",children:u?Object(p.jsx)("h6",{children:e.creator.name}):Object(p.jsx)("h4",{className:"noInfoText",children:"Click View Creator's Coin To See Data Here!"})})]})]})},B=c(75),I=c(47),F=c(4),R=c(185),T=c(14),D=c(191),L=c(192),U=c(184),V=c(190),W=c(179),H=c(194),_=c(183),E=c(199),z=c(186),J=c(136),K=c(189),G=c(188),M=c(200),Z=c(193),$=c(201),q=c(78),A=c.n(q),X=c(79),Y=c.n(X),Q=function(e){var t=e/1e9*localStorage.getItem("bitclout_price");return"$ ".concat(t.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","))},ee=function(e){var t=e/1e9*localStorage.getItem("bitclout_price");return"$ ".concat(t.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,","))};function te(e,t,c){return t[c]<e[c]?-1:t[c]>e[c]?1:0}function ce(e,t){return"desc"===e?function(e,c){return te(e,c,t)}:function(e,c){return-te(e,c,t)}}function ae(e,t){var c=e.map((function(e,t){return[e,t]}));return c.sort((function(e,c){var a=t(e[0],c[0]);return 0!==a?a:e[1]-c[1]})),c.map((function(e){return e[0]}))}var ne=[{id:"index",numeric:!1,disablePadding:!1,label:"Rank"},{id:"name",numeric:!1,disablePadding:!1,label:"Username"},{id:"IsReserved",numeric:!0,disablePadding:!1,label:"Reserved"},{id:"IsVerified",numeric:!0,disablePadding:!1,label:"Verified Status"},{id:"coinPrice",numeric:!0,disablePadding:!1,label:"Coin Price"},{id:"holders",numeric:!0,disablePadding:!1,label:"Coin Holders"},{id:"founderReward",numeric:!0,disablePadding:!1,label:"Founder's Reward"},{id:"totalUSDLocked",numeric:!0,disablePadding:!1,label:"Total USD Locked"},{id:"",numeric:!1,disablePadding:!1,label:""}];function ie(e){var t=e.classes,c=e.order,a=e.orderBy,n=e.onRequestSort;return Object(p.jsx)(W.a,{children:Object(p.jsx)(_.a,{children:ne.map((function(e){return Object(p.jsx)(U.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:a===e.id&&c,children:Object(p.jsxs)(E.a,{active:a===e.id,direction:a===e.id?c:"asc",onClick:(i=e.id,function(e){n(e,i)}),children:[Object(p.jsx)("h3",{className:t.headers,children:e.label}),a===e.id?Object(p.jsx)("span",{className:t.visuallyHidden,children:"desc"===c?"sorted descending":"sorted ascending"}):null]})},e.id);var i}))})})}var re=Object(R.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(T.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%",fontFamily:"Roboto",fontSize:"1.6rem",fontWeight:"600"}}})),se=function(e){var t=re();return Object(p.jsxs)(z.a,{className:Object(F.a)(t.root),children:[Object(p.jsx)(J.a,{className:t.title,variant:"h5",id:"tableTitle",component:"div",children:"Top Bitclout Creators"}),Object(p.jsx)(M.a,{title:"Filter list",children:Object(p.jsx)(G.a,{"aria-label":"filter list",children:Object(p.jsx)(A.a,{})})})]})},oe=Object(R.a)((function(e){return{root:{margin:"2vh",fontSize:"1rem",fontWeight:"bolder",justifyContent:"center",alignItems:"center"},paper:{width:"100%",marginBottom:e.spacing(2),boxShadow:"2px 0px 2px 2px"},table:{minWidth:"40vw"},headers:{fontSize:"15px",fontWeight:600},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},helpText:{fontSize:"12px",paddingLeft:"0.5rem"}}}));function le(e){var t=oe(),c=n.a.useState("asc"),a=Object(s.a)(c,2),i=a[0],r=a[1],o=n.a.useState("index"),l=Object(s.a)(o,2),d=l[0],j=l[1],h=n.a.useState([]),b=Object(s.a)(h,2),u=b[0],g=b[1],m=n.a.useState(0),v=Object(s.a)(m,2),y=v[0],C=v[1],P=n.a.useState(!1),S=Object(s.a)(P,2),w=S[0],F=S[1],R=n.a.useState(10),T=Object(s.a)(R,2),W=T[0],E=T[1],z=n.a.useState(!0),G=Object(s.a)(z,2),M=G[0],q=G[1],A=W-Math.min(W,u.length-y*W),X=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([k.a.post("https://api-bitclout.herokuapp.com/api/v1/get-profiles",{PublicKeyBase58Check:"",Username:null,UsernamePrefix:null,Description:null,OrderBy:"influencer_coin_price",NumToFetch:140,ReaderPublicKeyBase58Check:"BC1YLiZ3Jgat6FKmWR8mcZEyW5JkGghspJtSX3WVijnL87kV1sD9Npo",ModerationType:"leaderboard",FetchUsersThatHODL:!1,AddGlobalFeedBool:!1}).then((function(e){return e.data})).catch((function(e){return console.log(e.message),e})),k.a.get("https://api-bitclout.herokuapp.com/api/v1/get-bitclout-price").then((function(e){return e.data})).catch((function(e){return console.log(e.message),e}))]).then((function(e){localStorage.setItem("bitclout_price",e[1].bitclout_price);var t=[];console.log(e);var c,a,n=Object(O.a)(e[0].ProfilesFound.entries());try{for(n.s();!(c=n.n()).done;){var i=Object(s.a)(c.value,2),r=i[0],o=i[1];console.log(o),t.push({index:r+1,name:o.Username,profilePic:"https://bitclout.com/api/v0/get-single-profile-picture/".concat(o.PublicKeyBase58Check),IsReserved:o.IsReserved?"\u2714\ufe0f":"-",IsVerified:o.IsVerified?"\u2714\ufe0f":"\u274c",coinPrice:Q(o.CoinPriceBitCloutNanos),founderReward:(a=o.CoinEntry.CreatorBasisPoints,"".concat((a/100).toFixed(0),"%")),totalUSDLocked:ee(o.CoinEntry.BitCloutLockedNanos),coinHolders:o.CoinEntry.NumberOfHolders,posts:o.Posts})}}catch(l){n.e(l)}finally{n.f()}g(t),q(!1)})).catch((function(e){return console.log(e),e}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n.a.useEffect((function(){X()}),[]);var te=Object(I.css)(N||(N=Object(B.a)(['\n    display: relative;\n    justifycontent: "center";\n    alignitems: "center";\n  '])));return Object(p.jsxs)("div",{className:t.root,children:[Object(p.jsxs)(K.a,{className:t.paper,children:[Object(p.jsx)(se,{}),Object(p.jsx)(V.a,{children:Object(p.jsxs)(D.a,{className:t.table,"aria-labelledby":"tableTitle",size:w?"small":"medium","aria-label":"customized table",children:[Object(p.jsx)(ie,{classes:t,order:i,orderBy:d,onRequestSort:function(e,t){r(d===t&&"asc"===i?"desc":"asc"),j(t)},rowCount:u.length}),M?Object(p.jsx)(L.a,{children:Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)(Y.a,{color:"black",loading:M,css:te,height:50,width:5,radius:5,margin:2})})}):Object(p.jsxs)(L.a,{children:[ae(u,ce(i,d)).slice(y*W,y*W+W).map((function(t,c){var a="enhanced-table-checkbox-".concat(c);return Object(p.jsxs)(_.a,{hover:!0,tabIndex:-1,children:[Object(p.jsx)(U.a,{align:"left",children:t.index}),Object(p.jsxs)(U.a,{component:"th",id:a,scope:"row",padding:"none",children:[Object(p.jsx)("img",{src:t.profilePic,alt:t.profilePic,width:"40px",height:"40px"})," ",t.name]}),Object(p.jsx)(U.a,{align:"right",children:t.IsReserved}),Object(p.jsx)(U.a,{align:"right",children:t.IsVerified}),Object(p.jsx)(U.a,{align:"right",children:t.coinPrice}),Object(p.jsx)(U.a,{align:"right",style:{color:"green"},children:t.coinHolders}),Object(p.jsx)(U.a,{align:"right",children:t.founderReward}),Object(p.jsx)(U.a,{align:"right",children:t.totalUSDLocked}),Object(p.jsx)(U.a,{align:"right",children:Object(p.jsx)("button",{onClick:function(t){return e.setCreator(t)},children:"View"})})]},t.index)})),A>0&&Object(p.jsx)(_.a,{style:{height:(w?33:53)*A},children:Object(p.jsx)(U.a,{colSpan:6})})]})]})}),Object(p.jsx)(H.a,{rowsPerPageOptions:[5,10,25],component:"div",count:u.length,rowsPerPage:W,page:y,onChangePage:function(e,t){C(t)},onChangeRowsPerPage:function(e){E(parseInt(e.target.value,10)),C(0)}}),Object(p.jsx)(J.a,{className:t.helpText,variant:"h6",children:"(Filter through the data by hovering on the headers and click on the arrow pointer that appears)"})]}),Object(p.jsx)(Z.a,{control:Object(p.jsx)($.a,{checked:w,onChange:function(e){F(e.target.checked)}}),label:"Dense padding"})]})}var de=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{}),Object(p.jsxs)(v.a,{children:[Object(p.jsx)(d.a,{md:"2",children:Object(p.jsx)(w,{creator:c})}),Object(p.jsx)(d.a,{md:"10",children:Object(p.jsx)(le,{setCreator:n})})]})]})};c(133);r.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(de,{})}),document.getElementById("root"))},94:function(e,t,c){}},[[134,1,2]]]);
//# sourceMappingURL=main.1b22eca9.chunk.js.map