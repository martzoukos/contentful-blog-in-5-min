webpackJsonp([2],{138:function(t,n,e){e(154);var o=e(16)(e(141),e(150),null,null);t.exports=o.exports},141:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e(66),s=e.n(o);n.default={asyncData:function(t){var n=t.params;return s.a.getEntries({content_type:"blogPost","fields.slug":n.slug}).then(function(t){return{post:t.items[0]}}).catch(console.error)},components:{}}},146:function(t,n,e){n=t.exports=e(43)(void 0),n.push([t.i,"",""])},150:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("nuxt-link",{attrs:{to:{name:"blog"}}},[t._v("Blog")]),t._v("\n  "+t._s(t.post.fields.title)+"\n")],1)},staticRenderFns:[]}},154:function(t,n,e){var o=e(146);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(44)("432708a6",o,!0)}});