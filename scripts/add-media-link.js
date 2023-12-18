window.addEventListener('DOMContentLoaded', function() {
    const contents = document.querySelectorAll('.content');
    
    contents.forEach(content => {
        const contentelements = content.querySelectorAll('.image, .textbox');

        contentelements.forEach(function(contentelement) {
            var url = contentelement.dataset.url;
            if (url) {
                const border = document.createElement('div');
                border.classList.add('border');
                contentelement.appendChild(border);

                contentelement.addEventListener("click", function(event) {
                    if (!isTextSelected() && !isClickedOnSelectedText(event)) {
                        window.location.href = url;
                    }
                });

                contentelement.addEventListener("mousedown", function(event) {
                    if (event.button === 1) { // Middle mouse button
                        window.open(url,'_blank');
                        window.open(this.href,'_self');
                    }
                });
            }
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
});