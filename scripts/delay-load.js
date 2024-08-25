var content = document.getElementById("content");
var paragraphs = content.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    paragraph.classList.add("hidden");
});

window.addEventListener("load", function() {
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
            buffer = 150;
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

        buffer -= deltaT + deltaMouse / 2;

        if (i < paragraphs.length) {
            requestAnimationFrame(step);
        }
        else { window.removeEventListener("mousemove", getMousePos); }
    }

    requestAnimationFrame(step);
    /*var delta = 0;
    var time = loadevent.timeStamp;
    addEventListener("mousemove", function(event) {
        delta += event.movementX ** 2 + event.movementY ** 2
        deltatime = event.timeStamp - time;
        delta += deltatime * mouseAmount / timeAmount;
        time = event.timeStamp;
        if (delta > index * mouseAmount) {
            paragraph.classList.remove("hidden");
        }
    });
    setTimeout(function () {
        paragraph.classList.remove("hidden");
    }, index * timeAmount);*/
});
