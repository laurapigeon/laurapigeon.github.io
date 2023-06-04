// script.js
window.addEventListener('DOMContentLoaded', () => {
    const contents = document.querySelectorAll('.content');
  
    contents.forEach(content => {
      const textboxes = content.querySelectorAll('.textbox');
  
      let maxHeight = 0;
      textboxes.forEach(textbox => {
        const height = textbox.offsetTop + textbox.offsetHeight;
        maxHeight = Math.max(maxHeight, height);
      });
      content.style.height = maxHeight + 'px';
    });
  });