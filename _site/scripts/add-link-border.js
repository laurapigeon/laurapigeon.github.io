window.addEventListener('DOMContentLoaded', function() {
    const borders = document.querySelectorAll('.border');
    borders.forEach(function(border) {

        const edge = document.createElement('div');
        edge.classList.add('borderedge');
        edge.style.top = '-2px';
        edge.style.left = '-2px';
        edge.style.padding = '2px 1px 1px 2px';
        edge.style.borderImageSource = 'url("/resources/images/border-1.png")';
        edge.style.animationName = 'antcrawl';
        border.appendChild(edge);

        const edgeshadow = document.createElement('div');
        edgeshadow.classList.add('borderedge');
        edgeshadow.style.top = '-1px';
        edgeshadow.style.left = '-1px';
        edgeshadow.style.padding = '1px 2px 2px 1px';
        edgeshadow.style.borderImageSource = 'url("/resources/images/border-shadow-1.png")';
        edgeshadow.style.animationName = 'antcrawlshadow';
        border.appendChild(edgeshadow);
        
        var images = ["border-shadow-corner.png", "border-corner.png"]
        var tops = ["0%", "0%", "100%", "100%"];
        var topshift = ["-1px", "-1px", "-1px", "-1px", "-2px", "-2px", "-2px", "-2px"];
        var lefts = ["0%", "100%", "100%", "0%"];
        var leftshift = ["-1px", "-1px", "-1px", "-1px", "-2px", "-2px", "-2px", "-2px"];

        for (var i = 0; i < 8; i++) {
            var img = document.createElement("img");
            img.src = "/resources/images/" + images[i < 4 ? 0 : 1];
            img.classList.add('bordercorner');
            img.style.top = tops[i % 4];
            img.style.left = lefts[i % 4];
            img.style.transform = "translate(" + leftshift[i] + ", " + topshift[i] + ") rotate(" + ((i % 4) * 90) + "deg)";
            border.appendChild(img);
        }
    });
});