document.addEventListener('DOMContentLoaded', () => {
  const navbars = document.querySelectorAll('.navbar');

  navbars.forEach((navbar) => {
    const toggle = navbar.querySelector('.nav-toggle');
    const menu = navbar.querySelector('ul');
    if (!toggle || !menu) return;

    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    };

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      const nextState = !expanded;
      toggle.setAttribute('aria-expanded', String(nextState));
      menu.classList.toggle('is-open', nextState);
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 820px)').matches) {
          closeMenu();
        }
      });
    });

    window.addEventListener('resize', () => {
      if (!window.matchMedia('(max-width: 820px)').matches) {
        closeMenu();
      }
    });
  });
});
