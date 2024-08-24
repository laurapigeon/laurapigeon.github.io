window.addEventListener('load', function() {
    // Create temporary element to test line lengths
    const tempElement = document.createElement('span');
    tempElement.style.whiteSpace = 'nowrap';
    tempElement.style.visibility = 'hidden';
  
    // Get all paragraph elements
    const paragraphs = document.querySelectorAll('p');
  
    // Loop through paragraphs replacing text contents with lineboxes
    paragraphs.forEach(paragraph => {
        //console.log(paragraph.textContent);
        if (paragraph.textContent.trim().length === 0) {
            //console.log("see its going now bye");
            return;
        }
  
        // Get the computed style of the paragraph
        var computedStyle = window.getComputedStyle(paragraph);
        
        // Make temp elem match paragraph stylings
        tempElement.style.fontFamily = computedStyle.fontFamily;
        tempElement.style.fontSize = computedStyle.fontSize;
        document.body.appendChild(tempElement)
        
        const lines = [];
        let currentLine = '';
        if (computedStyle.width === '0px') {
            tempElement.textContent = paragraph.textContent;
            var content = paragraph.closest('#content')
            var contentStyle = window.getComputedStyle(content)
            var contentWidth = content.clientWidth - parseFloat(contentStyle.paddingLeft) - parseFloat(contentStyle.paddingRight);
            paragraph.style.width = Math.min(tempElement.offsetWidth, contentWidth) + "px";
            //console.log(tempElement.offsetWidth, contentWidth);
            tempElement.textContent = '';
            computedStyle = window.getComputedStyle(paragraph);
        }

        // Get the width of the paragraph
        const paragraphWidth = paragraph.clientWidth;
        //console.log(paragraphWidth, computedStyle.width)
        
        // Split the text content into words
        const words = paragraph.textContent.trim().split(' ');
        
        // Initialize variables
        //console.log(paragraph.textContent)
        // Loop through each word
        for (const word of words) {
            // Add the word to the current line
            const testLine = currentLine ? currentLine + ' ' + word : word;
            
            // Set the text content of the temporary element to the test line
            tempElement.textContent = testLine;

            // Check if the test line exceeds the width of the text box
            if (tempElement.offsetWidth > paragraphWidth) {
                // Add the current line to the lines array
                lines.push(currentLine);
                
                //console.log(`Line: ${testLine} len ${tempElement.offsetWidth} longer than ${paragraphWidth}`);
                
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
        
        const childNodes = paragraph.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
            const node = childNodes[i];
            if (node.nodeType === Node.TEXT_NODE) {
                paragraph.removeChild(node);
            }
        }
        
        // Iterate through each line and perform operations
        lines.forEach((line, index) => {
          
            tempElement.textContent = line
            
            // Perform desired operations on each line
            //console.log(`Line ${index + 1}: ${line}`, tempElement.offsetWidth, tempElement.offsetWidth % 2 == 0 ? `(onset)` : `(offset)`);
            
            const linebox = document.createElement('div');
            linebox.classList.add('linebox');
            linebox.textContent = line;
            //console.log(tempElement.offsetWidth % 2, parseInt(computedStyle.width, 10) % 2)
            if (computedStyle.textAlign === 'center' && tempElement.offsetWidth % 2 == (parseInt(computedStyle.width, 10) + 1) % 2) {
                linebox.style.transform = 'translateX(-0.5px)';
            }
            //if (tempElement.offsetWidth > paragraphWidth) {
            //  linebox.style.offsetWidth = tempElement.offsetWidth
            //  console.log(line, tempElement.offsetWidth)
            //}
            paragraph.appendChild(linebox);
        });
          //console.log(`colour was ${computedStyle.color}`)
    });
    //tempElement.textContent = 'Lorem ipsum dolor sit amet,';
    //console.log(`Line: Lorem ipsum dolor sit amet, len ${tempElement.offsetWidth}`);
    
    document.body.removeChild(tempElement)
});