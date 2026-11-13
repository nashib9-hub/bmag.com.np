/* ==========================================================================
   1. CODER-CONFIGURED ACCOUNT CREDENTIALS (NO SIGN-UP OPTION)
   ========================================================================== */
const AUTHORIZED_ACCOUNTS = [
  { userId: 'admin', password: 'agro1176', displayName: 'Agro Admin' },
  { userId: 'dijan', password: 'president1176', displayName: 'Dijan Rana (President)' },
  { userId: 'surendra', password: 'secretary1176', displayName: 'Er. Surendra Thapa' }
];

/* ==========================================================================
   2. DEFAULT SITE DATA
   ========================================================================== */
const DEFAULT_SITE_DATA = {
  stats: [
    { id: 'stat-1', icon: 'ri-seedling-line', titleEn: 'Active Farms', titleNp: 'सक्रिय फार्महरू', valueEn: '124+', valueNp: '१२४+' },
    { id: 'stat-2', icon: 'ri-group-line', titleEn: 'Involved Farmers', titleNp: 'आवद्ध कृषकहरू', valueEn: '40+', valueNp: '४०+' },
    { id: 'stat-3', icon: 'ri-hand-coin-line', titleEn: 'Total Yield', titleNp: 'कुल उत्पादन', valueEn: '180 Tons', valueNp: '१८० टन' }
  ],
  about: {
    textEn: "Bhimbadh Multipurpose Agro Group Pvt. Ltd. is dedicated to elevating Nepal's agricultural standard. We unify traditional organic methods with progressive agro-tech to optimize crop lifecycles and increase economic independence for our rural cooperative farming groups.",
    textNp: "भिम्वाँद बहुउद्देश्यीय एग्रो ग्रुप प्रा. लि. नेपालको कृषि क्षेत्रको स्तर उकास्न समर्पित छ। हामी बालीचक्रलाई सुधार्न र हाम्रा ग्रामीण सहकारी खेती समूहहरूको आर्थिक आत्मनिर्भरता बढाउन परम्परागत जैविक विधिलाई आधुनिक कृषि-प्रविधिसँग जोड्छौं।"
  },
  committee: [
    {
      id: 'comm-1',
      nameEn: 'Dijan Rana',
      nameNp: 'डिजन राना',
      roleEn: 'President',
      roleNp: 'अध्यक्ष',
      email: 'Dijanido666@gmail.com',
      phone: '+977-9766610415',
      image: 'president.jpeg'
    },
    {
      id: 'comm-2',
      nameEn: 'Som Kumar Shrestha',
      nameNp: 'सोम कुमार श्रेष्ठ',
      roleEn: 'Vice President',
      roleNp: 'उपाध्यक्ष',
      email: 'som.shrestha@example.com',
      phone: '+977-9800000000',
      image: 'vp.png'
    },
    {
      id: 'comm-3',
      nameEn: 'Er. Surendra Thapa',
      nameNp: 'इ. सुरेन्द्र थापा',
      roleEn: 'Secretary',
      roleNp: 'सचिव',
      email: 'surendrathapa180@gmail.com',
      phone: '+977-9805811275',
      image: 'surendra.png'
    },
    {
      id: 'comm-4',
      nameEn: 'Suraj B.K',
      nameNp: 'सुरज बि.क.',
      roleEn: 'Vice-Secretary',
      roleNp: 'सह-सचिव',
      email: 'suraj.bk@example.com',
      phone: '+977 980-0000000',
      image: 'suraj.png'
    }
  ],
  products: [
    {
      id: 'prod-1',
      titleEn: 'Nashe Adhuwa (New Harvest)',
      titleNp: 'नासे अदुवा (नयाँ बाली)',
      highlightEn: 'Cultivated Across 50 Ropani Land',
      highlightNp: '५० रोपनी जग्गामा उत्पादित',
      descEn: 'High-quality organic local ginger cultivated across 50 Ropani of fertile land. Fresh harvest preparing for market soon.',
      descNp: '५० रोपनी उर्वर जग्गामा उत्पादित उच्च गुणस्तरको स्थानीय जैविक अदुवा। छिट्टै बजारमा बिक्रीको लागि तयार हुँदैछ।',
      priceInfoEn: 'Area: 50 Ropani Land',
      priceInfoNp: 'क्षेत्रफल: ५० रोपनी जग्गा',
      statusEn: 'Going to Sell Soon',
      statusNp: 'बिक्री हुन लागिरहेको',
      statusColor: '#f57c00',
      image: 'adhuwaland.jpeg'
    },
    {
      id: 'prod-2',
      titleEn: 'Premium Dolpa Yarshagumba',
      titleNp: 'प्रिमियम डोल्पा यार्सागुम्बा',
      highlightEn: 'Wild Himalayan Cordyceps • 25 kg In Stock',
      highlightNp: 'हिमाली प्राकृतिक यार्सागुम्बा • २५ केजी स्टकमा',
      descEn: 'High-quality wild cordyceps hand-picked from the Himalayan slopes of Dolpa. Standard: Rs. 1,000/pc | Premium: Rs. 3,000/pc.',
      descNp: 'डोल्पाको हिमाली भेगबाट टिपिएको उच्च गुणस्तरको प्राकृतिक यार्सागुम्बा। साधारण: रु. १,०००/पिस | प्रिमियम: रु. ३,०००/पिस।',
      priceInfoEn: 'Standard: Rs. 1,000/pc | Premium: Rs. 3,000/pc',
      priceInfoNp: 'साधारण: रु. १,०००/पिस | प्रिमियम: रु. ३,०००/पिस',
      statusEn: '25 kg Available',
      statusNp: '२५ केजी उपलब्ध छ',
      statusColor: '#2e7d32',
      image: 'yarsa.jpg'
    },
    {
      id: 'prod-3',
      titleEn: 'Organic Dolpa Apples',
      titleNp: 'जैविक डोल्पा स्याउ',
      highlightEn: 'High-Altitude Orchard Harvest • 5 Tons Available',
      highlightNp: 'उच्च हिमाली बगैंचाको स्याउ • ५ टन उपलब्ध',
      descEn: 'Crisp, sweet organic apples harvested directly from high-altitude orchards in Dolpa.',
      descNp: 'डोल्पाको उच्च हिमाली भेगको बगैंचाबाट टिपिएका ताजा र गुलियो जैविक स्याउ।',
      priceInfoEn: 'Standard: Rs. 400/kg | Delivery: Rs. 500/kg',
      priceInfoNp: 'साधारण: रु. ४००/केजी | डेलिभरी सहित: रु. ५००/केजी',
      statusEn: '5 Tons Available',
      statusNp: '५ टन उपलब्ध छ',
      statusColor: '#2e7d32',
      image: 'apple.jpg'
    },
    {
      id: 'prod-4',
      titleEn: 'Cayenne Khursani',
      titleNp: 'कायेन खुर्सानी',
      highlightEn: '1 Ton Harvested & Sold Out',
      highlightNp: '१ टन उत्पादन र बिक्री सम्पन्न',
      descEn: 'Premium fiery local chili harvest grown with natural organic compost.',
      descNp: 'प्राकृतिक जैविक मल प्रयोग गरी उत्पादन गरिएको प्रिमियम पिरो स्थानीय खुर्सानी बाली।',
      priceInfoEn: 'Total Production: 1 Ton',
      priceInfoNp: 'कुल उत्पादन: १ टन',
      statusEn: 'Sold Out',
      statusNp: 'सबै बिक्री भयो',
      statusColor: '#c62828',
      image: 'cayenne.jpg'
    },
    {
      id: 'prod-5',
      titleEn: 'Akabare Khursani',
      titleNp: 'अकबरे खुर्सानी',
      highlightEn: 'Authentic Local Round Chili • 1 Ton',
      highlightNp: 'प्रख्यात स्थानीय डल्ले खुर्सानी • १ टन',
      descEn: 'Authentic aromatic round hot chili harvested by our cooperative farmers.',
      descNp: 'हाम्रा सहकारी कृषकहरूद्वारा उत्पादित प्रख्यात स्थानीय डल्ले खुर्सानी।',
      priceInfoEn: 'Total Production: 1 Ton',
      priceInfoNp: 'कुल उत्पादन: १ टन',
      statusEn: 'Sold Out',
      statusNp: 'सबै बिक्री भयो',
      statusColor: '#c62828',
      image: 'akhabare.png'
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      categoryEn: 'Ginger Farming and Production',
      categoryNp: 'अदुवा खेती र उत्पादन',
      titleEn: 'Ginger Farm Overview',
      titleNp: 'अदुवा बारी दृश्य',
      highlightEn: '50 Ropani Commercial Ginger Cultivation',
      highlightNp: '५० रोपनी क्षेत्रमा अदुवा खेती',
      descEn: 'Overview of our large-scale organic ginger farm in Bhimbadh.',
      descNp: '५० रोपनी क्षेत्रमा गरिएको उच्च गुणस्तरको अदुवा खेती।',
      mediaType: 'video',
      src: 'adhuwavideo.mp4'
    },
    {
      id: 'gal-2',
      categoryEn: 'Ginger Farming and Production',
      categoryNp: 'अदुवा खेती र उत्पादन',
      titleEn: 'Land Preparation',
      titleNp: 'जग्गा तयारी',
      highlightEn: 'Soil Enrichment & Organic Terracing',
      highlightNp: 'माटो सुधार तथा जैविक तयारी',
      descEn: 'Preparing fertile terraced slopes for ginger rhizome planting.',
      descNp: 'अदुवा खेतीको लागि जग्गा तयारी।',
      mediaType: 'image',
      src: 'biruwa.jpg'
    },
    {
      id: 'gal-3',
      categoryEn: 'Ginger Farming and Production',
      categoryNp: 'अदुवा खेती र उत्पादन',
      titleEn: 'Ginger & Maize Crop',
      titleNp: 'अदुवा तथा मकै खेती',
      highlightEn: 'Sustainable Intercropping System',
      highlightNp: 'दिगो अन्तरबाली प्रणाली',
      descEn: 'Intercropping maize and ginger to maximize soil nutrients and shade.',
      descNp: 'अदुवा तथा मकै खेतीको संयुक्त उत्पादन।',
      mediaType: 'image',
      src: 'kheti.jpg'
    },
    {
      id: 'gal-4',
      categoryEn: 'Game Program',
      categoryNp: 'खेलकुद कार्यक्रम',
      titleEn: '3rd Bhimbadh Volleyball Cup',
      titleNp: 'तेस्रो भिम्वाँद बहुउद्देश्यीय कप-२०८३',
      highlightEn: 'Ward Level Male Volleyball Tournament',
      highlightNp: 'वडा स्तरीय पुरुष भलिबल प्रतियोगिता',
      descEn: '3rd Bhimbadh Multipurpose Cup-2083 Ward Level Male Volleyball Cup.',
      descNp: 'तेस्रो भिम्वाँद बहुउद्देश्यीय कप-२०८३ वडा स्तरीय पुरुष भलिबल प्रतियोगिता।',
      mediaType: 'image',
      src: '3rdbmagcup.jpg'
    },
    {
      id: 'gal-5',
      categoryEn: 'Game Program',
      categoryNp: 'खेलकुद कार्यक्रम',
      titleEn: 'U14 Football Tournament',
      titleNp: 'यु-१४ फुटबल प्रतियोगिता',
      highlightEn: 'Youth Sports & Community Engagement',
      highlightNp: 'युवा खेलकुद तथा सामुदायिक सहभागिता',
      descEn: 'Bhimbadh Multipurpose Agro Group U14 Football Tournament.',
      descNp: 'भिम्वाँद बहुउद्देश्यीय एग्रो ग्रुप यु-१४ फुटबल प्रतियोगिता।',
      mediaType: 'image',
      src: 'footballbmag.jpg'
    }
  ],
  contact: {
    addressEn: 'Bhimbadh, Bhimad Municipality, Tanahun, Gandaki Province, Nepal',
    addressNp: 'भिम्वाँद, भिमाद नगरपालिका, तनहुँ, गण्डकी प्रदेश, नेपाल',
    phone: '+977-9766610415, +977-9805811275',
    email: 'Dijanido666@gmail.com',
    hoursEn: 'Sunday – Friday: 9:00 AM – 5:00 PM',
    hoursNp: 'आइतबार – शुक्रबार: बिहान ९:०० – बेलुका ५:००'
  }
};

const STORAGE_KEY = 'bhimbadh_agro_cms_data_v1';
const SESSION_KEY = 'bhimbadh_agro_logged_user';

let siteData = loadSiteData();
let currentUser = null;
let currentLang = 'en';

try {
  const rawUser = sessionStorage.getItem(SESSION_KEY);
  const parsedUser = rawUser ? JSON.parse(rawUser) : null;
  if (parsedUser && parsedUser.userId && parsedUser.displayName) {
    currentUser = parsedUser;
  }
  currentLang = localStorage.getItem('preferredLang') || 'en';
} catch (e) {
  currentUser = null;
}

function loadSiteData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.stats && parsed.products && parsed.gallery) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn('Using default site data.');
  }
  return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
}

function saveSiteData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
  } catch (e) {
    alert('Storage limit reached! Please use smaller images or image URLs.');
  }
  renderAllSections();
}

function isAdminLoggedIn() {
  return Boolean(currentUser && currentUser.userId);
}

function setOverlayVisible(elementId, visible) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.classList.toggle('is-hidden', !visible);
  el.style.display = visible ? 'flex' : 'none';
}

/* ==========================================================================
   3. GLOBAL VIEW SWITCHER & LANGUAGE ENGINE
   ========================================================================== */
function switchView(targetSectionId, updateHistory = true) {
  if (!targetSectionId) return;

  const menuItems = document.querySelectorAll('.menu-item');
  const contentSections = document.querySelectorAll('.content-section');
  const headerTitle = document.querySelector('.header-title');
  const sidebar = document.getElementById('sidebar');

  menuItems.forEach(link => {
    if (link.getAttribute('data-target') === targetSectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  contentSections.forEach(section => {
    if (section.id === targetSectionId) {
      section.classList.add('active-section');
      section.style.display = 'block';
    } else {
      section.classList.remove('active-section');
      section.style.display = 'none';
    }
  });

  const activeItem = document.querySelector(`.menu-item[data-target="${targetSectionId}"]`);
  if (activeItem && headerTitle) {
    const span = activeItem.querySelector('span');
    if (span) {
      headerTitle.setAttribute('data-en', span.getAttribute('data-en') || '');
      headerTitle.setAttribute('data-np', span.getAttribute('data-np') || '');
      headerTitle.textContent = span.getAttribute(`data-${currentLang}`) || span.textContent;
    }
  }

  if (updateHistory && window.history && window.history.pushState) {
    window.history.pushState(null, null, `#${targetSectionId}`);
  }

  if (window.innerWidth <= 768 && sidebar) {
    sidebar.classList.remove('mobile-show');
  }
}

function applyLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('preferredLang', lang);
  } catch (e) { }

  const btnEn = document.getElementById('btnEn');
  const btnNp = document.getElementById('btnNp');
  if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  if (btnNp) btnNp.classList.toggle('active', lang === 'np');

  document.documentElement.lang = lang === 'np' ? 'ne' : 'en';

  document.querySelectorAll('[data-en][data-np]').forEach(el => {
    const text = lang === 'np' ? el.getAttribute('data-np') : el.getAttribute('data-en');
    if (text) el.textContent = text;
  });

  renderAllSections();
}

function t(enText, npText) {
  return currentLang === 'np' && npText ? npText : enText;
}

function updateAuthUI() {
  const loggedIn = isAdminLoggedIn();
  const loginBtn = document.getElementById('openLoginModalBtn');
  const loggedBar = document.getElementById('adminLoggedBar');
  const adminBanner = document.getElementById('adminBanner');
  const userDisplay = document.getElementById('loggedUserDisplay');

  if (loginBtn) {
    loginBtn.classList.toggle('is-hidden', loggedIn);
    loginBtn.style.display = loggedIn ? 'none' : 'inline-flex';
  }

  if (loggedBar) {
    loggedBar.classList.toggle('is-hidden', !loggedIn);
    loggedBar.style.display = loggedIn ? 'flex' : 'none';
  }

  if (adminBanner) {
    adminBanner.classList.toggle('is-hidden', !loggedIn);
    adminBanner.style.display = loggedIn ? 'flex' : 'none';
  }

  if (loggedIn && currentUser && userDisplay) {
    userDisplay.textContent = currentUser.displayName;
  }

  document.querySelectorAll('.admin-only').forEach(el => {
    el.classList.toggle('is-hidden', !loggedIn);
    el.style.display = loggedIn ? 'inline-flex' : 'none';
  });
}

/* ==========================================================================
   4. GLOBAL EVENT DELEGATION
   ========================================================================== */
document.addEventListener('click', (e) => {
  // 1. Sidebar Navigation Links
  const menuLink = e.target.closest('.menu-item');
  if (menuLink && menuLink.hasAttribute('data-target')) {
    e.preventDefault();
    switchView(menuLink.getAttribute('data-target'), true);
    return;
  }

  // 2. Language Buttons
  if (e.target.closest('#btnEn')) {
    applyLanguage('en');
    return;
  }
  if (e.target.closest('#btnNp')) {
    applyLanguage('np');
    return;
  }

  // 3. Sidebar Toggle Button
  if (e.target.closest('#sidebarToggle')) {
    const sidebar = document.getElementById('sidebar');
    const mainWrapper = document.getElementById('mainWrapper');
    if (sidebar) {
      if (window.innerWidth > 768) {
        sidebar.classList.toggle('collapsed');
        if (mainWrapper) mainWrapper.classList.toggle('expanded');
      } else {
        sidebar.classList.toggle('mobile-show');
      }
    }
    return;
  }

  // 4. Open Login Modal
  if (e.target.closest('#openLoginModalBtn')) {
    const errBox = document.getElementById('loginErrorMsg');
    const form = document.getElementById('adminLoginForm');
    if (errBox) {
      errBox.classList.add('is-hidden');
      errBox.style.display = 'none';
    }
    if (form) form.reset();
    
    // Reset password eye toggle state on modal open
    const passwordInput = document.getElementById('loginPassword');
    const eyeIcon = document.getElementById('toggleEyeIcon');
    if (passwordInput && eyeIcon) {
      passwordInput.type = 'password';
      eyeIcon.className = 'ri-eye-off-line';
    }

    setOverlayVisible('loginModalOverlay', true);
    return;
  }

  // 5. Close Login Modal
  if (e.target.closest('#closeLoginModalBtn') || e.target.id === 'loginModalOverlay') {
    setOverlayVisible('loginModalOverlay', false);
    return;
  }

  // 6. Toggle Password Visibility Button
  const passwordToggle = e.target.closest('#togglePasswordBtn');
  if (passwordToggle) {
    const passwordInput = document.getElementById('loginPassword');
    const eyeIcon = document.getElementById('toggleEyeIcon');
    if (passwordInput && eyeIcon) {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.className = 'ri-eye-line';
      } else {
        passwordInput.type = 'password';
        eyeIcon.className = 'ri-eye-off-line';
      }
    }
    return;
  }

  // 7. Logout Button
  if (e.target.closest('#logoutBtn')) {
    currentUser = null;
    try { sessionStorage.removeItem(SESSION_KEY); } catch (err) { }
    updateAuthUI();
    renderAllSections();
    switchView('home', true);
    return;
  }

  // 8. Close CRUD Modal
  if (e.target.closest('#closeCrudModalBtn') || e.target.closest('#cancelCrudBtn') || e.target.id === 'crudModalOverlay') {
    closeCrudModal();
    return;
  }

  // 9. Close Lightbox Overlay
  if (e.target.closest('#closeLightboxBtn') || e.target.id === 'productMediaOverlay') {
    setOverlayVisible('productMediaOverlay', false);
    const wrapper = document.getElementById('lightboxMediaWrapper');
    if (wrapper) wrapper.innerHTML = '';
    return;
  }

  // 10. Share Button
  if (e.target.closest('#fbShareBtn')) {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(shareUrl, 'facebook-share', 'width=600,height=420');
  }
});

// Handle Login Form Submission
document.addEventListener('submit', (e) => {
  if (e.target && e.target.id === 'adminLoginForm') {
    e.preventDefault();
    const enteredId = document.getElementById('loginUserId').value.trim();
    const enteredPass = document.getElementById('loginPassword').value;

    const matchedAccount = AUTHORIZED_ACCOUNTS.find(
      acc => acc.userId === enteredId && acc.password === enteredPass
    );

    if (matchedAccount) {
      currentUser = { userId: matchedAccount.userId, displayName: matchedAccount.displayName };
      try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(currentUser)); } catch (err) { }
      setOverlayVisible('loginModalOverlay', false);
      updateAuthUI();
      renderAllSections();
    } else {
      const errBox = document.getElementById('loginErrorMsg');
      if (errBox) {
        errBox.classList.remove('is-hidden');
        errBox.style.display = 'flex';
      }
    }
  }
});

/* ==========================================================================
   5. LIGHTBOX & SECTION RENDERERS
   ========================================================================== */
function openLightbox(src, mediaType, caption) {
  const wrapper = document.getElementById('lightboxMediaWrapper');
  const captionEl = document.getElementById('lightboxCaptionText');
  if (!wrapper) return;

  wrapper.innerHTML = '';
  if (mediaType === 'video') {
    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.style.maxWidth = '90vw';
    video.style.maxHeight = '75vh';
    video.style.borderRadius = '8px';
    wrapper.appendChild(video);
  } else {
    const img = document.createElement('img');
    img.src = src;
    img.alt = caption || 'Preview';
    img.style.maxWidth = '90vw';
    img.style.maxHeight = '75vh';
    img.style.borderRadius = '8px';
    wrapper.appendChild(img);
  }

  if (captionEl) captionEl.textContent = caption || '';
  setOverlayVisible('productMediaOverlay', true);
}

function renderAllSections() {
  renderStats();
  renderAbout();
  renderCommittee();
  renderProducts();
  renderGallery();
  renderContact();
}

function renderStats() {
  const container = document.getElementById('statsGridContainer');
  if (!container) return;
  const admin = isAdminLoggedIn();

  container.innerHTML = siteData.stats.map(stat => `
    <div class="stat-card">
      ${admin ? `
        <div class="card-admin-toolbar">
          <button class="btn-card-edit" onclick="openStatModal('${stat.id}')"><i class="ri-edit-line"></i> Edit</button>
          <button class="btn-card-delete" onclick="deleteStat('${stat.id}')"><i class="ri-delete-bin-line"></i> Delete</button>
        </div>
      ` : ''}
      <i class="${stat.icon || 'ri-leaf-line'} card-icon"></i>
      <h3>${t(stat.titleEn, stat.titleNp)}</h3>
      <p class="stat-value">${t(stat.valueEn, stat.valueNp)}</p>
    </div>
  `).join('');
}

function renderAbout() {
  const container = document.getElementById('aboutContentContainer');
  if (!container) return;
  container.innerHTML = `<p>${t(siteData.about.textEn, siteData.about.textNp)}</p>`;
}

function renderCommittee() {
  const container = document.getElementById('committeeGridContainer');
  if (!container) return;
  const admin = isAdminLoggedIn();

  container.innerHTML = siteData.committee.map(member => `
    <div class="info-card committee-card">
      ${admin ? `
        <div class="card-admin-toolbar">
          <button class="btn-card-edit" onclick="openCommitteeModal('${member.id}')"><i class="ri-edit-line"></i> Edit</button>
          <button class="btn-card-delete" onclick="deleteCommittee('${member.id}')"><i class="ri-delete-bin-line"></i> Delete</button>
        </div>
      ` : ''}
      <div class="avatar-circle-wrapper">
        <img src="${member.image || 'president.jpeg'}" alt="${member.nameEn}" class="committee-circle-img" onerror="this.src='https://via.placeholder.com/150?text=Member'">
      </div>
      <h3>${t(member.nameEn, member.nameNp)}</h3>
      <span class="role-badge">${t(member.roleEn, member.roleNp)}</span>
      <div class="member-contact-details">
        <p><i class="ri-mail-line"></i> <a href="mailto:${member.email}">${member.email}</a></p>
        <p><i class="ri-phone-line"></i> <span>${member.phone}</span></p>
      </div>
    </div>
  `).join('');
}

function renderProducts() {
  const container = document.getElementById('productsGridContainer');
  if (!container) return;
  const admin = isAdminLoggedIn();

  container.innerHTML = siteData.products.map(prod => {
    const title = t(prod.titleEn, prod.titleNp);
    const highlight = t(prod.highlightEn, prod.highlightNp);
    const desc = t(prod.descEn, prod.descNp);
    const priceInfo = t(prod.priceInfoEn, prod.priceInfoNp);
    const status = t(prod.statusEn, prod.statusNp);
    const safeImg = (prod.image || '').replace(/'/g, "\\'");
    const safeCap = `${title} — ${highlight}: ${desc}`.replace(/'/g, "\\'");

    return `
      <div class="info-card product-card">
        <div>
          ${admin ? `
            <div class="card-admin-toolbar">
              <button class="btn-card-edit" onclick="openProductModal('${prod.id}')"><i class="ri-edit-line"></i> Update</button>
              <button class="btn-card-delete" onclick="deleteProduct('${prod.id}')"><i class="ri-delete-bin-line"></i> Delete</button>
            </div>
          ` : ''}
          <div class="product-clickable-area" onclick="openLightbox('${safeImg}', 'image', '${safeCap}')">
            <div class="product-image-wrapper">
              <img src="${prod.image}" alt="${title}" class="product-img" onerror="this.src='https://via.placeholder.com/400x250?text=Agro+Product'">
            </div>
            ${highlight ? `<span class="product-highlight-pill"><i class="ri-sparkling-fill"></i> ${highlight}</span>` : ''}
            <h3>${title}</h3>
            <p class="product-desc-text">${desc}</p>
          </div>
        </div>

        <div>
          <div class="product-pricing">
            ${priceInfo ? `<p><strong>${t('Details:', 'विवरण:')}</strong> ${priceInfo}</p>` : ''}
            ${status ? `
              <p style="color: ${prod.statusColor || '#2e7d32'}; font-weight: 600;">
                <i class="ri-information-line"></i> ${status}
              </p>
            ` : ''}
          </div>
          <span class="role-badge" style="cursor:pointer;" onclick="openLightbox('${safeImg}', 'image', '${safeCap}')">
            ${t('Click Preview', 'प्रिभ्यू हेर्नुहोस्')}
          </span>
        </div>
      </div>
    `;
  }).join('');
}

function renderGallery() {
  const container = document.getElementById('galleryCategoriesContainer');
  if (!container) return;
  const admin = isAdminLoggedIn();

  const groups = {};
  siteData.gallery.forEach(item => {
    const key = item.categoryEn || 'General Gallery';
    if (!groups[key]) {
      groups[key] = {
        categoryEn: item.categoryEn || 'General Gallery',
        categoryNp: item.categoryNp || item.categoryEn || 'ग्यालेरी',
        items: []
      };
    }
    groups[key].items.push(item);
  });

  container.innerHTML = Object.values(groups).map(group => `
    <div class="gallery-category-block">
      <h3 class="category-heading">
        <i class="ri-folder-image-line"></i>
        <span>${t(group.categoryEn, group.categoryNp)}</span>
      </h3>
      <div class="info-grid gallery-grid">
        ${group.items.map(item => {
    const title = t(item.titleEn, item.titleNp);
    const highlight = t(item.highlightEn, item.highlightNp);
    const desc = t(item.descEn, item.descNp);
    const safeSrc = (item.src || '').replace(/'/g, "\\'");
    const safeCap = `${title}${highlight ? ' — ' + highlight : ''}`.replace(/'/g, "\\'");

    return `
            <div class="info-card gallery-card">
              ${admin ? `
                <div class="card-admin-toolbar">
                  <button class="btn-card-edit" onclick="openGalleryModal('${item.id}')"><i class="ri-edit-line"></i> Update</button>
                  <button class="btn-card-delete" onclick="deleteGalleryItem('${item.id}')"><i class="ri-delete-bin-line"></i> Delete</button>
                </div>
              ` : ''}
              ${item.mediaType === 'video' ? `
                <video controls src="${item.src}"></video>
              ` : `
                <img src="${item.src}" alt="${title}" style="cursor:pointer;"
                     onclick="openLightbox('${safeSrc}', 'image', '${safeCap}')"
                     onerror="this.src='https://via.placeholder.com/400x250?text=Gallery+Image'">
              `}
              ${highlight ? `<span class="gallery-highlight-badge"><i class="ri-star-smile-line"></i> ${highlight}</span>` : ''}
              <h3 style="margin-top: 10px;">${title}</h3>
              ${desc ? `<p class="gallery-desc-text">${desc}</p>` : ''}
            </div>
          `;
  }).join('')}
      </div>
    </div>
  `).join('');
}

function renderContact() {
  const container = document.getElementById('contactContainer');
  if (!container) return;
  const c = siteData.contact;
  container.innerHTML = `
    <div class="info-card">
      <div class="contact-item-row">
        <i class="ri-map-pin-line"></i>
        <div>
          <strong>${t('Office Address', 'कार्यालय ठेगाना')}</strong>
          <p style="color: var(--muted); margin-top: 4px;">${t(c.addressEn, c.addressNp)}</p>
        </div>
      </div>
      <div class="contact-item-row">
        <i class="ri-phone-line"></i>
        <div>
          <strong>${t('Phone Number', 'फोन नम्बर')}</strong>
          <p style="color: var(--muted); margin-top: 4px;">${c.phone}</p>
        </div>
      </div>
    </div>
    <div class="info-card">
      <div class="contact-item-row">
        <i class="ri-mail-send-line"></i>
        <div>
          <strong>${t('Email Address', 'इमेल ठेगाना')}</strong>
          <p style="color: var(--muted); margin-top: 4px;"><a href="mailto:${c.email}">${c.email}</a></p>
        </div>
      </div>
      <div class="contact-item-row">
        <i class="ri-time-line"></i>
        <div>
          <strong>${t('Working Hours', 'कार्यालय समय')}</strong>
          <p style="color: var(--muted); margin-top: 4px;">${t(c.hoursEn, c.hoursNp)}</p>
        </div>
      </div>
    </div>
  `;
}

/* ==========================================================================
   6. CRUD MODAL BUILDERS & FILE UPLOAD HANDLER
   ========================================================================== */
function openCrudModal(title, subtitle, fieldsHtml, onSubmitCallback) {
  document.getElementById('crudModalTitle').textContent = title;
  document.getElementById('crudModalSubtitle').textContent = subtitle;
  document.getElementById('crudFormFields').innerHTML = fieldsHtml;

  const form = document.getElementById('crudModalForm');
  form.onsubmit = (e) => {
    e.preventDefault();
    onSubmitCallback(new FormData(form));
    closeCrudModal();
  };

  setOverlayVisible('crudModalOverlay', true);
}

function closeCrudModal() {
  setOverlayVisible('crudModalOverlay', false);
}

function readUploadedFileAsDataURL(fileInput, callback) {
  const file = fileInput.files && fileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => callback(ev.target.result);
  reader.readAsDataURL(file);
}

window.openProductModal = function (id = null) {
  const existing = id ? siteData.products.find(p => p.id === id) : null;
  const html = `
    <div class="form-row-2">
      <div class="form-group">
        <label>Product Name (English)*</label>
        <input type="text" name="titleEn" value="${existing ? existing.titleEn : ''}" required>
      </div>
      <div class="form-group">
        <label>Product Name (Nepali)</label>
        <input type="text" name="titleNp" value="${existing ? existing.titleNp : ''}">
      </div>
    </div>
    <div class="form-row-2">
      <div class="form-group">
        <label>Highlights Caption (English)*</label>
        <input type="text" name="highlightEn" value="${existing ? existing.highlightEn : ''}" required>
      </div>
      <div class="form-group">
        <label>Highlights Caption (Nepali)</label>
        <input type="text" name="highlightNp" value="${existing ? existing.highlightNp : ''}">
      </div>
    </div>
    <div class="form-group">
      <label>Description (English)*</label>
      <textarea name="descEn" rows="2" required>${existing ? existing.descEn : ''}</textarea>
    </div>
    <div class="form-group">
      <label>Description (Nepali)</label>
      <textarea name="descNp" rows="2">${existing ? existing.descNp : ''}</textarea>
    </div>
    <div class="form-row-2">
      <div class="form-group">
        <label>Price / Yield Info (EN)</label>
        <input type="text" name="priceInfoEn" value="${existing ? existing.priceInfoEn : ''}">
      </div>
      <div class="form-group">
        <label>Stock / Status (EN)</label>
        <input type="text" name="statusEn" value="${existing ? existing.statusEn : ''}">
      </div>
    </div>
    <div class="form-group">
      <label>Product Image (Upload Photo or Enter Image Path/URL)*</label>
      <div class="file-upload-box">
        <div>Upload from device:</div>
        <input type="file" accept="image/*" onchange="readUploadedFileAsDataURL(this, (dataUrl) => document.getElementById('prodImgInput').value = dataUrl)">
      </div>
      <input type="text" id="prodImgInput" name="image" style="margin-top:8px;" placeholder="apple.jpg or https://..." value="${existing ? existing.image : ''}" required>
    </div>
  `;

  openCrudModal(
    existing ? 'Update Product' : 'Add New Product',
    'Manage product image, highlights caption, and description',
    html,
    (fd) => {
      const payload = {
        id: existing ? existing.id : 'prod-' + Date.now(),
        titleEn: fd.get('titleEn'),
        titleNp: fd.get('titleNp') || fd.get('titleEn'),
        highlightEn: fd.get('highlightEn'),
        highlightNp: fd.get('highlightNp') || fd.get('highlightEn'),
        descEn: fd.get('descEn'),
        descNp: fd.get('descNp') || fd.get('descEn'),
        priceInfoEn: fd.get('priceInfoEn'),
        priceInfoNp: fd.get('priceInfoEn'),
        statusEn: fd.get('statusEn'),
        statusNp: fd.get('statusEn'),
        statusColor: '#2e7d32',
        image: fd.get('image')
      };
      if (existing) {
        const idx = siteData.products.findIndex(p => p.id === id);
        siteData.products[idx] = payload;
      } else {
        siteData.products.unshift(payload);
      }
      saveSiteData();
    }
  );
};

window.deleteProduct = function (id) {
  if (confirm('Delete this product permanently?')) {
    siteData.products = siteData.products.filter(p => p.id !== id);
    saveSiteData();
  }
};

window.openGalleryModal = function (id = null) {
  const existing = id ? siteData.gallery.find(g => g.id === id) : null;
  const html = `
    <div class="form-row-2">
      <div class="form-group">
        <label>Gallery Group Title (English)*</label>
        <input type="text" name="categoryEn" value="${existing ? existing.categoryEn : ''}" required>
      </div>
      <div class="form-group">
        <label>Gallery Group Title (Nepali)</label>
        <input type="text" name="categoryNp" value="${existing ? existing.categoryNp : ''}">
      </div>
    </div>
    <div class="form-row-2">
      <div class="form-group">
        <label>Item Title (English)*</label>
        <input type="text" name="titleEn" value="${existing ? existing.titleEn : ''}" required>
      </div>
      <div class="form-group">
        <label>Item Title (Nepali)</label>
        <input type="text" name="titleNp" value="${existing ? existing.titleNp : ''}">
      </div>
    </div>
    <div class="form-row-2">
      <div class="form-group">
        <label>Highlights Caption (English)*</label>
        <input type="text" name="highlightEn" value="${existing ? existing.highlightEn : ''}" required>
      </div>
      <div class="form-group">
        <label>Highlights Caption (Nepali)</label>
        <input type="text" name="highlightNp" value="${existing ? existing.highlightNp : ''}">
      </div>
    </div>
    <div class="form-group">
      <label>Description</label>
      <textarea name="descEn" rows="2">${existing ? existing.descEn : ''}</textarea>
    </div>
    <div class="form-group">
      <label>Media Type</label>
      <select name="mediaType">
        <option value="image" ${!existing || existing.mediaType === 'image' ? 'selected' : ''}>Image</option>
        <option value="video" ${existing && existing.mediaType === 'video' ? 'selected' : ''}>Video (.mp4)</option>
      </select>
    </div>
    <div class="form-group">
      <label>Upload Image or Enter File/URL*</label>
      <div class="file-upload-box">
        <div>Select image file from device:</div>
        <input type="file" accept="image/*" onchange="readUploadedFileAsDataURL(this, (dataUrl) => document.getElementById('galSrcInput').value = dataUrl)">
      </div>
      <input type="text" id="galSrcInput" name="src" style="margin-top:8px;" placeholder="kheti.jpg or https://..." value="${existing ? existing.src : ''}" required>
    </div>
  `;

  openCrudModal(
    existing ? 'Update Gallery Item' : 'Add Gallery Item',
    'Organize gallery items under custom titles with highlights captions',
    html,
    (fd) => {
      const payload = {
        id: existing ? existing.id : 'gal-' + Date.now(),
        categoryEn: fd.get('categoryEn'),
        categoryNp: fd.get('categoryNp') || fd.get('categoryEn'),
        titleEn: fd.get('titleEn'),
        titleNp: fd.get('titleNp') || fd.get('titleEn'),
        highlightEn: fd.get('highlightEn'),
        highlightNp: fd.get('highlightNp') || fd.get('highlightEn'),
        descEn: fd.get('descEn'),
        descNp: fd.get('descEn'),
        mediaType: fd.get('mediaType'),
        src: fd.get('src')
      };
      if (existing) {
        const idx = siteData.gallery.findIndex(g => g.id === id);
        siteData.gallery[idx] = payload;
      } else {
        siteData.gallery.unshift(payload);
      }
      saveSiteData();
    }
  );
};

window.deleteGalleryItem = function (id) {
  if (confirm('Delete this gallery item?')) {
    siteData.gallery = siteData.gallery.filter(g => g.id !== id);
    saveSiteData();
  }
};

window.openStatModal = function (id = null) {
  const existing = id ? siteData.stats.find(s => s.id === id) : null;
  const html = `
    <div class="form-row-2">
      <div class="form-group">
        <label>Label (English)*</label>
        <input type="text" name="titleEn" value="${existing ? existing.titleEn : ''}" required>
      </div>
      <div class="form-group">
        <label>Label (Nepali)</label>
        <input type="text" name="titleNp" value="${existing ? existing.titleNp : ''}">
      </div>
    </div>
    <div class="form-row-2">
      <div class="form-group">
        <label>Metric Value (English)*</label>
        <input type="text" name="valueEn" value="${existing ? existing.valueEn : ''}" required>
      </div>
      <div class="form-group">
        <label>Metric Value (Nepali)</label>
        <input type="text" name="valueNp" value="${existing ? existing.valueNp : ''}">
      </div>
    </div>
    <div class="form-group">
      <label>RemixIcon Class</label>
      <input type="text" name="icon" value="${existing ? existing.icon : 'ri-seedling-line'}">
    </div>
  `;
  openCrudModal(existing ? 'Update Stat Card' : 'Add Stat Card', 'Edit dashboard summary statistics', html, (fd) => {
    const payload = {
      id: existing ? existing.id : 'stat-' + Date.now(),
      titleEn: fd.get('titleEn'),
      titleNp: fd.get('titleNp') || fd.get('titleEn'),
      valueEn: fd.get('valueEn'),
      valueNp: fd.get('valueNp') || fd.get('valueEn'),
      icon: fd.get('icon') || 'ri-leaf-line'
    };
    if (existing) {
      const idx = siteData.stats.findIndex(s => s.id === id);
      siteData.stats[idx] = payload;
    } else {
      siteData.stats.push(payload);
    }
    saveSiteData();
  });
};

window.deleteStat = function (id) {
  if (confirm('Delete this statistic card?')) {
    siteData.stats = siteData.stats.filter(s => s.id !== id);
    saveSiteData();
  }
};

window.openAboutModal = function () {
  const html = `
    <div class="form-group">
      <label>About Organization (English)*</label>
      <textarea name="textEn" rows="4" required>${siteData.about.textEn}</textarea>
    </div>
    <div class="form-group">
      <label>About Organization (Nepali)</label>
      <textarea name="textNp" rows="4">${siteData.about.textNp}</textarea>
    </div>
  `;
  openCrudModal('Edit About Us', 'Update organization overview', html, (fd) => {
    siteData.about.textEn = fd.get('textEn');
    siteData.about.textNp = fd.get('textNp') || fd.get('textEn');
    saveSiteData();
  });
};

window.openCommitteeModal = function (id = null) {
  const existing = id ? siteData.committee.find(m => m.id === id) : null;
  const html = `
    <div class="form-row-2">
      <div class="form-group">
        <label>Full Name (English)*</label>
        <input type="text" name="nameEn" value="${existing ? existing.nameEn : ''}" required>
      </div>
      <div class="form-group">
        <label>Full Name (Nepali)</label>
        <input type="text" name="nameNp" value="${existing ? existing.nameNp : ''}">
      </div>
    </div>
    <div class="form-row-2">
      <div class="form-group">
        <label>Designation / Role (English)*</label>
        <input type="text" name="roleEn" value="${existing ? existing.roleEn : ''}" required>
      </div>
      <div class="form-group">
        <label>Designation / Role (Nepali)</label>
        <input type="text" name="roleNp" value="${existing ? existing.roleNp : ''}">
      </div>
    </div>
    <div class="form-row-2">
      <div class="form-group">
        <label>Email</label>
        <input type="email" name="email" value="${existing ? existing.email : ''}">
      </div>
      <div class="form-group">
        <label>Phone</label>
        <input type="text" name="phone" value="${existing ? existing.phone : ''}">
      </div>
    </div>
    <div class="form-group">
      <label>Photo Upload or Image Path*</label>
      <div class="file-upload-box">
        <input type="file" accept="image/*" onchange="readUploadedFileAsDataURL(this, (dataUrl) => document.getElementById('commImgInput').value = dataUrl)">
      </div>
      <input type="text" id="commImgInput" name="image" style="margin-top:8px;" value="${existing ? existing.image : ''}" required>
    </div>
  `;
  openCrudModal(existing ? 'Update Committee Member' : 'Add Committee Member', 'Manage executive committee profiles', html, (fd) => {
    const payload = {
      id: existing ? existing.id : 'comm-' + Date.now(),
      nameEn: fd.get('nameEn'),
      nameNp: fd.get('nameNp') || fd.get('nameEn'),
      roleEn: fd.get('roleEn'),
      roleNp: fd.get('roleNp') || fd.get('roleEn'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      image: fd.get('image')
    };
    if (existing) {
      const idx = siteData.committee.findIndex(m => m.id === id);
      siteData.committee[idx] = payload;
    } else {
      siteData.committee.push(payload);
    }
    saveSiteData();
  });
};

window.deleteCommittee = function (id) {
  if (confirm('Remove this committee member?')) {
    siteData.committee = siteData.committee.filter(m => m.id !== id);
    saveSiteData();
  }
};

window.openContactModal = function () {
  const c = siteData.contact;
  const html = `
    <div class="form-group">
      <label>Address (English)*</label>
      <input type="text" name="addressEn" value="${c.addressEn}" required>
    </div>
    <div class="form-group">
      <label>Address (Nepali)</label>
      <input type="text" name="addressNp" value="${c.addressNp}">
    </div>
    <div class="form-row-2">
      <div class="form-group">
        <label>Phone Numbers*</label>
        <input type="text" name="phone" value="${c.phone}" required>
      </div>
      <div class="form-group">
        <label>Email*</label>
        <input type="email" name="email" value="${c.email}" required>
      </div>
    </div>
    <div class="form-group">
      <label>Office Hours (English)</label>
      <input type="text" name="hoursEn" value="${c.hoursEn}">
    </div>
  `;
  openCrudModal('Edit Contact Information', 'Update contact details displayed to visitors', html, (fd) => {
    siteData.contact = {
      addressEn: fd.get('addressEn'),
      addressNp: fd.get('addressNp') || fd.get('addressEn'),
      phone: fd.get('phone'),
      email: fd.get('email'),
      hoursEn: fd.get('hoursEn'),
      hoursNp: siteData.contact.hoursNp
    };
    saveSiteData();
  });
};

/* ==========================================================================
   7. BOOTSTRAP APPLICATION IMMEDIATELY ON LOAD
   ========================================================================== */
function initAgroApp() {
  setOverlayVisible('loginModalOverlay', false);
  setOverlayVisible('crudModalOverlay', false);
  setOverlayVisible('productMediaOverlay', false);

  updateAuthUI();
  renderAllSections();
  applyLanguage(currentLang);

  const initialHash = window.location.hash.replace('#', '');
  const validIds = ['home', 'about', 'committee', 'products', 'gallery', 'contact'];
  switchView(validIds.includes(initialHash) ? initialHash : 'home', false);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAgroApp);
} else {
  initAgroApp();
}
