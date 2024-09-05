window.addEventListener('load', getContentHeight);
window.addEventListener("load", laggyUnhide);
window.addEventListener('load', alignCentered);
['load', 'resize'].forEach(event => { window.addEventListener(event, disableScrollbar); });
['load', 'scroll', 'resize'].forEach(event => { window.addEventListener(event, setScrollbarPos); });
['load', 'scroll', 'resize'].forEach(event => { window.addEventListener(event, setTransformOrigin); });

const sbtop = document.getElementById('sbtop');
sbtop.addEventListener("click", () => { window.scrollBy(0, -64); });

const sbbottom = document.getElementById('sbbottom');
sbbottom.addEventListener("click", () => { window.scrollBy(0, 64); });

const ebsearch = document.getElementById('ebsearch');
const ebcontents = document.getElementById('ebcontents');
const ebsbbody = document.getElementById("ebsbbody");
ebsearch.addEventListener("click", () => { ebcontents.classList.toggle("search"); ebsbbody.focus(); });
ebsbbody.addEventListener('select', () => { ebsbbody.selectionStart = ebsbbody.selectionEnd; });

const mbmusic = document.getElementById('mbmusic');
const mediabar = document.getElementById('mediabar');
const audio = document.querySelector('audio');
mbmusic.addEventListener("click", () => {
    mediabar.classList.toggle("on");
    if (mediabar.classList.contains("on")) { audio.play(); }
    else { audio.pause(); audio.currentTime = 0; }
});
audio.onended = function(){
    this.currentTime = 0;
    var delay = setTimeout(function(){
        audio.play();
        clearTimeout(delay);
    }, 1000);
}

const tbminimise = document.getElementById('tbminimise');
tbminimise.addEventListener("click", () => { document.body.classList.add("minimise"); }); // window.scrollTo(0, 0);

const browsericon = document.getElementById('browsericon');
browsericon.addEventListener("click", () => { document.body.classList.remove("minimise"); setScrollbarPos() });
