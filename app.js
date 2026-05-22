document.addEventListener('DOMContentLoaded', () => {
  
  // DOM ELEMENT SELECTORS
  const sidebarToggle = document.getElementById('sidebarToggle');
  const sidebar = document.getElementById('sidebar');
  const mainWrapper = document.getElementById('mainWrapper');
  const menuItems = document.querySelectorAll('.menu-item');
  const contentSections = document.querySelectorAll('.content-section');
  
  const btnEn = document.getElementById('btnEn');
  const btnNp = document.getElementById('btnNp');

  /* ==========================================================================
     1. SIDEBAR TOGGLE MECHANICS
     ========================================================================== */
  sidebarToggle.addEventListener('click', () => {
    if (window.innerWidth > 768) {
      // Desktop behavior: Collapse or expand layout gracefully
      sidebar.classList.toggle('collapsed');
      mainWrapper.classList.toggle('expanded');
    } else {
      // Mobile behavior: Slide out overlay menu panel completely
      sidebar.classList.toggle('mobile-show');
    }
  });

  // Close mobile sidebar contextually when hitting a link option
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
      
      // Update UI active styling highlights inside navigation list
      menuItems.forEach(link => link.classList.remove('active'));
      item.classList.add('active');

      // Pivot target display area view elements
      const targetSectionId = item.getAttribute('data-target');
      contentSections.forEach(section => {
        section.classList.remove('active-section');
        if (section.id === targetSectionId) {
          section.classList.add('active-section');
        }
      });

      // Automatically hide visible layout block overlay panel on mobile devices
      if (window.innerWidth <= 768) {
        sidebar.classList.remove('mobile-show');
      }
    });
  });

  /* ==========================================================================
     3. DOM TRANSLATION ENGINE (ENGLISH / NEPALI)
     ========================================================================== */
  function setLanguage(lang) {
    // Select all elements containing data translations
    const localizableElements = document.querySelectorAll('[data-en][data-np]');
    
    localizableElements.forEach(element => {
      if (lang === 'np') {
        element.textContent = element.getAttribute('data-np');
      } else {
        element.textContent = element.getAttribute('data-en');
      }
    });

    // Update Language Selection Buttons UI View State toggles
    if (lang === 'np') {
      btnNp.classList.add('active');
      btnEn.classList.remove('active');
      document.documentElement.lang = 'ne';
    } else {
      btnEn.classList.add('active');
      btnNp.classList.remove('active');
      document.documentElement.lang = 'en';
    }
  }

  // Bind Switch Event Listeners to Buttons
  btnEn.addEventListener('click', () => setLanguage('en'));
  btnNp.addEventListener('click', () => setLanguage('np'));
});