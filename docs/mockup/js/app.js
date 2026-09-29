const productos = [
  {id:1, nombre:"Panela orgánica", categoria:"Alimentos", vendedor:"Trapiche enrramada de Bermejal", rating:"★ 4.8", precio:"$8.000 libra", desc:"Panela artesanal molida en trapiche familiar, sin químicos añadidos.",
    imgs:["https://upra.gov.co/sites/default/files/styles/webp/public/2025-04/La%20panela%20colombiana%20conquista%20paladares%20en%20todo%20el%20mundo.jpg.webp?itok=z5_-ylRC"]},
  {id:2, nombre:"Ruana de lana virgen", categoria:"Artesanías", vendedor:"Doña Rosa Tejidos", rating:"★ 4.9", precio:"$385.000", desc:"Tejida a mano con técnicas heredadas de generación en generación.",
    imgs:["https://static.wixstatic.com/media/478bee_2029d26aec7447bc953625b8c61f0747~mv2.jpg/v1/fill/w_480,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/478bee_2029d26aec7447bc953625b8c61f0747~mv2.jpg"]},
  {id:3, nombre:"Recorrido a la laguna", categoria:"Turismo", vendedor:"Guías Manta Rural", rating:"★ 4.7", precio:"$35.000 p/persona", desc:"Caminata ecológica de 2 horas con guía certificado, incluye refrigerio campesino.",
    imgs:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJwr4f69e0bwk_ItoluDt4Xm3Sp6gwCq2tT5AXt7oa-S0LKVWdeHGSw_8&s=10",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAMXlmiG6SPpKH27zU4qTMMoWOfQBIfdVB6g1ip4kiVw&s=10",
          "https://s0.wklcdn.com/image_246/7382818/128231972/81823917.700x525.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJcWmf8330qUcqK5ZGYIa-dfsky3imeLk180CNHeHo-A&s=10"]},
  {id:4, nombre:"Transporte veredal", categoria:"Servicios", vendedor:"Don Efraín", rating:"★ 4.6", precio:"Según destino", desc:"Servicio de transporte entre veredas y casco urbano, disponible todos los días.",
    imgs:["https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=500"]},
  {id:5, nombre:"Taller de tejido artesanal", categoria:"Servicios", vendedor:"Doña Rosa Tejidos", rating:"★ 4.9", precio:"$25.000", desc:"Taller de 2 horas para aprender técnicas básicas de tejido.",
    imgs:["https://elpilon2024.s3.us-west-2.amazonaws.com/2024/05/foto-mochila.jpg"]},
  {id:6, nombre:"Hotel boutique Corazón del Cielo", categoria:"Servicios", vendedor:"Hotel Boutique Corazón del Cielo", rating:"★ 4.8", precio:"$60.000 noche", desc:"Hospedaje boutique campestre con desayuno incluido, ideal para turistas.",
    imgs:["https://hotelboutiquecorazondelcielo.com/wp-content/uploads/2026/03/39af9076-674b-43e9-9229-490facb7da22-1-768x1024.jpg",
          "https://hotelboutiquecorazondelcielo.com/wp-content/uploads/2026/03/PHOTO-2026-03-28-12-12-09-683x1024.jpg",
          "https://hotelboutiquecorazondelcielo.com/wp-content/uploads/2026/03/c553d869-3c8f-4f88-96da-81906413726a-1005x1536.jpg"]},
  {id:7, nombre:"Caminata a la quebrada (Cascada El Golpe)", categoria:"Turismo", vendedor:"Guías Manta Rural", rating:"★ Nuevo", precio:"$20.000 p/persona", desc:"Caminata guiada hasta la cascada — revisa el nombre y la descripción, los dejé como borrador.",
    imgs:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIel6GjfYuNLLNkLYOa9UwHcVSEVhU347m1jEqfYLFLw&s=10",
          "https://caminatasalairelibre.com/wp-content/uploads/2023/06/20-Caminata-Cascada-El-Golpe.jpg"]},
  {id:8, nombre:"Ternero bovino de levante", categoria:"Animales", subcategoria:"Bovinos", vendedor:"Finca Los Alpes", rating:"★ 4.5", precio:"$950.000", desc:"Ternero sano, vacunado y desparasitado, listo para levante.",
    imgs:["https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&q=80&w=500"]},
  {id:9, nombre:"Panadería La Espiga Dorada", categoria:"Emprendimientos", subcategoria:"Panadería", vendedor:"La Espiga Dorada", rating:"★ 4.9", precio:"Desde $2.000", desc:"Pan campesino, almojábanas y pan de queso recién horneados cada mañana.",
    imgs:["https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=500"]},
  {id:10, nombre:"Mazorcas frescas del agro", categoria:"Productos del agro", subcategoria:"Mazorca y cereales", vendedor:"Cultivos El Manantial", rating:"★ 4.7", precio:"$3.000 unidad", desc:"Mazorca recién cosechada, cultivada sin químicos en la vereda.",
    imgs:["https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=500"]},
];
productos.forEach(p=>{ p.img = p.imgs[0]; }); // portada = primera foto, para no romper las tarjetas del catálogo
// Categorías: días mín/máx de publicación por tipo (ejemplo razonable, ajústalo si no cuadra)
// y subcategorías donde aplica. Un animal vivo dura poco publicado; una artesanía no caduca.
const CATEGORIAS = {
  "Alimentos":        {dias:{min:1, max:60}, subcategorias:null},
  "Artesanías":       {dias:{min:1, max:90}, subcategorias:null},
  "Turismo":          {dias:{min:1, max:60}, subcategorias:null},
  "Servicios":        {dias:{min:1, max:90}, subcategorias:null},
  "Animales":         {dias:{min:1, max:7},  subcategorias:["Bovinos","Porcinos","Avícolas","Otros"]},
  "Emprendimientos":  {dias:{min:1, max:60}, subcategorias:["Gastronómico","Artesanías","Lácteos","Panadería","Cárnicos","Otros"]},
  "Productos del agro":{dias:{min:1, max:30}, subcategorias:["Frutas","Verduras","Tubérculos","Mazorca y cereales","Otros"]}
};
let categoriaActiva = "Todos";
let sesionActiva = false;
let favoritos = new Set();
let vendedoresRating = {}; // {nombreVendedor:{suma,count}} — calificación real, acumulada por reseñas
let productoActualId = null;
let ultimaRutaNoDetalle = 'home'; // recuerda si veníamos del catálogo o de servicios, para que "Volver" regrese ahí
let misPublicaciones = productos.slice(0,2).map(p=>({...p})); // copia editable, independiente del catálogo general
(function demoVencimientos(){ // ejemplo: una publicación ya vencida y otra vigente, para mostrar ambos estados
  const haceCinco = new Date(); haceCinco.setDate(haceCinco.getDate()-5);
  const enDiez = new Date(); enDiez.setDate(enDiez.getDate()+10);
  if(misPublicaciones[0]){ misPublicaciones[0].duracionDias = 20; misPublicaciones[0].vigenteHasta = haceCinco.toISOString().slice(0,10); }
  if(misPublicaciones[1]){ misPublicaciones[1].duracionDias = 20; misPublicaciones[1].vigenteHasta = enDiez.toISOString().slice(0,10); }
})();
let idEnEdicion = null;
let fotosPreview = []; // URLs de las fotos del formulario (máx. 5)
let perfilUsuario = {nombre:"Pepito Pérez Pérez", telefono:"300 000 0000", correo:"user@mail.com", vereda:"El Salitre", instagram:"", facebook:"", tiktok:""};

/* ---------- Admin (simulación) ---------- */
const ADMIN_CORREO = 'admin@mail.com', ADMIN_PASS = 'admin';
let adminActivo = false;
let cuentasPendientes = [
  {id:1, nombre:'Marleny Torres', vereda:'Vereda El Salitre', fecha:'2026-09-24'},
  {id:2, nombre:'Carlos Rodríguez', vereda:'Barrio Centro', fecha:'2026-09-25'},
  {id:3, nombre:'Yesenia Gómez', vereda:'Vereda La Cabaña', fecha:'2026-09-26'},
];
let carTimer = null, carIndex = 0; // estado del carrusel de fotos del detalle
let miUltimaCalificacion = {}; // {vendedor: estrellas} — mi propio voto, para no acumular infinito al reclicar

const I18N = {
  es:{navInicio:"Inicio",navServicios:"Servicios",navAyuda:"Ayuda",navVender:"Publicar",navPerfil:"Perfil",navIngresar:"Ingresar",
      heroTitle:"¿Qué necesitas encontrar hoy en Manta?",buscarPh:"Buscar producto o servicio…",
      destacados:"Destacados esta semana",misProductos:"Mis publicaciones",volver:"← Volver al catálogo",
      serviciosTitle:"Servicios comunitarios",serviciosDesc:"Además de productos, en MantaLink puedes ofrecer o encontrar servicios como transporte, talleres y hospedaje rural.",
      ayudaTitle:"Centro de ayuda",loginTitle:"Ingresar a tu cuenta",loginDesc:"Para publicar y gestionar tus productos.",
      cerrarSesion:"Cerrar sesión",cfgTitle:"Configuración",cfgTheme:"Tema de color",cfgThemeManta:"Manta (predeterminado)",
      cfgThemeOscuro:"Modo oscuro",cfgThemeClasico:"Verde clásico",cfgTextSize:"Tamaño de letra",cfgNormal:"Normal",
      cfgGrande:"Grande",cfgLang:"Idioma",skipLink:"Saltar al contenido",
      cfgA11y:"Accesibilidad",cfgA11yFab:"Botón flotante \"A+\" para agrandar la letra",
      ctaVender:"+ Publicar producto o servicio",ctaVenderSub:"Publica lo que ofreces en menos de un minuto.",
      cfgNote:"Estas preferencias se guardan en este dispositivo. La traducción completa del contenido aún está en desarrollo; por ahora se traduce la navegación principal.",
      soloResidentes:"Debes iniciar sesión (solo habitantes de Manta pueden hacerlo)",
      volverVender:"← Volver a mis publicaciones",publicarTitle:"Publicar producto o servicio",editarTitle:"Editar producto o servicio",
      guardarCambios:"Guardar cambios",subirFoto:"Toca para subir una foto",mercaderLbl:"Mercader:",tipoLbl:"Producto",
      nombreProductoLbl:"Nombre del producto",nombreProductoPh:"Ej: Panela orgánica",precioLbl:"Precio",precioPh:"Ej: $8.000 libra",
      fechaLbl:"Publicar hasta",infoLbl:"Información sobre el producto",infoPh:"Cuéntale a la comunidad qué ofreces…",
      notasLbl:"Notas (opcional)",notasPh:"Ej: solo domicilios los fines de semana",contactoMercader:"Contacto del mercader",
      telefonoPh:"Teléfono",whatsappPh:"WhatsApp",instagramPh:"Instagram (opcional)",
      referenciasNote:"✰✰✰✰✰ Las estrellas de referencia reflejan tu reputación como mercader (las genera la comunidad con sus reseñas) — no se editan aquí.",
      masBtn:"Más",sinContacto:"Aún no agregas datos de contacto en tu perfil.",contactoNota:"Estos datos se toman de tu perfil.",
      editarEnPerfil:"Editar en tu perfil",fotosLbl:"Fotos del producto (máximo 5)",misDatos:"Mis datos",nombreLbl:"Nombre completo",
      telefonoLbl:"Teléfono",correoLbl:"Correo",veredaLbl:"Vereda/barrio",redesTitle:"Redes sociales (para tu marketing)",
      restaurarBtn:"↺ Restaurar valores por defecto",emprendedorManta:"Emprendedor · Manta",
      subtipoLbl:"Tipo específico",diasLbl:"Días de publicación",rangoDiasTxt:"Rango permitido:",
      calificarLbl:"Califica a este mercader:",mercaderNuevo:"Mercader nuevo (sin calificaciones aún)",
      vencioTxt:"⏱ Venció",venceEnTxt:"Vence en",diaPalabra:"día",diasPalabra:"días",
      republicarBtn:"Republicar",eliminarBtn:"Eliminar",editarBtn:"Editar",
      confirmarEliminar:"¿Eliminar esta publicación? No se puede deshacer.",
      republicadaTxt:"¡Publicación renovada!",eliminadaTxt:"Publicación eliminada"},
  en:{navInicio:"Home",navServicios:"Services",navAyuda:"Help",navVender:"Publish",navPerfil:"Profile",navIngresar:"Log in",
      heroTitle:"What are you looking for in Manta today?",buscarPh:"Search a product or service…",
      destacados:"Featured this week",misProductos:"My listings",volver:"← Back to catalog",
      serviciosTitle:"Community services",serviciosDesc:"Besides products, MantaLink lets you offer or find services like transport, workshops and rural lodging.",
      ayudaTitle:"Help center",loginTitle:"Log in to your account",loginDesc:"To publish and manage your products.",
      cerrarSesion:"Log out",cfgTitle:"Settings",cfgTheme:"Color theme",cfgThemeManta:"Manta (default)",
      cfgThemeOscuro:"Dark mode",cfgThemeClasico:"Classic green",cfgTextSize:"Text size",cfgNormal:"Normal",
      cfgGrande:"Large",cfgLang:"Language",skipLink:"Skip to content",
      cfgA11y:"Accessibility",cfgA11yFab:"Floating \"A+\" button to enlarge text",
      ctaVender:"+ Publish product or service",ctaVenderSub:"Publish what you offer in under a minute.",
      cfgNote:"These preferences are saved on this device. Full content translation is still in progress; for now only the main navigation is translated.",
      soloResidentes:"You must log in (only Manta residents can)",
      volverVender:"← Back to my listings",publicarTitle:"Publish product or service",editarTitle:"Edit product or service",
      guardarCambios:"Save changes",subirFoto:"Tap to upload a photo",mercaderLbl:"Seller:",tipoLbl:"Product",
      nombreProductoLbl:"Product name",nombreProductoPh:"E.g: Organic panela",precioLbl:"Price",precioPh:"E.g: $8,000 per pound",
      fechaLbl:"Publish until",infoLbl:"Information about the product",infoPh:"Tell the community what you offer…",
      notasLbl:"Notes (optional)",notasPh:"E.g: delivery on weekends only",contactoMercader:"Seller contact",
      telefonoPh:"Phone",whatsappPh:"WhatsApp",instagramPh:"Instagram (optional)",
      masBtn:"More",sinContacto:"You haven't added contact info to your profile yet.",contactoNota:"This info comes from your profile.",
      editarEnPerfil:"Edit in your profile",fotosLbl:"Product photos (5 max)",misDatos:"My info",nombreLbl:"Full name",
      telefonoLbl:"Phone",correoLbl:"Email",veredaLbl:"Village/neighborhood",redesTitle:"Social media (for your marketing)",
      restaurarBtn:"↺ Restore defaults",emprendedorManta:"Entrepreneur · Manta",
      referenciasNote:"✰✰✰✰✰ Reference stars reflect your reputation as a seller (generated by the community's reviews) — they aren't edited here.",
      subtipoLbl:"Specific type",diasLbl:"Days published",rangoDiasTxt:"Allowed range:",
      calificarLbl:"Rate this seller:",mercaderNuevo:"New seller (no reviews yet)",
      vencioTxt:"⏱ Expired",venceEnTxt:"Expires in",diaPalabra:"day",diasPalabra:"days",
      republicarBtn:"Republish",eliminarBtn:"Delete",editarBtn:"Edit",
      confirmarEliminar:"Delete this listing? This can't be undone.",
      republicadaTxt:"Listing renewed!",eliminadaTxt:"Listing deleted"}
};

function ls(key,val){ try{ if(val===undefined) return localStorage.getItem(key); localStorage.setItem(key,val);}catch(e){} }

function poblarCategorias(){
  const nombres = Object.keys(CATEGORIAS);
  document.getElementById('chips').innerHTML = ['Todos', ...nombres, 'Favoritos'].map(c=>
    `<button class="chip ${c===categoriaActiva?'active':''}" data-c="${c}">${c==='Favoritos' ? '♥ Favoritos' : c}</button>`).join('');
  document.getElementById('filtro').innerHTML = `<option value="">Todas las categorías</option>` + nombres.map(c=>`<option>${c}</option>`).join('');
  document.getElementById('pubTipo').innerHTML = nombres.map(c=>`<option>${c}</option>`).join('');
  const adminCont = document.getElementById('adminCategorias');
  if(adminCont){
    adminCont.innerHTML = nombres.map(c=>`<span class="chip">${c}</span>`).join('');
  }
}

/* Flechas para desplazar la fila de categorías */
document.getElementById('chipsPrev').addEventListener('click', ()=> document.getElementById('chips').scrollBy({left:-200, behavior:'smooth'}));
document.getElementById('chipsNext').addEventListener('click', ()=> document.getElementById('chips').scrollBy({left:200, behavior:'smooth'}));

function toggleFavorito(id){
  if(favoritos.has(id)) favoritos.delete(id); else favoritos.add(id);
  ls('mantalink-favoritos', JSON.stringify([...favoritos]));
  renderCatalogo();
}

function promedioVendedor(nombre){
  const r = vendedoresRating[nombre];
  if(r && r.count>0) return (r.suma/r.count).toFixed(1);
  const semilla = productos.find(p=>p.vendedor===nombre && p.rating && p.rating.includes('★'));
  if(semilla){ const n = parseFloat(semilla.rating.replace('★','').trim()); if(!isNaN(n)) return n.toFixed(1); }
  return null; // sin calificaciones todavía = "Nuevo"
}

function calificarVendedor(nombre, estrellas){
  // Tu voto reemplaza al anterior (no se suma cada clic como reseñas infinitas): puedes cambiar de opinión.
  if(!vendedoresRating[nombre]) vendedoresRating[nombre] = {suma:0, count:0};
  const votoPrevio = miUltimaCalificacion[nombre];
  if(votoPrevio){ vendedoresRating[nombre].suma += (estrellas - votoPrevio); }
  else { vendedoresRating[nombre].suma += estrellas; vendedoresRating[nombre].count += 1; }
  miUltimaCalificacion[nombre] = estrellas;
  ls('mantalink-ratings', JSON.stringify(vendedoresRating));
  ls('mantalink-mirating', JSON.stringify(miUltimaCalificacion));
  toast('¡Gracias por tu calificación!');
  const promEl = document.getElementById('sellerRatingTxt');
  if(promEl){ const prom = promedioVendedor(nombre); promEl.textContent = prom ? '★ '+prom : t('mercaderNuevo'); }
}

function toast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2400);
}

/* ---------- Router (hash-based: funciona sin servidor, ej. abriendo el archivo directo) ---------- */
// Ruta pública -> id de <section class="screen">
const RUTA_A_PANTALLA = {
  home:'inicio', login:'login', registro:'registro', servicios:'servicios-info',
  ayuda:'ayuda', publicar:'publicar', perfil:'perfil', config:'config', producto:'detalle', admin:'admin'
};
const RUTAS_PROTEGIDAS = ['publicar','perfil'];
// Rutas: #/publicar (mis publicaciones) · #/publicar/nuevo · #/publicar/editar/ID

function rutaActual(){
  const partes = location.hash.replace(/^#\/?/,'').split('/').filter(Boolean);
  return {nombre: partes[0] || 'home', param: partes[1], param2: partes[2]};
}

function navegar(ruta){
  // acepta 'home', 'producto/3', etc.
  if(location.hash === '#/'+ruta) { sincronizarDesdeHash(); return; }
  location.hash = '#/'+ruta;
}

function sincronizarDesdeHash(){
  let {nombre, param, param2} = rutaActual();
  if(nombre === 'vender') nombre = 'publicar'; // nombre antiguo de la ruta
  if(!RUTA_A_PANTALLA[nombre]) nombre = 'home';

  if(RUTAS_PROTEGIDAS.includes(nombre) && !sesionActiva){
    toast(I18N[idiomaActual()].soloResidentes || 'Debes iniciar sesión primero');
    location.hash = '#/login';
    return;
  }
  if(nombre === 'admin' && !adminActivo){
    toast('Esta sección es solo para administradores');
    location.hash = '#/login';
    return;
  }

  const enFormulario = nombre==='publicar' && (param==='nuevo' || param==='editar');
  const idEditar = param==='editar' ? Number(param2) : null;
  if(idEditar && !misPublicaciones.find(x=>x.id===idEditar)){ location.hash = '#/publicar'; return; }
  const pantallaId = enFormulario ? 'publicar-form' : RUTA_A_PANTALLA[nombre];
  document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active', s.id===pantallaId));
  document.querySelectorAll('.mainnav button, .bottom-nav button, .more-dropdown button').forEach(b=>b.classList.toggle('active', b.dataset.s===nombre));
  document.getElementById('moreDropdown').classList.remove('open');
  document.getElementById('moreToggle').setAttribute('aria-expanded','false');
  document.getElementById('mainnav').classList.remove('open');
  document.getElementById('menuToggle').setAttribute('aria-expanded','false');
  actualizarSesion(); // por seguridad: re-sincroniza qué botones deben verse en cada navegación
  if(nombre !== 'producto') ultimaRutaNoDetalle = nombre;

  if(nombre==='publicar'){ if(enFormulario) cargarFormulario(idEditar); else renderMisProductos(); }
  if(nombre==='servicios') renderServicios();
  if(nombre==='producto' && param) verDetalle(Number(param));
  if(nombre==='admin') renderAdmin();

  window.scrollTo({top:0, behavior:'smooth'});
}

function idiomaActual(){ return (ls('mantalink-lang') || 'es'); }

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
document.getElementById('backBtn').addEventListener('click', ()=>navegar(ultimaRutaNoDetalle));
document.getElementById('backPublicarBtn').addEventListener('click', ()=>navegar('publicar'));
document.getElementById('cta-vender').addEventListener('click', ()=>abrirFormularioPublicar(null));
document.getElementById('cta-vender-perfil').addEventListener('click', ()=>abrirFormularioPublicar(null));
document.querySelectorAll('.guardar-publicacion').forEach(b=>b.addEventListener('click', guardarPublicacion));
document.getElementById('btnGuardarPerfil').addEventListener('click', guardarPerfil);

document.getElementById('fotoInput').addEventListener('change', e=>{
  const espacioRestante = 5 - fotosPreview.length;
  Array.from(e.target.files).slice(0, espacioRestante).forEach(archivo=>{
    fotosPreview.push(URL.createObjectURL(archivo));
  });
  renderPhotoGrid();
  e.target.value = '';
});

// Menú "Más" (Ayuda + Configuración): abre/cierra y se cierra al hacer clic fuera o al navegar
document.getElementById('moreToggle').addEventListener('click', e=>{
  e.stopPropagation();
  const abierto = document.getElementById('moreDropdown').classList.toggle('open');
  document.getElementById('moreToggle').setAttribute('aria-expanded', abierto ? 'true' : 'false');
});
document.addEventListener('click', ()=>{
  document.getElementById('moreDropdown').classList.remove('open');
  document.getElementById('moreToggle').setAttribute('aria-expanded','false');
});

document.getElementById('btnRestaurarConfig').addEventListener('click', ()=>{
  applyTheme('manta'); applyTextSize('normal'); applyLang('es'); applyA11yFabVisible(true);
  toast('Configuración restaurada');
});
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
  if(b.dataset.s === 'favoritos'){
    categoriaActiva = 'Favoritos';
    document.getElementById('filtro').value = '';
    document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active', c.dataset.c==='Favoritos'));
    navegar('home');
    renderCatalogo();
    return;
  }
  navegar(b.dataset.s);
});

window.addEventListener('hashchange', sincronizarDesdeHash);

function ordenarPorReputacion(lista){
  // los mercaderes mejor calificados salen primero; los nuevos (sin reseñas) quedan de últimos, no ocultos
  return [...lista].sort((a,b)=>{
    const ra = promedioVendedor(a.vendedor), rb = promedioVendedor(b.vendedor);
    if(ra===null && rb===null) return 0;
    if(ra===null) return 1;
    if(rb===null) return -1;
    return rb - ra;
  });
}

function tarjetaProducto(p){
  const prom = promedioVendedor(p.vendedor);
  const esFav = favoritos.has(p.id);
  return `
    <div class="card" onclick="navegar('producto/${p.id}')">
      <div class="card-fav ${esFav?'active':''}" role="button" tabindex="0" aria-label="Favorito" onclick="event.stopPropagation(); toggleFavorito(${p.id})">${esFav ? '♥' : '♡'}</div>
      <img src="${p.img}" alt="">
      <div class="body">
        <h4>${p.nombre}</h4>
        <div class="seller">${p.vendedor}</div>
        <div class="rating">★ ${prom || 'Nuevo'}</div>
        <button class="btn btn-outline">Más información</button>
      </div>
    </div>`;
}

function renderCatalogo(){
  const texto = document.getElementById('buscador').value.toLowerCase();
  let visibles = productos.filter(p =>
    (categoriaActiva==='Todos' || (categoriaActiva==='Favoritos' ? favoritos.has(p.id) : p.categoria===categoriaActiva)) &&
    p.nombre.toLowerCase().includes(texto));
  visibles = ordenarPorReputacion(visibles);
  const grid = document.getElementById('grid-productos');
  grid.innerHTML = visibles.length ? visibles.map(tarjetaProducto).join('') : `<p style="color:var(--ink-soft); font-style:italic">No encontramos resultados para tu búsqueda.</p>`;
}

function renderServicios(){
  const servicios = ordenarPorReputacion(productos.filter(p=>p.categoria==='Servicios'));
  document.getElementById('grid-servicios').innerHTML = servicios.map(tarjetaProducto).join('');
}

function verDetalle(id){
  const p = productos.find(x=>x.id===id) || misPublicaciones.find(x=>x.id===id);
  if(!p){ navegar('home'); return; }
  productoActualId = id;
  clearInterval(carTimer); carIndex = 0;
  const imgs = (p.imgs && p.imgs.length) ? p.imgs : [p.img];
  const prom = promedioVendedor(p.vendedor);
  const miVoto = miUltimaCalificacion[p.vendedor] || 0;
  document.getElementById('detalle-body').innerHTML = `
    <div class="carousel" id="carousel">
      <div class="carousel-track" id="carouselTrack">
        ${imgs.map(u=>`<img src="${u}" class="carousel-slide" alt="">`).join('')}
      </div>
      ${imgs.length>1 ? `
        <button class="carousel-arrow prev" id="carPrev" aria-label="Foto anterior">‹</button>
        <button class="carousel-arrow next" id="carNext" aria-label="Foto siguiente">›</button>
        <div class="carousel-dots" id="carDots">${imgs.map((_,i)=>`<span class="dot ${i===0?'active':''}" data-i="${i}"></span>`).join('')}</div>
      ` : ''}
    </div>
    <div>
      <h2>${p.nombre}</h2>
      <div class="price" style="margin-top:6px">${p.precio}</div>
      <p style="color:var(--ink-soft); line-height:1.55; margin-top:14px">${p.desc}</p>
      <div class="seller-box">
        <div class="avatar">${p.vendedor.charAt(0)}</div>
        <div>
          <strong>${p.vendedor}</strong>
          <div style="font-size:.85rem; color:var(--ink-soft)">${p.categoria}${p.subcategoria ? ' · '+p.subcategoria : ''} · Manta</div>
          <div class="seller-rating" id="sellerRatingTxt">${prom ? '★ '+prom : t('mercaderNuevo')}</div>
        </div>
      </div>
      <div class="contact-row">
        <button class="btn btn-primary" onclick="toast('Se abriría WhatsApp con el vendedor')">Contactar por WhatsApp</button>
        <button class="btn btn-outline" onclick="toast('Se iniciaría una llamada')">Llamar al productor</button>
      </div>
      <div class="rate-seller">
        <span data-i18n="calificarLbl">Califica a este mercader:</span>
        <div class="stars-input" id="starsInput">
          ${[1,2,3,4,5].map(n=>`<button type="button" class="star-btn ${n<=miVoto?'filled':''}" data-n="${n}" aria-label="${n} estrellas">★</button>`).join('')}
        </div>
        ${miVoto ? `<div class="mi-calificacion-txt">Tu calificación: ${miVoto} ★</div>` : ''}
      </div>
    </div>`;

  // Carrusel: flechas, puntos, swipe táctil y avance automático cada 6s
  if(imgs.length>1){
    document.getElementById('carPrev').addEventListener('click', ()=>irASlide(carIndex-1));
    document.getElementById('carNext').addEventListener('click', ()=>irASlide(carIndex+1));
    document.querySelectorAll('#carDots .dot').forEach(d=>d.addEventListener('click', ()=>irASlide(Number(d.dataset.i))));
    let touchX = null;
    const carEl = document.getElementById('carousel');
    carEl.addEventListener('touchstart', e=>{ touchX = e.touches[0].clientX; }, {passive:true});
    carEl.addEventListener('touchend', e=>{
      if(touchX===null) return;
      const delta = e.changedTouches[0].clientX - touchX;
      if(Math.abs(delta) > 40) irASlide(carIndex + (delta < 0 ? 1 : -1));
      touchX = null;
    }, {passive:true});
    iniciarAutoCarrusel();
  }

  document.querySelectorAll('#starsInput .star-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      const n = Number(b.dataset.n);
      document.querySelectorAll('#starsInput .star-btn').forEach(x=>x.classList.toggle('filled', Number(x.dataset.n) <= n));
      calificarVendedor(p.vendedor, n);
      let nota = document.querySelector('#starsInput + .mi-calificacion-txt') || document.querySelector('.rate-seller .mi-calificacion-txt');
      if(!nota){
        nota = document.createElement('div'); nota.className = 'mi-calificacion-txt';
        document.getElementById('starsInput').insertAdjacentElement('afterend', nota);
      }
      nota.textContent = `Tu calificación: ${n} ★`;
    });
  });
  applyLang(idiomaActual()); // traduce el texto recién insertado (Califica a este mercader / stars label)
}

function irASlide(i){
  const slides = document.querySelectorAll('#carouselTrack .carousel-slide');
  if(!slides.length) return;
  carIndex = (i + slides.length) % slides.length;
  document.getElementById('carouselTrack').style.transform = `translateX(-${carIndex*100}%)`;
  document.querySelectorAll('#carDots .dot').forEach((d,ix)=>d.classList.toggle('active', ix===carIndex));
  iniciarAutoCarrusel(); // cualquier interacción manual reinicia el conteo de 6s
}
function iniciarAutoCarrusel(){
  clearInterval(carTimer);
  const slides = document.querySelectorAll('#carouselTrack .carousel-slide');
  if(slides.length <= 1) return;
  carTimer = setInterval(()=>irASlideAuto(), 6000);
}
function irASlideAuto(){ // como irASlide pero sin reiniciar su propio timer
  const slides = document.querySelectorAll('#carouselTrack .carousel-slide');
  if(!slides.length) return;
  carIndex = (carIndex + 1) % slides.length;
  document.getElementById('carouselTrack').style.transform = `translateX(-${carIndex*100}%)`;
  document.querySelectorAll('#carDots .dot').forEach((d,ix)=>d.classList.toggle('active', ix===carIndex));
}

function diasRestantes(p){
  if(!p.vigenteHasta) return null;
  const hoy = new Date(new Date().toDateString());
  const fin = new Date(p.vigenteHasta);
  return Math.round((fin - hoy) / 86400000);
}

function renderMisProductos(){
  document.getElementById('lista-mis-productos').innerHTML = misPublicaciones.map(p=>{
    const restantes = diasRestantes(p);
    const vencido = restantes !== null && restantes < 0;
    const estado = restantes === null ? '' : vencido
      ? `<div class="listing-status expired">${t('vencioTxt')}</div>`
      : `<div class="listing-status">${t('venceEnTxt')} ${restantes} ${restantes===1 ? t('diaPalabra') : t('diasPalabra')}</div>`;
    const acciones = vencido
      ? `<button class="btn btn-primary" onclick="republicar(${p.id})">${t('republicarBtn')}</button>
         <button class="btn btn-outline" onclick="eliminarPublicacion(${p.id})">${t('eliminarBtn')}</button>`
      : `<button class="btn btn-outline" onclick="abrirFormularioPublicar(${p.id})">${t('editarBtn')}</button>`;
    return `
    <div class="list-row">
      <div><strong>${p.nombre}</strong><div style="font-size:.85rem; color:var(--ink-soft)">${p.categoria}${p.subcategoria ? ' · '+p.subcategoria : ''} · ${p.precio}</div>${estado}</div>
      <div class="list-row-actions">${acciones}</div>
    </div>`;
  }).join('');
}

function republicar(id){
  const p = misPublicaciones.find(x=>x.id===id); if(!p) return;
  const cfg = CATEGORIAS[p.categoria] || {dias:{min:1,max:30}};
  const dias = p.duracionDias || cfg.dias.min;
  const fin = new Date(); fin.setDate(fin.getDate() + dias);
  p.vigenteHasta = fin.toISOString().slice(0,10);
  toast(t('republicadaTxt'));
  renderMisProductos();
}

function eliminarPublicacion(id){
  if(!confirm(t('confirmarEliminar'))) return;
  misPublicaciones = misPublicaciones.filter(x=>x.id!==id);
  toast(t('eliminadaTxt'));
  renderMisProductos();
}

function t(clave){ return (I18N[idiomaActual()] || I18N.es)[clave] || clave; }

/* ---------- Admin: renderizado y acciones (simulación) ---------- */
function renderAdmin(){
  document.getElementById('adminStats').innerHTML = `
    <div class="admin-stat"><b>${cuentasPendientes.length}</b><span>Cuentas pendientes</span></div>
    <div class="admin-stat"><b>${misPublicaciones.length + productos.length}</b><span>Publicaciones activas</span></div>
    <div class="admin-stat"><b>${Object.keys(CATEGORIAS).length}</b><span>Categorías</span></div>`;

  document.getElementById('adminPendientes').innerHTML = cuentasPendientes.length
    ? cuentasPendientes.map(c=>`
      <div class="list-row">
        <div><strong>${c.nombre}</strong><div style="font-size:.85rem; color:var(--ink-soft)">${c.vereda} · solicitó el ${c.fecha}</div></div>
        <div class="list-row-actions">
          <button class="btn btn-primary" onclick="aprobarCuenta(${c.id})">Verificar</button>
          <button class="btn btn-outline" onclick="rechazarCuenta(${c.id})">Rechazar</button>
        </div>
      </div>`).join('')
    : `<p style="color:var(--ink-soft); font-style:italic">No hay cuentas pendientes por ahora.</p>`;

  const publicacionesComunidad = [...misPublicaciones, ...productos].slice(0,8);
  document.getElementById('adminPublicaciones').innerHTML = publicacionesComunidad.map(p=>`
    <div class="list-row">
      <div><strong>${p.nombre}</strong><div style="font-size:.85rem; color:var(--ink-soft)">${p.categoria} · ${p.vendedor}</div></div>
      <div class="list-row-actions"><button class="btn btn-outline" onclick="toast('Publicación retirada (simulado)')">Retirar</button></div>
    </div>`).join('');
}

function aprobarCuenta(id){
  const c = cuentasPendientes.find(x=>x.id===id);
  cuentasPendientes = cuentasPendientes.filter(x=>x.id!==id);
  toast(c ? `Cuenta de ${c.nombre} verificada` : 'Cuenta verificada');
  renderAdmin();
}
function rechazarCuenta(id){
  cuentasPendientes = cuentasPendientes.filter(x=>x.id!==id);
  toast('Solicitud rechazada');
  renderAdmin();
}
document.getElementById('btnAgregarCategoria').addEventListener('click', ()=>{
  const input = document.getElementById('adminNuevaCategoria');
  const nombre = input.value.trim();
  if(!nombre) return;
  if(!CATEGORIAS[nombre]) CATEGORIAS[nombre] = {dias:{min:1,max:30}, subcategorias:null};
  input.value = '';
  poblarCategorias();
  renderAdmin();
  toast(`Categoría "${nombre}" agregada`);
});

function abrirFormularioPublicar(id){
  navegar(id ? 'publicar/editar/'+id : 'publicar/nuevo');
}

const DEFAULT_IMG = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=500';

function actualizarCategoriaForm(){
  const cat = document.getElementById('pubTipo').value;
  const cfg = CATEGORIAS[cat] || {dias:{min:1,max:30}, subcategorias:null};
  const subWrap = document.getElementById('subtipoField');
  const subSel = document.getElementById('pubSubtipo');
  if(cfg.subcategorias){
    subWrap.hidden = false;
    subSel.innerHTML = cfg.subcategorias.map(sub=>`<option>${sub}</option>`).join('');
  } else {
    subWrap.hidden = true;
    subSel.innerHTML = '';
  }
  const dias = document.getElementById('pubDias');
  dias.min = cfg.dias.min; dias.max = cfg.dias.max;
  const actual = Number(dias.value);
  if(!actual || actual < cfg.dias.min || actual > cfg.dias.max){
    dias.value = Math.min(cfg.dias.max, Math.max(cfg.dias.min, 15));
  }
  document.getElementById('diasHint').textContent = `${t('rangoDiasTxt')} ${cfg.dias.min}–${cfg.dias.max}`;
}
document.getElementById('pubTipo').addEventListener('change', actualizarCategoriaForm);

function cargarFormulario(id){
  idEnEdicion = id || null;
  const p = id ? misPublicaciones.find(x=>x.id===id) : null;

  document.getElementById('publishTitle').textContent = p ? t('editarTitle') : t('publicarTitle');
  document.getElementById('mercaderNombre').textContent = perfilUsuario.nombre;
  document.getElementById('pubTipo').value = p ? p.categoria : Object.keys(CATEGORIAS)[0];
  document.getElementById('pubNombre').value = p ? p.nombre : '';
  document.getElementById('pubPrecio').value = p ? p.precio : '';
  document.getElementById('pubInfo').value = p ? p.desc : '';
  document.getElementById('pubNotas').value = '';
  document.getElementById('pubDias').value = p && p.duracionDias ? p.duracionDias : '';
  actualizarCategoriaForm();
  if(p && p.subcategoria) document.getElementById('pubSubtipo').value = p.subcategoria;

  fotosPreview = p ? [...(p.imgs && p.imgs.length ? p.imgs : [p.img])] : [];
  renderPhotoGrid();
  renderContactoResumen();
}

function renderPhotoGrid(){
  const grid = document.getElementById('photoGrid'); if(!grid) return;
  let html = fotosPreview.map((url,i)=>`
    <div class="photo-slot filled">
      <img src="${url}" alt="">
      <button type="button" class="photo-remove" data-i="${i}" aria-label="Quitar foto">×</button>
    </div>`).join('');
  if(fotosPreview.length < 5){
    html += `<label class="photo-slot add" tabindex="0" role="button" aria-label="Agregar foto">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
    </label>`;
  }
  grid.innerHTML = html;
  const addSlot = grid.querySelector('.photo-slot.add');
  if(addSlot){
    addSlot.addEventListener('click', ()=>document.getElementById('fotoInput').click());
    addSlot.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); document.getElementById('fotoInput').click(); }});
  }
  grid.querySelectorAll('.photo-remove').forEach(b=>b.addEventListener('click', ()=>{
    fotosPreview.splice(Number(b.dataset.i),1); renderPhotoGrid();
  }));
}

function renderContactoResumen(){
  const chips = [];
  if(perfilUsuario.telefono) chips.push(`📞 ${perfilUsuario.telefono}`);
  if(perfilUsuario.instagram) chips.push(`Instagram: ${perfilUsuario.instagram}`);
  if(perfilUsuario.facebook) chips.push(`Facebook: ${perfilUsuario.facebook}`);
  if(perfilUsuario.tiktok) chips.push(`TikTok: ${perfilUsuario.tiktok}`);
  const cont = document.getElementById('contactoResumen'); if(!cont) return;
  cont.innerHTML = chips.length
    ? chips.map(x=>`<span class="contact-chip">${x}</span>`).join('')
    : `<span style="color:var(--ink-soft); font-size:.88rem">${t('sinContacto')}</span>`;
}

function guardarPublicacion(){
  const nombre = document.getElementById('pubNombre').value.trim();
  if(!nombre){ toast('Ponle un nombre a tu producto o servicio'); return; }
  const categoria = document.getElementById('pubTipo').value;
  const cfg = CATEGORIAS[categoria] || {dias:{min:1,max:30}, subcategorias:null};
  let dias = Number(document.getElementById('pubDias').value) || cfg.dias.min;
  dias = Math.min(Math.max(dias, cfg.dias.min), cfg.dias.max);
  const fin = new Date(); fin.setDate(fin.getDate() + dias);
  const datos = {
    categoria,
    subcategoria: cfg.subcategorias ? document.getElementById('pubSubtipo').value : null,
    nombre,
    precio: document.getElementById('pubPrecio').value.trim() || 'Consultar precio',
    desc: document.getElementById('pubInfo').value.trim(),
    vendedor: perfilUsuario.nombre,
    duracionDias: dias,
    vigenteHasta: fin.toISOString().slice(0,10),
    imgs: fotosPreview.length ? [...fotosPreview] : [DEFAULT_IMG],
    img: fotosPreview[0] || DEFAULT_IMG
  };
  if(idEnEdicion){
    const idx = misPublicaciones.findIndex(x=>x.id===idEnEdicion);
    if(idx > -1) misPublicaciones[idx] = {...misPublicaciones[idx], ...datos};
    toast('Cambios guardados');
  } else {
    misPublicaciones.push({id: Date.now(), ...datos});
    toast('¡Publicado! Ya aparece en Mis publicaciones');
  }
  navegar('publicar');
}

function cargarPerfil(){
  try{ const raw = ls('mantalink-perfil'); if(raw) perfilUsuario = {...perfilUsuario, ...JSON.parse(raw)}; }catch(e){}
  document.getElementById('perfilNombreDisplay').textContent = perfilUsuario.nombre;
  document.getElementById('perfilNombre').value = perfilUsuario.nombre;
  document.getElementById('perfilTelefono').value = perfilUsuario.telefono;
  document.getElementById('perfilCorreo').value = perfilUsuario.correo;
  document.getElementById('perfilVereda').value = perfilUsuario.vereda;
  document.getElementById('perfilInstagram').value = perfilUsuario.instagram;
  document.getElementById('perfilFacebook').value = perfilUsuario.facebook;
  document.getElementById('perfilTiktok').value = perfilUsuario.tiktok;
}

function guardarPerfil(){
  perfilUsuario = {
    nombre: document.getElementById('perfilNombre').value.trim() || perfilUsuario.nombre,
    telefono: document.getElementById('perfilTelefono').value.trim(),
    correo: document.getElementById('perfilCorreo').value.trim(),
    vereda: document.getElementById('perfilVereda').value.trim(),
    instagram: document.getElementById('perfilInstagram').value.trim(),
    facebook: document.getElementById('perfilFacebook').value.trim(),
    tiktok: document.getElementById('perfilTiktok').value.trim(),
  };
  ls('mantalink-perfil', JSON.stringify(perfilUsuario));
  document.getElementById('perfilNombreDisplay').textContent = perfilUsuario.nombre;
  document.getElementById('perfilEditWrap').hidden = true;
  document.getElementById('btnEditarPerfil').hidden = false;
  toast('Perfil actualizado');
}

/* ---------- Sesión (gating de botones) ---------- */
function actualizarSesion(){
  document.getElementById('navVender').hidden = !sesionActiva;
  document.getElementById('navFavoritos').hidden = !sesionActiva;
  document.getElementById('navPerfil').hidden = !sesionActiva;
  document.getElementById('navAdmin').hidden = !adminActivo;
  document.getElementById('navLogin').hidden = sesionActiva || adminActivo;
  document.getElementById('bnVender').hidden = !sesionActiva;
  document.getElementById('bnPerfil').hidden = !sesionActiva;
  document.getElementById('bnLogin').hidden = sesionActiva || adminActivo;
}
document.getElementById('btnLogin').addEventListener('click', ()=>{
  const correo = document.getElementById('loginCorreo').value.trim().toLowerCase();
  const clave = document.getElementById('loginPass').value;
  if(correo === ADMIN_CORREO && clave === ADMIN_PASS){
    adminActivo = true; sesionActiva = false; ls('mantalink-admin','1'); actualizarSesion();
    toast('Bienvenido, administrador'); navegar('admin'); return;
  }
  sesionActiva = true; ls('mantalink-sesion','1'); actualizarSesion();
  toast('¡Bienvenido de nuevo!'); navegar('home');
});
document.getElementById('btnLogout').addEventListener('click', ()=>{
  sesionActiva = false; ls('mantalink-sesion','0'); actualizarSesion();
  toast('Sesión cerrada'); navegar('home');
});
document.getElementById('btnLogoutAdmin').addEventListener('click', ()=>{
  adminActivo = false; ls('mantalink-admin','0'); actualizarSesion();
  toast('Sesión de administrador cerrada'); navegar('home');
});
document.getElementById('btnEditarPerfil').addEventListener('click', ()=>{
  document.getElementById('perfilEditWrap').hidden = false;
  document.getElementById('btnEditarPerfil').hidden = true;
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
  navegar('perfil');
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
function applyA11yFabVisible(show){
  document.getElementById('a11yBtn').hidden = !show;
  ls('mantalink-a11yfab', show ? '1' : '0');
  document.getElementById('a11yFabToggle').checked = show;
}
document.getElementById('a11yFabToggle').addEventListener('change', e=>applyA11yFabVisible(e.target.checked));

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
  cargarPerfil();
  try{ const raw = ls('mantalink-favoritos'); if(raw) favoritos = new Set(JSON.parse(raw)); }catch(e){}
  try{ const rawR = ls('mantalink-ratings'); if(rawR) vendedoresRating = JSON.parse(rawR); }catch(e){}
  try{ const rawM = ls('mantalink-mirating'); if(rawM) miUltimaCalificacion = JSON.parse(rawM); }catch(e){}
  poblarCategorias();
  applyTheme(ls('mantalink-theme') || 'manta');
  applyTextSize(ls('mantalink-textsize') || 'normal');
  applyLang(ls('mantalink-lang') || 'es');
  const a11yFabPref = ls('mantalink-a11yfab');
  applyA11yFabVisible(a11yFabPref === null ? true : a11yFabPref === '1'); // activo por defecto
  sesionActiva = ls('mantalink-sesion') === '1';
  adminActivo = ls('mantalink-admin') === '1';
  actualizarSesion();
  renderCatalogo();
  if(!location.hash) location.hash = '#/home';
  sincronizarDesdeHash();
})();