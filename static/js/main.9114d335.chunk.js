(this["webpackJsonptask-app"]=this["webpackJsonptask-app"]||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(13),s=n.n(r),o=(n(32),n(9)),i=n.n(o),l=n(11),u=n(15),d=n(21),p=(n(34),n(35),n(3)),j=function(){return Object(p.jsx)("div",{className:"header-container",children:Object(p.jsx)("div",{className:"title",children:"TODOS"})})},m=n(24),f=n.n(m),b=n(22),h=n.n(b),v=n(25),O=n.n(v),x=n(14),g=(n(49),n(38),function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,c=t.createTime,a={title:n,completed:!1,createTime:c},r=k.collection("todos"),console.log(r),e.prev=4,e.next=7,r.add(a);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),console.log("Create task error: ",e.t0.massage);case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}()),k=x.a.initializeApp({apiKey:"AIzaSyA7vzleomr7Dz9wxVf8-LafhmteuQNCe-A",authDomain:"task-app-d76ee.firebaseapp.com",projectId:"task-app-d76ee",storageBucket:"task-app-d76ee.appspot.com",messagingSenderId:"338240483157",appId:"1:338240483157:web:e5058c8e10bb4d7d90c9dc"}).firestore(),C=(n(40),function(e){var t=e.title,n=e.completed,c=e._id,a=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.collection("todos").doc(c).delete();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"item-container",onClick:function(){var e=k.collection("todos").doc(c);console.log(e);try{e.update({completed:!n})}catch(t){console.log(t.message)}},children:[Object(p.jsx)("div",{className:"icon-container",children:n?Object(p.jsx)(h.a,{className:"completed"}):Object(p.jsx)(f.a,{})}),Object(p.jsx)("div",{className:"title ".concat(n?"completed":""),children:t}),Object(p.jsx)("div",{className:"del-container",children:Object(p.jsx)(O.a,{onClick:a})})]})}),w=function(e){var t=e.tasks;e.completeTask;return Object(p.jsx)("div",{className:"items-list-container",children:t.map((function(e,t){var n=e.title,c=e.completed,a=e._id;return Object(p.jsx)(C,{title:n,completed:c,_id:a},t)}))})},N=n(26),y=(n(46),function(e){var t=e.handleChange,n=Object(N.a)(e,["handleChange"]);return Object(p.jsx)("div",{children:Object(p.jsx)("input",Object(u.a)({className:"custom-input",onChange:t},n))})});var S=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(""),o=Object(d.a)(s,2),m=o[0],f=o[1];Object(c.useEffect)((function(){k.collection("todos").orderBy("createTime","desc").onSnapshot((function(e){r(e.docs.map((function(e){return Object(u.a)({_id:e.id},e.data())})))}))}),[]);var b=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.t0=m,!e.t0){e.next=5;break}return e.next=5,g({title:m,createTime:x.a.firestore.Timestamp.fromDate(new Date)});case 5:f("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(j,{}),Object(p.jsx)("form",{onSubmit:b,children:Object(p.jsx)(y,{name:"add-note",placeholder:"Create task",onChange:function(e){f(e.target.value)},value:m,type:"text"})}),Object(p.jsx)(w,{tasks:a})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),T()}},[[48,1,2]]]);
//# sourceMappingURL=main.9114d335.chunk.js.map