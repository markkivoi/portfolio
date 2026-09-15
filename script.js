const menu=document.querySelector('.menu-toggle'), links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector('#contactForm')?.addEventListener('submit', async e => {
    e.preventDefault();

    const form = e.target;
    const btn = form.querySelector('button');
    const old = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    btn.disabled = true;
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            btn.innerHTML = 'Message Sent ✓';
            form.reset();
        } else {
            btn.innerHTML = 'Failed to Send ✕';
        }
    } catch (error) {
        btn.innerHTML = 'Failed to Send ✕';
    }
    setTimeout(() => {
        btn.innerHTML = old;
        btn.disabled = false;
    }, 3000);
});
