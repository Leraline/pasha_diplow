document.addEventListener('DOMContentLoaded', () => {

    const backMainBtn = document.querySelector('.back-btn');

    backMainBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('klklklkl');
        window.location.href = 'index.html';
    });
});