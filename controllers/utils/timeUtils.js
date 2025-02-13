// Helper function to parse HH:mm time
exports.parseTimeString = function(timeString) {
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  return date;
};

// Helper function to check if time is between two other times
exports.isTimeBetween = function(time, startTime, endTime) {
  return time >= startTime && time <= endTime;
};
