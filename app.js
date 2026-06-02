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

      const currentLang = localStorage.getItem('preferredLang') || 'en';
      const itemTextSpan = item.querySelector('span');
      if (headerTitle && itemTextSpan) {
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
     3. PRODUCT LIGHTBOX OVERLAY CONTROLLER (GALLERY / SINGLE RESOURCE MODES)
     ========================================================================== */
  if (triggerCards.length && lightboxOverlay) {
    
    // Helper function to render a single image node
    const appendImageNode = (url) => {
      const img = document.createElement('img');
      img.src = url;
      img.alt = 'Gallery Display Resource';
      img.style.width = '100%';
      img.style.height = 'auto';
      img.style.maxHeight = '65vh';
      img.style.objectFit = 'contain';
      img.style.borderRadius = '6px';
      mediaContainer.appendChild(img);
    };

    // Helper function to render a single auto-configured video node
    const appendVideoNode = (url) => {
      const video = document.createElement('video');
      video.controls = true;
      video.autoplay = true;
      video.muted = true; 
      video.playsInline = true;
      video.style.width = '100%';
      video.style.maxHeight = '65vh';
      video.style.borderRadius = '6px';
      video.style.backgroundColor = '#000';

      const source = document.createElement('source');
      source.src = url;
      source.type = url.endsWith('.webm') ? 'video/webm' : 'video/mp4';
      
      video.appendChild(source);
      mediaContainer.appendChild(video);
      video.load();
    };

    triggerCards.forEach(card => {
      card.addEventListener('click', () => {
        const type = card.getAttribute('data-type');
        const currentLang = localStorage.getItem('preferredLang') || 'en';
        
        // Dynamic Lang Selection for Captions
        const chosenCaption = card.getAttribute(`data-${currentLang}-caption`);

        // Empty previous display node elements safely
        mediaContainer.innerHTML = '';
        mediaContainer.className = "lightbox-media-wrapper"; // Reset base class wrapper

        if (type === 'gallery') {
          // Parse string block back into systematic array layout
          const mediaAssets = JSON.parse(card.getAttribute('data-sources'));
          
          // Apply responsive layout styling programmatically depending on item lengths
          mediaContainer.classList.add('gallery-layout-active');

          mediaAssets.forEach(sourceUrl => {
            if (sourceUrl.endsWith('.mp4') || sourceUrl.endsWith('.webm')) {
              appendVideoNode(sourceUrl);
            } else {
              appendImageNode(sourceUrl);
            }
          });

        } else {
          // Single Fallback Render Modes
          const singleSource = card.getAttribute('data-src');
          if (type === 'image') {
            appendImageNode(singleSource);
          } else if (type === 'video') {
            appendVideoNode(singleSource);
          }
        }

        // Apply synchronized dynamic caption text block parameters safely
        captionBox.textContent = chosenCaption || '';
        lightboxOverlay.classList.add('active-view');
      });
    });

    const clearAndDismissLightbox = () => {
      lightboxOverlay.classList.remove('active-view');
      mediaContainer.innerHTML = ''; 
    };

    if (closeBtn) closeBtn.addEventListener('click', clearAndDismissLightbox);

    lightboxOverlay.addEventListener('click', (event) => {
      if (event.target === lightboxOverlay) clearAndDismissLightbox();
    });

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
    
    localStorage.setItem('preferredLang', lang);
  }

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
