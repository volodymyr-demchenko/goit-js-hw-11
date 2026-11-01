import{a as u,S as d,i as m}from"./assets/vendor-B3UvNUPd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="58352311-c8b47a53d3fe418784f118997",y="https://pixabay.com/api/",h=o=>{const s={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return u.get(y,{params:s}).then(r=>r.data)},l=document.querySelector(".gallery"),f=document.querySelector(".loader");let i;const g=o=>{const s=o.map(r=>`<li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p>
            <b>Likes</b> ${r.likes}
          </p>
          <p>
            <b>Views</b> ${r.views}
          </p>
          <p>
            <b>Comments</b> ${r.comments}
          </p>
          <p>
            <b>Downloads</b> ${r.downloads}
          </p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s),i?i.refresh():i=new d(".gallery a")},b=()=>{l.innerHTML=""},L=()=>{f.style.display="block"},w=()=>{f.style.display="none"};function c(o){m.error({message:o,position:"topRight"})}const P=document.querySelector(".form");P.addEventListener("submit",o=>{o.preventDefault();const r=new FormData(o.target).get("search-text").trim();if(r===""){c("Please enter a search query.");return}b(),L(),h(r).then(n=>{n.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):g(n.hits)}).catch(n=>{console.error("Error fetching images:",n),c("An error occurred while fetching images. Please try again later.")}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
