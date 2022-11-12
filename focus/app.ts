/* eslint-disable no-use-before-define */
import { getMomentEvents } from "./calendar"

function main() {
  const dailyCalendar = CalendarApp.getCalendarById(
    "04qk3cmbmdnc2o9qvp3k67b3fc@group.calendar.google.com"
  )
  createNewDailyEvents(dailyCalendar)
}

function createNewDailyEvents(calendar: GoogleAppsScript.Calendar.Calendar) {
  const events = getMomentEvents(calendar)
  events.forEach(
    (
      curr: GoogleAppsScript.Calendar.CalendarEvent,
      i: number,
      arr: GoogleAppsScript.Calendar.CalendarEvent[]
    ) => {
      if (curr.getTitle() === "end" && i !== 0) {
        const prev = arr[i - 1]
        calendar.createEvent(
          prev.getTitle(),
          prev.getStartTime(),
          curr.getEndTime(),
          { location: prev.getLocation() }
        )
      }
      curr.deleteEvent()
    }
  )
}

function createTrigger() {
  const triggers = ScriptApp.getProjectTriggers()
  triggers.forEach((trigger) => ScriptApp.deleteTrigger(trigger))

  ScriptApp.newTrigger("main")
    .timeBased()
    .everyDays(1)
    .atHour(3)
    .inTimezone("Asia/Seoul")
    .create()
}

export {}
