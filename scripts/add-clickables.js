window.addEventListener('DOMContentLoaded', function() {
    const sbtop = document.getElementById('sbtop');
    sbtop.addEventListener("click", function() {
        window.scrollBy(0, -64); 
    });

    const sbbottom = document.getElementById('sbbottom');
    sbbottom.addEventListener("click", function() {
        window.scrollBy(0, 64); 
    });

});