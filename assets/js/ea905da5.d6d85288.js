(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[663],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4538:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:3},l="Macros",s={unversionedId:"reference/macros",id:"reference/macros",isDocsHomePage:!1,title:"Macros",description:"testvaluesbetween(model, columnname, tablename, low, high)",source:"@site/docs/reference/macros.md",sourceDirName:"reference",slug:"/reference/macros",permalink:"/re-data/docs/reference/macros",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/macros.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Models",permalink:"/re-data/docs/reference/models"}},u=[{value:"test_values_between(model, column_name, table_name, low, high)",id:"test_values_betweenmodel-column_name-table_name-low-high",children:[]}],m={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"macros"},"Macros"),(0,a.kt)("h3",{id:"test_values_betweenmodel-column_name-table_name-low-high"},"test_values_between(model, column_name, table_name, low, high)"),(0,a.kt)("p",null,"More enables you to test if metric for specific table_name is between low-high range"),(0,a.kt)("p",null,"Example usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=schema.yml",title:"schema.yml"},'models:\n  - name: row_counts\n    tests:\n      - re_data.values_between:\n          table_name: \'"toy_shop"."orders"\'\n          column_name: value\n          low: 0\n          high: 10000\n\n')),(0,a.kt)("p",null,"This will check if metrics gathred for specific table are inside a range"),(0,a.kt)("p",null,"We're just starting with adding macros."),(0,a.kt)("p",null,"If you have ideas on new ones let us know of on ",(0,a.kt)("a",{parentName:"p",href:"https://www.re-data.io/slack"},"Slack! \ud83d\ude42")))}p.isMDXComponent=!0}}]);