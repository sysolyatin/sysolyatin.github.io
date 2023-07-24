(function(){"use strict";var e={6963:function(e,t,s){var i=s(9242),n=s(3396);const o={class:"container-fluid p-4"},r={class:"row"},l={class:"col-md-3"},c={class:"input-group mb-3"},u=(0,n._)("span",{class:"input-group-text"},"Размер модуля",-1),h=(0,n._)("span",{class:"input-group-text"},"Х",-1),a=(0,n._)("span",{class:"input-group-text"},"px",-1),d={class:"input-group mb-3"},p=(0,n._)("span",{class:"input-group-text"},"Кол-во в ширину",-1),m=(0,n._)("span",{class:"input-group-text"},"шт",-1),x={class:"input-group mb-3"},f=(0,n._)("span",{class:"input-group-text"},"Кол-во в высоту",-1),g=(0,n._)("span",{class:"input-group-text"},"шт",-1),b={class:"input-group mb-3"},w=(0,n._)("span",{class:"input-group-text"},"Текст:",-1),S=(0,n._)("span",{class:"input-group-text"},"Размер:",-1),v=(0,n._)("span",{class:"input-group-text"},"px",-1),_={class:"input-group mb-3"},y=(0,n._)("span",{class:"input-group-text"},"Вырезать:",-1),I={class:"col-md-3"},k={class:"mb-1 form-check"},C={class:"mb-1 form-check"},z={class:"mb-1 form-check"},T={class:"mb-1 form-check"},U={class:"mb-3 form-check"},Y={ref:"screen"};function W(e,t,s,W,X,O){const M=(0,n.up)("Footer");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",r,[(0,n._)("div",l,[(0,n._)("div",c,[u,(0,n.wy)((0,n._)("input",{type:"number",min:"10",max:"10000",step:"1",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=e=>X.sizeX=e),onChange:t[1]||(t[1]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.nr,X.sizeX]]),h,(0,n.wy)((0,n._)("input",{type:"number",min:"10",max:"10000",step:"1",class:"form-control","onUpdate:modelValue":t[2]||(t[2]=e=>X.sizeY=e),onChange:t[3]||(t[3]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.nr,X.sizeY]]),a]),(0,n._)("div",d,[p,(0,n.wy)((0,n._)("input",{type:"number",min:"1",max:"1000",step:"1",class:"form-control","onUpdate:modelValue":t[4]||(t[4]=e=>X.countX=e),onChange:t[5]||(t[5]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.nr,X.countX]]),m]),(0,n._)("div",x,[f,(0,n.wy)((0,n._)("input",{type:"number",min:"1",max:"1000",step:"1",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=e=>X.countY=e),onChange:t[7]||(t[7]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.nr,X.countY]]),g]),(0,n._)("div",b,[w,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":t[8]||(t[8]=e=>X.text=e),onInput:t[9]||(t[9]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e)),onChange:t[10]||(t[10]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.nr,X.text]]),S,(0,n.wy)((0,n._)("input",{type:"number",min:"5",max:"1000",step:"1",class:"form-control","onUpdate:modelValue":t[11]||(t[11]=e=>X.textSize=e),onInput:t[12]||(t[12]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e)),onChange:t[13]||(t[13]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.nr,X.textSize]]),v]),(0,n._)("div",_,[y,(0,n.wy)((0,n._)("input",{type:"text",placeholder:"номера модулей через запятую",class:"form-control","onUpdate:modelValue":t[14]||(t[14]=e=>X.exclude=e),onInput:t[15]||(t[15]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e)),onChange:t[16]||(t[16]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.nr,X.exclude]])])]),(0,n._)("div",I,[(0,n._)("div",k,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[17]||(t[17]=e=>X.isShowCirc=e),onChange:t[18]||(t[18]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.e8,X.isShowCirc]]),(0,n.Uk)(" Показать круг")])]),(0,n._)("div",C,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[19]||(t[19]=e=>X.isShowLines=e),onChange:t[20]||(t[20]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.e8,X.isShowLines]]),(0,n.Uk)(" Показать диагонали")])]),(0,n._)("div",z,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[21]||(t[21]=e=>X.isShowNumbers=e),onChange:t[22]||(t[22]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.e8,X.isShowNumbers]]),(0,n.Uk)(" Показать номера модулей")])]),(0,n._)("div",T,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[23]||(t[23]=e=>X.isShowResolutiuon=e),onChange:t[24]||(t[24]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.e8,X.isShowResolutiuon]]),(0,n.Uk)(" Показать разрешение")])]),(0,n._)("div",U,[(0,n._)("label",null,[(0,n.wy)((0,n._)("input",{type:"checkbox",class:"form-check-input","onUpdate:modelValue":t[25]||(t[25]=e=>X.isShowText=e),onChange:t[26]||(t[26]=(...e)=>O.rebuildScreenImage&&O.rebuildScreenImage(...e))},null,544),[[i.e8,X.isShowText]]),(0,n.Uk)(" Показать текст")])]),(0,n._)("button",{class:"btn btn-success",onClick:t[27]||(t[27]=(...e)=>O.download&&O.download(...e))},"Скачать png")])]),(0,n._)("canvas",Y,null,512),(0,n.Wm)(M)])}var X=s(7139);const O=e=>((0,n.dD)("data-v-30c525cc"),e=e(),(0,n.Cn)(),e),M={class:"text-muted small mt-5 footer"},V=O((()=>(0,n._)("a",{href:"https://sysolyatin.com"},"Артем Сысолятин",-1))),$=O((()=>(0,n._)("br",null,null,-1)));function H(e,t,s,i,o,r){return(0,n.wg)(),(0,n.iD)("div",M,[(0,n.Uk)(" Разработчик "),V,$,(0,n.Uk)(" Версия приложения: "+(0,X.zw)(o.appVersion)+", сделано в России ",1)])}var R={i8:"1.0.0"},N={name:"Footer",data(){return{appVersion:R.i8}}},j=s(89);const B=(0,j.Z)(N,[["render",H],["__scopeId","data-v-30c525cc"]]);var D=B,P={name:"App",components:{Footer:D},data(){return{colors:["#00003f","#003f00","#3f3f00","#3f0000","#3f003f"],screenWidth:1280,screenHeight:896,colorsInModules:[],sizeX:128,sizeY:128,countX:10,countY:7,screen:null,ctx:null,text:"Test Screen",isShowCirc:!0,isShowLines:!0,isShowResolutiuon:!0,isShowNumbers:!0,isShowText:!0,textSize:150,exclude:"",modules:[]}},mounted:function(){this.rebuildScreenImage()},methods:{rebuildScreenImage(){this.screen=this.$refs["screen"],this.ctx=this.screen.getContext("2d"),this.screen.width=this.sizeX*this.countX,this.screen.height=this.sizeY*this.countY,this.screenWidth=this.screen.width,this.screenHeight=this.screen.height;let e=1,t=0;for(let s=1;s<=this.countY;s++){let s=0;for(let i=1;i<=this.countX;i++){let i=this.getColor(s,t);this.colorsInModules[`${s}#${t}`]=i,this.showModule(s,t,i,e.toString()),this.modules[e]={x:s,y:t},s+=this.sizeX,e++}t+=this.sizeY}this.showCopy(),this.isShowCirc&&this.circle(),this.isShowLines&&this.lines(),this.isShowResolutiuon&&this.showResolution(),this.isShowText&&this.centralText(this.text,this.textSize),""!==this.exclude&&this.removeModules()},removeModules(){let e=this;this.exclude.split(",").forEach((function(t){let s=Number(t.replace(/\s/g,""));if(0===s||NaN===s||void 0===s||null===s)return;let i=e.modules[s];NaN!==i&&void 0!==i&&null!==i&&e.ctx.clearRect(i.x,i.y,e.sizeX,e.sizeY)}))},getColor(e,t){let s=e-this.sizeX,i=t,n=e,o=t-this.sizeY,r=this.colorsInModules[`${s}#${i}`];void 0===r&&(r="");let l=this.colorsInModules[`${n}#${o}`];void 0===l&&(l="");while(1){let e=this.colors[Math.floor(Math.random()*this.colors.length)];if(e!==l&&e!==r)return e}},showModule(e,t,s,i){this.ctx.fillStyle=s,this.ctx.fillRect(e+1,t+1,this.sizeX-2,this.sizeY-2),this.ctx.strokeStyle="rgb(255, 255, 255)",this.ctx.lineWidth=1,this.ctx.strokeRect(e+1,t+1,this.sizeX-2,this.sizeY-2),this.ctx.fillStyle="rgb(255, 255, 255)",this.ctx.font="14px Tahoma",this.ctx.textBaseline="bottom",this.ctx.textAlign="left",this.isShowNumbers&&this.ctx.fillText(i,e+5,t+this.sizeY-5)},circle(){let e=new Path2D;this.screenWidth>=this.screenHeight?e.arc(this.screenWidth/2,this.screenHeight/2,this.screenHeight/2-2,0,2*Math.PI):e.arc(this.screenWidth/2,this.screenHeight/2,this.screenWidth/2-2,0,2*Math.PI),this.ctx.stroke(e)},centralText(e,t){this.ctx.fillStyle="#dcb422",this.ctx.font=`bold ${t}px Tahoma`,this.ctx.textBaseline="middle",this.ctx.textAlign="center",this.ctx.shadowColor="#000",this.ctx.shadowBlur=0,this.ctx.shadowOffsetX=3,this.ctx.shadowOffsetY=3,this.ctx.fillText(e,this.screenWidth/2,this.screenHeight/2)},lines(){let e=new Path2D;e.moveTo(0,0),e.lineTo(this.screenWidth,this.screenHeight),e.lineWidth=1,this.ctx.stroke(e),e.moveTo(this.screenWidth,0),e.lineTo(0,this.screenHeight),e.lineWidth=1,this.ctx.stroke(e)},showResolution(){this.ctx.fillStyle="#dcb422",this.ctx.font="20px Tahoma",this.ctx.textBaseline="top",this.ctx.textAlign="left",this.ctx.shadowColor="#000",this.ctx.shadowBlur=0,this.ctx.shadowOffsetX=0,this.ctx.shadowOffsetY=0,this.ctx.fillText(`${this.screenWidth}x${this.screenHeight}`,5,5)},showCopy(){this.ctx.font="10px Tahoma",this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.textBaseline="top",this.ctx.textAlign="right",this.ctx.fillText("sysolyatin.com",this.screenWidth-5,5)},download(){let e=this.screen.toDataURL();const t=document.createElement("a");t.href=e,t.download=`${this.text.replace(/\s/g,"_")}_${this.screenWidth}x${this.screenHeight}`,t.click(),t.remove()}}};const A=(0,j.Z)(P,[["render",W]]);var L=A,F=s(65),E=(0,F.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.ri)(L).use(E).mount("#app")}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,i,n,o){if(!i){var r=1/0;for(h=0;h<e.length;h++){i=e[h][0],n=e[h][1],o=e[h][2];for(var l=!0,c=0;c<i.length;c++)(!1&o||r>=o)&&Object.keys(s.O).every((function(e){return s.O[e](i[c])}))?i.splice(c--,1):(l=!1,o<r&&(r=o));if(l){e.splice(h--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var h=e.length;h>0&&e[h-1][2]>o;h--)e[h]=e[h-1];e[h]=[i,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,r=i[0],l=i[1],c=i[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in l)s.o(l,n)&&(s.m[n]=l[n]);if(c)var h=c(s)}for(t&&t(i);u<r.length;u++)o=r[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(h)},i=self["webpackChunktestscreen"]=self["webpackChunktestscreen"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(6963)}));i=s.O(i)})();
//# sourceMappingURL=app.614a9bda.js.map