
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");


updateTime();
function updateTime() {
    const now = new Date();
    let nowHour = now.getHours();
    let nowMin = now.getMinutes();
    let nowSec = now.getSeconds();
    let nowAmPm = nowHour >= 12 ? "PM" : "AM";
    nowHour = nowHour % 12 || 12;


    nowHour = String(nowHour).padStart(2, "0");
    nowMin = String(nowMin).padStart(2, "0");
    nowSec = String(nowSec).padStart(2, "0");
    console.log(nowHour, nowMin, nowSec);

    hours.textContent = nowHour;
    minutes.textContent = nowMin;
    seconds.textContent = nowSec;
    ampm.textContent = nowAmPm;
}
/* to update time every second */
setInterval(updateTime, 1000);


/* to setup wake lock */
let wakelock = null;

async function requestWakeLock() {
    try {
        wakelock = await navigator.wakeLock.request("screen");
        console.log("wake lock is active now ");

    } catch (e) {
        console.error(`${e.name} ,   ${e.message}`);
    }
}

document.addEventListener("DOMContentLoaded", requestWakeLock);

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        requestWakeLock();
    }
})
