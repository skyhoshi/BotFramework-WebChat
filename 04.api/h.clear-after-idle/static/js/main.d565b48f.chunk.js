(this["webpackJsonpsample-clear-after-idle"]=this["webpackJsonpsample-clear-after-idle"]||[]).push([[0],{1e3:function(t,e){},1006:function(t,e){},142:function(t,e){},1709:function(t,e){},1753:function(t,e){},1774:function(t,e){},1776:function(t,e){},1781:function(t,e){},1782:function(t,e){},1783:function(t,e){},1784:function(t,e){},1785:function(t,e){},1789:function(t,e){},1901:function(t,e,n){},1902:function(t,e,n){},1903:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),o=n(199),r=n.n(o),i=(n(798),n(2)),u=n.n(i),f=n(204),s=n(408),l=n(267),m=n.n(l),p=(n(1901),n(19)),b=n.n(p);n(1902);function h(t){var e,n,o,r=t.to,i=Object(c.useState)({}),u=Object(f.a)(i,2)[1],s=Math.max(0,r-Date.now()),l=Object(c.useCallback)((function(){return u({})}),[u]);return e=l,n=Math.max(0,Math.min(500,r-Date.now())),Object(c.useEffect)((function(){if(e&&0!==n&&"number"===typeof n){var t=setInterval(e,n);return function(){return clearInterval(t)}}}),[e,n]),a.a.createElement("div",{className:"countdown"},"Time Remaining:"," ",a.a.createElement("span",{className:b()("countdown__time",{"countdown__time--red":s<1e4})},(o=s,"".concat(Math.floor(o/6e4),":").concat(("0"+Math.floor(o/1e3)%60).slice(-2)))))}function w(){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(u.a.mark((function t(){var e,n,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://webchat-mockbot2.azurewebsites.net/api/token/directline",{method:"POST"});case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,c=n.token,t.abrupt("return",c);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=function(){var t,e,n=Object(c.useState)((function(){return Date.now()+3e4})),o=Object(f.a)(n,2),r=o[0],i=o[1],p=Object(c.useState)(),b=Object(f.a)(p,2),d=b[0],v=b[1],O=Object(c.useCallback)((function(){v(!1),Object(s.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,n=Date.now(),v({directLine:Object(l.createDirectLine)({token:e}),key:n,store:Object(l.createStore)({},(function(){return function(t){return function(e){return"DIRECT_LINE/CONNECT_FULFILLED"!==e.type&&"WEB_CHAT/SUBMIT_SEND_BOX"!==e.type||i(Date.now()+3e4),t(e)}}}))});case 5:case"end":return t.stop()}}),t)})))()}),[i,v]);return t=O,e=r,Object(c.useEffect)((function(){var n=setTimeout(t,Math.max(0,e-Date.now()));return function(){return clearTimeout(n)}}),[t,e]),Object(c.useEffect)(O,[O]),a.a.createElement("div",{className:"App"},a.a.createElement(h,{to:r}),!!d&&a.a.createElement(m.a,{className:"chat",directLine:d.directLine,key:d.key,store:d.store}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},205:function(t,e){},775:function(t,e){},777:function(t,e){},778:function(t,e){},779:function(t,e){},780:function(t,e){},781:function(t,e){},782:function(t,e){},783:function(t,e){},793:function(t,e,n){t.exports=n(1903)},798:function(t,e,n){},961:function(t,e){},963:function(t,e){},999:function(t,e){}},[[793,1,2]]]);
//# sourceMappingURL=main.d565b48f.chunk.js.map