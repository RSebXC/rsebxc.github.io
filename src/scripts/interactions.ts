const themeSelect = document.querySelector<HTMLSelectElement>('#theme');
if (themeSelect) {
  themeSelect.value = document.documentElement.dataset.theme || 'system';
  themeSelect.addEventListener('change', () => {
    const theme = themeSelect.value;
    if (theme === 'system') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
    try {
      if (theme === 'system') localStorage.removeItem('portfolio-theme');
      else localStorage.setItem('portfolio-theme', theme);
    } catch {
      /* The selected theme still works without persistent storage. */
    }
  });
}

const copyButton =
  document.querySelector<HTMLButtonElement>('[data-copy-email]');
const copyStatus = document.querySelector<HTMLElement>('#copy-status');
copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copyEmail || '');
    if (copyStatus) copyStatus.textContent = copyButton.dataset.copied || '';
  } catch {
    if (copyStatus) copyStatus.textContent = copyButton.dataset.copyError || '';
  }
});

// Content stays visible without JS. Only elements below the viewport are animated.
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal-pending');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
    if (element.getBoundingClientRect().top > window.innerHeight + 24) {
      element.classList.add('reveal-pending');
      observer.observe(element);
    }
  });
  motion.addEventListener('change', () => {
    if (motion.matches) {
      observer.disconnect();
      document
        .querySelectorAll('.reveal-pending')
        .forEach((element) => element.classList.remove('reveal-pending'));
    }
  });
}
