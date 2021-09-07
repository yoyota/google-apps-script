let calendar: GoogleAppsScript.Calendar.Calendar

function getCalendar() {
  if (calendar !== undefined) {
    return calendar
  }
  const calendars = CalendarApp.getOwnedCalendarsByName("daily")
  if (calendars.length !== 1) {
    throw new Error("Too many 'daily' calendar")
  }
  ;[calendar] = calendars
  return calendar
}

function getMomentEvents(): GoogleAppsScript.Calendar.CalendarEvent[] {
  const now = new Date()
  const oneDayAgo = new Date()
  oneDayAgo.setDate(now.getDate() - 1)
  const c = getCalendar()
  return c
    .getEvents(oneDayAgo, now)
    .filter(
      (event) => event.getStartTime().getTime() === event.getEndTime().getTime()
    )
}

export { getCalendar, getMomentEvents }
