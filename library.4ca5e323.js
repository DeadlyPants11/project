function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("kyEFX").register(JSON.parse('{"1zJhX":"library.4ca5e323.js","2UKeL":"no-image-available.6744ab95.jpg","eM9ss":"library.38df375f.js"}')),i("j1Kz9");var a=i("1SkT2");const c={btnWatched:document.querySelector(".btn__watched"),btnQueue:document.querySelector(".btn__queue"),libraryContainer:document.querySelector(".library__container")};let s=1;function l(e,t){try{const n=localStorage.getItem(e),r=JSON.parse(n);if(!r||0==r.length)return c.libraryContainer.innerHTML="<h2 style='margin: auto'>No films found!</h2>",[];return r.slice(20*(t-1),20*(t-1)+20)}catch(e){console.error("Get state error: ",e.message)}}c.btnWatched.classList.add("activeBtn"),(0,a.createMarkup)(l("watched",s)),c.btnWatched.addEventListener("click",(function(){c.btnWatched.classList.add("activeBtn"),c.btnQueue.classList.remove("activeBtn"),a.filmContainer.innerHTML="",s=1,(0,a.createMarkup)(l("watched",s));const e=document.querySelector(".film-list__item:last-child");e&&d.observe(e)})),c.btnQueue.addEventListener("click",(function(){c.btnQueue.classList.add("activeBtn"),c.btnWatched.classList.remove("activeBtn"),a.filmContainer.innerHTML="",s=1,(0,a.createMarkup)(l("queue",s));const e=document.querySelector(".film-list__item:last-child");e&&d.observe(e)}));const u=document.querySelector(".film-list__item:last-child");let d=new IntersectionObserver((function(e,t){let n="";n=c.btnWatched.classList.contains("activeBtn")?"watched":"queue";const r=localStorage.getItem(n);JSON.parse(r),e.forEach((e=>{e.isIntersecting&&(s+=1,function(e,t){(0,a.createMarkup)(l(t,e)),d.observe(document.querySelector(".film-list__item:last-child"))}(s,n))}))}),{threshold:.5});u&&d.observe(u),i("89eeZ");var f,v=i("7rYDH");f=new URL(i("kyEFX").resolve("2UKeL"),import.meta.url).toString();var p=i("krGWQ"),b=i("1Vgji"),g=i("89eeZ"),h=i("37v9V");function m(){(0,g.delListeners)(),c.libraryContainer.innerHTML="",c.btnQueue.classList.contains("activeBtn")?(0,a.createMarkup)(l("queue",1)):(0,a.createMarkup)(l("watched",1)),window.removeEventListener("keydown",_),p.refs.backdrop.classList.add("visually-hidden")}function _(e){"Escape"===e.code&&m()}p.refs.filmContainer.addEventListener("click",(function(e){if(e.preventDefault(),e.target===e.currentTarget)return;window.addEventListener("keydown",_),p.refs.backdrop.classList.remove("visually-hidden");let n=e.target.closest("li").getAttribute("data-id");(0,v.onGetFilmDataByID)(n).then((e=>e.data)).then((e=>{e.poster_path?e.poster_path="https://image.tmdb.org/t/p/w500/"+e.poster_path:e.poster_path=t(f),e.title||(title="No Title"),e.vote_average?e.vote_average=String(e.vote_average).slice(0,3):e.vote_average="not found",e.vote_count||(e.vote_count="not found"),e.popularity||(e.popularity="not found"),e.genres.length?e.genres=e.genres.map((e=>e.name)).join(", "):e.genres="genre not found",e.overview||(e.overview="Description not found"),(0,b.onCreateMarkup)(e),document.getElementById(n).addEventListener("click",(()=>{(0,h.openTrailer)(n)}))}))})),p.refs.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&m()})),i("7rYDH"),i("h53OD"),i("7bYU0");
//# sourceMappingURL=library.4ca5e323.js.map
