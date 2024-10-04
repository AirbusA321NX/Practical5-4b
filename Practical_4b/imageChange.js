// Get the select list and the image element
const imageSelector = document.getElementById('image-selector');
const displayImage = document.getElementById('display-image');

// Add event listener for change event on the select list
imageSelector.addEventListener('change', function() {
    // Get the selected option's value (src) and text (alt)
    const selectedOption = imageSelector.options[imageSelector.selectedIndex];
    const newSrc = selectedOption.value;
    const newAlt = selectedOption.text;

    // Set the src and alt attributes of the image
    displayImage.src = newSrc;
    displayImage.alt = newAlt;
});
