this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-on-sale"]=function(e){function t(t){for(var n,u,i=t[0],a=t[1],s=t[2],b=0,p=[];b<i.length;b++)u=i[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={31:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var l=a;return c.push([818,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},106:function(e,t){},107:function(e,t){},108:function(e,t){},109:function(e,t){},110:function(e,t){},111:function(e,t){},112:function(e,t){},113:function(e,t){},114:function(e,t){},115:function(e,t){},116:function(e,t){},117:function(e,t){},118:function(e,t){},12:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},123:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(3);r(2);t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(o.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(o.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(o.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(o.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(o.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(o.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(o.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},126:function(e,t){},14:function(e,t,r){"use strict";r.d(t,"m",(function(){return c})),r.d(t,"k",(function(){return u})),r.d(t,"l",(function(){return i})),r.d(t,"h",(function(){return s})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return b})),r.d(t,"g",(function(){return p})),r.d(t,"f",(function(){return d})),r.d(t,"j",(function(){return f})),r.d(t,"i",(function(){return g})),r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return h})),r.d(t,"e",(function(){return m})),r.d(t,"p",(function(){return j})),r.d(t,"q",(function(){return v})),r.d(t,"n",(function(){return y})),r.d(t,"o",(function(){return _}));var n,o=r(5),c=Object(o.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,restApiRoutes:{},wordCountType:"words"}),u=c.pluginUrl+"assets/",i=c.pluginUrl+"build/",a=c.buildPhase,s=null===(n=o.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,l=o.STORE_PAGES.checkout.id,b=o.STORE_PAGES.checkout.permalink,p=o.STORE_PAGES.privacy.permalink,d=o.STORE_PAGES.privacy.title,f=o.STORE_PAGES.terms.permalink,g=o.STORE_PAGES.terms.title,O=o.STORE_PAGES.cart.id,h=o.STORE_PAGES.cart.permalink,m=o.STORE_PAGES.myaccount.permalink?o.STORE_PAGES.myaccount.permalink:Object(o.getSetting)("wpLoginUrl","/wp-login.php"),w=r(25),j=function(e,t){if(a>2)return Object(w.registerBlockType)(e,t)},v=function(e,t){if(a>1)return Object(w.registerBlockType)(e,t)},y=function(){return a>2},_=function(){return a>1}},175:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r(14),c=Object(n.createElement)("img",{src:o.k+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})},19:function(e,t){!function(){e.exports=this.wp.apiFetch}()},20:function(e,t){!function(){e.exports=this.wp.url}()},21:function(e,t){!function(){e.exports=this.wp.data}()},22:function(e,t){!function(){e.exports=this.wp.blockEditor}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},26:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},27:function(e,t){!function(){e.exports=this.moment}()},3:function(e,t){!function(){e.exports=this.wp.components}()},31:function(e,t){!function(){e.exports=this.wp.primitives}()},34:function(e,t){!function(){e.exports=this.wp.dataControls}()},35:function(e,t,r){"use strict";r.d(t,"h",(function(){return d})),r.d(t,"e",(function(){return f})),r.d(t,"b",(function(){return g})),r.d(t,"i",(function(){return O})),r.d(t,"f",(function(){return h})),r.d(t,"c",(function(){return m})),r.d(t,"d",(function(){return w})),r.d(t,"g",(function(){return j})),r.d(t,"a",(function(){return v}));var n=r(4),o=r.n(n),c=r(20),u=r(19),i=r.n(u),a=r(6),s=r(5),l=r(14);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,u=e.queryArgs,s=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,u=e.queryArgs,i=void 0===u?[]:u,a=l.m.productCount>100,s={per_page:a?100:0,catalog_visibility:"any",search:o,orderby:"title",order:"asc"},b=[Object(c.addQueryArgs)("/wc/store/products",p(p({},s),i))];return a&&r.length&&b.push(Object(c.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r})),b}({selected:r,search:o,queryArgs:void 0===u?[]:u});return Promise.all(s.map((function(e){return i()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id").map((function(e){return p(p({},e),{},{parent:0})}))})).catch((function(e){throw e}))},f=function(e){return i()({path:"/wc/store/products/".concat(e)})},g=function(){return i()({path:"wc/store/products/attributes"})},O=function(e){return i()({path:"wc/store/products/attributes/".concat(e,"/terms")})},h=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=Object(s.getSetting)("limitTags",!1),u=[Object(c.addQueryArgs)("wc/store/products/tags",{per_page:o?100:0,orderby:o?"count":"name",order:o?"desc":"asc",search:n})];return o&&r.length&&u.push(Object(c.addQueryArgs)("wc/store/products/tags",{include:r})),u}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return i()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id")}))},m=function(e){return i()({path:Object(c.addQueryArgs)("wc/store/products/categories",p({per_page:0},e))})},w=function(e){return i()({path:"wc/store/products/categories/".concat(e)})},j=function(e){return i()({path:Object(c.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},v=function(e,t){if(!e.title.raw)return e.slug;var r=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(r?"":" - ".concat(e.slug))}},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var n=r(28),o=r.n(n),c=r(12),u=r.n(c),i=r(1),a=function(){var e=o()(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),s=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(i.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},42:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},43:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(42));t.a=function(e){var t,r,u,i=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=i).message,u=t.type,r?"general"===u?Object(n.createElement)("span",null,Object(o.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===u?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},48:function(e,t){!function(){e.exports=this.wp.keycodes}()},5:function(e,t){!function(){e.exports=this.wc.wcSettings}()},54:function(e,t){!function(){e.exports=this.wp.hooks}()},56:function(e,t,r){"use strict";var n=r(4),o=r.n(n),c=r(24),u=r.n(c),i=r(0);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,c=u()(e,["srcElement","size"]);return Object(i.isValidElement)(t)?Object(i.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},c)):null}},6:function(e,t){!function(){e.exports=this.lodash}()},65:function(e,t){!function(){e.exports=this.wp.deprecated}()},66:function(e,t){!function(){e.exports=this.wp.serverSideRender}()},70:function(e,t){!function(){e.exports=this.wp.dom}()},78:function(e,t){!function(){e.exports=this.ReactDOM}()},79:function(e,t,r){"use strict";var n=r(4),o=r.n(n),c=r(0),u=r(1),i=(r(2),r(3));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(i.ToggleControl,{label:Object(u.__)("Product title","woo-gutenberg-products-block"),help:l?Object(u.__)("Product title is visible.","woo-gutenberg-products-block"):Object(u.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(s(s({},r),{},{title:!l}))}}),Object(c.createElement)(i.ToggleControl,{label:Object(u.__)("Product price","woo-gutenberg-products-block"),help:o?Object(u.__)("Product price is visible.","woo-gutenberg-products-block"):Object(u.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:o,onChange:function(){return t(s(s({},r),{},{price:!o}))}}),Object(c.createElement)(i.ToggleControl,{label:Object(u.__)("Product rating","woo-gutenberg-products-block"),help:a?Object(u.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(u.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:a,onChange:function(){return t(s(s({},r),{},{rating:!a}))}}),Object(c.createElement)(i.ToggleControl,{label:Object(u.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(u.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(u.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(s(s({},r),{},{button:!n}))}}))}},8:function(e,t){!function(){e.exports=this.React}()},80:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(6),u=(r(2),r(3));t.a=function(e){var t=e.columns,r=e.rows,i=e.setAttributes,a=e.alignButtons,s=e.minColumns,l=void 0===s?1:s,b=e.maxColumns,p=void 0===b?6:b,d=e.minRows,f=void 0===d?1:d,g=e.maxRows,O=void 0===g?6:g;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.RangeControl,{label:Object(o.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(c.clamp)(e,l,p);i({columns:Number.isNaN(t)?"":t})},min:l,max:p}),Object(n.createElement)(u.RangeControl,{label:Object(o.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(e){var t=Object(c.clamp)(e,f,O);i({rows:Number.isNaN(t)?"":t})},min:f,max:O}),Object(n.createElement)(u.ToggleControl,{label:Object(o.__)("Align Last Block","woo-gutenberg-products-block"),help:a?Object(o.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(o.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:a,onChange:function(){return i({alignButtons:!a})}}))}},818:function(e,t,r){e.exports=r(918)},819:function(e,t){},820:function(e,t,r){"use strict";var n=r(0),o=r(31),c=Object(n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z"}),Object(n.createElement)("circle",{cx:"6.5",cy:"6.5",r:"1.5"}),Object(n.createElement)("path",{d:"M8.9 12.55c0 .57.23 1.07.6 1.45l3.5 3.5 3.5-3.5c.37-.37.6-.89.6-1.45 0-1.13-.92-2.05-2.05-2.05-.57 0-1.08.23-1.45.6l-.6.6-.6-.59c-.37-.38-.89-.61-1.45-.61-1.13 0-2.05.92-2.05 2.05z"}));t.a=c},83:function(e,t){!function(){e.exports=this.wp.viewport}()},84:function(e,t){!function(){e.exports=this.wp.date}()},86:function(e,t,r){"use strict";var n=r(10),o=r.n(n),c=r(0),u=r(1),i=r(6),a=(r(2),r(45)),s=r(3),l=r(28),b=r.n(l),p=r(15),d=r.n(p),f=r(16),g=r.n(f),O=r(11),h=r.n(O),m=r(17),w=r.n(m),j=r(18),v=r.n(j),y=r(9),_=r.n(y),k=r(12),P=r.n(k),E=r(142),S=r(35),C=r(37);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=_()(e);if(t){var o=_()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return v()(this,r)}}var R=Object(E.a)((function(e){return function(t){w()(n,t);var r=x(n);function n(){var e;return d()(this,n),(e=r.apply(this,arguments)).state={error:null,loading:!1,categories:null},e.loadCategories=e.loadCategories.bind(h()(e)),e}return g()(n,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var e=this;this.setState({loading:!0}),Object(S.c)().then((function(t){e.setState({categories:t,loading:!1,error:null})})).catch(function(){var t=b()(P.a.mark((function t(r){var n;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(C.a)(r);case 2:n=t.sent,e.setState({categories:null,loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,u=t.categories;return Object(c.createElement)(e,o()({},this.props,{error:r,isLoading:n,categories:u}))}}]),n}(c.Component)}),"withCategories"),A=r(43),T=(r(126),function(e){var t=e.categories,r=e.error,n=e.isLoading,l=e.onChange,b=e.onOperatorChange,p=e.operator,d=e.selected,f=e.isSingle,g=e.showReviewCount,O={clear:Object(u.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(u.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(u.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(u.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(u.sprintf)(Object(u._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(u.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(c.createElement)(A.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.a,{className:"woocommerce-product-categories",list:t,isLoading:n,selected:d.map((function(e){return Object(i.find)(t,{id:e})})).filter(Boolean),onChange:l,renderItem:function(e){var t=e.item,r=e.search,n=e.depth,i=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===i&&0!==t.parent&&s.push("is-skip-level");var l=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name,b=g?Object(u.sprintf)(Object(u._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",t.review_count,"woo-gutenberg-products-block"),l,t.review_count):Object(u.sprintf)(Object(u._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woo-gutenberg-products-block"),l,t.count),p=g?Object(u.sprintf)(Object(u._n)("%d Review","%d Reviews",t.review_count,"woo-gutenberg-products-block"),t.review_count):Object(u.sprintf)(Object(u._n)("%d Product","%d Products",t.count,"woo-gutenberg-products-block"),t.count);return Object(c.createElement)(a.b,o()({className:s.join(" ")},e,{showCount:!0,countLabel:p,"aria-label":b}))},messages:O,isHierarchical:!0,isSingle:f}),!!b&&Object(c.createElement)("div",{className:d.length<2?"screen-reader-text":""},Object(c.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(u.__)("Display products matching","woo-gutenberg-products-block"),help:Object(u.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:p,onChange:b,options:[{label:Object(u.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(u.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});T.defaultProps={operator:"any",isSingle:!1};t.a=R(T)},918:function(e,t,r){"use strict";r.r(t);var n=r(4),o=r.n(n),c=r(0),u=r(1),i=r(25),a=r(6),s=r(56),l=r(820),b=r(15),p=r.n(b),d=r(16),f=r.n(d),g=r(17),O=r.n(g),h=r(18),m=r.n(h),w=r(9),j=r.n(w),v=r(3),y=r(22),_=r(66),k=r.n(_),P=(r(2),r(79)),E=r(80),S=r(86),C=r(123),x=r(175),R=r(5);function A(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j()(e);if(t){var o=j()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return m()(this,r)}}var T=function(){return Object(c.createElement)(v.Placeholder,{icon:Object(c.createElement)(s.a,{srcElement:l.a}),label:Object(u.__)("On Sale Products","woo-gutenberg-products-block"),className:"wc-block-product-on-sale"},Object(u.__)("This block shows on-sale products. There are currently no discounted products in your store.","woo-gutenberg-products-block"))},B=function(e){O()(r,e);var t=A(r);function r(){return p()(this,r),t.apply(this,arguments)}return f()(r,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=t.categories,o=t.catOperator,i=t.columns,a=t.contentVisibility,s=t.rows,l=t.orderby,b=t.alignButtons;return Object(c.createElement)(y.InspectorControls,{key:"inspector"},Object(c.createElement)(v.PanelBody,{title:Object(u.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(E.a,{columns:i,rows:s,alignButtons:b,setAttributes:r,minColumns:Object(R.getSetting)("min_columns",1),maxColumns:Object(R.getSetting)("max_columns",6),minRows:Object(R.getSetting)("min_rows",1),maxRows:Object(R.getSetting)("max_rows",6)})),Object(c.createElement)(v.PanelBody,{title:Object(u.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(c.createElement)(P.a,{settings:a,onChange:function(e){return r({contentVisibility:e})}})),Object(c.createElement)(v.PanelBody,{title:Object(u.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(C.a,{setAttributes:r,value:l})),Object(c.createElement)(v.PanelBody,{title:Object(u.__)("Filter by Product Category","woo-gutenberg-products-block"),initialOpen:!1},Object(c.createElement)(S.a,{selected:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({categories:t})},operator:o,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name;return t.isPreview?x.a:Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(v.Disabled,null,Object(c.createElement)(k.a,{block:r,attributes:t,EmptyResponsePlaceholder:T})))}}]),r}(c.Component),D=(r(819),r(95));function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(i.registerBlockType)("woocommerce/product-on-sale",{title:Object(u.__)("On Sale Products","woo-gutenberg-products-block"),icon:{src:Object(c.createElement)(s.a,{srcElement:l.a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(u.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(u.__)("Display a grid of products currently on sale.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},attributes:M(M({},D.a),{},{orderby:{type:"string",default:"date"}}),example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(a.without)(D.b,"woocommerce/product-on-sale"),transform:function(e){return Object(i.createBlock)("woocommerce/product-on-sale",e)}}]},edit:function(e){return Object(c.createElement)(B,e)},save:function(){return null}})},95:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var n=r(5),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:Object(n.getSetting)("default_columns",3)},rows:{type:"number",default:Object(n.getSetting)("default_rows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}}});