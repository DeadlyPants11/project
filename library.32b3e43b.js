function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=r.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},r.parcelRequired7c6=i),i.register("kyEFX",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"1zJhX":"library.32b3e43b.js","2UKeL":"no-image-available.6744ab95.jpg","eM9ss":"library.802e0b35.js"}')),i("j1Kz9");var a=i("1SkT2");const c={btnWatched:document.querySelector(".btn__watched"),btnQueue:document.querySelector(".btn__queue"),libraryContainer:document.querySelector(".library__container")};let s=1;function l(e,t){try{const r=localStorage.getItem(e),n=JSON.parse(r);return n.slice(20*(t-1),20*(t-1)+20)}catch(e){console.error("Get state error: ",e.message)}}c.btnWatched.classList.add("activeBtn"),(0,a.createMarkup)(l("watched",s)),c.btnWatched.addEventListener("click",(function(){c.btnWatched.classList.add("activeBtn"),c.btnQueue.classList.remove("activeBtn"),a.filmContainer.innerHTML="",s=1,(0,a.createMarkup)(l("watched",s)),u.observe(document.querySelector(".film-list__item:last-child"))})),c.btnQueue.addEventListener("click",(function(){c.btnQueue.classList.add("activeBtn"),c.btnWatched.classList.remove("activeBtn"),a.filmContainer.innerHTML="",s=1,(0,a.createMarkup)(l("queue",s)),u.observe(document.querySelector(".film-list__item:last-child"))}));let u=new IntersectionObserver((function(e,t){let r="";r=c.btnWatched.classList.contains("activeBtn")?"watched":"queue";e.forEach((e=>{e.isIntersecting&&(s+=1,function(e,t){(0,a.createMarkup)(l(t,e)),u.observe(document.querySelector(".film-list__item:last-child"))}(s,r))}))}),{threshold:.5});const d=document.querySelector(".film-list__item:last-child");d&&u.observe(document.querySelector(d)),i("89eeZ");var f,v=i("7rYDH");f=new URL(i("kyEFX").resolve("2UKeL"),import.meta.url).toString();var b=i("krGWQ"),p=i("1Vgji"),g=i("89eeZ");function h(){(0,g.delListeners)(),c.libraryContainer.innerHTML="",c.btnQueue.classList.contains("activeBtn")?(0,a.createMarkup)(l("queue",s)):(0,a.createMarkup)(l("watched",s)),window.removeEventListener("keydown",m),b.refs.backdrop.classList.add("visually-hidden")}function m(e){"Escape"===e.code&&h()}b.refs.filmContainer.addEventListener("click",(function(e){if(e.preventDefault(),e.target===e.currentTarget)return;window.addEventListener("keydown",m),b.refs.backdrop.classList.remove("visually-hidden");let r=e.target.closest("li").getAttribute("data-id");(0,v.onGetFilmDataByID)(r).then((e=>e.data)).then((e=>{e.poster_path?e.poster_path="https://image.tmdb.org/t/p/w500/"+e.poster_path:e.poster_path=t(f),e.title||(title="No Title"),e.vote_average?e.vote_average=String(e.vote_average).slice(0,3):e.vote_average="not found",e.vote_count||(e.vote_count="not found"),e.popularity||(e.popularity="not found"),e.genres.length?e.genres=e.genres.map((e=>e.name)).join(", "):e.genres="genre not found",e.overview||(e.overview="Description not found"),(0,p.onCreateMarkup)(e)}))})),b.refs.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&h()})),i("7rYDH"),i("h53OD"),i("iSTib"),console.log("library.js loaded");
//# sourceMappingURL=library.32b3e43b.js.map
