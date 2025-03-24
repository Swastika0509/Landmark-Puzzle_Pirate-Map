// Example of a base64-encoded message (the flag: "Treasure: flag_IET2526" is encoded)
var encodedFlagMessage = "VHJlYXN1cmU6IGZsYWdfSUVUMjUyNg==";

// Function to decode the base64 message
function decodeMessage(encodedMessage) {
    return atob(encodedMessage); // atob() decodes a base64-encoded string
}

// Handle the clicking on the map
document.getElementById("pirate-map").addEventListener("click", function() {
    // Get the current number of clicks
    let clicks = parseInt(this.getAttribute("data-clicks"));

    // Increment the click count
    clicks += 1;

    // Update the click count attribute
    this.setAttribute("data-clicks", clicks);

    // Check if the image has been clicked 20 times
    if (clicks === 20) {
        // Add the flipped class to the image to flip it (You can add a CSS class for the visual effect)
        this.classList.add("flipped");

        // Reveal the hidden message (decoding it here)
        revealFlagMessage();
    }
});

// Check if the treasure location is correct
function checkTreasure() {
    let coordinates = document.getElementById("coordinates").value;
    let result = document.getElementById("result");

    // Check if the entered coordinates match the expected answer
    if (coordinates === "12 N 8 W") {
        result.textContent = "Congratulations! You've found the treasure! (Click the treasure location ___ + ___ no. of times.)";
        result.style.color = "green";
    } else {
        result.textContent = "Sorry, that's not the correct location.";
        result.style.color = "red";
    }
}

// Reveal the scrambled and encoded message as a flag
function revealFlagMessage() {
    var flagMessage = decodeMessage(encodedFlagMessage);
    document.getElementById('flag-message').innerHTML = flagMessage;
    document.getElementById('flag-message').style.display = 'block';
}

// Disable right-click (context menu)
document.addEventListener("contextmenu", function(event){
    event.preventDefault();
});

// Disable specific key combinations (F12, Ctrl+Shift+I, Ctrl+Shift+C)
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') { // Ctrl+Shift+I
        event.preventDefault();
    }
    if (event.ctrlKey && event.shiftKey && event.key === 'C') { // Ctrl+Shift+C
        event.preventDefault();
    }
    if (event.key === 'F12') { // F12
        event.preventDefault();
    }
});

// Developer tools detection
(function() {
    var devtools = new Function('debugger');
    devtools();

    setInterval(function() {
        var before = new Date();
        devtools();
        var after = new Date();

        if (after - before > 100) {
            // Detected developer tools open
            alert("Developer tools are open. Please close them to continue.");
            window.location.reload();
        }
    }, 1000);
})();
