/**
 * Therapy Nest — Accessible Accordion Controller
 * Implements smooth height transitions and aria-expanded state handling for FAQs.
 */

document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
});

function initAccordion() {
  const accordionItems = document.querySelectorAll('.c-accordion__item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.c-accordion__header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('c-accordion__item--open');

      // Optional: Close siblings if single-panel behavior is desired
      // accordionItems.forEach((sibling) => sibling.classList.remove('c-accordion__item--open'));

      if (isOpen) {
        item.classList.remove('c-accordion__item--open');
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('c-accordion__item--open');
        header.setAttribute('aria-expanded', 'true');
      }
    });

    // Keyboard navigation (Arrow keys)
    header.addEventListener('keydown', (e) => {
      const parent = item.parentElement;
      const allHeaders = Array.from(parent.querySelectorAll('.c-accordion__header'));
      const currentIndex = allHeaders.indexOf(header);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextHeader = allHeaders[(currentIndex + 1) % allHeaders.length];
        if (nextHeader) nextHeader.focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevHeader = allHeaders[(currentIndex - 1 + allHeaders.length) % allHeaders.length];
        if (prevHeader) prevHeader.focus();
      }
    });
  });
}
