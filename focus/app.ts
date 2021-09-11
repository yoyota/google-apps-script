import { getCalendar, getMomentEvents } from "./calendar"

function main() {
  const calendar = getCalendar()
  const events = getMomentEvents()
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
          { description: prev.getDescription() }
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
