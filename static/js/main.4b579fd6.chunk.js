(this["webpackJsonpimgs-view"]=this["webpackJsonpimgs-view"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),s=a.n(c),o=(a(11),a(2)),i=(a(12),a(1)),u=a.n(i),l=a(3),f=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=ad1a207325de8a3844d698543f65a6b2&extras=date_upload&extras=count_faves&per_page=24&format=json&nojsoncallback=1");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.flickr.com/services/rest/?method=flickr.profile.getProfile&api_key=ad1a207325de8a3844d698543f65a6b2&user_id=".concat(t,"&format=json&nojsoncallback=1"));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(" https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ad1a207325de8a3844d698543f65a6b2&photo_id=".concat(t,"&format=json&nojsoncallback=1"));case 2:return a=e.sent,e.next=5,a.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(a(14),function(e){var t=e.photo,a=t.id,c=t.title,s=t.count_faves,i=t.owner,u=Object(n.useState)(""),l=Object(o.a)(u,2),f=l[0],d=l[1],h=Object(n.useState)(""),v=Object(o.a)(h,2),b=v[0],E=v[1];Object(n.useEffect)((function(){m(i).then((function(e){d(e.profile)}))}),[i]),Object(n.useEffect)((function(){p(a).then((function(e){E(e.sizes.size[4].source)}))}),[a]);var j=(f.country+"").slice(0,15);return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"person-info"},r.a.createElement("img",{src:"http://farm9.staticflickr.com/8573/buddyicons/".concat(i,".jpg"),alt:"buddy"}),r.a.createElement("div",{className:"name-place"},r.a.createElement("b",null,f.first_name),r.a.createElement("i",null,j))),r.a.createElement("div",null,function(e,t){var a=Math.random()*(t-e)+e;return Math.floor(a)}(1,24),"h")),r.a.createElement("div",{className:"main-image"},r.a.createElement("img",{src:b,alt:"main"})),r.a.createElement("div",{className:"bottom"},r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-heart",onClick:function(){alert(a)}}," \xa0"),s),r.a.createElement("br",null),r.a.createElement("span",null,c)))});var h=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){f().then((function(e){c(e.photos.photo)}))}),[]),console.log(a),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"masonry"},a.map((function(e,t){return r.a.createElement("div",{className:"item",key:t},r.a.createElement(d,{photo:e})," ")}))," ")," ")};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.4b579fd6.chunk.js.map