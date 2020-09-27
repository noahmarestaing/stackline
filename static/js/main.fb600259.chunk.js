(this.webpackJsonpstackline=this.webpackJsonpstackline||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},105:function(e,a,t){},113:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(32),r=t.n(i),s=(t(103),t(104),t(105),t(1)),c=n.a.createContext(null);function d(){return Object(l.useContext)(c)}var o=function(e){function a(e,a){return{x:e,y:a}}var t=Object(l.useState)({brand:"",details:[],id:"",image:"",retailer:"",reviews:[],sales:[],subtitle:"",tags:[],title:""}),i=Object(s.a)(t,2),r=i[0],d=i[1],o=Object(l.useState)(!1),u=Object(s.a)(o,2),m=u[0],h=u[1],v=Object(l.useState)([]),g=Object(s.a)(v,2),E=g[0],p=(g[1],Object(l.useState)([])),f=Object(s.a)(p,2),S=f[0],k=(f[1],Object(l.useState)([])),D=Object(s.a)(k,2),b=D[0],j=(D[1],Object(l.useState)(1)),w=Object(s.a)(j,2),C=w[0],O=w[1],x=Object(l.useState)(1e6),M=Object(s.a)(x,2),y=M[0],R=M[1],T=Object(l.useState)(!0),F=Object(s.a)(T,2),G=F[0],L=F[1],W=Object(l.useState)(!1),B=Object(s.a)(W,2),I=B[0],A=B[1],P=Object(l.useState)(!1),$=Object(s.a)(P,2),J=$[0],N=$[1];return n.a.createElement(c.Provider,{value:{getSalesData:function(){fetch("".concat("/stackline","/data/Webdev_data2.json"),{method:"GET",headers:new Headers({"Content-Type":"application/json",Accept:"application/json"})}).then((function(e){return e.json()})).then((function(e){d(e[0]);for(var t=0;t<e[0].sales.length;t++)e[0].sales[t].retailSales>C&&O(e[0].sales[t].retailSales),e[0].sales[t].retailSales<y&&R(e[0].sales[t].retailSales),E.push(a(t,e[0].sales[t].retailSales)),e[0].sales[t].wholesaleSales>C&&O(e[0].sales[t].wholesaleSales),e[0].sales[t].wholesaleSales<y&&R(e[0].sales[t].wholesaleSales),S.push(a(t,e[0].sales[t].wholesaleSales)),e[0].sales[t].retailerMargin>C&&O(e[0].sales[t].retailerMargin),e[0].sales[t].retailerMargin<y&&R(e[0].sales[t].retailerMargin),b.push(a(t,e[0].sales[t].retailerMargin));h(!m)}))},salesData:r,salesDataDirty:m,retailSalesGraphData:E,wholesaleSalesGraphData:S,retailerMarginGraphData:b,maxAmount:C,minAmount:y,retailChecked:G,setRetailChecked:L,wholesaleChecked:I,setWholesaleChecked:A,retailerMarginChecked:J,setRetailerMarginChecked:N}},e.children)};t(8);function u(e){var a=d(),t=Object(l.useState)([]),i=Object(s.a)(t,2),r=i[0],c=i[1];return Object(l.useEffect)((function(){for(var e=[],t=0;t<a.salesData.sales.length;t++)e.push(n.a.createElement("div",{id:"DataRow"},n.a.createElement("div",{id:"DataField"},a.salesData.sales[t].weekEnding),n.a.createElement("div",{id:"DataField"},"$",a.salesData.sales[t].retailSales.toLocaleString(void 0,{maximumFractionDigits:0})),n.a.createElement("div",{id:"DataField"},"$",a.salesData.sales[t].wholesaleSales.toLocaleString(void 0,{maximumFractionDigits:0})),n.a.createElement("div",{id:"DataField"},"$",a.salesData.sales[t].unitsSold.toLocaleString(void 0,{maximumFractionDigits:0})),n.a.createElement("div",{id:"DataField"},"$",a.salesData.sales[t].retailerMargin.toLocaleString(void 0,{maximumFractionDigits:0}))));c(e)}),[a.salesDataDirty]),n.a.createElement("div",{id:"SalesChartBox"},n.a.createElement("div",{id:"DataRow"},n.a.createElement("div",{id:"TitleField"},"Week Ending"),n.a.createElement("div",{id:"TitleField"},"Retail Sales"),n.a.createElement("div",{id:"TitleField"},"Wholesale Sales"),n.a.createElement("div",{id:"TitleField"},"Units Sold"),n.a.createElement("div",{id:"TitleField"},"Retailer Margin")),r)}var m=t(4),h=t(35),v=t.n(h),g=t(33),E=t.n(g);function p(e){var a=d();function t(e){return e?n.a.createElement(E.a,null):n.a.createElement(v.a,null)}return n.a.createElement("div",{id:"SalesGraphLegendBox"},n.a.createElement("div",{id:"RetailLegendRow",onClick:function(){return a.setRetailChecked(!a.retailChecked)}},t(a.retailChecked),n.a.createElement("div",{id:"GraphLegendText"},"Retail Sales")),n.a.createElement("div",{id:"WholesaleLegendRow",onClick:function(){return a.setWholesaleChecked(!a.wholesaleChecked)}},t(a.wholesaleChecked),n.a.createElement("div",{id:"GraphLegendText"},"Wholesale Sales")),n.a.createElement("div",{id:"RetailerMarginLegendRow",onClick:function(){return a.setRetailerMarginChecked(!a.retailerMarginChecked)}},t(a.retailerMarginChecked),n.a.createElement("div",{id:"GraphLegendText"},"Retailer Margin")))}var f=function(e){var a=d(),t=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e=m.e(t.current),l=a.maxAmount+25e5,n=a.minAmount-1e6,i=e.append("g"),r=m.d().domain([-1,54]).range([0,875]),s=m.d().domain([n,l]).range([400,0]),c=m.a(r).ticks(10),d=(i.append("g").call(c).attr("transform","translate(0, 380)").attr("color","gray"),m.c().x((function(e,a){return r(e.x)})).y((function(e,a){return s(e.y)})).curve(m.b.alpha(.5)));return a.retailChecked&&i.append("path").datum(a.retailSalesGraphData).attr("class","line").attr("d",d).attr("fill","none").style("stroke","blue").style("stroke-width","2"),a.wholesaleChecked&&i.append("path").datum(a.wholesaleSalesGraphData).attr("class","line").attr("d",d).attr("fill","none").style("stroke","gray").style("stroke-width","2"),a.retailerMarginChecked&&i.append("path").datum(a.retailerMarginGraphData).attr("class","line").attr("d",d).attr("fill","none").style("stroke","black").style("stroke-width","2"),function(){e.selectAll("*").remove()}}),[a.salesDataDirty,a.retailChecked,a.wholesaleChecked,a.retailerMarginChecked]),n.a.createElement("div",{id:"SalesGraphBox"},n.a.createElement("div",{id:"SalesGraphLegendPlacement"},n.a.createElement(p,null)),n.a.createElement("svg",{className:"d3-component",width:875,height:400,ref:t}),n.a.createElement("div",null,"Week"))};function S(e){var a=d(),t=Object(l.useState)([]),i=Object(s.a)(t,2),r=i[0],c=i[1];return Object(l.useEffect)((function(){for(var e=[],t=0;t<a.salesData.tags.length;t++)e.push(n.a.createElement("div",{id:"ItemDescriptionTag"},a.salesData.tags[t]));c(e)}),[a.salesDataDirty]),n.a.createElement("div",{id:"ItemDescriptionBox"},n.a.createElement("img",{id:"ItemImage",src:a.salesData.image}),n.a.createElement("div",{id:"ItemTitle"},a.salesData.title),n.a.createElement("div",{id:"ItemSubtitle"},a.salesData.subtitle),n.a.createElement("div",{id:"ItemDescriptionTags"},r))}function k(e){return n.a.createElement("div",{id:"TopBarBox"},n.a.createElement("div",{id:"TopBarTitle"},"Stackline Code Assessment"))}function D(e){var a=d();return Object(l.useEffect)((function(){a.getSalesData()}),[]),n.a.createElement("div",null,n.a.createElement(k,null),n.a.createElement("div",{id:"ItemDescriptionPlacement"},n.a.createElement(S,null)),n.a.createElement("div",{id:"SalesGraphPlacement"},n.a.createElement(f,null)),n.a.createElement("div",{id:"SalesChartPlacement"},n.a.createElement(u,null)))}var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(o,null,n.a.createElement(D,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){},98:function(e,a,t){e.exports=t(113)}},[[98,1,2]]]);
//# sourceMappingURL=main.fb600259.chunk.js.map