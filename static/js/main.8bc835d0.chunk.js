(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(31)},20:function(e,n,t){},22:function(e,n,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},23:function(e,n,t){},31:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(8),c=t.n(i),o=(t(20),t(1)),u=t(2),l=t(3),s=t(6),h=t(4),b=t(7),m=(t(22),t(23),t(5));function p(){var e=Object(o.a)(["\n      background: palevioletred;\n      color: white;\n    "]);return p=function(){return e},e}function f(){var e=Object(o.a)(["\n  background: transparent;\n  border-radius: 3px;\n  border: 2px solid palevioletred;\n  color: palevioletred;\n  margin: 0 1em;\n  padding: 0.25em 1em;\n\n  ",";\n"]);return f=function(){return e},e}function d(){var e=Object(o.a)([""]);return d=function(){return e},e}function O(){var e=Object(o.a)([""]);return O=function(){return e},e}function j(){var e=Object(o.a)(["\n  display: inline-block;\n"]);return j=function(){return e},e}function v(){var e=Object(o.a)(["\n  display: inline-block;\n"]);return v=function(){return e},e}function k(){var e=Object(o.a)([""]);return k=function(){return e},e}var C=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(s.a)(this,Object(h.a)(n).call(this,e))).handleClick=function(e){var n=e.target.innerHTML;t.setState({current_house:n})},t.HOUSES=[{name:"Glenroy Street",features:"lorem",description:"ipsum",rent:350,available_date:"01/07/19",bedrooms:7},{name:"Mackintosh Place"}],t.state={current_house:"Glenroy Street"},t}return Object(b.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,{houses:this.HOUSES,handleClick:this.handleClick}),a.a.createElement(L,{name:this.state.current_house}))}}]),n}(r.Component),E=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(s.a)(this,Object(h.a)(n).call(this,e))).handleMenuClick=function(e){t.setState(function(e){return{navLinksVisible:!e.navLinksVisible}})},t.state={navLinksVisible:!1},t}return Object(b.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null,a.a.createElement(g,{onClick:this.handleMenuClick},"\u2630"),a.a.createElement(w,null,"Rhys and Tony houses")),a.a.createElement(S,{visible:this.state.navLinksVisible,houses:this.props.houses,handleClick:this.props.handleClick}))}}]),n}(r.Component),y=m.b.div(k()),g=m.b.div(v()),w=m.b.div(j()),S=function(e){function n(e){return Object(u.a)(this,n),Object(s.a)(this,Object(h.a)(n).call(this,e))}return Object(b.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(_,null,this.props.visible&&this.props.houses.map(function(n,t){return a.a.createElement("a",{onClick:e.props.handleClick,href:"#",value:n.name,key:t}," ",n.name," ")}))}}]),n}(r.Component),_=m.b.div(O()),L=function(e){function n(e){var t;return Object(u.a)(this,n),(t=Object(s.a)(this,Object(h.a)(n).call(this,e))).handleClick=function(e){e.stopPropagation();var n=e.target.innerHTML;t.setState({current_section:n})},t.HOUSE_LINKS=[{href:"#",name:"About"},{href:"#",name:"Info"},{href:"#",name:"Pictures"}],t.state={current_section:"About"},t}return Object(b.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,this.props.name),a.a.createElement(H,{sections:this.HOUSE_LINKS,handleClick:this.handleClick}),a.a.createElement(M,{name:this.props.name,section:this.state.current_section}))}}]),n}(r.Component),H=(m.b.a(d()),function(e){function n(e){return Object(u.a)(this,n),Object(s.a)(this,Object(h.a)(n).call(this,e))}return Object(b.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,this.props.sections.map(function(n,t){return a.a.createElement(I,{Ikey:t,name:n.name,handleClick:e.props.handleClick})}))}}]),n}(r.Component)),I=function(e){function n(e){return Object(u.a)(this,n),Object(s.a)(this,Object(h.a)(n).call(this,e))}return Object(b.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("a",{href:"#",key:this.props.Ikey,onClick:this.props.handleClick}," ",this.props.name," ")}}]),n}(r.Component),M=function(e){function n(e){return Object(u.a)(this,n),Object(s.a)(this,Object(h.a)(n).call(this,e))}return Object(b.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("p",null," ",this.props.name,", ",this.props.section," ")}}]),n}(r.Component),x=(m.b.button(f(),function(e){return e.primary&&Object(m.a)(p())}),C);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.8bc835d0.chunk.js.map