(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=n(3),l=n(4),s=n(6),u=n(5),m=function(e){var t=e.date;return o.a.createElement("p",null,"Current time:",t.toLocaleTimeString())},k=(n(12),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={isClockVisible:!0,date:new Date,name:1},e.messege=function(){var t=e.state.name,n=Math.floor(1e3*Math.random());e.setState({name:n}),console.log("The Clock was renamed from ".concat(t," to ").concat(n))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){!0===e.state.isClockVisible&&(e.setState({date:new Date}),console.log(e.state.date.toLocaleTimeString()))}),1e3)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"React clock"," ",this.state.name),this.state.isClockVisible&&o.a.createElement(m,{date:this.state.date}),o.a.createElement("button",{type:"button",onClick:function(){return e.setState({isClockVisible:!0})}},"Show Clock"),o.a.createElement("button",{type:"button",onClick:function(){return e.setState({isClockVisible:!1})}},"Hide Clock"),o.a.createElement("button",{type:"button",onClick:this.messege},"Set random name"))}}]),n}(o.a.Component));r.a.render(o.a.createElement(k,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.488499a2.chunk.js.map