


const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");



function updateTime() {
    const now = new Date();
    let nowHour = now.getHours();
    let nowMin = now.getMinutes();
    let nowSec = now.getSeconds();
    let nowAmPm = "AM";
    if (nowHour == 0) {
        /* 12 am */
        nowHour = 12;
    }
    if (nowHour >= 12) {
        nowHour = nowHour - 12;
        nowAmPm = "PM";
    } else {
        nowAmPm = "AM";
    }
    nowHour = String(nowHour).padStart(2, "0");
    nowMin = String(nowMin).padStart(2, "0");
    nowSec = String(nowSec).padStart(2, "0");
    console.log(nowHour, nowMin, nowSec);

    hours.textContent = nowHour;
    minutes.textContent = nowMin;
    seconds.textContent = nowSec;
    ampm.textContent = nowAmPm;
}
setInterval(updateTime, 1000);
updateTime();