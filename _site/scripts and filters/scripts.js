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

window.addEventListener('DOMContentLoaded', function() {
  var scaler = document.querySelector('.scaler');
  var scalerHeight = scaler.offsetHeight * 4;
  var scalerWidth = scaler.offsetWidth * 4;
  document.body.style.height = scalerHeight + 'px';
  document.body.style.width = scalerWidth + 'px';
});