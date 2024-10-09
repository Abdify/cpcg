import{d as y,c as V,x as k,o as c,a as b,w as g,m as w,u as t,b as C,U as F,e as i,Y as B,q as S,f as p,r as $,G as N,F as G,g as f,h as o,t as _,n as x,P as j,i as I,j as P}from"./index-CYKrR7nE.js";import{_ as T}from"./ResultModal.vue_vue_type_script_setup_true_lang-DgvUKF9w.js";import{_ as U}from"./TabsContent.vue_vue_type_script_setup_true_lang-urs4GGWC.js";const h=y({__name:"Slider",props:{name:{},defaultValue:{},modelValue:{},disabled:{type:Boolean},orientation:{},dir:{},inverted:{type:Boolean},min:{},max:{},step:{},minStepsBetweenThumbs:{},asChild:{type:Boolean},as:{},class:{}},emits:["update:modelValue","valueCommit"],setup(n,{emit:a}){const e=n,m=a,d=V(()=>{const{class:u,...r}=e;return r}),s=k(d,m);return(u,r)=>(c(),b(t(F),w({class:t(C)("relative flex w-full touch-none select-none items-center",e.class)},t(s)),{default:g(()=>[i(t(S),{class:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"},{default:g(()=>[i(t(B),{class:"absolute h-full bg-primary"})]),_:1}),(c(!0),p(G,null,$(u.modelValue,(v,l)=>(c(),b(t(N),{key:l,class:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"}))),128))]),_:1},16,["class"]))}}),q=(n,a,e)=>({vueFiles:z(n,a,e),reactFiles:A(n,a,e)}),z=(n,a,e)=>[{filename:"GeneratedGrid.vue",content:`
<template>
    <div class="grid grid-cols-${a} gap-5">
    ${Array.from({length:n},(s,u)=>u+1).map(s=>`
      <div key="${s}" class="bg-gray-200 text-3xl rounded-lg py-8 flex items-center justify-center${e[s]?` col-span-${e[s]}`:""}">
        ${s}
      </div>
`).join(" ")}
    </div>
</template>
`,language:["ts"]}],A=(n,a,e)=>[{filename:"GeneratedGrid.ts",content:`
return (
    <div className="grid grid-cols-${a} gap-5">
    ${Array.from({length:n},(s,u)=>u+1).map(s=>`
      <div key="${s}" className="bg-gray-200 text-3xl rounded-lg py-8 flex items-center justify-center${e[s]?` col-span-${e[s]}`:""}">
        ${s}
      </div>
`).join(" ")}
    </div>
)
`,language:["tsx"]}],Y={class:"flex gap-5"},D={class:"h-full w-96 shadow p-5 grid gap-5"},E={class:"w-full"},L=["onClick"],R=y({__name:"GridGenerator",setup(n){const a=f(),e=f({nItems:[6],nColumns:[6],colSpans:{}}),m=r=>{if(!a.value)return a.value=r;e.value.colSpans[a.value]=r+1-a.value,a.value=void 0},d=f(),s=f(),u=()=>{const r=q(e.value.nItems[0],e.value.nColumns[0],e.value.colSpans);d.value=r.vueFiles,s.value=r.reactFiles};return(r,v)=>(c(),p("div",Y,[o("section",D,[o("div",null,[o("p",null,"Number of Items: "+_(e.value.nItems),1),i(t(h),{"default-value":[6],max:100,step:1,lab:"",modelValue:e.value.nItems,"onUpdate:modelValue":v[0]||(v[0]=l=>e.value.nItems=l)},null,8,["modelValue"])]),o("div",null,[o("p",null,"Number of Columns: "+_(e.value.nColumns),1),i(t(h),{"default-value":[6],max:20,step:1,lab:"",modelValue:e.value.nColumns,"onUpdate:modelValue":v[1]||(v[1]=l=>e.value.nColumns=l)},null,8,["modelValue"])]),i(T,{"vue-files":d.value,"react-files":s.value},{default:g(()=>[i(t(U),{onClick:u},{default:g(()=>[i(t(j),{class:"w-4 h-4 mr-2"}),I(" Generate ")]),_:1})]),_:1},8,["vue-files","react-files"])]),o("section",E,[o("div",{class:"grid gap-5",style:x({gridTemplateColumns:`repeat(${e.value.nColumns[0]}, 1fr)`})},[(c(!0),p(G,null,$(e.value.nItems[0],(l,K)=>(c(),p("div",{key:l,class:P(t(C)("bg-gray-200 text-3xl rounded-lg py-8 flex items-center justify-center transition-colors hover:bg-slate-300",a.value&&"",l===a.value&&"bg-slate-500 hover:bg-slate-500")),style:x({gridColumn:`span ${e.value.colSpans[l]??1} / span ${e.value.colSpans[l]??1}`}),onClick:M=>m(l)},_(l),15,L))),128))],4)])]))}}),H={class:"p-5"},J=o("div",{class:"text-center mb-5"},[o("h1",{class:"text-5xl font-medium"},"Grid Generator"),o("p",{class:"text-gray-600"},"Click on an item to create column span")],-1),X=y({__name:"GridGeneratorView",setup(n){return(a,e)=>(c(),p("main",H,[J,i(R)]))}});export{X as default};
