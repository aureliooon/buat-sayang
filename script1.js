const startTime = new Date("2024-08-27T00:00:00").getTime(); // Tanggal awal

function updateTimer() {
  const now = new Date().getTime();
  const elapsedTime = now - startTime; // Hitung waktu berlalu

  if (elapsedTime >= 0) {
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }
}

setInterval(updateTimer, 1000);