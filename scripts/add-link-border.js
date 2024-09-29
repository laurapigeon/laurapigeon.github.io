const borders = document.querySelectorAll('.border');
borders.forEach(function(border) {
    //console.log("added");
    const edge = document.createElement('div');
    edge.classList.add('solidborderedge');
    border.appendChild(edge);

    const edgeshadow = document.createElement('div');
    edgeshadow.classList.add('shadowborderedge');
    border.appendChild(edgeshadow);
    
    var images = ["border-shadow-corner.png", "border-corner.png"]
    var tops = ["0%", "0%", "100%", "100%"];
    var topshift = ["0px", "0px", "-2px", "-2px", "-1px", "-1px", "-3px", "-3px"];
    var lefts = ["0%", "100%", "100%", "0%"];
    var leftshift = ["0px", "-2px", "-2px", "0px", "-1px", "-3px", "-3px", "-1px"];

    for (var i = 0; i < 8; i++) {
        var img = document.createElement("img");
        img.src = `/site_resources/images/ants/${images[i < 4 ? 0 : 1]}`;
        img.classList.add('bordercorner');
        img.style.top = tops[i % 4];
        img.style.left = lefts[i % 4];
        img.style.setProperty("transform", `translate(${leftshift[i]}, ${topshift[i]}) rotate(${((i % 4) * 90)}deg)`);
        border.appendChild(img);
    }
});