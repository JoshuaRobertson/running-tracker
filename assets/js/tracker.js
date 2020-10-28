const goal = 30
let entries = []
const entriesWrapper = document.querySelector('#entries')

document.getElementById('target').innerText = goal

function addNewEntry (newEntry) {
  const listItem  = document.createElement('li')
  const listValue = document.createTextNode(newEntry.toFixed(1))

  entriesWrapper.removeChild(entriesWrapper.firstElementChild)
  listItem.appendChild(listValue)
  entriesWrapper.appendChild(listItem)
}

function reducer (total, currentValue) {
  return total + currentValue
}

function calcTotal () {
  const totalValue = entries.reduce(reducer).toFixed(1)

  document.getElementById('total').innerText = totalValue
  document.getElementById('progressTotal').innerText = totalValue
}

function calcAverage () {
  const average = (entries.reduce(reducer) / entries.length).toFixed(1)

  document.getElementById('average').innerText = average
}

function weeklyHigh () {
  const high = Math.max(...entries)
  document.getElementById('high').innerText = high
}

function handleSubmit (event) {
  event.preventDefault()

  const entry = Number(document.querySelector('#entry').value)

  if (!entry) return

  document.querySelector('[data-tracker-form]').reset()
  entries.push(entry)
  addNewEntry(entry)
  calcTotal()
  calcAverage()
  weeklyHigh()
}

const form = document.querySelector('[data-tracker-form]').addEventListener('submit', handleSubmit)
