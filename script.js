document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
