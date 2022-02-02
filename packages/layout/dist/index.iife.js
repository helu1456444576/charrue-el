this.CharrueLayout=function(){"use strict";var R=Object.defineProperty,P=Object.defineProperties,M=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?R(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,_=(e,r)=>{for(var t in r||(r={}))F.call(r,t)&&c(e,t,r[t]);if(l)for(var t of l(r))j.call(r,t)&&c(e,t,r[t]);return e},k=(e,r)=>P(e,M(r));const d="$CharrueLayoutPluginOptions",z=e=>{const r={};return e==2?r.subMenu="el-submenu":e==3?r.subMenu="el-sub-menu":console.error(`[charrue layout] version ${e} is not supported`),r},D=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;function O(e){return D.test(e)}function A(e){const r=e.split("/").filter(t=>t);return r.map((t,a)=>`/${r.slice(0,a+1).join("/")}`)}function p(e,r=""){return e.map(t=>{let{path:a,redirect:o}=t;if(a&&!O(a)){const s=a[0]==="/";a&&(a=r&&s?a:`${r}/${a}`)}a=h(a),o&&o[0]!=="/"&&(o=h(`${a}/${o}`));const i=k(_({},t),{path:a,redirect:o});return t.children&&(i.children=p(t.children,`${r}/${t.path}`)),i})}function f(e,r={}){if(!Array.isArray(e))return r;let t=_({},r);return e.forEach(a=>{a.path&&(t[a.path]=a),a.children&&(t=f(a.children,t))}),t}function h(e){return e.replace(/\/\//g,"/")}function m(e){return typeof e=="function"}var L={name:"SidebarItem",props:{subMenuComponent:{type:String,default:"el-submenu"},menuItem:{type:Object,required:!0},prefixIconClass:String,menuTextClass:String,route:Boolean}};const B=L;var v=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"charrue-layout-sidebar-el-menu-container"},[e.menuItem.children&&e.menuItem.children.length>0?t(e.subMenuComponent,{tag:"component",attrs:{index:e.menuItem.path,"popper-append-to-body":""},scopedSlots:e._u([{key:"title",fn:function(){return[t("div",{class:["submenu-title",e.menuItem.icon?"submenu-title-with-icon":""]},[t("i",{class:["sidebar-menu-icon",e.prefixIconClass,e.menuItem.icon]}),e._v(" "),t("span",{class:[e.menuTextClass,"common-menu-text"]},[e._v(e._s(e.menuItem.title))])])]},proxy:!0}],null,!1,1635619749)},[e._v(" "),e._l(e.menuItem.children,function(a){return t("sidebar-item",{key:a.path,attrs:{route:e.route,"is-nest":!0,menuItem:a,subMenuComponent:e.subMenuComponent}})})],2):[e.route?t("router-link",{staticClass:"menu-router-link",attrs:{to:e.menuItem.path}},[t("el-menu-item",{attrs:{index:e.menuItem.path},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{class:[e.menuTextClass,"common-menu-text"]},[e._v(e._s(e.menuItem.title))])]},proxy:!0}],null,!1,2300878676)},[t("i",{class:["sidebar-menu-icon",e.prefixIconClass,e.menuItem.icon]})])],1):t("el-menu-item",{attrs:{index:e.menuItem.path},scopedSlots:e._u([{key:"title",fn:function(){return[t("span",{class:[e.menuTextClass,"common-menu-text"]},[e._v(e._s(e.menuItem.title))])]},proxy:!0}])},[t("i",{class:["sidebar-menu-icon",e.prefixIconClass,e.menuItem.icon]})])]],2)},W=[];v._withStripped=!0;const H=void 0,E=void 0,U=!1;function K(e,r,t,a,o,i,s,u){const n=(typeof t=="function"?t.options:t)||{};return n.__file="C:\\all\\code\\plow\\charrue-el\\packages\\layout-internal\\libs\\SidebarItem.vue",n.render||(n.render=e.render,n.staticRenderFns=e.staticRenderFns,n._compiled=!0,o&&(n.functional=!0)),n._scopeId=a,n}var T=K({render:v,staticRenderFns:W},H,B,E,U),q=Object.defineProperty,y=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,g=(e,r,t)=>r in e?q(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))N.call(r,t)&&g(e,t,r[t]);if(y)for(var t of y(r))Z.call(r,t)&&g(e,t,r[t]);return e},G={name:"GlobalAside",components:{SidebarItem:T},props:{data:{type:Array,default(){return[]}},collapsed:{type:Boolean,default:!1},logo:String,title:String,route:{type:Boolean,default:!0},absolute:{type:Boolean,default:!1},authorized:Function,checkMenuDisabled:Function,sidebarWidth:{type:Array,default(){return[54,200]}},homeUrl:{type:String,default:"/"},subMenuComponent:{type:String}},data(){return{openKeys:[],activeRoutePath:"",menuData:[],menuDataPathMapping:{}}},computed:{width(){return this.collapsed?this.sidebarWidth[0]+"px":this.sidebarWidth[1]+"px"},computedMenuData(){const e=[];return this.menuData.forEach((r,t)=>{const a=this.formatMenuData({menu:r,index:t,deep:0,path:r.path,parent:null});a&&e.push(a)}),e}},watch:{data:{handler(){this.filterAsideMenuData()},immediate:!0,deep:!0}},methods:{filterAsideMenuData(){const e=this.data.filter(r=>r.title&&!r.hide).map(r=>(this.authorized&&this.authorized(r.authority,r),r)).filter(r=>!!r);this.menuData=p(e),this.menuDataPathMapping=f(this.menuData)},_formatMenuData({menu:e,deep:r,index:t,path:a,parent:o}={}){let i=e?b({},e):{};return this.authorized?m(this.authorized)&&!this.authorized({menu:i,deep:r,index:t,path:a,parent:o})?!1:(i.children=i.children||[],Array.isArray(i.children)&&i.children.length>0&&(i.children=i.children.map(s=>{const u=a.startsWith("/")?s.path:`${a}/${s.path}`;return this._formatMenuData({menu:s,deep:r+1,index:t,path:u,parent:i})}).filter(s=>s)),i):i},formatMenuData({menu:e,deep:r,index:t,path:a,parent:o}={}){let i=e?b({},e):{};return this.authorized?m(this.authorized)&&!this.authorized({menu:i,deep:r,index:t,path:a,parent:o})?!1:(i.children=i.children||[],Array.isArray(i.children)&&i.children.length>0&&(i.children=i.children.map(s=>{const u=a.startsWith("/")?s.path:`${a}/${s.path}`;return this.formatMenuData({menu:s,deep:r+1,index:t,path:u,parent:i})}).filter(s=>s)),i):i}},created(){this.route&&this.$watch("$route.path",e=>{this.menuDataPathMapping[e]&&this.menuDataPathMapping[e].redirect?this.activeRoutePath=this.menuDataPathMapping[e].redirect:this.activeRoutePath=e,this.openKeys=A(e)},{immediate:!0})}};const V=G;var $=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"charrue-layout-sidebar-container"},[t("div",{staticClass:"charrue-layout-sidebar-placeholder",style:{width:e.width}}),e._v(" "),t("div",{staticClass:"charrue-layout-sidebar charrue-layout-sidebar-el-menu-container",style:{width:e.width,position:e.absolute?"absolute":"fixed"}},[e.logo||e.title?t("div",{staticClass:"logo-container"},[t("router-link",{class:["menu-router-link"],attrs:{to:e.homeUrl}},[e.logo?t("img",{attrs:{src:e.logo,alt:"logo"}}):e._e(),e._v(" "),e.title?t("h1",[e._v(e._s(e.title))]):e._e()])],1):e._e(),e._v(" "),e._t("sidebar-top"),e._v(" "),t("el-menu",{staticClass:"charrue-layout-sidebar-el-menu",attrs:{mode:"vertical","unique-opened":"",collapse:e.collapsed,"default-active":e.activeRoutePath,"default-openeds":e.openKeys}},e._l(e.computedMenuData,function(a){return t("sidebar-item",{key:a.path,attrs:{route:e.route,subMenuComponent:e.subMenuComponent,menuItem:a}})}),1),e._v(" "),e._t("sidebar-bottom")],2)])},J=[];$._withStripped=!0;const Q=void 0,X=void 0,Y=!1;function ee(e,r,t,a,o,i,s,u){const n=(typeof t=="function"?t.options:t)||{};return n.__file="C:\\all\\code\\plow\\charrue-el\\packages\\layout-internal\\libs\\LayoutSidebar.vue",n.render||(n.render=e.render,n.staticRenderFns=e.staticRenderFns,n._compiled=!0,o&&(n.functional=!0)),n._scopeId=a,n}var te=ee({render:$,staticRenderFns:J},Q,V,X,Y),re={name:"Hamburger",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],methods:{toggleClick(){this.$emit("toggle-click",this.isActive)}}};const ne=re;var C=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"hamburger-container",on:{click:e.toggleClick}},[t("svg",{staticClass:"hamburger-svg",class:{"is-active":e.isActive},attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"}},[t("path",{attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}})])])},ae=[];C._withStripped=!0;const ie=void 0,oe=void 0,se=!1;function ue(e,r,t,a,o,i,s,u){const n=(typeof t=="function"?t.options:t)||{};return n.__file="C:\\all\\code\\plow\\charrue-el\\packages\\layout-internal\\libs\\Hamburger.vue",n.render||(n.render=e.render,n.staticRenderFns=e.staticRenderFns,n._compiled=!0,o&&(n.functional=!0)),n._scopeId=a,n}var le=ue({render:C,staticRenderFns:ae},ie,ne,oe,se),ce={name:"LayoutHeader",components:{Hamburger:le},props:{collapse:{type:Boolean,default:!1},fixed:{type:Boolean,default:!0}},emits:["update:collapse"],methods:{toggleSideBar(){this.$emit("update:collapse",!this.collapse)}}};const _e=ce;var I=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"charrue-layout-header-container",class:{"fixed-header":e.fixed}},[t("div",{staticClass:"charrue-layout-header-main"},[t("div",{staticClass:"charrue-layout-header-left"},[e._t("header-trigger",function(){return[t("hamburger",{on:{"toggle-click":e.toggleSideBar}})]}),e._v(" "),e._t("header-left")],2),e._v(" "),t("div",{staticClass:"charrue-layout-header-right"},[e._t("header-right")],2)])])},de=[];I._withStripped=!0;const pe=void 0,fe=void 0,he=!1;function me(e,r,t,a,o,i,s,u){const n=(typeof t=="function"?t.options:t)||{};return n.__file="C:\\all\\code\\plow\\charrue-el\\packages\\layout-internal\\libs\\LayoutHeader.vue",n.render||(n.render=e.render,n.staticRenderFns=e.staticRenderFns,n._compiled=!0,o&&(n.functional=!0)),n._scopeId=a,n}var ve=me({render:I,staticRenderFns:de},pe,_e,fe,he),ye={name:"LayoutContent",props:{animation:{type:Boolean,default:!0}}};const ge=ye;var S=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",{staticClass:"charrue-layout-content-container"},[t("div",{staticClass:"charrue-layout-content-header"},[e._t("content-header")],2),e._v(" "),t("div",{staticClass:"charrue-layout-content-main"},[e.animation?[t("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[e._t("content")],2)]:[e._t("content")]],2),e._v(" "),t("div",{staticClass:"charrue-layout-content-footer"},[e._t("content-footer")],2)])},be=[];S._withStripped=!0;const $e=void 0,Ce=void 0,Ie=!1;function Se(e,r,t,a,o,i,s,u){const n=(typeof t=="function"?t.options:t)||{};return n.__file="C:\\all\\code\\plow\\charrue-el\\packages\\layout-internal\\libs\\LayoutContent.vue",n.render||(n.render=e.render,n.staticRenderFns=e.staticRenderFns,n._compiled=!0,o&&(n.functional=!0)),n._scopeId=a,n}var we=Se({render:S,staticRenderFns:be},$e,ge,Ce,Ie),xe={name:"Layout",components:{LayoutSidebar:te,LayoutHeader:ve,LayoutContent:we},props:{version:{type:Number,validator(e){return[2,3].indexOf(e)>-1},default:2},collapsed:{type:Boolean,default:!1},fixedHeader:{type:Boolean,default:!0},data:{type:Array,required:!0,default(){return[]}},logo:String,title:String,sidebarWidth:{type:Array,default(){return[54,200]}},animation:{type:Boolean,default:!0},absolute:{type:Boolean,default:!1},route:{type:Boolean,default:!0},authorized:Function,homeUrl:{type:String,default:"/"}},data(){return{innerCollapse:!1,componentConfig:{}}},computed:{mainWidthStyle(){return{width:`calc(100% - ${this.collapsed?this.sidebarWidth[0]:this.sidebarWidth[1]}px)`}},headerWidthStyle(){let e="100%";return this.fixedHeader&&(e=`calc(100% - ${this.collapsed?this.sidebarWidth[0]:this.sidebarWidth[1]}px)`),{width:e}}},watch:{collapsed:{handler(e){this.innerCollapse=e},immediate:!0},innerCollapse(e){this.$emit("update:collapsed",e)}},created(){this.componentConfig=z(this[d].version||2)},emits:["update:collapsed"]};const Re=xe;var w=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"charrue-layout",class:[e.collapsed?"hideSidebar":"openSidebar"]},[t("layout-sidebar",{attrs:{collapsed:e.innerCollapse,data:e.data,logo:e.logo,title:e.title,route:e.route,absolute:e.absolute,authorized:e.authorized,sidebarWidth:e.sidebarWidth,homeUrl:e.homeUrl,subMenuComponent:e.componentConfig.subMenu},scopedSlots:e._u([{key:"sidebar-top",fn:function(){return[e._t("sidebar-top")]},proxy:!0},{key:"sidebar-bottom",fn:function(){return[e._t("sidebar-bottom")]},proxy:!0}],null,!0)}),e._v(" "),t("div",{staticClass:"charrue-layout-main",style:e.mainWidthStyle},[t("layout-header",{style:e.headerWidthStyle,attrs:{collapse:e.innerCollapse,fixed:e.fixedHeader},on:{"update:collapse":function(a){return e.innerCollapse=a}},scopedSlots:e._u([{key:"header-trigger",fn:function(){return[e._t("header-trigger")]},proxy:!0},{key:"header-left",fn:function(){return[e._t("header-left")]},proxy:!0},{key:"header-right",fn:function(){return[e._t("header-right")]},proxy:!0}],null,!0)}),e._v(" "),t("layout-content",{attrs:{animation:e.animation},scopedSlots:e._u([{key:"content-header",fn:function(){return[e._t("content-header")]},proxy:!0},{key:"content",fn:function(){return[e._t("default")]},proxy:!0},{key:"content-footer",fn:function(){return[e._t("content-footer")]},proxy:!0}],null,!0)})],1)],1)},Pe=[];w._withStripped=!0;const Me=void 0,Fe=void 0,je=!1;function ke(e,r,t,a,o,i,s,u){const n=(typeof t=="function"?t.options:t)||{};return n.__file="C:\\all\\code\\plow\\charrue-el\\packages\\layout-internal\\libs\\Layout.vue",n.render||(n.render=e.render,n.staticRenderFns=e.staticRenderFns,n._compiled=!0,o&&(n.functional=!0)),n._scopeId=a,n}var ze=ke({render:w,staticRenderFns:Pe},Me,Re,Fe,je);const x=ze,De=d;var Oe={install(e){e.prototype[De]={version:2},e.component(x.name,x)}};return Oe}();
