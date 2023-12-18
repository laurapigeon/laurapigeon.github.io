window.addEventListener('load', function() {
    // Calculate the new height of the content boxes based on the text boxes within
    const contents = document.querySelectorAll('.content');
    
    contents.forEach(content => {
        const contentelements = content.querySelectorAll('.image, .textbox');
        
        let maxHeight = 0;
        contentelements.forEach(contentelement => {
            const height = contentelement.offsetTop + contentelement.offsetHeight;
            maxHeight = Math.max(maxHeight, height);
        });
        content.style.height = (maxHeight + 3) + 'px';
    });
  
    // Calculate the dimensions of the scaler container based on the scalers height
    var scaler = document.querySelector('.scaler');
    scaler.parentElement.style.height = (scaler.offsetHeight * 4) + 'px';
    scaler.parentElement.style.width = (scaler.offsetWidth * 4) + 'px';
});