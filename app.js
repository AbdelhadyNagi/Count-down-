const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const days = document.querySelector('.days')
const hours = document.querySelector('.hours')
const mins = document.querySelector('.mins')
const secs = document.querySelector('.secs')
const giveaway = document.querySelector('.giveaway')

const commingDate = new Date(2023, 1, 1, 0, 0)
const year = commingDate.getFullYear()
const month = months[commingDate.getMonth()]
const day = commingDate.getDate()
const weekDay = weekdays[commingDate.getDay()]
const hour = commingDate.getHours()
const min = commingDate.getMinutes()

let countTime = setInterval(() => {
  const currentDate = new Date()
  const timer = commingDate - currentDate

  if (timer >= 0) {
    // days Counter
    let daysTimer = timer / (1000 * 60 * 60 * 24)
    let daysCounter = Math.floor(daysTimer)
    days.innerHTML = daysCounter < 10 ? `0${daysCounter}` : daysCounter
    // Hours Counter
    let hoursTimer = (daysTimer - daysCounter) * 24
    let hoursCounter = Math.floor(hoursTimer)
    hours.innerHTML = hoursCounter < 10 ? `0${hoursCounter}` : hoursCounter
    // Mins Counter
    let minsTimer = (hoursTimer - hoursCounter) * 60
    let minsCounter = Math.floor(minsTimer)
    mins.innerHTML = minsCounter < 10 ? `0${minsCounter}` : minsCounter
    // Secs Counter
    let secsTimer = (minsTimer - minsCounter) * 60
    let secsCounter = Math.floor(secsTimer)
    secs.innerHTML = secsCounter < 10 ? `0${secsCounter}` : secsCounter
  } else {
    clearInterval(countTime)
    days.innerHTML = `00`
    hours.innerHTML = `00`
    mins.innerHTML = `00`
    secs.innerHTML = `00`
  }
})

// give away...
giveaway.textContent = `Give away ends on ${weekDay}, ${day} of ${month} ${year}, at 0${hour}:0${min}am.`
