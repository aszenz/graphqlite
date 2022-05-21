"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7128],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(87462),a=n(67294),l=n(72389),o=n(79443);var u=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(63616),s=n(86010),c="tabItem_vU9c";function p(e){var t,n,l,o=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=h[0])?void 0:l.props.value;if(null!==g&&!b.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),w=k.tabGroupChoices,P=k.setTabGroupChoices,x=(0,a.useState)(g),T=x[0],N=x[1],O=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=w[f];null!=j&&j!==T&&b.some((function(e){return e.value===j}))&&N(j)}var C=function(e){var t=e.currentTarget,n=O.indexOf(t),r=b[n].value;r!==T&&(E(t),N(r),null!=f&&P(f,r))},Z=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:Z,onFocus:C,onClick:C},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function d(e){var t=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},66600:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=n(26396),u=n(58215),i=["components"],s={id:"index",title:"GraphQLite",slug:"/",sidebar_label:"GraphQLite"},c=void 0,p={unversionedId:"index",id:"version-4.3/index",title:"GraphQLite",description:"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.",source:"@site/versioned_docs/version-4.3/README.mdx",sourceDirName:".",slug:"/",permalink:"/docs/4.3/",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/README.mdx",tags:[],version:"4.3",lastUpdatedBy:"asrar",lastUpdatedAt:1653120845,formattedLastUpdatedAt:"5/21/2022",frontMatter:{id:"index",title:"GraphQLite",slug:"/",sidebar_label:"GraphQLite"},sidebar:"version-4.3/docs",next:{title:"Getting Started",permalink:"/docs/4.3/getting-started"}},d=[{value:"Features",id:"features",children:[],level:2},{value:"Basic example",id:"basic-example",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{align:"center"},(0,l.kt)("img",{src:"https://graphqlite.thecodingmachine.io/img/logo.svg",alt:"GraphQLite logo",width:"250",height:"250"})),(0,l.kt)("p",null,"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,l.kt)("li",{parentName:"ul"},"Framework agnostic, but Symfony, Laravel and PSR-15 bindings available!"),(0,l.kt)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, mapping of arrays / iterators, file uploads, security, validation, extendable types and more!")),(0,l.kt)("h2",{id:"basic-example"},"Basic example"),(0,l.kt)("p",null,"First, declare a query in your controller:"),(0,l.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n"))),(0,l.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    /**\n     * @Query()\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")))),(0,l.kt)("p",null,"Then, annotate the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,l.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Product\n{\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n"))),(0,l.kt)(u.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")))),(0,l.kt)("p",null,"That's it, you're good to go! Query and enjoy!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}f.isMDXComponent=!0}}]);