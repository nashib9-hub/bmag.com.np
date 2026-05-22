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

      if (window.innerWidth <= 768) {
        sidebar.classList.remove('mobile-show');
      }
    });
  });

  /* ==========================================================================
     3. DOM TRANSLATION ENGINE (ENGLISH / NEPALI)
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
    
    // Optional: Save preference so refresh doesn't reset language
    localStorage.setItem('preferredLang', lang);
  }

  // Bind Switch Event Listeners to Buttons
  btnEn.addEventListener('click', () => setLanguage('en'));
  btnNp.addEventListener('click', () => setLanguage('np'));

  /* ==========================================================================
     4. INITIALIZE DEFAULT LANGUAGE ON LOAD
     ========================================================================== */
  // Checks if user has a saved preference, otherwise defaults to English ('en')
  const defaultLang = localStorage.getItem('preferredLang') || 'en';
  setLanguage(defaultLang);
});
