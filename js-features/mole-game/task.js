function findMole() {
    for (let i = 1; i < 10; i++) {
        let currentHole = getHole(i);
        currentHole.onclick = function() {
            if (currentHole.className.includes("hole_has-mole") === true) {
                const mole = document.getElementById("dead");
                mole.textContent++;
                if (parseFloat(mole.textContent) === 10) {
                    alert("Вы победили!");
                    mole.textContent = 0;
                    const miss = document.getElementById("lost");
                    miss.textContent = 0;
                }
            } else {
                const miss = document.getElementById("lost");
                miss.textContent++;
                if (parseFloat(miss.textContent) === 5) {
                    alert("Вы проиграли :(");
                    miss.textContent = 0;
                    const mole = document.getElementById("dead");
                    mole.textContent = 0;
                }
            }
        }
    }
}

function getHole(index) {
    return document.getElementById(`hole${index}`); 
}

findMole();