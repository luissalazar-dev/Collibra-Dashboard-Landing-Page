document.addEventListener("DOMContentLoaded", async function() {
    
    // Target our new top header span
    const greetingElement = document.getElementById("user-greeting");

    try {
        // Call the Collibra internal API 
        const response = await fetch('/rest/2.0/users/current', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            const userData = await response.json();
            
            // Try to use their first name, fallback to their username
            const userName = userData.firstName || userData.userName; 
            
            // Inject the simplified greeting into the top bar
            greetingElement.innerText = `Welcome, ${userName}`;
        } else {
            console.warn("API Call succeeded, but user was not found.");
            greetingElement.innerText = "Welcome";
        }
    } catch (error) {
        console.error("Failed to fetch Collibra user:", error);
        greetingElement.innerText = "Welcome";
    }
});