// Wait for the document to be fully loaded before attaching event listeners
console.log("homeScript file working");

document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to the signout button
    const signoutButton = document.getElementById('signOut');
    signoutButton.addEventListener('click', function () {
        // Send a request to the server to sign out the user (typically an AJAX request)
        // After successful signout, redirect to the login page
        // Example:
        fetch('/home', {
            method: 'POST', // Use POST or appropriate method
            credentials: 'same-origin' // Include cookies in the request
        })
        .then(response => {
            if (response.ok) {
                // Redirect to the login page
                window.location.href = '/'; // Change the URL as needed
            } else {
                // Handle errors if needed
            }
        })
        .catch(error => {
            console.error('Error during signout:', error);
        });
    });
});
