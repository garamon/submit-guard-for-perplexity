let isComposing = false;

document.addEventListener('compositionstart', () => {
  isComposing = true;
});

document.addEventListener('compositionend', () => {
  isComposing = false;
});

document.addEventListener(
  'keydown',
  (event) => {
    const targetElement = event.target;
    if (targetElement.tagName !== 'TEXTAREA') {
      return;
    }
    if (event.key === 'Enter' && isComposing) {
      event.stopPropagation();
    }
  },
  true,
);
