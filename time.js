const clock = document.getElementById("clock");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

const fonts = [
    "Poppins, sans-serif",
    "Roboto, sans-serif",
    "Open Sans, sans-serif",
    "Lato, sans-serif",
    "Montserrat, sans-serif",
    "Raleway, sans-serif",
    "Playfair Display, serif",
    "Merriweather, serif",
    "Oswald, sans-serif",
    "Source Sans Pro, sans-serif",
    "Nunito, sans-serif",
    "Inter, sans-serif"
];
let currentFontIndex = 0;

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

/* updating the fonts */
function updateFont() {
    document.body.style.fontFamily = fonts[currentFontIndex];
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    console.log(`changing font to ${fonts[currentFontIndex]}`);
}


updateTime();
/* to update time every second */
setInterval(updateTime, 1000);


/* enable if you need to change fonts */
setInterval(updateFont, 60000);


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

/* making the clock animate when tapped on the clock */


document.addEventListener("click", (e) => {

    if (!clock.contains(e.target)) {
        clock.style.animation = `clickClock 1s ease-in both`;
        /* after 3 seconds change to black again */
        setTimeout(() => {
            clock.style.animation = `clickClockReverse 1s ease-in both`;
        }, 3000);
    }


});

/* moving animation needs to be added  */
clock.addEventListener("click", (e) => {
    e.stopPropagation(); // to not let this click go to its parent elemets
  
    // clock.classList.toggle("movingAnimationEnable");

});


/* to enable or disable seconds */
seconds.addEventListener("click", () => {
    seconds.classList.toggle("visibility");
});