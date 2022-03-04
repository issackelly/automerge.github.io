"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3989],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1163:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:4},c="Make a change",u={unversionedId:"tutorial/make-a-change",id:"tutorial/make-a-change",isDocsHomePage:!1,title:"Make a change",description:"In our minimalist todo app, users will need two main interactions:",source:"@site/docs/tutorial/make-a-change.md",sourceDirName:"tutorial",slug:"/tutorial/make-a-change",permalink:"/docs/tutorial/make-a-change",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/tutorial/make-a-change.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Your first document",permalink:"/docs/tutorial/create-a-document"},next:{title:"Rendering the app",permalink:"/docs/tutorial/rendering-app"}},p=[],m={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"make-a-change"},"Make a change"),(0,o.kt)("p",null,"In our minimalist todo app, users will need two main interactions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a todo item"),(0,o.kt)("li",{parentName:"ul"},"Toggle a todo item as complete or not complete")),(0,o.kt)("p",null,"To add a todo item to the list, we will call ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.change"),". We will make\nsure ",(0,o.kt)("inlineCode",{parentName:"p"},"doc.items")," exists, and then add a new item to the list with ",(0,o.kt)("inlineCode",{parentName:"p"},"done: false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function addItem(text) {\n  let newDoc = Automerge.change(doc, doc => {\n    if (!doc.items) doc.items = []\n    doc.items.push({ text, done: false })\n  })\n  updateDoc(newDoc)\n}\n")),(0,o.kt)("p",null,"Because Automerge is functional, each document is immutable. ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.change")," does\nnot modify the document you pass in, but it returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"newDoc")," which reflects the\nchange you just made. We then call ",(0,o.kt)("inlineCode",{parentName:"p"},"updateDoc()")," as defined\n",(0,o.kt)("a",{parentName:"p",href:"create-a-document"},"in the last section")," to update the global variable ",(0,o.kt)("inlineCode",{parentName:"p"},"doc")," with\nthe latest document state. The old state of the document is not used anymore."),(0,o.kt)("p",null,"Now, let's create an input element in the HTML so that items can be added to the list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n  <input type="text" id="new-todo" />\n</form>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'let form = document.querySelector("form")\nlet input = document.querySelector("#new-todo")\nform.onsubmit = (ev) => {\n  ev.preventDefault()\n  addItem(input.value)\n  input.value = null\n}\n')),(0,o.kt)("p",null,"Next, we have to render the items in the list every time an item is added."))}s.isMDXComponent=!0}}]);