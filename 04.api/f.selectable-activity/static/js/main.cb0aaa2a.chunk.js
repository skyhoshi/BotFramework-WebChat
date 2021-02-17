(this["webpackJsonpsample-customization-selectable-activity"]=this["webpackJsonpsample-customization-selectable-activity"]||[]).push([[0],{127:function(t,e){},1660:function(t,e){},1713:function(t,e){},1715:function(t,e){},1720:function(t,e){},1721:function(t,e){},1722:function(t,e){},1723:function(t,e){},1727:function(t,e){},1830:function(t,e,n){"use strict";n.r(e);var c=n(2),i=n.n(c),a=n(185),r=n.n(a),o=(n(772),n(0)),u=n(1),s=n(4),l=n(5),f=n(40),v=n.n(f),d=n(751),p=n(396),h=n.n(p),m=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).state={directLine:null},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchToken()}},{key:"fetchToken",value:function(){var t=Object(d.a)(v.a.mark((function t(){var e,n,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://webchat-mockbot.azurewebsites.net/directline/token",{method:"POST"});case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,c=n.token,this.setState((function(){return{directLine:Object(p.createDirectLine)({token:c})}}));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.directLine?i.a.createElement(h.a,Object.assign({className:"chat",directLine:this.state.directLine},this.props)):i.a.createElement("div",null,"Connecting to bot\u2026")}}]),n}(i.a.Component);function y(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h4",null,"Nothing selected"),i.a.createElement("p",null,"Click on any message sent from the user or the bot to inspect it."))}var b=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.inspectedObject,n=t.inspectorRef;return i.a.createElement("div",{className:"inspector",tabIndex:"-1",ref:n},i.a.createElement("h2",null,"Inspector"),i.a.createElement("div",null,e?i.a.createElement("pre",null,JSON.stringify(e,null,4)):i.a.createElement(y,null)))}}]),n}(c.Component),k=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).activityMiddleware=function(){return function(t){return function(e){return function(n){var a=e.activity===c.state.selectedActivity,r=a?"selected":"",o=a?"Selected activity. Click to deselect activity.":"Click to inspect activity.";return i.a.createElement("div",{"aria-label":o,className:"activity-wrapper ".concat(r),onClick:c.selectActivity(e.activity),onKeyDown:c.handleKeyDown(e.activity),role:"button",tabIndex:"0"},t(e)(n))}}}},c.selectActivity=function(t){return function(){c.setState((function(e){return{selectedActivity:e.selectedActivity===t?null:t}}),(function(){c.state.selectedActivity&&c.inspectorRef.current.focus()}))}},c.handleKeyDown=function(t){return function(e){[" ","Enter"].includes(e.key)&&c.selectActivity(t)(e)}},c.state={selectedActivity:null},c.inspectorRef=i.a.createRef(),c}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.selectedActivity;return i.a.createElement("div",{className:"app"},i.a.createElement(m,{activityMiddleware:this.activityMiddleware}),i.a.createElement(b,{inspectedObject:t,inspectorRef:this.inspectorRef}))}}]),n}(i.a.Component);r.a.render(i.a.createElement(k,null),document.getElementById("root"))},190:function(t,e){},755:function(t,e){},757:function(t,e){},758:function(t,e){},759:function(t,e){},760:function(t,e){},761:function(t,e){},767:function(t,e,n){t.exports=n(1830)},772:function(t,e,n){},935:function(t,e){},937:function(t,e){},987:function(t,e){},988:function(t,e){}},[[767,1,2]]]);
//# sourceMappingURL=main.cb0aaa2a.chunk.js.map