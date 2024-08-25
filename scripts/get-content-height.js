window.addEventListener('load', function() {
    // Calculate the new height of the content boxes based on the text boxes within
    var content = document.getElementById('content');

    const contentelements = content.querySelectorAll('p');
    
    let maxHeight = 0;
    contentelements.forEach(contentelement => {
        var bottomMargin = parseInt(window.getComputedStyle(contentelement).marginBottom);
        var height = contentelement.offsetTop + contentelement.offsetHeight + bottomMargin;
        if (contentelement.hasAttribute("data-url")) {
            height += 2;
        }
        maxHeight = Math.max(maxHeight, height);
    });
    content.style.height = maxHeight + 'px';

    // Calculate the dimensions of the scaler container based on the scalers height
    var scaler = document.getElementById('scaler');
    scaler.parentElement.style.height = (scaler.offsetHeight * 4) + 'px';
});