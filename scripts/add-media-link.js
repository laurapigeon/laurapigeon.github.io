const elements = document.querySelectorAll('p[data-url]');

elements.forEach(function(element) {
    var url = element.dataset.url;
    
    var link = document.createElement('a');
    link.innerHTML = element.innerHTML;
    link.href = url;
    link.classList = element.classList;
    link.style.cssText = element.style.cssText;
    link.tagName = element.tagName;
    element.parentNode.replaceChild(link, element);
    
    const border = document.createElement('div');
    border.classList.add('border');
    link.appendChild(border);

    link.addEventListener("click", function(event) {
        if (!isTextSelected() && !isClickedOnSelectedText(event)) {
            window.location.href = url;
        }
    });

    link.addEventListener("mousedown", function(event) {
        if (event.button === 1) { // Middle mouse button
            window.open(url,'_blank');
            window.open(this.href,'_self');
        }
    });
});