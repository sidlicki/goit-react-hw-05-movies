"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[644],{155:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(689),a=n(87),s={title:"MoviesList_title__PB2c8",list:"MoviesList_list__0Owr9",item:"MoviesList_item__eePYv",itemLink:"MoviesList_itemLink__6tK9W",movieRealeseDate:"MoviesList_movieRealeseDate__XDbjt"},c=n(184),i=function(e){var t=e.movies,n=e.title,i=(0,r.TH)();return(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{className:s.title,children:n}),(0,c.jsx)("ul",{className:s.list,children:t.map((function(e){return(0,c.jsx)("li",{className:s.item,children:(0,c.jsxs)(a.rU,{className:s.itemLink,to:"/movies/".concat(e.id),state:{from:i},children:[(0,c.jsx)("img",{className:s.image,src:e.poster_path?"https://image.tmdb.org/t/p/w300/".concat(e.poster_path):"https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png",alt:e.title}),(0,c.jsx)("h3",{className:s.movieName,children:e.title}),e.release_date&&(0,c.jsx)("h4",{className:s.movieRealeseDate,children:e.release_date})]})},e.id)}))})]})}},409:function(e,t,n){n.d(t,{E3:function(){return g},Hx:function(){return v},Y5:function(){return p},uV:function(){return f},wr:function(){return o}});var r=n(861),a=n(757),s=n.n(a),c=n(340),i="https://api.themoviedb.org/3",u="5527974a8f05249e428d97880e3b7156";function o(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/trending/movie/day?language=en-US&api_key=").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"?language=en-US&api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/credits?language=en-US&api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews?language=en-US&api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/search/movie?query=").concat(t,"&include_adult=false&language=en-US&page=1&api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},644:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(414),u=n(155),o=n(409),l=n(791),p=n(87),m={title:"MoviesPage_title__FafIT",form:"MoviesPage_form__Ym4dV",input:"MoviesPage_input__yG+Mf",button:"MoviesPage_button__omvOa"},f=n(184),h=function(){var e=(0,p.lr)(),t=(0,a.Z)(e,2),n=t[0],s=t[1],h=(0,l.useState)(null),v=(0,a.Z)(h,2),d=v[0],g=v[1],_=(0,l.useState)(!1),x=(0,a.Z)(_,2),k=x[0],y=x[1],w=n.get("query"),b=(0,l.useState)(localStorage.getItem("searchInputValue")||""),j=(0,a.Z)(b,2),Z=j[0],N=j[1];(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=3;break}return N(""),e.abrupt("return");case 3:return e.prev=3,y(!0),e.next=7,(0,o.E3)(w);case 7:t=e.sent,g(t),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0);case 14:return e.prev=14,y(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[w]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:m.formWrapper,children:(0,f.jsxs)("form",{className:m.form,onSubmit:function(e){e.preventDefault(),e.preventDefault();var t=e.currentTarget.elements.searchInput.value;s({query:t}),N(t),localStorage.setItem("searchInputValue",t)},children:[(0,f.jsx)("input",{className:m.input,type:"text",name:"searchInput",required:!0,placeholder:"Search movies...",value:Z,onChange:function(e){return N(e.target.value)}}),(0,f.jsx)("button",{className:m.button,type:"submit",children:"Search"})]})}),null===d&&(0,f.jsx)("h2",{className:m.title,children:"Try searching"}),null!==d&&0===d.length&&(0,f.jsx)("h2",{className:m.title,children:"No movies found"}),k&&(0,f.jsx)(i.Z,{}),null!==d&&d.length>0&&(0,f.jsx)(u.Z,{movies:d,title:'Search result for "'.concat(w,'":')})]})}}}]);
//# sourceMappingURL=644.f866bc6d.chunk.js.map