const sbtop = document.getElementById('sbtop');
sbtop.addEventListener("click", function() {
    window.scrollBy(0, -64); 
});

const sbbottom = document.getElementById('sbbottom');
sbbottom.addEventListener("click", function() {
    window.scrollBy(0, 64); 
});

const ebsearch = document.getElementById('ebsearch');
const ebcontents = document.getElementById('ebcontents');
ebsearch.addEventListener("click", function() {
    ebcontents.classList.toggle("search");
});