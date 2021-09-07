import { getCalendar } from "./calendar"

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
}

function doCreateEvent(title: string) {
  const calendar = getCalendar()
  const now = new Date()
  calendar.createEvent(title, now, now)
}
