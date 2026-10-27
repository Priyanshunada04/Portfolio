(function(){
  var nav=document.getElementById('nav'),tog=document.getElementById('navToggle'),links=document.getElementById('navLinks'),bar=document.getElementById('progress');

  // Product tabs (Flow): click or arrow keys; panels fade in
  function groupOf(t){return [].slice.call(t.closest('[role="tablist"]').querySelectorAll('[role="tab"]'))}
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role="tab"]'));
  function selectTab(t,focus){
    groupOf(t).forEach(function(x){
      var on=x===t,p=document.getElementById(x.getAttribute('aria-controls'));
      x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;
      p.hidden=!on;p.classList.toggle('enter',on);
    });
    if(focus)t.focus();
  }
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){selectTab(t)});
    t.addEventListener('keydown',function(e){
      var g=groupOf(t),j=g.indexOf(t),k=e.key,n=null;
      if(k==='ArrowRight')n=g[(j+1)%g.length];else if(k==='ArrowLeft')n=g[(j-1+g.length)%g.length];
      else if(k==='Home')n=g[0];else if(k==='End')n=g[g.length-1];
      if(n){e.preventDefault();selectTab(n,true)}
    });
  });
  [].slice.call(document.querySelectorAll('.tabs')).forEach(function(l){var f=l.querySelector('[role="tab"]');if(f)selectTab(f)});
  var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();

  function setMenu(open){links.classList.toggle('open',open);tog.setAttribute('aria-expanded',open);tog.setAttribute('aria-label',open?'Close menu':'Open menu')}
  tog.addEventListener('click',function(){setMenu(!links.classList.contains('open'))});
  links.addEventListener('click',function(e){if(e.target.closest('a'))setMenu(false)});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&links.classList.contains('open')){setMenu(false);tog.focus()}});

  var ids=['work','next','about','contact'].filter(function(id){return document.getElementById(id)}),navA=links.querySelectorAll('a[href^="#"]'),ticking=false;
  window.addEventListener('scroll',function(){
    if(ticking)return;ticking=true;
    requestAnimationFrame(function(){
      var y=window.scrollY,cur='',max=document.documentElement.scrollHeight-window.innerHeight;
      nav.classList.toggle('scrolled',y>40);
      bar.style.transform='scaleX('+(max>0?Math.min(1,y/max):0)+')';
      ids.forEach(function(id){var el=document.getElementById(id);if(el&&el.offsetTop-140<=y)cur=id});
      navA.forEach(function(a){a.classList.toggle('active',a.getAttribute('href')==='#'+cur)});
      ticking=false;
    });
  },{passive:true});


  // v2: hover previews play on their own on touch screens, while the card is on screen
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(window.matchMedia('(hover: none)').matches&&!reduce&&'IntersectionObserver' in window){
    var timers=new Map();
    var po=new IntersectionObserver(function(es){es.forEach(function(e){
      var c=e.target;
      if(e.isIntersecting&&!timers.has(c)){timers.set(c,setInterval(function(){c.classList.toggle('play')},2600))}
      else if(!e.isIntersecting&&timers.has(c)){clearInterval(timers.get(c));timers.delete(c);c.classList.remove('play')}
    })},{threshold:0.5});
    document.querySelectorAll('.pcard').forEach(function(c){po.observe(c)});
  }
  // v2: keyboard shortcuts on the homepage: 1-4 open a case study
  var cards=document.querySelectorAll('.grid .pcard');
  if(cards.length){document.addEventListener('keydown',function(e){
    if(e.metaKey||e.ctrlKey||e.altKey||/INPUT|TEXTAREA|SELECT/.test((e.target.tagName||'')))return;
    var n=parseInt(e.key,10);if(n>=1&&n<=cards.length){cards[n-1].click()}
  })}

  var items=document.querySelectorAll('.reveal,.dlist,.principles,.plat-row,.handoffs,.ticks,.next-list');
  if(!('IntersectionObserver' in window)){items.forEach(function(el){el.classList.add('vis')});return}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('vis');io.unobserve(e.target)}})},{threshold:0.06,rootMargin:'0px 0px -40px 0px'});
  items.forEach(function(el){io.observe(el)});
})();
