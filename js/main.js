/**
 * Therapy Nest — Master Application Controller
 * Handles sticky header, accessible mobile drawer navigation, and smooth interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNavigation();
  initActiveNavLink();
});

/**
 * 1. Sticky Header Scroll Effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.c-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('c-header--scrolled');
    } else {
      header.classList.remove('c-header--scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 2. Accessible Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.c-nav-toggle');
  const drawer = document.querySelector('.c-nav-drawer');
  if (!toggleBtn || !drawer) return;

  const toggleDrawer = (open) => {
    const isOpen = open !== undefined ? open : !drawer.classList.contains('c-nav-drawer--open');
    drawer.classList.toggle('c-nav-drawer--open', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';

    if (isOpen) {
      const firstLink = drawer.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  };

  toggleBtn.addEventListener('click', () => toggleDrawer());

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('c-nav-drawer--open')) {
      toggleDrawer(false);
      toggleBtn.focus();
    }
  });

  // Close when clicking a drawer link
  drawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleDrawer(false));
  });
}

/**
 * 3. Highlight Active Navigation Link Based on URL
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const navLinks = document.querySelectorAll('.c-nav-link, .c-nav-drawer__link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Direct match or root index match
    if (href === currentPath || (currentPath === '/' && (href === 'index.html' || href === '/'))) {
      link.classList.add('c-nav-link--active');
    } else if (href !== '/' && href !== 'index.html' && currentPath.endsWith(href.replace(/^\//, ''))) {
      link.classList.add('c-nav-link--active');
    }
  });
}
