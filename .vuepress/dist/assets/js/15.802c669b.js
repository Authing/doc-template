(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{378:function(t,i,e){},800:function(t,i,e){"use strict";e(378)},820:function(t,i,e){"use strict";e.r(i);var s={name:"IntegrationDetailCard",props:{title:{type:String}},computed:{integrationData(){}},mounted(){const t=this.$page.path;if(/\d+.html$/.test(t)){const i=t.split("/"),e=i.slice(0,-1).join("/")+"/",s=i.slice(-1)[0].replace(".html","");this.$site.pages.find(t=>t.path===e)&&this.$router.replace({path:e,query:{step:s}})}}},a=(e(800),e(15)),n=Object(a.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"integration-detail-card"},[t("h5",{staticClass:"integration-detail-card-title"},[this._v(this._s(this.title))]),this._v(" "),t("div",{staticClass:"integration-detail-card-content"},[this._t("default")],2)])}),[],!1,null,null,null);i.default=n.exports}}]);