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
     1. SIDEBAR TOGGLE MECHANICS (Defensive Check)
     ========================================================================== */
  if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
      if (window.innerWidth > 768) {
        if (sidebar) sidebar.classList.toggle('collapsed');
        if (mainWrapper) mainWrapper.classList.toggle('expanded');
      } else {
        sidebar.classList.toggle('mobile-show');
      }
    });

    window.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && !sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('mobile-show');
      }
    });
  }

  /* ==========================================================================
     2. ROUTING / VIEW SWITCHING INTERACTION ENGINE
     ========================================================================== */
  function switchView(targetSectionId) {
    if (!targetSectionId) return;

    // 1. Synchronize Menu Selection States
    menuItems.forEach(link => {
      if (link.getAttribute('data-target') === targetSectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 2. Toggle Visibility of Sections
    contentSections.forEach(section => {
      if (section.id === targetSectionId) {
        section.classList.add('active-section');
      } else {
        section.classList.remove('active-section');
      }
    });

    // 3. Update Header Text Safely
    const activeItem = document.querySelector(`.menu-item[data-target="${targetSectionId}"]`);
    if (activeItem && headerTitle) {
      const itemTextSpan = activeItem.querySelector('span');
      if (itemTextSpan) {
        headerTitle.setAttribute('data-en', itemTextSpan.getAttribute('data-en') || '');
        headerTitle.setAttribute('data-np', itemTextSpan.getAttribute('data-np') || '');
        
        const currentLang = localStorage.getItem('preferredLang') || 'en';
        headerTitle.textContent = itemTextSpan.getAttribute(`data-${currentLang}`) || '';
      }
    }

    // 4. Hide Mobile Sidebar Upon Selection
    if (window.innerWidth <= 768 && sidebar) {
      sidebar.classList.remove('mobile-show');
    }
  }

  // Attach click events to menu options safely
  if (menuItems.length > 0) {
    menuItems.forEach(item => {
      item.addEventListener('click', (e) => {
        // FIX: If the element is an external link (like Facebook) targeting a new window, ignore it
        if (item.getAttribute('target') === '_blank') {
          return;
        }

        e.preventDefault();
        const targetSectionId = item.getAttribute('data-target');
        switchView(targetSectionId);
      });
    });
  }

  /* ==========================================================================
     3. PRODUCT LIGHTBOX OVERLAY CONTROLLER
     ========================================================================== */
  if (triggerCards.length && lightboxOverlay && mediaContainer && captionBox) {
    
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
        const chosenCaption = card.getAttribute(`data-${currentLang}-caption`);

        mediaContainer.innerHTML = '';
        mediaContainer.className = "lightbox-media-wrapper"; 

        if (type === 'gallery') {
          const rawSources = card.getAttribute('data-sources');
          if (rawSources) {
            const mediaAssets = JSON.parse(rawSources);
            mediaContainer.classList.add('gallery-layout-active');
            mediaAssets.forEach(sourceUrl => {
              if (sourceUrl.endsWith('.mp4') || sourceUrl.endsWith('.webm')) {
                appendVideoNode(sourceUrl);
              } else {
                appendImageNode(sourceUrl);
              }
            });
          }
        } else {
          const singleSource = card.getAttribute('data-src');
          if (type === 'image' && singleSource) {
            appendImageNode(singleSource);
          } else if (type === 'video' && singleSource) {
            appendVideoNode(singleSource);
          }
        }

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
      if (btnNp) btnNp.classList.add('active');
      if (btnEn) btnEn.classList.remove('active');
      document.documentElement.lang = 'ne';
    } else {
      if (btnEn) btnEn.classList.add('active');
      if (btnNp) btnNp.classList.remove('active');
      document.documentElement.lang = 'en';
    }
    
    localStorage.setItem('preferredLang', lang);

    const currentActiveItem = document.querySelector('.menu-item.active');
    if (currentActiveItem && headerTitle) {
      const activeSpan = currentActiveItem.querySelector('span');
      if (activeSpan) {
        headerTitle.textContent = activeSpan.getAttribute(`data-${lang}`) || '';
      }
    }
  }

  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
  if (btnNp) btnNp.addEventListener('click', () => setLanguage('np'));

  /* ==========================================================================
     5. INITIALIZE DEFAULT NAVIGATION ROUTE Safely
     ========================================================================== */
  const defaultLang = localStorage.getItem('preferredLang') || 'en';
  setLanguage(defaultLang);

  const currentHash = window.location.hash.replace('#', '');
  const validSections = Array.from(contentSections).map(s => s.id);
  
  if (currentHash && validSections.includes(currentHash)) {
    switchView(currentHash);
  } else {
    switchView('home'); // Automatically defaults to Home view on startup
  }
});
