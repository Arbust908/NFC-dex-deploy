import{d as P,r as m,u as R,o as p,b as u,e as r,t as d,f as $,F as C,g as E,p as F,h as S}from"./vendor.93f442bf.js";import{_ as T}from"./app.ad7486d4.js";var v={};const I=l=>(F("data-v-485487b2"),l=l(),S(),l),A=I(()=>r("p",{class:"text-4xl mb-8"},[r("strong",{class:"font-bold"},"NFC"),r("span",{class:"text-2xl"},"Dex")],-1)),D={key:0,class:"flex justify-center items-center gap-4 flex-wrap"},O={key:1},J={class:"text-sm opacity-75"},j={class:"m-4"},B={class:"grid gap-4 max-w-2xl mx-auto dex-grid"},L={class:"rounded-full p-2 text-xs opacity-50"},M=["src"],W=["onClick"],w=P({setup(l){const o=m([]),c=[{name:"Bulbasaur",id:1,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",type:"grass"},{name:"Charmander",id:4,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",type:"fire"},{name:"Squirtle",id:7,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",type:"water"},{name:"Pikachu",id:25,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",type:"electric"},{name:"Eevee",id:133,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",type:"normal"},{name:"Jigglypuff",id:39,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",type:"normal"},{name:"Mew",id:151,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",type:"psychic"},{name:"Mewtwo",id:150,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",type:"psychic"}],g=m(!0),e=m(""),y=a=>o.value.find(t=>t.id===a);"NDEFReader"in window&&(g.value=!0,console.log(window.NDEFReader));const i=a=>new Promise(s=>setTimeout(s,a)),x=async()=>{e.value="Preparing to write";try{const a=new NDEFReader,s=new TextEncoder;e.value=o.value,await i(2500),e.value=JSON.stringify({dex:o.value}),await i(2500);const t=[{recordType:"mime",mediaType:"application/json",data:s.encode(JSON.stringify({name:c[0].name,id:c[0].id,img:c[0].img,type:c[0].type}))}];e.value=t,await i(2500),await a.write({records:t},{overwrite:!0}),e.value=`Wrote -${t}`}catch(a){e.value=`ERROR:::${a}`}},f=async()=>{e.value="Preparing to write";try{const a=new NDEFReader,s=new TextEncoder;e.value=o.value,await i(2500),e.value=JSON.stringify({dex:o.value}),await i(2500);const t=[{recordType:"mime",mediaType:"application/json",data:s.encode(JSON.stringify({dex:o.value}))}];e.value=t,await i(2500),await a.write({records:t},{overwrite:!0}),e.value=`Wrote -${t}`}catch(a){e.value=`ERROR:::${a}`}},h=async()=>{try{const a=new NDEFReader;await a.scan(),e.value="Scaning...",a.addEventListener("reading",({message:s,serialNumber:t})=>{e.value=`${t}: ${JSON.stringify(s.records,null,2)}`})}catch(a){e.value=`Error! Scan failed to start: ${a}.`}},b=async()=>{const a=new TextDecoder;e.value="Scaning...";const s=new NDEFReader;await s.scan(),s.addEventListener("reading",({message:t,serialNumber:N})=>{for(const n of t.records)switch(e.value="--------",e.value+=n.recordType,e.value+=`
      -
      `,n.recordType){case"text":e.value+=`Text: ${a.decode(n.data)} (${n.lang})`;break;case"url":e.value+=`URL: ${a.decode(n.data)}`;break;case"mime":n.mediaType==="application/json"?e.value+=`JSON: ${a.decode(n.data)}`:e.value+="Media not handled";break;default:e.value+="Record not handled"}})},{t:_}=R(),k=a=>{o.value.push(a),console.log(`Added ${a.name}`),console.log("Your Dex"),console.log(o.value)};return(a,s)=>(p(),u("div",null,[A,g.value?(p(),u("div",D,[r("button",{class:"rounded border px-6 py-2",onClick:s[0]||(s[0]=t=>f())}," Write "),r("button",{class:"rounded border px-6 py-2",onClick:s[1]||(s[1]=t=>x())}," Buba! "),r("button",{class:"rounded border px-6 py-2",onClick:s[2]||(s[2]=t=>h())}," Read "),r("button",{class:"rounded border px-6 py-2",onClick:s[3]||(s[3]=t=>b())}," Read All ")])):(p(),u("div",O,[r("em",J,d($(_)("no-nfc")),1)])),r("div",j,d(e.value),1),r("section",B,[(p(),u(C,null,E(c,t=>r("article",{key:t.id,class:"bg-gray-200 dark:bg-gray-800 rounded"},[r("small",L,d(y(t.id)?"Owned":null)+" "+d(t.id),1),r("h2",null,d(t.name),1),r("img",{class:"w-24 h-24 mx-auto",src:t.img,alt:"{{ pokemon.name }}"},null,8,M),r("p",null,d(t.type),1),r("button",{class:"rounded-full bg-red-600 text-white border-2 border-white hover:shadow hover:bg-red-400 px-3 py-1 my-2",onClick:N=>k(t)}," Add to Dex ",8,W)])),64))])]))}});typeof v=="function"&&v(w);var V=T(w,[["__scopeId","data-v-485487b2"]]);export{V as default};
