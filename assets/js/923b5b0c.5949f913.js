"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[387],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(o),h=n,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return o?a.createElement(m,i(i({ref:t},d),{},{components:o})):a.createElement(m,i({ref:t},d))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},7578:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=o(7462),n=(o(7294),o(3905));const r={sidebar_position:6},i="Save and load",l={unversionedId:"tutorial/save-and-load",id:"tutorial/save-and-load",isDocsHomePage:!1,title:"Save and load",description:"One of the most important things people expect in an app is that if they refresh the browser tab, their todo list won't disappear. To do this, we must serialize the Automerge document into a format that can be saved on disk. You could use anything, from localStorage to MongoDB to the filesystem to store these Automerge binaries.",source:"@site/docs/tutorial/save-and-load.md",sourceDirName:"tutorial",slug:"/tutorial/save-and-load",permalink:"/docs/tutorial/save-and-load",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/tutorial/save-and-load.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Rendering the app",permalink:"/docs/tutorial/rendering-app"},next:{title:"Multi-user apps",permalink:"/docs/tutorial/sync-changes"}},s=[{value:"Add localforage",id:"add-localforage",children:[],level:2},{value:"Document IDs",id:"document-ids",children:[],level:2},{value:"Load",id:"load",children:[],level:2},{value:"Save",id:"save",children:[],level:2}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"save-and-load"},"Save and load"),(0,n.kt)("p",null,"One of the most important things people expect in an app is that if they refresh the browser tab, their todo list won't disappear. To do this, we must serialize the Automerge document into a format that can be saved on disk. You could use anything, from localStorage to MongoDB to the filesystem to store these Automerge binaries."),(0,n.kt)("p",null,"In this example, we will use ",(0,n.kt)("a",{parentName:"p",href:"https://localforage.github.io/localForage/"},"localforage"),", a cross-browser polyfill that makes it easy to store binary arrays in the browser."),(0,n.kt)("h2",{id:"add-localforage"},"Add localforage"),(0,n.kt)("p",null,"First, add the script tag for ",(0,n.kt)("a",{parentName:"p",href:"https://localforage.github.io/localForage/"},"localforage")," to your index.html:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'<script type="application/javascript" src="https://cdn.jsdelivr.net/npm/localforage"><\/script>\n')),(0,n.kt)("h2",{id:"document-ids"},"Document IDs"),(0,n.kt)("p",null,"Until now, your application has only one document. Now, you can assign a document id to retrieve the todo list and have multiple todo lists. This document id can be saved and transmitted in the URL of the website."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let docId = window.location.hash.replace(/^#/, '')\n")),(0,n.kt)("p",null,"We can access the hash in the browser client as a unique identifier. For example, if you want to make a new todo list called 'groceries', the URL would be:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/#groceries")," "),(0,n.kt)("p",null,"In a production app, you will probably want to use randomly generated ids, because that would be harder to guess and more secure. However, having a user-generated ID is fine for our prototype."),(0,n.kt)("h2",{id:"load"},"Load"),(0,n.kt)("p",null,"When the page loads, you can check to see if you have a stored document for the document ID in the URL. You can then load and render that document like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"let docId = window.location.hash.replace(/^#/, '')\nlet binary = await localforage.getItem(docId)\nlet doc = Automerge.init()\n\nif (binary) {\n  doc = Automerge.load(binary)\n  render(doc)\n}\n")),(0,n.kt)("h2",{id:"save"},"Save"),(0,n.kt)("p",null,"Every time the document changes, we can save the document. We can do this by adding the code for saving to the ",(0,n.kt)("inlineCode",{parentName:"p"},"updateDoc()")," function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function updateDoc(newDoc) {\n  doc = newDoc\n  render(newDoc)\n  let binary = Automerge.save(newDoc)\n  localforage.setItem(docId, binary).catch(err => console.log(err))\n}\n")),(0,n.kt)("p",null,"Now you can add some items to the list and refresh the browser tab, and the items won't disappear."))}d.isMDXComponent=!0}}]);