function historyBackWFallback() {
    var prevPage = window.location.href;

    window.history.go(-1);

    setTimeout(function(){ 
        if (window.location.href == prevPage) {
            window.location.href = "/404?redir=back"; 
        }
    }, 500);
}

function historyForwardWFallback() {
    var prevPage = window.location.href;

    window.history.go(1);

    setTimeout(function(){ 
        if (window.location.href == prevPage) {
            window.location.href = "/404?redir=forward"; 
        }
    }, 500);
}

function alignCentered() {
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
}

function laggyUnhide() {
    var prevMouseX = -1;
    var prevMouseY = -1;
    var mouseX = -1;
    var mouseY = -1;
    function getMousePos(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    }
    window.addEventListener("mousemove", getMousePos);

    const content = document.getElementById("content");
    const paragraphs = content.querySelectorAll("p");
    
    var i = 0;
    var buffer = 0;
    var prevTimeStamp;
    function step(timeStamp) {
        if (buffer <= 0) {
            paragraphs[i].classList.remove("hidden");
            i += 1;
            buffer = (1 + 4*Math.random()**8) * 80;
        }
        if (prevTimeStamp === undefined) {
            prevTimeStamp = timeStamp;
        }
        var deltaT = timeStamp - prevTimeStamp;
        prevTimeStamp = timeStamp;

        const deltaMouseX = mouseX - prevMouseX;
        const deltaMouseY = mouseY - prevMouseY;
        const deltaMouse = Math.sqrt(deltaMouseX**2 + deltaMouseY**2);
        prevMouseX = mouseX;
        prevMouseY = mouseY;
        //console.log(deltaT, deltaMouse, buffer, i);

        buffer -= deltaT + deltaMouse / 3;

        if (i < paragraphs.length) {
            requestAnimationFrame(step);
        }
        else {
            window.removeEventListener("mousemove", getMousePos);
            ['load', 'scroll', 'resize'].forEach(function(e) {
                window.removeEventListener(e, setTransformOrigin);
            });
        }
    }

    requestAnimationFrame(step);
}

function disableScrollbar() {
    var body = document.body,
    html = document.documentElement;
    var height = Math.max(body.clientHeight, body.scrollHeight, body.offsetHeight, 
                            html.clientHeight, html.scrollHeight, html.offsetHeight);
    var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    var scrollbar = document.getElementById("scrollbar");
    if (height <= vh) { scrollbar.classList.add("off"); }
    else { scrollbar.classList.remove("off"); }
}

function getContentHeight() {
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
    var scalercontainer = document.getElementById('scalercontainer');
    scalercontainer.style.height = scaler.offsetHeight + 'px';
    window.scrollTo(0, 0);
}

function resetContentHeight() {
    var scalercontainer = document.getElementById('scalercontainer');
    var content = document.getElementById('content');
    scalercontainer.style.height = '';
    content.style.height = '';
    window.scrollTo(0, 0);
}

function setScrollbarPos() {
    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
    var scrollAmount = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
    var scrollbar = document.getElementById("sbbar");
    var barPosition = scrollAmount * (parseFloat(window.innerHeight) * 0.25 - 68)
    scrollbar.style.marginTop = barPosition + "px";
    //console.log(barPosition);
}

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