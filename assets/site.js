
(()=>{document.documentElement.classList.add('js');
const h=document.querySelector('.hd'),b=document.querySelector('.burger');
const sc=()=>{h.classList.toggle('sc',scrollY>40);document.documentElement.style.setProperty('--hd',h.getBoundingClientRect().bottom+'px')};
sc();addEventListener('scroll',sc,{passive:true});addEventListener('resize',sc);
b&&b.addEventListener('click',()=>{sc();const o=document.body.classList.toggle('nav-open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')));
const els=document.querySelectorAll('.sh,.whos,.specs,.mec,.vals,.olist,.offices,.fr-wide,.steps,.mems,.prose,.q');
els.forEach(e=>e.classList.add('rv'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),
{rootMargin:'0px 0px -6% 0px'});els.forEach(e=>io.observe(e));
document.querySelectorAll('.more-b').forEach(btn=>{const bio=btn.previousElementSibling;
if(bio.scrollHeight<=bio.clientHeight+4){bio.classList.remove('clamp');btn.hidden=true;return}
btn.addEventListener('click',()=>{const o=bio.classList.toggle('open');btn.textContent=o?'Zwiń':'Czytaj więcej';
btn.setAttribute('aria-expanded',o);if(!o)btn.closest('.mem').scrollIntoView({block:'nearest',behavior:'smooth'})})});
const f=document.getElementById('form');f&&f.addEventListener('submit',e=>{e.preventDefault();
if(!f.reportValidity())return;f.querySelector('.form-msg').hidden=false;f.reset()});})();
