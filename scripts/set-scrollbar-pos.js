window.addEventListener("scroll", function() {
    var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
    var scrollAmount = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
    var scrollbar = document.getElementById("sbbar");
    var barPosition = scrollAmount * (parseFloat(window.innerHeight) * 0.25 - 68)
    scrollbar.style.top = barPosition + "px";
    //console.log(barPosition);
});