const productos = [
  {id:1, nombre:"Panela orgánica", categoria:"Alimentos", vendedor:"Trapiche La Esperanza", rating:"★ 4.8", precio:"$8.000 libra", img:"https://upra.gov.co/sites/default/files/styles/webp/public/2025-04/La%20panela%20colombiana%20conquista%20paladares%20en%20todo%20el%20mundo.jpg.webp?itok=z5_-ylRC", desc:"Panela artesanal molida en trapiche familiar, sin químicos añadidos."},
  {id:2, nombre:"Ruana de lana virgen", categoria:"Artesanías", vendedor:"Doña Rosa Tejidos", rating:"★ 4.9", precio:"$85.000", img:"https://static.wixstatic.com/media/478bee_2029d26aec7447bc953625b8c61f0747~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/478bee_2029d26aec7447bc953625b8c61f0747~mv2.jpg", desc:"Tejida a mano con técnicas heredadas de generación en generación."},
  {id:3, nombre:"Recorrido a la laguna", categoria:"Turismo", vendedor:"Guías Manta Rural", rating:"★ 4.7", precio:"$15.000 p/persona", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJwr4f69e0bwk_ItoluDt4Xm3Sp6gwCq2tT5AXt7oa-S0LKVWdeHGSw_8&s=10", desc:"Caminata ecológica de 2 horas con guía certificado, incluye refrigerio campesino."},
  {id:4, nombre:"Transporte veredal", categoria:"Servicios", vendedor:"Don Efraín", rating:"★ 4.6", precio:"Según destino", img:"https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=500", desc:"Servicio de transporte entre veredas y casco urbano, disponible todos los días."},
  {id:5, nombre:"Taller de tejido artesanal", categoria:"Servicios", vendedor:"Doña Rosa Tejidos", rating:"★ 4.9", precio:"$25.000", img:"https://images.unsplash.com/photo-1528277342758-f1d7613953a2?auto=format&fit=crop&q=80&w=500", desc:"Taller de 2 horas para aprender técnicas básicas de tejido."},
  {id:6, nombre:"Hotel boutique Corazón del Cielo", categoria:"Servicios", vendedor:"Hotel Boutique Corazón del Cielo", rating:"★ 4.8", precio:"$60.000 noche", img:"https://hotelboutiquecorazondelcielo.com/wp-content/uploads/2026/03/39af9076-674b-43e9-9229-490facb7da22-1-768x1024.jpg", desc:"Hospedaje boutique campestre con desayuno incluido, ideal para turistas."},
];
const categorias = ["Todos","Alimentos","Artesanías","Turismo","Servicios"];
let categoriaActiva = "Todos";
let sesionActiva = false;

const I18N = {
  es:{navInicio:"Inicio",navServicios:"Servicios",navAyuda:"? Ayuda",navVender:"Vender",navPerfil:"Perfil",navIngresar:"Ingresar",
      heroTitle:"¿Qué necesitas encontrar hoy en Manta?",buscarPh:"Buscar producto o servicio…",
      destacados:"Destacados esta semana",misProductos:"Mis productos",volver:"← Volver al catálogo",
      serviciosTitle:"Servicios comunitarios",serviciosDesc:"Además de productos, en MantaLink puedes ofrecer o encontrar servicios como transporte, talleres y hospedaje rural.",
      ayudaTitle:"Centro de ayuda",loginTitle:"Ingresar a tu cuenta",loginDesc:"Para publicar y gestionar tus productos.",
      cerrarSesion:"Cerrar sesión",cfgTitle:"Configuración",cfgTheme:"Tema de color",cfgThemeManta:"Manta (predeterminado)",
      cfgThemeOscuro:"Modo oscuro",cfgThemeClasico:"Verde clásico",cfgTextSize:"Tamaño de letra",cfgNormal:"Normal",
      cfgGrande:"Grande (adultos mayores)",cfgLang:"Idioma",skipLink:"Saltar al contenido",
      cfgNote:"Estas preferencias se guardan en este dispositivo. La traducción completa del contenido aún está en desarrollo; por ahora se traduce la navegación principal.",
      soloResidentes:"Debes iniciar sesión (solo habitantes de Manta pueden hacerlo)"},
  en:{navInicio:"Home",navServicios:"Services",navAyuda:"? Help",navVender:"Sell",navPerfil:"Profile",navIngresar:"Log in",
      heroTitle:"What are you looking for in Manta today?",buscarPh:"Search a product or service…",
      destacados:"Featured this week",misProductos:"My products",volver:"← Back to catalog",
      serviciosTitle:"Community services",serviciosDesc:"Besides products, MantaLink lets you offer or find services like transport, workshops and rural lodging.",
      ayudaTitle:"Help center",loginTitle:"Log in to your account",loginDesc:"To publish and manage your products.",
      cerrarSesion:"Log out",cfgTitle:"Settings",cfgTheme:"Color theme",cfgThemeManta:"Manta (default)",
      cfgThemeOscuro:"Dark mode",cfgThemeClasico:"Classic green",cfgTextSize:"Text size",cfgNormal:"Normal",
      cfgGrande:"Large (for older adults)",cfgLang:"Language",skipLink:"Skip to content",
      cfgNote:"These preferences are saved on this device. Full content translation is still in progress; for now only the main navigation is translated.",
      soloResidentes:"You must log in (only Manta residents can)"}
};

function ls(key,val){ try{ if(val===undefined) return localStorage.getItem(key); localStorage.setItem(key,val);}catch(e){} }

function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2400);
}

/* ---------- Router (hash-based: funciona sin servidor, ej. abriendo el archivo directo) ---------- */
// Ruta pública -> id de <section class="screen">
const RUTA_A_PANTALLA = {
  home:'inicio', login:'login', registro:'registro', servicios:'servicios-info',
  ayuda:'ayuda', vender:'vender', perfil:'perfil', config:'config', producto:'detalle'
};
const RUTAS_PROTEGIDAS = ['vender','perfil'];

function rutaActual(){
  const partes = location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);
  return {nombre: partes[0] || 'home', param: partes[1]};
}

function navegar(ruta){
  // acepta 'home', 'producto/3', etc.
  if(location.hash === '#/'+ruta) { sincronizarDesdeHash(); return; }
  location.hash = '#/'+ruta;
}

function sincronizarDesdeHash(){
  let {nombre, param} = rutaActual();
  if(!RUTA_A_PANTALLA[nombre]) nombre = 'home';

  if(RUTAS_PROTEGIDAS.includes(nombre) && !sesionActiva){
    toast(I18N[idiomaActual()].soloResidentes || 'Debes iniciar sesión primero');
    location.hash = '#/login';
    return;
  }

  const pantallaId = RUTA_A_PANTALLA[nombre];
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active', s.id===pantallaId));
  document.querySelectorAll('.mainnav button, .bottom-nav button').forEach(b=>b.classList.toggle('active', b.dataset.s===nombre));
  document.getElementById('mainnav').classList.remove('open');
  document.getElementById('menuToggle').setAttribute('aria-expanded','false');

  if(nombre==='vender') renderMisProductos();
  if(nombre==='servicios') renderServicios();
  if(nombre==='producto' && param) verDetalle(Number(param));

  window.scrollTo({top:0, behavior:'smooth'});
}

function idiomaActual(){ return (ls('mantalink-lang') || 'es'); }

document.getElementById('chips').innerHTML = categorias.map(c=>
  `<button class="chip ${c==='Todos'?'active':''}" data-c="${c}">${c}</button>`).join('');

document.getElementById('chips').addEventListener('click', e=>{
  const b = e.target.closest('.chip'); if(!b) return;
  categoriaActiva = b.dataset.c;
  document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active', c===b));
  renderCatalogo();
});
document.getElementById('buscador').addEventListener('input', renderCatalogo);
document.getElementById('filtro').addEventListener('change', e=>{
  categoriaActiva = e.target.value || "Todos";
  document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active', c.dataset.c===categoriaActiva));
  renderCatalogo();
});
document.getElementById('olvide').addEventListener('click', ()=>toast('Se enviaría un enlace de recuperación a tu correo'));
document.getElementById('cta-vender').addEventListener('click', ()=>toast('Aquí se abriría el formulario para publicar'));
document.getElementById('menuToggle').addEventListener('click', ()=>{
  const abierto = document.getElementById('mainnav').classList.toggle('open');
  document.getElementById('menuToggle').setAttribute('aria-expanded', abierto ? 'true' : 'false');
});

document.addEventListener('click', e=>{
  const b = e.target.closest('[data-s]'); if(!b) return;
  if(b.dataset.s === 'servicios'){
    categoriaActiva = 'Servicios';
    document.getElementById('filtro').value = 'Servicios';
    navegar('servicios');
    return;
  }
  navegar(b.dataset.s);
});

window.addEventListener('hashchange', sincronizarDesdeHash);

function renderCatalogo(){
  const texto = document.getElementById('buscador').value.toLowerCase();
  const visibles = productos.filter(p =>
    (categoriaActiva==='Todos' || p.categoria===categoriaActiva) &&
    p.nombre.toLowerCase().includes(texto));
  const grid = document.getElementById('grid-productos');
  grid.innerHTML = visibles.length ? visibles.map(p=>`
    <div class="card" onclick="navegar('producto/${p.id}')">
      <img src="${p.img}" alt="">
      <div class="body">
        <h4>${p.nombre}</h4>
        <div class="seller">${p.vendedor}</div>
        <div class="rating">${p.rating}</div>
        <button class="btn btn-outline">Más información</button>
      </div>
    </div>`).join('') : `<p style="color:var(--ink-soft); font-style:italic">No encontramos resultados para tu búsqueda.</p>`;
}

function renderServicios(){
  const servicios = productos.filter(p=>p.categoria==='Servicios');
  document.getElementById('grid-servicios').innerHTML = servicios.map(p=>`
    <div class="card" onclick="navegar('producto/${p.id}')">
      <img src="${p.img}" alt="">
      <div class="body">
        <h4>${p.nombre}</h4>
        <div class="seller">${p.vendedor}</div>
        <div class="rating">${p.rating}</div>
        <button class="btn btn-outline">Más información</button>
      </div>
    </div>`).join('');
}

function verDetalle(id){
  const p = productos.find(x=>x.id===id);
  if(!p){ navegar('home'); return; }
  document.getElementById('detalle-body').innerHTML = `
    <img src="${p.img}" alt="">
    <div>
      <h2>${p.nombre}</h2>
      <div class="price" style="margin-top:6px">${p.precio}</div>
      <p style="color:var(--ink-soft); line-height:1.55; margin-top:14px">${p.desc}</p>
      <div class="seller-box">
        <div class="avatar">${p.vendedor.charAt(0)}</div>
        <div><strong>${p.vendedor}</strong><div style="font-size:.85rem; color:var(--ink-soft)">${p.categoria} · Manta</div></div>
      </div>
      <div class="contact-row">
        <button class="btn btn-primary" onclick="toast('Se abriría WhatsApp con el vendedor')">Contactar por WhatsApp</button>
        <button class="btn btn-outline" onclick="toast('Se iniciaría una llamada')">Llamar al productor</button>
      </div>
    </div>`;
}

function renderMisProductos(){
  document.getElementById('lista-mis-productos').innerHTML = productos.slice(0,2).map(p=>`
    <div class="list-row">
      <div><strong>${p.nombre}</strong><div style="font-size:.85rem; color:var(--ink-soft)">${p.categoria} · ${p.precio}</div></div>
      <button class="btn btn-outline" onclick="toast('Aquí podrías editar este producto')">Editar</button>
    </div>`).join('');
}

/* ---------- Sesión (gating de botones) ---------- */
function actualizarSesion(){
  document.getElementById('navVender').hidden = !sesionActiva;
  document.getElementById('navPerfil').hidden = !sesionActiva;
  document.getElementById('navLogin').hidden = sesionActiva;
  document.getElementById('bnVender').hidden = !sesionActiva;
  document.getElementById('bnPerfil').hidden = !sesionActiva;
  document.getElementById('bnLogin').hidden = sesionActiva;
}
document.getElementById('btnLogin').addEventListener('click', ()=>{
  sesionActiva = true; ls('mantalink-sesion','1'); actualizarSesion();
  toast('¡Bienvenido de nuevo!'); navegar('vender');
});
document.getElementById('btnLogout').addEventListener('click', ()=>{
  sesionActiva = false; ls('mantalink-sesion','0'); actualizarSesion();
  toast('Sesión cerrada'); navegar('home');
});
document.getElementById('btnRegistro').addEventListener('click', ()=>{
  const vereda = document.getElementById('regVereda').value.trim();
  const confirmado = document.getElementById('chkResidente').checked;
  if(!confirmado || !vereda){
    toast('Debes indicar tu vereda/barrio y confirmar que resides en Manta');
    return;
  }
  sesionActiva = true; ls('mantalink-sesion','1'); actualizarSesion();
  toast('¡Cuenta creada! Queda pendiente de verificación por la Junta de Acción Comunal.');
  navegar('vender');
});

/* ---------- Tema, tamaño de texto e idioma ---------- */
function applyTheme(name){
  document.documentElement.setAttribute('data-theme', name); ls('mantalink-theme', name);
  document.querySelectorAll('[data-theme-btn]').forEach(b=>b.classList.toggle('active', b.dataset.themeBtn===name));
}
function applyTextSize(size){
  document.documentElement.classList.toggle('text-grande', size==='grande'); ls('mantalink-textsize', size);
  document.querySelectorAll('[data-size-btn]').forEach(b=>b.classList.toggle('active', b.dataset.sizeBtn===size));
  document.getElementById('a11yBtn').classList.toggle('active', size==='grande');
}
function applyLang(lang){
  ls('mantalink-lang', lang);
  document.querySelectorAll('[data-lang-btn]').forEach(b=>b.classList.toggle('active', b.dataset.langBtn===lang));
  const dict = I18N[lang] || I18N.es;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ if(dict[el.dataset.i18n]) el.textContent = dict[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{ if(dict[el.dataset.i18nPh]) el.placeholder = dict[el.dataset.i18nPh]; });
}
document.querySelectorAll('[data-theme-btn]').forEach(b=>b.addEventListener('click',()=>applyTheme(b.dataset.themeBtn)));
document.querySelectorAll('[data-size-btn]').forEach(b=>b.addEventListener('click',()=>applyTextSize(b.dataset.sizeBtn)));
document.querySelectorAll('[data-lang-btn]').forEach(b=>b.addEventListener('click',()=>applyLang(b.dataset.langBtn)));

/* Acceso rápido de accesibilidad: alterna letra grande desde cualquier pantalla, sin entrar a Configuración */
document.getElementById('a11yBtn').addEventListener('click', ()=>{
  const actual = ls('mantalink-textsize') || 'normal';
  applyTextSize(actual === 'grande' ? 'normal' : 'grande');
});

/* ---------- Inicialización ---------- */
(function init(){
  applyTheme(ls('mantalink-theme') || 'manta');
  applyTextSize(ls('mantalink-textsize') || 'normal');
  applyLang(ls('mantalink-lang') || 'es');
  sesionActiva = ls('mantalink-sesion') === '1';
  actualizarSesion();
  renderCatalogo();
  if(!location.hash) location.hash = '#/home';
  sincronizarDesdeHash();
})();