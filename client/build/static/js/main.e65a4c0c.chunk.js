(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),s=n(2),l=(n(15),n(1));var i=function(e){return Object(l.jsx)("button",{className:"destroy",onClick:e.onClick})};var u,d=function(e){return Object(l.jsx)("li",{className:e.className,onClick:e.onToggle,children:Object(l.jsxs)("div",{className:"view",children:[Object(l.jsx)("input",{className:"toggle",type:"checkbox",checked:e.checked,readOnly:!0}),Object(l.jsx)("label",{children:e.children}),Object(l.jsx)(i,{onClick:function(t){e.onRemove(),t.stopPropagation()}})]})})};!function(e){e[e.Planned=0]="Planned",e[e.Completed=1]="Completed"}(u||(u={}));var p=u,f=n(3),j=n.n(f),b=n(5),h=n(16),v=n(17),m="",O=[];var x,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=t.type;switch(n){case"todo/markAll":return e.map((function(e){return e.state=p.Completed,e}));case"todo/unmarkAll":return e.map((function(e){return e.state=p.Planned,e}));case"todo/add":console.log(m);var a=e.concat(t.payload);return a;case"todo/remove":return e.filter((function(e){return t.payload!==e.id}));case"todo/toggle":var c=t.payload.id,r=t.payload.state;return e.map((function(e){var t=Object(v.a)({},e);return c===e.id&&(t.state=r),t}));case"todo/fetchTodos":return Object(h.a)(t.payload);default:return e}};!function(e){e[e.All=0]="All",e[e.Completed=1]="Completed",e[e.Planned=2]="Planned"}(x||(x={}));var g=x;var k=function(e){var t=Object(s.c)((function(e){return e.todos})),n=Object(s.b)(),a=Object(s.c)((function(e){return e.visibility})),c=t.filter((function(e){return a===g.Completed&&e.state===p.Completed||(a===g.Planned&&e.state===p.Planned||a===g.All)}));return Object(l.jsx)("ul",{className:"todo-list",children:c.map((function(e){return Object(l.jsx)(d,{todoState:e.state,onRemove:function(){return n((t=e.id,function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("api/v1/todos/"+t,{method:"DELETE"});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,a.ok&&n({type:"todo/fetchTodos",payload:Array.from(c)}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()));var t},onToggle:function(){return n((t=e.id,function(){var e=Object(b.a)(j.a.mark((function e(n,a){var c,r,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a().todos,r=c.find((function(e){return e.id===t})).state,o=r===p.Completed?0:1,e.prev=3,e.next=6,fetch("api/v1/todos/"+t,{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({state:o})});case 6:e.sent.ok&&n({type:"todo/toggle",payload:{id:t,state:o}}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,n){return e.apply(this,arguments)}}()));var t},className:e.state===p.Completed?"completed":"editing",checked:e.state===p.Completed,children:e.name},e.id)}))})},C=n(6);var N=function(){var e=Object(a.useState)(""),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(s.b)();return Object(l.jsx)("input",{className:"new-todo",value:n,onChange:function(e){c(e.target.value)},onKeyDown:function(e){if("Enter"===e.key&&""!==n){n.trim();r((t={id:(new Date).getTime().toString(),name:n,state:p.Planned},function(){var e=Object(b.a)(j.a.mark((function e(n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("api/v1/todos",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,a.ok&&n({type:"todo/add",payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())),c("")}var t},placeholder:"Type here",type:"text",autoFocus:!0})},w=n(13),T=g.All,A=Object(w.a)({name:"todo",initialState:T,reducers:{all:function(e){return g.All},completed:function(e){return g.Completed},planned:function(e){return g.Planned}}}),P=A.actions,S=P.all,E=P.completed,J=P.planned,D=A.reducer;var H=function(){var e=Object(a.useState)(0),t=Object(C.a)(e,2),n=t[0],c=t[1],r=Object(s.b)(),o=function(e){return e===n?"selected":""};return Object(l.jsxs)("ul",{className:"filters",children:[Object(l.jsx)("li",{onClick:function(){r(S()),c(0)},children:Object(l.jsx)("a",{className:o(0),href:"#/",children:"All"})}),Object(l.jsx)("li",{onClick:function(){r(J()),c(1)},children:Object(l.jsx)("a",{className:o(1),href:"#/active",children:"Active"})}),Object(l.jsx)("li",{onClick:function(){r(E()),c(2)},children:Object(l.jsx)("a",{className:o(2),href:"#/completed",children:"Completed"})})]})};var F=function(){var e=Object(s.c)((function(e){return e.todos.length}));return Object(l.jsxs)("span",{className:"todo-count",children:[Object(l.jsx)("strong",{children:e})," item left"]})};var M=function(){var e=Object(s.b)(),t=Object(a.useState)(!1),n=Object(C.a)(t,2),c=n[0],r=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",{id:"toggle-all",className:"toggle-all",type:"checkbox"}),Object(l.jsx)("label",{onClick:function(){!0===c?(e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={state:0},e.prev=1,e.next=4,fetch("api/v1/todos/",{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)});case 4:e.sent.ok&&t({type:"todo/unmarkAll"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),r(!1)):(e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={state:1},e.prev=1,e.next=4,fetch("api/v1/todos/",{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)});case 4:e.sent.ok&&t({type:"todo/markAll"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),r(!0))},form:"toggle-all",children:"Mark all as complete"})]})};var R=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){e(function(){try{return function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/todos");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,n.ok&&t({type:"todo/fetchTodos",payload:Array.from(a)});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}catch(e){console.log()}}())}),[e]),Object(l.jsxs)("section",{className:"todoapp",children:[Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{children:"Todos"}),Object(l.jsx)(N,{})]}),Object(l.jsxs)("section",{className:"main",children:[Object(l.jsx)(M,{}),Object(l.jsx)(k,{})]}),Object(l.jsxs)("footer",{className:"footer",children:[Object(l.jsx)(H,{}),Object(l.jsx)(F,{})]})]})},B=n(4),I=n(8),K=Object(B.b)({todos:y,visibility:D}),L=Object(B.d)(K,Object(B.a)(I.a));o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(s.a,{store:L,children:Object(l.jsx)(R,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e65a4c0c.chunk.js.map