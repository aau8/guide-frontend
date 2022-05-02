(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var a=t.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var l=a.getElementsByTagName("script");l.length&&(e=l[l.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})(),t.p;const e=document.querySelector(".s-catalog__list");e.innerHTML=Object.entries(catalog).map((([t,e])=>`\n    <div class="sc-block">\n        <div class="sc-block-header">\n            <h3 class="title_h3 sc-block-header__title">${t}</h3>\n        </div>\n        <div class="sc-block__list">${Object.entries(e).map((([t,e])=>{const a=`https%3A%2F%2F${config.githubNick}.github.io%2F${config.titleRep}%2F${e}`;return`\n        <div class="sc-card" id="page-${e.replace(".html","")}">\n            <div class="sc-card__header">\n                <a href="./${e}" class="sc-card__header-content">\n                    <h4 class="sc-card__title">${t}</h4> \n                    <p class="sc-card__url">${e}</p>\n                </a>\n                <div class="sc-card__tools">\n                    <a href="https://validator.w3.org/nu/?doc=${a}" class="icon icon_fill sc-card__validator">\n                        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n                            <path d="M4.56047 14L0 0H2.1811L4.75875 7.86301L6.34501 2.87671L5.3536 0H7.33641L10.1124 8.24658L12.69 0H19.6299V1.53425L17.2505 5.36986C17.2505 5.36986 19.0908 6.5886 19.6299 7.86301C20.1576 9.11075 20.0879 10.0418 19.6299 11.3151C19.4197 11.8992 18.9779 12.5191 18.5646 13.0159C18.0112 13.6811 17.1659 14 16.3007 14C15.2708 14 14.2958 13.5359 13.6464 12.7365L13.1389 12.1118C12.8223 11.722 12.9846 11.1363 13.4566 10.9651L13.4866 10.9542C13.8289 10.8301 14.211 10.9695 14.4327 11.2585C14.73 11.646 15.1822 12.1321 15.6642 12.274C16.1828 12.4266 16.5578 12.4889 17.0522 12.274C17.6597 12.0098 18.0436 10.9315 18.0436 10.9315C18.0436 10.9315 18.5284 9.18441 18.0436 8.24658C17.7008 7.58343 17.3632 7.18927 16.6556 6.90411C16.2875 6.75574 15.7725 6.76021 15.3597 6.79944C15.005 6.83314 14.6728 6.56491 14.6728 6.20867C14.6728 5.91064 14.7528 5.61807 14.9044 5.36148L17.0522 1.72603H14.078L10.3106 14L7.33641 5.75342L4.56047 14Z" fill="#5C5C5C"/>\n                        </svg>                                                        \n                    </a>\n                </div>\n            </div>\n        </div>\n        `})).join("")}</div>\n    </div>\n    `)).join("");const a=e.querySelectorAll(".sc-card__validator");if((new Date).getTime()-localStorage.getItem("lastTimeCheckValidHTML")>12e3||null==localStorage.getItem("dataValid")&&""==localStorage.getItem("dataValid")){console.log("прошло больше времени"),localStorage.setItem("dataValid","");for(let t=0;t<a.length;t++){const e=a[t],c=e.closest(".sc-card");let s;l(e.href).then((t=>{t?(e.classList.add("_not-valid"),s=!1):(e.classList.add("_valid"),s=!0);const a=null!=localStorage.getItem("dataValid")&&""!=localStorage.getItem("dataValid")?JSON.parse(localStorage.getItem("dataValid")):[];a.push({cardId:c.id,valid:s}),localStorage.setItem("dataValid",JSON.stringify(a))}))}localStorage.setItem("lastTimeCheckValidHTML",(new Date).getTime())}else{console.log("прошло меньше времени");const t=JSON.parse(localStorage.getItem("dataValid"));console.log(t);for(let e=0;e<t.length;e++){const a=t[e],l=document.getElementById(a.cardId).querySelector(".sc-card__validator");a.valid?l.classList.add("_valid"):l.classList.add("_not-valid")}}async function l(t){return t+="&out=json",await fetch(t).then((t=>t.json())).then((t=>0!=t.messages.length))}})();