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
  
  // Mapa centrado en Andalucía Oriental con vista de Almería
  const map = L.map('coverage-map', {
    scrollWheelZoom: false,
    zoomControl: false
  }).setView([36.85, -3.2], 8);
  
  // Control de zoom en esquina derecha
  L.control.zoom({ position: 'topright' }).addTo(map);
  
  // Capa CartoDB (estilo limpio y profesional)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a> © <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);
  
  // Icono personalizado para Almería
  const almeriaIcon = L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background: #E63946;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
  
  // Marcador de Almería
  const marker = L.marker([36.8381, -2.4597], { icon: almeriaIcon }).addTo(map);
  marker.bindPopup(`
    <div style="text-align: center; min-width: 120px;">
      <strong style="color: #1D3557; font-size: 14px;">Almería</strong>
      <p style="margin: 4px 0 0; color: #457B9D; font-size: 12px;">Sede Central</p>
    </div>
  `).openPopup();
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
