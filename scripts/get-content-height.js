window.addEventListener('load', function() {
    // Calculate the new height of the content boxes based on the text boxes within
    const content = document.getElementById('content');

    const contentelements = content.querySelectorAll('p');
    
    let maxHeight = 0;
    contentelements.forEach(contentelement => {
        var bottomMargin = parseInt(window.getComputedStyle(contentelement).marginBottom);
        const height = contentelement.offsetTop + contentelement.offsetHeight + bottomMargin;
        maxHeight = Math.max(maxHeight, height);
    });
    // 2px extra in case of links
    content.style.height = maxHeight + 2 + 'px';

    // Calculate the dimensions of the scaler container based on the scalers height
    var scaler = document.getElementById('scaler');
    scaler.parentElement.style.height = (scaler.offsetHeight * 4) + 'px';
    scaler.parentElement.style.width = (scaler.offsetWidth * 4) + 'px';
});