let inputText = document.getElementById('editor');
let storageText = localStorage.getItem('text');

inputText.textContent = storageText;

inputText.addEventListener('input', () => {
    let textTosave = document.getElementById('editor').value;
    localStorage.setItem('text', textTosave);
})