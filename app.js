document.addEventListener('DOMContentLoaded', () => {
  
  /* ==========================================================================
     DOM ELEMENT SELECTORS
     ========================================================================== */
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const mainWrapper = document.getElementById('mainWrapper');
  const menuItems = document.querySelectorAll('.menu-item');
  const contentSections = document.querySelectorAll('.content-section');
  const headerTitle = document.querySelector('.header-title');
  
  const btnEn = document.getElementById('btnEn');
  const btnNp = document.getElementById('btnNp');

  // Product Lightbox Elements
  const triggerCards = document.querySelectorAll('.product-modal-trigger');
  const lightboxOverlay = document.getElementById('productMediaOverlay');
  const closeBtn = document.getElementById('closeLightboxBtn');
  const mediaContainer = document.getElementById('lightboxMediaWrapper');
  const captionBox = document.getElementById('lightboxCaptionText');

  /* ==========================================================================
     1. SIDEBAR TOGGLE MECHANICS
     ========================================================================== */
  sidebarToggle.addEventListener('click', () => {
    if (window.innerWidth > 768) {
      sidebar.classList.toggle('collapsed');
      mainWrapper.classList.toggle('expanded');
    } else {
      sidebar.classList.toggle('mobile-show');
    }
  });

  window.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
      sidebar.classList.remove('mobile-show');
    }
  });

  /* ==========================================================================
     2. ROUTING / VIEW SWITCHING INTERACTION
     ========================================================================== */
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      
      menuItems.forEach(link => link.classList.remove('active'));
      item.classList.add('active');

      const targetSectionId = item.getAttribute('data-target');
      contentSections.forEach(section => {
        section.classList.remove('active-section');
        if (section.id === targetSectionId) {
          section.classList.add('active-section');
        }
      });

      // Update Header Title depending on current active language when switching sections
      const currentLang = localStorage.getItem('preferredLang') || 'en';
      const itemTextSpan = item.querySelector('span');
      if (headerTitle && itemTextSpan) {
        // Set the active data attributes to header dynamic titles
        headerTitle.setAttribute('data-en', itemTextSpan.getAttribute('data-en'));
        headerTitle.setAttribute('data-np', itemTextSpan.getAttribute('data-np'));
        headerTitle.textContent = itemTextSpan.getAttribute(`data-${currentLang}`);
      }

      if (window.innerWidth <= 768) {
        sidebar.classList.remove('mobile-show');
      }
    });
  });

  /* ==========================================================================
     3. PRODUCT LIGHTBOX OVERLAY CONTROLLER
     ========================================================================== */
  if (triggerCards.length && lightboxOverlay) {
    triggerCards.forEach(card => {
      card.addEventListener('click', () => {
        const type = card.getAttribute('data-type');
        const sourceUrl = card.getAttribute('data-src');
        const descriptiveText = card.getAttribute('data-caption');

        // Empty previous dynamic container instances safely
        mediaContainer.innerHTML = '';

        // Construct dynamic DOM node based on active media configuration
        if (type === 'image') {
          const imageElement = document.createElement('img');
          imageElement.src = sourceUrl;
          imageElement.alt = 'Product Display Mode';
          mediaContainer.appendChild(imageElement);
        } else if (type === 'video') {
          const videoElement = document.createElement('video');
          videoElement.src = sourceUrl;
          videoElement.controls = true;
          videoElement.autoplay = true;
          mediaContainer.appendChild(videoElement);
        }

        // Sync local caption text parameters across frames safely
        captionBox.textContent = descriptiveText || '';

        // Display the interactive overlay frame
        lightboxOverlay.classList.add('active-view');
      });
    });

    // Dismiss lightbox framework and terminate background media audio streams
    const clearAndDismissLightbox = () => {
      lightboxOverlay.classList.remove('active-view');
      mediaContainer.innerHTML = ''; 
    };

    // Close button interactions
    if (closeBtn) {
      closeBtn.addEventListener('click', clearAndDismissLightbox);
    }

    // Dismiss when clicking outer backdrop canvas bounds
    lightboxOverlay.addEventListener('click', (event) => {
      if (event.target === lightboxOverlay) {
        clearAndDismissLightbox();
      }
    });

    // Support accessibility hardware keyboard Escape configurations
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && lightboxOverlay.classList.contains('active-view')) {
        clearAndDismissLightbox();
      }
    });
  }

  /* ==========================================================================
     4. DOM TRANSLATION ENGINE (ENGLISH / NEPALI)
     ========================================================================== */
  function setLanguage(lang) {
    const localizableElements = document.querySelectorAll('[data-en][data-np]');
    
    localizableElements.forEach(element => {
      if (lang === 'np') {
        element.textContent = element.getAttribute('data-np');
      } else {
        element.textContent = element.getAttribute('data-en');
      }
    });

    if (lang === 'np') {
      btnNp.classList.add('active');
      btnEn.classList.remove('active');
      document.documentElement.lang = 'ne';
    } else {
      btnEn.classList.add('active');
      btnNp.classList.remove('active');
      document.documentElement.lang = 'en';
    }
    
    // Save preference so refresh doesn't reset language
    localStorage.setItem('preferredLang', lang);
  }

  // Bind Switch Event Listeners to Language Toggle UI
  if (btnEn && btnNp) {
    btnEn.addEventListener('click', () => setLanguage('en'));
    btnNp.addEventListener('click', () => setLanguage('np'));
  }

  /* ==========================================================================
     5. INITIALIZE DEFAULT LANGUAGE ON LOAD
     ========================================================================== */
  const defaultLang = localStorage.getItem('preferredLang') || 'en';
  setLanguage(defaultLang);
});
