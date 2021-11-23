var w=Object.defineProperty;var g=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var v=(e,o,l)=>o in e?w(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,b=(e,o)=>{for(var l in o||(o={}))P.call(o,l)&&v(e,l,o[l]);if(g)for(var l of g(o))U.call(o,l)&&v(e,l,o[l]);return e};import{d as M,j as G,u as I,r as L,o as u,b as d,h as t,t as s,m as r,C as y,D as A,E as N,G as D,F as x,z as f,p as Y}from"./vendor.5e53ca0f.js";var i;(function(e){e.ACE="Ace Trainer",e.PAKCER="Backpacker",e.BEAUTY="Beauty",e.BIKER="Biker",e.KEEPER="Bird Keeper",e.BELT="Black Belt",e.BREEDER="Breeder",e.CATCHER="Bug Catcher",e.BURGLAR="Burglar",e.CHANNELER="Channeler",e.CHEF="Chef",e.TAMER="Dragon Tamer",e.FISHERMAN="Fisherman",e.GAMBLER="Gambler",e.JUGGLER="Juggler",e.LASS="Lass",e.YOUNGSTER="Youngster",e.MUSICIAN="Musician",e.FAN="Pokefan",e.POKEMANIAC="Pokemaniac",e.PSYCHIC="Psychic",e.SAGE="Sage",e.SCIENTIST="Scientist",e.SURFER="Surfer",e.CUSTOM="Custom"})(i||(i={}));i.ACE+"";const F={id:0,name:"",img:"3DS---Pokemon-X-Y---Trainer-VS-Faces-Large_175.gif",class:i.CUSTOM,stats:{body:{health:0,brawn:0,swiftness:0,defence:0},mind:{sense:1,wisdom:2,smarts:3,nerve:4},soul:{charm:0,confidence:0,intuition:0,luck:0}}};var S;(function(e){e.PLAYER="Pokedex",e.NPC="Npc",e.ENCOUNTER="Encounter",e.GYM="Gym"})(S||(S={}));const H={class:"max-w-4xl mx-auto py-6"},V={class:"p-6 text-2xl font-bold"},K={class:"space-y-2"},O={class:"flex flex-col max-w-xs"},j={class:"text-sm font-extrabold pb-1"},$={class:"flex flex-col max-w-xs"},z={class:"text-sm font-extrabold pb-1"},J=["src","alt"],C={class:"flex flex-col max-w-xs"},X={class:"text-sm font-extrabold pb-1"},q={class:"text-sm font-extrabold pb-1 capitalize"},Q={class:"flex gap-4"},W=["onClick"],te=M({setup(e){const{t:o}=G();I({title:"New Player",meta:[{name:"description",content:"Create a new player"}]});const l=i,a=L(b({},F)),k=m=>`/images/trainers/${m}`,B=({statName:m,attName:c,value:n})=>{a.value.stats[m][c]=n};return(m,c)=>(u(),d("main",null,[t("div",H,[t("h1",V,s(r(o)("player.new")),1),t("section",K,[t("label",O,[t("span",j,s(r(o)("player.name")),1),y(t("input",{"onUpdate:modelValue":c[0]||(c[0]=n=>a.value.name=n),type:"text",class:"rounded-full px-3 py-1 text-gray-800",placeholder:"Player Name"},null,512),[[A,a.value.name]])]),t("label",$,[t("span",z,s(r(o)("player.image")),1),t("img",{src:k(a.value.img),alt:`${a.value.name}'s Portrait`,class:"bg-gray-100 rounded-lg border-2 border-teal-600 w-24 h-24 object-cover"},null,8,J),y(t("input",{"onUpdate:modelValue":c[1]||(c[1]=n=>a.value.img=n),type:"text"},null,512),[[N,!1],[A,a.value.img]])]),t("label",C,[t("span",X,s(r(o)("player.class")),1),y(t("select",{"onUpdate:modelValue":c[2]||(c[2]=n=>a.value.class=n),class:"rounded-full px-3 py-1 text-gray-800"},[(u(!0),d(x,null,f(r(l),n=>(u(),d("option",{key:n},s(n),1))),128))],512),[[D,a.value.class]])]),(u(!0),d(x,null,f(a.value.stats,(n,p)=>(u(),d("article",{key:p},[t("h2",q,s(p),1),t("dl",Q,[(u(!0),d(x,null,f(n,(_,E)=>(u(),d("div",{key:p+E},[t("dt",null,s(E),1),t("dd",null,[(u(),d(x,null,f(6,(R,h)=>t("span",{key:R+h,class:"cursor-pointer hover:opacity-75",onClick:Z=>B({statName:p,attName:E,value:h+1})},s(h<_?"\u2588":"\u25A0"),9,W)),64)),Y(" "+s(_),1)])]))),128))])]))),128))])])]))}});export{te as default};
