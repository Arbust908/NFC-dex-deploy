var B=Object.defineProperty,F=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var O=(n,e,o)=>e in n?B(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,A=(n,e)=>{for(var o in e||(e={}))W.call(e,o)&&O(n,o,e[o]);if(C)for(var o of C(e))Y.call(e,o)&&O(n,o,e[o]);return n},T=(n,e)=>F(n,J(e));import{c as U,N as E,a as q,d as x,r as S,u as N,b as _,e as a,t as b,f as p,F as G,g as K,p as Z,h as Q,o as u,i as R,j as X,k as ee,l as M,m as d,w as j,n as $,q as ne,V as oe}from"./vendor.b530ffe5.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}};te();var re={button:{about:n=>{const{normalize:e}=n;return e(["\xDCber"])},back:n=>{const{normalize:e}=n;return e(["Zur\xFCck"])},go:n=>{const{normalize:e}=n;return e(["Los"])},home:n=>{const{normalize:e}=n;return e(["Startseite"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Dunkelmodus umschalten"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Sprachen \xE4ndern"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Vite Startvorlage mit Vorlieben"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo einer dynamischen Route"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Hi, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Auch bekannt als"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Wie hei\xDFt du?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Nicht gefunden"])}},ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re}),le={button:{about:n=>{const{normalize:e}=n;return e(["About"])},back:n=>{const{normalize:e}=n;return e(["Back"])},go:n=>{const{normalize:e}=n;return e(["GO"])},home:n=>{const{normalize:e}=n;return e(["Home"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Toggle dark mode"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Change languages"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Opinionated Vite Starter Template"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo of dynamic route"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Hi, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Also known as"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["What's your name?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Not found"])},"no-nfc":n=>{const{normalize:e}=n;return e(["Not able to use NFC"])}},ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le}),se={button:{about:n=>{const{normalize:e}=n;return e(["Acerca de"])},back:n=>{const{normalize:e}=n;return e(["Atr\xE1s"])},go:n=>{const{normalize:e}=n;return e(["Ir"])},home:n=>{const{normalize:e}=n;return e(["Inicio"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Alternar modo oscuro"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Cambiar idiomas"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Plantilla de Inicio de Vite Dogm\xE1tica"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo de ruta din\xE1mica"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\xA1Hola, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Tambi\xE9n conocido como"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\xBFC\xF3mo te llamas?"])}},"not-found":n=>{const{normalize:e}=n;return e(["No se ha encontrado"])},"no-nfc":n=>{const{normalize:e}=n;return e(["No podes usat NFC"])}},me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se}),ce={button:{about:n=>{const{normalize:e}=n;return e(["\xC0 propos de"])},back:n=>{const{normalize:e}=n;return e(["Retour"])},go:n=>{const{normalize:e}=n;return e(["Essayer"])},home:n=>{const{normalize:e}=n;return e(["Accueil"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Basculer en mode sombre"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Changer de langue"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Exemple d'application Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["D\xE9mo de route dynamique"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Salut, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Aussi connu sous le nom de"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Comment t'appelles-tu ?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Page non trouv\xE9e"])}},ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ce}),_e={button:{about:n=>{const{normalize:e}=n;return e(["Tentang"])},back:n=>{const{normalize:e}=n;return e(["Kembali"])},go:n=>{const{normalize:e}=n;return e(["Pergi"])},home:n=>{const{normalize:e}=n;return e(["Beranda"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Ubah ke mode gelap"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Ubah bahasa"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Template awal vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Contoh rute dinamik"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Halo, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Juga diketahui sebagai"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Siapa nama anda?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Tidak ditemukan"])}},de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e}),ze={button:{about:n=>{const{normalize:e}=n;return e(["Su di me"])},back:n=>{const{normalize:e}=n;return e(["Indietro"])},go:n=>{const{normalize:e}=n;return e(["Vai"])},home:n=>{const{normalize:e}=n;return e(["Home"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Attiva/disattiva modalit\xE0 scura"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Cambia lingua"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Modello per una Applicazione Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demo di rotta dinamica"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Ciao, ",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Come ti chiami?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Non trovato"])}},pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ze}),ge={button:{about:n=>{const{normalize:e}=n;return e(["\u3053\u308C\u306F\uFF1F"])},back:n=>{const{normalize:e}=n;return e(["\u623B\u308B"])},go:n=>{const{normalize:e}=n;return e(["\u9032\u3080"])},home:n=>{const{normalize:e}=n;return e(["\u30DB\u30FC\u30E0"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\u30C0\u30FC\u30AF\u30E2\u30FC\u30C9\u5207\u308A\u66FF\u3048"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\u8A00\u8A9E\u5207\u308A\u66FF\u3048"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\u56FA\u57F7\u3055\u308C\u305F Vite \u30B9\u30BF\u30FC\u30BF\u30FC\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\u52D5\u7684\u30EB\u30FC\u30C8\u306E\u30C7\u30E2"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\u3053\u3093\u306B\u3061\u306F\u3001",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\u541B\u306E\u540D\u306F\u3002"])}},"not-found":n=>{const{normalize:e}=n;return e(["\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F"])}},he=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge}),be={button:{about:n=>{const{normalize:e}=n;return e(["\uC18C\uAC1C"])},back:n=>{const{normalize:e}=n;return e(["\uB4A4\uB85C\uAC00\uAE30"])},go:n=>{const{normalize:e}=n;return e(["\uC774\uB3D9"])},home:n=>{const{normalize:e}=n;return e(["\uD648"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\uB2E4\uD06C\uBAA8\uB4DC \uD1A0\uAE00"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\uC5B8\uC5B4 \uBCC0\uACBD"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Vite \uC560\uD50C\uB9AC\uCF00\uC774\uC158 \uD15C\uD50C\uB9BF"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\uB2E4\uC774\uB098\uBBF9 \uB77C\uC6B0\uD2B8 \uB370\uBAA8"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\uC548\uB155, ",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\uC774\uB984\uC774 \uBB50\uC608\uC694?"])}},"not-found":n=>{const{normalize:e}=n;return e(["\uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4"])}},ve=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:be}),fe={button:{about:n=>{const{normalize:e}=n;return e(["O nas"])},back:n=>{const{normalize:e}=n;return e(["Wr\xF3\u0107"])},go:n=>{const{normalize:e}=n;return e(["WEJD\u0179"])},home:n=>{const{normalize:e}=n;return e(["Strona g\u0142\xF3wna"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Ustaw tryb nocny"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Zmie\u0144 j\u0119zyk"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Opiniowany szablon startowy Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demonstracja dynamicznego route"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Cze\u015B\u0107, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Znany te\u017C jako"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Jak masz na imi\u0119?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Nie znaleziono"])}},ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe}),ke={button:{about:n=>{const{normalize:e}=n;return e(["Sobre"])},back:n=>{const{normalize:e}=n;return e(["Voltar"])},go:n=>{const{normalize:e}=n;return e(["Ir"])},home:n=>{const{normalize:e}=n;return e(["In\xEDcio"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Alternar modo escuro"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Mudar de idioma"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["Modelo Opinativo de Partida de Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Demonstra\xE7\xE3o de rota din\xE2mica"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Ol\xE1, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Tamb\xE9m conhecido como"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Qual \xE9 o seu nome?"])}},"not-found":n=>{const{normalize:e}=n;return e(["N\xE3o encontrado"])}},we=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ke}),xe={button:{about:n=>{const{normalize:e}=n;return e(["\u041E \u0448\u0430\u0431\u043B\u043E\u043D\u0435"])},back:n=>{const{normalize:e}=n;return e(["\u041D\u0430\u0437\u0430\u0434"])},go:n=>{const{normalize:e}=n;return e(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438"])},home:n=>{const{normalize:e}=n;return e(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0442\u0435\u043C\u043D\u044B\u0439 \u0440\u0435\u0436\u0438\u043C"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u044F\u0437\u044B\u043A"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D Vite"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\u0414\u0435\u043C\u043E \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\u041F\u0440\u0438\u0432\u0435\u0442, ",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u0437\u043E\u0432\u0443\u0442?"])}},"not-found":n=>{const{normalize:e}=n;return e(["\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"])}},Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe}),Me={button:{about:n=>{const{normalize:e}=n;return e(["Hakk\u0131mda"])},back:n=>{const{normalize:e}=n;return e(["Geri"])},go:n=>{const{normalize:e}=n;return e(["\u0130LER\u0130"])},home:n=>{const{normalize:e}=n;return e(["Anasayfa"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Karanl\u0131k modu de\u011Fi\u015Ftir"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Dilleri de\u011Fi\u015Ftir"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["G\xF6r\xFC\u015Fl\xFC Vite Ba\u015Flang\u0131\xE7 \u015Eablonu"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["Dinamik rota demosu"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Merhaba, ",o(t("name")),"!"])},aka:n=>{const{normalize:e}=n;return e(["Ayr\u0131ca \u015F\xF6yle bilinir"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["Ad\u0131n\u0131z nedir?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Bulunamad\u0131"])}},$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Me}),Ce={button:{about:n=>{const{normalize:e}=n;return e(["V\u1EC1"])},back:n=>{const{normalize:e}=n;return e(["Quay l\u1EA1i"])},go:n=>{const{normalize:e}=n;return e(["\u0110i"])},home:n=>{const{normalize:e}=n;return e(["Kh\u1EDFi \u0111\u1EA7u"])},toggle_dark:n=>{const{normalize:e}=n;return e(["Chuy\u1EC3n \u0111\u1ED5i ch\u1EBF \u0111\u1ED9 t\u1ED1i"])},toggle_langs:n=>{const{normalize:e}=n;return e(["Thay \u0111\u1ED5i ng\xF4n ng\u1EEF"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\xDD ki\u1EBFn c\xE1 nh\xE2n Vite Template \u0111\u1EC3 b\u1EAFt \u0111\u1EA7u"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["B\u1EA3n gi\u1EDBi thi\u1EC7u v\u1EC1 dynamic route"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["Hi, ",o(t("name")),"!"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["T\xEAn b\u1EA1n l\xE0 g\xEC?"])}},"not-found":n=>{const{normalize:e}=n;return e(["Kh\xF4ng t\xECm th\u1EA5y"])}},Oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ce}),Ae={button:{about:n=>{const{normalize:e}=n;return e(["\u5173\u4E8E"])},back:n=>{const{normalize:e}=n;return e(["\u8FD4\u56DE"])},go:n=>{const{normalize:e}=n;return e(["\u786E\u5B9A"])},home:n=>{const{normalize:e}=n;return e(["\u9996\u9875"])},toggle_dark:n=>{const{normalize:e}=n;return e(["\u5207\u6362\u6DF1\u8272\u6A21\u5F0F"])},toggle_langs:n=>{const{normalize:e}=n;return e(["\u5207\u6362\u8BED\u8A00"])}},intro:{desc:n=>{const{normalize:e}=n;return e(["\u56FA\u6267\u5DF1\u89C1\u7684 Vite \u9879\u76EE\u6A21\u677F"])},"dynamic-route":n=>{const{normalize:e}=n;return e(["\u52A8\u6001\u8DEF\u7531\u6F14\u793A"])},hi:n=>{const{normalize:e,interpolate:o,named:t}=n;return e(["\u4F60\u597D\uFF0C",o(t("name"))])},aka:n=>{const{normalize:e}=n;return e(["\u4E5F\u53EB"])},"whats-your-name":n=>{const{normalize:e}=n;return e(["\u8F93\u5165\u4F60\u7684\u540D\u5B57"])}},"not-found":n=>{const{normalize:e}=n;return e(["\u672A\u627E\u5230\u9875\u9762"])}},Te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ae});const Ee=Object.fromEntries(Object.entries({"../../locales/de.yml":ae,"../../locales/en.yml":ie,"../../locales/es.yml":me,"../../locales/fr.yml":ue,"../../locales/id.yml":de,"../../locales/it.yml":pe,"../../locales/ja.yml":he,"../../locales/ko.yml":ve,"../../locales/pl.yml":ye,"../../locales/pt-BR.yml":we,"../../locales/ru.yml":Se,"../../locales/tr.yml":$e,"../../locales/vi.yml":Oe,"../../locales/zh-CN.yml":Te}).map(([n,e])=>{const o=n.endsWith(".yaml");return[n.slice(14,o?-5:-4),e.default]})),Ne=({app:n})=>{const e=U({legacy:!1,locale:"en",messages:Ee});n.use(e)};var Re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Ne});const je=({isClient:n,router:e})=>{n&&(e.beforeEach(()=>{E.start()}),e.afterEach(()=>{E.done()}))};var Le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:je});const Pe=({isClient:n,initialState:e,app:o})=>{const t=q();o.use(t),n?t.state.value=e.pinia||{}:e.pinia=t.state.value};var De=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:Pe});const Ve="modulepreload",L={},Ie="/",g=function(e,o){return!o||o.length===0?e():Promise.all(o.map(t=>{if(t=`${Ie}${t}`,t in L)return;L[t]=!0;const r=t.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${c}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Ve,r||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),r)return new Promise((v,h)=>{s.addEventListener("load",v),s.addEventListener("error",h)})})).then(()=>e())},He=({isClient:n,router:e})=>{!n||e.isReady().then(async()=>{const{registerSW:o}=await g(()=>import("./virtual_pwa-register.932ceed5.js"),[]);o({immediate:!0})})};var Be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",install:He});var P={},D=(n,e)=>{for(const[o,t]of e)n[o]=t;return n};const Fe=n=>(Z("data-v-7e2eb5be"),n=n(),Q(),n),Je=Fe(()=>a("p",{class:"text-4xl mb-8"},[a("strong",{class:"font-bold"},"NFC"),a("span",{class:"text-2xl"},"Dex")],-1)),We={key:0,class:"flex justify-center items-center gap-4 flex-wrap"},Ye={key:1},Ue={class:"text-sm opacity-75"},qe={class:"m-4"},Ge={class:"grid gap-4 max-w-2xl mx-auto dex-grid"},Ke={class:"rounded-full p-2 text-xs opacity-50"},Ze=["src"],Qe=["onClick"],V=x({setup(n){const e=S([]),o=[{name:"Bulbasaur",id:1,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",type:"grass"},{name:"Charmander",id:4,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",type:"fire"},{name:"Squirtle",id:7,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",type:"water"},{name:"Pikachu",id:25,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",type:"electric"},{name:"Eevee",id:133,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",type:"normal"},{name:"Jigglypuff",id:39,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",type:"normal"},{name:"Mew",id:151,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",type:"psychic"},{name:"Mewtwo",id:150,img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",type:"psychic"}],t=S(!0),r=S(""),c=l=>e.value.find(i=>i.id===l);"NDEFReader"in window&&(t.value=!0,console.log(window.NDEFReader));const s=l=>new Promise(m=>setTimeout(m,l)),v=async()=>{r.value="Preparing to write";try{const l=new NDEFReader,m=new TextEncoder;r.value=e.value,await s(2500),r.value=JSON.stringify({dex:e.value}),await s(2500);const i=[{recordType:"mime",mediaType:"application/json",data:m.encode(JSON.stringify({name:o[0].name,id:o[0].id,img:o[0].img,type:o[0].type}))}];r.value=i,await s(2500),await l.write({records:i},{overwrite:!0}),r.value=`Wrote -${i}`}catch(l){r.value=`ERROR:::${l}`}},h=async()=>{r.value="Preparing to write";try{const l=new NDEFReader,m=new TextEncoder;r.value=e.value,await s(2500),r.value=JSON.stringify({dex:e.value}),await s(2500);const i=[{recordType:"mime",mediaType:"application/json",data:m.encode(JSON.stringify({dex:e.value}))}];r.value=i,await s(2500),await l.write({records:i},{overwrite:!0}),r.value=`Wrote -${i}`}catch(l){r.value=`ERROR:::${l}`}},f=async()=>{try{const l=new NDEFReader;await l.scan(),r.value="Scaning...",l.addEventListener("reading",({message:m,serialNumber:i})=>{r.value=`${i}: ${JSON.stringify(m.records,null,2)}`})}catch(l){r.value=`Error! Scan failed to start: ${l}.`}},y=async()=>{const l=new TextDecoder;r.value="Scaning...";const m=new NDEFReader;await m.scan(),m.addEventListener("reading",({message:i,serialNumber:H})=>{for(const z of i.records)switch(r.value+="--------",r.value+=z.recordType,r.value+=`
      
      `,z.recordType){case"text":r.value+=`Text: ${l.decode(z.data)} (${z.lang})`;break;case"url":r.value+=`URL: ${l.decode(z.data)}`;break;case"mime":z.mediaType==="application/json"?r.value+=`JSON: ${JSON.parse(l.decode(z.data))}`:r.value+="Media not handled";break;default:r.value+="Record not handled"}})},{t:k}=N(),w=l=>{e.value.push(l),console.log(`Added ${l.name}`),console.log("Your Dex"),console.log(e.value)};return(l,m)=>(u(),_("div",null,[Je,t.value?(u(),_("div",We,[a("button",{class:"rounded border px-6 py-2",onClick:m[0]||(m[0]=i=>h())}," Write "),a("button",{class:"rounded border px-6 py-2",onClick:m[1]||(m[1]=i=>v())}," Buba! "),a("button",{class:"rounded border px-6 py-2",onClick:m[2]||(m[2]=i=>f())}," Read "),a("button",{class:"rounded border px-6 py-2",onClick:m[3]||(m[3]=i=>y())}," Read All ")])):(u(),_("div",Ye,[a("em",Ue,b(p(k)("no-nfc")),1)])),a("div",qe,b(r.value),1),a("section",Ge,[(u(),_(G,null,K(o,i=>a("article",{key:i.id,class:"bg-gray-200 dark:bg-gray-800 rounded"},[a("small",Ke,b(c(i.id)?"Owned":null)+" "+b(i.id),1),a("h2",null,b(i.name),1),a("img",{class:"w-24 h-24 mx-auto",src:i.img,alt:"{{ pokemon.name }}"},null,8,Ze),a("p",null,b(i.type),1),a("button",{class:"rounded-full bg-red-600 text-white border-2 border-white hover:shadow hover:bg-red-400 px-3 py-1 my-2",onClick:H=>w(i)}," Add to Dex ",8,Qe)])),64))])]))}});typeof P=="function"&&P(V);var Xe=D(V,[["__scopeId","data-v-7e2eb5be"]]);const en=[{name:"README",path:"/readme",component:()=>g(()=>import("./README.43da3508.js"),["assets/README.43da3508.js","assets/vendor.b530ffe5.js"]),props:!0},{name:"about",path:"/about",component:()=>g(()=>import("./about.c3030bb1.js"),["assets/about.c3030bb1.js","assets/vendor.b530ffe5.js"]),props:!0},{name:"index",path:"/",component:Xe,props:!0,meta:{layout:"home"}},{name:"hi-name",path:"/hi/:name",component:()=>g(()=>import("./[name].a65c7b60.js"),["assets/[name].a65c7b60.js","assets/vendor.b530ffe5.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>g(()=>import("./[...all].7479273a.js"),["assets/[...all].7479273a.js","assets/vendor.b530ffe5.js"]),props:!0,meta:{layout:404}}],nn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},on=a("path",{d:"M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z","fill-rule":"evenodd",fill:"currentColor"},null,-1),tn=[on];function rn(n,e){return u(),_("svg",nn,tn)}var an={name:"carbon-logo-github",render:rn};const ln={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},sn=a("path",{d:"M28 6v20H4V6h24m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z",fill:"currentColor"},null,-1),mn=a("path",{d:"M6 8h10v2H6z",fill:"currentColor"},null,-1),cn=a("path",{d:"M6 12h10v2H6z",fill:"currentColor"},null,-1),un=a("path",{d:"M6 16h6v2H6z",fill:"currentColor"},null,-1),_n=[sn,mn,cn,un];function dn(n,e){return u(),_("svg",ln,_n)}var zn={name:"carbon-dicom-overlay",render:dn};const pn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},gn=R('<path d="M18 19h6v2h-6z" fill="currentColor"></path><path d="M18 15h12v2H18z" fill="currentColor"></path><path d="M18 11h12v2H18z" fill="currentColor"></path><path d="M14 21v-2H9v-2H7v2H2v2h8.215a8.591 8.591 0 0 1-2.216 3.977A9.273 9.273 0 0 1 6.552 23H4.333a10.855 10.855 0 0 0 2.145 3.297A14.658 14.658 0 0 1 3 28.127L3.702 30a16.42 16.42 0 0 0 4.29-2.336A16.488 16.488 0 0 0 12.299 30L13 28.127A14.664 14.664 0 0 1 9.523 26.3a10.313 10.313 0 0 0 2.729-5.3z" fill="currentColor"></path><path d="M11.167 13h2.166L8.75 2H6.583L2 13h2.166L5 11h5.333zM5.833 9l1.833-4.4L9.5 9z" fill="currentColor"></path>',5),hn=[gn];function bn(n,e){return u(),_("svg",pn,hn)}var vn={name:"carbon-language",render:bn};const fn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},yn=R('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),kn=[yn];function wn(n,e){return u(),_("svg",fn,kn)}var xn={name:"carbon-sun",render:wn};const Sn={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Mn=a("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),$n=[Mn];function Cn(n,e){return u(),_("svg",Sn,$n)}var On={name:"carbon-moon",render:Cn};const An={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},Tn=a("path",{d:"M27.562 26L17.17 8.928l2.366-3.888L17.828 4L16 7.005L14.17 4l-1.708 1.04l2.366 3.888L4.438 26H2v2h28v-2zM16 10.85L25.22 26H17v-8h-2v8H6.78z",fill:"currentColor"},null,-1),En=[Tn];function Nn(n,e){return u(),_("svg",An,En)}var Rn={name:"carbon-campsite",render:Nn};const I=X(),jn=ee(I),Ln={class:"text-xl mt-6"},Pn=["title"],Dn=["title"],Vn={class:"icon-btn mx-2",rel:"noreferrer",href:"https://github.com/antfu/vitesse",target:"_blank",title:"GitHub"},In=x({setup(n){const{t:e,availableLocales:o,locale:t}=N(),r=()=>{const c=o;t.value=c[(c.indexOf(t.value)+1)%c.length]};return(c,s)=>{const v=Rn,h=M("router-link"),f=On,y=xn,k=vn,w=zn,l=an;return u(),_("nav",Ln,[d(h,{class:"icon-btn mx-2",to:"/",title:p(e)("button.home")},{default:j(()=>[d(v)]),_:1},8,["title"]),a("button",{class:"icon-btn mx-2 !outline-none",title:p(e)("button.toggle_dark"),onClick:s[0]||(s[0]=m=>p(jn)())},[p(I)?(u(),$(f,{key:0})):(u(),$(y,{key:1}))],8,Pn),a("a",{class:"icon-btn mx-2",title:p(e)("button.toggle_langs"),onClick:r},[d(k)],8,Dn),d(h,{class:"icon-btn mx-2",to:"/about",title:p(e)("button.about")},{default:j(()=>[d(w)]),_:1},8,["title"]),a("a",Vn,[d(l)])])}}}),Hn={},Bn={class:"px-4 py-10 text-center text-gray-700 dark:text-gray-200"},Fn=a("div",{class:"mt-5 mx-auto text-center opacity-25 text-sm"}," [Default Layout] ",-1);function Jn(n,e){const o=M("router-view"),t=In;return u(),_("main",Bn,[d(o),d(t),Fn])}var Wn=D(Hn,[["render",Jn]]);const Yn={"404":()=>g(()=>import("./404.4efdc175.js"),["assets/404.4efdc175.js","assets/vendor.b530ffe5.js"]),default:Wn,home:()=>g(()=>import("./home.7bbd4437.js"),["assets/home.7bbd4437.js","assets/vendor.b530ffe5.js"])};function Un(n){return n.map(e=>{var o;return{path:e.path,component:Yn[((o=e.meta)==null?void 0:o.layout)||"default"],children:[T(A({},e),{path:""})]}})}const qn=x({setup(n){return ne({title:"Vitesse",meta:[{name:"description",content:"Opinionated Vite Starter Template"}]}),(e,o)=>{const t=M("router-view");return u(),$(t)}}});const Gn=Un(en);oe(qn,{routes:Gn},n=>{Object.values({"./modules/i18n.ts":Re,"./modules/nprogress.ts":Le,"./modules/pinia.ts":De,"./modules/pwa.ts":Be}).map(e=>{var o;return(o=e.install)==null?void 0:o.call(e,n)})});export{zn as _,D as a,In as b};
