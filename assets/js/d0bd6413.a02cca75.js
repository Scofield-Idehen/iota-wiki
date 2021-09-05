"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[2604],{89057:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],s={sidebar_position:2,title:"Overview"},l="Overview",c={unversionedId:"getting-started/overview",id:"getting-started/overview",isDocsHomePage:!1,title:"Overview",description:"Using the standards proposed by W3C, this chapter will explain the IOTA Identity implementation. Using this implementation, a new digital identity can be created by anyone or anything at any time. To do so, a Decentralized Identifier (DID) is generated, that serves as a reference to a DID Document. The DID Document contains public keys, and other mechanisms, to enable the subject to prove their association with the DID.",source:"@site/external/identity.rs/documentation/docs/getting-started/overview.md",sourceDirName:"getting-started",slug:"/getting-started/overview",permalink:"/identity.rs/getting-started/overview",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Overview"},sidebar:"docs",previous:{title:"Decentralized Identity",permalink:"/identity.rs/intro_ssi"},next:{title:"Overview",permalink:"/identity.rs/getting-started/did/README"}},u=[{value:"Implementations",id:"implementations",children:[]},{value:"Applications",id:"applications",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Using the standards proposed by W3C, this chapter will explain the IOTA Identity implementation. Using this implementation, a new digital identity can be created by anyone or anything at any time. To do so, a Decentralized Identifier (DID) is generated, that serves as a reference to a DID Document. The DID Document contains public keys, and other mechanisms, to enable the subject to prove their association with the DID. "),(0,a.kt)("p",null,"However a DID alone tells you little about the subject. It must be combined with Verifiable Credentials. Verifiable Credentials are statements about the creator of the DID. They can be shared and verified online in a BYOI manner, and the DID creator remains in complete control of the process. "),(0,a.kt)("p",null,"This framework can be used in processes such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Address validation: Customers can prove where they live for shipping and billing addresses"),(0,a.kt)("li",{parentName:"ul"},"Age verification: Customers can prove they are 18+ for online purchases."),(0,a.kt)("li",{parentName:"ul"},"(Authority) Login: Customers can prove who they are and gain access to their account,\nwithout passwords. This can be useful for many websites, including eGovernment and\nbanking.")),(0,a.kt)("h2",{id:"implementations"},"Implementations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rust "),(0,a.kt)("li",{parentName:"ul"},"WASM")),(0,a.kt)("h2",{id:"applications"},"Applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://selv.iota.org/"},"Selv app"))))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);