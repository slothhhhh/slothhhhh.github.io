"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{6964:function(e,t,s){s.r(t),s.d(t,{diagram:function(){return V}});var r=s(1341),a=s(5625),i=s(9373),l=s(44),o=s(2566),d=s(1188);s(7856),s(7484),s(2494),s(9354),s(3502),s(7967);let n="rect",c="rectWithTitle",p="statediagram",g=`${p}-state`,b="transition",h=`${b} note-edge`,u=`${p}-note`,y=`${p}-cluster`,f=`${p}-cluster-alt`,w="parent",x="note",$="----",m=`${$}${x}`,T=`${$}${w}`,k="fill:none",S="fill: #333",D="text",A="normal",v={},B=0;function E(e="",t=0,s="",r=$){let a=null!==s&&s.length>0?`${r}${s}`:"";return`state-${e}${a}-${t}`}let N=(e,t,s,a,i,o)=>{var d;let p=s.id,b=null==(d=a[p])?"":d.classes?d.classes.join(" "):"";if("root"!==p){let t=n;!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==r.a&&(t=s.type),v[p]||(v[p]={id:p,shape:t,description:l.e.sanitizeText(p,(0,l.g)()),classes:`${b} ${g}`});let a=v[p];s.description&&(Array.isArray(a.description)?(a.shape=c,a.description.push(s.description)):a.description.length>0?(a.shape=c,a.description===p?a.description=[s.description]:a.description=[a.description,s.description]):(a.shape=n,a.description=s.description),a.description=l.e.sanitizeTextOrArray(a.description,(0,l.g)())),1===a.description.length&&a.shape===c&&(a.shape=n),!a.type&&s.doc&&(l.l.info("Setting cluster for ",p,R(s)),a.type="group",a.dir=R(s),a.shape=s.type===r.b?"divider":"roundedWithTitle",a.classes=a.classes+" "+y+" "+(o?f:""));let i={labelStyle:"",shape:a.shape,labelText:a.description,classes:a.classes,style:"",id:p,dir:a.dir,domId:E(p,B),type:a.type,padding:15};if(i.centerLabel=!0,s.note){let t={labelStyle:"",shape:"note",labelText:s.note.text,classes:u,style:"",id:p+m+"-"+B,domId:E(p,B,x),type:a.type,padding:15},r={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:a.classes,style:"",id:p+T,domId:E(p,B,w),type:"group",padding:0};B++;let l=p+T;e.setNode(l,r),e.setNode(t.id,t),e.setNode(p,i),e.setParent(p,l),e.setParent(t.id,l);let o=p,d=t.id;"left of"===s.note.position&&(o=t.id,d=p),e.setEdge(o,d,{arrowhead:"none",arrowType:"",style:k,labelStyle:"",classes:h,arrowheadStyle:S,labelpos:"c",labelType:D,thickness:A})}else e.setNode(p,i)}t&&"root"!==t.id&&(l.l.trace("Setting node ",p," to be child of its parent ",t.id),e.setParent(p,t.id)),s.doc&&(l.l.trace("Adding nodes children "),C(e,s,s.doc,a,i,!o))},C=(e,t,s,a,i,o)=>{l.l.trace("items",s),s.forEach(s=>{switch(s.stmt){case r.c:case r.a:N(e,t,s,a,i,o);break;case r.S:{N(e,t,s.state1,a,i,o),N(e,t,s.state2,a,i,o);let r={id:"edge"+B,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:k,labelStyle:"",label:l.e.sanitizeText(s.description,(0,l.g)()),arrowheadStyle:S,labelpos:"c",labelType:D,thickness:A,classes:b};e.setEdge(s.state1.id,s.state2.id,r,B),B++}}})},R=(e,t=r.e)=>{let s=t;if(e.doc)for(let t=0;t<e.doc.length;t++){let r=e.doc[t];"dir"===r.stmt&&(s=r.value)}return s},V={parser:r.p,db:r.d,renderer:{setConf:function(e){let t=Object.keys(e);for(let s of t)e[s]},getClasses:function(e,t){l.l.trace("Extracting classes"),t.db.clear();try{return t.parser.parse(e),t.db.extract(t.db.getRootDocV2()),t.db.getClasses()}catch(e){return e}},draw:function(e,t,s,c){let g;l.l.info("Drawing state diagram (v2)",t),v={};let b=c.db.getDirection();void 0===b&&(b=r.D);let{securityLevel:h,state:u}=(0,l.g)(),y=u.nodeSpacing||50,f=u.rankSpacing||50;l.l.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),l.l.info(c.db.getRootDocV2());let w=c.db.getStates(),x=new a.k({multigraph:!0,compound:!0}).setGraph({rankdir:R(c.db.getRootDocV2()),nodesep:y,ranksep:f,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});N(x,void 0,c.db.getRootDocV2(),w,c.db,!0),"sandbox"===h&&(g=(0,i.Ys)("#i"+t));let $="sandbox"===h?(0,i.Ys)(g.nodes()[0].contentDocument.body):(0,i.Ys)("body"),m=$.select(`[id="${t}"]`),T=$.select("#"+t+" g");(0,o.r)(T,x,["barb"],p,t),d.u.insertTitle(m,"statediagramTitleText",u.titleTopMargin,c.db.getDiagramTitle());let k=m.node().getBBox(),S=k.width+16,D=k.height+16;m.attr("class",p);let A=m.node().getBBox();(0,d.k)(m,D,S,u.useMaxWidth);let B=`${A.x-8} ${A.y-8} ${S} ${D}`;l.l.debug(`viewBox ${B}`),m.attr("viewBox",B);let E=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(let e of E){let t=e.getBBox(),s=document.createElementNS("http://www.w3.org/2000/svg",n);s.setAttribute("rx",0),s.setAttribute("ry",0),s.setAttribute("width",t.width),s.setAttribute("height",t.height),e.insertBefore(s,e.firstChild)}}},styles:r.s,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,r.d.clear()}}}}]);