(this.webpackJsonplista_react=this.webpackJsonplista_react||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),r=a.n(s),i=(a(13),a(4)),l=a(6),o=(a(14),a(15),a(0)),f=function(e){e.setTarefas;var t=e.tarefas,a=e.setTarefa,c=e.tarefa,n=e.btnClick;return Object(o.jsxs)("div",{className:"text-submit",children:[Object(o.jsx)("input",{className:"text textsubmit",type:"text",placeholder:"Digite sua tarefa",value:c,onChange:function(e){a(e.target.value)}}),Object(o.jsx)("button",{className:"submit textsubmit",onClick:function(){n(),t.includes(c)||c.length>=1&&a("")},children:"Adicionar"})]})},u=a(8),j=(a(17),function(e){var t=e.tarefas,a=e.setTarefas;var c,n=[],s=Object(u.a)(t);try{var r=function(){var e=c.value;n=[].concat(Object(i.a)(n),[Object(o.jsxs)("div",{className:"tarefa",children:[Object(o.jsx)("p",{className:"tarefaText",children:e}),Object(o.jsx)("p",{className:"tarefaDel",onClick:function(){!function(e){var c=Object(i.a)(t);c.splice(t.indexOf(e),1),a(c)}(e)},children:"X"})]})])};for(s.s();!(c=s.n()).done;)r()}catch(l){s.e(l)}finally{s.f()}return Object(o.jsx)("div",{className:"container2",children:n})}),b=function(){var e=n.a.useState(""),t=Object(l.a)(e,2),a=t[0],c=t[1],s=n.a.useState(["Comprar tomate","Ir ao treino de futebol","Jogar minecraft"]),r=Object(l.a)(s,2),u=r[0],b=r[1];return Object(o.jsx)("div",{className:"center",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(f,{setTarefas:b,tarefas:u,setTarefa:c,tarefa:a,btnClick:function(){u.includes(a)||a.length>=1&&b([].concat(Object(i.a)(u),[a]))}}),Object(o.jsx)(j,{tarefas:u,setTarefas:b})]})})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.0293ff32.chunk.js.map