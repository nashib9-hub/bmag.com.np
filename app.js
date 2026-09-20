document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const menuItems = document.querySelectorAll('.menu-item');
  const sections = document.querySelectorAll('.content-section');
  const headerTitle = document.querySelector('.header-title');
  const toggleBtn = document.querySelector('.toggle-btn');
  const sidebar = document.querySelector('.sidebar');
  const mainWrapper = document.querySelector('.main-wrapper');

  /**
   * Router / Tab Switching Logic
   * Displays the target section and hides all others.
   */
  function switchTab(targetId) {
    if (!targetId) return;

    // Clean up hashtag if present in href (e.g., "#about" -> "about")
    const cleanId = targetId.replace('#', '');
    const targetSection = document.getElementById(cleanId);
    const activeMenuLink = document.querySelector(`.menu-item[href="#${cleanId}"]`);

    // 1. Hide all content sections and remove active class
    sections.forEach(section => {
      section.classList.remove('active-section');
      section.style.display = 'none'; // Force display none to override CSS ambiguities
    });

    // 2. Remove active state from all sidebar menu links
    menuItems.forEach(item => item.classList.remove('active'));

    // 3. Show the selected section if it exists
    if (targetSection) {
      targetSection.classList.add('active-section');

      // Layout exception handling (Flex layout for committee section, block for others)
      if (cleanId === 'committee') {
        targetSection.style.display = 'flex';
      } else {
        targetSection.style.display = 'block';
      }

      // Update Top Header Title to reflect active page title
      if (activeMenuLink && headerTitle) {
        headerTitle.textContent = activeMenuLink.textContent.trim();
      }
    }

    // 4. Set active state on the clicked sidebar menu link
    if (activeMenuLink) {
      activeMenuLink.classList.add('active');
    }
  }

  /**
   * Click Event Handlers for Sidebar Navigation Links
   */
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');

      if (targetId) {
        switchTab(targetId);

        // Update URL hash without forcing jump scroll
        history.pushState(null, null, targetId);

        // Auto-close sidebar drawer on mobile after clicking a navigation link
        if (sidebar && sidebar.classList.contains('mobile-show')) {
          sidebar.classList.remove('mobile-show');
        }
      }
    });
  });

  /**
   * Responsive Sidebar Toggle Button Logic
   */
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        sidebar.classList.toggle('mobile-show');
      } else {
        sidebar.classList.toggle('collapsed');
        if (mainWrapper) {
          mainWrapper.classList.toggle('expanded');
        }
      }
    });
  }

  /**
   * Handle Browser Back / Forward Button Navigation
   */
  window.addEventListener('popstate', () => {
    const currentHash = window.location.hash || '#home';
    switchTab(currentHash);
  });

  /**
   * Initial Load: Load section based on current URL hash or default to home
   */
  const initialHash = window.location.hash || '#home';
  switchTab(initialHash);
});
