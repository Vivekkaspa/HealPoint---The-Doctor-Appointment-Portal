// dateUtils.js

// Helper function to parse DD-MM-YY date
exports.parseDateString = function(dateString) {
    const [day, month, year] = dateString.split("-").map(Number);
    return new Date(year + 2000, month - 1, day); // Adjust year for "YY"
  };
  