// Select the select element out of the DOM
const themeSelector = document.getElementById('theme-select');

// Create the changeTheme function
function changeTheme() {
    // Check to see what option is currently selected on our theme selector
    const selectedTheme = themeSelector.value;
    const logo = document.querySelector('.university-logo');
    
    // If it is "dark"
    if (selectedTheme === 'dark') {
        // Add the dark class to body
        document.body.classList.add('dark');  
        logo.src = 'byui-logo_white.png';
    } 
    // If it is not "dark" 
    else {
        // Remove the dark class from the body element
        document.body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

// Add an event listener to the selected element for change event
themeSelector.addEventListener('change', changeTheme);