// script.js
window.addEventListener('DOMContentLoaded', () => {
  const contents = document.querySelectorAll('.content');
  
  contents.forEach(content => {
    const textboxes = content.querySelectorAll('.textbox');
  
    let maxHeight = 0;
    textboxes.forEach(textbox => {
      const height = textbox.offsetTop + textbox.offsetHeight;
      maxHeight = Math.max(maxHeight, height);
    });
    content.style.height = maxHeight + 'px';
  });
});

window.addEventListener('DOMContentLoaded', () => {
  var scaler = document.querySelector('.scaler');
  var scalerHeight = scaler.offsetHeight * 4;
  var scalerWidth = scaler.offsetWidth * 4;
  document.body.style.height = scalerHeight + 'px';
  document.body.style.width = scalerWidth + 'px';
});

window.addEventListener('DOMContentLoaded', () => {
  // Get the text box elements
  const textboxes = document.querySelectorAll('.textbox');

  textboxes.forEach(textbox => {

    // Get the computed style of the text box
    const computedStyle = window.getComputedStyle(textbox);
    
    if (computedStyle.textAlign === 'center') {

      // Get the width of the text box
      const textboxWidth = parseInt(computedStyle.width);
      
      // Split the text content into an array of lines
      const textContent  = textbox.textContent;
      
      const tempElement = document.createElement('span');
      document.body.appendChild(tempElement)
      tempElement.style.whiteSpace = 'nowrap';
      tempElement.style.visibility = 'hidden';
      tempElement.style.fontFamily = computedStyle.fontFamily;
      tempElement.style.fontSize = computedStyle.fontSize;
      
      // Split the text content into words
      const words = textContent.split(' ');
      
      // Initialize variables
      let currentLine = '';
      const lines = [];
      
      // Loop through each word
      for (const word of words) {
        // Add the word to the current line
        const testLine = currentLine ? currentLine + ' ' + word : word;
        
        // Set the text content of the temporary element to the test line
        tempElement.textContent = testLine;
        
        // Check if the test line exceeds the width of the text box
      if (tempElement.offsetWidth > textboxWidth) {

        // Add the current line to the lines array
        lines.push(currentLine);
        
        // Start a new line with the current word
        currentLine = word;
      } else {
        // Update the current line
        currentLine = testLine;
        }
      } 
    
      // Add the last line to the lines array
      lines.push(currentLine);
      
      textbox.textContent = '';
      
      // Iterate through each line and perform operations
      lines.forEach((line, index) => {
        
        tempElement.textContent = line
        
        // Perform desired operations on each line
        //console.log(`Line ${index + 1}: ${line}`, tempElement.offsetWidth, tempElement.offsetWidth % 2 == 0 ? `(onset)` : `(offset)`);
        
        const linebox = document.createElement('div');
        linebox.classList.add('.linebox');
        linebox.textContent = line;
        if (tempElement.offsetWidth % 2 == 1) {
          linebox.style.transform = 'translateX(-0.5px)';
        }
        textbox.appendChild(linebox);
      });
      //console.log(`colour was ${computedStyle.color}`)
    }
  });
});