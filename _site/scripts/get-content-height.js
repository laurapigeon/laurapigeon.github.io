window.addEventListener('load', function() {
    // Calculate the new height of the content boxes based on the text boxes within
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
  
  
    // Calculate the dimensions of the scaler container based on the scalers height
    var scaler = document.querySelector('.scaler');
    scaler.parentElement.style.height = (scaler.offsetHeight * 4) + 'px';
    scaler.parentElement.style.width = (scaler.offsetWidth * 4) + 'px';
});