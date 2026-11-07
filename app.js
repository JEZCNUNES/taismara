const cfg=window.SITE_CONFIG||{};
const messages={presencial:'Olá! Tenho interesse em agendar uma consulta presencial em Goiânia.',online:'Olá! Tenho interesse em uma consulta online.',plenuar:'Olá! Tenho interesse em uma consulta na Plenuar.',privacidade:'Olá! Gostaria de informações sobre privacidade e meus dados.',energia:'Olá! Quero informações sobre o Protocolo Energia 40+ Completo.'};
const wa=t=>'https://wa.me/'+cfg.whatsapp+'?text='+encodeURIComponent(t);
document.querySelectorAll('[data-contact]').forEach(a=>{a.href=wa(a.dataset.service?'Olá! Gostaria de informações sobre '+a.dataset.service+'.':messages[a.dataset.contact]||messages.presencial);a.target='_blank';a.rel='noopener noreferrer'});
document.querySelectorAll('[data-ebook]').forEach(a=>a.href='desinflamar.html');
document.querySelectorAll('[data-coren]').forEach(e=>e.textContent=cfg.coren?'• '+cfg.coren:'');
const safeUrl=u=>{try{const url=new URL(u);return url.protocol==='https:'?url.href:null}catch{return null}};
if(cfg.price)document.querySelectorAll('[data-price]').forEach(e=>e.textContent=cfg.price);
if(cfg.accessPeriod)document.querySelectorAll('[data-access]').forEach(e=>e.textContent='Prazo de acesso: '+cfg.accessPeriod);
document.querySelectorAll('[data-checkout]').forEach(a=>{a.href=safeUrl(cfg.checkoutUrl)||wa(messages.energia);a.target='_blank';a.rel='noopener noreferrer';if(safeUrl(cfg.checkoutUrl)){a.textContent='Comprar pela Kiwify ↗';document.querySelectorAll('[data-checkout-note]').forEach(e=>e.textContent='Pagamento e entrega realizados pela Kiwify.')}});
if(safeUrl(cfg.videoUrl)&&document.querySelector('#video-area')){const area=document.querySelector('#video-area');area.replaceChildren();const v=document.createElement('video');v.controls=true;v.playsInline=true;v.preload='none';v.poster='assets/acolhimento.webp';v.src=safeUrl(cfg.videoUrl);area.append(v)}
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#menu-principal');
if (toggle && nav) {
  const setMenuOpen = open => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  };
  toggle.addEventListener('click', () => setMenuOpen(!nav.classList.contains('open')));
  nav.addEventListener('click', event => {
    if (!event.target.closest('a') || !nav.classList.contains('open')) return;
    setMenuOpen(false);
    toggle.focus({ preventScroll: true });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !nav.classList.contains('open')) return;
    setMenuOpen(false);
    toggle.focus();
  });
  matchMedia('(max-width: 800px)').addEventListener('change', () => setMenuOpen(false));
}
let consent=null;try{consent=localStorage.getItem('tm-consent-v1')}catch{}
const banner=document.querySelector('.cookie-banner');banner.hidden=!!consent;
function startPixel(){if(!/^\d+$/.test(cfg.pixelId||''))return;if(window.fbq){fbq('consent','grant');return}const f=window.fbq=function(){f.callMethod?f.callMethod.apply(f,arguments):f.queue.push(arguments)};f.queue=[];f.loaded=true;f.version='2.0';window._fbq=f;const s=document.createElement('script');s.async=true;s.src='https://connect.facebook.net/en_US/fbevents.js';document.head.append(s);f('consent','grant');f('init',cfg.pixelId);f('track','PageView');if(location.pathname.endsWith('/energia40.html'))f('track','ViewContent',{content_name:'Energia 40+ Completo',content_type:'product'})}
if(consent==='granted')startPixel();
document.querySelectorAll('[data-consent]').forEach(b=>b.addEventListener('click',()=>{consent=b.dataset.consent;try{localStorage.setItem('tm-consent-v1',consent)}catch{}banner.hidden=true;if(consent==='granted')startPixel();else if(window.fbq)fbq('consent','revoke');const toast=document.querySelector('.toast');toast.textContent='Preferências de privacidade salvas.';toast.style.display='block';setTimeout(()=>toast.style.display='none',2600)}));
document.querySelectorAll('[data-cookies]').forEach(b=>b.addEventListener('click',()=>banner.hidden=false));
document.addEventListener('click',e=>{const a=e.target.closest('a');if(!a||consent!=='granted'||!window.fbq)return;if(a.matches('[data-contact]'))fbq('trackCustom','ContactClick',{channel:'WhatsApp'});if(a.matches('[data-checkout]')&&safeUrl(cfg.checkoutUrl))fbq('track','InitiateCheckout',{content_name:'Energia 40+ Completo'});if(a.matches('[data-ebook-checkout]'))fbq('track','InitiateCheckout',{content_name:'Desinflamar para Viver',currency:'BRL'})});
