window.addEventListener('DOMContentLoaded', function() {
  const textboxes = document.querySelectorAll('.textbox');

  textboxes.forEach(function(textbox) {
    var url = textbox.dataset.url;
    if (url) {
      textbox.addEventListener("click", function(event) {
        if (!isTextSelected() && !isClickedOnSelectedText(event)) {
          window.location.href = url;
        }
      });
    }
  });

  function isTextSelected() {
    return window.getSelection().toString().length > 0;
  }

  function isClickedOnSelectedText(event) {
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
      var range = selection.getRangeAt(0);
      return range.commonAncestorContainer.contains(event.target);
    }
    return false;
  }
});