document.getElementById('contact').addEventListener('click', () => {
    document.getElementById('j-modal').classList.add('show-j-modal');
})
document.getElementById('close-j-modal').addEventListener('click', () => {
    document.getElementById('j-modal').classList.remove('show-j-modal');
})