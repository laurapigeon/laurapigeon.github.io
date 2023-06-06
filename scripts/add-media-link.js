window.addEventListener('DOMContentLoaded', function() {
    const textboxes = document.querySelectorAll('.textbox');

    textboxes.forEach(function(textbox) {
        var url = textbox.dataset.url;
        if (url) {
            const border = document.createElement('div');
            border.classList.add('textboxborder')
            border.style.top = '-3px';
            border.style.left = '-3px';
            border.style.padding = '2px 1px 0px 2px';
            border.style.borderImageSource = 'url("/resources/images/border-1.png")';
            border.style.animationName = 'antcrawl';
            textbox.appendChild(border);

            const bordershadow = document.createElement('div');
            bordershadow.classList.add('textboxborder')
            bordershadow.style.top = '-2px';
            bordershadow.style.left = '-2px';
            bordershadow.style.padding = '1px 2px 1px 1px';
            bordershadow.style.borderImageSource = 'url("/resources/images/border-shadow-1.png")';
            bordershadow.style.animationName = 'antcrawlshadow';
            textbox.appendChild(bordershadow);
            
            var images = ["border-corner.png", "border-shadow-corner.png"]
            var tops = ["0%", "0%", "100%", "100%"];
            var topshift = ["-2px", "-2px", "-1px", "-1px", "-3px", "-3px", "-2px", "-2px"];
            var lefts = ["0%", "100%", "100%", "0%"];
            var leftshift = ["-2px", "0px", "0px", "-2px", "-3px", "-1px", "-1px", "-3px"];

            // Create and add images to the container
            for (var i = 0; i < 8; i++) {
                var img = document.createElement("img");
                img.src = "/resources/images/" + images[i >= 4 ? 0 : 1];
                img.className = "textboxcorner";
                img.style.top = tops[i % 4];
                img.style.left = lefts[i % 4];
                img.style.transform = "translate(" + leftshift[i] + ", " + topshift[i] + ") rotate(" + ((i % 4) * 90) + "deg)";
                textbox.appendChild(img);
            }

            textbox.addEventListener("click", function(event) {
                if (!isTextSelected() && !isClickedOnSelectedText(event)) {
                    window.location.href = url;
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