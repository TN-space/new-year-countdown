const days = document.getElementById("days"),
  hours = document.getElementById("hours"),
  minutes = document.getElementById("minutes"),
  seconds = document.getElementById("seconds"),
  countdown = document.getElementById("countdown"),
  loading = document.getElementById("loading"),
  year = document.getElementById("year");

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Set year in background
year.innerText = currentYear + 1;

// Update countdown
function updateCountdown() {
  const currentTime = new Date();

  // time difference in milliseconds
  const timeDifference = newYearTime - currentTime;

  // divide by 1000 to get the seconds, divide by 60 to get minutes, another 60 for hours, and 24 for days
  const d = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
  const h = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  const m = Math.floor(timeDifference / 1000 / 60) % 60;
  const s = Math.floor(timeDifference / 1000) % 60;

  // add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
}

// Show spinner/loading before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = "flex";
}, 1000);

// calling updateCountdown every 1000 milliseconds/1 second
setInterval(updateCountdown, 1000);
