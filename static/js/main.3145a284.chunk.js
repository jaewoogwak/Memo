(this.webpackJsonpmemo=this.webpackJsonpmemo||[]).push([[0],{58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){},67:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c.n(n),a=c(21),s=c.n(a),l=(c(58),c(8)),r=(c(59),c(60),c(2)),i=function(e){var t=e.handleDeleteMemo;return Object(r.jsx)("button",{className:"del",onClick:t,children:"X"})},d=function(e){var t=e.memoList,c=e.setList,o=e.text,a=e.date;console.log("memolist: ",t);var s=Object(n.useRef)();console.log("text, date : ",o,a);return Object(r.jsxs)("div",{class:"memo",children:[Object(r.jsxs)("div",{class:"text",ref:s,children:[console.log("memo : ",o),o]}),Object(r.jsx)(i,{handleDeleteMemo:function(e){console.log("delMemo2",e.target),console.log("useRef=>memo: ",s.current.innerText);var n=s.current.innerText;console.log("delMemo",n);var o=t.filter((function(e){return e.text!=n}));console.log("newMemoList",o),c(o)}})]})},j=(c(62),function(e){var t=e.memoList,c=e.setList,n=e.date,o=0;return Object(r.jsx)("div",{children:t.map((function(e){if(e.date===n)return Object(r.jsx)(d,{memoList:t,setList:c,text:e.text,date:e.date},o++)}))})}),u=c(5),b=c(96),m=c(95),g=c(99),O=c(98);function x(e){var t,c=n.useState(!1),o=Object(l.a)(c,2),a=o[0],s=o[1],i=Object(n.useRef)(),d=e.onClick,j=e.date,x=function(){s(!1)};return Object(r.jsxs)("div",{className:"bt",children:[Object(r.jsx)(b.a,{className:"addBtn",variant:"outlined",onClick:function(){s(!0)},children:"\ud560 \uc77c \ucd94\uac00"}),Object(r.jsxs)(m.a,{open:a,onClose:x,children:[Object(r.jsxs)(O.a,{children:[Object(r.jsx)("p",{children:"\ubb34\uc2a8 \uc0dd\uac01 \ud558\uc138\uc694?"}),Object(r.jsx)("input",(t={type:"text",autoFocus:!0,placeholder:"What do you think of?"},Object(u.a)(t,"type","text"),Object(u.a)(t,"ref",i),t))]}),Object(r.jsxs)(g.a,{children:[Object(r.jsx)(b.a,{onClick:x,children:"\ucde8\uc18c"}),Object(r.jsx)(b.a,{onClick:function(e){console.log("data Submit",e.target),console.log(i.current.value),d(i.current.value,j),x()},children:"\ud560 \uc77c \ucd94\uac00"})]})]})]})}var h=c(24),v=(c(67),c.p+"static/media/right.5a2b140e.png"),f=c.p+"static/media/left.a8b529cf.png",y=function(e){var t=e.pageNext,c=e.pagePrevious,o=e.getDate,a=Object(n.useState)({year:0,momth:0,day:0}),s=Object(l.a)(a,2),i=s[0],d=s[1],j=Object(n.useState)("".concat((new Date).getFullYear()).concat((new Date).getMonth()+1).concat((new Date).getDate())),u=Object(l.a)(j,2),b=u[0],m=u[1];return Object(n.useEffect)((function(){!function(){var e=new Date,t=e.getFullYear(),c=("0"+(1+e.getMonth())).slice(-2),n=("0"+e.getDate()).slice(-2);d((function(e){return Object(h.a)(Object(h.a)({},e),{},{year:t,momth:c,day:n})})),m("".concat(t,"\ub144 ").concat(c,"\uc6d4 ").concat(n,"\uc77c")),console.log("gettoday",b),console.log("presentDay",i)}(),console.log("today",b),o(b)}),[]),Object(r.jsxs)("div",{class:"calender-bar",children:[console.log("rendering"),Object(r.jsx)("div",{class:"present",children:b}),Object(r.jsxs)("div",{class:"content-date",children:[Object(r.jsx)("div",{onClick:function(){console.log("previous"),c(),function(){var e=Number(i.year),t=Number(i.momth),c=Number(i.day);console.log("yymmdd",e,t,c);var n=new Date(e,t-1,c);console.log("now",n);var a=new Date(n.setDate(n.getDate()-1));console.log("\ub0b4\uc77c : ",a);var s=a.getFullYear(),l=a.getMonth()+1,r=a.getDate();console.log("year,month,day",s,l,r),o("".concat(s).concat(l).concat(r)),m("".concat(s,"\ub144 ").concat(l,"\uc6d4 ").concat(r,"\uc77c")),d((function(e){return Object(h.a)(Object(h.a)({},e),{},{year:s,momth:l,day:r})}))}()},class:"button previous",children:Object(r.jsx)("img",{src:f,alt:"\uc5b4\uc81c"})}),Object(r.jsx)("div",{class:"day yesterday",children:Number(i.day)-1}),Object(r.jsx)("div",{class:"day today",children:i.day}),Object(r.jsx)("div",{class:"day tomorrow",children:Number(i.day)+1}),Object(r.jsx)("div",{onClick:function(){console.log("next"),t(),function(){var e=Number(i.year),t=Number(i.momth),c=Number(i.day);console.log("yymmdd",e,t,c);var n=new Date(e,t-1,c);console.log("now",n);var a=new Date(n.setDate(n.getDate()+1));console.log("\ub0b4\uc77c : ",a);var s=a.getFullYear(),l=a.getMonth()+1,r=a.getDate();console.log("year,month,day",s,l,r),o("".concat(s).concat(l).concat(r)),m("".concat(s,"\ub144 ").concat(l,"\uc6d4 ").concat(r,"\uc77c")),d((function(e){return Object(h.a)(Object(h.a)({},e),{},{year:s,momth:l,day:r})}))}()},class:"button next",children:Object(r.jsx)("img",{src:v,alt:"\ub0b4\uc77c"})})]})]})};var p=function(){var e=Object(n.useState)([{text:"",date:""}]),t=Object(l.a)(e,2),c=t[0],o=t[1],a=Object(n.useState)(""),s=Object(l.a)(a,2),i=s[0],d=s[1];return Object(n.useRef)(),Object(r.jsxs)("div",{class:"content",children:[console.log("app render"),Object(r.jsx)("div",{class:"nav-date",children:Object(r.jsx)(y,{pageNext:function(){console.log("page next")},pagePrevious:function(){console.log("page previous")},getDate:function(e){console.log("getDate -> setDate",e),d(e)}})}),Object(r.jsx)("div",{class:"list",children:Object(r.jsx)("div",{children:Object(r.jsx)(j,{memoList:c,setList:o,date:i})})}),Object(r.jsx)("div",{children:Object(r.jsx)(x,{onClick:function(e,t){console.log("addMemo"),o(c.concat([{text:e,date:t}])),console.log("list",c)},date:i})})]})};c(68);s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3145a284.chunk.js.map