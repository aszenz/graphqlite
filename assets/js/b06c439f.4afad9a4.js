(self.webpackChunk=self.webpackChunk||[]).push([[3618],{60908:function(e,a,t){"use strict";t.r(a),t.d(a,{contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var p=t(87462),r=t(63366),n=(t(67294),t(3905)),i=t(93456),s=["components"],o={id:"internals",title:"Internals",sidebar_label:"Internals"},l=void 0,m={unversionedId:"internals",id:"version-4.3/internals",title:"Internals",description:"Mapping types",source:"@site/versioned_docs/version-4.3/internals.md",sourceDirName:".",slug:"/internals",permalink:"/docs/4.3/internals",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.3/internals.md",tags:[],version:"4.3",lastUpdatedBy:"asrar",lastUpdatedAt:1653120845,formattedLastUpdatedAt:"5/21/2022",frontMatter:{id:"internals",title:"Internals",sidebar_label:"Internals"},sidebar:"version-4.3/docs",previous:{title:"Laravel specific features",permalink:"/docs/4.3/laravel-package-advanced"},next:{title:"Troubleshooting",permalink:"/docs/4.3/troubleshooting"}},u=[{value:"Mapping types",id:"mapping-types",children:[],level:2},{value:"Root type mappers",id:"root-type-mappers",children:[],level:2},{value:"Class type mappers",id:"class-type-mappers",children:[{value:"Registering a type mapper in Symfony",id:"registering-a-type-mapper-in-symfony",children:[],level:3},{value:"Registering a type mapper using the SchemaFactory",id:"registering-a-type-mapper-using-the-schemafactory",children:[],level:3}],level:2},{value:"Recursive type mappers",id:"recursive-type-mappers",children:[],level:2},{value:"Parameter mapper middlewares",id:"parameter-mapper-middlewares",children:[],level:2}],y={toc:u};function c(e){var a=e.components,t=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,p.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"mapping-types"},"Mapping types"),(0,n.kt)("p",null,'The core of GraphQLite is its ability to map PHP types to GraphQL types. This mapping is performed by a series of\n"type mappers".'),(0,n.kt)("p",null,"GraphQLite contains 4 categories of type mappers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Parameter mappers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Root type mappers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Recursive (class) type mappers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"(class) type mappers"))),(0,n.kt)(i.Mermaid,{config:{},chart:"graph TD;\n  classDef custom fill:#cfc,stroke:#7a7,stroke-width:2px,stroke-dasharray: 5, 5;\n  subgraph RootTypeMapperInterface\n    NullableTypeMapperAdapter--\x3eCompoundTypeMapper\n    CompoundTypeMapper--\x3eIteratorTypeMapper\n    IteratorTypeMapper--\x3eYourCustomRootTypeMapper\n    YourCustomRootTypeMapper--\x3eMyCLabsEnumTypeMapper\n    MyCLabsEnumTypeMapper--\x3eBaseTypeMapper\n    BaseTypeMapper--\x3eFinalRootTypeMapper\n  end\n  subgraph RecursiveTypeMapperInterface\n    BaseTypeMapper--\x3eRecursiveTypeMapper\n  end\n  subgraph TypeMapperInterface\n    RecursiveTypeMapper--\x3eYourCustomTypeMapper\n    YourCustomTypeMapper--\x3ePorpaginasTypeMapper\n    PorpaginasTypeMapper--\x3eGlobTypeMapper\n  end\n  class YourCustomRootTypeMapper,YourCustomTypeMapper custom;",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"root-type-mappers"},"Root type mappers"),(0,n.kt)("p",null,"(Classes implementing the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Root/RootTypeMapperInterface.php"},(0,n.kt)("inlineCode",{parentName:"a"},"RootTypeMapperInterface")),")"),(0,n.kt)("p",null,"These type mappers are the first type mappers called."),(0,n.kt)("p",null,"They are responsible for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'mapping scalar types (for instance mapping the "int" PHP type to GraphQL Integer type)'),(0,n.kt)("li",{parentName:"ul"},'detecting nullable/non-nullable types (for instance interpreting "?int" or "int|null")'),(0,n.kt)("li",{parentName:"ul"},"mapping list types (mapping a PHP array to a GraphQL list)"),(0,n.kt)("li",{parentName:"ul"},"mapping union types"),(0,n.kt)("li",{parentName:"ul"},"mapping enums")),(0,n.kt)("p",null,"Root type mappers have access to the ",(0,n.kt)("em",{parentName:"p"},"context"),' of a type: they can access the PHP DocBlock and read annotations.\nIf you want to write a custom type mapper that needs access to annotations, it needs to be a "root type mapper".'),(0,n.kt)("p",null,"GraphQLite provides 6 classes implementing ",(0,n.kt)("inlineCode",{parentName:"p"},"RootTypeMapperInterface"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NullableTypeMapperAdapter"),": a type mapper in charge of making GraphQL types non-nullable if the PHP type is non-nullable"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CompoundTypeMapper"),": a type mapper in charge of union types"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"IteratorTypeMapper"),": a type mapper in charge of iterable types (for instance: ",(0,n.kt)("inlineCode",{parentName:"li"},"MyIterator|User[]"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MyCLabsEnumTypeMapper"),": maps MyCLabs/enum types to GraphQL enum types"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"BaseTypeMapper"),': maps scalar types and lists. Passes the control to the "recursive type mappers" if an object is encountered.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FinalRootTypeMapper"),": the last type mapper of the chain, used to throw error if no other type mapper managed to handle the type.")),(0,n.kt)("p",null,"Type mappers are organized in a chain; each type-mapper is responsible for calling the next type mapper."),(0,n.kt)(i.Mermaid,{chart:"graph TD;\n  classDef custom fill:#cfc,stroke:#7a7,stroke-width:2px,stroke-dasharray: 5, 5;\n  subgraph RootTypeMapperInterface\n    NullableTypeMapperAdapter--\x3eCompoundTypeMapper\n    CompoundTypeMapper--\x3eIteratorTypeMapper\n    IteratorTypeMapper--\x3eYourCustomRootTypeMapper\n    YourCustomRootTypeMapper--\x3eMyCLabsEnumTypeMapper\n    MyCLabsEnumTypeMapper--\x3eBaseTypeMapper\n    BaseTypeMapper--\x3eFinalRootTypeMapper\n  end\n  class YourCustomRootTypeMapper custom;",mdxType:"Mermaid"}),(0,n.kt)("h2",{id:"class-type-mappers"},"Class type mappers"),(0,n.kt)("p",null,"(Classes implementing the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/TypeMapperInterface.php"},(0,n.kt)("inlineCode",{parentName:"a"},"TypeMapperInterface")),")"),(0,n.kt)("p",null,"Class type mappers are mapping PHP classes to GraphQL object types."),(0,n.kt)("p",null,"GraphQLite provide 3 default implementations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CompositeTypeMapper"),": a type mapper that delegates mapping to other type mappers using the Composite Design Pattern."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GlobTypeMapper"),": scans classes in a directory for the ",(0,n.kt)("inlineCode",{parentName:"li"},"@Type")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"@ExtendType")," annotation and maps those to GraphQL types"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PorpaginasTypeMapper"),": maps and class implementing the Porpaginas ",(0,n.kt)("inlineCode",{parentName:"li"},"Result")," interface to a ",(0,n.kt)("a",{parentName:"li",href:"/docs/4.3/pagination"},"special paginated type"),".")),(0,n.kt)("h3",{id:"registering-a-type-mapper-in-symfony"},"Registering a type mapper in Symfony"),(0,n.kt)("p",null,'If you are using the GraphQLite Symfony bundle, you can register a type mapper by tagging the service with the "graphql.type_mapper" tag.'),(0,n.kt)("h3",{id:"registering-a-type-mapper-using-the-schemafactory"},"Registering a type mapper using the SchemaFactory"),(0,n.kt)("p",null,"If you are using the ",(0,n.kt)("inlineCode",{parentName:"p"},"SchemaFactory")," to bootstrap GraphQLite, you can register a type mapper using the ",(0,n.kt)("inlineCode",{parentName:"p"},"SchemaFactory::addTypeMapper")," method."),(0,n.kt)("h2",{id:"recursive-type-mappers"},"Recursive type mappers"),(0,n.kt)("p",null,"(Classes implementing the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/RecursiveTypeMapperInterface.php"},(0,n.kt)("inlineCode",{parentName:"a"},"RecursiveTypeMapperInterface")),")"),(0,n.kt)("p",null,"There is only one implementation of the ",(0,n.kt)("inlineCode",{parentName:"p"},"RecursiveTypeMapperInterface"),": the ",(0,n.kt)("inlineCode",{parentName:"p"},"RecursiveTypeMapper"),"."),(0,n.kt)("p",null,'Standard "class type mappers" are mapping a given PHP class to a GraphQL type. But they do not handle class hierarchies.\nThis is the role of the "recursive type mapper".'),(0,n.kt)("p",null,'Imagine that class "B" extends class "A" and class "A" maps to GraphQL type "AType".'),(0,n.kt)("p",null,'Since "B" ',(0,n.kt)("em",{parentName:"p"},"is a"),' "A", the "recursive type mapper" role is to make sure that "B" will also map to GraphQL type "AType".'),(0,n.kt)("h2",{id:"parameter-mapper-middlewares"},"Parameter mapper middlewares"),(0,n.kt)("p",null,'"Parameter middlewares" are used to decide what argument should be injected into a parameter.'),(0,n.kt)("p",null,"Let's have a look at a simple query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @return Product[]\n */\npublic function products(ResolveInfo $info): array\n")),(0,n.kt)("p",null,"As you may know, ",(0,n.kt)("a",{parentName:"p",href:"/docs/4.3/query-plan"},"the ",(0,n.kt)("inlineCode",{parentName:"a"},"ResolveInfo")," object injected in this query comes from Webonyx/GraphQL-PHP library"),".\nGraphQLite knows that is must inject a ",(0,n.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," instance because it comes with a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Parameters/ResolveInfoParameterHandler.php"},(0,n.kt)("inlineCode",{parentName:"a"},"ResolveInfoParameterHandler"))," class\nthat implements the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Parameters/ParameterMiddlewareInterface.php"},(0,n.kt)("inlineCode",{parentName:"a"},"ParameterMiddlewareInterface")),")."),(0,n.kt)("p",null,"You can register your own parameter middlewares using the ",(0,n.kt)("inlineCode",{parentName:"p"},"SchemaFactory::addParameterMiddleware()"),' method, or by tagging the\nservice as "graphql.parameter_middleware" if you are using the Symfony bundle.'),(0,n.kt)("div",{class:"alert alert--info"},"Use a parameter middleware if you want to inject an argument in a method and if this argument is not a GraphQL input type or if you want to alter the way input types are imported (for instance if you want to add a validation step)"))}c.isMDXComponent=!0},11748:function(e,a,t){var p={"./locale":89234,"./locale.js":89234};function r(e){var a=n(e);return t(a)}function n(e){if(!t.o(p,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return p[e]}r.keys=function(){return Object.keys(p)},r.resolve=n,e.exports=r,r.id=11748}}]);