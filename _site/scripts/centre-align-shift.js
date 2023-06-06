window.addEventListener('load', function() {
    // Create temporary element to test line lengths
    const tempElement = document.createElement('span');
    tempElement.style.whiteSpace = 'nowrap';
    tempElement.style.visibility = 'hidden';
  
    // Get all textbox elements
    const textboxes = document.querySelectorAll('.textbox');
  
    // Loop through textboxes replacing text contents with lineboxes
    textboxes.forEach(textbox => {
  
      // Get the computed style of the textbox
      const computedStyle = window.getComputedStyle(textbox);
      
      // Make temp elem match textbox stylings
      tempElement.style.fontFamily = computedStyle.fontFamily;
      tempElement.style.fontSize = computedStyle.fontSize;
      document.body.appendChild(tempElement)
      
      // Get the width of the textbox
      const textboxWidth = textbox.clientWidth - 4;
      //console.log(textboxWidth, computedStyle.width)
  
      // Split the text content into words
      const words = textbox.textContent.split(' ');
      
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
        if (tempElement.offsetWidth >= textboxWidth) {
          
          // Add the current line to the lines array
          lines.push(currentLine);
          
          console.log(`Line: ${testLine} len ${tempElement.offsetWidth} longer than ${textboxWidth}`);
          
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
        if (computedStyle.textAlign === 'center' && tempElement.offsetWidth % 2 == 1) {
          linebox.style.transform = 'translateX(-0.5px)';
        }
        //if (tempElement.offsetWidth > textboxWidth) {
        //  linebox.style.offsetWidth = tempElement.offsetWidth
        //  console.log(line, tempElement.offsetWidth)
        //}
        textbox.appendChild(linebox);
      });
        //console.log(`colour was ${computedStyle.color}`)
    });
    //tempElement.textContent = 'Lorem ipsum dolor sit amet,';
    //console.log(`Line: Lorem ipsum dolor sit amet, len ${tempElement.offsetWidth}`);
    
    document.body.removeChild(tempElement)
});