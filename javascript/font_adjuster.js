// Get references to the buttons
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');

// Define the default font size and a minimum and maximum font size
let fontSize = 16; // Default font size in pixels
const minFontSize = 10;
const maxFontSize = 24;

// Function to set the font size
function setFontSize(size) {
    document.body.style.fontSize = size + 'px';
}

// Event listeners for the buttons
increaseFontBtn.addEventListener('click', () => {
    console.log('A+ button clicked');
    if (fontSize < maxFontSize) {
        fontSize += 2; // Increase font size by 2 pixels
        setFontSize(fontSize);
    }
});

decreaseFontBtn.addEventListener('click', () => {
    console.log('A- button clicked');
    if (fontSize > minFontSize) {
        fontSize -= 2; // Decrease font size by 2 pixels
        setFontSize(fontSize);
    }
});


// Set the initial font size
setFontSize(fontSize);
