(this.webpackJsonpservermore=this.webpackJsonpservermore||[]).push([[0],{41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var n=s(5),r=s(0),a=s.n(r),o=s(8),i=s.n(o),c=(s(41),s(26)),l=s(16),u=s(19),d=s(20),h=s(32),j=s(31),p=s(69),m=s(35),b=s(57),v=s(62),w=s(63),g=s(64),x=s(67),f=s(65),y=s(33),O=s(70),k=s(68),N=s(66),q=s(71),S=s(72),A=s(58),I=s(59),M=s(60),T=s(61),D=(s(42),s(43),s(44),s(45),function(){function e(t,s){Object(l.a)(this,e),this.questionText=void 0,this.answers=void 0,this.questionText=t,s.push(new C("Skip Question",0,null)),this.answers=s.sort((function(e,t){return t.value-e.value}))}return Object(u.a)(e,[{key:"maxAnswerValue",get:function(){return Math.max.apply(Math,Object(c.a)(this.answers.map((function(e){return Math.abs(e.value)}))).concat([0]))}}]),e}()),C=function e(t,s,n){Object(l.a)(this,e),this.answerText=void 0,this.value=void 0,this.hint=void 0,this.answerText=t,this.value=s,this.hint=n},L=[new D("How quickly does your application start up?",[new C("Slow",10,"Slow starting applications aren't a great fit for serverless. Launching will happen frequently costing you extra time and money."),new C("Fast",-10,"Fast starting applications result in quick cold starts. \ud83d\udc4d")]),new D("Do you plan to execute long running processes?",[new C("Yes",20,"Serverless computing resources are more expensive compared to traditional servers. Be aware of that when planning to run a lot of long term tasks."),new C("No",-20,"Serverless is great for executing short-term tasks.")]),new D("How predictable is your workload?",[new C("I have a good understand of which load I can expect.",10,"If you can plan your required compute capacity beforehand, running on traditional servers with autoscaling will be cheaper."),new C("I'm regularly encountering unpredictable traffic spikes.",-30,"Unpredictable load is where serverless really shines.")]),new D("Do you have the option to take care of server maintenance yourself?",[new C("No",-30,"Going serverless requires you to do no maintenance of servers whatsoever."),new C("Yes",10,"If you have the resources, managing your on-premise or cloud servers will give you more freedom in adjusting the environment to your needs.")]),new D("Is your runtime/programming language being supported by your serverless provider?",[new C("No",30,"In this case you may need to refactor your application."),new C("Yes",-5,"In this case you should be able to run serverless without needing to make too many changes to your application.")]),new D("How important is independence from your platform provider to you?",[new C("Very Important",20,"Take into consideration that switching from one serverless provider to another may come with a significant amount of migration work required."),new C("Kind of Important",10,"Take into consideration that switching from one serverless provider to another may come with a significant amount of migration work required."),new C("Not That Important",-5,"Good, just keep in mind that serverless often requires adjusting your application to the providers standards."),new C("Not Important at all",-10,"Good, just keep in mind that serverless often requires adjusting your application to the providers standards.")]),new D("Does your application require GPU compute resources?",[new C("Yes",50,"Currently there are pretty much no serverless providers with GPU support."),new C("No",-5,"In this case you'll be fine going with serverless.")]),new D("Is your code stateless?",[new C("Yes",-20,"This way you can benefit from Serverless' autoscaling out of the box."),new C("No",30,"That's something that is required to take advantage of serverless computing. Make sure to extracts all kinds of state into an external component like a database or cache.")]),new D("Is your code reading its configuration from environment variables?",[new C("Yes",-10,"Passing configuration parameters through environment variables is the preferred way by most Serverless providers."),new C("It does not require any configuration.",0,null),new C("No",10,"You may need to adjust your code in this case. ")]),new D("Does your application code exceed the maximum file size of your Serverless provider?",[new C("Yes",20,"This limit is probably not adjustable which means you need to decrease the size of your application."),new C("No",-5,"This way you won't run into problems when deploying your application code to your Serverless provider.")])],Y=s.p+"static/media/logo.8b626ecb.svg",F=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;Object(l.a)(this,s),(n=t.call(this,e)).questions=void 0,n.questions=L.sort((function(e,t){return t.maxAnswerValue-e.maxAnswerValue}));var r,a=window.matchMedia("(prefers-color-scheme: dark)"),o=localStorage.getItem("dark-mode");return console.log("User prefer dark color scheme: ".concat(a.matches)),console.log("stored dark mode flag: ".concat(o)),r=!(!a.matches||void 0!==o)||"true"===o,n.state={value:0,selectedAnswers:[],darkMode:r},n.setDarkMode(r),n.selectAnswer=n.selectAnswer.bind(Object(d.a)(n)),n.setDarkMode=n.setDarkMode.bind(Object(d.a)(n)),n}return Object(u.a)(s,[{key:"selectAnswer",value:function(e,t){var s=this,n=Object(c.a)(this.state.selectedAnswers);n[e]=t,this.setState({selectedAnswers:n},(function(){s.updateValue()}))}},{key:"updateValue",value:function(){var e=0;this.state.selectedAnswers.forEach((function(t,s){void 0!==t&&(e+=L[s].answers[t].value)})),this.setState({value:e})}},{key:"setDarkMode",value:function(e){var t=this;document.documentElement.classList.toggle("dark-mode",e),this.setState({darkMode:e},(function(){localStorage.setItem("dark-mode",String(t.state.darkMode))}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsxs)(p.a,{id:"header",fixed:"top",className:"justify-content-between",children:[Object(n.jsxs)(m.a,{xs:"5",className:"text-left",children:[Object(n.jsx)(b.a,{className:"App-logo img-responsive",src:Y})," ",Object(n.jsx)("strong",{children:"ServerMore"})]}),Object(n.jsx)(m.a,{xs:"1",onClick:function(){return e.setDarkMode(!e.state.darkMode)},children:Object(n.jsx)("h5",{children:this.state.darkMode?Object(n.jsx)(A.a,{className:"text-warning"}):Object(n.jsx)(I.a,{className:"text-warning"})})}),Object(n.jsxs)(m.a,{xs:"5",className:"text-right",children:[Object(n.jsx)(M.a,{className:"text-secondary"})," with ",Object(n.jsx)(T.a,{className:"text-danger"})," by ",Object(n.jsx)("a",{href:"https://brennerm.github.io/about.html",children:"brennerm"})]})]}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(w.a,{children:Object(n.jsx)(m.a,{children:Object(n.jsxs)(g.a,{children:[Object(n.jsxs)("h1",{className:"display-5",children:["Go ",Object(n.jsx)(x.a,{trigger:"click",placement:"top",overlay:Object(n.jsxs)(f.a,{id:"tooltip-top",children:["Don't know what's serverless? ",Object(n.jsx)("a",{href:"https://en.wikipedia.org/wiki/Serverless_computing",target:"_blank",rel:"noreferrer",children:"Read about it!"})]}),children:Object(n.jsx)("span",{className:"tooltip-text",children:"serverless"})},"top")," or run on regular servers?"]}),Object(n.jsx)("p",{children:"That's what ServerMore is going to help you with. Answer as many questions as you want and the slider at the bottom will give you an indication based on your responses."})]})})}),this.questions.map((function(t,s){return Object(n.jsx)(y.a,{in:0===s||void 0!==e.state.selectedAnswers[s-1],children:Object(n.jsxs)(O.a,{className:"question",children:[Object(n.jsx)(O.a.Header,{children:Object(n.jsx)(k.a.Label,{children:t.questionText})}),Object(n.jsx)(O.a.Body,{children:Object(n.jsx)(N.a,{toggle:!0,className:"flex-wrap",children:t.answers.map((function(t,r){return Object(n.jsx)(q.a,{type:"radio",variant:0===t.value?"secondary":"primary",value:r,checked:e.state.selectedAnswers[s]===r,onChange:function(){return e.selectAnswer(s,r)},children:t.answerText},"".concat(s,"-").concat(r))}))})}),Object(n.jsx)("div",{className:void 0===e.state.selectedAnswers[s]||null===e.questions[s].answers[e.state.selectedAnswers[s]].hint?"invisible":"visible",children:Object(n.jsx)(O.a.Footer,{children:void 0!==e.state.selectedAnswers[s]?Object(n.jsx)("div",{className:e.questions[s].answers[e.state.selectedAnswers[s]].value>0?"text-danger":"text-success",children:e.questions[s].answers[e.state.selectedAnswers[s]].hint}):null})})]})},s)})),Object(n.jsxs)(w.a,{children:[Object(n.jsx)(m.a,{}),Object(n.jsx)(m.a,{sm:"auto",children:Object(n.jsxs)(S.a,{variant:"info",children:["Missing a question or don't agree with an existing one?",Object(n.jsx)("br",{}),Object(n.jsx)(S.a.Link,{href:"https://github.com/brennerm/servermore/issues",children:"Submit an issue"})," or ",Object(n.jsx)(S.a.Link,{href:"https://github.com/brennerm/servermore/pulls",children:"propose the change yourself!"})]})}),Object(n.jsx)(m.a,{})]})]})}),Object(n.jsx)(G,{value:this.state.value})]})}}]),s}(r.Component),G=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).props=void 0,n.props=e,n}return Object(u.a)(s,[{key:"render",value:function(){return Object(n.jsxs)(p.a,{id:"footer",fixed:"bottom",className:"justify-content-center",children:[Object(n.jsx)(m.a,{xs:"3",className:"text-right",children:Object(n.jsx)(k.a.Label,{children:Object(n.jsx)("strong",{children:"serverless"})})}),Object(n.jsx)(m.a,{xs:"6",children:Object(n.jsx)(k.a.Control,{type:"range",value:this.props.value,readOnly:!0,max:"100",min:"-100"})}),Object(n.jsx)(m.a,{xs:"3",className:"text-left",children:Object(n.jsx)(k.a.Label,{children:Object(n.jsx)("strong",{children:"servermore"})})})]})}}]),s}(r.Component),V=F,P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,73)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),r(e),a(e),o(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(V,{})}),document.getElementById("root")),P()}},[[50,1,2]]]);
//# sourceMappingURL=main.a76a51aa.chunk.js.map