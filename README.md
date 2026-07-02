Bhimbadh Multipurpose Agro Group
A modern, responsive, and bilingual single-page dashboard application built for Bhimbadh Multipurpose Agro Group Pvt. Ltd. based in Tanahun, Nepal. The platform serves as a digital touchpoint showcasing active farms, agricultural stats, products, and organizational hierarchy in both English and Nepali.

🚀 Features
Bilingual Support: Real-time, seamless switching between English (EN) and Nepali (नेपाली) language data attributes without reloading the page.

Single Page Application (SPA) Flow: Sidebar-driven content navigation with custom dynamic visibility handling via a centralized layout wrapper.

Interactive Product Showcase: Integrated lightbox media overlay module (#productMediaOverlay) supporting high-resolution image previews, dynamic asset loading, and localized contextual captions.

Infinite Marquee Broadcast: An animated top-header announcement ticker engineered using CSS keyframes and aria-hidden cloning tactics for glitch-free looping.

Responsive Workspace Layout: Dual-mode layout structures (collapsible .sidebar paired with an adaptive .main-wrapper) built exclusively to fit all device viewports natively.

📂 Project Structure
Plaintext
├── index.html       # Structural entrypoint with embedded bilingual text hooks
├── style.css        # Layout layout, typography configurations, and animation directives
└── app.js           # Responsive UI logic, localized toggling, and lightbox engine
🛠️ Architecture and Dependencies
This project relies on zero heavy frameworks to keep loading times fast and performance optimized for rural connection profiles:

Icons Framework: Remix Icon (v3.5.0) via CDN for vector glyphs.

Typography Engine: Google Fonts pipeline serving Inter (optimized for geometric UI readability) and Hind (optimized natively for Devnagari script/Nepali characters formatting).

Standard Compliance: Core document semantics conforming to standard HTML5 and CSS3 structural principles.

💻 Tech Stack Implementation Details
Bilingual Translation Pattern
The application uses HTML5 custom data attributes (data-en and data-np) directly in the markup to manage multi-language nodes safely within the DOM.

HTML
<h3 data-en="Active Farms" data-np="सक्रिय फार्महरू">Active Farms</h3>
Media Lightbox Mechanism
The application listens for click interactions on element selectors carrying the class .product-modal-trigger to pass direct attributes down to the global viewport modal portal:

data-type: Specifies payload nature (e.g., image).

data-src: Direct system URI pathing to the product image asset file.

data-en-caption / data-np-caption: Standardized localization string arrays rendered systematically dynamically depending on active UI context.

⚙️ Quick Start & Local Setup
Clone the Repository:

Bash
git clone <your-repository-url>
cd bhimbadh-agro-platform
Add Local Media Assets: Ensure the product image files match the inline data targets. Place your image files (such as apple.jpg) into the root directory of your project space.

Launch the Engine: Since this project is constructed using vanilla web standards, you can open index.html directly in any browser:

VS Code Users: Right-click index.html and select Open with Live Server.

Alternative: Simply double-click the file inside your local file explorer system.
