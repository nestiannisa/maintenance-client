function timeSince(timeStamp) {
  var d = new Date(timeStamp).toLocaleString("en-US", {timeZone: "America/New_York"})
    return d
}

export { timeSince };