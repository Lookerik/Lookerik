'use strict';

/* ========== TRANSLATIONS ========== */
const i18n = {
  fr: {
    nav_home:'Accueil', nav_services:'Services', nav_about:'À propos', nav_portfolio:'Portfolio', nav_contact:'Contact',
    hero_subtitle:"Solutions Digitales & Design d'Intérieur à Paris",
    hero_text:"Création de sites web, modélisation 3D, montage vidéo, réseaux sociaux, intelligence artificielle et architecture d'intérieur.",
    hero_text_secondary:"J'accompagne particuliers et professionnels dans la réalisation de projets modernes, esthétiques et performants.",
    hero_btn_whatsapp:'Contactez-moi sur WhatsApp', hero_btn_quote:'Demander un devis gratuit',
    services_eyebrow:'Ce que je propose', services_title:'Mes Services',
    s1_title:'Création de Sites Web', s1_desc:'Sites vitrines, portfolios, landing pages et solutions professionnelles modernes.',
    s2_title:'Montage Vidéo', s2_desc:'TikTok, Reels, Shorts YouTube et vidéos promotionnelles de haute qualité.',
    s3_title:'Réseaux Sociaux', s3_desc:'Gestion de contenu, stratégie éditoriale et développement de visibilité.',
    s4_title:'Intelligence Artificielle', s4_desc:"Création de contenus, automatisation et optimisation de tâches avec l'IA.",
    s5_title:'Plans & AutoCAD', s5_desc:'Plans techniques, aménagement intérieur et accompagnement en rénovation.',
    s6_title:'Modélisation 3D SketchUp', s6_desc:'Maisons, appartements, cuisines, chambres, salons et présentations réalistes.',
    about_eyebrow:'Mon histoire', about_title:'À propos de LOOKERIK',
    about_p1:"Je m'efforce toujours de fournir un travail précis, professionnel et de haute qualité.",
    about_p2:"Basé à Paris, j'accompagne particuliers, entrepreneurs et petites entreprises dans leurs projets digitaux, architecturaux et créatifs. Grâce à ma double compétence en design numérique et en architecture, je propose des solutions complètes adaptées aux besoins de chaque client.",
    about_l1:"BAC Pro Technicien d'Études du Bâtiment (Assistant Architecte)",
    about_l2:"BTS ERASME Architecture et Design d'Intérieur (en cours)",
    about_l3:'Basé à Paris — Approche personnalisée', about_l4:'Qualité, précision et écoute client',
    about_cta:'Travaillons ensemble',
    portfolio_eyebrow:'Mes réalisations', portfolio_title:'Portfolio',
    filter_all:'Tous', filter_3d:'Modélisation 3D', filter_interior:'Design Intérieur', filter_plans:'Plans & AutoCAD', filter_web:'Sites Web', filter_video:'Vidéo',
    cat_3d:'Modélisation 3D', cat_interior:'Design Intérieur', cat_plans:'Plans & AutoCAD', cat_web:'Site Web', cat_video:'Vidéo',
    p1_desc:'Modélisation 3D complète d\'une galerie d\'art contemporaine avec espace extérieur paysager.',
    p2_desc:'Plan de masse détaillé avec cotations, aménagement intérieur et espaces verts.',
    p3_title:'Rénovation Salon — Design Contemporain', p3_desc:'Conception 3D d\'un salon rénové avec mur TV, lambris bois et éclairage design.',
    p4_title:'Restaurant — Plan 3D SketchUp', p4_desc:'Aménagement 3D complet d\'un restaurant sur plan AutoCAD exporté sous SketchUp — tables, espaces et circulation.',
    p5_title:'Salon Moderne — Design Épuré', p5_desc:'Modélisation 3D d\'un salon contemporain avec mur TV intégré, canapé modulable et étagères design.',
    p6_title:'Appartement — Saint-Quentin-en-Yvelines', p6_desc:'Aménagement complet en 3D d\'un appartement près de la Gare de Saint-Quentin-en-Yvelines.',
    p7_desc:'Conception et développement d\'un site web professionnel premium avec design sombre élégant.',
    p8_desc:'Landing page premium pour une boulangerie artisanale avec boutique en ligne intégrée.',
    p9_desc:'Vidéo de présentation du projet 3D complet de la galerie d\'art L\'Arte Estrella — intérieurs, espaces et ambiances.',
    process_eyebrow:'Méthode de travail', process_title:'Comment se déroule un projet ?',
    step1_title:'Prise de contact', step1_desc:'Échangeons sur vos besoins, vos objectifs et votre vision via WhatsApp, email ou formulaire.',
    step2_title:'Analyse du projet', step2_desc:"J'étudie en détail votre demande et identifie les meilleures solutions adaptées à votre budget.",
    step3_title:'Proposition personnalisée', step3_desc:'Je vous soumets un devis clair, un planning précis et une première esquisse de votre projet.',
    step4_title:'Réalisation', step4_desc:'Je travaille avec rigueur et vous tiens informé à chaque étape, avec des points de validation réguliers.',
    step5_title:'Livraison', step5_desc:'Livraison soignée de tous les fichiers finaux, avec accompagnement et support post-projet.',
    why_eyebrow:'Mes engagements', why_title:'Pourquoi choisir LOOKERIK ?',
    why1_title:'Qualité Professionnelle', why1_desc:"Chaque projet est traité avec le même soin et la même exigence, qu'il s'agisse d'un site vitrine ou d'une rénovation complète.",
    why2_title:'Approche Personnalisée', why2_desc:'Vos besoins sont uniques. Je prends le temps de comprendre votre vision pour créer des solutions vraiment sur mesure.',
    why3_title:'Compétences Multiples', why3_desc:"Architecture, digital, vidéo, IA — une seule personne de confiance pour l'ensemble de vos projets créatifs et techniques.",
    why4_title:'Accompagnement Complet', why4_desc:"De la première idée à la livraison finale, je reste disponible et impliqué à chaque étape de votre projet.",
    contact_eyebrow:'Démarrons', contact_title:'Parlons de votre projet',
    contact_intro:"Vous avez une idée, un projet ou besoin d'un accompagnement ? Contactez-moi pour obtenir un devis personnalisé.",
    contact_phone_label:'Téléphone', contact_location_label:'Localisation', contact_whatsapp_btn:'WhatsApp Direct',
    form_name:'Nom', form_email:'Email', form_phone:'Téléphone', form_project:'Type de projet', form_project_select:'Sélectionnez',
    form_message:'Message', form_submit:'Envoyer la demande', form_success:'Message envoyé ! Je vous réponds dans les 24h. ✓',
    footer_desc:"Solutions digitales, design d'intérieur et modélisation 3D à Paris.",
    footer_nav:'Liens rapides', footer_legal_title:'Légal', footer_legal:'Mentions légales', footer_privacy:'Politique de confidentialité',
    footer_contact_title:'Contact', footer_copy:'© 2025 LOOKERIK. Tous droits réservés.'
  },
  en: {
    nav_home:'Home', nav_services:'Services', nav_about:'About', nav_portfolio:'Portfolio', nav_contact:'Contact',
    hero_subtitle:'Digital Solutions & Interior Design in Paris',
    hero_text:'Web design, 3D modeling, video editing, social media, artificial intelligence and interior architecture.',
    hero_text_secondary:'I support individuals and professionals in creating modern, aesthetic and high-performing projects.',
    hero_btn_whatsapp:'Contact me on WhatsApp', hero_btn_quote:'Request a free quote',
    services_eyebrow:'What I offer', services_title:'My Services',
    s1_title:'Web Design', s1_desc:'Business websites, portfolios, landing pages and modern professional solutions.',
    s2_title:'Video Editing', s2_desc:'TikTok, Reels, YouTube Shorts and high-quality promotional videos.',
    s3_title:'Social Media', s3_desc:'Content management, editorial strategy and visibility growth.',
    s4_title:'Artificial Intelligence', s4_desc:'Content creation, automation and task optimization using AI.',
    s5_title:'Plans & AutoCAD', s5_desc:'Technical drawings, interior layout and renovation planning.',
    s6_title:'3D Modeling SketchUp', s6_desc:'Houses, apartments, kitchens, bedrooms, living rooms and realistic presentations.',
    about_eyebrow:'My story', about_title:'About LOOKERIK',
    about_p1:'I always strive to deliver precise, professional and high-quality work.',
    about_p2:'Based in Paris, I support individuals, entrepreneurs and small businesses in their digital, architectural and creative projects.',
    about_l1:'BAC Pro Building Studies Technician (Architectural Assistant)',
    about_l2:'BTS ERASME Architecture and Interior Design (ongoing)',
    about_l3:'Based in Paris — Personalized approach', about_l4:'Quality, precision and client focus',
    about_cta:"Let's work together",
    portfolio_eyebrow:'My work', portfolio_title:'Portfolio',
    filter_all:'All', filter_3d:'3D Modeling', filter_interior:'Interior Design', filter_plans:'Plans & AutoCAD', filter_web:'Websites', filter_video:'Video',
    cat_3d:'3D Modeling', cat_interior:'Interior Design', cat_plans:'Plans & AutoCAD', cat_web:'Website', cat_video:'Video',
    p1_desc:'Complete 3D modeling of a contemporary art gallery with landscaped outdoor space.',
    p2_desc:'Detailed site plan with dimensions, interior layout and green spaces.',
    p3_title:'Living Room Renovation — Contemporary Design', p3_desc:'3D design of a renovated living room with TV wall, wood paneling and designer lighting.',
    p4_title:'Restaurant — 3D SketchUp Plan', p4_desc:'Complete 3D layout of a restaurant on an AutoCAD plan exported to SketchUp — tables, spaces and circulation.',
    p5_title:'Modern Living Room — Clean Design', p5_desc:'3D modeling of a contemporary living room with integrated TV wall and modular sofa.',
    p6_title:'Apartment — Saint-Quentin-en-Yvelines', p6_desc:'Complete 3D layout of an apartment near Saint-Quentin-en-Yvelines station.',
    p7_desc:'Design and development of a premium professional website with elegant dark design.',
    p8_desc:'Premium landing page for an artisan bakery with integrated online shop.',
    p9_desc:'Presentation video of the complete 3D project for the L\'Arte Estrella art gallery.',
    process_eyebrow:'Working method', process_title:'How does a project work?',
    step1_title:'First contact', step1_desc:"Let's discuss your needs, goals and vision via WhatsApp, email or form.",
    step2_title:'Project analysis', step2_desc:'I study your request in detail and identify the best solutions within your budget.',
    step3_title:'Custom proposal', step3_desc:'I present a clear quote, precise schedule and first sketch of your project.',
    step4_title:'Production', step4_desc:'I work rigorously and keep you informed at every step, with regular validation checkpoints.',
    step5_title:'Delivery', step5_desc:'Careful delivery of all final files, with post-project support and guidance.',
    why_eyebrow:'My commitments', why_title:'Why choose LOOKERIK?',
    why1_title:'Professional Quality', why1_desc:"Every project receives the same care and rigor, whether it's a showcase site or a full renovation.",
    why2_title:'Personalized Approach', why2_desc:'Your needs are unique. I take time to understand your vision and create truly tailored solutions.',
    why3_title:'Multiple Skills', why3_desc:'Architecture, digital, video, AI — one trusted person for all your creative and technical projects.',
    why4_title:'Full Support', why4_desc:'From the first idea to final delivery, I stay available and involved at every stage of your project.',
    contact_eyebrow:"Let's start", contact_title:'Talk about your project',
    contact_intro:'Have an idea, a project or need guidance? Contact me for a personalized quote.',
    contact_phone_label:'Phone', contact_location_label:'Location', contact_whatsapp_btn:'Direct WhatsApp',
    form_name:'Name', form_email:'Email', form_phone:'Phone', form_project:'Project type', form_project_select:'Select',
    form_message:'Message', form_submit:'Send request', form_success:'Message sent! I will reply within 24h. ✓',
    footer_desc:'Digital solutions, interior design and 3D modeling in Paris.',
    footer_nav:'Quick links', footer_legal_title:'Legal', footer_legal:'Legal notice', footer_privacy:'Privacy policy',
    footer_contact_title:'Contact', footer_copy:'© 2025 LOOKERIK. All rights reserved.'
  },
  es: {
    nav_home:'Inicio', nav_services:'Servicios', nav_about:'Acerca de', nav_portfolio:'Portfolio', nav_contact:'Contacto',
    hero_subtitle:'Soluciones Digitales & Diseño de Interiores en París',
    hero_text:'Creación de sitios web, modelado 3D, edición de video, redes sociales, inteligencia artificial y arquitectura de interiores.',
    hero_text_secondary:'Acompaño a particulares y profesionales en la realización de proyectos modernos, estéticos y de alto rendimiento.',
    hero_btn_whatsapp:'Contáctame por WhatsApp', hero_btn_quote:'Solicitar presupuesto gratuito',
    services_eyebrow:'Lo que ofrezco', services_title:'Mis Servicios',
    s1_title:'Creación de Sitios Web', s1_desc:'Sitios corporativos, portfolios, landing pages y soluciones profesionales modernas.',
    s2_title:'Edición de Video', s2_desc:'TikTok, Reels, YouTube Shorts y videos promocionales de alta calidad.',
    s3_title:'Redes Sociales', s3_desc:'Gestión de contenido, estrategia editorial y crecimiento de visibilidad.',
    s4_title:'Inteligencia Artificial', s4_desc:'Creación de contenidos, automatización y optimización de tareas con IA.',
    s5_title:'Planos & AutoCAD', s5_desc:'Planos técnicos, distribución interior y acompañamiento en reformas.',
    s6_title:'Modelado 3D SketchUp', s6_desc:'Casas, apartamentos, cocinas, dormitorios, salones y presentaciones realistas.',
    about_eyebrow:'Mi historia', about_title:'Acerca de LOOKERIK',
    about_p1:'Siempre me esfuerzo por ofrecer un trabajo preciso, profesional y de alta calidad.',
    about_p2:'Con sede en París, acompaño a particulares, emprendedores y pequeñas empresas en sus proyectos digitales, arquitectónicos y creativos.',
    about_l1:'BAC Pro Técnico de Estudios de la Construcción (Asistente Arquitecto)',
    about_l2:'BTS ERASME Arquitectura y Diseño de Interiores (en curso)',
    about_l3:'Con sede en París — Enfoque personalizado', about_l4:'Calidad, precisión y atención al cliente',
    about_cta:'Trabajemos juntos',
    portfolio_eyebrow:'Mis realizaciones', portfolio_title:'Portfolio',
    filter_all:'Todos', filter_3d:'Modelado 3D', filter_interior:'Diseño de Interiores', filter_plans:'Planos & AutoCAD', filter_web:'Sitios Web', filter_video:'Video',
    cat_3d:'Modelado 3D', cat_interior:'Diseño de Interiores', cat_plans:'Planos & AutoCAD', cat_web:'Sitio Web', cat_video:'Video',
    p1_desc:'Modelado 3D completo de una galería de arte contemporánea con espacio exterior ajardinado.',
    p2_desc:'Plano de masa detallado con cotas, distribución interior y zonas verdes.',
    p3_title:'Reforma Salón — Diseño Contemporáneo', p3_desc:'Diseño 3D de un salón reformado con muro TV, revestimiento de madera e iluminación de diseño.',
    p4_title:'Restaurante — Plano 3D SketchUp', p4_desc:'Distribución 3D completa de un restaurante sobre plano AutoCAD exportado a SketchUp — mesas, espacios y circulación.',
    p5_title:'Salón Moderno — Diseño Depurado', p5_desc:'Modelado 3D de un salón contemporáneo con muro TV integrado, sofá modular y estanterías.',
    p6_title:'Apartamento — Saint-Quentin-en-Yvelines', p6_desc:'Distribución completa en 3D de un apartamento cerca de la estación de Saint-Quentin-en-Yvelines.',
    p7_desc:'Diseño y desarrollo de un sitio web profesional premium con diseño oscuro elegante.',
    p8_desc:'Landing page premium para una panadería artesanal con tienda online integrada.',
    p9_desc:'Video de presentación del proyecto 3D completo de la galería de arte L\'Arte Estrella.',
    process_eyebrow:'Método de trabajo', process_title:'¿Cómo funciona un proyecto?',
    step1_title:'Primer contacto', step1_desc:'Hablamos de tus necesidades, objetivos y visión por WhatsApp, email o formulario.',
    step2_title:'Análisis del proyecto', step2_desc:'Estudio tu solicitud en detalle e identifico las mejores soluciones para tu presupuesto.',
    step3_title:'Propuesta personalizada', step3_desc:'Te presento un presupuesto claro, un calendario preciso y un primer boceto de tu proyecto.',
    step4_title:'Realización', step4_desc:'Trabajo con rigor y te mantengo informado en cada etapa, con puntos de validación regulares.',
    step5_title:'Entrega', step5_desc:'Entrega cuidadosa de todos los archivos finales, con acompañamiento y soporte post-proyecto.',
    why_eyebrow:'Mis compromisos', why_title:'¿Por qué elegir LOOKERIK?',
    why1_title:'Calidad Profesional', why1_desc:"Cada proyecto recibe el mismo cuidado y exigencia, ya sea un sitio vitrina o una reforma completa.",
    why2_title:'Enfoque Personalizado', why2_desc:'Tus necesidades son únicas. Tomo tiempo para entender tu visión y crear soluciones a medida.',
    why3_title:'Competencias Múltiples', why3_desc:'Arquitectura, digital, video, IA — una sola persona de confianza para todos tus proyectos.',
    why4_title:'Acompañamiento Completo', why4_desc:'Desde la primera idea hasta la entrega final, permanezco disponible e involucrado en cada etapa.',
    contact_eyebrow:'Empecemos', contact_title:'Hablemos de tu proyecto',
    contact_intro:'¿Tienes una idea, un proyecto o necesitas orientación? Contáctame para obtener un presupuesto personalizado.',
    contact_phone_label:'Teléfono', contact_location_label:'Ubicación', contact_whatsapp_btn:'WhatsApp Directo',
    form_name:'Nombre', form_email:'Email', form_phone:'Teléfono', form_project:'Tipo de proyecto', form_project_select:'Seleccionar',
    form_message:'Mensaje', form_submit:'Enviar solicitud', form_success:'Mensaje enviado. Te respondo en 24h. ✓',
    footer_desc:'Soluciones digitales, diseño de interiores y modelado 3D en París.',
    footer_nav:'Enlaces rápidos', footer_legal_title:'Legal', footer_legal:'Aviso legal', footer_privacy:'Política de privacidad',
    footer_contact_title:'Contacto', footer_copy:'© 2025 LOOKERIK. Todos los derechos reservados.'
  }
};

let currentLang = 'fr';
let ticking = false;

document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('js-ready');
  initHeader();
  initMobileMenu();
  initParallax();
  initScrollReveal();
  initNavHighlight();
  initLangSwitcher();
  initPortfolioFilter();
  initVideo();
  initContactForm();
  initRevealDelays();
  initSmoothScroll();
});

function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

function initParallax() {
  const bg = document.querySelector('.hero-bg');
  if (!bg || window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        bg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('visible'), +delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initRevealDelays() {
  document.querySelectorAll('.service-card').forEach((c,i) => c.dataset.delay = i*80);
  document.querySelectorAll('.portfolio-card').forEach((c,i) => c.dataset.delay = i*60);
  document.querySelectorAll('.why-card').forEach((c,i) => c.dataset.delay = i*100);
  document.querySelectorAll('.timeline-item').forEach((c,i) => c.dataset.delay = i*100);
}

function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(l => { l.classList.toggle('active', l.getAttribute('href') === '#'+id); });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;
      currentLang = lang;
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyTranslations(lang);
      document.documentElement.lang = lang;
    });
  });
}

function applyTranslations(lang) {
  const t = i18n[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!t[key]) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = t[key];
    else el.textContent = t[key];
  });
}

function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.portfolio-card');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.category === filter) ? '' : 'none';
      });
    });
  });
}

function initVideo() {
  const video = document.getElementById('arteVideo');
  const overlay = document.getElementById('videoOverlay');
  const playBtn = document.getElementById('playBtn');
  if (!video || !overlay || !playBtn) return;

  playBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    video.play();
    video.controls = true;
  });

  video.addEventListener('ended', () => {
    video.controls = false;
    overlay.classList.remove('hidden');
  });

  video.addEventListener('pause', () => {
    if (video.ended) return;
    video.controls = true;
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.submit-btn span');
    const t = i18n[currentLang];
    btn.textContent = '...';
    try {
      const action = form.getAttribute('action');
      if (action.includes('YOUR_FORM_ID')) {
        await new Promise(r => setTimeout(r, 800));
      } else {
        const res = await fetch(action, { method:'POST', body:new FormData(form), headers:{ Accept:'application/json' } });
        if (!res.ok) throw new Error();
      }
      form.reset();
      success.textContent = t.form_success;
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 5000);
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      btn.textContent = i18n[currentLang].form_submit;
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = document.getElementById('header')?.offsetHeight || 80;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });
}
