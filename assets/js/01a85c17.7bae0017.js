"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[64013,29514,1755],{18607:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(79973),r=n(67294),l=n(86010),o=n(70301),s=n(51384),i="sidebar_2ahu",c="sidebarItemTitle_2hhb",u="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",p="sidebarItemLinkActive_12pM",f=n(54416);function v(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(i,"thin-scrollbar"),"aria-label":(0,f.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),r.createElement("ul",{className:u},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var g=["sidebar","toc","children"];var h=function(e){var t=e.sidebar,n=e.toc,s=e.children,i=(0,a.Z)(e,g),c=t&&t.items.length>0;return r.createElement(o.Z,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},c&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),n&&r.createElement("div",{className:"col col--2"},n))))}},31313:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(67294),r=n(18607),l=n(19004),o=n(3978),s="tag_21yA";function i(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:s},a.createElement(l.Z,e))}))),a.createElement("hr",null))}var c=function(e){var t=e.tags,n=(0,o.PZ)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return a.createElement(i,{key:e.letter,letterEntry:e})})))};var u=function(e){var t=e.tags,n=e.sidebar,l=(0,o.MA)();return a.createElement(r.Z,{title:l,wrapperClassName:o.kM.wrapper.blogPages,pageClassName:o.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:n},a.createElement("h1",null,l),a.createElement(c,{tags:Object.values(t)}))}},19004:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(67294),r=n(86010),l=n(51384),o="tag_1Okp",s="tagRegular_3MiF",i="tagWithCount_1HU1";var c=function(e){var t,n=e.permalink,c=e.name,u=e.count;return a.createElement(l.Z,{href:n,className:(0,r.Z)(o,(t={},t[s]=!u,t[i]=u,t))},c,u&&a.createElement("span",null,u))}},15502:function(e,t,n){var a=n(67294).createContext(void 0);t.Z=a},26266:function(e,t,n){var a=n(67294),r=n(15502);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},32577:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(74034),r=n(79973),l=n(67294),o=n(86010),s=n(51384),i=n(3978),c=n(51402),u=n(45697),m=n.n(u),d=n(34455);function p(e){var t=e.title,n=e.icon,a=e.url,r=e.backgroundColor;return l.createElement("a",{className:"social__link padding-horiz--sm padding-vert--md",style:{backgroundColor:r},href:a},l.createElement("div",{className:"social__font social__icon"},n),l.createElement("div",{className:"social__title"},t))}p.propTypes={title:m().string,icon:m().string,url:m().string,backgroundColor:m().string};var f=function(){var e=(0,i.LU)().socials;return l.createElement("div",{className:"social"},e&&e.map((function(e,t){return l.createElement(p,(0,a.Z)({key:t},e))})))},v=["to","href","label","prependBaseUrlToHref"];function g(e){var t=e.to,n=e.href,o=e.label,i=e.prependBaseUrlToHref,u=(0,r.Z)(e,v),m=(0,c.Z)(t),d=(0,c.Z)(n,{forcePrependBaseUrl:!0});return l.createElement(s.Z,(0,a.Z)({className:"footer__link-item"},n?{href:i?d:n}:{to:m},u),o)}g.propTypes={to:m().string,href:m().string,label:m().string,prependBaseUrlToHref:m().bool};var h=function(e){var t=e.sources,n=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:n,sources:t})};h.propTypes={sources:m().shape({light:m().string,dark:m().string}),alt:m().string};var b=function(){var e=(0,i.LU)().footer,t=e||{},n=t.copyright,a=t.links,r=void 0===a?[]:a,u=t.logo,m=void 0===u?{}:u,d={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return e?l.createElement("footer",{className:(0,o.Z)("footer","padding--none",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links padding-vert--xl"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(g,e))}))):null)}))),(m||n)&&l.createElement("div",{className:"footer__bottom padding-bottom--xl"},m&&(m.src||m.srcDark)&&l.createElement("div",null,m.href?l.createElement(s.Z,{href:m.href},l.createElement(h,{alt:m.alt,sources:d})):l.createElement(h,{alt:m.alt,sources:d})),n?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null)),l.createElement(f,null)):null}},78358:function(e,t,n){n.d(t,{O:function(){return h}});var a=n(74034),r=n(79973),l=n(67294),o=n(86010),s=n(45697),i=n.n(s),c=n(51384),u=n(51402),m=n(78168),d=n(71699),p=["activeBasePath","activeBaseRegex","to","href","label","sublabel","icon","activeClassName","prependBaseUrlToHref"],f=["className","isDropdownItem"],v=["className"],g=["mobile","to","label"];function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,o=e.to,s=e.href,i=e.label,f=e.sublabel,v=e.icon,g=e.activeClassName,h=void 0===g?"navbar__link--active":g,b=e.prependBaseUrlToHref,_=(0,r.Z)(e,p),E=(0,u.Z)(o),k=(0,u.Z)(t),N=(0,u.Z)(s,{forcePrependBaseUrl:!0}),y=i&&s&&!(0,d.Z)(s),Z="dropdown__link--active"===h;return l.createElement(c.Z,(0,a.Z)({},s?{href:b?N:s}:Object.assign({isNavLink:!0,activeClassName:h,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(k)}}:null),_),l.createElement("div",{className:"link"},v&&l.createElement("div",{className:"link__icon"},v),l.createElement("div",{className:"link__body"},l.createElement("div",{className:"link__label"},y?l.createElement("span",null,i,l.createElement(m.Z,Z&&{width:12,height:12})):i),f&&l.createElement("div",{className:"link__sublabel"},f))))}function b(e){var t=e.className,n=e.isDropdownItem,s=void 0!==n&&n,i=(0,r.Z)(e,f),c=l.createElement(h,(0,a.Z)({className:(0,o.Z)(s?"dropdown__link":"navbar__item navbar__link",t)},i));return s?l.createElement("li",null,c):c}function _(e){var t=e.className,n=(0,r.Z)(e,v);return delete n.isDropdownItem,l.createElement("li",{className:"menu__list-item"},l.createElement(h,(0,a.Z)({className:(0,o.Z)("menu__link",t)},n)))}function E(e){var t=e.mobile,n=void 0!==t&&t,o=e.to,s=e.label,i=(0,r.Z)(e,g);if(delete i.position,"category-header"===o){return l.createElement("li",{style:{fontSize:"10px",color:"var(--ifm-color-emphasis-600)",paddingTop:"10px"}},s)}var c=n?_:b;return l.createElement(c,(0,a.Z)({to:o,label:s},i))}h.propTypes={activeBasePath:i().string,activeBaseRegex:i().string,to:i().string,href:i().string,label:i().string,sublabel:i().string,icon:i().string,activeClassName:i().string,prependBaseUrlToHref:i().bool},h.defaultProps={activeClassName:"navbar__link--active"},b.propTypes={className:i().string,isDropdownItem:i().bool},b.defaultProps={isDropdownItem:!1},_.propTypes={className:i().string},E.propTypes={mobile:i().bool,to:i().string,label:i().string},E.defaultProps={mobile:!1},t.Z=E},61142:function(e,t,n){var a=n(74034),r=n(79973),l=n(67294),o=n(86010),s=n(45697),i=n.n(s),c=n(3978),u=n(78358),m=n(52807),d=["items","position","className"],p=["items","className"],f=["mobile"];function v(e,t){return!!(0,c.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath)))}function g(e){var t,n=e.items,s=e.position,i=e.className,p=(0,r.Z)(e,d),f=(0,l.useRef)(null),g=(0,l.useRef)(null),h=(0,l.useState)(!1),b=h[0],_=h[1],E=function(e,t,n){var a=t.filter((function(e){return v(e,n)}));return a.length?Object.assign({},a[0],{label:e.label+" > "+a[0].label}):e}(p,n,(0,c.be)());return(0,l.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&_(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),l.createElement("div",{ref:f,className:(0,o.Z)("dropdown","dropdown--hoverable",{"dropdown--right":"right"===s,"dropdown--show":b})},l.createElement(u.O,(0,a.Z)({className:(0,o.Z)("navbar__item navbar__link",i)},E,{onClick:p.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),_(!b))}}),null!=(t=p.children)?t:p.label),l.createElement("ul",{ref:g,className:"dropdown__menu"},n.map((function(e,t){return l.createElement(m.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),_(!1);var a=f.current.nextElementSibling;a&&a.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,s=e.className,i=(0,r.Z)(e,p);delete i.position;var d=(0,c.be)(),f=function(e,t){return e.some((function(e){return v(e,t)}))}(n,d),g=(0,c.uR)({initialState:function(){return!f}}),h=g.collapsed,b=g.toggleCollapsed,_=g.setCollapsed;return(0,l.useEffect)((function(){f&&_(!f)}),[d,f]),l.createElement("li",{className:(0,o.Z)("menu__list-item",{"menu__list-item--collapsed":h})},l.createElement(u.O,(0,a.Z)({role:"button",className:(0,o.Z)("menu__link menu__link--sublist",s)},i,{onClick:function(e){e.preventDefault(),b()}}),null!=(t=i.children)?t:i.label),l.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.map((function(e,t){return l.createElement(m.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:i.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function b(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,f);delete a.isDropdownItem;var o=n?h:g;return l.createElement(o,a)}g.propTypes=Object.assign({items:i().array,position:i().string,className:i().string},u.O.propTypes),h.propTypes=Object.assign({items:i().array,className:i().string},u.O.propTypes),b.propTypes={mobile:i().bool},b.defaultProps={mobile:!1},t.Z=b},52807:function(e,t,n){n.d(t,{Z:function(){return O}});var a=n(74034),r=n(79973),l=n(67294),o=n(45697),s=n.n(o),i=n(78358),c=n(61142),u=n(86010),m=n(3978),d=n(98565),p=["items","label","className"],f=["className","to","href","label"],v=["items_","layout","position","className"],g=["items_","className"],h=["mobile"];function b(e,t){return!!(0,m.Mg)(e.to,t)||(!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||e.activeBasePath&&t.startsWith(e.activeBasePath))}function _(e,t){return e.some((function(e){return b(e,t)}))}function E(e){var t,n=e.items,a=e.label,l=e.className,o=(0,r.Z)(e,p),s={items:[],index:0};n?(a&&s.items.push({label:a,className:l}),(t=s.items).push.apply(t,n)):s.items.push(Object.assign({label:a,className:l},o));return s}function k(e){var t=e.className,n=e.to,o=e.href,s=e.label,c=(0,r.Z)(e,f);if(n||o)return l.createElement(i.O,(0,a.Z)({className:(0,u.Z)("dropdown__link",t),activeClassName:"dropdown__link--active",to:n,href:o,label:s},c));if(s)return l.createElement("div",{className:"dropdown__label"},s);throw"Mega dropdown item must be a link or a category header."}function N(e){var t=[];return e.map((function(e){e.items.map((function(e){t.push(e)}))})),t}function y(e,t,n){var a=t.filter((function(e){return b(e,n)}));return a.length?{activeBaseRegex:a[0].activeBaseRegex,label:e.label+" | "+a[0].label}:e}function Z(e){var t,n=e.items_,o=e.layout,s=e.position,c=e.className,p=(0,r.Z)(e,v),f=(0,m.be)(),g=(0,l.useRef)(null),h=(0,l.useState)(!1),b=h[0],Z=h[1],w=(0,m.LU)().navbar.hideOnScroll,C=(0,d.Z)(w).isNavbarVisible,T=n.map(E),x=N(n),B=y(p,x,(0,m.be)()),D=_(x,f),I=o.length,L=Math.max.apply(Math,o.map((function(e){return e.split(/\s+/).length}))),O=[];o.forEach((function(e,t){e.split(/\s+/).forEach((function(e,n){e&&"."!==e&&(O[t+n*I]=e)}))}));for(var R=O.map((function(e){var t,n=T[e];if(n)return null!=(t=n.items[n.index++])?t:null})),P=[],M=null,S=0;S<I;S++){for(var U=[],A=0;A<L;A++){var H=R[S+A*I];U.push(H),H&&(M=H)}P.push(U)}return M.onKeyDown=function(e){"Tab"===e.key&&Z(!1)},(0,l.useEffect)((function(){C||Z(!1)}),[C]),(0,l.useEffect)((function(){var e=function(e){g.current&&!g.current.contains(e.target)&&Z(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[g]),l.createElement("div",{ref:g,className:(0,u.Z)("dropdown","dropdown--hoverable","dropdown--mega",{"dropdown--right":"right"===s,"dropdown--show":b}),onMouseLeave:function(){return Z(!1)}},l.createElement(i.O,(0,a.Z)({className:(0,u.Z)("navbar__item navbar__link",c,{"navbar__link--active":D})},B,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),Z(!b))},onMouseEnter:function(){return Z(!0)}}),null!=(t=p.children)?t:p.label),l.createElement("div",{className:"dropdown__container"},l.createElement("div",{className:"dropdown__menu"},P.map((function(e,t){return l.createElement("div",{className:"row row--no-gutters dropdown__row",key:t},e.map((function(e,t){return l.createElement("div",{className:"col margin-horiz--xs dropdown__col",key:t},e?l.createElement(k,e):null)})))})))))}function w(e){var t=e.items_,n=e.className,o=(0,r.Z)(e,g);delete o.position,delete o.layout;var s=(0,m.be)(),c=N(t),d=y(o,c,(0,m.be)()),p=_(c,s),f=(0,m.uR)({initialState:function(){return!p}}),v=f.collapsed,h=f.toggleCollapsed,b=f.setCollapsed;return(0,l.useEffect)((function(){p&&b(!p)}),[s,p]),l.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":v})},l.createElement(i.O,(0,a.Z)({role:"button",className:(0,u.Z)("menu__link menu__link--sublist",n)},o,{onClick:function(e){e.preventDefault(),h()}}),d),l.createElement(m.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:v},t.map((function(e,t){return l.createElement(O,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:o.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}function C(e){var t=e.mobile,n=void 0!==t&&t,a=(0,r.Z)(e,h),o=n?w:Z;return l.createElement(o,a)}k.propTypes={className:s().string,to:s().string,href:s().string,label:s().string},Z.propTypes=Object.assign({items_:s().array,layout:s().arrayOf(s().string),position:s().string,className:s().string},i.O.propTypes),w.propTypes=Object.assign({items_:s().array,className:s().string},i.O.propTypes),C.propTypes={mobile:s().bool},C.defaultProps={mobile:!1};var T=C,x=n(36508),B=n(62437),D=["type","items","layout"],I={default:function(){return i.Z},localeDropdown:function(){return x.Z},search:function(){return B.Z},dropdown:function(){return c.Z},megaDropdown:function(){return T},docsVersion:function(){return n(39693).Z},docsVersionDropdown:function(){return n(74493).Z},doc:function(){return n(36673).Z}};function L(e){var t=e.type,n=e.items,o=e.layout,s=(0,r.Z)(e,D),i=function(e,t,n){return n?"megaDropdown":e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n,void 0!==o),c=function(e){var t=I[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(i);return l.createElement(c,(0,a.Z)({items:n,layout:o},s))}L.propTypes={type:s().string,items:s().array,layout:s().arrayOf(s().string)};var O=L},5086:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(74034),r=n(67294),l=n(45697),o=n.n(l),s=n(3978),i=n(5730),c=n(86010),u=(0,r.memo)((function(e){var t=e.className,n=e.styles,a=e.icons,l=e.checked,o=e.disabled,s=e.onChange,i=(0,r.useState)(l),u=i[0],m=i[1],d=(0,r.useState)(!1),p=d[0],f=d[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,c.Z)("toggle",t,{"toggle--checked":u,"toggle--focused":p,"toggle--disabled":o}),role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"toggle__icon toggle__icon--unchecked",style:n.unchecked},a.unchecked),r.createElement("div",{className:"toggle__icon toggle__icon--checked",style:n.checked},a.checked),r.createElement("input",{ref:v,checked:u,type:"checkbox",className:"toggle__screenreader-only","aria-label":"Switch between dark and light mode",onChange:s,onClick:function(){return m(!u)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)},onKeyDown:function(e){var t;"Enter"===e.key&&(null==(t=v.current)||t.click())}}))}));function m(e){var t=(0,s.LU)().colorMode.switchConfig,n=t.darkIcon,l=t.darkIconStyle,o=t.lightIcon,c=t.lightIconStyle,m=(0,i.Z)();return r.createElement(u,(0,a.Z)({disabled:!m,styles:{unchecked:c,checked:l},icons:{unchecked:o,checked:n}},e))}u.displayName="ToggleMemo",u.propTypes={className:o().string,styles:o().shape({unchecked:o().any,checked:o().any}),icons:o().shape({unchecked:o().string,checked:o().string}),checked:o().bool,disabled:o().bool,onChange:o().func}}}]);