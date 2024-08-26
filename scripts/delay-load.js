var content = document.getElementById("content");
var paragraphs = content.querySelectorAll("p");

paragraphs.forEach(paragraph => {
    paragraph.classList.add("hidden");
});