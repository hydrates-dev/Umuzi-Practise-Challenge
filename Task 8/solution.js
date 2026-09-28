function convertToTime(num) {
  const hours = Math.floor(num/60);
  const minutes = num % 60;

  const solveHours = hours === 1 ? "hour" : "hours";
  const solveMinutes = minutes === 1 ? "minute" : "minutes";

  return `${hours} ${solveHours}, ${minutes} ${solveMinutes}`

}
