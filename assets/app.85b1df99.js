var B=Object.defineProperty,W=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var A=(n,e,o)=>e in n?B(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,T=(n,e)=>{for(var o in e||(e={}))Y.call(e,o)&&A(n,o,e[o]);if(O)for(var o of O(e))U.call(e,o)&&A(n,o,e[o]);return n},R=(n,e)=>W(n,J(e));import{c as q,N as E,a as G,d as S,r as $,u as N,b as _,e as i,t as b,f as z,F as K,g as Z,p as Q,h as X,o as u,i as L,j as ee,k as ne,l as M,m as d,w as P,n as C,q as oe,V as te}from"./vendor.b530ffe5.js";const re=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};re();var ae={button:{about:n=>{const{normalize:e}=n;return e(["\xDCber"])},back:n=>{const{normalize:e}=n;return e(["Zur\xFCck"])},go:n=>{const{normalize:e}=n;return e(["Los"])},home:n=>{const{normalize:e}=n;return e(["Startseite"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Dunkelmodus umschalten"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Sprachen \xE4ndern"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Vite Startvorlage mit Vorlieben"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo einer dynamischen Route"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Hi, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Auch bekannt als"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Wie hei\xDFt du?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Nicht gefunden"])}},le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae}),ie={button:{about:n=>{const{normalize:e}=n;return e(["About"])},back:n=>{const{normalize:e}=n;return e(["Back"])},go:n=>{const{normalize:e}=n;return e(["GO"])},home:n=>{const{normalize:e}=n;return e(["Home"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Toggle dark mode"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Change languages"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Opinionated Vite Starter Template"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo of dynamic route"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Hi, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Also known as"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["What's your name?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Not found"])},"no-nfc":n=>{const{normalize:e}=n;return e(["Not able to use NFC"])}},se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ie}),me={button:{about:n=>{const{normalize:e}=n;return e(["Acerca de"])},back:n=>{const{normalize:e}=n;return e(["Atr\xE1s"])},go:n=>{const{normalize:e}=n;return e(["Ir"])},home:n=>{const{normalize:e}=n;return e(["Inicio"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Alternar modo oscuro"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Cambiar idiomas"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Plantilla de Inicio de Vite Dogm\xE1tica"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo de ruta din\xE1mica"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\xA1Hola, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Tambi\xE9n conocido como"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\xBFC\xF3mo te llamas?"])}},"not-found":n=>{const{normalize:e}=n;return e(["No se ha encontrado"])},"no-nfc":n=>{const{normalize:e}=n;return e(["No podes usat NFC"])}},ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:me}),ue={button:{about:n=>{const{normalize:e}=n;return e(["\xC0 propos de"])},back:n=>{const{normalize:e}=n;return e(["Retour"])},go:n=>{const{normalize:e}=n;return e(["Essayer"])},home:n=>{const{normalize:e}=n;return e(["Accueil"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Basculer en mode sombre"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Changer de langue"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Exemple d'application Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["D\xE9mo de route dynamique"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Salut, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Aussi connu sous le nom de"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Comment t'appelles-tu ?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Page non trouv\xE9e"])}},_e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ue}),de={button:{about:n=>{const{normalize:e}=n;return e(["Tentang"])},back:n=>{const{normalize:e}=n;return e(["Kembali"])},go:n=>{const{normalize:e}=n;return e(["Pergi"])},home:n=>{const{normalize:e}=n;return e(["Beranda"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Ubah ke mode gelap"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Ubah bahasa"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Template awal vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Contoh rute dinamik"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Halo, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Juga diketahui sebagai"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Siapa nama anda?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Tidak ditemukan"])}},ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de}),pe={button:{about:n=>{const{normalize:e}=n;return e(["Su di me"])},back:n=>{const{normalize:e}=n;return e(["Indietro"])},go:n=>{const{normalize:e}=n;return e(["Vai"])},home:n=>{const{normalize:e}=n;return e(["Home"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Attiva/disattiva modalit\xE0 scura"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Cambia lingua"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Modello per una Applicazione Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo di rotta dinamica"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Ciao, ",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Come ti chiami?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Non trovato"])}},ge=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pe}),he={button:{about:n=>{const{normalize:e}=n;return e(["\u3053\u308C\u306F\uFF1F"])},back:n=>{const{normalize:e}=n;return e(["\u623B\u308B"])},go:n=>{const{normalize:e}=n;return e(["\u9032\u3080"])},home:n=>{const{normalize:e}=n;return e(["\u30DB\u30FC\u30E0"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u5207\u308A\u66FF\u3048"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\u8A00\u8A9E\u5207\u308A\u66FF\u3048"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\u56FA\u57F7\u3055\u308C\u305F Vite \u30B9\u30BF\u30FC\u30BF\u30FC\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\u52D5\u7684\u30EB\u30FC\u30C8\u306E\u30C7\u30E2"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\u3053\u3093\u306B\u3061\u306F\u3001",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\u541B\u306E\u540D\u306F\u3002"])}},"not-found":n=>{const{normalize:e}=n;return e(["\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"])}},be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he}),ve={button:{about:n=>{const{normalize:e}=n;return e(["\uC18C\uAC1C"])},back:n=>{const{normalize:e}=n;return e(["\uB4A4\uB85C\uAC00\uAE30"])},go:n=>{const{normalize:e}=n;return e(["\uC774\uB3D9"])},home:n=>{const{normalize:e}=n;return e(["\uD648"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\uB2E4\uD06C\uBAA8\uB4DC \uD1A0\uAE00"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\uC5B8\uC5B4 \uBCC0\uACBD"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Vite \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\uB2E4\uC774\uB098\uBBF9 \uB77C\uC6B0\uD2B8 \uB370\uBAA8"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\uC548\uB155, ",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\uC774\uB984\uC774 \uBB50\uC608\uC694?"])}},"not-found":n=>{const{normalize:e}=n;return e(["\uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"])}},fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve}),ye={button:{about:n=>{const{normalize:e}=n;return e(["O nas"])},back:n=>{const{normalize:e}=n;return e(["Wr\xF3\u0107"])},go:n=>{const{normalize:e}=n;return e(["WEJD\u0179"])},home:n=>{const{normalize:e}=n;return e(["Strona g\u0142\xF3wna"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Ustaw tryb nocny"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Zmie\u0144 j\u0119zyk"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Opiniowany szablon startowy Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demonstracja dynamicznego route"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Cze\u015B\u0107, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Znany te\u017C jako"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Jak masz na imi\u0119?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Nie znaleziono"])}},ke=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ye}),we={button:{about:n=>{const{normalize:e}=n;return e(["Sobre"])},back:n=>{const{normalize:e}=n;return e(["Voltar"])},go:n=>{const{normalize:e}=n;return e(["Ir"])},home:n=>{const{normalize:e}=n;return e(["In\xEDcio"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Alternar modo escuro"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Mudar de idioma"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Modelo Opinativo de Partida de Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demonstra\xE7\xE3o de rota din\xE2mica"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Ol\xE1, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Tamb\xE9m conhecido como"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Qual \xE9 o seu nome?"])}},"not-found":n=>{const{normalize:e}=n;return e(["N\xE3o encontrado"])}},xe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we}),Se={button:{about:n=>{const{normalize:e}=n;return e(["\u041E \u0448\u0430\u0431\u043B\u043E\u043D\u0435"])},back:n=>{const{normalize:e}=n;return e(["\u041D\u0430\u0437\u0430\u0434"])},go:n=>{const{normalize:e}=n;return e(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438"])},home:n=>{const{normalize:e}=n;return e(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\u0414\u0435\u043C\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\u041F\u0440\u0438\u0432\u0435\u0442, ",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u0437\u043E\u0432\u0443\u0442?"])}},"not-found":n=>{const{normalize:e}=n;return e(["\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"])}},$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Se}),Me={button:{about:n=>{const{normalize:e}=n;return e(["Hakk\u0131mda"])},back:n=>{const{normalize:e}=n;return e(["Geri"])},go:n=>{const{normalize:e}=n;return e(["\u0130LER\u0130"])},home:n=>{const{normalize:e}=n;return e(["Anasayfa"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Karanl\u0131k modu de\u011Fi\u015Ftir"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Dilleri de\u011Fi\u015Ftir"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["G\xF6r\xFC\u015Fl\xFC Vite Ba\u015Flang\u0131\xE7 \u015Eablonu"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Dinamik rota demosu"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Merhaba, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Ayr\u0131ca \u015F\xF6yle bilinir"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Ad\u0131n\u0131z nedir?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Bulunamad\u0131"])}},Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me}),Oe={button:{about:n=>{const{normalize:e}=n;return e(["V\u1EC1"])},back:n=>{const{normalize:e}=n;return e(["Quay l\u1EA1i"])},go:n=>{const{normalize:e}=n;return e(["\u0110i"])},home:n=>{const{normalize:e}=n;return e(["Kh\u1EDFi \u0111\u1EA7u"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Chuy\u1EC3n \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 t\u1ED1i"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Thay \u0111\u1ED5i ng\xF4n ng\u1EEF"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\xDD ki\u1EBFn c\xE1 nh\xE2n Vite Template \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["B\u1EA3n gi\u1EDBi thi\u1EC7u v\u1EC1 dynamic route"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Hi, ",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["T\xEAn b\u1EA1n l\xE0 g\xEC?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Kh\xF4ng t\xECm th\u1EA5y"])}},Ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oe}),Te={button:{about:n=>{const{normalize:e}=n;return e(["\u5173\u4E8E"])},back:n=>{const{normalize:e}=n;return e(["\u8FD4\u56DE"])},go:n=>{const{normalize:e}=n;return e(["\u786E\u5B9A"])},home:n=>{const{normalize:e}=n;return e(["\u9996\u9875"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\u5207\u6362\u8BED\u8A00"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\u56FA\u6267\u5DF1\u89C1\u7684 Vite \u9879\u76EE\u6A21\u677F"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\u4F60\u597D\uFF0C",o(t("name"))])},aka:n=>{const{normalize:e}=n;return e(["\u4E5F\u53EB"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"])}},"not-found":n=>{const{normalize:e}=n;return e(["\u672A\u627E\u5230\u9875\u9762"])}},Re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Te});const Ee=Object.fromEntries(Object.entries({"../../locales/de.yml":le,"../../locales/en.yml":se,"../../locales/es.yml":ce,"../../locales/fr.yml":_e,"../../locales/id.yml":ze,"../../locales/it.yml":ge,"../../locales/ja.yml":be,"../../locales/ko.yml":fe,"../../locales/pl.yml":ke,"../../locales/pt-BR.yml":xe,"../../locales/ru.yml":$e,"../../locales/tr.yml":Ce,"../../locales/vi.yml":Ae,"../../locales/zh-CN.yml":Re}).map(([n,e])=>{const o=n.endsWith(".yaml");return[n.slice(14,o?-5:-4),e.default]})),Ne=({app:n})=>{const e=q({legacy:!1,locale:"en",messages:Ee});n.use(e)};var Le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Ne});const Pe=({isClient:n,router:e})=>{n&&(e.beforeEach(()=>{E.start()}),e.afterEach(()=>{E.done()}))};var je=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Pe});const De=({isClient:n,initialState:e,app:o})=>{const t=G();o.use(t),n?t.state.value=e.pinia||{}:e.pinia=t.state.value};var Ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:De});const Ie="modulepreload",j={},He="/",p=function(e,o){return!o||o.length===0?e():Promise.all(o.map(t=>{if(t=`${He}${t}`,t in j)return;j[t]=!0;const r=t.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${c}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Ie,r||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),r)return new Promise((v,g)=>{s.addEventListener("load",v),s.addEventListener("error",g)})})).then(()=>e())},Fe=({isClient:n,router:e})=>{!n||e.isReady().then(async()=>{const{registerSW:o}=await p(()=>import("./virtual_pwa-register.932ceed5.js"),[]);o({immediate:!0})})};var Be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Fe});var D={},V=(n,e)=>{for(const[o,t]of e)n[o]=t;return n};const We=n=>(Q("data-v-509556ab"),n=n(),X(),n),Je=We(()=>i("p",{class:"font-bold text-4xl mb-8"}," NFC-Dex ",-1)),Ye={key:0,class:"flex justify-center items-center gap-4 flex-wrap"},Ue={key:1},qe={class:"text-sm opacity-75"},Ge={class:"m-4"},Ke={class:"grid gap-4 max-w-2xl mx-auto dex-grid"},Ze={class:"rounded-full p-2 text-xs opacity-50"},Qe=["src"],Xe=["onClick"],I=S({setup(n){const e=$([]),o=[{name:"Bulbasaur",id:1,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",type:"grass"},{name:"Charmander",id:4,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",type:"fire"},{name:"Squirtle",id:7,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",type:"water"},{name:"Pikachu",id:25,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",type:"electric"},{name:"Eevee",id:133,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",type:"normal"},{name:"Jigglypuff",id:39,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",type:"normal"},{name:"Mew",id:151,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",type:"psychic"}],t=$(!0),r=$(""),c=a=>e.value.find(m=>m.id===a);"NDEFReader"in window&&(t.value=!0,console.log(window.NDEFReader));const s=a=>new Promise(l=>setTimeout(l,a)),v=async()=>{r.value="Preparing to write";try{const a=new NDEFReader;r.value=a,await s(2500);const l={recordType:"text",data:"Pancho"};r.value=l,await s(2500),await a.write({records:[l]}),r.value=`Wrote -${l}`}catch(a){r.value=`ERROR:::${a}`}},g=async()=>{r.value="Preparing to write";try{const a=new NDEFReader;r.value=a,await s(2500);const l={recordType:"url",data:"https://www.pokemon.com/us/"};r.value=l,await s(2500),await a.write({records:[l]}),r.value=`Wrote -${l}`}catch(a){r.value=`ERROR:::${a}`}},f=async()=>{r.value="Preparing to write";try{const a=new NDEFReader,l=new TextEncoder;r.value=a,await s(2500),r.value=l,await s(2500),r.value=e.value,await s(2500);const m={recordType:"mime",mediaType:"application/json",data:l.encode(JSON.stringify(e.value))};r.value=m,await s(2500),await a.write({records:[m]}),r.value=`Wrote -${m}`}catch(a){r.value=`ERROR:::${a}`}},y=async()=>{try{const a=new NDEFReader;await a.scan(),r.value="Scaning...",a.addEventListener("reading",({message:l,serialNumber:m})=>{r.value=`${m}: ${JSON.stringify(l.records,null,2)}`})}catch(a){r.value=`Error! Scan failed to start: ${a}.`}},k=async()=>{const a=new TextDecoder;r.value="Scaning...";const l=new NDEFReader;await l.scan(),l.addEventListener("reading",({message:m,serialNumber:F})=>{for(const h of m.records)switch(r.value+="<br>",h.recordType){case"text":r.value+=`Text: ${a.decode(h.data)} (${h.lang})`;break;case"url":r.value+=`URL: ${a.decode(h.data)}`;break;case"mime":h.mediaType==="application/json"?r.value+=`JSON: ${JSON.parse(a.decode(h.data))}`:r.value+="Media not handled";break;default:r.value+="Record not handled"}})},{t:w}=N(),x=a=>{e.value.push(a),console.log(`Added ${a.name}`),console.log("Your Dex"),console.log(e.value)};return(a,l)=>(u(),_("div",null,[Je,t.value?(u(),_("div",Ye,[i("button",{class:"rounded border px-6 py-2",onClick:l[0]||(l[0]=m=>f())}," Write "),i("button",{class:"rounded border px-6 py-2",onClick:l[1]||(l[1]=m=>v())}," Write text "),i("button",{class:"rounded border px-6 py-2",onClick:l[2]||(l[2]=m=>g())}," Write url "),i("button",{class:"rounded border px-6 py-2",onClick:l[3]||(l[3]=m=>y())}," Read "),i("button",{class:"rounded border px-6 py-2",onClick:l[4]||(l[4]=m=>k())}," Read All ")])):(u(),_("div",Ue,[i("em",qe,b(z(w)("no-nfc")),1)])),i("div",Ge,b(r.value),1),i("section",Ke,[(u(),_(K,null,Z(o,m=>i("article",{key:m.id,class:"bg-gray-200 dark:bg-gray-800 rounded"},[i("small",Ze,b(c(m.id)?"Owned":null)+" "+b(m.id),1),i("h2",null,b(m.name),1),i("img",{class:"w-24 h-24 mx-auto",src:m.img,alt:"{{ pokemon.name }}"},null,8,Qe),i("p",null,b(m.type),1),i("button",{class:"rounded-full bg-red-600 text-white border-2 border-white hover:shadow hover:bg-red-400 px-3 py-1 my-2",onClick:F=>x(m)}," Add to Dex ",8,Xe)])),64))])]))}});typeof D=="function"&&D(I);var en=V(I,[["__scopeId","data-v-509556ab"]]);const nn=[{name:"README",path:"/readme",component:()=>p(()=>import("./README.43da3508.js"),["assets/README.43da3508.js","assets/vendor.b530ffe5.js"]),props:!0},{name:"about",path:"/about",component:()=>p(()=>import("./about.4e1eb4e7.js"),["assets/about.4e1eb4e7.js","assets/vendor.b530ffe5.js"]),props:!0},{name:"index",path:"/",component:en,props:!0,meta:{layout:"home"}},{name:"hi-name",path:"/hi/:name",component:()=>p(()=>import("./[name].a65c7b60.js"),["assets/[name].a65c7b60.js","assets/vendor.b530ffe5.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>p(()=>import("./[...all].7479273a.js"),["assets/[...all].7479273a.js","assets/vendor.b530ffe5.js"]),props:!0,meta:{layout:404}}],on={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},tn=i("path",{d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z","fill-rule":"evenodd",fill:"currentColor"},null,-1),rn=[tn];function an(n,e){return u(),_("svg",on,rn)}var ln={name:"carbon-logo-github",render:an};const sn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},mn=i("path",{d:"M28 6v20H4V6h24m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",fill:"currentColor"},null,-1),cn=i("path",{d:"M6 8h10v2H6z",fill:"currentColor"},null,-1),un=i("path",{d:"M6 12h10v2H6z",fill:"currentColor"},null,-1),_n=i("path",{d:"M6 16h6v2H6z",fill:"currentColor"},null,-1),dn=[mn,cn,un,_n];function zn(n,e){return u(),_("svg",sn,dn)}var pn={name:"carbon-dicom-overlay",render:zn};const gn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},hn=L('<path d="M18 19h6v2h-6z" fill="currentColor"></path><path d="M18 15h12v2H18z" fill="currentColor"></path><path d="M18 11h12v2H18z" fill="currentColor"></path><path d="M14 21v-2H9v-2H7v2H2v2h8.215a8.591 8.591 0 0 1-2.216 3.977A9.273 9.273 0 0 1 6.552 23H4.333a10.855 10.855 0 0 0 2.145 3.297A14.658 14.658 0 0 1 3 28.127L3.702 30a16.42 16.42 0 0 0 4.29-2.336A16.488 16.488 0 0 0 12.299 30L13 28.127A14.664 14.664 0 0 1 9.523 26.3a10.313 10.313 0 0 0 2.729-5.3z" fill="currentColor"></path><path d="M11.167 13h2.166L8.75 2H6.583L2 13h2.166L5 11h5.333zM5.833 9l1.833-4.4L9.5 9z" fill="currentColor"></path>',5),bn=[hn];function vn(n,e){return u(),_("svg",gn,bn)}var fn={name:"carbon-language",render:vn};const yn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},kn=L('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),wn=[kn];function xn(n,e){return u(),_("svg",yn,wn)}var Sn={name:"carbon-sun",render:xn};const $n={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Mn=i("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Cn=[Mn];function On(n,e){return u(),_("svg",$n,Cn)}var An={name:"carbon-moon",render:On};const Tn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Rn=i("path",{d:"M27.562 26L17.17 8.928l2.366-3.888L17.828 4L16 7.005L14.17 4l-1.708 1.04l2.366 3.888L4.438 26H2v2h28v-2zM16 10.85L25.22 26H17v-8h-2v8H6.78z",fill:"currentColor"},null,-1),En=[Rn];function Nn(n,e){return u(),_("svg",Tn,En)}var Ln={name:"carbon-campsite",render:Nn};const H=ee(),Pn=ne(H),jn={class:"text-xl mt-6"},Dn=["title"],Vn=["title"],In={class:"icon-btn mx-2",rel:"noreferrer",href:"https://github.com/antfu/vitesse",target:"_blank",title:"GitHub"},Hn=S({setup(n){const{t:e,availableLocales:o,locale:t}=N(),r=()=>{const c=o;t.value=c[(c.indexOf(t.value)+1)%c.length]};return(c,s)=>{const v=Ln,g=M("router-link"),f=An,y=Sn,k=fn,w=pn,x=ln;return u(),_("nav",jn,[d(g,{class:"icon-btn mx-2",to:"/",title:z(e)("button.home")},{default:P(()=>[d(v)]),_:1},8,["title"]),i("button",{class:"icon-btn mx-2 !outline-none",title:z(e)("button.toggle_dark"),onClick:s[0]||(s[0]=a=>z(Pn)())},[z(H)?(u(),C(f,{key:0})):(u(),C(y,{key:1}))],8,Dn),i("a",{class:"icon-btn mx-2",title:z(e)("button.toggle_langs"),onClick:r},[d(k)],8,Vn),d(g,{class:"icon-btn mx-2",to:"/about",title:z(e)("button.about")},{default:P(()=>[d(w)]),_:1},8,["title"]),i("a",In,[d(x)])])}}}),Fn={},Bn={class:"px-4 py-10 text-center text-gray-700 dark:text-gray-200"},Wn=i("div",{class:"mt-5 mx-auto text-center opacity-25 text-sm"}," [Default Layout] ",-1);function Jn(n,e){const o=M("router-view"),t=Hn;return u(),_("main",Bn,[d(o),d(t),Wn])}var Yn=V(Fn,[["render",Jn]]);const Un={"404":()=>p(()=>import("./404.4efdc175.js"),["assets/404.4efdc175.js","assets/vendor.b530ffe5.js"]),default:Yn,home:()=>p(()=>import("./home.1807ccfa.js"),["assets/home.1807ccfa.js","assets/vendor.b530ffe5.js"])};function qn(n){return n.map(e=>{var o;return{path:e.path,component:Un[((o=e.meta)==null?void 0:o.layout)||"default"],children:[R(T({},e),{path:""})]}})}const Gn=S({setup(n){return oe({title:"Vitesse",meta:[{name:"description",content:"Opinionated Vite Starter Template"}]}),(e,o)=>{const t=M("router-view");return u(),C(t)}}});const Kn=qn(nn);te(Gn,{routes:Kn},n=>{Object.values({"./modules/i18n.ts":Le,"./modules/nprogress.ts":je,"./modules/pinia.ts":Ve,"./modules/pwa.ts":Be}).map(e=>{var o;return(o=e.install)==null?void 0:o.call(e,n)})});export{pn as _,V as a,Hn as b};
