['load', 'scroll', 'resize'].forEach(function(e) {
    window.addEventListener(e, setTransformOrigin);
});

function setTransformOrigin() {
    var content = document.getElementById('content');
    var paragraphs = content.querySelectorAll('p');

    // Loop through paragraphs replacing text contents with lineboxes
    paragraphs.forEach(paragraph => {
        var viewportOffset = paragraph.getBoundingClientRect();
        let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        var transformOriginX = (vw / 2 - parseFloat(viewportOffset.left)) / 4 + "px";
        var transformOriginY = (vh / 2 - parseFloat(viewportOffset.top)) / 4 + "px";
        //console.log(paragraph.textContent, vw, viewportOffset.left);
        paragraph.style.transformOrigin = transformOriginX + " " + transformOriginY;
    });
}