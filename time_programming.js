const timeContainer = document.getElementById("time-container")
const birthDay = "12-10-1815"
const birthDayDate = new Date(birthDay)
const intlNumberFormatter = new Intl.NumberFormat("en-US")

setInterval(() => {
    const now = new Date()
    const difference = Math.floor((now.getTime() - birthDayDate.getTime()) / 1000)

    timeContainer.innerText = intlNumberFormatter.format(difference)
}, 1000)

