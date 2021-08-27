let calendar: GoogleAppsScript.Calendar.Calendar

function getCalendar() {
  if (calendar !== undefined) {
    return calendar
  }
  const userProperties = PropertiesService.getUserProperties()
  const calendarId = userProperties.getProperty("CALENDAR_ID")
  calendar = CalendarApp.getCalendarById(calendarId)
  return calendar
}

function getMomentEvents(): GoogleAppsScript.Calendar.CalendarEvent[] {
  const now = new Date()
  console.log(now)
  const oneDayAgo = new Date()
  oneDayAgo.setDate(now.getDate() - 1)
  console.log(oneDayAgo)
  const c = getCalendar()
  return c
    .getEvents(oneDayAgo, now)
    .filter(
      (event) => event.getStartTime().getTime() === event.getEndTime().getTime()
    )
}

export { getCalendar, getMomentEvents }
