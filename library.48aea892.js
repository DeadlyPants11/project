!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequired7c6=a),a.register("iE7OH",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.48aea892.js","cf909":"no-image-available.6744ab95.jpg","7nwxg":"library.556d06b6.js"}')),a("fI0b8");var i=a("4QXHb"),c={btnWatched:document.querySelector(".btn__watched"),btnQueue:document.querySelector(".btn__queue"),libraryContainer:document.querySelector(".library__container")},u=1;function s(e,t){console.log("load");try{var r=localStorage.getItem(e),n=JSON.parse(r);return console.log(!n),n&&0!=n.length?n.slice(20*(t-1),20*(t-1)+20):(c.libraryContainer.innerHTML="<h2 style='margin: auto'>No films found!</h2>",[])}catch(e){console.error("Get state error: ",e.message)}}c.btnWatched.classList.add("activeBtn"),(0,i.createMarkup)(s("watched",u)),c.btnWatched.addEventListener("click",(function(){c.btnWatched.classList.add("activeBtn"),c.btnQueue.classList.remove("activeBtn"),i.filmContainer.innerHTML="",u=1,(0,i.createMarkup)(s("watched",u)),d.observe(document.querySelector(".film-list__item:last-child"))})),c.btnQueue.addEventListener("click",(function(){c.btnQueue.classList.add("activeBtn"),c.btnWatched.classList.remove("activeBtn"),i.filmContainer.innerHTML="",u=1,(0,i.createMarkup)(s("queue",u)),d.observe(document.querySelector(".film-list__item:last-child"))}));var l=document.querySelector(".film-list__item:last-child");var d=new IntersectionObserver((function(e,t){var r="";r=c.btnWatched.classList.contains("activeBtn")?"watched":"queue";var n=localStorage.getItem(r);JSON.parse(n),e.forEach((function(e){e.isIntersecting&&function(e,t){(0,i.createMarkup)(s(t,e)),d.observe(document.querySelector(".film-list__item:last-child"))}(u+=1,r)}))}),{threshold:.5});l&&d.observe(l),a("5LxsL");var f,v=a("b7ONl");f=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("cf909");var p=a("4Nugj"),g=a("4ApNW"),b=a("5LxsL");function h(){(0,b.delListeners)(),c.libraryContainer.innerHTML="",c.btnQueue.classList.contains("activeBtn")?(0,i.createMarkup)(s("queue",1)):(0,i.createMarkup)(s("watched",1)),window.removeEventListener("keydown",m),p.refs.backdrop.classList.add("visually-hidden")}function m(e){"Escape"===e.code&&h()}p.refs.filmContainer.addEventListener("click",(function(e){if(e.preventDefault(),e.target===e.currentTarget)return;window.addEventListener("keydown",m),p.refs.backdrop.classList.remove("visually-hidden");var r=e.target.closest("li").getAttribute("data-id");(0,v.onGetFilmDataByID)(r).then((function(e){return e.data})).then((function(e){e.poster_path?e.poster_path="https://image.tmdb.org/t/p/w500/"+e.poster_path:e.poster_path=t(f),e.title||(title="No Title"),e.vote_average?e.vote_average=String(e.vote_average).slice(0,3):e.vote_average="not found",e.vote_count||(e.vote_count="not found"),e.popularity||(e.popularity="not found"),e.genres.length?e.genres=e.genres.map((function(e){return e.name})).join(", "):e.genres="genre not found",e.overview||(e.overview="Description not found"),(0,g.onCreateMarkup)(e)}))})),p.refs.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&h()})),a("b7ONl"),a("ghI91"),a("bzPT2"),console.log("library.js loaded")}();
//# sourceMappingURL=library.48aea892.js.map
