(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{NnCg:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),i=n.n(a),o=n("9Dj+"),s=n("QTEN"),l=n("H8eV"),p=n("GpQV");e.default=function(t){var e=t.pageContext,n=t.data,a=e.tag,r=n.allMarkdownRemark,c=r.edges,m=r.totalCount;return i.a.createElement(o.a,null,i.a.createElement(l.a,{title:a,description:"A collection of "+m+" post"}),i.a.createElement(p.m,null,i.a.createElement(p.l,null,i.a.createElement(p.k,null,a),"A collection of "+m+" post"),c.map((function(t){var e=t.node;return i.a.createElement(s.a,{key:e.fields.slug,title:e.frontmatter.title,url:e.fields.slug,description:e.frontmatter.description||e.excerpt,date:e.frontmatter.date,tags:e.frontmatter.tags})}))))}},QTEN:function(t,e,n){"use strict";var a=n("zLVn"),i=n("N1om"),o=n.n(i),s=n("q1tI"),l=n("Wbzz"),p=n("9eSz"),r=n.n(p),c=n("vOnD"),m=n("bC0J"),d=c.c.div.withConfig({displayName:"post-cardstyle__PostCardWrapper",componentId:"sc-177hg2s-0"})(["\n  position: relative;\n"]),g=c.c.div.withConfig({displayName:"post-cardstyle__PostPreview",componentId:"sc-177hg2s-1"})(["\n  margin-bottom: 45px;\n  position: relative;\n  img {\n    border-radius: 3px;\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 80%;\n    height: 80%;\n    background-color: #757575;\n    bottom: 0;\n    left: 10%;\n    filter: blur(15px);\n  }\n"]),x=c.c.div.withConfig({displayName:"post-cardstyle__PostDetails",componentId:"sc-177hg2s-2"})(["\n  display: flex;\n"]),f=c.c.div.withConfig({displayName:"post-cardstyle__PostDate",componentId:"sc-177hg2s-3"})(["\n  font-size: 90px;\n  font-weight: 700;\n  text-align: center;\n  padding: 30px 35px 15px 35px;\n  margin-right: 20px;\n  line-height: 1;\n  color: ",";\n  @media (max-width: 1200px) {\n    font-size: 70px;\n    padding: 25px 25px 15px 25px;\n    margin-right: 35px;\n  }\n  @media (max-width: 990px) {\n    font-size: 56px;\n    padding: 20px 20px 15px 20px;\n    margin-right: 25px;\n  }\n  @media (max-width: 575px) {\n    display: none;\n  }\n\n  > span {\n    font-size: 13px;\n    font-weight: 400;\n    display: block;\n    margin-top: 12px;\n    text-transform: uppercase;\n  }\n"],Object(m.a)("colors.textColor","#292929")),h=c.c.div.withConfig({displayName:"post-cardstyle__PostContent",componentId:"sc-177hg2s-4"})(["\n  align-self: center;\n"]),u=c.c.h2.withConfig({displayName:"post-cardstyle__PostTitle",componentId:"sc-177hg2s-5"})(["\n  font-size: 30px;\n  font-weight: 700;\n  color: ",";\n  line-height: 1.53;\n  margin-bottom: 10px;\n  a {\n    color: ",";\n  }\n  @media (max-width: 1200px) {\n    font-size: 26px;\n  }\n  @media (max-width: 990px) {\n    font-size: 21px;\n    margin-bottom: 12px;\n  }\n  @media (max-width: 575px) {\n    font-size: 20px;\n    margin-bottom: 10px;\n  }\n"],Object(m.a)("colors.textColor","#292929"),Object(m.a)("colors.textColor","#292929")),w=c.c.p.withConfig({displayName:"post-cardstyle__Excerpt",componentId:"sc-177hg2s-6"})(["\n  font-size: ","px;\n  color: ",";\n  font-weight: 400;\n  line-height: 2;\n  margin-bottom: 0;\n  @media (max-width: 990px) {\n    font-size: 14px;\n  }\n"],Object(m.a)("fontSizes.3","15"),Object(m.a)("textColor","#292929")),y=c.c.div.withConfig({displayName:"post-cardstyle__PostTags",componentId:"sc-177hg2s-7"})(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-top: 15px;\n\n  a {\n    display: block;\n    margin-right: 30px;\n    font-size: 14px;\n    font-weight: 400;\n    color: ",";\n    @media (max-width: 990px) {\n      font-size: 13px;\n      margin-right: 25px;\n    }\n  }\n"],Object(m.a)("primary","#D10068")),_=function(t){var e=t.image,n=t.title,i=t.description,p=t.url,c=t.date,m=t.tags,_=t.className,b=t.imageType,E=Object(a.a)(t,["image","title","description","url","date","tags","className","imageType"]),N=["post_card"];return _&&N.push(_),s.createElement(d,Object.assign({className:N.join(" ")},E),null==e?null:s.createElement(g,{className:"post_preview"},s.createElement(l.Link,{to:p},"fluid"===b?s.createElement(r.a,{fluid:e,alt:"post preview"}):s.createElement(r.a,{fixed:e,alt:"post preview"}))),s.createElement(x,{className:"post_details"},c&&s.createElement(f,{dangerouslySetInnerHTML:{__html:c},className:"post_date"}),s.createElement(h,{className:"post_content"},s.createElement(u,{className:"post_title"},s.createElement(l.Link,{to:p},n)),i&&s.createElement(w,{dangerouslySetInnerHTML:{__html:i},className:"excerpt"}),null==m?null:s.createElement(y,{className:"post_tags"},m.map((function(t,e){return s.createElement(l.Link,{key:e,to:"/tags/"+o()(t)+"/"},"#"+t)}))))))};_.defaultProps={imageType:"fluid"};e.a=_}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-7d8a7a1ef7f3eeffa103.js.map