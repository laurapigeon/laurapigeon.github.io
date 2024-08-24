window.addEventListener('load', function() {
    const elements = document.querySelectorAll('.center');

    elements.forEach(function(element) {
        var computedStyle = window.getComputedStyle(element);
        var elementMargin = parseFloat(computedStyle.marginLeft);
        //console.log(elementMargin);
        if (elementMargin % 1 !== 0) {
            //console.log(element.textContent)
            element.style.marginLeft = Math.floor(elementMargin) + "px";
            element.style.marginRight = Math.ceil(elementMargin) + "px";
        }
    });
});