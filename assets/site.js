
(()=>{const h=document.querySelector('.hd'),b=document.querySelector('.burger');
const sc=()=>h.classList.toggle('sc',scrollY>8);sc();addEventListener('scroll',sc,{passive:true});
b&&b.addEventListener('click',()=>{const o=document.body.classList.toggle('nav-open');b.setAttribute('aria-expanded',o)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),
{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
document.querySelectorAll('.more-b').forEach(btn=>btn.addEventListener('click',()=>{const bio=btn.previousElementSibling;
const o=bio.classList.toggle('open');btn.textContent=o?'Zwiń':'Czytaj więcej'}));
const f=document.getElementById('form');f&&f.addEventListener('submit',e=>{e.preventDefault();
if(!f.reportValidity())return;f.querySelector('.form-msg').hidden=false;f.reset()});})();
