(this.webpackJsonpquiz2=this.webpackJsonpquiz2||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(28),s=c.n(a),r=(c(37),c(9)),i=c(2),l=c(4),o=(c(38),c(39),c(0)),j=(c(46),c(47),function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row justify-content-md-center",children:Object(o.jsx)("div",{className:"col-sm-4",children:Object(o.jsx)("div",{className:"card pt-2 p-3 m-auto mt-5 mb-4 shadow card_main2",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:"Welcome to weekly"}),Object(o.jsx)("h6",{className:"card-subtitle mb-2",children:"Quiz Contest"}),Object(o.jsxs)("ul",{className:"main2",children:[Object(o.jsx)("li",{className:"card-text",children:"This section contains 10 questions."}),Object(o.jsx)("li",{className:"card-text",children:"Each correct answer will carry +1 marks."}),Object(o.jsx)("li",{className:"card-text",children:"There will be no negative marking for wrong answer."})]}),Object(o.jsx)(l.b,{class:"btn btn-primary btn_main2",to:"/quiz2",children:"Start Quiz"})]})})})})})})}),b=c(32),d=c(18),m=c.n(d),u=c(30),h=c(31),O=c.n(h),x=(c(67),function(){var e=Object(n.useState)(),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),l=Object(r.a)(s,2),j=l[0],d=l[1],h=Object(n.useState)(""),x=Object(r.a)(h,2),p=x[0],f=x[1],N=Object(n.useState)(0),v=Object(r.a)(N,2),g=v[0],w=v[1],y=Object(i.f)(),_=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple");case 3:t=e.sent,console.log(t.data.results),a(t.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){_()}),[]);var k;return null!=c&&(k=[c[j].correct_answer].concat(Object(b.a)(c[j].incorrect_answers))),console.log(k),Object(o.jsx)(o.Fragment,{children:null!=c&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row justify-content-md-center",children:Object(o.jsx)("div",{className:"col-sm-4",children:Object(o.jsx)("div",{className:"card pt-2 p-3 m-auto mt-5 mb-4 shadow card_quiz2",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("h5",{className:"card-title",children:["Question : ",j+1," "]}),Object(o.jsx)("h6",{className:"card-subtitle mb-3",children:c[j].question}),k.map((function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{className:"ul_quiz2",children:Object(o.jsx)("li",{className:"card-text",children:Object(o.jsx)("button",{type:"button",className:"btn btn-light btn_quiz2",onClick:function(){f(e)},children:e})})})})})),j>0&&Object(o.jsx)("a",{className:"btn btn-primary btn_left",onClick:function(){d(j-1)},children:"Prev"}),j!=c.length-1?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("a",{className:"btn btn-primary btn_right",onClick:function(){c[j].correct_answer==p&&w(g+1),console.log("Next",g),d(j+1),f("")},children:"Next"})}):Object(o.jsx)("a",{className:"btn btn-primary btn_right",onClick:function(){c[j].correct_answer==p?(w(g+1),console.log("If",g),y.push("/end2",{finalScore:g+1})):(console.log("Else",g),y.push("/end2",{finalScore:g}))},children:"Submit"})]})})})})})})})}),p=function(){var e=Object(i.g)();console.log("Avi",e.state.finalScore);var t=e.state.finalScore;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row justify-content-md-center",children:Object(o.jsx)("div",{className:"col-sm-4",children:Object(o.jsx)("div",{className:"card pt-2 p-3 m-auto mt-5 mb-4 shadow card_end",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h5",{className:"card-title",children:"Congratulations!!!"}),Object(o.jsxs)("h6",{className:"card-subtitle mb-2",children:["You have scored ",t," / 10 marks."]}),Object(o.jsx)(l.b,{className:"btn btn-primary btn_end",to:"/",children:"Play Again"})]})})})})})})},f=(c(68),function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2);t[0],t[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"app",children:Object(o.jsx)(l.a,{children:Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",component:j}),Object(o.jsx)(i.a,{path:"/quiz2",component:x}),Object(o.jsx)(i.a,{path:"/end2",component:p})]})})})})});s.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.481344ad.chunk.js.map