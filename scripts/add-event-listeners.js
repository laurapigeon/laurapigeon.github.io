window.addEventListener('load', getContentHeight);
window.addEventListener("load", laggyUnhide);
window.addEventListener('load', alignCentered);
['load', 'resize'].forEach(e => { window.addEventListener(e, disableScrollbar); });
['load', 'scroll', 'resize'].forEach(e => { window.addEventListener(e, setScrollbarPos); });
['load', 'scroll', 'resize'].forEach(e => { window.addEventListener(e, setTransformOrigin); });

const sbtop = document.getElementById('sbtop');
sbtop.addEventListener("click", () => { window.scrollBy(0, -64); });

const sbbottom = document.getElementById('sbbottom');
sbbottom.addEventListener("click", () => { window.scrollBy(0, 64); });

const ebsearch = document.getElementById('ebsearch');
const ebcontents = document.getElementById('ebcontents');
const ebsbbody = document.getElementById("ebsbbody");
ebsearch.addEventListener("click", () => { ebcontents.classList.toggle("search"); ebsbbody.focus(); });
ebsbbody.addEventListener('select', () => { ebsbbody.selectionStart = ebsbbody.selectionEnd; });

const tbminimise = document.getElementById('tbminimise');
tbminimise.addEventListener("click", () => { document.body.classList.add("minimise"); resetContentHeight(); });

const browsericon = document.getElementById('browsericon');
browsericon.addEventListener("click", () => { document.body.classList.remove("minimise"); getContentHeight(); });
