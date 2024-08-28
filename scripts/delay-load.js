var content = document.getElementById("content");
var paragraphs = content.querySelectorAll("p, a");

paragraphs.forEach(paragraph => {
    paragraph.classList.add("hidden");
});