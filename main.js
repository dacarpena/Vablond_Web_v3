// Main JavaScript for Vablond Landing Page

// Scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Toast notification system
function showToast(title, message) {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-message">${message}</div>
  `;
  
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Form submission handler
function handleFormSubmit(event) {
  event.preventDefault();
  showToast('Solicitud enviada', 'Nos pondremos en contacto con usted a la brevedad posible.');
  event.target.reset();
}

// ========== COOKIE MANAGEMENT ==========
const CookieManager = {
  COOKIE_NAME: 'vablond_cookie_consent',
  
  getConsent() {
    const consent = localStorage.getItem(this.COOKIE_NAME);
    return consent ? JSON.parse(consent) : null;
  },
  
  setConsent(preferences) {
    localStorage.setItem(this.COOKIE_NAME, JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString()
    }));
  },
  
  acceptAll() {
    this.setConsent({ necessary: true, analytics: true, marketing: true });
    this.hideBanner();
    showToast('Preferencias guardadas', 'Ha aceptado todas las cookies.');
  },
  
  rejectAll() {
    this.setConsent({ necessary: true, analytics: false, marketing: false });
    this.hideBanner();
    showToast('Preferencias guardadas', 'Solo se utilizarán cookies necesarias.');
  },
  
  savePreferences() {
    const analytics = document.getElementById('analytics-cookies')?.checked || false;
    const marketing = document.getElementById('marketing-cookies')?.checked || false;
    this.setConsent({ necessary: true, analytics, marketing });
    this.hideModal();
    this.hideBanner();
    showToast('Preferencias guardadas', 'Su configuración de cookies ha sido actualizada.');
  },
  
  showBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.classList.remove('translate-y-full');
    }
  },
  
  hideBanner() {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.classList.add('translate-y-full');
    }
  },
  
  showModal() {
    const modal = document.getElementById('cookie-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      // Load current preferences
      const consent = this.getConsent();
      if (consent) {
        const analyticsCheckbox = document.getElementById('analytics-cookies');
        const marketingCheckbox = document.getElementById('marketing-cookies');
        if (analyticsCheckbox) analyticsCheckbox.checked = consent.analytics;
        if (marketingCheckbox) marketingCheckbox.checked = consent.marketing;
      }
    }
  },
  
  hideModal() {
    const modal = document.getElementById('cookie-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  },
  
  init() {
    const consent = this.getConsent();
    if (!consent) {
      setTimeout(() => this.showBanner(), 1000);
    }
  }
};

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// ========== HEADER SCROLL EFFECT ==========
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    });
  }
}

// ========== LEAFLET MAP ==========
function initCoverageMap() {
  const mapContainer = document.getElementById('coverage-map');
  if (!mapContainer || typeof L === 'undefined') return;
  
  // Mapa con estilo limpio
  const map = L.map('coverage-map', {
    scrollWheelZoom: false,
    zoomControl: false
  }).setView([36.9, -3.0], 8);
  
  // Control de zoom en esquina derecha
  L.control.zoom({ position: 'topright' }).addTo(map);
  
  // Capa CartoDB (más profesional y limpia)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> © <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);
  
  // Iconos personalizados
  const createIcon = (color, isMain = false) => L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: ${color};
      width: ${isMain ? '24px' : '16px'};
      height: ${isMain ? '24px' : '16px'};
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ${isMain ? 'animation: pulse 2s infinite;' : ''}
    "></div>`,
    iconSize: [isMain ? 24 : 16, isMain ? 24 : 16],
    iconAnchor: [isMain ? 12 : 8, isMain ? 12 : 8]
  });
  
  const redIcon = createIcon('#E63946', true);
  const blueIcon = createIcon('#1D3557');
  const portIcon = createIcon('#457B9D');
  
  // Área de cobertura (polígono suavizado)
  const coverageArea = L.polygon([
    [37.45, -4.7],
    [37.35, -3.2],
    [37.25, -1.75],
    [36.72, -1.58],
    [36.42, -2.0],
    [36.35, -3.6],
    [36.52, -4.75],
  ], {
    color: '#E63946',
    fillColor: '#E63946',
    fillOpacity: 0.08,
    weight: 2,
    dashArray: '8, 4'
  }).addTo(map);
  
  // Marcadores de ciudades
  const locations = [
    { coords: [36.8381, -2.4597], name: 'Almería', desc: 'Sede Central de Vablond', icon: redIcon, main: true },
    { coords: [37.1773, -3.5986], name: 'Granada', desc: 'Área metropolitana', icon: blueIcon },
    { coords: [36.7213, -4.4214], name: 'Málaga', desc: 'Costa del Sol', icon: blueIcon },
    { coords: [36.7244, -3.5185], name: 'Puerto de Motril', desc: 'Servicio MARPOL V', icon: portIcon },
    { coords: [36.7125, -4.4200], name: 'Puerto de Málaga', desc: 'Servicio MARPOL V', icon: portIcon },
    { coords: [36.8350, -2.4650], name: 'Puerto de Almería', desc: 'Servicio MARPOL V', icon: portIcon },
  ];
  
  locations.forEach(loc => {
    const marker = L.marker(loc.coords, { icon: loc.icon }).addTo(map);
    const popupContent = `
      <div style="text-align: center; min-width: 140px;">
        <strong style="color: #1D3557; font-size: 14px;">${loc.name}</strong>
        <p style="margin: 4px 0 0; color: #457B9D; font-size: 12px;">${loc.desc}</p>
      </div>
    `;
    marker.bindPopup(popupContent);
    if (loc.main) marker.openPopup();
  });
  
  // Leyenda
  const legend = L.control({ position: 'bottomleft' });
  legend.onAdd = function() {
    const div = L.DomUtil.create('div', 'map-legend');
    div.innerHTML = `
      <div style="background: white; padding: 10px 12px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); font-size: 12px;">
        <div style="font-weight: 600; margin-bottom: 8px; color: #1D3557;">Leyenda</div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="width: 12px; height: 12px; background: #E63946; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"></span>
          <span style="color: #457B9D;">Sede Vablond</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="width: 10px; height: 10px; background: #1D3557; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"></span>
          <span style="color: #457B9D;">Ciudades</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
          <span style="width: 10px; height: 10px; background: #457B9D; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.2);"></span>
          <span style="color: #457B9D;">Puertos</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="width: 16px; height: 3px; background: #E63946; border-radius: 2px;"></span>
          <span style="color: #457B9D;">Zona cobertura</span>
        </div>
      </div>
    `;
    return div;
  };
  legend.addTo(map);
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
  // Form handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Mobile menu
  initMobileMenu();
  
  // Header scroll
  initHeaderScroll();
  
  // Coverage map
  initCoverageMap();
  
  // Cookie management
  CookieManager.init();
  
  // Cookie banner buttons
  document.getElementById('cookie-accept')?.addEventListener('click', () => CookieManager.acceptAll());
  document.getElementById('cookie-reject')?.addEventListener('click', () => CookieManager.rejectAll());
  document.getElementById('cookie-settings')?.addEventListener('click', () => CookieManager.showModal());
  document.getElementById('close-cookie-modal')?.addEventListener('click', () => CookieManager.hideModal());
  document.getElementById('save-cookie-settings')?.addEventListener('click', () => CookieManager.savePreferences());
  
  // Close modal on backdrop click
  document.getElementById('cookie-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'cookie-modal') CookieManager.hideModal();
  });
});
