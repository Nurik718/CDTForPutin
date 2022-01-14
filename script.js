document.addEventListener('DOMContentLoaded', () => {
    const birthday = new Date('Oct 7 2022 00:00:00')

    const daysVal = document.getElementById('days')
    const hoursVal = document.getElementById('hours')
    const minutesVal = document.getElementById('minutes')
    const secondsVal = document.getElementById('seconds')

    const daysValT = document.getElementById('daysT')
    const hoursValT = document.getElementById('hoursT')
    const minutesValT = document.getElementById('minutesT')
    const secondsValT = document.getElementById('secondsT')

    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
    }

    const TimeCount = () => {
        let now = new Date()
        let leftUntil = birthday - now

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24)
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60
        let seconds = Math.floor(leftUntil / 1000) % 60

        daysVal.textContent = days
        hoursVal.textContent = hours
        minutesVal.textContent = minutes
        secondsVal.textContent = seconds

        daysValT.textContent = declOfNum(days, ['день', 'дня', 'дней'])
        hoursValT.textContent = declOfNum(hours, ['час', 'часа', 'часов'])
        minutesValT.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут'])
        secondsValT.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд'])



    }
TimeCount()
    setInterval(TimeCount, 1000)

})