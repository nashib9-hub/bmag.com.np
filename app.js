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

  // Product & Gallery Lightbox Elements
  const lightboxOverlay = document.getElementById('productMediaOverlay');
  const closeBtn = document.getElementById('closeLightboxBtn');
  const mediaContainer = document.getElementById('lightboxMediaWrapper');
  const captionBox = document.getElementById('lightboxCaptionText');

  // Gallery Video Reference
  const gallerySection = document.getElementById('gallery');

  // Entry Advertisement Modal Elements
  const adModal = document.getElementById('entryAdModal') || document.getElementById('adModalOverlay');
  const closeAdBtn = document.getElementById('closeAdBtn');

  // Floating Facebook Share Button
  const fbShareBtn = document.getElementById('fbShareBtn');

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
     2. ROUTING / VIEW SWITCHING INTERACTION ENGINE (Fixed Display Stack)
     ========================================================================== */
  function switchView(targetSectionId) {
    if (!targetSectionId) return;

    // Pause gallery video if switching away from the gallery section
    if (targetSectionId !== 'gallery' && gallerySection) {
      const galleryVideo = gallerySection.querySelector('video');
      if (galleryVideo) {
        galleryVideo.pause();
      }
    }

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
        section.style.display = 'block';
      } else {
        section.classList.remove('active-section');
        section.style.display = 'none';
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

    // Update URL hash safely without triggering page reloads
    if (history.pushState) {
      history.pushState(null, null, `#${targetSectionId}`);
    } else {
      window.location.hash = targetSectionId;
    }

    // 4. Hide Mobile Sidebar Upon Selection
    if (window.innerWidth <= 768 && sidebar) {
      sidebar.classList.remove('mobile-show');
    }
  }

  // Attach click listeners to menu items
  if (menuItems.length > 0) {
    menuItems.forEach(item => {
      if (item.getAttribute('target') === '_blank') return;

      item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSectionId = item.getAttribute('data-target');
        switchView(targetSectionId);
      });
    });
  }

  /* ==========================================================================
     3. PRODUCT & GALLERY LIGHTBOX OVERLAY CONTROLLER (Fixed Height & Dynamic Fit)
     ========================================================================== */
  if (lightboxOverlay && mediaContainer && captionBox) {

    const formatSrc = (src) => {
      if (!src) return '';
      return (src.startsWith('./') || src.startsWith('http') || src.startsWith('/')) ? src : `./${src}`;
    };

    const appendImageNode = (url) => {
      const img = document.createElement('img');
      img.src = formatSrc(url);
      img.alt = 'Gallery Display Resource';
      img.style.setProperty('max-width', '100%', 'important');
      img.style.setProperty('max-height', '70vh', 'important');
      img.style.setProperty('width', 'auto', 'important');
      img.style.setProperty('height', 'auto', 'important');
      img.style.setProperty('object-fit', 'contain', 'important');
      img.style.setProperty('border-radius', '8px', 'important');
      img.style.setProperty('display', 'block', 'important');
      img.style.setProperty('margin', '0 auto', 'important');
      mediaContainer.appendChild(img);
    };

    const appendVideoNode = (url) => {
      const video = document.createElement('video');
      video.controls = true;
      video.autoplay = true;
      video.muted = true;
      video.playsInline = true;
      video.style.setProperty('max-width', '100%', 'important');
      video.style.setProperty('max-height', '70vh', 'important');
      video.style.setProperty('width', 'auto', 'important');
      video.style.setProperty('height', 'auto', 'important');
      video.style.setProperty('border-radius', '8px', 'important');
      video.style.setProperty('background-color', '#000', 'important');

      const source = document.createElement('source');
      source.src = formatSrc(url);
      source.type = url.endsWith('.webm') ? 'video/webm' : 'video/mp4';

      video.appendChild(source);
      mediaContainer.appendChild(video);
      video.load();
    };

    const clearAndDismissLightbox = () => {
      lightboxOverlay.classList.remove('active-view');
      lightboxOverlay.style.display = 'none';
      mediaContainer.innerHTML = '';
      mediaContainer.classList.remove('gallery-layout-active');
    };

    // Event Delegation
    document.addEventListener('click', (event) => {
      const card = event.target.closest('.product-modal-trigger');
      if (!card) return;

      const type = card.getAttribute('data-type');
      const currentLang = localStorage.getItem('preferredLang') || 'en';
      const chosenCaption = card.getAttribute(`data-${currentLang}-caption`) || card.getAttribute('data-en-caption') || '';

      lightboxOverlay.style.setProperty('display', 'flex', 'important');
      lightboxOverlay.style.setProperty('justify-content', 'center', 'important');
      lightboxOverlay.style.setProperty('align-items', 'center', 'important');

      mediaContainer.innerHTML = '';
      mediaContainer.className = "lightbox-media-wrapper";
      mediaContainer.style.setProperty('display', 'flex', 'important');
      mediaContainer.style.setProperty('flex-direction', 'column', 'important');
      mediaContainer.style.setProperty('align-items', 'center', 'important');
      mediaContainer.style.setProperty('justify-content', 'center', 'important');
      mediaContainer.style.setProperty('width', '100%', 'important');
      mediaContainer.style.setProperty('height', 'auto', 'important');
      mediaContainer.style.setProperty('max-height', '80vh', 'important');
      mediaContainer.style.setProperty('overflow', 'visible', 'important');

      if (type === 'gallery') {
        const rawSources = card.getAttribute('data-sources');
        if (rawSources) {
          try {
            const mediaAssets = JSON.parse(rawSources);
            mediaContainer.classList.add('gallery-layout-active');
            mediaAssets.forEach(sourceUrl => {
              if (sourceUrl.endsWith('.mp4') || sourceUrl.endsWith('.webm')) {
                appendVideoNode(sourceUrl);
              } else {
                appendImageNode(sourceUrl);
              }
            });
          } catch (error) {
            console.error("Error parsing gallery data-sources JSON:", error);
          }
        }
      } else {
        const singleSource = card.getAttribute('data-src');
        if (type === 'image' && singleSource) {
          appendImageNode(singleSource);
        } else if (type === 'video' && singleSource) {
          appendVideoNode(singleSource);
        } else if (singleSource) {
          appendImageNode(singleSource);
        }
      }

      captionBox.textContent = chosenCaption || '';
      captionBox.style.setProperty('color', '#263238', 'important');
      captionBox.style.setProperty('text-align', 'center', 'important');
      captionBox.style.setProperty('margin-top', '12px', 'important');
      captionBox.style.setProperty('font-size', '1rem', 'important');
      captionBox.style.setProperty('font-weight', '600', 'important');
      mediaContainer.appendChild(captionBox);

      lightboxOverlay.classList.add('active-view');
    });

    if (closeBtn) closeBtn.addEventListener('click', clearAndDismissLightbox);

    lightboxOverlay.addEventListener('click', (event) => {
      if (event.target === lightboxOverlay) clearAndDismissLightbox();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && (lightboxOverlay.classList.contains('active-view') || lightboxOverlay.style.display === 'flex')) {
        clearAndDismissLightbox();
      }
    });
  }

  /* ==========================================================================
     4. ENTRY ADVERTISEMENT MODAL CONTROLLER
     ========================================================================== */
  if (adModal) {
    if (!sessionStorage.getItem('adShown')) {
      adModal.style.display = 'flex';
      adModal.classList.add('active-view');
    }

    const dismissAd = () => {
      adModal.classList.remove('active-view');
      adModal.style.display = 'none';
      sessionStorage.setItem('adShown', 'true');
    };

    if (closeAdBtn) closeAdBtn.addEventListener('click', dismissAd);

    adModal.addEventListener('click', (e) => {
      if (e.target === adModal) dismissAd();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && (adModal.classList.contains('active-view') || adModal.style.display === 'flex')) {
        dismissAd();
      }
    });
  }

  /* ==========================================================================
     5. DOM TRANSLATION ENGINE (ENGLISH / NEPALI)
     ========================================================================== */
  function setLanguage(lang) {
    const localizableElements = document.querySelectorAll('[data-en][data-np]:not(.header-title)');

    localizableElements.forEach(element => {
      const translation = lang === 'np' ? element.getAttribute('data-np') : element.getAttribute('data-en');

      if (element.tagName.toLowerCase() === 'img') {
        element.setAttribute('alt', translation);
      } else {
        element.textContent = translation;
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
     6. INITIALIZE DEFAULT NAVIGATION ROUTE
     ========================================================================== */
  const defaultLang = localStorage.getItem('preferredLang') || 'en';
  setLanguage(defaultLang);

  const currentHash = window.location.hash.replace('#', '');
  const validSections = Array.from(contentSections).map(s => s.id);

  if (currentHash && validSections.includes(currentHash)) {
    switchView(currentHash);
  } else {
    switchView('home');
  }

  /* ==========================================================================
     7. BACKGROUND TAB VISIBILITY MONITOR
     ========================================================================== */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && gallerySection) {
      const galleryVideo = gallerySection.querySelector('video');
      if (galleryVideo) galleryVideo.pause();
    }
  });

  /* ==========================================================================
     8. FLOATING FACEBOOK SHARE CONTROLLER
     ========================================================================== */
  if (fbShareBtn) {
    fbShareBtn.addEventListener('click', async () => {
      const currentUrl = window.location.href;
      const currentLang = localStorage.getItem('preferredLang') || 'en';

      const shareTitle = 'Bhimbadh Multipurpose Agro';
      const shareText = currentLang === 'np'
        ? 'आधुनिक दिगो अभ्यासहरू मार्फत स्थानीय कृषिलाई सशक्त बनाउँदै।'
        : 'Empowering local agriculture through modern sustainable practices.';

      if (navigator.share) {
        try {
          await navigator.share({
            title: shareTitle,
            text: shareText,
            url: currentUrl
          });
          return;
        } catch (error) {
          if (error.name === 'AbortError') return;
          console.error('Native web share failed, launching fallback popup...', error);
        }
      }

      const encodedUrl = encodeURIComponent(currentUrl);
      const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;

      const width = 626;
      const height = 436;
      const left = (screen.width / 2) - (width / 2);
      const top = (screen.height / 2) - (height / 2);

      window.open(
        facebookShareUrl,
        'facebook-share-dialog',
        `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
      );
    });
  }
});
