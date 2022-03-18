function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
export function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  hours = hours % 24;

  if (hours > 0) {
    return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m ${padTo2Digits(
      seconds
    )}s`;
  } else if (minutes > 0) {
    return `${padTo2Digits(minutes)}m ${padTo2Digits(seconds)}s`;
  } else {
    return `${padTo2Digits(seconds)}s`;
  }
}
