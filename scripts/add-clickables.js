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

const tbminimise = document.getElementById('tbminimise');
tbminimise.addEventListener("click", function() {
    document.body.classList.add("minimise");
});

const browsericon = document.getElementById('browsericon');
browsericon.addEventListener("click", function() {
    document.body.classList.remove("minimise");
});

var inp = document.getElementById('ebsbbody');
inp.addEventListener('select', function() {
  this.selectionStart = this.selectionEnd;
}, false);