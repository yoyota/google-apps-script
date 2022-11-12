function getMomentEvents(
  c: GoogleAppsScript.Calendar.Calendar
): GoogleAppsScript.Calendar.CalendarEvent[] {
  const now = new Date()
  const oneDayAgo = new Date()
  oneDayAgo.setDate(now.getDate() - 1)
  return c
    .getEvents(oneDayAgo, now)
    .filter(
      (event) => event.getStartTime().getTime() === event.getEndTime().getTime()
    )
}

// eslint-disable-next-line import/prefer-default-export
export { getMomentEvents }
