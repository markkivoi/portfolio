const menu=document.querySelector('.menu-toggle'), links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector('#contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const btn=e.target.querySelector('button');
  const old=btn.innerHTML;
  btn.innerHTML='Message Ready ✓';
  btn.disabled=true;
  setTimeout(()=>{btn.innerHTML=old;btn.disabled=false;e.target.reset()},2200);
});
