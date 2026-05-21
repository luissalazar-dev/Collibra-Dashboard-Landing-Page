/* ========================================== */
/* DYNAMIC URL GENERATOR                      */
/* ========================================== */
document.addEventListener("DOMContentLoaded", function() {
    let collibraBaseUrl = "";
    
    try {
        // 1. Check who loaded this iframe
        if (document.referrer) {
            // 2. Extract just the root domain
            const referrerUrl = new URL(document.referrer);
            collibraBaseUrl = referrerUrl.origin; 
        } else {
            // Fallback in case browser privacy settings block the referrer
            collibraBaseUrl = ""; 
        }
        
        // 3. Find every link on the page that starts with a "/"
        const links = document.querySelectorAll('a[href^="/"]');
        
        // 4. Attach the dynamic Collibra environment domain to the front of each link
        links.forEach(link => {
            const originalPath = link.getAttribute("href");
            link.setAttribute("href", collibraBaseUrl + originalPath);
        });
        
    } catch (error) {
        console.error("Could not generate dynamic URLs:", error);
    }
});