(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{395:function(t,n,e){"use strict";var i=e(205),s=e(204),r=e(8),a=e(33),l=e(118),o=e(206),u=e(19),c=e(207),p=e(81),d=e(2),h=[].push,f=Math.min,g=!d((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,n,e){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var i=String(a(this)),r=void 0===e?4294967295:e>>>0;if(0===r)return[];if(void 0===t)return[i];if(!s(t))return n.call(i,t,r);for(var l,o,u,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,g=new RegExp(t.source,d+"g");(l=p.call(g,i))&&!((o=g.lastIndex)>f&&(c.push(i.slice(f,l.index)),l.length>1&&l.index<i.length&&h.apply(c,l.slice(1)),u=l[0].length,f=o,c.length>=r));)g.lastIndex===l.index&&g.lastIndex++;return f===i.length?!u&&g.test("")||c.push(""):c.push(i.slice(f)),c.length>r?c.slice(0,r):c}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,e){var s=a(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,s,e):i.call(String(s),n,e)},function(t,s){var a=e(i,t,this,s,i!==n);if(a.done)return a.value;var p=r(t),d=String(this),h=l(p,RegExp),v=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(g?"y":"g"),_=new h(g?p:"^(?:"+p.source+")",m),b=void 0===s?4294967295:s>>>0;if(0===b)return[];if(0===d.length)return null===c(_,d)?[d]:[];for(var k=0,y=0,x=[];y<d.length;){_.lastIndex=g?y:0;var w,L=c(_,g?d:d.slice(y));if(null===L||(w=f(u(_.lastIndex+(g?0:y)),d.length))===k)y=o(d,y,v);else{if(x.push(d.slice(k,y)),x.length===b)return x;for(var C=1;C<=L.length-1;C++)if(x.push(L[C]),x.length===b)return x;y=k=w}}return x.push(d.slice(k)),x}]}),!g)},398:function(t,n,e){"use strict";var i=e(1),s=e(37),r=[].reverse,a=[1,2];i({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),r.call(this)}})},417:function(t,n,e){},450:function(t,n,e){"use strict";e(417)},459:function(t,n,e){"use strict";e.r(n);e(54),e(202),e(398),e(55),e(52),e(79),e(395),e(80);var i=e(32),s={props:{sig:{type:Object,default:function(){return{params:[]}}},name:{type:String,default:""}},data:function(){return{needsLinksUpdate:!1}},computed:{selection:function(){return this.$store.state.selection},objects:function(){return this.$store.state.objects},domainTypes:function(){return this.$store.getters.domainTypes}},methods:{adaptAnnotationHtml:function(t){var n=this,e=t;if(this.selection.domain.simplifySignatures){e=e.replace(/\bD\.(\w+)\b/g,(function(t,e){return void 0!==n.domainTypes[e]?n.domainTypes[e].split(".").reverse()[0]:t}));for(var i=0;;){var s=e.indexOf("Union[",i);if(s<0)break;for(var r=0,a=s+"Union[".length;a<e.length;a++){var l=e.charAt(a);if(","===l&&0===r){i=s+1;break}if("["===l)r++;else if("]"===l){if(0===r){e=e.slice(0,s)+e.slice(s+"Union[".length,a)+e.slice(a+1);break}r--}}}}return e=e.replace(/\w+/g,(function(t){return void 0!==n.objects[t]?'<a class="linkto" data-link="'+n.objects[t]+'">'+t+"</a>":t})),this.needsLinksUpdate=!0,this.$nextTick(this.updateLinks),e},updateLinks:function(){var t=this;this.needsLinksUpdate&&(Object(i.a)(document.getElementsByClassName("linkto")).forEach((function(n){return n.addEventListener("click",(function(){return t.$router.push(n.getAttribute("data-link"))}))})),this.needsLinksUpdate=!1)}}},r=(e(450),e(51)),a=Object(r.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("pre",[e("code",{staticClass:"language-python"},[e("span",{staticClass:"token function"},[t._v(t._s(t.name))]),t._v("(\n"),t._l(t.sig.params,(function(n,i){return[t._v("  "+t._s(n.name)),n.annotation?[t._v(": "),e("span",{domProps:{innerHTML:t._s(t.adaptAnnotationHtml(n.annotation))}})]:t._e(),n.default?[t._v(" "),e("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),e("span",{staticClass:"token boolean"},[t._v(t._s(n.default))])]:t._e(),i<t.sig.params.length-1?[t._v(",")]:t._e(),e("br")]})),t._v(")"),t.sig.return?[t._v(" "),e("span",{staticClass:"token operator"},[t._v("->")]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.adaptAnnotationHtml(t.sig.return))}})]:t._e()],2),t._v("\n")])}),[],!1,null,null,null);n.default=a.exports}}]);