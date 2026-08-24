(function(){
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.getElementById('primary-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      const open=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!open));
      nav.classList.toggle('open',!open);
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');
    }));
  }
  const year=document.getElementById('year');
  if(year) year.textContent=new Date().getFullYear();
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
    }),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('reveal-prep');observer.observe(el);});
  }
})();
