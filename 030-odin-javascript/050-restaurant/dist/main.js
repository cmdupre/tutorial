(()=>{"use strict";const e=function(){const e=function(){const e=document.createElement("img");e.classList.add("logo-image"),e.src="../res/logo.jpg",e.alt="logo, just beer";const t=document.createElement("span");t.classList.add("logo-text"),t.textContent="Just Beer";const n=document.createElement("div");n.classList.add("logo");const o=document.createElement("div");o.classList.add("copy-text"),o.textContent='\n        Welcome to "Just Beer", the restaurant that serves only... \n        beer. One might consider this a bar instead, but that would \n        be foolish thinking. Only the thirsty eat here!';const c=document.createElement("header");c.classList.add("header");const a=document.createElement("a");a.classList.add("credit-link"),a.href="https://www.freepik.com/free-vector/beer-toast-vector-illustration-isolated-white-background_27528969.htm#query=clip%20art%20beer&position=1&from_view=search&track=ais&uuid=9f436bee-ed21-415e-b540-f94b896b577d",a.textContent="Logo image by callmetak on Freepik";const d=document.createElement("div");d.classList.add("credit");const s=document.createElement("footer");return s.classList.add("footer"),{logoImage:e,logoText:t,logo:n,copyText:o,header:c,creditLink:a,credit:d,footer:s}}(),t=document.querySelector("#content");t.appendChild(e.header),e.header.appendChild(e.logo),e.logo.appendChild(e.logoImage),e.logo.appendChild(e.logoText),e.header.appendChild(e.copyText),t.appendChild(e.footer),e.footer.appendChild(e.credit),e.credit.appendChild(e.creditLink)},t=function(){const e=document.querySelector("#content"),t=document.createElement("p");t.textContent="On Tap",t.style.color="steelblue",t.style.fontWeight="bold",e.appendChild(t);const n=document.createElement("ol");n.classList.add("menu-items"),n.style.fontSize=".9rem",n.style.lineHeight="1.5em",e.appendChild(n);let o=0;for(;o++<5;){const e=document.createElement("li");switch(e.classList.add("menu-item"),o){case 1:e.textContent="Holy Roller IPA";break;case 2:e.textContent="Hopitoulas IPA";break;case 3:e.textContent="Guinness";break;case 4:e.textContent="Ghost in the Machine";break;case 5:e.textContent="Miller Light"}n.appendChild(e)}},n=function(){const e=function(){const e=document.createElement("p");return e.classList.add("contact"),e.style.fontSize=".9rem",e.style.lineHeight="1.5em",e.textContent="Call Us Now, then call an uber later!",{p:e}}();document.querySelector("#content").appendChild(e.p)};function o(){const e=function(){const e=document.createElement("navigation");e.classList.add("tabs");const t=document.createElement("div");t.classList.add("tab"),t.textContent="Home",t.addEventListener("click",a);const n=document.createElement("div");n.classList.add("tab"),n.textContent="Menu",n.addEventListener("click",d);const o=document.createElement("div");return o.classList.add("tab"),o.textContent="Contact",o.addEventListener("click",s),{tabs:e,homeTab:t,menuTab:n,contactTab:o}}();document.querySelector("#content").appendChild(e.tabs),e.tabs.appendChild(e.homeTab),e.tabs.appendChild(e.menuTab),e.tabs.appendChild(e.contactTab)}function c(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="content",document.body.replaceChild(t,e)}function a(){c(),o(),e()}function d(){c(),o(),t()}function s(){c(),o(),n()}o(),e()})();