let inputText = document.getElementById('editor');
let storageText = JSON.parse(localStorage.getItem('text'));

if (storageText !== null && storageText !== '') {
    inputText.textContent = storageText;
}

inputText.addEventListener('mouseleave', () => {
    let textTosave = document.getElementById('editor').value;
    localStorage.setItem('text', JSON.stringify(textTosave));
})