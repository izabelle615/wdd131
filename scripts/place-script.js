// Function to calculate Wind Chill
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    }
    return "N/A";
}

// Static values for testing
const temperature = -5;  // °C
const windSpeed = 10;    // km/h

// Calculate windchill and update the page
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("windchill").textContent = windChill;

// Update footer with current year and last modified date
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
