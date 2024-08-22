window.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.image[data-url], p[data-url], div[data-url]');

    elements.forEach(function(element) {
        var url = element.dataset.url;
        const border = document.createElement('div');
        border.classList.add('border');
        element.appendChild(border);

        element.addEventListener("click", function(event) {
            if (!isTextSelected() && !isClickedOnSelectedText(event)) {
                window.location.href = url;
            }
        });

        element.addEventListener("mousedown", function(event) {
            if (event.button === 1) { // Middle mouse button
                window.open(url,'_blank');
                window.open(this.href,'_self');
            }
        });
    });

    function isTextSelected() {
        return window.getSelection().toString().length > 0;
    }

    function isClickedOnSelectedText(event) {
        var selection = window.getSelection();
        if (selection.rangeCount > 0) {
            var range = selection.getRangeAt(0);
            return range.commonAncestorContainer.contains(event.target);
        }
        return false;
    }
});