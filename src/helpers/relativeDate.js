export function relativeDate(date) {
  const delta = Math.round((+new Date() - new Date(date)) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (delta < 30) {
    return "just now";
  } else if (delta < minute) {
    return delta + " seconds ago";
  } else if (delta < 2 * minute) {
    return "a minute ago";
  } else if (delta < hour) {
    return Math.floor(delta / minute) + " minutes ago";
  } else if (Math.floor(delta / hour) == 1) {
    return "1 hour ago";
  } else if (delta < day) {
    return Math.floor(delta / hour) + " hours ago";
  } else if (delta < day * 2) {
    return "yesterday";
  } else {
    return delta + " days ago";
  }
}
