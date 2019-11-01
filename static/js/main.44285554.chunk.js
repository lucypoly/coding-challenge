(this.webpackJsonpchallenge=this.webpackJsonpchallenge||[]).push([[0],{49:function(n,t,e){n.exports=e(76)},76:function(n,t,e){"use strict";e.r(t);var o,r=e(1),a=e.n(r),i=e(13),c=e.n(i),s=(e(54),e(6)),l=e(5),u=e(39),d=e(40),f=e(30);!function(n){n.START_MOVING="START_MOVING",n.STOP_MOVING="STOP_MOVING"}(o||(o={}));var g,p;!function(n){n.red="red",n.green="green",n.blue="blue"}(g||(g={})),function(n){n.straight="straight",n.forward="forward"}(p||(p={}));var v=[{stations:[{x:1,y:4},{x:2,y:4},{x:3,y:4},{x:4,y:5},{x:5,y:5},{x:6,y:5},{x:7,y:5}],color:g.green},{stations:[{x:3,y:6},{x:3,y:5},{x:3,y:4},{x:4,y:3},{x:5,y:3},{x:6,y:3}],color:g.blue},{stations:[{x:5,y:7},{x:5,y:6},{x:5,y:5},{x:4,y:3},{x:3,y:2},{x:3,y:1}],color:g.red}],y=function(n){return v.find((function(t){return t.color===n}))},x=function(n,t,e,o){var r=n.stations.length,a=n.stations.findIndex((function(n){return n.x===e&&n.y===o})),i=a+1,c=a-1,s=t;return i===r&&t===p.forward&&(i=c,s=p.straight),-1===c&&t===p.straight&&(i=1,s=p.forward),c>-1&&t===p.straight&&(i=c),{coordinates:n.stations[i],direction:s}},m=function(n,t){var e=n.direction,o=n.coordinates,r=o.x,a=o.y,i=x(t,e,r,a),c=x(t,e,i.coordinates.x,i.coordinates.y);n.coordinates=i.coordinates,n.nextCoordinates=c.coordinates,n.direction=i.direction},h=function(n,t){return n.find((function(n){return n.color!==t.color&&n.nextCoordinates.x===t.nextCoordinates.x&&n.nextCoordinates.y===t.nextCoordinates.y}))},b=[{color:g.green,moving:!1,coordinates:{x:1,y:4},nextCoordinates:{x:2,y:4},passengers:100,direction:p.forward},{color:g.blue,moving:!1,coordinates:{x:3,y:6},nextCoordinates:{x:3,y:5},passengers:200,direction:p.forward},{color:g.red,moving:!1,coordinates:{x:5,y:7},nextCoordinates:{x:5,y:6},passengers:300,direction:p.forward}],O=Object(l.combineReducers)({trains:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,e=n.find((function(n){return n.color===t.payload}));switch(t.type){case o.START_MOVING:var r=y(t.payload),a=h(n,e),i=a&&a.moving&&a.passengers>e.passengers;return i?(console.log("collision!"),e.moving=!1):(e.moving=!0,m(e,r)),Object(f.a)(n);case o.STOP_MOVING:return e.moving=!1,Object(f.a)(n);default:return n}}});var w=e(14),j=e(15),k=e(17),T=e(16),M=e(18),E=e(41);function I(){var n=Object(E.a)(["\n  background-color: ",";\n  color: white;\n  \n  margin: 5px;\n  padding: 15px;\n  border: 0;\n  outline: none;\n  \n  font-size: 24px;\n"]);return I=function(){return n},n}var C=e(42).a.button(I(),(function(n){return n.color})),S=function(n){function t(){var n,e;Object(w.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=Object(k.a)(this,(n=Object(T.a)(t)).call.apply(n,[this].concat(r)))).interval=void 0,e.handleMoving=function(){var n=e.props,t=n.moving,o=n.startMoving,r=n.color,a=n.stopMoving;t?(a(r),window.clearInterval(e.interval)):(o(r),e.interval=window.setInterval((function(){return o(r)}),2e3))},e}return Object(M.a)(t,n),Object(j.a)(t,[{key:"render",value:function(){var n=this.props,t=n.color,e=n.moving;return a.a.createElement(C,{color:t,onClick:this.handleMoving},e?"STOP":"START")}}]),t}(a.a.PureComponent),N=Object(s.b)(null,(function(n){return{startMoving:function(t){return n(function(n){return function(t){t({type:o.START_MOVING,payload:n})}}(t))},stopMoving:function(t){return n(function(n){return function(t){t({type:o.STOP_MOVING,payload:n})}}(t))}}}))(S),G=function(n){function t(){return Object(w.a)(this,t),Object(k.a)(this,Object(T.a)(t).apply(this,arguments))}return Object(M.a)(t,n),Object(j.a)(t,[{key:"render",value:function(){var n=this.props.trains;return a.a.createElement(a.a.Fragment,null,n.length&&n.map((function(n){return a.a.createElement(N,{key:"button-".concat(n.color),color:n.color,moving:n.moving})})))}}]),t}(a.a.PureComponent),V=Object(s.b)((function(n){return{trains:n.trains}}))(G),_=e(10),A=Object(s.b)((function(n){return{trains:n.trains}}))((function(n){var t=n.lines,e=n.trains;return a.a.createElement(_.d,{height:500,width:500},t.map((function(n){return a.a.createElement(_.b,{key:"line-".concat(n.color),color:n.color,data:n.stations})})),e.map((function(n){return a.a.createElement(_.c,{key:"train-".concat(n.color),color:"black",data:[n.coordinates],strokeWidth:5})})),e.map((function(n){return a.a.createElement(_.a,{key:"passengers-".concat(n.color),value:n.coordinates,style:{background:"black",margin:"5px",padding:"5px"}},n.passengers)})))})),P=function(){return a.a.createElement(s.a,{store:Object(l.createStore)(O,Object(d.composeWithDevTools)(Object(l.applyMiddleware)(u.a)))},a.a.createElement("div",{className:"App"},a.a.createElement(V,null),a.a.createElement(A,{lines:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.44285554.chunk.js.map