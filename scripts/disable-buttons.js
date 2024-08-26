var ebback = document.getElementById("ebback");
var ebforward = document.getElementById("ebforward");

if (history.length <= 1) { ebback.classList.add("off"); ebforward.classList.add("off"); }
else { ebback.classList.remove("off"); ebforward.classList.remove("off"); }

var params = new URLSearchParams(location.search);

if (params.get("redir") == "back") { ebback.classList.add("off"); }
if (params.get("redir") == "forward") { ebforward.classList.add("off"); }

var ebinfo = document.getElementById("ebinfo");
var href = ebinfo.getAttribute('href');

if (!href || href.trim().length < 1) { ebinfo.classList.add("off"); }
else { ebinfo.classList.remove("off"); }