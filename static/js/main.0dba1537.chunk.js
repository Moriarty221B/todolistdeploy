(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),c=o(7),r=o.n(c),l=(o(14),o(8)),i=o(1),s=o(2),d=o(4),u=o(3),h=o(5),m=function(t){var e=t.todos,o=t.deleteTodo,n=e.length?e.map((function(t){return a.a.createElement("div",{className:"collection.item",key:t.id},a.a.createElement("span",{onClick:function(){return o(t.id)}},t.content))})):a.a.createElement("p",{className:"center"}," No tasks left to do :) ");return a.a.createElement("div",{className:"todos collection"},n)},f=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[],filter:"all",content:""},o.handleChange=function(t){o.setState({content:t.target.value})},o.handleSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state),o.setState({content:""})},o}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("label",null," Add new task"),a.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.content})))}}]),e}(n.Component),p=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(o=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todoToShow:"all",filter:"all",todos:[{id:1,content:"Find energon "},{id:2,content:"Defeat decepticons "}]},o.deleteTodo=function(t){var e=o.state.todos.filter((function(e){return e.id!==t}));o.setState({todos:e})},o.addTodo=function(t){t.id=Math.random();var e=[].concat(Object(l.a)(o.state.todos),[t]);o.setState({todos:e})},o.updateTodoToShow=function(t){o.setState({todoToShow:t})},o}return Object(h.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return"all"===this.state.todoToShow?this.state.todos:"remaining"===this.state.todoToShow?this.state.todos.filter((function(t){return!t.complete})):"completed"===this.state.todoToShow&&this.state.todos.filter((function(t){return t.complete})),a.a.createElement("div",{className:"todo-app container"},a.a.createElement("h1",{className:"center pink-text"},"To-do List"),a.a.createElement("p",null,"Click to remove completed tasks"),a.a.createElement(m,{todos:this.state.todos,deleteTodo:this.deleteTodo}),a.a.createElement(f,{addTodo:this.addTodo}),a.a.createElement("div",null,"number of tasks left : ",this.state.todos.filter((function(t){return!t.complete})).length),a.a.createElement("div",null," ",a.a.createElement("button",{onClick:function(){return t.updateTodoToShow("all")}},"all"),a.a.createElement("button",{onClick:function(){return t.updateTodoToShow("remaining")}},"remaining"),a.a.createElement("button",{onClick:function(){return t.updateTodoToShow("completed")}},"completed")))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,o){t.exports=o(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0dba1537.chunk.js.map