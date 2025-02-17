function countCliker() {
    let image = document.getElementById("cookie");
    image.onclick = function() {
        const count = document.getElementById("clicker__counter");
        count.textContent++;
        if (parseFloat(count.textContent) % 2 != 0) {
            image.width += 20;
            image.height += 20;
        } else {
            image.width -= 20;
            image.height -= 20;
        }
    }
}

countCliker();