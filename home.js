let earningsParagraph = document.getElementById("earningsParagraph")
let currentWageParagraph = document.getElementById("currentWageParagraph")

let earnings = 0
let currentWage = 1

function updateParagraphs() {
  earnings = earnings + currentWage
  earningsParagraph.innerHTML = `Earnings: $${earnings}`
}

function buyRaise() {

  if (earnings >= 10) {
    earnings = earnings - 10
    currentWage++

    earningsParagraph.innerHTML = `Earnings: $${earnings}`
    currentWageParagraph.innerHTML = `Current Wage: $${currentWage}`
  }

}