function countdown() {
    const currentSecond = document.getElementById("timer");
    currentSecond.textContent--;
    if (parseFloat(currentSecond.textContent) === 0) {
        clearInterval(1);
        alert("Вы победили в конкурсе!");
    }
}

setInterval(countdown, 1000);