window.addEventListener('load', function() {
    // Create temporary element to test line lengths
    const tempElement = document.createElement('span');
    tempElement.style.whiteSpace = 'nowrap';
    tempElement.style.visibility = 'hidden';
  
    // Get all positionbox elements
    const positionboxes = document.querySelectorAll('p');
  
    // Loop through positionboxes replacing text contents with lineboxes
    positionboxes.forEach(positionbox => {
  
        // Get the computed style of the positionbox
        var computedStyle = window.getComputedStyle(positionbox);
        
        // Make temp elem match positionbox stylings
        tempElement.style.fontFamily = computedStyle.fontFamily;
        tempElement.style.fontSize = computedStyle.fontSize;
        document.body.appendChild(tempElement)
        
        const lines = [];
        let currentLine = '';
        if (computedStyle.width === '0px') {
            tempElement.textContent = positionbox.textContent;
            var content = positionbox.closest('.content');
            positionbox.style.width = Math.min(tempElement.offsetWidth, content.clientWidth) + "px";
            //console.log(tempElement.offsetWidth, content.clientWidth);
            tempElement.textContent = '';
            computedStyle = window.getComputedStyle(positionbox);
        }

        // Get the width of the positionbox
        const positionboxWidth = positionbox.clientWidth;
        //console.log(positionboxWidth, computedStyle.width)
        
        // Split the text content into words
        const words = positionbox.textContent.trim().split(' ');
        
        // Initialize variables
        //console.log(positionbox.textContent)
        // Loop through each word
        for (const word of words) {
            // Add the word to the current line
            const testLine = currentLine ? currentLine + ' ' + word : word;
            
            // Set the text content of the temporary element to the test line
            tempElement.textContent = testLine;

            // Check if the test line exceeds the width of the text box
            if (tempElement.offsetWidth > positionboxWidth) {
                // Add the current line to the lines array
                lines.push(currentLine);
                
                //console.log(`Line: ${testLine} len ${tempElement.offsetWidth} longer than ${positionboxWidth}`);
                
                // Start a new line with the current word
                currentLine = word;

            } else if (word.includes("\n")) {
                lines.push(currentLine);
                currentLine = "";

            } else {
                // Update the current line
                currentLine = testLine;
            }
        }
        
        // Add the last line to the lines array
        lines.push(currentLine);
        
        const childNodes = positionbox.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            const node = childNodes[i];
            if (node.nodeType === Node.TEXT_NODE) {
                positionbox.removeChild(node);
            }
        }
        
        // Iterate through each line and perform operations
        lines.forEach((line, index) => {
          
            tempElement.textContent = line
            
            // Perform desired operations on each line
            //console.log(`Line ${index + 1}: ${line}`, tempElement.offsetWidth, tempElement.offsetWidth % 2 == 0 ? `(onset)` : `(offset)`);
            
            const linebox = document.createElement('div');
            linebox.classList.add('.linebox');
            linebox.textContent = line;
            //console.log(tempElement.offsetWidth % 2, parseInt(computedStyle.width, 10) % 2)
            if (computedStyle.textAlign === 'center' && tempElement.offsetWidth % 2 == (parseInt(computedStyle.width, 10) + 1) % 2) {
                linebox.style.transform = 'translateX(-0.5px)';
            }
            //if (tempElement.offsetWidth > positionboxWidth) {
            //  linebox.style.offsetWidth = tempElement.offsetWidth
            //  console.log(line, tempElement.offsetWidth)
            //}
            positionbox.appendChild(linebox);
        });
          //console.log(`colour was ${computedStyle.color}`)
    });
    //tempElement.textContent = 'Lorem ipsum dolor sit amet,';
    //console.log(`Line: Lorem ipsum dolor sit amet, len ${tempElement.offsetWidth}`);
    
    document.body.removeChild(tempElement)
});