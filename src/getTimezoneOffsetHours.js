function getTimezoneOffsetHours() {
  const date = new Date();
  return date.getTimezoneOffset() / 60;
}

module.exports = getTimezoneOffsetHours;
