(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{395:function(t,e,n){"use strict";var s=n(205),a=n(204),o=n(8),i=n(33),r=n(118),l=n(206),c=n(19),v=n(207),p=n(81),u=n(2),_=[].push,d=Math.min,m=!u((function(){return!RegExp(4294967295,"y")}));s("split",2,(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=String(i(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[s];if(!a(t))return e.call(s,t,o);for(var r,l,c,v=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,m=new RegExp(t.source,u+"g");(r=p.call(m,s))&&!((l=m.lastIndex)>d&&(v.push(s.slice(d,r.index)),r.length>1&&r.index<s.length&&_.apply(v,r.slice(1)),c=r[0].length,d=l,v.length>=o));)m.lastIndex===r.index&&m.lastIndex++;return d===s.length?!c&&m.test("")||v.push(""):v.push(s.slice(d)),v.length>o?v.slice(0,o):v}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=i(this),o=null==e?void 0:e[t];return void 0!==o?o.call(e,a,n):s.call(String(a),e,n)},function(t,a){var i=n(s,t,this,a,s!==e);if(i.done)return i.value;var p=o(t),u=String(this),_=r(p,RegExp),f=p.unicode,h=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(m?"y":"g"),k=new _(m?p:"^(?:"+p.source+")",h),C=void 0===a?4294967295:a>>>0;if(0===C)return[];if(0===u.length)return null===v(k,u)?[u]:[];for(var g=0,y=0,b=[];y<u.length;){k.lastIndex=m?y:0;var w,S=v(k,m?u:u.slice(y));if(null===S||(w=d(c(k.lastIndex+(m?0:y)),u.length))===g)y=l(u,y,f);else{if(b.push(u.slice(g,y)),b.length===C)return b;for(var x=1;x<=S.length-1;x++)if(b.push(S[x]),b.length===C)return b;y=g=w}}return b.push(u.slice(g)),b}]}),!m)},398:function(t,e,n){"use strict";var s=n(1),a=n(37),o=[].reverse,i=[1,2];s({target:"Array",proto:!0,forced:String(i)===String(i.reverse())},{reverse:function(){return a(this)&&(this.length=this.length),o.call(this)}})},416:function(t,e,n){},448:function(t,e,n){var s=n(1),a=n(215).entries;s({target:"Object",stat:!0},{entries:function(t){return a(t)}})},449:function(t,e,n){"use strict";n(416)},458:function(t,e,n){"use strict";n.r(e);n(120),n(23),n(202),n(208),n(53),n(398),n(55),n(448),n(52),n(79),n(395);var s=n(32),a={data:function(){return{isSolver:!1}},computed:{domainOrSolver:function(){return this.isSolver?"solver":"domain"},selection:function(){return this.$store.state.selection},selectedTemplate:function(){return this.$store.getters.selectedTemplate},domainInheritance:function(){var t=this;return[this.selection.domain.template].concat(Object(s.a)(Object.entries(this.selection.domain.characteristics).filter((function(e){return t.isFinetuned(e[0],e[1],"domain")})).map((function(t){return t[1]})))).join(", ")},solverInheritance:function(){var t=this;return[this.selection.solver.template].concat(Object(s.a)(Object.entries(this.selection.solver.characteristics).filter((function(e){return t.isFinetuned(e[0],e[1],"solver")})).map((function(t){return t[1]})))).join(", ")},methods:function(){return this.$store.state.methods},domainTypes:function(){return this.$store.getters.domainTypes},signatures:function(){return this.$store.state.signatures[this.domainOrSolver]}},methods:{isFinetuned:function(t,e,n){return this.selectedTemplate[n].characteristics[t]!==e},adaptAnnotation:function(t){var e=this,n=t;if(this.selection.domain.simplifySignatures){n=n.replace(/\bD\.(\w+)\b/g,(function(t,n){return void 0!==e.domainTypes[n]?e.domainTypes[n].split(".").reverse()[0]:t}));for(var s=0;;){var a=n.indexOf("Union[",s);if(a<0)break;for(var o=0,i=a+"Union[".length;i<n.length;i++){var r=n.charAt(i);if(","===r&&0===o){s=a+1;break}if("["===r)o++;else if("]"===r){if(0===o){n=n.slice(0,a)+n.slice(a+"Union[".length,i)+n.slice(i+1);break}o--}}}}return n},copyCode:function(){var t=document.getElementById("gencode").textContent,e=document.createElement("textarea");e.textContent=t,document.body.append(e),e.select(),document.execCommand("copy")}}},o=(n(449),n(51)),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"30px"}},[n("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[n("el-switch",{attrs:{"inactive-text":"Create Domain","active-text":"Create Solver","inactive-color":"#409EFF","active-color":"#409EFF"},model:{value:t.isSolver,callback:function(e){t.isSolver=e},expression:"isSolver"}}),t._v(" "),n("el-button",{attrs:{round:"",icon:"el-icon-copy-document",size:"small"},on:{click:t.copyCode}},[n("strong",[t._v("Copy code")])])],1),t._v(" "),t.isSolver?t._t("SolverSummary"):t._e(),t._v(" "),n("pre",[n("code",{staticClass:"language-python",attrs:{id:"gencode"}},[t.isSolver?t._e():[n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" enum "),n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" Enum")],t._v("\n"),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" typing "),n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("*")]),t._v("\n\n"),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" skdecide "),n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("*")]),t._v("\n"),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" skdecide.builders.domain "),n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("*")]),t.isSolver?[t._v("\n"),n("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" skdecide.builders.solver "),n("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" "),n("span",{staticClass:"token operator"},[t._v("*")])]:t._e(),t._v("\n\n"),t.isSolver?t._e():[t._v("\n"),n("span",{staticClass:"token comment"},[t._v("# Example of State type (adapt to your needs)")]),t._v("\n"),n("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),n("span",{staticClass:"token class-name"},[t._v("State")]),t._v("(NamedTuple):\n    x: "),n("span",{staticClass:"token builtin"},[t._v("int")]),t._v("\n    y: "),n("span",{staticClass:"token builtin"},[t._v("int")]),t._v("\n\n\n"),n("span",{staticClass:"token comment"},[t._v("# Example of Action type (adapt to your needs)")]),t._v("\n"),n("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),n("span",{staticClass:"token class-name"},[t._v("Action")]),t._v("(Enum):\n    up "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),n("span",{staticClass:"token number"},[t._v("0")]),t._v("\n    down "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),n("span",{staticClass:"token number"},[t._v("1")]),t._v("\n    left "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),n("span",{staticClass:"token number"},[t._v("2")]),t._v("\n    right "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),n("span",{staticClass:"token number"},[t._v("3")]),t._v("\n\n")],t._v("\n"),n("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),n("span",{staticClass:"token class-name"},[t._v("D")]),t._v("("+t._s(t.domainInheritance)+"):\n    "),t.isSolver?[t._v("pass")]:[t._v("T_state "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" State  "),n("span",{staticClass:"token comment"},[t._v("# Type of states")]),t._v("\n    T_observation "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" T_state  "),n("span",{staticClass:"token comment"},[t._v("# Type of observations")]),t._v("\n    T_event "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" Action  "),n("span",{staticClass:"token comment"},[t._v("# Type of events")]),t._v("\n    T_value "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),n("span",{staticClass:"token builtin"},[t._v("float")]),t._v("  "),n("span",{staticClass:"token comment"},[t._v("# Type of transition values (rewards or costs)")]),t._v("\n    T_info "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),n("span",{staticClass:"token boolean"},[t._v("None")]),t._v("  "),n("span",{staticClass:"token comment"},[t._v("# Type of additional information in environment outcome")])],t._v("\n\n\n"),n("span",{staticClass:"token keyword"},[t._v("class")]),t._v(" "),t.isSolver?[n("span",{staticClass:"token class-name"},[t._v("MySolver")]),t._v("("+t._s(t.solverInheritance)+"):\n    T_domain "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" D")]:[n("span",{staticClass:"token class-name"},[t._v("MyDomain")]),t._v("(D):")],t._v("\n    "),t._l(Object.entries(Object.assign({},{default:t.domainOrSolver},t.selection[t.domainOrSolver].characteristics)).filter((function(t){t[0];return"(none)"!=t[1]})),(function(e){e[0];var s=e[1];return[t._l(t.methods[t.domainOrSolver][s],(function(e){return[t._v("\n    "),n("span",{staticClass:"token keyword"},[t._v("def")]),t._v(" "),n("span",{staticClass:"token function"},[t._v(t._s(e))]),t._v("("),t._l(t.signatures[e].params,(function(s,a){return[t._v(t._s(s.name)),s.annotation?[t._v(": "+t._s(t.adaptAnnotation(s.annotation)))]:t._e(),n("span",{directives:[{name:"show",rawName:"v-show",value:s.default,expression:"p.default"}]},[t._v(" "),n("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),n("span",{staticClass:"token boolean"},[t._v(t._s(s.default))])]),n("span",{directives:[{name:"show",rawName:"v-show",value:a<t.signatures[e].params.length-1,expression:"i < signatures[method].params.length - 1"}]},[t._v(", ")])]})),t._v(")"),t.signatures[e].return?[t._v(" "),n("span",{staticClass:"token operator"},[t._v("->")]),t._v(" "+t._s(t.adaptAnnotation(t.signatures[e].return)))]:t._e(),t._v(":\n        "),n("span",{staticClass:"token keyword"},[t._v("pass")]),t._v("\n    ")]}))]})),t._v("\n")],2),t._v("\n")])],2)}),[],!1,null,null,null);e.default=i.exports}}]);