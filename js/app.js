/* ========================================== */
/* DDC PORTAL - MAIN JAVASCRIPT               */
/* ========================================== */
document.addEventListener("DOMContentLoaded", function() {
    
    // Dynamically grab the native Collibra domain
    const baseURL = `${window.location.protocol}//${window.location.host}`;

    // Call the Collibra Active Session API
    fetch(`${baseURL}/rest/2.0/auth/sessions/current?include=user`)
      .then(response => response.json())
      .then(({ user }) => {
          
        // 1. Grab their names
        const firstName = user.firstName || "";
        const lastName = user.lastName || "";
        
        // 2. Format the display name (Fallback to their username if their profile is empty)
        const displayName = (firstName || lastName) ? `${firstName} ${lastName}`.trim() : user.userName;

        // 3. Inject the name into the HTML
        document.getElementById('name').textContent = displayName;
        
      })
      .catch((error) => {
        console.error("Failed to load user session:", error);
        
        // Fallback UI if the API call fails
        document.getElementById('name').textContent = 'User';
      });
});