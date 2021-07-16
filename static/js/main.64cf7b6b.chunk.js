(this["webpackJsonpdojo-blog"]=this["webpackJsonpdojo-blog"]||[]).push([[0],{23:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),o=c.n(r),s=c(16),i=c.n(s),j=(c(23),c(7)),l=function(){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("h1",{children:"The Dojo Blog"}),Object(n.jsxs)("div",{className:"links",children:[Object(n.jsx)(j.b,{to:"/",children:"Home"}),Object(n.jsx)(j.b,{to:"/create",style:{color:"white",backgroundColor:"#f1356d",borderRadius:"8px"},children:"New Blog"})]})]})},a=function(e){var t=e.blogs;return Object(n.jsx)("div",{className:"blog-list",children:t.map((function(e){return Object(n.jsx)("div",{className:"blog-preview",children:Object(n.jsxs)(j.b,{to:"/blogs/".concat(e.id),children:[Object(n.jsx)("h2",{children:e.title}),Object(n.jsxs)("p",{children:["Written by ",e.author]})]})},e.id)}))})},b=c(8),d=function(e){var t=Object(r.useState)(null),c=Object(b.a)(t,2),n=c[0],o=c[1],s=Object(r.useState)(!0),i=Object(b.a)(s,2),j=i[0],l=i[1],a=Object(r.useState)(null),d=Object(b.a)(a,2),h=d[0],u=d[1];return Object(r.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){l(!1),o(e),u(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(l(!1),u(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:n,isPending:j,error:h}},h=function(){var e=d("http://localhost:8000/blogs"),t=e.error,c=e.isPending,r=e.data;return Object(n.jsxs)("div",{className:"home",children:[t&&Object(n.jsx)("div",{children:t}),c&&Object(n.jsx)("div",{children:"Loading..."}),r&&Object(n.jsx)(a,{blogs:r})]})},u=c(2),O=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),c=t[0],o=t[1],s=Object(r.useState)(""),i=Object(b.a)(s,2),j=i[0],l=i[1],a=Object(r.useState)("mario"),d=Object(b.a)(a,2),h=d[0],O=d[1],x=Object(u.f)();return Object(n.jsxs)("div",{className:"create",children:[Object(n.jsx)("h2",{children:"Add a New Blog"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:j,author:h};fetch("http://localhost:8000/blogs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){x.push("/")}))},children:[Object(n.jsx)("label",{children:"Blog title:"}),Object(n.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return o(e.target.value)}}),Object(n.jsx)("label",{children:"Blog body:"}),Object(n.jsx)("textarea",{required:!0,value:j,onChange:function(e){return l(e.target.value)}}),Object(n.jsx)("label",{children:"Blog author:"}),Object(n.jsxs)("select",{value:h,onChange:function(e){return O(e.target.value)},children:[Object(n.jsx)("option",{value:"mario",children:"mario"}),Object(n.jsx)("option",{value:"yoshi",children:"yoshi"})]}),Object(n.jsx)("button",{children:"Add Blog"})]})]})},x=function(){var e=Object(u.g)().id,t=d("http://localhost:8000/blogs/"+e),c=t.data,r=t.error,o=t.isPending,s=Object(u.f)();return Object(n.jsxs)("div",{className:"blog-details",children:[o&&Object(n.jsx)("div",{children:"Loading..."}),r&&Object(n.jsx)("div",{children:r}),c&&Object(n.jsxs)("article",{children:[Object(n.jsx)("h2",{children:c.title}),Object(n.jsxs)("p",{children:["Written by ",c.author]}),Object(n.jsx)("div",{children:c.body}),Object(n.jsx)("button",{onClick:function(){fetch("http://localhost:8000/blogs/"+c.id,{method:"DELETE"}).then((function(){s.push("/")}))},children:"delete"})]})]})},f=function(){return Object(n.jsxs)("div",{className:"not-found",children:[Object(n.jsx)("h2",{children:"Sorry"}),Object(n.jsx)("p",{children:"That page cannot be found"}),Object(n.jsx)(j.b,{to:"/",children:"Back to the homepage..."})]})};var g=function(){return Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(l,{}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(u.c,{children:[Object(n.jsx)(u.a,{exact:!0,path:"/",children:Object(n.jsx)(h,{})}),Object(n.jsx)(u.a,{path:"/create",children:Object(n.jsx)(O,{})}),Object(n.jsx)(u.a,{path:"/blogs/:id",children:Object(n.jsx)(x,{})}),Object(n.jsx)(u.a,{path:"*",children:Object(n.jsx)(f,{})})]})})]})})};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.64cf7b6b.chunk.js.map