import{p as j}from"./chunk-WASTHULE-CTDZS9y3.js";import{p as H}from"./wardley-RL74JXVD-T2LBEBUU-kyPtPowK.js";import{g as J,s as Y,a as tt,b as et,t as at,q as it,_ as s,l as w,c as rt,I as st,aO as ot,aP as lt,aQ as G,aR as nt,e as ct,A as dt,aS as pt,K as gt}from"./md-Ei5BFZCc.js";import"./chunk-MFRUYFWM-BLLiB1Ml.js";import"./index-Dt9ZKt6q.js";import"./modules/vue-D9uvLEOT.js";import"./modules/shiki-PULXqWyp.js";import"./modules/file-saver-B7oFTzqn.js";import"./slidev/default-Bwdn6Chm.js";import"./slidev/context-pLHF-47C.js";var ht=gt.pie,C={sections:new Map,showData:!1},u=C.sections,D=C.showData,ut=structuredClone(ht),ft=s(()=>structuredClone(ut),"getConfig"),mt=s(()=>{u=new Map,D=C.showData,dt()},"clear"),vt=s(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);u.has(t)||(u.set(t,a),w.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),St=s(()=>u,"getSections"),xt=s(t=>{D=t},"setShowData"),wt=s(()=>D,"getShowData"),L={getConfig:ft,clear:mt,setDiagramTitle:it,getDiagramTitle:at,setAccTitle:et,getAccTitle:tt,setAccDescription:Y,getAccDescription:J,addSection:vt,getSections:St,setShowData:xt,getShowData:wt},Ct=s((t,a)=>{j(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),Dt={parse:s(async t=>{const a=await H("pie",t);w.debug(a),Ct(a,L)},"parse")},$t=s(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),yt=$t,Tt=s(t=>{const a=[...t.values()].reduce((r,l)=>r+l,0),$=[...t.entries()].map(([r,l])=>({label:r,value:l})).filter(r=>r.value/a*100>=1);return pt().value(r=>r.value).sort(null)($)},"createPieArcs"),At=s((t,a,$,y)=>{var F;w.debug(`rendering pie chart
`+t);const r=y.db,l=rt(),T=st(r.getConfig(),l.pie),A=40,o=18,p=4,c=450,d=c,f=ot(a),n=f.append("g");n.attr("transform","translate("+d/2+","+c/2+")");const{themeVariables:i}=l;let[_]=lt(i.pieOuterStrokeWidth);_??(_=2);const b=T.textPosition,g=Math.min(d,c)/2-A,O=G().innerRadius(0).outerRadius(g),P=G().innerRadius(g*b).outerRadius(g*b);n.append("circle").attr("cx",0).attr("cy",0).attr("r",g+_/2).attr("class","pieOuterCircle");const h=r.getSections(),B=Tt(h),I=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let m=0;h.forEach(e=>{m+=e});const E=B.filter(e=>(e.data.value/m*100).toFixed(0)!=="0"),v=nt(I).domain([...h.keys()]);n.selectAll("mySlices").data(E).enter().append("path").attr("d",O).attr("fill",e=>v(e.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(E).enter().append("text").text(e=>(e.data.value/m*100).toFixed(0)+"%").attr("transform",e=>"translate("+P.centroid(e)+")").style("text-anchor","middle").attr("class","slice");const N=n.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),k=[...h.entries()].map(([e,x])=>({label:e,value:x})),S=n.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(e,x)=>{const M=o+p,V=M*k.length/2,X=12*o,Z=x*M-V;return"translate("+X+","+Z+")"});S.append("rect").attr("width",o).attr("height",o).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),S.append("text").attr("x",o+p).attr("y",o-p).text(e=>r.getShowData()?`${e.label} [${e.value}]`:e.label);const U=Math.max(...S.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),q=d+A+o+p+U,R=((F=N.node())==null?void 0:F.getBoundingClientRect().width)??0,K=d/2-R/2,Q=d/2+R/2,W=Math.min(0,K),z=Math.max(q,Q)-W;f.attr("viewBox",`${W} 0 ${z} ${c}`),ct(f,c,z,T.useMaxWidth)},"draw"),_t={draw:At},Pt={parser:Dt,db:L,renderer:_t,styles:yt};export{Pt as diagram};
