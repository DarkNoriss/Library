(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const s=E()||[],l=document.querySelector(".library-form"),f=document.querySelector(".modal"),g=document.querySelector(".btnAdd"),d=document.querySelector(".book-grid");g.addEventListener("click",()=>{f.showModal()});l.addEventListener("submit",y);function p(e){s.push(e),m(),b()}function b(){s.forEach(e=>{const t=i(e.name),n=i(e.author),a=i(e.pages),o=u("Not read");o.style.backgroundColor="#FF7F7F",o.addEventListener("click",k);const r=u("Remove");r.addEventListener("click",h),L({name:t,author:n,pages:a,btnRead:o,btnRemove:r})})}function y(e){const t=e.target["book-name"].value,n=e.target["book-author"].value,a=e.target["book-pages"].value;p({name:t,author:n,pages:a}),l.reset()}function k(e){if(e.target.style.backgroundColor=="rgb(255, 127, 127)"){e.target.style.backgroundColor="#57F287",e.target.innerText="Read";return}e.target.style.backgroundColor="#FF7F7F",e.target.innerText="Not read"}function h(e){const t=e.target.parentNode.firstChild.innerText;s.forEach((n,a)=>{if(n.name==t)return s.splice(a,1),e.target.parentNode.remove(),m()})}function i(e){const t=document.createElement("p");return t.innerText=e,t}function u(e){const t=document.createElement("button");return t.innerText=e,t.classList.add("rounded"),t}function L(e){d.innerHTML="";const t=document.createElement("div");t.classList.add("book"),t.classList.add("rounded"),Object.values(e).forEach(n=>{t.appendChild(n)}),d.appendChild(t)}function E(){const e=localStorage.getItem("booksarray");return JSON.parse(e)}function m(){localStorage.setItem("booksarray",JSON.stringify(s))}b();
