(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{16:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},67:function(e,t){},82:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(9),c=n.n(i),s=n(31),o=n.n(s),r=(n(43),n.p,n(44),n(32)),l=n(12),h=n.n(l),d=n(17),u=n(33),j=n(34),m=n(11),b=n(37),v=n(36),O=n(35),x=n.n(O),f=(n(64),n(84)),p=n(85),g=n(86),y=n(87),M=n(88),S=n(89),k=n(90),C=n(91),N=n(92),w=n(93),T=(n(67),n(16),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={nominatedMovies:[],movies:[],title:"",button_state:!1},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.nominateMovie=a.nominateMovie.bind(Object(m.a)(a)),a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getMovies",value:function(){var e=Object(d.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://www.omdbapi.com/?S=".concat(t,"&apikey=79dfb4ab"));case 2:n=e.sent,a=n.data.Search,this.setState({movies:a});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"nominateMovie",value:function(e){console.log(e);var t=this.state.nominatedMovies.concat(e);this.setState({nominatedMovies:t})}},{key:"removeNomination",value:function(e){console.log(e);var t=this.state.nominatedMovies.filter((function(t){return t!==e}));this.setState({nominatedMovies:t})}},{key:"handleChange",value:function(e){this.setState(Object(r.a)({},e.target.name,e.target.value)),console.log("change")}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.getMovies(this.state.title),console.log("submit")}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(f.a,{children:[Object(a.jsx)("h1",{className:"display-3",children:"Movie Buddy"}),this.state.nominatedMovies.length>=5&&Object(a.jsxs)("h1",{children:[" ",Object(a.jsx)(p.a,{color:"success",children:"Congrats! You have nominated 5 movies!"})]}),Object(a.jsx)("p",{className:"lead",children:"Search for movies and nominate them!"}),Object(a.jsxs)(g.a,{onSubmit:this.handleSubmit,children:[Object(a.jsx)(y.a,{children:Object(a.jsx)(M.a,{type:"text",name:"title",onChange:this.handleChange,value:this.state.title})}),Object(a.jsx)(S.a,{color:"primary",type:"submit",children:"Search"})]})]}),Object(a.jsx)(k.a,{className:"float-left",children:Object(a.jsxs)(C.a,{xs:"2",children:[Object(a.jsx)(N.a,{children:Object(a.jsxs)(f.a,{color:"primary",fluid:!0,children:[Object(a.jsx)("h3",{className:"searchText",children:"Search Results"}),Object(a.jsx)("div",{children:this.state.movies.map((function(t){return Object(a.jsx)(C.a,{xs:"2",children:Object(a.jsxs)(N.a,{className:"movieListing",children:[" ",Object(a.jsxs)(w.a,{color:"danger",children:[t.Title," (",t.Year,")  ",Object(a.jsx)(S.a,{disabled:e.state.button_state,color:"primary",id:t,onClick:function(){return e.nominateMovie(t)},children:"Nominate"})]},t.Title)," "]})})}))})]})}),Object(a.jsx)(N.a,{children:Object(a.jsxs)(f.a,{color:"primary",fluid:!0,children:[Object(a.jsx)("h3",{className:"nominationText",children:"Nominated Movies"}),Object(a.jsx)("div",{children:this.state.nominatedMovies.map((function(t){return Object(a.jsx)(C.a,{xs:"2",children:Object(a.jsxs)(N.a,{className:"nomination",children:[" ",Object(a.jsxs)(w.a,{color:"danger",children:[t.Title," (",t.Year,") ",Object(a.jsx)(S.a,{id:t,onClick:function(){return e.removeNomination(t)},children:"Remove"})]},t)," "]})})}))})]})})]})})]})}}]),n}(i.Component));var F=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(T,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),c(e),s(e)}))};n(81);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),_()}},[[82,1,2]]]);
//# sourceMappingURL=main.ed290e4c.chunk.js.map