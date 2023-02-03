document.addEventListener('DOMContentLoaded', () => {

    const wordsParent = document.querySelector('.dictionary-container');
    const plusBtn = document.querySelector('.plus-btn');
    const wordInput = document.querySelector('.add-word');
    const backBtn = document.querySelector('.back-btn');
    const importBtn = document.querySelector('.import-btn');
    const exportBtn = document.querySelector('.export-btn');

    // Add and remove words

    plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (wordInput.value != '') {
            console.log('ok');
            const wordBox = document.createElement('div');
            wordBox.classList.add('logField', 'word');
            wordBox.textContent = wordInput.value;
            wordsParent.append(wordBox);
            wordInput.value = '';

            wordBox.addEventListener('mouseenter', () => {
               wordBox.classList.add('red');
            });

            wordBox.addEventListener('mouseleave', () => {
                wordBox.classList.remove('red');
             });

            wordBox.addEventListener('click', () => {
                wordBox.remove();
            });

        } else {
            console.log('ne ok');
        }
    });

    // Bar buttons

    backBtn.addEventListener('click', () => {
        window.location.href = 'menu.html';
    });
});