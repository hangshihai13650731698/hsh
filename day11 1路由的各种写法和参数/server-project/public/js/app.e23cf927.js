(function(t){function e(e){for(var a,i,s=e[0],c=e[1],u=e[2],d=0,h=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"066b":function(t,e,n){"use strict";var a=n("c25d"),r=n.n(a);r.a},"0ab01":function(t,e,n){"use strict";var a=n("8159"),r=n.n(a);r.a},"27f1":function(t,e,n){"use strict";var a=n("7a94"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("2369"),n("7cc1"),n("bdd3"),n("941d");var a=n("6e6d"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[n("router-view")],1)],1)},o=[],i={name:"app",components:{}},s=i,c=n("6691"),u=Object(c["a"])(s,r,o,!1,null,null,null),l=u.exports,d=n("2427"),h=n.n(d),p=n("591a");a["a"].use(p["a"]);var f=new p["a"].Store({state:{author:"jing",seachText:{value:""}},mutations:{setText:function(t,e){t.seachText=e}},actions:{setText:function(t,e){t.commit("setText",e)}},getters:{getText:function(t){return t.seachText}}}),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Search"),n("Grid"),n("Diver"),n("Card")],1)},m=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-search",{attrs:{label:"地址",placeholder:"请输入搜索关键词","show-action":"",shape:"round"},on:{search:t.onSearch},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])])},g=[],_=(n("e3a8"),n("4170"));a["a"].use(_["a"]);var x={data:function(){return{value:""}},methods:{onSearch:function(){this.$store.dispatch("setText",{value:this.value}),window.console.log(this.value)}}},w=x,y=Object(c["a"])(w,b,g,!1,null,"8cec0e42",null),j=y.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-divider",[t._v("推荐商家")])},$=[],k=(n("c41b"),n("42b5"));a["a"].use(k["a"]);var S={},C=S,T=Object(c["a"])(C,O,$,!1,null,null,null),E=T.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-grid",{attrs:{"column-num":5}},t._l(t.gridsComputed,(function(t,e){return n("van-grid-item",{key:e,attrs:{icon:"photo-o",text:t.name}})})),1)},P=[],z=(n("43be"),n("c406"),n("0ab0")),F=(n("35c2"),n("6fed"));a["a"].use(z["a"]).use(F["a"]);var A={data:function(){return{grids:[]}},created:function(){this.loadMore()},methods:{loadMore:function(){var t=this;h.a.get("http://localhost:3000/entries").then((function(e){var n=e.data;window.console.log(n),t.grids=n}))}},computed:{gridsComputed:function(){return this.grids.slice(0,10)}}},G=A,H=Object(c["a"])(G,M,P,!1,null,null,null),I=H.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-list",{attrs:{offset:50,finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.restaurantsComputed,(function(e,a){return n("van-card",{key:a,attrs:{num:"99",tag:"标签",price:"88",desc:e.description,title:e.name,thumb:"https://img.yzcdn.cn/vant/t-thirt.jpg","origin-price":"10.00"},on:{click:function(e){return t.xiangqing(a)}}},[n("div",{attrs:{slot:"footer"},slot:"footer"},[n("van-button",{staticClass:"btn1",attrs:{size:"mini"}},[t._v("加入购物车")]),n("van-button",{staticClass:"btn2",attrs:{size:"mini"}},[t._v("立即购买")])],1)])})),1)},L=[],Y=(n("c1b2"),n("7c66"),n("9eb3"),n("3907"),n("58e6"),n("d035"),n("50e0"),n("6b33")),D=(n("48dc"),n("5506")),Q=(n("5f78"),n("e17e")),W=(n("1562"),n("129f"));a["a"].use(W["a"]),a["a"].use(Q["a"]),a["a"].use(D["a"]),a["a"].use(Y["a"]);var q={data:function(){return{list:[],loading:!1,finished:!1,restaurants:[]}},computed:{search:function(){return this.$store.getters.getText},restaurantsComputed:function(){var t=this;return this.search.value?(window.console.log(this.search.value),this.restaurants.filter((function(e){if(e.name.indexOf(t.search.value)>=0)return e}))):this.restaurants}},created:function(){},methods:{onLoad:function(){var t=this;this.$axios.get("http://localhost:3000/restaurants").then((function(e){var n=e.data;t.restaurants=t.restaurants.concat(n),t.loading=!1,t.restaurants.length>=10&&(t.finished=!0)}))},xiangqing:function(t){window.console.log(t),this.$router.push({name:"page",params:{id:t}})}}},J=q,R=(n("0ab01"),Object(c["a"])(J,K,L,!1,null,null,null)),U=R.exports,V={components:{Search:j,Grid:I,Diver:E,Card:U}},X=V,B=Object(c["a"])(X,v,m,!1,null,null,null),N=B.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Search"),n("van-swipe",{staticClass:"lunbo",attrs:{autoplay:3e3,"indicator-color":"white"}},[n("van-swipe-item",{staticClass:"list1"},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://ss3.baidu.com/-rVXeDTa2gU2pMbgoY3K/it/u=1199854374,2902149365&fm=202&mola=new&crop=v1",alt:""}})]),n("van-swipe-item",{staticClass:"list2"},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1386833453,2703259007&fm=26&gp=0.jpg",alt:""}})]),n("van-swipe-item",{staticClass:"list3"},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3356844394,2271561381&fm=26&gp=0.jpg",alt:""}})]),n("van-swipe-item",{staticClass:"list4"},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=331044100,2561097742&fm=26&gp=0.jpg",alt:""}})])],1),n("Card")],1)},tt=[],et=(n("f455"),n("08cd")),nt=(n("b8c1"),n("5950"));a["a"].use(et["a"]).use(nt["a"]);var at={data:function(){return{}},components:{Search:j,Card:U}},rt=at,ot=(n("27f1"),Object(c["a"])(rt,Z,tt,!1,null,null,null)),it=ot.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Card")],1)},ct=[],ut={components:{Card:U}},lt=ut,dt=Object(c["a"])(lt,st,ct,!1,null,"53059e2e",null),ht=dt.exports,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-address-list",{attrs:{list:t.list,"disabled-list":t.disabledList,"disabled-text":"以下地址超出配送范围"},on:{add:t.onAdd,edit:t.onEdit},model:{value:t.chosenAddressId,callback:function(e){t.chosenAddressId=e},expression:"chosenAddressId"}})],1)},ft=[],vt=(n("dc88"),n("87e7"));a["a"].use(vt["a"]);var mt={data:function(){return{chosenAddressId:"1",list:[{id:"1",name:"张三",tel:"13000000000",address:"浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"},{id:"2",name:"李四",tel:"1310000000",address:"浙江省杭州市拱墅区莫干山路 50 号"}],disabledList:[{id:"3",name:"王五",tel:"1320000000",address:"浙江省杭州市滨江区江南大道 15 号"}]}}},bt=mt,gt=(n("066b"),Object(c["a"])(bt,pt,ft,!1,null,null,null)),_t=gt.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 详情页 "),n("span",[t._v(t._s(t.$route.params.id))]),n("button",{on:{click:function(e){return t.goto("/main/home")}}},[t._v("返回首页")])])},wt=[],yt={data:function(){return{name:this.search}},methods:{goto:function(t){this.$router.push(t)}},created:function(){return window.console.log(this.$route.params.id),this.$route.params.id},computed:{search:function(){return this.$route.params.id}}},jt=yt,Ot=Object(c["a"])(jt,xt,wt,!1,null,"1a6bc98d",null),$t=Ot.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",[n("router-view")],1),n("Tabbar")],1)},St=[],Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"home-o"},on:{click:function(e){return t.goto("/main/home")}}},[t._v("首页")]),n("van-tabbar-item",{attrs:{icon:"search"},on:{click:function(e){return t.goto("/main/cover")}}},[t._v("发现")]),n("van-tabbar-item",{attrs:{icon:"friends-o"},on:{click:function(e){return t.goto("/main/my")}}},[t._v("我的")]),n("van-tabbar-item",{attrs:{icon:"setting-o"},on:{click:function(e){return t.goto("/main/shezhi")}}},[t._v("设置")])],1)},Tt=[],Et=(n("a24c"),n("4b94")),Mt=(n("ed21"),n("ace2"));a["a"].use(Et["a"]).use(Mt["a"]);var Pt={data:function(){return{active:0}},methods:{goto:function(t){this.$router.push(t)}}},zt=Pt,Ft=Object(c["a"])(zt,Ct,Tt,!1,null,"57956250",null),At=Ft.exports,Gt={components:{Tabbar:At}},Ht=Gt,It=Object(c["a"])(Ht,kt,St,!1,null,"5532b592",null),Kt=It.exports,Lt=n("c478");a["a"].use(Lt["a"]);var Yt=[{path:"/main",component:Kt,name:"main",children:[{path:"home",component:N,name:"home"},{path:"cover",component:it,name:"Recover"},{path:"my",component:ht,name:"my"},{path:"shezhi",component:_t,name:"shezhi"}]},{path:"/",redirect:"/main/home"},{path:"/page/:id",component:$t,name:"page"}],Dt=new Lt["a"]({routes:Yt}),Qt=Dt;a["a"].config.productionTip=!1,a["a"].prototype.$axios=h.a,new a["a"]({router:Qt,store:f,render:function(t){return t(l)}}).$mount("#app")},"7a94":function(t,e,n){},8159:function(t,e,n){},c25d:function(t,e,n){}});
//# sourceMappingURL=app.e23cf927.js.map